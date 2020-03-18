<template>
    <el-main>
        <el-divider content-position="center">小 说</el-divider>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="4" v-for="(novel, index) in novels" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                    <el-image class="cover-image" :src="novel.image" lazy></el-image>
                    <div class="box-text">
                        <el-link type="primary" :href="novel.link" target="_blank" class="title">
                            {{novel.title}}<i class="el-icon-link"></i>
                        </el-link>
                        <div class="text">
                            {{novel.detail}}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-divider content-position="center">插 画</el-divider>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="4" v-for="(painting, index) in paintings" :key="index">
                <el-card :body-style="{ padding: '0px'}">
                    <el-image class="cover-image" :src="painting.image" lazy></el-image>
                    <div class="box-text">
                        <el-link type="primary" :href="painting.link" target="_blank" class="title">
                            {{painting.title}}
                            <i class="el-icon-link"></i>
                        </el-link>
                        <div class="text">
                            <p>{{painting.detail}}</p>

                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
    export default {
        data() {
            return {
                novels: [{
                    title: '无尽白昼',
                    detail: '没有黑暗的无尽日光，照耀着未来的科技之都—幻光城。普普通通的少年，与外星少女竟连上姻缘。',
                    image: './static/dayLight.jpg',
                    link: 'https://baike.baidu.com/item/%E6%97%A0%E5%B0%BD%E7%99%BD%E6%98%BC/17861433?fr=aladdin'
                }, {
                    title: '泡泡童话',
                    detail: '很久很久以前，在某个不知名的世界，有两个王国，他们的国土包裹在两个巨大无比的透明泡泡里。',
                    image: './static/bubble.jpg',
                    link: 'https://bcy.net/item/detail/6799109593478732814'
                }, {
                    title: '风清草',
                    detail: '风候千年不知倦，吹落相思清一泉。那个宁静的而美好夏天,时间改变了应有的形状，也改变了他们的模样。',
                    image: './static/grass.jpg',
                    link: 'https://bcy.net/item/detail/6799096984281029640'
                }],
                paintings: [{
                    title: '九重山',
                    detail: '你讲你难我没信，我讲我难才是真',
                    image: './static/p1.jpg',
                    link: 'https://www.gracg.com/works/view/1446745'
                }, {
                    title: '瞬き',
                    detail: '幸せとは星が降る夜と眩しい朝じゃなく',
                    image: './static/p2.jpg',
                    link: 'https://www.gracg.com/works/view/1286283'
                }, {
                    title: '星が綺麗',
                    detail: 'いろんな事があるけど 空には星が綺麗',
                    image: './static/p3.jpg',
                    link: 'https://www.gracg.com/works/view/1278359'
                }, {
                    title: 'Dirt',
                    detail: 'You know you came from it, return to it',
                    image: './static/p4.jpg',
                    link: 'https://www.gracg.com/works/view/1446747'
                }, {
                    title: 'A sky full of stars',
                    detail: 'You are the sky full of stars',
                    image: './static/p5.jpg',
                    link: 'https://www.gracg.com/works/view/1207538'
                }, {
                    title: 'Oath sign',
                    detail: '光をかざして踌躇いを消した',
                    image: './static/p6.jpg',
                    link: 'https://www.gracg.com/works/view/1112854'
                }, {
                    title: '业火苍云',
                    detail: '因你堪不透，内心执着',
                    image: './static/p7.jpg',
                    link: 'https://www.gracg.com/works/view/1071823'
                }, {
                    title: 'Still Worth Fighting For',
                    detail: 'This is still worth fighting',
                    image: './static/p8.jpg',
                    link: 'https://www.gracg.com/works/view/1071514'
                }, {
                    title: '1000x-1',
                    detail: 'In another life time, I will never change',
                    image: './static/p9.jpg',
                    link: 'https://www.gracg.com/works/view/1069025'
                }, {
                    title: '1000x-2',
                    detail: 'I will do it again a thousand time',
                    image: './static/p10.jpg',
                    link: 'https://www.gracg.com/works/view/1069025'
                }, {
                    title: '我好像在哪见过你',
                    detail: '像确定我要遇见你，像交换过眼睛',
                    image: './static/p11.jpg',
                    link: 'https://www.gracg.com/works/view/1031888'
                }, {
                    title: '遇萤',
                    detail: '尘缘似一场流萤，眉目缱绻中宁静',
                    image: './static/p12.jpg',
                    link: 'https://www.gracg.com/works/view/970449'
                }, {
                    title: '前前前世',
                    detail: '前前前世から僕は君を探しはじめたよ',
                    image: './static/p13.jpg',
                    link: 'https://www.gracg.com/works/view/951799'
                }, {
                    title: '笑顔',
                    detail: 'どこまでも 明るくなれる君の声が',
                    image: './static/p14.jpg',
                    link: 'https://www.gracg.com/works/view/970449'
                }, {
                    title: '在这个世界相遇',
                    detail: '生命旅程 往复不息 每个梦 都会有你',
                    image: './static/p15.jpg',
                    link: 'https://www.gracg.com/works/view/948501'
                }, {
                    title: 'Sacrifice',
                    detail: 'You will hold me in the golden afterlife',
                    image: './static/p16.jpg',
                    link: 'https://www.gracg.com/works/view/1447005'
                }, {
                    title: '倾尽天下',
                    detail: '血染江山的画怎敌你眉间一点朱砂',
                    image: './static/p17.jpg',
                    link: 'https://www.gracg.com/works/view/941189'
                }, {
                    title: '心做し',
                    detail: 'ひどいよ　ひどいよ　もういっそ僕の体を',
                    image: './static/p18.jpg',
                    link: 'https://www.gracg.com/works/view/871436'
                }, {
                    title: 'Photograph',
                    detail: 'It is hard to say it, time to say it',
                    image: './static/p19.jpg',
                    link: 'https://www.gracg.com/works/view/848088'
                }, {
                    title: '牵心的朋友',
                    detail: '我是你心牵着心的朋友 像暖风融入天空',
                    image: './static/p20.jpg',
                    link: 'https://www.gracg.com/works/view/847390'
                }, {
                    title: '绊',
                    detail: 'わたしにおおきなことはできないよ',
                    image: './static/p21.jpg',
                    link: 'https://www.gracg.com/works/view/832511'
                }, {
                    title: '天天晴朗',
                    detail: '你的心蔚蓝得温暖得温柔得透出了光芒',
                    image: './static/p22.jpg',
                    link: 'https://www.gracg.com/works/view/808638'
                }, {
                    title: 'Wake me up',
                    detail: 'wake me up when september ends',
                    image: './static/p23.jpg',
                    link: 'https://www.gracg.com/works/view/806690'
                }, {
                    title: '夏恋花火',
                    detail: 'ヒラヒラ 舞い散る花 消えてゆく闪光',
                    image: './static/p24.jpg',
                    link: 'https://www.gracg.com/works/view/805304'
                }, {
                    title: '破晓以后',
                    detail: '你是我就算拼尽一切 都要守护的所有',
                    image: './static/p25.jpg',
                    link: 'https://gracg.com/works/view/798344'
                }, {
                    title: 'Centuries',
                    detail: '吾辈之名汝必铭记 深埋心底 万世不惜',
                    image: './static/p26.jpg',
                    link: 'https://gracg.com/works/view/796779'
                }, {
                    title: 'Brave Shine',
                    detail: '手を伸ばせばまだ Stay the night',
                    image: './static/p27.jpg',
                    link: 'https://gracg.com/works/view/793276'
                }, {
                    title: '123木头人',
                    detail: '我数123木头人 再不行动就要被扣分',
                    image: './static/p28.jpg',
                    link: 'https://gracg.com/works/view/792232'
                }, {
                    title: 'Shut up and dance',
                    detail: 'She said shut up and dance with me!',
                    image: './static/p29.jpg',
                    link: 'https://gracg.com/works/view/791018'
                }, {
                    title: '金曜日のおはよう',
                    detail: '言いかけてた“その言葉は今日も逃げた',
                    image: './static/p30.jpg',
                    link: 'https://gracg.com/works/view/788913'
                }, {
                    title: '晴天',
                    detail: '还要多久 我才能在你身边 等到放晴的那天',
                    image: './static/p31.jpg',
                    link: 'https://gracg.com/works/view/787134'
                }, {
                    title: 'Almost Lover',
                    detail: 'Well I never want to see you unhappy',
                    image: './static/p32.jpg',
                    link: 'https://gracg.com/works/view/786450'
                }, {
                    title: '君だったら',
                    detail: 'キスをしている时でも君を思い出すから',
                    image: './static/p33.jpg',
                    link: 'https://gracg.com/works/view/784090'
                }, {
                    title: 'Need You Now',
                    detail: 'I lost all control and I need you now.',
                    image: './static/p34.jpg',
                    link: 'https://gracg.com/works/view/782532'
                }, {
                    title: '惊鸿一面',
                    detail: '史书列豪杰 功过有几许 我今生何求 惟你',
                    image: './static/p35.jpg',
                    link: 'https://gracg.com/works/view/782535'
                }, {
                    title: 'また君と',
                    detail: '离さないでそばにいてね また君とふたり',
                    image: './static/p36.jpg',
                    link: 'https://gracg.com/works/view/782530'
                }]
            }
        }
    }
</script>
<style>
    .el-col {
        margin-bottom: 5%;
    }

    .box-text {
        width: 100%;
        line-height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    .title {
        margin-top: 5%;
        font-size: 120%;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .text {
        margin: 5%;
        font-size: 80%;
        width: 80%;
        text-align: left;
        word-break: break-all;
        line-height: 2vh;
        height: 4vh;
        overflow: hidden;
    }

    .cover-image {
        width: 100%;
        padding-top: 100%;
        position: relative;

    }

    .cover-image img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .button {
        padding: 0;
        float: right;
    }
</style>