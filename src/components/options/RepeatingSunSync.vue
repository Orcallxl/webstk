<template>
  <div class="options">
    <el-row>
      <div align="left">Position</div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" label-width="220px" :model="params">
          <el-form-item label="Approximate Altitude:">
            <el-input v-model="params.approximateAltitude" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.approximateAltitude" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="Approximate Revs Per Day:">
            <el-input v-model="params.approximateRevsPerDay" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.approximateRevsPerDay" :show-tooltip="false"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <div align="left">Definition</div>
    </el-row>
    <el-row>
      <el-form :inline="true" label-width="250px" :model="params">
        <el-form-item label="Number Of Revs to Repeat:">
          <el-input v-model="params.numberOfRevsToRepeat" suffix-icon="el-icon-thirddataanalysis"></el-input>
        </el-form-item>
        <el-form-item label="Lon. of First Ascending Node:">
          <el-input v-model="params.longitudeOfFirstAscendingNode" suffix-icon="el-icon-thirddataanalysis"></el-input>
          <el-slider v-model="params.longitudeOfFirstAscendingNode" :show-tooltip="false"></el-slider>
        </el-form-item>
        <el-form-item label="Local tim of ascending node :">
          <el-input v-model="params.longitudeOfFirstAscendingNode" suffix-icon="el-icon-thirddataanalysis"></el-input>
        </el-form-item>
        <el-form-item label="Local tim of descending node :">
          <el-input v-model="params.longitudeOfFirstAscendingNode" suffix-icon="el-icon-thirddataanalysis"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "RepeatingSunSync",
        data(){
          return {
            params:{
             approximateAltitude:undefined,
             approximateRevsPerDay:undefined,
             numberOfRevsToRepeat:undefined,
             longitudeOfFirstAscendingNode: undefined,
           }
         }
       }
    }
</script>

<style scoped>

</style>
