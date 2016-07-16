/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-svg-svgasimg-prefixes-setclasses-shiv-teststyles !*/
! function(e, t, n) {
  function r(e, t) {
    return typeof e === t
  }

  function o() {
    var e, t, n, o, i, a, s;
    for (var l in C)
      if (C.hasOwnProperty(l)) {
        if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) a = e[i], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), w.push((o ? "" : "no-") + s.join("-"))
      }
  }

  function i(e) {
    var t = S.className,
      n = Modernizr._config.classPrefix || "";
    if (b && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2")
    }
    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), b ? S.className.baseVal = t : S.className = t)
  }

  function a() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : b ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
  }

  function s() {
    var e = t.body;
    return e || (e = a(b ? "svg" : "body"), e.fake = !0), e
  }

  function l(e, n, r, o) {
    var i, l, u, f, c = "modernizr",
      d = a("div"),
      p = s();
    if (parseInt(r, 10))
      for (; r--;) u = a("div"), u.id = o ? o[r] : c + (r + 1), d.appendChild(u);
    return i = a("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), l = n(d, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = f, S.offsetHeight) : d.parentNode.removeChild(d), !!l
  }

  function u(e, t) {
    if ("object" == typeof e)
      for (var n in e) x(e, n) && u(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        o = Modernizr[r[0]];
      if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
      t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
    }
    return Modernizr
  }

  function f(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function c(e) {
    return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
      return t + n.toUpperCase()
    }).replace(/^-/, "")
  }

  function d(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  }

  function p(e, t, n) {
    var o;
    for (var i in e)
      if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? d(o, n || t) : o);
    return !1
  }

  function m(e) {
    return e.replace(/([A-Z])/g, function(e, t) {
      return "-" + t.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function h(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;)
        if (e.CSS.supports(m(t[o]), r)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) i.push("(" + m(t[o]) + ":" + r + ")");
      return i = i.join(" or "), l("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
        return "absolute" == getComputedStyle(e, null).position
      })
    }
    return n
  }

  function g(e, t, o, i) {
    function s() {
      u && (delete k.style, delete k.modElem)
    }
    if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
      var l = h(e, o);
      if (!r(l, "undefined")) return l
    }
    for (var u, d, p, m, g, v = ["modernizr", "tspan", "samp"]; !k.style && v.length;) u = !0, k.modElem = a(v.shift()), k.style = k.modElem.style;
    for (p = e.length, d = 0; p > d; d++)
      if (m = e[d], g = k.style[m], f(m, "-") && (m = c(m)), k.style[m] !== n) {
        if (i || r(o, "undefined")) return s(), "pfx" == t ? m : !0;
        try {
          k.style[m] = o
        } catch (y) {}
        if (k.style[m] != g) return s(), "pfx" == t ? m : !0
      }
    return s(), !1
  }

  function v(e, t, n, o, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + T.join(a + " ") + a).split(" ");
    return r(t, "string") || r(t, "undefined") ? g(s, t, o, i) : (s = (e + " " + j.join(a + " ") + a).split(" "), p(s, t, n))
  }

  function y(e, t, r) {
    return v(e, n, n, t, r)
  }
  var w = [],
    C = [],
    E = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() {
          t(n[e])
        }, 0)
      },
      addTest: function(e, t, n) {
        C.push({
          name: e,
          fn: t,
          options: n
        })
      },
      addAsyncTest: function(e) {
        C.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function() {};
  Modernizr.prototype = E, Modernizr = new Modernizr, Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var _ = E._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  E._prefixes = _;
  var S = t.documentElement,
    b = "svg" === S.nodeName.toLowerCase();
  b || ! function(e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
        r = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
    }

    function r() {
      var e = w.elements;
      return "string" == typeof e ? e.split(" ") : e
    }

    function o(e, t) {
      var n = w.elements;
      "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), w.elements = n + " " + e, u(t)
    }

    function i(e) {
      var t = y[e[g]];
      return t || (t = {}, v++, e[g] = v, y[v] = t), t
    }

    function a(e, n, r) {
      if (n || (n = t), c) return n.createElement(e);
      r || (r = i(n));
      var o;
      return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
    }

    function s(e, n) {
      if (e || (e = t), c) return e.createDocumentFragment();
      n = n || i(e);
      for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]);
      return o
    }

    function l(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
        return w.shivMethods ? a(n, e, t) : t.createElem(n)
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
      }) + ");return n}")(w, t.frag)
    }

    function u(e) {
      e || (e = t);
      var r = i(e);
      return !w.shivCSS || f || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || l(e, r), e
    }
    var f, c, d = "3.7.3",
      p = e.html5 || {},
      m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      g = "_html5shiv",
      v = 0,
      y = {};
    ! function() {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", f = "hidden" in e, c = 1 == e.childNodes.length || function() {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
        }()
      } catch (n) {
        f = !0, c = !0
      }
    }();
    var w = {
      elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
      version: d,
      shivCSS: p.shivCSS !== !1,
      supportsUnknownElements: c,
      shivMethods: p.shivMethods !== !1,
      type: "default",
      shivDocument: u,
      createElement: a,
      createDocumentFragment: s,
      addElements: o
    };
    e.html5 = w, u(t), "object" == typeof module && module.exports && (module.exports = w)
  }("undefined" != typeof e ? e : this, t);
  var x;
  E.testStyles = l;
  ! function() {
    var e = {}.hasOwnProperty;
    x = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined")
    } : function(t, n) {
      return e.call(t, n)
    }
  }(), E._l = {}, E.on = function(e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
      Modernizr._trigger(e, Modernizr[e])
    }, 0)
  }, E._trigger = function(e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function() {
        var e, r;
        for (e = 0; e < n.length; e++)(r = n[e])(t)
      }, 0), delete this._l[e]
    }
  }, Modernizr._q.push(function() {
    E.addTest = u
  }), Modernizr.addTest("svgasimg", t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
  var N = "Moz O ms Webkit",
    T = E._config.usePrefixes ? N.split(" ") : [];
  E._cssomPrefixes = T;
  var j = E._config.usePrefixes ? N.toLowerCase().split(" ") : [];
  E._domPrefixes = j;
  var P = {
    elem: a("modernizr")
  };
  Modernizr._q.push(function() {
    delete P.elem
  });
  var k = {
    style: P.elem.style
  };
  Modernizr._q.unshift(function() {
    delete k.style
  }), E.testAllProps = v, E.testAllProps = y, Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), o(), i(w), delete E.addTest, delete E.addAsyncTest;
  for (var z = 0; z < Modernizr._q.length; z++) Modernizr._q[z]();
  e.Modernizr = Modernizr
}(window, document);
