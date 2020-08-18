<template>
  <div class="box">
    <div class="formHead">
      <span
        :style="{'color':(cur==0?'#6a2b73':''),'border-bottom':(cur==0?'3px solid #6a2b73':'')}"
        @click="cur=0"
      >待提交</span>
      <span
        :style="{'color':(cur==1?'#6a2b73':''),'border-bottom':(cur==1?'3px solid #6a2b73':'')}"
        @click="submited"
      >已提交</span>
    </div>
    <!-- =================================================================未提交得申请表 -->
    <div class="biao1" v-if="cur==0">
      <div v-if="content.length==0" class="noData">暂无申请表信息</div>
      <div class="form" v-for="(item,index) in content" :key="item.id" v-else>
        <p class="title">申请表{{index+1}}</p>
        <div class="con1">
          <div class="tit">
            <div style="float:left;margin-left:0px">
              <div>基本信息</div>
              <div style="font-weight:normal">INFORMATION</div>
            </div>
            <div style="float:right" class="edit" @click="goEdit(item.applicantId)">修改</div>
          </div>
          <div class="min-con">
            <div class="cont">
              <div class="cont1">
                <p>申请人姓名：{{item.applicantBasicName}}</p>
              </div>
              <div class="cont1">
                <p>性别:{{sex[item.applicantBasicSex]}}</p>
              </div>

              <div class="cont1">
                <p>国籍:{{item.applicantBasicNationality}}</p>
              </div>
            </div>
            <!-- ===============华丽得分割线 2-->
            <div class="cont">
              <div class="cont1">
                <p>是否双重国籍:{{nation[item.applicantBasicIsdualnationality]}}</p>
              </div>
              <div class="cont1" v-if="nation[item.applicantBasicIsdualnationality]=='是'">
                <p>第二国籍：{{item.applicantBasicNationality2}}</p>
              </div>

              <div class="cont1">
                <p>证件类型:{{certificateType[item.applicantBasicIdtype]}}</p>
              </div>
              <div class="cont1">
                <p>证件号码:{{item.applicantBasicIdnumber}}</p>
              </div>
            </div>

            <!-- ===============华丽得分割线 2-->
            <div class="cont">
              <div class="cont1" style="width:700px">
                <p>
                  户籍地址:{{item.applicantBasicPermanentprovince}}&nbsp;&nbsp;
                  {{item.applicantBasicPermanentcity}}&nbsp;&nbsp;
                  {{item.applicantBasicPermanentcounty}}&nbsp;&nbsp;
                  {{item.applicantBasicPermanentaddress}}&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div class="cont">
              <div class="cont1" style="width:700px">
                <p>
                  现住址:
                  {{item.applicantBasicCurrentprovince}} &nbsp;&nbsp;
                  {{item.applicantBasicCurrentcity}}&nbsp;&nbsp;
                  {{item.applicantBasicCurrentcounty}}&nbsp;&nbsp;
                  {{item.applicantBasicCurrentaddress}}
                </p>
                <p></p>
              </div>
            </div>

            <!-- ===============华丽得分割线 5-->

            <!-- ===============华丽得分割线 6-->
            <div class="cont">
              <div class="cont1">
                <p>文化水平:{{education[item.applicantBasicCulturallevel]}}</p>
              </div>
              <div class="cont1">
                <p>手机号码:{{item.applicantBasicPhone}}</p>
              </div>
              <div class="cont1">
                <p>电子邮箱:{{item.applicantBasicEmail}}</p>
              </div>
            </div>

            <!-- ===============华丽得分割线 7-->
            <div class="cont">
              <div class="cont1">
                <p>现任职单位/退休前单位:{{item.applicantBasicUnit}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 身体状况 -->
        <div class="con1">
          <div class="tit">
            <div>身体状况</div>
            <div>HEALTH</div>
          </div>
          <div class="min-con">
            <div class="cont">
              <div class="cont1">
                <p>神智是否清楚:{{item.applicantPhysicalIssober=='Y'?'是':item.applicantPhysicalIssober=='N'?'否':''}}</p>
              </div>

              <div class="cont1">
                <p>能否独立来公证处：{{item.applicantPhysicalIsalonenotarialoffice=='Y'?'能':item.applicantPhysicalIsalonenotarialoffice=='N'?'否':''}}</p>
              </div>

              <div class="cont1">
                <p>有无大脑疾病：{{item.applicantPhysicalIsbraindiseases=='Y'?'有':item.applicantPhysicalIsbraindiseases=='N'?'有':''}} &nbsp;&nbsp;{{item.applicantPhysicalBraindiseasesexplain}}</p>
              </div>
            </div>
            <!-- -----------------------华丽的分割线 -->
            <div class="cont">
              <div class="cont1">
                <p>能否独立接受三小时录像:{{item.applicantPhysicalIsaloneaccept3hvideo=='Y'?'能':item.applicantPhysicalIsaloneaccept3hvideo=='N'?'否':''}}</p>
              </div>

              <div class="cont1">
                <p>
                  能否读写：
                  {{item.applicantPhysicalReadorwrite=='Y'?'能':item.applicantPhysicalReadorwrite=='N'?'否':''}}
                </p>
              </div>

              <div class="cont1" style="width:400px">
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <!-- 婚姻状况 -->
        <div class="con1">
          <div class="tit">
            <div>婚姻状况</div>
            <div>MARRIGE</div>
          </div>
          <div class="min-con">
            <div class="cont">
              <div class="cont1">目前婚姻状况:{{marrige[item.applicantMaritalStatus]}}</div>
              <div
                class="cont1"
                style="margin-left:20px"
                v-if="item.applicantMaritalMarrytime!=null"
              >结婚时间:{{item.applicantMaritalMarrytime}}</div>
              <!-- ========= -->
              <div
                class="cont1"
                style="margin-left:20px"
                v-if="item.applicantMaritalDivorcetime!=null"
              >离婚时间:{{item.applicantMaritalDivorcetime}}</div>
              <div
                class="cont1"
                style="margin-left:20px"
                v-if="item.applicantMaritalRemarrytime!=null"
              >再婚时间:{{item.applicantMaritalRemarrytime}}</div>
              <!-- ============ -->
              <div
                class="cont1"
                style="margin-left:20px"
                v-if="item.applicantMaritalWidowedtime!=null"
              >丧偶时间:{{item.applicantMaritalWidowedtime}}</div>
            </div>

            <!-- -----------------------华丽的分割线 -->
            <div class="cont">
              <div class="cont1">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>有几次婚姻:{{item.applicantMaritalNumber}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 父母状况 -->
        <div class="con1">
          <div class="tit">
            <div>父母情况</div>
            <div>PARENTS</div>
          </div>
          <div class="min-con">
            <div class="cont">
              <div class="cont1" style="width:245px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>父亲（姓名）:{{item.applicantFatherName}}</span>
                </p>
              </div>
              <div class="cont1" style="width:245px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>年龄:{{item.applicantFatherAge}}</span>
                </p>
              </div>
              <div class="cont1" style="width:245px">
                <p>在世情况：{{item.applicantFatherIsbeliving=='Y'?'在世':item.applicantFatherIsbeliving=='N'?'去世':''}}</p>
              </div>
              <div class="cont1" style="width:245px">
                <p>去世时间:{{item.applicantFatherDieTime}}</p>
              </div>
            </div>
            <!-- -----------------------华丽的分割线母亲状况 -->

            <div class="cont">
              <div class="cont1" style="width:245px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>母亲（姓名）:{{item.applicantMotherName}}</span>
                </p>
              </div>
              <div class="cont1" style="width:245px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>年龄:{{item.applicantMotherAge}}</span>
                </p>
              </div>
              <div class="cont1" style="width:245px">
                <p>在世情况：{{item.applicantMotherIsbeliving=='Y'?'在世':item.applicantMotherIsbeliving=='N'?'去世':''}}</p>
              </div>
              <div class="cont1" style="width:245px">
                <p>去世时间:{{item.applicantMotherDieTime}}</p>
              </div>
            </div>
            <!-- -----------------------华丽的分割线养父状况 -->

            <div class="cont">
              <div class="cont1" style="width:200px">
                <p>有无养父/继父：{{item.applicantHaveStepfather=='Y'?'有':item.applicantHaveStepfather=='N'?'无':''}}</p>
              </div>
              <div class="cont1" style="width:200px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>姓名:{{item.applicantStepfatherName}}</span>
                </p>
              </div>
              <div class="cont1" style="width:200px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>年龄:{{item.applicantStepfatherAge}}</span>
                </p>
              </div>
              <div class="cont1" style="width:200px">
                <p>在世情况：{{item.applicantStepfatherIsbeliving=='Y'?'在世':item.applicantStepfatherIsbeliving=='N'?'去世':''}}</p>
              </div>
              <div class="cont1" style="width:200px">
                <p>去世时间:{{item.applicantStepfatherDieTime}}</p>
              </div>
            </div>
            <!-- -----------------------华丽的分割线养母继母状况 -->

            <div class="cont">
              <div class="cont1" style="width:200px">
                <p>有无养母/继母：{{item.applicantHaveStepmother=='Y'?'有':item.applicantHaveStepmother=='N'?'无':''}}</p>
              </div>
              <div class="cont1" style="width:200px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>姓名:{{item.applicantStepmotherName}}</span>
                </p>
              </div>
              <div class="cont1" style="width:200px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>年龄:{{item.applicantStepmotherAge}}</span>
                </p>
              </div>
              <div class="cont1" style="width:200px">
                <p>在世情况：{{item.applicantStepmotherIsbeliving=='Y'?'在世':item.applicantStepmotherIsbeliving=='N'?'去世':''}}</p>
              </div>
              <div class="cont1" style="width:200px">
                <p>去世时间:{{item.applicantStepmotherDieTime}}</p>
              </div>
            </div>
          </div>
        </div>
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
                <p>
                  <span>子女人数:{{item.applicantChildrenNumber}}</span>
                </p>
              </div>
              <div class="cont1" style="width:400px">
                <p>有无送养子女：{{item.applicantChildrenSongyang=='Y'?'有':item.applicantChildrenSongyang=='N'?'无':''}}</p>
              </div>
            </div>
            <div class="cont">
              <div class="cont1">
                <p>有无去世子女：{{item.applicantChildrenIshavedie=='Y'?'有':item.applicantChildrenIshavedie=='N'?'无':''}}</p>
              </div>
              <div class="cont1">
                <p>去世时间:{{item.applicantChildrenDietime}}</p>
              </div>
            </div>
          </div>
        </div>
        <!--其他状况 -->
        <div class="con1">
          <div class="tit">
            <div>其他情况</div>
            <div>OTHER</div>
          </div>
          <div class="min-con" style="position: relative;">
            <div class="cont">
              <div class="cont1">
                <p>子女是否知道订立遗嘱：{{item.applicantChildrenIsknowmakewill=='Y'?'是':item.applicantChildrenIsknowmakewill=='N'?'否':item.applicantChildrenIsknowmakewill=='O'?'部分知道':''}}</p>
              </div>
            </div>
            <div class="cont">
              <div class="cont1">
                <p>夫妻双方是否均订立遗嘱：{{item.applicantSpouseAllmakewill=='Y'?'是':item.applicantSpouseAllmakewill=='N'?'否':''}}</p>
              </div>
              <div class="cont1">
                <p>
                  <span>配偶姓名:{{item.applicantSpouseName}}</span>
                </p>
              </div>
              <div class="cont1">
                <p>
                  <span>身份证号:{{item.applicantSpouseIdnumber}}</span>
                </p>
              </div>
            </div>
            <!-- ------------------华丽的分割线 -->
            <div class="cont">
              <div class="cont1" style="width:1000px">
                <p>
                  财产情况（可多选）：
                  <span
                    v-for="sitem in item.applicantPropertys"
                    :key="sitem.id"
                    id="caichan"
                  >{{property[sitem-1]}}</span>
                  {{item.applicantOtherProperty}}
                </p>
              </div>
            </div>

            <div class="cont" v-for="titem in item.tBeneficiaries" :key="titem.id">
              <div class="cont1">
                <p>
                  <span>受益人姓名:{{titem.beneficiary}}</span>
                </p>
              </div>
              <div class="cont1">
                <p>
                  <span>与遗嘱人关系:{{titem.relation}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 最后在这里提交表单 信息 -->
        <div class="submit" @click="lastSubmitForm(item.applicantId)">提交</div>
      </div>
    </div>

    <!-- ===============================================================================已提交过的申请表 -->
    <div class="biao2" v-if="cur==1">
      <div v-if="content2.length==0" class="noData">暂无申请表信息</div>

      <div class="form" v-for="(item,index) in content2" :key="item.id" v-else>
        <p class="title">申请表{{index+1}}</p>
        <div class="con1">
          <div class="tit">
            <div style="float:left;margin-left:0px">
              <div>基本信息</div>
              <div style="font-weight:normal">INFORMATION</div>
            </div>
            <!-- <div style="float:right" class="edit" @click="goEdit(item.applicantId)">修改</div> -->
          </div>
          <div class="min-con">
            <div class="cont">
              <div class="cont1">
                <p>申请人姓名：{{item.applicantBasicName}}</p>
              </div>
              <div class="cont1">
                <p>性别:{{sex[item.applicantBasicSex]}}</p>
              </div>

              <div class="cont1">
                <p>国籍:{{item.applicantBasicNationality}}</p>
              </div>
            </div>
            <!-- ===============华丽得分割线 2-->
            <div class="cont">
              <div class="cont1">
                <p>是否双重国籍:{{nation[item.applicantBasicIsdualnationality]}}</p>
              </div>
              <div
                class="cont1"
                v-if="item.applicantBasicNationality2!=null&&item.applicantBasicIsdualnationality==0"
              >
                <p>第二国籍：{{item.applicantBasicNationality2}}</p>
              </div>

              <div class="cont1">
                <p>证件类型:{{certificateType[item.applicantBasicIdtype]}}</p>
              </div>
              <div class="cont1">
                <p>证件号码:{{item.applicantBasicIdnumber}}</p>
              </div>
            </div>

            <!-- ===============华丽得分割线 2-->
            <div class="cont">
              <div class="cont1" style="width:700px">
                <p>
                  户籍地址:{{item.applicantBasicPermanentprovince}}&nbsp;&nbsp;
                  {{item.applicantBasicPermanentcity}}&nbsp;&nbsp;
                  {{item.applicantBasicPermanentcounty}}&nbsp;&nbsp;
                  {{item.applicantBasicPermanentaddress}}&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div class="cont">
              <div class="cont1" style="width:700px">
                <p>
                  现住址:
                  {{item.applicantBasicCurrentprovince}} &nbsp;&nbsp;
                  {{item.applicantBasicCurrentcity}}&nbsp;&nbsp;
                  {{item.applicantBasicCurrentcounty}}&nbsp;&nbsp;
                  {{item.applicantBasicCurrentaddress}}
                </p>
                <p></p>
              </div>
            </div>

            <!-- ===============华丽得分割线 5-->

            <!-- ===============华丽得分割线 6-->
            <div class="cont">
              <div class="cont1">
                <p>文化水平:{{education[item.applicantBasicCulturallevel]}}</p>
              </div>
              <div class="cont1">
                <p>手机号码:{{item.applicantBasicPhone}}</p>
              </div>
              <div class="cont1">
                <p>电子邮箱:{{item.applicantBasicEmail}}</p>
              </div>
            </div>

            <!-- ===============华丽得分割线 7-->
            <div class="cont">
              <div class="cont1">
                <p>现任职单位/退休前单位:{{item.applicantBasicUnit}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 身体状况 -->
        <div class="con1">
          <div class="tit">
            <div>身体状况</div>
            <div>HEALTH</div>
          </div>
          <div class="min-con">
            <div class="cont">
              <div class="cont1">
                <p>神智是否清楚:{{item.applicantPhysicalIssober=='Y'?'是':item.applicantPhysicalIssober=='N'?'否':''}}</p>
              </div>

              <div class="cont1">
                <p>能否独立来公证处：{{item.applicantPhysicalIsalonenotarialoffice=='Y'?'能':item.applicantPhysicalIsalonenotarialoffice=='N'?'否':''}}</p>
              </div>

              <div class="cont1">
                <p>有无大脑疾病：{{item.applicantPhysicalIsbraindiseases=='Y'?'有':item.applicantPhysicalIsbraindiseases=='N'?'有':''}} &nbsp;&nbsp;{{item.applicantPhysicalBraindiseasesexplain}}</p>
              </div>
            </div>
            <!-- -----------------------华丽的分割线 -->
            <div class="cont">
              <div class="cont1">
                <p>能否独立接受三小时录像:{{item.applicantPhysicalIsaloneaccept3hvideo=='Y'?'能':item.applicantPhysicalIsaloneaccept3hvideo=='N'?'否':''}}</p>
              </div>

              <div class="cont1">
                <p>
                  能否读写：
                  {{item.applicantPhysicalReadorwrite=='Y'?'能':item.applicantPhysicalReadorwrite=='N'?'否':''}}
                </p>
              </div>

              <div class="cont1" style="width:400px">
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <!-- 婚姻状况 -->
        <div class="con1">
          <div class="tit">
            <div>婚姻状况</div>
            <div>MARRIGE</div>
          </div>
          <div class="min-con">
            <div class="cont">
              <div class="cont1">目前婚姻状况:{{marrige[item.applicantMaritalStatus]}}</div>
              <div
                class="cont1"
                style="margin-left:20px"
                v-if="item.applicantMaritalMarrytime!=null"
              >结婚时间:{{item.applicantMaritalMarrytime}}</div>
              <!-- ========= -->
              <div
                class="cont1"
                style="margin-left:20px"
                v-if="item.applicantMaritalDivorcetime!=null"
              >离婚时间:{{item.applicantMaritalDivorcetime}}</div>
              <div
                class="cont1"
                style="margin-left:20px"
                v-if="item.applicantMaritalRemarrytime!=null"
              >再婚时间:{{item.applicantMaritalRemarrytime}}</div>
              <!-- ============ -->
              <div
                class="cont1"
                style="margin-left:20px"
                v-if="item.applicantMaritalWidowedtime!=null"
              >丧偶时间:{{item.applicantMaritalWidowedtime}}</div>
            </div>

            <!-- -----------------------华丽的分割线 -->
            <div class="cont">
              <div class="cont1">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>有几次婚姻:{{item.applicantMaritalNumber}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 父母状况 -->
        <div class="con1">
          <div class="tit">
            <div>父母情况</div>
            <div>PARENTS</div>
          </div>
          <div class="min-con">
            <div class="cont">
              <div class="cont1" style="width:245px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>父亲（姓名）:{{item.applicantFatherName}}</span>
                </p>
              </div>
              <div class="cont1" style="width:245px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>年龄:{{item.applicantFatherAge}}</span>
                </p>
              </div>
              <div class="cont1" style="width:245px">
                <p>在世情况：{{item.applicantFatherIsbeliving=='Y'?'在世':item.applicantFatherIsbeliving=='N'?'去世':''}}</p>
              </div>
              <div class="cont1" style="width:245px">
                <p>去世时间:{{item.applicantFatherDieTime}}</p>
              </div>
            </div>
            <!-- -----------------------华丽的分割线母亲状况 -->

            <div class="cont">
              <div class="cont1" style="width:245px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>母亲（姓名）:{{item.applicantMotherName}}</span>
                </p>
              </div>
              <div class="cont1" style="width:245px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>年龄:{{item.applicantMotherAge}}</span>
                </p>
              </div>
              <div class="cont1" style="width:245px">
                <p>在世情况：{{item.applicantMotherIsbeliving=='Y'?'在世':item.applicantMotherIsbeliving=='N'?'去世':''}}</p>
              </div>
              <div class="cont1" style="width:245px">
                <p>去世时间:{{item.applicantMotherDieTime}}</p>
              </div>
            </div>
            <!-- -----------------------华丽的分割线养父状况 -->

            <div class="cont">
              <div class="cont1" style="width:200px">
                <p>有无养父/继父：{{item.applicantHaveStepfather=='Y'?'有':item.applicantHaveStepfather=='N'?'无':''}}</p>
              </div>
              <div class="cont1" style="width:200px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>姓名:{{item.applicantStepfatherName}}</span>
                </p>
              </div>
              <div class="cont1" style="width:200px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>年龄:{{item.applicantStepfatherAge}}</span>
                </p>
              </div>
              <div class="cont1" style="width:200px">
                <p>在世情况：{{item.applicantStepfatherIsbeliving=='Y'?'在世':item.applicantStepfatherIsbeliving=='N'?'去世':''}}</p>
              </div>
              <div class="cont1" style="width:200px">
                <p>去世时间:{{item.applicantStepfatherDieTime}}</p>
              </div>
            </div>
            <!-- -----------------------华丽的分割线养母继母状况 -->

            <div class="cont">
              <div class="cont1" style="width:200px">
                <p>有无养母/继母：{{item.applicantHaveStepmother=='Y'?'有':item.applicantHaveStepmother=='N'?'无':''}}</p>
              </div>
              <div class="cont1" style="width:200px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>姓名:{{item.applicantStepmotherName}}</span>
                </p>
              </div>
              <div class="cont1" style="width:200px">
                <!-- <p>详细地址</p> -->
                <p>
                  <span>年龄:{{item.applicantStepmotherAge}}</span>
                </p>
              </div>
              <div class="cont1" style="width:200px">
                <p>在世情况：{{item.applicantStepmotherIsbeliving=='Y'?'在世':item.applicantStepmotherIsbeliving=='N'?'去世':''}}</p>
              </div>
              <div class="cont1" style="width:200px">
                <p>去世时间:{{item.applicantStepmotherDieTime}}</p>
              </div>
            </div>
          </div>
        </div>
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
                <p>
                  <span>子女人数:{{item.applicantChildrenNumber}}</span>
                </p>
              </div>
              <div class="cont1" style="width:400px">
                <p>有无送养子女：{{item.applicantChildrenSongyang=='Y'?'有':item.applicantChildrenSongyang=='N'?'无':''}}</p>
              </div>
            </div>
            <div class="cont">
              <div class="cont1">
                <p>有无去世子女：{{item.applicantChildrenIshavedie=='Y'?'有':item.applicantChildrenIshavedie=='N'?'无':''}}</p>
              </div>
              <div class="cont1">
                <p>去世时间:{{item.applicantChildrenDietime}}</p>
              </div>
            </div>
          </div>
        </div>
        <!--其他状况 -->
        <div class="con1">
          <div class="tit">
            <div>其他情况</div>
            <div>OTHER</div>
          </div>
          <div class="min-con" style="position: relative;">
            <div class="cont">
              <div class="cont1">
                <p>子女是否知道订立遗嘱：{{item.applicantChildrenIsknowmakewill=='Y'?'是':item.applicantChildrenIsknowmakewill=='N'?'否':item.applicantChildrenIsknowmakewill=='O'?'部分知道':''}}</p>
              </div>
            </div>
            <div class="cont">
              <div class="cont1">
                <p>夫妻双方是否均订立遗嘱：{{item.applicantSpouseAllmakewill=='Y'?'是':item.applicantSpouseAllmakewill=='N'?'否':''}}</p>
              </div>
              <div class="cont1">
                <p>
                  <span>配偶姓名:{{item.applicantSpouseName}}</span>
                </p>
              </div>
              <div class="cont1">
                <p>
                  <span>身份证号:{{item.applicantSpouseIdnumber}}</span>
                </p>
              </div>
            </div>
            <!-- ------------------华丽的分割线 -->
            <div class="cont">
              <div class="cont1" style="width:1000px">
                <p>
                  财产情况（可多选）：
                  <span
                    v-for="sitem in item.applicantPropertys"
                    :key="sitem.id"
                    id="caichan"
                  >{{property[sitem-1]}}</span>
                  {{item.applicantOtherProperty}}
                </p>
              </div>
            </div>

            <div class="cont" v-for="titem in item.tBeneficiaries" :key="titem.id">
              <div class="cont1">
                <p>
                  <span>受益人姓名:{{titem.beneficiary}}</span>
                </p>
              </div>
              <div class="cont1">
                <p>
                  <span>与遗嘱人关系:{{titem.relation}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 最后在这里提交 -->
        <!-- <div class="submit"  >完成</div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { search, searchDetail, submitLastInfo } from "../api/request";
import qs from "qs";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      cur: "0",
      info: "",
      content: [],
      content2: [],
      sex: ["男", "女"],
      nation: ["是", "否"],
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
      education: ["小学", "初中", "高中", "大学", "硕士", "博士"],
      marrige: [
        "已婚",
        "未婚",
        "离婚后再婚",
        "丧偶未再婚",
        "丧偶后再婚",
        "离婚后未再婚",
      ],
      property: ["房产", "车辆", "存款", "股权", "其他"],
    };
  },
  methods: {
    search1() {
      this.info = JSON.parse(localStorage.getItem("userInfo"));
      let info2 = {
        applicantBasicPhone: this.info.phone,
        status: 4,
      };
      // 待提交
      search(qs.stringify(info2)).then((res) => {
        this.content = res.rows;
      });
    },
    goEdit(id) {
      this.$router.push({
        path: `/${id}`,
        query: {
          formId: id,
        },
      });
    },
    submited() {
      this.cur = 1;
      // 已提交
      let info3 = {
        applicantBasicPhone: this.info.phone,
        status: 1,
      };

      search(qs.stringify(info3)).then((res) => {
        this.content2 = res.rows;
      });
    },
    // 最后点击完成按钮提交最后得表单信息，提交到已完成里
    lastSubmitForm(id) {
      submitLastInfo(id).then((res) => {
        if (res.code == 0) {
          // localStorage.setItem("info", JSON.stringify(info));
          this.$message({
            showClose: true,
            message: "提交成功",
            type: "success",
            customClass: "mess",
            offset: 200,
          });
          this.search1();
        }
      });
    },
  },
  created() {
    this.search1();
  },
};
</script>
<style lang="scss" scoped>
.noData {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 40px;
  line-height: 600px;
}
.box {
  width: 100%;
  height: auto;
  // height: 100%;
  background-color: white;

  .title {
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    padding-top: 80px;
  }
}
.formHead {
  width: 1000px;
  height: 70px;
  margin: 60px auto;

  span {
    display: inline-block;
    width: 300px;
    margin-left: 120px;
    height: 70px;
    line-height: 70px;
    border-bottom: 3px solid gainsboro;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    color: #666666;
  }
}
.edit {
  font-weight: bold;
  font-size: 18px !important;
  width: 60px !important;
  height: 40px;
  text-align: center;
  color: white !important;
  line-height: 40px;
  background-color: #6a2b73;
  cursor: pointer;
  border-radius: 3px;
}
.form {
  width: 1100px;
  margin: auto;
  // height: 2000px;
  // border: 0.01rem dashed;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  color: #000000;
  // margin-bottom: 50px;
  margin-top: 50px;
  overflow: hidden;
  margin-bottom: 80px;
  .con1 {
    width: 1000px;
    margin: auto;
    // height: 1000px;
    // border: 1px solid #f6f6f6;
    // margin-top: 80px;
    // margin-bottom: 80px;
    padding-bottom: 80px;
    .tit {
      height: 50px;
      border-left: 8px solid #6a2b73;
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
    .min-con {
      width: 1000px;
      // height: 2600px;
      // border: 1px solid red;
      margin-top: 20px;
      .cont {
        width: 1000px;
        height: 50px;

        font-size: 14px;

        .cont1 {
          float: left;

          width: 320px;
        }
      }
    }
  }
}
.add {
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #6a2f73;
  color: white;
}
.cont2 {
  position: absolute;
  top: 230px;
  right: 0px;
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
  margin-bottom: 70px;
  cursor: pointer;
}
#caichan {
  display: inline-block;
  width: 40px;
}
// #caichan:nth-child(1){
//   width: 22px;
// }
</style>
