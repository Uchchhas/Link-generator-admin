<template>
    <layout>
        <breadcrumb title="Biolinks">
            <div>
                <button type="button"
                        class="btn btn-primary text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#biolinkModal">
                    <i class="feather-plus me-2"/> Add New Biolink
                </button>
                <button type="button"
                        class="btn btn-secondary-light ms-2"
                        data-bs-toggle="modal"
                        data-bs-target="#manageTeamModal">
                    <i class="feather-user-plus"/>
                </button>
            </div>
        </breadcrumb>

        <div class="datatable">
            <div class="datatable-filter-wrapper">
                <div class="w-100 d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <a href="#"
                           class="btn btn-link text-decoration-none ps-0 me-2"
                           @click.prevent="toggleCardView">
                            <i :class="`${isCardView ? 'feather-menu' : 'feather-grid'} fs-4`"/>
                        </a>
                        <div class="input-group-iconed">
                            <i class="feather-search prepend"/>
                            <input type="text" class="form-control" placeholder="Type to search for biolinks">
                        </div>
                    </div>
                    <button type="button"
                            class="btn-icon btn-icon-transparent"
                            data-bs-toggle="collapse"
                            data-bs-target="#filterItems"
                            aria-expanded="false"
                            aria-controls="filterItems">
                        <FilterIcon/>
                    </button>
                </div>
                <div class="collapse" id="filterItems">
                    <div class="filters">
                        <div class="filters-item">
                            <label for="status" class="text-body-2 mb-1">Status</label>
                            <select id="status" class="form-select input-sm">
                                <option value="Active" selected>Active</option>
                                <option value="Disabled">Disabled</option>
                            </select>
                        </div>
                        <div class="filters-item">
                            <label for="status" class="text-body-2 mb-1">Rotator</label>
                            <select id="status" class="form-select input-sm">
                                <option value="Yes" selected>Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="filters-item">
                            <label for="createdAt" class="text-body-2 mb-1">Created At</label>
                            <select id="createdAt" class="form-select input-sm">
                                <option value="Yes" selected>Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="filters-item">
                            <label for="updatedAt" class="text-body-2 mb-1">Updated At</label>
                            <select id="updatedAt" class="form-select input-sm">
                                <option value="Yes" selected>Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isCardView" class="datatable-card-view-wrapper">
                <div class="row">
                    <div class="col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-4">
                        <div class="card biolink-card">
                            <button type="button"
                                    class="btn btn-link text-decoration-none d-flex flex-column align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#biolinkModal">
                                <i class="feather-plus-square mb-1 fs-1"/> Add New
                            </button>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-4"
                         v-for="(row, index) in tableData.rowData"
                         :key="`row-${index}`">
                        <div class="card biolink-card">
                            <div class="dropdown dropdown-action">
                                <button class="btn-icon btn-icon-transparent dropdown-toggle no-arrow"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        data-notification-count="2">
                                    <i class="feather-more-horizontal fs-6"/>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end has-arrow top-right animate scaleIn">
                                    <li>
                                        <router-link to="/create-biolink" class="dropdown-item">Edit Biolink
                                        </router-link>
                                    </li>
                                    <li><a href="#" class="dropdown-item">Move Team</a></li>
                                    <li>
                                        <router-link to="/dashboard" class="dropdown-item">Analytics</router-link>
                                    </li>
                                    <li><a href="#" class="dropdown-item">Delete Biolink</a></li>
                                </ul>
                            </div>
                            <img width="50"
                                 height="50"
                                 :src="require(`@/assets/images/avatar.jpeg`)"
                                 class="img-fluid rounded-circle mb-2"
                                 alt="User image"/>
                            <p class="mb-0">{{ row.name }}</p>
                            <small class="text-secondary mb-2">{{ row.name }}</small>
                            <span class="badge bg-success rounded-pill">Active</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="datatable-table-wrapper">
                <div v-if="preloader" class="position-relative">
                    <preloader/>
                </div>
                <table v-else class="table mb-0">
                    <thead>
                        <tr>
                            <th class="td-check">
                                <div class="form-check mb-0">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="bulkActionCheckAll"
                                        v-model="tableData.bulkCheckAll"
                                    />
                                    <label class="form-check-label" for="bulkActionCheckAll"/>
                                    <span class="overlay"/>
                                </div>
                            </th>
                            <template v-if="!tableData.selectedRows.length">
                                <th>Name</th>
                                <th>Links</th>
                                <th>Public</th>
                                <th>Rotator</th>
                                <th></th>
                            </template>
                            <template v-else>
                                <th colspan="3">
                                    {{ tableData.selectedRows.length }} item selected
                                </th>
                                <th colspan="2" class="text-end">
                                    <button type="button" class="btn-icon btn-icon-transparent">
                                        <i class="feather-trash fs-5"/>
                                    </button>
                                </th>
                            </template>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :class="isSelectedRow(row) ? 'tr-selected' : ''"
                            v-for="(row, index) in tableData.rowData"
                            :key="`row-${index}`">
                            <td class="td-check">
                                <div class="form-check mb-0">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        :id="`bulkActionCheckRow-${index}`"
                                        :checked="tableData.bulkCheckAll"
                                        @change="isSelectedRow(row) ? removeRowFromSelection(row) : tableData.selectedRows.push(row)"
                                    />
                                    <label class="form-check-label" :for="`bulkActionCheckRow-${index}`"/>
                                    <span class="overlay"/>
                                </div>
                            </td>
                            <td>{{ row.name }}</td>
                            <td>0</td>
                            <td>-</td>
                            <td>-</td>
                            <td class="text-end">
                                <div class="dropdown dropdown-action">
                                    <button class="btn-icon btn-icon-transparent dropdown-toggle no-arrow"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            data-notification-count="2">
                                        <i class="feather-more-vertical fs-6"/>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end has-arrow right-top animate scaleIn">
                                        <li>
                                            <router-link to="/dashboard" class="dropdown-item">Analytics</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/create-biolink" class="dropdown-item">Edit</router-link>
                                        </li>
                                        <li><a href="#" class="dropdown-item"
                                               @click.prevent="copyLink(`this is link ${index}`)">Copy link</a></li>
                                    </ul>
                                </div>
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

        <create-biolink-modal/>
        <manage-team-members-modal/>
    </layout>
</template>

<script>
    import axios from 'axios'
    import {Tooltip} from 'bootstrap';
    import {onMounted, ref, watchEffect} from 'vue';
    import {sweetAlert, copyToClipboard} from '@/utilities/helpers';
    import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
    import FilterIcon from "@/components/icons/FilterIcon";
    import CreateBiolinkModal from '@/components/biolink/CreateBiolinkModal';
    import Preloader from '@/components/preloaders/Preloader';
    import Layout from '@/components/layouts/Layout';
    import ManageTeamMembersModal from '@/components/team/ManageTeamMembersModal';

    export default {
        name: 'BiolinksView',
        components: {ManageTeamMembersModal, Layout, Preloader, CreateBiolinkModal, FilterIcon, Breadcrumb},
        setup() {
            // Data
            const preloader = ref(false);
            const isCardView = ref(false);
            const tableData = ref({
                bulkCheckAll: false,
                rowData: null,
                selectedRows: []
            });

            // Watch
            watchEffect(() => {
                if (tableData.value.bulkCheckAll) {
                    tableData.value.selectedRows = tableData.value.rowData
                } else {
                    tableData.value.selectedRows = []
                }
            })

            // Methods
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
            const isSelectedRow = (row) => {
                return tableData.value.selectedRows.includes(row);
            }
            const removeRowFromSelection = (row) => {
                let index = tableData.value.selectedRows.indexOf(row);
                tableData.value.selectedRows.splice(index, 1);
            }
            const copyLink = (text) => {
                copyToClipboard(text);
                sweetAlert('success', 'Copied link successfully');
            }
            const toggleCardView = () => {
                isCardView.value = !isCardView.value;
            }

            // Mounted Hook
            onMounted(() => {
                getTableData();
                new Tooltip(document.body, {
                    selector: "[data-bs-toggle='tooltip']",
                });
            })

            return {
                preloader,
                tableData,
                isCardView,
                getTableData,
                isSelectedRow,
                removeRowFromSelection,
                copyLink,
                toggleCardView
            }
        }
    }
</script>