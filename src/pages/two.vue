<template>
<div>
    <h2>工作经历</h2>
  <el-table
    :data="tableData"
    stripe
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="公司名称"
>
    </el-table-column>
    <el-table-column
      prop="zhiwei"
      label="公司职位">
    </el-table-column>
    <el-table-column
      prop="money"
      label="任职薪资">
    </el-table-column>
  </el-table>
  <h2>工作经验</h2>
  <jing-yan></jing-yan>
  <el-button-group>
  <el-button type="primary" plain icon="el-icon-arrow-left" @click="before">上一页</el-button>
  <el-button type="primary" plain @click="after">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
  </div>
</template>

<script>
import JingYan from '../components/xiangmu'
  export default {
    data() {
      return {
        tableData: [{
          date: '2018.5 - 2019.5',
          name: '上海盒思科技智能有限公司',
          zhiwei: 'ewb前端',
          money: '8000'
        }]
      }
    },
    components:{
        JingYan
    },
    methods:{
       before(){
           this.$router.push({
               path:'/'
        })
       },
       after(){
           this.$router.push({
               path:'/three'
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
