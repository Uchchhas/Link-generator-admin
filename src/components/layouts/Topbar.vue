<template>
    <header class="topbar">
        <!--<div class="topbar-search">
            <div class="topbar-search-input">
                <div class="input-group">
                    <i class="feather-search"/>
                    <input type="text" class="form-control" placeholder="Search...">
                </div>
            </div>
            <button type="button"
                    class="btn-icon btn-icon-transparent"
                    @click="toggleSearch">
                <i class="feather-x fs-6"/>
            </button>
        </div>-->
        <div class="topbar-wrapper">
            <div class="topbar-left">
                <button type="button"
                        class="btn-icon btn-icon-transparent d-block d-xl-none"
                        @click="toggleSidebar">
                    <i class="feather-menu fs-6"/>
                </button>
                <!--<button type="button"
                        class="btn-icon btn-icon-transparent"
                        @click="toggleSearch">
                    <i class="feather-search fs-6"/>
                </button>-->
                <div class="dropdown me-3">
                    <button class="btn bg-gray-200 dropdown-toggle text-secondary py-2 d-flex align-items-center border-0"
                            type="button"
                            id="dropdownTeam"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-notification-count="2">
                        <i class="feather-users me-2"/> <span class="text-caption">Team One</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end has-arrow top-right animate scaleIn"
                        aria-labelledby="dropdownTeam">
                        <li><a class="dropdown-item" href="#">Team One</a></li>
                        <li><a class="dropdown-item" href="#">Team Two</a></li>
                        <li><a class="dropdown-item" href="#">Team Three</a></li>
                    </ul>
                </div>
            </div>
            <div class="topbar-right">
                <div class="dropdown notification me-3">
                    <button class="btn-icon btn-icon-transparent dropdown-toggle no-arrow"
                            type="button"
                            id="dropdownNotification"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-notification-count="2">
                        <i class="feather-bell fs-6"/>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end has-arrow top-right animate scaleIn"
                        aria-labelledby="dropdownNotification">
                        <li>
                            <div class="dropdown-item pointer-none">
                                <h6 class="mb-0 text-body-3">Notifications</h6>
                                <p class="mb-0 text-secondary text-body-2">You have 2 unread message</p>
                            </div>
                        </li>
                        <li><hr class="dropdown-divider dashed"></li>
                        <li v-for="(notification, index) in topbarData.notifications"
                            :key="`notification-${index}`">
                            <router-link class="dropdown-item d-flex align-items-center" to="/">
                                <div class="icon-wrapper">
                                    <i :class="`feather-${notification.icon}`"/>
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0 text-body-3">
                                        {{ notification.title }}
                                        <span class="text-secondary text-caption">{{ notification.subtitle }}</span>
                                    </h6>
                                    <small class="text-disabled time">{{ notification.time }}</small>
                                </div>
                            </router-link>
                        </li>
                        <li><hr class="dropdown-divider dashed"></li>
                        <li><router-link class="dropdown-item text-center" to="/">Show all</router-link></li>
                    </ul>
                </div>
                <div class="dropdown me-3">
                    <button class="btn bg-gray-200 dropdown-toggle text-secondary py-2 d-flex align-items-center border-0"
                            type="button"
                            id="dropdownNotification"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-notification-count="2">
                        <i class="feather-globe me-2"/> <span class="text-caption">EN</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end has-arrow top-right animate scaleIn"
                        aria-labelledby="dropdownNotification">
                        <li><a class="dropdown-item" href="#">English</a></li>
                        <li><a class="dropdown-item" href="#">Arabic</a></li>
                        <li><a class="dropdown-item" href="#">Spanish</a></li>
                        <li><a class="dropdown-item" href="#">Hindi</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <button class="btn p-0 border-0 bg-transparent dropdown-toggle no-arrow"
                            type="button"
                            id="dropdownAdmin"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                        <img
                            width="40"
                            height="40"
                            :src="topbarData.admin.avatar"
                            class="img-fluid rounded-circle"
                            alt="Admin image"
                        />
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end has-arrow top-right animate scaleIn"
                        aria-labelledby="dropdownAdmin">
                        <li>
                            <div class="dropdown-item pointer-none">
                                <h6 class="mb-0 text-body-3">{{ topbarData.admin.name }}</h6>
                                <p class="mb-0 text-secondary text-body-2">{{ topbarData.admin.email }}</p>
                            </div>
                        </li>
                        <li><hr class="dropdown-divider dashed"></li>
                        <li><router-link class="dropdown-item" to="/">Home</router-link></li>
                        <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
                        <li><router-link class="dropdown-item" to="/settings">Settings</router-link></li>
                        <li><hr class="dropdown-divider dashed"></li>
                        <li><router-link class="dropdown-item" to="/">Logout</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import {ref} from 'vue';

    export default {
        name: 'Topbar',
        setup() {
            const topbarData = ref({
                admin: {
                    id: 1,
                    name: 'John Doe',
                    email: 'john@admin.com',
                    role: 'admin',
                    avatar: require(`@/assets/images/avatar.jpeg`)
                },
                notifications: [
                    {
                        id: 1,
                        icon: 'airplay',
                        title: 'Your order is placed',
                        subtitle: 'Waiting for shipping',
                        time: '2 days ago'
                    },
                    {
                        id: 2,
                        icon: 'archive',
                        title: 'Your card is generated',
                        subtitle: 'Waiting for printing',
                        time: '3 days ago'
                    },
                    {
                        id: 3,
                        icon: 'briefcase',
                        title: 'New user created',
                        subtitle: 'Joining soon',
                        time: '1 week ago'
                    }
                ]
            });

            const toggleSearch = () => {
                const searchInput = document.querySelector('.topbar-search');
                searchInput.classList.toggle('active');
            }

            const toggleSidebar = () => {
                const body = document.querySelector('body');
                body.classList.toggle('sidebar-opened');
            }

            return {topbarData, toggleSearch, toggleSidebar}
        }
    }
</script>