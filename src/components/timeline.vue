<template>
    <div class="line">
        <el-timeline>
            <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
                :type="activity.type" :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
                {{activity.content}}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activities: [{
                    content: '全国青少年信息奥林匹克(NOIP)训练',
                    timestamp: '高中：2012-2013',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-trophy'
                }, {
                    content: '高分子科学本科修读',
                    timestamp: '四川大学：2014-2018',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-cpu'
                }, {
                    content: '计算机类课程修读',
                    timestamp: '四川大学：2016-2018',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-mouse'
                }, {
                    content: '计算机学院研究生修读',
                    timestamp: '四川大学：2018-至今',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-coin'
                },
                {
                    content: '数据可视化方向研究',
                    timestamp: 'VCL：2018-至今',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-pie-chart'
                }]
            };
        }
    };
</script>