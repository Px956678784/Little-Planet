<template>
  <el-main>
    <div id="welcome">
      <h1>边 界</h1>
      <p>我们只是灵长类动物的高级品种<br />
        生活在一个很小的星球上<br />
        而它只是亿万个星星中的一个<br />
        我们从未停止对宇宙的探索<br />
        至今未寻见其边界<br />
        人的努力也是没有边界的<br />
        我们千差万别<br />
        不管生活看上去有多糟糕<br />
        总有能够做的事情<br />
        并且能够成功<br />
        生命存在的地方，就有希望<br />
      </p>
    </div>
    <el-divider content-position="center">道 路</el-divider>
    <Timeline></Timeline>
    <el-divider content-position="center">回 声</el-divider>
    <div class="info">
      Github: <el-link type="info" href="https://github.com/Px956678784" target="_blank">https://github.com/Px956678784
      </el-link>
      <br />
      Blog: <el-link type="info" href="https://blog.csdn.net/m0_37960566" target="_blank">
        https://blog.csdn.net/m0_37960566
      </el-link>
      <br />
      Mail: 956678784@qq.com<br />
      Tel: 18683430905<br />
    </div>
  </el-main>
</template>
<script>
  import Timeline from '../components/timeline.vue'
  export default {
    components: { Timeline },
    data() {
      return {};
    },
    methods: {
    },
    mounted() {
    }
  }
</script>
<style>
  #welcome {
    line-height: 300%;
    letter-spacing: 3px;
  }

  .el-main {
    color: white;
    line-height: 100%;
  }

  .el-divider {
    margin: 5% 0;
    background-color: transparent;
  }

  .el-divider__text {
    background-color: transparent;
    font-size: 1.5rem;
  }

  .line {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-timeline {
    width: 40%;
  }

  .el-timeline-item {
    padding: 20% 0;
  }

  .el-timeline-item__tail {
    border-left: 2px solid white;
  }

  .info {
    line-height: 5vh;
  }
</style>