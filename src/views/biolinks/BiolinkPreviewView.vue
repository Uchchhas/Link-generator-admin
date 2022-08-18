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
        <share-biolink-modal/>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import {copyToClipboard, sweetAlert} from '@/utilities/helpers';
    import ShareIconTwo from "@/components/icons/ShareIconTwo";
    import ShareBiolinkModal from "@/components/biolink/ShareBiolinkModal";

    export default {
        name: 'BiolinkPreviewView',
        components: {ShareBiolinkModal, ShareIconTwo},
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

            // Methods
            const copySocialLink = (link) => {
                copyToClipboard(link);
                sweetAlert('success', 'Copied link successfully');
            }

            return {
                socialTitle,
                socialList,
                copySocialLink
            }
        }
    }
</script>