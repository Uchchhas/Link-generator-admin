<template>
    <div ref="youtubeVideoWidgetModal"
         class="modal fade"
         id="youtubeVideoWidgetModal"
         tabindex="-1"
         aria-labelledby="youtubeVideoWidgetModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="youtubeVideoWidgetModalLabel">Add Youtube Widget</h5>
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
                            id="youtubeUrl"
                            type="url"
                            class="form-control input-md"
                            placeholder="Youtube url"
                            v-model="formData.url"
                        />
                        <label for="youtubeUrl">Youtube url</label>
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
                            @click="addYoutubeVideo">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CloseIcon from '@/components/icons/CloseIcon';
    import {ref} from 'vue';
    import {Modal} from "bootstrap";

    export default {
        name: 'AddYoutubeVideoWidgetModal',
        components: {CloseIcon},
        emits: ['addYoutubeWidget'],
        setup(props, {emit}) {
            const youtubeVideoWidgetModal = ref(null);
            const formData = ref({
                url: ''
            });

            const addYoutubeVideo = () => {
                emit('addYoutubeWidget', formData.value);
                Modal.getInstance(youtubeVideoWidgetModal.value)?.hide();
            }

            return {
                youtubeVideoWidgetModal,
                addYoutubeVideo,
                formData
            }
        }
    }
</script>