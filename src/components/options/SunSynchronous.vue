<template>
  <div class="options">
    <el-row>
      <div align="left">Geometry Definition</div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" label-width="220px" :model="params">
          <el-form-item label="Inclination:">
            <el-input v-model="params.inclination" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.inclination" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="Altitude:">
            <el-input v-model="params.altitude" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.altitude" :show-tooltip="false"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <div align="left">Node Definition</div>
    </el-row>
    <el-row>
      <el-form :inline="true" label-width="250px" :model="params">
        <el-form-item label="Number Of Revs to Repeat:">
          <el-input v-model="params.localTimeOfAscendingNode" suffix-icon="el-icon-thirddataanalysis"></el-input>
          <el-slider v-model="params.localTimeOfAscendingNode" :show-tooltip="false"></el-slider>
        </el-form-item>
        <el-form-item label="Lon. of First Ascending Node:">
          <el-input v-model="params.localTimeOfDescendingNode" suffix-icon="el-icon-thirddataanalysis"></el-input>
          <el-slider v-model="params.localTimeOfDescendingNode" :show-tooltip="false"></el-slider>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "SunSynchronous",
        data(){
          return {
            params:{
              inclination:undefined,
              altitude:undefined,
              localTimeOfAscendingNode:undefined,
              localTimeOfDescendingNode: undefined,
            }
          }
        }
    }
</script>

<style scoped>

</style>
