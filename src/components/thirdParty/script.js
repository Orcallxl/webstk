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
        particleNum = 100,
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
