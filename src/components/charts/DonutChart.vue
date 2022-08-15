<template>
    <div>
        <apexchart
            ref="donut"
            width="400"
            type="donut"
            :options="chartOptions"
            :series="series"
        />
    </div>
</template>

<script>
    import {ref} from "vue";
    import VueApexCharts from "vue3-apexcharts";

    export default {
        name: "DonutChart",
        components: {
            apexchart: VueApexCharts,
        },
        props: {
            id: {},
            data: {},
            labels: {}
        },
        setup(props) {
            const chartOptions = ref(
                {
                    labels: props.labels,
                    legend: {
                        show: false
                    }
                }
            );
            const series = ref(
                props.data,
            )

            return {chartOptions, series}
        }
    }
</script>