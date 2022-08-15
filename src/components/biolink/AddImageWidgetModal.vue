<template>
    <div ref="imageWidgetModal"
         class="modal fade"
         id="imageWidgetModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="exampleModalLabel">Add Image Widget</h5>
                    <button type="button"
                            class="btn-icon btn-icon-transparent"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group d-flex justify-content-center">
                        <ImageUploader class="width-200 height-207" @getFile="getImageFile"/>
                    </div>
                    <div class="form-group">
                        <div :class="`form-floating ${formData.type.length ? 'active' : ''}`">
                            <select id="type"
                                    class="form-select input-md"
                                    aria-label="Default select example"
                                    v-model="formData.type">
                                <option value="Default">Default</option>
                                <option value="Avatar">Avatar</option>
                            </select>
                            <label for="type">Type</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div :class="`form-floating ${formData.destinationUrl.length ? 'active' : ''}`">
                            <input
                                id="destinationUrl"
                                type="text"
                                class="form-control input-md"
                                placeholder="Destination Url (Optional)"
                                v-model="formData.destinationUrl"
                            />
                            <label for="destinationUrl">Destination Url (Optional)</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary-close" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary text-white" @click="addImage">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import {Modal} from 'bootstrap';
    import CloseIcon from '@/components/icons/CloseIcon';
    import ImageUploader from "@/components/uploader/ImageUploader";

    export default {
        name: 'AddImageWidgetModal',
        components: {ImageUploader, CloseIcon},
        emits: ['addImageWidget'],
        setup(props, {emit}) {
            const imageWidgetModal = ref(null);
            const formData = ref({
                src: '',
                type: 'Default',
                destinationUrl: ''
            })

            const getImageFile = (file) => {
                formData.value.src = URL.createObjectURL(file);
            }
            const addImage = () => {
                emit('addImageWidget', formData.value);
                Modal.getInstance(imageWidgetModal.value)?.hide();
            }

            return {
                imageWidgetModal,
                formData,
                addImage,
                getImageFile
            }
        }
    }
</script>