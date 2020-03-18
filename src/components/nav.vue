<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true" @select="handleSelect">
        <el-menu-item index="homepage">首页</el-menu-item>
        <el-menu-item index="workpage">工作</el-menu-item>
        <el-menu-item index="otherpage">作品</el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>