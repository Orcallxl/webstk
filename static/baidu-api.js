window.TILE_VERSION = {
  "ditu": {
    "normal": {"version": "088", "updateDate": "20210219"},
    "satellite": {"version": "009", "updateDate": "20210219"},
    "normalTraffic": {"version": "081", "updateDate": "20210219"},
    "satelliteTraffic": {"version": "083", "updateDate": "20210219"},
    "mapJS": {"version": "104", "updateDate": "20210219"},
    "satelliteStreet": {"version": "083", "updateDate": "20210219"},
    "earthVector": {"version": "001", "updateDate": "20210219"}
  },
  "webapp": {
    "high_normal": {"version": "001", "updateDate": "20210219"},
    "lower_normal": {"version": "002", "updateDate": "20210219"}
  },
  "api_for_mobile": {
    "vector": {"version": "002", "updateDate": "20210219"},
    "vectorIcon": {"version": "002", "updateDate": "20210219"}
  }
};
window.BMAP_AUTHENTIC_KEY = "biuHZmoAow03mjwThwt8f2whaf4mVdHf";
(function () {
  function ba(a) {
    throw a;
  }

  var l = void 0, p = !0, q = null, t = !1;

  function u() {
    return function () {
    }
  }

  function ca(a) {
    return function (b) {
      this[a] = b
    }
  }

  function x(a) {
    return function () {
      return this[a]
    }
  }

  function ea(a) {
    return function () {
      return a
    }
  }

  var fa, ga = [];

  function ha(a) {
    return function () {
      return ga[a].apply(this, arguments)
    }
  }

  function ia(a, b) {
    return ga[a] = b
  }

  var ja, A = ja = A || {version: "1.3.4"};
  A.da = "$BAIDU$";
  window[A.da] = window[A.da] || {};
  A.object = A.object || {};
  A.extend = A.object.extend = function (a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    return a
  };
  A.U = A.U || {};
  A.U.fa = function (a) {
    return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : q
  };
  A.fa = A.Ic = A.U.fa;
  A.U.aa = function (a) {
    a = A.U.fa(a);
    if (a === q) return a;
    a.style.display = "none";
    return a
  };
  A.aa = A.U.aa;
  A.lang = A.lang || {};
  A.lang.Eg = function (a) {
    return "[object String]" == Object.prototype.toString.call(a)
  };
  A.Eg = A.lang.Eg;
  A.lang.jE = function (a) {
    if ("[object Object]" === Object.prototype.toString.call(a)) {
      for (var b in a) return t;
      return p
    }
    return t
  };
  A.jE = A.lang.jE;
  A.U.Zj = function (a) {
    return A.lang.Eg(a) ? document.getElementById(a) : a
  };
  A.Zj = A.U.Zj;
  A.U.getElementsByClassName = function (a, b) {
    var c;
    if (a.getElementsByClassName) c = a.getElementsByClassName(b); else {
      var e = a;
      e == q && (e = document);
      c = [];
      var e = e.getElementsByTagName("*"), f = e.length, g = RegExp("(^|\\s)" + b + "(\\s|$)"), i, k;
      for (k = i = 0; i < f; i++) g.test(e[i].className) && (c[k] = e[i], k++)
    }
    return c
  };
  A.getElementsByClassName = A.U.getElementsByClassName;
  A.U.contains = function (a, b) {
    var c = A.U.Zj, a = c(a), b = c(b);
    return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
  };
  A.ga = A.ga || {};
  /msie (\d+\.\d)/i.test(navigator.userAgent) && (A.ga.oa = A.oa = document.documentMode || +RegExp.$1);
  var ka = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    usemap: "useMap",
    frameborder: "frameBorder"
  };
  8 > A.ga.oa ? (ka["for"] = "htmlFor", ka["class"] = "className") : (ka.htmlFor = "for", ka.className = "class");
  A.U.IG = ka;
  A.U.hF = function (a, b, c) {
    a = A.U.fa(a);
    if (a === q) return a;
    if ("style" == b) a.style.cssText = c; else {
      b = A.U.IG[b] || b;
      a.setAttribute(b, c)
    }
    return a
  };
  A.hF = A.U.hF;
  A.U.iF = function (a, b) {
    a = A.U.fa(a);
    if (a === q) return a;
    for (var c in b) A.U.hF(a, c, b[c]);
    return a
  };
  A.iF = A.U.iF;
  A.cl = A.cl || {};
  (function () {
    var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
    A.cl.trim = function (b) {
      return ("" + b).replace(a, "")
    }
  })();
  A.trim = A.cl.trim;
  A.cl.hp = function (a, b) {
    var a = "" + a, c = Array.prototype.slice.call(arguments, 1), e = Object.prototype.toString;
    if (c.length) {
      c = c.length == 1 ? b !== q && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
      return a.replace(/#\{(.+?)\}/g, function (a, b) {
        var i = c[b];
        "[object Function]" == e.call(i) && (i = i(b));
        return "undefined" == typeof i ? "" : i
      })
    }
    return a
  };
  A.hp = A.cl.hp;
  A.U.rc = function (a, b) {
    a = A.U.fa(a);
    if (a === q) return a;
    for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
      i = 0;
      for (f = c.length; i < f; ++i) if (c[i] == e[k]) {
        c.splice(i, 1);
        break
      }
    }
    a.className = c.join(" ");
    return a
  };
  A.rc = A.U.rc;
  A.U.Nx = function (a, b, c) {
    a = A.U.fa(a);
    if (a === q) return a;
    var e;
    if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c); else {
      e = a.ownerDocument.createRange();
      b = b.toUpperCase();
      if (b == "AFTERBEGIN" || b == "BEFOREEND") {
        e.selectNodeContents(a);
        e.collapse(b == "AFTERBEGIN")
      } else {
        b = b == "BEFOREBEGIN";
        e[b ? "setStartBefore" : "setEndAfter"](a);
        e.collapse(b)
      }
      e.insertNode(e.createContextualFragment(c))
    }
    return a
  };
  A.Nx = A.U.Nx;
  A.U.show = function (a) {
    a = A.U.fa(a);
    if (a === q) return a;
    a.style.display = "";
    return a
  };
  A.show = A.U.show;
  A.U.DD = function (a) {
    a = A.U.fa(a);
    return a === q ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
  };
  A.U.ib = function (a, b) {
    a = A.U.fa(a);
    if (a === q) return a;
    for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++) f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
    a.className = e;
    return a
  };
  A.ib = A.U.ib;
  A.U.CB = A.U.CB || {};
  A.U.Wl = A.U.Wl || [];
  A.U.Wl.filter = function (a, b, c) {
    for (var e = 0, f = A.U.Wl, g; g = f[e]; e++) if (g = g[c]) b = g(a, b);
    return b
  };
  A.cl.wO = function (a) {
    return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function (a) {
      return a.charAt(1).toUpperCase()
    })
  };
  A.U.r0 = function (a) {
    A.U.it(a, "expand") ? A.U.rc(a, "expand") : A.U.ib(a, "expand")
  };
  A.U.it = function (a) {
    if (arguments.length <= 0 || typeof a === "function") return this;
    if (this.size() <= 0) return t;
    var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
    A.forEach(this, function (a) {
      for (var a = a.className, f = 0; f < b.length; f++) if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
        c = t;
        return
      }
      c !== t && (c = p)
    });
    return c
  };
  A.U.Dg = function (a, b) {
    var c = A.U, a = c.fa(a);
    if (a === q) return a;
    var b = A.cl.wO(b), e = a.style[b];
    if (!e) var f = c.CB[b], e = a.currentStyle || (A.ga.oa ? a.style : getComputedStyle(a, q)),
      e = f && f.get ? f.get(a, e) : e[f || b];
    if (f = c.Wl) e = f.filter(b, e, "get");
    return e
  };
  A.Dg = A.U.Dg;
  /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.opera = +RegExp.$1);
  A.ga.oM = /webkit/i.test(navigator.userAgent);
  A.ga.KY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
  A.ga.qE = "CSS1Compat" == document.compatMode;
  A.U.ma = function (a) {
    a = A.U.fa(a);
    if (a === q) return a;
    var b = A.U.DD(a), c = A.ga, e = A.U.Dg;
    c.KY > 0 && b.getBoxObjectFor && e(a, "position");
    var f = {left: 0, top: 0}, g;
    if (a == (c.oa && !c.qE ? b.body : b.documentElement)) return f;
    if (a.getBoundingClientRect) {
      a = a.getBoundingClientRect();
      f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
      f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
      f.left = f.left - b.documentElement.clientLeft;
      f.top = f.top - b.documentElement.clientTop;
      a = b.body;
      b = parseInt(e(a, "borderLeftWidth"));
      e = parseInt(e(a, "borderTopWidth"));
      if (c.oa && !c.qE) {
        f.left = f.left - (isNaN(b) ? 2 : b);
        f.top = f.top - (isNaN(e) ? 2 : e)
      }
    } else {
      g = a;
      do {
        f.left = f.left + g.offsetLeft;
        f.top = f.top + g.offsetTop;
        if (c.oM > 0 && e(g, "position") == "fixed") {
          f.left = f.left + b.body.scrollLeft;
          f.top = f.top + b.body.scrollTop;
          break
        }
        g = g.offsetParent
      } while (g && g != a);
      if (c.opera > 0 || c.oM > 0 && e(a, "position") == "absolute") f.top = f.top - b.body.offsetTop;
      for (g = a.offsetParent; g && g != b.body;) {
        f.left = f.left - g.scrollLeft;
        if (!c.opera || g.tagName != "TR") f.top = f.top - g.scrollTop;
        g = g.offsetParent
      }
    }
    return f
  };
  /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.Xe = +RegExp.$1);
  /BIDUBrowser/i.test(navigator.userAgent) && (A.ga.A2 = p);
  var la = navigator.userAgent;
  /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (A.ga.xy = +(RegExp.$1 || RegExp.$2));
  /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.Lw = +RegExp.$1);
  A.oc = A.oc || {};
  A.oc.Pb = function (a, b) {
    var c, e, f = a.length;
    if ("function" == typeof b) for (e = 0; e < f; e++) {
      c = a[e];
      c = b.call(a, c, e);
      if (c === t) break
    }
    return a
  };
  A.Pb = A.oc.Pb;
  A.lang.da = function () {
    return "TANGRAM__" + (window[A.da]._counter++).toString(36)
  };
  window[A.da]._counter = window[A.da]._counter || 1;
  window[A.da]._instances = window[A.da]._instances || {};
  A.lang.wt = function (a) {
    return "[object Function]" == Object.prototype.toString.call(a)
  };
  A.lang.Ja = function (a) {
    this.da = a || A.lang.da();
    window[A.da]._instances[this.da] = this
  };
  window[A.da]._instances = window[A.da]._instances || {};
  A.lang.Ja.prototype.gi = ha(0);
  A.lang.Ja.prototype.toString = function () {
    return "[object " + (this.yQ || "Object") + "]"
  };
  A.lang.Iu = function (a, b) {
    this.type = a;
    this.returnValue = p;
    this.target = b || q;
    this.currentTarget = q
  };
  A.lang.Ja.prototype.addEventListener = function (a, b, c) {
    if (A.lang.wt(b)) {
      !b.nl && (b.nl = {});
      !this.Li && (this.Li = {});
      var e = this.Li, f;
      if (typeof c == "string" && c) {
        /[^\w\-]/.test(c) && ba("nonstandard key:" + c);
        f = b.Dx = c
      }
      a.indexOf("on") != 0 && (a = "on" + a);
      typeof e[a] != "object" && (e[a] = {});
      typeof b.nl[a] != "object" && (b.nl[a] = {});
      f = f || A.lang.da();
      b.nl[a].Dx = f;
      e[a][f] = b
    }
  };
  A.lang.Ja.prototype.removeEventListener = function (a, b) {
    a.indexOf("on") != 0 && (a = "on" + a);
    if (A.lang.wt(b)) {
      if (!b.nl || !b.nl[a]) return;
      b = b.nl[a].Dx
    } else if (!A.lang.Eg(b)) return;
    !this.Li && (this.Li = {});
    var c = this.Li;
    c[a] && c[a][b] && delete c[a][b]
  };
  A.lang.Ja.prototype.dispatchEvent = function (a, b) {
    A.lang.Eg(a) && (a = new A.lang.Iu(a));
    !this.Li && (this.Li = {});
    var b = b || {}, c;
    for (c in b) a[c] = b[c];
    var e = this.Li, f = a.type;
    a.target = a.target || this;
    a.currentTarget = this;
    f.indexOf("on") != 0 && (f = "on" + f);
    A.lang.wt(this[f]) && this[f].apply(this, arguments);
    if (typeof e[f] == "object") for (c in e[f]) e[f][c].apply(this, arguments);
    return a.returnValue
  };
  A.lang.xa = function (a, b, c) {
    var e, f, g = a.prototype;
    f = new Function;
    f.prototype = b.prototype;
    f = a.prototype = new f;
    for (e in g) f[e] = g[e];
    a.prototype.constructor = a;
    a.e0 = b.prototype;
    if ("string" == typeof c) f.yQ = c
  };
  A.xa = A.lang.xa;
  A.lang.Tc = function (a) {
    return window[A.da]._instances[a] || q
  };
  A.platform = A.platform || {};
  A.platform.iM = /macintosh/i.test(navigator.userAgent);
  A.platform.L4 = /MicroMessenger/i.test(navigator.userAgent);
  A.platform.pM = /windows/i.test(navigator.userAgent);
  A.platform.TY = /x11/i.test(navigator.userAgent);
  A.platform.yj = /android/i.test(navigator.userAgent);
  /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (A.platform.ZB = A.ZB = RegExp.$1);
  A.platform.MY = /ipad/i.test(navigator.userAgent);
  A.platform.mE = /iphone/i.test(navigator.userAgent);

  function ma(a, b) {
    a.domEvent = b = window.event || b;
    a.clientX = b.clientX || b.pageX;
    a.clientY = b.clientY || b.pageY;
    a.offsetX = b.offsetX || b.layerX;
    a.offsetY = b.offsetY || b.layerY;
    a.screenX = b.screenX;
    a.screenY = b.screenY;
    a.ctrlKey = b.ctrlKey || b.metaKey;
    a.shiftKey = b.shiftKey;
    a.altKey = b.altKey;
    if (b.touches) {
      a.touches = [];
      for (var c = 0; c < b.touches.length; c++) a.touches.push({
        clientX: b.touches[c].clientX,
        clientY: b.touches[c].clientY,
        screenX: b.touches[c].screenX,
        screenY: b.touches[c].screenY,
        pageX: b.touches[c].pageX,
        pageY: b.touches[c].pageY,
        target: b.touches[c].target,
        identifier: b.touches[c].identifier
      })
    }
    if (b.changedTouches) {
      a.changedTouches = [];
      for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
        clientX: b.changedTouches[c].clientX,
        clientY: b.changedTouches[c].clientY,
        screenX: b.changedTouches[c].screenX,
        screenY: b.changedTouches[c].screenY,
        pageX: b.changedTouches[c].pageX,
        pageY: b.changedTouches[c].pageY,
        target: b.changedTouches[c].target,
        identifier: b.changedTouches[c].identifier
      })
    }
    if (b.targetTouches) {
      a.targetTouches = [];
      for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
        clientX: b.targetTouches[c].clientX,
        clientY: b.targetTouches[c].clientY,
        screenX: b.targetTouches[c].screenX,
        screenY: b.targetTouches[c].screenY,
        pageX: b.targetTouches[c].pageX,
        pageY: b.targetTouches[c].pageY,
        target: b.targetTouches[c].target,
        identifier: b.targetTouches[c].identifier
      })
    }
    a.rotation = b.rotation;
    a.scale = b.scale;
    return a
  }

  A.lang.Yw = function (a) {
    var b = window[A.da];
    b.ES && delete b.ES[a]
  };
  A.event = {};
  A.V = A.event.V = function (a, b, c) {
    if (!(a = A.fa(a))) return a;
    b = b.replace(/^on/, "");
    a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
    return a
  };
  A.gd = A.event.gd = function (a, b, c) {
    if (!(a = A.fa(a))) return a;
    b = b.replace(/^on/, "");
    a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
    return a
  };
  A.U.it = function (a, b) {
    if (!a || !a.className || typeof a.className != "string") return t;
    var c = -1;
    try {
      c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
    } catch (e) {
      return t
    }
    return c > -1
  };
  A.UK = function () {
    function a(a) {
      document.addEventListener && (this.element = a, this.XK = this.Lk ? "touchstart" : "mousedown", this.kD = this.Lk ? "touchmove" : "mousemove", this.jD = this.Lk ? "touchend" : "mouseup", this.yh = t, this.qu = this.pu = 0, this.element.addEventListener(this.XK, this, t), ja.V(this.element, "mousedown", u()), this.handleEvent(q))
    }

    a.prototype = {
      Lk: "ontouchstart" in window || "createTouch" in document, start: function (a) {
        na(a);
        this.yh = t;
        this.pu = this.Lk ? a.touches[0].clientX : a.clientX;
        this.qu = this.Lk ? a.touches[0].clientY : a.clientY;
        this.element.addEventListener(this.kD, this, t);
        this.element.addEventListener(this.jD, this, t)
      }, move: function (a) {
        oa(a);
        var c = this.Lk ? a.touches[0].clientY : a.clientY;
        if (10 < Math.abs((this.Lk ? a.touches[0].clientX : a.clientX) - this.pu) || 10 < Math.abs(c - this.qu)) this.yh = p
      }, end: function (a) {
        oa(a);
        this.yh || (a = document.createEvent("Event"), a.initEvent("tap", t, p), this.element.dispatchEvent(a));
        this.element.removeEventListener(this.kD, this, t);
        this.element.removeEventListener(this.jD, this, t)
      }, handleEvent: function (a) {
        if (a) switch (a.type) {
          case this.XK:
            this.start(a);
            break;
          case this.kD:
            this.move(a);
            break;
          case this.jD:
            this.end(a)
        }
      }
    };
    return function (b) {
      return new a(b)
    }
  }();
  var D = window.BMap || {};
  D.version = "3.0";
  D.r2 = 0.34 > Math.random();
  var pa = window.BMAP_SECKEY;
  window.BMAP_SECKEY = q;
  0 <= D.version.indexOf("#") && (D.version = "3.0");
  D.Gr = [];
  D.df = function (a) {
    this.Gr.push(a)
  };
  D.xr = [];
  D.Rk = function (a) {
    this.xr.push(a)
  };
  D.OU = D.apiLoad || u();
  D.V0 = D.verify || function () {
    D.version && D.version >= 1.5 && qa(D.td + "?qt=verify&ak=" + ra, function (a) {
      if (a && a.error !== 0) {
        if (typeof map !== "undefined") {
          map.Ta().innerHTML = "";
          map.Li = {}
        }
        D = q;
        var c = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
        switch (a.error) {
          case 101:
            c = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
            break;
          case 102:
            c = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
        }
        alert(c)
      }
    });
    window.__abbaidu_2063_cb = function (a) {
      pa = JSON.parse(a).data || q
    };
    var a = H("script", {type: "text/javascript", async: ""});
    a.charset = "utf-8";
    a.src = "https://dlswbr.baidu.com/heicha/mw/abclite-2063-s.js";
    a.addEventListener ? a.addEventListener("load", function (a) {
      a = a.target;
      a.parentNode.removeChild(a)
    }, t) : a.attachEvent && a.attachEvent("onreadystatechange", function () {
      var a = window.event.srcElement;
      a && (a.readyState == "loaded" || a.readyState == "complete") && a.parentNode.removeChild(a)
    });
    setTimeout(function () {
      document.getElementsByTagName("head")[0].appendChild(a);
      a = q
    }, 1)
  };
  var ra = window.BMAP_AUTHENTIC_KEY;
  window.BMAP_AUTHENTIC_KEY = q;
  var ua = window.BMap_loadScriptTime, va = (new Date).getTime(), wa = q, xa = p, ya = 5042, za = 5002, Ba = 5003,
    Ca = "load_mapclick", Da = 5038, Ea = 5041, Fa = 5047, Ha = 5036, Ia = 5039, Ja = 5037, Ka = 5040, La = 5011,
    Ma = 7E3;
  var Na = 0;

  function Oa(a, b) {
    if (a = A.fa(a)) {
      var c = this;
      A.lang.Ja.call(c);
      b = b || {};
      c.M = {
        lC: 200,
        jc: p,
        dx: t,
        $C: p,
        cp: p,
        ep: b.enableWheelZoom || t,
        SK: p,
        bD: p,
        dp: p,
        Ns: p,
        gD: p,
        ap: b.enable3DBuilding || t,
        Nc: 25,
        i1: 240,
        BU: 450,
        Ac: I.Ac,
        Kd: I.Kd,
        xt: !!b.xt,
        kc: Math.round(b.minZoom) || 1,
        qc: Math.round(b.maxZoom) || 19,
        Ua: b.mapType || Pa,
        L5: t,
        PK: b.drawer || Na,
        bx: p,
        ax: 500,
        IW: b.enableHighResolution !== t,
        um: b.enableMapClick !== t,
        devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
        TF: 99,
        De: b.mapStyle || q,
        $Y: b.logoControl === t ? t : p,
        VU: [],
        D2: b.beforeClickIcon || q,
        yg: t,
        yk: t,
        Vo: t,
        LE: p,
        WC: b.enableBizAuthLogo === t ? t : p,
        Ma: b.coordsType || 5,
        q6: b.touchZoomCenter || 0,
        dD: b.enablePinchDragging === t ? t : p
      };
      c.M.De && (this.xY(c.M.De.controls), this.eM(c.M.De.geotableId));
      c.M.De && c.M.De.styleId && c.e4(c.M.De.styleId);
      c.M.oC = {
        dark: {backColor: "#2D2D2D", textColor: "#bfbfbf", iconUrl: "dicons"},
        normal: {backColor: "#F3F1EC", textColor: "#c61b1b", iconUrl: "icons"},
        light: {backColor: "#EBF8FC", textColor: "#017fb4", iconUrl: "licons"}
      };
      b.enableAutoResize && (c.M.Ns = b.enableAutoResize);
      b.enableStreetEntrance === t && (c.M.gD = b.enableStreetEntrance);
      b.enableDeepZoom === t && (c.M.SK = b.enableDeepZoom);
      var e = c.M.VU;
      if (J()) for (var f = 0, g = e.length; f < g; f++) if (A.ga[e[f]]) {
        c.M.devicePixelRatio = 1;
        break
      }
      e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
      f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
      if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f) c.M.TF = 99;
      c.cb = a;
      c.wB(a);
      a.unselectable = "on";
      a.innerHTML = "";
      a.appendChild(c.Ba());
      b.size && this.He(b.size);
      e = c.zb();
      c.width = e.width;
      c.height = e.height;
      c.offsetX = 0;
      c.offsetY = 0;
      c.platform = a.firstChild;
      c.Ee = c.platform.firstChild;
      c.Ee.style.width = c.width + "px";
      c.Ee.style.height = c.height + "px";
      c.ce = {};
      c.he = new L(0, 0);
      c.Vb = new L(0, 0);
      c.Za = 3;
      c.Bc = 0;
      c.zC = q;
      c.yC = q;
      c.Ob = "";
      c.Mw = "";
      c.Oh = {};
      c.Oh.custom = {};
      c.Ni = {};
      c.$a = 0;
      b.useWebGL === t && Qa(t);
      c.W = new Ra(a, {Ye: "api", IS: p});
      c.W.aa();
      c.W.oF(c);
      b = b || {};
      e = c.Ua = c.M.Ua;
      c.Fc = e.uj();
      e && e.rF(c.M.Ma);
      e === Sa && Ta(za);
      e === Ua && Ta(Ba);
      e = c.M;
      e.PO = Math.round(b.minZoom);
      e.OO = Math.round(b.maxZoom);
      c.av();
      c.ba = {Oc: t, pc: 0, Ct: 0, uM: 0, P4: 0, dC: t, WE: -1, xe: []};
      c.platform.style.cursor = c.M.Ac;
      for (f = 0; f < D.Gr.length; f++) D.Gr[f](c);
      c.ba.WE = f;
      c.ha();
      Wa.load("map", function () {
        c.ob()
      });
      c.M.um && (setTimeout(function () {
        Ta(Ca)
      }, 1E3), Wa.load("mapclick", function () {
        window.MPC_Mgr = window.MPC_Mgr || {};
        window.MPC_Mgr[c.da] = new Xa(c)
      }, p));
      Ya() && Wa.load("oppc", function () {
        c.Qu()
      });
      J() && Wa.load("opmb", function () {
        c.Qu()
      });
      a = q;
      c.KB = []
    }
  }

  A.lang.xa(Oa, A.lang.Ja, "Map");
  A.extend(Oa.prototype, {
    Ba: function () {
      var a = H("div"), b = a.style;
      b.overflow = "visible";
      b.position = "absolute";
      b.zIndex = "0";
      b.top = b.left = "0px";
      var b = H("div", {"class": "BMap_mask"}), c = b.style;
      c.position = "absolute";
      c.top = c.left = "0px";
      c.zIndex = "9";
      c.overflow = "hidden";
      c.WebkitUserSelect = "none";
      a.appendChild(b);
      return a
    }, wB: function (a) {
      var b = a.style;
      b.overflow = "hidden";
      "absolute" !== Za(a).position && (b.position = "relative", b.zIndex = 0);
      b.backgroundColor = "#F3F1EC";
      b.color = "#000";
      b.textAlign = "left"
    }, ha: function () {
      var a = this;
      a.Co = function () {
        var b = a.zb();
        if (a.width !== b.width || a.height !== b.height) {
          var c = new N(a.width, a.height), e = new P("onbeforeresize");
          e.size = c;
          a.dispatchEvent(e);
          a.qk((b.width - a.width) / 2, (b.height - a.height) / 2);
          a.Ee.style.width = (a.width = b.width) + "px";
          a.Ee.style.height = (a.height = b.height) + "px";
          c = new P("onresize");
          c.size = b;
          a.dispatchEvent(c)
        }
      };
      a.M.Ns && (a.ba.hm = setInterval(a.Co, 80))
    }, qk: function (a, b, c, e) {
      var f = this.ya().$b(this.la()), g = this.Fc, i = p;
      if (c && (c instanceof Q || c instanceof L)) c = $a(c, this.M.Ma);
      c && Q.lE(c) && (this.he = new L(c.lng, c.lat), i = t);
      if (c = c && e ? g.ri(c, this.Ob) : this.Vb) if (this.Vb = new L(c.lng + a * f, c.lat - b * f), (a = g.xh(this.Vb, this.Ob)) && i) this.he = a
    }, Rg: function (a, b) {
      if (ab(a) && (this.av(), this.dispatchEvent(new P("onzoomstart")), a = this.Zn(a).zoom, a !== this.Za)) {
        this.Bc = this.Za;
        this.Za = a;
        var c;
        b ? c = b : this.qh() && (c = this.qh().ma());
        c && (c = this.no($a(c, this.M.Ma), this.Bc), this.qk(this.width / 2 - c.x, this.height / 2 - c.y, this.pg(c, this.Bc), p));
        this.dispatchEvent(new P("onzoomstartcode"))
      }
    }, Xc: function (a) {
      this.Rg(a)
    }, $F: function (a) {
      this.Rg(this.Za + 1, a)
    }, aG: function (a) {
      this.Rg(this.Za - 1, a)
    }, zi: function (a) {
      if (a instanceof Q || a instanceof L) a = $a(a, this.M.Ma), this.Vb = this.Fc.ri(a, this.Ob), this.he = Q.lE(a) ? new L(a.lng, a.lat) : this.Fc.xh(this.Vb, this.Ob)
    }, Kg: function (a, b) {
      a = Math.round(a) || 0;
      b = Math.round(b) || 0;
      this.qk(-a, -b)
    }, ds: function (a) {
      a && bb(a.Me) && (a.Me(this), this.dispatchEvent(new P("onaddcontrol", a)))
    }, DN: function (a) {
      a && bb(a.remove) && (a.remove(), this.dispatchEvent(new P("onremovecontrol", a)))
    }, bm: function (a) {
      a && bb(a.za) && (a.za(this), this.dispatchEvent(new P("onaddcontextmenu", a)))
    }, Pp: function (a) {
      a && bb(a.remove) && (this.dispatchEvent(new P("onremovecontextmenu", a)), a.remove())
    }, Ra: function (a) {
      a && bb(a.Me) && (a.Me(this), this.dispatchEvent(new P("onaddoverlay", a)))
    }, Jb: function (a) {
      a && bb(a.remove) && (a.remove(), this.dispatchEvent(new P("onremoveoverlay", a)))
    }, lK: function () {
      this.dispatchEvent(new P("onclearoverlays"))
    }, Ue: function (a) {
      a && this.dispatchEvent(new P("onaddtilelayer", a))
    }, cg: function (a) {
      a && this.dispatchEvent(new P("onremovetilelayer", a))
    }, Og: function (a) {
      if (this.Ua !== a) {
        this.M.cZ && this.C_(a);
        var b = new P("onsetmaptype");
        b.C5 = this.Ua;
        this.Ua = this.M.Ua = a;
        this.Fc = this.Ua.uj();
        this.qk(0, 0, this.mv(), p);
        this.av();
        var c = this.Zn(this.la()).zoom;
        this.Rg(c);
        this.dispatchEvent(b);
        b = new P("onmaptypechange");
        b.Za = c;
        b.Ua = a;
        this.dispatchEvent(b);
        a.rF(this.M.Ma);
        (a === cb || a === Ua) && Ta(Ba)
      }
    }, C_: function (a) {
      a === cb || a === Ua ? (this.By(p), this.VN(t), this.M.yg = t, this.M.yk = t) : (this.By(t), this.VN(p), this.M.yg = p, this.M.yk = p)
    }, zf: function (a) {
      var b = this;
      if (a instanceof Q || a instanceof L) b.zi(a, {noAnimation: p}); else if (db(a)) if (b.Ua === Sa) {
        var c = I.hC[a];
        c && (pt = c.o, b.zf(pt))
      } else {
        var e = this.JH();
        e.eu(function (c) {
          0 === e.Em() && 2 === e.Ka.result.type && (c = c.Ik(0).point, c = new L(c.lng, c.lat), c = eb(c, b.M.Ma), b.zf(c), Sa.Ck(a) && b.kF(a))
        });
        e.search(a, {log: "center"})
      }
    }, ud: function (a, b) {
      "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
      D.Cq("cus.fire", "time", {z_loadscripttime: va - ua});
      var c = this;
      if (db(a)) if (c.Ua === Sa) {
        var e = I.hC[a];
        e && (pt = e.o, c.ud(pt, b))
      } else {
        var f = c.JH();
        f.eu(function (e) {
          if (0 === f.Em() && (2 === f.Ka.result.type || 11 === f.Ka.result.type)) {
            var g = e.Ik(0).point, e = b || fb.ix(f.Ka.content.level, c), g = new L(g.lng, g.lat);
            c.ud(g, e);
            Sa.Ck(a) && c.kF(a)
          }
        });
        f.search(a, {log: "center"})
      } else if ((a instanceof Q || a instanceof L) && b) {
        b = c.Zn(b).zoom;
        c.Bc = c.Za || b;
        c.Za = b;
        e = c.he;
        a = $a(a, this.M.Ma);
        c.he = new L(a.lng, a.lat);
        c.Vb = c.Fc.ri(c.he, c.Ob);
        c.zC = c.zC || c.Za;
        c.yC = c.yC || c.he;
        var g = new P("onload"), i = new P("onloadcode");
        g.point = new L(a.lng, a.lat);
        g.pixel = c.no(c.he, c.Za);
        g.zoom = b;
        c.loaded || (c.loaded = p, c.dispatchEvent(g), wa || (wa = gb()));
        c.dispatchEvent(i);
        g = new P("onmoveend");
        g.Rz = "centerAndZoom";
        e.Ub(c.he) || c.dispatchEvent(g);
        c.dispatchEvent(new P("onmoveend"));
        c.Bc !== c.Za && (e = new P("onzoomend"), e.Rz = "centerAndZoom", c.dispatchEvent(e));
        c.M.ap && c.ap()
      }
    }, JH: function () {
      this.ba.FM || (this.ba.FM = new hb(1));
      return this.ba.FM
    }, reset: function () {
      this.ud(this.yC, this.zC, p)
    }, enableDragging: function () {
      this.M.jc = p
    }, disableDragging: function () {
      this.M.jc = t
    }, enableInertialDragging: function () {
      this.M.bx = p
    }, disableInertialDragging: function () {
      this.M.bx = t
    }, enableScrollWheelZoom: function () {
      this.M.ep = p
    }, disableScrollWheelZoom: function () {
      this.M.ep = t
    }, enableContinuousZoom: function () {
      this.M.cp = p
    }, disableContinuousZoom: function () {
      this.M.cp = t
    }, enableDoubleClickZoom: function () {
      this.M.$C = p
    }, disableDoubleClickZoom: function () {
      this.M.$C = t
    }, enableKeyboard: function () {
      this.M.dx = p
    }, disableKeyboard: function () {
      this.M.dx = t
    }, enablePinchToZoom: function () {
      this.M.dp = p
    }, disablePinchToZoom: function () {
      this.M.dp = t
    }, enableAutoResize: function () {
      this.M.Ns = p;
      this.Co();
      this.ba.hm || (this.ba.hm = setInterval(this.Co, 80))
    }, disableAutoResize: function () {
      this.M.Ns = t;
      this.ba.hm && (clearInterval(this.ba.hm), this.ba.hm = q)
    }, enableBizAuthLogo: function () {
      this.M.WC = p;
      this.Ko && this.Ko.show()
    }, disableBizAuthLogo: function () {
      this.M.WC = t;
      this.Ko && this.Ko.aa()
    }, enableMapClick: function () {
      this.M.um = p;
      var a = this;
      window.MPC_Mgr && window.MPC_Mgr[a.da] ? window.MPC_Mgr[a.da].open() : (setTimeout(function () {
        Ta(Ca)
      }, 1E3), Wa.load("mapclick", function () {
        window.MPC_Mgr = window.MPC_Mgr || {};
        window.MPC_Mgr[a.da] = new Xa(a)
      }, p))
    }, disableMapClick: function () {
      window.MPC_Mgr && window.MPC_Mgr[this.da] && window.MPC_Mgr[this.da].close();
      this.M.um = t
    }, ap: function () {
      this.M.ap = p;
      this.Mn || (this.Mn = new BuildingLayer({m3: p}), this.Ue(this.Mn))
    }, hW: function () {
      this.M.ap = t;
      this.Mn && (this.cg(this.Mn), this.Mn = q, delete this.Mn)
    }, zb: function () {
      return this.As && this.As instanceof N ? new N(this.As.width, this.As.height) : new N(this.cb.clientWidth, this.cb.clientHeight)
    }, He: function (a) {
      a && a instanceof N ? (this.As = a, this.cb.style.width = a.width + "px", this.cb.style.height = a.height + "px") : this.As = q
    }, Qb: function () {
      return eb(this.he, this.M.Ma)
    }, mv: x("he"), la: x("Za"), uV: function () {
      this.Co()
    }, Zn: function (a) {
      var b = this.M.kc, c = this.M.qc, e = t, a = Math.round(a);
      a < b && (e = p, a = b);
      a > c && (e = p, a = c);
      return {zoom: a, lD: e}
    }, Ta: x("cb"), vc: function (a, b) {
      a = $a(a, this.M.Ma);
      b = b || this.la();
      return this.Fc.vc(a, b, this.Vb, this.zb(), this.Ob)
    }, no: function (a, b) {
      b = b || this.la();
      return this.Fc.vc(a, b, this.Vb, this.zb(), this.Ob)
    }, pg: function (a, b) {
      b = b || this.la();
      return this.Fc.bc(a, b, this.Vb, this.zb(), this.Ob)
    }, bc: function (a, b) {
      return eb(this.pg(a, b), this.M.Ma)
    }, cf: function (a, b) {
      if (a) {
        var a = $a(a, this.M.Ma), c = this.no(new L(a.lng, a.lat), b);
        c.x -= this.offsetX;
        c.y -= this.offsetY;
        return c
      }
    }, fZ: function (a, b) {
      b = b || this.la();
      return this.Fc.gZ(a, b, this.Vb, this.zb(), this.Ob)
    }, eZ: function (a, b) {
      if (a) {
        var c = this.fZ(new L(a.lng, a.lat), b);
        c.x -= this.offsetX;
        c.y -= this.offsetY;
        return c
      }
    }, oN: function (a, b) {
      if (a) {
        var c = new R(a.x, a.y);
        c.x += this.offsetX;
        c.y += this.offsetY;
        return this.bc(c, b)
      }
    }, kT: function (a, b) {
      if (a) {
        var c = new R(a.x, a.y);
        c.x += this.offsetX;
        c.y += this.offsetY;
        return this.pg(c, b)
      }
    }, pointToPixelFor3D: function (a, b) {
      var c = map.Ob;
      this.Ua === Sa && c && ib.rK(a, this, b)
    }, t5: function (a, b) {
      var c = map.Ob;
      this.Ua === Sa && c && ib.qK(a, this, b)
    }, u5: function (a, b) {
      var c = this, e = map.Ob;
      c.Ua === Sa && e && ib.rK(a, c, function (a) {
        a.x -= c.offsetX;
        a.y -= c.offsetY;
        b && b(a)
      })
    }, r5: function (a, b) {
      var c = map.Ob;
      this.Ua === Sa && c && (a.x += this.offsetX, a.y += this.offsetY, ib.qK(a, this, b))
    }, le: function (a) {
      if (!this.Qx()) return new jb;
      var b = a || {}, a = b.margins || [0, 0, 0, 0], c = b.zoom || q, b = this.bc({x: a[3], y: this.height - a[2]}, c),
        a = this.bc({x: this.width - a[1], y: a[0]}, c);
      return new jb(b, a)
    }, Qx: function () {
      return !!this.loaded
    }, NR: function (a, b) {
      for (var c = this.ya(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.rf(), k = c = c.Ze(); k >= i; k--) {
        var m = this.ya().$b(k);
        if (a.LF().lng / m < this.width - g && a.LF().lat / m < this.height - e) break
      }
      k += f;
      k < i && (k = i);
      k > c && (k = c);
      return k
    }, ht: function (a, b) {
      var c = {center: this.Qb(), zoom: this.la()};
      if (!a || !a instanceof jb && 0 === a.length || a instanceof jb && a.Aj()) return c;
      var e = [];
      a instanceof jb ? (e.push(a.sf()), e.push(a.Ae())) : e = a.slice(0);
      for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) {
        var k = $a(e[g], this.M.Ma);
        f.push(this.Fc.ri(k, this.Ob))
      }
      e = new jb;
      for (g = f.length - 1; 0 <= g; g--) e.extend(f[g]);
      if (e.Aj()) return c;
      c = e.Qb();
      f = this.NR(e, b);
      b.margins && (e = b.margins, g = (e[1] - e[3]) / 2, e = (e[0] - e[2]) / 2, i = this.ya().$b(f), b.offset && (g = b.offset.width, e = b.offset.height), c.lng += i * g, c.lat += i * e);
      c = this.Fc.xh(c, this.Ob);
      return {center: eb(new L(c.lng, c.lat), this.M.Ma), zoom: f}
    }, Pg: function (a, b) {
      var c;
      c = a && a.center ? a : this.ht(a, b);
      var b = b || {}, e = b.delay || 200;
      if (c.zoom === this.Za && b.enableAnimation !== t) {
        var f = this;
        setTimeout(function () {
          f.zi(c.center, {duration: 210})
        }, e)
      } else this.ud(c.center, c.zoom)
    }, Wf: x("ce"), qh: function () {
      return this.ba.tb && this.ba.tb.eb() ? this.ba.tb : q
    }, getDistance: function (a, b) {
      if (a && b) {
        if (a.Ub(b)) return 0;
        var c = this.M ? this.M.Ma : 5, a = $a(a, c), b = $a(b, c), c = 0, c = T.Ek(a, b);
        if (c === q || c === l) c = 0;
        return c
      }
    }, vx: function () {
      var a = [], b = this.ta, c = this.Je;
      if (b) for (var e in b) b[e] instanceof kb && a.push(b[e]);
      if (c) {
        e = 0;
        for (b = c.length; e < b; e++) a.push(c[e])
      }
      return a
    }, ya: function () {
      this.Ua.rF(this.M.Ma);
      return this.Ua
    }, $X: x("Hd"), Qu: function () {
      for (var a = this.ba.WE; a < D.Gr.length; a++) D.Gr[a](this);
      this.ba.WE = a
    }, kF: function (a) {
      this.Ob = Sa.Ck(a);
      this.Mw = Sa.mL(this.Ob);
      this.Ua === Sa && this.Fc instanceof lb && (this.Fc.lj = this.Ob)
    }, setDefaultCursor: function (a) {
      this.M.Ac = a;
      this.platform && (this.platform.style.cursor = this.M.Ac)
    }, getDefaultCursor: function () {
      return this.M.Ac
    }, setDraggingCursor: function (a) {
      this.M.Kd = a
    }, getDraggingCursor: function () {
      return this.M.Kd
    }, Ix: function () {
      return this.M.IW && 1.5 <= this.M.devicePixelRatio
    }, QB: function (a, b) {
      b ? this.Oh[b] || (this.Oh[b] = {}) : b = "custom";
      a.tag = b;
      a instanceof mb && (this.Oh[b][a.da] = a, a.za(this));
      var c = this;
      Wa.load("hotspot", function () {
        c.Qu()
      }, p)
    }, $Z: function (a, b) {
      b || (b = "custom");
      this.Oh[b][a.da] && delete this.Oh[b][a.da]
    }, Ow: function (a) {
      a || (a = "custom");
      this.Oh[a] = {}
    }, av: function () {
      var a = this.Ua.rf(), b = this.Ua.Ze(), c = this.M;
      c.kc = c.PO || a;
      c.qc = c.OO || b;
      c.kc < a && (c.kc = a);
      c.qc > b && (c.qc = b)
    }, setMinZoom: function (a) {
      a = Math.round(a);
      a > this.M.qc && (a = this.M.qc);
      this.M.PO = a;
      this.wJ()
    }, setMaxZoom: function (a) {
      a = Math.round(a);
      a < this.M.kc && (a = this.M.kc);
      this.M.OO = a;
      this.wJ()
    }, wJ: function () {
      this.av();
      var a = this.M;
      this.Za < a.kc ? this.Xc(a.kc) : this.Za > a.qc && this.Xc(a.qc);
      var b = new P("onzoomspanchange");
      b.kc = a.kc;
      b.qc = a.qc;
      this.dispatchEvent(b)
    }, i4: x("KB"), getKey: function () {
      return ra
    }, E_: function (a) {
      function b(a) {
        c.a0 = a;
        var b = D.td + "custom/v2/mapstyle", g = "version=4&ak=" + ra + "&",
          g = g + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.EF(a, f)));
        nb(b, g, window[e + "cb"])
      }

      var c = this, e = this.da;
      D.Cq("cus.fire", "count", "z_setmapstylev2count");
      this.By(t);
      this.M.cZ = p;
      window.MPC_Mgr && window.MPC_Mgr[c.da] && window.MPC_Mgr[c.da].close();
      c.M.um = t;
      this.addEventListener("hidecopyright", function () {
        c.vk.aa();
        c.M.Vo = !!a.customEditor;
        c.M.Vo === t && c.jF(new N(1, 1))
      });
      c.vk && c.vk.aa();
      this.M.Vo = !!a.customEditor;
      this.M.a6 = !!a.sharing;
      this.M.G5 = !!a.preview;
      this.M.Vo === t && this.jF(new N(1, 1));
      Wa.load("hotspot", function () {
        c.Qu()
      }, p);
      window[e + "zoomRegion"] = {};
      window.L6 = [];
      window[e + "zoomStyleBody"] = [];
      window[e + "zoomFrontStyle"] = {};
      var f = this.la();
      A.extend({}, a);
      window[e + "cb"] = function (a) {
        a = JSON.parse(a);
        0 === a.status && (3 === a.data.style.length ? (window[e + "_bmap_baseFs"] = a.data.style, window[e + "StyleBody"] = a.data.style[2]) : window[e + "StyleBody"] = a.data.style, c.KO(), c.EY())
      };
      if (a.styleId) {
        var g = "jsapi";
        a.sharing ? g = "sharing" : a.preview && (g = "preview");
        this.zX(a.styleId, g, b)
      } else b(a.styleJson);
      window.iconSetInfo_high || qa(D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
    }, zX: function (a, b, c) {
      var e = this, f = this.da, g = (1E5 * Math.random()).toFixed(0);
      window[f + "_cbk_si_phpui" + g] = function (a) {
        var b = [];
        a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e.ky(a.content.data.json));
        c && c(b)
      };
      window[f + "_cbk_si_api" + g] = function (a) {
        var b = [];
        0 === a.status && (b = a.info ? e.ky(a.info.json) : e.ky(a.data.json));
        c && c(b)
      };
      var i = "/apiconsole/custommap/";
      switch (b) {
        case "jsapi":
          i = D.td + "?qt=custom_map&v=3.0";
          i += "&style_id=" + a + "&type=publish&ak=" + ra;
          i += "&callback=" + f + "_cbk_si_phpui" + g;
          break;
        case "sharing":
          i = i + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g);
          break;
        case "preview":
          i = i + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g)
      }
      qa(i)
    }, aW: function () {
      Array.prototype.map || (Array.prototype.map = function (a, b) {
        var c, e, f;
        this == q && ba(new TypeError(" this is null or not defined"));
        var g = Object(this), i = g.length >>> 0;
        "[object Function]" != Object.prototype.toString.call(a) && ba(new TypeError(a + " is not a function"));
        b && (c = b);
        e = Array(i);
        for (f = 0; f < i;) {
          var k;
          f in g && (k = g[f], k = a.call(c, k, f, g), e[f] = k);
          f++
        }
        return e
      })
    }, ky: function (a) {
      if (a === q || "" === a) return [];
      this.aW();
      var b = {
        t: "featureType",
        e: "elementType",
        v: "visibility",
        c: "color",
        l: "lightness",
        s: "saturation",
        w: "weight",
        z: "level",
        h: "hue",
        f: "fontsize",
        zri: "curZoomRegionId",
        zr: "curZoomRegion"
      }, c = {
        all: "all",
        g: "geometry",
        "g.f": "geometry.fill",
        "g.s": "geometry.stroke",
        l: "labels",
        "l.t.f": "labels.text.fill",
        "l.t.s": "labels.text.stroke",
        "l.t": "labels.text",
        "l.i": "labels.icon",
        "g.tf": "geometry.fill"
      };
      return a.split(",").map(function (a) {
        var a = a.split("|").map(function (a) {
          var e = b[a.split(":")[0]], a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
          switch (a) {
            case "poi":
              a = "poilabel";
              break;
            case "districtlabel":
              a = "districtlabel"
          }
          var f = {};
          f[e] = a;
          return f
        }), f = a[0], g = 1;
        a[1].elementType && (g = 2, A.extend(f, a[1]));
        for (var i = {}; g < a.length; g++) A.extend(i, a[g]);
        return A.extend(f, {stylers: i})
      })
    }, eY: function () {
      return this.ef.lg
    }, T3: function (a, b) {
      var c = this, e = this.da, f = (1E5 * Math.random()).toFixed(0);
      window[e + "_cbk" + f] = function (b) {
        b = JSON.parse(b);
        b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
        c.K0(b, a);
        c.KO(a);
        b = new P("onzoomfeatureload" + a);
        c.dispatchEvent(b);
        delete window[e + "_cbk" + f]
      };
      var g = D.td + "custom/v2/mapstyle", i = "ak=" + ra + "&", i = i + "is_all=true&is_new=1&";
      b.styleJson ? i += "styles=" + encodeURIComponent(this.EF(b.styleJson, parseInt(a, 10))) : b.styleId && (i += "styles=" + encodeURIComponent(c.EF(c.a0, parseInt(a, 10))));
      nb(g, i, window[e + "_cbk" + f])
    }, jF: function (a, b) {
      var c = new P("oncopyrightoffsetchange", {BE: a, PV: b});
      this.M.vK = b;
      this.dispatchEvent(c)
    }, bu: function (a) {
      var b = this;
      window.MPC_Mgr && window.MPC_Mgr[b.da] && window.MPC_Mgr[b.da].close();
      b.M.um = t;
      D.Cq("cus.fire", "count", "z_setmapstylecount");
      if (a) {
        b = this;
        a.styleJson && (a.styleStr = b.b0(a.styleJson));
        J() && A.ga.xy ? setTimeout(function () {
          b.M.De = a;
          b.dispatchEvent(new P("onsetcustomstyles", a))
        }, 50) : (this.M.De = a, this.dispatchEvent(new P("onsetcustomstyles", a)), this.eM(b.M.De.geotableId));
        var c = {style: a.style};
        a.features && 0 < a.features.length && (c.features = p);
        a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
        Ta(5050, c);
        a.style && (c = b.M.oC[a.style] ? b.M.oC[a.style].backColor : b.M.oC.normal.backColor) && (this.Ta().style.backgroundColor = c)
      }
    }, xY: function (a) {
      this.controls || (this.controls = {
        navigationControl: new ob,
        scaleControl: new pb,
        overviewMapControl: new qb,
        mapTypeControl: new rb
      });
      var b = this, c;
      for (c in this.controls) b.DN(b.controls[c]);
      a = a || [];
      A.oc.Pb(a, function (a) {
        b.ds(b.controls[a])
      })
    }, eM: function (a) {
      a ? this.ys && this.ys.If === a || (this.cg(this.ys), this.ys = new sb({geotableId: a}), this.Ue(this.ys)) : this.cg(this.ys)
    }, Vd: function () {
      var a = this.la() >= this.M.TF && this.ya() === Pa && 18 >= this.la(), b = t;
      try {
        document.createElement("canvas").getContext("2d"), b = p
      } catch (c) {
        b = t
      }
      return a && b
    }, getCurrentCity: function () {
      return {name: this.lh, code: this.hs}
    }, bt: function () {
      this.W.eo();
      return this.W
    }, BY: function (a) {
      Pa.setMaxZoom(a.maxZoom || 19);
      var b = new P("oninitindoorlayer");
      b.af = a;
      this.dispatchEvent(b);
      this.M.yg = t
    }, EY: function (a) {
      if (this.M.yg) {
        var b = new P("onupdatestyles");
        this.dispatchEvent(b)
      } else b = new P("oninitindoorlayer"), b.af = a, this.dispatchEvent(b), this.M.yg = p, this.M.yk = p
    }, By: function (a) {
      this.M.LE = a;
      this.ef.Kb || (this.ef.Kb = this.ef.Cj[0].Kb);
      this.ef.Kb.parentElement.style.display = a ? "block" : "none"
    }, VN: function (a) {
      this.ef.lg.style.display = a ? "block" : "none"
    }, setPanorama: function (a) {
      this.W = a;
      this.W.oF(this)
    }, EF: function (a, b) {
      for (var c = this.da, e = {
        featureType: "t",
        elementType: "e",
        visibility: "v",
        color: "c",
        lightness: "l",
        saturation: "s",
        weight: "w",
        level: "z",
        hue: "h",
        fontsize: "f"
      }, f = {
        all: "all",
        geometry: "g",
        "geometry.fill": "g.f",
        "geometry.stroke": "g.s",
        labels: "l",
        "labels.text.fill": "l.t.f",
        "labels.text.stroke": "l.t.s",
        "labels.text": "l.t",
        "labels.icon": "l.i",
        "geometry.topfill": "g.f"
      }, g = [], i = this.Ua.rf(); i <= this.Ua.Ze(); i++) window[c + "zoomFrontStyle"][i] = {};
      window[c + "zoomFrontStyle"].main = {};
      for (var i = 0, k; k = a[i]; i++) if (!this.NY(k)) {
        b = this.tX(k, b);
        if (("land" === k.featureType || "all" === k.featureType || "background" === k.featureType) && "string" === typeof k.elementType && ("geometry" === k.elementType || "geometry.fill" === k.elementType || "all" === k.elementType) && k.stylers) k.stylers.color && (window[c + "zoomFrontStyle"][b].bmapLandColor = k.stylers.color), k.stylers.visibility && "off" === k.stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapLandColor = "#00000000");
        "railway" === k.featureType && ("string" === typeof k.elementType && k.stylers) && (k.stylers.color && ("geometry" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color, window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color), "geometry.fill" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color), "geometry.stroke" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color)), k.stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapRailwayVisibility = k.stylers.visibility));
        "roadarrow" === k.featureType && ("labels.icon" === k.elementType && k.stylers) && (window[c + "zoomFrontStyle"][b].bmapRoadarrowVisibility = k.stylers.visibility);
        var m = {};
        A.extend(m, k);
        k = m.stylers;
        delete m.stylers;
        A.extend(m, k);
        k = [];
        for (var n in e) if (m[n] && !this.JY(n)) if ("elementType" === n) k.push(e[n] + ":" + f[m[n]]); else {
          switch (m[n]) {
            case "poilabel":
              m[n] = "poi";
              break;
            case "districtlabel":
              m[n] = "label"
          }
          k.push(e[n] + ":" + m[n])
        }
        2 < k.length && g.push(k.join("|"))
      }
      return g.join(",")
    }, b0: function (a) {
      for (var b = {
        featureType: "t",
        elementType: "e",
        visibility: "v",
        color: "c",
        lightness: "l",
        saturation: "s",
        weight: "w",
        zoom: "z",
        hue: "h"
      }, c = {
        all: "all",
        geometry: "g",
        "geometry.fill": "g.f",
        "geometry.stroke": "g.s",
        labels: "l",
        "labels.text.fill": "l.t.f",
        "labels.text.stroke": "l.t.s",
        "lables.text": "l.t",
        "labels.icon": "l.i"
      }, e = [], f = 0, g; g = a[f]; f++) {
        var i = g.stylers;
        delete g.stylers;
        A.extend(g, i);
        var i = [], k;
        for (k in b) if (g[k]) if ("elementType" === k) i.push(b[k] + ":" + c[g[k]]); else {
          switch (g[k]) {
            case "poilabel":
              g[k] = "poi";
              break;
            case "districtlabel":
              g[k] = "label"
          }
          i.push(b[k] + ":" + g[k])
        }
        2 < i.length && e.push(i.join("|"))
      }
      return e.join(",")
    }, tX: function (a) {
      a = a.stylers.level;
      return a === l ? "main" : parseInt(a, 10)
    }, NY: function (a) {
      var b = {};
      A.extend(b, a.stylers);
      delete b.curZoomRegionId;
      delete b.curZoomRegion;
      delete b.level;
      return A.jE(b) ? p : t
    }, H4: function (a, b) {
      var c = a.stylers.level;
      return c === l ? p : c === b + "" ? p : t
    }, JY: function (a) {
      return {curZoomRegionId: p, curZoomRegion: p}[a] ? p : t
    }, j4: function (a, b) {
      var c = a.stylers.level, e = {};
      A.extend(e, b);
      c !== l && (e[parseInt(c, 10)] = p);
      return e
    }, K0: function (a, b) {
      var c = this.da;
      window[c + "zoomStyleBody"][b] = a;
      if (!window[c + "zoomRegion"][b]) for (var e = this.Ua.rf(), f = this.Ua.Ze(); e <= f; e++) window[c + "zoomRegion"][e] || (window[c + "zoomStyleBody"][e] = a)
    }, KO: function () {
      var a = this.da;
      if (window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility) for (var b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility || (window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility = window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility);
      if (window[a + "zoomFrontStyle"].main.bmapLandColor) for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b].bmapLandColor || (window[a + "zoomFrontStyle"][b].bmapLandColor = window[a + "zoomFrontStyle"].main.bmapLandColor);
      if (window[a + "zoomFrontStyle"].main.bmapRailwayFillColor) for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b].bmapRailwayFillColor || (window[a + "zoomFrontStyle"][b].bmapRailwayFillColor = window[a + "zoomFrontStyle"].main.bmapRailwayFillColor);
      if (window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor) for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor || (window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor = window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor);
      if (window[a + "zoomFrontStyle"].main.bmapRailwayVisibility) for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b].bmapRailwayVisibility || (window[a + "zoomFrontStyle"][b].bmapRailwayVisibility = window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
    }, G2: function (a, b) {
      var c = {};
      A.extend(c, a);
      if (c[b]) {
        for (var e = this.Ua.rf(), f = this.Ua.Ze(); e <= f; e++) if (!c[e]) {
          c[e] = p;
          break
        }
        delete c[b]
      }
      return c
    }, F4: function (a) {
      return a.vt || "0" === a.uid ? t : p
    }, yV: function () {
      delete this.Ni.PZ
    }, L2: function () {
      this.Ni = {}
    }, Fo: function (a, b, c) {
      if (!this.M.Vo) return t;
      a = a || "sp" + this.ba.d6++;
      if (b && 0 !== b.length) return c = c || {}, this.Ni[a] = this.Ni[a] || {
        polygon: [],
        polyline: []
      }, this.Ni = this.Ni || {}, this.Ni[a][c.type].push({zF: b, Xb: c.Xb, type: c.type, style: c.style}), a
    }, XF: function (a) {
      return tb / Math.pow(2, 18 - a)
    }
  });
  var tb = 4.007545274461451E7;

  function Ta(a, b) {
    if (a) {
      var b = b || {}, c = "", e;
      for (e in b) c = c + "&" + e + "=" + encodeURIComponent(b[e]);
      var f = function (a) {
        a && (ub = p, setTimeout(function () {
          vb.src = D.td + "images/blank.gif?" + a.src
        }, 50))
      }, g = function () {
        var a = wb.shift();
        a && f(a)
      };
      e = (1E8 * Math.random()).toFixed(0);
      ub ? wb.push({src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c}) : f({src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c});
      xb || (A.V(vb, "load", function () {
        ub = t;
        g()
      }), A.V(vb, "error", function () {
        ub = t;
        g()
      }), xb = p)
    }
  }

  var ub, xb, wb = [], vb = new Image;
  Ta(5E3, {device_pixel_ratio: window.devicePixelRatio, platform: navigator.platform});
  D.ZL = {
    TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
    TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
    TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
    geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
    TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
    traffic: "its.map.baidu.com",
    iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
    message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
    baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
    wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
    pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
    main_domain_nocdn: {baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3", other: "api.map.baidu.com"},
    main_domain_cdn: {
      baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
      other: ["api.map.baidu.com"],
      webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
    },
    map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
    vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
  };
  D.oY = {
    TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
    TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
    TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
    geolocControl: "loc.map.baidu.com",
    TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
    traffic: "its.map.baidu.com",
    iw_pano: "mapsv0.bdimg.com",
    message: "j.map.baidu.com",
    baidumap: "map.baidu.com",
    wuxian: "wuxian.baidu.com",
    pano: ["mapsv0.bdimg.com", "mapsv1.bdimg.com"],
    main_domain_nocdn: {baidu: "api.map.baidu.com"},
    main_domain_cdn: {
      baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
      webmap: ["webmap0.map.bdimg.com"]
    },
    map_click: "mapclick.map.baidu.com",
    vector_traffic: "or.map.bdimg.com"
  };
  D.L0 = {
    "0": {proto: "http://", domain: D.oY},
    1: {proto: "https://", domain: D.ZL},
    2: {proto: "https://", domain: D.ZL}
  };
  window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
  D.Au = window.HOST_TYPE || "0";
  D.url = D.L0[D.Au];
  D.Gp = D.url.proto + D.url.domain.baidumap + "/";
  D.td = D.url.proto + ("2" == D.Au ? D.url.domain.main_domain_nocdn.other : D.url.domain.main_domain_nocdn.baidu) + "/";
  D.pa = D.url.proto + ("2" == D.Au ? D.url.domain.main_domain_cdn.other[0] : D.url.domain.main_domain_nocdn.baidu) + "/";
  D.ij = D.url.proto + D.url.domain.main_domain_cdn.webmap[0] + "/";
  D.mi = function (a, b) {
    var c, e, b = b || "";
    switch (a) {
      case "main_domain_nocdn":
        c = D.td + b;
        break;
      case "main_domain_cdn":
        c = D.pa + b;
        break;
      default:
        e = D.url.domain[a], "[object Array]" == Object.prototype.toString.call(e) ? (c = [], A.oc.Pb(e, function (a, e) {
          c[e] = D.url.proto + a + "/" + b
        })) : c = D.url.proto + D.url.domain[a] + "/" + b
    }
    return c
  };

  function yb(a) {
    var b = {duration: 1E3, Nc: 30, Yo: 0, dc: zb.CM, Nt: u()};
    this.fg = [];
    if (a) for (var c in a) b[c] = a[c];
    this.m = b;
    if (ab(b.Yo)) {
      var e = this;
      setTimeout(function () {
        e.start()
      }, b.Yo)
    } else b.Yo != Ab && this.start()
  }

  var Ab = "INFINITE";
  yb.prototype.start = function () {
    this.Su = gb();
    this.Qz = this.Su + this.m.duration;
    Bb(this)
  };
  yb.prototype.add = function (a) {
    this.fg.push(a)
  };

  function Bb(a) {
    var b = gb();
    b >= a.Qz ? (bb(a.m.Ba) && a.m.Ba(a.m.dc(1)), bb(a.m.finish) && a.m.finish(), 0 < a.fg.length && (b = a.fg[0], b.fg = [].concat(a.fg.slice(1)), b.start())) : (a.yy = a.m.dc((b - a.Su) / a.m.duration), bb(a.m.Ba) && a.m.Ba(a.yy), a.FF || (a.Yr = setTimeout(function () {
      Bb(a)
    }, 1E3 / a.m.Nc)))
  }

  yb.prototype.stop = function (a) {
    this.FF = p;
    for (var b = 0; b < this.fg.length; b++) this.fg[b].stop(), this.fg[b] = q;
    this.fg.length = 0;
    this.Yr && (clearTimeout(this.Yr), this.Yr = q);
    this.m.Nt(this.yy);
    a && (this.Qz = this.Su, Bb(this))
  };
  yb.prototype.cancel = ha(1);
  var zb = {
    CM: function (a) {
      return a
    }, reverse: function (a) {
      return 1 - a
    }, UC: function (a) {
      return a * a
    }, SC: function (a) {
      return Math.pow(a, 3)
    }, Ls: function (a) {
      return -(a * (a - 2))
    }, QK: function (a) {
      return Math.pow(a - 1, 3) + 1
    }, TC: function (a) {
      return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
    }, c3: function (a) {
      return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
    }, d3: function (a) {
      return (1 - Math.cos(Math.PI * a)) / 2
    }
  };
  zb["ease-in"] = zb.UC;
  zb["ease-out"] = zb.Ls;
  var I = {
    dG: 34,
    eG: 21,
    fG: new N(21, 32),
    eP: new N(10, 32),
    dP: new N(24, 36),
    cP: new N(12, 36),
    bG: new N(13, 1),
    ua: D.pa + "images/",
    z4: "http://api0.map.bdimg.com/images/",
    cG: D.pa + "images/markers_new.png",
    aP: 24,
    bP: 73,
    hC: {
      "\u5317\u4eac": {my: "bj", o: new L(116.403874, 39.914889)},
      "\u4e0a\u6d77": {my: "sh", o: new L(121.487899, 31.249162)},
      "\u6df1\u5733": {my: "sz", o: new L(114.025974, 22.546054)},
      "\u5e7f\u5dde": {my: "gz", o: new L(113.30765, 23.120049)}
    },
    fontFamily: "arial,sans-serif"
  };
  A.ga.Xe ? (A.extend(I, {
    CK: "url(" + I.ua + "ruler.cur),crosshair",
    Ac: "-moz-grab",
    Kd: "-moz-grabbing"
  }), A.platform.pM && (I.fontFamily = "arial,simsun,sans-serif")) : A.ga.Lw || A.ga.xy ? A.extend(I, {
    CK: "url(" + I.ua + "ruler.cur) 2 6,crosshair",
    Ac: "url(" + I.ua + "openhand.cur) 8 8,default",
    Kd: "url(" + I.ua + "closedhand.cur) 8 8,move"
  }) : A.extend(I, {
    CK: "url(" + I.ua + "ruler.cur),crosshair",
    Ac: "url(" + I.ua + "openhand.cur),default",
    Kd: "url(" + I.ua + "closedhand.cur),move"
  });

  function Cb(a, b) {
    var c = a.style;
    c.left = b[0] + "px";
    c.top = b[1] + "px"
  }

  function Db(a) {
    0 < A.ga.oa ? a.unselectable = "on" : a.style.MozUserSelect = "none"
  }

  function Eb(a) {
    return a && a.parentNode && 11 !== a.parentNode.nodeType
  }

  function Fb(a, b) {
    A.U.Nx(a, "beforeEnd", b);
    return a.lastChild
  }

  function Gb(a) {
    for (var b = {
      left: 0,
      top: 0
    }; a && a.offsetParent;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
    return b
  }

  function na(a) {
    a = window.event || a;
    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
  }

  function Hb(a) {
    a = window.event || a;
    a.preventDefault ? a.preventDefault() : a.returnValue = t;
    return t
  }

  function oa(a) {
    na(a);
    return Hb(a)
  }

  function Ib() {
    var a = document.documentElement, b = document.body;
    return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
  }

  function Jb(a, b) {
    if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
  }

  function Kb(a, b) {
    var c = [], b = b || function (a) {
      return a
    }, e;
    for (e in a) c.push(e + "=" + b(a[e]));
    return c.join("&")
  }

  function H(a, b, c) {
    var e = document.createElement(a);
    c && (e = document.createElementNS(c, a));
    return A.U.iF(e, b || {})
  }

  function Za(a) {
    if (a.currentStyle) return a.currentStyle;
    if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, q)
  }

  function bb(a) {
    return "function" === typeof a
  }

  function ab(a) {
    return "number" === typeof a
  }

  function db(a) {
    return "string" == typeof a
  }

  function Lb(a) {
    return "undefined" != typeof a
  }

  function Mb(a) {
    return "object" == typeof a
  }

  var Nb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  function Ob(a) {
    for (var b = "", c = 0; c < a.length; c++) {
      var e = a.charCodeAt(c) << 1, f = e = e.toString(2);
      8 > e.length && (f = "00000000" + e, f = f.substr(e.length, 8));
      b += f
    }
    a = 5 - b.length % 5;
    e = [];
    for (c = 0; c < a; c++) e[c] = "0";
    b = e.join("") + b;
    f = [];
    for (c = 0; c < b.length / 5; c++) e = b.substr(5 * c, 5), f.push(String.fromCharCode(parseInt(e, 2) + 50));
    return f.join("") + a.toString()
  }

  function Pb(a) {
    var b = "", c, e, f = "", g, i = "", k = 0;
    g = /[^A-Za-z0-9\+\/\=]/g;
    if (!a || g.exec(a)) return a;
    a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do c = Nb.indexOf(a.charAt(k++)), e = Nb.indexOf(a.charAt(k++)), g = Nb.indexOf(a.charAt(k++)), i = Nb.indexOf(a.charAt(k++)), c = c << 2 | e >> 4, e = (e & 15) << 4 | g >> 2, f = (g & 3) << 6 | i, b += String.fromCharCode(c), 64 != g && (b += String.fromCharCode(e)), 64 != i && (b += String.fromCharCode(f)); while (k < a.length);
    return b
  }

  var P = A.lang.Iu;

  function J() {
    return !(!A.platform.mE && !A.platform.MY && !A.platform.yj)
  }

  function Ya() {
    return !(!A.platform.pM && !A.platform.iM && !A.platform.TY)
  }

  function gb() {
    return (new Date).getTime()
  }

  function Qb() {
    var a = document.body.appendChild(H("div"));
    a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
    var b = a.firstChild;
    if (!b.style) return t;
    b.style.behavior = "url(#default#VML)";
    b = b ? "object" === typeof b.adj : p;
    a.parentNode.removeChild(a);
    return b
  }

  function Rb() {
    return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
  }

  function Sb() {
    return !!H("canvas").getContext
  }

  function U(a) {
    return a * Math.PI / 180
  }

  D.ZY = function () {
    var a = p, b = p, c = p, e = p, f = 0, g = 0, i = 0, k = 0;
    return {
      JQ: function () {
        f += 1;
        a && (a = t, setTimeout(function () {
          Ta(5054, {pic: f});
          a = p;
          f = 0
        }, 1E4))
      }, E1: function () {
        g += 1;
        b && (b = t, setTimeout(function () {
          Ta(5055, {move: g});
          b = p;
          g = 0
        }, 1E4))
      }, G1: function () {
        i += 1;
        c && (c = t, setTimeout(function () {
          Ta(5056, {zoom: i});
          c = p;
          i = 0
        }, 1E4))
      }, F1: function (a) {
        k += a;
        e && (e = t, setTimeout(function () {
          Ta(5057, {tile: k});
          e = p;
          k = 0
        }, 5E3))
      }
    }
  }();
  D.uq = {tG: "#83a1ff", wq: "#808080"};

  function Tb(a, b, c) {
    b.EE || (b.EE = [], b.handle = {});
    b.EE.push({filter: c, Rs: a});
    b.addEventListener || (b.addEventListener = function (a, c) {
      b.attachEvent("on" + a, c)
    });
    b.handle.click || (b.addEventListener("click", function (a) {
      for (var c = a.target || a.srcElement; c != b;) {
        Ub(b.EE, function (b, i) {
          RegExp(i.filter).test(c.getAttribute("filter")) && i.Rs.call(c, a, c.getAttribute("filter"))
        });
        c = c.parentNode
      }
    }, t), b.handle.click = p)
  }

  function Ub(a, b) {
    for (var c = 0, e = a.length; c < e; c++) b(c, a[c])
  }

  void function (a, b, c) {
    void function (a, b, c) {
      function i(a) {
        if (!a.Xo) {
          for (var c = p, e = [], g = a.c_, k = 0; g && k < g.length; k++) {
            var m = g[k], n = da[m] = da[m] || {};
            if (n.Xo || n == a) e.push(n.Tc); else {
              c = t;
              if (!n.bW && (m = (Aa.get("alias") || {})[m] || m + ".js", !K[m])) {
                K[m] = p;
                var o = b.createElement("script"), s = b.getElementsByTagName("script")[0];
                o.async = p;
                o.src = m;
                s.parentNode.insertBefore(o, s)
              }
              n.Ty = n.Ty || {};
              n.Ty[a.name] = a
            }
          }
          if (c) {
            a.Xo = p;
            a.xK && (a.Tc = a.xK.apply(a, e));
            for (var v in a.Ty) i(a.Ty[v])
          }
        }
      }

      function k(a) {
        return (a || new Date) - E
      }

      function m(a, b, c) {
        if (a) {
          "string" == typeof a && (c = b, b = a, a = O);
          try {
            a == O ? (M[b] = M[b] || [], M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c)
          } catch (e) {
          }
        }
      }

      function n(a, b, c) {
        if (a) {
          "string" == typeof a && (c = b, b = a, a = O);
          try {
            if (a == O) {
              var e = M[b];
              if (e) for (var f = e.length; f--;) e[f] === c && e.splice(f, 1)
            } else a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
          } catch (g) {
          }
        }
      }

      function o(a) {
        var b = M[a], c = 0;
        if (b) {
          for (var e = [], f = arguments, g = 1; g < f.length; g++) e.push(f[g]);
          for (g = b.length; g--;) b[g].apply(this, e) && c++;
          return c
        }
      }

      function s(a, b) {
        if (a && b) {
          var c = new Image(1, 1), e = [], f = "img_" + +new Date, g;
          for (g in b) b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
          O[f] = c;
          c.onload = c.onerror = function () {
            O[f] = c = c.onload = c.onerror = q;
            delete O[f]
          };
          c.src = a + "?" + e.join("&")
        }
      }

      function v() {
        var a = arguments, b = a[0];
        if (this.wK || /^(on|un|set|get|create)$/.test(b)) {
          for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++) c.push(a[e]);
          "function" == typeof b && b.apply(this, c)
        } else this.VJ.push(a)
      }

      function w(a, b) {
        var c = {}, e;
        for (e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
        for (e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
        return c
      }

      function y(a) {
        this.name = a;
        this.Ps = {protocolParameter: {postUrl: q, protocolParameter: q}};
        this.VJ = [];
        this.alog = O
      }

      function z(a) {
        a = a || "default";
        if ("*" == a) {
          var a = [], b;
          for (b in S) a.push(S[b]);
          return a
        }
        (b = S[a]) || (b = S[a] = new y(a));
        return b
      }

      var B = c.alog;
      if (!B || !B.Xo) {
        var C = b.all && a.attachEvent, E = B && B.uE || +new Date,
          F = a.S4 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3), G = 0, K = {},
          O = function (a) {
            var b = arguments, c, e, f, g;
            if ("define" == a || "require" == a) {
              for (e = 1; e < b.length; e++) switch (typeof b[e]) {
                case "string":
                  c = b[e];
                  break;
                case "object":
                  f = b[e];
                  break;
                case "function":
                  g = b[e]
              }
              "require" == a && (c && !f && (f = [c]), c = q);
              c = !c ? "#" + G++ : c;
              e = da[c] = da[c] || {};
              e.Xo || (e.name = c, e.c_ = f, e.xK = g, "define" == a && (e.bW = p), i(e))
            } else "function" == typeof a ? a(O) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function (a, c, e) {
              b[0] = e;
              v.apply(O.PF(c), b)
            })
          }, M = {}, S = {}, da = {u2: {name: "alog", Xo: p, Tc: O}};
        y.prototype.start = y.prototype.create = function (a) {
          if (!this.wK) {
            "object" == typeof a && this.set(a);
            this.wK = new Date;
            for (this.Qs("create", this); a = this.VJ.shift();) v.apply(this, a)
          }
        };
        y.prototype.send = function (a, b) {
          var c = w({ts: k().toString(36), t: a, sid: F}, this.Ps);
          if ("object" == typeof b) c = w(c, b); else {
            var e = arguments;
            switch (a) {
              case "pageview":
                e[1] && (c.page = e[1]);
                e[2] && (c.title = e[2]);
                break;
              case "event":
                e[1] && (c.eventCategory = e[1]);
                e[2] && (c.eventAction = e[2]);
                e[3] && (c.eventLabel = e[3]);
                e[4] && (c.eventValue = e[4]);
                break;
              case "timing":
                e[1] && (c.timingCategory = e[1]);
                e[2] && (c.timingVar = e[2]);
                e[3] && (c.timingValue = e[3]);
                e[4] && (c.timingLabel = e[4]);
                break;
              case "exception":
                e[1] && (c.exDescription = e[1]);
                e[2] && (c.exFatal = e[2]);
                break;
              default:
                return
            }
          }
          this.Qs("send", c);
          var f;
          if (e = this.Ps.protocolParameter) {
            var g = {};
            for (f in c) e[f] !== q && (g[e[f] || f] = c[f]);
            f = g
          } else f = c;
          s(this.Ps.postUrl, f)
        };
        y.prototype.set = function (a, b) {
          if ("string" == typeof a) "protocolParameter" == a && (b = w({
            postUrl: q,
            protocolParameter: q
          }, b)), this.Ps[a] = b; else if ("object" == typeof a) for (var c in a) this.set(c, a[c])
        };
        y.prototype.get = function (a, b) {
          var c = this.Ps[a];
          "function" == typeof b && b(c);
          return c
        };
        y.prototype.Qs = function (a, b) {
          return O.Qs(this.name + "." + a, b)
        };
        y.prototype.V = function (a, b) {
          O.V(this.name + "." + a, b)
        };
        y.prototype.gd = function (a, b) {
          O.gd(this.name + "." + a, b)
        };
        O.name = "alog";
        O.Xb = F;
        O.Xo = p;
        O.timestamp = k;
        O.gd = n;
        O.V = m;
        O.Qs = o;
        O.PF = z;
        O("init");
        var aa = y.prototype;
        V(aa, {
          start: aa.start,
          create: aa.create,
          send: aa.send,
          set: aa.set,
          get: aa.get,
          on: aa.V,
          un: aa.gd,
          fire: aa.Qs
        });
        var Aa = z();
        Aa.set("protocolParameter", {t2: q});
        if (B) {
          aa = [].concat(B.vb || [], B.Ut || []);
          B.vb = B.Ut = q;
          for (var ta in O) O.hasOwnProperty(ta) && (B[ta] = O[ta]);
          O.vb = O.Ut = {
            push: function (a) {
              O.apply(O, a)
            }
          };
          for (B = 0; B < aa.length; B++) O.apply(O, aa[B])
        }
        c.alog = O;
        C && m(b, "mouseup", function (a) {
          a = a.target || a.srcElement;
          1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
        });
        var Ga = t;
        a.onerror = function (a, b, e, f) {
          var i = p;
          !b && /^script error/i.test(a) && (Ga ? i = t : Ga = p);
          i && c.alog("exception.send", "exception", {Jt: a, tE: b, Ft: e, nm: f});
          return t
        };
        c.alog("exception.on", "catch", function (a) {
          c.alog("exception.send", "exception", {Jt: a.Jt, tE: a.path, Ft: a.Ft, method: a.method, aL: "catch"})
        })
      }
    }(a, b, c);
    void function (a, b, c) {
      var i = "18_3";
      J() && (i = "18_4");
      var k = "http://static.tieba.baidu.com";
      "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
      var m = Math.random, k = k + "/tb/pms/img/st.gif", n = {Ch: "0.1"}, o = {Ch: "0.1"}, s = {Ch: "0.1"},
        v = {Ch: "0"};
      if (n && n.Ch && m() < n.Ch) {
        var w = c.alog.PF("monkey"), y, n = a.screen, z = b.referrer;
        w.set("ver", 5);
        w.set("pid", 241);
        n && w.set("px", n.width + "*" + n.height);
        w.set("ref", z);
        c.alog("monkey.on", "create", function () {
          y = c.alog.timestamp;
          w.set("protocolParameter", {reports: q})
        });
        c.alog("monkey.on", "send", function (a) {
          "pageview" == a.t && (a.cmd = "open");
          a.now && (a.ts = y(a.now).toString(36), a.now = "")
        });
        c.alog("monkey.create", {page: i, pid: "241", p: "18", dv: 6, postUrl: k, reports: {refer: 1}});
        c.alog("monkey.send", "pageview", {now: +new Date})
      }
      if (o && o.Ch && m() < o.Ch) {
        var B = t;
        a.onerror = function (a, b, e, f) {
          var i = p;
          !b && /^script error/i.test(a) && (B ? i = t : B = p);
          i && c.alog("exception.send", "exception", {Jt: a, tE: b, Ft: e, nm: f});
          return t
        };
        c.alog("exception.on", "catch", function (a) {
          c.alog("exception.send", "exception", {Jt: a.Jt, tE: a.path, Ft: a.Ft, method: a.method, aL: "catch"})
        });
        c.alog("exception.create", {postUrl: k, dv: 7, page: i, pid: "170", p: "18"})
      }
      s && (s.Ch && m() < s.Ch) && (c.alog("cus.on", "time", function (a) {
        var b = {}, e = t, f;
        if ("[object Object]" === a.toString()) {
          for (var i in a) "page" == i ? b.page = a[i] : (f = parseInt(a[i]), 0 < f && /^z_/.test(i) && (e = p, b[i] = f));
          e && c.alog("cus.send", "time", b)
        }
      }), c.alog("cus.on", "count", function (a) {
        var b = {}, e = t;
        "string" === typeof a && (a = [a]);
        if (a instanceof Array) for (var f = 0; f < a.length; f++) /^z_/.test(a[f]) ? (e = p, b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
        e && c.alog("cus.send", "count", b)
      }), c.alog("cus.create", {dv: 3, postUrl: k, page: i, p: "18"}));
      if (v && v.Ch && m() < v.Ch) {
        var C = ["Moz", "O", "ms", "Webkit"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function () {
          return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
        }, G = F("dpFeatureTest").style, K = function (a) {
          return O(a, l, l)
        }, O = function (a, b, c) {
          var e = a.charAt(0).toUpperCase() + a.slice(1), f = (a + " " + C.join(e + " ") + e).split(" ");
          if (typeof b === "string" || typeof b === "undefined") return M(f, b);
          f = (a + " " + C.join(e + " ") + e).split(" ");
          a:{
            var a = f, g;
            for (g in a) if (a[g] in b) {
              if (c === t) {
                b = a[g];
                break a
              }
              g = b[a[g]];
              b = typeof g === "function" ? fnBind(g, c || b) : g;
              break a
            }
            b = t
          }
          return b
        }, M = function (a, b) {
          var c, e, f;
          e = a.length;
          for (c = 0; c < e; c++) {
            f = a[c];
            ~("" + f).indexOf("-") && (f = S(f));
            if (G[f] !== l) return b == "pfx" ? f : p
          }
          return t
        }, S = function (a) {
          return a.replace(/([a-z])-([a-z])/g, function (a, b, c) {
            return b + c.toUpperCase()
          }).replace(/^-/, "")
        }, da = function (a, b, c) {
          if (a.indexOf("@") === 0) return atRule(a);
          a.indexOf("-") != -1 && (a = S(a));
          return !b ? O(a, "pfx") : O(a, b, c)
        }, aa = function () {
          var a = F("canvas");
          return !(!a.getContext || !a.getContext("2d"))
        }, Aa = function () {
          var a = F("div");
          return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, ta = function () {
          try {
            localStorage.setItem("localStorage", "localStorage");
            localStorage.removeItem("localStorage");
            return p
          } catch (a) {
            return t
          }
        }, Ga = function () {
          return "content" in b.createElement("template")
        }, sa = function () {
          return "createShadowRoot" in b.createElement("a")
        }, Va = function () {
          return "registerElement" in b
        }, He = function () {
          return "import" in b.createElement("link")
        }, Yc = function () {
          return "getItems" in b
        }, oj = function () {
          return "EventSource" in window
        }, Ie = function (a, b) {
          var c = new Image;
          c.onload = function () {
            b(a, c.width > 0 && c.height > 0)
          };
          c.onerror = function () {
            b(a, t)
          };
          c.src = "data:image/webp;base64," + {
            V4: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            U4: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            tk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
          }[a]
        }, Je = function (a, b) {
          return bc.ii["WebP-" + a] = b
        }, pj = function () {
          return "openDatabase" in a
        }, qj = function () {
          return "performance" in a && "timing" in a.performance
        }, rj = function () {
          return "performance" in a && "mark" in a.performance
        }, sj = function () {
          return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
        }, tj = function () {
          return "Promise" in a && "cast" in a.xq && "resolve" in a.xq && "reject" in a.xq && "all" in a.xq && "race" in a.xq && function () {
            var b;
            new a.xq(function (a) {
              b = a
            });
            return typeof b === "function"
          }()
        }, uj = function () {
          var b = !!a.q1, c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
          return !!a.u1 && b && c
        }, vj = function () {
          return "geolocation" in navigator
        }, wj = function () {
          var b = F("canvas"), c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
          return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
        }, xj = function () {
          return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").R2
        }, yj = function () {
          return !!a.B1
        }, zj = function () {
          return "WebSocket" in a && a.y1.m1 === 2
        }, Aj = function () {
          return !!b.createElement("video").canPlayType
        }, Bj = function () {
          return !!b.createElement("audio").canPlayType
        }, Cj = function () {
          return !!(a.history && "pushState" in a.history)
        }, Dj = function () {
          return !(!a.o1 || !a.p1)
        }, Ej = function () {
          return "postMessage" in window
        }, Fj = function () {
          return !!a.webkitNotifications || "Notification" in a && "permission" in a.xP && "requestPermission" in a.xP
        }, Gj = function () {
          for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f) c = a[b[f] + "RequestAnimationFrame"];
          return !!c
        }, Hj = function () {
          return "JSON" in a && "parse" in JSON && "stringify" in JSON
        }, Ij = function () {
          return !(!da("exitFullscreen", b, t) && !da("cancelFullScreen", b, t))
        }, Jj = function () {
          return !!da("Intl", a)
        }, Kj = function () {
          return K("flexBasis")
        }, Lj = function () {
          return !!K("perspective")
        }, Mj = function () {
          return K("shapeOutside")
        }, Nj = function () {
          var a = F("div");
          a.style.cssText = E.join("filter:blur(2px); ");
          return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
        }, Oj = function () {
          return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
        }, Pj = function () {
          return F("progress").max !== l
        }, Qj = function () {
          return F("meter").max !== l
        }, Rj = function () {
          return "sendBeacon" in navigator
        }, Sj = function () {
          return K("borderRadius")
        }, Tj = function () {
          return K("boxShadow")
        }, Uj = function () {
          var a = F("div").style;
          a.cssText = E.join("opacity:.55;");
          return /^0.55$/.test(a.opacity)
        }, Vj = function () {
          return M(["textShadow"], l)
        }, Wj = function () {
          return K("animationName")
        }, Xj = function () {
          return K("transition")
        }, Yj = function () {
          return navigator.userAgent.indexOf("Android 2.") === -1 && K("transform")
        }, bc = {
          ii: {}, sa: function (a, b, c) {
            this.ii[a] = b.apply(this, [].slice.call(arguments, 2))
          }, Id: function (a, b) {
            a.apply(this, [].slice.call(arguments, 1))
          }, h_: function () {
            this.sa("bdrs", Sj);
            this.sa("bxsd", Tj);
            this.sa("opat", Uj);
            this.sa("txsd", Vj);
            this.sa("anim", Wj);
            this.sa("trsi", Xj);
            this.sa("trfm", Yj);
            this.sa("flex", Kj);
            this.sa("3dtr", Lj);
            this.sa("shpe", Mj);
            this.sa("fltr", Nj);
            this.sa("cavs", aa);
            this.sa("dgdp", Aa);
            this.sa("locs", ta);
            this.sa("wctem", Ga);
            this.sa("wcsdd", sa);
            this.sa("wccse", Va);
            this.sa("wchti", He);
            this.Id(Ie, "lossy", Je);
            this.Id(Ie, "lossless", Je);
            this.Id(Ie, "alpha", Je);
            this.Id(Ie, "animation", Je);
            this.sa("wsql", pj);
            this.sa("natm", qj);
            this.sa("ustm", rj);
            this.sa("arra", sj);
            this.sa("prms", tj);
            this.sa("xhr2", uj);
            this.sa("wbgl", wj);
            this.sa("geol", vj);
            this.sa("svg", xj);
            this.sa("work", yj);
            this.sa("wbsk", zj);
            this.sa("vido", Aj);
            this.sa("audo", Bj);
            this.sa("hsty", Cj);
            this.sa("file", Dj);
            this.sa("psmg", Ej);
            this.sa("wknf", Fj);
            this.sa("rqaf", Gj);
            this.sa("json", Hj);
            this.sa("flsc", Ij);
            this.sa("i18n", Jj);
            this.sa("cors", Oj);
            this.sa("prog", Pj);
            this.sa("metr", Qj);
            this.sa("becn", Rj);
            this.sa("mcrd", Yc);
            this.sa("esrc", oj)
          }
        }, w = c.alog.PF("feature");
        w.V("commit", function () {
          bc.h_();
          var a = setInterval(function () {
            if ("WebP-lossy" in bc.ii && "WebP-lossless" in bc.ii && "WebP-alpha" in bc.ii && "WebP-animation" in bc.ii) {
              for (var b in bc.ii) bc.ii[b] = bc.ii[b] ? "y" : "n";
              w.send("feature", bc.ii);
              clearInterval(a)
            }
          }, 500)
        });
        c.alog("feature.create", {a3: 4, y5: k, page: i, vb: "18"});
        c.alog("feature.fire", "commit")
      }
    }(a, b, c)
  }(window, document, D);
  D.Cq = D.alog || u();
  D.alog("cus.fire", "count", "z_loadscriptcount");
  "https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");

  function Vb(a) {
    var b = window.TILE_VERSION, c = "20190410";
    b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
    return c
  }

  var Wb = [72.6892532, 0.1939743381, 136.1168614, 54.392257],
    Xb = [72.69566833, 0.1999420909, 136.1232863, 54.39791217], Yb = 158,
    Zb = [98.795985, 122.960792, 107.867379, 118.093451, 119.139658, 128.035888, 79.948212, 99.029524, 119.923388, 122.094977, 127.918527, 130.94789, 106.50606, 108.076783, 119.8329, 126.382207, 111.803567, 119.324928, 100.749858, 102.227985, 99.860885, 100.788921, 97.529435, 98.841564, 99.100017, 99.90035, 122.917416, 123.774367, 123.728314, 125.507211, 123.736065, 124.767299, 125.488463, 126.410675, 125.484326, 126.07764, 130.830784, 133.620042, 127.912178, 128.668957, 128.658937, 129.638599, 132.894179, 134.119086, 117.379378, 119.244569, 116.086736, 117.431212, 114.420233, 116.137458, 116.492775, 119.605527, 110.579401, 111.86488, 74.468228, 80.001908, 82.867432, 91.353788, 85.721075, 98.976964, 127.664757, 129.546833, 129.476893, 130.22449, 133.730358, 134.745235, 134.381034, 135.1178, 130.868117, 131.34409, 115.513245, 117.544751, 115.779271, 116.748045, 108.536254, 110.614326, 121.365534, 124.626434, 126.165992, 127.347013, 91.281869, 95.611754, 79.879648, 82.945041, 76.413314, 78.345207, 78.275229, 80.002329, 83.956612, 85.734098, 85.510186, 89.356499, 97.997001, 98.948845, 106.653208, 108.610811, 111.400183, 111.824179, 111.592224, 111.817136, 116.00682, 117.024631, 116.258574, 116.689291, 119.436876, 119.922961, 120.659806, 121.395479, 120.349116, 120.676014, 124.59389, 125.787788, 126.221756, 126.788962, 95.572955, 102.046581, 95.583772, 96.165551, 95.564318, 97.806095, 91.30446, 93.356438, 93.330319, 94.698145, 89.349129, 90.548677, 82.268802, 82.892025, 78.335615, 80.032266, 76.625755, 78.361413, 73.498248, 74.490992, 74.846872, 76.488771, 91.563521, 94.878444, 88.768214, 89.244787, 83.247076, 83.974127, 82.29595, 83.256003, 81.885315, 83.26249, 80.760619, 81.472404, 86.470983, 88.276988, 102.207537, 104.234614, 112.164795, 116.833667, 108.965663, 113.032246, 111.166575, 117.983363],
    $b = [22.551183, 42.284787, 17.227969, 22.738314, 41.300981, 50.749638, 30.368087, 42.332701, 21.705055, 22.696452, 42.426047, 48.944674, 21.432184, 22.651387, 50.657409, 52.92296, 42.212192, 45.206905, 21.137031, 22.57186, 21.444502, 22.586566, 23.741571, 25.301472, 22.006806, 22.56637, 38.985114, 41.346531, 40.295617, 41.338581, 39.740021, 40.351012, 40.974644, 41.331562, 40.726852, 41.067192, 44.877158, 48.018285, 41.344597, 42.451798, 42.016305, 42.443235, 45.880906, 48.214001, 45.140027, 46.792775, 45.141083, 46.400433, 45.156418, 45.748281, 47.485889, 50.071879, 42.223667, 43.469487, 37.019867, 40.668675, 42.226823, 47.321605, 27.72944, 30.469853, 48.919002, 49.650614, 48.840188, 49.443166, 46.949801, 48.382798, 47.660603, 48.472692, 42.859946, 44.913298, 47.605896, 48.445914, 48.41698, 48.909667, 42.23507, 42.914193, 52.8281, 53.585952, 50.709311, 51.662219, 42.29968, 44.399225, 42.302746, 45.391958, 34.680866, 37.03377, 30.743515, 37.07228, 28.245649, 30.408935, 47.277693, 48.504255, 25.241528, 27.780726, 42.223363, 42.548418, 43.435888, 44.696952, 44.693193, 45.00187, 48.886267, 49.326755, 49.288642, 49.632304, 50.717486, 51.314369, 52.914204, 53.33964, 52.910094, 53.115926, 52.908382, 53.258095, 51.64533, 52.408305, 42.236825, 42.699126, 43.068466, 43.898632, 42.670403, 43.082219, 44.379045, 45.187742, 44.382336, 44.981379, 47.310362, 48.06019, 45.359099, 46.814439, 40.569751, 42.047741, 40.587956, 41.41263, 38.519192, 40.185033, 35.790476, 37.029005, 26.825605, 27.763896, 27.199658, 27.751649, 29.150192, 30.381073, 29.573886, 30.065162, 30.047775, 30.384089, 30.001277, 30.388525, 48.494118, 49.173841, 22.398528, 22.601198, 7.441114, 11.505968, 3.767491, 9.005209, 12.642067, 17.410886],
    ac = 95,
    cc = [110.3961374, 105.0743788, 96.8991824, 95.61810411, 93.82412598, 91.3892353, 91.38931858, 89.08325955, 87.22469808, 86.26278402, 85.17353, 85.23741211, 82.86627441, 81.90481038, 79.59687147, 80.39829237, 79.93319363, 77.80279948, 75.2557704, 73.49357829, 73.1892532, 73.87758816, 74.4064738, 74.10215224, 75.46409695, 76.77739692, 78.28299615, 78.15499485, 78.37920654, 78.89145345, 79.69282199, 81.19938178, 81.80830295, 83.89093424, 85.94149523, 87.86447266, 89.03414958, 90.05918132, 91.10026937, 92.15733832, 93.74361735, 95.82597331, 97.95655545, 97.12363037, 98.2129739, 99.2068571, 101.6587874, 102.5239084, 102.2356106, 105.0249238, 106.0992342, 107.8617093, 111.6439372, 109.591869, 112.284586, 117.7961157, 118.9495128, 114.2076584, 118.693565, 123.1475225, 122.730705, 120.9361393, 123.4207441, 122.3787782, 122.1385425, 121.5904281, 121.1773763, 120.6805404, 120.2483355, 122.795807, 122.8759077, 121.3060262, 122.1392177, 123.7418799, 126.4177599, 128.5647409, 129.7194884, 131.2259136, 131.9950494, 133.6289931, 135.6168614, 131.3875545, 130.8743365, 128.6303223, 126.0997773, 124.4015375, 122.22161, 119.6586483, 119.7866827, 118.5685878, 116.5177976, 114.819101, 119.0812964, 116.453265, 111.7431171],
    dc = [43.2190351, 42.38053385, 43.17417589, 44.42226915, 45.09863634, 45.56708116, 47.33599718, 48.68832709, 49.62448486, 48.9482175, 48.4800472, 47.33564399, 47.43948676, 46.03452067, 45.20221788, 43.34563043, 42.32965739, 41.39690972, 40.82972331, 39.95567654, 39.25892877, 38.36098768, 38.05441569, 37.16878445, 36.38899414, 35.36126817, 34.30953451, 32.58503879, 31.56975694, 30.77800266, 30.43559814, 29.7744892, 30.0931977, 28.71103299, 27.70739665, 27.5775472, 27.01096137, 27.77857883, 27.50707954, 26.50328315, 26.70387804, 27.95548557, 27.29428901, 23.64685493, 23.62310601, 21.67493381, 20.77751465, 21.32070991, 22.1824113, 22.31232964, 22.51316054, 16.80037679, 13.19749864, 0.6939743381, 1.541660428, 10.50208252, 15.58926975, 17.89090007, 19.94928467, 22.18490153, 25.37285292, 25.61456434, 30.62532552, 31.08099284, 31.89238173, 32.50092692, 32.80325765, 34.25546956, 35.15486138, 36.90170139, 37.8348272, 37.941604, 38.6480797, 38.96797201, 40.98146918, 41.25573296, 42.07218153, 42.49132813, 44.65259766, 44.69330702, 48.62286865, 48.09383952, 49.19628499, 50.03402317, 53.27678901, 53.62976345, 53.89420546, 52.98933322, 52.01872884, 50.23210259, 50.18807048, 47.49769857, 47.34362712, 46.50502143, 45.24770128],
    ec = [98.7895, 122.954182, 107.860913, 118.087007, 119.133165, 128.029533, 79.941749, 99.023087, 119.916883, 122.08841, 127.912143, 130.941471, 106.499502, 108.070244, 119.826245, 126.375818, 111.797006, 119.318387, 100.743285, 102.221517, 99.854448, 100.782445, 97.522928, 98.835028, 99.093518, 99.893783, 122.910927, 123.767769, 123.721954, 125.50077, 123.729657, 124.760724, 125.481902, 126.404079, 125.477737, 126.071019, 130.824331, 133.613395, 127.905767, 128.662524, 128.652527, 129.6321, 132.887552, 134.11249, 117.37297, 119.237999, 116.080154, 117.424589, 114.413586, 116.130948, 116.486264, 119.598927, 110.5728, 111.858437, 74.465162, 79.995337, 82.860821, 91.347291, 85.716024, 98.970481, 127.658331, 129.540202, 129.470528, 130.21808, 133.723748, 134.738785, 134.374555, 135.111443, 130.861475, 131.337438, 115.506627, 117.538123, 115.772783, 116.741632, 108.529656, 110.60782, 121.358945, 124.619773, 126.159424, 127.340582, 91.275275, 95.605228, 79.874427, 82.938601, 76.413314, 78.338763, 78.275229, 79.995765, 83.956612, 85.727511, 85.503554, 89.349858, 97.990418, 98.942257, 106.646704, 108.604437, 111.393667, 111.817723, 111.585811, 111.810645, 116.000232, 117.018216, 116.252108, 116.682705, 119.430384, 119.916417, 120.653168, 121.38883, 120.342727, 120.669383, 124.587426, 125.781376, 126.215282, 126.782323, 95.566367, 102.040026, 95.577158, 96.159009, 95.557772, 97.799728, 91.298032, 93.350057, 93.323794, 94.691771, 89.342471, 90.542019, 82.264229, 82.885485, 78.335615, 80.025844, 76.623947, 78.355027, 73.495149, 74.484473, 74.846872, 76.482208, 91.560117, 94.871859, 88.761692, 89.23822, 83.240549, 83.967602, 82.292367, 83.2495, 81.878825, 83.256003, 80.75421, 81.465955, 86.465421, 88.270356, 102.201019, 104.228033, 112.158282, 116.827153, 108.965663, 113.025767, 111.166575, 117.97687],
    fc = [22.545421, 42.279053, 17.226272, 22.731982, 41.294917, 50.743316, 30.361986, 42.326603, 21.699185, 22.690751, 42.419757, 48.938435, 21.426505, 22.64567, 50.651745, 52.916705, 42.20641, 45.201064, 21.131326, 22.565685, 21.438288, 22.580379, 23.735785, 25.295582, 22.001087, 22.560315, 38.979333, 41.340757, 40.28938, 41.332289, 39.734164, 40.344718, 40.968803, 41.325813, 40.721073, 41.061503, 44.871533, 48.012179, 41.338366, 42.445601, 42.010343, 42.436934, 45.875217, 48.208327, 45.134237, 46.786509, 45.135376, 46.394665, 45.150734, 45.742257, 47.480099, 50.065931, 42.217982, 43.46329, 37.014057, 40.662848, 42.221079, 47.315558, 27.723432, 30.46385, 48.913298, 49.644555, 48.83396, 49.436824, 46.944059, 48.376613, 47.654503, 48.466331, 42.854333, 44.907682, 47.600253, 48.440245, 48.410926, 48.903468, 42.229292, 42.908294, 52.822466, 53.58012, 50.703491, 51.656037, 42.29378, 44.393379, 42.296912, 45.385809, 34.679282, 37.027699, 30.740622, 37.066377, 28.241967, 30.403134, 47.271949, 48.49848, 25.235818, 27.774976, 42.217425, 42.542102, 43.429763, 44.691016, 44.687044, 44.995758, 48.880431, 49.320551, 49.282865, 49.626267, 50.711607, 51.308382, 52.908547, 53.333963, 52.904419, 53.109706, 52.902338, 53.251938, 51.639701, 52.402205, 42.231045, 42.693581, 43.062756, 43.892771, 42.664519, 43.075927, 44.372942, 45.1815, 44.376327, 44.975476, 47.304623, 48.054453, 45.353174, 46.808493, 40.563653, 42.041556, 40.582164, 41.4064, 38.51618, 40.179105, 35.789745, 37.023144, 26.825402, 27.757641, 27.193806, 27.745766, 29.144229, 30.375186, 29.567889, 30.059102, 30.041938, 30.378006, 29.995047, 30.382338, 48.48834, 49.169021, 22.392816, 22.595333, 7.439914, 11.500161, 3.766676, 9.000793, 12.640512, 17.406563],
    gc = 3E3, hc = 2.0E-5, ic = 3.0E-6, jc = 0.0174532925194, kc = 0.0065, lc = 0.0060, mc = 4E4, nc = 0, oc = 3,
    pc = 1.0E-10, qc = 6370996.81, rc = 1E8;

  function sc(a, b, c) {
    for (var e = Yb, f = 0; f < e; f += 2) if (a.lng >= b[f] && a.lng <= b[f + 1] && a.lat >= c[f] && a.lat <= c[f + 1]) return p;
    return t
  }

  function tc(a) {
    var b = a.lng, c = a.lat, a = Math.sqrt(b * b + c * c) + Math.sin(c * gc * jc) * hc,
      b = Math.atan2(c, b) + Math.cos(b * gc * jc) * ic;
    return {lng: a * Math.cos(b) + kc, lat: a * Math.sin(b) + lc}
  }

  function uc(a) {
    var b = vc, c = {}, e = a.lng, f = a.lat, g = 1, i = a.lng, k = a.lat, m = e - g, n = 0, o = f + g, s = 0,
      v = e - g, w = 0, y = f - g, z = 0, B = e + g, C = 0, E = f - g, F = 0, G = e + g, K = 0, O = f + g, M = 0,
      o = m = 0, o = wc(b, e, f), m = o.lng, o = o.lat;
    if (1.0E-6 >= xc(m, o, i, k)) return c.lng = e, c.lat = f, c;
    for (; ;) {
      m = e - g;
      o = f + g;
      v = e - g;
      y = f - g;
      B = e + g;
      E = f - g;
      G = e + g;
      O = f + g;
      e = wc(b, m, o);
      n = e.lng;
      s = e.lat;
      e = wc(b, v, y);
      w = e.lng;
      z = e.lat;
      e = wc(b, B, E);
      C = e.lng;
      F = e.lat;
      e = wc(b, G, O);
      K = e.lng;
      M = e.lat;
      e = xc(n, s, i, k);
      n = xc(w, z, i, k);
      w = xc(C, F, i, k);
      K = xc(K, M, i, k);
      if (1.0E-6 > e) return c.lng = m, c.lat = o, c;
      if (1.0E-6 > n) return c.lng = v, c.lat = y, c;
      if (1.0E-6 > w) return c.lng = B, c.lat = E, c;
      if (1.0E-6 > K) return c.lng = G, c.lat = O, c;
      C = 1 / e;
      n = 1 / n;
      w = 1 / w;
      K = 1 / K;
      e = (m * C + v * n + B * w + G * K) / (C + n + w + K);
      f = (o * C + y * n + E * w + O * K) / (C + n + w + K);
      o = wc(b, e, f);
      m = o.lng;
      o = o.lat;
      if (1.0E-6 >= xc(m, o, i, k)) return c.lng = e, c.lat = f, c;
      g *= 0.6;
      if (1.0E-6 > g) {
        a:{
          c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0E-4 + 0.5;
          g = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0E-4 + 0.5;
          i = a.lng * rc;
          k = a.lat * rc;
          y = 1.0E-4 * rc;
          m = i - y;
          o = i + y;
          v = k - y;
          B = k + y;
          C = n = w = K = l;
          G = n = y = E = w = K = 0;
          b(a);
          C = l;
          for (O = 0; O <= c; O++) {
            for (e = 0; e <= g; e++) if (C = b(l), K = l.lng * rc, w = l.lat * rc, n = C.lng * rc, C = C.lat * rc, !(n < m || C < v || n > o || C > B)) {
              K -= n;
              w -= C;
              n = Math.sqrt((i - n) * (i - n) + (k - C) * (k - C));
              if (1 > n) {
                c = {};
                c.lng = l.lng;
                c.lat = l.lat;
                break a
              }
              E += 1 * K / n;
              y += 1 * w / n;
              G += 1 / n
            }
            E /= G * rc;
            y /= G * rc
          }
          b = E * rc / rc;
          g = y * rc / rc;
          c = {};
          c.lng = a.lng + b;
          c.lat = a.lat + g
        }
        return c
      }
    }
  }

  function wc(a, b, c) {
    a = a({lng: b, lat: c});
    b = {};
    b.lng = a.lng;
    b.lat = a.lat;
    return b
  }

  function yc(a, b, c, e) {
    var f = arguments.length;
    this.Gg = {};
    this.Ng = {};
    0 !== f && 4 === f && this.normalize(a, b, c, e)
  }

  yc.prototype.contains = function (a) {
    return a.lng > this.Gg.lng && a.lng < this.Ng.lng && a.lat > this.Gg.lat && a.lat < this.Ng.lat ? oc : Math.abs(a.lng - this.Gg.lng) < pc || Math.abs(a.lng - this.Ng.lng) < pc || Math.abs(a.lat - this.Gg.lat) < pc || Math.abs(a.y - this.Ng.lat) > pc ? 2 : nc
  };
  yc.prototype.normalize = function (a, b, c, e) {
    a > c ? (this.Gg.lng = c, this.Ng.lng = a) : (this.Gg.lng = a, this.Ng.lng = c);
    b > e ? (this.Gg.lat = e, this.Ng.lat = b) : (this.Gg.lat = b, this.Ng.lat = e)
  };

  function zc(a, b, c, e) {
    this.mu = {lng: a, lat: b};
    this.ex = {lng: c, lat: e};
    this.$x = new yc(a, b, c, e)
  }

  function Ac(a, b) {
    var c = a.lat * jc, e = b.lat * jc, f = c - e, g = a.lng * jc - b.lng * jc;
    return 2 * Math.asin(Math.sqrt(Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(c) * Math.cos(e) * Math.sin(g / 2) * Math.sin(g / 2))) * qc
  }

  function xc(a, b, c, e) {
    return Math.sqrt((a - c) * (a - c) + (b - e) * (b - e))
  }

  function Bc(a, b, c) {
    return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
  }

  function vc(a) {
    var b = {};
    if (a.lng < Wb[0] - 0.4 || a.lat < Wb[1] - 0.4 || a.lng > Wb[2] + 0.4 || a.lat > Wb[3] + 0.4) return b.lng = a.lng, b.lat = a.lat, b;
    if (sc(a, ec, fc)) return b = tc(a);
    for (var b = 0, c = mc, e = 0, f = new yc, g = 0, e = 0; e < ac; ++e) dc[e] <= a.lat ? dc[(e + 1) % ac] > a.lat && 0 < Bc({
      lng: cc[e],
      lat: dc[e]
    }, {lng: cc[(e + 1) % ac], lat: dc[(e + 1) % ac]}, a) && ++g : dc[(e + 1) % ac] <= a.lat && 0 > Bc({
      lng: cc[e],
      lat: dc[e]
    }, {lng: cc[(e + 1) % ac], lat: dc[(e + 1) % ac]}, a) && --g;
    if ((0 === g ? nc : oc) === nc) {
      for (g = 0; g < ac; ++g) if (e = new zc(cc[g], dc[g], cc[(g + 1) % ac], dc[(g + 1) % ac]), f.Gg.lng = e.$x.Gg.lng - 0.5, f.Gg.lat = e.$x.Gg.lat - 0.5, f.Ng.lng = e.$x.Ng.lng + 0.5, f.Ng.lat = e.$x.Ng.lat + 0.5, f.contains(a) !== nc) {
        var i;
        var k = e.mu.lng, m = e.mu.lat, n = e.ex.lng, o = e.ex.lat;
        i = o - m;
        var s = k - n;
        !(Math.abs(i - 0) > pc) && !(Math.abs(s - 0) > pc) ? i = e.mu : (k = n * m - k * o, m = s * a.lng - i * a.lat, n = i * i - s * s, i = {
          lng: (s * m - i * k) / n,
          lat: -(i * m + s * k) / n
        });
        s = 180;
        k = 90;
        m = -180;
        n = -90;
        n = e.mu;
        o = e.ex;
        s = n.lng < o.lng ? n.lng : o.lng;
        k = n.lat < o.lat ? n.lat : o.lat;
        m = n.lng < o.lng ? n.lng : o.lng;
        n = n.lat < o.lat ? n.lat : o.lat;
        i.lng <= m && i.lng >= s && i.lng <= n && i.lat >= k ? (e = a.lat * jc, s = a.lng * jc, k = i.lat * jc, i = i.lng * jc, m = Math.cos(e) * Math.cos(k), e = m * Math.cos(s) * Math.cos(i) + m * Math.sin(s) * Math.sin(i) + Math.sin(e) * Math.sin(k), -1 > e ? e = -1 : 1 < e && (e = 1), e = Math.acos(e) * qc) : (i = Ac(a, e.mu), e = Ac(a, e.ex), e = i < e ? i : e);
        e < c && (c = e)
      }
      c < mc && (b = (mc - c) / mc)
    } else b = 1;
    c = tc(a);
    return b = {lng: a.lng + (c.lng - a.lng) * b, lat: a.lat + (c.lat - a.lat) * b}
  }

  function Cc(a) {
    var b = {};
    if (a.lng < Xb[0] - 0.4 || a.lat < Xb[1] - 0.4 || a.lng > Xb[2] + 0.4 || a.lat > Xb[3] + 0.4) return b.lng = a.lng, b.lat = a.lat, b;
    if (sc(a, Zb, $b)) {
      var b = a.lng - kc, c = a.lat - lc, a = Math.sqrt(b * b + c * c) - Math.sin(c * gc * jc) * hc,
        b = Math.atan2(c, b) - Math.cos(b * gc * jc) * ic;
      return b = {lng: a * Math.cos(b), lat: a * Math.sin(b)}
    }
    c = vc(a);
    return a.lng === c.lng && a.lat === c.lng ? (b.lng = a.lng, b.lat = a.lat, b) : uc(a)
  }

  function $a(a, b) {
    if (3 === b && a instanceof Q) {
      var c = vc(a);
      return new L(c.lng, c.lat)
    }
    return a
  }

  function eb(a, b) {
    if (3 === b && a instanceof L) {
      var c = Cc(a);
      return new Q(c.lng, c.lat)
    }
    return 5 === b && a instanceof L ? new Q(a.lng, a.lat) : a
  };

  function qa(a, b) {
    //////
    if (/^http/.test(a)) return;
    //////
    if (b) {
      var c = (1E5 * Math.random()).toFixed(0);
      D._rd["_cbk" + c] = function (a) {
        b && b(a);
        delete D._rd["_cbk" + c]
      };
      a += "&callback=BMap._rd._cbk" + c
    }
    var a = a + "&v=3.0&seckey=" + pa, e = H("script", {type: "text/javascript"});
    e.charset = "utf-8";
    e.src = a;
    e.addEventListener ? e.addEventListener("load", function (a) {
      a = a.target;
      a.parentNode.removeChild(a)
    }, t) : e.attachEvent && e.attachEvent("onreadystatechange", function () {
      var a = window.event.srcElement;
      a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
    });
    setTimeout(function () {
      document.getElementsByTagName("head")[0].appendChild(e);
      e = q
    }, 1)
  };var Dc = {
    map: "0zz35j",
    common: "qfikm4",
    style: "e0pfib",
    tile: "0es0ze",
    groundoverlay: "354afp",
    pointcollection: "z3tps3",
    marker: "n3vinr",
    symbol: "wssaky",
    canvablepath: "2lhp1d",
    vmlcontext: "5sm1kh",
    markeranimation: "uvlfhr",
    poly: "wqosr1",
    draw: "4kimvu",
    drawbysvg: "qq334z",
    drawbyvml: "zxbjkj",
    drawbycanvas: "gmz0gt",
    infowindow: "n5qhnd",
    oppc: "g2tfrd",
    opmb: "ql1inu",
    menu: "s4oiie",
    control: "kirlcr",
    navictrl: "x4sga2",
    geoctrl: "tesxmq",
    copyrightctrl: "xlo0s5",
    citylistcontrol: "j0emho",
    scommon: "iqmr35",
    local: "c3nyzo",
    route: "0zbfox",
    othersearch: "1bvkqu",
    mapclick: "iyqbbp",
    buslinesearch: "kg1lsk",
    hotspot: "pyucq0",
    autocomplete: "eh3ann",
    coordtrans: "pfly0c",
    coordtransutils: "uqy55d",
    convertor: "344tmo",
    clayer: "sjawpi",
    pservice: "fifcez",
    pcommon: "3rn1ax",
    panorama: "brxhxv",
    panoramaflash: "mhkm0e"
  };
  A.Ly = function () {
    function a(a) {
      return e && !!c[b + a + "_" + Dc[a]]
    }

    var b = "BMap_", c = window.localStorage, e = "localStorage" in window && c !== q && c !== l;
    return {
      OY: e, set: function (a, g) {
        if (e) {
          for (var i = b + a + "_", k = c.length, m; k--;) m = c.key(k), -1 < m.indexOf(i) && c.removeItem(m);
          try {
            c.setItem(b + a + "_" + Dc[a], g)
          } catch (n) {
            c.clear()
          }
        }
      }, get: function (f) {
        return e && a(f) ? c.getItem(b + f + "_" + Dc[f]) : t
      }, iK: a
    }
  }();

  function Wa() {
  }

  A.object.extend(Wa, {
    Mj: {uG: -1, MP: 0, pq: 1},
    pL: function () {
      var a = "canvablepath";
      if (!J() || !Sb()) Rb() || (Qb() ? a = "vmlcontext" : Sb());
      return {
        tile: ["style"],
        control: [],
        marker: ["symbol"],
        symbol: ["canvablepath", "common"],
        canvablepath: "canvablepath" === a ? [] : [a],
        vmlcontext: [],
        style: [],
        poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
        drawbysvg: ["draw"],
        drawbyvml: ["draw"],
        drawbycanvas: ["draw"],
        infowindow: ["common", "marker"],
        menu: [],
        oppc: [],
        opmb: [],
        scommon: [],
        local: ["scommon"],
        route: ["scommon"],
        othersearch: ["scommon"],
        autocomplete: ["scommon"],
        citylistcontrol: ["autocomplete"],
        mapclick: ["scommon"],
        buslinesearch: ["route"],
        hotspot: [],
        coordtransutils: ["coordtrans"],
        convertor: [],
        clayer: ["tile"],
        pservice: [],
        pcommon: ["style", "pservice"],
        panorama: ["pcommon"],
        panoramaflash: ["pcommon"]
      }
    },
    B5: {},
    lG: {YP: D.pa + "getmodules?v=3.0", tU: 5E3},
    BC: t,
    Xd: {El: {}, Gn: [], bw: []},
    load: function (a, b, c) {
      var e = this.qb(a);
      if (e.Se == this.Mj.pq) c && b(); else {
        if (e.Se == this.Mj.uG) {
          this.nK(a);
          this.zN(a);
          var f = this;
          f.BC == t && (f.BC = p, setTimeout(function () {
            for (var a = [], b = 0, c = f.Xd.Gn.length; b < c; b++) {
              var e = f.Xd.Gn[b], n = "";
              ja.Ly.iK(e) ? n = ja.Ly.get(e) : (n = "", a.push(e + "_" + Dc[e]));
              f.Xd.bw.push({RM: e, IE: n})
            }
            f.BC = t;
            f.Xd.Gn.length = 0;
            console.log("打印所需模块");
            console.log(a);   //！！！！！打印所需模块，这很重要
            //0 == a.length ? f.WK() : qa(f.lG.YP + "&mod=" + a.join(","))
            if( a.length > 0 ){
              for(let i=0; i<a.length;i++){
                let mf = './static/modules/'+a[i]+'.js';
                oa( mf );
                console.log('加载模块文件:'+mf); //IE error
              }
            } else {
              f.XK()
            }

          }, 1));
          e.Se = this.Mj.MP
        }
        e.Xu.push(b)
      }
    },
    nK: function (a) {
      if (a && this.pL()[a]) for (var a = this.pL()[a], b = 0; b < a.length; b++) this.nK(a[b]), this.Xd.El[a[b]] || this.zN(a[b])
    },
    zN: function (a) {
      for (var b = 0; b < this.Xd.Gn.length; b++) if (this.Xd.Gn[b] == a) return;
      this.Xd.Gn.push(a)
    },
    g_: function (a, b) {
      var c = this.qb(a);
      try {
        eval(b)
      } catch (e) {
        return
      }
      c.Se = this.Mj.pq;
      for (var f = 0, g = c.Xu.length; f < g; f++) c.Xu[f]();
      c.Xu.length = 0
    },
    iK: function (a, b) {
      var c = this;
      c.timeout = setTimeout(function () {
        c.Xd.El[a].Se != c.Mj.pq ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
      }, c.lG.tU)
    },
    qb: function (a) {
      this.Xd.El[a] || (this.Xd.El[a] = {}, this.Xd.El[a].Se = this.Mj.uG, this.Xd.El[a].Xu = []);
      return this.Xd.El[a]
    },
    remove: function (a) {
      delete this.qb(a)
    },
    rV: function (a, b) {
      for (var c = this.Xd.bw, e = p, f = 0, g = c.length; f < g; f++) "" == c[f].IE && (c[f].RM == a ? c[f].IE = b : e = t);
      e && this.WK()
    },
    WK: function () {
      for (var a = this.Xd.bw, b = 0, c = a.length; b < c; b++) this.g_(a[b].RM, a[b].IE);
      this.Xd.bw.length = 0
    }
  });

  function R(a, b) {
    this.x = a || 0;
    this.y = b || 0;
    this.x = this.x;
    this.y = this.y
  }

  R.prototype.Ub = function (a) {
    return a && a.x == this.x && a.y == this.y
  };

  function N(a, b) {
    this.width = a || 0;
    this.height = b || 0
  }

  N.prototype.Ub = function (a) {
    return a && this.width == a.width && this.height == a.height
  };

  function nb(a, b, c) {
    var e = new XMLHttpRequest;
    e.open("POST", a, p);
    e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    e.timeout = 1E4;
    e.ontimeout = u();
    e.onreadystatechange = function () {
      4 === this.readyState && 200 === this.status && c && c(e.responseText)
    };
    e.send(b)
  };

  function mb(a, b) {
    a && (this.Mb = a, this.da = "spot" + mb.da++, b = b || {}, this.ih = b.text || "", this.Iv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.IB = b.userData || q, this.Qh = b.minZoom || q, this.Nf = b.maxZoom || q)
  }

  mb.da = 0;
  A.extend(mb.prototype, {
    za: function (a) {
      this.Qh == q && (this.Qh = a.M.kc);
      this.Nf == q && (this.Nf = a.M.qc)
    }, va: function (a) {
      if (a instanceof Q || a instanceof L) this.Mb = a
    }, ma: x("Mb"), fu: ca("ih"), SD: x("ih"), setUserData: ca("IB"), getUserData: x("IB")
  });

  function Ec() {
    this.P = q;
    this.Nb = "control";
    this.Wa = this.$J = p
  }

  A.lang.xa(Ec, A.lang.Ja, "Control");
  A.extend(Ec.prototype, {
    initialize: function (a) {
      this.P = a;
      if (this.R) return a.cb.appendChild(this.R), this.R
    }, Me: function (a) {
      !this.R && (this.initialize && bb(this.initialize)) && (this.R = this.initialize(a));
      this.m = this.m || {Mg: t};
      this.wB();
      this.Or();
      this.R && (this.R.pr = this)
    }, wB: function () {
      var a = this.R;
      if (a) {
        var b = a.style;
        b.position = "absolute";
        b.zIndex = this.Uu || "10";
        b.MozUserSelect = "none";
        b.WebkitTextSizeAdjust = "none";
        this.m.Mg || A.U.ib(a, "BMap_noprint");
        J() || A.V(a, "contextmenu", oa)
      }
    }, remove: function () {
      this.P = q;
      this.R && (this.R.parentNode && this.R.parentNode.removeChild(this.R), this.R = this.R.pr = q)
    }, Ha: function () {
      this.R = Fb(this.P.cb, "<div unselectable='on'></div>");
      this.Wa == t && A.U.aa(this.R);
      return this.R
    }, Or: function () {
      this.wc(this.m.anchor)
    }, wc: function (a) {
      if (this.v2 || !ab(a) || isNaN(a) || a < Fc || 3 < a) a = this.defaultAnchor;
      this.m = this.m || {Mg: t};
      this.m.Ga = this.m.Ga || this.defaultOffset;
      var b = this.m.anchor;
      this.m.anchor = a;
      if (this.R) {
        var c = this.R, e = this.m.Ga.width, f = this.m.Ga.height;
        c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
        switch (a) {
          case Fc:
            c.style.top = f + "px";
            c.style.left = e + "px";
            break;
          case Gc:
            c.style.top = f + "px";
            c.style.right = e + "px";
            break;
          case Hc:
            c.style.bottom = f + "px";
            c.style.left = e + "px";
            break;
          case 3:
            c.style.bottom = f + "px", c.style.right = e + "px"
        }
        c = ["TL", "TR", "BL", "BR"];
        A.U.rc(this.R, "anchor" + c[b]);
        A.U.ib(this.R, "anchor" + c[a])
      }
    }, vD: function () {
      return this.m.anchor
    }, getContainer: x("R"), Rd: function (a) {
      a instanceof N && (this.m = this.m || {Mg: t}, this.m.Ga = new N(a.width, a.height), this.R && this.wc(this.m.anchor))
    }, sj: function () {
      return this.m.Ga
    }, cd: x("R"), show: function () {
      this.Wa != p && (this.Wa = p, this.R && A.U.show(this.R))
    }, aa: function () {
      this.Wa != t && (this.Wa = t, this.R && A.U.aa(this.R))
    }, isPrintable: function () {
      return !!this.m.Mg
    }, Uc: function () {
      return !this.R && !this.P ? t : !!this.Wa
    }
  });
  var Fc = 0, Gc = 1, Hc = 2;

  function ob(a) {
    Ec.call(this);
    a = a || {};
    this.m = {
      Mg: t,
      yF: a.showZoomInfo || p,
      anchor: a.anchor,
      Ga: a.offset,
      type: a.type,
      HW: a.enableGeolocation || t
    };
    this.defaultAnchor = J() ? 3 : Fc;
    this.defaultOffset = new N(10, 10);
    this.wc(a.anchor);
    this.kn(a.type);
    this.Ef()
  }

  A.lang.xa(ob, Ec, "NavigationControl");
  A.extend(ob.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R
    }, kn: function (a) {
      this.m.type = ab(a) && 0 <= a && 3 >= a ? a : 0
    }, up: function () {
      return this.m.type
    }, Ef: function () {
      var a = this;
      Wa.load("navictrl", function () {
        a.Df()
      })
    }
  });

  function Ic(a) {
    Ec.call(this);
    a = a || {};
    this.m = {
      anchor: a.anchor || Hc,
      Ga: a.offset || new N(10, 30),
      R_: a.showAddressBar !== t,
      f3: a.enableAutoLocation || t,
      JM: a.locationIcon || q
    };
    var b = this;
    this.Uu = 1200;
    b.O0 = [];
    this.ue = [];
    Wa.load("geoctrl", function () {
      (function e() {
        if (0 !== b.ue.length) {
          var a = b.ue.shift();
          b[a.method].apply(b, a.arguments);
          e()
        }
      })();
      b.XP()
    });
    Ta(Ma)
  }

  A.lang.xa(Ic, Ec, "GeolocationControl");
  A.extend(Ic.prototype, {
    location: function () {
      this.ue.push({method: "location", arguments: arguments})
    }, getAddressComponent: ea(q)
  });

  function Jc(a) {
    Ec.call(this);
    a = a || {};
    this.m = {Mg: t, anchor: a.anchor, Ga: a.offset};
    this.gc = [];
    this.defaultAnchor = Hc;
    this.defaultOffset = new N(5, 2);
    this.wc(a.anchor);
    this.$J = t;
    this.Ef()
  }

  A.lang.xa(Jc, Ec, "CopyrightControl");
  A.object.extend(Jc.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R
    }, Aw: function (a) {
      if (a && ab(a.id) && !isNaN(a.id)) {
        var b = {bounds: q, content: ""}, c;
        for (c in a) b[c] = a[c];
        if (a = this.xm(a.id)) for (var e in b) a[e] = b[e]; else this.gc.push(b)
      }
    }, xm: function (a) {
      for (var b = 0, c = this.gc.length; b < c; b++) if (this.gc[b].id == a) return this.gc[b]
    }, CD: x("gc"), XE: function (a) {
      for (var b = 0, c = this.gc.length; b < c; b++) this.gc[b].id == a && (r = this.gc.splice(b, 1), b--, c = this.gc.length)
    }, Ef: function () {
      var a = this;
      Wa.load("copyrightctrl", function () {
        a.Df()
      })
    }
  });

  function qb(a) {
    Ec.call(this);
    a = a || {};
    this.m = {
      Mg: t,
      size: a.size || new N(150, 150),
      padding: 5,
      eb: a.isOpen === p ? p : t,
      g1: 4,
      Ga: a.offset,
      anchor: a.anchor
    };
    this.defaultAnchor = 3;
    this.defaultOffset = new N(0, 0);
    this.Hq = this.Iq = 13;
    this.wc(a.anchor);
    this.He(this.m.size);
    this.Ef()
  }

  A.lang.xa(qb, Ec, "OverviewMapControl");
  A.extend(qb.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R
    }, wc: function (a) {
      Ec.prototype.wc.call(this, a)
    }, ve: function () {
      this.ve.qo = p;
      this.m.eb = !this.m.eb;
      this.R || (this.ve.qo = t)
    }, He: function (a) {
      a instanceof N || (a = new N(150, 150));
      a.width = 0 < a.width ? a.width : 150;
      a.height = 0 < a.height ? a.height : 150;
      this.m.size = a
    }, zb: function () {
      return this.m.size
    }, eb: function () {
      return this.m.eb
    }, Ef: function () {
      var a = this;
      Wa.load("control", function () {
        a.Df()
      })
    }
  });

  function Kc(a) {
    Ec.call(this);
    a = a || {};
    this.defaultAnchor = Fc;
    this.pV = a.canCheckSize === t ? t : p;
    this.lj = "";
    this.defaultOffset = new N(10, 10);
    this.onChangeBefore = [];
    this.onChangeAfter = [];
    this.onChangeSuccess = [];
    this.m = {Mg: t, Ga: a.offset || this.defaultOffset, anchor: a.anchor || this.defaultAnchor, expand: !!a.expand};
    a.onChangeBefore && bb(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
    a.onChangeAfter && bb(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
    a.onChangeSuccess && bb(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
    this.wc(a.anchor);
    this.Ef()
  }

  A.lang.xa(Kc, Ec, "CityListControl");
  A.object.extend(Kc.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R
    }, Ef: function () {
      var a = this;
      Wa.load("citylistcontrol", function () {
        a.Df()
      }, p)
    }
  });

  function pb(a) {
    Ec.call(this);
    a = a || {};
    this.m = {Mg: t, color: "black", hd: "metric", Ga: a.offset};
    this.defaultAnchor = Hc;
    this.defaultOffset = new N(81, 18);
    this.wc(a.anchor);
    this.Zh = {
      metric: {name: "metric", pK: 1, dM: 1E3, IO: "\u7c73", JO: "\u516c\u91cc"},
      us: {name: "us", pK: 3.2808, dM: 5280, IO: "\u82f1\u5c3a", JO: "\u82f1\u91cc"}
    };
    this.Zh[this.m.hd] || (this.m.hd = "metric");
    this.TI = q;
    this.oI = {};
    this.Ef()
  }

  A.lang.xa(pb, Ec, "ScaleControl");
  A.object.extend(pb.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R
    }, Wk: function (a) {
      this.m.color = a + ""
    }, B3: function () {
      return this.m.color
    }, uF: function (a) {
      this.m.hd = this.Zh[a] && this.Zh[a].name || this.m.hd
    }, dY: function () {
      return this.m.hd
    }, Ef: function () {
      var a = this;
      Wa.load("control", function () {
        a.Df()
      })
    }
  });
  var Lc = 0;

  function rb(a) {
    Ec.call(this);
    a = a || {};
    this.defaultAnchor = Gc;
    this.defaultOffset = new N(10, 10);
    this.m = {
      Mg: t,
      vh: [Pa, cb, Ua, Sa],
      $V: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
      type: a.type || Lc,
      Ga: a.offset || this.defaultOffset,
      LW: p
    };
    this.wc(a.anchor);
    "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.vh = a.mapTypes.slice(0));
    this.Ef()
  }

  A.lang.xa(rb, Ec, "MapTypeControl");
  A.object.extend(rb.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R
    }, My: function (a) {
      this.P.bo = a
    }, Ef: function () {
      var a = this;
      Wa.load("control", function () {
        a.Df()
      }, p)
    }
  });

  function Mc(a) {
    Ec.call(this);
    a = a || {};
    this.m = {Mg: t, Ga: a.offset, anchor: a.anchor};
    this.Wi = t;
    this.gw = q;
    this.yI = new Nc({Ye: "api"});
    this.zI = new Oc(q, {Ye: "api"});
    this.defaultAnchor = Gc;
    this.defaultOffset = new N(10, 10);
    this.wc(a.anchor);
    this.Ef();
    Ta(ya)
  }

  A.lang.xa(Mc, Ec, "PanoramaControl");
  A.extend(Mc.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R
    }, Ef: function () {
      var a = this;
      Wa.load("control", function () {
        a.Df()
      })
    }
  });

  function Pc(a) {
    A.lang.Ja.call(this);
    this.m = {cb: q, cursor: "default"};
    this.m = A.extend(this.m, a);
    this.Nb = "contextmenu";
    this.P = q;
    this.Da = [];
    this.Pf = [];
    this.Ke = [];
    this.Vw = this.ss = q;
    this.Ph = t;
    var b = this;
    Wa.load("menu", function () {
      b.ob()
    })
  }

  A.lang.xa(Pc, A.lang.Ja, "ContextMenu");
  A.object.extend(Pc.prototype, {
    za: function (a, b) {
      this.P = a;
      this.Jl = b || q
    }, remove: function () {
      this.P = this.Jl = q
    }, es: function (a) {
      if (a && !("menuitem" != a.Nb || "" == a.ih || 0 >= a.fj)) {
        for (var b = 0, c = this.Da.length; b < c; b++) if (this.Da[b] === a) return;
        this.Da.push(a);
        this.Pf.push(a)
      }
    }, removeItem: function (a) {
      if (a && "menuitem" == a.Nb) {
        for (var b = 0, c = this.Da.length; b < c; b++) this.Da[b] === a && (this.Da[b].remove(), this.Da.splice(b, 1), c--);
        b = 0;
        for (c = this.Pf.length; b < c; b++) this.Pf[b] === a && (this.Pf[b].remove(), this.Pf.splice(b, 1), c--)
      }
    }, TB: function () {
      this.Da.push({Nb: "divider", Uj: this.Ke.length});
      this.Ke.push({U: q})
    }, $E: function (a) {
      if (this.Ke[a]) {
        for (var b = 0, c = this.Da.length; b < c; b++) this.Da[b] && ("divider" == this.Da[b].Nb && this.Da[b].Uj == a) && (this.Da.splice(b, 1), c--), this.Da[b] && ("divider" == this.Da[b].Nb && this.Da[b].Uj > a) && this.Da[b].Uj--;
        this.Ke.splice(a, 1)
      }
    }, cd: x("R"), show: function () {
      this.Ph != p && (this.Ph = p)
    }, aa: function () {
      this.Ph != t && (this.Ph = t)
    }, v_: function (a) {
      a && (this.m.cursor = a)
    }, getItem: function (a) {
      return this.Pf[a]
    }
  });
  var Qc = I.ua + "menu_zoom_in.png", Rc = I.ua + "menu_zoom_out.png";

  function Sc(a, b, c) {
    if (a && bb(b)) {
      A.lang.Ja.call(this);
      this.m = {width: 100, id: "", Km: ""};
      c = c || {};
      this.m.width = 1 * c.width ? c.width : 100;
      this.m.id = c.id ? c.id : "";
      this.m.Km = c.iconUrl ? c.iconUrl : "";
      this.ih = a + "";
      this.vz = b;
      this.P = q;
      this.Nb = "menuitem";
      this.Vr = this.yv = this.R = this.Kh = q;
      this.Nh = p;
      var e = this;
      Wa.load("menu", function () {
        e.ob()
      })
    }
  }

  A.lang.xa(Sc, A.lang.Ja, "MenuItem");
  A.object.extend(Sc.prototype, {
    za: function (a, b) {
      this.P = a;
      this.Kh = b
    }, remove: function () {
      this.P = this.Kh = q
    }, fu: function (a) {
      a && (this.ih = a + "")
    }, Wb: function (a) {
      a && (this.m.Km = a)
    }, cd: x("R"), enable: function () {
      this.Nh = p
    }, disable: function () {
      this.Nh = t
    }
  });

  function jb(a, b) {
    a && !b && (b = a);
    this.Ne = this.be = this.Te = this.ee = this.Xl = this.Hl = q;
    a && (this.Xl = new Q(a.lng, a.lat), this.Hl = new Q(b.lng, b.lat), this.Te = a.lng, this.ee = a.lat, this.Ne = b.lng, this.be = b.lat)
  }

  A.object.extend(jb.prototype, {
    Aj: function () {
      return !this.Xl || !this.Hl
    }, Ub: function (a) {
      return !(a instanceof jb) || this.Aj() ? t : this.Ae().Ub(a.Ae()) && this.sf().Ub(a.sf())
    }, Ae: x("Xl"), sf: x("Hl"), GV: function (a) {
      return !(a instanceof jb) || this.Aj() || a.Aj() ? t : a.Te > this.Te && a.Ne < this.Ne && a.ee > this.ee && a.be < this.be
    }, Qb: function () {
      return this.Aj() ? q : new Q((this.Te + this.Ne) / 2, (this.ee + this.be) / 2)
    }, ot: function (a) {
      if (!(a instanceof jb) || Math.max(a.Te, a.Ne) < Math.min(this.Te, this.Ne) || Math.min(a.Te, a.Ne) > Math.max(this.Te, this.Ne) || Math.max(a.ee, a.be) < Math.min(this.ee, this.be) || Math.min(a.ee, a.be) > Math.max(this.ee, this.be)) return q;
      var b = Math.max(this.Te, a.Te), c = Math.min(this.Ne, a.Ne), e = Math.max(this.ee, a.ee),
        a = Math.min(this.be, a.be);
      return new jb(new Q(b, e), new Q(c, a))
    }, ns: function (a) {
      return !(a instanceof Q || a instanceof L) || this.Aj() ? t : a.lng >= this.Te && a.lng <= this.Ne && a.lat >= this.ee && a.lat <= this.be
    }, extend: function (a) {
      if (a instanceof Q || a instanceof L) {
        var b = a.lng, a = a.lat;
        this.Xl || (this.Xl = new Q(0, 0));
        this.Hl || (this.Hl = new Q(0, 0));
        if (!this.Te || this.Te > b) this.Xl.lng = this.Te = b;
        if (!this.Ne || this.Ne < b) this.Hl.lng = this.Ne = b;
        if (!this.ee || this.ee > a) this.Xl.lat = this.ee = a;
        if (!this.be || this.be < a) this.Hl.lat = this.be = a
      }
    }, LF: function () {
      return this.Aj() ? new Q(0, 0) : new Q(Math.abs(this.Ne - this.Te), Math.abs(this.be - this.ee))
    }
  });

  function Q(a, b) {
    isNaN(a) && (a = Pb(a), a = isNaN(a) ? 0 : a);
    db(a) && (a = parseFloat(a));
    isNaN(b) && (b = Pb(b), b = isNaN(b) ? 0 : b);
    db(b) && (b = parseFloat(b));
    this.lng = a;
    this.lat = b
  }

  Q.lE = function (a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
  };
  Q.prototype.Ub = function (a) {
    return a && this.lat == a.lat && this.lng == a.lng
  };

  function L(a, b) {
    isNaN(a) && (a = Pb(a), a = isNaN(a) ? 0 : a);
    db(a) && (a = parseFloat(a));
    isNaN(b) && (b = Pb(b), b = isNaN(b) ? 0 : b);
    db(b) && (b = parseFloat(b));
    this.lng = a;
    this.lat = b;
    this.Ye = "inner"
  }

  L.lE = function (a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
  };
  L.prototype.Ub = function (a) {
    return a && this.lat == a.lat && this.lng == a.lng
  };

  function Tc() {
  }

  Tc.prototype.Hg = function () {
    ba("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
  };
  Tc.prototype.Ej = function () {
    ba("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
  };

  function Uc() {
  };var ib = {
    rK: function (a, b, c) {
      Wa.load("coordtransutils", function () {
        ib.RU(a, b, c)
      }, p)
    }, qK: function (a, b, c) {
      Wa.load("coordtransutils", function () {
        ib.QU(a, b, c)
      }, p)
    }
  };

  function Vc() {
    this.Qa = [];
    var a = this;
    Wa.load("convertor", function () {
      a.VP()
    })
  }

  A.xa(Vc, A.lang.Ja, "Convertor");
  A.extend(Vc.prototype, {
    translate: function (a, b, c, e) {
      this.Qa.push({method: "translate", arguments: [a, b, c, e]})
    }
  });
  V(Vc.prototype, {translate: Vc.prototype.translate});

  function T() {
  }

  T.prototype = new Tc;
  A.extend(T, {
    oP: 6370996.81,
    yG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    Lu: [86, 60, 45, 30, 15, 0],
    uP: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
    vG: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
    H3: function (a, b) {
      if (!a || !b) return 0;
      var c, e, a = this.hc(a);
      if (!a) return 0;
      c = this.el(a.lng);
      e = this.el(a.lat);
      b = this.hc(b);
      return !b ? 0 : this.Md(c, this.el(b.lng), e, this.el(b.lat))
    },
    Ek: function (a, b) {
      if (!a || !b) return 0;
      a.lng = this.JD(a.lng, -180, 180);
      a.lat = this.OD(a.lat, -74, 74);
      b.lng = this.JD(b.lng, -180, 180);
      b.lat = this.OD(b.lat, -74, 74);
      return this.Md(this.el(a.lng), this.el(b.lng), this.el(a.lat), this.el(b.lat))
    },
    hc: function (a) {
      if (a === q || a === l) return new L(0, 0);
      var b, c;
      b = new L(Math.abs(a.lng), Math.abs(a.lat));
      for (var e = 0; e < this.yG.length; e++) if (b.lat >= this.yG[e]) {
        c = this.uP[e];
        break
      }
      a = this.sK(a, c);
      return a = new L(a.lng, a.lat)
    },
    Ya: function (a) {
      if (a === q || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new L(0, 0);
      var b, c;
      a.lng = this.JD(a.lng, -180, 180);
      a.lat = this.OD(a.lat, -85, 85);
      b = new L(a.lng, a.lat);
      for (var e = 0; e < this.Lu.length; e++) if (b.lat >= this.Lu[e]) {
        c = this.vG[e];
        break
      }
      if (!c) for (e = 0; e < this.Lu.length; e++) if (b.lat <= -this.Lu[e]) {
        c = this.vG[e];
        break
      }
      a = this.sK(a, c);
      return a = new L(a.lng, a.lat)
    },
    sK: function (a, b) {
      if (a && b) {
        var c = b[0] + b[1] * Math.abs(a.lng), e = Math.abs(a.lat) / b[9],
          e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e,
          c = c * (0 > a.lng ? -1 : 1), e = e * (0 > a.lat ? -1 : 1);
        return new L(c, e)
      }
    },
    Md: function (a, b, c, e) {
      return this.oP * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
    },
    el: function (a) {
      return Math.PI * a / 180
    },
    k6: function (a) {
      return 180 * a / Math.PI
    },
    OD: function (a, b, c) {
      b != q && (a = Math.max(a, b));
      c != q && (a = Math.min(a, c));
      return a
    },
    JD: function (a, b, c) {
      for (; a > c;) a -= c - b;
      for (; a < b;) a += c - b;
      return a
    }
  });
  A.extend(T.prototype, {
    ri: function (a) {
      return T.Ya(a)
    }, Hg: function (a) {
      a = T.Ya(a);
      return new R(a.lng, a.lat)
    }, xh: function (a) {
      return T.hc(a)
    }, Ej: function (a) {
      a = new L(a.x, a.y);
      a = T.hc(a);
      return new Q(a.lng, a.lat)
    }, vc: function (a, b, c, e, f) {
      if (a) return a = this.ri(a, f), b = this.$b(b), new R(Math.round((a.lng - c.lng) / b + e.width / 2), Math.round((c.lat - a.lat) / b + e.height / 2))
    }, gZ: function (a, b, c, e) {
      if (a) return b = this.$b(b), new R(Math.round((a.lng - c.lng) / b + e.width / 2), Math.round((c.lat - a.lat) / b + e.height / 2))
    }, bc: function (a, b, c, e, f) {
      if (a) return b = this.$b(b), this.xh(new L(c.lng + b * (a.x - e.width / 2), c.lat - b * (a.y - e.height / 2)), f)
    }, $b: function (a) {
      return Math.pow(2, 18 - a)
    }, TN: ca("Ma")
  });

  function lb() {
    this.lj = "bj"
  }

  lb.prototype = new T;
  A.extend(lb.prototype, {
    ri: function (a, b) {
      return this.GQ(b, T.Ya(a))
    }, xh: function (a, b) {
      return T.hc(this.HQ(b, a))
    }, lngLatToPointFor3D: function (a, b) {
      var c = this, e = T.Ya(a);
      Wa.load("coordtrans", function () {
        var a = Uc.MD(c.lj || "bj", e), a = new R(a.x, a.y);
        b && b(a)
      }, p)
    }, pointToLngLatFor3D: function (a, b) {
      var c = this, e = new Q(a.x, a.y);
      Wa.load("coordtrans", function () {
        var a = Uc.KD(c.lj || "bj", e), a = new Q(a.lng, a.lat), a = T.hc(a);
        b && b(a)
      }, p)
    }, GQ: function (a, b) {
      if (Wa.qb("coordtrans").Se == Wa.Mj.pq) {
        var c = Uc.MD(a || "bj", b);
        return new Q(c.x, c.y)
      }
      Wa.load("coordtrans", u());
      return new Q(0, 0)
    }, HQ: function (a, b) {
      if (Wa.qb("coordtrans").Se == Wa.Mj.pq) {
        var c = Uc.KD(a || "bj", b);
        return new Q(c.lng, c.lat)
      }
      Wa.load("coordtrans", u());
      return new Q(0, 0)
    }, $b: function (a) {
      return Math.pow(2, 20 - a)
    }, TN: ca("Ma")
  });

  function Wc() {
    this.Nb = "overlay"
  }

  A.lang.xa(Wc, A.lang.Ja, "Overlay");
  Wc.Kk = function (a) {
    a *= 1;
    return !a ? 0 : -1E5 * a << 1
  };
  A.extend(Wc.prototype, {
    Me: function (a) {
      if (!this.ca && bb(this.initialize) && (this.ca = this.initialize(a))) this.ca.style.WebkitUserSelect = "none";
      this.draw()
    }, initialize: function () {
      ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }, draw: function () {
      ba("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }, remove: function () {
      this.ca && this.ca.parentNode && this.ca.parentNode.removeChild(this.ca);
      this.ca = q;
      this.dispatchEvent(new P("onremove"))
    }, aa: function () {
      this.ca && A.U.aa(this.ca)
    }, show: function () {
      this.ca && A.U.show(this.ca)
    }, Uc: function () {
      return !this.ca || "none" == this.ca.style.display || "hidden" == this.ca.style.visibility ? t : p
    }
  });
  D.df(function (a) {
    function b(a, b) {
      var c = H("div"), i = c.style;
      i.position = "absolute";
      i.top = i.left = i.width = i.height = "0";
      i.zIndex = b;
      a.appendChild(c);
      return c
    }

    var c = a.ba;
    c.Wc = a.Wc = b(a.platform, 200);
    a.ce.oD = b(c.Wc, 800);
    a.ce.DE = b(c.Wc, 700);
    a.ce.bL = b(c.Wc, 600);
    a.ce.vE = b(c.Wc, 500);
    a.ce.NM = b(c.Wc, 400);
    a.ce.OM = b(c.Wc, 300);
    a.ce.UO = b(c.Wc, 201);
    a.ce.Gt = b(c.Wc, 200)
  });

  function kb() {
    A.lang.Ja.call(this);
    Wc.call(this);
    this.map = q;
    this.Wa = p;
    this.Fb = q;
    this.kH = 0
  }

  A.lang.xa(kb, Wc, "OverlayInternal");
  A.extend(kb.prototype, {
    initialize: function (a) {
      this.map = a;
      A.lang.Ja.call(this, this.da);
      return q
    }, sx: x("map"), draw: u(), Oj: u(), remove: function () {
      this.map = q;
      A.lang.Yw(this.da);
      Wc.prototype.remove.call(this)
    }, aa: function () {
      this.Wa !== t && (this.Wa = t)
    }, show: function () {
      this.Wa !== p && (this.Wa = p)
    }, Uc: function () {
      return !this.ca ? t : !!this.Wa
    }, Ta: x("ca"), SN: function (a) {
      var a = a || {}, b;
      for (b in a) this.K[b] = a[b]
    }, cq: ca("zIndex"), qj: function () {
      this.K.qj = p
    }, jW: function () {
      this.K.qj = t
    }, bm: ca("og"), Pp: function () {
      this.og = q
    }
  });

  function Xc() {
    this.map = q;
    this.ta = {};
    this.Je = []
  }

  D.df(function (a) {
    var b = new Xc;
    b.map = a;
    a.ta = b.ta;
    a.Je = b.Je;
    a.addEventListener("load", function (a) {
      b.draw(a)
    });
    a.addEventListener("moveend", function (a) {
      b.draw(a)
    });
    A.ga.oa && 8 > A.ga.oa || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function (a) {
      setTimeout(function () {
        b.draw(a)
      }, 20)
    }) : a.addEventListener("zoomend", function (a) {
      b.draw(a)
    });
    a.addEventListener("maptypechange", function (a) {
      b.draw(a)
    });
    a.addEventListener("addoverlay", function (a) {
      a = a.target;
      if (a instanceof kb) b.ta[a.da] || (b.ta[a.da] = a); else {
        for (var e = t, f = 0, g = b.Je.length; f < g; f++) if (b.Je[f] === a) {
          e = p;
          break
        }
        e || b.Je.push(a)
      }
    });
    a.addEventListener("removeoverlay", function (a) {
      a = a.target;
      if (a instanceof kb) delete b.ta[a.da]; else for (var e = 0, f = b.Je.length; e < f; e++) if (b.Je[e] === a) {
        b.Je.splice(e, 1);
        break
      }
    });
    a.addEventListener("clearoverlays", function () {
      this.Mc();
      for (var a in b.ta) b.ta[a].K.qj && (b.ta[a].remove(), delete b.ta[a]);
      a = 0;
      for (var e = b.Je.length; a < e; a++) b.Je[a].enableMassClear !== t && (b.Je[a].remove(), b.Je[a] = q, b.Je.splice(a, 1), a--, e--)
    });
    a.addEventListener("infowindowopen", function () {
      var a = this.Fb;
      a && (A.U.aa(a.Cc), A.U.aa(a.cc))
    });
    a.addEventListener("movestart", function () {
      this.qh() && this.qh().ZI()
    });
    a.addEventListener("moveend", function () {
      this.qh() && this.qh().NI()
    })
  });
  Xc.prototype.draw = function (a) {
    if (D.tq) {
      var b = D.tq.Xs(this.map);
      "canvas" === b.Nb && b.canvas && b.BQ(b.canvas.getContext("2d"))
    }
    for (var c in this.ta) this.ta[c].draw(a);
    A.oc.Pb(this.Je, function (a) {
      a.draw()
    });
    this.map.ba.tb && this.map.ba.tb.va();
    D.tq && b.qF()
  };

  function Zc(a) {
    kb.call(this);
    a = a || {};
    this.K = {
      strokeColor: a.strokeColor || "#3a6bdb",
      tc: a.strokeWeight || 5,
      zd: a.strokeOpacity || 0.65,
      strokeStyle: a.strokeStyle || "solid",
      qj: a.enableMassClear === t ? t : p,
      Hk: q,
      Cm: q,
      pf: a.enableEditing === p ? p : t,
      SM: 5,
      M0: t,
      mf: a.enableClicking === t ? t : p,
      oi: a.icons && 0 < a.icons.length ? a.icons : q,
      eX: a.geodesic === p ? p : t,
      zE: a.linkRight === p ? p : t
    };
    0 >= this.K.tc && (this.K.tc = 5);
    if (0 > this.K.zd || 1 < this.K.zd) this.K.zd = 0.65;
    if (0 > this.K.zg || 1 < this.K.zg) this.K.zg = 0.65;
    "solid" != this.K.strokeStyle && "dashed" != this.K.strokeStyle && (this.K.strokeStyle = "solid");
    this.ca = q;
    this.Tu = new jb(0, 0);
    this.kf = [];
    this.uc = [];
    this.Xa = {}
  }

  A.lang.xa(Zc, kb, "Graph");
  Zc.nx = function (a) {
    var b = [];
    if (!a) return b;
    db(a) && A.oc.Pb(a.split(";"), function (a) {
      a = a.split(",");
      b.push(new Q(a[0], a[1]))
    });
    "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
    return b
  };
  Zc.OE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
  A.extend(Zc.prototype, {
    initialize: function (a) {
      this.map = a;
      return q
    }, draw: u(), Nr: function (a) {
      this.kf.length = 0;
      this.ja = Zc.nx(a).slice(0);
      this.Hh()
    }, Sd: function (a) {
      this.Nr(a)
    }, Hh: function () {
      if (this.ja) {
        var a = this;
        a.Tu = new jb;
        A.oc.Pb(this.ja, function (b) {
          a.Tu.extend(b)
        })
      }
    }, $e: x("ja"), jn: function (a, b) {
      b && this.ja[a] && (this.kf.length = 0, this.ja[a] = new Q(b.lng, b.lat), this.Hh())
    }, setStrokeColor: function (a) {
      this.K.strokeColor = a
    }, WX: function () {
      return this.K.strokeColor
    }, bq: function (a) {
      0 < a && (this.K.tc = a)
    }, FL: function () {
      return this.K.tc
    }, $p: function (a) {
      a == l || (1 < a || 0 > a) || (this.K.zd = a)
    }, XX: function () {
      return this.K.zd
    }, $t: function (a) {
      1 < a || 0 > a || (this.K.zg = a)
    }, rX: function () {
      return this.K.zg
    }, aq: function (a) {
      "solid" != a && "dashed" != a || (this.K.strokeStyle = a)
    }, EL: function () {
      return this.K.strokeStyle
    }, setFillColor: function (a) {
      this.K.fillColor = a || ""
    }, qX: function () {
      return this.K.fillColor
    }, le: x("Tu"), remove: function () {
      this.map && this.map.removeEventListener("onmousemove", this.vv);
      kb.prototype.remove.call(this);
      this.kf.length = 0
    }, pf: function () {
      if (!(2 > this.ja.length)) {
        this.K.pf = p;
        var a = this;
        Wa.load("poly", function () {
          a.dm()
        }, p)
      }
    }, iW: function () {
      this.K.pf = t;
      var a = this;
      Wa.load("poly", function () {
        a.kj()
      }, p)
    }, nX: function () {
      return this.K.pf
    }, uX: function () {
      for (var a = [], b = 0; b < this.ja.length - 1; b++) var c = this.kV(this.ja[b], this.ja[b + 1]), a = a.concat(c);
      return a = a.concat(this.ja[this.ja.length - 1])
    }, kV: function (a, b) {
      if (a.Ub(b)) return [a];
      var c = T.Md(U(a.lng), U(a.lat), U(b.lng), U(b.lat)), c = T.Ek(a, b);
      if (25E4 > c) return [a];
      var e = [], c = Math.round(c / 15E4), f = this.cK(a, b);
      e.push(a);
      for (var g = 0; g < c; g++) {
        var i = this.dK(a, b, g / c, f);
        e.push(i)
      }
      e.push(b);
      return e
    }, dK: function (a, b, c, e) {
      var f = U(a.lat), g = U(b.lat), a = U(a.lng), i = U(b.lng), b = Math.sin((1 - c) * e) / Math.sin(e),
        c = Math.sin(c * e) / Math.sin(e), e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i),
        a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
      return new Q(180 * (Math.atan2(a, e) / Math.PI), 180 * (Math.atan2(b * Math.sin(f) + c * Math.sin(g), Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2))) / Math.PI))
    }, cK: function (a, b) {
      var c = U(a.lat), e = U(b.lat);
      return Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(U(b.lng) - U(a.lng))))
    }
  });

  function $c(a) {
    kb.call(this);
    this.ca = this.map = q;
    this.K = {
      width: 0,
      height: 0,
      Ga: new N(0, 0),
      opacity: 1,
      background: "transparent",
      Vx: 1,
      AM: "#000",
      YY: "solid",
      point: q
    };
    this.SN(a);
    this.point = this.K.point
  }

  A.lang.xa($c, kb, "Division");
  A.extend($c.prototype, {
    Oj: function () {
      var a = this.K, b = this.content, c = ['<div class="BMap_Division" style="position:absolute;'];
      c.push("width:" + a.width + "px;display:block;");
      c.push("overflow:hidden;");
      "none" != a.borderColor && c.push("border:" + a.Vx + "px " + a.YY + " " + a.AM + ";");
      c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
      c.push("background:" + a.background + ";");
      c.push('z-index:60;">');
      c.push(b);
      c.push("</div>");
      this.ca = Fb(this.map.Wf().DE, c.join(""))
    }, initialize: function (a) {
      this.map = a;
      this.Oj();
      this.ca && A.V(this.ca, J() ? "touchstart" : "mousedown", function (a) {
        na(a)
      });
      return this.ca
    }, draw: function () {
      var a = this.map.cf(this.K.point);
      this.K.Ga = new N(-Math.round(this.K.width / 2) - Math.round(this.K.Vx), -Math.round(this.K.height / 2) - Math.round(this.K.Vx));
      this.ca.style.left = a.x + this.K.Ga.width + "px";
      this.ca.style.top = a.y + this.K.Ga.height + "px"
    }, ma: function () {
      return this.K.point
    }, V1: function () {
      return this.map.no(this.ma())
    }, va: function (a) {
      this.K.point = a;
      this.draw()
    }, w_: function (a, b) {
      this.K.width = Math.round(a);
      this.K.height = Math.round(b);
      this.ca && (this.ca.style.width = this.K.width + "px", this.ca.style.height = this.K.height + "px", this.draw())
    }
  });

  function ad(a, b, c) {
    a && b && (this.imageUrl = a, this.size = b, a = new N(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new N(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
  }

  A.extend(ad.prototype, {
    UN: function (a) {
      a && (this.imageUrl = a)
    }, N_: function (a) {
      a && (this.printImageUrl = a)
    }, He: function (a) {
      a && (this.size = new N(a.width, a.height))
    }, wc: function (a) {
      a && (this.anchor = new N(a.width, a.height))
    }, au: function (a) {
      a && (this.imageOffset = new N(a.width, a.height))
    }, B_: function (a) {
      a && (this.infoWindowAnchor = new N(a.width, a.height))
    }, y_: function (a) {
      a && (this.imageSize = new N(a.width, a.height))
    }, toString: ea("Icon")
  });

  function bd(a, b) {
    if (a) {
      b = b || {};
      this.style = {
        anchor: b.anchor || new N(0, 0),
        fillColor: b.fillColor || "#000",
        zg: b.fillOpacity || 0,
        scale: b.scale || 1,
        rotation: b.rotation || 0,
        strokeColor: b.strokeColor || "#000",
        zd: b.strokeOpacity || 1,
        tc: b.strokeWeight
      };
      this.Nb = "number" === typeof a ? a : "UserDefined";
      this.Mi = this.style.anchor;
      this.ur = new N(0, 0);
      this.anchor = q;
      this.iB = a;
      var c = this;
      Wa.load("symbol", function () {
        c.Ln()
      }, p)
    }
  }

  A.extend(bd.prototype, {
    setPath: ca("iB"), setAnchor: function (a) {
      this.Mi = this.style.anchor = a
    }, setRotation: function (a) {
      this.style.rotation = a
    }, setScale: function (a) {
      this.style.scale = a
    }, setStrokeWeight: function (a) {
      this.style.tc = a
    }, setStrokeColor: function (a) {
      a = A.ks.rC(a, this.style.zd);
      this.style.strokeColor = a
    }, setStrokeOpacity: function (a) {
      this.style.zd = a
    }, setFillOpacity: function (a) {
      this.style.zg = a
    }, setFillColor: function (a) {
      this.style.fillColor = a
    }
  });

  function cd(a, b, c, e) {
    a && (this.Nv = {}, this.$K = e ? !!e : t, this.$c = [], this.f0 = a instanceof bd ? a : q, this.EI = b === l ? p : !!(b.indexOf("%") + 1), this.jk = isNaN(parseFloat(b)) ? 1 : this.EI ? parseFloat(b) / 100 : parseFloat(b), this.FI = !!(c.indexOf("%") + 1), this.repeat = c != l ? this.FI ? parseFloat(c) / 100 : parseFloat(c) : 0)
  };

  function dd(a, b) {
    A.lang.Ja.call(this);
    this.content = a;
    this.map = q;
    b = b || {};
    this.K = {
      width: b.width || 0,
      height: b.height || 0,
      maxWidth: b.maxWidth || 730,
      Ga: b.offset || new N(0, 0),
      title: b.title || "",
      FE: b.maxContent || "",
      oh: b.enableMaximize || t,
      Ms: b.enableAutoPan === t ? t : p,
      YC: b.enableCloseOnClick === t ? t : p,
      margin: b.margin || [10, 10, 40, 10],
      nC: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
      rY: t,
      wZ: b.onClosing || ea(p),
      TK: t,
      cD: b.enableParano === p ? p : t,
      message: b.message,
      fD: b.enableSearchTool === p ? p : t,
      Ex: b.headerContent || "",
      ZC: b.enableContentScroll || t
    };
    if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220), 730 < this.K.width)) this.K.width = 730;
    if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60), 650 < this.K.height)) this.K.height = 650;
    if (0 != this.K.maxWidth && (220 > this.K.maxWidth && (this.K.maxWidth = 220), 730 < this.K.maxWidth)) this.K.maxWidth = 730;
    this.me = t;
    this.Hi = I.ua;
    this.ub = q;
    var c = this;
    Wa.load("infowindow", function () {
      c.ob()
    })
  }

  A.lang.xa(dd, A.lang.Ja, "InfoWindow");
  A.extend(dd.prototype, {
    setWidth: function (a) {
      !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.width = a)
    }, setHeight: function (a) {
      !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.K.height = a)
    }, YN: function (a) {
      !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.maxWidth = a)
    }, Hc: function (a) {
      this.K.title = a
    }, getTitle: function () {
      return this.K.title
    }, Pc: ca("content"), Dk: x("content"), cu: function (a) {
      this.K.FE = a + ""
    }, re: u(), Ms: function () {
      this.K.Ms = p
    }, disableAutoPan: function () {
      this.K.Ms = t
    }, enableCloseOnClick: function () {
      this.K.YC = p
    }, disableCloseOnClick: function () {
      this.K.YC = t
    }, oh: function () {
      this.K.oh = p
    }, $w: function () {
      this.K.oh = t
    }, show: function () {
      this.Wa = p
    }, aa: function () {
      this.Wa = t
    }, close: function () {
      this.aa()
    }, Zx: function () {
      this.me = p
    }, restore: function () {
      this.me = t
    }, Uc: function () {
      return this.eb()
    }, eb: ea(t), ma: function () {
      if (this.ub && this.ub.ma) return this.ub.ma()
    }, sj: function () {
      return this.K.Ga
    }
  });
  Oa.prototype.Vc = function (a, b) {
    if (a instanceof dd && (b instanceof Q || b instanceof L)) {
      var c = this.ba;
      c.Om ? c.Om.va(b) : (c.Om = new W(b, {
        icon: new ad(I.ua + "blank.gif", {width: 1, height: 1}),
        offset: new N(0, 0),
        clickable: t
      }), c.Om.BR = 1);
      this.Ra(c.Om);
      c.Om.Vc(a)
    }
  };
  Oa.prototype.Mc = function () {
    var a = this.ba.tb || this.ba.yl;
    a && a.ub && a.ub.Mc()
  };
  kb.prototype.Vc = function (a) {
    this.map && (this.map.Mc(), a.Wa = p, this.map.ba.yl = a, a.ub = this, A.lang.Ja.call(a, a.da))
  };
  kb.prototype.Mc = function () {
    this.map && this.map.ba.yl && (this.map.ba.yl.Wa = t, A.lang.Yw(this.map.ba.yl.da), this.map.ba.yl = q)
  };

  function ed(a, b) {
    kb.call(this);
    this.content = a;
    this.ca = this.map = q;
    b = b || {};
    this.K = {
      width: 0,
      Ga: b.offset || new N(0, 0),
      hq: {
        backgroundColor: "#fff",
        border: "1px solid #f00",
        padding: "1px",
        whiteSpace: "nowrap",
        font: "12px " + I.fontFamily,
        zIndex: "80",
        MozUserSelect: "none"
      },
      position: b.position || q,
      qj: b.enableMassClear === t ? t : p,
      mf: p,
      left: b.left === p ? p : t,
      right: b.right === p ? p : t
    };
    0 > this.K.width && (this.K.width = 0);
    Lb(b.enableClicking) && (this.K.mf = b.enableClicking);
    this.point = this.K.position;
    var c = this;
    Wa.load("marker", function () {
      c.ob()
    })
  }

  A.lang.xa(ed, kb, "Label");
  A.extend(ed.prototype, {
    ma: function () {
      return this.ho ? this.ho.ma() : this.map ? eb(this.point, this.map.M.Ma) : this.point
    }, bk: function () {
      return this.ho ? this.ho.bk() : this.point
    }, va: function (a) {
      if ((a instanceof Q || a instanceof L) && !this.tx()) this.point = this.K.position = new Q(a.lng, a.lat)
    }, Pc: ca("content"), pF: function (a) {
      0 <= a && 1 >= a && (this.K.opacity = a)
    }, Rd: function (a) {
      a instanceof N && (this.K.Ga = new N(a.width, a.height))
    }, sj: function () {
      return this.K.Ga
    }, Td: function (a) {
      a = a || {};
      this.K.hq = A.extend(this.K.hq, a)
    }, Ci: function (a) {
      return this.Td(a)
    }, Hc: function (a) {
      this.K.title = a || ""
    }, getTitle: function () {
      return this.K.title
    }, XN: function (a) {
      this.point = (this.ho = a) ? this.K.position = a.bk() : this.K.position = q
    }, tx: function () {
      return this.ho || q
    }, Dk: x("content")
  });

  function fd(a, b) {
    if (0 !== arguments.length) {
      kb.apply(this, arguments);
      b = b || {};
      this.K = {
        jb: a,
        opacity: b.opacity || 1,
        yp: b.imageURL || "",
        Ds: b.displayOnMinLevel || 1,
        qj: b.enableMassClear === t ? t : p,
        Cs: b.displayOnMaxLevel || 19,
        $_: b.stretch || t
      };
      0 === b.opacity && (this.K.opacity = 0);
      var c = this;
      Wa.load("groundoverlay", function () {
        c.ob()
      })
    }
  }

  A.lang.xa(fd, kb, "GroundOverlay");
  A.extend(fd.prototype, {
    setBounds: function (a) {
      this.K.jb = a
    }, getBounds: function () {
      return this.K.jb
    }, setOpacity: function (a) {
      this.K.opacity = a
    }, getOpacity: function () {
      return this.K.opacity
    }, setImageURL: function (a) {
      this.K.yp = a
    }, getImageURL: function () {
      return this.K.yp
    }, setDisplayOnMinLevel: function (a) {
      this.K.Ds = a
    }, getDisplayOnMinLevel: function () {
      return this.K.Ds
    }, setDisplayOnMaxLevel: function (a) {
      this.K.Cs = a
    }, getDisplayOnMaxLevel: function () {
      return this.K.Cs
    }
  });
  var gd = 3, hd = 4;

  function id() {
    var a = document.createElement("canvas");
    return !(!a.getContext || !a.getContext("2d"))
  }

  function jd(a, b) {
    var c = this;
    id() && (a === l && ba(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && ba(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {}, kb.apply(c, arguments), c.ia = {ja: a}, c.K = {
      shape: b.shape || gd,
      size: b.size || hd,
      color: b.color || "#fa937e",
      qj: p
    }, this.fB = [], this.ue = [], Wa.load("pointcollection", function () {
      for (var a = 0, b; b = c.fB[a]; a++) c[b.method].apply(c, b.arguments);
      for (a = 0; b = c.ue[a]; a++) c[b.method].apply(c, b.arguments)
    }))
  }

  A.lang.xa(jd, kb, "PointCollection");
  A.extend(jd.prototype, {
    initialize: function (a) {
      this.fB && this.fB.push({method: "initialize", arguments: arguments})
    }, setPoints: function (a) {
      this.ue && this.ue.push({method: "setPoints", arguments: arguments})
    }, setStyles: function (a) {
      this.ue && this.ue.push({method: "setStyles", arguments: arguments})
    }, clear: function () {
      this.ue && this.ue.push({method: "clear", arguments: arguments})
    }, remove: function () {
      this.ue && this.ue.push({method: "remove", arguments: arguments})
    }
  });
  var kd = new ad(I.ua + "marker_red_sprite.png", new N(19, 25), {
    anchor: new N(10, 25),
    infoWindowAnchor: new N(10, 0)
  }), ld = new ad(I.ua + "marker_red_sprite.png", new N(20, 11), {anchor: new N(6, 11), imageOffset: new N(-19, -13)});

  function W(a, b) {
    kb.call(this);
    b = b || {};
    this.point = a;
    this.Ma = (this.Eq = this.map = q) ? this.map.M.Ma : 5;
    this.K = {
      Ga: b.offset || new N(0, 0),
      Be: b.icon || kd,
      Yk: ld,
      title: b.title || "",
      label: q,
      YJ: b.baseZIndex || 0,
      mf: p,
      K6: t,
      rE: t,
      qj: b.enableMassClear === t ? t : p,
      jc: t,
      BN: b.raiseOnDrag === p ? p : t,
      IN: t,
      Kd: b.draggingCursor || I.Kd,
      rotation: b.rotation || 0,
      left: b.left === p ? p : t,
      right: b.right === p ? p : t
    };
    b.icon && !b.shadow && (this.K.Yk = q);
    b.enableDragging && (this.K.jc = b.enableDragging);
    Lb(b.enableClicking) && (this.K.mf = b.enableClicking);
    var c = this;
    Wa.load("marker", function () {
      c.ob()
    })
  }

  W.Ou = Wc.Kk(-90) + 1E6;
  W.pG = W.Ou + 1E6;
  A.lang.xa(W, kb, "Marker");
  A.extend(W.prototype, {
    Wb: function (a) {
      if (a instanceof ad || a instanceof bd) this.K.Be = a
    }, lp: function () {
      return this.K.Be
    }, Ey: function (a) {
      a instanceof ad && (this.K.Yk = a)
    }, getShadow: function () {
      return this.K.Yk
    }, Fj: function (a) {
      this.K.label = a || q
    }, Ys: function () {
      return this.K.label
    }, jc: function () {
      this.K.jc = p
    }, Bs: function () {
      this.K.jc = t
    }, bk: x("point"), ma: function () {
      return this.point instanceof Q || this.point instanceof L ? this.map ? eb(this.point, this.map.M.Ma) : new Q(this.point.lng, this.point.lat) : this.point
    }, va: function (a) {
      if (a instanceof Q || a instanceof L) this.point = this.map ? $a(a, this.map.M.Ma) : new L(a.lng, a.lat)
    }, Di: function (a, b) {
      this.K.rE = !!a;
      a && (this.NG = b || 0)
    }, Hc: function (a) {
      this.K.title = a + ""
    }, getTitle: function () {
      return this.K.title
    }, Rd: function (a) {
      a instanceof N && (this.K.Ga = a)
    }, sj: function () {
      return this.K.Ga
    }, dn: ca("Eq"), Zp: function (a) {
      this.K.rotation = a
    }, CL: function () {
      return this.K.rotation
    }
  });

  function md(a) {
    this.options = a || {};
    this.AZ = this.options.paneName || "labelPane";
    this.zIndex = this.options.zIndex || 0;
    this.HV = this.options.contextType || "2d"
  }

  md.prototype = new Wc;
  md.prototype.initialize = function (a) {
    this.P = a;
    var b = this.canvas = document.createElement("canvas"), c = this.canvas.getContext(this.HV);
    b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
    nd(this);
    od(c);
    a.getPanes()[this.AZ].appendChild(b);
    var e = this;
    a.addEventListener("resize", function () {
      nd(e);
      od(c);
      e.ob()
    });
    return this.canvas
  };

  function nd(a) {
    var b = a.P.zb(), a = a.canvas;
    a.width = b.width;
    a.height = b.height;
    a.style.width = a.width + "px";
    a.style.height = a.height + "px"
  }

  function od(a) {
    var b = (window.devicePixelRatio || 1) / (a.UU || a.F6 || a.c5 || a.d5 || a.h5 || a.UU || 1), c = a.canvas.width,
      e = a.canvas.height;
    a.canvas.width = c * b;
    a.canvas.height = e * b;
    a.canvas.style.width = c + "px";
    a.canvas.style.height = e + "px";
    a.scale(b, b)
  }

  md.prototype.draw = function () {
    var a = this, b = arguments;
    clearTimeout(a.o0);
    a.o0 = setTimeout(function () {
      a.ob.apply(a, b)
    }, 15)
  };
  fa = md.prototype;
  fa.ob = function () {
    var a = this.P;
    this.canvas.style.left = -a.offsetX + "px";
    this.canvas.style.top = -a.offsetY + "px";
    this.dispatchEvent("draw");
    this.options.update && this.options.update.apply(this, arguments)
  };
  fa.Ta = x("canvas");
  fa.show = function () {
    this.canvas || this.P.Ra(this);
    this.canvas.style.display = "block"
  };
  fa.aa = function () {
    this.canvas.style.display = "none"
  };
  fa.cq = function (a) {
    this.canvas.style.zIndex = a
  };
  fa.Kk = x("zIndex");

  function pd(a, b) {
    Zc.call(this, b);
    b = b || {};
    this.K.zg = b.fillOpacity ? b.fillOpacity : 0.65;
    this.K.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
    this.Sd(a);
    var c = this;
    Wa.load("poly", function () {
      c.ob()
    })
  }

  A.lang.xa(pd, Zc, "Polygon");
  A.extend(pd.prototype, {
    Sd: function (a, b) {
      this.Ao = Zc.nx(a).slice(0);
      var c = Zc.nx(a).slice(0);
      1 < c.length && c.push(new Q(c[0].lng, c[0].lat));
      Zc.prototype.Sd.call(this, c, b)
    }, jn: function (a, b) {
      this.Ao[a] && (this.Ao[a] = new Q(b.lng, b.lat), this.ja[a] = new Q(b.lng, b.lat), 0 == a && !this.ja[0].Ub(this.ja[this.ja.length - 1]) && (this.ja[this.ja.length - 1] = new Q(b.lng, b.lat)), this.Hh())
    }, $e: function () {
      var a = this.Ao;
      0 == a.length && (a = this.ja);
      return a
    }
  });

  function qd(a, b) {
    Zc.call(this, b);
    this.Nr(a);
    var c = this;
    Wa.load("poly", function () {
      c.ob()
    })
  }

  A.lang.xa(qd, Zc, "Polyline");

  function rd(a, b, c) {
    this.point = a;
    this.Fa = Math.abs(b);
    pd.call(this, [], c)
  }

  rd.OE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
  A.lang.xa(rd, pd, "Circle");
  A.extend(rd.prototype, {
    initialize: function (a) {
      this.map = a;
      this.ja = this.pv(this.point, this.Fa);
      this.Hh();
      return q
    }, Qb: function () {
      return this.map ? eb(this.point, this.map.M.Ma) : this.point
    }, mv: x("point"), zf: function (a) {
      a && (this.point = a)
    }, AL: x("Fa"), Af: function (a) {
      this.Fa = Math.abs(a)
    }, pv: function (a, b) {
      if (!a || !b || !this.map) return [];
      for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
        var k = Math.PI / 180 * i, m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)),
          k = new Q(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), m * (180 / Math.PI));
        c.push(k)
      }
      e = c[0];
      c.push(new Q(e.lng, e.lat));
      return c
    }
  });
  var sd = {};

  function td(a) {
    this.map = a;
    this.Cj = [];
    this.dg = [];
    this.Qg = [];
    this.iV = 300;
    this.UE = 0;
    this.Ig = {};
    this.jj = {};
    this.Ok = 0;
    this.kE = p;
    this.XV = {};
    this.fo = this.Oq(1);
    this.tg = this.Oq(2);
    this.Il = this.Oq(3);
    this.lg = this.Oq(4);
    a.platform.appendChild(this.fo);
    a.platform.appendChild(this.tg);
    a.platform.appendChild(this.Il);
    a.platform.appendChild(this.lg);
    var b = 256 * Math.pow(2, 15), c = 3 * b, a = T.Ya(new L(180, 0)).lng, c = c - a, b = -3 * b,
      e = T.Ya(new L(-180, 0)).lng;
    this.OA = a;
    this.PA = e;
    this.LA = c + (e - b);
    this.iI = a - e
  }

  D.df(function (a) {
    var b = new td(a);
    b.za();
    a.ef = b
  });
  A.extend(td.prototype, {
    za: function () {
      var a = this, b = a.map;
      b.addEventListener("loadcode", function () {
        a.Fp()
      });
      b.addEventListener("addtilelayer", function (b) {
        a.Ue(b)
      });
      b.addEventListener("removetilelayer", function (b) {
        a.cg(b)
      });
      b.addEventListener("setmaptype", function (b) {
        a.Og(b)
      });
      b.addEventListener("zoomstartcode", function (b) {
        a.Rc(b)
      });
      b.addEventListener("setcustomstyles", function (b) {
        a.bu(b.target);
        a.ag(p)
      });
      b.addEventListener("initindoorlayer", function (b) {
        a.gE(b)
      })
    }, Fp: function () {
      var a = this;
      if (A.ga.oa) try {
        document.execCommand("BackgroundImageCache", t, p)
      } catch (b) {
      }
      this.loaded || a.Lx();
      a.ag();
      this.loaded || (this.loaded = p, Wa.load("tile", function () {
        a.WP()
      }))
    }, gE: function (a) {
      this.Bu = new ud(this);
      this.Bu.Ue(new vd(this.map, this.Bu, a.af))
    }, Lx: function () {
      for (var a = this.map.ya().jf, b = 0; b < a.length; b++) {
        var c = new wd;
        A.extend(c, a[b]);
        this.Cj.push(c);
        c.za(this.map, this.fo)
      }
      this.bu()
    }, Oq: function (a) {
      var b = H("div");
      b.style.position = "absolute";
      b.style.overflow = "visible";
      b.style.left = b.style.top = "0";
      b.style.zIndex = a;
      return b
    }, Ff: function () {
      this.Ok--;
      var a = this;
      this.kE && (this.map.dispatchEvent(new P("onfirsttileloaded")), this.kE = t);
      0 == this.Ok && (this.Ri && (clearTimeout(this.Ri), this.Ri = q), this.Ri = setTimeout(function () {
        if (a.Ok == 0) {
          a.map.dispatchEvent(new P("ontilesloaded"));
          a.kE = p
        }
        a.Ri = q
      }, 80))
    }, TD: function (a, b) {
      return "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
    }, Hx: function (a) {
      var b = a.Hb;
      b && Eb(b) && b.parentNode.removeChild(b);
      delete this.Ig[a.name];
      a.loaded || (xd(a), a.Hb = q, a.Pm = q)
    }, KL: function (a, b, c) {
      var e = this.map, f = e.ya(), g = e.Za, i = e.Vb, k = f.$b(g), m = this.kX(), n = m[0], o = m[1], s = m[2],
        v = m[3], w = m[4], c = "undefined" != typeof c ? c : 0, f = f.Nd(), m = e.da.replace(/^TANGRAM_/, "");
      for (this.Ie ? this.Ie.length = 0 : this.Ie = []; n < s; n++) for (var y = o; y < v; y++) {
        var z = n, B = y;
        this.Ie.push([z, B]);
        z = m + "_" + b + "_" + z + "_" + B + "_" + g;
        this.XV[z] = z
      }
      this.Ie.sort(function (a) {
        return function (b, c) {
          return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
        }
      }([w[0] - 1, w[1] - 1]));
      i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
      n = -e.offsetY + e.height / 2;
      a.style.left = -e.offsetX + e.width / 2 + "px";
      a.style.top = n + "px";
      this.Ve ? this.Ve.length = 0 : this.Ve = [];
      n = 0;
      for (e = a.childNodes.length; n < e; n++) y = a.childNodes[n], y.mr = t, this.Ve.push(y);
      if (n = this.Tm) for (var C in n) delete n[C]; else this.Tm = {};
      this.We ? this.We.length = 0 : this.We = [];
      n = 0;
      for (e = this.Ie.length; n < e; n++) {
        C = this.Ie[n][0];
        k = this.Ie[n][1];
        y = 0;
        for (o = this.Ve.length; y < o; y++) if (s = this.Ve[y], s.id == m + "_" + b + "_" + C + "_" + k + "_" + g) {
          s.mr = p;
          this.Tm[s.id] = s;
          break
        }
      }
      n = 0;
      for (e = this.Ve.length; n < e; n++) s = this.Ve[n], s.mr || this.We.push(s);
      this.IF = [];
      y = (f + c) * this.map.M.devicePixelRatio;
      n = 0;
      for (e = this.Ie.length; n < e; n++) C = this.Ie[n][0], k = this.Ie[n][1], v = C * f + i[0] - c / 2, w = (-1 - k) * f + i[1] - c / 2, z = m + "_" + b + "_" + C + "_" + k + "_" + g, o = this.Tm[z], s = q, o ? (s = o.style, s.left = v + "px", s.top = w + "px", o.Tn || this.IF.push([C, k, o])) : (0 < this.We.length ? (o = this.We.shift(), o.getContext("2d").clearRect(-c / 2, -c / 2, y, y), s = o.style) : (o = document.createElement("canvas"), s = o.style, s.position = "absolute", s.width = f + c + "px", s.height = f + c + "px", this.RY() && (s.WebkitTransform = "scale(1.001)"), o.setAttribute("width", y), o.setAttribute("height", y), a.appendChild(o)), o.id = z, s.left = v + "px", s.top = w + "px", -1 < z.indexOf("bg") && (v = "#F3F1EC", this.map.M.SU && (v = this.map.M.SU), s.background = v ? v : ""), this.IF.push([C, k, o])), o.style.visibility = "";
      n = 0;
      for (e = this.We.length; n < e; n++) this.We[n].style.visibility = "hidden";
      return this.IF
    }, RY: function () {
      return /M040/i.test(navigator.userAgent)
    }, kX: function () {
      var a = this.map, b = a.ya(), c = b.PL(a.Za), e = a.Vb, f = Math.ceil(e.lng / c), g = Math.ceil(e.lat / c),
        b = b.Nd(), c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
      return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
    }, U_: function (a, b, c, e) {
      var f = this;
      f.J2 = b;
      var g = this.map.ya(), i = f.TD(a, c), k = g.Nd(), b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]], m = this.Ig[i];
      if (this.map.ya() !== cb && this.map.ya() !== Ua) {
        var n = this.Hw(a[0], a[2]).offsetX;
        b[0] += n;
        b.c2 = n
      }
      m && m.Hb ? (Cb(m.Hb, b), e && (e = new R(a[0], a[1]), g = this.map.M.De ? this.map.M.De.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, yd(m, e)), m.loaded ? this.Ff() : zd(m, function () {
        f.Ff()
      })) : (m = this.jj[i]) && m.Hb ? (c.Kb.insertBefore(m.Hb, c.Kb.lastChild), this.Ig[i] = m, Cb(m.Hb, b), e && (e = new R(a[0], a[1]), g = this.map.M.De ? this.map.M.De.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, yd(m, e)), m.loaded ? this.Ff() : zd(m, function () {
        f.Ff()
      })) : (m = k * Math.pow(2, g.Ze() - a[2]), new L(a[0] * m, a[1] * m), e = new R(a[0], a[1]), g = this.map.M.De ? this.map.M.De.style : "normal", e = c.getTilesUrl(e, a[2], g), m = new Ad(this, e, b, a, c), zd(m, function () {
        f.Ff()
      }), m.eo(), this.Ig[i] = m)
    }, Ff: function () {
      this.Ok--;
      var a = this;
      0 == this.Ok && (this.Ri && (clearTimeout(this.Ri), this.Ri = q), this.Ri = setTimeout(function () {
        if (a.Ok == 0) {
          a.map.dispatchEvent(new P("ontilesloaded"));
          if (xa) {
            if (ua && va && wa) {
              var b = gb(), c = a.map.zb();
              setTimeout(function () {
                Ta(5030, {
                  load_script_time: va - ua,
                  load_tiles_time: b - wa,
                  map_width: c.width,
                  map_height: c.height,
                  map_size: c.width * c.height
                })
              }, 1E4);
              D.Cq("cus.fire", "time", {z_imgfirstloaded: b - wa})
            }
            xa = t
          }
        }
        a.Ri = q
      }, 80))
    }, TD: function (a, b) {
      return this.map.ya() === Sa ? "TILE-" + b.da + "-" + this.map.Mw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
    }, Hx: function (a) {
      var b = a.Hb;
      b && (Bd(b), Eb(b) && b.parentNode.removeChild(b));
      delete this.Ig[a.name];
      a.loaded || (Bd(b), xd(a), a.Hb = q, a.Pm = q)
    }, Hw: function (a, b) {
      for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f;) a -= e, c -= this.LA;
      for (; a < g;) a += e, c += this.LA;
      c = Math.round(c / Math.pow(2, 18 - b));
      return {offsetX: c, nm: a}
    }, mV: function (a) {
      for (var b = a.lng; b > this.OA;) b -= this.iI;
      for (; b < this.PA;) b += this.iI;
      a.lng = b;
      return a
    }, nV: function (a, b) {
      for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.OA / c), f = Math.floor(this.PA / c), c = Math.floor(this.LA / c), g = [], i = 0; i < a.length; i++) {
        var k = a[i], m = k[0], k = k[1];
        if (m >= e) {
          var m = m + c, n = "id_" + m + "_" + k + "_" + b;
          a[n] || (a[n] = p, g.push([m, k]))
        } else m <= f && (m -= c, n = "id_" + m + "_" + k + "_" + b, a[n] || (a[n] = p, g.push([m, k])))
      }
      for (i = 0; i < g.length; i++) a.push(g[i]);
      return a
    }, ag: function (a) {
      if (!this.map.M.yg) {
        var b = this;
        if (b.map.ya() == Sa) Wa.load("coordtrans", function () {
          b.map.Ob || (b.map.Ob = Sa.Ck(b.map.lh), b.map.Mw = Sa.mL(b.map.Ob));
          b.kI()
        }, p); else {
          if (a && a) for (var c in this.jj) delete this.jj[c];
          b.kI(a)
        }
      }
    }, kI: function (a) {
      var b = this.Cj.concat(this.dg), c = b.length, e = this.map, f = e.ya(), g = e.Vb, i = e.width,
        i = e.ya().$b(e.Za) * i, i = this.HY(g.lng - i / 2, g.lng + i / 2);
      this.map.ya() !== cb && this.map.ya() !== Ua && (g = this.mV(g));
      for (var k = 0; k < c; k++) {
        var m = b[k];
        if (m.kc && e.Za < m.kc) break;
        if (m.Gw) {
          var n = this.Kb = m.Kb;
          if (a) {
            var o = n;
            if (o && o.childNodes) for (var s = o.childNodes.length, v = s - 1; 0 <= v; v--) s = o.childNodes[v], o.removeChild(s), s = q
          }
          if (this.map.Vd()) {
            this.tg.style.display = "block";
            n.style.display = "none";
            this.map.dispatchEvent(new P("vectorchanged"), {isvector: p});
            continue
          } else n.style.display = "block", this.tg.style.display = "none", this.map.dispatchEvent(new P("vectorchanged"), {isvector: t})
        }
        if (!m.b2 && !(m.Rx && !this.map.Vd() || m.nM && this.map.Vd())) {
          e = this.map;
          f = e.ya();
          n = f.uj();
          s = e.Za;
          g = e.Vb;
          f == Sa && g.Ub(new L(0, 0)) && (g = e.Vb = n.ri(e.he, e.Ob));
          var w = f.$b(s), n = f.PL(s), o = Math.ceil(g.lng / n), y = Math.ceil(g.lat / n), z = f.Nd(),
            n = [o, y, (g.lng - o * n) / n * z, (g.lat - y * n) / n * z], y = i ? 1.5 * (e.width / 2) : e.width / 2,
            v = n[0] - Math.ceil((y - n[2]) / z), o = n[1] - Math.ceil((e.height / 2 - n[3]) / z),
            y = n[0] + Math.ceil((y + n[2]) / z), B = 0;
          f === Sa && 15 == e.la() && (B = 1);
          f = n[1] + Math.ceil((e.height / 2 + n[3]) / z) + B;
          this.TJ = new L(g.lng, g.lat);
          var C = this.Ig, z = -this.TJ.lng / w, B = this.TJ.lat / w, g = [Math.ceil(z), Math.ceil(B)], w = e.la(), E;
          for (E in C) {
            var F = C[E], G = F.info;
            (G[2] != w || G[2] == w && (v > G[0] || y <= G[0] || o > G[1] || f <= G[1])) && this.Hx(F)
          }
          C = -e.offsetX + e.width / 2;
          F = -e.offsetY + e.height / 2;
          m.Kb && (m.Kb.style.left = Math.ceil(z + C) - g[0] + "px", m.Kb.style.top = Math.ceil(B + F) - g[1] + "px", m.Kb.style.WebkitTransform = "translate3d(0,0,0)");
          z = [];
          for (e.KB = []; v < y; v++) for (B = o; B < f; B++) z.push([v, B]), e.KB.push({x: v, y: B});
          this.map.ya() !== cb && this.map.ya() !== Ua && (z = this.nV(z, s));
          z.sort(function (a) {
            return function (b, c) {
              return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
          }([n[0] - 1, n[1] - 1]));
          s = z.length;
          this.Ok += s;
          for (v = 0; v < s; v++) this.U_([z[v][0], z[v][1], w], g, m, a)
        }
      }
    }, HY: function (a, b) {
      return a < this.PA || b > this.OA
    }, Ue: function (a) {
      var b = this, c = a.target;
      b.map.Vd();
      c.vn && this.map.Ue(c.vn);
      if (c.Rx) {
        for (a = 0; a < b.Qg.length; a++) if (b.Qg[a] == c) return;
        Wa.load("vector", function () {
          c.za(b.map, b.tg);
          b.Qg.push(c)
        }, p)
      } else {
        for (a = 0; a < b.dg.length; a++) if (b.dg[a] == c) return;
        c.za(this.map, this.Il);
        b.dg.push(c)
      }
    }, cg: function (a) {
      a = a.target;
      this.map.Vd();
      a.vn && this.map.cg(a.vn);
      if (a.Rx) for (var b = 0, c = this.Qg.length; b < c; b++) a == this.Qg[b] && this.Qg.splice(b, 1); else {
        b = 0;
        for (c = this.dg.length; b < c; b++) a == this.dg[b] && this.dg.splice(b, 1)
      }
      a.remove()
    }, Og: function () {
      for (var a = this.Cj, b = 0, c = a.length; b < c; b++) a[b].remove();
      delete this.Kb;
      this.Cj = [];
      this.jj = this.Ig = {};
      this.Lx();
      this.ag()
    }, Rc: function () {
      var a = this;
      a.Bd && A.U.aa(a.Bd);
      setTimeout(function () {
        a.ag();
        a.map.dispatchEvent(new P("onzoomend"))
      }, 10)
    }, y6: u(), bu: function (a) {
      var b = this.map.ya();
      if (!this.map.Vd() && (a ? this.map.M.c0 = a : a = this.map.M.c0, a)) for (var c = q, c = "2" == D.Au ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] + "/"] : ['', D.url.proto + D.url.domain.main_domain_cdn.baidu[1] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.Cj[e]; e++) if (f.P_ == p) {
        b.m.qc = 18;
        f.getTilesUrl = function (b, e) {
          var f = b.x, f = this.map.ef.Hw(f, e).nm, m = b.y, n = Vb("normal"), o = 1;
          this.map.Ix() && (o = 2);
          n = "customimage/tile?&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + ra;
          n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
          return c[Math.abs(f + m) % c.length] + n
        };
        break
      }
    }
  });

  function Ad(a, b, c, e, f) {
    this.Pm = a;
    this.position = c;
    this.Zu = [];
    this.name = a.TD(e, f);
    this.info = e;
    this.vJ = f.At();
    e = H("img");
    Db(e);
    e.fL = t;
    var g = e.style, a = a.map.ya();
    g.position = "absolute";
    g.border = "none";
    g.width = a.Nd() + "px";
    g.height = a.Nd() + "px";
    g.left = c[0] + "px";
    g.top = c[1] + "px";
    g.maxWidth = "none";
    this.Hb = e;
    this.src = b;
    Cd && (this.Hb.style.opacity = 0);
    var i = this;
    this.Hb.onload = function () {
      D.ZY.JQ();
      i.loaded = p;
      if (i.Pm) {
        var a = i.Pm, b = a.jj;
        if (!b[i.name]) {
          a.UE++;
          b[i.name] = i
        }
        if (i.Hb && !Eb(i.Hb) && f.Kb) {
          f.Kb.appendChild(i.Hb);
          if (A.ga.oa <= 6 && A.ga.oa > 0 && i.vJ) i.Hb.style.cssText = i.Hb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
        }
        var c = a.UE - a.iV, e;
        for (e in b) {
          if (c <= 0) break;
          if (!a.Ig[e]) {
            b[e].Pm = q;
            var g = b[e].Hb;
            if (g && g.parentNode) {
              g.parentNode.removeChild(g);
              Bd(g)
            }
            g = q;
            b[e].Hb = q;
            delete b[e];
            a.UE--;
            c--
          }
        }
        Cd && new yb({
          Nc: 20, duration: 200, Ba: function (a) {
            if (i.Hb && i.Hb.style) i.Hb.style.opacity = a * 1
          }, finish: function () {
            i.Hb && i.Hb.style && delete i.Hb.style.opacity
          }
        });
        xd(i)
      }
    };
    this.Hb.onerror = function () {
      xd(i);
      if (i.Pm) {
        var a = i.Pm.map.ya();
        if (a.m.iD) {
          i.error = p;
          i.Hb.src = a.m.iD;
          i.Hb && !Eb(i.Hb) && f.Kb.appendChild(i.Hb)
        }
      }
    };
    e = q
  }

  function zd(a, b) {
    a.Zu.push(b)
  }

  Ad.prototype.eo = function () {
    this.Hb.src = 0 < A.ga.oa && 6 >= A.ga.oa && this.vJ ? I.ua + "blank.gif" : "" !== this.src && this.Hb.src == this.src ? this.src + "&t = " + Date.now() : this.src
  };

  function xd(a) {
    for (var b = 0; b < a.Zu.length; b++) a.Zu[b]();
    a.Zu.length = 0
  }

  function Bd(a) {
    if (a) {
      a.onload = a.onerror = q;
      var b = a.attributes, c, e, f;
      if (b) {
        e = b.length;
        for (c = 0; c < e; c += 1) f = b[c].name, bb(a[f]) && (a[f] = q)
      }
      if (b = a.children) {
        e = b.length;
        for (c = 0; c < e; c += 1) Bd(a.children[c])
      }
    }
  }

  function yd(a, b) {
    a.src = b;
    a.eo()
  }

  var Cd = !A.ga.oa || 8 < A.ga.oa;

  function wd(a) {
    this.af = a || {};
    this.JV = this.af.copyright || q;
    this.G0 = this.af.transparentPng || t;
    this.Gw = this.af.baseLayer || t;
    this.zIndex = this.af.zIndex || 0;
    this.da = wd.sS++
  }

  wd.sS = 0;
  A.lang.xa(wd, A.lang.Ja, "TileLayer");
  A.extend(wd.prototype, {
    za: function (a, b) {
      this.Gw && (this.zIndex = -100);
      this.map = a;
      if (!this.Kb) {
        var c = H("div"), e = c.style;
        e.position = "absolute";
        e.overflow = "visible";
        e.zIndex = this.zIndex;
        e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
        e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
        b.appendChild(c);
        this.Kb = c
      }
    }, remove: function () {
      this.Kb && this.Kb.parentNode && (this.Kb.innerHTML = "", this.Kb.parentNode.removeChild(this.Kb));
      delete this.Kb
    }, At: x("G0"), getTilesUrl: function (a, b) {
      if (this.map.ya() !== cb && this.map.ya() !== Ua) var c = this.map.ef.Hw(a.x, b).nm;
      var e = "";
      this.af.tileUrlTemplate && (e = this.af.tileUrlTemplate.replace(/\{X\}/, c), e = e.replace(/\{Y\}/, a.y), e = e.replace(/\{Z\}/, b));
      return e
    }, xm: x("JV"), ya: function () {
      return this.Ua || Pa
    }
  });

  function Dd(a) {
    wd.call(this, a);
    this.m = a || {};
    this.nM = p;
    if (this.m.predictDate) {
      if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday) this.m.predictDate = 1;
      if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour) this.m.predictDate.hour = 0
    }
    this.sU = D.url.proto + D.url.domain.traffic + "/traffic/"
  }

  Dd.prototype = new wd;
  Dd.prototype.za = function (a, b) {
    wd.prototype.za.call(this, a, b);
    this.P = a
  };
  Dd.prototype.At = ea(p);
  Dd.prototype.getTilesUrl = function (a, b) {
    var c = "";
    this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c += "label=web2D&v=016&");
    var c = this.sU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y, e = 1;
    this.P.Ix() && (e = 2);
    return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
  };
  var Ed = [D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[1] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
    Fd = D.url.proto + D.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle", Gd = 100;

  function sb(a, b) {
    wd.call(this);
    var c = this;
    this.nM = p;
    try {
      document.createElement("canvas").getContext("2d")
    } catch (e) {
    }
    Mb(a) ? b = a || {} : (c.Rn = a, b = b || {});
    b.geotableId && (c.If = b.geotableId);
    b.databoxId && (c.Rn = b.databoxId);
    var f = D.td + "geosearch";
    c.fb = {
      vN: b.pointDensity || Gd,
      mY: f + "/detail/",
      nY: f + "/v2/detail/",
      QJ: b.age || 36E5,
      Ut: b.q || "",
      n0: "png",
      w4: [5, 5, 5, 5],
      VY: {backgroundColor: "#FFFFD5", borderColor: "#808080"},
      YB: b.ak || ra,
      rO: b.tags || "",
      filter: b.filter || "",
      iO: b.sortby || "",
      ZD: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
      SF: p
    };
    Wa.load("clayer", function () {
      c.Dd()
    })
  }

  sb.prototype = new wd;
  sb.prototype.za = function (a, b) {
    wd.prototype.za.call(this, a, b);
    this.P = a
  };
  sb.prototype.getTilesUrl = function (a, b) {
    var c = a.x, e = a.y, f = this.fb,
      c = Ed[Math.abs(c + e) % Ed.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.Ut + "&tags=" + f.rO + "&filter=" + f.filter + "&sortby=" + f.iO + "&ak=" + this.fb.YB + "&age=" + f.QJ + "&page_size=" + f.vN + "&format=" + f.n0;
    f.SF || (f = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + f);
    this.If ? c += "&geotable_id=" + this.If : this.Rn && (c += "&databox_id=" + this.Rn);
    return c
  };
  sb.prototype.enableUseCache = function () {
    this.fb.SF = p
  };
  sb.prototype.disableUseCache = function () {
    this.fb.SF = t
  };
  sb.RT = /^point\(|\)$/ig;
  sb.ST = /\s+/;
  sb.UT = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  var Hd = {};

  function Id(a, b) {
    this.nd = a;
    this.ZP = 18;
    this.m = {Py: 256, Fc: new T};
    A.extend(this.m, b || {})
  }

  var Jd = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
    Kd = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
    Ld = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19],
    Md = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
  Id.prototype = {
    getName: x("nd"), Nd: function (a) {
      return "na" === this.nd ? Md[a] : this.m.Py
    }, Ws: function (a) {
      return "na" === this.nd ? Ld[a] : a
    }, uj: function () {
      return this.m.Fc
    }, $b: function (a) {
      return Math.pow(2, this.ZP - a)
    }, LD: function (a) {
      return "na" === this.nd ? Kd[Jd[a]] : this.$b(a) * this.Nd(a)
    }
  };
  var Nd = {
    drawPoly: function (a, b, c, e, f, g) {
      var i = a[1];
      if (i) for (var a = a[6], k = 0; k < i.length; k++) {
        var m = i[k][0], n = f.wj(m, "polygon", c, g);
        if (n && n.length) for (var o = i[k][1], s = 0; s < o.length; s++) {
          var v = o[s][1];
          f.Uc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.Vm(v[1], c, e, a)), v = v["cache" + c], f.P.Fo(b.canvas.id, v, {
            type: "polygon",
            Xb: m,
            style: n
          }), this.AW(b, v, n, c))
        }
      }
    }, AW: function (a, b, c, e) {
      c = c[0];
      if (!c.Xb || !(6 < e && (71013 === c.Xb || 71012 === c.Xb || 71011 === c.Xb) || 6 === e && (71011 === c.Xb || 71012 === c.Xb) || 5 === e && (71011 === c.Xb || 71013 === c.Xb) || 5 > e && (71012 === c.Xb || 71013 === c.Xb))) {
        a.fillStyle = c.hx;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
        a.closePath();
        c.borderWidth && (a.strokeStyle = c.Lo, a.lineWidth = c.borderWidth / 2, a.stroke());
        a.fill()
      }
    }, drawGaoqingRoadBorder: function (a, b, c, e, f) {
      var g = a[1];
      if (g) for (var a = a[6], i = 0; i < g.length; i++) {
        var k = g[i][0], m = f.wj(k, "polygon", c);
        if (m && m.length && m[0].borderWidth) for (var n = g[i][1], o = 0; o < n.length; o++) {
          var s = n[o][1];
          f.Uc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.Vm(s[1], c, e, a)), s = s["cache" + c], f.P.Fo(b.canvas.id, s, {
            type: "polygon",
            Xb: k,
            style: m
          }), this.DW(b, s, m))
        }
      }
    }, drawGaoqingRoadFill: function (a, b, c, e, f) {
      var g = a[1];
      if (g) for (var a = a[6], i = 0; i < g.length; i++) {
        var k = g[i][0], m = f.wj(k, "polygon", c);
        if (m && m.length) for (var n = g[i][1], o = 0; o < n.length; o++) {
          var s = n[o][1];
          f.Uc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.Vm(s[1], c, e, a)), s = s["cache" + c], f.P.Fo(b.canvas.id, s, {
            type: "polygon",
            Xb: k,
            style: m
          }), this.EW(b, s, m))
        }
      }
    }, DW: function (a, b, c) {
      c = c[0];
      a.beginPath();
      a.moveTo(b[0], b[1]);
      for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
      a.closePath();
      a.strokeStyle = c.Lo;
      a.lineWidth = c.borderWidth / 2;
      a.stroke()
    }, EW: function (a, b, c) {
      a.fillStyle = c[0].hx;
      a.beginPath();
      a.moveTo(b[0], b[1]);
      for (var c = 2, e = b.length; c < e; c += 2) a.lineTo(b[c], b[c + 1]);
      a.closePath();
      a.fill()
    }
  };
  var Od = {
    drawArrow: function (a, b, c, e, f, g) {
      b.lineWidth = 1.5;
      b.lineCap = "butt";
      b.lineJoin = "miter";
      b.strokeStyle = "rgba(153,153,153,1)";
      var i = a[7];
      if (i) {
        a = i[1];
        e = g.Vm(i[0], c, e);
        for (i = 0; i < a.length; i++) if (g.Uc(a[i], c)) {
          var k = e[4 * i], m = e[4 * i + 1], n = e[4 * i + 2], o = e[4 * i + 3], s = (k + n) / 2, v = (m + o) / 2,
            n = (k - n) / f, o = (m - o) / f, k = s + n / 2, n = s - n / 2, m = v + o / 2, o = v - o / 2;
          this.tW(b, k, m, n, o)
        }
      }
    }, tW: function (a, b, c, e, f) {
      a.beginPath();
      a.moveTo(b, c);
      a.lineTo(e, f);
      a.stroke();
      c = this.jV([b, c], [e, f]);
      b = c[0];
      c = c[1];
      a.beginPath();
      a.moveTo(b[0], b[1]);
      a.lineTo(c[0], c[1]);
      a.lineTo(e, f);
      a.closePath();
      a.stroke()
    }, jV: function (a, b) {
      var c = b[0] - a[0], e = b[1] - a[1], f = 1.8 * Math.sqrt(c * c + e * e), g = b[0] + 4.8410665352790705 * (c / f),
        f = b[1] + 4.8410665352790705 * (e / f), c = Math.atan2(e, c) + Math.PI;
      return [[g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)], [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]]
    }
  };
  var Pd = {
    drawHregion: function (a, b, c, e, f) {
      var g = a[1];
      if (g) for (var a = a[6], i = 0; i < g.length; i++) {
        var k = g[i][0], m = f.wj(k, "polygon3d", c);
        if (m && m.length) for (var n = g[i][1], o = 0; o < n.length; o++) {
          var s = n[o][2];
          if (f.Uc(s[0], c)) {
            var v = s[2];
            s["cache" + c] || (s["cache" + c] = f.Vm(s[1], c, e, a));
            s = s["cache" + c];
            f.P.Fo(b.canvas.id, s, {type: "polygon", Xb: k, style: m});
            this.BW(b, s, v, m)
          }
        }
      }
    }, BW: function (a, b, c, e) {
      e = e[0];
      if (!(c < e.filter)) {
        a.fillStyle = e.UW;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
        a.closePath();
        e.borderWidth && (a.strokeStyle = e.Lo, a.lineWidth = e.borderWidth / 2, a.stroke());
        a.fill()
      }
    }
  };
  var Qd = {
    parse: function (a, b, c, e, f) {
      for (var g = e.P, i = g.la(), k = Math.pow(2, 18 - i), m = g.Fc.ri(g.Qb()), n = m.lng, o = m.lat, m = g.zb(), s = m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
        var y = [], z = a[w].l0;
        y.x = z[0];
        y.y = z[1];
        y.J6 = z[2];
        for (var B = (z[0] * c * k - n) / k + s / 2, C = (o - (z[1] + 1) * c * k) / k + v / 2, E = 0; E < a[w].length; E++) a[w][E].tM ? this.rN(a[w][E].tM, z, e, b, c, B, C, i, k, s, v, y) : a[w][E].tY ? this.rN(a[w][E].tY, z, e, b, c, B, C, i, k, s, v, y, p, window.A4) : this.GZ(a[w][E].WY, z, e, b, c, B, C, i, k, s, v, y, f);
        m.push(y)
      }
      if (/collision=0/.test(location.search)) {
        a = [];
        for (w = 0; w < m.length; w++) for (E = 0; E < m[w].length; E++) a.push(m[w][E])
      } else a = this.UZ(m, e.P.la());
      g.yV();
      for (w = 0; w < a.length; w++) if (c = a[w], !c.vt) if (E = [c.Zf, c.$f, c.Zf, c.vi, c.ui, c.vi, c.ui, c.$f, c.Zf, c.$f], c.style && g.Fo("poi", E, {
        type: "polygon",
        Xb: c.style.Xb,
        style: c.style
      }), "fixed" === c.type) {
        E = t;
        c.Be && (c.style && 4 === c.direction) && (E = p);
        if (c.Be) if (E) {
          var F = this;
          this.Ks(b, c, e, E, function (a) {
            for (var c = 0; c < a.Bf.length; c++) F.NK(b, a.Bf[c].ie, a.Bf[c].je, a.Bf[c].text, a.style, e)
          })
        } else this.Ks(b, c, e);
        if (c.style && !E) for (E = 0; E < c.Bf.length; E++) this.NK(b, c.Bf[E].ie, c.Bf[E].je, c.Bf[E].text, c.style, e)
      } else if ("line" === c.type) for (E = 0; E < c.ZO.length; E++) f = c.ZO[E], Qd.wW(b, f.ie, f.je, f.NU, f.XO, f.width, f.height, c.style, e);
      return m
    }, rN: function (a, b, c, e, f, g, i, k, m, n, o, s, v, w) {
      if (a = a[1]) for (b = 0; b < a.length; b++) {
        var y = a[b], z = y[0], B = c.wj(z, "point", k, w), z = c.wj(z, "pointText", k, w), y = y[1], C = q, E = 100,
          F = 0, G = 0;
        B && B[0] && (B = B[0], C = B.Be, E = B.zoom || 100);
        z = z && z[0] ? z[0] : q;
        for (B = 0; B < y.length; B++) {
          var K = y[B][4];
          if (K && c.Uc(K[2], k)) {
            var O = Math.round(K[0] / 100) / m + g, M = f - Math.round(K[1] / 100) / m + i;
            if (v || !(-50 > O || -50 > M || O > n + 50 || M > o + 50)) {
              var S = K[7] || "",
                da = {type: "fixed", uid: K[3] || "", name: S, uy: K[4], lt: q, Bf: [], gy: [O, M], style: z};
              if (C) {
                var aa = window.iconSetInfo_high[C] || window.iconSetInfo_high["MapRes/" + C];
                if (!aa) {
                  var Aa = C.charCodeAt(0);
                  48 <= Aa && 57 >= Aa && (aa = window.iconSetInfo_high["_" + C])
                }
                aa && (F = aa[2], G = aa[3], F = F / 2 * E / 100, G = G / 2 * E / 100, da.lt = {
                  ie: O - F / 2,
                  je: M - G / 2,
                  width: F,
                  height: G
                }, da.Be = C)
              }
              if (z) {
                K = K[5];
                "number" !== typeof K && (K = 0);
                var ta = aa = 0, Aa = (z.fontSize || 12) / 2, Ga = 0.2 * Aa;
                e.font = Qd.mx(z, c);
                var S = S.split("\\"), sa = S.length;
                da.direction = K;
                for (var Va = 0; Va < sa; Va++) {
                  var He = S[Va], Yc = e.measureText(He).width;
                  switch (K) {
                    case 3:
                      ta = M - Aa / 2 * sa - Ga * (sa - 1) / 2;
                      aa = O - Yc - F / 2;
                      ta = ta + Aa * Va + Ga * Va;
                      break;
                    case 1:
                      ta = M - Aa / 2 * sa - Ga * (sa - 1) / 2;
                      aa = O + F / 2;
                      ta = ta + Aa * Va + Ga * Va;
                      break;
                    case 2:
                      ta = M - G / 2 - Aa * sa - Ga * (sa - 1) - Ga;
                      aa = O - Yc / 2;
                      ta = ta + Aa * Va + Ga * Va;
                      break;
                    case 0:
                      ta = M + G / 2 + Ga / 2;
                      aa = O - Yc / 2;
                      ta = ta + Aa * Va + Ga * Va;
                      break;
                    case 4:
                      ta = M - Aa / 2 * sa - Ga * (sa - 1) / 2, aa = O - Yc / 2, ta = ta + Aa * Va + Ga * Va
                  }
                  da.Bf.push({ie: aa, je: ta, width: Yc, height: Aa, text: He})
                }
              }
              s.push(da)
            }
          }
        }
      }
    }, GZ: function (a, b, c, e, f, g, i, k, m, n, o, s, v) {
      b = a[7].length;
      if ((n = c.wj(a[0], "pointText", k)) && n.length) {
        n = n[0];
        e.font = Qd.mx(n, c);
        for (var o = n.fontSize / 2, w = a[1], y = a[2], z = y.split("").length, B = a[4], C = B.slice(0, 2), E = 2; E < B.length; E += 2) C[E] = C[E - 2] + B[E], C[E + 1] = C[E - 1] + B[E + 1];
        for (E = 2; E < B.length; E += 2) 0 === E % (2 * z) || 1 === E % (2 * z) || (C[E] = C[E - 2] + B[E] / v, C[E + 1] = C[E - 1] + B[E + 1] / v);
        for (v = 0; v < b; v++) if (c.Uc(a[7][v], k)) {
          var E = [], F = l, G = l, K = l, O = l, M = y.split("");
          a[6][v] && M.reverse();
          for (var B = 2 * v * z, B = C.slice(B, B + 2 * z), S = 0; S < z; S++) {
            var da = a[5][z * v + S], aa = B[2 * S] / 100 / m + g, Aa = f - B[2 * S + 1] / 100 / m + i, ta = M[S],
              Ga = e.measureText(ta).width;
            if (F === l) F = aa - Ga / 2, G = Aa - o / 2, K = F + Ga, O = G + o; else {
              var sa = aa - Ga / 2, Va = Aa - o / 2;
              sa < F && (F = sa);
              Va < G && (G = Va);
              sa + Ga > K && (K = sa + Ga);
              Va + o > O && (O = Va + o)
            }
            E.push({XO: ta, ie: aa, je: Aa, NU: da, width: Ga, height: o})
          }
          s.push({type: "line", uy: w, style: n, ZO: E, Zf: F, $f: G, ui: K, vi: O})
        }
      }
    }, Ks: function (a, b, c, e, f) {
      var g = b.Be;
      if ("lanche" !== g) if (Qd.Jx[g]) this.KK(a, b, Qd.Jx[g], e, f); else if (c = c.tL(g)) {
        var i = new Image;
        i.setAttribute("crossOrigin", "anonymous");
        var k = this;
        i.onload = function () {
          Qd.Jx[g] = this;
          k.KK(a, b, this, e, f);
          i.onload = q
        };
        i.src = c
      }
    }, KK: function (a, b, c, e, f) {
      var g = b.lt, i = g.ie, k = g.je, m = q, n = q, o = p, s = b.style ? b.style.Xb : q;
      if (b.style && 62203 === s) {
        for (var v = n = m = 0; v < b.Bf.length; v++) m < b.Bf[v].width && (m = b.Bf[v].width), n += 20;
        m = Math.ceil(m) + 10
      }
      e && 519 === s && (o = t);
      m !== q && n !== q ? this.zW(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.Bf[0].width) + 6, this.sW(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
      f && f(b)
    }, zW: function (a, b, c, e, f, g) {
      var i = b.gy[0] - f / 2, b = b.gy[1] - g / 2;
      0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
      var k = e / 2;
      a.drawImage(c, 0, 0, e, e, i, b, k, k);
      a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
      a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
      a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
      a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
      a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
      a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
      a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
      a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
    }, sW: function (a, b, c, e, f, g) {
      var i = b.gy[0] - f / 2, b = b.gy[1] - g / 2, g = e / 2;
      a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
      a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
      a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
    }, wW: function (a, b, c, e, f, g, i, k, m) {
      a.font = Qd.mx(k, m);
      a.fillStyle = k.cL;
      g /= 2;
      i /= 2;
      a.save();
      a.translate(b, c);
      a.rotate(-e / 180 * Math.PI);
      0 < k.Bx && (a.lineWidth = k.Bx, a.strokeStyle = k.UL, a.strokeText(f, -g, -i));
      a.fillText(f, -g, -i);
      a.restore()
    }, NK: function (a, b, c, e, f, g) {
      a.font = Qd.mx(f, g);
      a.fillStyle = f.cL;
      0 < f.Bx && (a.lineWidth = f.Bx, a.strokeStyle = f.UL, a.strokeText(e, b, c));
      a.fillText(e, b, c)
    }, mx: function (a, b) {
      var c = a.fontSize / 2, e = 10 * a.fontWeight;
      return e = b.mE ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") + " arial, sans-serif"
    }, UZ: function (a, b) {
      var c = [], e = 0;
      5 === b && (e = 1);
      a.sort(function (a, b) {
        return a.x * a.y < b.x * b.y ? -1 : 1
      });
      for (var f = 0, g = a.length; f < g; f++) for (var i = a[f], k = 0, m = i.length; k < m; k++) {
        var n = i[k], o = l, s = l, v = l, w = l;
        if ("fixed" === n.type) {
          var y = n.lt, z = n.Bf;
          y && (o = y.ie, s = y.je, v = y.ie + y.width, w = y.je + y.height);
          for (y = 0; y < z.length; y++) {
            var B = z[y];
            o !== l ? (B.ie < o && (o = B.ie), B.je < s && (s = B.je), B.ie + B.width > v && (v = B.ie + B.width), B.je + B.height > w && (w = B.je + B.height)) : (o = B.ie, s = B.je, v = B.ie + B.width, w = B.je + B.height)
          }
        } else "line" === n.type ? (o = n.Zf, s = n.$f, v = n.ui, w = n.vi) : "biaopai" === n.type && (w = n.x5, o = w.ie, s = w.je, v = w.ie + w.width, w = w.je + w.height);
        o !== l && (n.Zf = o, n.$f = s, n.ui = v, n.vi = w, c.push(n))
      }
      c.sort(function (a, b) {
        return b.uy - a.uy || b.Zf - a.Zf || b.$f - a.$f
      });
      f = 0;
      for (g = c.length; f < g; f++) {
        m = c[f];
        m.vt = t;
        m.WJ = [];
        for (k = f + 1; k < g; k++) i = c[k], m.ui - e < i.Zf || (m.Zf > i.ui - e || m.vi - e < i.$f || m.$f > i.vi - e) || m.WJ.push(k)
      }
      f = 0;
      for (g = c.length; f < g; f++) if (k = c[f], k.vt === t) {
        e = k.WJ;
        k = 0;
        for (m = e.length; k < m; k++) c[e[k]].vt = p
      }
      return c
    }, Jx: {}
  };
  var Rd = ["round", "butt", "square"], Sd = ["miter", "round", "bevel"], Td = {
    daojiao: [{stroke: "#FF6600", Db: 1, Bb: "round", Cb: "round", yd: [4, 3]}],
    daojiao_bai: [{stroke: "#f5f3f0", Db: 1, Bb: "round", Cb: "round", yd: [4, 3]}],
    junhuoxian: [{stroke: "#DB7093", Db: 1, Bb: "round", Cb: "round", yd: [4, 3]}],
    lundu: [{stroke: "#5c91c5", Db: 1, Bb: "round", Cb: "round", yd: [10, 11]}],
    shengjie: [{stroke: "#737373", Db: 1, Bb: "round", Cb: "round", yd: [6, 3]}],
    weidingguojie: [{stroke: "#aea08a", Db: 1, Bb: "round", Cb: "round", yd: [4, 3]}],
    weidingguojie_guowai: [{stroke: "#a29e96", Db: 2, Bb: "round", Cb: "round", yd: [4, 3]}],
    weidingguojie_guonei: [{stroke: "#b5a37c", Db: 2, Bb: "round", Cb: "round", yd: [4, 3]}]
  }, Ud = {};

  function Vd(a, b, c) {
    if (/^tielu|^MapRes\/tielu/.test(a)) {
      if ("off" === window[c + "zoomFrontStyle"][b].bmapRailwayVisibility) return [];
      var e = "#ffffff", f = "#949494";
      window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor) && (e = window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor);
      window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayFillColor) && (f = window[c + "zoomFrontStyle"][b].bmapRailwayFillColor);
      if (4 <= b && 9 >= b || 10 <= b && 16 >= b) return [{
        stroke: e,
        Db: 1.5,
        Bb: "butt",
        Cb: "round",
        yd: [10, 11]
      }, {stroke: f, Db: 2, Bb: "round", Cb: "round"}];
      if (17 <= b && 18 >= b) return [{stroke: e, Db: 2.5, Bb: "butt", Cb: "round", yd: [15, 16]}, {
        stroke: f,
        Db: 5,
        Bb: "round",
        Cb: "round"
      }];
      if (19 <= b && 20 >= b) return [{stroke: e, Db: 4.5, Bb: "butt", Cb: "round", yd: [25, 26]}, {
        stroke: f,
        Db: 5,
        Bb: "round",
        Cb: "round"
      }]
    } else if (0 === a.indexOf("ditie_zj") || 0 === a.indexOf("MapRes/ditie_zj")) {
      if (12 <= b && 16 >= b) return [{stroke: "#868686", Db: 1, Bb: "round", Cb: "round", yd: [7, 4]}];
      if (17 <= b && 18 >= b || 19 <= b && 20 >= b) return [{
        stroke: "#6e6e6e",
        Db: 1,
        Bb: "round",
        Cb: "round",
        yd: [7, 4]
      }]
    } else if (/^tongdaomian|^MapRes\/tongdaomian/.test(a)) {
      if (17 === b) return [{stroke: "#e5e5e5", Db: 4, Bb: "square", Cb: "round"}, {
        stroke: "#a8a8a8",
        Db: 6,
        Bb: "square",
        Cb: "round"
      }];
      if (18 === b) return [{stroke: "#e5e5e5", Db: 6, Bb: "square", Cb: "round"}, {
        stroke: "#a8a8a8",
        Db: 8,
        Bb: "square",
        Cb: "round"
      }];
      if (19 <= b && 21 >= b) return [{stroke: "#e5e5e5", Db: 8, Bb: "square", Cb: "round"}, {
        stroke: "#a8a8a8",
        Db: 10,
        Bb: "square",
        Cb: "round"
      }]
    } else if (/^jietizhongduan|^dixiatongdaojieti|^MapRes\/jietizhongduan|^MapRes\/dixiatongdaojieti/.test(a)) {
      if (17 === b) return [{stroke: "#e5e5e5", Db: 4, Bb: "butt", Cb: "round", yd: [2, 1]}, {
        stroke: "#bebebe",
        Db: 6,
        Bb: "butt",
        Cb: "round"
      }];
      if (18 === b) return [{stroke: "#e5e5e5", Db: 6, Bb: "butt", Cb: "round", yd: [3, 1]}, {
        stroke: "#bebebe",
        Db: 8,
        Bb: "butt",
        Cb: "round"
      }];
      if (19 <= b && 21 >= b) return [{
        stroke: "#e5e5e5",
        Db: 8,
        Bb: "butt",
        Cb: "round",
        yd: [4, 2]
      }, {stroke: "#bebebe", Db: 10, Bb: "butt", Cb: "round"}]
    } else if (/^guojietianqiao|^MapRes\/guojietianqiao/.test(a)) return 18 === b ? [{
      stroke: "#ffffff",
      Db: 6,
      Bb: "butt",
      Cb: "round",
      yd: [4, 2]
    }, {stroke: "#bebebe", Db: 8, Bb: "butt", Cb: "round"}] : [{
      stroke: "#ffffff",
      Db: 8,
      Bb: "butt",
      Cb: "round",
      yd: [4, 2]
    }, {stroke: "#bebebe", Db: 10, Bb: "butt", Cb: "round"}];
    return Td[a] || Td[a.replace("MapRes/", "")]
  }

  var Wd = {
    drawLink: function (a, b, c, e, f) {
      this.da = f.P.da;
      var g = a[1];
      g && (a = a[6], this.HO(g, c, e, b, a, f, p), this.HO(g, c, e, b, a, f, t))
    }, HO: function (a, b, c, e, f, g, i) {
      for (var k = 0; k < a.length; k++) {
        var m = a[k][0], n = g.wj(m, "line", b);
        if (n && n.length && (!i || n[0].borderWidth)) if (!n[0].gp || Vd(n[0].gp, b, this.da)) for (var o = a[k][1], s = 0; s < o.length; s++) {
          var v = o[s][3];
          g.Uc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.Vm(v[1], b, c, f)), v = v["cache" + b], g.P.Fo(e.canvas.id, v, {
            type: "polyline",
            Xb: m,
            style: n
          }), this.xW(e, v, n, i, b))
        }
      }
    }, drawSingleTexture: function (a, b, c, e, f) {
      var g = a[1];
      if (g) for (var a = a[6], i = 0; i < g.length; i++) {
        var k = f.wj(g[i][0], "line", c);
        if (k && k.length) for (var m = g[i][1], n = 0; n < m.length; n++) {
          var o = m[n][11];
          if (f.Uc(o[0], c)) {
            var s;
            o["cache" + c] || (o["cache" + c] = f.Vm(o[1], c, e, a));
            s = o["cache" + c];
            o = o[3];
            o *= Math.pow(2, c - f.f1[c].Sc);
            this.yW(b, s, k, o, f)
          }
        }
      }
    }, yW: function (a, b, c, e, f) {
      var g = c[0].gp, i = this;
      if (Ud[g]) i.Ks(b, e, a, Ud[g]); else if (c = f.tL(g)) {
        var k = new Image;
        k.onload = function () {
          Ud[g] = k;
          i.Ks(b, e, a, k);
          k.onload = q
        };
        k.src = c
      }
    }, Ks: function (a, b, c, e) {
      var f = [a[0], a[1]], g = [a[2], a[3]], a = g[0] - f[0], g = g[1] - f[1], f = [f[0] + a / 2, f[1] + g / 2],
        i = Math.sqrt(a * a + g * g), b = b / 10, a = Math.atan2(g, a);
      c.save();
      c.translate(f[0], f[1]);
      c.rotate(Math.PI / 2 + a);
      c.drawImage(e, -b / 2, -i / 2, b, i);
      c.restore()
    }, xW: function (a, b, c, e, f) {
      c = c[0];
      if (!e && c.gp && Vd(c.gp, f, this.da)) this.FW(a, b, c, Vd(c.gp, f, this.da)); else {
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var f = 2, g = b.length; f < g; f += 2) a.lineTo(b[f], b[f + 1]);
        c.borderWidth && e ? (a.strokeStyle = c.Lo, a.lineCap = Rd[c.cV], a.lineJoin = Sd[1], a.lineWidth = c.borderWidth / 2, a.stroke()) : e || (a.strokeStyle = c.hx, a.lineCap = Rd[c.TW], a.lineJoin = Sd[1], a.lineWidth = c.ZK / 2, a.stroke())
      }
    }, FW: function (a, b, c, e) {
      if (c = e[1]) {
        a.strokeStyle = c.stroke;
        a.lineCap = c.Bb;
        a.lineJoin = c.Cb;
        a.lineWidth = c.Db;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
        a.stroke()
      }
      if (e = e[0]) if (e.yd) this.vW(a, b, e); else {
        a.strokeStyle = e.stroke;
        a.lineCap = e.Bb;
        a.lineJoin = e.Cb;
        a.lineWidth = e.Db;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        c = 2;
        for (f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
        a.stroke()
      }
    }, vW: function (a, b, c) {
      a.strokeStyle = c.stroke;
      a.lineCap = c.Bb;
      a.lineJoin = c.Cb;
      a.lineWidth = c.Db;
      var e = p, c = c.yd[0];
      a.beginPath();
      for (var f = 0; f < b.length - 2; f += 2) {
        var g = b[f], i = b[f + 1], k = b[f + 2] - g, m = b[f + 3] - i, n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15,
          m = Math.sqrt(k * k + m * m), o = c;
        for (a.moveTo(g, i); 0.1 <= m;) {
          o > m && (o = m);
          var s = Math.sqrt(o * o / (1 + n * n));
          0 > k && (s = -s);
          g += s;
          i += n * s;
          a[e ? "lineTo" : "moveTo"](g, i);
          m -= o;
          e = !e
        }
      }
      a.stroke()
    }
  };
  var Xd = 3, Yd = 4, Zd = 7, $d = 8, ae = 15, be = 16, ce = {}, de = {}, ee = {}, fe, ge = {
    3: {start: 3, Sc: 3},
    4: {start: 4, Sc: 5},
    5: {start: 4, Sc: 5},
    6: {start: 6, Sc: 7},
    7: {start: 6, Sc: 7},
    8: {start: 8, Sc: 9},
    9: {start: 8, Sc: 9},
    10: {start: 10, Sc: 10},
    11: {start: 11, Sc: 12},
    12: {start: 11, Sc: 12},
    13: {start: 11, Sc: 12},
    14: {start: 14, Sc: 15},
    15: {start: 14, Sc: 15},
    16: {start: 16, Sc: 17},
    17: {start: 16, Sc: 17},
    18: {start: 18, Sc: 19},
    19: {start: 18, Sc: 19},
    20: {start: 18, Sc: 19},
    21: {start: 18, Sc: 19}
  };

  function he(a) {
    this.P = a;
    this.Lc = a.M.devicePixelRatio;
    this.f1 = ge
  }

  he.prototype = {
    OC: function (a, b, c, e, f, g, i, k, m) {
      this.P.mO = {};
      var n = this, o = n.P.da;
      m || (m = 0);
      if (!window[o + "StyleBody"] && 100 > m) setTimeout(function () {
        n.OC(a, b, c, e, f, g, i, k, m + 1)
      }, 100); else {
        fe || (fe = k);
        var s = b.getContext("2d"), v = b.parentNode;
        v.removeChild(b);
        s.clearRect(0, 0, g, g);
        v.appendChild(b);
        v = this.Lc;
        1 < v && !b._scale && (s.scale(v, v), b._scale = p);
        s.fillStyle = this.qN("#F5F3F0");
        window[o + "zoomFrontStyle"][f].bmapLandColor && (s.fillStyle = this.qN(window[o + "zoomFrontStyle"][f].bmapLandColor));
        o = b.style.width;
        b.style.width = "0px";
        b.style.width = o;
        s.fillRect(0, 0, g, g);
        if (a[0]) for (o = 0; o < a[0].length; o++) v = a[0][o], v[0] === Zd && Nd.drawPoly(v, s, f, g, this);
        17 <= this.P.la() ? (n.MK(a, s, f, g, i, c, e), b.Tn = p) : setTimeout(function () {
          if (!b.oH) {
            n.MK(a, s, f, g, i, c, e);
            b.Tn = p
          }
        }, 1)
      }
    }, MK: function (a, b, c, e) {
      var f = this.P.da;
      if (a[0]) for (var g = 0; g < a[0].length; g++) {
        var i = a[0][g], k = i[0];
        k === Yd ? Wd.drawLink(i, b, c, e, this) : k === be ? Wd.drawLink(i, b, c, e, this) : k === ae ? (Nd.drawGaoqingRoadBorder(i, b, c, e, this), Nd.drawGaoqingRoadFill(i, b, c, e, this)) : 18 === k ? window[f + "zoomFrontStyle"] && (window[f + "zoomFrontStyle"][c] && "off" !== window[f + "zoomFrontStyle"][c].bmapRoadarrowVisibility) && Od.drawArrow(i, b, c, e, Math.pow(2, c - ge[c].Sc), this) : k === $d ? Pd.drawHregion(i, b, c, e, this) : 19 === k && Wd.drawSingleTexture(i, b, c, e, this)
      }
    }, LK: function (a, b, c, e, f, g, i) {
      var k = this, m = k.P.da;
      i || (i = 0);
      !window[m + "StyleBody"] && 100 > i ? setTimeout(function () {
        k.LK(a, b, c, e, f, g, i + 1)
      }, 100) : (fe || (fe = b), a.NZ = Qd.parse(a, c, e, this, f))
    }, wj: function (a, b, c, e) {
      var f = a + "-" + b + "-" + c;
      if (e) return ce[f] || (ce[f] = this.Dg(a, b, c, e)), ce[f];
      this.P.mO[f] = this.Dg(a, b, c);
      return this.P.mO[f]
    }, Dg: function (a, b, c, e) {
      var f = this.P.da, g;
      g = e || window[f + "_bmap_baseFs"];
      f = window[f + "StyleBody"];
      e = g[2];
      if ("arrow" === b) return this.CZ(e[2]);
      switch (b) {
        case "point":
          e = e[0];
          f = f[0] || {};
          break;
        case "pointText":
          e = e[1];
          f = f[1] || {};
          break;
        case "line":
          e = e[3];
          f = f[3] || {};
          break;
        case "polygon":
          e = e[4];
          f = f[4] || {};
          break;
        case "polygon3d":
          e = e[5], f = f[5] || {}
      }
      var i = [], c = g[1][c - 1][0][a];
      if (!c) return i;
      for (g = 0; g < c.length; g++) {
        var k = f[c[g]] || e[c[g]];
        if (k) {
          switch (b) {
            case "polygon":
              k = this.LZ(k, a);
              break;
            case "line":
              k = this.HZ(k, a);
              break;
            case "pointText":
              k = this.JZ(k, a);
              break;
            case "point":
              k = this.IZ(k, a);
              break;
            case "polygon3d":
              k = this.KZ(k, a)
          }
          k.e6 = c[g];
          i[i.length] = k
        }
      }
      return i
    }, JZ: function (a, b) {
      return {
        Xb: b,
        cL: this.Lg(a[0]),
        UL: this.Lg(a[1]),
        z2: this.Lg(a[2]),
        fontSize: a[3],
        Bx: a[4],
        fontWeight: a[5],
        fontStyle: a[6],
        eW: a[7]
      }
    }, IZ: function (a, b) {
      return {Xb: b, uy: a[0], w6: a[1], Be: a[2], pY: a[3], f5: a[4], eW: a[5], zoom: a[6]}
    }, HZ: function (a, b) {
      return {
        Xb: b,
        Lo: this.Lg(a[0]),
        hx: this.Lg(a[1]),
        borderWidth: a[2],
        ZK: a[3],
        cV: a[4],
        TW: a[5],
        o4: a[6],
        p4: a[7],
        q4: a[8],
        I4: a[9],
        J4: a[10],
        dV: a[11],
        gp: a[12],
        eV: a[13],
        l3: a[14],
        G4: a[15],
        m4: a[16],
        e5: a[17],
        J5: a[18]
      }
    }, LZ: function (a, b) {
      return {
        Xb: b,
        hx: this.Lg(a[0]),
        Lo: this.Lg(a[1]),
        borderWidth: a[2],
        dV: a[3],
        eV: a[4],
        E6: a[5],
        l4: a[6],
        i6: a[7],
        j6: this.Lg(a[8])
      }
    }, KZ: function (a, b) {
      return {
        Xb: b,
        filter: a[0],
        CN: a[1],
        n4: a[2],
        borderWidth: a[3],
        Lo: this.Lg(a[4]),
        UW: this.Lg(a[5]),
        k3: this.Lg(a[6]),
        v5: a[7]
      }
    }, CZ: function (a) {
      for (var b in a) return a = a[b], {color: this.Lg(a[0]), pY: a[1], Be: a[2]}
    }, Lg: function (a) {
      var b = a;
      if (ee[b]) return ee[b];
      a >>>= 0;
      ee[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
      return ee[b]
    }, qN: function (a) {
      a = a.replace("#", "");
      6 === a.length && (a += "ff");
      for (var b = "rgba(", c = 0; 8 > c; c += 2) b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
      return b
    }, Uc: function (a, b) {
      var c;
      de[a] || (c = a.toString(2), 8 > c.length && (c = Array(8 - c.length + 1).join("0") + c), de[a] = c);
      c = de[a];
      return "1" === c[b - ge[b].start]
    }, Vm: function (a, b, c) {
      var e = [], b = Math.pow(2, b - ge[b].Sc) / 100, f = a[0] * b, g = a[1] * b;
      e[e.length] = f;
      e[e.length] = c - g;
      for (var i = 2; i < a.length; i += 2) f += a[i] * b, g += a[i + 1] * b, e[e.length] = f, e[e.length] = c - g;
      return e
    }, tL: function (a) {
      if (a) {
        var b = a.length % fe.length, c = this.wX();
        return fe[b] + a + ".png?v=" + c.UF + "&udt=" + c.QF
      }
    }, wX: function () {
      if (this.bE) return this.bE;
      var a = "undefined" !== typeof MSV ? MSV.X4 : {};
      return this.bE = {UF: a.version ? a.version : "001", QF: a.H0 ? a.H0 : "20150621"}
    }
  };
  P = A.lang.Iu;
  Xd = 3;
  Yd = 4;
  Zd = 7;
  $d = 8;
  ae = 15;
  be = 16;

  function vd(a, b, c) {
    c = c || {};
    this.P = a;
    this.ow = b;
    this.Lc = b.CN;
    this.fb = {
      m0: "na",
      zIndex: 0,
      tO: c.tileUrls || {
        http: ["http://online0.map.bdimg.com/pvd/?qt=vtile", "http://online1.map.bdimg.com/pvd/?qt=vtile", "http://online2.map.bdimg.com/pvd/?qt=vtile", "http://online3.map.bdimg.com/pvd/?qt=vtile", "http://online4.map.bdimg.com/pvd/?qt=vtile"],
        https: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile"]
      },
      aE: c.iconUrls || ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/"],
      wF: p
    };
    this.HB = "";
    this.PS = {};
    var c = c.urlOpts || {styles: "pl", extdata: 1, textimg: 0, mesh3d: 0, limit: 30}, e;
    for (e in c) c.hasOwnProperty(e) && (this.HB = this.HB + "&" + e + "=" + c[e]);
    this.nh = {};
    this.vs = [];
    this.Bt = 0;
    this.Px = t;
    this.Jx = {};
    a = this.fb.m0;
    Hd[a] ? a = Hd[a] : (b = new Id(a, l), a = Hd[a] = b);
    this.Hd = a;
    this.P.Hd = this.Hd
  }

  window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
  fa = vd.prototype;
  fa.za = function () {
    var a = this.P, b = a.ef;
    if (!this.Bo) {
      var c = b.Oq(this.fb.zIndex);
      c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
      this.Bo = c
    }
    b.lg.appendChild(this.Bo);
    b.B4 = c;
    if (this.fb.wF) {
      ie(this);
      var e = this;
      a.addEventListener("checkvectorclick", function (a) {
        var b;
        a:{
          b = a.offsetX;
          var c = a.offsetY, k = e.vs.NZ;
          if (k) for (var m = 0; m < k.length; m++) for (var n = k[m], o = 0; o < n.length; o++) if (a = n[o], !a.vt && a.lt && b > a.Zf && b < a.ui && c > a.$f && c < a.vi) {
            b = a.lt;
            b = {type: 9, name: a.name, uid: a.uid, point: {x: b.ie + b.width / 2, y: b.je + 6}};
            break a
          }
          b = q
        }
        b && (a = new P("onvectorclick"), a.x4 = b, a.Ye = "base", this.dispatchEvent(a))
      })
    }
  };

  function ie(a) {
    var b = a.P, c = b.ef, e = a.Lc, f = b.zb(), g = f.width, f = f.height, i = H("canvas");
    i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
    i.width = g * e;
    i.height = f * e;
    a.Tx = i;
    a.Cp = i.getContext("2d");
    a.Cp.scale(e, e);
    a.Cp.textBaseline = "top";
    c.lg.appendChild(i);
    b.zS = i
  }

  fa.$X = x("Hd");
  fa.update = function (a, b) {
    b = b || {};
    this.RF = b.RF;
    b.vm && (this.I0 = b.vm);
    if (this.fb.wF && (b.lm && this.lm(), b.V_)) {
      var c = this.Lc, e = this.P.zb(), f = e.width, e = e.height, g = this.Tx, i = g.style;
      i.width = f + "px";
      i.height = e + "px";
      g.width = f * c;
      g.height = e * c;
      this.Cp.scale(c, c);
      this.Cp.textBaseline = "top"
    }
    if (b.z6) {
      c = this.Bo;
      f = 0;
      for (e = c.childNodes.length; f < e; f++) c.childNodes[f].Tn = t
    }
    this.Ww = a;
    this.Fp(a)
  };
  fa.Fp = function (a) {
    this.vs = [];
    var b = this.P, c = b.la(), e = b.Fc.ri(b.he), f = this.Hd.$b(c),
      e = [Math.round(-e.lng / f), Math.round(e.lat / f)], f = this.Hd.Nd(c), g = b.da.replace(/^TANGRAM_/, ""),
      i = this.Hd.Ws(c), b = this.P, k = -b.offsetY + b.height / 2, m = this.Bo;
    m.style.left = -b.offsetX + b.width / 2 + "px";
    m.style.top = k + "px";
    this.Ve ? this.Ve.length = 0 : this.Ve = [];
    b = 0;
    for (k = m.childNodes.length; b < k; b++) {
      var n = m.childNodes[b];
      n.mr = t;
      this.Ve.push(n)
    }
    if (b = this.Tm) for (var o in b) delete b[o]; else this.Tm = {};
    this.We ? this.We.length = 0 : this.We = [];
    b = 0;
    for (k = a.length; b < k; b++) {
      var n = a[b][0], s = a[b][1];
      o = 0;
      for (var v = this.Ve.length; o < v; o++) {
        var w = this.Ve[o];
        if (w.id === g + "_" + n + "_" + s + "_" + i + "_" + c) {
          w.mr = p;
          this.Tm[w.id] = w;
          break
        }
      }
    }
    b = 0;
    for (k = this.Ve.length; b < k; b++) w = this.Ve[b], w.mr || (w.LB = q, delete w.LB, w.Tn = t, this.We.push(w));
    o = [];
    v = f * this.Lc;
    b = 0;
    for (k = a.length; b < k; b++) {
      var n = a[b][0], s = a[b][1], w = n * f + e[0], y = (-1 - s) * f + e[1],
        z = g + "_" + n + "_" + s + "_" + i + "_" + c, B = this.Tm[z], C = q;
      if (B) C = B.style, C.left = w + "px", C.top = y + "px", C.width = f + "px", C.height = f + "px", B.Tn ? B.HF && B.HF && this.vs.push(B.HF) : (B.oH = p, B.LB = q, delete B.LB, o.push([n, s, B])); else {
        if (0 < this.We.length) {
          var B = this.We.shift(), E = B.getContext("2d");
          B.getAttribute("width") !== v && (B._scale = t);
          B.setAttribute("width", v);
          B.setAttribute("height", v);
          C = B.style;
          C.width = f + "px";
          C.height = f + "px";
          E.clearRect(0, 0, v, v)
        } else B = document.createElement("canvas"), C = B.style, C.position = "absolute", this.fb.backgroundColor && (C.background = this.fb.backgroundColor), C.width = f + "px", C.height = f + "px", B.setAttribute("width", v), B.setAttribute("height", v), m.appendChild(B);
        B.id = z;
        C.left = w + "px";
        C.top = y + "px";
        o.push([n, s, B])
      }
      B.style.visibility = ""
    }
    b = 0;
    for (k = this.We.length; b < k; b++) this.We[b].style.visibility = "hidden";
    if (0 === o.length) {
      je(this);
      a = this.P.da.replace(/^TANGRAM_/, "");
      c = this.P.la();
      e = this.Hd.Ws(c);
      f = {};
      for (g = 0; g < this.Ww.length; g++) i = this.Ww[g], i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c, this.nh[i] && (f[i] = this.nh[i], this.RF && this.ow.PC.OC(this.nh[i].W0, this.nh[i].k0, this.nh[i].nm, this.nh[i].an, this.nh[i].CE, this.Hd.Nd(this.nh[i].CE), this.Hd.LD(this.nh[i].CE), this.fb.aE));
      this.nh = f
    } else {
      this.Bt = o.length;
      this.Px = t;
      c = this.Hd.Ws(this.P.la());
      for (e = 0; e < a.length; e++) a[e][3] = c;
      for (e = 0; e < o.length; e++) a = o[e][2], f = o[e][0], g = o[e][1], o[e][3] = c, a.Tn = t, a.oH = t, ke(this, f, g, c, a)
    }
  };

  function ke(a, b, c, e, f) {
    var g = b + "_" + c + "_" + e, i = a.PS;
    if (i[g]) {
      if ("loading" === i[g].status) return
    } else i[g] = {status: "init", JN: 0};
    var k = a, m = k.P, n = [], n = "0" === D.Au ? k.fb.tO.http : k.fb.tO.https, o = Math.abs(b + c) % n.length,
      s = "x=" + b + "&y=" + c + "&z=" + e, v = le(a.ow), w = v.UF, v = v.QF,
      y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36),
      s = s + a.HB + "v=" + w + "&udt=" + v + "&fn=window." + y, w = n[o] + "&" + s,
      w = n[o] + "&param=" + window.encodeURIComponent(Ob(s));
    window[y] = function (a) {
      clearTimeout(i[g].dl);
      i[g] = q;
      if (a) {
        var n = m.la(), o;
        a:{
          for (o = 0; o < k.Ww.length; o++) {
            var s = k.Ww[o];
            if (s[0] === b && s[1] === c && s[3] === e) {
              o = p;
              break a
            }
          }
          o = t
        }
        if (o !== t) {
          o = new P("updateindoor");
          o.IndoorCanvas = [];
          o.IndoorCanvas.push({canvasDom: f, data: a, canvasID: f.id, ratio: k.Lc});
          m.dispatchEvent(o);
          if (m.M.yk) {
            if (k.nh[f.id] = {
              W0: a,
              k0: f,
              nm: b,
              an: c,
              CE: n
            }, k.ow.PC.OC(a, f, b, c, n, k.Hd.Nd(n), k.Hd.LD(n), k.fb.aE), k.fb.wF) {
              n = [];
              n.l0 = [b, c, e];
              if (a[0]) for (o = 0; o < a[0].length; o++) a[0][o][0] === Xd && n.push({tM: a[0][o]});
              if (a[2]) for (o = 0; o < a[2].length; o++) n.push({WY: a[2][o]});
              f.HF = n;
              k.vs.push(n);
              k.Px === t && k.Bt--;
              (0 === k.Bt || k.Px === p) && je(k)
            }
          } else k.Bt--, (0 === k.Bt || k.Px === p) && je(k);
          delete window[y]
        }
      }
    };
    qa(w);
    i[g].status = "loading";
    k = a;
    i[g].dl = setTimeout(function () {
      3 > i[g].JN ? (i[g].JN++, i[g].status = "init", ke(k, b, c, e, f)) : i[g] = q
    }, 4E3)
  }

  function je(a) {
    if (a.Tx) {
      var b = a.P;
      a.Tx.style.left = -b.offsetX + "px";
      a.Tx.style.top = -b.offsetY + "px";
      var c = new P("updateindoorlabel");
      c.labelCanvasDom = b.zS;
      b.dispatchEvent(c);
      if (b.M.yk) {
        a.lm();
        var c = a.Hd, e = b.la(), f = c.Ws(b.la());
        a.ow.PC.LK(a.vs, a.fb.aE, a.Cp, c.Nd(e), Math.pow(2, e - f), e);
        "moving" !== a.I0 && b.dispatchEvent(new P("ontilesloaded"))
      }
    }
  }

  fa.lm = function () {
    var a = this.P.zb(), b = this.Lc;
    this.Cp.clearRect(0, 0, a.width * b, a.height * b)
  };
  fa.remove = function () {
    var a = this.P.ef;
    this.Bo && a.lg.removeChild(this.Bo)
  };

  function ud(a) {
    this.P = a.map;
    this.jf = [];
    this.Xr = {};
    this.CN = this.P.M.devicePixelRatio;
    this.PC = new he(this.P);
    this.za()
  }

  window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
  fa = ud.prototype;
  fa.za = function () {
    var a = this, b = this.P;
    b.addEventListener("addtilelayer", function (b) {
      a.Ue(b.target)
    });
    b.addEventListener("removetilelayer", function (b) {
      a.cg(b.target)
    });
    setTimeout(function () {
      b.addEventListener("onmoveend", function (b) {
        "centerAndZoom" !== b.Rz && a.update({vm: "moveend"})
      });
      b.addEventListener("onmoving", function () {
        a.update({vm: "moving"})
      });
      b.addEventListener("onzoomend", function (b) {
        "centerAndZoom" !== b.Rz && a.update({lm: p, vm: "zoomend"})
      });
      b.addEventListener("centerandzoom", function () {
        a.update({lm: p, vm: "centerandzoom"})
      });
      b.addEventListener("onupdatestyles", function () {
        a.update({lm: p, RF: p, vm: "updatestyles"});
        a.P.zf(a.P.Qb());
        setTimeout(function () {
          a.P.dispatchEvent(new P("onvectordrawend"))
        }, 10)
      });
      b.addEventListener("onmaptypechange", function (b) {
        b.Ua === Pa && a.update({lm: p, vm: "maptypechange"})
      })
    }, 1);
    b.addEventListener("indoor_data_refresh", u());
    b.addEventListener("onresize", function () {
      a.update({V_: p})
    });
    a.update()
  };
  fa.Ue = function (a) {
    if (a instanceof vd) {
      for (var b = 0; b < this.jf.length; b++) if (this.jf[b] === a) return;
      this.jf.push(a);
      a.za();
      this.P.loaded && this.update()
    }
  };
  fa.cg = function (a) {
    if (a instanceof vd) {
      for (var b = 0; b < this.jf.length; b++) if (this.jf[b] === a) {
        this.jf.splice(b, 1);
        break
      }
      a.remove()
    }
  };
  fa.KL = function (a) {
    var b = a.getName();
    if (this.Xr[b]) return this.Xr[b];
    var c = this.P, e = c.la(), f = c.Vb, g = a.LD(e);
    c.da.replace(/^TANGRAM_/, "");
    var i = Math.ceil(f.lng / g), k = Math.ceil(f.lat / g), a = a.Nd(e),
      m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a], e = m[0] - Math.ceil((c.width / 2 - m[2]) / a),
      f = m[1] - Math.ceil((c.height / 2 - m[3]) / a), g = m[0] + Math.ceil((c.width / 2 + m[2]) / a),
      c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
    this.Ie ? this.Ie.length = 0 : this.Ie = [];
    for (a = e; a < g; a++) for (e = f; e < c; e++) this.Ie.push([a, e]);
    this.Ie.sort(function (a) {
      return function (b, c) {
        return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
      }
    }([i, k]));
    this.Xr[b] = this.Ie.slice(0);
    return this.Xr[b]
  };

  function le(a) {
    if (a.VF) return a.VF;
    a.VF = {UF: "001", QF: Vb("normal")};
    return a.VF
  }

  fa.update = function (a) {
    this.Xr = {};
    for (var b = 0; b < this.jf.length; b++) {
      var c = this.jf[b], e = this.KL(c.Hd);
      c.update(e, a)
    }
  };

  function ne(a, b, c) {
    this.nd = a;
    this.jf = b instanceof wd ? [b] : b.slice(0);
    c = c || {};
    this.m = {
      p0: c.tips || "",
      wE: "",
      kc: c.minZoom || 4,
      qc: c.maxZoom || 18,
      v4: c.minZoom || 4,
      u4: c.maxZoom || 18,
      Py: 256,
      GF: c.textColor || "black",
      iD: c.errorImageUrl || "",
      jb: new jb(new Q(-21364736, -16023552), new Q(23855104, 19431424)),
      Fc: c.projection || new T
    };
    1 <= this.jf.length && (this.jf[0].Gw = p);
    A.extend(this.m, c)
  }

  A.extend(ne.prototype, {
    getName: x("nd"), ft: function () {
      return this.m.p0
    }, P3: function () {
      return this.m.wE
    }, ZX: function () {
      return this.jf[0]
    }, f4: x("jf"), Nd: function () {
      return this.m.Py
    }, rf: function () {
      return this.m.kc
    }, Ze: function () {
      return this.m.qc
    }, setMaxZoom: function (a) {
      this.m.qc = a
    }, Gm: function () {
      return this.m.GF
    }, uj: function () {
      return this.m.Fc
    }, I3: function () {
      return this.m.iD
    }, Nd: function () {
      return this.m.Py
    }, $b: function (a) {
      return Math.pow(2, 18 - a)
    }, PL: function (a) {
      return this.$b(a) * this.Nd()
    }, rF: function (a) {
      this.uj().TN(a)
    }
  });
  var oe = [D.url.proto + D.url.domain.TILE_BASE_URLS[0] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[1] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[2] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[3] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[4] + "/it/"],
    pe = [D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[1] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[2] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[3] + "/tile/"],
    qe = {dark: "dl", light: "ll", normal: "pl"}, re = new wd;
  re.P_ = p;
  re.getTilesUrl = function (a, b, c) {
    var e = a.x, a = a.y, f = Vb("normal"), g = 1, c = qe[c];
    //this.map.Ix() && (g = 2);
    //e = this.map.ef.Hw(e, b).nm;
    //return (pe[Math.abs(e + a) % pe.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == A.ga.oa ? "&color_dep=32&colors=50" : "") + "&udt=" + f + "&from=jsapi3_0").replace(/-(\d+)/gi, "M$1")
    let tdir = bmapcfg.tiles_dir.length>0?bmapcfg.tiles_dir:bmapcfg.home + "tiles";
    console.log(tdir + "/" + b + "/" + e + "/" + a + bmapcfg.imgext);
    return tdir + "/" + b + "/" + e + "/" + a + bmapcfg.imgext; // 使用本地的瓦片
  };
  var Pa = new ne("\u5730\u56fe", re, {tips: "\u663e\u793a\u666e\u901a\u5730\u56fe", maxZoom: 19}), se = new wd;
  se.sO = [D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
  se.getTilesUrl = function (a, b) {
    var c = a.x, e = a.y, f = 256 * Math.pow(2, 20 - b), e = Math.round((9998336 - f * e) / f) - 1;
    return url = this.sO[Math.abs(c + e) % this.sO.length] + this.map.Ob + "/" + this.map.Mw + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
  };
  var Sa = new ne("\u4e09\u7ef4", se, {
    tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
    minZoom: 15,
    maxZoom: 20,
    textColor: "white",
    projection: new lb
  });
  Sa.$b = function (a) {
    return Math.pow(2, 20 - a)
  };
  Sa.Ck = function (a) {
    if (!a) return "";
    var b = I.hC, c;
    for (c in b) if (-1 < a.search(c)) return b[c].my;
    return ""
  };
  Sa.mL = function (a) {
    return {bj: 2, gz: 1, sz: 14, sh: 4}[a]
  };
  var te = new wd({Gw: p});
  te.getTilesUrl = function (a, b) {
    var c = a.x, e = a.y;
    return (oe[Math.abs(c + e) % oe.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Vb("satellite")).replace(/-(\d+)/gi, "M$1")
  };
  var cb = new ne("\u536b\u661f", te, {
    tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
    minZoom: 4,
    maxZoom: 19,
    textColor: "white"
  }), ue = new wd({transparentPng: p});
  ue.getTilesUrl = function (a, b) {
    var c = a.x, e = a.y, f = Vb("satelliteStreet");
    return (pe[Math.abs(c + e) % pe.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == A.ga.oa ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
  };
  var Ua = new ne("\u6df7\u5408", [te, ue], {
    tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
    labelText: "\u8def\u7f51",
    minZoom: 4,
    maxZoom: 19,
    textColor: "white"
  });
  var ve = 1, X = {};
  window.j1 = X;

  function Y(a, b) {
    A.lang.Ja.call(this);
    this.md = {};
    this.fn(a);
    b = b || {};
    b.na = b.renderOptions || {};
    this.m = {
      na: {
        Aa: b.na.panel || q,
        map: b.na.map || q,
        vg: b.na.autoViewport || p,
        Yt: b.na.selectFirstResult,
        Im: b.na.highlightMode,
        jc: b.na.enableDragging || t
      },
      Mt: b.onSearchComplete || u(),
      gN: b.onMarkersSet || u(),
      fN: b.onInfoHtmlSet || u(),
      iN: b.onResultsHtmlSet || u(),
      eN: b.onGetBusListComplete || u(),
      dN: b.onGetBusLineComplete || u(),
      bN: b.onBusListHtmlSet || u(),
      aN: b.onBusLineHtmlSet || u(),
      ME: b.onPolylinesSet || u(),
      Qp: b.reqFrom || ""
    };
    this.m.na.vg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : p;
    this.m.na.Aa = A.Ic(this.m.na.Aa)
  }

  A.xa(Y, A.lang.Ja);
  A.extend(Y.prototype, {
    getResults: function () {
      return this.Kc ? this.Oi : this.ka
    }, enableAutoViewport: function () {
      this.m.na.vg = p
    }, disableAutoViewport: function () {
      this.m.na.vg = t
    }, fn: function (a) {
      a && (this.md.src = a)
    }, eu: function (a) {
      this.m.Mt = a || u()
    }, setMarkersSetCallback: function (a) {
      this.m.gN = a || u()
    }, setPolylinesSetCallback: function (a) {
      this.m.ME = a || u()
    }, setInfoHtmlSetCallback: function (a) {
      this.m.fN = a || u()
    }, setResultsHtmlSetCallback: function (a) {
      this.m.iN = a || u()
    }, Em: x("Se")
  });
  var we = {
    AG: D.td, lb: function (a, b, c, e, f) {
      this.XZ(b);
      var g = (1E5 * Math.random()).toFixed(0);
      D._rd["_cbk" + g] = function (b) {
        b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {}, a && a(b, c), delete D._rd["_cbk" + g])
      };
      e = e || "";
      b = c && c.N0 ? Kb(b, encodeURI) : Kb(b, encodeURIComponent);
      this.AG = c && c.VK ? c.HN ? c.HN : D.Gp : D.td;
      e = this.AG + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
      f || (e += "&res=api");
      e += "&ak=" + ra;
      qa(e + ("&callback=BMap._rd._cbk" + g))
    }, XZ: function (a) {
      if (a.qt) {
        var b = "";
        switch (a.qt) {
          case "bt":
            b = "z_qt|bt";
            break;
          case "nav":
            b = "z_qt|nav";
            break;
          case "walk":
            b = "z_qt|walk";
            break;
          case "bse":
            b = "z_qt|bse";
            break;
          case "nse":
            b = "z_qt|nse";
            break;
          case "drag":
            b = "z_qt|drag"
        }
        "" !== b && D.alog("cus.fire", "count", b)
      }
    }
  };
  window.x1 = we;
  D._rd = {};
  var fb = {};
  window.w1 = fb;
  fb.YE = function (a) {
    a = a.replace(/<\/?[^>]*>/g, "");
    return a = a.replace(/[ | ]* /g, " ")
  };
  fb.DZ = function (a) {
    return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
  };
  fb.EZ = function (a, b) {
    return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
  };
  var xe = 2, ye = 6, ze = 8, Ae = 2, Be = 3, Ce = 6, De = 0, Ee = "bt", Fe = "nav", Ge = "walk", Ke = "bl", Le = "bsl",
    Me = "ride", Ne = 15, Oe = 18;
  D.I = window.Instance = A.lang.Tc;

  function Pe(a, b, c) {
    A.lang.Ja.call(this);
    if (a) {
      this.cb = "object" == typeof a ? a : A.Ic(a);
      this.page = 1;
      this.Od = 100;
      this.UJ = "pg";
      this.bg = 4;
      this.eK = b;
      this.update = p;
      a = {page: 1, o6: 100, Od: 100, bg: 4, UJ: "pg", update: p};
      c || (c = a);
      for (var e in c) "undefined" != typeof c[e] && (this[e] = c[e]);
      this.Ba()
    }
  }

  A.extend(Pe.prototype, {
    Ba: function () {
      this.za()
    }, za: function () {
      this.tV();
      this.cb.innerHTML = this.SV()
    }, tV: function () {
      isNaN(parseInt(this.page)) && (this.page = 1);
      isNaN(parseInt(this.Od)) && (this.Od = 1);
      1 > this.page && (this.page = 1);
      1 > this.Od && (this.Od = 1);
      this.page > this.Od && (this.page = this.Od);
      this.page = parseInt(this.page);
      this.Od = parseInt(this.Od)
    }, W3: function () {
      location.search.match(RegExp("[?&]?" + this.UJ + "=([^&]*)[&$]?", "gi"));
      this.page = RegExp.$1
    }, SV: function () {
      var a = [], b = this.page - 1, c = this.page + 1;
      a.push('<p style="margin:0;padding:0;white-space:nowrap">');
      if (!(1 > b)) {
        if (this.page >= this.bg) {
          var e;
          a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.da + "').toPage(1);"))
        }
        a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.da + "').toPage(" + b + ");"))
      }
      if (this.page < this.bg) e = 0 == this.page % this.bg ? this.page - this.bg - 1 : this.page - this.page % this.bg + 1, b = e + this.bg - 1; else {
        e = Math.floor(this.bg / 2);
        var f = this.bg % 2 - 1, b = this.Od > this.page + e ? this.page + e : this.Od;
        e = this.page - e - f
      }
      this.page > this.Od - this.bg && this.page >= this.bg && (e = this.Od - this.bg + 1, b = this.Od);
      for (f = e; f <= b; f++) 0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Od && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>", a.push(e.replace("{temp3}", "BMap.I('" + this.da + "').toPage(" + f + ");"))));
      c > this.Od || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.da + "').toPage(" + c + ");"));
      a.push("</p>");
      return a.join("")
    }, toPage: function (a) {
      a = a ? a : 1;
      "function" == typeof this.eK && (this.eK(a), this.page = a);
      this.update && this.Ba()
    }
  });

  function hb(a, b) {
    Y.call(this, a, b);
    b = b || {};
    b.renderOptions = b.renderOptions || {};
    this.gn(b.pageCapacity);
    "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.HC() : this.aD();
    this.ta = [];
    this.Cf = [];
    this.La = -1;
    this.Qa = [];
    var c = this;
    Wa.load("local", function () {
      c.yz()
    }, p)
  }

  A.xa(hb, Y, "LocalSearch");
  hb.rq = 10;
  hb.s1 = 1;
  hb.Dn = 100;
  hb.oG = 2E3;
  hb.xG = 1E5;
  A.extend(hb.prototype, {
    search: function (a, b) {
      this.Qa.push({method: "search", arguments: [a, b]})
    }, bn: function (a, b, c) {
      this.Qa.push({method: "searchInBounds", arguments: [a, b, c]})
    }, Wp: function (a, b, c, e) {
      this.Qa.push({method: "searchNearby", arguments: [a, b, c, e]})
    }, we: function () {
      delete this.Ka;
      delete this.Se;
      delete this.ka;
      delete this.ra;
      this.La = -1;
      this.Va();
      this.m.na.Aa && (this.m.na.Aa.innerHTML = "")
    }, Hm: u(), aD: function () {
      this.m.na.Yt = p
    }, HC: function () {
      this.m.na.Yt = t
    }, gn: function (a) {
      this.m.Qk = "number" == typeof a && !isNaN(a) ? 1 > a ? hb.rq : a > hb.Dn ? hb.rq : a : hb.rq
    }, tf: function () {
      return this.m.Qk
    }, toString: ea("LocalSearch")
  });
  var Qe = hb.prototype;
  V(Qe, {
    clearResults: Qe.we,
    setPageCapacity: Qe.gn,
    getPageCapacity: Qe.tf,
    gotoPage: Qe.Hm,
    searchNearby: Qe.Wp,
    searchInBounds: Qe.bn,
    search: Qe.search,
    enableFirstResultSelection: Qe.aD,
    disableFirstResultSelection: Qe.HC
  });

  function Re(a, b) {
    Y.call(this, a, b)
  }

  A.xa(Re, Y, "BaseRoute");
  A.extend(Re.prototype, {we: u()});

  function Se(a, b) {
    Y.call(this, a, b);
    b = b || {};
    this.hn(b.policy);
    this.nF(b.intercityPolicy);
    this.sF(b.transitTypePolicy);
    this.gn(b.pageCapacity);
    this.Eb = Ee;
    this.En = ve;
    this.ta = [];
    this.La = -1;
    this.m.sl = b.enableTraffic || t;
    this.Qa = [];
    var c = this;
    Wa.load("route", function () {
      c.Dd()
    })
  }

  Se.Dn = 100;
  Se.pP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
  Se.qP = [0, 3, 4, 0, 0, 0, 5];
  A.xa(Se, Re, "TransitRoute");
  A.extend(Se.prototype, {
    hn: function (a) {
      this.m.Pd = 0 <= a && 5 >= a ? a : 0
    }, nF: function (a) {
      this.m.Mm = 0 <= a && 2 >= a ? a : 0
    }, sF: function (a) {
      this.m.nn = 0 <= a && 2 >= a ? a : 0
    }, yA: function (a, b) {
      this.Qa.push({method: "_internalSearch", arguments: [a, b]})
    }, search: function (a, b) {
      this.Qa.push({method: "search", arguments: [a, b]})
    }, gn: function (a) {
      if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
        this.m.Qk = Se.Dn;
        return
      }
      this.m.Qk = "number" !== typeof a ? Se.Dn : 1 <= a && a <= Se.Dn ? Math.round(a) : Se.Dn
    }, toString: ea("TransitRoute"), k2: function (a) {
      return a.replace(/\(.*\)/, "")
    }
  });
  var Te = Se.prototype;
  V(Te, {_internalSearch: Te.yA});

  function Ue(a, b) {
    Y.call(this, a, b);
    this.ta = [];
    this.La = -1;
    this.Qa = [];
    var c = this, e = this.m.na;
    1 !== e.Im && 2 !== e.Im && (e.Im = 1);
    this.Vn = this.m.na.jc ? p : t;
    Wa.load("route", function () {
      c.Dd()
    });
    this.Mx && this.Mx()
  }

  Ue.FP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
  A.xa(Ue, Re, "DWRoute");
  A.extend(Ue.prototype, {
    search: function (a, b, c) {
      this.Qa.push({method: "search", arguments: [a, b, c]})
    }
  });

  function Ve(a, b) {
    Ue.call(this, a, b);
    b = b || {};
    this.m.sl = b.enableTraffic || t;
    this.hn(b.policy);
    this.Eb = Fe;
    this.En = Be
  }

  A.xa(Ve, Ue, "DrivingRoute");
  Ve.prototype.hn = function (a) {
    this.m.Pd = 0 <= a && 5 >= a ? a : 0
  };

  function We(a, b) {
    Ue.call(this, a, b);
    this.Eb = Ge;
    this.En = Ae;
    this.Vn = t
  }

  A.xa(We, Ue, "WalkingRoute");

  function Xe(a, b) {
    Ue.call(this, a, b);
    b = b || {};
    this.m.sl = b.enableTraffic || t;
    this.KS = b.renderOptions.lineType || 0;
    this.Eb = Fe;
    this.En = Be
  }

  A.xa(Xe, Ue, "TruckRoute");
  Xe.prototype.hn = function (a) {
    this.m.Pd = 0 <= a && 5 >= a ? a : 0
  };

  function Ye(a, b) {
    Ue.call(this, a, b);
    this.Eb = Me;
    this.En = Ce;
    this.Vn = t
  }

  A.xa(Ye, Ue, "RidingRoute");

  function Ze(a, b) {
    A.lang.Ja.call(this);
    this.Yf = [];
    this.Sk = [];
    this.m = b;
    this.Bj = a;
    this.map = this.m.na.map || q;
    this.PN = this.m.PN;
    this.Fb = q;
    this.wk = 0;
    this.DF = "";
    this.qf = 1;
    this.hD = "";
    this.Rp = [0, 0, 0, 0, 0, 0, 0];
    this.EM = [];
    this.rs = [1, 1, 1, 1, 1, 1, 1];
    this.AO = [1, 1, 1, 1, 1, 1, 1];
    this.Sp = [0, 0, 0, 0, 0, 0, 0];
    this.$m = [0, 0, 0, 0, 0, 0, 0];
    this.Ib = [{B: "", Id: 0, qn: 0, x: 0, y: 0, sa: -1}, {B: "", Id: 0, qn: 0, x: 0, y: 0, sa: -1}, {
      B: "",
      Id: 0,
      qn: 0,
      x: 0,
      y: 0,
      sa: -1
    }, {B: "", Id: 0, qn: 0, x: 0, y: 0, sa: -1}, {B: "", Id: 0, qn: 0, x: 0, y: 0, sa: -1}, {
      B: "",
      Id: 0,
      qn: 0,
      x: 0,
      y: 0,
      sa: -1
    }, {B: "", Id: 0, qn: 0, x: 0, y: 0, sa: -1}];
    this.fi = -1;
    this.vu = [];
    this.OF = [];
    Wa.load("route", u())
  }

  A.lang.xa(Ze, A.lang.Ja, "RouteAddr");
  var $e = navigator.userAgent;
  /ipad|iphone|ipod|iph/i.test($e);
  var af = /android/i.test($e);

  function bf(a) {
    this.af = a || {}
  }

  A.extend(bf.prototype, {
    ON: function (a, b, c) {
      var e = this;
      Wa.load("route", function () {
        e.Dd(a, b, c)
      })
    }
  });

  function cf(a) {
    this.m = {};
    A.extend(this.m, a);
    this.Qa = [];
    var b = this;
    Wa.load("othersearch", function () {
      b.Dd()
    })
  }

  A.xa(cf, A.lang.Ja, "Geocoder");
  A.extend(cf.prototype, {
    Dm: function (a, b, c) {
      this.Qa.push({method: "getPoint", arguments: [a, b, c]})
    }, Am: function (a, b, c) {
      this.Qa.push({method: "getLocation", arguments: [a, b, c]})
    }, toString: ea("Geocoder")
  });
  var df = cf.prototype;
  V(df, {getPoint: df.Dm, getLocation: df.Am});

  function Geolocation(a) {
    a = a || {};
    this.M = {
      timeout: a.timeout || 1E4,
      maximumAge: a.maximumAge || 6E5,
      enableHighAccuracy: a.enableHighAccuracy || t,
      Ii: a.SDKLocation || t
    };
    this.ue = [];
    var b = this;
    Wa.load("othersearch", function () {
      for (var a = 0, e; e = b.ue[a]; a++) b[e.method].apply(b, e.arguments)
    })
  }

  A.extend(Geolocation.prototype, {
    getCurrentPosition: function (a, b) {
      this.ue.push({method: "getCurrentPosition", arguments: arguments})
    }, getStatus: function () {
      return xe
    }, enableSDKLocation: function () {
      J() && (this.M.Ii = p)
    }, disableSDKLocation: function () {
      this.M.Ii = t
    }
  });

  function ef(a) {
    a = a || {};
    a.na = a.renderOptions || {};
    this.m = {na: {map: a.na.map || q}};
    this.Qa = [];
    var b = this;
    Wa.load("othersearch", function () {
      b.Dd()
    })
  }

  A.xa(ef, A.lang.Ja, "LocalCity");
  A.extend(ef.prototype, {
    get: function (a) {
      this.Qa.push({method: "get", arguments: [a]})
    }, toString: ea("LocalCity")
  });

  function ff() {
    this.Qa = [];
    var a = this;
    Wa.load("othersearch", function () {
      a.Dd()
    })
  }

  A.xa(ff, A.lang.Ja, "Boundary");
  A.extend(ff.prototype, {
    get: function (a, b) {
      this.Qa.push({method: "get", arguments: [a, b]})
    }, toString: ea("Boundary")
  });

  function gf(a, b) {
    Y.call(this, a, b);
    this.CP = Ke;
    this.EP = Ne;
    this.BP = Le;
    this.DP = Oe;
    this.Qa = [];
    var c = this;
    Wa.load("buslinesearch", function () {
      c.Dd()
    })
  }

  gf.zv = I.ua + "iw_plus.gif";
  gf.yS = I.ua + "iw_minus.gif";
  gf.oU = I.ua + "stop_icon.png";
  A.xa(gf, Y);
  A.extend(gf.prototype, {
    getBusList: function (a) {
      this.Qa.push({method: "getBusList", arguments: [a]})
    }, getBusLine: function (a) {
      this.Qa.push({method: "getBusLine", arguments: [a]})
    }, setGetBusListCompleteCallback: function (a) {
      this.m.eN = a || u()
    }, setGetBusLineCompleteCallback: function (a) {
      this.m.dN = a || u()
    }, setBusListHtmlSetCallback: function (a) {
      this.m.bN = a || u()
    }, setBusLineHtmlSetCallback: function (a) {
      this.m.aN = a || u()
    }, setPolylinesSetCallback: function (a) {
      this.m.ME = a || u()
    }
  });

  function hf(a) {
    Y.call(this, a);
    a = a || {};
    this.fb = {input: a.input || q, aC: a.baseDom || q, types: a.types || [], Mt: a.onSearchComplete || u()};
    this.md.src = a.location || "\u5168\u56fd";
    this.gj = "";
    this.sg = q;
    this.WH = "";
    this.Vi();
    Ta(La);
    var b = this;
    Wa.load("autocomplete", function () {
      b.Dd()
    })
  }

  A.xa(hf, Y, "Autocomplete");
  A.extend(hf.prototype, {
    Vi: u(), show: u(), aa: u(), tF: function (a) {
      this.fb.types = a
    }, fn: function (a) {
      this.md.src = a
    }, search: ca("gj"), Ay: ca("WH"), eu: function (a) {
      this.fb.Mt = a
    }
  });
  var Xa;

  function Ra(a, b) {
    function c() {
      f.m.visible ? ("inter" === f.Pe && Ya() && f.m.haveBreakId && f.m.indoorExitControl === p ? A.U.show(f.jr) : A.U.aa(f.jr), this.m.closeControl && this.Gf && this.P && this.P.Ta() === this.R ? A.U.show(f.Gf) : A.U.aa(f.Gf), this.m.forceCloseControl && A.U.show(f.Gf)) : (A.U.aa(f.Gf), A.U.aa(f.jr))
    }

    this.R = "string" == typeof a ? A.fa(a) : a;
    this.da = jf++;
    this.m = {
      enableScrollWheelZoom: p,
      panoramaRenderer: Qa() ? "javascript" : "flash",
      swfSrc: D.mi("main_domain_nocdn", "res/swf/") + "APILoader.swf",
      visible: p,
      indoorExitControl: p,
      indoorFloorControl: t,
      linksControl: p,
      clickOnRoad: p,
      navigationControl: p,
      closeControl: p,
      indoorSceneSwitchControl: p,
      albumsControl: t,
      albumsControlOptions: {},
      copyrightControlOptions: {},
      forceCloseControl: t,
      haveBreakId: t
    };
    var b = b || {}, e;
    for (e in b) this.m[e] = b[e];
    b.closeControl === p && (this.m.forceCloseControl = p);
    b.useWebGL === t && Qa(t);
    this.Oa = {heading: 0, pitch: 0};
    this.co = [];
    this.Mb = this.hb = q;
    this.mk = this.gr();
    this.ta = [];
    this.Rc = 1;
    this.Pe = this.WS = this.Wg = "";
    this.Oe = {};
    this.Sf = q;
    this.eh = [];
    this.yr = [];
    "cvsRender" == this.mk || Qa() ? (this.fk = 90, this.hk = -90) : "cssRender" == this.mk && (this.fk = 45, this.hk = -45);
    this.Dr = t;
    var f = this;
    this.eo = function () {
      this.mk === "flashRender" ? Wa.load("panoramaflash", function () {
        f.Vi()
      }, p) : Wa.load("panorama", function () {
        f.ob()
      }, p);
      b.Ye == "api" ? Ta(Ha) : Ta(Ia);
      this.eo = u()
    };
    this.m.IS !== p && (this.eo(), D.Cq("cus.fire", "count", "z_loadpanoramacount"));
    this.BT(this.R);
    this.addEventListener("id_changed", function () {
      Ta(Fa, {from: b.Ye})
    });
    this.RP();
    this.addEventListener("indoorexit_options_changed", c);
    this.addEventListener("scene_type_changed", c);
    this.addEventListener("onclose_options_changed", c);
    this.addEventListener("onvisible_changed", c)
  }

  var kf = 4, lf = 1, mf = 5, jf = 0;
  A.lang.xa(Ra, A.lang.Ja, "Panorama");
  A.extend(Ra.prototype, {
    RP: function () {
      var a = this, b = this.Gf = H("div");
      b.className = "pano_close";
      b.style.cssText = "z-index: 1201;display: none";
      b.title = "\u9000\u51fa\u5168\u666f";
      b.onclick = function () {
        a.aa()
      };
      this.R.appendChild(b);
      var c = this.jr = H("a");
      c.className = "pano_pc_indoor_exit";
      c.style.cssText = "z-index: 1201;display: none";
      c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
      c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
      c.onclick = function () {
        a.fp()
      };
      this.R.appendChild(c);
      window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
    },
    fp: u(),
    BT: function (a) {
      var b, c;
      b = a.style;
      c = Za(a).position;
      "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
      if ("absolute" === c || "relative" === c) if (a = Za(a).zIndex, !a || "auto" === a) b.zIndex = 0
    },
    BX: x("co"),
    Zb: x("hb"),
    aY: x("hw"),
    eO: x("hw"),
    ma: x("Mb"),
    Na: x("Oa"),
    la: x("Rc"),
    Bg: x("Wg"),
    Y3: function () {
      return this.g2 || []
    },
    R3: x("WS"),
    dt: x("Pe"),
    Dy: function (a) {
      a !== this.Pe && (this.Pe = a, this.dispatchEvent(new P("onscene_type_changed")))
    },
    dO: function (a) {
      a !== mf && (mf = a)
    },
    ZN: function (a) {
      a !== kf && (kf = a)
    },
    Gc: function (a, b, c) {
      "object" === typeof b && (c = b, b = l);
      a != this.hb && (this.Bl = this.hb, this.Cl = this.Mb, this.hb = a, this.Pe = b || "street", this.Mb = q, c && c.pov && this.xd(c.pov))
    },
    va: function (a) {
      a.Ub(this.Mb) || (this.Bl = this.hb, this.Cl = this.Mb, this.Mb = a, this.hb = q)
    },
    xd: function (a) {
      if (a) {
        var a = this.Oa.pitch, b = this.Oa.heading, b = this.AC(b);
        a > this.fk ? a = this.fk : a < this.hk && (a = this.hk);
        this.Dr = p;
        this.Oa.pitch = a;
        this.Oa.heading = b
      }
    },
    K_: function (a, b) {
      this.hk = 0 <= a ? 0 : a;
      this.fk = 0 >= b ? 0 : b
    },
    AC: function (a) {
      return a - 360 * Math.floor(a / 360)
    },
    Xc: function (a) {
      a != this.Rc && (a > kf && (a = kf), a < lf && (a = lf), a != this.Rc && (this.Rc = a), "cssRender" === this.mk && this.xd(this.Oa))
    },
    uB: function () {
      if (this.P) for (var a = this.P.vx(), b = 0; b < a.length; b++) (a[b] instanceof W || a[b] instanceof ed) && a[b].point && this.ta.push(a[b])
    },
    oF: ca("P"),
    du: function (a) {
      this.Sf = a || "none"
    },
    Gj: function (a) {
      for (var b in a) {
        if ("object" == typeof a[b]) for (var c in a[b]) this.m[b][c] = a[b][c]; else this.m[b] = a[b];
        a.closeControl === p && (this.m.forceCloseControl = p);
        a.closeControl === t && (this.m.forceCloseControl = t);
        switch (b) {
          case "linksControl":
            this.dispatchEvent(new P("onlinks_visible_changed"));
            break;
          case "clickOnRoad":
            this.dispatchEvent(new P("onclickonroad_changed"));
            break;
          case "navigationControl":
            this.dispatchEvent(new P("onnavigation_visible_changed"));
            break;
          case "indoorSceneSwitchControl":
            this.dispatchEvent(new P("onindoor_default_switch_mode_changed"));
            break;
          case "albumsControl":
            this.dispatchEvent(new P("onalbums_visible_changed"));
            break;
          case "albumsControlOptions":
            this.dispatchEvent(new P("onalbums_options_changed"));
            break;
          case "copyrightControlOptions":
            this.dispatchEvent(new P("oncopyright_options_changed"));
            break;
          case "closeControl":
            this.dispatchEvent(new P("onclose_options_changed"));
            break;
          case "indoorExitControl":
            this.dispatchEvent(new P("onindoorexit_options_changed"));
            break;
          case "indoorFloorControl":
            this.dispatchEvent(new P("onindoorfloor_options_changed"))
        }
      }
    },
    Mk: function () {
      this.Kl.style.visibility = "hidden"
    },
    Hy: function () {
      this.Kl.style.visibility = "visible"
    },
    KW: function () {
      this.m.enableScrollWheelZoom = p
    },
    kW: function () {
      this.m.enableScrollWheelZoom = t
    },
    show: function () {
      this.m.visible = p
    },
    aa: function () {
      this.m.visible = t
    },
    gr: function () {
      return Ya() && !J() && "javascript" != this.m.panoramaRenderer ? "flashRender" : !J() && Sb() ? "cvsRender" : "cssRender"
    },
    Ra: function (a) {
      this.Oe[a.od] = a
    },
    Jb: function (a) {
      delete this.Oe[a]
    },
    Ax: function () {
      return this.m.visible
    },
    ph: function () {
      return new N(this.R.clientWidth, this.R.clientHeight)
    },
    Ta: x("R"),
    jL: function () {
      var a = D.mi("baidumap", "?"), b = this.Zb();
      if (b) {
        var b = {
          panotype: this.dt(),
          heading: this.Na().heading,
          pitch: this.Na().pitch,
          pid: b,
          panoid: b,
          from: "api"
        }, c;
        for (c in b) a += c + "=" + b[c] + "&"
      }
      return a.slice(0, -1)
    },
    Fx: function () {
      this.Gj({copyrightControlOptions: {logoVisible: t}})
    },
    xF: function () {
      this.Gj({copyrightControlOptions: {logoVisible: p}})
    },
    SB: function (a) {
      function b(a, b) {
        return function () {
          a.yr.push({QM: b, PM: arguments})
        }
      }

      for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++) e = c[f], this[e] = b(this, e);
      this.eh.push(a)
    },
    ZE: function (a) {
      for (var b = this.eh.length; b--;) this.eh[b] === a && this.eh.splice(b, 1)
    },
    mF: u()
  });
  var nf = Ra.prototype;
  V(nf, {
    setId: nf.Gc,
    setPosition: nf.va,
    setPov: nf.xd,
    setZoom: nf.Xc,
    setOptions: nf.Gj,
    getId: nf.Zb,
    getPosition: nf.ma,
    getPov: nf.Na,
    getZoom: nf.la,
    getLinks: nf.BX,
    getBaiduMapUrl: nf.jL,
    hideMapLogo: nf.Fx,
    showMapLogo: nf.xF,
    enableDoubleClickZoom: nf.h3,
    disableDoubleClickZoom: nf.Y2,
    enableScrollWheelZoom: nf.KW,
    disableScrollWheelZoom: nf.kW,
    show: nf.show,
    hide: nf.aa,
    addPlugin: nf.SB,
    removePlugin: nf.ZE,
    getVisible: nf.Ax,
    addOverlay: nf.Ra,
    removeOverlay: nf.Jb,
    getSceneType: nf.dt,
    setPanoramaPOIType: nf.du,
    exitInter: nf.fp,
    setInteractiveState: nf.mF
  });
  V(window, {
    BMAP_PANORAMA_POI_HOTEL: "hotel",
    BMAP_PANORAMA_POI_CATERING: "catering",
    BMAP_PANORAMA_POI_MOVIE: "movie",
    BMAP_PANORAMA_POI_TRANSIT: "transit",
    BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
    BMAP_PANORAMA_POI_NONE: "none",
    BMAP_PANORAMA_INDOOR_SCENE: "inter",
    BMAP_PANORAMA_STREET_SCENE: "street"
  });

  function of() {
    A.lang.Ja.call(this);
    this.od = "PanoramaOverlay_" + this.da;
    this.W = q;
    this.Wa = p
  }

  A.lang.xa(of, A.lang.Ja, "PanoramaOverlayBase");
  A.extend(of.prototype, {
    U3: x("od"), za: function () {
      ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }, remove: function () {
      ba("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }, Rf: function () {
      ba("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
  });

  function pf(a, b) {
    of.call(this);
    var c = {position: q, altitude: 2, displayDistance: p}, b = b || {}, e;
    for (e in b) c[e] = b[e];
    this.Mb = c.position;
    this.Sj = a;
    this.Dq = c.altitude;
    this.dR = c.displayDistance;
    this.GF = c.color;
    this.XL = c.hoverColor;
    this.backgroundColor = c.backgroundColor;
    this.XJ = c.backgroundHoverColor;
    this.borderColor = c.borderColor;
    this.aK = c.borderHoverColor;
    this.fontSize = c.fontSize;
    this.padding = c.padding;
    this.cE = c.imageUrl;
    this.size = c.size;
    this.Ce = c.image;
    this.width = c.width;
    this.height = c.height;
    this.sY = c.imageData;
    this.borderWidth = c.borderWidth
  }

  A.lang.xa(pf, of, "PanoramaLabel");
  A.extend(pf.prototype, {
    x3: x("borderWidth"),
    getImageData: x("sY"),
    Gm: x("GF"),
    M3: x("XL"),
    t3: x("backgroundColor"),
    u3: x("XJ"),
    v3: x("borderColor"),
    w3: x("aK"),
    K3: x("fontSize"),
    V3: x("padding"),
    N3: x("cE"),
    zb: x("size"),
    ox: x("Ce"),
    va: function (a) {
      this.Mb = a;
      this.Rf("position", a)
    },
    ma: x("Mb"),
    Pc: function (a) {
      this.Sj = a;
      this.Rf("content", a)
    },
    Dk: x("Sj"),
    gF: function (a) {
      this.Dq = a;
      this.Rf("altitude", a)
    },
    jp: x("Dq"),
    Na: function () {
      var a = this.ma(), b = q, c = q;
      this.W && (c = this.W.ma());
      if (a && c) if (a.Ub(c)) b = this.W.Na(); else {
        b = {};
        b.heading = qf(a.lng - c.lng, a.lat - c.lat) || 0;
        var a = b, c = this.jp(), e = this.Yn();
        a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
      }
      return b
    },
    Yn: function () {
      var a = 0, b, c;
      this.W && (b = this.W.ma(), (c = this.ma()) && !c.Ub(b) && (a = T.Ek(b, c)));
      return a
    },
    aa: function () {
      ba("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
    },
    show: function () {
      ba("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
    },
    Rf: u()
  });
  var rf = pf.prototype;
  V(rf, {
    setPosition: rf.va,
    getPosition: rf.ma,
    setContent: rf.Pc,
    getContent: rf.Dk,
    setAltitude: rf.gF,
    getAltitude: rf.jp,
    getPov: rf.Na,
    show: rf.show,
    hide: rf.aa
  });

  function sf(a, b) {
    of.call(this);
    var c = {icon: "", title: "", panoInfo: q, altitude: 2}, b = b || {}, e;
    for (e in b) c[e] = b[e];
    this.Mb = a;
    this.TH = c.icon;
    this.qJ = c.title;
    this.Dq = c.altitude;
    this.nT = c.panoInfo;
    this.Oa = {heading: 0, pitch: 0}
  }

  A.lang.xa(sf, of, "PanoramaMarker");
  A.extend(sf.prototype, {
    va: function (a) {
      this.Mb = a;
      this.Rf("position", a)
    }, ma: x("Mb"), Hc: function (a) {
      this.qJ = a;
      this.Rf("title", a)
    }, rp: x("qJ"), Wb: function (a) {
      this.TH = icon;
      this.Rf("icon", a)
    }, lp: x("TH"), gF: function (a) {
      this.Dq = a;
      this.Rf("altitude", a)
    }, jp: x("Dq"), ND: x("nT"), Na: function () {
      var a = q;
      if (this.W) {
        var a = this.W.ma(), b = this.ma(), a = qf(b.lng - a.lng, b.lat - a.lat);
        isNaN(a) && (a = 0);
        a = {heading: a, pitch: 0}
      } else a = this.Oa;
      return a
    }, Rf: u()
  });
  var tf = sf.prototype;
  V(tf, {
    setPosition: tf.va,
    getPosition: tf.ma,
    setTitle: tf.Hc,
    getTitle: tf.rp,
    setAltitude: tf.gF,
    getAltitude: tf.jp,
    getPanoInfo: tf.ND,
    getIcon: tf.lp,
    setIcon: tf.Wb,
    getPov: tf.Na
  });

  function qf(a, b) {
    var c = 0;
    if (0 !== a && 0 !== b) {
      var c = 180 * (Math.atan(a / b) / Math.PI), e = 0;
      0 < a && 0 > b && (e = 90);
      0 > a && 0 > b && (e = 180);
      0 > a && 0 < b && (e = 270);
      c = (c + 90) % 90 + e
    } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
    return Math.round(c)
  }

  function Qa(a) {
    if ("boolean" === typeof uf) return uf;
    if (a === t || !window.WebGLRenderingContext) return uf = t;
    if (A.platform.yj) {
      a = 0;
      try {
        var b = q, c = navigator.userAgent.toLowerCase();
        0 < c.indexOf("android") && (b = (c.match(/android [\d._]+/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."), b = parseInt(b.split(".")[0], 10));
        a = b
      } catch (e) {
        console.error("\u83b7\u53d6\u5b89\u5353\u7248\u672c\u5931\u8d25 => " + e)
      }
      if (5 > a) return uf = t
    }
    c = document.createElement("canvas");
    a = q;
    try {
      a = c.getContext("webgl")
    } catch (f) {
      uf = t
    }
    return uf = a === q ? t : p
  }

  var uf;

  function vf() {
    if ("boolean" === typeof wf) return wf;
    wf = p;
    if (A.platform.mE) return p;
    var a = navigator.userAgent;
    return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p : wf = t
  }

  var wf;

  function Oc(a, b) {
    this.W = a || q;
    var c = this;
    c.W && c.ha();
    Wa.load("pservice", function () {
      c.wQ()
    });
    "api" == (b || {}).Ye ? Ta(Ja) : Ta(Ka);
    this.Cd = {
      getPanoramaById: [],
      getPanoramaByLocation: [],
      getVisiblePOIs: [],
      getRecommendPanosById: [],
      getPanoramaVersions: [],
      checkPanoSupportByCityCode: [],
      getPanoramaByPOIId: [],
      getCopyrightProviders: []
    }
  }

  D.Rk(function (a) {
    "flashRender" !== a.gr() && new Oc(a, {Ye: "api"})
  });
  A.extend(Oc.prototype, {
    ha: function () {
      function a(a) {
        if (a) {
          if (a.id != b.hw) {
            b.eO(a.id);
            b.ia = a;
            vf() || b.dispatchEvent(new P("onthumbnail_complete"));
            b.hb != q && (b.Cl = b._position);
            for (var c in a) if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
              case "position":
                b.Mb = a[c];
                break;
              case "id":
                b.hb = a[c];
                break;
              case "links":
                b.co = a[c];
                break;
              case "zoom":
                b.Rc = a[c]
            }
            if (b.Cl) {
              var g = b.Cl, i = b._position;
              c = g.lat;
              var k = i.lat, m = U(k - c), g = U(i.lng - g.lng);
              c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(U(c)) * Math.cos(U(k)) * Math.sin(g / 2) * Math.sin(g / 2);
              b.lH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
            }
            c = new P("ondataload");
            b.show();
            c.data = a;
            b.dispatchEvent(c);
            b.dispatchEvent(new P("onposition_changed"));
            b.dispatchEvent(new P("onlinks_changed"));
            b.dispatchEvent(new P("oncopyright_changed"), {copyright: a.copyright});
            a.jm ? (b.Gj({haveBreakId: p}), Ya() && b.m.closeControl && A.U.show(b.jr)) : A.U.aa(b.jr)
          }
        } else b.hb = b.Bl, b.Mb = b.Cl, b.dispatchEvent(new P("onnoresult"))
      }

      var b = this.W, c = this;
      b.addEventListener("id_changed", function () {
        c.pp(b.Zb(), a)
      });
      b.addEventListener("iid_changed", function () {
        c.fh(Oc.ml + "qt=idata&iid=" + b.oA + "&fn=", function (b) {
          if (b && b.result && 0 == b.result.error) {
            var b = b.content[0].interinfo, f = {};
            f.jm = b.BreakID;
            for (var g = b.Defaultfloor, i = q, k = 0; k < b.Floors.length; k++) if (b.Floors[k].Floor == g) {
              i = b.Floors[k];
              break
            }
            f.id = i.StartID || i.Points[0].PID;
            c.pp(f.id, a, f)
          }
        })
      });
      b.addEventListener("position_changed_inner", function () {
        c.tj(b.ma(), a)
      })
    }, pp: function (a, b) {
      this.Cd.getPanoramaById.push(arguments)
    }, tj: function (a, b, c) {
      this.Cd.getPanoramaByLocation.push(arguments)
    }, XD: function (a, b, c, e) {
      this.Cd.getVisiblePOIs.push(arguments)
    }, yx: function (a, b) {
      this.Cd.getRecommendPanosById.push(arguments)
    }, xx: function (a) {
      this.Cd.getPanoramaVersions.push(arguments)
    }, fC: function (a, b) {
      this.Cd.checkPanoSupportByCityCode.push(arguments)
    }, wx: function (a, b) {
      this.Cd.getPanoramaByPOIId.push(arguments)
    }, nL: function (a) {
      this.Cd.getCopyrightProviders.push(arguments)
    }
  });
  var xf = Oc.prototype;
  V(xf, {getPanoramaById: xf.pp, getPanoramaByLocation: xf.tj, getPanoramaByPOIId: xf.wx});

  function Nc(a) {
    wd.call(this);
    "api" == (a || {}).Ye ? Ta(Da) : Ta(Ea)
  }

  Nc.FG = D.mi("pano", "tile/");
  Nc.prototype = new wd;
  Nc.prototype.getTilesUrl = function (a, b) {
    var c = Nc.FG[(a.x + a.y) % Nc.FG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
    A.ga.oa && 6 >= A.ga.oa && (c += "&color_dep=32");
    return c
  };
  Nc.prototype.At = ea(p);
  yf.ae = new T;

  function yf() {
  }

  A.extend(yf, {
    lW: function (a, b, c) {
      c = A.lang.Tc(c);
      b = {data: b};
      "position_changed" == a && (b.data = yf.ae.Ej(new R(b.data.mercatorX, b.data.mercatorY)));
      c.dispatchEvent(new P("on" + a), b)
    }
  });
  var zf = yf;
  V(zf, {dispatchFlashEvent: zf.lW});
  var Af = {sP: 50};
  Af.Mu = D.mi("pano")[0];
  Af.Ku = {width: 220, height: 60};
  A.extend(Af, {
    fM: function (a, b, c, e) {
      if (!b || !c || !c.lngLat || !c.panoInstance) e(); else {
        this.mo === l && (this.mo = new Oc(q, {Ye: "api"}));
        var f = this;
        this.mo.fC(b, function (b) {
          b ? f.mo.tj(c.lngLat, Af.sP, function (b) {
            if (b && b.id) {
              var g = b.id, m = b.zh, b = b.Ah, n = Oc.ae.Hg(c.lngLat), o = f.aS(n, {x: m, y: b}),
                m = f.yL(g, o, 0, Af.Ku.width, Af.Ku.height);
              a.content = f.bS(a.content, m, c.titleTip, c.beforeDomId);
              a.addEventListener("open", function () {
                ja.V(A.Ic("infoWndPano"), "click", function () {
                  c.panoInstance.Gc(g);
                  c.panoInstance.show();
                  c.panoInstance.xd({heading: o, pitch: 0})
                })
              })
            }
            e()
          }) : e()
        })
      }
    }, bS: function (a, b, c, e) {
      var c = c || "", f;
      !e || !a.split(e)[0] ? (e = a, a = "") : (e = a.split(e)[0], f = e.lastIndexOf("<"), e = a.substring(0, f), a = a.substring(f));
      f = [];
      var g = Af.Ku.width, i = Af.Ku.height;
      f.push(e);
      f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
      f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
      f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
      f.push("</div>");
      f.push(a);
      return f.join("")
    }, aS: function (a, b) {
      var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
      0 > c && (c += 360);
      return c
    }, yL: function (a, b, c, e, f) {
      var g = {panoId: a, panoHeading: b || 0, panoPitch: c || 0, width: e, height: f};
      return (Af.Mu + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function (a, b) {
        return g[b]
      })
    }
  });
  var Bf = document, Cf = Math, Df = Bf.createElement("div").style, Ef;
  a:{
    for (var Ff = ["t", "webkitT", "MozT", "msT", "OT"], Gf, Hf = 0, If = Ff.length; Hf < If; Hf++) if (Gf = Ff[Hf] + "ransform", Gf in Df) {
      Ef = Ff[Hf].substr(0, Ff[Hf].length - 1);
      break a
    }
    Ef = t
  }
  var Jf = Ef ? "-" + Ef.toLowerCase() + "-" : "", Lf = Kf("transform"), Mf = Kf("transitionProperty"),
    Nf = Kf("transitionDuration"), Of = Kf("transformOrigin"), Pf = Kf("transitionTimingFunction"),
    Qf = Kf("transitionDelay"), af = /android/gi.test(navigator.appVersion),
    Rf = /iphone|ipad/gi.test(navigator.appVersion), Sf = /hp-tablet/gi.test(navigator.appVersion),
    Tf = Kf("perspective") in Df, Uf = "ontouchstart" in window && !Sf, Vf = Ef !== t, Wf = Kf("transition") in Df,
    Xf = "onorientationchange" in window ? "orientationchange" : "resize", Yf = Uf ? "touchstart" : "mousedown",
    Zf = Uf ? "touchmove" : "mousemove", $f = Uf ? "touchend" : "mouseup", ag = Uf ? "touchcancel" : "mouseup",
    cg = Ef === t ? t : {
      "": "transitionend",
      webkit: "webkitTransitionEnd",
      Moz: "transitionend",
      O: "otransitionend",
      ms: "MSTransitionEnd"
    }[Ef],
    dg = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
      return setTimeout(a, 1)
    },
    eg = window.cancelRequestAnimationFrame || window.G6 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
    fg = Tf ? " translateZ(0)" : "";

  function gg(a, b) {
    var c = this, e;
    c.yn = "object" == typeof a ? a : Bf.getElementById(a);
    c.yn.style.overflow = "hidden";
    c.Rb = c.yn.children[0];
    c.options = {
      wp: p,
      tn: p,
      x: 0,
      y: 0,
      Mo: p,
      fV: t,
      ay: p,
      AE: p,
      fl: p,
      Fi: t,
      u0: 0,
      Kw: t,
      Cx: p,
      ni: p,
      Gi: p,
      nD: af,
      Gx: Rf,
      SW: Rf && Tf,
      dF: "",
      zoom: t,
      hl: 1,
      mq: 4,
      nW: 2,
      YO: "scroll",
      lu: t,
      Ky: 1,
      hN: q,
      $M: function (a) {
        a.preventDefault()
      },
      kN: q,
      ZM: q,
      jN: q,
      YM: q,
      fy: q,
      lN: q,
      cN: q,
      Lp: q,
      mN: q,
      Kp: q
    };
    for (e in b) c.options[e] = b[e];
    c.x = c.options.x;
    c.y = c.options.y;
    c.options.fl = Vf && c.options.fl;
    c.options.ni = c.options.wp && c.options.ni;
    c.options.Gi = c.options.tn && c.options.Gi;
    c.options.zoom = c.options.fl && c.options.zoom;
    c.options.Fi = Wf && c.options.Fi;
    c.options.zoom && af && (fg = "");
    c.Rb.style[Mf] = c.options.fl ? Jf + "transform" : "top left";
    c.Rb.style[Nf] = "0";
    c.Rb.style[Of] = "0 0";
    c.options.Fi && (c.Rb.style[Pf] = "cubic-bezier(0.33,0.66,0.66,1)");
    c.options.fl ? c.Rb.style[Lf] = "translate(" + c.x + "px," + c.y + "px)" + fg : c.Rb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
    c.options.Fi && (c.options.nD = p);
    c.refresh();
    c.ha(Xf, window);
    c.ha(Yf);
    !Uf && "none" != c.options.YO && (c.ha("DOMMouseScroll"), c.ha("mousewheel"));
    c.options.Kw && (c.sV = setInterval(function () {
      c.uQ()
    }, 500));
    this.options.Cx && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function (a, b, c) {
      var e = Node.prototype.removeEventListener;
      a === "click" ? e.call(document.body, a, b.WL || b, c) : e.call(document.body, a, b, c)
    }, document.body.addEventListener = function (a, b, c) {
      var e = Node.prototype.addEventListener;
      a === "click" ? e.call(document.body, a, b.WL || (b.WL = function (a) {
        a.WZ || b(a)
      }), c) : e.call(document.body, a, b, c)
    }), c.ha("click", document.body, p))
  }

  gg.prototype = {
    enabled: p, x: 0, y: 0, Hj: [], scale: 1, vC: 0, wC: 0, bf: [], xf: [], $B: q, Uy: 0, handleEvent: function (a) {
      switch (a.type) {
        case Yf:
          if (!Uf && 0 !== a.button) break;
          this.$v(a);
          break;
        case Zf:
          this.YS(a);
          break;
        case $f:
        case ag:
          this.iv(a);
          break;
        case Xf:
          this.nB();
          break;
        case "DOMMouseScroll":
        case "mousewheel":
          this.zU(a);
          break;
        case cg:
          this.wU(a);
          break;
        case "click":
          this.EQ(a)
      }
    }, uQ: function () {
      !this.yh && (!this.il && !(this.gm || this.zy == this.Rb.offsetWidth * this.scale && this.Vp == this.Rb.offsetHeight * this.scale)) && this.refresh()
    }, Rv: function (a) {
      var b;
      this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Bf.createElement("div"), this.options.dF ? b.className = this.options.dF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Gi ? "7" : "2") + "px" : "width:7px;bottom:" + (this.ni ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + Jf + "transition-property:opacity;" + Jf + "transition-duration:" + (this.options.SW ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Gx ? "0" : "1"), this.yn.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = Bf.createElement("div"), this.options.dF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Jf + "background-clip:padding-box;" + Jf + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Jf + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + Jf + "transition-property:" + Jf + "transform;" + Jf + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Jf + "transition-duration:0;" + Jf + "transform: translate(0,0)" + fg, this.options.Fi && (b.style.cssText += ";" + Jf + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.SL = this.TL.clientWidth, this.kY = Cf.max(Cf.round(this.SL * this.SL / this.zy), 8), this.jY.style.width = this.kY + "px") : (this.QO = this.RO.clientHeight, this.R0 = Cf.max(Cf.round(this.QO * this.QO / this.Vp), 8), this.Q0.style.height = this.R0 + "px"), this.oB(a, p)) : this[a + "ScrollbarWrapper"] && (Vf && (this[a + "ScrollbarIndicator"].style[Lf] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = q, this[a + "ScrollbarIndicator"] = q)
    }, nB: function () {
      var a = this;
      setTimeout(function () {
        a.refresh()
      }, af ? 200 : 0)
    }, Cr: function (a, b) {
      this.il || (a = this.wp ? a : 0, b = this.tn ? b : 0, this.options.fl ? this.Rb.style[Lf] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + fg : (a = Cf.round(a), b = Cf.round(b), this.Rb.style.left = a + "px", this.Rb.style.top = b + "px"), this.x = a, this.y = b, this.oB("h"), this.oB("v"))
    }, oB: function (a, b) {
      var c = "h" == a ? this.x : this.y;
      this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.nD || (c = this[a + "ScrollbarIndicatorSize"] + Cf.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.nD ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Cf.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[Qf] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Gx ? "0" : "1", this[a + "ScrollbarIndicator"].style[Lf] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + fg)
    }, EQ: function (a) {
      if (a.wR === p) return this.OB = a.target, this.gx = Date.now(), p;
      if (this.OB && this.gx) {
        if (600 < Date.now() - this.gx) return this.gx = this.OB = q, p
      } else {
        for (var b = a.target; b != this.Rb && b != document.body;) b = b.parentNode;
        if (b == document.body) return p
      }
      for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
      b = b.tagName.toLowerCase();
      if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.WZ = p, a.stopPropagation(), a.preventDefault(), this.gx = this.OB = q, t
    }, $v: function (a) {
      var b = Uf ? a.touches[0] : a, c, e;
      if (this.enabled) {
        this.options.$M && this.options.$M.call(this, a);
        (this.options.Fi || this.options.zoom) && this.uJ(0);
        this.il = this.gm = this.yh = t;
        this.FC = this.EC = this.vw = this.uw = this.KC = this.JC = 0;
        this.options.zoom && (Uf && 1 < a.touches.length) && (e = Cf.abs(a.touches[0].pageX - a.touches[1].pageX), c = Cf.abs(a.touches[0].pageY - a.touches[1].pageY), this.w0 = Cf.sqrt(e * e + c * c), this.hy = Cf.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.YF) / 2 - this.x, this.iy = Cf.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.ZF) / 2 - this.y, this.options.Lp && this.options.Lp.call(this, a));
        if (this.options.ay && (this.options.fl ? (c = getComputedStyle(this.Rb, q)[Lf].replace(/[^0-9\-.,]/g, "").split(","), e = +(c[12] || c[4]), c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Rb, q).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.Rb, q).top.replace(/[^0-9-]/g, "")), e != this.x || c != this.y)) this.options.Fi ? this.fe(cg) : eg(this.$B), this.Hj = [], this.Cr(e, c), this.options.fy && this.options.fy.call(this);
        this.ww = this.x;
        this.xw = this.y;
        this.pu = this.x;
        this.qu = this.y;
        this.zh = b.pageX;
        this.Ah = b.pageY;
        this.startTime = a.timeStamp || Date.now();
        this.options.kN && this.options.kN.call(this, a);
        this.ha(Zf, window);
        this.ha($f, window);
        this.ha(ag, window)
      }
    }, YS: function (a) {
      var b = Uf ? a.touches[0] : a, c = b.pageX - this.zh, e = b.pageY - this.Ah, f = this.x + c, g = this.y + e,
        i = a.timeStamp || Date.now();
      this.options.ZM && this.options.ZM.call(this, a);
      if (this.options.zoom && Uf && 1 < a.touches.length) f = Cf.abs(a.touches[0].pageX - a.touches[1].pageX), g = Cf.abs(a.touches[0].pageY - a.touches[1].pageY), this.v0 = Cf.sqrt(f * f + g * g), this.il = p, b = 1 / this.w0 * this.v0 * this.scale, b < this.options.hl ? b = 0.5 * this.options.hl * Math.pow(2, b / this.options.hl) : b > this.options.mq && (b = 2 * this.options.mq * Math.pow(0.5, this.options.mq / b)), this.Dp = b / this.scale, f = this.hy - this.hy * this.Dp + this.x, g = this.iy - this.iy * this.Dp + this.y, this.Rb.style[Lf] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + fg, this.options.mN && this.options.mN.call(this, a); else {
        this.zh = b.pageX;
        this.Ah = b.pageY;
        if (0 < f || f < this.qe) f = this.options.Mo ? this.x + c / 2 : 0 <= f || 0 <= this.qe ? 0 : this.qe;
        if (g > this.vf || g < this.vd) g = this.options.Mo ? this.y + e / 2 : g >= this.vf || 0 <= this.vd ? this.vf : this.vd;
        this.JC += c;
        this.KC += e;
        this.uw = Cf.abs(this.JC);
        this.vw = Cf.abs(this.KC);
        6 > this.uw && 6 > this.vw || (this.options.AE && (this.uw > this.vw + 5 ? (g = this.y, e = 0) : this.vw > this.uw + 5 && (f = this.x, c = 0)), this.yh = p, this.Cr(f, g), this.EC = 0 < c ? -1 : 0 > c ? 1 : 0, this.FC = 0 < e ? -1 : 0 > e ? 1 : 0, 300 < i - this.startTime && (this.startTime = i, this.pu = this.x, this.qu = this.y), this.options.jN && this.options.jN.call(this, a))
      }
    }, iv: function (a) {
      if (!(Uf && 0 !== a.touches.length)) {
        var b = this, c = Uf ? a.changedTouches[0] : a, e, f, g = {Ia: 0, time: 0}, i = {Ia: 0, time: 0},
          k = (a.timeStamp || Date.now()) - b.startTime;
        e = b.x;
        f = b.y;
        b.fe(Zf, window);
        b.fe($f, window);
        b.fe(ag, window);
        b.options.YM && b.options.YM.call(b, a);
        if (b.il) e = b.scale * b.Dp, e = Math.max(b.options.hl, e), e = Math.min(b.options.mq, e), b.Dp = e / b.scale, b.scale = e, b.x = b.hy - b.hy * b.Dp + b.x, b.y = b.iy - b.iy * b.Dp + b.y, b.Rb.style[Nf] = "200ms", b.Rb.style[Lf] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + fg, b.il = t, b.refresh(), b.options.Kp && b.options.Kp.call(b, a); else {
          if (b.yh) {
            if (300 > k && b.options.ay) {
              g = e ? b.jI(e - b.pu, k, -b.x, b.zy - b.Du + b.x, b.options.Mo ? b.Du : 0) : g;
              i = f ? b.jI(f - b.qu, k, -b.y, 0 > b.vd ? b.Vp - b.zn + b.y - b.vf : 0, b.options.Mo ? b.zn : 0) : i;
              e = b.x + g.Ia;
              f = b.y + i.Ia;
              if (0 < b.x && 0 < e || b.x < b.qe && e < b.qe) g = {Ia: 0, time: 0};
              if (b.y > b.vf && f > b.vf || b.y < b.vd && f < b.vd) i = {Ia: 0, time: 0}
            }
            g.Ia || i.Ia ? (c = Cf.max(Cf.max(g.time, i.time), 10), b.options.lu && (g = e - b.ww, i = f - b.xw, Cf.abs(g) < b.options.Ky && Cf.abs(i) < b.options.Ky ? b.scrollTo(b.ww, b.xw, 200) : (g = b.hJ(e, f), e = g.x, f = g.y, c = Cf.max(g.time, c))), b.scrollTo(Cf.round(e), Cf.round(f), c)) : b.options.lu ? (g = e - b.ww, i = f - b.xw, Cf.abs(g) < b.options.Ky && Cf.abs(i) < b.options.Ky ? b.scrollTo(b.ww, b.xw, 200) : (g = b.hJ(b.x, b.y), (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.po(200)
          } else {
            if (Uf) if (b.EK && b.options.zoom) clearTimeout(b.EK), b.EK = q, b.options.Lp && b.options.Lp.call(b, a), b.zoom(b.zh, b.Ah, 1 == b.scale ? b.options.nW : 1), b.options.Kp && setTimeout(function () {
              b.options.Kp.call(b, a)
            }, 200); else if (this.options.Cx) {
              for (e = c.target; 1 != e.nodeType;) e = e.parentNode;
              f = e.tagName.toLowerCase();
              "select" != f && "input" != f && "textarea" != f ? (f = Bf.createEvent("MouseEvents"), f.initMouseEvent("click", p, p, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, q), f.wR = p, e.dispatchEvent(f)) : e.focus()
            }
            b.po(400)
          }
          b.options.lN && b.options.lN.call(b, a)
        }
      }
    }, po: function (a) {
      var b = 0 <= this.x ? 0 : this.x < this.qe ? this.qe : this.x,
        c = this.y >= this.vf || 0 < this.vd ? this.vf : this.y < this.vd ? this.vd : this.y;
      if (b == this.x && c == this.y) {
        if (this.yh && (this.yh = t, this.options.fy && this.options.fy.call(this)), this.ni && this.options.Gx && ("webkit" == Ef && (this.TL.style[Qf] = "300ms"), this.TL.style.opacity = "0"), this.Gi && this.options.Gx) "webkit" == Ef && (this.RO.style[Qf] = "300ms"), this.RO.style.opacity = "0"
      } else this.scrollTo(b, c, a || 0)
    }, zU: function (a) {
      var b = this, c, e;
      if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12, e = a.wheelDeltaY / 12; else if ("wheelDelta" in a) c = e = a.wheelDelta / 12; else if ("detail" in a) c = e = 3 * -a.detail; else return;
      if ("zoom" == b.options.YO) {
        if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)), e < b.options.hl && (e = b.options.hl), e > b.options.mq && (e = b.options.mq), e != b.scale) !b.Uy && b.options.Lp && b.options.Lp.call(b, a), b.Uy++, b.zoom(a.pageX, a.pageY, e, 400), setTimeout(function () {
          b.Uy--;
          !b.Uy && b.options.Kp && b.options.Kp.call(b, a)
        }, 400)
      } else c = b.x + c, e = b.y + e, 0 < c ? c = 0 : c < b.qe && (c = b.qe), e > b.vf ? e = b.vf : e < b.vd && (e = b.vd), 0 > b.vd && b.scrollTo(c, e, 0)
    }, wU: function (a) {
      a.target == this.Rb && (this.fe(cg), this.AB())
    }, AB: function () {
      var a = this, b = a.x, c = a.y, e = Date.now(), f, g, i;
      a.gm || (a.Hj.length ? (f = a.Hj.shift(), f.x == b && f.y == c && (f.time = 0), a.gm = p, a.yh = p, a.options.Fi) ? (a.uJ(f.time), a.Cr(f.x, f.y), a.gm = t, f.time ? a.ha(cg) : a.po(0)) : (i = function () {
        var k = Date.now(), m;
        if (k >= e + f.time) {
          a.Cr(f.x, f.y);
          a.gm = t;
          a.options.vZ && a.options.vZ.call(a);
          a.AB()
        } else {
          k = (k - e) / f.time - 1;
          g = Cf.sqrt(1 - k * k);
          k = (f.x - b) * g + b;
          m = (f.y - c) * g + c;
          a.Cr(k, m);
          if (a.gm) a.$B = dg(i)
        }
      }, i()) : a.po(400))
    }, uJ: function (a) {
      a += "ms";
      this.Rb.style[Nf] = a;
      this.ni && (this.jY.style[Nf] = a);
      this.Gi && (this.Q0.style[Nf] = a)
    }, jI: function (a, b, c, e, f) {
      var b = Cf.abs(a) / b, g = b * b / 0.0012;
      0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))), b = b * c / g, g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))), b = b * e / g, g = e);
      return {Ia: g * (0 > a ? -1 : 1), time: Cf.round(b / 6.0E-4)}
    }, jk: function (a) {
      for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
      a != this.yn && (b *= this.scale, c *= this.scale);
      return {left: b, top: c}
    }, hJ: function (a, b) {
      var c, e, f;
      f = this.bf.length - 1;
      c = 0;
      for (e = this.bf.length; c < e; c++) if (a >= this.bf[c]) {
        f = c;
        break
      }
      f == this.vC && (0 < f && 0 > this.EC) && f--;
      a = this.bf[f];
      e = (e = Cf.abs(a - this.bf[this.vC])) ? 500 * (Cf.abs(this.x - a) / e) : 0;
      this.vC = f;
      f = this.xf.length - 1;
      for (c = 0; c < f; c++) if (b >= this.xf[c]) {
        f = c;
        break
      }
      f == this.wC && (0 < f && 0 > this.FC) && f--;
      b = this.xf[f];
      c = (c = Cf.abs(b - this.xf[this.wC])) ? 500 * (Cf.abs(this.y - b) / c) : 0;
      this.wC = f;
      f = Cf.round(Cf.max(e, c)) || 200;
      return {x: a, y: b, time: f}
    }, ha: function (a, b, c) {
      (b || this.Rb).addEventListener(a, this, !!c)
    }, fe: function (a, b, c) {
      (b || this.Rb).removeEventListener(a, this, !!c)
    }, CC: ha(2), refresh: function () {
      var a, b, c, e = 0;
      b = 0;
      this.scale < this.options.hl && (this.scale = this.options.hl);
      this.Du = this.yn.clientWidth || 1;
      this.zn = this.yn.clientHeight || 1;
      this.vf = -this.options.u0 || 0;
      this.zy = Cf.round(this.Rb.offsetWidth * this.scale);
      this.Vp = Cf.round((this.Rb.offsetHeight + this.vf) * this.scale);
      this.qe = this.Du - this.zy;
      this.vd = this.zn - this.Vp + this.vf;
      this.FC = this.EC = 0;
      this.options.hN && this.options.hN.call(this);
      this.wp = this.options.wp && 0 > this.qe;
      this.tn = this.options.tn && (!this.options.fV && !this.wp || this.Vp > this.zn);
      this.ni = this.wp && this.options.ni;
      this.Gi = this.tn && this.options.Gi && this.Vp > this.zn;
      a = this.jk(this.yn);
      this.YF = -a.left;
      this.ZF = -a.top;
      if ("string" == typeof this.options.lu) {
        this.bf = [];
        this.xf = [];
        c = this.Rb.querySelectorAll(this.options.lu);
        a = 0;
        for (b = c.length; a < b; a++) e = this.jk(c[a]), e.left += this.YF, e.top += this.ZF, this.bf[a] = e.left < this.qe ? this.qe : e.left * this.scale, this.xf[a] = e.top < this.vd ? this.vd : e.top * this.scale
      } else if (this.options.lu) {
        for (this.bf = []; e >= this.qe;) this.bf[b] = e, e -= this.Du, b++;
        this.qe % this.Du && (this.bf[this.bf.length] = this.qe - this.bf[this.bf.length - 1] + this.bf[this.bf.length - 1]);
        b = e = 0;
        for (this.xf = []; e >= this.vd;) this.xf[b] = e, e -= this.zn, b++;
        this.vd % this.zn && (this.xf[this.xf.length] = this.vd - this.xf[this.xf.length - 1] + this.xf[this.xf.length - 1])
      }
      this.Rv("h");
      this.Rv("v");
      this.il || (this.Rb.style[Nf] = "0", this.po(400))
    }, scrollTo: function (a, b, c, e) {
      var f = a;
      this.stop();
      f.length || (f = [{x: a, y: b, time: c, YZ: e}]);
      a = 0;
      for (b = f.length; a < b; a++) f[a].YZ && (f[a].x = this.x - f[a].x, f[a].y = this.y - f[a].y), this.Hj.push({
        x: f[a].x,
        y: f[a].y,
        time: f[a].time || 0
      });
      this.AB()
    }, disable: function () {
      this.stop();
      this.po(0);
      this.enabled = t;
      this.fe(Zf, window);
      this.fe($f, window);
      this.fe(ag, window)
    }, enable: function () {
      this.enabled = p
    }, stop: function () {
      this.options.Fi ? this.fe(cg) : eg(this.$B);
      this.Hj = [];
      this.gm = this.yh = t
    }, zoom: function (a, b, c, e) {
      var f = c / this.scale;
      this.options.fl && (this.il = p, e = e === l ? 200 : e, a = a - this.YF - this.x, b = b - this.ZF - this.y, this.x = a - a * f + this.x, this.y = b - b * f + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.qe ? this.qe : this.x, this.y = this.y > this.vf ? this.vf : this.y < this.vd ? this.vd : this.y, this.Rb.style[Nf] = e + "ms", this.Rb.style[Lf] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + fg, this.il = t)
    }
  };

  function Kf(a) {
    if ("" === Ef) return a;
    a = a.charAt(0).toUpperCase() + a.substr(1);
    return Ef + a
  }

  Df = q;

  function hg(a) {
    this.m = {anchor: Hc, offset: new N(0, 0), maxWidth: "100%", imageHeight: 80};
    var a = a || {}, b;
    for (b in a) this.m[b] = a[b];
    this.Ul = new Oc(q, {Ye: "api"});
    this.kk = [];
    this.W = q;
    this.kg = {height: this.m.imageHeight, width: this.m.imageHeight * ig};
    this.Yc = this.pB = this.jm = this.bd = q
  }

  var jg = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
    kg = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
  D.Rk(function (a) {
    var b = q;
    a.addEventListener("position_changed", function () {
      a.m.visible && a.m.albumsControl === p && (b ? b.vy(a.Zb()) : (b = new hg(a.m.albumsControlOptions), b.za(a)))
    });
    a.addEventListener("albums_visible_changed", function () {
      a.m.albumsControl === p ? (b ? b.vy(a.Zb()) : (b = new hg(a.m.albumsControlOptions), b.za(a)), b.show()) : b.aa()
    });
    a.addEventListener("albums_options_changed", function () {
      b && b.Gj(a.m.albumsControlOptions)
    });
    a.addEventListener("visible_changed", function () {
      b && (a.Ax() ? a.m.albumsControl === p && (b.R.style.visibility = "visible") : b.R.style.visibility = "hidden")
    })
  });
  var ig = 1.8;
  J() && (ig = 1);
  A.extend(hg.prototype, {
    Gj: function (a) {
      for (var b in a) this.m[b] = a[b];
      a = this.m.imageHeight + "px";
      this.wc(this.m.anchor);
      this.R.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
      this.R.style.height = a;
      this.ok.style.height = a;
      this.Xh.style.height = a;
      this.kg = {height: this.m.imageHeight, width: this.m.imageHeight * ig};
      this.nk.style.height = this.kg.height - 6 + "px";
      this.nk.style.width = this.kg.width - 6 + "px";
      this.vy(this.W.Zb(), p)
    }, za: function (a) {
      this.W = a;
      this.qs();
      this.cQ();
      this.AY();
      this.vy(a.Zb())
    }, qs: function () {
      var a = this.m.imageHeight + "px";
      this.R = H("div");
      var b = this.R.style;
      b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
      b.position = "absolute";
      b.zIndex = "2000";
      b.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
      b.padding = "8px 0";
      b.visibility = "hidden";
      b.height = a;
      this.ok = H("div");
      b = this.ok.style;
      b.position = "absolute";
      b.overflow = "hidden";
      b.width = "100%";
      b.height = a;
      this.Xh = H("div");
      b = this.Xh.style;
      b.height = a;
      this.ok.appendChild(this.Xh);
      this.R.appendChild(this.ok);
      this.W.R.appendChild(this.R);
      this.nk = H("div", {"class": "pano_photo_item_seleted"});
      this.nk.style.height = this.kg.height - 6 + "px";
      this.nk.style.width = this.kg.width - 6 + "px";
      this.wc(this.m.anchor)
    }, EH: function (a) {
      for (var b = this.kk, c = b.length - 1; 0 <= c; c--) if (b[c].panoId == a) return c;
      return -1
    }, vy: function (a, b) {
      if (b || !this.kk[this.bd] || !(this.kk[this.bd].panoId == a && 3 !== this.kk[this.bd].recoType)) {
        var c = this, e = this.EH(a);
        !b && -1 !== e && this.kk[e] && 3 !== this.kk[e].recoType ? this.Yp(e) : this.QX(function (a) {
          for (var b = {}, e, k, m = t, n = [], o = 0, s = a.length; o < s; o++) e = a[o].catlog, k = a[o].floor, l !== e && ("" === e && l !== k ? (m = p, b[k] || (b[k] = []), b[k].push(a[o])) : (b[jg[e]] || (b[jg[e]] = []), b[jg[e]].push(a[o])));
          for (var v in b) m ? n.push({data: v + "F", index: v}) : n.push({data: kg[v], index: v});
          c.$G = b;
          c.Ti = n;
          c.$i(a);
          0 == a.length ? c.aa() : c.show()
        })
      }
    }, TV: function () {
      if (!this.Qi) {
        var a = this.EX(this.Ti), b = H("div");
        b.style.cssText = ["width:" + 134 * this.Ti.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
        b.innerHTML = a;
        a = H("div");
        a.appendChild(b);
        a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
        new gg(a, {Mo: t, ay: p, ni: t, Gi: t, tn: t, AE: p, Kw: p, Cx: p});
        this.R.appendChild(a);
        for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++) b = e[f], A.V(b, "click", function () {
          if (this.getAttribute("dataindex")) {
            c.$i(c.$G[this.getAttribute("dataindex")]);
            for (var a = 0, b = e.length; a < b; a++) e[a].style.color = "#FFFFFF";
            this.style.color = "#3383FF"
          }
        });
        this.Qi = a
      }
    }, QV: function () {
      if (this.Qi) a = this.lL(this.Ti), this.sQ.innerHTML = a; else {
        var a = this.lL(this.Ti), b = H("ul"), c = this;
        b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
        b.innerHTML = a;
        A.V(b, "click", function (a) {
          if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
            c.$i(c.$G[a]);
            for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++) e[f].childNodes[0].getAttribute("dataindex") === a ? A.U.ib(e[f], "pano_catlogLiActive") : A.U.rc(e[f], "pano_catlogLiActive")
          }
        });
        var a = H("div"), e = H("a"), f = H("span"), g = H("a"), i = H("span"),
          k = ["background:url(" + I.ua + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
        f.style.cssText = k + "background-position:-18px 0;";
        e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
        i.style.cssText = k + "background-position:0 0;";
        g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
        g.style.top = this.m.imageHeight - 7 + "px";
        a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
        e.appendChild(f);
        g.appendChild(i);
        A.V(e, "mouseover", function () {
          var a = parseInt(b.style.top, 10);
          7 !== a && (f.style.backgroundPosition = "-27px 0");
          new yb({
            Nc: 60, dc: zb.Ls, duration: 300, Ba: function (c) {
              b.style.top = a + (7 - a) * c + "px"
            }
          })
        });
        A.V(e, "mouseout", function () {
          f.style.backgroundPosition = "-18px 0"
        });
        A.V(g, "mouseover", function () {
          var a = parseInt(b.style.top, 10), e = c.m.imageHeight - 14;
          if (!(parseInt(b.offsetHeight, 10) < e)) {
            var f = e - parseInt(b.offsetHeight, 10) + 7;
            f !== a && (i.style.backgroundPosition = "-9px 0");
            new yb({
              Nc: 60, dc: zb.Ls, duration: 300, Ba: function (c) {
                b.style.top = a + (f - a) * c + "px"
              }
            })
          }
        });
        A.V(g, "mouseout", function () {
          i.style.backgroundPosition = "0 0"
        });
        a.appendChild(e);
        a.appendChild(g);
        e = H("div");
        e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
        e.appendChild(b);
        e.appendChild(a);
        this.Qi = e;
        this.sQ = b;
        this.R.appendChild(e)
      }
    }, RV: function () {
      if (this.Ti && !(0 >= this.Ti.length)) {
        var a = H("div");
        a.innerHTML = this.Sz;
        a.style.cssText = "position:absolute;background:#252525";
        this.R.appendChild(a);
        this.Os = a;
        this.Yc.mg.style.left = this.kg.width + 8 + "px";
        this.Qi && (this.Qi.style.left = parseInt(this.Qi.style.left, 10) + this.kg.width + 8 + "px");
        var b = this;
        A.V(a, "click", function () {
          b.W.Gc(b.OW)
        })
      }
    }, $i: function (a) {
      this.kk = a;
      this.m.showCatalog && (0 < this.Ti.length ? (Ya() ? this.QV() : this.TV(), this.Yc.offsetLeft = 60) : (this.Os && (this.R.removeChild(this.Os), this.Os = q, this.Yc.mg.style.left = "0px"), this.Qi && (this.R.removeChild(this.Qi), this.Qi = q), this.Yc.offsetLeft = 0));
      var b = this.yX(a);
      Ya() && (this.Ti && 0 < this.Ti.length && this.m.showExit && this.Sz) && (this.Yc.offsetLeft += this.kg.width + 8, this.Os ? this.Os.innerHTML = this.Sz : this.RV());
      this.Xh.innerHTML = b;
      this.Xh.style.width = (this.kg.width + 8) * a.length + 8 + "px";
      a = this.R.offsetWidth;
      b = this.Xh.offsetWidth;
      this.Yc.Vs && (b += this.Yc.Vs());
      b < a - 2 * this.Yc.Ji - this.Yc.offsetLeft ? this.R.style.width = b + this.Yc.offsetLeft + "px" : (this.R.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px", b < this.R.offsetWidth - 2 * this.Yc.Ji - this.Yc.offsetLeft && (this.R.style.width = b + this.Yc.offsetLeft + "px"));
      this.Yc.refresh();
      this.pB = this.Xh.children;
      this.Xh.appendChild(this.nk);
      this.nk.style.left = "-100000px";
      a = this.EH(this.W.Zb(), this.j2);
      -1 !== a && this.Yp(a)
    }, EX: function (a) {
      for (var b = "", c, e = 0, f = a.length; e < f; e++) c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>", b += c;
      return b
    }, lL: function (a) {
      for (var b = "", c, e = 0, f = a.length; e < f; e++) c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>", b += c;
      return b
    }, yX: function (a) {
      for (var b, c, e, f, g = [], i = this.kg.height, k = this.kg.width, m = 0; m < a.length; m++) b = a[m], recoType = b.recoType, e = b.panoId, f = b.name, c = b.heading, b = b.pitch, c = Af.yL(e, c, b, 198, 108), b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>", 3 === recoType ? Ya() ? (this.Sz = b, this.OW = e, a.splice(m, 1), m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + I.ua + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>', g.push(b)) : g.push(b);
      return g.join("")
    }, QX: function (a) {
      var b = this, c = this.W.Zb();
      c && this.Ul.yx(c, function (e) {
        b.W.Zb() === c && a(e)
      })
    }, wc: function (a) {
      if (!ab(a) || isNaN(a) || a < Fc || 3 < a) a = this.defaultAnchor;
      var b = this.R, c = this.m.offset.width, e = this.m.offset.height;
      b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
      switch (a) {
        case Fc:
          b.style.top = e + "px";
          b.style.left = c + "px";
          break;
        case Gc:
          b.style.top = e + "px";
          b.style.right = c + "px";
          break;
        case Hc:
          b.style.bottom = e + "px";
          b.style.left = c + "px";
          break;
        case 3:
          b.style.bottom = e + "px", b.style.right = c + "px"
      }
    }, cQ: function () {
      this.aQ()
    }, aQ: function () {
      var a = this;
      A.V(this.R, "touchstart", function (a) {
        a.stopPropagation()
      });
      A.V(this.ok, "click", function (b) {
        if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.bd) a.Yp(b), a.W.Gc(a.kk[b].panoId)
      });
      A.V(this.Xh, "mouseover", function (b) {
        b = (b.srcElement || b.target).getAttribute("data-index");
        b !== q && a.oK(b, p)
      });
      this.W.addEventListener("size_changed", function () {
        isNaN(Number(a.m.maxWidth)) && a.Gj({maxWidth: a.m.maxWidth})
      })
    }, Yp: function (a) {
      this.nk.style.left = this.pB[a].offsetLeft + 8 + "px";
      this.nk.setAttribute("data-index", this.pB[a].getAttribute("data-index"));
      this.bd = a;
      this.oK(a)
    }, oK: function (a, b) {
      var c = this.kg.width + 8, e = 0;
      this.Yc.Vs && (e = this.Yc.Vs() / 2);
      var f = this.ok.offsetWidth - 2 * e, g = this.Xh.offsetLeft || this.Yc.x, g = g - e, i = -a * c;
      i > g && this.Yc.scrollTo(i + e);
      c = i - c;
      g -= f;
      c < g && (!b || b && 8 < i - g) && this.Yc.scrollTo(c + f + e)
    }, AY: function () {
      this.Yc = J() ? new gg(this.ok, {Mo: t, ay: p, ni: t, Gi: t, tn: t, AE: p, Kw: p, Cx: p}) : new lg(this.ok)
    }, aa: function () {
      this.R.style.visibility = "hidden"
    }, show: function () {
      this.R.style.visibility = "visible"
    }
  });

  function lg(a) {
    this.R = a;
    this.hh = a.children[0];
    this.Qr = q;
    this.Ji = 20;
    this.offsetLeft = 0;
    this.za()
  }

  lg.prototype = {
    za: function () {
      this.hh.style.position = "relative";
      this.refresh();
      this.qs();
      this.bC()
    }, refresh: function () {
      this.ko = this.R.offsetWidth - this.Vs();
      this.NA = -(this.hh.offsetWidth - this.ko - this.Ji);
      this.Dv = this.Ji + this.offsetLeft;
      this.hh.style.left = this.Dv + "px";
      this.hh.children[0] && (this.Qr = this.hh.children[0].offsetWidth);
      this.mg && (this.mg.children[0].style.marginTop = this.Ir.children[0].style.marginTop = this.mg.offsetHeight / 2 - this.mg.children[0].offsetHeight / 2 + "px")
    }, Vs: function () {
      return 2 * this.Ji
    }, qs: function () {
      this.Sv = H("div");
      this.Sv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
      this.mg = this.Sv.children[0];
      this.Ir = this.Sv.children[1];
      this.R.appendChild(this.Sv);
      this.mg.children[0].style.marginTop = this.Ir.children[0].style.marginTop = this.mg.offsetHeight / 2 - this.mg.children[0].offsetHeight / 2 + "px"
    }, bC: function () {
      var a = this;
      A.V(this.mg, "click", function () {
        a.scrollTo(a.hh.offsetLeft + a.ko)
      });
      A.V(this.Ir, "click", function () {
        a.scrollTo(a.hh.offsetLeft - a.ko)
      })
    }, xU: function () {
      A.U.rc(this.mg, "pano_arrow_disable");
      A.U.rc(this.Ir, "pano_arrow_disable");
      var a = this.hh.offsetLeft;
      a >= this.Dv && A.U.ib(this.mg, "pano_arrow_disable");
      a - this.ko <= this.NA && A.U.ib(this.Ir, "pano_arrow_disable")
    }, scrollTo: function (a) {
      a = a < this.hh.offsetLeft ? Math.ceil((a - this.Ji - this.ko) / this.Qr) * this.Qr + this.ko + this.Ji - 8 : Math.ceil((a - this.Ji) / this.Qr) * this.Qr + this.Ji;
      a < this.NA ? a = this.NA : a > this.Dv && (a = this.Dv);
      var b = this.hh.offsetLeft, c = this;
      new yb({
        Nc: 60, dc: zb.Ls, duration: 300, Ba: function (e) {
          c.hh.style.left = b + (a - b) * e + "px"
        }, finish: function () {
          c.xU()
        }
      })
    }
  };
  D.Map = Oa;
  D.Hotspot = mb;
  D.MapType = ne;
  D.Point = Q;
  D.Pixel = R;
  D.Size = N;
  D.Bounds = jb;
  D.TileLayer = wd;
  D.Projection = Tc;
  D.MercatorProjection = T;
  D.PerspectiveProjection = lb;
  D.Copyright = function (a, b, c) {
    this.id = a;
    this.jb = b;
    this.content = c
  };
  D.Overlay = Wc;
  D.Label = ed;
  D.GroundOverlay = fd;
  D.PointCollection = jd;
  D.Marker = W;
  D.CanvasLayer = md;
  D.Icon = ad;
  D.IconSequence = cd;
  D.Symbol = bd;
  D.Polyline = qd;
  D.Polygon = pd;
  D.InfoWindow = dd;
  D.Circle = rd;
  D.Control = Ec;
  D.NavigationControl = ob;
  D.GeolocationControl = Ic;
  D.OverviewMapControl = qb;
  D.CopyrightControl = Jc;
  D.ScaleControl = pb;
  D.MapTypeControl = rb;
  D.CityListControl = Kc;
  D.PanoramaControl = Mc;
  D.TrafficLayer = Dd;
  D.CustomLayer = sb;
  D.ContextMenu = Pc;
  D.MenuItem = Sc;
  D.LocalSearch = hb;
  D.TransitRoute = Se;
  D.DrivingRoute = Ve;
  D.TruckRoute = Xe;
  D.WalkingRoute = We;
  D.RidingRoute = Ye;
  D.Autocomplete = hf;
  D.RouteSearch = bf;
  D.Geocoder = cf;
  D.LocalCity = ef;
  D.Geolocation = Geolocation;
  D.Convertor = Vc;
  D.BusLineSearch = gf;
  D.Boundary = ff;
  D.Panorama = Ra;
  D.PanoramaLabel = pf;
  D.PanoramaService = Oc;
  D.PanoramaCoverageLayer = Nc;
  D.PanoramaFlashInterface = yf;

  function V(a, b) {
    for (var c in b) a[c] = b[c]
  }

  V(window, {
    BMap: D, _jsload2: function (a, b) {
      ja.Ly.OY && ja.Ly.set(a, b);
      Wa.rV(a, b)
    }, BMAP_API_VERSION: "2.0"
  });
  var mg = Oa.prototype;
  V(mg, {
    getBounds: mg.le,
    getCenter: mg.Qb,
    getMapType: mg.ya,
    getSize: mg.zb,
    setSize: mg.He,
    getViewport: mg.ht,
    getZoom: mg.la,
    centerAndZoom: mg.ud,
    panTo: mg.zi,
    panBy: mg.Kg,
    setCenter: mg.zf,
    setCurrentCity: mg.kF,
    setMapType: mg.Og,
    setViewport: mg.Pg,
    setZoom: mg.Xc,
    highResolutionEnabled: mg.Ix,
    zoomTo: mg.Rg,
    zoomIn: mg.$F,
    zoomOut: mg.aG,
    addHotspot: mg.QB,
    removeHotspot: mg.$Z,
    clearHotspots: mg.Ow,
    checkResize: mg.uV,
    addControl: mg.ds,
    removeControl: mg.DN,
    getContainer: mg.Ta,
    addContextMenu: mg.bm,
    removeContextMenu: mg.Pp,
    addOverlay: mg.Ra,
    removeOverlay: mg.Jb,
    clearOverlays: mg.lK,
    openInfoWindow: mg.Vc,
    closeInfoWindow: mg.Mc,
    pointToOverlayPixel: mg.cf,
    overlayPixelToPoint: mg.oN,
    getInfoWindow: mg.qh,
    getOverlays: mg.vx,
    getPanes: function () {
      return {
        floatPane: this.ce.oD,
        markerMouseTarget: this.ce.DE,
        floatShadow: this.ce.bL,
        labelPane: this.ce.vE,
        markerPane: this.ce.NM,
        markerShadow: this.ce.OM,
        mapPane: this.ce.Gt,
        vertexPane: this.ce.UO
      }
    },
    addTileLayer: mg.Ue,
    removeTileLayer: mg.cg,
    pixelToPoint: mg.bc,
    pointToPixel: mg.vc,
    setFeatureStyle: mg.X5,
    selectBaseElement: mg.Q5,
    setMapStyle: mg.bu,
    enable3DBuilding: mg.ap,
    disable3DBuilding: mg.hW,
    getPanorama: mg.bt,
    initIndoorLayer: mg.BY,
    setNormalMapDisplay: mg.By,
    setMapStyleV2: mg.E_,
    setBMapCopyrightOffset: mg.jF,
    getVectorContainer: mg.eY
  });
  V(window, {BMAP_COORD_BD09: 5, BMAP_COORD_GCJ02: 3});
  var ng = ne.prototype;
  V(ng, {
    getTileLayer: ng.ZX,
    getMinZoom: ng.rf,
    getMaxZoom: ng.Ze,
    getProjection: ng.uj,
    getTextColor: ng.Gm,
    getTips: ng.ft
  });
  V(window, {BMAP_NORMAL_MAP: Pa, BMAP_PERSPECTIVE_MAP: Sa, BMAP_SATELLITE_MAP: cb, BMAP_HYBRID_MAP: Ua});
  var og = T.prototype;
  V(og, {lngLatToPoint: og.Hg, pointToLngLat: og.Ej});
  var pg = lb.prototype;
  V(pg, {lngLatToPoint: pg.Hg, pointToLngLat: pg.Ej});
  var qg = jb.prototype;
  V(qg, {
    equals: qg.Ub,
    containsPoint: qg.ns,
    containsBounds: qg.GV,
    intersects: qg.ot,
    extend: qg.extend,
    getCenter: qg.Qb,
    isEmpty: qg.Aj,
    getSouthWest: qg.Ae,
    getNorthEast: qg.sf,
    toSpan: qg.LF
  });
  var rg = Wc.prototype;
  V(rg, {isVisible: rg.Uc, show: rg.show, hide: rg.aa});
  Wc.getZIndex = Wc.Kk;
  var sg = kb.prototype;
  V(sg, {
    openInfoWindow: sg.Vc,
    closeInfoWindow: sg.Mc,
    enableMassClear: sg.qj,
    disableMassClear: sg.jW,
    show: sg.show,
    hide: sg.aa,
    getMap: sg.sx,
    addContextMenu: sg.bm,
    removeContextMenu: sg.Pp
  });
  var tg = W.prototype;
  V(tg, {
    setIcon: tg.Wb,
    getIcon: tg.lp,
    setPosition: tg.va,
    getPosition: tg.ma,
    setOffset: tg.Rd,
    getOffset: tg.sj,
    getLabel: tg.Ys,
    setLabel: tg.Fj,
    setTitle: tg.Hc,
    setTop: tg.Di,
    enableDragging: tg.jc,
    disableDragging: tg.Bs,
    setZIndex: tg.cq,
    getMap: tg.sx,
    setAnimation: tg.dn,
    setShadow: tg.Ey,
    hide: tg.aa,
    setRotation: tg.Zp,
    getRotation: tg.CL
  });
  V(window, {BMAP_ANIMATION_DROP: 1, BMAP_ANIMATION_BOUNCE: 2});
  var ug = ed.prototype;
  V(ug, {
    setStyle: ug.Td,
    setStyles: ug.Ci,
    setContent: ug.Pc,
    setPosition: ug.va,
    getPosition: ug.ma,
    setOffset: ug.Rd,
    getOffset: ug.sj,
    setTitle: ug.Hc,
    setZIndex: ug.cq,
    getMap: ug.sx,
    getContent: ug.Dk
  });
  var vg = ad.prototype;
  V(vg, {
    setImageUrl: vg.UN,
    setSize: vg.He,
    setAnchor: vg.wc,
    setImageOffset: vg.au,
    setImageSize: vg.y_,
    setInfoWindowAnchor: vg.B_,
    setPrintImageUrl: vg.N_
  });
  var wg = dd.prototype;
  V(wg, {
    redraw: wg.re,
    setTitle: wg.Hc,
    setContent: wg.Pc,
    getContent: wg.Dk,
    getPosition: wg.ma,
    enableMaximize: wg.oh,
    disableMaximize: wg.$w,
    isOpen: wg.eb,
    setMaxContent: wg.cu,
    maximize: wg.Zx,
    enableAutoPan: wg.Ms
  });
  var xg = Zc.prototype;
  V(xg, {
    getPath: xg.$e,
    setPath: xg.Sd,
    setPositionAt: xg.jn,
    getStrokeColor: xg.WX,
    setStrokeWeight: xg.bq,
    getStrokeWeight: xg.FL,
    setStrokeOpacity: xg.$p,
    getStrokeOpacity: xg.XX,
    setFillOpacity: xg.$t,
    getFillOpacity: xg.rX,
    setStrokeStyle: xg.aq,
    getStrokeStyle: xg.EL,
    getFillColor: xg.qX,
    getBounds: xg.le,
    enableEditing: xg.pf,
    disableEditing: xg.iW,
    getEditing: xg.nX,
    getGeodesicPath: xg.uX
  });
  var yg = rd.prototype;
  V(yg, {setCenter: yg.zf, getCenter: yg.Qb, getRadius: yg.AL, setRadius: yg.Af});
  var zg = pd.prototype;
  V(zg, {getPath: zg.$e, setPath: zg.Sd, setPositionAt: zg.jn});
  var Ag = mb.prototype;
  V(Ag, {getPosition: Ag.ma, setPosition: Ag.va, getText: Ag.SD, setText: Ag.fu});
  Q.prototype.equals = Q.prototype.Ub;
  R.prototype.equals = R.prototype.Ub;
  N.prototype.equals = N.prototype.Ub;
  V(window, {
    BMAP_ANCHOR_TOP_LEFT: Fc,
    BMAP_ANCHOR_TOP_RIGHT: Gc,
    BMAP_ANCHOR_BOTTOM_LEFT: Hc,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3
  });
  var Bg = Ec.prototype;
  V(Bg, {
    setAnchor: Bg.wc,
    getAnchor: Bg.vD,
    setOffset: Bg.Rd,
    getOffset: Bg.sj,
    show: Bg.show,
    hide: Bg.aa,
    isVisible: Bg.Uc,
    toString: Bg.toString
  });
  var Cg = ob.prototype;
  V(Cg, {getType: Cg.up, setType: Cg.kn});
  V(window, {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3
  });
  var Dg = qb.prototype;
  V(Dg, {changeView: Dg.ve, setSize: Dg.He, getSize: Dg.zb});
  var Eg = pb.prototype;
  V(Eg, {getUnit: Eg.dY, setUnit: Eg.uF});
  V(window, {BMAP_UNIT_METRIC: "metric", BMAP_UNIT_IMPERIAL: "us"});
  var Fg = Jc.prototype;
  V(Fg, {addCopyright: Fg.Aw, removeCopyright: Fg.XE, getCopyright: Fg.xm, getCopyrightCollection: Fg.CD});
  V(window, {BMAP_MAPTYPE_CONTROL_HORIZONTAL: Lc, BMAP_MAPTYPE_CONTROL_DROPDOWN: 1, BMAP_MAPTYPE_CONTROL_MAP: 2});
  var Gg = wd.prototype;
  V(Gg, {getMapType: Gg.ya, getCopyright: Gg.xm, isTransparentPng: Gg.At});
  var Hg = Pc.prototype;
  V(Hg, {addItem: Hg.es, addSeparator: Hg.TB, removeSeparator: Hg.$E});
  var Ig = Sc.prototype;
  V(Ig, {setText: Ig.fu});
  var Jg = Y.prototype;
  V(Jg, {
    getStatus: Jg.Em,
    setSearchCompleteCallback: Jg.eu,
    getPageCapacity: Jg.tf,
    setPageCapacity: Jg.gn,
    setLocation: Jg.fn,
    disableFirstResultSelection: Jg.HC,
    enableFirstResultSelection: Jg.aD,
    gotoPage: Jg.Hm,
    searchNearby: Jg.Wp,
    searchInBounds: Jg.bn,
    search: Jg.search
  });
  V(window, {
    BMAP_STATUS_SUCCESS: 0,
    BMAP_STATUS_CITY_LIST: 1,
    BMAP_STATUS_UNKNOWN_LOCATION: xe,
    BMAP_STATUS_UNKNOWN_ROUTE: 3,
    BMAP_STATUS_INVALID_KEY: 4,
    BMAP_STATUS_INVALID_REQUEST: 5,
    BMAP_STATUS_PERMISSION_DENIED: ye,
    BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
    BMAP_STATUS_TIMEOUT: ze
  });
  V(window, {
    BMAP_POI_TYPE_NORMAL: 0,
    BMAP_POI_TYPE_BUSSTOP: 1,
    BMAP_POI_TYPE_BUSLINE: 2,
    BMAP_POI_TYPE_SUBSTOP: 3,
    BMAP_POI_TYPE_SUBLINE: 4
  });
  V(window, {
    BMAP_TRANSIT_POLICY_RECOMMEND: 0,
    BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
    BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
    BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
    BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
    BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
    BMAP_LINE_TYPE_BUS: 0,
    BMAP_LINE_TYPE_SUBWAY: 1,
    BMAP_LINE_TYPE_FERRY: 2,
    BMAP_LINE_TYPE_TRAIN: 3,
    BMAP_LINE_TYPE_AIRPLANE: 4,
    BMAP_LINE_TYPE_COACH: 5
  });
  V(window, {
    BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
    BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
    BMAP_TRANSIT_TYPE_POLICY_COACH: 2
  });
  V(window, {
    BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
    BMAP_INTERCITY_POLICY_EARLY_START: 1,
    BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
  });
  V(window, {BMAP_TRANSIT_TYPE_IN_CITY: 0, BMAP_TRANSIT_TYPE_CROSS_CITY: 1});
  V(window, {BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0, BMAP_TRANSIT_PLAN_TYPE_LINE: 1});
  var Kg = Re.prototype;
  V(Kg, {clearResults: Kg.we});
  Te = Se.prototype;
  V(Te, {
    setPolicy: Te.hn,
    toString: Te.toString,
    setPageCapacity: Te.gn,
    setIntercityPolicy: Te.nF,
    setTransitTypePolicy: Te.sF
  });
  V(Xe.prototype, {
    setPolicy: Xe.hn,
    toString: Xe.toString,
    setPageCapacity: Xe.gn,
    setIntercityPolicy: Xe.nF,
    setTransitTypePolicy: Xe.sF
  });
  V(window, {
    BMAP_DRIVING_POLICY_DEFAULT: 0,
    BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
    BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
    BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
  });
  V(window, {
    BMAP_MODE_DRIVING: "driving",
    BMAP_MODE_TRANSIT: "transit",
    BMAP_MODE_WALKING: "walking",
    BMAP_MODE_NAVIGATION: "navigation"
  });
  var Lg = bf.prototype;
  V(Lg, {routeCall: Lg.ON});
  V(window, {BMAP_HIGHLIGHT_STEP: 1, BMAP_HIGHLIGHT_ROUTE: 2});
  V(window, {BMAP_ROUTE_TYPE_DRIVING: Be, BMAP_ROUTE_TYPE_WALKING: Ae, BMAP_ROUTE_TYPE_RIDING: Ce});
  V(window, {BMAP_ROUTE_STATUS_NORMAL: De, BMAP_ROUTE_STATUS_EMPTY: 1, BMAP_ROUTE_STATUS_ADDRESS: 2});
  var Mg = Ve.prototype;
  V(Mg, {setPolicy: Mg.hn});
  var Ng = hf.prototype;
  V(Ng, {show: Ng.show, hide: Ng.aa, setTypes: Ng.tF, setLocation: Ng.fn, search: Ng.search, setInputValue: Ng.Ay});
  V(sb.prototype, {});
  var Og = ff.prototype;
  V(Og, {get: Og.get});
  V(Nc.prototype, {});
  V(window, {BMAP_POINT_DENSITY_HIGH: 200, BMAP_POINT_DENSITY_MEDIUM: Gd, BMAP_POINT_DENSITY_LOW: 50});
  V(window, {
    BMAP_POINT_SHAPE_STAR: 1,
    BMAP_POINT_SHAPE_WATERDROP: 2,
    BMAP_POINT_SHAPE_CIRCLE: gd,
    BMAP_POINT_SHAPE_SQUARE: 4,
    BMAP_POINT_SHAPE_RHOMBUS: 5
  });
  V(window, {
    BMAP_POINT_SIZE_TINY: 1,
    BMAP_POINT_SIZE_SMALLER: 2,
    BMAP_POINT_SIZE_SMALL: 3,
    BMAP_POINT_SIZE_NORMAL: hd,
    BMAP_POINT_SIZE_BIG: 5,
    BMAP_POINT_SIZE_BIGGER: 6,
    BMAP_POINT_SIZE_HUGE: 7
  });
  V(window, {
    BMap_Symbol_SHAPE_CAMERA: 11,
    BMap_Symbol_SHAPE_WARNING: 12,
    BMap_Symbol_SHAPE_SMILE: 13,
    BMap_Symbol_SHAPE_CLOCK: 14,
    BMap_Symbol_SHAPE_POINT: 9,
    BMap_Symbol_SHAPE_PLANE: 10,
    BMap_Symbol_SHAPE_CIRCLE: 1,
    BMap_Symbol_SHAPE_RECTANGLE: 2,
    BMap_Symbol_SHAPE_RHOMBUS: 3,
    BMap_Symbol_SHAPE_STAR: 4,
    BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
    BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
    BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
    BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
  });
  V(window, {BMAP_CONTEXT_MENU_ICON_ZOOMIN: Qc, BMAP_CONTEXT_MENU_ICON_ZOOMOUT: Rc});
  V(window, {
    BMAP_SYS_DRAWER: Na,
    BMAP_SVG_DRAWER: 1,
    BMAP_VML_DRAWER: 2,
    BMAP_CANVAS_DRAWER: 3,
    BMAP_SVG_DRAWER_FIRST: 4
  });
  D.OU();
  D.V0();
})()
