<template>
    <div ref="shareModal"
         class="modal fade share-modal"
         id="shareModal"
         tabindex="-1"
         aria-labelledby="shareModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <img
                    width="80"
                    height="80"
                    :src="require(`@/assets/images/avatar.jpeg`)"
                    class="avatar img-fluid"
                    alt="Avatar"
                />
                <div
                    class="flex-column align-items-stretch justify-content-center text-center modal-header px-0 pb-0">
                    <h5 class="mb-3 modal-title" id="shareModalLabel">Share Guy's NodCard</h5>
                    <ul class="nav nav-pills nav-justified rounded-0" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="text-body-3 nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true">
                                Send via Email
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="text-body-3 nav-link"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false">
                                Scan QR Code
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="text-body-3 nav-link"
                                    id="pills-contact-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false">
                                Copy Link
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="modal-body">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active"
                             id="pills-home"
                             role="tabpanel"
                             aria-labelledby="pills-home-tab">
                            <div class="form-group">
                                <div :class="`form-floating mb-3 ${formData.title.length ? 'active' : ''}`">
                                    <input
                                        id="email"
                                        type="email"
                                        class="form-control input-md"
                                        placeholder="Enter email address to share with"
                                        v-model="formData.title"
                                    />
                                    <label for="email">Enter email address to share with</label>
                                </div>
                            </div>
                            <div class="form-group mb-0">
                                <div :class="`form-floating ${formData.message.length ? 'active' : ''}`">
                                        <textarea
                                            id="message"
                                            class="form-control input-md"
                                            v-model="formData.message"
                                        />
                                    <label for="message">Write a message</label>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade"
                             id="pills-profile"
                             role="tabpanel"
                             aria-labelledby="pills-profile-tab">
                            <p class="text-center">Use a phone camera to scan this code.</p>
                            <div class="p-3 text-center rounded-3">
                                <q-r-code-icon/>
                            </div>
                        </div>
                        <div class="tab-pane fade"
                             id="pills-contact"
                             role="tabpanel"
                             aria-labelledby="pills-contact-tab">
                            <div
                                class="d-flex align-items-center justify-content-between py-2 px-3 mb-2 rounded bg-gray-300">
                                https://nod.cards/p3
                                <button type="button"
                                        class="btn btn-info text-white"
                                        @click="copySocialLink('https://nod.cards/p3')">
                                    <i class="feather-copy me-2"/> Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button"
                            class="w-100 btn btn-outline-primary"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import QRCodeIcon from '@/components/icons/QRCodeIcon';
    import {copyToClipboard, sweetAlert} from '@/utilities/helpers';

    export default {
        name: 'ShareBiolinkModal',
        components: {QRCodeIcon},
        setup() {
            // Data
            const formData = ref({
                title: '',
                message: ''
            })

            // Methods
            const copySocialLink = (link) => {
                copyToClipboard(link);
                sweetAlert('success', 'Copied link successfully');
            }

            return {
                formData,
                copySocialLink
            }
        }
    }
</script>