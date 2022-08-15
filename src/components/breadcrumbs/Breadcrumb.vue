<template>
    <div class="d-flex align-items-center justify-content-between mb-5">
        <div class="d-flex align-items-center">
            <h4 class="mb-0">{{ title }}</h4>
            <i v-show="showHint"
               class="feather-help-circle pointer-hint ms-2"
               data-bs-toggle="popover"
               :title="hint.title"
               :data-bs-content="hint.description"
               data-bs-placement="bottom"
            />
        </div>
        <slot/>
    </div>
</template>

<script>
    import {onMounted} from 'vue';
    import {Popover} from 'bootstrap';

    export default {
        name: 'Breadcrumb',
        props: {
            title: {
                type: String
            },
            showHint: {
                type: Boolean,
                default: false
            },
            hint: {
                default: () => {
                    return {
                        title: '',
                        description: ''
                    }
                }
            }
        },
        setup() {
            onMounted(() => {
                new Popover(document.body, {
                    selector: "[data-bs-toggle='popover']",
                    trigger: 'hover',
                    html: true
                });
            })
        }
    }
</script>