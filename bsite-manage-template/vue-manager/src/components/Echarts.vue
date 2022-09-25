<template>
    <div ref="echart"></div>
</template>

<script>
    import * as echarts from 'echarts'
    export default {
        props: {
            // 是折线&柱状图、或饼状图
            isAxisChart: {
                type: Boolean,
                default: true
            },
            // 图表数据
            chartData: {
                type: Object,
                default() {
                    return {
                        xData: [],
                        series: []
                    }
                }
            }
        },
        watch: {
            // 监听
            chartData: {
                handler: function() {
                    this.initChart();
                },
                deep: true
            }

        },
        methods: {
            // 初始化
            initChart() {
                this.initChartData();
                if (this.echart) {
                    this.echart.setOption(this.options);
                } else {
                    this.echart = echarts.init(this.$refs.echart);
                    this.echart.setOption(this.options);
                }
            },
            initChartData() {
                if (this.isAxisChart) {
                    this.axisOption.xAxis.data = this.chartData.xData;
                    this.axisOption.series = this.chartData.series;
                } else {
                    this.circleOption.series = this.chartData.series;
                }
            }
        },
        data() {
            return {
                // 是否渲染
                echart: null,
                // 折线&柱状图数据样式
                axisOption: {         
                    // 图例文字颜色
                    textStyle: {
                        color: "#333",
                    },
                    grid: {
                        left: "20%",
                    },
                    // 提示框
                    tooltip: {
                        trigger: "axis",
                    },
                    xAxis: {
                        type: "category", // 类目轴
                        data: [],
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3",
                            },
                        },
                        axisLabel: {
                            interval: 0,
                            color: "#333",
                        },
                    },
                    yAxis: [
                        {
                            type: "value",
                            axisLine: {
                                lineStyle: {
                                    color: "#17b3a3",
                                },
                            },
                        },
                    ],
                    color: [
                        "#2ec7c9", 
                        "#b6a2de", 
                        "#5ab1ef", 
                        "#ffb980", 
                        "#d87a80", 
                        "#8d98b3"
                    ],
                    series: [],
                },
                // 饼状图数据样式
                circleOption: {
                    tooltip: {
                        trigger: "item",
                    },
                    color: [
                        "#0f78f4",
                        "#dd536b",
                        "#9462e5",
                        "#a6a6a6",
                        "#e1bb22",
                        "#39c362",
                        "#3ed1cf",
                    ],
                    series: [],
                }
            }
        },
        computed: {
            options() {
                return this.isAxisChart ? this.axisOption : this.circleOption
            }
        }
    }
</script>
