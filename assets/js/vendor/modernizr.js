/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-prefixes-setclasses-shiv-teststyles !*/
! function(e, t, n) {
  function a(e, t) {
    return typeof e === t
  }

  function r() {
    var e, t, n, r, o, i, s;
    for (var l in f)
      if (f.hasOwnProperty(l)) {
        if (e = [], t = f[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (r = a(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = r : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = r), c.push((r ? "" : "no-") + s.join("-"))
      }
  }

  function o(e) {
    var t = m.className,
      n = Modernizr._config.classPrefix || "";
    if (p && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var a = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(a, "$1" + n + "js$2")
    }
    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), p ? m.className.baseVal = t : m.className = t)
  }

  function i() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : p ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
  }

  function s() {
    var e = t.body;
    return e || (e = i(p ? "svg" : "body"), e.fake = !0), e
  }

  function l(e, n, a, r) {
    var o, l, c, f, d = "modernizr",
      u = i("div"),
      p = s();
    if (parseInt(a, 10))
      for (; a--;) c = i("div"), c.id = r ? r[a] : d + (a + 1), u.appendChild(c);
    return o = i("style"), o.type = "text/css", o.id = "s" + d, (p.fake ? p : u).appendChild(o), p.appendChild(u), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), u.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = m.style.overflow, m.style.overflow = "hidden", m.appendChild(p)), l = n(u, e), p.fake ? (p.parentNode.removeChild(p), m.style.overflow = f, m.offsetHeight) : u.parentNode.removeChild(u), !!l
  }
  var c = [],
    f = [],
    d = {
      _version: "3.2.0",
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
        f.push({
          name: e,
          fn: t,
          options: n
        })
      },
      addAsyncTest: function(e) {
        f.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function() {};
  Modernizr.prototype = d, Modernizr = new Modernizr;
  var u = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
  d._prefixes = u;
  var m = t.documentElement,
    p = "svg" === m.nodeName.toLowerCase();
  p || ! function(e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
        a = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", a.insertBefore(n.lastChild, a.firstChild)
    }

    function a() {
      var e = E.elements;
      return "string" == typeof e ? e.split(" ") : e
    }

    function r(e, t) {
      var n = E.elements;
      "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), E.elements = n + " " + e, c(t)
    }

    function o(e) {
      var t = y[e[g]];
      return t || (t = {}, v++, e[g] = v, y[v] = t), t
    }

    function i(e, n, a) {
      if (n || (n = t), d) return n.createElement(e);
      a || (a = o(n));
      var r;
      return r = a.cache[e] ? a.cache[e].cloneNode() : h.test(e) ? (a.cache[e] = a.createElem(e)).cloneNode() : a.createElem(e), !r.canHaveChildren || p.test(e) || r.tagUrn ? r : a.frag.appendChild(r)
    }

    function s(e, n) {
      if (e || (e = t), d) return e.createDocumentFragment();
      n = n || o(e);
      for (var r = n.frag.cloneNode(), i = 0, s = a(), l = s.length; l > i; i++) r.createElement(s[i]);
      return r
    }

    function l(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
        return E.shivMethods ? i(n, e, t) : t.createElem(n)
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + a().join().replace(/[\w\-:]+/g, function(e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
      }) + ");return n}")(E, t.frag)
    }

    function c(e) {
      e || (e = t);
      var a = o(e);
      return !E.shivCSS || f || a.hasCSS || (a.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || l(e, a), e
    }
    var f, d, u = "3.7.3",
      m = e.html5 || {},
      p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      g = "_html5shiv",
      v = 0,
      y = {};
    ! function() {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", f = "hidden" in e, d = 1 == e.childNodes.length || function() {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
        }()
      } catch (n) {
        f = !0, d = !0
      }
    }();
    var E = {
      elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
      version: u,
      shivCSS: m.shivCSS !== !1,
      supportsUnknownElements: d,
      shivMethods: m.shivMethods !== !1,
      type: "default",
      shivDocument: c,
      createElement: i,
      createDocumentFragment: s,
      addElements: r
    };
    e.html5 = E, c(t), "object" == typeof module && module.exports && (module.exports = E)
  }("undefined" != typeof e ? e : this, t);
  d.testStyles = l;
  r(), o(c), delete d.addTest, delete d.addAsyncTest;
  for (var h = 0; h < Modernizr._q.length; h++) Modernizr._q[h]();
  e.Modernizr = Modernizr
}(window, document);
