<template>
  <div class="options">
    <el-row>
      <div align="left">Definiton</div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" label-width="220px" :model="params">
          <el-form-item label="SubSatellite Point:">
            <el-input v-model="params.subSatellitePoint" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.subSatellitePoint" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="Inclination:">
            <el-input v-model="params.inclination" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.inclination" :show-tooltip="false"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Geosynchronous",
        data(){
          return {
            params:{
              subSatellitePoint:undefined,
              inclination:undefined,
            }
          }
       }
    }
</script>

<style scoped>

</style>
