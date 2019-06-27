<template>
    <div>
      <el-row class="jianLi">
       <el-col :span="8" class="left">
      <img src="http://s6.sinaimg.cn/mw690/001TuIeDzy6Mjs3v5eB15&690" alt="">
  </el-col>
  <el-col :span="16" class="right">
    
      <el-form label-width="100px" class="demo-ruleForm" label-suffix="：">
  <el-form-item label="姓名" prop="pass" class="span">
   <span class="span">付翔</span>
  </el-form-item>
  <el-form-item label="性别" prop="checkPass" class="span">
   <span class="span">男</span>
  </el-form-item>
  <el-form-item label="住址" prop="age">
    <span class="span">上海浦东区</span>
  </el-form-item>
   <el-form-item label="电话" prop="age">
    <span class="span">17538710923</span>
  </el-form-item>
     <el-form-item label="电子邮箱" prop="age">
    <span class="span">17538710923@163.com</span>
  </el-form-item>
   <el-form-item label="工作经验" prop="age">
    <span class="span">一年经验</span>
  </el-form-item>
</el-form>
  </el-col>
</el-row>  
<div class="yiXiang">
    <h2>求职意向</h2>
    <span>从事职位：</span><span>web前端</span>
    <span style="margin-left:200px">薪资要求：</span><span>面议</span>
</div>
<!-- <ji-neng></ji-neng> -->
<div>
    <h2>技能熟练程度</h2>
     <ji-neng></ji-neng>
</div>
    <el-button-group>
  <el-button type="primary" plain icon="el-icon-arrow-left" disabled>上一页</el-button>
  <el-button type="primary" @click="after" plain>下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
    </div>
</template>
<script>
import JiNeng from '@/components/jineng'//技能图标引用
import headr from '../components/heard'
export default {
    name:'One',
    data(){
        return{

        }
    },
    components:{
        JiNeng,headr
    },
    methods:{
        after(){
            this.$router.push({
                path:'two'
            })
        }
    }
}
</script>
<style>
.left{
    /* background: #999999 */
    text-align: center;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center

}
.el-form-item{
    margin: 0px
}
.el-button-group{
    display: block;
    width: 400px;
    margin: auto
}
.span{
    color: #dab615
}
.el-form-item__label{
    color: #dab615
}
.right{
    /* border: 1px red solid; */
    background: #1a181d
}
</style>
