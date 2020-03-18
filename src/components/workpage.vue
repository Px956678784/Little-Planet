<template>
    <el-main>
        <el-divider content-position="center">项 目</el-divider>
        <div class="out-box">
            <el-card v-for="(card, index) in cards1" :key="index" class="card-box">
                <div class="card-content">
                    <div class="image-box">
                        <el-image class="image" :src="card.image" lazy></el-image>
                        <p class="ins">{{card.institution}}</p>
                    </div>
                    <div class="text-box">
                        <el-link type="primary" :href="card.link" target="_blank">
                            <h2>{{card.title}}<i class="el-icon-link"></i></h2>
                        </el-link>
                        <p>{{card.content}}</p>
                    </div>
                </div>
            </el-card>
        </div>
        <el-divider content-position="center">学生工作</el-divider>
        <div class="out-box">
            <el-card v-for="(card, index) in cards2" :key="index" class="card-box">
                <div class="card-content">
                    <div class="image-box">
                        <el-image class="image" :src="card.image" lazy></el-image>
                        <p class="ins">{{card.institution}}</p>
                    </div>
                    <div class="text-box">
                        <h2>{{card.title}}</h2>
                        <p>{{card.content}}</p>
                    </div>
                </div>
            </el-card>
        </div>
    </el-main>

</template>
<script>
    export default {
        data() {
            return {
                cards1: [{
                    title: '基于多源异构数据的旅游路线规划与可视分析',
                    institution: '成都市科技局科技创新项目',
                    image: './static/tripPlanner.jpg',
                    content: '项目负责人，完成项目的构思与申报工作；正在进行数据采集与处理，后期将完成数据可视化设计及系统搭建',
                    link: 'http://kjxm.cdst.chengdu.gov.cn/egrantweb/'
                }, {
                    title: '基于数据驱动遗传算法的机场接送服务优化',
                    institution: '四川省科技创新项目',
                    image: './static/GA.jpg',
                    content: '项目主研，完成遗传算法的设计与实现；完成系统界面的设计与实现，并撰写项目报告与论文',
                    link: 'https://github.com/Px956678784/CABRD'
                }, {
                    title: '基于出租车数据的城市区块功能探索',
                    institution: '可视化探索项目',
                    image: './static/blockCity.jpg',
                    content: '项目主研，负责数据的可视化设计与系统界面实现，完整项目完整分析与报告',
                    link: 'https://github.com/Px956678784/d3-project/tree/master/block-City'
                }, {
                    title: '科研go智能共享实验室',
                    institution: '四川省2017互联网+创新创业大赛 金奖',
                    image: './static/kyGo.jpg',
                    content: '项目部分前端工作，UI设计工作',
                    link: 'https://github.com/Px956678784/Science-go'
                }, {
                    title: '链宝区块链应用商店',
                    institution: '已获天使轮融资',
                    image: './static/lianbao.jpg',
                    content: '项目UI、平面设计工作',
                    link: 'http://lianbao.one/'
                }],

                cards2: [{
                    title: '中国计算机学会四川大学学生分会',
                    institution: '2018-2020',
                    image: './static/ccf.jpg',
                    content: '副主席：成功负责举办过腾讯OpenDay,专家进企业等活动'
                }, {
                    title: '四川大学中兴“兴人类”俱乐部',
                    institution: '2017-2018',
                    image: './static/zte.jpg',
                    content: '宣传部部长：负责公众号日常运营，活动宣传策划'
                }, {
                    title: '四川大学高分子学院分析测试中心',
                    institution: '2016-2017',
                    image: './static/scu.jpg',
                    content: '测试助理，负责大型测试仪器使用、性能数据采集与整理'
                }, {
                    title: '四川大学高分子学院团委学生会',
                    institution: '2014-2016',
                    image: './static/pse.jpg',
                    content: '科技部部长：负责科技竞赛类活动的策划与举办'
                }]
            };
        }
    }
</script>
<style>
    .out-box {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .image {
        width: 100px;
        height: 100px;
    }

    .text-box {
        width: 60%;
        font-size: 1rem;
        padding: 2%;
        line-height: 150%;
        text-align: left;
    }

    .card-box {
        width: 90%;
        margin: 2% 0;

    }

    .card-content {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
    }

    .image-box {
        width: 100px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
        font-size: 0.8rem;
        color: gray;
    }
</style>