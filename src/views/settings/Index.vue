<template>
    <layout>
        <breadcrumb title="Settings"/>

        <div class="card settings-tab p-0">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active"
                            id="account-setting-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#account-setting"
                            type="button"
                            role="tab"
                            aria-controls="account-setting"
                            aria-selected="true">
                        Account Settings
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link"
                            id="plan-billing-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#plan-billing"
                            type="button"
                            role="tab"
                            aria-controls="plan-billing"
                            aria-selected="false">
                        Plan & Billing
                    </button>
                </li>
            </ul>
            <div class="card-body">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active p-4"
                         id="account-setting"
                         role="tabpanel"
                         aria-labelledby="account-setting-tab">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="form-group d-flex flex-wrap mb-4">
                                    <label class="me-3 flex-shrink-0">Company Logo</label>
                                    <ImageUploader class="width-200 height-200" @getFile="getImageFile"/>
                                    <small class="align-self-end text-secondary ms-3">
                                        <em>
                                            Recommended size: 200 x 50 px. <br> Allowed PNG or JPEG. Max size of 1MB.
                                        </em>
                                    </small>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div :class="`form-floating ${formData.language.length ? 'active' : ''}`">
                                                <select id="language"
                                                        class="form-select input-md"
                                                        aria-label="Default select example"
                                                        v-model="formData.language">
                                                    <option value="English">English</option>
                                                    <option value="Arabic">Arabic</option>
                                                    <option value="Hindi">Hindi</option>
                                                    <option value="Spanish">Spanish</option>
                                                    <option value="Russian">Russian</option>
                                                </select>
                                                <label for="language">Language</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div :class="`form-floating ${formData.country.length ? 'active' : ''}`">
                                                <select id="country"
                                                        class="form-select input-md"
                                                        aria-label="Default select example"
                                                        v-model="formData.country">
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="England">England</option>
                                                    <option value="America">America</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Canada">Canada</option>
                                                </select>
                                                <label for="country">Country</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div
                                                :class="`form-floating ${formData.dateFormate.length ? 'active' : ''}`">
                                                <select id="dateFormate"
                                                        class="form-select input-md"
                                                        aria-label="Default select example"
                                                        v-model="formData.dateFormate">
                                                    <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                                                    <option value="MM-DD-YYYY">MM-DD-YYYY</option>
                                                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                                </select>
                                                <label for="dateFormate">Date Formate</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div
                                                :class="`form-floating ${formData.timeFormate.length ? 'active' : ''}`">
                                                <select id="timeFormate"
                                                        class="form-select input-md"
                                                        aria-label="Default select example"
                                                        v-model="formData.timeFormate">
                                                    <option value="12 Hours">12 Hours</option>
                                                    <option value="24 Hours">24 Hours</option>
                                                </select>
                                                <label for="timeFormate">Country</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button type="button" class="btn btn-secondary-close me-2">Cancel</button>
                            <button type="button" class="btn btn-primary text-white">Save Changes</button>
                        </div>
                    </div>
                    <div class="tab-pane fade"
                         id="plan-billing"
                         role="tabpanel"
                         aria-labelledby="plan-billing-tab">
                        <div class="p-4">
                            <div class="plan-banner">
                                <div class="d-flex flex-column flex-sm-row justify-content-between">
                                    <div class="mb-4">
                                        <p class="mb-1 text-secondary">Your Current Plan</p>
                                        <h5 class="mb-0 text-secondary">Premium</h5>
                                    </div>
                                    <div class="mb-4 text-start text-sm-end">
                                        <p class="mb-2 text-secondary">Upgrade plan to get access to more cards</p>
                                        <router-link to="/upgrade-plan" class="btn btn-sm btn-danger text-white">
                                            Upgrade Plan
                                        </router-link>
                                    </div>
                                </div>
                                <div class="progress mb-3">
                                    <div
                                        class="progress-bar bg-primary"
                                        role="progressbar"
                                        style="width: 65%"
                                        aria-valuenow="65"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    />
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <small class="text-secondary">
                                        You have used 65 biolinks across all teams
                                    </small>
                                    <span class="badge bg-primary">65/100</span>
                                </div>
                            </div>
                        </div>
                        <div class="datatable">
                            <div class="datatable-table-wrapper">
                                <div v-if="preloader" class="position-relative">
                                    <preloader/>
                                </div>
                                <table v-else class="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Order No</th>
                                            <th>Plan</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, index) in tableData.rowData"
                                            :key="`row-${index}`">
                                            <td>{{ row.name }}</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>
                                                <h6 class="mb-0">
                                                    <span class="badge rounded-pill bg-success py-2 px-3">
                                                        Paid
                                                    </span>
                                                </h6>
                                            </td>
                                            <td class="text-end">
                                                <a href="#" class="btn btn-link text-decoration-none">
                                                    <i class="feather-download fs-6 me-2"/> Download Invoice
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="datatable-footer-wrapper">
                                <div class="page-row-selection me-4">
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle d-flex align-items-center"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-notification-count="2">
                                            Rows per page <span class="ms-3">10</span>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end animate scaleIn">
                                            <li><a href="#" class="dropdown-item">5</a></li>
                                            <li><a href="#" class="dropdown-item">10</a></li>
                                            <li><a href="#" class="dropdown-item">25</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="table-pagination">
                                    <div class="pagination-label me-3">
                                        1-10 of 50
                                    </div>
                                    <div class="pagination-navigation">
                                        <button type="button" class="btn-icon btn-icon-transparent">
                                            <i class="feather-chevron-left fs-5"/>
                                        </button>
                                        <button type="button" class="btn-icon btn-icon-transparent">
                                            <i class="feather-chevron-right fs-5"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import {onMounted, ref} from 'vue';
    import Layout from '@/components/layouts/Layout';
    import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
    import ImageUploader from '@/components/uploader/ImageUploader';
    import Preloader from "@/components/preloaders/Preloader";
    import axios from "axios";
    import {Tooltip} from "bootstrap";

    export default {
        name: 'Index',
        components: {Preloader, ImageUploader, Layout, Breadcrumb},
        emits: ['addImageWidget'],
        setup(props, {emit}) {
            // Data
            const formData = ref({
                language: 'English',
                country: 'Saudi Arabia',
                dateFormate: 'DD-MM-YYYY',
                timeFormate: '12 Hours',
            });
            const preloader = ref(false);
            const tableData = ref({
                bulkCheckAll: false,
                rowData: null,
                selectedRows: []
            });


            // Methods
            const getImageFile = (file) => {
                formData.value.src = URL.createObjectURL(file);
            }
            const addImage = () => {
                emit('addImageWidget', formData.value);
            }
            const getTableData = () => {
                preloader.value = true;

                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then((response) => {
                        tableData.value.rowData = response.data;
                        preloader.value = false;
                    })
                    .catch((error) => {
                        console.log(error)
                        preloader.value = false;
                    });
            }

            // Mounted Hook
            onMounted(() => {
                getTableData();
                new Tooltip(document.body, {
                    selector: "[data-bs-toggle='tooltip']",
                });
            })

            return {
                formData,
                addImage,
                getImageFile,
                preloader,
                tableData,
                getTableData
            }
        }
    }
</script>