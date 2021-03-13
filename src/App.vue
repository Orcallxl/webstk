<template>
  <div id="app">
    <div class="menu-comp">
      <span class="menu-button" id="open-button"></span>
    </div>

    <!--<canvas id="canvas" style="position:fixed;z-index:-1; left:0; top:0; width: auto;"> canvas not support</canvas>-->

    <!--<div class="menu-wrap">-->
      <!--<nav class="menu">-->
        <!--<div class="icon-list">-->
          <!--<a href="/OrbitWizard"><i class="fa fa-fw fa-star-o"></i><span>轨道设计向导</span></a>-->
          <!--<a href="/CeZhan"><i class="fa fa-fw fa-bell-o"></i><span>测站</span></a>-->
          <!--<a href="#"><i class="fa fa-fw fa-envelope-o"></i><span>天基动能</span></a>-->
          <!--<a href="#"><i class="fa fa-fw fa-comment-o"></i><span>地基动能</span></a>-->
          <!--<a href="#"><i class="fa fa-fw fa-bar-chart-o"></i><span>对地观测</span></a>-->
        <!--</div>-->
      <!--</nav>-->
      <!--<button class="close-button" id="close-button">Close Menu</button>-->
    <!--</div>-->
    <!--<button class="menu-button" id="open-button">Open Menu</button>-->
    <main>
        <div >
          <router-view ></router-view>
        </div>
    </main>
    <footer>
      <div class="footer">© NUDT All Rights Reserved 2021.</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:  {
    getCanvas(){
      //x成分とy成分を持つ二次元ベクトル
      class Vector2 {
        /**
         * コンストラクター
         * @param {number} x
         * @param {number} y
         */
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
        /**
         * ベクトルのxとyをセットする
         */
        set(x, y) {
          this.x = x;
          this.y = y;
          return this;
        }
        /**
         * ベクトルの複製
         */
        clone() {
          return new Vector2(this.x, this.y);
        }
        /**
         * ベクトルの足し算 : 渡されたベクトルのxとyを自分に足す
         */
        add(v) {
          this.x += v.x;
          this.y += v.y;
          return this;
        }
        /**
         * ベクトルの引き算 : 渡されたベクトルのxとyを自分から引く
         */
        sub(v) {
          this.x -= v.x;
          this.y -= v.y;
          return this;
        }
        /**
         * ベクトルの乗算
         */
        mult(v) {
          this.x *= v.x;
          this.y *= v.y;
          return this;
        }
        /**
         * ベクトルの大きさ
         */
        magnitude() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        /**
         * ベクトルの向きを変更して速度を乗算する
         */
        setFromScalarAngle(scalar, angle) {
          this.x = Math.cos(angle) * scalar;
          this.y = Math.sin(angle) * scalar;
        }
      }

//Particleクラスを作成する
      class Particle {
        /**
         * コンストラクター
         * @param {canvas} canvas
         * @param {number} x positionx(位置)
         * @param {number} y positiony(位置)
         * @param {number} scalar scalar(速度)
         * @param {number} direction direction(角度)
         * @param {number} radius radius(半径)
         * @param {string} color color(色)
         */
        constructor(canvas, x, y, scalar, direction, radius, color) {
          this.canvas = canvas;
          //position(位置)プロパティのインスタンスを作成
          this.position = new Vector2(x, y);
          //velocity(進路方向+速度)プロパティのインスタンスを作成
          this.velocity = new Vector2();
          //velocityの速度と向きをセットする
          this.velocity.setFromScalarAngle(scalar, direction);
          //radius(半径)プロパティを定義
          this.radius = radius;
          //color(色)プロパティを定義
          this.color = color;
          this.range = 100;
        }
        /**
         * updateメソッドの作成
         */
        update() {
          //positionにvelocityを加算する
          this.position.add(this.velocity);

          // position(位置)がcanvas外に出た時は中央に再配置
          if (this.position.x - this.range > this.canvas.width) {
            this.position.x = this.canvas.width / 2;
            this.position.y = this.canvas.height / 2;
          };
          if (this.position.x + this.range < 0) {
            this.position.x = this.canvas.width / 2;
            this.position.y = this.canvas.height / 2;
          };
          if (this.position.y - this.range > this.canvas.height) {
            this.position.x = this.canvas.width / 2;
            this.position.y = this.canvas.height / 2;
          };
          if (this.position.y + this.range < 0) {
            this.position.x = this.canvas.width / 2;
            this.position.y = this.canvas.height / 2;
          };
        }
      }

      window.onload = function () {

        var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d'),
          width = canvas.width = window.innerWidth,
          height = canvas.height = window.innerHeight,
          particles = [],
          particleNum = 20,
          colors = ["#0952BD", "#A5BFF0", "#118CD6", "#1AAEE8", "#F2E8C9"];

        //リサイズイベント
        window.onresize = () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        }

        //引数の最小値から最大値の間でランダムな値の整数を返す関数
        function randomIntFromRange(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min)
        }
        //ランダムな色を返す関数
        function randomColor(colors) {
          return colors[Math.floor(Math.random() * colors.length)]
        }

        //最初に定義しておいたparticles配列に、Particleクラスのインスタンスを作成し、各種プロパティを格納する
        for (let i = 0; i < particleNum; i++) {
          particles.push(new Particle(
            canvas,
            canvas.width / 2,
            canvas.height / 2,
            Math.random() * 8 + 2,
            Math.random() * Math.PI * 2,
            randomIntFromRange(5, 7),
            randomColor(colors),
          ));
        }

        function draw() {
          for (let i = 0; i < particleNum; i++) {
            var p = particles[i];
            p.update();
            ctx.save();
            ctx.beginPath();
            ctx.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2)
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 5;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.globalAlpha = '1'
            ctx.fillStyle = p.color;
            ctx.fill();
            ctx.restore();
          }
        }

        render();

        function render() {
          ctx.fillStyle = 'hsla(260,40%,5%,.2)';
          ctx.fillRect(0, 0, width, height);
          draw();
          requestAnimationFrame(render);
        }
      }
    }
  },
  mounted() {
    this.getCanvas();
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.sub-title{
  font-size: 120%;
  font-weight: bold;
  box-sizing: border-box;
  padding: 5px 10px;
}
 .el-form-item__label{
   font-size: 16px;
  color:#000000;

}
.el-checkbox__label{
  font-size: 16px;
  color:#000000;
}
.el-button{
  color: #ffffff;
  background-color: #15418c;
}
.el-button:hover{
  background-color: #2b6fa0;
}
.el-input__inner{
  background-color: #fafafa;
}
.el-slider__runway{
  background-color: #fafafa;
}
  header{
    font-size: 260%;
    margin-bottom: 20px;
    color: #ffffff;
    font-weight: bold;
  }
  footer{
    margin-top: 150px;
    color: #ffffff;
  }

.menu-wrap {
  position: absolute;
  z-index: 1001;
  width: 300px;
  height: 100%;
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
  -webkit-transform: translate3d(-320px,0,0);
  transform: translate3d(-320px,0,0);
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}
.menu-wrap a {
  color: #b8b7ad;
}

.menu-wrap a:hover,
.menu-wrap a:focus {
  color: #c94e50;
}
.show-menu .menu-wrap {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: -webkit-transform 0.8s;
  transition: transform 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}

.menu-button {
  position: sticky;
  position: -webkit-sticky;
  display: block;
  left:0;
  top:0;
  z-index: 1000;
  margin: 0;
  padding: 0;
  width: 2.5em;
  height: 2.25em;
  border: none;
  text-indent: 2.5em;
  font-size: 1.5em;
  color: transparent;
  background: transparent;
}
.menu-button::before {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  bottom: 0.5em;
  left: 0.5em;
  background: linear-gradient(#003ad9 20%, transparent 20%, transparent 40%, #003ad9 40%, #003ad9 60%, transparent 60%, transparent 80%, #003ad9 80%);
  content: '';
}

.menu-button:hover {
  opacity: 0.6;
}
  .menu-comp{
    position: absolute;
    top:0;
    left:0;
  }

</style>
