<template>
    <div class="biolink-preview-page">
        <div class="biolink-preview-page-share">
            <button type="button"
                    class="biolink-preview-page-share-button"
                    data-bs-toggle="modal"
                    data-bs-target="#shareModal">
                <share-icon-two/>
            </button>
        </div>
        <div class="biolink-preview-page-content">
            <img width="100"
                 height="100"
                 :src="require(`@/assets/images/avatar.jpeg`)"
                 class="img-fluid rounded mx-auto mb-3"
                 alt="Avatar">
            <h2 class="text">Francois Brill</h2>
            <h6 class="text">Product. Design. Business</h6>
            <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur dolorum est et nisi
                quidem
            </p>
            <div class="social-menu mt-3">
                <ul>
                    <li v-for="(social, index) in socialList" :key="`social-${index}`">
                        <div class="dropdown">
                            <a :href="social.link"
                               target="_blank"
                               class="share-toggle"
                               @mouseover="socialTitle = `My ${social.name}`">
                                <i :class="`feather-${social.name}`"/>
                                <span class="ms-3 d-block d-sm-none text-capitalize">{{ social.name }}</span>
                            </a>
                            <ul class="share-menu"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="share-item"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        <span>Open</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="share-item"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        <span>Copy</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <h5 class="social-title">{{ socialTitle }}</h5>
        </div>

        <!-- Share Modal -->
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
    </div>
</template>

<script>
    import {ref} from 'vue';
    import {copyToClipboard, sweetAlert} from '@/utilities/helpers';
    import ShareIconTwo from "@/components/icons/ShareIconTwo";
    import QRCodeIcon from "@/components/icons/QRCodeIcon";

    export default {
        name: 'BiolinkPreviewView',
        components: {QRCodeIcon, ShareIconTwo},
        setup() {
            // Data
            const socialTitle = ref('');
            const socialList = ref([
                {name: 'facebook', link: 'https://www.facebook.com/'},
                {name: 'instagram', link: 'https://www.instagram.com/'},
                {name: 'twitter', link: 'https://twitter.com/'},
                {name: 'linkedin', link: 'https://www.linkedin.com/'},
                {name: 'youtube', link: 'https://www.youtube.com/'},
                {name: 'github', link: 'https://github.com/'},
                {name: 'gitlab', link: 'https://gitlab.com/'},
                {name: 'send', link: 'https://mail.google.com/'},
                {name: 'folder', link: 'https://drive.google.com/'},
                {name: 'codepen', link: 'https://codepen.io/'}
            ]);
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
                socialTitle,
                socialList,
                formData,
                copySocialLink
            }
        }
    }
</script>