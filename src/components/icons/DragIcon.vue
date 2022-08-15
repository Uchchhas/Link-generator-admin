<template>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fit="" height="100%" width="100%"
         preserveAspectRatio="xMidYMid meet" focusable="false" :class="`${size}`">
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path
            d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
</template>

<script>
    export default {
        name: 'DragIcon',
        props: {
            size: {
                type: String,
                default: 'size-24'
            }
        }
    }
</script>