<template>
  <div>
    <header><i class="el-icon-thirdrotate-orbit"></i>Orbit Wizard</header>
    <el-row :gutter="20">
      <el-col :span="8">
        <div  class="grid-content" >
          <el-form :inline="true" label-position="right" label-width="150px" :model="satellite">
            <div>&nbsp</div>
            <div>&nbsp</div>
            <el-form-item class="el-label" label="Type:">
              <el-select v-model="currentType" placeholder="Type Choose">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  v-on:select="currentType == item.value"
                  :disabled="item.disabled">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Satellite Name:">
              <el-input v-model="satellite.name" prefix-icon="el-icon-thirdSATELLITE" placeholder="Satellite Name" clearable></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="8">
        <div  class="grid-content">
          <div class="sub-title" align="left">Analysis Time Period</div>
          <div>&nbsp</div>
          <div>&nbsp</div>

          <el-form :inline="true" label-position="right" label-width="100px" :model="graphics">
            <el-form-item label="Start&Stop:" class="item_01">
              <el-date-picker
                v-model="timePeriod"
                type="datetimerange"
                range-separator="to"
                start-placeholder="start"
                end-placeholder="stop">
              </el-date-picker>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content graphics">
          <div class="sub-title" align="left">Graphics</div>
          <div>&nbsp</div>
          <el-form :inline="true" label-position="right" label-width="100px" :model="graphics">
            <el-form-item label="">
              <el-checkbox-group v-model="graphics.checkedList">
                <el-checkbox label="Show All Objects" name="checkedList"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Color:">
              <el-color-picker v-model="graphics.color" size="mini"></el-color-picker>
            </el-form-item>
            <el-form-item  label="3D Mode:">
              <input type="file"  accept=".dae, .mdl" @change="fileChanged">
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div  class="grid-content">
          <keep-alive>
            <component v-bind:is="currentType"></component>
          </keep-alive>
        </div>
      </el-col>
      <el-col :span="16">
          <div id="cesiumContainer"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8" :offset="15" class="buttonGroups">
        <el-button type="primary" >OK</el-button>
        <el-button type="primary" >Cancel</el-button>
        <el-button type="primary" >Apply</el-button>
        <el-button type="primary" >Help</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Circular from './options/Circular.vue';
import CriticallyInclined from './options/CriticallyInclined.vue';
import CriticallyInclinedSunSync from './options/CriticallyInclinedSunSync.vue';
import Geosynchronous from './options/Geosynchronous.vue';
import Molniya from './options/Molniya.vue';
import OrbitDesigner from './options/OrbitDesigner.vue';
import RepeatingGroundTrace from './options/RepeatingGroundTrace.vue';
import RepeatingSunSync from './options/RepeatingSunSync.vue';
import SunSynchronous from './options/SunSynchronous.vue';
import satellite from '../assets/images/satellite.svg';
import satellite_model from '../assets/model/satellite_model.gltf';
import background from '../assets/images/background.png';
  export default {
    name: "OrbitWizard",
    components:{
      Circular,
      CriticallyInclined,
      CriticallyInclinedSunSync,
      Geosynchronous,
      Molniya,
      OrbitDesigner,
      RepeatingGroundTrace,
      RepeatingSunSync,
      SunSynchronous
    },
    methods:{
      fileChanged(event){
        console.log(event.data)
      }
    },
    mounted(){
      var Cesium = window.Cesium;
      Cesium.Ion.defaultAccessToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZjg3OWY2Zi0yMWM5LTQ3ZTAtYTAzYy1kZTVjNTRkNGJjODciLCJpZCI6NDQ0NTQsImlhdCI6MTYxNDAwMzMyM30.4D8lSxvcSQiDolPBpO1OPpJk8iYX7doNKBI7-ixmfcg'
      Cesium.Ion.defaultServer="/";
      let myImageryProvider = new Cesium.SingleTileImageryProvider({
        url : background,
        rectangle : Cesium.Rectangle.fromDegrees(-180, -90, 180, 90)
      })
      var viewer = new Cesium.Viewer("cesiumContainer",
        {
          geocoder:false,
          homeButton:false,
          sceneModePicker:true,
          baseLayerPicker:false,
          navigationHelpButton:false,
          animation:false,
          timeline:false,
          imageryProvider:myImageryProvider,
          terrainProvider : new Cesium.EllipsoidTerrainProvider(),
          sceneMode:Cesium.SceneMode.SCENE2D
        })
      viewer.scene.debugShowFramesPerSecond = true;

      //viewer.scene.screenSpaceCameraController.enableZoom = false;
      viewer.camera.setView({
        destination : Cesium.Cartesian3.fromDegrees(113.0, 0, 40000000.0), // 设置位置

        orientation: {
          heading : Cesium.Math.toRadians(60.0), // 方向
          pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
          roll : 0
        }
      })
      viewer.cesiumWidget.creditContainer.style.display = "none";
      //viewer.scene.screenSpaceCameraController.maximumZoomDistance = 65000000;
      //viewer.scene.screenSpaceCameraController.minimumZoomDistance = 65000000;

      var entity = viewer.entities.add({
        id:123,
        position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0,3000000.0),
        // ellipse : {
        //   semiMinorAxis : 250000.0,
        //   semiMajorAxis : 250000.0,
        //   material:new Cesium.ImageMaterialProperty({
        //     image:satellite,
        //     color:Cesium.Color.WHITE,
        //   })
        // },
        model: {
          // 模型路径
          uri: this.satellite_model,
          minimumPixelSize: 64,
          // 模型最大刻度
          maximumSize: 128,
          // 模型是否可见
          show: true,
          // 模型轮廓颜色
          silhouetteColor:Cesium.Color.WHITE,
          // 模型轮廓大小，单位px
          silhouetteSize:1,
          // 模型颜色
          color: Cesium.Color.CORAL
        },
        description:'这是一颗卫星'
      });
      var line = viewer.entities.add({
        polyline : {
          positions : Cesium.Cartesian3.fromDegreesArray([-103.0, 40,
            113.0, 27]),
          width : 5,
          material : new Cesium.PolylineGlowMaterialProperty({
            glowPower : 0.2,
            color : Cesium.Color.BLUE
          })
        }});
    },
    data(){
      return {
        satellite_model:satellite_model,
        map: undefined,
        overView: undefined,
        marker: undefined,
        BMap: undefined,
        options:[{
          value:'Circular',
          label:'Circular'
        },{
          value:'CriticallyInclined',
          label:'Critically Inclined'
        },{
          value:'CriticallyInclinedSunSync',
          label:'Critically Inclined, Sun Sync'
        },{
          value:'Geosynchronous',
          label:'Geosynchronous'
        },{
          value:'Molniya',
          label:'Molniya'
        },{
          value:'OrbitDesigner',
          label:'Orbit Designer'
        },{
          value:'RepeatingGroundTrace',
          label:'Repeating Ground Trace'
        },{
          value:'RepeatingSunSync',
          label:'Repeating Sun Sync'
        },{
          value:'SunSynchronous',
          label:'Sun Synchronous'
        }
        ],
        currentType:'Circular',
        timePeriod:{
          start:Date.now(),
          stop:Date.now()
        },
        graphics:{
          checkedList:[],
          color:'#5119ff',
          threeDimensionsModelFileName:''
        },
        satellite:{
          name:'Satellite1',
          type:this.currentType
        },
        timePeriod:[new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
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
/*.grid-content:hover{*/
  /*-webkit-transform: translateY(-3px);*/
  /*-ms-transform: translateY(-3px);*/
  /*transform: translateY(-3px);*/
  /*-webkit-box-shadow: 0 0 6px #999;*/
  /*box-shadow: 0 0 6px #999;*/
  /*-webkit-transition: all .3s ease-out;*/
  /*transition: all .5s ease-out;*/
/*}*/
.buttonGroups {
  margin-top: 20px;
  margin-left:  50%;
}

#cesiumContainer{
  width: 100%;
  height: 100%
}


</style>
