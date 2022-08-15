<template>
    <div class="auth-page-wrapper">
        <div class="card auth-page-intro">
            <img width="40" height="40" :src="require(`@/assets/images/logo.png`)" class="mb-5" alt="Logo">
            <h3 class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <div class="text-center">
                <img width="350" :src="require(`@/assets/images/register-banner.svg`)" class="img-fluid"
                     alt="Login banner">
            </div>
        </div>
        <div class="auth-page-form">
            <div class="form-wrapper">
                <h4>Get started absolutely free.</h4>
                <p class="text-caption text-secondary">Free forever. No credit card needed.</p>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <div :class="`form-floating ${formData.firstName.length ? 'active' : ''}`">
                                <input
                                    id="firstName"
                                    type="text"
                                    class="form-control"
                                    placeholder="First name"
                                    v-model="formData.firstName"
                                />
                                <label for="firstName">First name</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <div :class="`form-floating ${formData.lastName.length ? 'active' : ''}`">
                                <input
                                    id="lastName"
                                    type="text"
                                    class="form-control"
                                    placeholder="Last name"
                                    v-model="formData.lastName"
                                />
                                <label for="lastName">Last name</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div :class="`form-floating ${formData.email.length ? 'active' : ''}`">
                        <input
                            id="email"
                            type="text"
                            class="form-control"
                            placeholder="Email address"
                            v-model="formData.email"
                        />
                        <label for="email">Email address</label>
                    </div>
                </div>
                <div class="form-group">
                    <div :class="`form-floating ${formData.password.length ? 'active' : ''}`">
                        <input
                            id="password"
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            v-model="formData.password"
                        />
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="form-group">
                    <button type="button" class="w-100 btn btn-lg btn-primary" @click="register">Register</button>
                </div>
                <p class="text-center">
                    Already have an account?
                    <router-link to="/">Login</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import router from '@/router';

    export default {
        name: 'Register',
        setup() {
            // Data
            const formData = ref({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            });

            // Methods
            const register = () => {
                router.push('/dashboard')
            }

            return {
                formData,
                register
            }
        }
    }
</script>