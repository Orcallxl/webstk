<template>
  <div class="options">
    <el-row>
      <div class="sub-title" align="left">Direction</div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" label-width="150px">
          <el-form-item label="">
            <el-radio-group v-model="params.direction">
              <el-radio :label="`posigrade`">Posigrade</el-radio>
              <el-radio :label="`retrograde`">Retrograde</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <div class="sub-title" align="left">Definition</div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" label-width="220px" :model="params">
          <el-form-item label="Apogee Altitude:">
            <el-input v-model="params.apogeeAltitude" suffix-icon="el-icon-thirddataanalysis" placeholder="Apogee Altitude"></el-input>
            <el-slider v-model="params.apogeeAltitude" :show-tooltip="false"></el-slider>
          </el-form-item>
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
        name: "CriticallyInclined",
        data(){
          return{
            params:{
              direction:'posigrade',
              apogeeAltitude:undefined,
              perigeeAltitude:undefined,
              ascendingNodeLongtitude: undefined
            }
          }
        }
    }
</script>

<style scoped>

</style>
