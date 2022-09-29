<template>
    <div ref="manageTeamModal"
         class="modal fade"
         id="manageTeamModal"
         tabindex="-1"
         aria-labelledby="manageTeamModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="manageTeamModalLabel">
                        Manage Team Members
                    </h5>
                    <button type="button"
                            class="btn-icon btn-icon-transparent"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="text-secondary small mb-3">Invite by email/phone number</label>
                        <div class="d-flex">
                            <div :class="`form-floating flex-grow-1 ${formData.searchTerm.length ? 'active' : ''}`">
                                <input
                                    id="name"
                                    type="text"
                                    class="form-control input-md"
                                    placeholder="Enter email address/phone number"
                                    v-model="formData.searchTerm"
                                />
                                <label for="name">Enter email address/phone number</label>
                            </div>
                            <button type="button" class="btn btn-primary px-4 ms-2">Add</button>
                        </div>
                    </div>
                    <div class="">
                        <label class="text-secondary small mb-3">Members of Team One</label>
                        <div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="d-flex align-items-center">
                                    <img
                                        width="45"
                                        height="45"
                                        :src="require(`@/assets/images/avatar.jpeg`)"
                                        class="rounded-circle me-2"
                                        alt="Team image"
                                    />
                                    <div>
                                        <span class="d-block small mb-0">John Doe</span>
                                        <small class="text-secondary">admin@demo.com</small>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="dropdown me-2">
                                        <button class="btn btn-sm dropdown-toggle btn-secondary-light d-flex align-items-center"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-notification-count="2">
                                            Team Admin
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end animate scaleIn">
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                        </ul>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-link text-decoration-none text-danger">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="d-flex align-items-center">
                                    <img
                                        width="45"
                                        height="45"
                                        :src="require(`@/assets/images/avatar.jpeg`)"
                                        class="rounded-circle me-2"
                                        alt="Team image"
                                    />
                                    <div>
                                        <span class="d-block small mb-0">John Doe</span>
                                        <small class="text-secondary">admin@demo.com</small>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="dropdown me-2">
                                        <button class="btn btn-sm dropdown-toggle btn-secondary-light d-flex align-items-center"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-notification-count="2">
                                            Team Admin
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end animate scaleIn">
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                        </ul>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-link text-decoration-none text-danger">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="d-flex align-items-center">
                                    <img
                                        width="45"
                                        height="45"
                                        :src="require(`@/assets/images/avatar.jpeg`)"
                                        class="rounded-circle me-2"
                                        alt="Team image"
                                    />
                                    <div>
                                        <span class="d-block small mb-0">John Doe</span>
                                        <small class="text-secondary">admin@demo.com</small>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="dropdown me-2">
                                        <button class="btn btn-sm dropdown-toggle btn-secondary-light d-flex align-items-center"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-notification-count="2">
                                            Team Admin
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end animate scaleIn">
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                        </ul>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-link text-decoration-none text-danger">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="d-flex align-items-center">
                                    <img
                                        width="45"
                                        height="45"
                                        :src="require(`@/assets/images/avatar.jpeg`)"
                                        class="rounded-circle me-2"
                                        alt="Team image"
                                    />
                                    <div>
                                        <span class="d-block small mb-0">John Doe</span>
                                        <small class="text-secondary">admin@demo.com</small>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="dropdown me-2">
                                        <button class="btn btn-sm dropdown-toggle btn-secondary-light d-flex align-items-center"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-notification-count="2">
                                            Team Admin
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end animate scaleIn">
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                        </ul>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-link text-decoration-none text-danger">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="d-flex align-items-center">
                                    <img
                                        width="45"
                                        height="45"
                                        :src="require(`@/assets/images/avatar.jpeg`)"
                                        class="rounded-circle me-2"
                                        alt="Team image"
                                    />
                                    <div>
                                        <span class="d-block small mb-0">John Doe</span>
                                        <small class="text-secondary">admin@demo.com</small>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="dropdown me-2">
                                        <button class="btn btn-sm dropdown-toggle btn-secondary-light d-flex align-items-center"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-notification-count="2">
                                            Team Admin
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end animate scaleIn">
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                            <li><a href="#" class="dropdown-item">---</a></li>
                                        </ul>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-link text-decoration-none text-danger">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import CloseIcon from '@/components/icons/CloseIcon';

    export default {
        name: 'ManageTeamMembersModal',
        components: {CloseIcon},
        setup() {
            const formData = ref({
                searchTerm: ''
            });

            return {
                formData
            }
        }
    }
</script>