<template>
    <div ref="soundcloudVideoWidgetModal"
         class="modal fade"
         id="soundcloudVideoWidgetModal"
         tabindex="-1"
         aria-labelledby="soundcloudVideoWidgetModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="soundcloudVideoWidgetModalLabel">Add Soundcloud Video</h5>
                    <button type="button"
                            class="btn-icon btn-icon-transparent"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div class="modal-body">
                    <div :class="`form-floating mb-3 ${formData.url.length ? 'active' : ''}`">
                        <input
                            id="soundcloudUrl"
                            type="url"
                            class="form-control input-md"
                            placeholder="Soundcloud url"
                            v-model="formData.url"
                        />
                        <label for="soundcloudUrl">Soundcloud url</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button"
                            class="btn btn-secondary-close"
                            data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button"
                            class="btn btn-primary text-white"
                            @click="addSoundcloudVideo">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import CloseIcon from '@/components/icons/CloseIcon';
    import {Modal} from "bootstrap";

    export default {
        name: 'AddSoundcloudWidgetModal',
        components: {CloseIcon},
        emits: ['addSoundcloudWidget'],
        setup(props, {emit}) {
            const soundcloudVideoWidgetModal = ref(null);
            const formData = ref({
                url: ''
            })

            const addSoundcloudVideo = () => {
                emit('addSoundcloudWidget', formData.value);
                Modal.getInstance(soundcloudVideoWidgetModal.value)?.hide();
            }

            return {
                soundcloudVideoWidgetModal,
                addSoundcloudVideo,
                formData
            }
        }
    }
</script>