<template>
    <layout>
        <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
            <li v-for="(navItem, index) in dashboardData.tabs"
                :key="`nav-item-${index}`"
                class="nav-item"
                role="presentation">
                <button :class="`nav-link ${index === isActiveTab ? 'active' : ''}`"
                        :id="`${navItem.title.toLowerCase()}-tab`"
                        data-bs-toggle="tab"
                        :data-bs-target="`#${navItem.title.toLowerCase()}`"
                        type="button"
                        role="tab"
                        :aria-controls="navItem.title.toLowerCase()"
                        :aria-selected="index === isActiveTab ? 'true' : 'false'"
                        @click="isActiveTab = index">
                    {{ navItem.title }}
                </button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div v-for="(tabContent, index) in dashboardData.tabs"
                 :key="`nav-item-${index}`"
                 :class="`tab-pane fade ${index === isActiveTab ? 'show active' : ''}`"
                 :id="tabContent.title.toLowerCase()"
                 role="tabpanel"
                 :aria-labelledby="`${tabContent.title.toLowerCase()}-tab`">
                <div class="row">
                    <div class="col-lg-7 mb-4">
                        <div class="card">
                            <div class="card-header mb-4">
                                <h6 class="mb-0">Clicks This Period</h6>
                                <p class="mb-0 text-secondary text-caption">3 Total Clicks</p>
                            </div>
                            <div class="card-body">
                                <div>
                                    <area-chart
                                        :id="tabContent.content.clicks.chartId"
                                        :data="tabContent.content.clicks.data"
                                        :categories="tabContent.content.clicks.categories"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 mb-4">
                        <div class="card h-100">
                            <div class="card-header mb-4">
                                <h6 class="mb-0">Top Devices</h6>
                                <p class="mb-0 text-secondary text-caption">Click count by device</p>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <DonutChart
                                    :id="tabContent.content.devices.chartId"
                                    :data="tabContent.content.devices.data"
                                    :labels="tabContent.content.devices.labels"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card">
                            <div class="card-header mb-4">
                                <h6 class="mb-0">Referrers</h6>
                                <p class="mb-0 text-secondary text-caption">Click count by referrer</p>
                            </div>
                            <div class="card-body" style="min-height: 200px;">
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-center justify-content-between mb-2">
                                        <span>Direct, Email, SMS</span>
                                        <span class="badge bg-primary">4</span>
                                    </li>
                                    <li class="d-flex align-items-center justify-content-between mb-2">
                                        <a href="#">https://www.google.com/</a>
                                        <span class="badge bg-primary">2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 mb-4">
                        <div class="card">
                            <div class="card-header mb-4">
                                <h6 class="mb-0">Top Locations</h6>
                                <p class="mb-0 text-secondary text-caption">Click count by country</p>
                            </div>
                            <div class="card-body" style="min-height: 200px;">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="card">
                            <div class="card-header mb-4">
                                <h6 class="mb-0">Top Browsers</h6>
                                <p class="mb-0 text-secondary text-caption">Click count by browser</p>
                            </div>
                            <div class="card-body">
                                <DonutChart
                                    :id="tabContent.content.browsers.chartId"
                                    :data="tabContent.content.browsers.data"
                                    :labels="tabContent.content.browsers.labels"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="card">
                            <div class="card-header mb-4">
                                <h6 class="mb-0">Top Platforms</h6>
                                <p class="mb-0 text-secondary text-caption">Click count by OS</p>
                            </div>
                            <div class="card-body">
                                <DonutChart
                                    :id="tabContent.content.platforms.chartId"
                                    :data="tabContent.content.platforms.data"
                                    :labels="tabContent.content.platforms.labels"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import {ref} from 'vue';
    import AreaChart from '@/components/charts/AreaChart';
    import DonutChart from '@/components/charts/DonutChart';
    import Layout from "@/components/layouts/Layout";

    export default {
        name: 'DashboardView',
        components: {
            Layout,
            DonutChart,
            AreaChart
        },
        setup() {
            const isActiveTab = ref(0)
            const dashboardData = ref({
                tabs: [
                    {
                        id: 1,
                        title: 'Hourly',
                        content: {
                            clicks: {
                                chartId: 'hourlyClicks',
                                data: [10, 20, 15, 40, 50, 60, 44, 68, 60, 50, 70, 90, 69, 69, 69, 65, 45, 69, 69, 69, 40, 69, 80, 70],
                                categories: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '00:60', '00:70', '00:80', '00:90', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
                            },
                            devices: {
                                chartId: 'hourlyDevices',
                                data: [35, 65],
                                labels: ['Mobile', 'Desktop'],
                            },
                            referrers: '',
                            locations: '',
                            browsers: {
                                chartId: 'hourlyBrowsers',
                                data: [35, 15, 50],
                                labels: ['Opera', 'Safari', 'Chrome'],
                            },
                            platforms: {
                                chartId: 'hourlyPlatforms',
                                data: [35, 30, 35],
                                labels: ['ios', 'Android', 'Windows'],
                            }
                        }
                    },
                    {
                        id: 2,
                        title: 'Weekly',
                        content: {
                            clicks: '',
                            devices: '',
                            referrers: '',
                            locations: '',
                            browsers: '',
                            platforms: ''
                        }
                    },
                    {
                        id: 3,
                        title: 'Monthly',
                        content: {
                            clicks: '',
                            devices: '',
                            referrers: '',
                            locations: '',
                            browsers: '',
                            platforms: ''
                        }
                    },
                    {
                        id: 4,
                        title: 'Yearly',
                        content: {
                            clicks: '',
                            devices: '',
                            referrers: '',
                            locations: '',
                            browsers: '',
                            platforms: ''
                        }
                    },
                    {
                        id: 5,
                        title: 'Custom',
                        content: {
                            clicks: '',
                            devices: '',
                            referrers: '',
                            locations: '',
                            browsers: '',
                            platforms: ''
                        }
                    }
                ]
            })

            return {isActiveTab, dashboardData}
        }
    }
</script>