<template>
    <layout>
        <breadcrumb title="Settings"/>

        <div class="row">
            <div class="col-md-4 col-lg-3">
                <div class="card p-0 mb-3">
                    <div class="card-header px-4 py-3 border-bottom">
                        <h6 class="mb-0 text-secondary">
                            Profile Picture
                        </h6>
                    </div>
                    <div class="card-body text-center">
                        <div class="p-4">
                            <img
                                width="100"
                                height="100"
                                :src="require(`@/assets/images/avatar.jpeg`)"
                                class="img-fluid rounded-circle"
                                alt="Admin image"
                            />
                            <h6 class="mt-3 mb-0">Aron Cooper</h6>
                            <small class="d-block text-secondary">demo@example.com</small>
                            <small class="d-block mb-2 text-secondary">+12345678</small>
                        </div>
                        <div class="py-2 border-top border-bottom">
                            Developer Team
                        </div>
                        <div class="py-3">
                            <button type="button" class="btn btn-sm btn-primary rounded-pill">
                                Update Image
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card p-0 mb-3">
                    <button type="button"
                            class="btn py-3 btn-link text-secondary text-decoration-none"
                            @click.prevent="activeTab = 1">
                        <i class="feather-user-check me-2"/> Account Details
                    </button>
                </div>
                <div class="card p-0">
                    <button type="button"
                            class="btn py-3 btn-link text-secondary text-decoration-none"
                            @click.prevent="activeTab = 2">
                        <i class="feather-lock me-2"/> Change Password
                    </button>
                </div>
            </div>
            <div class="col-md-8 col-lg-9">
                <div class="tab-content h-100" id="myTabContent">
                    <div v-if="activeTab === 1" class="tab-pane fade show active h-100">
                        <div class="card p-0 h-100">
                            <div class="card-header px-4 py-3 border-bottom">
                                <h6 class="mb-0 text-secondary">Account Details</h6>
                            </div>
                            <div class="card-body p-4">
                                <div class="form-group mb-4">
                                    <div :class="`form-floating mb-3 ${formData.name.length ? 'active' : ''}`">
                                        <input
                                            id="name"
                                            type="text"
                                            class="form-control input-md"
                                            placeholder="Name"
                                            v-model="formData.name"
                                        />
                                        <label for="name">Name</label>
                                    </div>
                                </div>
                                <div class="form-group mb-4">
                                    <div
                                        :class="`form-floating mb-3 ${formData.phoneNumber.length ? 'active' : ''}`">
                                        <input
                                            id="phoneNumber"
                                            type="text"
                                            class="form-control input-md"
                                            placeholder="Phone number"
                                            v-model="formData.phoneNumber"
                                        />
                                        <label for="phoneNumber">Phone Number</label>
                                    </div>
                                </div>
                                <div class="form-group mb-4">
                                    <div :class="`form-floating mb-3 ${formData.email.length ? 'active' : ''}`">
                                        <input
                                            id="email"
                                            type="email"
                                            class="form-control input-md"
                                            placeholder="Email"
                                            v-model="formData.email"
                                        />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div class="form-group mb-4">
                                    <div :class="`form-floating ${formData.address.length ? 'active' : ''}`">
                                        <textarea
                                            id="address"
                                            type="text"
                                            class="form-control input-md"
                                            v-model="formData.address"
                                        />
                                        <label for="address">Address</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div
                                                :class="`form-floating ${formData.country.length ? 'active' : ''}`">
                                                <select id="country"
                                                        class="form-select input-md"
                                                        aria-label="Default select example"
                                                        v-model="formData.country">
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="America">America</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Canada">Canada</option>
                                                </select>
                                                <label for="country">Country</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            :class="`form-floating mb-3 ${formData.zipCode.length ? 'active' : ''}`">
                                            <input
                                                id="zipCode"
                                                type="text"
                                                class="form-control input-md"
                                                placeholder="Zip/Code"
                                                v-model="formData.zipCode"
                                            />
                                            <label for="zipCode">Zip/Code</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <button type="button" class="btn btn-secondary-close me-2">Cancel</button>
                                    <button type="button" class="btn btn-primary text-white">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeTab === 2" class="tab-pane fade show active h-100">
                        <div class="card p-0 h-100">
                            <div class="card-header px-4 py-3 border-bottom">
                                <h6 class="mb-0 text-secondary">Change Password</h6>
                            </div>
                            <div class="card-body p-4">
                                <div class="form-group mb-4">
                                    <div :class="`form-floating mb-3 ${formData.oldPassword.length ? 'active' : ''}`">
                                        <input
                                            id="oldPassword"
                                            type="password"
                                            class="form-control input-md"
                                            placeholder="Enter old password"
                                            v-model="formData.oldPassword"
                                        />
                                        <label for="oldPassword">Old Password</label>
                                        <span :class="`password-toggle-icon ${formData.oldPassword.length ? 'active': ''}`"
                                              @click="togglePasswordVisibility('old')">
                                            <i :class="`${visibleOldPassword ? 'feather-eye' : 'feather-eye-off'}`"/>
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group mb-4">
                                    <div :class="`form-floating mb-3 ${formData.newPassword.length ? 'active' : ''}`">
                                        <input
                                            id="newPassword"
                                            type="password"
                                            class="form-control input-md"
                                            placeholder="Enter new password"
                                            v-model="formData.newPassword"
                                        />
                                        <label for="newPassword">New Password</label>
                                        <span :class="`password-toggle-icon ${formData.newPassword.length ? 'active': ''}`"
                                              @click="togglePasswordVisibility('new')">
                                            <i :class="`${visibleNewPassword ? 'feather-eye' : 'feather-eye-off'}`"/>
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group mb-4">
                                    <div :class="`form-floating mb-3 ${formData.confirmPassword.length ? 'active' : ''}`">
                                        <input
                                            id="confirmPassword"
                                            type="password"
                                            class="form-control input-md"
                                            placeholder="Confirm new password"
                                            v-model="formData.confirmPassword"
                                        />
                                        <label for="confirmPassword">Confirm Password</label>
                                        <span :class="`password-toggle-icon ${formData.confirmPassword.length ? 'active': ''}`"
                                              @click="togglePasswordVisibility('confirm')">
                                            <i :class="`${visibleConfirmPassword ? 'feather-eye' : 'feather-eye-off'}`"/>
                                        </span>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <button type="button" class="btn btn-secondary-close me-2">Cancel</button>
                                    <button type="button" class="btn btn-primary text-white">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import {ref} from 'vue';
    import Layout from '@/components/layouts/Layout';
    import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';

    export default {
        name: 'Profile',
        components: {Layout, Breadcrumb},
        setup() {
            // Data
            const activeTab = ref(1);
            const formData = ref({
                name: 'Aron Cooper',
                phoneNumber: '+12345678',
                email: 'demo@example.com',
                address: '',
                country: 'Turkey',
                zipCode: '12345',
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
            });
            const visibleOldPassword = ref(false);
            const visibleNewPassword = ref(false);
            const visibleConfirmPassword = ref(false);

            // Methods
            const togglePasswordVisibility = (type) => {
                const oldPassword = document.getElementById('oldPassword'),
                    newPassword = document.getElementById('newPassword'),
                    confirmPassword = document.getElementById('confirmPassword');

                if (type === 'old') {
                    if (oldPassword.getAttribute('type') === 'password') {
                        oldPassword.setAttribute('type', 'text');
                        visibleOldPassword.value = true;
                    }
                    else {
                        oldPassword.setAttribute('type', 'password');
                        visibleOldPassword.value = false;
                    }
                }
                else if (type === 'new') {
                    if (newPassword.getAttribute('type') === 'password') {
                        newPassword.setAttribute('type', 'text');
                        visibleNewPassword.value = true;
                    }
                    else {
                        newPassword.setAttribute('type', 'password');
                        visibleNewPassword.value = false;
                    }
                }
                else if (type === 'confirm') {
                    if (confirmPassword.getAttribute('type') === 'password') {
                        confirmPassword.setAttribute('type', 'text');
                        visibleConfirmPassword.value = true;
                    }
                    else {
                        confirmPassword.setAttribute('type', 'password');
                        visibleConfirmPassword.value = false;
                    }
                }
            }

            return {
                activeTab,
                formData,
                visibleOldPassword,
                visibleNewPassword,
                visibleConfirmPassword,
                togglePasswordVisibility
            }
        }
    }
</script>