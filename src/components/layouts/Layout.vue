<template>
    <div class="layout-wrapper">
        <Header/>
        <Sidebar/>
        <div class="content-wrapper">
            <slot/>
        </div>
        <div class="sidebar-overlay" @click="toggleSidebar"/>
    </div>
</template>

<script>
    import Sidebar from '@/components/layouts/Sidebar';
    import Header from '@/components/layouts/Topbar';

    export default {
        name: 'Layout',
        components: {Header, Sidebar},
        setup() {
            const toggleSidebar = () => {
                const body = document.querySelector('body');
                body.classList.toggle('sidebar-opened');
            }

            return {toggleSidebar}
        }
    }
</script>