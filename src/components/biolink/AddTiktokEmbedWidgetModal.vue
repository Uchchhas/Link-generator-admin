<template>
    <div ref="tiktokWidgetModal"
         class="modal fade"
         id="tiktokWidgetModal"
         tabindex="-1"
         aria-labelledby="tiktokWidgetModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="tiktokWidgetModalLabel">Add Tiktok Widget</h5>
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
                            id="tiktokUrl"
                            type="url"
                            class="form-control input-md"
                            placeholder="Tiktok url"
                            v-model="formData.url"
                        />
                        <label for="tiktokUrl">Tiktok url</label>
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
                            @click="addTiktokEmbedWidget">
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
        name: 'AddTiktokEmbedWidgetModal',
        components: {CloseIcon},
        emits: ['addTiktokWidget'],
        setup(props, {emit}) {
            const tiktokWidgetModal = ref(null);
            const formData = ref({
                url: ''
            });

            const addTiktokEmbedWidget = () => {
                emit('addTiktokWidget', formData.value);
                Modal.getInstance(tiktokWidgetModal.value)?.hide();
            }

            return {
                tiktokWidgetModal,
                addTiktokEmbedWidget,
                formData
            }
        }
    }
</script>