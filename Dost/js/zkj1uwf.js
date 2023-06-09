window.Typekit || (window.Typekit = {}), window.Typekit.config = {
    a: "3811224",
    c: [".tk-transducer-extended", '"transducer-extended",sans-serif', ".tk-transducer", '"transducer",sans-serif'],
    fi: [47838, 47840, 47854, 47855],
    fc: [{
      id: 47838,
      family: "transducer-extended",
      src: "https://use.typekit.net/af/2f7d8e/00000000000000007735ecc1/30/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "900",
        style: "normal",
        stretch: "normal",
        display: "swap",
        variable: !1,
        primer: "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      id: 47840,
      family: "transducer-extended",
      src: "https://use.typekit.net/af/f5b1f5/00000000000000007735ecce/30/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "400",
        style: "normal",
        stretch: "normal",
        display: "swap",
        variable: !1,
        primer: "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      id: 47854,
      family: "transducer",
      src: "https://use.typekit.net/af/f1009d/00000000000000007735eccd/30/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "400",
        style: "normal",
        stretch: "normal",
        display: "swap",
        variable: !1,
        primer: "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      id: 47855,
      family: "transducer",
      src: "https://use.typekit.net/af/4128b6/00000000000000007735ecdd/30/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "600",
        style: "normal",
        stretch: "normal",
        display: "swap",
        variable: !1,
        primer: "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }],
    fn: ["transducer", ["n4", "n6"], "transducer-extended", ["n4", "n9"]],
    hn: "use.typekit.net",
    ht: "tk",
    js: "1.21.0",
    kt: "zkj1uwf",
    l: "typekit",
    ps: 1,
    ping: "https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}",
    pm: !0,
    type: "configurable"
  },
  function (t, e, i) {
    if (e.querySelector) {
      var n = Date.now || function () {
        return +new Date
      };
      j.prototype.b = function (t) {
        for (var e = [], i = 0; i < arguments.length; i++) e.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase());
        return e.join(this.g)
      }, x.prototype.set = function (t) {
        if (Math.floor(t / 32 + 1) > this.b.length) throw Error("Index is out of bounds.");
        var e = Math.floor(t / 32);
        this.b[e] |= 1 << t - 32 * e
      }, x.prototype.has = function (t) {
        if (Math.floor(t / 32 + 1) > this.b.length) throw Error("Index is out of bounds.");
        var e = Math.floor(t / 32);
        return !!(this.b[e] & 1 << t - 32 * e)
      };
      var r = [2449897292, 4218179547, 2675077685, 1031960064, 1478620578, 1386343184, 3194259988, 2656050674, 3012733295, 2193273665];
      E.prototype.has = function (t) {
        if ("string" != typeof t && "number" != typeof t) throw Error("Value should be a string or number.");
        for (var e = "number" == typeof t, i = 0; i < this.i; i++) {
          var n;
          if (e) n = C(4294967295 & t, 3432918353), n = C(n = n << 15 | n >>> 17, 461845907), n = C(n = (n ^= r[i] || 0) << 13 | n >>> 19, 5) + 3864292196, n ^= 4, n = C(n ^= n >>> 16, 2246822507), n = C(n ^= n >>> 13, 3266489909), n = ((n ^= n >>> 16) >>> 0) % this.b;
          else {
            n = r[i] || 0;
            var s, o, a = t.length % 4,
              h = t.length - a;
            for (o = 0; o < h; o += 4) s = C(s = (4294967295 & t.charCodeAt(o + 0)) << 0 | (4294967295 & t.charCodeAt(o + 1)) << 8 | (4294967295 & t.charCodeAt(o + 2)) << 16 | (4294967295 & t.charCodeAt(o + 3)) << 24, 3432918353), s = C(s = s << 15 | s >>> 17, 461845907), n = C(n = (n ^= s) << 13 | n >>> 19, 5) + 3864292196;
            switch (s = 0, a) {
              case 3:
                s ^= (4294967295 & t.charCodeAt(o + 2)) << 16;
              case 2:
                s ^= (4294967295 & t.charCodeAt(o + 1)) << 8;
              case 1:
                s = C(s ^= (4294967295 & t.charCodeAt(o + 0)) << 0, 3432918353), n ^= s = C(s = s << 15 | s >>> 17, 461845907)
            }
            n = C((n ^= t.length) ^ n >>> 16, 2246822507), n = (((n = C(n ^ n >>> 13, 3266489909)) ^ n >>> 16) >>> 0) % this.b
          }
          if (!this.g.has(n)) return !1
        }
        return !0
      }, S.prototype.has = function (t) {
        if ("" === t) return !0;
        for (t = t.split("."); t.length;) {
          var e = t.join("."),
            i = "*." + e;
          if (this.b.has(e) || this.b.has(i) || this.b.has(encodeURIComponent(e)) || this.b.has(encodeURIComponent(i))) return !0;
          t.shift()
        }
        return !1
      };
      var s = {
          K: "serif",
          J: "sans-serif"
        },
        o = null;
      tt.prototype.start = function () {
        this.g.serif = this.m.b.offsetWidth, this.g["sans-serif"] = this.o.b.offsetWidth, this.F = n(), nt(this)
      }, st.prototype.start = function () {
        var t = this.m.g.document,
          e = this,
          i = n(),
          r = new Promise((function (r, s) {
            ! function o() {
              n() - i >= e.g ? s() : t.fonts.load(e.b.style + " " + e.b.weight + " 300px " + (e.j ? K(e.b) : e.b.b), e.o).then((function (t) {
                1 <= t.length ? r() : setTimeout(o, 25)
              }), (function () {
                s()
              }))
            }()
          })),
          s = new Promise((function (t, i) {
            setTimeout(i, e.g)
          }));
        Promise.race([s, r]).then((function () {
          e.i(e.b)
        }), (function () {
          e.u(e.b)
        }))
      };
      var a = null;
      ot.prototype.i = function (t) {
        var e = this.b;
        e.i && N(e.g, [e.b.b("wf", t.b, R(t), "active")], [e.b.b("wf", t.b, R(t), "loading"), e.b.b("wf", t.b, R(t), "inactive")]), W(e, "fontactive", t), this.o = !0, at(this)
      }, ot.prototype.j = function (t) {
        var e = this.b;
        if (e.i) {
          var i = P(e.g, e.b.b("wf", t.b, R(t), "active")),
            n = [],
            r = [e.b.b("wf", t.b, R(t), "loading")];
          i || n.push(e.b.b("wf", t.b, R(t), "inactive")), N(e.g, n, r)
        }
        W(e, "fontinactive", t), at(this)
      }, ht.prototype.supportsConfiguredBrowser = function () {
        return !0
      }, ht.prototype.init = function () {
        if (0 < this.g.length) {
          for (var t = [], e = 0; e < this.g.length; e++) t.push(T(this.g[e]));
          F(this.b, t.join(""))
        }
      }, ht.prototype.load = function (i, n, r) {
        var s = this;
        if (r = r || {}, this.j && (i = location.hostname, !this.j.has(i))) return console.error('Typekit: the domain "' + i + '" isn\'t in the list of published domains for kit "' + this.u + '".'), void O(new M(this.b, r, {}));
        i = r.timeout;
        var o = !!r.async,
          h = function () {
            var t = e,
              i = navigator.userAgent;
            return /MSIE|Trident/.test(i) && (!t.documentMode || 9 > t.documentMode) ? i = "i" : ((t = !!(/AppleWebKit/.test(i) && /Android/.test(i) && !/OPR|Chrome|CrMo|CriOS/.test(i) && (t = /Android ([^;)]+)/.exec(i)) && t[1]) && 3.1 <= (t = parseFloat(t[1])) && 4.1 > t) || (t = !!(/Silk/.test(i) && /Linux|Ubuntu|Android/.test(i) && (i = /Silk\/([\d\._]+)/.exec(i)) && i[1]) && 2 <= parseFloat(i[1])), i = t ? "j" : "k"), i
          }(),
          f = function (t, e) {
            if ("i" === e) {
              var i = {},
                n = new H;
              for (var r in $(t, (function (t) {
                  i[t.b] || (i[t.b] = {}), i[t.b][t.weight] || (i[t.b][t.weight] = []), i[t.b][t.weight].push(t)
                })), i)
                if (i.hasOwnProperty(r)) {
                  for (var s = [400, 300, 200, 100, 500, 600, 700, 800, 900], o = 400, a = 0; a < s.length; a++)
                    if (o = s[a], i[r][o]) {
                      z(n, i[r][o]);
                      break
                    } for (s = [700, 800, 900, 600, 500, 400, 300, 200, 100], a = 0; a < s.length; a++) {
                    var h = s[a];
                    if (i[r][h] && o !== h) {
                      z(n, i[r][h]);
                      break
                    }
                  }
                } return $(t, (function (t) {
                t = L(t, t.b.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + R(t)), n.b.push(t)
              })), n
            }
            return "x" === e ? new H : t
          }(this.o, h);
        if (r = new M(this.b, r, {
            active: function () {
              if (o) {
                var e = Q(f, h, s.i, !1);
                F(s.b, e)
              }
              if (s.m) {
                e = s.m;
                var i = s.b,
                  n = e.m,
                  r = (t.__adobewebfontsappname__ || e.app || "").toString().substr(0, 20),
                  a = (i = i.g.location.hostname || i.i.location.hostname, []),
                  c = [];
                t.Typekit ? (t.Typekit.fonts || (t.Typekit.fonts = []), c = t.Typekit.fonts) : t.TypekitPreview && (t.TypekitPreview.fonts || (t.TypekitPreview.fonts = []), c = t.TypekitPreview.fonts);
                for (var u = 0; u < e.b.length; u++) {
                  for (var l = !1, p = 0; p < c.length; p++)
                    if (e.b[u] === c[p]) {
                      l = !0;
                      break
                    } l || (a.push(e.b[u]), c.push(e.b[u]))
                }
                a.length && function (t) {
                  var e = new Image(1, 1),
                    i = !1;
                  e.src = t, e.onload = function () {
                    i = !0, e.onload = null
                  }, setTimeout((function () {
                    i || (e.src = "about:blank", e.onload = null)
                  }), 3e3)
                }(G(n, {
                  s: e.j,
                  k: e.o,
                  app: r,
                  ht: e.i,
                  h: i,
                  f: a.join("."),
                  a: e.g,
                  js: e.version,
                  e: "js",
                  _: (+new Date).toString()
                }))
              }
            },
            inactive: function () {
              if (o) {
                var t = Q(f, h, s.i, !1);
                F(s.b, t)
              }
            }
          }), f.b.length) {
          var c = Q(f, h, this.i, o);
          F(this.b, c);
          var u = new ot(this.b, r, i, o);
          ! function (t, e) {
            t.b.body ? e() : t.b.addEventListener ? t.b.addEventListener("DOMContentLoaded", e) : t.b.attachEvent("onreadystatechange", (function () {
              "interactive" != t.b.readyState && "complete" != t.b.readyState || e()
            }))
          }(s.b, (function () {
            ! function (e, i, n) {
              var r = {},
                s = i.b.length;
              if (!s && n) O(e.b);
              else {
                e.g += s, n && (e.m = n);
                var o = [];
                for ($(i, (function (i) {
                    var n = e.b;
                    if (n.i && N(n.g, [n.b.b("wf", i.b, R(i), "loading")]), W(n, "fontloading", i), n = null, null === a)
                      if (t.FontFace) {
                        var s = /Gecko.*Firefox\/(\d+)/.exec(t.navigator.userAgent),
                          h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(t.navigator.userAgent);
                        a = s ? 42 < parseInt(s[1], 10) : !h || !/Apple/.exec(t.navigator.vendor) || 603 <= parseInt(h[1], 10)
                      } else a = !1;
                    n = a ? new st(k(e.i, e), k(e.j, e), e.w, i, e.A, "BESbswy", e.u) : new tt(k(e.i, e), k(e.j, e), e.w, i, e.A, r, "BESbswy", e.u), o.push(n)
                  })), i = 0; i < o.length; i++) o[i].start()
              }
            }(u, f, n)
          }))
        } else O(r)
      }, ft.prototype.i = function (t) {
        this.b.push(t)
      }, ft.prototype.load = function (t, e) {
        var i = t,
          n = e || {};
        if ("string" == typeof i ? i = [i] : i && i.length || (n = i || {}, i = []), i.length)
          for (var r = this, s = i.length, o = 0; o < i.length; o++) ct(this, i[o], (function () {
            --s || ut(r, n)
          }));
        else ut(this, n)
      };
      var h = new function () {
        var e = t;
        this.g = this.i = e, this.b = this.g.document
      };
      if (t.Typekit || (t.Typekit = {}), !t.Typekit.load) {
        var f = new ft(new U("//" + (t.Typekit.config || {}).hn + "/{id}.js"), h);
        t.Typekit.load = function () {
          f.load.apply(f, arguments)
        }, t.Typekit.addKit = function () {
          f.i.apply(f, arguments)
        }
      }
      for (var c, u = t.Typekit.config || {}, l = [], p = u.fc, b = 0; b < p.length; b++) l.push(p[b].id);
      if (c = new ht(h), u.ping && (c.m = new function () {
          var t = u.ps,
            e = u.ht,
            i = l,
            n = u.a,
            r = u.kt,
            s = u.js,
            o = u.l;
          this.m = new U(u.ping), this.j = t, this.i = e, this.b = i || [], this.g = n || null, this.o = r || null, this.version = s || null, this.app = o || null
        }), u.fc)
        for (var d = u.fc, g = 0; g < d.length; g++) c.o.b.push(new D(d[g].family, d[g].src, d[g].descriptors));
      if (u.dl) {
        var y = u.dl;
        try {
          c.j = new S(y)
        } catch (t) {}
      }
      if (u.kt && (c.u = u.kt), u.token && (c.i = u.token), u.c)
        for (var v = 0; v < u.c.length; v += 2) c.g.push(new A);
      if (t.Typekit.addKit(c), t.WebFont) try {
        t.Typekit.load()
      } catch (t) {}
    } else e.documentElement.className += " wf-inactive";

    function m(t, e, i) {
      return t.call.apply(t.bind, arguments)
    }

    function w(t, e, i) {
      if (!t) throw Error();
      if (2 < arguments.length) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function () {
          var i = Array.prototype.slice.call(arguments);
          return Array.prototype.unshift.apply(i, n), t.apply(e, i)
        }
      }
      return function () {
        return t.apply(e, arguments)
      }
    }

    function k(t, e, i) {
      return (k = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? m : w).apply(null, arguments)
    }

    function j(t) {
      this.g = t || "-"
    }

    function A() {
      var t = [{
        name: "font-family",
        value: u.c[v + 1]
      }];
      this.g = [u.c[v]], this.b = t
    }

    function T(t) {
      for (var e = t.g.join(","), i = [], n = 0; n < t.b.length; n++) {
        var r = t.b[n];
        i.push(r.name + ":" + r.value + ";")
      }
      return e + "{" + i.join("") + "}"
    }

    function C(t, e) {
      return (65535 & t) * e + (((t >>> 16) * e & 65535) << 16)
    }

    function x(t, e) {
      if (this.b = e || Array(Math.ceil(t / 32)), !e)
        for (var i = 0; i < this.b.length; i++) this.b[i] = 0
    }

    function E(t, e, i) {
      this.b = t, this.i = e, this.g = new x(t, i)
    }

    function S(e) {
      if (e.length % 4 && (e += Array(5 - e.length % 4).join("=")), e = e.replace(/\-/g, "+").replace(/\_/g, "/"), t.atob) e = t.atob(e);
      else {
        if (1 == (e = e.replace(/=+$/, "")).length % 4) throw Error("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var i, n, r = 0, s = 0, o = ""; n = e.charAt(s++); ~n && (i = r % 4 ? 64 * i + n : n, r++ % 4) ? o += String.fromCharCode(255 & i >> (-2 * r & 6)) : 0) n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
        e = o
      }
      for (i = [], r = 0; r < e.length; r += 4) i.push(e.charCodeAt(r) << 24 | e.charCodeAt(r + 1) << 16 | e.charCodeAt(r + 2) << 8 | e.charCodeAt(r + 3) << 0);
      e = i.shift(), r = i.shift(), this.b = new E(e, r, i)
    }

    function I(t, e, i, n) {
      if (e = t.b.createElement(e), i)
        for (var r in i) i.hasOwnProperty(r) && ("style" == r ? e.style.cssText = i[r] : e.setAttribute(r, i[r]));
      return n && e.appendChild(t.b.createTextNode(n)), e
    }

    function _(t, i, n) {
      (t = t.b.getElementsByTagName(i)[0]) || (t = e.documentElement), t.insertBefore(n, t.lastChild)
    }

    function B(t) {
      t.parentNode && t.parentNode.removeChild(t)
    }

    function N(t, e, i) {
      var n = e || [];
      i = i || [], e = t.className.split(/\s+/);
      for (var r, s = 0; s < n.length; s += 1) {
        r = !1;
        for (var o = 0; o < e.length; o += 1)
          if (n[s] === e[o]) {
            r = !0;
            break
          } r || e.push(n[s])
      }
      for (n = [], s = 0; s < e.length; s += 1) {
        for (r = !1, o = 0; o < i.length; o += 1)
          if (e[s] === i[o]) {
            r = !0;
            break
          } r || n.push(e[s])
      }
      t.className = n.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function P(t, e) {
      for (var i = t.className.split(/\s+/), n = 0, r = i.length; n < r; n++)
        if (i[n] == e) return !0;
      return !1
    }

    function F(t, i) {
      var n = I(t, "style");
      n.setAttribute("type", "text/css"), n.styleSheet ? (_(t, "head", n), n.styleSheet.cssText = i) : (n.appendChild(e.createTextNode(i)), _(t, "head", n))
    }

    function M(t, e, i) {
      this.g = t.g.document.documentElement, this.j = e, this.m = i, this.b = new j("-"), this.o = !1 !== e.events, this.i = !1 !== e.classes
    }

    function O(t) {
      if (t.i) {
        var e = P(t.g, t.b.b("wf", "active")),
          i = [],
          n = [t.b.b("wf", "loading")];
        e || i.push(t.b.b("wf", "inactive")), N(t.g, i, n)
      }
      W(t, "inactive")
    }

    function W(t, e, i) {
      if (t.o && t.j[e]) try {
        i ? t.j[e](i.b, R(i)) : t.j[e]()
      } catch (t) {
        console.error('Typekit: Error in "' + e + '" callback', t)
      }
      t.m[e] && (i ? t.m[e](i.b, R(i)) : t.m[e]())
    }

    function D(t, e, i) {
      i = i || {}, this.b = t, this.g = e, this.weight = i.weight || "400", this.style = i.style || "normal", this.stretch = i.stretch || "normal", this.B = i.primer || void 0, this.C = i.subset_id || void 0, this.display = i.display || "auto", (this.i = !!i.variable || !1) && (this.B = void 0, this.C = "4")
    }

    function K(t) {
      return ("tk-" + t.b).slice(0, 26) + "-" + R(t)
    }

    function L(t, e) {
      return new D(e, t.g, {
        weight: t.weight,
        style: t.style,
        stretch: t.stretch,
        B: t.B,
        C: t.C,
        display: t.display
      })
    }

    function R(t) {
      return t.style.charAt(0) + t.weight.charAt(0)
    }

    function U(t) {
      this.b = t
    }

    function G(t, e) {
      return t.b.replace(/\{([^\{\}]+)\}/g, (function (t, i) {
        if ("?" == i.charAt(0)) {
          for (var n = i.slice(1).split(","), r = [], s = 0; s < n.length; s++) e[n[s]] && r.push(n[s] + "=" + encodeURIComponent(e[n[s]]));
          return r.length ? "?" + r.join("&") : ""
        }
        return encodeURIComponent(e[i] || "")
      }))
    }

    function H() {
      this.b = []
    }

    function z(t, e) {
      for (var i = 0; i < e.length; i++) t.b.push(e[i])
    }

    function $(t, e) {
      for (var i = 0; i < t.b.length; i++) e(t.b[i], i, t)
    }

    function q(t, e, i) {
      for (var n = [], r = 0; r < e.length; r++) {
        var s = e[r],
          o = G(new U(t.g), {
            format: s,
            primer: t.B,
            subset_id: t.C,
            fvd: R(t),
            extension: V(s),
            token: i,
            v: "3"
          });
        "i" === s ? n.push("url(" + o + ")") : n.push("url(" + o + ') format("' + J(s) + '")')
      }
      return n.join(",")
    }

    function J(t) {
      switch (t) {
        case "d":
          return "woff";
        case "i":
          return "eot";
        case "l":
          return "woff2";
        default:
          return "opentype"
      }
    }

    function V(t) {
      switch (t) {
        case "d":
          return "woff";
        case "i":
          return "eot";
        case "l":
          return "woff2";
        default:
          return "otf"
      }
    }

    function Q(t, e, i, n) {
      var r = [];
      return $(t, (function (t) {
        r.push(function (t, e, i, n) {
          if ("x" === e) return "";
          var r = [];
          return r.push("font-family:" + (n ? K(t) : t.b)), e = q(t, "k" === e ? ["l", "d", "a"] : [e], i), r.push("src:" + e), r.push("font-weight:" + t.weight), r.push("font-style:" + t.style), r.push("font-stretch:" + t.stretch), r.push("font-display:" + t.display), "@font-face{" + r.join(";") + ";}"
        }(t, e, i, n))
      })), r.join("")
    }

    function X(t, e) {
      this.g = t, this.i = e, this.b = I(this.g, "span", {
        "aria-hidden": "true"
      }, this.i)
    }

    function Y(t) {
      _(t.g, "body", t.b)
    }

    function Z(t) {
      return "display:block !important;position:absolute !important;top:-9999px !important;left:-9999px !important;font-size:300px !important;width:auto !important;height:auto !important;line-height:normal !important;margin:0 !important;padding:0 !important;font-variant:normal !important;white-space:nowrap !important;font-family:" + t.b + " !important;font-weight:" + t.weight + " !important;font-style:" + t.style + " !important;"
    }

    function tt(t, e, i, n, r, s, o, a) {
      this.D = t, this.H = e, this.u = i, this.b = n, this.w = o || "BESbswy", this.g = {}, this.I = r || 3e3, this.G = a, this.A = s || null, this.i = new X(this.u, this.w), this.j = new X(this.u, this.w), this.m = new X(this.u, this.w), this.o = new X(this.u, this.w), t = this.G ? K(this.b) : this.b.b, this.i.b.style.cssText = Z(L(this.b, t + ",serif")), this.j.b.style.cssText = Z(L(this.b, t + ",sans-serif")), this.m.b.style.cssText = Z(L(this.b, "serif")), this.o.b.style.cssText = Z(L(this.b, "sans-serif")), Y(this.i), Y(this.j), Y(this.m), Y(this.o)
    }

    function et() {
      if (null === o) {
        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(t.navigator.userAgent);
        o = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
      }
      return o
    }

    function it(t, e, i) {
      for (var n in s)
        if (s.hasOwnProperty(n) && e === t.g[s[n]] && i === t.g[s[n]]) return !0;
      return !1
    }

    function nt(t) {
      var e, i = t.i.b.offsetWidth,
        r = t.j.b.offsetWidth;
      (e = i === t.g.serif && r === t.g["sans-serif"]) || (e = et() && it(t, i, r)), e ? n() - t.F >= t.I ? et() && it(t, i, r) && (!t.A || t.A.hasOwnProperty(t.b.b)) ? rt(t, t.D) : rt(t, t.H) : function (t) {
        setTimeout(k((function () {
          nt(this)
        }), t), 50)
      }(t) : rt(t, t.D)
    }

    function rt(t, e) {
      setTimeout(k((function () {
        B(this.i.b), B(this.j.b), B(this.m.b), B(this.o.b), e(this.b)
      }), t), 0)
    }

    function st(t, e, i, n, r, s, o) {
      this.i = t, this.u = e, this.b = n, this.m = i, this.g = r || 3e3, this.o = s || void 0, this.j = o
    }

    function ot(t, e, i, n) {
      this.w = t, this.b = e, this.g = 0, this.o = this.m = !1, this.A = i, this.u = n
    }

    function at(t) {
      !--t.g && t.m && (t.o ? ((t = t.b).i && N(t.g, [t.b.b("wf", "active")], [t.b.b("wf", "loading"), t.b.b("wf", "inactive")]), W(t, "active")) : O(t.b))
    }

    function ht(t) {
      this.b = t, this.m = null, this.g = [], this.j = this.u = null, this.o = new H, this.i = null
    }

    function ft(t, e) {
      this.j = t, this.g = e, this.b = []
    }

    function ct(t, e, i) {
      e = G(t.j, {
          id: e
        }),
        function (t, e, i) {
          var n = t.b.getElementsByTagName("head")[0];
          if (n) {
            var r = I(t, "script", {
                src: e
              }),
              s = !1;
            r.onload = r.onreadystatechange = function () {
              s || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (s = !0, i && i(null), r.onload = r.onreadystatechange = null, "HEAD" == r.parentNode.tagName && n.removeChild(r))
            }, n.appendChild(r), setTimeout((function () {
              s || (s = !0, i && i(Error("Script load timeout")))
            }), 5e3)
          }
        }(t.g, e, i)
    }

    function ut(t, e) {
      if (t.b.length) {
        for (var i = new M(t.g, e, {}), n = 0; n < t.b.length; n++) t.b[n].init();
        for (i.i && N(i.g, [i.b.b("wf", "loading")]), W(i, "loading"), i = 0; i < t.b.length; i++) t.b[i].load(null, i == t.b.length - 1, e);
        t.b = []
      }
    }
  }(this, document);