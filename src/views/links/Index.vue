<template>
    <layout>
        <breadcrumb title="Links">
            <button type="button"
                    class="btn btn-primary text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#addNewLinkModal">
                <i class="feather-plus me-2"/> Shorten Link
            </button>
        </breadcrumb>

        <div class="datatable">
            <div class="datatable-filter-wrapper">
                <div class="w-100 d-flex align-items-center justify-content-between">
                    <div class="input-group-iconed">
                        <i class="feather-search prepend"/>
                        <input type="text" class="form-control" placeholder="Type to search for biolinks">
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
            <div class="datatable-table-wrapper">
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
                            <th>Summary</th>
                            <th>Clicks</th>
                            <th>Type</th>
                            <th>Password</th>
                            <th>Expires At</th>
                            <th>Last Clicked</th>
                            <th></th>
                        </template>
                        <template v-else>
                            <th colspan="5">
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
                    <tr :class="isSelectedRow(row) ? 'tr-selected' : ''" v-for="(row, index) in tableData.rowData"
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
                        <td>
                            <div class="d-flex flex-column">
                                demo.link.com
                                <a href="#" class="d-flex align-items-center secondary-link">
                                   <i class="feather-link me-1 text-caption"/> https://belink.vebto.com
                                </a>
                            </div>
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
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
                                    <li><router-link to="/dashboard" class="dropdown-item">Link statistics</router-link></li>
                                    <li><a href="#" class="dropdown-item" @click.prevent="copyLink(`this is link ${index}`)">Copy link</a></li>
                                    <li><router-link to="/create-biolink" class="dropdown-item">Edit link</router-link></li>
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

        <AddNewLInkModal/>
    </layout>
</template>

<script>
    import axios from 'axios';
    import {Tooltip} from 'bootstrap';
    import {copyToClipboard, sweetAlert} from '@/utilities/helpers';
    import {onMounted, ref, watchEffect} from 'vue';
    import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
    import FilterIcon from "@/components/icons/FilterIcon";
    import Preloader from "@/components/preloaders/Preloader";
    import AddNewLInkModal from "@/components/biolink/AddNewLInkModal";
    import Layout from "@/components/layouts/Layout";

    export default {
        name: 'Index',
        components: {Layout, AddNewLInkModal, Preloader, FilterIcon, Breadcrumb},
        setup() {
            // Data
            const preloader = ref(false);
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
                getTableData,
                isSelectedRow,
                removeRowFromSelection,
                copyLink
            }
        }
    }
</script>