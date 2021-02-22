<template>
  <div class="options">
    <el-row>
      <div align="left">Position</div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" label-width="220px" :model="params">
          <el-form-item label="Perigee Altitude:">
            <el-input v-model="params.perigeeAltitude" suffix-icon="el-icon-thirddataanalysis" placeholder="Perigee Altitude"></el-input>
            <el-slider v-model="params.perigeeAltitude" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="Longtitude of Ascending Node:">
            <el-input v-model="params.ascendingNodeLongtitude" suffix-icon="el-icon-thirddataanalysis" placeholder="Longtitude of Ascending Node"></el-input>
            <el-slider v-model="params.ascendingNodeLongtitude" :show-tooltip="false"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "CriticallyInclinedSunSync",
        data(){
          return {
            params:{
              perigeeAltitude:undefined,
              ascendingNodeLongtitude:undefined,
            }
          }
        }
    }
</script>

<style scoped>

</style>
