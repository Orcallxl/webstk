<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div  class="grid-content" >
          <el-form :inline="true" label-position="right" label-width="150px" :model="satellite">
            <div>&nbsp</div>
            <div>&nbsp</div>
            <el-form-item label="Type:">
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
          <div align="left">Analysis Time Period</div>
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
          <div align="left">Graphics</div>
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
        <div  id="MapBox" class="grid-content map">Earth 2D Graphics
          <div  class='OrbitWizard' id='mapShow' ref="mapShow"></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8" :offset="15" class="buttonGroups">
        <el-button plain>OK</el-button>
        <el-button plain>Cancel</el-button>
        <el-button plain>Apply</el-button>
        <el-button plain >Help</el-button>
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
    },
    data(){
      return {
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}
#MapBox {
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
}
.buttonGroups {
}
</style>
