<template>
    <div>
        <ji-neng></ji-neng>
        <h2> 项目简介</h2>
        <xiang-mu></xiang-mu>
        <el-button-group>
  <el-button type="primary" plain icon="el-icon-arrow-left" @click="before">上一页</el-button>
  <el-button type="primary" plain disabled>下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
    </div>
</template>
<script>
import JiNeng from '../components/jineng'
import XiangMu from '../components/xiangmu'
export default {
    components:{
        JiNeng,XiangMu
  },
  inject:['reload'],
  created(){
      var _this = this
setInterval(() => {
      _this.reload()
  }, 10000);
  },
  
    methods:{
        before(){
            this.$router.push({
                path:'/two'
            })
        }
    }
}
</script>
<style>
.el-button-group{
    display: block;
    width: 400px;
    margin: auto
}
</style>
