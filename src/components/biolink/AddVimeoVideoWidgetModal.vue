<template>
    <div ref="vimeoVideoWidgetModal"
         class="modal fade"
         id="vimeoVideoWidgetModal"
         tabindex="-1"
         aria-labelledby="vimeoVideoWidgetModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="vimeoVideoWidgetModalLabel">Add Vimeo Widget</h5>
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
                            id="vimeoUrl"
                            type="url"
                            class="form-control input-md"
                            placeholder="Vimeo url"
                            v-model="formData.url"
                        />
                        <label for="vimeoUrl">Vimeo url</label>
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
                            @click="addVimeoVideo">
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
        name: 'AddVimeoVideoWidgetModal',
        components: {CloseIcon},
        emits: ['addVimeoWidget'],
        setup(props, {emit}) {
            const vimeoVideoWidgetModal = ref(null);
            const formData = ref({
                url: ''
            });

            const addVimeoVideo = () => {
                emit('addVimeoWidget', formData.value);
                Modal.getInstance(vimeoVideoWidgetModal.value)?.hide();
            }

            return {
                vimeoVideoWidgetModal,
                addVimeoVideo,
                formData
            }
        }
    }
</script>