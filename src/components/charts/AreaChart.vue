<template>
    <div>
        <apexchart
            type="area"
            height="350"
            :options="chartOptions"
            :series="series"
        />
    </div>
</template>

<script>
    import {ref} from "vue";
    import VueApexCharts from "vue3-apexcharts";

    export default {
        name: 'AreaChart',
        components: {
            apexchart: VueApexCharts,
        },
        props: {
            id: {},
            data: {},
            categories: {}
        },
        setup(props) {
            const chartOptions = ref(
                {
                    chart: {
                        id: props.id,
                        type: 'area',
                        toolbar: false,
                    },
                    grid: {
                        strokeDashArray: 5,
                        borderColor: '#e3e3e3',
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth',
                        colors: ['#00AB55']
                    },
                    fill: {
                        type: 'gradient',
                        colors: ['#00AB55'],
                        gradient: {
                            opacityFrom: 0.4,
                            opacityTo: 0
                        }
                    },
                    xaxis: {
                        categories: props.categories,
                        labels: {
                            style: {
                                colors: '#637381',
                                fontSize: '12px'
                            },
                        }
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: '#637381',
                                fontSize: '12px'
                            },
                        }
                    }
                }
            );
            const series = ref(
                [
                    {
                        name: 'series-1',
                        data: props.data
                    }
                ]
            )

            return {chartOptions, series}
        }
    }
</script>