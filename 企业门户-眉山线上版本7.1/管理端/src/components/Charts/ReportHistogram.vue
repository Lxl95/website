<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "200px",
    },
    height: {
      type: String,
      default: "200px",
    },
    data: {
      type: Object,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    data: {
      deep: true,
      immediate: true,
      handler(newVal, oldVal) {
        const _self = this;
        _self.initChart();
      },
    },
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));

      this.chart.setOption({
        backgroundColor: "#fff",
        legend: {
          data: ["呼叫来源统计数"],
        },
        grid: {
          top: "50",
          right: "40",
          left: "60",
          bottom: "40", // 图表尺寸大小
        },
        xAxis: [
          {
            type: "category",
            color: "#59588D",
            data: this.data.xAxis,
            axisLabel: {
              margin: 10,
              color: "#999",
              textStyle: {
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(107,107,107,0.37)",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              color: "#999",
              textStyle: {
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(107,107,107,0.37)",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "rgba(131,101,101,0.2)",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            name: "呼叫来源统计数",
            type: "bar",
            data: this.data.series,
            barWidth: "16px",
            itemStyle: {
              normal: {
                color: function (params) {
                  // 展示正值的柱子，负数设为透明
                  const colorArr =
                    params.value > 0
                      ? ["#55d1ff", "#2d82ff"]
                      : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"];
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: colorArr[0], // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: colorArr[1], // 100% 处的颜色
                      },
                    ],
                    false
                  );
                },
                barBorderRadius: [30, 30, 0, 0], // 圆角大小
              },
            },
            label: {
              normal: {
                show: true,
                fontSize: 16,
                fontWeight: "bold",
                color: "#333",
                position: "top",
              },
            },
          },
        ],
      });
    },
  },
};
</script>
