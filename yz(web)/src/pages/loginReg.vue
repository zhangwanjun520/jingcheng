
<template>
  <div class="box">
    <div class="login">
      <div class="left"></div>
      <div class="right">
        <div class="tab">
          <span
            @click="regg"
            :style="{'color':(cur==0?'#6A2F73':''),'border-bottom':(cur==0?'1px solid #6A2F73':'')}"
          >注册</span>
          <span
            @click="loginn"
            :style="{'color':(cur==1?'#6A2F73':''),'border-bottom':(cur==1?'1px solid #6A2F73':'')}"
          >登录</span>
        </div>
        <div class="content">
          <div class="con" v-show="cur==0">
            <div id="inp">
              <el-input v-model="phoneNumber" placeholder="请输入手机号码" style="position:relative"></el-input>
              <div class="mistakeCon" style="position:absolute;top:67px">{{mistakePhone}}</div>
            </div>
            <div id="inp">
              <el-input v-model="tryCode" placeholder="请输入验证码" style="position:relative">
                <span
                  slot="suffix"
                  class="getTryCode"
                  @click="getTryCode"
                  v-show="show"
                  style="cursor:pointer"
                >获取验证码</span>
                <span slot="suffix" class="getTryCode" v-show="!show">{{count}}s后再次获取</span>
              </el-input>
              <div class="mistakeCon" style="position:absolute;top:132px">{{judgeTryCode}}</div>
            </div>
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
            >
              <el-form-item prop="pass">
                <div id="inp">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    placeholder="请输入登陆密码"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="checkPass">
                <div id="inp">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    placeholder="再次确认密码"
                  ></el-input>
                </div>
              </el-form-item>
            </el-form>
            <div id="inp">
              <el-checkbox v-model="checked" @change="onChange">
                我已经阅读并同意
                <span style="color:#6A2F73">《北京市精诚公证处用户协议》</span>
              </el-checkbox>
            </div>
            <div class="reg">
              <el-button
                :disabled="flag"
                type="primary"
                style="border:none;color:white;font-size:16px;width:350px; height: 50px;"
                @click="Reg"
              >注册</el-button>
            </div>
            <div class="copy">
              Copyright © 北京市精诚公证处版权所有
              <br />京ICP备16045056号
            </div>
          </div>
          <!-- 登录 -->
          <div class="con" v-show="cur==1">
            <!-- ======================================修改 -->

            <div v-if="current==0">
              <div id="inp">
                <el-input v-model="phoneNumber" placeholder="请输入手机号码" style="position:relative"></el-input>
                <div class="mistakeCon" style="position:absolute;top:67px">{{mistakePhone}}</div>
              </div>
              <div id="inp">
                <el-input v-model="tryCode2" placeholder="请输入验证码" style="position:relative">
                  <span
                    slot="suffix"
                    class="getTryCode"
                    @click="getTryCode3"
                    v-show="show3"
                    style="cursor:pointer"
                  >获取验证码</span>
                  <span slot="suffix" class="getTryCode" v-show="!show3">{{count}}s后再次获取</span>
                </el-input>
                <div class="mistakeCon" style="position:absolute;top:132px">{{judgeTryCode3}}</div>
              </div>
              <div class="forget">
                <span @click="forgrtPw">密码找回？</span>
              </div>
            </div>
            <div v-if="current==1">
              <div id="inp">
                <el-input v-model="pn" placeholder="请输入手机号码"></el-input>
              </div>
              <div id="inp">
                <el-input v-model="tc" placeholder="请输入验证码">
                  <span slot="suffix" class="getTryCode">
                    <img :src="image" alt style="width:100px" @click="getImgCode" />
                  </span>
                </el-input>
              </div>
              <div id="inp">
                <el-input v-model="loginPw" placeholder="请输入登陆密码" type="password"></el-input>
              </div>
              <div class="forget">
                <span @click="forgrtPw">忘记密码？</span>
              </div>
            </div>

            <div class="tab2">
              <span
                @click="current=0"
                :style="{'color':(current==0?'#6A2F73':''),'border':(current==0?'1px solid #6A2F73':'')}"
              >手机验证码登录</span>
              <span
                @click="current=1"
                :style="{'color':(current==1?'#6A2F73':''),'border':(current==1?'1px solid #6A2F73':'')}"
              >密码登录</span>
            </div>

            <!-- ========================================== -->

            <!-- 忘记密码内容 -->
            <div class="forgetPwCon" v-if="appear==0">
              <div class="content">
                <div class="top">
                  <span>密码重置</span>
                  <span @click="appear=1">
                    <i class="el-icon-circle-close" style="font-size:18px"></i>
                  </span>
                </div>
                <div class="con">
                  <div id="inp">
                    <el-input v-model="phoneNumber" placeholder="请输入手机号码" style="position:relative"></el-input>
                    <div class="mistakeCon" style="position:absolute;top:67px">{{mistakePhone}}</div>
                  </div>

                  <el-form
                    :model="ruleForm"
                    status-icon
                    :rules="rules"
                    ref="ruleForm"
                    class="demo-ruleForm"
                  >
                    <el-form-item prop="pass">
                      <div id="inp">
                        <el-input
                          type="password"
                          v-model="ruleForm.pass"
                          autocomplete="off"
                          placeholder="请输入密码"
                        ></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item prop="checkPass">
                      <div id="inp">
                        <el-input
                          type="password"
                          v-model="ruleForm.checkPass"
                          autocomplete="off"
                          placeholder="再次确认密码"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-form>

                  <div id="inp">
                    <el-input v-model="tryCode" placeholder="请输入验证码" style="position:relative">
                      <span
                        slot="suffix"
                        class="getTryCode"
                        @click="getTryCode2"
                        v-if="show2"
                        style="cursor:pointer"
                      >获取验证码</span>
                      <span slot="suffix" class="getTryCode" v-else>{{count}}s后再次获取</span>
                    </el-input>
                    <div class="mistakeCon" id="mis">{{judgeTryCode}}</div>
                  </div>
                  <div class="forgotBtn" @click="submitNewPw">确定</div>
                </div>
              </div>
            </div>

            <div class="reg" @click="login">
              <el-button
                style="background:#6a2f73;border:none;color:white;font-size:16px;width:350px; height: 50px;"
              >登录</el-button>
            </div>

            <div class="copy active">
              Copyright © 北京市精诚公证处版权所有
              <br />京ICP备16045056号
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  reg,
  getCode,
  Login,
  getImageCode,
  getCode2,
  submitNewInfo,
  VerificationCode,
  codeLogin,
} from "../api/request";
import Cookies from "js-cookie";
import qs from "qs";
import { _local } from "../api/storage";
export default {
  data() {
    // 密码以及再次确认密码二次验证
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
        this.mistakePw == false;
      } else if (value.length < 6) {
        callback(new Error("密码不能少于六位"));
        this.mistakePw == false;
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    // 密码以及再次确认密码二次验证
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        this.mistakePw = false;
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
        this.mistakePw = false;
      } else {
        callback();
        this.mistakePw = true;
      }
    };
    return {
      current: 0,
      appear: 1,
      cur: 0,
      // 注册表单信息
      phoneNumber: "",
      tryCode: "",
      tryCode2: "",

      pw: "",
      secondPw: "",
      checked: "",
      // 登录得表单信息
      pn: "",
      tc: "",
      loginPw: "",
      // 获取验证码
      show: true,
      show2: true,
      show3: true,

      count: "",
      flag: true,
      //  正则验证错误提示
      mistakePhone: "",
      judgePhone: "",
      // 密码相关
      password: "",
      mistakePw: "",
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
      judgeTryCode: "",
      judgeTryCode2: "",
      judgeTryCode3: "",

      // 图片验证码
      image: "",
      uid: "",
    };
  },
  watch: {
    // watch监听正则验证手机号
    phoneNumber(newVal, oldVal) {
      if (
        !/^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/.test(
          newVal
        )
      ) {
        this.mistakePhone = "号码格式错误";
        this.judgePhone = false;
      } else {
        this.mistakePhone = "";
        this.judgePhone = true;
      }
    },
    // watch监听验证码
    tryCode(newVal, oldVal) {
      // console.log(newVal.length);
      if (newVal.length < 6 || newVal.length > 6) {
        this.judgeTryCode = "验证码格式错误";
        this.judgeTryCode2 = false;
      } else if (newVal.length == 6) {
        this.judgeTryCode = "";
        this.judgeTryCode2 = true;
      }
    },
    // watch监听手机验证码登录时得验证码格式
    tryCode2(newVal, oldVal) {
      // console.log(newVal.length);
      if (newVal.length < 6 || newVal.length > 6) {
        this.judgeTryCode3 = "验证码格式错误";
      } else if (newVal.length == 6) {
        this.judgeTryCode3 = "";
      }
    },
  },
  methods: {
    // 重置数据为空
    regg() {
      this.cur = 0;
      this.phoneNumber = "";
      this.tryCode = "";
      this.ruleForm.pass = "";
      this.ruleForm.checkPass = "";
    },
    // 重置数据为空
    loginn() {
      this.cur = 1;
      this.phoneNumber = "";
    },

    // 复选框得值变化
    onChange(value) {
      //  console.log(value)
      if (
        value === true &&
        this.judgePhone == true &&
        this.mistakePw == true &&
        this.judgeTryCode2 == true
      ) {
        this.flag = false;
        // console.log(this.flag)
      } else {
        this.flag = true;
      }
    },
    // 获取验证码倒计时以及获取（注册）
    getTryCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        // 调用获取验证码得接口
        let info = {
          phone: this.phoneNumber,
        };
        getCode(qs.stringify(info)).then((res) => {
          if (res.code == 0) {
            this.$message({
              type: "seccess",
              showClose: true,
              message: res.msg,
              type: "success",
              customClass: "mess",
              offset: 200,
            });
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              customClass: "mess",
              offset: 200,
            });
          }
        });
        //  点击之后进入倒计时
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },

    // 忘记密码里获取验证码倒计时以及获取
    getTryCode2() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show2 = false;
        // 调用获取验证码得接口
        let info = {
          phone: this.phoneNumber,
        };
        getCode2(qs.stringify(info)).then((res) => {
          // console.log(res);
          if (res.code == 0) {
            this.$message({
              type: "seccess",
              showClose: true,
              message: res.msg,
              type: "success",
              customClass: "mess",
              offset: 200,
            });
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              customClass: "mess",
              offset: 200,
            });
          }
        });
        //  点击之后进入倒计时
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show2 = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },

    // 手机验证码登录得验证码
    getTryCode3() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show3 = false;
        // 调用获取验证码得接口
        let info = {
          phone: this.phoneNumber,
        };
        VerificationCode(qs.stringify(info)).then((res) => {
          // console.log(res);
          if (res.code == 0) {
            this.$message({
              type: "seccess",
              showClose: true,
              message: res.msg,
              type: "success",
              customClass: "mess",
              offset: 200,
            });
          } else {
            this.$message({
              showClose: true,
              message: res.msg,

              customClass: "mess",
              offset: 200,
            });
          }
        });
        //  点击之后进入倒计时
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show3 = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },

    // 注册表单信息提交，确保表单里的所有都是正确的才可以提交后台
    Reg() {
      if (
        this.flag === false &&
        this.judgePhone == true &&
        this.mistakePw == true &&
        this.judgeTryCode2 == true
      ) {
        let info = {
          phone: this.phoneNumber,
          password: this.ruleForm.pass,
          code: this.tryCode,
        };
        reg(info).then((res) => {
          if (res.msg == "注册成功！") {
            localStorage.setItem("userInfo", JSON.stringify(info));
            // 注册成功将token存入（封装得localStorage含过期时间）本地用来路由是否登陆过得判断
            _local.set("token", res.data.token, 1000 * 60 * 60 * 24);
            this.$message({
              showClose: true,
              message: res.msg + "跳转到申请表页面",
              type: "success",
              customClass: "mess",
              offset: 200,
            });
            this.$router.push("/info");
          } else {
            this.$message({
              message: res.msg,
              offset: 200,
              showClose: true,
            });
          }
        });
      } else {
        this.$message({
          message: "信息有误",
          offset: 200,
          showClose: true,
        });
      }
    },
    // 登录
    login() {
      // 判断current为0即手机验证码登录，为1即密码登录
      if (this.current == 0) {
        let info = {
          phone: this.phoneNumber,
          code: this.tryCode2,
        };
        codeLogin(info).then((res) => {
          if (res.code == 0) {
            localStorage.setItem("userInfo", JSON.stringify(info));
            // 手机验证码登录成功后将token存入（封装得localStorage含过期时间）本地用来路由是否登陆过得判断
            _local.set("token", res.data.token, 1000 * 60 * 60 * 24);
            this.$message({
              showClose: true,
              message: res.msg + "跳转到申请表页面",
              type: "success",
              customClass: "mess",
              offset: 200,
            });
            this.$router.push("/info");
          } else if (res.msg == "验证码错误") {
            this.$message({
              message: res.msg,
              offset: 200,
              showClose: true,
            });
            this.getImage();
          } else {
            this.$message({
              message: res.msg,
              offset: 200,
              showClose: true,
            });
          }
        });
      } else if (this.current == 1) {
        let info = {
          phone: this.pn,
          password: this.loginPw,
          uuid: this.uid,
          code: this.tc,
        };
        Login(info).then((res) => {
          console.log(res);
          if (res.msg == "登录成功！") {
            localStorage.setItem("userInfo", JSON.stringify(info));
            // 普通密码登录成功后将token存入（封装得localStorage含过期时间）本地用来路由是否登陆过得判断
            _local.set("token", res.data.token, 1000 * 60 * 60 * 24);
            this.$message({
              showClose: true,
              message: res.msg + "跳转到申请表页面",
              type: "success",
              customClass: "mess",
              offset: 200,
            });
            this.$router.push("/info");
          } else if (res.msg == "验证码错误") {
            this.$message({
              message: res.msg,
              offset: 200,
              showClose: true,
            });
            this.getImage();
          } else {
            this.$message({
              message: res.msg,
              offset: 200,
              showClose: true,
            });
          }
        });
      }
    },
    // 获取图片验证码
    getImage() {
      getImageCode().then((res) => {
        // base64图片显示
        this.image = "data:image/png;base64," + res.img;
        this.uid = res.uuid;
      });
    },
    getImgCode() {
      this.getImage();
    },
    // 忘记密码，重置密码
    forgrtPw() {
      this.appear = 0;
      this.phoneNumber = "";
      this.ruleForm.pass = "";
      this.ruleForm.checkPass = "";
      this.tryCode = "";
      this.mistakePhone = "";
      this.judgeTryCode = "";
    },
    submitNewPw() {
      if (
        this.judgePhone == true &&
        this.mistakePw == true &&
        this.judgeTryCode2 == true
      ) {
        {
          let info = {
            phone: this.phoneNumber,
            password: this.ruleForm.pass,
            code: this.tryCode,
          };
          submitNewInfo(info).then((res) => {
            if (res.msg == "密码重置成功！") {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "success",
                customClass: "mess",
                offset: 200,
              });
              this.appear = 1;
            } else {
              this.$message({
                message: res.msg,
                offset: 200,
                showClose: true,
              });
              this.appear = 0;
            }
            console.log(res);
          });
        }
      } else {
        this.$message({
          message: "信息有误",
          offset: 200,
          showClose: true,
        });
      }
    },
  },
  created() {
    // 获取图片验证码
    this.getImage();
    if (!_local.get("token")) {
      //判断是否登录失效
      this.$message({
        message: "登录失效，请重新登录",
        offset: 200,
        showClose: true,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100%;
  background-color: #f7f7f7;
  position: relative;
}
.login {
  width: 1200px;
  height: 610px;
  // border: 1px solid;
  margin: auto;
  position: absolute;
  top: 50%;
  margin-top: -305px;
  left: 50%;
  margin-left: -600px;
  .left {
    width: 37%;
    height: 100%;
    float: left;
    background-image: url("../assets/reg.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .right {
    width: 63%;
    height: 100%;
    background-color: white;
    float: right;
    position: relative;
    .tab {
      width: 350px;
      height: 60px;
      border-bottom: 1px solid gainsboro;
      position: absolute;
      left: 50%;
      margin-left: -175px;
      top: 30px;
      font-size: 19px;
      text-align: center;
      line-height: 70px;
      color: #666666;
      span {
        display: inline-block;
        width: 49%;
        height: 100%;
        // border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
    .content {
      .con {
        width: 450px;
        height: 400px;
        // border: 1px solid;
        position: absolute;
        left: 50%;
        margin-left: -225px;
        top: 80px;
        .reg {
          color: white;
          margin: 30px auto;
          border-radius: 5px;
          text-align: center;
        }
        .copy {
          width: 350px;
          // height: 40px;
          line-height: 25px;

          margin: auto;
          font-size: 11px;
          color: #666666;
          text-align: center;
        }
        .active {
          margin-top: 50px;
        }
      }
    }
  }
}
.getTryCode {
  color: #6a2f73;
  font-size: 12px;
}
.mistakeCon {
  // position: absolute;
  font-size: 12px;
  margin-left: 50px;
  color: #f56c6c;
  top: 58px;
}
#mis {
  position: absolute;
  top: 270px;
}
.forget {
  width: 350px;
  height: 40px;
  font-size: 13px;
  line-height: 40px;
  text-align: right;
  margin-left: 58px;
  color: #6a2f73;
  cursor: pointer;
}
.forgetPwCon {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.4);
  .content {
    width: 390px;
    height: 450px;
    position: absolute;
    background-color: white;
    border-radius: 10px;
    top: 50%;
    margin-top: -225px;
    left: 50%;
    margin-left: -195px;
    overflow: hidden;
    .top {
      width: 100%;
      height: 50px;
      background-color: #6a2f73;
      color: white;
      line-height: 50px;
      span {
        display: inline-block;
        width: 48%;
        text-indent: 1em;
      }
      span:nth-child(2) {
        text-align: right;
      }
    }
  }
}
.forgotBtn {
  width: 100px;
  height: 40px;
  background-color: #6a2f73;
  margin: 20px auto;
  border-radius: 3px;
  line-height: 40px;
  color: white;
  text-align: center;
}
.tab2 {
  width: 350px;
  height: 60px;

  margin-left: 50px;
  font-size: 15px;
  text-align: center;
  line-height: 50px;
  color: #666666;
  margin-top: 20px;
  span {
    display: inline-block;
    // width: 50%;
    border: 1px solid #dddddd;
    text-align: center;
    width: 170px;
  }
}
</style>
<style lang="scss">
.el-form-item__error {
  left: 50px;
}
.el-form-item {
  margin-bottom: 0px;
}
#inp {
  margin-top: 25px;

  .el-input__inner {
    width: 350px;
    border: none;

    border-bottom: 1px solid #e2e2e2;
    border-radius: 0px;
    font-size: 13px;
    // margin-left: 50px;
  }
  .el-input {
    width: 350px;
    margin-left: 50px;
    line-height: 40px;
    // position: relative;
  }
  .el-checkbox:last-of-type {
    width: 350px;
    border: none;
    margin-top: 25px;
    border-radius: 0px;

    margin-left: 50px;
  }

  .el-checkbox__label {
    font-size: 12px;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #6a2f73;
    border: none;
  }
}
.reg {
  .el-button--primary.is-disabled,
  .el-button--primary.is-disabled:active,
  .el-button--primary.is-disabled:focus,
  .el-button--primary.is-disabled:hover {
    background-color: #6a2f73;
    // background-color: #D2D2D2;
    opacity: 0.5;
  }
  .el-button--primary {
    background-color: #6a2f73;
  }
}

</style>




