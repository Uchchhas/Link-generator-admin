<template>
    <div class="auth-page-wrapper">
        <div class="card auth-page-intro">
            <img width="40" height="40" :src="require(`@/assets/images/logo.png`)" class="mb-5" alt="Logo">
            <h3 class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <div class="text-center">
                <img width="400" :src="require(`@/assets/images/forget-password-banner.svg`)" class="img-fluid"
                     alt="Login banner">
            </div>
        </div>
        <div class="auth-page-form">
            <div class="form-wrapper">
                <h4>Forgot your password?</h4>
                <p class="text-caption text-secondary">
                    Please enter the email address associated with your account and
                    We will email you a link to reset your password.
                </p>
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
                    <button type="button" class="w-100 btn btn-lg btn-primary" @click="sendRequest">
                        Send Request
                    </button>
                </div>
                <p class="text-center">
                    <router-link to="/">Back</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';

    export default {
        name: 'ForgetPassword',
        setup() {
            // Data
            const formData = ref({
                email: ''
            });

            // Methods
            const sendRequest = () => {

            }

            return {
                formData,
                sendRequest
            }
        }
    }
</script>