<template>
    <div class="auth-page-wrapper">
        <div class="card auth-page-intro">
            <img width="40" height="40" :src="require(`@/assets/images/logo.png`)" class="mb-5" alt="Logo">
            <h3 class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <div class="text-center">
                <img width="400" :src="require(`@/assets/images/login-banner.svg`)" class="img-fluid"
                     alt="Login banner">
            </div>
        </div>
        <div class="auth-page-form">
            <div class="form-wrapper">
                <h4>Sign in to dashboard</h4>
                <p class="text-caption text-secondary">Enter your details below</p>
                <div class="form-group">
                    <div :class="`form-floating ${formData.email.length ? 'active' : ''}`">
                        <input
                            id="email"
                            type="email"
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
                <div class="form-group d-flex align-items-center justify-content-between">
                    <div class="form-check mb-0">
                        <input
                            class="form-check-input mt-0 me-2"
                            type="checkbox"
                            id="rememberMe"
                            v-model="formData.remember"
                        />
                        <label class="form-check-label" for="rememberMe">
                            Remember me
                        </label>
                    </div>
                    <router-link to="/forget-password">Forgot password?</router-link>
                </div>
                <div class="form-group">
                    <button type="button" class="w-100 btn btn-lg btn-primary" @click="login">Login</button>
                </div>
                <p class="text-center">
                    Don't have an account?
                    <router-link to="/register">Get started</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import router from '@/router';

    export default {
        name: 'Login',
        setup() {
            // Data
            const formData = ref({
                email: '',
                password: '',
                remember: false
            });

            // Methods
            const login = () => {
                router.push('/dashboard')
            }

            return {
                formData,
                login
            }
        }
    }
</script>