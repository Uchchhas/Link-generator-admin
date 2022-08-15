<template>
    <div ref="addNewLinkModal"
         class="modal modal-lg fade"
         id="addNewLinkModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <h5 class="modal-title" id="exampleModalLabel">New Link</h5>
                    <button type="button"
                            class="btn-icon btn-icon-transparent"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group new-link">
                        <div :class="`form-floating ${formData.newLink.length ? 'active' : ''}`">
                            <input
                                id="name"
                                type="text"
                                class="form-control input-md"
                                placeholder="Enter long url..."
                                v-model="formData.newLink"
                            />
                            <label for="name" class="mb-2">Enter long url...</label>
                            <div class="input-group-append">
                                <div class="dropdown">
                                    <button class="btn btn-primary text-white dropdown-toggle d-flex align-items-center"
                                            type="button"
                                            id="dropdownShare"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        {{ formData.newLinkType }}
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end mt-2 has-arrow top-right top-100 animate scaleIn"
                                        aria-labelledby="dropdownShare">
                                        <li v-for="(type, typeIndex) in newLinkTypes" :key="`link-type-${typeIndex}`">
                                            <button type="button" class="dropdown-item"
                                                    @click="formData.newLinkType = type.title">
                                                {{ type.title }}
                                                <span class="d-block text-caption">{{ type.description }}</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button"
                            class="btn p-0 border-0 text-body-3"
                            data-bs-toggle="collapse"
                            data-bs-target="#advancedOptions"
                            aria-expanded="false"
                            aria-controls="advancedOptions">
                        <i class="feather-settings me-1"/> Advanced Option
                    </button>
                    <div class="collapse mt-4" id="advancedOptions">
                        <div class="form-group">
                            <div :class="`form-floating ${formData.status.length ? 'active' : ''}`">
                                <select id="status"
                                        class="form-select input-md"
                                        aria-label="Default select example"
                                        v-model="formData.status">
                                    <option value="Activate">Activate</option>
                                    <option value="Disabled">Disabled</option>
                                </select>
                                <label for="status">Status</label>
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
                            <button type="button"
                                    class="btn btn-sm btn-secondary-light">
                                UTM Builder
                            </button>
                        </div>
                        <hr class="mt-0 border-color-2 opacity-100"/>
                        <fieldset>
                            <legend class="mb-0 text-body-1">Schedule</legend>
                            <p class="text-secondary text-caption">
                                Enter a date when link should be active. Both start and end dates are optional.
                            </p>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="d-flex">
                                        <div class="form-group form-control-date me-2">
                                            <label for="scheduleStartDate" class="mb-2 text-body-3 fw-light">Start Date</label>
                                            <Datepicker
                                                position="left"
                                                :enableTimePicker="false"
                                                autoApply
                                                placeholder="mm/dd/yyyy"
                                                v-model="formData.scheduleStartDate"
                                            />
                                        </div>
                                        <div class="form-group form-control-date">
                                            <label for="scheduleStartDate" class="mb-2 text-body-3 fw-light">Start Time</label>
                                            <Datepicker
                                                position="left"
                                                timePicker
                                                autoApply
                                                placeholder="hh:m"
                                                v-model="formData.scheduleStartTime"
                                            >
                                                <template #input-icon>
                                                    <ClockIcon class="input-icon" size="size-30"/>
                                                </template>
                                            </Datepicker>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex">
                                        <div class="form-group form-control-date me-2">
                                            <label for="scheduleStartDate" class="mb-2 text-body-3 fw-light">End Date</label>
                                            <Datepicker
                                                position="left"
                                                :enableTimePicker="false"
                                                autoApply
                                                placeholder="mm/dd/yyyy"
                                                v-model="formData.scheduleEndDate"
                                            />
                                        </div>
                                        <div class="form-group form-control-date">
                                            <label for="scheduleStartDate" class="mb-2 text-body-3 fw-light">End Time</label>
                                            <Datepicker
                                                position="left"
                                                timePicker
                                                autoApply
                                                placeholder="hh:m"
                                                v-model="formData.scheduleEndTime"
                                            >
                                                <template #input-icon>
                                                    <ClockIcon class="input-icon" size="size-30"/>
                                                </template>
                                            </Datepicker>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <hr class="mt-0 border-color-2 opacity-100"/>
                        <fieldset>
                            <legend class="mb-0 text-body-1">Details</legend>
                            <p class="text-secondary text-caption">
                                Add title, description and upload an image to personalize the link
                            </p>
                            <div class="form-group d-flex">
                                <div class="size-200 border-color-2 border-1 me-3">
                                    <ImageUploader class="size-200" @getFile="getImageFile"/>
                                </div>
                                <div class="flex-grow-1">
                                    <div :class="`form-floating mb-3 ${formData.title.length ? 'active' : ''}`">
                                        <input
                                            id="title"
                                            type="text"
                                            class="form-control input-md"
                                            placeholder="Title"
                                            v-model="formData.title"
                                        />
                                        <label for="title">Title</label>
                                    </div>
                                    <div :class="`form-floating ${formData.description.length ? 'active' : ''}`">
                                        <textarea
                                            id="description"
                                            type="text"
                                            class="form-control input-md"
                                            v-model="formData.description"
                                        />
                                        <label for="description">Description</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <hr class="mt-0 border-color-2 opacity-100"/>
                        <fieldset>
                            <legend class="mb-0 text-body-1">Expiration Clicks</legend>
                            <p class="text-secondary text-caption">
                                After link is visited specified amount of times, it will no longer be accessible.
                                Optionally, after click amount is reached link can redirect to specified url instead.
                            </p>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div :class="`form-floating ${formData.maxClicks.length ? 'active' : ''}`">
                                            <input
                                                id="maxClicks"
                                                type="number"
                                                class="form-control input-md"
                                                placeholder="Max Clicks"
                                                v-model="formData.maxClicks"
                                            />
                                            <label for="maxClicks">Max Clicks</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div :class="`form-floating ${formData.redirectUrl.length ? 'active' : ''}`">
                                            <input
                                                id="redirectUrl"
                                                type="text"
                                                class="form-control input-md"
                                                placeholder="Redirect Url (Optional)"
                                                v-model="formData.redirectUrl"
                                            />
                                            <label for="redirectUrl">Redirect Url (Optional)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <hr class="mt-0 border-color-2 opacity-100"/>
                        <fieldset>
                            <legend class="d-flex align-items-center justify-content-between mb-0 text-body-1">
                                Location Targeting
                                <button type="button"
                                        class="btn-icon btn-icon-transparent" @click="addMoreLocation">
                                    <i class="feather-plus text-primary"/>
                                </button>
                            </legend>
                            <p class="text-secondary text-caption">
                                Redirect users to different url based on their location.
                            </p>
                            <div class="row align-items-center"
                                 v-for="(location, locationIndex) in formData.locationTargeting"
                                 :key="`location-${locationIndex}`">
                                <div class="col-lg-5">
                                    <div class="form-group">
                                        <div :class="`form-floating ${location.country.length ? 'active' : ''}`">
                                            <select :id="`country${locationIndex}`"
                                                    class="form-select input-md"
                                                    aria-label="Default select example"
                                                    v-model="location.country">
                                                <option v-for="(country, countryIndex) in countryList"
                                                        :key="`country-${countryIndex}`"
                                                        :value="country.name.common">
                                                    {{ country.name.common }}
                                                </option>
                                            </select>
                                            <label :for="`country${locationIndex}`">Country</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div :class="`form-floating ${location.url.length ? 'active' : ''}`">
                                            <input
                                                :id="`locationUrl${locationIndex}`"
                                                type="text"
                                                class="form-control input-md"
                                                placeholder="Url"
                                                v-model="location.url"
                                            />
                                            <label :for="`locationUrl${locationIndex}`">Url</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1">
                                    <div class="form-group">
                                        <button type="button"
                                                class="btn-icon btn-icon-transparent"
                                                @click="removeLocation(locationIndex)">
                                            <i class="feather-x text-danger"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <hr class="mt-0 border-color-2 opacity-100"/>
                        <fieldset>
                            <legend class="d-flex align-items-center justify-content-between mb-0 text-body-1">
                                Device Targeting
                                <button type="button"
                                        class="btn-icon btn-icon-transparent" @click="addMoreDevice">
                                    <i class="feather-plus text-primary"/>
                                </button>
                            </legend>
                            <p class="text-secondary text-caption">
                                Redirect users to different url based on their device.
                            </p>
                            <div class="row align-items-center"
                                 v-for="(device, deviceIndex) in formData.deviceTargeting"
                                 :key="`device-${deviceIndex}`">
                                <div class="col-lg-5">
                                    <div class="form-group">
                                        <div :class="`form-floating ${device.type.length ? 'active' : ''}`">
                                            <select :id="`device${deviceIndex}`"
                                                    class="form-select input-md"
                                                    aria-label="Default select example"
                                                    v-model="device.type">
                                                <option value="Mobile">Mobile</option>
                                                <option value="Tablet">Tablet</option>
                                                <option value="Desktop">Desktop</option>
                                            </select>
                                            <label :for="`device${deviceIndex}`">Device</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div :class="`form-floating ${device.url.length ? 'active' : ''}`">
                                            <input
                                                :id="`deviceUrl${deviceIndex}`"
                                                type="text"
                                                class="form-control input-md"
                                                placeholder="Url"
                                                v-model="device.url"
                                            />
                                            <label :for="`deviceUrl${deviceIndex}`">Url</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1">
                                    <div class="form-group">
                                        <button type="button"
                                                class="btn-icon btn-icon-transparent"
                                                @click="removeDevice(deviceIndex)">
                                            <i class="feather-x text-danger"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <hr class="mt-0 border-color-2 opacity-100"/>
                        <fieldset>
                            <legend class="d-flex align-items-center justify-content-between mb-0 text-body-1">
                                Platform Targeting
                                <button type="button"
                                        class="btn-icon btn-icon-transparent" @click="addMorePlatform">
                                    <i class="feather-plus text-primary"/>
                                </button>
                            </legend>
                            <p class="text-secondary text-caption">
                                Redirect users to different url based on their platform.
                            </p>
                            <div class="row align-items-center"
                                 v-for="(platform, platformIndex) in formData.platformTargeting"
                                 :key="`platform-${platformIndex}`">
                                <div class="col-lg-5">
                                    <div class="form-group">
                                        <div :class="`form-floating ${platform.type.length ? 'active' : ''}`">
                                            <select :id="`platform${platformIndex}`"
                                                    class="form-select input-md"
                                                    aria-label="Default select example"
                                                    v-model="platform.type">
                                                <option value="Windows">Windows</option>
                                                <option value="Linux">Linux</option>
                                                <option value="MacOS">MacOS</option>
                                                <option value="iOS">iOS</option>
                                                <option value="Android">Android</option>
                                            </select>
                                            <label :for="`platform${platformIndex}`">Platform</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div :class="`form-floating ${platform.url.length ? 'active' : ''}`">
                                            <input
                                                :id="`platformUrl${platformIndex}`"
                                                type="text"
                                                class="form-control input-md"
                                                placeholder="Url"
                                                v-model="platform.url"
                                            />
                                            <label :for="`platformUrl${platformIndex}`">Url</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1">
                                    <div class="form-group">
                                        <button type="button"
                                                class="btn-icon btn-icon-transparent"
                                                @click="removePlatform(platformIndex)">
                                            <i class="feather-x text-danger"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary text-white" @click="addNewLink">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {onMounted, ref} from 'vue';
    import {Modal} from 'bootstrap';
    import axios from 'axios'
    import CloseIcon from '@/components/icons/CloseIcon';
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import ClockIcon from '@/components/icons/ClockIcon';
    import ImageUploader from "@/components/uploader/ImageUploader";

    export default {
        name: 'AddNewLInkModal',
        emits: ['addNewLink'],
        components: {ImageUploader, ClockIcon, CloseIcon, Datepicker},
        setup(props, {emit}) {
            const addNewLinkModal = ref(null);
            const countryList = ref([]);
            const newLinkTypes = ref([
                {
                    title: 'Direct',
                    description: 'Redirect user to url instantly.'
                },
                {
                    title: 'Frame',
                    description: 'Show url inside iframe with BeLink navigation bar.'
                },
                {
                    title: 'Splash',
                    description: 'Show splash page with optional ads and redirect user to url after a delay.'
                },
                {
                    title: 'Link Page',
                    description: 'Show specified link page with BeLink navigation bar and button to open long url.'
                },
                {
                    title: 'Overlay',
                    description: 'Redirect user instantly and show specified overlay over the link.'
                }
            ]);
            const formData = ref({
                newLink: '',
                newLinkType: 'Direct',
                status: 'Activate',
                password: '',
                scheduleStartDate: null,
                scheduleStartTime: null,
                scheduleEndDate: null,
                scheduleEndTime: null,
                title: '',
                description: '',
                image: '',
                maxClicks: '',
                redirectUrl: '',
                locationTargeting: [
                    {
                        country: 'United States',
                        url: ''
                    }
                ],
                deviceTargeting: [
                    {
                        type: 'Mobile',
                        url: ''
                    }
                ],
                platformTargeting: [
                    {
                        type: 'Windows',
                        url: ''
                    }
                ],
            });

            const getImageFile = (file) => {
                formData.value.image = file;
            }
            const getCountries = () => {
                axios.get('https://restcountries.com/v3.1/all')
                    .then((response) => {
                        countryList.value = response.data;
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            }
            const addMoreLocation = () => {
                formData.value.locationTargeting.push({
                    country: 'United States',
                    url: ''
                })
            }
            const removeLocation = (index) => {
                formData.value.locationTargeting.splice(index, 1)
            }
            const addMoreDevice = () => {
                formData.value.deviceTargeting.push({
                    type: 'Mobile',
                    url: ''
                })
            }
            const removeDevice = (index) => {
                formData.value.deviceTargeting.splice(index, 1)
            }
            const addMorePlatform = () => {
                formData.value.platformTargeting.push({
                    type: 'Windows',
                    url: ''
                })
            }
            const removePlatform = (index) => {
                formData.value.platformTargeting.splice(index, 1)
            }
            const addNewLink = () => {
                emit('addNewLink', formData.value);
                Modal.getInstance(addNewLinkModal.value)?.hide();
            }

            onMounted(() => {
                getCountries();
            })

            return {
                addNewLinkModal,
                formData,
                newLinkTypes,
                countryList,
                addNewLink,
                getImageFile,
                getCountries,
                addMoreLocation,
                removeLocation,
                addMoreDevice,
                removeDevice,
                addMorePlatform,
                removePlatform
            }
        }
    }
</script>