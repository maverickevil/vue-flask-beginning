// mock数据模拟
import Mock from "mockjs";

// 图表数据
let List = [];
export default {
  getStatisticalData: () => {
    // Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          xiaomi: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          meizu: Mock.Random.float(100, 8000, 0, 0),
          sumsung: Mock.Random.float(100, 8000, 0, 0),
          xiaomi: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 0,
      msg: "success",
      data: {
        // 饼图
        videoData: [
          {
            name: "xiaomi",
            value: 2999,
          },
          {
            name: "iphone",
            value: 5999,
          },
          {
            name: "vivo",
            value: 1500,
          },
          {
            name: "oppo",
            value: 1999,
          },
          {
            name: "meizu",
            value: 2200,
          },
          {
            name: "sumsung",
            value: 4500,
          },
        ],
        // 柱状图
        userData: [
          {
            date: "Mon.",
            new: 5,
            active: 200,
          },
          {
            date: "Tue.",
            new: 10,
            active: 500,
          },
          {
            date: "Wed.",
            new: 12,
            active: 550,
          },
          {
            date: "Thu.",
            new: 60,
            active: 800,
          },
          {
            date: "Fri.",
            new: 65,
            active: 550,
          },
          {
            date: "Sat.",
            new: 53,
            active: 770,
          },
          {
            date: "Sun.",
            new: 33,
            active: 170,
          },
        ],
        // 折线图
        orderData: {
          date: [
            "20221001",
            "20221002",
            "20221003",
            "20221004",
            "20221005",
            "20221006",
            "20221007",
          ],
          data: List,
        },
      },
    };
  },
};
