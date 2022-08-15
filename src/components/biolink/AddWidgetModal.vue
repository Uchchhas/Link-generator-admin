<template>
    <div ref="widgetModal"
         class="modal modal-lg fade"
         id="widgetModal"
         tabindex="-1"
         aria-labelledby="widgetModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="widgetModalLabel">Add New Widget</h5>
                    <button type="button"
                            class="btn-icon btn-icon-transparent"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-lg-4 mb-1"
                             v-for="(widget, widgetIndex) in widgetList"
                             :key="`widget-${widgetIndex}`">
                            <button type="button" class="card widget-card h-100" @click="openWidgetModal(widget.type)">
                                <div class="card-body text-start">
                                    <img width="40" height="40" :src="widget.icon" class="mb-2" alt="Widget icon">
                                    <h6 class="text-info">{{ widget.type }}</h6>
                                    <p class="mb-0 text-caption">{{ widget.description }}</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import {Modal} from 'bootstrap';
    import CloseIcon from '@/components/icons/CloseIcon';

    export default {
        name: 'AddWidgetModal',
        components: {CloseIcon},
        setup() {
            const widgetModal = ref(null);
            const widgetList = ref([
                {
                    type: 'Image',
                    description: 'Upload an image and optionally add a link it will redirect to when clicked.',
                    icon: require(`@/assets/images/icons/image.png`)
                },
                {
                    type: 'Text',
                    description: 'Add title and optional description. Can be used as a header for the whole biolinks or a group of multiple widgets.',
                    icon: require(`@/assets/images/icons/text.png`)
                },
                {
                    type: 'Social links',
                    description: 'Add your socials links to display them as icon buttons.',
                    icon: require(`@/assets/images/icons/social-media.png`)
                },
                {
                    type: 'Youtube video',
                    description: 'Paste a YouTube video URL to show it as a video embed in your profile.',
                    icon: require(`@/assets/images/icons/youtube.png`)
                },
                {
                    type: 'Soundcloud video',
                    description: 'Paste a SoundCloud URL to show it as a playable song in your profile.',
                    icon: require(`@/assets/images/icons/soundcloud.png`)
                },
                {
                    type: 'Vimeo video',
                    description: 'Paste a vimeo URL to show it as a video embed in your profile.',
                    icon: require(`@/assets/images/icons/vimeo.png`)
                },
                {
                    type: 'Spotify embed',
                    description: 'Paste a spotify song, album, artist, playlist, podcast or episode url to show it as an embed in your profile.',
                    icon: require(`@/assets/images/icons/spotify.png`)
                },
                {
                    type: 'Twitch embed',
                    description: 'Paste twitch profile or clip url to show it as an embed in your profile.',
                    icon: require(`@/assets/images/icons/twitch.png`)
                },
                {
                    type: 'TikTok embed',
                    description: 'Paste TikTok video url to show it as an embed in your profile.',
                    icon: require(`@/assets/images/icons/tik-tok.png`)
                }
            ]);

            const openWidgetModal = (type) => {
                const imageWidgetModal = new Modal(document.getElementById('imageWidgetModal')),
                    textWidgetModal = new Modal(document.getElementById('textWidgetModal')),
                    socialLinksWidgetModal = new Modal(document.getElementById('socialLinksWidgetModal')),
                    youtubeVideoWidgetModal = new Modal(document.getElementById('youtubeVideoWidgetModal')),
                    soundcloudVideoWidgetModal = new Modal(document.getElementById('soundcloudVideoWidgetModal')),
                    vimeoVideoWidgetModal = new Modal(document.getElementById('vimeoVideoWidgetModal')),
                    spotifyWidgetModal = new Modal(document.getElementById('spotifyWidgetModal')),
                    twitchWidgetModal = new Modal(document.getElementById('twitchWidgetModal')),
                    tiktokWidgetModal = new Modal(document.getElementById('tiktokWidgetModal'));

                Modal.getInstance(widgetModal.value)?.hide();

                if (type === 'Image') {
                    imageWidgetModal?.show();
                } else if (type === 'Text') {
                    textWidgetModal?.show();
                } else if (type === 'Social links') {
                    socialLinksWidgetModal?.show();
                } else if (type === 'Youtube video') {
                    youtubeVideoWidgetModal?.show();
                } else if (type === 'Soundcloud video') {
                    soundcloudVideoWidgetModal?.show();
                } else if (type === 'Vimeo video') {
                    vimeoVideoWidgetModal?.show();
                } else if (type === 'Spotify embed') {
                    spotifyWidgetModal?.show();
                } else if (type === 'Twitch embed') {
                    twitchWidgetModal?.show();
                } else if (type === 'TikTok embed') {
                    tiktokWidgetModal?.show();
                }
            }

            return {
                widgetModal,
                widgetList,
                openWidgetModal
            }
        }
    }
</script>