export default {
    getHomeData: () => {
        return {
            code: 0,
            msg: 'success',
            data: {
                // 首页card数据: 左侧上方数据获取
                cardData: {
                  name: "Pika",
                  display: "ピカチュウ",
                  attr: "电 / 地面 / 0.4m / 6.0kg / 鼠类宝可梦",
                  desc: "越是能制造出强大电流的皮卡丘，脸颊上的囊就越柔软"
                },
                // 首页array数据: 左侧表格数据获取
                arrayData: [
                    {
                        name: '妙蛙种子',
                        id: 1,
                        attribute: '草 / 毒',
                        weakness: '火 / 冰 / 飞行 / 超能力',
                        skill: '藤鞭 / 毒粉 / 飞叶快刀'
                    },
                    {
                        name: '小火龙',
                        id: 4,
                        attribute: '火',
                        weakness: '水 / 地面 / 岩石',
                        skill: '愤怒 / 劈开 / 喷射火焰'
                    },
                    {
                        name: '杰尼龟',
                        id: 7,
                        attribute: '水',
                        weakness: '草 / 电',
                        skill: '水枪 / 咬住 / 火箭头槌'
                    },
                    {
                        name: '波波',
                        id: 16,
                        attribute: '一般 / 飞行',
                        weakness: '电 / 冰 / 岩石',
                        skill: '龍捲風 / 燕返 / 空氣利刃'
                    },
                    {
                        name: '皮皮',
                        id: 35,
                        attribute: '妖精',
                        weakness: '毒 / 钢',
                        skill: '意念頭錘 / 拍擊 / 魅惑之聲'
                    },
                    {
                        name: '地鼠',
                        id: 50,
                        attribute: '地面',
                        weakness: '水 / 草 / 冰',
                        skill: '擲泥 / 挖洞 / 泥巴射擊'
                    }
                ],
                // 首页friend数据: 右侧上方数据获取
                friendData: [
                    {
                        name: "小智",
                        desc: "搭档: 皮卡丘",
                        icon: "GoldMedal",
                        color: "#2ec7c9",
                    },
                    {
                        name: "小霞",
                        desc: "搭档: 波克比",
                        icon: "SwitchFilled",
                        color: "#ffb980",
                    },
                    {
                        name: "大木",
                        desc: "搭档: 梦幻",
                        icon: "MagicStick",
                        color: "#5ab1ef",
                    },  
                    {
                        name: "小茂",
                        desc: "搭档: 伊布",
                        icon: "Medal",
                        color: "#2ec7c9",
                    },
                    {
                        name: "小刚",
                        desc: "搭档: 大岩蛇",
                        icon: "SwitchFilled",
                        color: "#ffb980",
                    },
                    {
                        name: "火箭队",
                        desc: "喵喵 & 果然翁",
                        icon: "MapLocation",
                        color: "#5ab1ef",
                    }
                ],
                // 首页echart渲染: 右侧下方数据获取
                echartData: {
                    "playData": {
                      "date": [
                        "1996~1999",
                        "1999~2002",
                        "2002~2006",
                        "2006~2010",
                        "2010~2013",
                        "2013~2016",
                        "2016~2019",
                        "2019~2022",
                        "2022.11~"
                      ],
                      "data|9": [{
                        "红 / 绿": "@integer(1000, 5000)",
                        "金 / 银": "@integer(1000, 5000)",
                        "红宝石 / 叶绿": "@integer(1000, 5000)",
                        "钻石 / 珍珠": "@integer(1000, 5000)",
                        "黑 / 白": "@integer(1000, 5000)",
                        "欧米加 / 阿尔法": "@integer(1000, 5000)",
                        "太阳 / 月亮": "@integer(1000, 5000)",
                        "剑 / 盾": "@integer(1000, 5000)",
                        "朱／紫": "@integer(1000, 5000)"
                      }]
                    },
                    "goodsData": [{
                        "name": "Pokémon GO",
                        "value": 2999
                      },
                      {
                        "name": "动画（漫画）",
                        "value": 5999
                      },
                      {
                        "name": "卡牌",
                        "value": 1500
                      },
                      {
                        "name": "音乐",
                        "value": 1999
                      },
                      {
                        "name": "手办",
                        "value": 2200
                      },
                      {
                        "name": "电子游戏",
                        "value": 4500
                      }
                    ],
                    "locateData": [{
                        "date": "关都地区",
                        "new": 25,
                        "active": 200
                      },
                      {
                        "date": "城都地区",
                        "new": 10,
                        "active": 500
                      },
                      {
                        "date": "丰缘地区",
                        "new": 12,
                        "active": 550
                      },
                      {
                        "date": "神奥地区",
                        "new": 60,
                        "active": 800
                      },
                      {
                        "date": "卡洛斯地区",
                        "new": 65,
                        "active": 550
                      }
                    ]
                }
            }
        }
    }
}