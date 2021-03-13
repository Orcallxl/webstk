<template>
    <div class="options">
      <el-row>
        <div class="sub-title" align="left">Definition</div>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form :inline="true" label-width="150px" :model="params">
            <el-form-item label="Inclination:">
              <el-input v-model="params.inclination" suffix-icon="el-icon-thirddataanalysis" placeholder="Inclination"></el-input>
              <el-slider v-model="params.inclination" :show-tooltip="false"></el-slider>
            </el-form-item>
            <el-form-item label="Altitude:">
              <el-input v-model="params.altitude" suffix-icon="el-icon-thirddataanalysis" placeholder="Altitude"></el-input>
              <el-slider v-model="params.altitude" :show-tooltip="false"></el-slider>
            </el-form-item>
            <el-form-item label="RAAN:">
              <el-input v-model="params.raan" suffix-icon="el-icon-thirddataanalysis" placeholder="RAAN"></el-input>
              <el-slider v-model="params.raan" :show-tooltip="false"></el-slider>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Circular",
        data(){
          return{
            params:{
              inclination:undefined,
              altitude:undefined,
              raan: undefined
            }
          }
        }
    }
</script>

<style scoped>

</style>
