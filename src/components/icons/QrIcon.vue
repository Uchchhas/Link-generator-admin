<template>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fit="" width="24" height="24"
         preserveAspectRatio="xMidYMid meet" focusable="false" :class="size">
        <path
            d="M4 3a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1H4zm7 0v2h2V3h-2zm5 0a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1h-4zM5 5h2v2H5V5zm12 0h2v2h-2V5zm-6 2v2h2V7h-2zm-8 4v2h2v-2H3zm4 0v2h2v-2H7zm4 0v2h2v-2h-2zm2 2v2h2v-2h-2zm2 0h2v-2h-2v2zm2 0v2h2v-2h-2zm2 0h2v-2h-2v2zm0 2v2h2v-2h-2zm0 2h-2v2h2v-2zm0 2v2h2v-2h-2zm-2 0h-2v2h2v-2zm-2 0v-2h-2v2h2zm-2 0h-2v2h2v-2zm0-2v-2h-2v2h2zm2 0h2v-2h-2v2zM4 15a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1H4zm1 2h2v2H5v-2z"></path>
    </svg>
</template>

<script>
    export default {
        name: 'QrIcon',
        props: {
            size: {}
        }
    }
</script>