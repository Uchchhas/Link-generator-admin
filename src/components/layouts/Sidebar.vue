<template>
    <aside class="sidebar">
        <div class="sidebar-logo">
            <img
                width="40"
                height="40"
                :src="sidebarData.logo"
                class="img-fluid"
                alt="Logo"
            />
            <button type="button"
                    class="btn-icon btn-icon-transparent btn-sidebar-toggle d-none"
                    @click="toggleSidebar">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h24v24H0z"></path>
                        <g fill="currentColor" fill-rule="nonzero">
                            <path
                                d="M14.3283 11.4343 18.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"
                                opacity=".48"></path>
                            <path
                                d="M8.3283 11.4343 12.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"></path>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <div class="sidebar-admin">
            <router-link to="/profile" class="d-flex align-items-center">
                <img
                    width="40"
                    height="40"
                    :src="sidebarData.admin.avatar"
                    class="rounded-circle"
                    alt="Admin image"
                />
                <div class="ms-3 info">
                    <h6 class="mb-0">{{ sidebarData.admin.name }}</h6>
                    <p class="mb-0">{{ sidebarData.admin.role }}</p>
                </div>
            </router-link>
        </div>
        <div class="sidebar-links">
            <ul class="sidebar-links-nav">
                <li v-for="(link, index) in sidebarData.links" :key="`sidebar-link-${index}`">
                    <router-link :to="link.url" active-class="active">
                        <i :class="`feather-${link.icon}`"/>
                        <span class="title">{{ link.title }}</span>
                    </router-link>
                </li>
                <!--<li class="has-children">
                    <a href="#dropdownExample1" data-bs-toggle="collapse">
                        <i class="feather-globe"/> Demo Dropdown
                    </a>
                    <div class="collapse" id="dropdownExample1">
                        <ul>
                            <li>
                                <router-link to="/">Option 1</router-link>
                            </li>
                            <li>
                                <router-link to="/">Option 1</router-link>
                            </li>
                            <li>
                                <router-link to="/">Option 1</router-link>
                            </li>
                            <li>
                                <router-link to="/">Option 1</router-link>
                            </li>
                            <li>
                                <router-link to="/">Option 1</router-link>
                            </li>
                        </ul>
                    </div>
                </li>-->
            </ul>
        </div>
        <div class="sidebar-footer">
            <div class="d-flex align-items-center justify-content-between mb-2">
                <span class="text-caption">Total usage</span>
                <span class="badge bg-primary">65/100</span>
            </div>
            <div class="progress" style="height: 6px;">
                <div class="progress-bar"
                     role="progressbar"
                     style="width: 65%;"
                     aria-valuenow="65"
                     aria-valuemin="0"
                     aria-valuemax="100"/>
            </div>
            <router-link to="/upgrade-plan" class="w-100 mt-3 text-white btn btn-sm rounded btn-danger">
                Upgrade Plan
            </router-link>
        </div>
    </aside>
</template>

<script>
    import {ref} from 'vue'

    export default {
        name: 'Sidebar',
        setup() {
            const sidebarData = ref({
                logo: require(`@/assets/images/logo.png`),
                admin: {
                    id: 1,
                    name: 'John Doe',
                    role: 'admin',
                    avatar: require(`@/assets/images/avatar.jpeg`)
                },
                links: [
                    {
                        url: '/dashboard',
                        icon: 'home',
                        title: 'Dashboard'
                    },
                    {
                        url: '/biolinks',
                        icon: 'instagram',
                        title: 'Biolinks'
                    },
                    {
                        url: '/links',
                        icon: 'link-2',
                        title: 'Links'
                    },
                    {
                        url: '/link-groups',
                        icon: 'grid',
                        title: 'Link Groups'
                    },
                    {
                        url: '/workspaces',
                        icon: 'users',
                        title: 'Team'
                    },
                    {
                        url: '/settings',
                        icon: 'settings',
                        title: 'Settings'
                    },
                ]
            });

            const toggleSidebar = () => {
                const body = document.querySelector('body');
                body.classList.toggle('sidebar-minimized');
            }

            return {sidebarData, toggleSidebar}
        }
    }
</script>