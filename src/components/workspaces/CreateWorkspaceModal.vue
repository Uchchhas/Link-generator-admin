<template>
    <div ref="createWorkspaceModal"
         class="modal fade"
         id="createWorkspaceModal"
         tabindex="-1"
         aria-labelledby="createWorkspaceModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="createWorkspaceModalLabel">Create Workspace</h5>
                    <button type="button" class="btn-icon btn-icon-transparent" data-bs-dismiss="modal"
                            aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <div :class="`form-floating ${formData.name.length ? 'active' : ''}`">
                            <input
                                id="name"
                                type="text"
                                class="form-control input-md"
                                placeholder="name"
                                v-model="formData.name"
                            />
                            <label for="name">Name</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary-close" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary text-white" @click="createWorkspace">
                        Create
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
        name: 'CreateWorkspaceModal',
        components: {CloseIcon},
        setup() {
            // Data
            const createWorkspaceModal = ref(null);
            const formData = ref({
                name: ''
            });

            // Methods
            const createWorkspace = () => {
                Modal.getInstance(createWorkspaceModal.value)?.hide();
            }

            return {formData, createWorkspace, createWorkspaceModal}
        }
    }
</script>