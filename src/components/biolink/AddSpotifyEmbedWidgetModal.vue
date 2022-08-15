<template>
    <div ref="spotifyWidgetModal"
         class="modal fade"
         id="spotifyWidgetModal"
         tabindex="-1"
         aria-labelledby="spotifyWidgetModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="spotifyWidgetModalLabel">Add Spotify Widget</h5>
                    <button type="button"
                            class="btn-icon btn-icon-transparent"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div class="modal-body">
                    <div :class="`form-floating mb-3 ${formData.url.length ? 'active' : ''}`">
                        <input
                            id="spotifyUrl"
                            type="url"
                            class="form-control input-md"
                            placeholder="Spotify url"
                            v-model="formData.url"
                        />
                        <label for="spotifyUrl">Spotify url</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button"
                            class="btn btn-secondary-close"
                            data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button"
                            class="btn btn-primary text-white"
                            @click="addSpotifyWidget">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import CloseIcon from '@/components/icons/CloseIcon';
    import {Modal} from "bootstrap";

    export default {
        name: "AddSpotifyEmbedWidgetModal",
        components: {CloseIcon},
        emits: ['addSpotifyWidget'],
        setup(props, {emit}) {
            const spotifyWidgetModal = ref(null);
            const formData = ref({
                url: ''
            });

            const addSpotifyWidget = () => {
                emit('addSpotifyWidget', formData.value);
                Modal.getInstance(spotifyWidgetModal.value)?.hide();
            }

            return {
                spotifyWidgetModal,
                addSpotifyWidget,
                formData
            }
        }
    }
</script>