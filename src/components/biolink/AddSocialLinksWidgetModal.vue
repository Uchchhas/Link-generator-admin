<template>
    <div ref="socialLinksWidgetModal"
         class="modal modal-lg fade"
         id="socialLinksWidgetModal"
         tabindex="-1"
         aria-labelledby="socialLinksWidgetModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="socialLinksWidgetModalLabel">Add Social Links Widget</h5>
                    <button type="button"
                            class="btn-icon btn-icon-transparent"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-end">
                        <button type="button"
                                class="btn-icon btn-icon-transparent" @click="addLink">
                            <i class="feather-plus text-primary"/>
                        </button>
                    </div>
                    <div class="row align-items-center"
                         v-for="(link, linkIndex) in formData.links"
                         :key="`device-${linkIndex}`">
                        <div class="col-lg-3">
                            <div class="form-group">
                                <div :class="`form-floating ${link.type.length ? 'active' : ''}`">
                                    <select :id="`device${linkIndex}`"
                                            class="form-select input-md"
                                            aria-label="Default select example"
                                            v-model="link.type">
                                        <option v-for="(social, socialIndex) in socialList"
                                                :key="`social-${socialIndex}`"
                                                :value="social.type">
                                            {{ social.type }}
                                        </option>
                                    </select>
                                    <label :id="`device${linkIndex}`">Type</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="form-group">
                                <div :class="`form-floating ${link.url.length ? 'active' : ''}`">
                                    <input
                                        :id="`linkUrl${linkIndex}`"
                                        type="text"
                                        class="form-control input-md"
                                        placeholder="Url"
                                        v-model="link.url"
                                    />
                                    <label :for="`linkUrl${linkIndex}`">Url</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1">
                            <div class="form-group">
                                <button type="button"
                                        class="btn-icon btn-icon-transparent"
                                        @click="removeLink(linkIndex)">
                                    <i class="feather-x text-danger"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary-close" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary text-white" @click="addSocialLinks">
                        Add
                    </button>
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
        name: 'AddSocialLinksWidgetModal',
        components: {CloseIcon},
        emits: ['addSocialLinkWidget'],
        setup(props, {emit}) {
            const socialLinksWidgetModal = ref(null);
            const socialList = ref([
                {type: 'Email'},
                {type: 'Facebook'},
                {type: 'Twitter'},
                {type: 'Instagram'},
                {type: 'TikTok'},
                {type: 'Youtube'},
                {type: 'SoundCloud'},
                {type: 'Basecamp'},
                {type: 'Linkedin'},
                {type: 'WhatsApp'},
                {type: 'Telegram'},
                {type: 'Twitch'},
                {type: 'Patreon'},
                {type: 'Pinterest'},
                {type: 'Spotify'},
                {type: 'Amazon'},
                {type: 'Snapchat'},
                {type: 'Apple music'}
            ])
            const formData = ref({
                links: [
                    {type: 'Facebook', url: '#'},
                    {type: 'Instagram', url: '#'},
                    {type: 'Twitter', url: '#'}
                ]
            })

            const addLink = () => {
                formData.value.links.push({
                    type: 'Facebook',
                    url: '#'
                })
            }
            const removeLink = (index) => {
                formData.value.links.splice(index, 1);
            }
            const addSocialLinks = () => {
                emit('addSocialLinkWidget', formData.value);
                Modal.getInstance(socialLinksWidgetModal.value)?.hide();
            }

            return {
                socialLinksWidgetModal,
                socialList,
                formData,
                addLink,
                removeLink,
                addSocialLinks
            }
        }
    }
</script>