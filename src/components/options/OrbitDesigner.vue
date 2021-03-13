<template>
  <div class="options">
    <el-row>
      <div class="sub-title" align="left">Definiton</div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" label-width="220px" :model="params">
          <el-form-item label="Semimajor Axis:">
            <el-input v-model="params.semiMajorAxis" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.semiMajorAxis" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="Eccentricity:">
            <el-input v-model="params.eccentricity" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.eccentricity" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="Inclination:">
            <el-input v-model="params.inclination" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.inclination" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="Argument of Perigee:">
            <el-input v-model="params.perigeeArgument" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.perigeeArgument" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="RAAN:">
            <el-input v-model="params.perigeeAltitude" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.perigeeAltitude" :show-tooltip="false"></el-slider>
          </el-form-item>
          <el-form-item label="True Anomaly:">
            <el-input v-model="params.trueAnomaly" suffix-icon="el-icon-thirddataanalysis"></el-input>
            <el-slider v-model="params.trueAnomaly" :show-tooltip="false"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "OrbitDesigner",
        data(){
          return {
            params:{
              semiMajorAxis:undefined,
              eccentricity:undefined,
              inclination:undefined,
              perigeeArgument:undefined,
              raan: undefined,
              trueAnomaly:undefined
           }
          }
       }
    }
</script>

<style scoped>

</style>
