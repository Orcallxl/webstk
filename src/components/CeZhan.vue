<template>
  <div>
    <header><i class="el-icon-thirdrotate-orbit"></i>测站界面</header>
    <el-row :gutter="20">
      <el-col :span="8">
        <div  class="grid-content">
          <div  align="left"  class="sub-title">测站装备库</div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#e0e0e0"
            text-color="black"
            active-text-color="#15418c">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title" class="sub-title">喀什</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title" class="sub-title">青岛</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title" class="sub-title">西安</span>
            </el-menu-item>
          </el-menu>
          <div class="buttonGroups0">
            <el-button type="primary" >添加</el-button>
            <el-button type="primary" >删除</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div  class="grid-content" >
          <div align="left" class="sub-title">测站属性</div>
          <el-row :gutter="14">
            <el-col :span="8">
              <el-form-item label="名称" >
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="类型">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="功率">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="可移动性">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="跟踪数量">
                <el-input size="mini"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="14">

          </el-row>
          <div class="cezhan-data">
            <el-form label-position="right" label-width="150px">
              <el-form-item label="名称" >
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="类型">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="功率">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="可移动性">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="跟踪数量">
                <el-input size="mini"></el-input>
              </el-form-item>
              <div  align="left"  class="sub-sub-title">部署位置</div>
              <el-form-item label="经度">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="维度">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="高度">
                <el-input size="mini"></el-input>
              </el-form-item>
              <div  align="left"  class="sub-sub-title">探测范围</div>
              <el-form-item label="方法覆盖">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="有效距离">
                <el-input size="mini"></el-input>
              </el-form-item>
              <div  align="left"  class="sub-sub-title">误差等级</div>
              <el-form-item label="高[m, m/s]">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="中[m, m/s]">
                <el-input size="mini"></el-input>
              </el-form-item>
              <el-form-item label="低[m, m/s]">
                <el-input size="mini"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name:"CeZhan",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data(){
      return{
        currIndex:0,
        objs:[
          {
            id:"2020201",
            orbitTime:"2020-03-18 02:00:00.00000",
            orbitType:1,
            TTCLevel:2,
            posx:"-25925080.7297334000",
            posy:"33240899.7625260986",
            posz:"12389.5199450585",
            velx:"-2424.633183841640",
            vely:"-1891.911491770080",
            velz:"6.393578716212"
          }
        ],
        detectWeapons:[
          {
            name:"KASHI",
            type:1,
            mobility:1,
            id:1020501,
            latitude:39,
            longitude:75,
            altitude:0,
            stateLevel:3,
            capacity:30,
            power:90,
            detecRange:3000,
            detecAngle:120,
            high_x:1,
            high_y:1,
            high_z:1,
            high_vx:1,
            high_vy:1,
            high_vz:1,
            middle_x:10,
            middle_y:10,
            middle_z:10,
            middle_vx:0.1,
            middle_vy:0.1,
            middle_vz:0.1,
            low_x:50,
            low_y:50,
            low_z:50,
            low_vx:1,
            low_vy:1,
            low_vz:1
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .grid-content{
    min-height: 170px;
    border-radius: 2px;
    margin-bottom: 20px;
    -webkit-transition: all .3s ease-out;
    background-color: rgb(224, 224, 224);
    box-shadow: 0 0 6px #999;
  }
  .sub-title{
    margin: 10px;
  }
  .sub-sub-title{
    font-size: 100%;
    font-weight: bold;
    box-sizing: border-box;
    padding: 5px 10px;
  }
  .cezhan-data{
    width: 400px;
  }
  .buttonGroups0{
    margin: 10px;
  }
</style>
