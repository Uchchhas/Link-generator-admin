<template>
    <div ref="biolinkModal"
         class="modal fade"
         id="biolinkModal"
         tabindex="-1"
         aria-labelledby="biolinkModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="biolinkModalLabel">Create Biolink</h5>
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
                        <div class="d-flex align-items-center mt-2">
                            <i class="feather-link me-2"/>
                            <a href="#" target="_blank">
                                https://belink.vebto.com/{{ !isEditLink ? formData.alies : "" }}
                            </a>
                            <input v-if="isEditLink"
                                   type="text"
                                   class="form-control input-xs"
                                   v-model="formData.alies"
                                   style="max-width: 100px;">
                            <button type="button"
                                    class="btn btn-sm btn-secondary-light ms-2" @click="editLink">
                                Edit
                            </button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div :class="`form-floating ${formData.domain.length ? 'active' : ''}`">
                            <select id="domain"
                                    class="form-select input-md"
                                    aria-label="Default select example"
                                    v-model="formData.domain">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="domain">Domain</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div :class="`form-floating ${formData.description.length ? 'active' : ''}`">
                            <textarea id="description" class="form-control" rows="5" v-model="formData.description"/>
                            <label for="description" class="mb-2">Description</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="biolinkStatus" checked>
                            <label class="form-check-label" for="biolinkStatus">Active</label>
                        </div>
                        <small class="text-muted text-caption">Whether this biolink is viewable publicly.</small>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary-close" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary text-white" @click="createBiolink">
                        Save changes
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
    import router from '@/router';

    export default {
        name: 'CreateBiolinkModal',
        components: {CloseIcon},
        setup() {
            const biolinkModal = ref(null);
            const isEditLink = ref(false);
            const formData = ref({
                name: '',
                link: 'https://belink.vebto.com/',
                alies: 'vIb5sv',
                domain: '1',
                description: '',
                status: 1
            });

            const editLink = () => {
                isEditLink.value = !isEditLink.value;
            }
            const createBiolink = () => {
                Modal.getInstance(biolinkModal.value)?.hide();
                router.push('/create-biolinks');
            }

            return {formData, isEditLink, editLink, createBiolink, biolinkModal}
        }
    }
</script>