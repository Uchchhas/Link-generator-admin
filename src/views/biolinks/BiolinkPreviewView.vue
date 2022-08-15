<template>
    <div class="biolink-preview-wrapper">
        <div class="d-flex flex-column align-items-center justify-content-center text-center preview-content">
            <img width="100"
                 height="100"
                 :src="require(`@/assets/images/avatar.jpeg`)"
                 class="img-fluid rounded mb-3"
                 alt="Avatar">
            <h2 :style="`color: #fff;`">Francois Brill</h2>
            <h6 :style="`color: #fff;`">Product. Design. Business</h6>
            <p :style="`color: #fff;`">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur dolorum est et nisi
                quidem
            </p>
            <div class="social-menu mt-3">
                <ul>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    @mouseover="socialTitle = 'My Facebook'">
                                <i class="feather-facebook"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    @mouseover="socialTitle = 'My Instagram'">
                                <i class="feather-instagram"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    @mouseover="socialTitle = 'My Twitter'">
                                <i class="feather-twitter"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    @mouseover="socialTitle = 'My Linkedin'">
                                <i class="feather-linkedin"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false" @mouseover="socialTitle = 'My Youtube'">
                                <i class="feather-youtube"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    @mouseover="socialTitle = 'My Github'">
                                <i class="feather-github"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    @mouseover="socialTitle = 'My Gitlab'">
                                <i class="feather-gitlab"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    @mouseover="socialTitle = 'My Email'">
                                <i class="feather-at-sign"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    @mouseover="socialTitle = 'My Drive'">
                                <i class="feather-folder"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn p-0 dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownAdmin"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    @mouseover="socialTitle = 'My Codepen'">
                                <i class="feather-codepen"/>
                            </button>
                            <ul class="dropdown-menu has-arrow bottom-center animate scaleIn"
                                aria-labelledby="dropdownAdmin">
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/"
                                       target="_blank">
                                        <i class="feather-external-link fs-6"/>
                                        Open
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-column align-items-center"
                                       href="/" @click.prevent="copySocialLink('https://www.facebook.com/')">
                                        <i class="feather-copy fs-6"/>
                                        Copy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <h5 class="mt-2 text-white">{{ socialTitle }}</h5>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import {copyToClipboard, sweetAlert} from '@/utilities/helpers';

    export default {
        name: 'BiolinkPreviewView',
        setup() {
            // Data
            const socialTitle = ref('')

            // Methods
            const copySocialLink = (link) => {
                copyToClipboard(link);
                sweetAlert('success', 'Copied link successfully');
            }

            return {
                socialTitle,
                copySocialLink
            }
        }
    }
</script>