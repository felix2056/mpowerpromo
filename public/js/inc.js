
window.NREUM || (NREUM = {}), NREUM.init = {
    privacy: {
        cookies_enabled: !0
    }
}, window.NREUM || (NREUM = {}), __nr_require = function (t, e, n) {
    function r(n) {
        if (!e[n]) {
            var o = e[n] = {
                exports: {}
            };
            t[n][0].call(o.exports, (function (e) {
                return r(t[n][1][e] || e)
            }), o, o.exports)
        }
        return e[n].exports
    }
    if ("function" == typeof __nr_require) return __nr_require;
    for (var o = 0; o < n.length; o++) r(n[o]);
    return r
}({
    1: [function (t, e, n) {
        function r(t) {
            try {
                c.console && console.log(t)
            } catch (t) { }
        }
        var o, i = t("ee")
            , a = t(26)
            , c = {};
        try {
            o = localStorage.getItem("__nr_flags").split(","), console && "function" == typeof console.log && (c.console = !0, -1 !== o.indexOf("dev") && (c.dev = !0), -1 !== o.indexOf("nr_dev") && (c.nrDev = !0))
        } catch (t) { }
        c.nrDev && i.on("internal-error", (function (t) {
            r(t.stack)
        })), c.dev && i.on("fn-err", (function (t, e, n) {
            r(n.stack)
        })), c.dev && (r("NR AGENT IN DEVELOPMENT MODE"), r("flags: " + a(c, (function (t, e) {
            return t
        })).join(", ")))
    }, {}]
    , 2: [function (t, e, n) {
        function r(t, e, n) {
            this.message = t || "Uncaught error with no additional information", this.sourceURL = e, this.line = n
        }

        function o(t, e) {
            var n = e ? null : s.now();
            i("err", [t, n])
        }
        var i = t("handle")
            , a = t(27)
            , c = t("ee")
            , s = t("loader")
            , f = t("gos")
            , u = window.onerror
            , d = !1
            , l = "nr@seenError"
            , p = 0;
        s.features.err = !0, t(1), window.onerror = function (t, e, n, c, f) {
            try {
                p ? p -= 1 : o(f || new r(t, e, n), !0)
            } catch (t) {
                try {
                    i("ierr", [t, s.now(), !0])
                } catch (t) { }
            }
            return "function" == typeof u && u.apply(this, a(arguments))
        };
        try {
            throw new Error
        } catch (e) {
            "stack" in e && (t(13), t(12), "addEventListener" in window && t(6), s.xhrWrappable && t(14), d = !0)
        }
        c.on("fn-start", (function (t, e, n) {
            d && (p += 1)
        })), c.on("fn-err", (function (t, e, n) {
            d && !n[l] && (f(n, l, (function () {
                return !0
            })), this.thrown = !0, o(n))
        })), c.on("fn-end", (function () {
            d && !this.thrown && p > 0 && (p -= 1)
        })), c.on("internal-error", (function (t) {
            i("ierr", [t, s.now(), !0])
        }))
    }, {}]
    , 3: [function (t, e, n) {
        t("loader").features.ins = !0
    }, {}]
    , 4: [function (t, e, n) {
        function r() {
            T++, _ = g.hash, this[u] = y.now()
        }

        function o() {
            T--, g.hash !== _ && i(0, !0);
            var t = y.now();
            this[h] = ~~this[h] + t - this[u], this[d] = t
        }

        function i(t, e) {
            E.emit("newURL", ["" + g, e])
        }

        function a(t, e) {
            t.on(e, (function () {
                this[e] = y.now()
            }))
        }
        var c = "-start"
            , s = "-end"
            , f = "-body"
            , u = "fn" + c
            , d = "fn" + s
            , l = "cb" + c
            , p = "cb" + s
            , h = "jsTime"
            , m = "fetch"
            , v = "addEventListener"
            , w = window
            , g = w.location
            , y = t("loader");
        if (w[v] && y.xhrWrappable) {
            var x = t(10)
                , b = t(11)
                , E = t(8)
                , R = t(6)
                , N = t(13)
                , M = t(7)
                , O = t(14)
                , P = t(9)
                , S = t("ee")
                , C = S.get("tracer");
            t(16), y.features.spa = !0;
            var _, T = 0;
            S.on(u, r), S.on(l, r), S.on(d, o), S.on(p, o), S.buffer([u, d, "xhr-done", "xhr-resolved"]), R.buffer([u]), N.buffer(["setTimeout" + s, "clearTimeout" + c, u]), O.buffer([u, "new-xhr", "send-xhr" + c]), M.buffer([m + c, m + "-done", m + f + c, m + f + s]), E.buffer(["newURL"]), x.buffer([u]), b.buffer(["propagate", l, p, "executor-err", "resolve" + c]), C.buffer([u, "no-" + u]), P.buffer(["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"]), a(O, "send-xhr" + c), a(S, "xhr-resolved"), a(S, "xhr-done"), a(M, m + c), a(M, m + "-done"), a(P, "new-jsonp"), a(P, "jsonp-end"), a(P, "cb-start"), E.on("pushState-end", i), E.on("replaceState-end", i), w[v]("hashchange", i, !0), w[v]("load", i, !0), w[v]("popstate", (function () {
                i(0, T > 1)
            }), !0)
        }
    }, {}]
    , 5: [function (t, e, n) {
        function r(t) { }
        if (window.performance && window.performance.timing && window.performance.getEntriesByType) {
            var o = t("ee")
                , i = t("handle")
                , a = t(13)
                , c = t(12)
                , s = "learResourceTimings"
                , f = "addEventListener"
                , u = "resourcetimingbufferfull"
                , d = "bstResource"
                , l = "resource"
                , p = "-start"
                , h = "-end"
                , m = "fn" + p
                , v = "fn" + h
                , w = "bstTimer"
                , g = "pushState"
                , y = t("loader");
            y.features.stn = !0, t(8), "addEventListener" in window && t(6);
            var x = NREUM.o.EV;
            o.on(m, (function (t, e) {
                t[0] instanceof x && (this.bstStart = y.now())
            })), o.on(v, (function (t, e) {
                var n = t[0];
                n instanceof x && i("bst", [n, e, this.bstStart, y.now()])
            })), a.on(m, (function (t, e, n) {
                this.bstStart = y.now(), this.bstType = n
            })), a.on(v, (function (t, e) {
                i(w, [e, this.bstStart, y.now(), this.bstType])
            })), c.on(m, (function () {
                this.bstStart = y.now()
            })), c.on(v, (function (t, e) {
                i(w, [e, this.bstStart, y.now(), "requestAnimationFrame"])
            })), o.on(g + p, (function (t) {
                this.time = y.now(), this.startPath = location.pathname + location.hash
            })), o.on(g + h, (function (t) {
                i("bstHist", [location.pathname + location.hash, this.startPath, this.time])
            })), f in window.performance && (window.performance["c" + s] ? window.performance[f](u, (function (t) {
                i(d, [window.performance.getEntriesByType(l)]), window.performance["c" + s]()
            }), !1) : window.performance[f]("webkit" + u, (function (t) {
                i(d, [window.performance.getEntriesByType(l)]), window.performance["webkitC" + s]()
            }), !1)), document[f]("scroll", r, {
                passive: !0
            }), document[f]("keypress", r, !1), document[f]("click", r, !1)
        }
    }, {}]
    , 6: [function (t, e, n) {
        function r(t) {
            for (var e = t; e && !e.hasOwnProperty(u);) e = Object.getPrototypeOf(e);
            e && o(e)
        }

        function o(t) {
            c.inPlace(t, [u, d], "-", i)
        }

        function i(t, e) {
            return t[1]
        }
        var a = t("ee").get("events")
            , c = t("wrap-function")(a, !0)
            , s = t("gos")
            , f = XMLHttpRequest
            , u = "addEventListener"
            , d = "removeEventListener";
        e.exports = a, "getPrototypeOf" in Object ? (r(document), r(window), r(f.prototype)) : f.prototype.hasOwnProperty(u) && (o(window), o(f.prototype)), a.on(u + "-start", (function (t, e) {
            var n = t[1]
                , r = s(n, "nr@wrapped", (function () {
                    var t = {
                        object: function () {
                            if ("function" == typeof n.handleEvent) return n.handleEvent.apply(n, arguments)
                        }
                        , function: n
                    }[typeof n];
                    return t ? c(t, "fn-", null, t.name || "anonymous") : n
                }));
            this.wrapped = t[1] = r
        })), a.on(d + "-start", (function (t) {
            t[1] = this.wrapped || t[1]
        }))
    }, {}]
    , 7: [function (t, e, n) {
        function r(t, e, n) {
            var r = t[e];
            "function" == typeof r && (t[e] = function () {
                var t, e = i(arguments)
                    , a = {};
                o.emit(n + "before-start", [e], a), a[h] && a[h].dt && (t = a[h].dt);
                var c = r.apply(this, e);
                return o.emit(n + "start", [e, t], c), c.then((function (t) {
                    return o.emit(n + "end", [null, t], c), t
                }), (function (t) {
                    throw o.emit(n + "end", [t], c), t
                }))
            })
        }
        var o = t("ee").get("fetch")
            , i = t(27)
            , a = t(26);
        e.exports = o;
        var c = window
            , s = "fetch-"
            , f = s + "body-"
            , u = c.Request
            , d = c.Response
            , l = c.fetch
            , p = "prototype"
            , h = "nr@context";
        u && d && l && (a(["arrayBuffer", "blob", "json", "text", "formData"], (function (t, e) {
            r(u[p], e, f), r(d[p], e, f)
        })), r(c, "fetch", s), o.on(s + "end", (function (t, e) {
            var n = this;
            if (e) {
                var r = e.headers.get("content-length");
                null !== r && (n.rxSize = r), o.emit(s + "done", [null, e], n)
            } else o.emit(s + "done", [t], n)
        })))
    }, {}]
    , 8: [function (t, e, n) {
        var r = t("ee").get("history")
            , o = t("wrap-function")(r);
        e.exports = r;
        var i = window.history && window.history.constructor && window.history.constructor.prototype
            , a = window.history;
        i && i.pushState && i.replaceState && (a = i), o.inPlace(a, ["pushState", "replaceState"], "-")
    }, {}]
    , 9: [function (t, e, n) {
        function r(t) {
            var e = t.match(s);
            return e ? e[1] : null
        }

        function o(t, e) {
            var n = t.match(u)
                , r = n[1]
                , i = n[3];
            return i ? o(i, e[r]) : e[r]
        }

        function i(t) {
            var e = t.match(f);
            return e && e.length >= 3 ? {
                key: e[2]
                , parent: o(e[1], window)
            } : {
                key: t
                , parent: window
            }
        }
        var a = t("ee").get("jsonp")
            , c = t("wrap-function")(a);
        if (e.exports = a, "addEventListener" in window) {
            var s = /[?&](?:callback|cb)=([^&#]+)/
                , f = /(.*)\.([^.]+)/
                , u = /^(\w+)(\.|$)(.*)$/
                , d = ["appendChild", "insertBefore", "replaceChild"];
            Node && Node.prototype && Node.prototype.appendChild ? c.inPlace(Node.prototype, d, "dom-") : (c.inPlace(HTMLElement.prototype, d, "dom-"), c.inPlace(HTMLHeadElement.prototype, d, "dom-"), c.inPlace(HTMLBodyElement.prototype, d, "dom-")), a.on("dom-start", (function (t) {
                ! function (t) {
                    function e() {
                        a.emit("jsonp-end", [], f), t.removeEventListener("load", e, !1), t.removeEventListener("error", n, !1)
                    }

                    function n() {
                        a.emit("jsonp-error", [], f), a.emit("jsonp-end", [], f), t.removeEventListener("load", e, !1), t.removeEventListener("error", n, !1)
                    }
                    if (t && "string" == typeof t.nodeName && "script" === t.nodeName.toLowerCase() && "function" == typeof t.addEventListener) {
                        var o = r(t.src);
                        if (o) {
                            var s = i(o);
                            if ("function" == typeof s.parent[s.key]) {
                                var f = {};
                                c.inPlace(s.parent, [s.key], "cb-", f), t.addEventListener("load", e, !1), t.addEventListener("error", n, !1), a.emit("new-jsonp", [t.src], f)
                            }
                        }
                    }
                }(t[0])
            }))
        }
    }, {}]
    , 10: [function (t, e, n) {
        var r = t("ee").get("mutation")
            , o = t("wrap-function")(r)
            , i = NREUM.o.MO;
        e.exports = r, i && (window.MutationObserver = function (t) {
            return this instanceof i ? new i(o(t, "fn-")) : i.apply(this, arguments)
        }, MutationObserver.prototype = i.prototype)
    }, {}]
    , 11: [function (t, e, n) {
        function r(t) {
            var e = i.context()
                , n = a(t, "executor-", e)
                , r = new s(n);
            return i.context(r).getCtx = function () {
                return e
            }, i.emit("new-promise", [r, e], e), r
        }
        var o = t("wrap-function")
            , i = t("ee").get("promise")
            , a = o(i)
            , c = t(26)
            , s = NREUM.o.PR;
        e.exports = i, s && (window.Promise = r, ["all", "race"].forEach((function (t) {
            var e = s[t];
            s[t] = function (n) {
                function r(t) {
                    return function () {
                        i.emit("propagate", [null, !o], a), o = o || !t
                    }
                }
                var o = !1;
                c(n, (function (e, n) {
                    Promise.resolve(n).then(r("all" === t), r(!1))
                }));
                var a = e.apply(s, arguments)
                    , f = s.resolve(a);
                return f
            }
        })), ["resolve", "reject"].forEach((function (t) {
            var e = s[t];
            s[t] = function (t) {
                var n = e.apply(s, arguments);
                return t !== n && i.emit("propagate", [t, !0], n), n
            }
        })), s.prototype.catch = function (t) {
            return this.then(null, t)
        }, s.prototype = Object.create(s.prototype, {
            constructor: {
                value: r
            }
        }), c(Object.getOwnPropertyNames(s), (function (t, e) {
            try {
                r[e] = s[e]
            } catch (t) { }
        })), i.on("executor-start", (function (t) {
            t[0] = a(t[0], "resolve-", this), t[1] = a(t[1], "resolve-", this)
        })), i.on("executor-err", (function (t, e, n) {
            t[1](n)
        })), a.inPlace(s.prototype, ["then"], "then-", (function (t, e) {
            return e
        })), i.on("then-start", (function (t, e) {
            this.promise = e, t[0] = a(t[0], "cb-", this), t[1] = a(t[1], "cb-", this)
        })), i.on("then-end", (function (t, e, n) {
            this.nextPromise = n;
            var r = this.promise;
            i.emit("propagate", [r, !0], n)
        })), i.on("cb-end", (function (t, e, n) {
            i.emit("propagate", [n, !0], this.nextPromise)
        })), i.on("propagate", (function (t, e, n) {
            this.getCtx && !e || (this.getCtx = function () {
                if (t instanceof Promise) var e = i.context(t);
                return e && e.getCtx ? e.getCtx() : this
            })
        })), r.toString = function () {
            return "" + s
        })
    }, {}]
    , 12: [function (t, e, n) {
        var r = t("ee").get("raf")
            , o = t("wrap-function")(r)
            , i = "equestAnimationFrame";
        e.exports = r, o.inPlace(window, ["r" + i, "mozR" + i, "webkitR" + i, "msR" + i], "raf-"), r.on("raf-start", (function (t) {
            t[0] = o(t[0], "fn-")
        }))
    }, {}]
    , 13: [function (t, e, n) {
        var r = t("ee").get("timer")
            , o = t("wrap-function")(r)
            , i = "setTimeout"
            , a = "setInterval"
            , c = "clearTimeout"
            , s = "-start";
        e.exports = r, o.inPlace(window, [i, "setImmediate"], i + "-"), o.inPlace(window, [a], a + "-"), o.inPlace(window, [c, "clearImmediate"], c + "-"), r.on(a + s, (function (t, e, n) {
            t[0] = o(t[0], "fn-", null, n)
        })), r.on(i + s, (function (t, e, n) {
            this.method = n, this.timerDuration = isNaN(t[1]) ? 0 : +t[1], t[0] = o(t[0], "fn-", this, n)
        }))
    }, {}]
    , 14: [function (t, e, n) {
        function r(t, e) {
            f.inPlace(e, ["onreadystatechange"], "fn-", a)
        }

        function o() {
            var t = this
                , e = s.context(t);
            t.readyState > 3 && !e.resolved && (e.resolved = !0, s.emit("xhr-resolved", [], t)), f.inPlace(t, v, "fn-", a)
        }

        function i() {
            for (var t = 0; t < w.length; t++) r(0, w[t]);
            w.length && (w = [])
        }

        function a(t, e) {
            return e
        }
        t(6);
        var c = t("ee")
            , s = c.get("xhr")
            , f = t("wrap-function")(s)
            , u = NREUM.o
            , d = u.XHR
            , l = u.MO
            , p = u.PR
            , h = u.SI
            , m = "readystatechange"
            , v = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"]
            , w = [];
        e.exports = s;
        var g = window.XMLHttpRequest = function (t) {
            var e = new d(t);
            try {
                s.emit("new-xhr", [e], e), e.addEventListener(m, o, !1)
            } catch (t) {
                try {
                    s.emit("internal-error", [t])
                } catch (t) { }
            }
            return e
        };
        if (function (t, e) {
            for (var n in t) e[n] = t[n]
        }(d, g), g.prototype = d.prototype, f.inPlace(g.prototype, ["open", "send"], "-xhr-", a), s.on("send-xhr-start", (function (t, e) {
            r(0, e)
                , function (t) {
                    w.push(t), l && (y ? y.then(i) : h ? h(i) : (x = -x, b.data = x))
                }(e)
        })), s.on("open-xhr-start", r), l) {
            var y = p && p.resolve();
            if (!h && !p) {
                var x = 1
                    , b = document.createTextNode(x);
                new l(i).observe(b, {
                    characterData: !0
                })
            }
        } else c.on("fn-end", (function (t) {
            t[0] && t[0].type === m || i()
        }))
    }, {}]
    , 15: [function (t, e, n) {
        function r(t) {
            return "init" in NREUM && "distributed_tracing" in NREUM.init && !!NREUM.init.distributed_tracing.enabled && o(t)
        }

        function o(t) {
            var e = !1
                , n = {};
            if ("init" in NREUM && "distributed_tracing" in NREUM.init && (n = NREUM.init.distributed_tracing), t.sameOrigin) e = !0;
            else if (n.allowed_origins instanceof Array)
                for (var r = 0; r < n.allowed_origins.length; r++) {
                    var o = a(n.allowed_origins[r]);
                    if (t.hostname === o.hostname && t.protocol === o.protocol && t.port === o.port) {
                        e = !0;
                        break
                    }
                }
            return e
        }
        var i = t(23)
            , a = t(17);
        e.exports = {
            generateTracePayload: function (t) {
                if (!r(t)) return null;
                var e = window.NREUM;
                if (!e.loader_config) return null;
                var n = (e.loader_config.accountID || "").toString() || null
                    , a = (e.loader_config.agentID || "").toString() || null
                    , c = (e.loader_config.trustKey || "").toString() || null;
                if (!n || !a) return null;
                var s = i.generateSpanId()
                    , f = i.generateTraceId()
                    , u = Date.now()
                    , d = {
                        spanId: s
                        , traceId: f
                        , timestamp: u
                    };
                return (t.sameOrigin || o(t) && "init" in NREUM && "distributed_tracing" in NREUM.init && !!NREUM.init.distributed_tracing.cors_use_tracecontext_headers) && (d.traceContextParentHeader = function (t, e) {
                    return "00-" + e + "-" + t + "-01"
                }(s, f), d.traceContextStateHeader = function (t, e, n, r, o) {
                    return o + "@nr=0-1-" + n + "-" + r + "-" + t + "----" + e
                }(s, u, n, a, c)), (t.sameOrigin && !("init" in NREUM && "distributed_tracing" in NREUM.init && NREUM.init.distributed_tracing.exclude_newrelic_header) || !t.sameOrigin && o(t) && "init" in NREUM && "distributed_tracing" in NREUM.init && !1 !== NREUM.init.distributed_tracing.cors_use_newrelic_header) && (d.newrelicHeader = function (t, e, n, r, o, i) {
                    if (!("btoa" in window) || "function" != typeof window.btoa) return null;
                    var a = {
                        v: [0, 1]
                        , d: {
                            ty: "Browser"
                            , ac: r
                            , ap: o
                            , id: t
                            , tr: e
                            , ti: n
                        }
                    };
                    return i && r !== i && (a.d.tk = i), btoa(JSON.stringify(a))
                }(s, f, u, n, a, c)), d
            }
            , shouldGenerateTrace: r
        }
    }, {}]
    , 16: [function (t, e, n) {
        function r(t) {
            var e = this.params
                , n = this.metrics;
            if (!this.ended) {
                this.ended = !0;
                for (var r = 0; r < d; r++) t.removeEventListener(u[r], this.listener, !1);
                e.aborted || (n.duration = i.now() - this.startTime, this.loadCaptureCalled || 4 !== t.readyState ? null == e.status && (e.status = 0) : o(this, t), n.cbTime = this.cbTime, f.emit("xhr-done", [t], t), a("xhr", [e, n, this.startTime]))
            }
        }

        function o(t, e) {
            t.params.status = e.status;
            var n = m(e, t.lastSize);
            if (n && (t.metrics.rxSize = n), t.sameOrigin) {
                var r = e.getResponseHeader("X-NewRelic-App-Data");
                r && (t.params.cat = r.split(", ").pop())
            }
            t.loadCaptureCalled = !0
        }
        var i = t("loader");
        if (i.xhrWrappable) {
            var a = t("handle")
                , c = t(17)
                , s = t(15).generateTracePayload
                , f = t("ee")
                , u = ["load", "error", "abort", "timeout"]
                , d = u.length
                , l = t("id")
                , p = t(21)
                , h = t(20)
                , m = t(18)
                , v = window.XMLHttpRequest;
            i.features.xhr = !0, t(14), t(7), f.on("new-xhr", (function (t) {
                var e = this;
                e.totalCbs = 0, e.called = 0, e.cbTime = 0, e.end = r, e.ended = !1, e.xhrGuids = {}, e.lastSize = null, e.loadCaptureCalled = !1, t.addEventListener("load", (function (n) {
                    o(e, t)
                }), !1), p && (p > 34 || p < 10) || window.opera || t.addEventListener("progress", (function (t) {
                    e.lastSize = t.loaded
                }), !1)
            })), f.on("open-xhr-start", (function (t) {
                this.params = {
                    method: t[0]
                }
                    , function (t, e) {
                        var n = c(e)
                            , r = t.params;
                        r.host = n.hostname + ":" + n.port, r.pathname = n.pathname, t.parsedOrigin = c(e), t.sameOrigin = t.parsedOrigin.sameOrigin
                    }(this, t[1]), this.metrics = {}
            })), f.on("open-xhr-end", (function (t, e) {
                "loader_config" in NREUM && "xpid" in NREUM.loader_config && this.sameOrigin && e.setRequestHeader("X-NewRelic-ID", NREUM.loader_config.xpid);
                var n = s(this.parsedOrigin);
                if (n) {
                    var r = !1;
                    n.newrelicHeader && (e.setRequestHeader("newrelic", n.newrelicHeader), r = !0), n.traceContextParentHeader && (e.setRequestHeader("traceparent", n.traceContextParentHeader), n.traceContextStateHeader && e.setRequestHeader("tracestate", n.traceContextStateHeader), r = !0), r && (this.dt = n)
                }
            })), f.on("send-xhr-start", (function (t, e) {
                var n = this.metrics
                    , r = t[0]
                    , o = this;
                if (n && r) {
                    var a = h(r);
                    a && (n.txSize = a)
                }
                this.startTime = i.now(), this.listener = function (t) {
                    try {
                        "abort" !== t.type || o.loadCaptureCalled || (o.params.aborted = !0), ("load" !== t.type || o.called === o.totalCbs && (o.onloadCalled || "function" != typeof e.onload)) && o.end(e)
                    } catch (t) {
                        try {
                            f.emit("internal-error", [t])
                        } catch (t) { }
                    }
                };
                for (var c = 0; c < d; c++) e.addEventListener(u[c], this.listener, !1)
            })), f.on("xhr-cb-time", (function (t, e, n) {
                this.cbTime += t, e ? this.onloadCalled = !0 : this.called += 1, this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof n.onload || this.end(n)
            })), f.on("xhr-load-added", (function (t, e) {
                var n = "" + l(t) + !!e;
                this.xhrGuids && !this.xhrGuids[n] && (this.xhrGuids[n] = !0, this.totalCbs += 1)
            })), f.on("xhr-load-removed", (function (t, e) {
                var n = "" + l(t) + !!e;
                this.xhrGuids && this.xhrGuids[n] && (delete this.xhrGuids[n], this.totalCbs -= 1)
            })), f.on("addEventListener-end", (function (t, e) {
                e instanceof v && "load" === t[0] && f.emit("xhr-load-added", [t[1], t[2]], e)
            })), f.on("removeEventListener-end", (function (t, e) {
                e instanceof v && "load" === t[0] && f.emit("xhr-load-removed", [t[1], t[2]], e)
            })), f.on("fn-start", (function (t, e, n) {
                e instanceof v && ("onload" === n && (this.onload = !0), ("load" === (t[0] && t[0].type) || this.onload) && (this.xhrCbStart = i.now()))
            })), f.on("fn-end", (function (t, e) {
                this.xhrCbStart && f.emit("xhr-cb-time", [i.now() - this.xhrCbStart, this.onload, e], e)
            })), f.on("fetch-before-start", (function (t) {
                function e(t, e) {
                    var n = !1;
                    return e.newrelicHeader && (t.set("newrelic", e.newrelicHeader), n = !0), e.traceContextParentHeader && (t.set("traceparent", e.traceContextParentHeader), e.traceContextStateHeader && t.set("tracestate", e.traceContextStateHeader), n = !0), n
                }
                var n, r = t[1] || {};
                "string" == typeof t[0] ? n = t[0] : t[0] && t[0].url && (n = t[0].url), n && (this.parsedOrigin = c(n), this.sameOrigin = this.parsedOrigin.sameOrigin);
                var o = s(this.parsedOrigin);
                if (o && (o.newrelicHeader || o.traceContextParentHeader))
                    if ("string" == typeof t[0]) {
                        var i = {};
                        for (var a in r) i[a] = r[a];
                        i.headers = new Headers(r.headers || {}), e(i.headers, o) && (this.dt = o), t.length > 1 ? t[1] = i : t.push(i)
                    } else t[0] && t[0].headers && e(t[0].headers, o) && (this.dt = o)
            }))
        }
    }, {}]
    , 17: [function (t, e, n) {
        var r = {};
        e.exports = function (t) {
            if (t in r) return r[t];
            var e = document.createElement("a")
                , n = window.location
                , o = {};
            e.href = t, o.port = e.port;
            var i = e.href.split("://");
            !o.port && i[1] && (o.port = i[1].split("/")[0].split("@").pop().split(":")[1]), o.port && "0" !== o.port || (o.port = "https" === i[0] ? "443" : "80"), o.hostname = e.hostname || n.hostname, o.pathname = e.pathname, o.protocol = i[0], "/" !== o.pathname.charAt(0) && (o.pathname = "/" + o.pathname);
            var a = !e.protocol || ":" === e.protocol || e.protocol === n.protocol
                , c = e.hostname === document.domain && e.port === n.port;
            return o.sameOrigin = a && (!e.hostname || c), "/" === o.pathname && (r[t] = o), o
        }
    }, {}]
    , 18: [function (t, e, n) {
        var r = t(20);
        e.exports = function (t, e) {
            var n = t.responseType;
            return "json" === n && null !== e ? e : "arraybuffer" === n || "blob" === n || "json" === n ? r(t.response) : "text" === n || "" === n || void 0 === n ? r(t.responseText) : void 0
        }
    }, {}]
    , 19: [function (t, e, n) {
        function r() { }

        function o(t, e, n) {
            return function () {
                return i(t, [f.now()].concat(c(arguments)), e ? null : this, n), e ? void 0 : this
            }
        }
        var i = t("handle")
            , a = t(26)
            , c = t(27)
            , s = t("ee").get("tracer")
            , f = t("loader")
            , u = NREUM;
        void 0 === window.newrelic && (newrelic = u);
        var d = "api-"
            , l = d + "ixn-";
        a(["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"], (function (t, e) {
            u[e] = o(d + e, !0, "api")
        })), u.addPageAction = o(d + "addPageAction", !0), u.setCurrentRouteName = o(d + "routeName", !0), e.exports = newrelic, u.interaction = function () {
            return (new r).get()
        };
        var p = r.prototype = {
            createTracer: function (t, e) {
                var n = {}
                    , r = this
                    , o = "function" == typeof e;
                return i(l + "tracer", [f.now(), t, n], r)
                    , function () {
                        if (s.emit((o ? "" : "no-") + "fn-start", [f.now(), r, o], n), o) try {
                            return e.apply(this, arguments)
                        } catch (t) {
                            throw s.emit("fn-err", [arguments, this, t], n), t
                        } finally {
                                s.emit("fn-end", [f.now()], n)
                            }
                    }
            }
        };
        a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), (function (t, e) {
            p[e] = o(l + e)
        })), newrelic.noticeError = function (t, e) {
            "string" == typeof t && (t = new Error(t)), i("err", [t, f.now(), !1, e])
        }
    }, {}]
    , 20: [function (t, e, n) {
        e.exports = function (t) {
            if ("string" == typeof t && t.length) return t.length;
            if ("object" == typeof t) {
                if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer && t.byteLength) return t.byteLength;
                if ("undefined" != typeof Blob && t instanceof Blob && t.size) return t.size;
                if (!("undefined" != typeof FormData && t instanceof FormData)) try {
                    return JSON.stringify(t).length
                } catch (t) {
                    return
                }
            }
        }
    }, {}]
    , 21: [function (t, e, n) {
        var r = 0
            , o = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
        o && (r = +o[1]), e.exports = r
    }, {}]
    , 22: [function (t, e, n) {
        function r(t) {
            if (t instanceof u && !d) {
                var e = Math.round(t.timeStamp)
                    , n = {
                        type: t.type
                    };
                e <= s.now() ? n.fid = s.now() - e : e > s.offset && e <= Date.now() ? (e -= s.offset, n.fid = s.now() - e) : e = s.now(), d = !0, c("timing", ["fi", e, n])
            }
        }
        if (!("init" in NREUM && "page_view_timing" in NREUM.init && "enabled" in NREUM.init.page_view_timing && !1 === NREUM.init.page_view_timing.enabled)) {
            var o, i, a, c = t("handle")
                , s = t("loader")
                , f = t(25)
                , u = NREUM.o.EV;
            if ("PerformanceObserver" in window && "function" == typeof window.PerformanceObserver) {
                o = new PerformanceObserver((function (t, e) {
                    t.getEntries().forEach((function (t) {
                        "first-paint" === t.name ? c("timing", ["fp", Math.floor(t.startTime)]) : "first-contentful-paint" === t.name && c("timing", ["fcp", Math.floor(t.startTime)])
                    }))
                }));
                try {
                    o.observe({
                        entryTypes: ["paint"]
                    })
                } catch (t) { }
                i = new PerformanceObserver((function (t, e) {
                    var n = t.getEntries();
                    n.length > 0 && c("lcp", [n[n.length - 1]])
                }));
                try {
                    i.observe({
                        entryTypes: ["largest-contentful-paint"]
                    })
                } catch (t) { }
                a = new PerformanceObserver((function (t) {
                    t.getEntries().forEach((function (t) {
                        t.hadRecentInput || c("cls", [t])
                    }))
                }));
                try {
                    a.observe({
                        type: "layout-shift"
                        , buffered: !0
                    })
                } catch (t) { }
            }
            if ("addEventListener" in document) {
                var d = !1;
                ["click", "keydown", "mousedown", "pointerdown", "touchstart"].forEach((function (t) {
                    document.addEventListener(t, r, !1)
                }))
            }
            f((function (t) {
                c("pageHide", [s.now(), t])
            }))
        }
    }, {}]
    , 23: [function (t, e, n) {
        function r(t) {
            var e = null
                , n = 0
                , r = window.crypto || window.msCrypto;
            r && r.getRandomValues && Uint8Array && (e = r.getRandomValues(new Uint8Array(31)));
            for (var o = [], i = 0; i < t; i++) o.push((e ? 15 & e[n++] : 16 * Math.random() | 0).toString(16));
            return o.join("")
        }
        e.exports = {
            generateUuid: function () {
                function t() {
                    return e ? 15 & e[n++] : 16 * Math.random() | 0
                }
                var e = null
                    , n = 0
                    , r = window.crypto || window.msCrypto;
                r && r.getRandomValues && (e = r.getRandomValues(new Uint8Array(31)));
                for (var o, i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", a = "", c = 0; c < i.length; c++) "x" === (o = i[c]) ? a += t().toString(16) : "y" === o ? a += (o = 3 & t() | 8).toString(16) : a += o;
                return a
            }
            , generateSpanId: function () {
                return r(16)
            }
            , generateTraceId: function () {
                return r(32)
            }
        }
    }, {}]
    , 24: [function (t, e, n) {
        var r = null
            , o = null;
        if (navigator.userAgent) {
            var i = navigator.userAgent
                , a = i.match(/Version\/(\S+)\s+Safari/);
            a && -1 === i.indexOf("Chrome") && -1 === i.indexOf("Chromium") && (r = "Safari", o = a[1])
        }
        e.exports = {
            agent: r
            , version: o
            , match: function (t, e) {
                if (!r) return !1;
                if (t !== r) return !1;
                if (!e) return !0;
                if (!o) return !1;
                for (var n = o.split("."), i = e.split("."), a = 0; a < i.length; a++)
                    if (i[a] !== n[a]) return !1;
                return !0
            }
        }
    }, {}]
    , 25: [function (t, e, n) {
        var r, o, i;
        e.exports = function (t) {
            "addEventListener" in document && o && document.addEventListener(o, (function () {
                t(i && document[i] ? document[i] : document[r] ? "hidden" : "visible")
            }), !1)
        }, void 0 !== document.hidden ? (r = "hidden", o = "visibilitychange", i = "visibilityState") : void 0 !== document.msHidden ? (r = "msHidden", o = "msvisibilitychange") : void 0 !== document.webkitHidden && (r = "webkitHidden", o = "webkitvisibilitychange", i = "webkitVisibilityState")
    }, {}]
    , 26: [function (t, e, n) {
        var r = Object.prototype.hasOwnProperty;
        e.exports = function (t, e) {
            var n = []
                , o = ""
                , i = 0;
            for (o in t) r.call(t, o) && (n[i] = e(o, t[o]), i += 1);
            return n
        }
    }, {}]
    , 27: [function (t, e, n) {
        e.exports = function (t, e, n) {
            e || (e = 0), void 0 === n && (n = t ? t.length : 0);
            for (var r = -1, o = n - e || 0, i = Array(o < 0 ? 0 : o); ++r < o;) i[r] = t[e + r];
            return i
        }
    }, {}]
    , 28: [function (t, e, n) {
        e.exports = {
            exists: void 0 !== window.performance && window.performance.timing && void 0 !== window.performance.timing.navigationStart
        }
    }, {}]
    , ee: [function (t, e, n) {
        function r() { }

        function o() {
            return new r
        }

        function i() {
            (f.api || f.feature) && (d.aborted = !0, f = d.backlog = {})
        }
        var a = "nr@context"
            , c = t("gos")
            , s = t(26)
            , f = {}
            , u = {}
            , d = e.exports = function t(e) {
                function n(t) {
                    return t && t instanceof r ? t : t ? c(t, a, o) : o()
                }

                function l(t, r, o, i) {
                    if (!d.aborted || i) {
                        e && e(t, r, o);
                        for (var a = n(o), c = h(t), s = c.length, u = 0; u < s; u++) c[u].apply(a, r);
                        var l = f[v[t]];
                        return l && l.push([w, t, r, a]), a
                    }
                }

                function p(t, e) {
                    m[t] = h(t).concat(e)
                }

                function h(t) {
                    return m[t] || []
                }
                var m = {}
                    , v = {}
                    , w = {
                        on: p
                        , addEventListener: p
                        , removeEventListener: function (t, e) {
                            var n = m[t];
                            if (n)
                                for (var r = 0; r < n.length; r++) n[r] === e && n.splice(r, 1)
                        }
                        , emit: l
                        , get: function (e) {
                            return u[e] = u[e] || t(l)
                        }
                        , listeners: h
                        , context: n
                        , buffer: function (t, e) {
                            s(t, (function (t, n) {
                                e = e || "feature", v[n] = e, e in f || (f[e] = [])
                            }))
                        }
                        , abort: i
                        , aborted: !1
                    };
                return w
            }();
        d.backlog = f
    }, {}]
    , gos: [function (t, e, n) {
        var r = Object.prototype.hasOwnProperty;
        e.exports = function (t, e, n) {
            if (r.call(t, e)) return t[e];
            var o = n();
            if (Object.defineProperty && Object.keys) try {
                return Object.defineProperty(t, e, {
                    value: o
                    , writable: !0
                    , enumerable: !1
                }), o
            } catch (t) { }
            return t[e] = o, o
        }
    }, {}]
    , handle: [function (t, e, n) {
        function r(t, e, n, r) {
            o.buffer([t], r), o.emit(t, e, n)
        }
        var o = t("ee").get("handle");
        e.exports = r, r.ee = o
    }, {}]
    , id: [function (t, e, n) {
        var r = 1
            , o = "nr@id"
            , i = t("gos");
        e.exports = function (t) {
            var e = typeof t;
            return !t || "object" !== e && "function" !== e ? -1 : t === window ? 0 : i(t, o, (function () {
                return r++
            }))
        }
    }, {}]
    , loader: [function (t, e, n) {
        function r() {
            if (!b++) {
                var t = x.info = NREUM.info
                    , e = l.getElementsByTagName("script")[0];
                if (setTimeout(f.abort, 3e4), !(t && t.licenseKey && t.applicationID && e)) return f.abort();
                s(g, (function (e, n) {
                    t[e] || (t[e] = n)
                }));
                var n = i();
                c("mark", ["onload", n + x.offset], null, "api"), c("timing", ["load", n]);
                var r = l.createElement("script");
                r.src = "https://" + t.agent, e.parentNode.insertBefore(r, e)
            }
        }

        function o() {
            c("mark", ["domContent", i() + x.offset], null, "api")
        }

        function i() {
            return E.exists && performance.now ? Math.round(performance.now()) : (a = Math.max((new Date).getTime(), a)) - x.offset
        }
        var a = (new Date).getTime()
            , c = t("handle")
            , s = t(26)
            , f = t("ee")
            , u = t(24)
            , d = window
            , l = d.document
            , p = "addEventListener"
            , h = "attachEvent"
            , m = d.XMLHttpRequest
            , v = m && m.prototype;
        NREUM.o = {
            ST: setTimeout
            , SI: d.setImmediate
            , CT: clearTimeout
            , XHR: m
            , REQ: d.Request
            , EV: d.Event
            , PR: d.Promise
            , MO: d.MutationObserver
        };
        var w = "" + location
            , g = {
                beacon: "bam.nr-data.net"
                , errorBeacon: "bam.nr-data.net"
                , agent: "js-agent.newrelic.com/nr-spa-1177.min.js"
            }
            , y = m && v && v[p] && !/CriOS/.test(navigator.userAgent)
            , x = e.exports = {
                offset: a
                , now: i
                , origin: w
                , features: {}
                , xhrWrappable: y
                , userAgent: u
            };
        t(19), t(22), l[p] ? (l[p]("DOMContentLoaded", o, !1), d[p]("load", r, !1)) : (l[h]("onreadystatechange", (function () {
            "complete" === l.readyState && o()
        })), d[h]("onload", r)), c("mark", ["firstbyte", a], null, "api");
        var b = 0
            , E = t(28)
    }, {}]
    , "wrap-function": [function (t, e, n) {
        function r(t) {
            return !(t && t instanceof Function && t.apply && !t[a])
        }
        var o = t("ee")
            , i = t(27)
            , a = "nr@original"
            , c = Object.prototype.hasOwnProperty
            , s = !1;
        e.exports = function (t, e) {
            function n(t, e, n, o) {
                function s() {
                    var r, a, c, s;
                    try {
                        a = this, r = i(arguments), c = "function" == typeof n ? n(r, a) : n || {}
                    } catch (t) {
                        u([t, "", [r, a, o], c])
                    }
                    f(e + "start", [r, a, o], c);
                    try {
                        return s = t.apply(a, r)
                    } catch (t) {
                        throw f(e + "err", [r, a, t], c), t
                    } finally {
                        f(e + "end", [r, a, s], c)
                    }
                }
                return r(t) ? t : (e || (e = ""), s[a] = t, function (t, e) {
                    if (Object.defineProperty && Object.keys) try {
                        return Object.keys(t).forEach((function (n) {
                            Object.defineProperty(e, n, {
                                get: function () {
                                    return t[n]
                                }
                                , set: function (e) {
                                    return t[n] = e, e
                                }
                            })
                        })), e
                    } catch (t) {
                        u([t])
                    }
                    for (var n in t) c.call(t, n) && (e[n] = t[n])
                }(t, s), s)
            }

            function f(n, r, o) {
                if (!s || e) {
                    var i = s;
                    s = !0;
                    try {
                        t.emit(n, r, o, e)
                    } catch (t) {
                        u([t, n, r, o])
                    }
                    s = i
                }
            }

            function u(e) {
                try {
                    t.emit("internal-error", e)
                } catch (t) { }
            }
            return t || (t = o), n.inPlace = function (t, e, o, i) {
                o || (o = "");
                var a, c, s, f = "-" === o.charAt(0);
                for (s = 0; s < e.length; s++) r(a = t[c = e[s]]) || (t[c] = n(a, f ? c + o : o, i, c))
            }, n.flag = a, n
        }
    }, {}]
}, {}, ["loader", 2, 16, 5, 3, 4]), NREUM.loader_config = {
    accountID: "2217477"
    , trustKey: "2217477"
    , agentID: "623283301"
    , licenseKey: "c374627435"
    , applicationID: "623283301"
}, NREUM.info = {
    beacon: "bam.nr-data.net"
    , errorBeacon: "bam.nr-data.net"
    , licenseKey: "c374627435"
    , applicationID: "623265975"
    , sa: 1
}