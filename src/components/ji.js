/**
 * 封装echarts图表方法
 */

import echarts from 'echarts'
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //柱状图
                    line1: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            title: {
                                text: '技能使用时间(月)'
                            },
                            tooltip: {
                                // trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {
                                data:['技能']
                            },
                            xAxis: {
                                type: 'category',
                                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                // data: ['html', 'css', 'js', 'vue', 'boots', 'es6', 'node']
                                data: ['html', 'css', 'js', 'vue', 'bootstrap', 'es6', 'node.js']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [15, 15, 12, 12, 8, 6, 3],
                                type: 'bar',
                                smooth: true
                            }]
                        };

                        this.chart.setOption(optionData);
                    },
                }
            }
        }
    })
}

export default {
    install
}
