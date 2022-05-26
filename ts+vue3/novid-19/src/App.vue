<template>
    <div class="box" :style="{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }">
        <div class="box-left"></div>
        <div class="box-content">
            <transition class="animate__animated animate__zoomIn">
                <div id="china"></div>
            </transition>
        </div>
        <div class="box-right">
            <transition class="animate__animated animate__bounce">
                <table border="1" cellspacing="0" style="backgroundColor:black;width: 100%;">
                    <thead>
                        <tr>
                            <th>地区</th>
                            <th>新增确诊</th>
                            <th>累计确诊</th>
                            <th>治愈</th>
                            <th>死亡</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in store.item">
                            <td align="center">{{ item.name }}</td>
                            <td align="center">{{ item.today.confirm }}</td>
                            <td align="center">{{ item.total.confirm }}</td>
                            <td align="center">{{ item.total.heal }}</td>
                            <td align="center">{{ item.total.dead }}</td>
                        </tr>
                    </tbody>
                </table>
            </transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import bg from './assets/bg.jpg'
import { useStore } from './stores'
import { onMounted } from 'vue'
import * as echarts from 'echarts'
import './assets/china'
import { geoCoordMap } from './assets/geoMap'
import 'animate.css';

const store = useStore()

onMounted(async () => {
    await store.getList()
    initChart()
})

const initChart = () => {
    const cities = store.list.diseaseh5Shelf.areaTree[0].children
    const data = cities.map(v => {
        return {
            name: v.name,
            value: geoCoordMap[v.name].concat(v.total.nowConfirm),
            children: v.children
        }
    })

    const chart = echarts.init(document.querySelector('#china') as HTMLElement)
    chart.setOption({
        geo: {
            map: "china",
            aspectScale: 0.8,
            layoutCenter: ["50%", "50%"],
            layoutSize: "120%",
            itemStyle: {
                // normal: {
                areaColor: {
                    type: "linear-gradient",
                    x: 0,
                    y: 1200,
                    x2: 1000,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#152E6E", // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#0673AD", // 50% 处的颜色
                        },
                    ],
                    global: true, // 缺省为 false
                },
                shadowColor: "#0f5d9d",
                shadowOffsetX: 0,
                shadowOffsetY: 15,
                opacity: 0.5,
                // },

            },
            emphasis: {
                areaColor: "#0f5d9d",
            },

            regions: [
                {
                    name: "南海诸岛",
                    itemStyle: {
                        areaColor: "rgba(0, 10, 52, 1)",
                        borderColor: "rgba(0, 10, 52, 1)",
                        // normal: {
                        opacity: 0,
                        label: {
                            show: false,
                            color: "#009cc9",
                        },
                        // },
                    },
                    label: {
                        show: false,
                        color: "#FFFFFF",
                        fontSize: 12,
                    },
                },
            ],
        },
        series: [
            {
                type: "map",
                selectedMode: "multiple",
                map: "china",
                aspectScale: 0.8,
                layoutCenter: ["50%", "50%"], //地图位置
                layoutSize: "120%",
                zoom: 1, //当前视角的缩放比例
                // roam: true, //是否开启平游或缩放
                scaleLimit: {
                    //滚轮缩放的极限控制
                    min: 1,
                    max: 2,
                },
                label: {
                    show: true,
                    color: "#FFFFFF",
                    fontSize: 12,
                },
                itemStyle: {
                    // normal: {
                    areaColor: "#0c3653",
                    borderColor: "#1cccff",
                    borderWidth: 1.8,
                    // },

                },
                emphasis: {
                    areaColor: "#56b1da",
                    label: {
                        show: true,
                        color: "#fff",
                    },
                },
                data: data,
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
                // symbolSize: [30,120],
                // symbolOffset:[0, '-40%'] ,
                symbol: 'pin',
                symbolSize: [45, 45],
                label: {
                    // normal: {
                    show: true,
                    color: '#FFFFFF',
                    formatter(value: any) {
                        return value.data.value[2]
                    }
                    // }
                },
                itemStyle: {
                    // normal: {
                    color: '#4190d7', //标志颜色
                    // }
                },
                data: data,
            },
        ],
    })
    chart.on('click', (e: any) => {
        store.item = e.data.children
    })
}

</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app {
    height: 100%;
    overflow: hidden;
}

.box {
    height: 100%;
    display: flex;

    &-left {
        width: 300px;
    }

    &-content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        #china {
            width: 700px;
            height: 500px;
        }
    }

    &-right {
        width: 400px;
        color: #fff;
    }
}
</style>