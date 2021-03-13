<template>
  <div>
    <div id="myCesium"></div>
    <button id="1111" v-on:click="dialogFormVisible=true" class="cesium-button">规划</button>
    <el-dialog  width="70%" title="规划类型" :visible.sync="dialogFormVisible">
    <el-row :gutter="20">
      <el-col span="8">
        <div class="grid-content">
          <div class="bq-title">
            窗口规划最大时间
          </div>
          <el-form>
            <el-radio-group v-model="form.timeMax" @change="timeChooseChange">
              <el-row type="flex" justify="start">
                  <el-radio class="time-choose" label="6" @click="timeInputDisabled = false">6 h</el-radio>
              </el-row>
              <el-row type="flex" justify="start">
                  <el-radio  class="time-choose" label="12" @click="timeInputDisabled = false">12 h</el-radio>
              </el-row>
              <el-row  type="flex" justify="start">
                <el-radio  class="time-choose" label="24" @click="timeInputDisabled = false">24 h</el-radio>
              </el-row>
              <el-row class="time-choose" type="flex" justify="start">
                  <el-radio  label="" @click="timeInputDisabled = true">手动输入</el-radio>
                  <el-input  size="mini" :disabled="timeInputDisabled" v-model="form.timeMax"></el-input>
              </el-row>
            </el-radio-group>
          </el-form>
          <el-button @click="dialogFormVisible = true">计算</el-button>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <el-tabs v-model="activeTab">
            <el-tab-pane label="窗口查看" name="first">
              <el-table
                :data="tableData"
                style="width: 100%"
                :span-method="arraySpanMethod"
                height="350">
                <el-table-column property="target" label="目标" width="150"></el-table-column>
                <el-table-column property="window" label="窗口"width="100" ></el-table-column>
                <el-table-column property="speed" label="速度增量" width="100"></el-table-column>
                <el-table-column property="time" label="任务时间"width="100" ></el-table-column>
                <el-table-column property="constraint" label="约束满足情况" width="200"></el-table-column>
                <el-table-column property="check" label="选中" width="100" type="selection"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="规划方案" name="second">
              <el-table :data="tableData">
                <el-table-column property="target" label="目标" width="150"></el-table-column>
                <el-table-column property="speed" label="速度增量" width="100"></el-table-column>
                <el-table-column property="time" label="任务时间"width="100" ></el-table-column>
                <el-table-column property="constraint" label="约束满足情况" width="200"></el-table-column>
                <el-table-column property="check" label="选中" width="100" type="selection"></el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">加入命令序列</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">退 出</el-button>
    </div>
    </el-dialog>
  </div>
</template>

<script>
  import satellite from '../assets/images/satellite.svg';
  import satellite_model from '../assets/model/satellite_model.gltf';
  import background from '../assets/images/background.png';
    export default {
      name: "TJDN",
      data() {
        return {
          form:{
            timeMax:undefined
          },
          dialogTableVisible: false,
          dialogFormVisible: false,
          formLabelWidth: '120px',
          timeInputDisabled:true,
          activeTab:"窗口查看",
          targetData:[
          ],
          tableData:[
            {
              target:"1",
              speed:"800 m/s",
              window:"窗口1",
              time:"2 h",
              constraint:"阳光视锐角：45deg 相对速度：11 km/h",
              check:false
            },
            {
              target:"1",
              speed:"600 m/s",
              window:"窗口2",
              time:"4 h",
              constraint:"阳光视锐角：45deg 相对速度：11 km/h",
              check:false
            },
            {
              target:"1",
              speed:"500 m/s",
              window:"窗口3",
              time:"5 h",
              constraint:"阳光视锐角：45deg 相对速度：11 km/h",
              check:false
            },
            {
              target:"2",
              speed:"111",
              window:"窗口1",
              time:"111",
              constraint:"111",
              check:false
            },
            {
              target:"2",
              speed:"111",
              window:"窗口2",
              time:"111",
              constraint:"111",
              check:false
            },
            {
              target:"3",
              speed:"111",
              window:"窗口1",
              time:"111",
              constraint:"111",
              check:false
            },
            {
              target:"3",
              speed:"111",
              window:"窗口2",
              time:"111",
              constraint:"111",
              check:false
            },
            {
              target:"3",
              speed:"111",
              window:"窗口3",
              time:"111",
              constraint:"111",
              check:false
            }

          ]
        };
      },
      methods:{
        ObjInit(Cesium,viewer){
          var red_1 = viewer.entities.add({
            id:'R1',
            latitude:10000,
            longitude:10000,
            selectedTargets:[],
            position: Cesium.Cartesian3.fromDegrees(-120.0, 20.0,3000000.0),
            ellipse : {
              semiMinorAxis : 250000.0,
              semiMajorAxis : 250000.0,
              material:new Cesium.ImageMaterialProperty({
                image:satellite,
                color:Cesium.Color.WHITE,
              })
            },
            label:{
              text : '红方1号',
              font : '8pt monospace',
              verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
              pixelOffset : new Cesium.Cartesian2(0, -9)
            }
          });

          viewer.entities.add({
            id:'R2',
            latitude:10000,
            longitude:10000,
            selectedTargets:[],
            position: Cesium.Cartesian3.fromDegrees(-114.0, 35.0,3000000.0),
            ellipse : {
              semiMinorAxis : 250000.0,
              semiMajorAxis : 250000.0,
              material:new Cesium.ImageMaterialProperty({
                image:satellite,
                color:Cesium.Color.WHITE,
              })
            },
            label:{
              text : '红方2号',
              font : '8pt monospace',
              verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
              pixelOffset : new Cesium.Cartesian2(0, -9)
            }
          });

          viewer.entities.add({
            id:'R3',
            latitude:10000,
            longitude:10000,
            selectedTargets:[],
            position: Cesium.Cartesian3.fromDegrees(-109.0, 43.0,3000000.0),
            ellipse : {
              semiMinorAxis : 250000.0,
              semiMajorAxis : 250000.0,
              material:new Cesium.ImageMaterialProperty({
                image:satellite,
                color:Cesium.Color.WHITE,
              })
            },
            label:{
              text : '红方3号',
              font : '8pt monospace',
              verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
              pixelOffset : new Cesium.Cartesian2(0, -9)
            }
          });

          viewer.entities.add({
            id:'R4',
            latitude:10000,
            longitude:10000,
            selectedTargets:[],
            position: Cesium.Cartesian3.fromDegrees(-128.0, 43.0,3000000.0),
            ellipse : {
              semiMinorAxis : 250000.0,
              semiMajorAxis : 250000.0,
              material:new Cesium.ImageMaterialProperty({
                image:satellite,
                color:Cesium.Color.WHITE,
              })
            },
            label:{
              text : '红方4号',
              font : '8pt monospace',
              verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
              pixelOffset : new Cesium.Cartesian2(0, -9)
            }
          });

          viewer.entities.add({
            id:'R5',
            latitude:10000,
            longitude:10000,
            selectedTargets:[],
            position: Cesium.Cartesian3.fromDegrees(-138.0, 23.0,3000000.0),
            ellipse : {
              semiMinorAxis : 250000.0,
              semiMajorAxis : 250000.0,
              material:new Cesium.ImageMaterialProperty({
                image:satellite,
                color:Cesium.Color.WHITE,
              })
            },
            label:{
              text : '红方5号',
              font : '8pt monospace',
              verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
              pixelOffset : new Cesium.Cartesian2(0, -9)
            }
          });



          var blue_1 = viewer.entities.add({
            id:'B1',
            position: Cesium.Cartesian3.fromDegrees(88.0, 40.0,3000000.0),
            selectedTargets:[],
            ellipse : {
              semiMinorAxis : 250000.0,
              semiMajorAxis : 250000.0,
              material:new Cesium.ImageMaterialProperty({
                image:satellite,
                color:Cesium.Color.WHITE,
              })
            },
            label:{
              text : '蓝方1号',
              font : '8pt monospace',
              verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
              pixelOffset : new Cesium.Cartesian2(0, -9)
            }
          });

          viewer.entities.add({
            id:'B2',
            position: Cesium.Cartesian3.fromDegrees(60.0, 40.0,3000000.0),
            selectedTargets:[],
            ellipse : {
              semiMinorAxis : 250000.0,
              semiMajorAxis : 250000.0,
              material:new Cesium.ImageMaterialProperty({
                image:satellite,
                color:Cesium.Color.WHITE,
              })
            },
            label:{
              text : '蓝方2号',
              font : '8pt monospace',
              verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
              pixelOffset : new Cesium.Cartesian2(0, -9)
            }
          });

          viewer.entities.add({
            id:'B3',
            position: Cesium.Cartesian3.fromDegrees(115.0, 50.0,3000000.0),
            selectedTargets:[],
            ellipse : {
              semiMinorAxis : 250000.0,
              semiMajorAxis : 250000.0,
              material:new Cesium.ImageMaterialProperty({
                image:satellite,
                color:Cesium.Color.WHITE,
              })
            },
            label:{
              text : '蓝方3号',
              font : '8pt monospace',
              verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
              pixelOffset : new Cesium.Cartesian2(0, -9)
            }
          });
        },
        cesiumInit(){
          var Cesium = window.Cesium;
          Cesium.Ion.defaultAccessToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZjg3OWY2Zi0yMWM5LTQ3ZTAtYTAzYy1kZTVjNTRkNGJjODciLCJpZCI6NDQ0NTQsImlhdCI6MTYxNDAwMzMyM30.4D8lSxvcSQiDolPBpO1OPpJk8iYX7doNKBI7-ixmfcg'
          Cesium.Ion.defaultServer="/";
          let myImageryProvider = new Cesium.SingleTileImageryProvider({
            url : background,
            rectangle : Cesium.Rectangle.fromDegrees(-180, -90, 180, 90)
          })
          var viewer = new Cesium.Viewer("myCesium",
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
          window.viewer = viewer;
          viewer.scene.debugShowFramesPerSecond = true;
          //放入棋子
          this.ObjInit(Cesium,viewer);

          //键盘事件
          var flags = {
            attack : false,
          };
          function getFlagForKeyCode(keyCode) {

            switch (keyCode) {
              case 'A'.charCodeAt(0):
                return 'attack';
              default:
                return undefined;
            }
          }
          document.addEventListener('keydown', function(e) {
            var flagName = getFlagForKeyCode(e.keyCode);
            if (typeof flagName !== 'undefined') {
              flags[flagName] = true;
            }
          }, false);
          document.addEventListener('keyup', function(e) {
            var flagName = getFlagForKeyCode(e.keyCode);
            if (typeof flagName !== 'undefined') {
              flags[flagName] = false;
            }
          }, false);

          // 鼠标悬停信息
          var nameOverlay = document.createElement("div");
          viewer.container.appendChild(nameOverlay);
          nameOverlay.className = "backdrop";
          nameOverlay.style.display = "none";
          nameOverlay.style.position = "absolute";
          nameOverlay.style.bottom = "0";
          nameOverlay.style.left = "0";
          nameOverlay.style["pointer-events"] = "none";
          nameOverlay.style.padding = "4px";
          nameOverlay.style.backgroundColor = "transparent";
          nameOverlay.style.color="white";
          viewer.screenSpaceEventHandler.setInputAction(function onMouseMove(
            movement
            ) {
              // Pick a new feature
              var pickedFeature = viewer.scene.pick(movement.endPosition);
              if (!Cesium.defined(pickedFeature)) {
                nameOverlay.style.display = "none";
                return;
              }
              // A feature was picked, so show it's overlay content
              nameOverlay.style.display = "block";
              nameOverlay.style.bottom =
                viewer.canvas.clientHeight - movement.endPosition.y + "px";
              nameOverlay.style.left = movement.endPosition.x + "px";
              var name = pickedFeature.id.id;
              nameOverlay.textContent = name;
            },
            Cesium.ScreenSpaceEventType.MOUSE_MOVE);

          // Get default left click handler for when a feature is not picked on left click
          var clickHandler = viewer.screenSpaceEventHandler.getInputAction(
            Cesium.ScreenSpaceEventType.LEFT_CLICK
          );

          var __this = this;
          var selectedPlatform=undefined;
          var selectionIndicatorViewModelCaches = [];
          var stopTickList=[];

          //点击事件
          viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(
            movement
            ) {
              // Pick a new feature
              var pickedEntity = undefined;
              var pickedFeature = viewer.scene.pick(movement.position);
              if(pickedFeature!=undefined) pickedEntity = pickedFeature.id;
              //选中
              if(!flags.attack)
              {
                if (!Cesium.defined(pickedFeature)) {
                  for(var i in stopTickList)
                  {
                    if(stopTickList[i]!=undefined){
                      stopTickList[i]();
                    }
                  }
                  for (var i in selectionIndicatorViewModelCaches){
                    selectionIndicatorViewModelCaches[i].showSelection = false;
                    selectionIndicatorViewModelCaches[i].update();
                  }
                  selectionIndicatorViewModelCaches = [];
                  selectedPlatform=undefined;
                  clickHandler(movement);
                  return;
                }
                selectedPlatform = pickedEntity;
                for (var i in selectionIndicatorViewModelCaches){
                  selectionIndicatorViewModelCaches[i].showSelection = false;
                  selectionIndicatorViewModelCaches[i].update();
                }
                selectionIndicatorViewModelCaches = [];
                for(var i in stopTickList)
                {
                  if(stopTickList[i]!=undefined){
                    stopTickList[i]();
                  }
                }
                pickedEntity.description =
                  "<h3>棋子属性：</h3>"+
                  '<table class="cesium-infoBox-defaultTable"><tbody>' +
                  "<tr><th>ID</th><td>" +
                  pickedEntity.id +
                  "</td></tr>" +
                  "<tr><th>类型</th><td>" +
                  "卫星"+
                  "</td></tr>" +
                  "<tr><th>经度</th><td>" +
                  pickedEntity.latitude+
                  "</td></tr>" +
                  "<tr><th>纬度</th><td>" +
                  pickedEntity.longitude +
                  "</td></tr>" +
                  "<tr><th>高度</th><td>" +
                  pickedEntity.longitude +
                  "</td></tr>" +
                  "</tbody></table>"+
                  "<h3>打击目标：</h3>";
                viewer.selectedEntity = pickedEntity;
                return;
              }
              if(flags.attack)
              {
                if(selectedPlatform==undefined) return;
                if(pickedEntity==undefined){
                  console.log("未选中打击目标")
                  return;
                }
                if(selectedPlatform.id.substr(0,1)==pickedEntity.id.substr(0,1)) {
                  console.log("无法打击己方目标")
                  return;
                }
                selectedPlatform.selectedTargets.push(pickedEntity);
                var selectionIndicatorContainer = document.getElementsByClassName('cesium-viewer-selectionIndicatorContainer');//cesium起用地图选择后cesium创建的一个框
                var selectionIndicator = new Cesium.SelectionIndicator(selectionIndicatorContainer[0], viewer.scene);
                var viewModel = selectionIndicator.viewModel;
                viewModel.animateAppear();
                selectionIndicatorViewModelCaches.push(viewModel)
                var stopTick = viewer.clock.onTick.addEventListener(function (clock) {
                  var time = clock.currentTime;
                  var position;
                  var selectionIndicatorViewModel = selectionIndicator.viewModel;
                  if (selectionIndicatorViewModel) {
                    selectionIndicatorViewModel.position = pickedEntity.position.getValue(time,position);
                    selectionIndicatorViewModel.showSelection = true;
                    selectionIndicatorViewModel.update();
                  }
                });
                stopTickList.push(stopTick);
                //瞄准svg图片
                var svg = viewModel.selectionIndicatorElement.getElementsByTagName('svg:svg')[0];
                svg.innerHTML = "<g transform=\"translate(80,80)\"><path data-bind=\"attr: { transform: _transform }\" " +
                  "d=\"M -34 -34 L -34 -11.25 L -30 -15.25 L -30 -30 L -15.25 -30 L -11.25 -34 L -34 -34 z " +
                  "M 11.25 -34 L 15.25 -30 L 30 -30 L 30 -15.25 L 34 -11.25 L 34 -34 L 11.25 -34 z " +
                  "M -34 11.25 L -34 34 L -11.25 34 L -15.25 30 L -30 30 L -30 15.25 L -34 11.25 z " +
                  "M 34 11.25 L 30 15.25 L 30 30 L 15.25 30 L 11.25 34 L 34 34 L 34 11.25 z" +
                  "M -2 -34 L -2 -8 L 2 -8 L 2 -34 L -2 -34 z"  +
                  "M -34 -2 L -34 2 L -8 2 L -8 -2 L -34 -2 z"  +
                  "M -2 34 L -2 8 L 2 8 L 2 34 L -2 34 z"  +
                  "M 34 -2 L 34 2 L 8 2 L 8 -2 L 34 -2 z\"+ " +
                  "transform=\"scale(1)\"></path></g>"//修改选择器外观
                svg.style.fill = '#bc0003';//还可以修改样式
              }
              // var frame = document.getElementsByClassName("cesium-infoBox-iframe")[0];
              // console.log(frame);
              // console.log(frame.contentWindow.document.getElementById('1111'));
              // frame.contentWindow.document.getElementById('1111').onclick = __this.popUpPlan;
              // frame.onload = function() {
              //
              // }
            },
            Cesium.ScreenSpaceEventType.LEFT_CLICK);
        },
        timeChooseChange:function (val) {
          let that = this;
          that.timeInputDisabled=(val=="")?false:true
        },
        popUpPlan(){
          this.dialogFormVisible = true;
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
          let merge_update_time_index = 0;
          var list = [];
          this.tableData.forEach((item, index) => {
            if (index === 0) {
              // 第一行必须存在
              list.push(1);
              merge_update_time_index = 0;
            } else {
              if (item.target === this.tableData[index - 1].target) {
                list[merge_update_time_index]++;
                list.push(0);
              } else {
                list.push(1);
                merge_update_time_index = index;
              }
            }
          });
          const all_merge_list = [0]; // 全部合并的一级列
          if (all_merge_list.includes(columnIndex)) {
            const col_num = list[rowIndex];
            return {
              rowspan: col_num, // n行单元格的第一个直接占满n行
              colspan: col_num > 0 ? 1 : 0
            };
          }
      }},
      mounted(){
        this.cesiumInit();
    }
    }
</script>

<style scoped>
  #1111{
    position: absolute;
    border-radius: 5px;
    height: 32px;
    width: 60px;
    right: 6px;
    bottom: 6px;
    z-index:6;
  }
  .grid-content{
    min-height: 170px;
    padding: 5%;
    border-radius: 2px;
    -webkit-transition: all .3s ease-out;
    background-color: rgb(250, 250, 250);
    box-shadow: 0 0 6px #999;
  }
  .bq-title{
    font-size:1.2em;
    margin-bottom: 10px;
  }
  .time-choose{
    margin: 5%;
  }
</style>
