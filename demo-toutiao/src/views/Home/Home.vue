<template>
  <div class="home-container">
    <van-nav-bar title="腾旭新闻" fixed/>

    <!-- 导入、注册，并使用ArticleInfo组件 -->
    <p>{{ artList.length }}</p>
    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
>
    <ArticleInfo
     v-for="item in artList"
     :key="item.id"
     :title="item.title"
     :author="item.aut_name"
     :cmt-count="item.comm_count"
     :time = "item.pubdate"
     :cover = "item.cover"
     ></ArticleInfo>
    </van-list>
  </div>
</template>

<script>
// 导入request.js
// import request from '@/utils/request.js'

import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home',
  data() {
    return {
      page: 1,
      limit: 10,
      artList: [],
      // 是否正在加载下一页数据
      loading: true,
      // 所有数据是否加载完毕
      finished: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList() {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      console.log(res)
      this.artList = [...this.artList, ...res]
      this.loading = false
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 只要onload被调用，请求下一页数据
    onload() {
      console.log('触发了 load 事件')
      this.page++
      this.initArticleList()
    }
  },
  // 注册组件
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container{
  padding: 46px 0 50px 0;

  .van-nav-bar {
    background-color: #007bff;
  }

  /deep/.van-nav-bar__title {
    color: white;
  }
}
</style>
