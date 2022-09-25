<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg" />
                    <div class="userinfo">
                        <p class="name">{{userInfo.name}}</p>
                        <p class="access">{{userInfo.display}}</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>当前登录时间：<span>{{userInfo.current_login_date}}</span></p>
                    <p>IP & 登录地点：<span>{{userInfo.pub_ip_login_locate}}</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px; height: 460px;">
                <el-table :data="tableData">
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col style="margin-top: 20px" :span="16">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="num">{{item.value}}</p>
                        <p class="txt">{{item.name}}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-card style="height: 280px">
            <echart :chartData="echartData.order" style="height: 280px" />
        </el-card>
        <div class="graph">
            <el-card style="height: 260px">
                <echart :chartData="echartData.user" style="height: 240px" />
            </el-card>
            <el-card style="height: 260px">
                <echart :chartData="echartData.video" :isAxisChart="false" style="height: 240px" />
            </el-card>
        </div>
    </el-row>
</template>

<script>
    import { getData, infoApi, orderApi } from '@/libs/api.js'
    import Echart from '@/components/Echarts.vue'

    export default {
        name: "Home",
        components: {
            Echart
        },
        data() {
            return {
                userImg: require("@/assets/images/avatar.jpeg"),
                userInfo: {},
                tableLabel: {
                    name: "品牌",
                    todayBuy: "今日购买",
                    monthBuy: "本月购买",
                    totalBuy: "总购买",
                },
                tableData: [],
                countData: [],
                echartData: {
                    order: {
                        xData: [],
                        series: []
                    },
                    user: {
                        xData: [],
                        series: []
                    },
                    video: {
                        series: []
                    }
                }
            };
        },
        mounted() {
            // mock接口测试
            getData().then(res => {
                const { code, msg, data } = res.data;
                if (code === 0) {
                    // 折线图
                    const order = data.orderData;
                    const keyArray = Object.keys(order.data[0]);
                    const series = [];
                    keyArray.forEach(key => {
                        series.push({
                            name: key,
                            data: order.data.map(item => item[key]),
                            type: "line"
                        })
                    });
                    this.echartData.order.xData = order.date;
                    this.echartData.order.series = series;

                    // 柱状图
                    this.echartData.user.xData = data.userData.map(item => item.date);
                    this.echartData.user.series = [
                        {
                            name: "新增用户",
                            data: data.userData.map(item => item.new),
                            type: "bar"
                        },
                        {
                            name: "活跃用户",
                            data: data.userData.map(item => item.active),
                            type: "bar"
                        }
                    ];

                    // 饼状图
                    this.echartData.video.series = [
                        {
                            data: data.videoData,
                            type:  "pie"
                        }
                    ];
                }            
            });

            // flask后端接口
            infoApi().then(res => {
                const { code, msg, data } = res.data;
                if (code === 0) {
                    this.userInfo = data;
                }
                // console.log(res);
            }).catch(err => {
                console.log(err);
            });

            orderApi().then(res => {
                const { code, msg, data } = res.data;
                if (code === 0) {
                    this.tableData = data.tableData;
                    this.countData = data.countData;
                }
                // console.log(res);
            }).catch(err => {
                console.log(err);
            });
        }
    }
</script>
