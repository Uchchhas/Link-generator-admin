<template>
    <div
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive"
        @dragover.prevent
        @drop.prevent="dropFile"
        :class="{ 'active-dropzone': active }"
        class="dropzone"
    >
        <div v-if="imageUrl" class="dropzone-preview">
            <img :src="imageUrl" alt="Image"/>
        </div>
        <div v-else class="dropzone-label">
            <span>Drag & Drop File</span>
            <span>OR</span>
            <label for="dropzoneFile">Select File</label>
        </div>
        <button v-if="imageUrl" type="button" class="clear-file" @click="clearFile">
            <i class="feather-x"/>
        </button>
        <input
            type="file"
            id="dropzoneFile"
            class="dropzoneFile"
            @change="selectedFile"
        />
    </div>
</template>

<script>
    import {ref} from 'vue';

    export default {
        name: 'ImageUploader',
        emits: ['getFile'],
        setup(props, {emit}) {
            const imageUrl = ref(null);
            const file = ref(null);
            const active = ref(false);

            const toggleActive = () => {
                active.value = !active.value;
            };
            const dropFile = (e) => {
                toggleActive();
                file.value = e.dataTransfer.files[0];
                imageUrl.value = URL.createObjectURL(file.value);
                emit('getFile', file.value);
            }
            const selectedFile = (e) => {
                file.value = e.target.files[0];
                imageUrl.value = URL.createObjectURL(file.value);
                emit('getFile', file.value);
            };
            const clearFile = () => {
                file.value = null;
                imageUrl.value = null;
                emit('getFile', '');
            }

            return {imageUrl, active, toggleActive, dropFile, selectedFile, clearFile};
        }
    }
</script>

<style scoped lang="scss">
    .dropzone {
        width: 150px;
        height: 150px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        border: 2px dashed var(--color-border-2);
        background-color: var(--bs-white);
        transition: 0.3s;

        &-label {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            transition: 0.35s;

            label {
                padding: 5px 12px;
                margin-top: 5px;
                color: var(--bs-white);
                font-size: 14px;
                border-radius: 8px;
                background-color: var(--color-primary);
                transition: 0.3s;
            }
        }

        &-preview {
            width: 100%;
            height: 100%;
            text-align: center;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        input {
            display: none;
        }

        .clear-file {
            width: 20px;
            height: 20px;
            position: absolute;
            top: -6px;
            right: -6px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--bs-white);
            font-size: 12px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            background-color: var(--color-danger);
        }

        &:hover {
            border-color: var(--color-primary);
            background-color: var(--color-primary-lighter);
        }
    }

    .active-dropzone {
        background-color: var(--color-primary-lighter);
    }
</style>