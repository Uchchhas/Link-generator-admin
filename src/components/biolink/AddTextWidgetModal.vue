<template>
    <div ref="textWidgetModal"
         class="modal fade"
         id="textWidgetModal"
         tabindex="-1"
         aria-labelledby="textWidgetModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="textWidgetModalLabel">Add Text Widget</h5>
                    <button type="button"
                            class="btn-icon btn-icon-transparent"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <div :class="`form-floating mb-3 ${formData.title.length ? 'active' : ''}`">
                            <input
                                id="textTitle"
                                type="text"
                                class="form-control input-md"
                                placeholder="Title"
                                v-model="formData.title"
                            />
                            <label for="textTitle">Title</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div :class="`form-floating ${formData.description.length ? 'active' : ''}`">
                            <textarea
                                id="description"
                                type="text"
                                class="form-control input-md"
                                v-model="formData.description"
                            />
                            <label for="description">Description</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary-close" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary text-white" @click="addText">
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

    export default {
        name: 'AddTextWidgetModal',
        components: {CloseIcon},
        emits: ['addTextWidget'],
        setup(props, {emit}) {
            const textWidgetModal = ref(null);
            const formData = ref({
                title: '',
                description: ''
            });

            const addText = () => {
                emit('addTextWidget', formData.value);
                Modal.getInstance(textWidgetModal.value)?.hide();
            }

            return {
                textWidgetModal,
                formData,
                addText
            }
        }
    }
</script>