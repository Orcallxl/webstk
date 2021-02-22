<template>
  <div class="options">
    <el-row>
      <div align="left">Definiton</div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" label-width="220px" :model="params">
          <el-form-item label="Apogee Longitude:">
            <el-input v-model="params.apogeeLongitude" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.apogeeLongitude" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="Perigee Altitude:">
            <el-input v-model="params.perigeeAltitude" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.perigeeAltitude" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="Argument of Perigee:">
            <el-input v-model="params.perigeeArgument" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.perigeeArgument" :show-tooltip="false"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "Molniya",
      data(){
        return {
          params:{
            apogeeLongitude:undefined,
            perigeeAltitude:undefined,
            perigeeArgument:undefined,
          }
        }
      }
    }
</script>

<style scoped>

</style>
