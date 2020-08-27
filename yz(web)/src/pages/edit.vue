<template>
  <!-- 预约登记申请表 -->
  <div class="box">
    <div class="form">
      <p class="title">预约登记申请表</p>
      <!-- 基本信息 -->
      <div class="con1">
        <div class="tit">
          <div>基本信息</div>
          <div>INFORMATION</div>
          <div class="tips">
            <i class="el-icon-info"></i>注意 : 带
            <span class="star">*</span> 的为必填信息！
          </div>
        </div>
        <div class="min-con">
          <!-- <div class="cont"> -->
          <div class="cont3">
            <p>申请人姓名</p>
            <p>
              <el-input type="text" placeholder="请填写姓名" v-model="applicantName"></el-input>
              <span class="star">*</span>
            </p>
          </div>
          <div class="cont3">
            <p>性别</p>
            <p>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in sex" :key="item.id" :value="item"></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>

          <div class="cont3">
            <p>国籍</p>
            <p>
              <el-input type="text" placeholder="请填写国籍" v-model="value2"></el-input>
              <span class="star">*</span>
            </p>
          </div>
          <!-- </div> -->
          <!-- ===============华丽得分割线 2-->
          <!-- <div class="cont"> -->
          <div class="cont3">
            <p>是否双重国籍</p>
            <p>
              <el-select v-model="value3" placeholder="请选择">
                <el-option
                  v-for="(item,index) in  DualNationality"
                  :key="item.id"
                  :value="item"
                  @click.native="llll(index)"
                ></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>
          <!-- 双重国籍 -->
          <div class="cont3" v-if="showNation==0||value3=='是'">
            <p>国籍</p>
            <p>
              <el-input type="text" placeholder="请填写第二个国籍" v-model="secondNation"></el-input>
              <span class="star">*</span>
            </p>
          </div>

          <div class="cont3">
            <p>证件类型</p>
            <p>
              <el-select v-model="value4" placeholder="请选择">
                <el-option v-for="item in  certificateType" :key="item.id" :value="item"></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>
          <div class="cont3">
            <p>证件号码</p>
            <p>
              <el-input type="text" placeholder="请填写证件号码" v-model="certificateNumber"></el-input>
              <span class="star">*</span>
            </p>
          </div>
          <!-- </div> -->

          <!-- ===============华丽得分割线 2-->
          <!-- <div class="cont"> -->
          <div class="cont3">
            <p>户籍地址:省/直辖市/自治区/特别行政区</p>
            <p>
              <el-select v-model="provinceValue" placeholder="请选择">
                <el-option
                  v-for="(item,index) of province"
                  :key="index"
                  :label="item.name"
                  :value="item.name"
                  @click.native="getP(item.id)"
                ></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>

          <div class="cont3">
            <p>户籍地址:市</p>
            <p>
              <el-select v-model="cityValue" placeholder="请选择">
                <el-option
                  v-for="(item,index) of cityarr"
                  :key="index"
                  :label="item.name"
                  :value="item.name"
                  @click.native="getC(item.id)"
                ></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>

          <div class="cont3">
            <p>户籍地址:区/县</p>
            <p>
              <el-select placeholder="请选择" v-model="RegionValue">
                <el-option
                  v-for="(item,index) of regionarr"
                  :key="index"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>
          <!-- </div> -->

          <!-- ===============华丽得分割线 3-->
          <!-- <div class="cont"> -->
          <!-- <div class="cont3">

              <p id="detail">
                <span>详细地址:</span>
                <el-input type="text" placeholder="请填写详细地址" v-model="detailAdress" label="详细地址"></el-input>
              </p>
          </div>-->
          <!-- </div> -->

          <!-- ===============华丽得分割线 4-->
          <!-- <div class="cont"> -->
          <div class="cont3">
            <p>现住址:省/直辖市/自治区/特别行政区</p>
            <p>
              <el-select v-model="provinceValue2" placeholder="请选择">
                <el-option
                  v-for="(item,index) of province2"
                  :key="index"
                  :label="item.name"
                  :value="item.name"
                  @click.native="getP2(item.id)"
                ></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>

          <div class="cont3">
            <p>现住址:市</p>
            <p>
              <el-select v-model="cityValue2" placeholder="请选择">
                <el-option
                  v-for="(item,index) of cityarr2"
                  :key="index"
                  :label="item.name"
                  :value="item.name"
                  @click.native="getC2(item.id)"
                ></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>

          <div class="cont3">
            <p>现住址:区/县</p>
            <p>
              <el-select placeholder="请选择" v-model="RegionValue2">
                <el-option
                  v-for="(item,index) of regionarr2"
                  :key="index"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>
          <!-- </div> -->

          <!-- ===============华丽得分割线 5-->
          <!-- <div class="cont"> -->
          <!-- <div class="cont3">

              <p id="detail">
                <span>详细地址:</span>
                <el-input type="text" placeholder="请填写详细地址" v-model="detailAdress2" label="详细地址"></el-input>
              </p>
          </div>-->
          <!-- </div> -->

          <!-- ===============华丽得分割线 6-->
          <!-- <div class="cont"> -->

          <div class="cont3">
            <p>手机号码</p>
            <p>
              <el-input type="text" placeholder="请填写手机号码" v-model="phoneNumber"></el-input>
              <span class="star">*</span>
            </p>
          </div>
          <!-- <div class="cont3">
            <p>电子邮箱</p>
            <p>
              <el-input type="text" placeholder="请填写电子邮箱" v-model="email"></el-input>
              <span class="star">*</span>
            </p>
          </div>-->
          <div class="cont3">
            <p>文化水平</p>
            <p>
              <el-select v-model="value5" placeholder="请选择">
                <el-option v-for="item in education" :key="item.id" :value="item"></el-option>
              </el-select>
              <span class="star">*</span>
            </p>
          </div>
          <!-- </div> -->

          <!-- ===============华丽得分割线 7-->
          <!-- <div class="cont"> -->
          <div class="cont3">
            <p>现任职单位/退休前单位</p>
            <p>
              <el-input type="text" placeholder="请填写现任职单位/退休前单位" v-model="work"></el-input>
              <span class="star">*</span>
            </p>
          </div>
        </div>
        <div style="clear:both"></div>
      </div>
      <!-- </div> -->
      <!-- _____________________________________________________ -->

      <!-- 身体状况 -->
      <div class="con1">
        <div class="tit">
          <div>身体状况</div>
          <div>HEALTH</div>
        </div>
        <div class="min-con">
          <div class="cont">
            <div class="cont1">
              <p>
                <span class="star">*</span> 神智是否清楚:
                <el-radio v-model="radio" label="Y">是</el-radio>
                <el-radio v-model="radio" label="N">否</el-radio>
              </p>
            </div>

            <div class="cont1">
              <p>
                <span class="star">*</span> 能否独立来公证处:
                <el-radio v-model="radio2" label="Y">能</el-radio>
                <el-radio v-model="radio2" label="N">否</el-radio>
              </p>
            </div>

            <div class="cont1">
              <p id="disease">
                <span class="star">*</span> 有无大脑疾病:
                <el-radio v-model="radio3" label="N">无</el-radio>
                <el-radio v-model="radio3" label="Y">有</el-radio>
                <el-input type="text" placeholder="请填写" v-model="disease"></el-input>
              </p>
            </div>
          </div>
          <!-- -----------------------华丽的分割线 -->
          <div class="cont">
            <div class="cont1">
              <p>
                <span class="star">*</span> 能否独立接受三小时录像:
                <el-radio v-model="radio4" label="Y">能</el-radio>
                <el-radio v-model="radio4" label="N">否</el-radio>
              </p>
            </div>

            <div class="cont1">
              <p>
                <span class="star">*</span> 能否读写:
                <el-radio v-model="radio5" label="Y">能</el-radio>
                <el-radio v-model="radio5" label="N">否</el-radio>
              </p>
            </div>

            <div class="cont1" style="width:400px">
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <!-- _____________________________________________________ -->

      <!-- 婚姻状况 -->
      <div class="con1">
        <div class="tit">
          <div>婚姻状况</div>
          <div>MARRIGE</div>
        </div>
        <div class="min-con">
          <div class="cont">
            <div class="cont1">
              目前婚姻状况
              <p>
                <el-select v-model="marrigeValue" placeholder="请选择">
                  <el-option
                    v-for="(item,idx) in marrige"
                    :key="item.id"
                    :value="item"
                    @click.native="changeMarriageStatus(item,idx)"
                  ></el-option>
                </el-select>
              </p>
            </div>
            <div class="cont1" style="margin-left:20px" v-if="cur==0">
              结婚时间
              <p style="width:650px">
                <el-date-picker v-model="marrigeTime" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
            <!-- ========= -->
            <div class="cont1" style="margin-left:20px" v-if="cur==2">
              离婚时间
              <p>
                <el-date-picker v-model="divorceTime" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
            <div class="cont1" style="margin-left:20px" v-if="cur==2">
              再婚时间
              <p>
                <el-date-picker v-model="remarriedTime" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>

            <!-- ============ -->
            <div class="cont1" style="margin-left:20px" v-if="cur==3">
              丧偶时间
              <p style="width:700px">
                <el-date-picker v-model="dieLoveTime" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
            <!-- ============ -->
            <div class="cont1" style="margin-left:20px" v-if="cur==4">
              丧偶时间
              <p>
                <el-date-picker v-model="dieLoveTime" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
            <div class="cont1" style="margin-left:20px" v-if="cur==4">
              再婚时间
              <p>
                <el-date-picker v-model="remarriedTime" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
            <!-- =======> -->

            <div class="cont1" style="margin-left:20px" v-if="cur==5">
              离婚时间
              <p style="width:700px">
                <el-date-picker v-model="divorceTime" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
          </div>

          <!-- -----------------------华丽的分割线 -->

          <div class="cont">
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="marrige">
                <span>有几次婚姻:</span>
                <el-input
                  type="text"
                  placeholder="请填写婚姻次数（数字）"
                  v-model="marrigeNum"
                  label="有几次婚姻"
                  style="width:100px"
                  :disabled="flag2"
                ></el-input>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- _____________________________________________________ -->

      <!-- 父母状况 -->
      <div class="con1">
        <div class="tit">
          <div>父母情况</div>
          <div>PARENTS</div>
        </div>
        <div class="min-con">
          <div class="cont">
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="parents">
                <span>父亲（姓名）:</span>
                <el-input type="text" placeholder="姓名" v-model="fName" style="width:100px"></el-input>
              </p>
            </div>
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="parents">
                <span>年龄:</span>
                <el-input type="text" placeholder="年龄" v-model="fAge" style="width:100px"></el-input>
              </p>
            </div>
            <div class="cont1">
              <p style="margin-top:30px">
                在世情况:
                <el-radio v-model="radio6" label="Y">在世</el-radio>
                <el-radio v-model="radio6" label="N">去世</el-radio>
              </p>
            </div>
            <div class="cont1">
              <p id="dieTime">
                去世时间:
                <el-date-picker v-model="dieTime1" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
          </div>
          <!-- -----------------------华丽的分割线母亲状况 -->

          <div class="cont">
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="parents">
                <span>母亲（姓名）:</span>
                <el-input type="text" placeholder="姓名" v-model="mName" style="width:100px"></el-input>
              </p>
            </div>
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="parents">
                <span>年龄:</span>
                <el-input
                  type="text"
                  placeholder="年龄"
                  v-model="mAge"
                  label="有几次婚姻"
                  style="width:100px"
                ></el-input>
              </p>
            </div>
            <div class="cont1">
              <p style="margin-top:30px">
                在世情况:
                <el-radio v-model="radio7" label="Y">在世</el-radio>
                <el-radio v-model="radio7" label="N">去世</el-radio>
              </p>
            </div>
            <div class="cont1">
              <p id="dieTime">
                去世时间:
                <el-date-picker v-model="dieTime2" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
          </div>

          <!-- -----------------------华丽的分割线养父状况 -->

          <div class="cont">
            <div class="cont1">
              <p style="margin-top:30px;">
                有无养父/继父:
                <el-radio v-model="radio8" label="N">无</el-radio>
                <el-radio v-model="radio8" label="Y">有</el-radio>
              </p>
            </div>
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="yParents">
                <span style="display:inline-block;padding-top:10px;">姓名:</span>
                <el-input type="text" placeholder="姓名" v-model="stepFatherName" style="width:100px"></el-input>
              </p>
            </div>
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="yParents">
                <span style="display:inline-block;padding-top:10px;">年龄:</span>
                <el-input type="text" placeholder="年龄" v-model="stepFatherAge" style="width:100px"></el-input>
              </p>
            </div>
            <div class="cont1">
              <p style="margin-top:30px">
                在世情况:
                <el-radio v-model="radio9" label="Y">在世</el-radio>
                <el-radio v-model="radio9" label="N">去世</el-radio>
              </p>
            </div>
            <div class="cont1">
              <p id="dieTime2">
                去世时间:
                <el-date-picker v-model="dieTime3" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
          </div>
          <!-- -----------------------华丽的分割线养母继母状况 -->

          <div class="cont">
            <div class="cont1">
              <p style="margin-top:30px;">
                有无养父/继母:
                <el-radio v-model="radio10" label="N">无</el-radio>
                <el-radio v-model="radio10" label="Y">有</el-radio>
              </p>
            </div>
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="yParents">
                <span style="display:inline-block;padding-top:10px;">姓名:</span>
                <el-input type="text" placeholder="姓名" v-model="stepmotherName" style="width:100px"></el-input>
              </p>
            </div>
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="yParents">
                <span style="display:inline-block;padding-top:10px;">年龄:</span>
                <el-input type="text" placeholder="年龄" v-model="stepmotherAge" style="width:100px"></el-input>
              </p>
            </div>
            <div class="cont1">
              <p style="margin-top:30px">
                在世情况:
                <el-radio v-model="radio11" label="Y">在世</el-radio>
                <el-radio v-model="radio11" label="N">去世</el-radio>
              </p>
            </div>
            <div class="cont1">
              <p id="dieTime2">
                去世时间:
                <el-date-picker v-model="dieTime4" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- _____________________________________________________ -->

      <!--子女状况 -->
      <div class="con1">
        <div class="tit">
          <div>子女状况</div>
          <div>OFFSPRING</div>
        </div>
        <div class="min-con">
          <div class="cont">
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="dieTime2">
                <span>子女人数:</span>
                <el-input type="text" placeholder v-model="childNum"></el-input>
                <span style="font-size:12px;">（包括:生子女、养子女、形成扶养关系的继子女等）</span>
              </p>
            </div>
            <div class="cont1" style="width:400px">
              <p style="margin-top:25px">
                有无送养子女:
                <el-radio v-model="radio12" label="N">无</el-radio>
                <el-radio v-model="radio12" label="Y">有</el-radio>
              </p>
            </div>
          </div>
          <div class="cont">
            <div class="cont1">
              <p style="margin-top:25px">
                有无去世子女:
                <el-radio v-model="radio13" label="N">无</el-radio>
                <el-radio v-model="radio13" label="Y">有</el-radio>
              </p>
            </div>
            <div class="cont1" style="width:700px">
              <p id="dieTime2">
                去世时间:
                <el-date-picker v-model="dieChildTime" type="date" placeholder="选择日期"></el-date-picker>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- _____________________________________________________ -->

      <!--其他状况 -->
      <div class="con1">
        <div class="tit">
          <div>其他情况</div>
          <div>OTHER</div>
        </div>
        <div class="min-con" style="position: relative;">
          <div class="cont">
            <div class="cont1">
              <p style="margin-top:25px">
                子女是否知道订立遗嘱:
                <el-radio v-model="radio14" label="Y">是</el-radio>
                <el-radio v-model="radio14" label="N">否</el-radio>
                <el-radio v-model="radio14" label="O">部分知道</el-radio>
              </p>
            </div>
          </div>
          <div class="cont">
            <div class="cont1">
              <p style="margin-top:25px">
                夫妻双方是否均订立遗嘱:
                <el-radio v-model="radio15" label="Y">是</el-radio>
                <el-radio v-model="radio15" label="N">否</el-radio>
              </p>
            </div>
            <div class="cont1">
              <p id="dieTime2">
                <span>配偶姓名:</span>
                <el-input type="text" placeholder v-model="loveName"></el-input>
              </p>
            </div>
            <div class="cont1">
              <p id="marrige">
                <span>身份证号:</span>
                <el-input type="text" placeholder v-model="idCard"></el-input>
              </p>
            </div>
          </div>
          <!-- ------------------华丽的分割线 -->
          <div class="cont">
            <div class="cont1">
              <p style="margin-top:25px" id="marrige">
                <span class="star">*</span> 财产情况（可多选）:
                <el-checkbox-group v-model="checkList" style="display:inline-block">
                  <el-checkbox label="1">房产</el-checkbox>
                  <el-checkbox label="2">车辆</el-checkbox>
                  <el-checkbox label="3">存款</el-checkbox>
                  <el-checkbox label="4">股权</el-checkbox>
                  <el-checkbox label="5">其他</el-checkbox>
                </el-checkbox-group>
                <el-input type="text" placeholder v-model="other"></el-input>
              </p>
            </div>
          </div>
          <!-- -----------------------华丽的分割线 -->

          <div class="cont">
            <div class="cont1">
              <!-- <p>详细地址</p> -->
              <p id="marrige">
                <span>有几个受益人:</span>
                <el-input
                  type="text"
                  placeholder="请填写受益人人数（数字）"
                  v-model="shouyiren"
                  style="width:100px"
                ></el-input>
              </p>
            </div>
          </div>
          <div class="cont" v-for="item in info" :key="item.id">
            <div class="cont1">
              <p id="dieTime2">
                <span>受益人姓名:</span>
                <el-input type="text" placeholder v-model="item.beneficiary"></el-input>
              </p>
            </div>
            <div class="cont1">
              <p id="marrige">
                <span>与遗嘱人关系:</span>
                <el-input type="text" placeholder v-model="item.relation"></el-input>
              </p>
            </div>
            <div class="cont1" style="width:400px"></div>
          </div>
          <div class="cont2">
            <div class="add" @click="addBeneficiary">确定</div>
          </div>
        </div>
      </div>
      <!-- 提交 -->
      <div class="submit" @click="editinfo">保存</div>

    </div>
  </div>
</template>
<script>
import { province } from "../api/city";
import {
  submitInformation,
  getProvince,
  getCity,
  getRegion,
  searchDetail,
  editInfo,
} from "../api/request";
import qs from "qs";
export default {
  created() {
    getProvince().then((res) => {
      this.province = res.rows;
      this.province2 = res.rows;

      console.log(this.provincearr);
    });
  },
  data() {
    return {
      cur: "-1",
      showNation: "-1",
      flag: false,
      flag2: false,
      // input框得v-model绑定值
      applicantName: "",
      certificateNumber: "",
      // select选择器得值
      value: "",
      value2: "",
      secondNation: "",
      value3: "",
      value4: "",
      value5: "",

      // 对应位置得select可选得值
      sex: ["男", "女"],
      DualNationality: ["是", "否"],
      certificateType: [
        "出生证明",
        "组织机构代码证",
        "营业证书",
        "社会团体法人登记证书",
        "居民身份证",
        "护照",
        "军队离退休干部证",
        "武警警官证",
        "台湾居民来往大陆通行证",
        "港澳居民来往内地通行证",
        "中国人民解放军士兵证",
        "外国护照",
        "户口本",
        "其他",
      ],
      marrige: [
        "已婚",
        "未婚",
        "离婚后再婚",
        "丧偶未再婚",
        "丧偶后再婚",
        "离婚后未再婚",
      ],
      // 省市区三级联动
      arr: [1, 3, 4],
      province: [],
      cityarr: [],
      regionarr: [],
      provinceValue: "",
      cityValue: "",
      RegionValue: "",
      // 详细地址
      detailAdress: "",

      // 现住址省市区三级联动2
      arr2: [1, 3, 4],
      province2: [],
      cityarr2: [],
      regionarr2: [],
      provinceValue2: "",
      cityValue2: "",
      RegionValue2: "",
      // 详细地址
      detailAdress2: "",

      // 华丽得分割线6内容
      // 1.文化水平
      value: "",
      education: ["小学", "初中", "高中", "大学", "硕士", "博士"],
      phoneNumber: "",
      email: "",

      // 华丽得分割线6内容
      work: "",

      // 身体状况
      radio: "",
      radio2: "",
      radio3: "",
      disease: "",
      radio4: "",
      radio5: "",
      //婚姻状况
      marrigeValue: "",
      marrigeTime: "",
      marrigeNum: "",
      remarriedTime: "",
      divorceTime: "",
      dieLoveTime: "",
      //父母身体状况
      // 1.父亲
      fName: "",
      fAge: "",
      radio6: "",
      dieTime1: "",
      // 1.母亲
      mName: "",
      mAge: "",
      radio7: "",
      dieTime2: "",
      //养父/继父
      radio8: "",
      stepFatherName: "",
      stepFatherAge: "",
      radio9: "",
      dieTime3: "",
      //养母/继母
      radio10: "",
      stepmotherName: "",
      stepmotherAge: "",
      radio11: "",
      dieTime4: "",
      //子女状况
      childNum: "",
      radio12: "",
      radio13: "",
      dieChildTime: "",
      //其他情况
      checkList: [],
      radio14: "",
      radio15: "",
      loveName: "",
      idCard: "",
      other: "",
      shouyiren: "",
      info: [
        {
          beneficiary: "",
          relation: "",
        },
      ],
    };
  },
  methods: {
    // 婚姻状态数据一开始点击事件时先清零，避免混乱
    changeMarriageStatus(ite, index) {
      this.cur = index;
      this.marrigeTime = "";
      this.remarriedTime = "";
      this.divorceTime = "";
      this.dieLoveTime = "";
      if (index == 1) {
        // 未婚禁填婚姻次数
        this.flag2 = true;
        this.marrigeNum = "";
      } else {
        // 其他婚姻清空婚姻次数可填
        this.flag2 = false;
      }
    },
    llll(ind) {
      // console.log(ind);
      this.showNation = ind;
    },
    // 获取省市区
    getP(id) {
      getCity(id).then((res) => {
        this.cityarr = res.rows;
      });
    },
    getC(id) {
      getRegion(id).then((res) => {
        this.regionarr = res.rows;
      });
    },

    getP2(id) {
      getCity(id).then((res) => {
        this.cityarr2 = res.rows;
      });
    },
    getC2(id) {
      getRegion(id).then((res) => {
        this.regionarr2 = res.rows;
      });
    },
    // 受益人
    addBeneficiary() {
      // console.log(this.shouyiren)
      this.info = [
        {
          beneficiary: "",
          relation: "",
        },
      ];
      for (var i = 0; i < this.shouyiren - 1; i++) {
        this.info.push({
          beneficiary: "",
          relation: "",
        });
      }
      console.log(this.info);
    },
    // 修改接口
    editinfo() {
      // 必填项
      if (
        this.applicantName == "" ||
        this.value == "" ||
        this.value2 == "" ||
        this.value3 == "" ||
        this.value4 == "" ||
        this.certificateNumber == "" ||
        this.provinceValue == "" ||
        this.cityValue == "" ||
        this.RegionValue == "" ||
        this.provinceValue2 == "" ||
        this.cityValue2 == "" ||
        this.RegionValue2 == "" ||
        this.phoneNumber == "" ||
        this.value5 == "" ||
        this.work == "" ||
        this.radio == "" ||
        this.radio2 == "" ||
        this.radio3 == "" ||
        this.radio4 == "" ||
        this.radio5 == "" ||
        this.checkList == ""
      ) {
        this.$message({
          showClose: true,
          message: "必填项不能为空",
          customClass: "mess",
          offset: 200,
        });
      } else {
        let info = {
          applicantId: this.$route.query.formId,
          // 基本情况
          applicantBasicName: this.applicantName,
          applicantBasicSex:
            this.value == "男" ? "0" : this.value == "女" ? "1" : "",
          applicantBasicNationality: this.value2,
          applicantBasicIsdualnationality:
            this.value3 == "是" ? "0" : this.value3 == "否" ? "1" : "",
          applicantBasicIdtype: this.certificateType
            .map((sitem) => sitem)
            .indexOf(this.value4),
          // 是否为双重国籍
          applicantBasicNationality2: this.secondNation,
          applicantBasicIdnumber: this.certificateNumber,
          // 户籍所在
          applicantBasicPermanentprovince: this.provinceValue,
          applicantBasicPermanentcity: this.cityValue,
          applicantBasicPermanentcounty: this.RegionValue,
          applicantBasicPermanentaddress: this.detailAdress,
          //  现住址
          applicantBasicCurrentprovince: this.provinceValue2,
          applicantBasicCurrentcity: this.cityValue2,
          applicantBasicCurrentcounty: this.RegionValue2,
          applicantBasicCurrentaddress: this.detailAdress2,
          applicantBasicCulturallevel: this.education
            .map((sitem) => sitem)
            .indexOf(this.value5),
          applicantBasicPhone: this.phoneNumber,
          applicantBasicEmail: this.email,
          applicantBasicUnit: this.work,
          // 身体状况
          applicantPhysicalIssober: this.radio,
          applicantPhysicalIsbraindiseases: this.radio3,
          applicantPhysicalBraindiseasesexplain: this.disease,
          applicantPhysicalIsalonenotarialoffice: this.radio2,
          applicantPhysicalIsaloneaccept3hvideo: this.radio4,
          applicantPhysicalReadorwrite: this.radio5,
          // 目前婚姻状况
          applicantMaritalStatus: this.marrige
            .map((sitem) => sitem)
            .indexOf(this.marrigeValue),
          applicantMaritalNumber: this.marrigeNum,
          applicantMaritalMarrytime: this.marrigeTime,
          applicantMaritalRemarrytime: this.remarriedTime,
          applicantMaritalWidowedtime: this.dieLoveTime,
          applicantMaritalDivorcetime: this.divorceTime,
          //  父母状况
          // 1.父亲
          applicantFatherName: this.fName,
          applicantFatherAge: this.fAge,
          applicantFatherIsbeliving: this.radio6,
          applicantFatherDieTime: this.dieTime1,
          // 2.母亲
          applicantMotherName: this.mName,
          applicantMotherAge: this.mAge,
          applicantMotherIsbeliving: this.radio7,
          applicantMotherDieTime: this.dieTime2,
          //3.继父
          applicantHaveStepfather: this.radio8,
          applicantStepfatherName: this.stepFatherName,
          applicantStepfatherAge: this.stepFatherAge,
          applicantStepfatherIsbeliving: this.radio9,
          applicantStepfatherDieTime: this.dieTime3,
          //4.养母
          applicantHaveStepmother: this.radio10,
          applicantStepmotherName: this.stepmotherName,
          applicantStepmotherAge: this.stepmotherAge,
          applicantStepmotherIsbeliving: this.radio11,
          applicantStepmotherDieTime: this.dieTime4,
          //  子女状况
          applicantChildrenNumber: this.childNum,
          applicantChildrenIshavedie: this.radio13,
          applicantChildrenSongyang: this.radio12,
          applicantChildrenDietime: this.dieChildTime,
          //其他情况
          applicantChildrenIsknowmakewill: this.radio14,
          applicantSpouseAllmakewill: this.radio15,
          applicantSpouseName: this.loveName,
          applicantSpouseIdnumber: this.idCard,
          applicantPropertys: this.checkList,
          applicantOtherProperty: this.other,
          applicantBeneficiaryNumber: this.shouyiren,
          tBeneficiaries: this.info,
          userPhone: JSON.parse(localStorage.getItem("userInfo")).phone,
        };
        editInfo(info).then((res) => {
          if (res.msg == "操作成功") {
            localStorage.setItem("info", JSON.stringify(info));
            this.$message({
              showClose: true,
              message: "保存成功",
              type: "success",
              customClass: "mess",
              offset: 200,
            });
            this.$router.push("/see");
          }
        });
      }
    },
  },
  watch: {
    info: {
      handler: function (newVal, oldVal) {
        console.log(newVal);
        //do something
      },
      deep: true,
    },
  },

  created() {
    // 获取省
    getProvince().then((res) => {
      this.province = res.rows;
      this.province2 = res.rows;

      console.log(this.provincearr);
    });
    // 获取数据并赋值，将之前得数据展示出来
    searchDetail(this.$route.query.formId).then((res) => {
      this.cont = res.data;
      // 基本情况
      (this.applicantName = this.cont.applicantBasicName),
        (this.value = this.sex[this.cont.applicantBasicSex]),
        (this.value2 = this.cont.applicantBasicNationality);
      this.value3 = this.DualNationality[
        this.cont.applicantBasicIsdualnationality
      ];
      this.secondNation = this.cont.applicantBasicNationality2;
      this.value4 = this.certificateType[this.cont.applicantBasicIdtype];
      this.certificateNumber = this.cont.applicantBasicIdnumber;
      // 户籍所在地
      this.provinceValue = this.cont.applicantBasicPermanentprovince;
      this.cityValue = this.cont.applicantBasicPermanentcity;
      this.RegionValue = this.cont.applicantBasicPermanentcounty;
      this.detailAdress = this.cont.applicantBasicPermanentaddress;
      //现在住址
      this.provinceValue2 = this.cont.applicantBasicCurrentprovince;
      this.cityValue2 = this.cont.applicantBasicCurrentcity;
      this.RegionValue2 = this.cont.applicantBasicCurrentcounty;
      this.detailAdress2 = this.cont.applicantBasicCurrentaddress;
      this.value5 = this.education[this.cont.applicantBasicCulturallevel];
      this.phoneNumber = this.cont.applicantBasicPhone;
      this.email = this.cont.applicantBasicEmail;
      this.work = this.cont.applicantBasicUnit;
      // 身体状况
      this.radio = this.cont.applicantPhysicalIssober;
      this.radio2 = this.cont.applicantPhysicalIsalonenotarialoffice;
      this.radio3 = this.cont.applicantPhysicalIsbraindiseases;
      this.disease = this.cont.applicantPhysicalBraindiseasesexplain;
      this.radio4 = this.cont.applicantPhysicalIsaloneaccept3hvideo;
      this.radio5 = this.cont.applicantPhysicalReadorwrite;
      //婚姻状况
      this.marrigeValue = this.marrige[this.cont.applicantMaritalStatus];
      this.cur = this.cont.applicantMaritalStatus;
      this.marrigeTime = this.cont.applicantMaritalMarrytime;
      this.divorceTime = this.cont.applicantMaritalDivorcetime;
      this.remarriedTime = this.cont.applicantMaritalRemarrytime;
      this.dieLoveTime = this.cont.applicantMaritalWidowedtime;
      this.marrigeNum = this.cont.applicantMaritalNumber;
      //父母状况
      //父亲
      this.fName = this.cont.applicantFatherName;
      this.fAge = this.cont.applicantFatherAge;
      this.radio6 = this.cont.applicantFatherIsbeliving;
      this.dieTime1 = this.cont.applicantFatherDieTime;
      //母亲
      this.mName = this.cont.applicantMotherName;
      this.mAge = this.cont.applicantMotherAge;
      this.radio7 = this.cont.applicantMotherIsbeliving;
      this.dieTime2 = this.cont.applicantMotherDieTime;
      //继父
      this.radio8 = this.cont.applicantHaveStepfather;
      this.stepFatherName = this.cont.applicantStepfatherName;
      this.stepFatherAge = this.cont.applicantStepfatherAge;
      this.radio9 = this.cont.applicantStepfatherIsbeliving;
      this.dieTime3 = this.cont.applicantStepfatherDieTime;
      //继母
      this.radio10 = this.cont.applicantHaveStepmother;
      this.stepmotherName = this.cont.applicantStepmotherName;
      this.stepmotherAge = this.cont.applicantStepmotherAge;
      this.radio11 = this.cont.applicantStepmotherIsbeliving;
      this.dieTime4 = this.cont.applicantStepmotherDieTime;
      //子女状况
      this.childNum = this.cont.applicantChildrenNumber;
      this.radio12 = this.cont.applicantChildrenSongyang;
      this.radio13 = this.cont.applicantChildrenIshavedie;
      this.dieChildTime = this.cont.applicantChildrenDietime;
      //其他情况
      this.radio14 = this.cont.applicantChildrenIsknowmakewill;
      this.radio15 = this.cont.applicantSpouseAllmakewill;
      this.loveName = this.cont.applicantSpouseName;
      this.idCard = this.cont.applicantSpouseIdnumber;
      this.checkList =
        this.cont.applicantPropertys == null
          ? []
          : this.cont.applicantPropertys;
      this.other = this.cont.applicantOtherProperty;
      this.shouyiren = this.cont.applicantBeneficiaryNumber;
      this.info = this.cont.tBeneficiaries;
      console.log(this.marrigeValue);
      // 未婚禁填婚姻次数
      if (this.marrigeValue == "未婚") {
        this.flag2 = true;
        this.marrigeNum=''
      } else {
        this.flag2 = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  // height: 100%;
  background-color: white;
}
.form {
  width: 1002px;
  margin: auto;
  // height: 2000px;
  // border: 0.01rem dashed;
  color: #000000;
  .title {
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    margin-top: 80px;
  }
  .con1 {
    width: 1000px;
    // height: 1000px;
    // border: 1px solid #f6f6f6;
    margin-top: 80px;
    margin-bottom: 80px;
    .tit {
      height: 50px;
      border-left: 8px solid #6a2b73;
      position: relative;
      // border: 1px solid;
      div {
        width: 200px;
        margin-left: 15px;
      }
      div:nth-child(1) {
        font-size: 24px;
        font-weight: bold;
      }
      div:nth-child(2) {
        font-size: 13px;
        color: #cccccc;
      }
    }
    .tips {
      position: absolute;
      right: 0px;
      top: 10px;
      font-size: 12px;
    }
    .min-con {
      width: 1000px;
      // height: 2600px;
      // border: 1px solid red;
      margin-top: 20px;
      .cont3 {
        width: 300px;
        float: left;
        margin-right: 45px;
        font-size: 14px;
      }
      .cont3:nth-child(3),
      .cont3:nth-child(6),
      .cont3:nth-child(9),
      .cont3:nth-child(12),
      .cont3:nth-child(15) {
        float: right;
        margin-right: 0px;
      }
      .cont {
        margin-top: 5px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
.star {
  display: inline-block;
  width: 10px;
  height: 30px;

  color: #7c03c7;

  font-size: 16px;
  // height: 40px;
  vertical-align: middle;
  line-height: 30px;
  // padding-top: 5px;
}
.add {
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #6a2f73;
  color: white;
}
.cont2 {
  position: absolute;
  top: 230px;
  left: 400px;
}
.submit {
  width: 300px;
  height: 60px;
  text-align: center;
  color: white;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(#942dd4, #5702d2);
  margin: auto;
  border-radius: 30px;
  margin-bottom: 100px;
  cursor: pointer;
}
</style>
<style lang="scss">
.cont3,
.cont1 {
  p {
    .el-input {
      width: 280px;
      height: 40px;
      .el-input__inner {
        width: 280px;
        height: 40px;
      }
    }
    .el-checkbox__inner {
      border-radius: 50%;
    }
  }
}
#detail {
  margin-top: 20px;
  .el-input {
    width: 650px;
    height: 30px;
    border: none;

    .el-input__inner {
      width: 650px;
      height: 30px;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid gainsboro;
    }
  }
}
#disease {
  // margin-top: 20px;
  .el-input {
    width: 150px;
    height: 30px;
    border: none;
    margin-right: 20px;
    .el-input__inner {
      width: 150px;
      height: 30px;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid gainsboro;
    }
  }
}
#marrige {
  margin-top: 25px;
  .el-input {
    width: 250px;
    height: 30px;
    border: none;

    .el-input__inner {
      width: 250px;
      height: 30px;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid gainsboro;
    }
  }
}
#parents {
  margin-top: 20px;
  .el-input {
    width: 120px;
    height: 30px;
    border: none;

    .el-input__inner {
      width: 120px;
      height: 30px;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid gainsboro;
    }
  }
}
#dieTime {
  margin-top: 22px;
  .el-input {
    width: 250px;
    height: 30px;
    border: none;

    .el-input__inner {
      width: 250px;
      height: 35px;
      line-height: 20px;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid gainsboro;
    }
  }
}
#dieTime2 {
  margin-top: 22px;
  .el-input {
    width: 150px;
    height: 30px;
    border: none;

    .el-input__inner {
      width: 150px;
      height: 35px;
      line-height: 20px;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid gainsboro;
    }
  }
}
#yParents {
  margin-top: 20px;
  .el-input {
    width: 80px;
    height: 30px;
    border: none;

    .el-input__inner {
      width: 80px;
      height: 30px;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid gainsboro;
    }
  }
}
.cont1 {
  .el-radio {
    margin-left: 5px;
    margin-right: 10px;
  }
}
.cont1 {
  .el-radio__input.is-checked .el-radio__inner {
    background-color: #870cd3;
    border-color: #8c16d4;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #7c03c7;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #870cd3;
    border-color: #8c16d4;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #7c03c7;
  }
}
</style>
