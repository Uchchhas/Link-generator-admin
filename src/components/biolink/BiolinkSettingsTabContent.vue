<template>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <div :class="`form-floating ${formData.name.length ? 'active' : ''}`">
                    <input
                        id="name"
                        type="text"
                        class="form-control input-md"
                        placeholder="name"
                        v-model="formData.name"
                    />
                    <label for="name">Name</label>
                </div>
                <div class="d-flex align-items-center mt-2">
                    <i class="feather-link me-2"/>
                    <a href="#" target="_blank">
                        https://belink.vebto.com/{{ !isEditLink ? formData.alies : "" }}
                    </a>
                    <input v-if="isEditLink"
                           type="text"
                           class="form-control input-xs"
                           v-model="formData.alies"
                           style="max-width: 100px;">
                    <button type="button"
                            class="btn btn-sm btn-secondary-light ms-2" @click="editLink">
                        Edit
                    </button>
                </div>
            </div>
            <div class="form-group">
                <div :class="`form-floating ${formData.description.length ? 'active' : ''}`">
                    <textarea id="description" class="form-control" rows="5" v-model="formData.description"/>
                    <label for="description" class="mb-2">Description</label>
                </div>
            </div>
            <hr class="mt-0 border-color-2 opacity-100"/>
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
                <div class="row g-2 align-items-center"
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
                <div class="row g-2 align-items-center"
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
                <div class="row g-2 align-items-center"
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
            <hr class="mt-0 border-color-2 opacity-100"/>
            <div class="text-end">
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import ClockIcon from '@/components/icons/ClockIcon';

    export default {
        name: 'BiolinkSettingsTabContent',
        components: {Datepicker, ClockIcon},
        setup() {
            // Data
            const isEditLink = ref(false);
            const countryList = ref([]);
            const formData = ref({
                name: '',
                link: 'https://belink.vebto.com/',
                alies: 'vIb5sv',
                description: '',
                status: 1,
                scheduleStartDate: null,
                scheduleStartTime: null,
                scheduleEndDate: null,
                scheduleEndTime: null,
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

            // Methods
            const editLink = () => {
                isEditLink.value = !isEditLink.value;
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

            // Mounted hook
            onMounted(() => {
                getCountries();
            })

            return {
                countryList,
                formData,
                isEditLink,
                editLink,
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