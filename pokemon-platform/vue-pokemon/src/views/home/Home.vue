<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px">
            <el-card shadow="hover">
                <div class="user">
                    <img src="../../assets/images/pikachu.jpeg" alt="" />
                    <div class="userinfo">
                        <p class="name">{{ cardData.name }}</p>
                        <p class="role">{{ cardData.display }}</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>{{ cardlabel.attr + ' :' }}<span>{{ cardData.attr }}</span></p>
                    <p>{{ cardlabel.desc + ' :' }}<span>{{ cardData.desc + '。' }}</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top: 20px" height="450px">
                <el-table :data="arrayData" style="font-size: 10px">
                    <el-table-column
                        v-for="(val, key) in arrayLabel"
                        :key="key"
                        :prop="key"
                        :label="val"
                    >
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px">
            <div class="kind">
                <el-card 
                    :body-style="{ display: 'flex', padding: 0 }"
                    v-for="item in friendData"
                    :key="item.name"
                >
                    <!-- 动态图标/颜色 -->
                    <component
                        class="icons"
                        :is="item.icon"
                        :style="{ background: item.color }"
                    ></component>
                    <div class="details">
                        <p class="name">{{ item.name }}</p>
                        <p class="desc">{{ item.desc }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px">
                <div ref="echart01" style="height: 280px"></div>
            </el-card>
            <div class="graph">
                <el-card style="height: 260px">
                    <div ref="echart02" style="height: 240px"></div>
                </el-card>
                <el-card style="height: 260px">
                    <div ref="echart03" style="height: 240px"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>  
</template>

<script>
import { 
    defineComponent, 
    getCurrentInstance, 
    onMounted, 
    ref,
    reactive,
} from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
    setup() {
        const { proxy } = getCurrentInstance();
        let cardData = ref([]);
        let arrayData = ref([]);
        let friendData = ref([]);

        const cardlabel = {
            attr: '属性',
            desc: '描述',
        };

        const arrayLabel = {
            name: '宝可梦',
            id: '图鉴',
            attribute: '属性',
            weakness: '弱点',
            skill: '招式',
        };

        // 调用方法
        onMounted(() => {
            getCardData();
            getArrayData();
            getFriendData();
            getChartData();
        });

        // 获取数据
        const getCardData = async () => {
            let res = await proxy.$api.getCardData();
            // console.log(res);
            cardData.value = res;
        };
        const getArrayData = async () => {
            let res = await proxy.$api.getArrayData();
            arrayData.value = res;
        };
        const getFriendData = async () => {
            let res = await proxy.$api.getFriendData();
            friendData.value = res;
        };

        /* 关于echarts表格渲染部分 */
        // 折线和柱状图的配置
        let xOptions = reactive({
            // 图例文字颜色
            textStyle: {
                color: "#333",
            },
            grid: {
                left: "10%",
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
                "#8d98b3", 
                "#3254a8", 
                "#a8325e",
                "#a86f32"
            ],
            series: [],
        });
        // 饼状图的配置
        let pieOptions = reactive({
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
        });
        // echarts表格数据填充
        let playData = reactive({
            xData: [], 
            series: [],
        });
        let locateData = reactive({
            xData: [],
            series: [],
        });
        let goodsData = reactive({
            series: [],
        });
        // 获取数据
        const getChartData = async () => {
            // 请求数据
            let result = await proxy.$api.getChartData();
            
            // 折线图：整理数据
            let playRes = result.playData;
            playData.xData = playRes.date;
            const keyArray = Object.keys(playRes.data[0]);
            const series = [];
            keyArray.forEach((key) => {
                series.push({
                    name: key,
                    data: playRes.data.map((item) => item[key]),
                    type: "line",
                });
            });
            playData.series = series;
            xOptions.xAxis.data = playData.xData;
            xOptions.series = playData.series;
            // 折线图：进行渲染
            let playEcharts = echarts.init(proxy.$refs['echart01']);
            playEcharts.setOption(xOptions);

            // 柱状图：整理数据
            let locateRes = result.locateData;
            locateData.xData = locateRes.map((item) => item.date);
            locateData.series = [
                {
                    name: "新增宝可梦",
                    data: locateRes.map((item) => item.new),
                    type: "bar"
                },
                {
                    name: "活跃宝可梦",
                    data: locateRes.map((item) => item.active),
                    type: "bar"
                }
            ];
            xOptions.xAxis.data = locateData.xData;
            xOptions.series = locateData.series;
            // 柱状图：进行渲染
            let locateEcharts = echarts.init(proxy.$refs['echart02']);
            locateEcharts.setOption(xOptions);

            // 饼状图：整理数据
            let goodsRes = result.goodsData;
            goodsData.series = [
                {
                    data: goodsRes,
                    type: "pie"
                }
            ];
            pieOptions.series = goodsData.series;
            // 饼状图：进行传染
            let goodsEcharts = echarts.init(proxy.$refs['echart03']);
            goodsEcharts.setOption(pieOptions);
        };

        return {
            arrayData,
            arrayLabel,
            friendData,
            cardData,
            cardlabel
        }
    }
});
</script>

<style lang="less" scoped>
.home {
    .user {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        }
        & > .userinfo > .name {
            margin-bottom: 20px;
        }
    }
    .login-info {
        p {
            line-height: 30px;
            font-size: 14px;
            color: #999;
            span {
                color: #666;
                margin-left: 60px;
            }
        }
    }
    .cell {
        font-size: 10px;
    }
    .kind {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-card {
            width: 32%;
            margin-bottom: 20px;
        }
        .icons {
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }
        .details {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .name {
                font-size: 22px;
                margin-bottom: 10px;
            }
            .desc {
                font-size: 14px;
                text-align: center;
                color: #999;
            }
        }
    }
    .graph {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .el-card {
            width: 49%;
        }
    }
}
</style>