<template>
  <div>
    <div class="login_page">
      <!-- 什么时候会触发这个transition？ v-show v-if  -->
        <!-- router 切换的时候 mounted-->
      <transition name="form-fade" mode="in-out">
        <section class="form_container" v-show="showLogin">
          <div class="manage-tip">
            <span class="title">用户管理系统</span>
          </div>
          <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
            <el-form-item prop="username">
              <span class="fa-tips">
                <i class="fa fa-user"></i>
              </span>
              <el-input class="area" type="text" placeholder="用户名" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <span>
                
              </span>
              <el-input class="area" type="text" placeholder="密码" v-model="loginForm.password"></el-input>
            </el-form-item>
          </el-form>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
   // 表单提交后有个登陆状态，归vuex管，
  // 我们的提交过程中，有没有报错，v-model 自身的
 data(){
   return{
     showLogin:"true",
     loginForm:{
       username:'',
       password:''
     },
     rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
   }
 }
}
</script>

<style lang="less" scoped>
  .form-fade-enter-active,
  .form-fade-leave-active{
    transition: all 1s;
  }
  .form-fade-enter,
  .form-fade-leave-active{
    transform: translate3d(0,-50px,0);
    opacity: 0;
  }
</style>
