/*!
 * Bootstrap v5.3.0 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = new Map(),
    e = {
      set(e, i, n) {
        t.has(e) || t.set(e, new Map());
        const s = t.get(e);
        s.has(i) || 0 === s.size
          ? s.set(i, n)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(s.keys())[0]
              }.`
            );
      },
      get: (e, i) => (t.has(e) && t.get(e).get(i)) || null,
      remove(e, i) {
        if (!t.has(e)) return;
        const n = t.get(e);
        n.delete(i), 0 === n.size && t.delete(e);
      },
    },
    i = "transitionend",
    n = (t) => (
      t &&
        window.CSS &&
        window.CSS.escape &&
        (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
      t
    ),
    s = (t) => {
      t.dispatchEvent(new Event(i));
    },
    o = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = (t) =>
      o(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(n(t))
        : null,
    a = (t) => {
      if (!o(t) || 0 === t.getClientRects().length) return !1;
      const e =
          "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        const e = t.closest("summary");
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    l = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    c = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? c(t.parentNode)
        : null;
    },
    h = () => {},
    d = (t) => {
      t.offsetHeight;
    },
    u = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    f = [],
    p = () => "rtl" === document.documentElement.dir,
    m = (t) => {
      var e;
      (e = () => {
        const e = u();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (f.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const t of f) t();
              }),
            f.push(e))
          : e();
    },
    g = (t, e = [], i = t) => ("function" == typeof t ? t(...e) : i),
    _ = (t, e, n = !0) => {
      if (!n) return void g(t);
      const o =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let r = !1;
      const a = ({ target: n }) => {
        n === e && ((r = !0), e.removeEventListener(i, a), g(t));
      };
      e.addEventListener(i, a),
        setTimeout(() => {
          r || s(e);
        }, o);
    },
    b = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o
        ? !i && n
          ? t[s - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          n && (o = (o + s) % s),
          t[Math.max(0, Math.min(o, s - 1))]);
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    A = {};
  let E = 1;
  const T = { mouseenter: "mouseover", mouseleave: "mouseout" },
    C = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function O(t, e) {
    return (e && `${e}::${E++}`) || t.uidEvent || E++;
  }
  function x(t) {
    const e = O(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function k(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function L(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e || i;
    let o = N(t);
    return C.has(o) || (o = t), [n, s, o];
  }
  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    let [o, r, a] = L(e, i, n);
    if (e in T) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      r = t(r);
    }
    const l = x(t),
      c = l[a] || (l[a] = {}),
      h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = O(r, e.replace(v, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      M(s, { delegateTarget: r }),
                      n.oneOff && P.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
            };
          })(t, i, r)
        : (function (t, e) {
            return function i(n) {
              return (
                M(n, { delegateTarget: t }),
                i.oneOff && P.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, r);
    (u.delegationSelector = o ? i : null),
      (u.callable = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function D(t, e, i, n, s) {
    const o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function I(t, e, i, n) {
    const s = e[i] || {};
    for (const [o, r] of Object.entries(s))
      o.includes(n) && D(t, e, i, r.callable, r.delegationSelector);
  }
  function N(t) {
    return (t = t.replace(y, "")), T[t] || t;
  }
  const P = {
    on(t, e, i, n) {
      S(t, e, i, n, !1);
    },
    one(t, e, i, n) {
      S(t, e, i, n, !0);
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = L(e, i, n),
        a = r !== e,
        l = x(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) I(t, l, i, e.slice(1));
        for (const [i, n] of Object.entries(c)) {
          const s = i.replace(w, "");
          (a && !e.includes(s)) || D(t, l, r, n.callable, n.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        D(t, l, r, o, s ? i : null);
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = u();
      let s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== N(e) &&
        n &&
        ((s = n.Event(e, i)),
        n(t).trigger(s),
        (o = !s.isPropagationStopped()),
        (r = !s.isImmediatePropagationStopped()),
        (a = s.isDefaultPrevented()));
      const l = M(new Event(e, { bubbles: o, cancelable: !0 }), i);
      return (
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && s && s.preventDefault(),
        l
      );
    },
  };
  function M(t, e = {}) {
    for (const [i, n] of Object.entries(e))
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, { configurable: !0, get: () => n });
      }
    return t;
  }
  function j(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function F(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const H = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${F(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${F(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
        );
      for (const n of i) {
        let i = n.replace(/^bs/, "");
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = j(t.dataset[n]));
      }
      return e;
    },
    getDataAttribute: (t, e) => j(t.getAttribute(`data-bs-${F(e)}`)),
  };
  class $ {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = o(e) ? H.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(o(e) ? H.getDataAttributes(e) : {}),
        ...("object" == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [n, s] of Object.entries(e)) {
        const e = t[n],
          r = o(e)
            ? "element"
            : null == (i = e)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(s).test(r))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`
          );
      }
      var i;
    }
  }
  class W extends $ {
    constructor(t, i) {
      super(),
        (t = r(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(i)),
          e.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      e.remove(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      _(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return e.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.3.0";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  const B = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return n(e);
    },
    z = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n; ) i.push(n), (n = n.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(",");
        return this.find(e, t).filter((t) => !l(t) && a(t));
      },
      getSelectorFromElement(t) {
        const e = B(t);
        return e && z.findOne(e) ? e : null;
      },
      getElementFromSelector(t) {
        const e = B(t);
        return e ? z.findOne(e) : null;
      },
      getMultipleElementsFromSelector(t) {
        const e = B(t);
        return e ? z.find(e) : [];
      },
    },
    R = (t, e = "hide") => {
      const i = `click.dismiss${t.EVENT_KEY}`,
        n = t.NAME;
      P.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this))
        )
          return;
        const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
        t.getOrCreateInstance(s)[e]();
      });
    };
  class q extends W {
    static get NAME() {
      return "alert";
    }
    close() {
      if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        P.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = q.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  R(q, "close"), m(q);
  const V = '[data-bs-toggle="button"]';
  class K extends W {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = K.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  P.on(document, "click.bs.button.data-api", V, (t) => {
    t.preventDefault();
    const e = t.target.closest(V);
    K.getOrCreateInstance(e).toggle();
  }),
    m(K);
  const Q = { endCallback: null, leftCallback: null, rightCallback: null },
    X = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class Y extends $ {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          Y.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return Q;
    }
    static get DefaultType() {
      return X;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      P.off(this._element, ".bs.swipe");
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        g(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (P.on(this._element, "pointerdown.bs.swipe", (t) => this._start(t)),
          P.on(this._element, "pointerup.bs.swipe", (t) => this._end(t)),
          this._element.classList.add("pointer-event"))
        : (P.on(this._element, "touchstart.bs.swipe", (t) => this._start(t)),
          P.on(this._element, "touchmove.bs.swipe", (t) => this._move(t)),
          P.on(this._element, "touchend.bs.swipe", (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ("pen" === t.pointerType || "touch" === t.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const U = "next",
    G = "prev",
    J = "left",
    Z = "right",
    tt = "slid.bs.carousel",
    et = "carousel",
    it = "active",
    nt = { ArrowLeft: Z, ArrowRight: J },
    st = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    ot = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  class rt extends W {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = z.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === et && this.cycle();
    }
    static get Default() {
      return st;
    }
    static get DefaultType() {
      return ot;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(U);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(G);
    }
    pause() {
      this._isSliding && s(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? P.one(this._element, tt, () => this.cycle())
          : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding)
        return void P.one(this._element, tt, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? U : G;
      this._slide(n, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard &&
        P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (P.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
          P.on(this._element, "mouseleave.bs.carousel", () =>
            this._maybeEnableCycle()
          )),
        this._config.touch && Y.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of z.find(".carousel-item img", this._element))
        P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(J)),
        rightCallback: () => this._slide(this._directionToOrder(Z)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new Y(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = nt[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = z.findOne(".active", this._indicatorsElement);
      e.classList.remove(it), e.removeAttribute("aria-current");
      const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(it), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === U,
        s = e || b(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = (e) =>
          P.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (r("slide.bs.carousel").defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = s);
      const l = n ? "carousel-item-start" : "carousel-item-end",
        c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c),
        d(s),
        i.classList.add(l),
        s.classList.add(l),
        this._queueCallback(
          () => {
            s.classList.remove(l, c),
              s.classList.add(it),
              i.classList.remove(it, c, l),
              (this._isSliding = !1),
              r(tt);
          },
          i,
          this._isAnimated()
        ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return z.findOne(".active.carousel-item", this._element);
    }
    _getItems() {
      return z.find(".carousel-item", this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return p() ? (t === J ? G : U) : t === J ? U : G;
    }
    _orderToDirection(t) {
      return p() ? (t === G ? J : Z) : t === G ? Z : J;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = rt.getOrCreateInstance(this, t);
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }
  }
  P.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    function (t) {
      const e = z.getElementFromSelector(this);
      if (!e || !e.classList.contains(et)) return;
      t.preventDefault();
      const i = rt.getOrCreateInstance(e),
        n = this.getAttribute("data-bs-slide-to");
      return n
        ? (i.to(n), void i._maybeEnableCycle())
        : "next" === H.getDataAttribute(this, "slide")
        ? (i.next(), void i._maybeEnableCycle())
        : (i.prev(), void i._maybeEnableCycle());
    }
  ),
    P.on(window, "load.bs.carousel.data-api", () => {
      const t = z.find('[data-bs-ride="carousel"]');
      for (const e of t) rt.getOrCreateInstance(e);
    }),
    m(rt);
  const at = "show",
    lt = "collapse",
    ct = "collapsing",
    ht = '[data-bs-toggle="collapse"]',
    dt = { parent: null, toggle: !0 },
    ut = { parent: "(null|element)", toggle: "boolean" };
  class ft extends W {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const i = z.find(ht);
      for (const t of i) {
        const e = z.getSelectorFromElement(t),
          i = z.find(e).filter((t) => t === this._element);
        null !== e && i.length && this._triggerArray.push(t);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return dt;
    }
    static get DefaultType() {
      return ut;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing"
          )
            .filter((t) => t !== this._element)
            .map((t) => ft.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(lt),
        this._element.classList.add(ct),
        (this._element.style[e] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(ct),
            this._element.classList.add(lt, at),
            (this._element.style[e] = ""),
            P.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        d(this._element),
        this._element.classList.add(ct),
        this._element.classList.remove(lt, at);
      for (const t of this._triggerArray) {
        const e = z.getElementFromSelector(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(ct),
              this._element.classList.add(lt),
              P.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(at);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = r(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(ht);
      for (const e of t) {
        const t = z.getElementFromSelector(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = z.find(":scope .collapse .collapse", this._config.parent);
      return z.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
            i.setAttribute("aria-expanded", e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = ft.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  P.on(document, "click.bs.collapse.data-api", ht, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    for (const t of z.getMultipleElementsFromSelector(this))
      ft.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    m(ft);
  var pt = "top",
    mt = "bottom",
    gt = "right",
    _t = "left",
    bt = "auto",
    vt = [pt, mt, gt, _t],
    yt = "start",
    wt = "end",
    At = "clippingParents",
    Et = "viewport",
    Tt = "popper",
    Ct = "reference",
    Ot = vt.reduce(function (t, e) {
      return t.concat([e + "-" + yt, e + "-" + wt]);
    }, []),
    xt = [].concat(vt, [bt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + yt, e + "-" + wt]);
    }, []),
    kt = "beforeRead",
    Lt = "read",
    St = "afterRead",
    Dt = "beforeMain",
    It = "main",
    Nt = "afterMain",
    Pt = "beforeWrite",
    Mt = "write",
    jt = "afterWrite",
    Ft = [kt, Lt, St, Dt, It, Nt, Pt, Mt, jt];
  function Ht(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function $t(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Wt(t) {
    return t instanceof $t(t).Element || t instanceof Element;
  }
  function Bt(t) {
    return t instanceof $t(t).HTMLElement || t instanceof HTMLElement;
  }
  function zt(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof $t(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const Rt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        Bt(s) &&
          Ht(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            Bt(n) &&
              Ht(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function qt(t) {
    return t.split("-")[0];
  }
  var Vt = Math.max,
    Kt = Math.min,
    Qt = Math.round;
  function Xt() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands)
      ? t.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function Yt() {
    return !/^((?!chrome|android).)*safari/i.test(Xt());
  }
  function Ut(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e &&
      Bt(t) &&
      ((s = (t.offsetWidth > 0 && Qt(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && Qt(n.height) / t.offsetHeight) || 1));
    var r = (Wt(t) ? $t(t) : window).visualViewport,
      a = !Yt() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c,
    };
  }
  function Gt(t) {
    var e = Ut(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function Jt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && zt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function Zt(t) {
    return $t(t).getComputedStyle(t);
  }
  function te(t) {
    return ["table", "td", "th"].indexOf(Ht(t)) >= 0;
  }
  function ee(t) {
    return (
      (Wt(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function ie(t) {
    return "html" === Ht(t)
      ? t
      : t.assignedSlot || t.parentNode || (zt(t) ? t.host : null) || ee(t);
  }
  function ne(t) {
    return Bt(t) && "fixed" !== Zt(t).position ? t.offsetParent : null;
  }
  function se(t) {
    for (var e = $t(t), i = ne(t); i && te(i) && "static" === Zt(i).position; )
      i = ne(i);
    return i &&
      ("html" === Ht(i) || ("body" === Ht(i) && "static" === Zt(i).position))
      ? e
      : i ||
          (function (t) {
            var e = /firefox/i.test(Xt());
            if (/Trident/i.test(Xt()) && Bt(t) && "fixed" === Zt(t).position)
              return null;
            var i = ie(t);
            for (
              zt(i) && (i = i.host);
              Bt(i) && ["html", "body"].indexOf(Ht(i)) < 0;

            ) {
              var n = Zt(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function oe(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function re(t, e, i) {
    return Vt(t, Kt(e, i));
  }
  function ae(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function le(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const ce = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = qt(i.placement),
        l = oe(a),
        c = [_t, gt].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = (function (t, e) {
            return ae(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : le(t, vt)
            );
          })(s.padding, i),
          d = Gt(o),
          u = "y" === l ? pt : _t,
          f = "y" === l ? mt : gt,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          m = r[l] - i.rects.reference[l],
          g = se(o),
          _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = p / 2 - m / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = re(v, w, y),
          E = l;
        i.modifiersData[n] = (((e = {})[E] = A), (e.centerOffset = A - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        Jt(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function he(t) {
    return t.split("-")[1];
  }
  var de = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function ue(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      m = void 0 === p ? 0 : p,
      g = "function" == typeof h ? h({ x: f, y: m }) : { x: f, y: m };
    (f = g.x), (m = g.y);
    var _ = r.hasOwnProperty("x"),
      b = r.hasOwnProperty("y"),
      v = _t,
      y = pt,
      w = window;
    if (c) {
      var A = se(i),
        E = "clientHeight",
        T = "clientWidth";
      A === $t(i) &&
        "static" !== Zt((A = ee(i))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (T = "scrollWidth")),
        (s === pt || ((s === _t || s === gt) && o === wt)) &&
          ((y = mt),
          (m -=
            (d && A === w && w.visualViewport
              ? w.visualViewport.height
              : A[E]) - n.height),
          (m *= l ? 1 : -1)),
        (s !== _t && ((s !== pt && s !== mt) || o !== wt)) ||
          ((v = gt),
          (f -=
            (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) -
            n.width),
          (f *= l ? 1 : -1));
    }
    var C,
      O = Object.assign({ position: a }, c && de),
      x =
        !0 === h
          ? (function (t, e) {
              var i = t.x,
                n = t.y,
                s = e.devicePixelRatio || 1;
              return { x: Qt(i * s) / s || 0, y: Qt(n * s) / s || 0 };
            })({ x: f, y: m }, $t(i))
          : { x: f, y: m };
    return (
      (f = x.x),
      (m = x.y),
      l
        ? Object.assign(
            {},
            O,
            (((C = {})[y] = b ? "0" : ""),
            (C[v] = _ ? "0" : ""),
            (C.transform =
              (w.devicePixelRatio || 1) <= 1
                ? "translate(" + f + "px, " + m + "px)"
                : "translate3d(" + f + "px, " + m + "px, 0)"),
            C)
          )
        : Object.assign(
            {},
            O,
            (((e = {})[y] = b ? m + "px" : ""),
            (e[v] = _ ? f + "px" : ""),
            (e.transform = ""),
            e)
          )
    );
  }
  const fe = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: qt(e.placement),
          variation: he(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          ue(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            ue(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var pe = { passive: !0 };
  const me = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = $t(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, pe);
          }),
        a && l.addEventListener("resize", i.update, pe),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, pe);
            }),
            a && l.removeEventListener("resize", i.update, pe);
        }
      );
    },
    data: {},
  };
  var ge = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function _e(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return ge[t];
    });
  }
  var be = { start: "end", end: "start" };
  function ve(t) {
    return t.replace(/start|end/g, function (t) {
      return be[t];
    });
  }
  function ye(t) {
    var e = $t(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function we(t) {
    return Ut(ee(t)).left + ye(t).scrollLeft;
  }
  function Ae(t) {
    var e = Zt(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Ee(t) {
    return ["html", "body", "#document"].indexOf(Ht(t)) >= 0
      ? t.ownerDocument.body
      : Bt(t) && Ae(t)
      ? t
      : Ee(ie(t));
  }
  function Te(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ee(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = $t(n),
      r = s ? [o].concat(o.visualViewport || [], Ae(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Te(ie(r)));
  }
  function Ce(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function Oe(t, e, i) {
    return e === Et
      ? Ce(
          (function (t, e) {
            var i = $t(t),
              n = ee(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              (o = s.width), (r = s.height);
              var c = Yt();
              (c || (!c && "fixed" === e)) &&
                ((a = s.offsetLeft), (l = s.offsetTop));
            }
            return { width: o, height: r, x: a + we(t), y: l };
          })(t, i)
        )
      : Wt(e)
      ? (function (t, e) {
          var i = Ut(t, !1, "fixed" === e);
          return (
            (i.top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i
          );
        })(e, i)
      : Ce(
          (function (t) {
            var e,
              i = ee(t),
              n = ye(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Vt(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = Vt(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + we(t),
              l = -n.scrollTop;
            return (
              "rtl" === Zt(s || i).direction &&
                (a += Vt(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(ee(t))
        );
  }
  function xe(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? qt(s) : null,
      r = s ? he(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case pt:
        e = { x: a, y: i.y - n.height };
        break;
      case mt:
        e = { x: a, y: i.y + i.height };
        break;
      case gt:
        e = { x: i.x + i.width, y: l };
        break;
      case _t:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? oe(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case yt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case wt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function ke(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? At : a,
      c = i.rootBoundary,
      h = void 0 === c ? Et : c,
      d = i.elementContext,
      u = void 0 === d ? Tt : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      m = i.padding,
      g = void 0 === m ? 0 : m,
      _ = ae("number" != typeof g ? g : le(g, vt)),
      b = u === Tt ? Ct : Tt,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = (function (t, e, i, n) {
        var s =
            "clippingParents" === e
              ? (function (t) {
                  var e = Te(ie(t)),
                    i =
                      ["absolute", "fixed"].indexOf(Zt(t).position) >= 0 &&
                      Bt(t)
                        ? se(t)
                        : t;
                  return Wt(i)
                    ? e.filter(function (t) {
                        return Wt(t) && Jt(t, i) && "body" !== Ht(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = Oe(t, i, n);
            return (
              (e.top = Vt(s.top, e.top)),
              (e.right = Kt(s.right, e.right)),
              (e.bottom = Kt(s.bottom, e.bottom)),
              (e.left = Vt(s.left, e.left)),
              e
            );
          }, Oe(t, r, n));
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      })(Wt(y) ? y : y.contextElement || ee(t.elements.popper), l, h, r),
      A = Ut(t.elements.reference),
      E = xe({ reference: A, element: v, strategy: "absolute", placement: s }),
      T = Ce(Object.assign({}, v, E)),
      C = u === Tt ? T : A,
      O = {
        top: w.top - C.top + _.top,
        bottom: C.bottom - w.bottom + _.bottom,
        left: w.left - C.left + _.left,
        right: C.right - w.right + _.right,
      },
      x = t.modifiersData.offset;
    if (u === Tt && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [gt, mt].indexOf(t) >= 0 ? 1 : -1,
          i = [pt, mt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }
    return O;
  }
  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? xt : l,
      h = he(n),
      d = h
        ? a
          ? Ot
          : Ot.filter(function (t) {
              return he(t) === h;
            })
        : vt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = ke(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[qt(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const Se = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            m = i.allowedAutoPlacements,
            g = e.options.placement,
            _ = qt(g),
            b =
              l ||
              (_ !== g && p
                ? (function (t) {
                    if (qt(t) === bt) return [];
                    var e = _e(t);
                    return [ve(t), e, ve(e)];
                  })(g)
                : [_e(g)]),
            v = [g].concat(b).reduce(function (t, i) {
              return t.concat(
                qt(i) === bt
                  ? Le(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: m,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            A = new Map(),
            E = !0,
            T = v[0],
            C = 0;
          C < v.length;
          C++
        ) {
          var O = v[C],
            x = qt(O),
            k = he(O) === yt,
            L = [pt, mt].indexOf(x) >= 0,
            S = L ? "width" : "height",
            D = ke(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            I = L ? (k ? gt : _t) : k ? mt : pt;
          y[S] > w[S] && (I = _e(I));
          var N = _e(I),
            P = [];
          if (
            (o && P.push(D[x] <= 0),
            a && P.push(D[I] <= 0, D[N] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (T = O), (E = !1);
            break;
          }
          A.set(O, P);
        }
        if (E)
          for (
            var M = function (t) {
                var e = v.find(function (e) {
                  var i = A.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              j = p ? 3 : 1;
            j > 0 && "break" !== M(j);
            j--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function De(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function Ie(t) {
    return [pt, gt, mt, _t].some(function (e) {
      return t[e] >= 0;
    });
  }
  const Ne = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ke(e, { elementContext: "reference" }),
          a = ke(e, { altBoundary: !0 }),
          l = De(r, n),
          c = De(a, s, o),
          h = Ie(l),
          d = Ie(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d,
          }));
      },
    },
    Pe = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = xt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = qt(t),
                  s = [_t, pt].indexOf(n) >= 0 ? -1 : 1,
                  o =
                    "function" == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  r = o[0],
                  a = o[1];
                return (
                  (r = r || 0),
                  (a = (a || 0) * s),
                  [_t, gt].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                );
              })(i, e.rects, o)),
              t
            );
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += l),
          (e.modifiersData.popperOffsets.y += c)),
          (e.modifiersData[n] = r);
      },
    },
    Me = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = xe({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    je = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ke(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h,
          }),
          _ = qt(e.placement),
          b = he(e.placement),
          v = !b,
          y = oe(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C =
            "function" == typeof m
              ? m(Object.assign({}, e.rects, { placement: e.placement }))
              : m,
          O =
            "number" == typeof C
              ? { mainAxis: C, altAxis: C }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
          x = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null,
          k = { x: 0, y: 0 };
        if (A) {
          if (o) {
            var L,
              S = "y" === y ? pt : _t,
              D = "y" === y ? mt : gt,
              I = "y" === y ? "height" : "width",
              N = A[y],
              P = N + g[S],
              M = N - g[D],
              j = f ? -T[I] / 2 : 0,
              F = b === yt ? E[I] : T[I],
              H = b === yt ? -T[I] : -E[I],
              $ = e.elements.arrow,
              W = f && $ ? Gt($) : { width: 0, height: 0 },
              B = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              z = B[S],
              R = B[D],
              q = re(0, E[I], W[I]),
              V = v
                ? E[I] / 2 - j - q - z - O.mainAxis
                : F - q - z - O.mainAxis,
              K = v
                ? -E[I] / 2 + j + q + R + O.mainAxis
                : H + q + R + O.mainAxis,
              Q = e.elements.arrow && se(e.elements.arrow),
              X = Q ? ("y" === y ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = N + K - Y,
              G = re(f ? Kt(P, N + V - Y - X) : P, N, f ? Vt(M, U) : M);
            (A[y] = G), (k[y] = G - N);
          }
          if (a) {
            var J,
              Z = "x" === y ? pt : _t,
              tt = "x" === y ? mt : gt,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + g[Z],
              st = et - g[tt],
              ot = -1 !== [pt, _t].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct =
                f && ot
                  ? (function (t, e, i) {
                      var n = re(t, e, i);
                      return n > i ? i : n;
                    })(at, et, lt)
                  : re(f ? at : nt, et, f ? lt : st);
            (A[w] = ct), (k[w] = ct - et);
          }
          e.modifiersData[n] = k;
        }
      },
      requiresIfExists: ["offset"],
    };
  function Fe(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = Bt(e),
      r =
        Bt(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = Qt(e.width) / t.offsetWidth || 1,
            n = Qt(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      a = ee(e),
      l = Ut(t, r, i),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (o || (!o && !i)) &&
        (("body" !== Ht(e) || Ae(a)) &&
          (c =
            (n = e) !== $t(n) && Bt(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : ye(n)),
        Bt(e)
          ? (((h = Ut(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : a && (h.x = we(a))),
      {
        x: l.left + c.scrollLeft - h.x,
        y: l.top + c.scrollTop - h.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function He(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var $e = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function We() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function Be(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? $e : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, $e, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: Wt(t)
                  ? Te(t)
                  : t.contextElement
                  ? Te(t.contextElement)
                  : [],
                popper: Te(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = He(t);
                return Ft.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (We(e, i)) {
                (a.rects = {
                  reference: Fe(e, se(i), "fixed" === a.options.strategy),
                  popper: Gt(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!We(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var ze = Be(),
    Re = Be({ defaultModifiers: [me, Me, fe, Rt] }),
    qe = Be({ defaultModifiers: [me, Me, fe, Rt, Pe, Se, je, ce, Ne] });
  const Ve = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          afterMain: Nt,
          afterRead: St,
          afterWrite: jt,
          applyStyles: Rt,
          arrow: ce,
          auto: bt,
          basePlacements: vt,
          beforeMain: Dt,
          beforeRead: kt,
          beforeWrite: Pt,
          bottom: mt,
          clippingParents: At,
          computeStyles: fe,
          createPopper: qe,
          createPopperBase: ze,
          createPopperLite: Re,
          detectOverflow: ke,
          end: wt,
          eventListeners: me,
          flip: Se,
          hide: Ne,
          left: _t,
          main: It,
          modifierPhases: Ft,
          offset: Pe,
          placements: xt,
          popper: Tt,
          popperGenerator: Be,
          popperOffsets: Me,
          preventOverflow: je,
          read: Lt,
          reference: Ct,
          right: gt,
          start: yt,
          top: pt,
          variationPlacements: Ot,
          viewport: Et,
          write: Mt,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Ke = "dropdown",
    Qe = "ArrowUp",
    Xe = "ArrowDown",
    Ye = "click.bs.dropdown.data-api",
    Ue = "keydown.bs.dropdown.data-api",
    Ge = "show",
    Je = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Ze = `${Je}.show`,
    ti = ".dropdown-menu",
    ei = p() ? "top-end" : "top-start",
    ii = p() ? "top-start" : "top-end",
    ni = p() ? "bottom-end" : "bottom-start",
    si = p() ? "bottom-start" : "bottom-end",
    oi = p() ? "left-start" : "right-start",
    ri = p() ? "right-start" : "left-start",
    ai = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    li = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  class ci extends W {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          z.next(this._element, ti)[0] ||
          z.prev(this._element, ti)[0] ||
          z.findOne(ti, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return ai;
    }
    static get DefaultType() {
      return li;
    }
    static get NAME() {
      return Ke;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (l(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (const t of [].concat(...document.body.children))
            P.on(t, "mouseover", h);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(Ge),
          this._element.classList.add(Ge),
          P.trigger(this._element, "shown.bs.dropdown", t);
      }
    }
    hide() {
      if (l(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            P.off(t, "mouseover", h);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(Ge),
          this._element.classList.remove(Ge),
          this._element.setAttribute("aria-expanded", "false"),
          H.removeDataAttribute(this._menu, "popper"),
          P.trigger(this._element, "hidden.bs.dropdown", t);
      }
    }
    _getConfig(t) {
      if (
        "object" == typeof (t = super._getConfig(t)).reference &&
        !o(t.reference) &&
        "function" != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${Ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === Ve)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = this._parent)
        : o(this._config.reference)
        ? (t = r(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      const e = this._getPopperConfig();
      this._popper = qe(t, this._menu, e);
    }
    _isShown() {
      return this._menu.classList.contains(Ge);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend")) return oi;
      if (t.classList.contains("dropstart")) return ri;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? ii : ei) : e ? si : ni;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (H.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        { ...t, ...g(this._config.popperConfig, [t]) }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = z
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter((t) => a(t));
      i.length && b(i, e, t === Xe, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ci.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
      const e = z.find(Ze);
      for (const i of e) {
        const e = ci.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
          s = n.includes(e._menu);
        if (
          n.includes(e._element) ||
          ("inside" === e._config.autoClose && !s) ||
          ("outside" === e._config.autoClose && s)
        )
          continue;
        if (
          e._menu.contains(t.target) &&
          (("keyup" === t.type && "Tab" === t.key) ||
            /input|select|option|textarea|form/i.test(t.target.tagName))
        )
          continue;
        const o = { relatedTarget: e._element };
        "click" === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = "Escape" === t.key,
        n = [Qe, Xe].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = this.matches(Je)
          ? this
          : z.prev(this, Je)[0] ||
            z.next(this, Je)[0] ||
            z.findOne(Je, t.delegateTarget.parentNode),
        o = ci.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
    }
  }
  P.on(document, Ue, Je, ci.dataApiKeydownHandler),
    P.on(document, Ue, ti, ci.dataApiKeydownHandler),
    P.on(document, Ye, ci.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", ci.clearMenus),
    P.on(document, Ye, Je, function (t) {
      t.preventDefault(), ci.getOrCreateInstance(this).toggle();
    }),
    m(ci);
  const hi = "show",
    di = "mousedown.bs.backdrop",
    ui = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    fi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class pi extends $ {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return ui;
    }
    static get DefaultType() {
      return fi;
    }
    static get NAME() {
      return "backdrop";
    }
    show(t) {
      if (!this._config.isVisible) return void g(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && d(e),
        e.classList.add(hi),
        this._emulateAnimation(() => {
          g(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(hi),
          this._emulateAnimation(() => {
            this.dispose(), g(t);
          }))
        : g(t);
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, di),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = r(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        P.on(t, di, () => {
          g(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      _(t, this._getElement(), this._config.isAnimated);
    }
  }
  const mi = ".bs.focustrap",
    gi = "backward",
    _i = { autofocus: !0, trapElement: null },
    bi = { autofocus: "boolean", trapElement: "element" };
  class vi extends $ {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return _i;
    }
    static get DefaultType() {
      return bi;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        P.off(document, mi),
        P.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        P.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), P.off(document, mi));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = z.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === gi
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? gi : "forward");
    }
  }
  const yi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    wi = ".sticky-top",
    Ai = "padding-right",
    Ei = "margin-right";
  class Ti {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, Ai, (e) => e + t),
        this._setElementAttributes(yi, Ai, (e) => e + t),
        this._setElementAttributes(wi, Ei, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, Ai),
        this._resetElementAttributes(yi, Ai),
        this._resetElementAttributes(wi, Ei);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && H.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = H.getDataAttribute(t, e);
        null !== i
          ? (H.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if (o(t)) e(t);
      else for (const i of z.find(t, this._element)) e(i);
    }
  }
  const Ci = ".bs.modal",
    Oi = "hidden.bs.modal",
    xi = "show.bs.modal",
    ki = "modal-open",
    Li = "show",
    Si = "modal-static",
    Di = { backdrop: !0, focus: !0, keyboard: !0 },
    Ii = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  class Ni extends W {
    constructor(t, e) {
      super(t, e),
        (this._dialog = z.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Ti()),
        this._addEventListeners();
    }
    static get Default() {
      return Di;
    }
    static get DefaultType() {
      return Ii;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        P.trigger(this._element, xi, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(ki),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (P.trigger(this._element, "hide.bs.modal").defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(Li),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated()
          )));
    }
    dispose() {
      P.off(window, Ci),
        P.off(this._dialog, Ci),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new pi({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new vi({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      const e = z.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0),
        d(this._element),
        this._element.classList.add(Li),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              P.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
          },
          this._dialog,
          this._isAnimated()
        );
    }
    _addEventListeners() {
      P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
        "Escape" === t.key &&
          (this._config.keyboard
            ? this.hide()
            : this._triggerBackdropTransition());
      }),
        P.on(window, "resize.bs.modal", () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        P.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
          P.one(this._element, "click.dismiss.bs.modal", (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ("static" !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(ki),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            P.trigger(this._element, Oi);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      "hidden" === e ||
        this._element.classList.contains(Si) ||
        (t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(Si),
        this._queueCallback(() => {
          this._element.classList.remove(Si),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = p() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = p() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Ni.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = z.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        P.one(e, xi, (t) => {
          t.defaultPrevented ||
            P.one(e, Oi, () => {
              a(this) && this.focus();
            });
        });
      const i = z.findOne(".modal.show");
      i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this);
    }
  ),
    R(Ni),
    m(Ni);
  const Pi = "show",
    Mi = "showing",
    ji = "hiding",
    Fi = ".offcanvas.show",
    Hi = "hidePrevented.bs.offcanvas",
    $i = "hidden.bs.offcanvas",
    Wi = { backdrop: !0, keyboard: !0, scroll: !1 },
    Bi = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class zi extends W {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return Wi;
    }
    static get DefaultType() {
      return Bi;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new Ti().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Mi),
        this._queueCallback(
          () => {
            (this._config.scroll && !this._config.backdrop) ||
              this._focustrap.activate(),
              this._element.classList.add(Pi),
              this._element.classList.remove(Mi),
              P.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add(ji),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.classList.remove(Pi, ji),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new Ti().reset(),
                P.trigger(this._element, $i);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new pi({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              "static" !== this._config.backdrop
                ? this.hide()
                : P.trigger(this._element, Hi);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new vi({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        "Escape" === t.key &&
          (this._config.keyboard ? this.hide() : P.trigger(this._element, Hi));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = zi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = z.getElementFromSelector(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)))
        return;
      P.one(e, $i, () => {
        a(this) && this.focus();
      });
      const i = z.findOne(Fi);
      i && i !== e && zi.getInstance(i).hide(),
        zi.getOrCreateInstance(e).toggle(this);
    }
  ),
    P.on(window, "load.bs.offcanvas.data-api", () => {
      for (const t of z.find(Fi)) zi.getOrCreateInstance(t).show();
    }),
    P.on(window, "resize.bs.offcanvas", () => {
      for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(t).position &&
          zi.getOrCreateInstance(t).hide();
    }),
    R(zi),
    m(zi);
  const Ri = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    qi = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Vi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    Ki = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !qi.has(i) || Boolean(Vi.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    Qi = {
      allowList: Ri,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    Xi = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    Yi = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class Ui extends $ {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return Qi;
    }
    static get DefaultType() {
      return Xi;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, Yi);
    }
    _setContent(t, e, i) {
      const n = z.findOne(i, t);
      n &&
        ((e = this._resolvePossibleFunction(e))
          ? o(e)
            ? this._putElementInTemplate(r(e), n)
            : this._config.html
            ? (n.innerHTML = this._maybeSanitize(e))
            : (n.textContent = e)
          : n.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));
            for (const t of s) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue;
              }
              const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || []);
              for (const e of n) Ki(e, s) || t.removeAttribute(e.nodeName);
            }
            return n.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return g(t, [this]);
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ""), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Ji = "fade",
    Zi = "show",
    tn = ".modal",
    en = "hide.bs.modal",
    nn = "hover",
    sn = "focus",
    on = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left",
    },
    rn = {
      allowList: Ri,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    an = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  class ln extends W {
    constructor(t, e) {
      if (void 0 === Ve)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return rn;
    }
    static get DefaultType() {
      return an;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(this._element.closest(tn), en, this._hideModalHandler),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.eventName("show")),
        e = (
          c(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this._disposePopper();
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          P.trigger(this._element, this.constructor.eventName("inserted"))),
        (this._popper = this._createPopper(i)),
        i.classList.add(Zi),
        "ontouchstart" in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          P.on(t, "mouseover", h);
      this._queueCallback(
        () => {
          P.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (
        this._isShown() &&
        !P.trigger(this._element, this.constructor.eventName("hide"))
          .defaultPrevented
      ) {
        if (
          (this._getTipElement().classList.remove(Zi),
          "ontouchstart" in document.documentElement)
        )
          for (const t of [].concat(...document.body.children))
            P.off(t, "mouseover", h);
        (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1),
          (this._isHovered = null),
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                P.trigger(this._element, this.constructor.eventName("hidden")));
            },
            this.tip,
            this._isAnimated()
          );
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(Ji, Zi),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", i), this._isAnimated() && e.classList.add(Ji), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new Ui({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(Ji))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(Zi);
    }
    _createPopper(t) {
      const e = g(this._config.placement, [this, t, this._element]),
        i = on[e.toUpperCase()];
      return qe(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return g(t, [this._element]);
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (t) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                t.state.placement
              );
            },
          },
        ],
      };
      return { ...e, ...g(this._config.popperConfig, [e]) };
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e)
          P.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle();
            }
          );
        else if ("manual" !== e) {
          const t =
              e === nn
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            i =
              e === nn
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout");
          P.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger["focusin" === t.type ? sn : nn] = !0), e._enter();
          }),
            P.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger["focusout" === t.type ? sn : nn] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        P.on(this._element.closest(tn), en, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-bs-original-title", t),
        this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = H.getDataAttributes(this._element);
      for (const t of Object.keys(e)) Gi.has(t) && delete e[t];
      return (
        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : r(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const [e, i] of Object.entries(this._config))
        this.constructor.Default[e] !== i && (t[e] = i);
      return (t.selector = !1), (t.trigger = "manual"), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null)),
        this.tip && (this.tip.remove(), (this.tip = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ln.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m(ln);
  const cn = {
      ...ln.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    hn = { ...ln.DefaultType, content: "(null|string|element|function)" };
  class dn extends ln {
    static get Default() {
      return cn;
    }
    static get DefaultType() {
      return hn;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = dn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m(dn);
  const un = "click.bs.scrollspy",
    fn = "active",
    pn = "[href]",
    mn = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    gn = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  class _n extends W {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return mn;
    }
    static get DefaultType() {
      return gn;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = r(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        "string" == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(",")
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (P.off(this._config.target, un),
        P.on(this._config.target, un, pn, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo)
              return void i.scrollTo({ top: n, behavior: "smooth" });
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if ((i(o), !n)) return;
        } else s || t || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = z.find(pn, this._config.target);
      for (const e of t) {
        if (!e.hash || l(e)) continue;
        const t = z.findOne(decodeURI(e.hash), this._element);
        a(t) &&
          (this._targetLinks.set(decodeURI(e.hash), e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(fn),
        this._activateParents(t),
        P.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: t,
        }));
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(fn);
      else
        for (const e of z.parents(t, ".nav, .list-group"))
          for (const t of z.prev(
            e,
            ".nav-link, .nav-item > .nav-link, .list-group-item"
          ))
            t.classList.add(fn);
    }
    _clearActiveClass(t) {
      t.classList.remove(fn);
      const e = z.find("[href].active", t);
      for (const t of e) t.classList.remove(fn);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = _n.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, "load.bs.scrollspy.data-api", () => {
    for (const t of z.find('[data-bs-spy="scroll"]')) _n.getOrCreateInstance(t);
  }),
    m(_n);
  const bn = "ArrowLeft",
    vn = "ArrowRight",
    yn = "ArrowUp",
    wn = "ArrowDown",
    An = "active",
    En = "fade",
    Tn = "show",
    Cn =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    On = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Cn}`;
  class xn extends W {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          P.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? P.trigger(e, "hide.bs.tab", { relatedTarget: t }) : null;
      P.trigger(t, "show.bs.tab", { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      t &&
        (t.classList.add(An),
        this._activate(z.getElementFromSelector(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                P.trigger(t, "shown.bs.tab", { relatedTarget: e }))
              : t.classList.add(Tn);
          },
          t,
          t.classList.contains(En)
        ));
    }
    _deactivate(t, e) {
      t &&
        (t.classList.remove(An),
        t.blur(),
        this._deactivate(z.getElementFromSelector(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                P.trigger(t, "hidden.bs.tab", { relatedTarget: e }))
              : t.classList.remove(Tn);
          },
          t,
          t.classList.contains(En)
        ));
    }
    _keydown(t) {
      if (![bn, vn, yn, wn].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = [vn, wn].includes(t.key),
        i = b(
          this._getChildren().filter((t) => !l(t)),
          t.target,
          e,
          !0
        );
      i && (i.focus({ preventScroll: !0 }), xn.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return z.find(On, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const t of e) this._setInitialAttributesOnChild(t);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = z.getElementFromSelector(t);
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown")) return;
      const n = (t, n) => {
        const s = z.findOne(t, i);
        s && s.classList.toggle(n, e);
      };
      n(".dropdown-toggle", An),
        n(".dropdown-menu", Tn),
        i.setAttribute("aria-expanded", e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(An);
    }
    _getInnerElement(t) {
      return t.matches(On) ? t : z.findOne(On, t);
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = xn.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(document, "click.bs.tab", Cn, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      l(this) || xn.getOrCreateInstance(this).show();
  }),
    P.on(window, "load.bs.tab", () => {
      for (const t of z.find(
        '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
      ))
        xn.getOrCreateInstance(t);
    }),
    m(xn);
  const kn = "hide",
    Ln = "show",
    Sn = "showing",
    Dn = { animation: "boolean", autohide: "boolean", delay: "number" },
    In = { animation: !0, autohide: !0, delay: 5e3 };
  class Nn extends W {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return In;
    }
    static get DefaultType() {
      return Dn;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      P.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(kn),
        d(this._element),
        this._element.classList.add(Ln, Sn),
        this._queueCallback(
          () => {
            this._element.classList.remove(Sn),
              P.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this.isShown() &&
        (P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.add(Sn),
          this._queueCallback(
            () => {
              this._element.classList.add(kn),
                this._element.classList.remove(Sn, Ln),
                P.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(Ln),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(Ln);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        P.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        P.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        P.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Nn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    R(Nn),
    m(Nn),
    {
      Alert: q,
      Button: K,
      Carousel: rt,
      Collapse: ft,
      Dropdown: ci,
      Modal: Ni,
      Offcanvas: zi,
      Popover: dn,
      ScrollSpy: _n,
      Tab: xn,
      Toast: Nn,
      Tooltip: ln,
    }
  );
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        s = o(c),
        f = n(8),
        d = o(f),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1,
        },
        j = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (k = !0), k))
            return (w = (0, y.default)(w, x)), (0, b.default)(w, x.once), w;
        },
        O = function () {
          (w = (0, h.default)()), j();
        },
        M = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay");
          });
        },
        S = function (e) {
          return (
            e === !0 ||
            ("mobile" === e && p.default.mobile()) ||
            ("phone" === e && p.default.phone()) ||
            ("tablet" === e && p.default.tablet()) ||
            ("function" == typeof e && e() === !0)
          );
        },
        _ = function (e) {
          (x = i(x, e)), (w = (0, h.default)());
          var t = document.all && !window.atob;
          return S(x.disable) || t
            ? M()
            : (x.disableMutationObserver ||
                d.default.isSupported() ||
                (console.info(
                  '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                ),
                (x.disableMutationObserver = !0)),
              document
                .querySelector("body")
                .setAttribute("data-aos-easing", x.easing),
              document
                .querySelector("body")
                .setAttribute("data-aos-duration", x.duration),
              document
                .querySelector("body")
                .setAttribute("data-aos-delay", x.delay),
              "DOMContentLoaded" === x.startEvent &&
              ["complete", "interactive"].indexOf(document.readyState) > -1
                ? j(!0)
                : "load" === x.startEvent
                ? window.addEventListener(x.startEvent, function () {
                    j(!0);
                  })
                : document.addEventListener(x.startEvent, function () {
                    j(!0);
                  }),
              window.addEventListener(
                "resize",
                (0, s.default)(j, x.debounceDelay, !0)
              ),
              window.addEventListener(
                "orientationchange",
                (0, s.default)(j, x.debounceDelay, !0)
              ),
              window.addEventListener(
                "scroll",
                (0, u.default)(function () {
                  (0, b.default)(w, x.once);
                }, x.throttleDelay)
              ),
              x.disableMutationObserver || d.default.ready("[data-aos]", O),
              w);
        };
      e.exports = { init: _, refresh: j, refreshHard: O };
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function o(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (k = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (k = e), (h = setTimeout(f, t)), M ? o(e) : g;
          }
          function a(e) {
            var n = e - w,
              o = e - k,
              i = t - n;
            return S ? j(i, y - o) : i;
          }
          function c(e) {
            var n = e - w,
              o = e - k;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function f() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
          }
          function d(e) {
            return (h = void 0), _ && b ? o(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(O());
          }
          function m() {
            var e = O(),
              n = c(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(f, t)), o(w);
            }
            return void 0 === h && (h = setTimeout(f, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            M = !1,
            S = !1,
            _ = !0;
          if ("function" != typeof e) throw new TypeError(s);
          return (
            (t = u(t) || 0),
            i(n) &&
              ((M = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? x(u(n.maxWait) || 0, t) : y),
              (_ = "trailing" in n ? !!n.trailing : _)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e, t, o) {
          var r = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(s);
          return (
            i(o) &&
              ((r = "leading" in o ? !!o.leading : r),
              (a = "trailing" in o ? !!o.trailing : a)),
            n(e, t, { leading: r, maxWait: t, trailing: a })
          );
        }
        function i(e) {
          var t = "undefined" == typeof e ? "undefined" : c(e);
          return !!e && ("object" == t || "function" == t);
        }
        function r(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
          );
        }
        function a(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) ||
            (r(e) && k.call(e) == d)
          );
        }
        function u(e) {
          if ("number" == typeof e) return e;
          if (a(e)) return f;
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, "");
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
        }
        var c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          s = "Expected a function",
          f = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y =
            "object" == ("undefined" == typeof t ? "undefined" : c(t)) &&
            t &&
            t.Object === Object &&
            t,
          g =
            "object" == ("undefined" == typeof self ? "undefined" : c(self)) &&
            self &&
            self.Object === Object &&
            self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now();
          };
        e.exports = o;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function i(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (O = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (O = e), (h = setTimeout(f, t)), M ? i(e) : g;
          }
          function u(e) {
            var n = e - w,
              o = e - O,
              i = t - n;
            return S ? x(i, y - o) : i;
          }
          function s(e) {
            var n = e - w,
              o = e - O;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function f() {
            var e = j();
            return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
          }
          function d(e) {
            return (h = void 0), _ && b ? i(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(j());
          }
          function m() {
            var e = j(),
              n = s(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(f, t)), i(w);
            }
            return void 0 === h && (h = setTimeout(f, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            M = !1,
            S = !1,
            _ = !0;
          if ("function" != typeof e) throw new TypeError(c);
          return (
            (t = a(t) || 0),
            o(n) &&
              ((M = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? k(a(n.maxWait) || 0, t) : y),
              (_ = "trailing" in n ? !!n.trailing : _)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e) {
          var t = "undefined" == typeof e ? "undefined" : u(e);
          return !!e && ("object" == t || "function" == t);
        }
        function i(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
          );
        }
        function r(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) ||
            (i(e) && w.call(e) == f)
          );
        }
        function a(e) {
          if ("number" == typeof e) return e;
          if (r(e)) return s;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, "");
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
        }
        var u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          c = "Expected a function",
          s = NaN,
          f = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v =
            "object" == ("undefined" == typeof t ? "undefined" : u(t)) &&
            t &&
            t.Object === Object &&
            t,
          y =
            "object" == ("undefined" == typeof self ? "undefined" : u(self)) &&
            self &&
            self.Object === Object &&
            self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now();
          };
        e.exports = n;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      "use strict";
      function n(e) {
        var t = void 0,
          o = void 0,
          i = void 0;
        for (t = 0; t < e.length; t += 1) {
          if (((o = e[t]), o.dataset && o.dataset.aos)) return !0;
          if ((i = o.children && n(o.children))) return !0;
        }
        return !1;
      }
      function o() {
        return (
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver
        );
      }
      function i() {
        return !!o();
      }
      function r(e, t) {
        var n = window.document,
          i = o(),
          r = new i(a);
        (u = t),
          r.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0,
          });
      }
      function a(e) {
        e &&
          e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              o = Array.prototype.slice.call(e.removedNodes),
              i = t.concat(o);
            if (n(i)) return u();
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = function () {};
      t.default = { isSupported: i, ready: r };
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        s = (function () {
          function e() {
            n(this, e);
          }
          return (
            i(e, [
              {
                key: "phone",
                value: function () {
                  var e = o();
                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                },
              },
              {
                key: "mobile",
                value: function () {
                  var e = o();
                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new s();
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t, n) {
          var o = e.node.getAttribute("data-aos-once");
          t > e.position
            ? e.node.classList.add("aos-animate")
            : "undefined" != typeof o &&
              ("false" === o || (!n && "true" !== o)) &&
              e.node.classList.remove("aos-animate");
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, i + o, t);
          });
        };
      t.default = o;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add("aos-init"),
                (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      t.default = a;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case "top-bottom":
              break;
            case "center-bottom":
              n += e.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n += e.offsetHeight;
              break;
            case "top-center":
              n += i / 2;
              break;
            case "bottom-center":
              n += i / 2 + e.offsetHeight;
              break;
            case "center-center":
              n += i / 2 + e.offsetHeight / 2;
              break;
            case "top-top":
              n += i;
              break;
            case "bottom-top":
              n += e.offsetHeight + i;
              break;
            case "center-top":
              n += e.offsetHeight / 2 + i;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      t.default = a;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        for (
          var t = 0, n = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: n, left: t };
      };
      t.default = n;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        return (
          (e = e || document.querySelectorAll("[data-aos]")),
          Array.prototype.map.call(e, function (e) {
            return { node: e };
          })
        );
      };
      t.default = n;
    },
  ]);
});
//Prevent Page Reload on all # links
var allLinks = document.querySelectorAll("a[href='#']");
for (var i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("click", disableDefaultAction, false);
}
function disableDefaultAction(e) {
  e.preventDefault();
}

// On scroll Add Class
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    document.body.classList.add("page-scrolled");
  } else {
    document.body.classList.remove("page-scrolled");
  }
});

// Footer Adjustment
function footerAdj() {
  var footerH = document.querySelector(".footer").offsetHeight;
  document.querySelector(".footer").style.marginTop = "-" + footerH + "px";
  document.querySelector(".wrapper").style.paddingBottom = footerH + "px";
}
// footerAdj();
window.addEventListener("resize", function () {
  // footerAdj();
});

// Add remove class when window resize finished
var $resizeTimer;
window.addEventListener("resize", function () {
  if (!document.body.classList.contains("window-resizing")) {
    document.body.classList.add("window-resizing");
  }
  clearTimeout($resizeTimer);
  $resizeTimer = setTimeout(function () {
    document.body.classList.remove("window-resizing");
  }, 250);
});

// On Load Page Visible
window.addEventListener("load", function () {
  document.body.classList.add("page-loaded");
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5idW5kbGUubWluLmpzIiwiYW9zLmpzIiwiY3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICAqIEJvb3RzdHJhcCB2NS4zLjAgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMyBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5ib290c3RyYXA9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2NvbnN0IHQ9bmV3IE1hcCxlPXtzZXQoZSxpLG4pe3QuaGFzKGUpfHx0LnNldChlLG5ldyBNYXApO2NvbnN0IHM9dC5nZXQoZSk7cy5oYXMoaSl8fDA9PT1zLnNpemU/cy5zZXQoaSxuKTpjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKHMua2V5cygpKVswXX0uYCl9LGdldDooZSxpKT0+dC5oYXMoZSkmJnQuZ2V0KGUpLmdldChpKXx8bnVsbCxyZW1vdmUoZSxpKXtpZighdC5oYXMoZSkpcmV0dXJuO2NvbnN0IG49dC5nZXQoZSk7bi5kZWxldGUoaSksMD09PW4uc2l6ZSYmdC5kZWxldGUoZSl9fSxpPVwidHJhbnNpdGlvbmVuZFwiLG49dD0+KHQmJndpbmRvdy5DU1MmJndpbmRvdy5DU1MuZXNjYXBlJiYodD10LnJlcGxhY2UoLyMoW15cXHNcIiMnXSspL2csKCh0LGUpPT5gIyR7Q1NTLmVzY2FwZShlKX1gKSkpLHQpLHM9dD0+e3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoaSkpfSxvPXQ9PiEoIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0KSYmKHZvaWQgMCE9PXQuanF1ZXJ5JiYodD10WzBdKSx2b2lkIDAhPT10Lm5vZGVUeXBlKSxyPXQ9Pm8odCk/dC5qcXVlcnk/dFswXTp0Olwic3RyaW5nXCI9PXR5cGVvZiB0JiZ0Lmxlbmd0aD4wP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobih0KSk6bnVsbCxhPXQ9PntpZighbyh0KXx8MD09PXQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpcmV0dXJuITE7Y29uc3QgZT1cInZpc2libGVcIj09PWdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShcInZpc2liaWxpdHlcIiksaT10LmNsb3Nlc3QoXCJkZXRhaWxzOm5vdChbb3Blbl0pXCIpO2lmKCFpKXJldHVybiBlO2lmKGkhPT10KXtjb25zdCBlPXQuY2xvc2VzdChcInN1bW1hcnlcIik7aWYoZSYmZS5wYXJlbnROb2RlIT09aSlyZXR1cm4hMTtpZihudWxsPT09ZSlyZXR1cm4hMX1yZXR1cm4gZX0sbD10PT4hdHx8dC5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFfHwhIXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIil8fCh2b2lkIDAhPT10LmRpc2FibGVkP3QuZGlzYWJsZWQ6dC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSYmXCJmYWxzZVwiIT09dC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSksYz10PT57aWYoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5nZXRSb290Tm9kZSl7Y29uc3QgZT10LmdldFJvb3ROb2RlKCk7cmV0dXJuIGUgaW5zdGFuY2VvZiBTaGFkb3dSb290P2U6bnVsbH1yZXR1cm4gdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/dDp0LnBhcmVudE5vZGU/Yyh0LnBhcmVudE5vZGUpOm51bGx9LGg9KCk9Pnt9LGQ9dD0+e3Qub2Zmc2V0SGVpZ2h0fSx1PSgpPT53aW5kb3cualF1ZXJ5JiYhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWJzLW5vLWpxdWVyeVwiKT93aW5kb3cualF1ZXJ5Om51bGwsZj1bXSxwPSgpPT5cInJ0bFwiPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpcixtPXQ9Pnt2YXIgZTtlPSgpPT57Y29uc3QgZT11KCk7aWYoZSl7Y29uc3QgaT10Lk5BTUUsbj1lLmZuW2ldO2UuZm5baV09dC5qUXVlcnlJbnRlcmZhY2UsZS5mbltpXS5Db25zdHJ1Y3Rvcj10LGUuZm5baV0ubm9Db25mbGljdD0oKT0+KGUuZm5baV09bix0LmpRdWVyeUludGVyZmFjZSl9fSxcImxvYWRpbmdcIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/KGYubGVuZ3RofHxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgoKT0+e2Zvcihjb25zdCB0IG9mIGYpdCgpfSkpLGYucHVzaChlKSk6ZSgpfSxnPSh0LGU9W10saT10KT0+XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KC4uLmUpOmksXz0odCxlLG49ITApPT57aWYoIW4pcmV0dXJuIHZvaWQgZyh0KTtjb25zdCBvPSh0PT57aWYoIXQpcmV0dXJuIDA7bGV0e3RyYW5zaXRpb25EdXJhdGlvbjplLHRyYW5zaXRpb25EZWxheTppfT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KTtjb25zdCBuPU51bWJlci5wYXJzZUZsb2F0KGUpLHM9TnVtYmVyLnBhcnNlRmxvYXQoaSk7cmV0dXJuIG58fHM/KGU9ZS5zcGxpdChcIixcIilbMF0saT1pLnNwbGl0KFwiLFwiKVswXSwxZTMqKE51bWJlci5wYXJzZUZsb2F0KGUpK051bWJlci5wYXJzZUZsb2F0KGkpKSk6MH0pKGUpKzU7bGV0IHI9ITE7Y29uc3QgYT0oe3RhcmdldDpufSk9PntuPT09ZSYmKHI9ITAsZS5yZW1vdmVFdmVudExpc3RlbmVyKGksYSksZyh0KSl9O2UuYWRkRXZlbnRMaXN0ZW5lcihpLGEpLHNldFRpbWVvdXQoKCgpPT57cnx8cyhlKX0pLG8pfSxiPSh0LGUsaSxuKT0+e2NvbnN0IHM9dC5sZW5ndGg7bGV0IG89dC5pbmRleE9mKGUpO3JldHVybi0xPT09bz8haSYmbj90W3MtMV06dFswXToobys9aT8xOi0xLG4mJihvPShvK3MpJXMpLHRbTWF0aC5tYXgoMCxNYXRoLm1pbihvLHMtMSkpXSl9LHY9L1teLl0qKD89XFwuLiopXFwufC4qLyx5PS9cXC4uKi8sdz0vOjpcXGQrJC8sQT17fTtsZXQgRT0xO2NvbnN0IFQ9e21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIn0sQz1uZXcgU2V0KFtcImNsaWNrXCIsXCJkYmxjbGlja1wiLFwibW91c2V1cFwiLFwibW91c2Vkb3duXCIsXCJjb250ZXh0bWVudVwiLFwibW91c2V3aGVlbFwiLFwiRE9NTW91c2VTY3JvbGxcIixcIm1vdXNlb3ZlclwiLFwibW91c2VvdXRcIixcIm1vdXNlbW92ZVwiLFwic2VsZWN0c3RhcnRcIixcInNlbGVjdGVuZFwiLFwia2V5ZG93blwiLFwia2V5cHJlc3NcIixcImtleXVwXCIsXCJvcmllbnRhdGlvbmNoYW5nZVwiLFwidG91Y2hzdGFydFwiLFwidG91Y2htb3ZlXCIsXCJ0b3VjaGVuZFwiLFwidG91Y2hjYW5jZWxcIixcInBvaW50ZXJkb3duXCIsXCJwb2ludGVybW92ZVwiLFwicG9pbnRlcnVwXCIsXCJwb2ludGVybGVhdmVcIixcInBvaW50ZXJjYW5jZWxcIixcImdlc3R1cmVzdGFydFwiLFwiZ2VzdHVyZWNoYW5nZVwiLFwiZ2VzdHVyZWVuZFwiLFwiZm9jdXNcIixcImJsdXJcIixcImNoYW5nZVwiLFwicmVzZXRcIixcInNlbGVjdFwiLFwic3VibWl0XCIsXCJmb2N1c2luXCIsXCJmb2N1c291dFwiLFwibG9hZFwiLFwidW5sb2FkXCIsXCJiZWZvcmV1bmxvYWRcIixcInJlc2l6ZVwiLFwibW92ZVwiLFwiRE9NQ29udGVudExvYWRlZFwiLFwicmVhZHlzdGF0ZWNoYW5nZVwiLFwiZXJyb3JcIixcImFib3J0XCIsXCJzY3JvbGxcIl0pO2Z1bmN0aW9uIE8odCxlKXtyZXR1cm4gZSYmYCR7ZX06OiR7RSsrfWB8fHQudWlkRXZlbnR8fEUrK31mdW5jdGlvbiB4KHQpe2NvbnN0IGU9Tyh0KTtyZXR1cm4gdC51aWRFdmVudD1lLEFbZV09QVtlXXx8e30sQVtlXX1mdW5jdGlvbiBrKHQsZSxpPW51bGwpe3JldHVybiBPYmplY3QudmFsdWVzKHQpLmZpbmQoKHQ9PnQuY2FsbGFibGU9PT1lJiZ0LmRlbGVnYXRpb25TZWxlY3Rvcj09PWkpKX1mdW5jdGlvbiBMKHQsZSxpKXtjb25zdCBuPVwic3RyaW5nXCI9PXR5cGVvZiBlLHM9bj9pOmV8fGk7bGV0IG89Tih0KTtyZXR1cm4gQy5oYXMobyl8fChvPXQpLFtuLHMsb119ZnVuY3Rpb24gUyh0LGUsaSxuLHMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhdClyZXR1cm47bGV0W28scixhXT1MKGUsaSxuKTtpZihlIGluIFQpe2NvbnN0IHQ9dD0+ZnVuY3Rpb24oZSl7aWYoIWUucmVsYXRlZFRhcmdldHx8ZS5yZWxhdGVkVGFyZ2V0IT09ZS5kZWxlZ2F0ZVRhcmdldCYmIWUuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSlyZXR1cm4gdC5jYWxsKHRoaXMsZSl9O3I9dChyKX1jb25zdCBsPXgodCksYz1sW2FdfHwobFthXT17fSksaD1rKGMscixvP2k6bnVsbCk7aWYoaClyZXR1cm4gdm9pZChoLm9uZU9mZj1oLm9uZU9mZiYmcyk7Y29uc3QgZD1PKHIsZS5yZXBsYWNlKHYsXCJcIikpLHU9bz9mdW5jdGlvbih0LGUsaSl7cmV0dXJuIGZ1bmN0aW9uIG4ocyl7Y29uc3Qgbz10LnF1ZXJ5U2VsZWN0b3JBbGwoZSk7Zm9yKGxldHt0YXJnZXQ6cn09cztyJiZyIT09dGhpcztyPXIucGFyZW50Tm9kZSlmb3IoY29uc3QgYSBvZiBvKWlmKGE9PT1yKXJldHVybiBNKHMse2RlbGVnYXRlVGFyZ2V0OnJ9KSxuLm9uZU9mZiYmUC5vZmYodCxzLnR5cGUsZSxpKSxpLmFwcGx5KHIsW3NdKX19KHQsaSxyKTpmdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbiBpKG4pe3JldHVybiBNKG4se2RlbGVnYXRlVGFyZ2V0OnR9KSxpLm9uZU9mZiYmUC5vZmYodCxuLnR5cGUsZSksZS5hcHBseSh0LFtuXSl9fSh0LHIpO3UuZGVsZWdhdGlvblNlbGVjdG9yPW8/aTpudWxsLHUuY2FsbGFibGU9cix1Lm9uZU9mZj1zLHUudWlkRXZlbnQ9ZCxjW2RdPXUsdC5hZGRFdmVudExpc3RlbmVyKGEsdSxvKX1mdW5jdGlvbiBEKHQsZSxpLG4scyl7Y29uc3Qgbz1rKGVbaV0sbixzKTtvJiYodC5yZW1vdmVFdmVudExpc3RlbmVyKGksbyxCb29sZWFuKHMpKSxkZWxldGUgZVtpXVtvLnVpZEV2ZW50XSl9ZnVuY3Rpb24gSSh0LGUsaSxuKXtjb25zdCBzPWVbaV18fHt9O2Zvcihjb25zdFtvLHJdb2YgT2JqZWN0LmVudHJpZXMocykpby5pbmNsdWRlcyhuKSYmRCh0LGUsaSxyLmNhbGxhYmxlLHIuZGVsZWdhdGlvblNlbGVjdG9yKX1mdW5jdGlvbiBOKHQpe3JldHVybiB0PXQucmVwbGFjZSh5LFwiXCIpLFRbdF18fHR9Y29uc3QgUD17b24odCxlLGksbil7Uyh0LGUsaSxuLCExKX0sb25lKHQsZSxpLG4pe1ModCxlLGksbiwhMCl9LG9mZih0LGUsaSxuKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZXx8IXQpcmV0dXJuO2NvbnN0W3MsbyxyXT1MKGUsaSxuKSxhPXIhPT1lLGw9eCh0KSxjPWxbcl18fHt9LGg9ZS5zdGFydHNXaXRoKFwiLlwiKTtpZih2b2lkIDA9PT1vKXtpZihoKWZvcihjb25zdCBpIG9mIE9iamVjdC5rZXlzKGwpKUkodCxsLGksZS5zbGljZSgxKSk7Zm9yKGNvbnN0W2ksbl1vZiBPYmplY3QuZW50cmllcyhjKSl7Y29uc3Qgcz1pLnJlcGxhY2UodyxcIlwiKTthJiYhZS5pbmNsdWRlcyhzKXx8RCh0LGwscixuLmNhbGxhYmxlLG4uZGVsZWdhdGlvblNlbGVjdG9yKX19ZWxzZXtpZighT2JqZWN0LmtleXMoYykubGVuZ3RoKXJldHVybjtEKHQsbCxyLG8scz9pOm51bGwpfX0sdHJpZ2dlcih0LGUsaSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGV8fCF0KXJldHVybiBudWxsO2NvbnN0IG49dSgpO2xldCBzPW51bGwsbz0hMCxyPSEwLGE9ITE7ZSE9PU4oZSkmJm4mJihzPW4uRXZlbnQoZSxpKSxuKHQpLnRyaWdnZXIocyksbz0hcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpLHI9IXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSxhPXMuaXNEZWZhdWx0UHJldmVudGVkKCkpO2NvbnN0IGw9TShuZXcgRXZlbnQoZSx7YnViYmxlczpvLGNhbmNlbGFibGU6ITB9KSxpKTtyZXR1cm4gYSYmbC5wcmV2ZW50RGVmYXVsdCgpLHImJnQuZGlzcGF0Y2hFdmVudChsKSxsLmRlZmF1bHRQcmV2ZW50ZWQmJnMmJnMucHJldmVudERlZmF1bHQoKSxsfX07ZnVuY3Rpb24gTSh0LGU9e30pe2Zvcihjb25zdFtpLG5db2YgT2JqZWN0LmVudHJpZXMoZSkpdHJ5e3RbaV09bn1jYXRjaChlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHtjb25maWd1cmFibGU6ITAsZ2V0OigpPT5ufSl9cmV0dXJuIHR9ZnVuY3Rpb24gaih0KXtpZihcInRydWVcIj09PXQpcmV0dXJuITA7aWYoXCJmYWxzZVwiPT09dClyZXR1cm4hMTtpZih0PT09TnVtYmVyKHQpLnRvU3RyaW5nKCkpcmV0dXJuIE51bWJlcih0KTtpZihcIlwiPT09dHx8XCJudWxsXCI9PT10KXJldHVybiBudWxsO2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiB0O3RyeXtyZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodCkpfWNhdGNoKGUpe3JldHVybiB0fX1mdW5jdGlvbiBGKHQpe3JldHVybiB0LnJlcGxhY2UoL1tBLVpdL2csKHQ9PmAtJHt0LnRvTG93ZXJDYXNlKCl9YCkpfWNvbnN0IEg9e3NldERhdGFBdHRyaWJ1dGUodCxlLGkpe3Quc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7RihlKX1gLGkpfSxyZW1vdmVEYXRhQXR0cmlidXRlKHQsZSl7dC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtGKGUpfWApfSxnZXREYXRhQXR0cmlidXRlcyh0KXtpZighdClyZXR1cm57fTtjb25zdCBlPXt9LGk9T2JqZWN0LmtleXModC5kYXRhc2V0KS5maWx0ZXIoKHQ9PnQuc3RhcnRzV2l0aChcImJzXCIpJiYhdC5zdGFydHNXaXRoKFwiYnNDb25maWdcIikpKTtmb3IoY29uc3QgbiBvZiBpKXtsZXQgaT1uLnJlcGxhY2UoL15icy8sXCJcIik7aT1pLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpK2kuc2xpY2UoMSxpLmxlbmd0aCksZVtpXT1qKHQuZGF0YXNldFtuXSl9cmV0dXJuIGV9LGdldERhdGFBdHRyaWJ1dGU6KHQsZSk9PmoodC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtGKGUpfWApKX07Y2xhc3MgJHtzdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm57fX1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJue319c3RhdGljIGdldCBOQU1FKCl7dGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKX1fZ2V0Q29uZmlnKHQpe3JldHVybiB0PXRoaXMuX21lcmdlQ29uZmlnT2JqKHQpLHQ9dGhpcy5fY29uZmlnQWZ0ZXJNZXJnZSh0KSx0aGlzLl90eXBlQ2hlY2tDb25maWcodCksdH1fY29uZmlnQWZ0ZXJNZXJnZSh0KXtyZXR1cm4gdH1fbWVyZ2VDb25maWdPYmoodCxlKXtjb25zdCBpPW8oZSk/SC5nZXREYXRhQXR0cmlidXRlKGUsXCJjb25maWdcIik6e307cmV0dXJuey4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCwuLi5cIm9iamVjdFwiPT10eXBlb2YgaT9pOnt9LC4uLm8oZSk/SC5nZXREYXRhQXR0cmlidXRlcyhlKTp7fSwuLi5cIm9iamVjdFwiPT10eXBlb2YgdD90Ont9fX1fdHlwZUNoZWNrQ29uZmlnKHQsZT10aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKXtmb3IoY29uc3RbbixzXW9mIE9iamVjdC5lbnRyaWVzKGUpKXtjb25zdCBlPXRbbl0scj1vKGUpP1wiZWxlbWVudFwiOm51bGw9PShpPWUpP2Ake2l9YDpPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaSkubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKCk7aWYoIW5ldyBSZWdFeHAocykudGVzdChyKSl0aHJvdyBuZXcgVHlwZUVycm9yKGAke3RoaXMuY29uc3RydWN0b3IuTkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtufVwiIHByb3ZpZGVkIHR5cGUgXCIke3J9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke3N9XCIuYCl9dmFyIGl9fWNsYXNzIFcgZXh0ZW5kcyAke2NvbnN0cnVjdG9yKHQsaSl7c3VwZXIoKSwodD1yKHQpKSYmKHRoaXMuX2VsZW1lbnQ9dCx0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKGkpLGUuc2V0KHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSx0aGlzKSl9ZGlzcG9zZSgpe2UucmVtb3ZlKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSksUC5vZmYodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSk7Zm9yKGNvbnN0IHQgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpdGhpc1t0XT1udWxsfV9xdWV1ZUNhbGxiYWNrKHQsZSxpPSEwKXtfKHQsZSxpKX1fZ2V0Q29uZmlnKHQpe3JldHVybiB0PXRoaXMuX21lcmdlQ29uZmlnT2JqKHQsdGhpcy5fZWxlbWVudCksdD10aGlzLl9jb25maWdBZnRlck1lcmdlKHQpLHRoaXMuX3R5cGVDaGVja0NvbmZpZyh0KSx0fXN0YXRpYyBnZXRJbnN0YW5jZSh0KXtyZXR1cm4gZS5nZXQocih0KSx0aGlzLkRBVEFfS0VZKX1zdGF0aWMgZ2V0T3JDcmVhdGVJbnN0YW5jZSh0LGU9e30pe3JldHVybiB0aGlzLmdldEluc3RhbmNlKHQpfHxuZXcgdGhpcyh0LFwib2JqZWN0XCI9PXR5cGVvZiBlP2U6bnVsbCl9c3RhdGljIGdldCBWRVJTSU9OKCl7cmV0dXJuXCI1LjMuMFwifXN0YXRpYyBnZXQgREFUQV9LRVkoKXtyZXR1cm5gYnMuJHt0aGlzLk5BTUV9YH1zdGF0aWMgZ2V0IEVWRU5UX0tFWSgpe3JldHVybmAuJHt0aGlzLkRBVEFfS0VZfWB9c3RhdGljIGV2ZW50TmFtZSh0KXtyZXR1cm5gJHt0fSR7dGhpcy5FVkVOVF9LRVl9YH19Y29uc3QgQj10PT57bGV0IGU9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiKTtpZighZXx8XCIjXCI9PT1lKXtsZXQgaT10LmdldEF0dHJpYnV0ZShcImhyZWZcIik7aWYoIWl8fCFpLmluY2x1ZGVzKFwiI1wiKSYmIWkuc3RhcnRzV2l0aChcIi5cIikpcmV0dXJuIG51bGw7aS5pbmNsdWRlcyhcIiNcIikmJiFpLnN0YXJ0c1dpdGgoXCIjXCIpJiYoaT1gIyR7aS5zcGxpdChcIiNcIilbMV19YCksZT1pJiZcIiNcIiE9PWk/aS50cmltKCk6bnVsbH1yZXR1cm4gbihlKX0sej17ZmluZDoodCxlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk9PltdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZSx0KSksZmluZE9uZToodCxlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk9PkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlLHQpLGNoaWxkcmVuOih0LGUpPT5bXS5jb25jYXQoLi4udC5jaGlsZHJlbikuZmlsdGVyKCh0PT50Lm1hdGNoZXMoZSkpKSxwYXJlbnRzKHQsZSl7Y29uc3QgaT1bXTtsZXQgbj10LnBhcmVudE5vZGUuY2xvc2VzdChlKTtmb3IoO247KWkucHVzaChuKSxuPW4ucGFyZW50Tm9kZS5jbG9zZXN0KGUpO3JldHVybiBpfSxwcmV2KHQsZSl7bGV0IGk9dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2Zvcig7aTspe2lmKGkubWF0Y2hlcyhlKSlyZXR1cm5baV07aT1pLnByZXZpb3VzRWxlbWVudFNpYmxpbmd9cmV0dXJuW119LG5leHQodCxlKXtsZXQgaT10Lm5leHRFbGVtZW50U2libGluZztmb3IoO2k7KXtpZihpLm1hdGNoZXMoZSkpcmV0dXJuW2ldO2k9aS5uZXh0RWxlbWVudFNpYmxpbmd9cmV0dXJuW119LGZvY3VzYWJsZUNoaWxkcmVuKHQpe2NvbnN0IGU9W1wiYVwiLFwiYnV0dG9uXCIsXCJpbnB1dFwiLFwidGV4dGFyZWFcIixcInNlbGVjdFwiLFwiZGV0YWlsc1wiLFwiW3RhYmluZGV4XVwiLCdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSddLm1hcCgodD0+YCR7dH06bm90KFt0YWJpbmRleF49XCItXCJdKWApKS5qb2luKFwiLFwiKTtyZXR1cm4gdGhpcy5maW5kKGUsdCkuZmlsdGVyKCh0PT4hbCh0KSYmYSh0KSkpfSxnZXRTZWxlY3RvckZyb21FbGVtZW50KHQpe2NvbnN0IGU9Qih0KTtyZXR1cm4gZSYmei5maW5kT25lKGUpP2U6bnVsbH0sZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KXtjb25zdCBlPUIodCk7cmV0dXJuIGU/ei5maW5kT25lKGUpOm51bGx9LGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IodCl7Y29uc3QgZT1CKHQpO3JldHVybiBlP3ouZmluZChlKTpbXX19LFI9KHQsZT1cImhpZGVcIik9Pntjb25zdCBpPWBjbGljay5kaXNtaXNzJHt0LkVWRU5UX0tFWX1gLG49dC5OQU1FO1Aub24oZG9jdW1lbnQsaSxgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bn1cIl1gLChmdW5jdGlvbihpKXtpZihbXCJBXCIsXCJBUkVBXCJdLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkmJmkucHJldmVudERlZmF1bHQoKSxsKHRoaXMpKXJldHVybjtjb25zdCBzPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKXx8dGhpcy5jbG9zZXN0KGAuJHtufWApO3QuZ2V0T3JDcmVhdGVJbnN0YW5jZShzKVtlXSgpfSkpfTtjbGFzcyBxIGV4dGVuZHMgV3tzdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cImFsZXJ0XCJ9Y2xvc2UoKXtpZihQLnRyaWdnZXIodGhpcy5fZWxlbWVudCxcImNsb3NlLmJzLmFsZXJ0XCIpLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7Y29uc3QgdD10aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZhZGVcIik7dGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PnRoaXMuX2Rlc3Ryb3lFbGVtZW50KCkpLHRoaXMuX2VsZW1lbnQsdCl9X2Rlc3Ryb3lFbGVtZW50KCl7dGhpcy5fZWxlbWVudC5yZW1vdmUoKSxQLnRyaWdnZXIodGhpcy5fZWxlbWVudCxcImNsb3NlZC5icy5hbGVydFwiKSx0aGlzLmRpc3Bvc2UoKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1xLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSh0aGlzKX19KSl9fVIocSxcImNsb3NlXCIpLG0ocSk7Y29uc3QgVj0nW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJztjbGFzcyBLIGV4dGVuZHMgV3tzdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cImJ1dHRvblwifXRvZ2dsZSgpe3RoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1wcmVzc2VkXCIsdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1LLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XCJ0b2dnbGVcIj09PXQmJmVbdF0oKX0pKX19UC5vbihkb2N1bWVudCxcImNsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLFYsKHQ9Pnt0LnByZXZlbnREZWZhdWx0KCk7Y29uc3QgZT10LnRhcmdldC5jbG9zZXN0KFYpO0suZ2V0T3JDcmVhdGVJbnN0YW5jZShlKS50b2dnbGUoKX0pKSxtKEspO2NvbnN0IFE9e2VuZENhbGxiYWNrOm51bGwsbGVmdENhbGxiYWNrOm51bGwscmlnaHRDYWxsYmFjazpudWxsfSxYPXtlbmRDYWxsYmFjazpcIihmdW5jdGlvbnxudWxsKVwiLGxlZnRDYWxsYmFjazpcIihmdW5jdGlvbnxudWxsKVwiLHJpZ2h0Q2FsbGJhY2s6XCIoZnVuY3Rpb258bnVsbClcIn07Y2xhc3MgWSBleHRlbmRzICR7Y29uc3RydWN0b3IodCxlKXtzdXBlcigpLHRoaXMuX2VsZW1lbnQ9dCx0JiZZLmlzU3VwcG9ydGVkKCkmJih0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKGUpLHRoaXMuX2RlbHRhWD0wLHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzPUJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCksdGhpcy5faW5pdEV2ZW50cygpKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gUX1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIFh9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJzd2lwZVwifWRpc3Bvc2UoKXtQLm9mZih0aGlzLl9lbGVtZW50LFwiLmJzLnN3aXBlXCIpfV9zdGFydCh0KXt0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cz90aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKHQpJiYodGhpcy5fZGVsdGFYPXQuY2xpZW50WCk6dGhpcy5fZGVsdGFYPXQudG91Y2hlc1swXS5jbGllbnRYfV9lbmQodCl7dGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCh0KSYmKHRoaXMuX2RlbHRhWD10LmNsaWVudFgtdGhpcy5fZGVsdGFYKSx0aGlzLl9oYW5kbGVTd2lwZSgpLGcodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKX1fbW92ZSh0KXt0aGlzLl9kZWx0YVg9dC50b3VjaGVzJiZ0LnRvdWNoZXMubGVuZ3RoPjE/MDp0LnRvdWNoZXNbMF0uY2xpZW50WC10aGlzLl9kZWx0YVh9X2hhbmRsZVN3aXBlKCl7Y29uc3QgdD1NYXRoLmFicyh0aGlzLl9kZWx0YVgpO2lmKHQ8PTQwKXJldHVybjtjb25zdCBlPXQvdGhpcy5fZGVsdGFYO3RoaXMuX2RlbHRhWD0wLGUmJmcoZT4wP3RoaXMuX2NvbmZpZy5yaWdodENhbGxiYWNrOnRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spfV9pbml0RXZlbnRzKCl7dGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHM/KFAub24odGhpcy5fZWxlbWVudCxcInBvaW50ZXJkb3duLmJzLnN3aXBlXCIsKHQ9PnRoaXMuX3N0YXJ0KHQpKSksUC5vbih0aGlzLl9lbGVtZW50LFwicG9pbnRlcnVwLmJzLnN3aXBlXCIsKHQ9PnRoaXMuX2VuZCh0KSkpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvaW50ZXItZXZlbnRcIikpOihQLm9uKHRoaXMuX2VsZW1lbnQsXCJ0b3VjaHN0YXJ0LmJzLnN3aXBlXCIsKHQ9PnRoaXMuX3N0YXJ0KHQpKSksUC5vbih0aGlzLl9lbGVtZW50LFwidG91Y2htb3ZlLmJzLnN3aXBlXCIsKHQ9PnRoaXMuX21vdmUodCkpKSxQLm9uKHRoaXMuX2VsZW1lbnQsXCJ0b3VjaGVuZC5icy5zd2lwZVwiLCh0PT50aGlzLl9lbmQodCkpKSl9X2V2ZW50SXNQb2ludGVyUGVuVG91Y2godCl7cmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzJiYoXCJwZW5cIj09PXQucG9pbnRlclR5cGV8fFwidG91Y2hcIj09PXQucG9pbnRlclR5cGUpfXN0YXRpYyBpc1N1cHBvcnRlZCgpe3JldHVyblwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnR8fG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cz4wfX1jb25zdCBVPVwibmV4dFwiLEc9XCJwcmV2XCIsSj1cImxlZnRcIixaPVwicmlnaHRcIix0dD1cInNsaWQuYnMuY2Fyb3VzZWxcIixldD1cImNhcm91c2VsXCIsaXQ9XCJhY3RpdmVcIixudD17QXJyb3dMZWZ0OlosQXJyb3dSaWdodDpKfSxzdD17aW50ZXJ2YWw6NWUzLGtleWJvYXJkOiEwLHBhdXNlOlwiaG92ZXJcIixyaWRlOiExLHRvdWNoOiEwLHdyYXA6ITB9LG90PXtpbnRlcnZhbDpcIihudW1iZXJ8Ym9vbGVhbilcIixrZXlib2FyZDpcImJvb2xlYW5cIixwYXVzZTpcIihzdHJpbmd8Ym9vbGVhbilcIixyaWRlOlwiKGJvb2xlYW58c3RyaW5nKVwiLHRvdWNoOlwiYm9vbGVhblwiLHdyYXA6XCJib29sZWFuXCJ9O2NsYXNzIHJ0IGV4dGVuZHMgV3tjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksdGhpcy5faW50ZXJ2YWw9bnVsbCx0aGlzLl9hY3RpdmVFbGVtZW50PW51bGwsdGhpcy5faXNTbGlkaW5nPSExLHRoaXMudG91Y2hUaW1lb3V0PW51bGwsdGhpcy5fc3dpcGVIZWxwZXI9bnVsbCx0aGlzLl9pbmRpY2F0b3JzRWxlbWVudD16LmZpbmRPbmUoXCIuY2Fyb3VzZWwtaW5kaWNhdG9yc1wiLHRoaXMuX2VsZW1lbnQpLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCksdGhpcy5fY29uZmlnLnJpZGU9PT1ldCYmdGhpcy5jeWNsZSgpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBzdH1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIG90fXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiY2Fyb3VzZWxcIn1uZXh0KCl7dGhpcy5fc2xpZGUoVSl9bmV4dFdoZW5WaXNpYmxlKCl7IWRvY3VtZW50LmhpZGRlbiYmYSh0aGlzLl9lbGVtZW50KSYmdGhpcy5uZXh0KCl9cHJldigpe3RoaXMuX3NsaWRlKEcpfXBhdXNlKCl7dGhpcy5faXNTbGlkaW5nJiZzKHRoaXMuX2VsZW1lbnQpLHRoaXMuX2NsZWFySW50ZXJ2YWwoKX1jeWNsZSgpe3RoaXMuX2NsZWFySW50ZXJ2YWwoKSx0aGlzLl91cGRhdGVJbnRlcnZhbCgpLHRoaXMuX2ludGVydmFsPXNldEludGVydmFsKCgoKT0+dGhpcy5uZXh0V2hlblZpc2libGUoKSksdGhpcy5fY29uZmlnLmludGVydmFsKX1fbWF5YmVFbmFibGVDeWNsZSgpe3RoaXMuX2NvbmZpZy5yaWRlJiYodGhpcy5faXNTbGlkaW5nP1Aub25lKHRoaXMuX2VsZW1lbnQsdHQsKCgpPT50aGlzLmN5Y2xlKCkpKTp0aGlzLmN5Y2xlKCkpfXRvKHQpe2NvbnN0IGU9dGhpcy5fZ2V0SXRlbXMoKTtpZih0PmUubGVuZ3RoLTF8fHQ8MClyZXR1cm47aWYodGhpcy5faXNTbGlkaW5nKXJldHVybiB2b2lkIFAub25lKHRoaXMuX2VsZW1lbnQsdHQsKCgpPT50aGlzLnRvKHQpKSk7Y29uc3QgaT10aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpO2lmKGk9PT10KXJldHVybjtjb25zdCBuPXQ+aT9VOkc7dGhpcy5fc2xpZGUobixlW3RdKX1kaXNwb3NlKCl7dGhpcy5fc3dpcGVIZWxwZXImJnRoaXMuX3N3aXBlSGVscGVyLmRpc3Bvc2UoKSxzdXBlci5kaXNwb3NlKCl9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQuZGVmYXVsdEludGVydmFsPXQuaW50ZXJ2YWwsdH1fYWRkRXZlbnRMaXN0ZW5lcnMoKXt0aGlzLl9jb25maWcua2V5Ym9hcmQmJlAub24odGhpcy5fZWxlbWVudCxcImtleWRvd24uYnMuY2Fyb3VzZWxcIiwodD0+dGhpcy5fa2V5ZG93bih0KSkpLFwiaG92ZXJcIj09PXRoaXMuX2NvbmZpZy5wYXVzZSYmKFAub24odGhpcy5fZWxlbWVudCxcIm1vdXNlZW50ZXIuYnMuY2Fyb3VzZWxcIiwoKCk9PnRoaXMucGF1c2UoKSkpLFAub24odGhpcy5fZWxlbWVudCxcIm1vdXNlbGVhdmUuYnMuY2Fyb3VzZWxcIiwoKCk9PnRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSkpKSx0aGlzLl9jb25maWcudG91Y2gmJlkuaXNTdXBwb3J0ZWQoKSYmdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpfV9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCl7Zm9yKGNvbnN0IHQgb2Ygei5maW5kKFwiLmNhcm91c2VsLWl0ZW0gaW1nXCIsdGhpcy5fZWxlbWVudCkpUC5vbih0LFwiZHJhZ3N0YXJ0LmJzLmNhcm91c2VsXCIsKHQ9PnQucHJldmVudERlZmF1bHQoKSkpO2NvbnN0IHQ9e2xlZnRDYWxsYmFjazooKT0+dGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihKKSkscmlnaHRDYWxsYmFjazooKT0+dGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihaKSksZW5kQ2FsbGJhY2s6KCk9PntcImhvdmVyXCI9PT10aGlzLl9jb25maWcucGF1c2UmJih0aGlzLnBhdXNlKCksdGhpcy50b3VjaFRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dCksdGhpcy50b3VjaFRpbWVvdXQ9c2V0VGltZW91dCgoKCk9PnRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSksNTAwK3RoaXMuX2NvbmZpZy5pbnRlcnZhbCkpfX07dGhpcy5fc3dpcGVIZWxwZXI9bmV3IFkodGhpcy5fZWxlbWVudCx0KX1fa2V5ZG93bih0KXtpZigvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHQudGFyZ2V0LnRhZ05hbWUpKXJldHVybjtjb25zdCBlPW50W3Qua2V5XTtlJiYodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZSkpKX1fZ2V0SXRlbUluZGV4KHQpe3JldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YodCl9X3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQodCl7aWYoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KXJldHVybjtjb25zdCBlPXouZmluZE9uZShcIi5hY3RpdmVcIix0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7ZS5jbGFzc0xpc3QucmVtb3ZlKGl0KSxlLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtjb25zdCBpPXouZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke3R9XCJdYCx0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7aSYmKGkuY2xhc3NMaXN0LmFkZChpdCksaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIixcInRydWVcIikpfV91cGRhdGVJbnRlcnZhbCgpe2NvbnN0IHQ9dGhpcy5fYWN0aXZlRWxlbWVudHx8dGhpcy5fZ2V0QWN0aXZlKCk7aWYoIXQpcmV0dXJuO2NvbnN0IGU9TnVtYmVyLnBhcnNlSW50KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1pbnRlcnZhbFwiKSwxMCk7dGhpcy5fY29uZmlnLmludGVydmFsPWV8fHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWx9X3NsaWRlKHQsZT1udWxsKXtpZih0aGlzLl9pc1NsaWRpbmcpcmV0dXJuO2NvbnN0IGk9dGhpcy5fZ2V0QWN0aXZlKCksbj10PT09VSxzPWV8fGIodGhpcy5fZ2V0SXRlbXMoKSxpLG4sdGhpcy5fY29uZmlnLndyYXApO2lmKHM9PT1pKXJldHVybjtjb25zdCBvPXRoaXMuX2dldEl0ZW1JbmRleChzKSxyPWU9PlAudHJpZ2dlcih0aGlzLl9lbGVtZW50LGUse3JlbGF0ZWRUYXJnZXQ6cyxkaXJlY3Rpb246dGhpcy5fb3JkZXJUb0RpcmVjdGlvbih0KSxmcm9tOnRoaXMuX2dldEl0ZW1JbmRleChpKSx0bzpvfSk7aWYocihcInNsaWRlLmJzLmNhcm91c2VsXCIpLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2lmKCFpfHwhcylyZXR1cm47Y29uc3QgYT1Cb29sZWFuKHRoaXMuX2ludGVydmFsKTt0aGlzLnBhdXNlKCksdGhpcy5faXNTbGlkaW5nPSEwLHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobyksdGhpcy5fYWN0aXZlRWxlbWVudD1zO2NvbnN0IGw9bj9cImNhcm91c2VsLWl0ZW0tc3RhcnRcIjpcImNhcm91c2VsLWl0ZW0tZW5kXCIsYz1uP1wiY2Fyb3VzZWwtaXRlbS1uZXh0XCI6XCJjYXJvdXNlbC1pdGVtLXByZXZcIjtzLmNsYXNzTGlzdC5hZGQoYyksZChzKSxpLmNsYXNzTGlzdC5hZGQobCkscy5jbGFzc0xpc3QuYWRkKGwpLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57cy5jbGFzc0xpc3QucmVtb3ZlKGwsYykscy5jbGFzc0xpc3QuYWRkKGl0KSxpLmNsYXNzTGlzdC5yZW1vdmUoaXQsYyxsKSx0aGlzLl9pc1NsaWRpbmc9ITEscih0dCl9KSxpLHRoaXMuX2lzQW5pbWF0ZWQoKSksYSYmdGhpcy5jeWNsZSgpfV9pc0FuaW1hdGVkKCl7cmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xpZGVcIil9X2dldEFjdGl2ZSgpe3JldHVybiB6LmZpbmRPbmUoXCIuYWN0aXZlLmNhcm91c2VsLWl0ZW1cIix0aGlzLl9lbGVtZW50KX1fZ2V0SXRlbXMoKXtyZXR1cm4gei5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIix0aGlzLl9lbGVtZW50KX1fY2xlYXJJbnRlcnZhbCgpe3RoaXMuX2ludGVydmFsJiYoY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCksdGhpcy5faW50ZXJ2YWw9bnVsbCl9X2RpcmVjdGlvblRvT3JkZXIodCl7cmV0dXJuIHAoKT90PT09Sj9HOlU6dD09PUo/VTpHfV9vcmRlclRvRGlyZWN0aW9uKHQpe3JldHVybiBwKCk/dD09PUc/SjpaOnQ9PT1HP1o6Sn1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1ydC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJudW1iZXJcIiE9dHlwZW9mIHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdfHx0LnN0YXJ0c1dpdGgoXCJfXCIpfHxcImNvbnN0cnVjdG9yXCI9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19ZWxzZSBlLnRvKHQpfSkpfX1QLm9uKGRvY3VtZW50LFwiY2xpY2suYnMuY2Fyb3VzZWwuZGF0YS1hcGlcIixcIltkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dXCIsKGZ1bmN0aW9uKHQpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO2lmKCFlfHwhZS5jbGFzc0xpc3QuY29udGFpbnMoZXQpKXJldHVybjt0LnByZXZlbnREZWZhdWx0KCk7Y29uc3QgaT1ydC5nZXRPckNyZWF0ZUluc3RhbmNlKGUpLG49dGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXNsaWRlLXRvXCIpO3JldHVybiBuPyhpLnRvKG4pLHZvaWQgaS5fbWF5YmVFbmFibGVDeWNsZSgpKTpcIm5leHRcIj09PUguZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLFwic2xpZGVcIik/KGkubmV4dCgpLHZvaWQgaS5fbWF5YmVFbmFibGVDeWNsZSgpKTooaS5wcmV2KCksdm9pZCBpLl9tYXliZUVuYWJsZUN5Y2xlKCkpfSkpLFAub24od2luZG93LFwibG9hZC5icy5jYXJvdXNlbC5kYXRhLWFwaVwiLCgoKT0+e2NvbnN0IHQ9ei5maW5kKCdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nKTtmb3IoY29uc3QgZSBvZiB0KXJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UoZSl9KSksbShydCk7Y29uc3QgYXQ9XCJzaG93XCIsbHQ9XCJjb2xsYXBzZVwiLGN0PVwiY29sbGFwc2luZ1wiLGh0PSdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXScsZHQ9e3BhcmVudDpudWxsLHRvZ2dsZTohMH0sdXQ9e3BhcmVudDpcIihudWxsfGVsZW1lbnQpXCIsdG9nZ2xlOlwiYm9vbGVhblwifTtjbGFzcyBmdCBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl90cmlnZ2VyQXJyYXk9W107Y29uc3QgaT16LmZpbmQoaHQpO2Zvcihjb25zdCB0IG9mIGkpe2NvbnN0IGU9ei5nZXRTZWxlY3RvckZyb21FbGVtZW50KHQpLGk9ei5maW5kKGUpLmZpbHRlcigodD0+dD09PXRoaXMuX2VsZW1lbnQpKTtudWxsIT09ZSYmaS5sZW5ndGgmJnRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKHQpfXRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpLHRoaXMuX2NvbmZpZy5wYXJlbnR8fHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksdGhpcy5faXNTaG93bigpKSx0aGlzLl9jb25maWcudG9nZ2xlJiZ0aGlzLnRvZ2dsZSgpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBkdH1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIHV0fXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiY29sbGFwc2VcIn10b2dnbGUoKXt0aGlzLl9pc1Nob3duKCk/dGhpcy5oaWRlKCk6dGhpcy5zaG93KCl9c2hvdygpe2lmKHRoaXMuX2lzVHJhbnNpdGlvbmluZ3x8dGhpcy5faXNTaG93bigpKXJldHVybjtsZXQgdD1bXTtpZih0aGlzLl9jb25maWcucGFyZW50JiYodD10aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oXCIuY29sbGFwc2Uuc2hvdywgLmNvbGxhcHNlLmNvbGxhcHNpbmdcIikuZmlsdGVyKCh0PT50IT09dGhpcy5fZWxlbWVudCkpLm1hcCgodD0+ZnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0LHt0b2dnbGU6ITF9KSkpKSx0Lmxlbmd0aCYmdFswXS5faXNUcmFuc2l0aW9uaW5nKXJldHVybjtpZihQLnRyaWdnZXIodGhpcy5fZWxlbWVudCxcInNob3cuYnMuY29sbGFwc2VcIikuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47Zm9yKGNvbnN0IGUgb2YgdCllLmhpZGUoKTtjb25zdCBlPXRoaXMuX2dldERpbWVuc2lvbigpO3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsdCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKGN0KSx0aGlzLl9lbGVtZW50LnN0eWxlW2VdPTAsdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwhMCksdGhpcy5faXNUcmFuc2l0aW9uaW5nPSEwO2NvbnN0IGk9YHNjcm9sbCR7ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9YDt0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY3QpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChsdCxhdCksdGhpcy5fZWxlbWVudC5zdHlsZVtlXT1cIlwiLFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwic2hvd24uYnMuY29sbGFwc2VcIil9KSx0aGlzLl9lbGVtZW50LCEwKSx0aGlzLl9lbGVtZW50LnN0eWxlW2VdPWAke3RoaXMuX2VsZW1lbnRbaV19cHhgfWhpZGUoKXtpZih0aGlzLl9pc1RyYW5zaXRpb25pbmd8fCF0aGlzLl9pc1Nob3duKCkpcmV0dXJuO2lmKFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwiaGlkZS5icy5jb2xsYXBzZVwiKS5kZWZhdWx0UHJldmVudGVkKXJldHVybjtjb25zdCB0PXRoaXMuX2dldERpbWVuc2lvbigpO3RoaXMuX2VsZW1lbnQuc3R5bGVbdF09YCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVt0XX1weGAsZCh0aGlzLl9lbGVtZW50KSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoY3QpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsdCxhdCk7Zm9yKGNvbnN0IHQgb2YgdGhpcy5fdHJpZ2dlckFycmF5KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KTtlJiYhdGhpcy5faXNTaG93bihlKSYmdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0XSwhMSl9dGhpcy5faXNUcmFuc2l0aW9uaW5nPSEwLHRoaXMuX2VsZW1lbnQuc3R5bGVbdF09XCJcIix0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY3QpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChsdCksUC50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsXCJoaWRkZW4uYnMuY29sbGFwc2VcIil9KSx0aGlzLl9lbGVtZW50LCEwKX1faXNTaG93bih0PXRoaXMuX2VsZW1lbnQpe3JldHVybiB0LmNsYXNzTGlzdC5jb250YWlucyhhdCl9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQudG9nZ2xlPUJvb2xlYW4odC50b2dnbGUpLHQucGFyZW50PXIodC5wYXJlbnQpLHR9X2dldERpbWVuc2lvbigpe3JldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlLWhvcml6b250YWxcIik/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJ9X2luaXRpYWxpemVDaGlsZHJlbigpe2lmKCF0aGlzLl9jb25maWcucGFyZW50KXJldHVybjtjb25zdCB0PXRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihodCk7Zm9yKGNvbnN0IGUgb2YgdCl7Y29uc3QgdD16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZSk7dCYmdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlXSx0aGlzLl9pc1Nob3duKHQpKX19X2dldEZpcnN0TGV2ZWxDaGlsZHJlbih0KXtjb25zdCBlPXouZmluZChcIjpzY29wZSAuY29sbGFwc2UgLmNvbGxhcHNlXCIsdGhpcy5fY29uZmlnLnBhcmVudCk7cmV0dXJuIHouZmluZCh0LHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcigodD0+IWUuaW5jbHVkZXModCkpKX1fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHQsZSl7aWYodC5sZW5ndGgpZm9yKGNvbnN0IGkgb2YgdClpLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIiwhZSksaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsZSl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtjb25zdCBlPXt9O3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiYvc2hvd3xoaWRlLy50ZXN0KHQpJiYoZS50b2dnbGU9ITEpLHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBpPWZ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyxlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09aVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtpW3RdKCl9fSkpfX1QLm9uKGRvY3VtZW50LFwiY2xpY2suYnMuY29sbGFwc2UuZGF0YS1hcGlcIixodCwoZnVuY3Rpb24odCl7KFwiQVwiPT09dC50YXJnZXQudGFnTmFtZXx8dC5kZWxlZ2F0ZVRhcmdldCYmXCJBXCI9PT10LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUpJiZ0LnByZXZlbnREZWZhdWx0KCk7Zm9yKGNvbnN0IHQgb2Ygei5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKWZ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodCx7dG9nZ2xlOiExfSkudG9nZ2xlKCl9KSksbShmdCk7dmFyIHB0PVwidG9wXCIsbXQ9XCJib3R0b21cIixndD1cInJpZ2h0XCIsX3Q9XCJsZWZ0XCIsYnQ9XCJhdXRvXCIsdnQ9W3B0LG10LGd0LF90XSx5dD1cInN0YXJ0XCIsd3Q9XCJlbmRcIixBdD1cImNsaXBwaW5nUGFyZW50c1wiLEV0PVwidmlld3BvcnRcIixUdD1cInBvcHBlclwiLEN0PVwicmVmZXJlbmNlXCIsT3Q9dnQucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0LmNvbmNhdChbZStcIi1cIit5dCxlK1wiLVwiK3d0XSl9KSxbXSkseHQ9W10uY29uY2F0KHZ0LFtidF0pLnJlZHVjZSgoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5jb25jYXQoW2UsZStcIi1cIit5dCxlK1wiLVwiK3d0XSl9KSxbXSksa3Q9XCJiZWZvcmVSZWFkXCIsTHQ9XCJyZWFkXCIsU3Q9XCJhZnRlclJlYWRcIixEdD1cImJlZm9yZU1haW5cIixJdD1cIm1haW5cIixOdD1cImFmdGVyTWFpblwiLFB0PVwiYmVmb3JlV3JpdGVcIixNdD1cIndyaXRlXCIsanQ9XCJhZnRlcldyaXRlXCIsRnQ9W2t0LEx0LFN0LER0LEl0LE50LFB0LE10LGp0XTtmdW5jdGlvbiBIdCh0KXtyZXR1cm4gdD8odC5ub2RlTmFtZXx8XCJcIikudG9Mb3dlckNhc2UoKTpudWxsfWZ1bmN0aW9uICR0KHQpe2lmKG51bGw9PXQpcmV0dXJuIHdpbmRvdztpZihcIltvYmplY3QgV2luZG93XVwiIT09dC50b1N0cmluZygpKXt2YXIgZT10Lm93bmVyRG9jdW1lbnQ7cmV0dXJuIGUmJmUuZGVmYXVsdFZpZXd8fHdpbmRvd31yZXR1cm4gdH1mdW5jdGlvbiBXdCh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mICR0KHQpLkVsZW1lbnR8fHQgaW5zdGFuY2VvZiBFbGVtZW50fWZ1bmN0aW9uIEJ0KHQpe3JldHVybiB0IGluc3RhbmNlb2YgJHQodCkuSFRNTEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudH1mdW5jdGlvbiB6dCh0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgU2hhZG93Um9vdCYmKHQgaW5zdGFuY2VvZiAkdCh0KS5TaGFkb3dSb290fHx0IGluc3RhbmNlb2YgU2hhZG93Um9vdCl9Y29uc3QgUnQ9e25hbWU6XCJhcHBseVN0eWxlc1wiLGVuYWJsZWQ6ITAscGhhc2U6XCJ3cml0ZVwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGU7T2JqZWN0LmtleXMoZS5lbGVtZW50cykuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIGk9ZS5zdHlsZXNbdF18fHt9LG49ZS5hdHRyaWJ1dGVzW3RdfHx7fSxzPWUuZWxlbWVudHNbdF07QnQocykmJkh0KHMpJiYoT2JqZWN0LmFzc2lnbihzLnN0eWxlLGkpLE9iamVjdC5rZXlzKG4pLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBlPW5bdF07ITE9PT1lP3MucmVtb3ZlQXR0cmlidXRlKHQpOnMuc2V0QXR0cmlidXRlKHQsITA9PT1lP1wiXCI6ZSl9KSkpfSkpfSxlZmZlY3Q6ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXtwb3BwZXI6e3Bvc2l0aW9uOmUub3B0aW9ucy5zdHJhdGVneSxsZWZ0OlwiMFwiLHRvcDpcIjBcIixtYXJnaW46XCIwXCJ9LGFycm93Ontwb3NpdGlvbjpcImFic29sdXRlXCJ9LHJlZmVyZW5jZTp7fX07cmV0dXJuIE9iamVjdC5hc3NpZ24oZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsaS5wb3BwZXIpLGUuc3R5bGVzPWksZS5lbGVtZW50cy5hcnJvdyYmT2JqZWN0LmFzc2lnbihlLmVsZW1lbnRzLmFycm93LnN0eWxlLGkuYXJyb3cpLGZ1bmN0aW9uKCl7T2JqZWN0LmtleXMoZS5lbGVtZW50cykuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIG49ZS5lbGVtZW50c1t0XSxzPWUuYXR0cmlidXRlc1t0XXx8e30sbz1PYmplY3Qua2V5cyhlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eSh0KT9lLnN0eWxlc1t0XTppW3RdKS5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbZV09XCJcIix0fSkse30pO0J0KG4pJiZIdChuKSYmKE9iamVjdC5hc3NpZ24obi5zdHlsZSxvKSxPYmplY3Qua2V5cyhzKS5mb3JFYWNoKChmdW5jdGlvbih0KXtuLnJlbW92ZUF0dHJpYnV0ZSh0KX0pKSl9KSl9fSxyZXF1aXJlczpbXCJjb21wdXRlU3R5bGVzXCJdfTtmdW5jdGlvbiBxdCh0KXtyZXR1cm4gdC5zcGxpdChcIi1cIilbMF19dmFyIFZ0PU1hdGgubWF4LEt0PU1hdGgubWluLFF0PU1hdGgucm91bmQ7ZnVuY3Rpb24gWHQoKXt2YXIgdD1uYXZpZ2F0b3IudXNlckFnZW50RGF0YTtyZXR1cm4gbnVsbCE9dCYmdC5icmFuZHMmJkFycmF5LmlzQXJyYXkodC5icmFuZHMpP3QuYnJhbmRzLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHQuYnJhbmQrXCIvXCIrdC52ZXJzaW9ufSkpLmpvaW4oXCIgXCIpOm5hdmlnYXRvci51c2VyQWdlbnR9ZnVuY3Rpb24gWXQoKXtyZXR1cm4hL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChYdCgpKX1mdW5jdGlvbiBVdCh0LGUsaSl7dm9pZCAwPT09ZSYmKGU9ITEpLHZvaWQgMD09PWkmJihpPSExKTt2YXIgbj10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHM9MSxvPTE7ZSYmQnQodCkmJihzPXQub2Zmc2V0V2lkdGg+MCYmUXQobi53aWR0aCkvdC5vZmZzZXRXaWR0aHx8MSxvPXQub2Zmc2V0SGVpZ2h0PjAmJlF0KG4uaGVpZ2h0KS90Lm9mZnNldEhlaWdodHx8MSk7dmFyIHI9KFd0KHQpPyR0KHQpOndpbmRvdykudmlzdWFsVmlld3BvcnQsYT0hWXQoKSYmaSxsPShuLmxlZnQrKGEmJnI/ci5vZmZzZXRMZWZ0OjApKS9zLGM9KG4udG9wKyhhJiZyP3Iub2Zmc2V0VG9wOjApKS9vLGg9bi53aWR0aC9zLGQ9bi5oZWlnaHQvbztyZXR1cm57d2lkdGg6aCxoZWlnaHQ6ZCx0b3A6YyxyaWdodDpsK2gsYm90dG9tOmMrZCxsZWZ0OmwseDpsLHk6Y319ZnVuY3Rpb24gR3QodCl7dmFyIGU9VXQodCksaT10Lm9mZnNldFdpZHRoLG49dC5vZmZzZXRIZWlnaHQ7cmV0dXJuIE1hdGguYWJzKGUud2lkdGgtaSk8PTEmJihpPWUud2lkdGgpLE1hdGguYWJzKGUuaGVpZ2h0LW4pPD0xJiYobj1lLmhlaWdodCkse3g6dC5vZmZzZXRMZWZ0LHk6dC5vZmZzZXRUb3Asd2lkdGg6aSxoZWlnaHQ6bn19ZnVuY3Rpb24gSnQodCxlKXt2YXIgaT1lLmdldFJvb3ROb2RlJiZlLmdldFJvb3ROb2RlKCk7aWYodC5jb250YWlucyhlKSlyZXR1cm4hMDtpZihpJiZ6dChpKSl7dmFyIG49ZTtkb3tpZihuJiZ0LmlzU2FtZU5vZGUobikpcmV0dXJuITA7bj1uLnBhcmVudE5vZGV8fG4uaG9zdH13aGlsZShuKX1yZXR1cm4hMX1mdW5jdGlvbiBadCh0KXtyZXR1cm4gJHQodCkuZ2V0Q29tcHV0ZWRTdHlsZSh0KX1mdW5jdGlvbiB0ZSh0KXtyZXR1cm5bXCJ0YWJsZVwiLFwidGRcIixcInRoXCJdLmluZGV4T2YoSHQodCkpPj0wfWZ1bmN0aW9uIGVlKHQpe3JldHVybigoV3QodCk/dC5vd25lckRvY3VtZW50OnQuZG9jdW1lbnQpfHx3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudH1mdW5jdGlvbiBpZSh0KXtyZXR1cm5cImh0bWxcIj09PUh0KHQpP3Q6dC5hc3NpZ25lZFNsb3R8fHQucGFyZW50Tm9kZXx8KHp0KHQpP3QuaG9zdDpudWxsKXx8ZWUodCl9ZnVuY3Rpb24gbmUodCl7cmV0dXJuIEJ0KHQpJiZcImZpeGVkXCIhPT1adCh0KS5wb3NpdGlvbj90Lm9mZnNldFBhcmVudDpudWxsfWZ1bmN0aW9uIHNlKHQpe2Zvcih2YXIgZT0kdCh0KSxpPW5lKHQpO2kmJnRlKGkpJiZcInN0YXRpY1wiPT09WnQoaSkucG9zaXRpb247KWk9bmUoaSk7cmV0dXJuIGkmJihcImh0bWxcIj09PUh0KGkpfHxcImJvZHlcIj09PUh0KGkpJiZcInN0YXRpY1wiPT09WnQoaSkucG9zaXRpb24pP2U6aXx8ZnVuY3Rpb24odCl7dmFyIGU9L2ZpcmVmb3gvaS50ZXN0KFh0KCkpO2lmKC9UcmlkZW50L2kudGVzdChYdCgpKSYmQnQodCkmJlwiZml4ZWRcIj09PVp0KHQpLnBvc2l0aW9uKXJldHVybiBudWxsO3ZhciBpPWllKHQpO2Zvcih6dChpKSYmKGk9aS5ob3N0KTtCdChpKSYmW1wiaHRtbFwiLFwiYm9keVwiXS5pbmRleE9mKEh0KGkpKTwwOyl7dmFyIG49WnQoaSk7aWYoXCJub25lXCIhPT1uLnRyYW5zZm9ybXx8XCJub25lXCIhPT1uLnBlcnNwZWN0aXZlfHxcInBhaW50XCI9PT1uLmNvbnRhaW58fC0xIT09W1widHJhbnNmb3JtXCIsXCJwZXJzcGVjdGl2ZVwiXS5pbmRleE9mKG4ud2lsbENoYW5nZSl8fGUmJlwiZmlsdGVyXCI9PT1uLndpbGxDaGFuZ2V8fGUmJm4uZmlsdGVyJiZcIm5vbmVcIiE9PW4uZmlsdGVyKXJldHVybiBpO2k9aS5wYXJlbnROb2RlfXJldHVybiBudWxsfSh0KXx8ZX1mdW5jdGlvbiBvZSh0KXtyZXR1cm5bXCJ0b3BcIixcImJvdHRvbVwiXS5pbmRleE9mKHQpPj0wP1wieFwiOlwieVwifWZ1bmN0aW9uIHJlKHQsZSxpKXtyZXR1cm4gVnQodCxLdChlLGkpKX1mdW5jdGlvbiBhZSh0KXtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSx7dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjB9LHQpfWZ1bmN0aW9uIGxlKHQsZSl7cmV0dXJuIGUucmVkdWNlKChmdW5jdGlvbihlLGkpe3JldHVybiBlW2ldPXQsZX0pLHt9KX1jb25zdCBjZT17bmFtZTpcImFycm93XCIsZW5hYmxlZDohMCxwaGFzZTpcIm1haW5cIixmbjpmdW5jdGlvbih0KXt2YXIgZSxpPXQuc3RhdGUsbj10Lm5hbWUscz10Lm9wdGlvbnMsbz1pLmVsZW1lbnRzLmFycm93LHI9aS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsYT1xdChpLnBsYWNlbWVudCksbD1vZShhKSxjPVtfdCxndF0uaW5kZXhPZihhKT49MD9cImhlaWdodFwiOlwid2lkdGhcIjtpZihvJiZyKXt2YXIgaD1mdW5jdGlvbih0LGUpe3JldHVybiBhZShcIm51bWJlclwiIT10eXBlb2YodD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoT2JqZWN0LmFzc2lnbih7fSxlLnJlY3RzLHtwbGFjZW1lbnQ6ZS5wbGFjZW1lbnR9KSk6dCk/dDpsZSh0LHZ0KSl9KHMucGFkZGluZyxpKSxkPUd0KG8pLHU9XCJ5XCI9PT1sP3B0Ol90LGY9XCJ5XCI9PT1sP210Omd0LHA9aS5yZWN0cy5yZWZlcmVuY2VbY10raS5yZWN0cy5yZWZlcmVuY2VbbF0tcltsXS1pLnJlY3RzLnBvcHBlcltjXSxtPXJbbF0taS5yZWN0cy5yZWZlcmVuY2VbbF0sZz1zZShvKSxfPWc/XCJ5XCI9PT1sP2cuY2xpZW50SGVpZ2h0fHwwOmcuY2xpZW50V2lkdGh8fDA6MCxiPXAvMi1tLzIsdj1oW3VdLHk9Xy1kW2NdLWhbZl0sdz1fLzItZFtjXS8yK2IsQT1yZSh2LHcseSksRT1sO2kubW9kaWZpZXJzRGF0YVtuXT0oKGU9e30pW0VdPUEsZS5jZW50ZXJPZmZzZXQ9QS13LGUpfX0sZWZmZWN0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm9wdGlvbnMuZWxlbWVudCxuPXZvaWQgMD09PWk/XCJbZGF0YS1wb3BwZXItYXJyb3ddXCI6aTtudWxsIT1uJiYoXCJzdHJpbmdcIiE9dHlwZW9mIG58fChuPWUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IobikpKSYmSnQoZS5lbGVtZW50cy5wb3BwZXIsbikmJihlLmVsZW1lbnRzLmFycm93PW4pfSxyZXF1aXJlczpbXCJwb3BwZXJPZmZzZXRzXCJdLHJlcXVpcmVzSWZFeGlzdHM6W1wicHJldmVudE92ZXJmbG93XCJdfTtmdW5jdGlvbiBoZSh0KXtyZXR1cm4gdC5zcGxpdChcIi1cIilbMV19dmFyIGRlPXt0b3A6XCJhdXRvXCIscmlnaHQ6XCJhdXRvXCIsYm90dG9tOlwiYXV0b1wiLGxlZnQ6XCJhdXRvXCJ9O2Z1bmN0aW9uIHVlKHQpe3ZhciBlLGk9dC5wb3BwZXIsbj10LnBvcHBlclJlY3Qscz10LnBsYWNlbWVudCxvPXQudmFyaWF0aW9uLHI9dC5vZmZzZXRzLGE9dC5wb3NpdGlvbixsPXQuZ3B1QWNjZWxlcmF0aW9uLGM9dC5hZGFwdGl2ZSxoPXQucm91bmRPZmZzZXRzLGQ9dC5pc0ZpeGVkLHU9ci54LGY9dm9pZCAwPT09dT8wOnUscD1yLnksbT12b2lkIDA9PT1wPzA6cCxnPVwiZnVuY3Rpb25cIj09dHlwZW9mIGg/aCh7eDpmLHk6bX0pOnt4OmYseTptfTtmPWcueCxtPWcueTt2YXIgXz1yLmhhc093blByb3BlcnR5KFwieFwiKSxiPXIuaGFzT3duUHJvcGVydHkoXCJ5XCIpLHY9X3QseT1wdCx3PXdpbmRvdztpZihjKXt2YXIgQT1zZShpKSxFPVwiY2xpZW50SGVpZ2h0XCIsVD1cImNsaWVudFdpZHRoXCI7QT09PSR0KGkpJiZcInN0YXRpY1wiIT09WnQoQT1lZShpKSkucG9zaXRpb24mJlwiYWJzb2x1dGVcIj09PWEmJihFPVwic2Nyb2xsSGVpZ2h0XCIsVD1cInNjcm9sbFdpZHRoXCIpLChzPT09cHR8fChzPT09X3R8fHM9PT1ndCkmJm89PT13dCkmJih5PW10LG0tPShkJiZBPT09dyYmdy52aXN1YWxWaWV3cG9ydD93LnZpc3VhbFZpZXdwb3J0LmhlaWdodDpBW0VdKS1uLmhlaWdodCxtKj1sPzE6LTEpLHMhPT1fdCYmKHMhPT1wdCYmcyE9PW10fHxvIT09d3QpfHwodj1ndCxmLT0oZCYmQT09PXcmJncudmlzdWFsVmlld3BvcnQ/dy52aXN1YWxWaWV3cG9ydC53aWR0aDpBW1RdKS1uLndpZHRoLGYqPWw/MTotMSl9dmFyIEMsTz1PYmplY3QuYXNzaWduKHtwb3NpdGlvbjphfSxjJiZkZSkseD0hMD09PWg/ZnVuY3Rpb24odCxlKXt2YXIgaT10Lngsbj10Lnkscz1lLmRldmljZVBpeGVsUmF0aW98fDE7cmV0dXJue3g6UXQoaSpzKS9zfHwwLHk6UXQobipzKS9zfHwwfX0oe3g6Zix5Om19LCR0KGkpKTp7eDpmLHk6bX07cmV0dXJuIGY9eC54LG09eC55LGw/T2JqZWN0LmFzc2lnbih7fSxPLCgoQz17fSlbeV09Yj9cIjBcIjpcIlwiLENbdl09Xz9cIjBcIjpcIlwiLEMudHJhbnNmb3JtPSh3LmRldmljZVBpeGVsUmF0aW98fDEpPD0xP1widHJhbnNsYXRlKFwiK2YrXCJweCwgXCIrbStcInB4KVwiOlwidHJhbnNsYXRlM2QoXCIrZitcInB4LCBcIittK1wicHgsIDApXCIsQykpOk9iamVjdC5hc3NpZ24oe30sTywoKGU9e30pW3ldPWI/bStcInB4XCI6XCJcIixlW3ZdPV8/ZitcInB4XCI6XCJcIixlLnRyYW5zZm9ybT1cIlwiLGUpKX1jb25zdCBmZT17bmFtZTpcImNvbXB1dGVTdHlsZXNcIixlbmFibGVkOiEwLHBoYXNlOlwiYmVmb3JlV3JpdGVcIixmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLG49aS5ncHVBY2NlbGVyYXRpb24scz12b2lkIDA9PT1ufHxuLG89aS5hZGFwdGl2ZSxyPXZvaWQgMD09PW98fG8sYT1pLnJvdW5kT2Zmc2V0cyxsPXZvaWQgMD09PWF8fGEsYz17cGxhY2VtZW50OnF0KGUucGxhY2VtZW50KSx2YXJpYXRpb246aGUoZS5wbGFjZW1lbnQpLHBvcHBlcjplLmVsZW1lbnRzLnBvcHBlcixwb3BwZXJSZWN0OmUucmVjdHMucG9wcGVyLGdwdUFjY2VsZXJhdGlvbjpzLGlzRml4ZWQ6XCJmaXhlZFwiPT09ZS5vcHRpb25zLnN0cmF0ZWd5fTtudWxsIT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyYmKGUuc3R5bGVzLnBvcHBlcj1PYmplY3QuYXNzaWduKHt9LGUuc3R5bGVzLnBvcHBlcix1ZShPYmplY3QuYXNzaWduKHt9LGMse29mZnNldHM6ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMscG9zaXRpb246ZS5vcHRpb25zLnN0cmF0ZWd5LGFkYXB0aXZlOnIscm91bmRPZmZzZXRzOmx9KSkpKSxudWxsIT1lLm1vZGlmaWVyc0RhdGEuYXJyb3cmJihlLnN0eWxlcy5hcnJvdz1PYmplY3QuYXNzaWduKHt9LGUuc3R5bGVzLmFycm93LHVlKE9iamVjdC5hc3NpZ24oe30sYyx7b2Zmc2V0czplLm1vZGlmaWVyc0RhdGEuYXJyb3cscG9zaXRpb246XCJhYnNvbHV0ZVwiLGFkYXB0aXZlOiExLHJvdW5kT2Zmc2V0czpsfSkpKSksZS5hdHRyaWJ1dGVzLnBvcHBlcj1PYmplY3QuYXNzaWduKHt9LGUuYXR0cmlidXRlcy5wb3BwZXIse1wiZGF0YS1wb3BwZXItcGxhY2VtZW50XCI6ZS5wbGFjZW1lbnR9KX0sZGF0YTp7fX07dmFyIHBlPXtwYXNzaXZlOiEwfTtjb25zdCBtZT17bmFtZTpcImV2ZW50TGlzdGVuZXJzXCIsZW5hYmxlZDohMCxwaGFzZTpcIndyaXRlXCIsZm46ZnVuY3Rpb24oKXt9LGVmZmVjdDpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5pbnN0YW5jZSxuPXQub3B0aW9ucyxzPW4uc2Nyb2xsLG89dm9pZCAwPT09c3x8cyxyPW4ucmVzaXplLGE9dm9pZCAwPT09cnx8cixsPSR0KGUuZWxlbWVudHMucG9wcGVyKSxjPVtdLmNvbmNhdChlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO3JldHVybiBvJiZjLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGkudXBkYXRlLHBlKX0pKSxhJiZsLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixpLnVwZGF0ZSxwZSksZnVuY3Rpb24oKXtvJiZjLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGkudXBkYXRlLHBlKX0pKSxhJiZsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixpLnVwZGF0ZSxwZSl9fSxkYXRhOnt9fTt2YXIgZ2U9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLGJvdHRvbTpcInRvcFwiLHRvcDpcImJvdHRvbVwifTtmdW5jdGlvbiBfZSh0KXtyZXR1cm4gdC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywoZnVuY3Rpb24odCl7cmV0dXJuIGdlW3RdfSkpfXZhciBiZT17c3RhcnQ6XCJlbmRcIixlbmQ6XCJzdGFydFwifTtmdW5jdGlvbiB2ZSh0KXtyZXR1cm4gdC5yZXBsYWNlKC9zdGFydHxlbmQvZywoZnVuY3Rpb24odCl7cmV0dXJuIGJlW3RdfSkpfWZ1bmN0aW9uIHllKHQpe3ZhciBlPSR0KHQpO3JldHVybntzY3JvbGxMZWZ0OmUucGFnZVhPZmZzZXQsc2Nyb2xsVG9wOmUucGFnZVlPZmZzZXR9fWZ1bmN0aW9uIHdlKHQpe3JldHVybiBVdChlZSh0KSkubGVmdCt5ZSh0KS5zY3JvbGxMZWZ0fWZ1bmN0aW9uIEFlKHQpe3ZhciBlPVp0KHQpLGk9ZS5vdmVyZmxvdyxuPWUub3ZlcmZsb3dYLHM9ZS5vdmVyZmxvd1k7cmV0dXJuL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KGkrcytuKX1mdW5jdGlvbiBFZSh0KXtyZXR1cm5bXCJodG1sXCIsXCJib2R5XCIsXCIjZG9jdW1lbnRcIl0uaW5kZXhPZihIdCh0KSk+PTA/dC5vd25lckRvY3VtZW50LmJvZHk6QnQodCkmJkFlKHQpP3Q6RWUoaWUodCkpfWZ1bmN0aW9uIFRlKHQsZSl7dmFyIGk7dm9pZCAwPT09ZSYmKGU9W10pO3ZhciBuPUVlKHQpLHM9bj09PShudWxsPT0oaT10Lm93bmVyRG9jdW1lbnQpP3ZvaWQgMDppLmJvZHkpLG89JHQobikscj1zP1tvXS5jb25jYXQoby52aXN1YWxWaWV3cG9ydHx8W10sQWUobik/bjpbXSk6bixhPWUuY29uY2F0KHIpO3JldHVybiBzP2E6YS5jb25jYXQoVGUoaWUocikpKX1mdW5jdGlvbiBDZSh0KXtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSx0LHtsZWZ0OnQueCx0b3A6dC55LHJpZ2h0OnQueCt0LndpZHRoLGJvdHRvbTp0LnkrdC5oZWlnaHR9KX1mdW5jdGlvbiBPZSh0LGUsaSl7cmV0dXJuIGU9PT1FdD9DZShmdW5jdGlvbih0LGUpe3ZhciBpPSR0KHQpLG49ZWUodCkscz1pLnZpc3VhbFZpZXdwb3J0LG89bi5jbGllbnRXaWR0aCxyPW4uY2xpZW50SGVpZ2h0LGE9MCxsPTA7aWYocyl7bz1zLndpZHRoLHI9cy5oZWlnaHQ7dmFyIGM9WXQoKTsoY3x8IWMmJlwiZml4ZWRcIj09PWUpJiYoYT1zLm9mZnNldExlZnQsbD1zLm9mZnNldFRvcCl9cmV0dXJue3dpZHRoOm8saGVpZ2h0OnIseDphK3dlKHQpLHk6bH19KHQsaSkpOld0KGUpP2Z1bmN0aW9uKHQsZSl7dmFyIGk9VXQodCwhMSxcImZpeGVkXCI9PT1lKTtyZXR1cm4gaS50b3A9aS50b3ArdC5jbGllbnRUb3AsaS5sZWZ0PWkubGVmdCt0LmNsaWVudExlZnQsaS5ib3R0b209aS50b3ArdC5jbGllbnRIZWlnaHQsaS5yaWdodD1pLmxlZnQrdC5jbGllbnRXaWR0aCxpLndpZHRoPXQuY2xpZW50V2lkdGgsaS5oZWlnaHQ9dC5jbGllbnRIZWlnaHQsaS54PWkubGVmdCxpLnk9aS50b3AsaX0oZSxpKTpDZShmdW5jdGlvbih0KXt2YXIgZSxpPWVlKHQpLG49eWUodCkscz1udWxsPT0oZT10Lm93bmVyRG9jdW1lbnQpP3ZvaWQgMDplLmJvZHksbz1WdChpLnNjcm9sbFdpZHRoLGkuY2xpZW50V2lkdGgscz9zLnNjcm9sbFdpZHRoOjAscz9zLmNsaWVudFdpZHRoOjApLHI9VnQoaS5zY3JvbGxIZWlnaHQsaS5jbGllbnRIZWlnaHQscz9zLnNjcm9sbEhlaWdodDowLHM/cy5jbGllbnRIZWlnaHQ6MCksYT0tbi5zY3JvbGxMZWZ0K3dlKHQpLGw9LW4uc2Nyb2xsVG9wO3JldHVyblwicnRsXCI9PT1adChzfHxpKS5kaXJlY3Rpb24mJihhKz1WdChpLmNsaWVudFdpZHRoLHM/cy5jbGllbnRXaWR0aDowKS1vKSx7d2lkdGg6byxoZWlnaHQ6cix4OmEseTpsfX0oZWUodCkpKX1mdW5jdGlvbiB4ZSh0KXt2YXIgZSxpPXQucmVmZXJlbmNlLG49dC5lbGVtZW50LHM9dC5wbGFjZW1lbnQsbz1zP3F0KHMpOm51bGwscj1zP2hlKHMpOm51bGwsYT1pLngraS53aWR0aC8yLW4ud2lkdGgvMixsPWkueStpLmhlaWdodC8yLW4uaGVpZ2h0LzI7c3dpdGNoKG8pe2Nhc2UgcHQ6ZT17eDphLHk6aS55LW4uaGVpZ2h0fTticmVhaztjYXNlIG10OmU9e3g6YSx5OmkueStpLmhlaWdodH07YnJlYWs7Y2FzZSBndDplPXt4OmkueCtpLndpZHRoLHk6bH07YnJlYWs7Y2FzZSBfdDplPXt4OmkueC1uLndpZHRoLHk6bH07YnJlYWs7ZGVmYXVsdDplPXt4OmkueCx5OmkueX19dmFyIGM9bz9vZShvKTpudWxsO2lmKG51bGwhPWMpe3ZhciBoPVwieVwiPT09Yz9cImhlaWdodFwiOlwid2lkdGhcIjtzd2l0Y2gocil7Y2FzZSB5dDplW2NdPWVbY10tKGlbaF0vMi1uW2hdLzIpO2JyZWFrO2Nhc2Ugd3Q6ZVtjXT1lW2NdKyhpW2hdLzItbltoXS8yKX19cmV0dXJuIGV9ZnVuY3Rpb24ga2UodCxlKXt2b2lkIDA9PT1lJiYoZT17fSk7dmFyIGk9ZSxuPWkucGxhY2VtZW50LHM9dm9pZCAwPT09bj90LnBsYWNlbWVudDpuLG89aS5zdHJhdGVneSxyPXZvaWQgMD09PW8/dC5zdHJhdGVneTpvLGE9aS5ib3VuZGFyeSxsPXZvaWQgMD09PWE/QXQ6YSxjPWkucm9vdEJvdW5kYXJ5LGg9dm9pZCAwPT09Yz9FdDpjLGQ9aS5lbGVtZW50Q29udGV4dCx1PXZvaWQgMD09PWQ/VHQ6ZCxmPWkuYWx0Qm91bmRhcnkscD12b2lkIDAhPT1mJiZmLG09aS5wYWRkaW5nLGc9dm9pZCAwPT09bT8wOm0sXz1hZShcIm51bWJlclwiIT10eXBlb2YgZz9nOmxlKGcsdnQpKSxiPXU9PT1UdD9DdDpUdCx2PXQucmVjdHMucG9wcGVyLHk9dC5lbGVtZW50c1twP2I6dV0sdz1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz1cImNsaXBwaW5nUGFyZW50c1wiPT09ZT9mdW5jdGlvbih0KXt2YXIgZT1UZShpZSh0KSksaT1bXCJhYnNvbHV0ZVwiLFwiZml4ZWRcIl0uaW5kZXhPZihadCh0KS5wb3NpdGlvbik+PTAmJkJ0KHQpP3NlKHQpOnQ7cmV0dXJuIFd0KGkpP2UuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gV3QodCkmJkp0KHQsaSkmJlwiYm9keVwiIT09SHQodCl9KSk6W119KHQpOltdLmNvbmNhdChlKSxvPVtdLmNvbmNhdChzLFtpXSkscj1vWzBdLGE9by5yZWR1Y2UoKGZ1bmN0aW9uKGUsaSl7dmFyIHM9T2UodCxpLG4pO3JldHVybiBlLnRvcD1WdChzLnRvcCxlLnRvcCksZS5yaWdodD1LdChzLnJpZ2h0LGUucmlnaHQpLGUuYm90dG9tPUt0KHMuYm90dG9tLGUuYm90dG9tKSxlLmxlZnQ9VnQocy5sZWZ0LGUubGVmdCksZX0pLE9lKHQscixuKSk7cmV0dXJuIGEud2lkdGg9YS5yaWdodC1hLmxlZnQsYS5oZWlnaHQ9YS5ib3R0b20tYS50b3AsYS54PWEubGVmdCxhLnk9YS50b3AsYX0oV3QoeSk/eTp5LmNvbnRleHRFbGVtZW50fHxlZSh0LmVsZW1lbnRzLnBvcHBlciksbCxoLHIpLEE9VXQodC5lbGVtZW50cy5yZWZlcmVuY2UpLEU9eGUoe3JlZmVyZW5jZTpBLGVsZW1lbnQ6dixzdHJhdGVneTpcImFic29sdXRlXCIscGxhY2VtZW50OnN9KSxUPUNlKE9iamVjdC5hc3NpZ24oe30sdixFKSksQz11PT09VHQ/VDpBLE89e3RvcDp3LnRvcC1DLnRvcCtfLnRvcCxib3R0b206Qy5ib3R0b20tdy5ib3R0b20rXy5ib3R0b20sbGVmdDp3LmxlZnQtQy5sZWZ0K18ubGVmdCxyaWdodDpDLnJpZ2h0LXcucmlnaHQrXy5yaWdodH0seD10Lm1vZGlmaWVyc0RhdGEub2Zmc2V0O2lmKHU9PT1UdCYmeCl7dmFyIGs9eFtzXTtPYmplY3Qua2V5cyhPKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1bZ3QsbXRdLmluZGV4T2YodCk+PTA/MTotMSxpPVtwdCxtdF0uaW5kZXhPZih0KT49MD9cInlcIjpcInhcIjtPW3RdKz1rW2ldKmV9KSl9cmV0dXJuIE99ZnVuY3Rpb24gTGUodCxlKXt2b2lkIDA9PT1lJiYoZT17fSk7dmFyIGk9ZSxuPWkucGxhY2VtZW50LHM9aS5ib3VuZGFyeSxvPWkucm9vdEJvdW5kYXJ5LHI9aS5wYWRkaW5nLGE9aS5mbGlwVmFyaWF0aW9ucyxsPWkuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLGM9dm9pZCAwPT09bD94dDpsLGg9aGUobiksZD1oP2E/T3Q6T3QuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gaGUodCk9PT1ofSkpOnZ0LHU9ZC5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBjLmluZGV4T2YodCk+PTB9KSk7MD09PXUubGVuZ3RoJiYodT1kKTt2YXIgZj11LnJlZHVjZSgoZnVuY3Rpb24oZSxpKXtyZXR1cm4gZVtpXT1rZSh0LHtwbGFjZW1lbnQ6aSxib3VuZGFyeTpzLHJvb3RCb3VuZGFyeTpvLHBhZGRpbmc6cn0pW3F0KGkpXSxlfSkse30pO3JldHVybiBPYmplY3Qua2V5cyhmKS5zb3J0KChmdW5jdGlvbih0LGUpe3JldHVybiBmW3RdLWZbZV19KSl9Y29uc3QgU2U9e25hbWU6XCJmbGlwXCIsZW5hYmxlZDohMCxwaGFzZTpcIm1haW5cIixmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLG49dC5uYW1lO2lmKCFlLm1vZGlmaWVyc0RhdGFbbl0uX3NraXApe2Zvcih2YXIgcz1pLm1haW5BeGlzLG89dm9pZCAwPT09c3x8cyxyPWkuYWx0QXhpcyxhPXZvaWQgMD09PXJ8fHIsbD1pLmZhbGxiYWNrUGxhY2VtZW50cyxjPWkucGFkZGluZyxoPWkuYm91bmRhcnksZD1pLnJvb3RCb3VuZGFyeSx1PWkuYWx0Qm91bmRhcnksZj1pLmZsaXBWYXJpYXRpb25zLHA9dm9pZCAwPT09Znx8ZixtPWkuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLGc9ZS5vcHRpb25zLnBsYWNlbWVudCxfPXF0KGcpLGI9bHx8KF8hPT1nJiZwP2Z1bmN0aW9uKHQpe2lmKHF0KHQpPT09YnQpcmV0dXJuW107dmFyIGU9X2UodCk7cmV0dXJuW3ZlKHQpLGUsdmUoZSldfShnKTpbX2UoZyldKSx2PVtnXS5jb25jYXQoYikucmVkdWNlKChmdW5jdGlvbih0LGkpe3JldHVybiB0LmNvbmNhdChxdChpKT09PWJ0P0xlKGUse3BsYWNlbWVudDppLGJvdW5kYXJ5Omgscm9vdEJvdW5kYXJ5OmQscGFkZGluZzpjLGZsaXBWYXJpYXRpb25zOnAsYWxsb3dlZEF1dG9QbGFjZW1lbnRzOm19KTppKX0pLFtdKSx5PWUucmVjdHMucmVmZXJlbmNlLHc9ZS5yZWN0cy5wb3BwZXIsQT1uZXcgTWFwLEU9ITAsVD12WzBdLEM9MDtDPHYubGVuZ3RoO0MrKyl7dmFyIE89dltDXSx4PXF0KE8pLGs9aGUoTyk9PT15dCxMPVtwdCxtdF0uaW5kZXhPZih4KT49MCxTPUw/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIsRD1rZShlLHtwbGFjZW1lbnQ6Tyxib3VuZGFyeTpoLHJvb3RCb3VuZGFyeTpkLGFsdEJvdW5kYXJ5OnUscGFkZGluZzpjfSksST1MP2s/Z3Q6X3Q6az9tdDpwdDt5W1NdPndbU10mJihJPV9lKEkpKTt2YXIgTj1fZShJKSxQPVtdO2lmKG8mJlAucHVzaChEW3hdPD0wKSxhJiZQLnB1c2goRFtJXTw9MCxEW05dPD0wKSxQLmV2ZXJ5KChmdW5jdGlvbih0KXtyZXR1cm4gdH0pKSl7VD1PLEU9ITE7YnJlYWt9QS5zZXQoTyxQKX1pZihFKWZvcih2YXIgTT1mdW5jdGlvbih0KXt2YXIgZT12LmZpbmQoKGZ1bmN0aW9uKGUpe3ZhciBpPUEuZ2V0KGUpO2lmKGkpcmV0dXJuIGkuc2xpY2UoMCx0KS5ldmVyeSgoZnVuY3Rpb24odCl7cmV0dXJuIHR9KSl9KSk7aWYoZSlyZXR1cm4gVD1lLFwiYnJlYWtcIn0saj1wPzM6MTtqPjAmJlwiYnJlYWtcIiE9PU0oaik7ai0tKTtlLnBsYWNlbWVudCE9PVQmJihlLm1vZGlmaWVyc0RhdGFbbl0uX3NraXA9ITAsZS5wbGFjZW1lbnQ9VCxlLnJlc2V0PSEwKX19LHJlcXVpcmVzSWZFeGlzdHM6W1wib2Zmc2V0XCJdLGRhdGE6e19za2lwOiExfX07ZnVuY3Rpb24gRGUodCxlLGkpe3JldHVybiB2b2lkIDA9PT1pJiYoaT17eDowLHk6MH0pLHt0b3A6dC50b3AtZS5oZWlnaHQtaS55LHJpZ2h0OnQucmlnaHQtZS53aWR0aCtpLngsYm90dG9tOnQuYm90dG9tLWUuaGVpZ2h0K2kueSxsZWZ0OnQubGVmdC1lLndpZHRoLWkueH19ZnVuY3Rpb24gSWUodCl7cmV0dXJuW3B0LGd0LG10LF90XS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gdFtlXT49MH0pKX1jb25zdCBOZT17bmFtZTpcImhpZGVcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLHJlcXVpcmVzSWZFeGlzdHM6W1wicHJldmVudE92ZXJmbG93XCJdLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm5hbWUsbj1lLnJlY3RzLnJlZmVyZW5jZSxzPWUucmVjdHMucG9wcGVyLG89ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdyxyPWtlKGUse2VsZW1lbnRDb250ZXh0OlwicmVmZXJlbmNlXCJ9KSxhPWtlKGUse2FsdEJvdW5kYXJ5OiEwfSksbD1EZShyLG4pLGM9RGUoYSxzLG8pLGg9SWUobCksZD1JZShjKTtlLm1vZGlmaWVyc0RhdGFbaV09e3JlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czpsLHBvcHBlckVzY2FwZU9mZnNldHM6Yyxpc1JlZmVyZW5jZUhpZGRlbjpoLGhhc1BvcHBlckVzY2FwZWQ6ZH0sZS5hdHRyaWJ1dGVzLnBvcHBlcj1PYmplY3QuYXNzaWduKHt9LGUuYXR0cmlidXRlcy5wb3BwZXIse1wiZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlblwiOmgsXCJkYXRhLXBvcHBlci1lc2NhcGVkXCI6ZH0pfX0sUGU9e25hbWU6XCJvZmZzZXRcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLHJlcXVpcmVzOltcInBvcHBlck9mZnNldHNcIl0sZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQub3B0aW9ucyxuPXQubmFtZSxzPWkub2Zmc2V0LG89dm9pZCAwPT09cz9bMCwwXTpzLHI9eHQucmVkdWNlKChmdW5jdGlvbih0LGkpe3JldHVybiB0W2ldPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj1xdCh0KSxzPVtfdCxwdF0uaW5kZXhPZihuKT49MD8tMToxLG89XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pKE9iamVjdC5hc3NpZ24oe30sZSx7cGxhY2VtZW50OnR9KSk6aSxyPW9bMF0sYT1vWzFdO3JldHVybiByPXJ8fDAsYT0oYXx8MCkqcyxbX3QsZ3RdLmluZGV4T2Yobik+PTA/e3g6YSx5OnJ9Ont4OnIseTphfX0oaSxlLnJlY3RzLG8pLHR9KSx7fSksYT1yW2UucGxhY2VtZW50XSxsPWEueCxjPWEueTtudWxsIT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyYmKGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLngrPWwsZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSs9YyksZS5tb2RpZmllcnNEYXRhW25dPXJ9fSxNZT17bmFtZTpcInBvcHBlck9mZnNldHNcIixlbmFibGVkOiEwLHBoYXNlOlwicmVhZFwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm5hbWU7ZS5tb2RpZmllcnNEYXRhW2ldPXhlKHtyZWZlcmVuY2U6ZS5yZWN0cy5yZWZlcmVuY2UsZWxlbWVudDplLnJlY3RzLnBvcHBlcixzdHJhdGVneTpcImFic29sdXRlXCIscGxhY2VtZW50OmUucGxhY2VtZW50fSl9LGRhdGE6e319LGplPXtuYW1lOlwicHJldmVudE92ZXJmbG93XCIsZW5hYmxlZDohMCxwaGFzZTpcIm1haW5cIixmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLG49dC5uYW1lLHM9aS5tYWluQXhpcyxvPXZvaWQgMD09PXN8fHMscj1pLmFsdEF4aXMsYT12b2lkIDAhPT1yJiZyLGw9aS5ib3VuZGFyeSxjPWkucm9vdEJvdW5kYXJ5LGg9aS5hbHRCb3VuZGFyeSxkPWkucGFkZGluZyx1PWkudGV0aGVyLGY9dm9pZCAwPT09dXx8dSxwPWkudGV0aGVyT2Zmc2V0LG09dm9pZCAwPT09cD8wOnAsZz1rZShlLHtib3VuZGFyeTpsLHJvb3RCb3VuZGFyeTpjLHBhZGRpbmc6ZCxhbHRCb3VuZGFyeTpofSksXz1xdChlLnBsYWNlbWVudCksYj1oZShlLnBsYWNlbWVudCksdj0hYix5PW9lKF8pLHc9XCJ4XCI9PT15P1wieVwiOlwieFwiLEE9ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsRT1lLnJlY3RzLnJlZmVyZW5jZSxUPWUucmVjdHMucG9wcGVyLEM9XCJmdW5jdGlvblwiPT10eXBlb2YgbT9tKE9iamVjdC5hc3NpZ24oe30sZS5yZWN0cyx7cGxhY2VtZW50OmUucGxhY2VtZW50fSkpOm0sTz1cIm51bWJlclwiPT10eXBlb2YgQz97bWFpbkF4aXM6QyxhbHRBeGlzOkN9Ok9iamVjdC5hc3NpZ24oe21haW5BeGlzOjAsYWx0QXhpczowfSxDKSx4PWUubW9kaWZpZXJzRGF0YS5vZmZzZXQ/ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtlLnBsYWNlbWVudF06bnVsbCxrPXt4OjAseTowfTtpZihBKXtpZihvKXt2YXIgTCxTPVwieVwiPT09eT9wdDpfdCxEPVwieVwiPT09eT9tdDpndCxJPVwieVwiPT09eT9cImhlaWdodFwiOlwid2lkdGhcIixOPUFbeV0sUD1OK2dbU10sTT1OLWdbRF0saj1mPy1UW0ldLzI6MCxGPWI9PT15dD9FW0ldOlRbSV0sSD1iPT09eXQ/LVRbSV06LUVbSV0sJD1lLmVsZW1lbnRzLmFycm93LFc9ZiYmJD9HdCgkKTp7d2lkdGg6MCxoZWlnaHQ6MH0sQj1lLm1vZGlmaWVyc0RhdGFbXCJhcnJvdyNwZXJzaXN0ZW50XCJdP2UubW9kaWZpZXJzRGF0YVtcImFycm93I3BlcnNpc3RlbnRcIl0ucGFkZGluZzp7dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjB9LHo9QltTXSxSPUJbRF0scT1yZSgwLEVbSV0sV1tJXSksVj12P0VbSV0vMi1qLXEtei1PLm1haW5BeGlzOkYtcS16LU8ubWFpbkF4aXMsSz12Py1FW0ldLzIraitxK1IrTy5tYWluQXhpczpIK3ErUitPLm1haW5BeGlzLFE9ZS5lbGVtZW50cy5hcnJvdyYmc2UoZS5lbGVtZW50cy5hcnJvdyksWD1RP1wieVwiPT09eT9RLmNsaWVudFRvcHx8MDpRLmNsaWVudExlZnR8fDA6MCxZPW51bGwhPShMPW51bGw9PXg/dm9pZCAwOnhbeV0pP0w6MCxVPU4rSy1ZLEc9cmUoZj9LdChQLE4rVi1ZLVgpOlAsTixmP1Z0KE0sVSk6TSk7QVt5XT1HLGtbeV09Ry1OfWlmKGEpe3ZhciBKLFo9XCJ4XCI9PT15P3B0Ol90LHR0PVwieFwiPT09eT9tdDpndCxldD1BW3ddLGl0PVwieVwiPT09dz9cImhlaWdodFwiOlwid2lkdGhcIixudD1ldCtnW1pdLHN0PWV0LWdbdHRdLG90PS0xIT09W3B0LF90XS5pbmRleE9mKF8pLHJ0PW51bGwhPShKPW51bGw9PXg/dm9pZCAwOnhbd10pP0o6MCxhdD1vdD9udDpldC1FW2l0XS1UW2l0XS1ydCtPLmFsdEF4aXMsbHQ9b3Q/ZXQrRVtpdF0rVFtpdF0tcnQtTy5hbHRBeGlzOnN0LGN0PWYmJm90P2Z1bmN0aW9uKHQsZSxpKXt2YXIgbj1yZSh0LGUsaSk7cmV0dXJuIG4+aT9pOm59KGF0LGV0LGx0KTpyZShmP2F0Om50LGV0LGY/bHQ6c3QpO0Fbd109Y3Qsa1t3XT1jdC1ldH1lLm1vZGlmaWVyc0RhdGFbbl09a319LHJlcXVpcmVzSWZFeGlzdHM6W1wib2Zmc2V0XCJdfTtmdW5jdGlvbiBGZSh0LGUsaSl7dm9pZCAwPT09aSYmKGk9ITEpO3ZhciBuLHMsbz1CdChlKSxyPUJ0KGUpJiZmdW5jdGlvbih0KXt2YXIgZT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9UXQoZS53aWR0aCkvdC5vZmZzZXRXaWR0aHx8MSxuPVF0KGUuaGVpZ2h0KS90Lm9mZnNldEhlaWdodHx8MTtyZXR1cm4gMSE9PWl8fDEhPT1ufShlKSxhPWVlKGUpLGw9VXQodCxyLGkpLGM9e3Njcm9sbExlZnQ6MCxzY3JvbGxUb3A6MH0saD17eDowLHk6MH07cmV0dXJuKG98fCFvJiYhaSkmJigoXCJib2R5XCIhPT1IdChlKXx8QWUoYSkpJiYoYz0obj1lKSE9PSR0KG4pJiZCdChuKT97c2Nyb2xsTGVmdDoocz1uKS5zY3JvbGxMZWZ0LHNjcm9sbFRvcDpzLnNjcm9sbFRvcH06eWUobikpLEJ0KGUpPygoaD1VdChlLCEwKSkueCs9ZS5jbGllbnRMZWZ0LGgueSs9ZS5jbGllbnRUb3ApOmEmJihoLng9d2UoYSkpKSx7eDpsLmxlZnQrYy5zY3JvbGxMZWZ0LWgueCx5OmwudG9wK2Muc2Nyb2xsVG9wLWgueSx3aWR0aDpsLndpZHRoLGhlaWdodDpsLmhlaWdodH19ZnVuY3Rpb24gSGUodCl7dmFyIGU9bmV3IE1hcCxpPW5ldyBTZXQsbj1bXTtmdW5jdGlvbiBzKHQpe2kuYWRkKHQubmFtZSksW10uY29uY2F0KHQucmVxdWlyZXN8fFtdLHQucmVxdWlyZXNJZkV4aXN0c3x8W10pLmZvckVhY2goKGZ1bmN0aW9uKHQpe2lmKCFpLmhhcyh0KSl7dmFyIG49ZS5nZXQodCk7biYmcyhuKX19KSksbi5wdXNoKHQpfXJldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQpe2Uuc2V0KHQubmFtZSx0KX0pKSx0LmZvckVhY2goKGZ1bmN0aW9uKHQpe2kuaGFzKHQubmFtZSl8fHModCl9KSksbn12YXIgJGU9e3BsYWNlbWVudDpcImJvdHRvbVwiLG1vZGlmaWVyczpbXSxzdHJhdGVneTpcImFic29sdXRlXCJ9O2Z1bmN0aW9uIFdlKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCksaT0wO2k8dDtpKyspZVtpXT1hcmd1bWVudHNbaV07cmV0dXJuIWUuc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuISh0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCl9KSl9ZnVuY3Rpb24gQmUodCl7dm9pZCAwPT09dCYmKHQ9e30pO3ZhciBlPXQsaT1lLmRlZmF1bHRNb2RpZmllcnMsbj12b2lkIDA9PT1pP1tdOmkscz1lLmRlZmF1bHRPcHRpb25zLG89dm9pZCAwPT09cz8kZTpzO3JldHVybiBmdW5jdGlvbih0LGUsaSl7dm9pZCAwPT09aSYmKGk9byk7dmFyIHMscixhPXtwbGFjZW1lbnQ6XCJib3R0b21cIixvcmRlcmVkTW9kaWZpZXJzOltdLG9wdGlvbnM6T2JqZWN0LmFzc2lnbih7fSwkZSxvKSxtb2RpZmllcnNEYXRhOnt9LGVsZW1lbnRzOntyZWZlcmVuY2U6dCxwb3BwZXI6ZX0sYXR0cmlidXRlczp7fSxzdHlsZXM6e319LGw9W10sYz0hMSxoPXtzdGF0ZTphLHNldE9wdGlvbnM6ZnVuY3Rpb24oaSl7dmFyIHM9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pKGEub3B0aW9ucyk6aTtkKCksYS5vcHRpb25zPU9iamVjdC5hc3NpZ24oe30sbyxhLm9wdGlvbnMscyksYS5zY3JvbGxQYXJlbnRzPXtyZWZlcmVuY2U6V3QodCk/VGUodCk6dC5jb250ZXh0RWxlbWVudD9UZSh0LmNvbnRleHRFbGVtZW50KTpbXSxwb3BwZXI6VGUoZSl9O3ZhciByLGMsdT1mdW5jdGlvbih0KXt2YXIgZT1IZSh0KTtyZXR1cm4gRnQucmVkdWNlKChmdW5jdGlvbih0LGkpe3JldHVybiB0LmNvbmNhdChlLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQucGhhc2U9PT1pfSkpKX0pLFtdKX0oKHI9W10uY29uY2F0KG4sYS5vcHRpb25zLm1vZGlmaWVycyksYz1yLnJlZHVjZSgoZnVuY3Rpb24odCxlKXt2YXIgaT10W2UubmFtZV07cmV0dXJuIHRbZS5uYW1lXT1pP09iamVjdC5hc3NpZ24oe30saSxlLHtvcHRpb25zOk9iamVjdC5hc3NpZ24oe30saS5vcHRpb25zLGUub3B0aW9ucyksZGF0YTpPYmplY3QuYXNzaWduKHt9LGkuZGF0YSxlLmRhdGEpfSk6ZSx0fSkse30pLE9iamVjdC5rZXlzKGMpLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIGNbdF19KSkpKTtyZXR1cm4gYS5vcmRlcmVkTW9kaWZpZXJzPXUuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5lbmFibGVkfSkpLGEub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT10Lm5hbWUsaT10Lm9wdGlvbnMsbj12b2lkIDA9PT1pP3t9Omkscz10LmVmZmVjdDtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBzKXt2YXIgbz1zKHtzdGF0ZTphLG5hbWU6ZSxpbnN0YW5jZTpoLG9wdGlvbnM6bn0pO2wucHVzaChvfHxmdW5jdGlvbigpe30pfX0pKSxoLnVwZGF0ZSgpfSxmb3JjZVVwZGF0ZTpmdW5jdGlvbigpe2lmKCFjKXt2YXIgdD1hLmVsZW1lbnRzLGU9dC5yZWZlcmVuY2UsaT10LnBvcHBlcjtpZihXZShlLGkpKXthLnJlY3RzPXtyZWZlcmVuY2U6RmUoZSxzZShpKSxcImZpeGVkXCI9PT1hLm9wdGlvbnMuc3RyYXRlZ3kpLHBvcHBlcjpHdChpKX0sYS5yZXNldD0hMSxhLnBsYWNlbWVudD1hLm9wdGlvbnMucGxhY2VtZW50LGEub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gYS5tb2RpZmllcnNEYXRhW3QubmFtZV09T2JqZWN0LmFzc2lnbih7fSx0LmRhdGEpfSkpO2Zvcih2YXIgbj0wO248YS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDtuKyspaWYoITAhPT1hLnJlc2V0KXt2YXIgcz1hLm9yZGVyZWRNb2RpZmllcnNbbl0sbz1zLmZuLHI9cy5vcHRpb25zLGw9dm9pZCAwPT09cj97fTpyLGQ9cy5uYW1lO1wiZnVuY3Rpb25cIj09dHlwZW9mIG8mJihhPW8oe3N0YXRlOmEsb3B0aW9uczpsLG5hbWU6ZCxpbnN0YW5jZTpofSl8fGEpfWVsc2UgYS5yZXNldD0hMSxuPS0xfX19LHVwZGF0ZToocz1mdW5jdGlvbigpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7aC5mb3JjZVVwZGF0ZSgpLHQoYSl9KSl9LGZ1bmN0aW9uKCl7cmV0dXJuIHJ8fChyPW5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe3I9dm9pZCAwLHQocygpKX0pKX0pKSkscn0pLGRlc3Ryb3k6ZnVuY3Rpb24oKXtkKCksYz0hMH19O2lmKCFXZSh0LGUpKXJldHVybiBoO2Z1bmN0aW9uIGQoKXtsLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiB0KCl9KSksbD1bXX1yZXR1cm4gaC5zZXRPcHRpb25zKGkpLnRoZW4oKGZ1bmN0aW9uKHQpeyFjJiZpLm9uRmlyc3RVcGRhdGUmJmkub25GaXJzdFVwZGF0ZSh0KX0pKSxofX12YXIgemU9QmUoKSxSZT1CZSh7ZGVmYXVsdE1vZGlmaWVyczpbbWUsTWUsZmUsUnRdfSkscWU9QmUoe2RlZmF1bHRNb2RpZmllcnM6W21lLE1lLGZlLFJ0LFBlLFNlLGplLGNlLE5lXX0pO2NvbnN0IFZlPU9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnR5KHtfX3Byb3RvX186bnVsbCxhZnRlck1haW46TnQsYWZ0ZXJSZWFkOlN0LGFmdGVyV3JpdGU6anQsYXBwbHlTdHlsZXM6UnQsYXJyb3c6Y2UsYXV0bzpidCxiYXNlUGxhY2VtZW50czp2dCxiZWZvcmVNYWluOkR0LGJlZm9yZVJlYWQ6a3QsYmVmb3JlV3JpdGU6UHQsYm90dG9tOm10LGNsaXBwaW5nUGFyZW50czpBdCxjb21wdXRlU3R5bGVzOmZlLGNyZWF0ZVBvcHBlcjpxZSxjcmVhdGVQb3BwZXJCYXNlOnplLGNyZWF0ZVBvcHBlckxpdGU6UmUsZGV0ZWN0T3ZlcmZsb3c6a2UsZW5kOnd0LGV2ZW50TGlzdGVuZXJzOm1lLGZsaXA6U2UsaGlkZTpOZSxsZWZ0Ol90LG1haW46SXQsbW9kaWZpZXJQaGFzZXM6RnQsb2Zmc2V0OlBlLHBsYWNlbWVudHM6eHQscG9wcGVyOlR0LHBvcHBlckdlbmVyYXRvcjpCZSxwb3BwZXJPZmZzZXRzOk1lLHByZXZlbnRPdmVyZmxvdzpqZSxyZWFkOkx0LHJlZmVyZW5jZTpDdCxyaWdodDpndCxzdGFydDp5dCx0b3A6cHQsdmFyaWF0aW9uUGxhY2VtZW50czpPdCx2aWV3cG9ydDpFdCx3cml0ZTpNdH0sU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSkpLEtlPVwiZHJvcGRvd25cIixRZT1cIkFycm93VXBcIixYZT1cIkFycm93RG93blwiLFllPVwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixVZT1cImtleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGlcIixHZT1cInNob3dcIixKZT0nW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknLFplPWAke0plfS5zaG93YCx0aT1cIi5kcm9wZG93bi1tZW51XCIsZWk9cCgpP1widG9wLWVuZFwiOlwidG9wLXN0YXJ0XCIsaWk9cCgpP1widG9wLXN0YXJ0XCI6XCJ0b3AtZW5kXCIsbmk9cCgpP1wiYm90dG9tLWVuZFwiOlwiYm90dG9tLXN0YXJ0XCIsc2k9cCgpP1wiYm90dG9tLXN0YXJ0XCI6XCJib3R0b20tZW5kXCIsb2k9cCgpP1wibGVmdC1zdGFydFwiOlwicmlnaHQtc3RhcnRcIixyaT1wKCk/XCJyaWdodC1zdGFydFwiOlwibGVmdC1zdGFydFwiLGFpPXthdXRvQ2xvc2U6ITAsYm91bmRhcnk6XCJjbGlwcGluZ1BhcmVudHNcIixkaXNwbGF5OlwiZHluYW1pY1wiLG9mZnNldDpbMCwyXSxwb3BwZXJDb25maWc6bnVsbCxyZWZlcmVuY2U6XCJ0b2dnbGVcIn0sbGk9e2F1dG9DbG9zZTpcIihib29sZWFufHN0cmluZylcIixib3VuZGFyeTpcIihzdHJpbmd8ZWxlbWVudClcIixkaXNwbGF5Olwic3RyaW5nXCIsb2Zmc2V0OlwiKGFycmF5fHN0cmluZ3xmdW5jdGlvbilcIixwb3BwZXJDb25maWc6XCIobnVsbHxvYmplY3R8ZnVuY3Rpb24pXCIscmVmZXJlbmNlOlwiKHN0cmluZ3xlbGVtZW50fG9iamVjdClcIn07Y2xhc3MgY2kgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl9wb3BwZXI9bnVsbCx0aGlzLl9wYXJlbnQ9dGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLHRoaXMuX21lbnU9ei5uZXh0KHRoaXMuX2VsZW1lbnQsdGkpWzBdfHx6LnByZXYodGhpcy5fZWxlbWVudCx0aSlbMF18fHouZmluZE9uZSh0aSx0aGlzLl9wYXJlbnQpLHRoaXMuX2luTmF2YmFyPXRoaXMuX2RldGVjdE5hdmJhcigpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBhaX1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIGxpfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVybiBLZX10b2dnbGUoKXtyZXR1cm4gdGhpcy5faXNTaG93bigpP3RoaXMuaGlkZSgpOnRoaXMuc2hvdygpfXNob3coKXtpZihsKHRoaXMuX2VsZW1lbnQpfHx0aGlzLl9pc1Nob3duKCkpcmV0dXJuO2NvbnN0IHQ9e3JlbGF0ZWRUYXJnZXQ6dGhpcy5fZWxlbWVudH07aWYoIVAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwic2hvdy5icy5kcm9wZG93blwiLHQpLmRlZmF1bHRQcmV2ZW50ZWQpe2lmKHRoaXMuX2NyZWF0ZVBvcHBlcigpLFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJiF0aGlzLl9wYXJlbnQuY2xvc2VzdChcIi5uYXZiYXItbmF2XCIpKWZvcihjb25zdCB0IG9mW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKVAub24odCxcIm1vdXNlb3ZlclwiLGgpO3RoaXMuX2VsZW1lbnQuZm9jdXMoKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwhMCksdGhpcy5fbWVudS5jbGFzc0xpc3QuYWRkKEdlKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoR2UpLFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwic2hvd24uYnMuZHJvcGRvd25cIix0KX19aGlkZSgpe2lmKGwodGhpcy5fZWxlbWVudCl8fCF0aGlzLl9pc1Nob3duKCkpcmV0dXJuO2NvbnN0IHQ9e3JlbGF0ZWRUYXJnZXQ6dGhpcy5fZWxlbWVudH07dGhpcy5fY29tcGxldGVIaWRlKHQpfWRpc3Bvc2UoKXt0aGlzLl9wb3BwZXImJnRoaXMuX3BvcHBlci5kZXN0cm95KCksc3VwZXIuZGlzcG9zZSgpfXVwZGF0ZSgpe3RoaXMuX2luTmF2YmFyPXRoaXMuX2RldGVjdE5hdmJhcigpLHRoaXMuX3BvcHBlciYmdGhpcy5fcG9wcGVyLnVwZGF0ZSgpfV9jb21wbGV0ZUhpZGUodCl7aWYoIVAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwiaGlkZS5icy5kcm9wZG93blwiLHQpLmRlZmF1bHRQcmV2ZW50ZWQpe2lmKFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpZm9yKGNvbnN0IHQgb2ZbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpUC5vZmYodCxcIm1vdXNlb3ZlclwiLGgpO3RoaXMuX3BvcHBlciYmdGhpcy5fcG9wcGVyLmRlc3Ryb3koKSx0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoR2UpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShHZSksdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsXCJmYWxzZVwiKSxILnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSxcInBvcHBlclwiKSxQLnRyaWdnZXIodGhpcy5fZWxlbWVudCxcImhpZGRlbi5icy5kcm9wZG93blwiLHQpfX1fZ2V0Q29uZmlnKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZih0PXN1cGVyLl9nZXRDb25maWcodCkpLnJlZmVyZW5jZSYmIW8odC5yZWZlcmVuY2UpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtLZS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKTtyZXR1cm4gdH1fY3JlYXRlUG9wcGVyKCl7aWYodm9pZCAwPT09VmUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJvb3RzdHJhcCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKVwiKTtsZXQgdD10aGlzLl9lbGVtZW50O1wicGFyZW50XCI9PT10aGlzLl9jb25maWcucmVmZXJlbmNlP3Q9dGhpcy5fcGFyZW50Om8odGhpcy5fY29uZmlnLnJlZmVyZW5jZSk/dD1yKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpOlwib2JqZWN0XCI9PXR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlJiYodD10aGlzLl9jb25maWcucmVmZXJlbmNlKTtjb25zdCBlPXRoaXMuX2dldFBvcHBlckNvbmZpZygpO3RoaXMuX3BvcHBlcj1xZSh0LHRoaXMuX21lbnUsZSl9X2lzU2hvd24oKXtyZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoR2UpfV9nZXRQbGFjZW1lbnQoKXtjb25zdCB0PXRoaXMuX3BhcmVudDtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3BlbmRcIikpcmV0dXJuIG9pO2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcHN0YXJ0XCIpKXJldHVybiByaTtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3B1cC1jZW50ZXJcIikpcmV0dXJuXCJ0b3BcIjtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLWNlbnRlclwiKSlyZXR1cm5cImJvdHRvbVwiO2NvbnN0IGU9XCJlbmRcIj09PWdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tYnMtcG9zaXRpb25cIikudHJpbSgpO3JldHVybiB0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3B1cFwiKT9lP2lpOmVpOmU/c2k6bml9X2RldGVjdE5hdmJhcigpe3JldHVybiBudWxsIT09dGhpcy5fZWxlbWVudC5jbG9zZXN0KFwiLm5hdmJhclwiKX1fZ2V0T2Zmc2V0KCl7Y29uc3R7b2Zmc2V0OnR9PXRoaXMuX2NvbmZpZztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90LnNwbGl0KFwiLFwiKS5tYXAoKHQ9Pk51bWJlci5wYXJzZUludCh0LDEwKSkpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/ZT0+dChlLHRoaXMuX2VsZW1lbnQpOnR9X2dldFBvcHBlckNvbmZpZygpe2NvbnN0IHQ9e3BsYWNlbWVudDp0aGlzLl9nZXRQbGFjZW1lbnQoKSxtb2RpZmllcnM6W3tuYW1lOlwicHJldmVudE92ZXJmbG93XCIsb3B0aW9uczp7Ym91bmRhcnk6dGhpcy5fY29uZmlnLmJvdW5kYXJ5fX0se25hbWU6XCJvZmZzZXRcIixvcHRpb25zOntvZmZzZXQ6dGhpcy5fZ2V0T2Zmc2V0KCl9fV19O3JldHVybih0aGlzLl9pbk5hdmJhcnx8XCJzdGF0aWNcIj09PXRoaXMuX2NvbmZpZy5kaXNwbGF5KSYmKEguc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LFwicG9wcGVyXCIsXCJzdGF0aWNcIiksdC5tb2RpZmllcnM9W3tuYW1lOlwiYXBwbHlTdHlsZXNcIixlbmFibGVkOiExfV0pLHsuLi50LC4uLmcodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyxbdF0pfX1fc2VsZWN0TWVudUl0ZW0oe2tleTp0LHRhcmdldDplfSl7Y29uc3QgaT16LmZpbmQoXCIuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKVwiLHRoaXMuX21lbnUpLmZpbHRlcigodD0+YSh0KSkpO2kubGVuZ3RoJiZiKGksZSx0PT09WGUsIWkuaW5jbHVkZXMoZSkpLmZvY3VzKCl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGU9Y2kuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19KSl9c3RhdGljIGNsZWFyTWVudXModCl7aWYoMj09PXQuYnV0dG9ufHxcImtleXVwXCI9PT10LnR5cGUmJlwiVGFiXCIhPT10LmtleSlyZXR1cm47Y29uc3QgZT16LmZpbmQoWmUpO2Zvcihjb25zdCBpIG9mIGUpe2NvbnN0IGU9Y2kuZ2V0SW5zdGFuY2UoaSk7aWYoIWV8fCExPT09ZS5fY29uZmlnLmF1dG9DbG9zZSljb250aW51ZTtjb25zdCBuPXQuY29tcG9zZWRQYXRoKCkscz1uLmluY2x1ZGVzKGUuX21lbnUpO2lmKG4uaW5jbHVkZXMoZS5fZWxlbWVudCl8fFwiaW5zaWRlXCI9PT1lLl9jb25maWcuYXV0b0Nsb3NlJiYhc3x8XCJvdXRzaWRlXCI9PT1lLl9jb25maWcuYXV0b0Nsb3NlJiZzKWNvbnRpbnVlO2lmKGUuX21lbnUuY29udGFpbnModC50YXJnZXQpJiYoXCJrZXl1cFwiPT09dC50eXBlJiZcIlRhYlwiPT09dC5rZXl8fC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KHQudGFyZ2V0LnRhZ05hbWUpKSljb250aW51ZTtjb25zdCBvPXtyZWxhdGVkVGFyZ2V0OmUuX2VsZW1lbnR9O1wiY2xpY2tcIj09PXQudHlwZSYmKG8uY2xpY2tFdmVudD10KSxlLl9jb21wbGV0ZUhpZGUobyl9fXN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIodCl7Y29uc3QgZT0vaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHQudGFyZ2V0LnRhZ05hbWUpLGk9XCJFc2NhcGVcIj09PXQua2V5LG49W1FlLFhlXS5pbmNsdWRlcyh0LmtleSk7aWYoIW4mJiFpKXJldHVybjtpZihlJiYhaSlyZXR1cm47dC5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IHM9dGhpcy5tYXRjaGVzKEplKT90aGlzOnoucHJldih0aGlzLEplKVswXXx8ei5uZXh0KHRoaXMsSmUpWzBdfHx6LmZpbmRPbmUoSmUsdC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKSxvPWNpLmdldE9yQ3JlYXRlSW5zdGFuY2Uocyk7aWYobilyZXR1cm4gdC5zdG9wUHJvcGFnYXRpb24oKSxvLnNob3coKSx2b2lkIG8uX3NlbGVjdE1lbnVJdGVtKHQpO28uX2lzU2hvd24oKSYmKHQuc3RvcFByb3BhZ2F0aW9uKCksby5oaWRlKCkscy5mb2N1cygpKX19UC5vbihkb2N1bWVudCxVZSxKZSxjaS5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpLFAub24oZG9jdW1lbnQsVWUsdGksY2kuZGF0YUFwaUtleWRvd25IYW5kbGVyKSxQLm9uKGRvY3VtZW50LFllLGNpLmNsZWFyTWVudXMpLFAub24oZG9jdW1lbnQsXCJrZXl1cC5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGNpLmNsZWFyTWVudXMpLFAub24oZG9jdW1lbnQsWWUsSmUsKGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxjaS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnRvZ2dsZSgpfSkpLG0oY2kpO2NvbnN0IGhpPVwic2hvd1wiLGRpPVwibW91c2Vkb3duLmJzLmJhY2tkcm9wXCIsdWk9e2NsYXNzTmFtZTpcIm1vZGFsLWJhY2tkcm9wXCIsY2xpY2tDYWxsYmFjazpudWxsLGlzQW5pbWF0ZWQ6ITEsaXNWaXNpYmxlOiEwLHJvb3RFbGVtZW50OlwiYm9keVwifSxmaT17Y2xhc3NOYW1lOlwic3RyaW5nXCIsY2xpY2tDYWxsYmFjazpcIihmdW5jdGlvbnxudWxsKVwiLGlzQW5pbWF0ZWQ6XCJib29sZWFuXCIsaXNWaXNpYmxlOlwiYm9vbGVhblwiLHJvb3RFbGVtZW50OlwiKGVsZW1lbnR8c3RyaW5nKVwifTtjbGFzcyBwaSBleHRlbmRzICR7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKHQpLHRoaXMuX2lzQXBwZW5kZWQ9ITEsdGhpcy5fZWxlbWVudD1udWxsfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiB1aX1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIGZpfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiYmFja2Ryb3BcIn1zaG93KHQpe2lmKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKXJldHVybiB2b2lkIGcodCk7dGhpcy5fYXBwZW5kKCk7Y29uc3QgZT10aGlzLl9nZXRFbGVtZW50KCk7dGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQmJmQoZSksZS5jbGFzc0xpc3QuYWRkKGhpKSx0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgoKT0+e2codCl9KSl9aGlkZSh0KXt0aGlzLl9jb25maWcuaXNWaXNpYmxlPyh0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShoaSksdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKCk9Pnt0aGlzLmRpc3Bvc2UoKSxnKHQpfSkpKTpnKHQpfWRpc3Bvc2UoKXt0aGlzLl9pc0FwcGVuZGVkJiYoUC5vZmYodGhpcy5fZWxlbWVudCxkaSksdGhpcy5fZWxlbWVudC5yZW1vdmUoKSx0aGlzLl9pc0FwcGVuZGVkPSExKX1fZ2V0RWxlbWVudCgpe2lmKCF0aGlzLl9lbGVtZW50KXtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9dGhpcy5fY29uZmlnLmNsYXNzTmFtZSx0aGlzLl9jb25maWcuaXNBbmltYXRlZCYmdC5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKSx0aGlzLl9lbGVtZW50PXR9cmV0dXJuIHRoaXMuX2VsZW1lbnR9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQucm9vdEVsZW1lbnQ9cih0LnJvb3RFbGVtZW50KSx0fV9hcHBlbmQoKXtpZih0aGlzLl9pc0FwcGVuZGVkKXJldHVybjtjb25zdCB0PXRoaXMuX2dldEVsZW1lbnQoKTt0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKHQpLFAub24odCxkaSwoKCk9PntnKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKX0pKSx0aGlzLl9pc0FwcGVuZGVkPSEwfV9lbXVsYXRlQW5pbWF0aW9uKHQpe18odCx0aGlzLl9nZXRFbGVtZW50KCksdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpfX1jb25zdCBtaT1cIi5icy5mb2N1c3RyYXBcIixnaT1cImJhY2t3YXJkXCIsX2k9e2F1dG9mb2N1czohMCx0cmFwRWxlbWVudDpudWxsfSxiaT17YXV0b2ZvY3VzOlwiYm9vbGVhblwiLHRyYXBFbGVtZW50OlwiZWxlbWVudFwifTtjbGFzcyB2aSBleHRlbmRzICR7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKHQpLHRoaXMuX2lzQWN0aXZlPSExLHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb249bnVsbH1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gX2l9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBiaX1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cImZvY3VzdHJhcFwifWFjdGl2YXRlKCl7dGhpcy5faXNBY3RpdmV8fCh0aGlzLl9jb25maWcuYXV0b2ZvY3VzJiZ0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKSxQLm9mZihkb2N1bWVudCxtaSksUC5vbihkb2N1bWVudCxcImZvY3VzaW4uYnMuZm9jdXN0cmFwXCIsKHQ9PnRoaXMuX2hhbmRsZUZvY3VzaW4odCkpKSxQLm9uKGRvY3VtZW50LFwia2V5ZG93bi50YWIuYnMuZm9jdXN0cmFwXCIsKHQ9PnRoaXMuX2hhbmRsZUtleWRvd24odCkpKSx0aGlzLl9pc0FjdGl2ZT0hMCl9ZGVhY3RpdmF0ZSgpe3RoaXMuX2lzQWN0aXZlJiYodGhpcy5faXNBY3RpdmU9ITEsUC5vZmYoZG9jdW1lbnQsbWkpKX1faGFuZGxlRm9jdXNpbih0KXtjb25zdHt0cmFwRWxlbWVudDplfT10aGlzLl9jb25maWc7aWYodC50YXJnZXQ9PT1kb2N1bWVudHx8dC50YXJnZXQ9PT1lfHxlLmNvbnRhaW5zKHQudGFyZ2V0KSlyZXR1cm47Y29uc3QgaT16LmZvY3VzYWJsZUNoaWxkcmVuKGUpOzA9PT1pLmxlbmd0aD9lLmZvY3VzKCk6dGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbj09PWdpP2lbaS5sZW5ndGgtMV0uZm9jdXMoKTppWzBdLmZvY3VzKCl9X2hhbmRsZUtleWRvd24odCl7XCJUYWJcIj09PXQua2V5JiYodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbj10LnNoaWZ0S2V5P2dpOlwiZm9yd2FyZFwiKX19Y29uc3QgeWk9XCIuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wXCIsd2k9XCIuc3RpY2t5LXRvcFwiLEFpPVwicGFkZGluZy1yaWdodFwiLEVpPVwibWFyZ2luLXJpZ2h0XCI7Y2xhc3MgVGl7Y29uc3RydWN0b3IoKXt0aGlzLl9lbGVtZW50PWRvY3VtZW50LmJvZHl9Z2V0V2lkdGgoKXtjb25zdCB0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtyZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGgtdCl9aGlkZSgpe2NvbnN0IHQ9dGhpcy5nZXRXaWR0aCgpO3RoaXMuX2Rpc2FibGVPdmVyRmxvdygpLHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsQWksKGU9PmUrdCkpLHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHlpLEFpLChlPT5lK3QpKSx0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh3aSxFaSwoZT0+ZS10KSl9cmVzZXQoKXt0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsXCJvdmVyZmxvd1wiKSx0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsQWkpLHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoeWksQWkpLHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMod2ksRWkpfWlzT3ZlcmZsb3dpbmcoKXtyZXR1cm4gdGhpcy5nZXRXaWR0aCgpPjB9X2Rpc2FibGVPdmVyRmxvdygpe3RoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsXCJvdmVyZmxvd1wiKSx0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCJ9X3NldEVsZW1lbnRBdHRyaWJ1dGVzKHQsZSxpKXtjb25zdCBuPXRoaXMuZ2V0V2lkdGgoKTt0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHQsKHQ9PntpZih0IT09dGhpcy5fZWxlbWVudCYmd2luZG93LmlubmVyV2lkdGg+dC5jbGllbnRXaWR0aCtuKXJldHVybjt0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0LGUpO2NvbnN0IHM9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShlKTt0LnN0eWxlLnNldFByb3BlcnR5KGUsYCR7aShOdW1iZXIucGFyc2VGbG9hdChzKSl9cHhgKX0pKX1fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodCxlKXtjb25zdCBpPXQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShlKTtpJiZILnNldERhdGFBdHRyaWJ1dGUodCxlLGkpfV9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHQsZSl7dGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayh0LCh0PT57Y29uc3QgaT1ILmdldERhdGFBdHRyaWJ1dGUodCxlKTtudWxsIT09aT8oSC5yZW1vdmVEYXRhQXR0cmlidXRlKHQsZSksdC5zdHlsZS5zZXRQcm9wZXJ0eShlLGkpKTp0LnN0eWxlLnJlbW92ZVByb3BlcnR5KGUpfSkpfV9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHQsZSl7aWYobyh0KSllKHQpO2Vsc2UgZm9yKGNvbnN0IGkgb2Ygei5maW5kKHQsdGhpcy5fZWxlbWVudCkpZShpKX19Y29uc3QgQ2k9XCIuYnMubW9kYWxcIixPaT1cImhpZGRlbi5icy5tb2RhbFwiLHhpPVwic2hvdy5icy5tb2RhbFwiLGtpPVwibW9kYWwtb3BlblwiLExpPVwic2hvd1wiLFNpPVwibW9kYWwtc3RhdGljXCIsRGk9e2JhY2tkcm9wOiEwLGZvY3VzOiEwLGtleWJvYXJkOiEwfSxJaT17YmFja2Ryb3A6XCIoYm9vbGVhbnxzdHJpbmcpXCIsZm9jdXM6XCJib29sZWFuXCIsa2V5Ym9hcmQ6XCJib29sZWFuXCJ9O2NsYXNzIE5pIGV4dGVuZHMgV3tjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksdGhpcy5fZGlhbG9nPXouZmluZE9uZShcIi5tb2RhbC1kaWFsb2dcIix0aGlzLl9lbGVtZW50KSx0aGlzLl9iYWNrZHJvcD10aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKSx0aGlzLl9mb2N1c3RyYXA9dGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpLHRoaXMuX2lzU2hvd249ITEsdGhpcy5faXNUcmFuc2l0aW9uaW5nPSExLHRoaXMuX3Njcm9sbEJhcj1uZXcgVGksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gRGl9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBJaX1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cIm1vZGFsXCJ9dG9nZ2xlKHQpe3JldHVybiB0aGlzLl9pc1Nob3duP3RoaXMuaGlkZSgpOnRoaXMuc2hvdyh0KX1zaG93KHQpe3RoaXMuX2lzU2hvd258fHRoaXMuX2lzVHJhbnNpdGlvbmluZ3x8UC50cmlnZ2VyKHRoaXMuX2VsZW1lbnQseGkse3JlbGF0ZWRUYXJnZXQ6dH0pLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9pc1Nob3duPSEwLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMCx0aGlzLl9zY3JvbGxCYXIuaGlkZSgpLGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChraSksdGhpcy5fYWRqdXN0RGlhbG9nKCksdGhpcy5fYmFja2Ryb3Auc2hvdygoKCk9PnRoaXMuX3Nob3dFbGVtZW50KHQpKSkpfWhpZGUoKXt0aGlzLl9pc1Nob3duJiYhdGhpcy5faXNUcmFuc2l0aW9uaW5nJiYoUC50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsXCJoaWRlLmJzLm1vZGFsXCIpLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9pc1Nob3duPSExLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMCx0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShMaSksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PnRoaXMuX2hpZGVNb2RhbCgpKSx0aGlzLl9lbGVtZW50LHRoaXMuX2lzQW5pbWF0ZWQoKSkpKX1kaXNwb3NlKCl7UC5vZmYod2luZG93LENpKSxQLm9mZih0aGlzLl9kaWFsb2csQ2kpLHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKSx0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpLHN1cGVyLmRpc3Bvc2UoKX1oYW5kbGVVcGRhdGUoKXt0aGlzLl9hZGp1c3REaWFsb2coKX1faW5pdGlhbGl6ZUJhY2tEcm9wKCl7cmV0dXJuIG5ldyBwaSh7aXNWaXNpYmxlOkJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSxpc0FuaW1hdGVkOnRoaXMuX2lzQW5pbWF0ZWQoKX0pfV9pbml0aWFsaXplRm9jdXNUcmFwKCl7cmV0dXJuIG5ldyB2aSh7dHJhcEVsZW1lbnQ6dGhpcy5fZWxlbWVudH0pfV9zaG93RWxlbWVudCh0KXtkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpfHxkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KSx0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiksdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIsITApLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwiZGlhbG9nXCIpLHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wPTA7Y29uc3QgZT16LmZpbmRPbmUoXCIubW9kYWwtYm9keVwiLHRoaXMuX2RpYWxvZyk7ZSYmKGUuc2Nyb2xsVG9wPTApLGQodGhpcy5fZWxlbWVudCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKExpKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2NvbmZpZy5mb2N1cyYmdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKCksdGhpcy5faXNUcmFuc2l0aW9uaW5nPSExLFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwic2hvd24uYnMubW9kYWxcIix7cmVsYXRlZFRhcmdldDp0fSl9KSx0aGlzLl9kaWFsb2csdGhpcy5faXNBbmltYXRlZCgpKX1fYWRkRXZlbnRMaXN0ZW5lcnMoKXtQLm9uKHRoaXMuX2VsZW1lbnQsXCJrZXlkb3duLmRpc21pc3MuYnMubW9kYWxcIiwodD0+e1wiRXNjYXBlXCI9PT10LmtleSYmKHRoaXMuX2NvbmZpZy5rZXlib2FyZD90aGlzLmhpZGUoKTp0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkpfSkpLFAub24od2luZG93LFwicmVzaXplLmJzLm1vZGFsXCIsKCgpPT57dGhpcy5faXNTaG93biYmIXRoaXMuX2lzVHJhbnNpdGlvbmluZyYmdGhpcy5fYWRqdXN0RGlhbG9nKCl9KSksUC5vbih0aGlzLl9lbGVtZW50LFwibW91c2Vkb3duLmRpc21pc3MuYnMubW9kYWxcIiwodD0+e1Aub25lKHRoaXMuX2VsZW1lbnQsXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIsKGU9Pnt0aGlzLl9lbGVtZW50PT09dC50YXJnZXQmJnRoaXMuX2VsZW1lbnQ9PT1lLnRhcmdldCYmKFwic3RhdGljXCIhPT10aGlzLl9jb25maWcuYmFja2Ryb3A/dGhpcy5fY29uZmlnLmJhY2tkcm9wJiZ0aGlzLmhpZGUoKTp0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkpfSkpfSkpfV9oaWRlTW9kYWwoKXt0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCEwKSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIiksdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJyb2xlXCIpLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9iYWNrZHJvcC5oaWRlKCgoKT0+e2RvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShraSksdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpLHRoaXMuX3Njcm9sbEJhci5yZXNldCgpLFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LE9pKX0pKX1faXNBbmltYXRlZCgpe3JldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZhZGVcIil9X3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKXtpZihQLnRyaWdnZXIodGhpcy5fZWxlbWVudCxcImhpZGVQcmV2ZW50ZWQuYnMubW9kYWxcIikuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47Y29uc3QgdD10aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodD5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LGU9dGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k7XCJoaWRkZW5cIj09PWV8fHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFNpKXx8KHR8fCh0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WT1cImhpZGRlblwiKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoU2kpLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57dGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFNpKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPWV9KSx0aGlzLl9kaWFsb2cpfSksdGhpcy5fZGlhbG9nKSx0aGlzLl9lbGVtZW50LmZvY3VzKCkpfV9hZGp1c3REaWFsb2coKXtjb25zdCB0PXRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsZT10aGlzLl9zY3JvbGxCYXIuZ2V0V2lkdGgoKSxpPWU+MDtpZihpJiYhdCl7Y29uc3QgdD1wKCk/XCJwYWRkaW5nTGVmdFwiOlwicGFkZGluZ1JpZ2h0XCI7dGhpcy5fZWxlbWVudC5zdHlsZVt0XT1gJHtlfXB4YH1pZighaSYmdCl7Y29uc3QgdD1wKCk/XCJwYWRkaW5nUmlnaHRcIjpcInBhZGRpbmdMZWZ0XCI7dGhpcy5fZWxlbWVudC5zdHlsZVt0XT1gJHtlfXB4YH19X3Jlc2V0QWRqdXN0bWVudHMoKXt0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0PVwiXCIsdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQ9XCJcIn1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQsZSl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBpPU5pLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09aVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtpW3RdKGUpfX0pKX19UC5vbihkb2N1bWVudCxcImNsaWNrLmJzLm1vZGFsLmRhdGEtYXBpXCIsJ1tkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJdJywoZnVuY3Rpb24odCl7Y29uc3QgZT16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7W1wiQVwiLFwiQVJFQVwiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZ0LnByZXZlbnREZWZhdWx0KCksUC5vbmUoZSx4aSwodD0+e3QuZGVmYXVsdFByZXZlbnRlZHx8UC5vbmUoZSxPaSwoKCk9PnthKHRoaXMpJiZ0aGlzLmZvY3VzKCl9KSl9KSk7Y29uc3QgaT16LmZpbmRPbmUoXCIubW9kYWwuc2hvd1wiKTtpJiZOaS5nZXRJbnN0YW5jZShpKS5oaWRlKCksTmkuZ2V0T3JDcmVhdGVJbnN0YW5jZShlKS50b2dnbGUodGhpcyl9KSksUihOaSksbShOaSk7Y29uc3QgUGk9XCJzaG93XCIsTWk9XCJzaG93aW5nXCIsamk9XCJoaWRpbmdcIixGaT1cIi5vZmZjYW52YXMuc2hvd1wiLEhpPVwiaGlkZVByZXZlbnRlZC5icy5vZmZjYW52YXNcIiwkaT1cImhpZGRlbi5icy5vZmZjYW52YXNcIixXaT17YmFja2Ryb3A6ITAsa2V5Ym9hcmQ6ITAsc2Nyb2xsOiExfSxCaT17YmFja2Ryb3A6XCIoYm9vbGVhbnxzdHJpbmcpXCIsa2V5Ym9hcmQ6XCJib29sZWFuXCIsc2Nyb2xsOlwiYm9vbGVhblwifTtjbGFzcyB6aSBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX2lzU2hvd249ITEsdGhpcy5fYmFja2Ryb3A9dGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKCksdGhpcy5fZm9jdXN0cmFwPXRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKSx0aGlzLl9hZGRFdmVudExpc3RlbmVycygpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBXaX1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIEJpfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwib2ZmY2FudmFzXCJ9dG9nZ2xlKHQpe3JldHVybiB0aGlzLl9pc1Nob3duP3RoaXMuaGlkZSgpOnRoaXMuc2hvdyh0KX1zaG93KHQpe3RoaXMuX2lzU2hvd258fFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwic2hvdy5icy5vZmZjYW52YXNcIix7cmVsYXRlZFRhcmdldDp0fSkuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2lzU2hvd249ITAsdGhpcy5fYmFja2Ryb3Auc2hvdygpLHRoaXMuX2NvbmZpZy5zY3JvbGx8fChuZXcgVGkpLmhpZGUoKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIiwhMCksdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKE1pKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2NvbmZpZy5zY3JvbGwmJiF0aGlzLl9jb25maWcuYmFja2Ryb3B8fHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChQaSksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE1pKSxQLnRyaWdnZXIodGhpcy5fZWxlbWVudCxcInNob3duLmJzLm9mZmNhbnZhc1wiLHtyZWxhdGVkVGFyZ2V0OnR9KX0pLHRoaXMuX2VsZW1lbnQsITApKX1oaWRlKCl7dGhpcy5faXNTaG93biYmKFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwiaGlkZS5icy5vZmZjYW52YXNcIikuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCksdGhpcy5fZWxlbWVudC5ibHVyKCksdGhpcy5faXNTaG93bj0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoamkpLHRoaXMuX2JhY2tkcm9wLmhpZGUoKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShQaSxqaSksdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIpLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKSx0aGlzLl9jb25maWcuc2Nyb2xsfHwobmV3IFRpKS5yZXNldCgpLFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LCRpKX0pLHRoaXMuX2VsZW1lbnQsITApKSl9ZGlzcG9zZSgpe3RoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKSx0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpLHN1cGVyLmRpc3Bvc2UoKX1faW5pdGlhbGl6ZUJhY2tEcm9wKCl7Y29uc3QgdD1Cb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCk7cmV0dXJuIG5ldyBwaSh7Y2xhc3NOYW1lOlwib2ZmY2FudmFzLWJhY2tkcm9wXCIsaXNWaXNpYmxlOnQsaXNBbmltYXRlZDohMCxyb290RWxlbWVudDp0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsY2xpY2tDYWxsYmFjazp0PygpPT57XCJzdGF0aWNcIiE9PXRoaXMuX2NvbmZpZy5iYWNrZHJvcD90aGlzLmhpZGUoKTpQLnRyaWdnZXIodGhpcy5fZWxlbWVudCxIaSl9Om51bGx9KX1faW5pdGlhbGl6ZUZvY3VzVHJhcCgpe3JldHVybiBuZXcgdmkoe3RyYXBFbGVtZW50OnRoaXMuX2VsZW1lbnR9KX1fYWRkRXZlbnRMaXN0ZW5lcnMoKXtQLm9uKHRoaXMuX2VsZW1lbnQsXCJrZXlkb3duLmRpc21pc3MuYnMub2ZmY2FudmFzXCIsKHQ9PntcIkVzY2FwZVwiPT09dC5rZXkmJih0aGlzLl9jb25maWcua2V5Ym9hcmQ/dGhpcy5oaWRlKCk6UC50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsSGkpKX0pKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT16aS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSh0aGlzKX19KSl9fVAub24oZG9jdW1lbnQsXCJjbGljay5icy5vZmZjYW52YXMuZGF0YS1hcGlcIiwnW2RhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCJdJywoZnVuY3Rpb24odCl7Y29uc3QgZT16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7aWYoW1wiQVwiLFwiQVJFQVwiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZ0LnByZXZlbnREZWZhdWx0KCksbCh0aGlzKSlyZXR1cm47UC5vbmUoZSwkaSwoKCk9PnthKHRoaXMpJiZ0aGlzLmZvY3VzKCl9KSk7Y29uc3QgaT16LmZpbmRPbmUoRmkpO2kmJmkhPT1lJiZ6aS5nZXRJbnN0YW5jZShpKS5oaWRlKCksemkuZ2V0T3JDcmVhdGVJbnN0YW5jZShlKS50b2dnbGUodGhpcyl9KSksUC5vbih3aW5kb3csXCJsb2FkLmJzLm9mZmNhbnZhcy5kYXRhLWFwaVwiLCgoKT0+e2Zvcihjb25zdCB0IG9mIHouZmluZChGaSkpemkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KS5zaG93KCl9KSksUC5vbih3aW5kb3csXCJyZXNpemUuYnMub2ZmY2FudmFzXCIsKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKFwiW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV1cIikpXCJmaXhlZFwiIT09Z2V0Q29tcHV0ZWRTdHlsZSh0KS5wb3NpdGlvbiYmemkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KS5oaWRlKCl9KSksUih6aSksbSh6aSk7Y29uc3QgUmk9e1wiKlwiOltcImNsYXNzXCIsXCJkaXJcIixcImlkXCIsXCJsYW5nXCIsXCJyb2xlXCIsL15hcmlhLVtcXHctXSokL2ldLGE6W1widGFyZ2V0XCIsXCJocmVmXCIsXCJ0aXRsZVwiLFwicmVsXCJdLGFyZWE6W10sYjpbXSxicjpbXSxjb2w6W10sY29kZTpbXSxkaXY6W10sZW06W10saHI6W10saDE6W10saDI6W10saDM6W10saDQ6W10saDU6W10saDY6W10saTpbXSxpbWc6W1wic3JjXCIsXCJzcmNzZXRcIixcImFsdFwiLFwidGl0bGVcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0sbGk6W10sb2w6W10scDpbXSxwcmU6W10sczpbXSxzbWFsbDpbXSxzcGFuOltdLHN1YjpbXSxzdXA6W10sc3Ryb25nOltdLHU6W10sdWw6W119LHFpPW5ldyBTZXQoW1wiYmFja2dyb3VuZFwiLFwiY2l0ZVwiLFwiaHJlZlwiLFwiaXRlbXR5cGVcIixcImxvbmdkZXNjXCIsXCJwb3N0ZXJcIixcInNyY1wiLFwieGxpbms6aHJlZlwiXSksVmk9L14oPyFqYXZhc2NyaXB0OikoPzpbYS16MC05Ky4tXSs6fFteJjovPyNdKig/OlsvPyNdfCQpKS9pLEtpPSh0LGUpPT57Y29uc3QgaT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGUuaW5jbHVkZXMoaSk/IXFpLmhhcyhpKXx8Qm9vbGVhbihWaS50ZXN0KHQubm9kZVZhbHVlKSk6ZS5maWx0ZXIoKHQ9PnQgaW5zdGFuY2VvZiBSZWdFeHApKS5zb21lKCh0PT50LnRlc3QoaSkpKX0sUWk9e2FsbG93TGlzdDpSaSxjb250ZW50Ont9LGV4dHJhQ2xhc3M6XCJcIixodG1sOiExLHNhbml0aXplOiEwLHNhbml0aXplRm46bnVsbCx0ZW1wbGF0ZTpcIjxkaXY+PC9kaXY+XCJ9LFhpPXthbGxvd0xpc3Q6XCJvYmplY3RcIixjb250ZW50Olwib2JqZWN0XCIsZXh0cmFDbGFzczpcIihzdHJpbmd8ZnVuY3Rpb24pXCIsaHRtbDpcImJvb2xlYW5cIixzYW5pdGl6ZTpcImJvb2xlYW5cIixzYW5pdGl6ZUZuOlwiKG51bGx8ZnVuY3Rpb24pXCIsdGVtcGxhdGU6XCJzdHJpbmdcIn0sWWk9e2VudHJ5OlwiKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpXCIsc2VsZWN0b3I6XCIoc3RyaW5nfGVsZW1lbnQpXCJ9O2NsYXNzIFVpIGV4dGVuZHMgJHtjb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcodCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIFFpfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gWGl9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJUZW1wbGF0ZUZhY3RvcnlcIn1nZXRDb250ZW50KCl7cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fY29uZmlnLmNvbnRlbnQpLm1hcCgodD0+dGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odCkpKS5maWx0ZXIoQm9vbGVhbil9aGFzQ29udGVudCgpe3JldHVybiB0aGlzLmdldENvbnRlbnQoKS5sZW5ndGg+MH1jaGFuZ2VDb250ZW50KHQpe3JldHVybiB0aGlzLl9jaGVja0NvbnRlbnQodCksdGhpcy5fY29uZmlnLmNvbnRlbnQ9ey4uLnRoaXMuX2NvbmZpZy5jb250ZW50LC4uLnR9LHRoaXN9dG9IdG1sKCl7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuaW5uZXJIVE1MPXRoaXMuX21heWJlU2FuaXRpemUodGhpcy5fY29uZmlnLnRlbXBsYXRlKTtmb3IoY29uc3RbZSxpXW9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KSl0aGlzLl9zZXRDb250ZW50KHQsaSxlKTtjb25zdCBlPXQuY2hpbGRyZW5bMF0saT10aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcyk7cmV0dXJuIGkmJmUuY2xhc3NMaXN0LmFkZCguLi5pLnNwbGl0KFwiIFwiKSksZX1fdHlwZUNoZWNrQ29uZmlnKHQpe3N1cGVyLl90eXBlQ2hlY2tDb25maWcodCksdGhpcy5fY2hlY2tDb250ZW50KHQuY29udGVudCl9X2NoZWNrQ29udGVudCh0KXtmb3IoY29uc3RbZSxpXW9mIE9iamVjdC5lbnRyaWVzKHQpKXN1cGVyLl90eXBlQ2hlY2tDb25maWcoe3NlbGVjdG9yOmUsZW50cnk6aX0sWWkpfV9zZXRDb250ZW50KHQsZSxpKXtjb25zdCBuPXouZmluZE9uZShpLHQpO24mJigoZT10aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihlKSk/byhlKT90aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShyKGUpLG4pOnRoaXMuX2NvbmZpZy5odG1sP24uaW5uZXJIVE1MPXRoaXMuX21heWJlU2FuaXRpemUoZSk6bi50ZXh0Q29udGVudD1lOm4ucmVtb3ZlKCkpfV9tYXliZVNhbml0aXplKHQpe3JldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemU/ZnVuY3Rpb24odCxlLGkpe2lmKCF0Lmxlbmd0aClyZXR1cm4gdDtpZihpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpKXJldHVybiBpKHQpO2NvbnN0IG49KG5ldyB3aW5kb3cuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodCxcInRleHQvaHRtbFwiKSxzPVtdLmNvbmNhdCguLi5uLmJvZHkucXVlcnlTZWxlY3RvckFsbChcIipcIikpO2Zvcihjb25zdCB0IG9mIHMpe2NvbnN0IGk9dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKCFPYmplY3Qua2V5cyhlKS5pbmNsdWRlcyhpKSl7dC5yZW1vdmUoKTtjb250aW51ZX1jb25zdCBuPVtdLmNvbmNhdCguLi50LmF0dHJpYnV0ZXMpLHM9W10uY29uY2F0KGVbXCIqXCJdfHxbXSxlW2ldfHxbXSk7Zm9yKGNvbnN0IGUgb2YgbilLaShlLHMpfHx0LnJlbW92ZUF0dHJpYnV0ZShlLm5vZGVOYW1lKX1yZXR1cm4gbi5ib2R5LmlubmVySFRNTH0odCx0aGlzLl9jb25maWcuYWxsb3dMaXN0LHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKTp0fV9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0KXtyZXR1cm4gZyh0LFt0aGlzXSl9X3B1dEVsZW1lbnRJblRlbXBsYXRlKHQsZSl7aWYodGhpcy5fY29uZmlnLmh0bWwpcmV0dXJuIGUuaW5uZXJIVE1MPVwiXCIsdm9pZCBlLmFwcGVuZCh0KTtlLnRleHRDb250ZW50PXQudGV4dENvbnRlbnR9fWNvbnN0IEdpPW5ldyBTZXQoW1wic2FuaXRpemVcIixcImFsbG93TGlzdFwiLFwic2FuaXRpemVGblwiXSksSmk9XCJmYWRlXCIsWmk9XCJzaG93XCIsdG49XCIubW9kYWxcIixlbj1cImhpZGUuYnMubW9kYWxcIixubj1cImhvdmVyXCIsc249XCJmb2N1c1wiLG9uPXtBVVRPOlwiYXV0b1wiLFRPUDpcInRvcFwiLFJJR0hUOnAoKT9cImxlZnRcIjpcInJpZ2h0XCIsQk9UVE9NOlwiYm90dG9tXCIsTEVGVDpwKCk/XCJyaWdodFwiOlwibGVmdFwifSxybj17YWxsb3dMaXN0OlJpLGFuaW1hdGlvbjohMCxib3VuZGFyeTpcImNsaXBwaW5nUGFyZW50c1wiLGNvbnRhaW5lcjohMSxjdXN0b21DbGFzczpcIlwiLGRlbGF5OjAsZmFsbGJhY2tQbGFjZW1lbnRzOltcInRvcFwiLFwicmlnaHRcIixcImJvdHRvbVwiLFwibGVmdFwiXSxodG1sOiExLG9mZnNldDpbMCw2XSxwbGFjZW1lbnQ6XCJ0b3BcIixwb3BwZXJDb25maWc6bnVsbCxzYW5pdGl6ZTohMCxzYW5pdGl6ZUZuOm51bGwsc2VsZWN0b3I6ITEsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+Jyx0aXRsZTpcIlwiLHRyaWdnZXI6XCJob3ZlciBmb2N1c1wifSxhbj17YWxsb3dMaXN0Olwib2JqZWN0XCIsYW5pbWF0aW9uOlwiYm9vbGVhblwiLGJvdW5kYXJ5OlwiKHN0cmluZ3xlbGVtZW50KVwiLGNvbnRhaW5lcjpcIihzdHJpbmd8ZWxlbWVudHxib29sZWFuKVwiLGN1c3RvbUNsYXNzOlwiKHN0cmluZ3xmdW5jdGlvbilcIixkZWxheTpcIihudW1iZXJ8b2JqZWN0KVwiLGZhbGxiYWNrUGxhY2VtZW50czpcImFycmF5XCIsaHRtbDpcImJvb2xlYW5cIixvZmZzZXQ6XCIoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKVwiLHBsYWNlbWVudDpcIihzdHJpbmd8ZnVuY3Rpb24pXCIscG9wcGVyQ29uZmlnOlwiKG51bGx8b2JqZWN0fGZ1bmN0aW9uKVwiLHNhbml0aXplOlwiYm9vbGVhblwiLHNhbml0aXplRm46XCIobnVsbHxmdW5jdGlvbilcIixzZWxlY3RvcjpcIihzdHJpbmd8Ym9vbGVhbilcIix0ZW1wbGF0ZTpcInN0cmluZ1wiLHRpdGxlOlwiKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKVwiLHRyaWdnZXI6XCJzdHJpbmdcIn07Y2xhc3MgbG4gZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7aWYodm9pZCAwPT09VmUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJvb3RzdHJhcCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpXCIpO3N1cGVyKHQsZSksdGhpcy5faXNFbmFibGVkPSEwLHRoaXMuX3RpbWVvdXQ9MCx0aGlzLl9pc0hvdmVyZWQ9bnVsbCx0aGlzLl9hY3RpdmVUcmlnZ2VyPXt9LHRoaXMuX3BvcHBlcj1udWxsLHRoaXMuX3RlbXBsYXRlRmFjdG9yeT1udWxsLHRoaXMuX25ld0NvbnRlbnQ9bnVsbCx0aGlzLnRpcD1udWxsLHRoaXMuX3NldExpc3RlbmVycygpLHRoaXMuX2NvbmZpZy5zZWxlY3Rvcnx8dGhpcy5fZml4VGl0bGUoKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gcm59c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBhbn1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInRvb2x0aXBcIn1lbmFibGUoKXt0aGlzLl9pc0VuYWJsZWQ9ITB9ZGlzYWJsZSgpe3RoaXMuX2lzRW5hYmxlZD0hMX10b2dnbGVFbmFibGVkKCl7dGhpcy5faXNFbmFibGVkPSF0aGlzLl9pc0VuYWJsZWR9dG9nZ2xlKCl7dGhpcy5faXNFbmFibGVkJiYodGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljaz0hdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayx0aGlzLl9pc1Nob3duKCk/dGhpcy5fbGVhdmUoKTp0aGlzLl9lbnRlcigpKX1kaXNwb3NlKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpLFAub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdCh0biksZW4sdGhpcy5faGlkZU1vZGFsSGFuZGxlciksdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlXCIpJiZ0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlXCIpKSx0aGlzLl9kaXNwb3NlUG9wcGVyKCksc3VwZXIuZGlzcG9zZSgpfXNob3coKXtpZihcIm5vbmVcIj09PXRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSl0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50c1wiKTtpZighdGhpcy5faXNXaXRoQ29udGVudCgpfHwhdGhpcy5faXNFbmFibGVkKXJldHVybjtjb25zdCB0PVAudHJpZ2dlcih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwic2hvd1wiKSksZT0oYyh0aGlzLl9lbGVtZW50KXx8dGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuY29udGFpbnModGhpcy5fZWxlbWVudCk7aWYodC5kZWZhdWx0UHJldmVudGVkfHwhZSlyZXR1cm47dGhpcy5fZGlzcG9zZVBvcHBlcigpO2NvbnN0IGk9dGhpcy5fZ2V0VGlwRWxlbWVudCgpO3RoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiLGkuZ2V0QXR0cmlidXRlKFwiaWRcIikpO2NvbnN0e2NvbnRhaW5lcjpufT10aGlzLl9jb25maWc7aWYodGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLnRpcCl8fChuLmFwcGVuZChpKSxQLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcImluc2VydGVkXCIpKSksdGhpcy5fcG9wcGVyPXRoaXMuX2NyZWF0ZVBvcHBlcihpKSxpLmNsYXNzTGlzdC5hZGQoWmkpLFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpZm9yKGNvbnN0IHQgb2ZbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpUC5vbih0LFwibW91c2VvdmVyXCIsaCk7dGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PntQLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcInNob3duXCIpKSwhMT09PXRoaXMuX2lzSG92ZXJlZCYmdGhpcy5fbGVhdmUoKSx0aGlzLl9pc0hvdmVyZWQ9ITF9KSx0aGlzLnRpcCx0aGlzLl9pc0FuaW1hdGVkKCkpfWhpZGUoKXtpZih0aGlzLl9pc1Nob3duKCkmJiFQLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcImhpZGVcIikpLmRlZmF1bHRQcmV2ZW50ZWQpe2lmKHRoaXMuX2dldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKFppKSxcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KWZvcihjb25zdCB0IG9mW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKVAub2ZmKHQsXCJtb3VzZW92ZXJcIixoKTt0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrPSExLHRoaXMuX2FjdGl2ZVRyaWdnZXIuZm9jdXM9ITEsdGhpcy5fYWN0aXZlVHJpZ2dlci5ob3Zlcj0hMSx0aGlzLl9pc0hvdmVyZWQ9bnVsbCx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKXx8KHRoaXMuX2lzSG92ZXJlZHx8dGhpcy5fZGlzcG9zZVBvcHBlcigpLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiKSxQLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcImhpZGRlblwiKSkpfSksdGhpcy50aXAsdGhpcy5faXNBbmltYXRlZCgpKX19dXBkYXRlKCl7dGhpcy5fcG9wcGVyJiZ0aGlzLl9wb3BwZXIudXBkYXRlKCl9X2lzV2l0aENvbnRlbnQoKXtyZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKX1fZ2V0VGlwRWxlbWVudCgpe3JldHVybiB0aGlzLnRpcHx8KHRoaXMudGlwPXRoaXMuX2NyZWF0ZVRpcEVsZW1lbnQodGhpcy5fbmV3Q29udGVudHx8dGhpcy5fZ2V0Q29udGVudEZvclRlbXBsYXRlKCkpKSx0aGlzLnRpcH1fY3JlYXRlVGlwRWxlbWVudCh0KXtjb25zdCBlPXRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeSh0KS50b0h0bWwoKTtpZighZSlyZXR1cm4gbnVsbDtlLmNsYXNzTGlzdC5yZW1vdmUoSmksWmkpLGUuY2xhc3NMaXN0LmFkZChgYnMtJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWF1dG9gKTtjb25zdCBpPSh0PT57ZG97dCs9TWF0aC5mbG9vcigxZTYqTWF0aC5yYW5kb20oKSl9d2hpbGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCkpO3JldHVybiB0fSkodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKS50b1N0cmluZygpO3JldHVybiBlLnNldEF0dHJpYnV0ZShcImlkXCIsaSksdGhpcy5faXNBbmltYXRlZCgpJiZlLmNsYXNzTGlzdC5hZGQoSmkpLGV9c2V0Q29udGVudCh0KXt0aGlzLl9uZXdDb250ZW50PXQsdGhpcy5faXNTaG93bigpJiYodGhpcy5fZGlzcG9zZVBvcHBlcigpLHRoaXMuc2hvdygpKX1fZ2V0VGVtcGxhdGVGYWN0b3J5KHQpe3JldHVybiB0aGlzLl90ZW1wbGF0ZUZhY3Rvcnk/dGhpcy5fdGVtcGxhdGVGYWN0b3J5LmNoYW5nZUNvbnRlbnQodCk6dGhpcy5fdGVtcGxhdGVGYWN0b3J5PW5ldyBVaSh7Li4udGhpcy5fY29uZmlnLGNvbnRlbnQ6dCxleHRyYUNsYXNzOnRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcyl9KSx0aGlzLl90ZW1wbGF0ZUZhY3Rvcnl9X2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpe3JldHVybntcIi50b29sdGlwLWlubmVyXCI6dGhpcy5fZ2V0VGl0bGUoKX19X2dldFRpdGxlKCl7cmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy50aXRsZSl8fHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1vcmlnaW5hbC10aXRsZVwiKX1faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KHQpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UodC5kZWxlZ2F0ZVRhcmdldCx0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKX1faXNBbmltYXRlZCgpe3JldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9ufHx0aGlzLnRpcCYmdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKEppKX1faXNTaG93bigpe3JldHVybiB0aGlzLnRpcCYmdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKFppKX1fY3JlYXRlUG9wcGVyKHQpe2NvbnN0IGU9Zyh0aGlzLl9jb25maWcucGxhY2VtZW50LFt0aGlzLHQsdGhpcy5fZWxlbWVudF0pLGk9b25bZS50b1VwcGVyQ2FzZSgpXTtyZXR1cm4gcWUodGhpcy5fZWxlbWVudCx0LHRoaXMuX2dldFBvcHBlckNvbmZpZyhpKSl9X2dldE9mZnNldCgpe2NvbnN0e29mZnNldDp0fT10aGlzLl9jb25maWc7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/dC5zcGxpdChcIixcIikubWFwKCh0PT5OdW1iZXIucGFyc2VJbnQodCwxMCkpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P2U9PnQoZSx0aGlzLl9lbGVtZW50KTp0fV9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0KXtyZXR1cm4gZyh0LFt0aGlzLl9lbGVtZW50XSl9X2dldFBvcHBlckNvbmZpZyh0KXtjb25zdCBlPXtwbGFjZW1lbnQ6dCxtb2RpZmllcnM6W3tuYW1lOlwiZmxpcFwiLG9wdGlvbnM6e2ZhbGxiYWNrUGxhY2VtZW50czp0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzfX0se25hbWU6XCJvZmZzZXRcIixvcHRpb25zOntvZmZzZXQ6dGhpcy5fZ2V0T2Zmc2V0KCl9fSx7bmFtZTpcInByZXZlbnRPdmVyZmxvd1wiLG9wdGlvbnM6e2JvdW5kYXJ5OnRoaXMuX2NvbmZpZy5ib3VuZGFyeX19LHtuYW1lOlwiYXJyb3dcIixvcHRpb25zOntlbGVtZW50OmAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YH19LHtuYW1lOlwicHJlU2V0UGxhY2VtZW50XCIsZW5hYmxlZDohMCxwaGFzZTpcImJlZm9yZU1haW5cIixmbjp0PT57dGhpcy5fZ2V0VGlwRWxlbWVudCgpLnNldEF0dHJpYnV0ZShcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiLHQuc3RhdGUucGxhY2VtZW50KX19XX07cmV0dXJuey4uLmUsLi4uZyh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLFtlXSl9fV9zZXRMaXN0ZW5lcnMoKXtjb25zdCB0PXRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KFwiIFwiKTtmb3IoY29uc3QgZSBvZiB0KWlmKFwiY2xpY2tcIj09PWUpUC5vbih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwiY2xpY2tcIiksdGhpcy5fY29uZmlnLnNlbGVjdG9yLCh0PT57dGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KHQpLnRvZ2dsZSgpfSkpO2Vsc2UgaWYoXCJtYW51YWxcIiE9PWUpe2NvbnN0IHQ9ZT09PW5uP3RoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwibW91c2VlbnRlclwiKTp0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcImZvY3VzaW5cIiksaT1lPT09bm4/dGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJtb3VzZWxlYXZlXCIpOnRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwiZm9jdXNvdXRcIik7UC5vbih0aGlzLl9lbGVtZW50LHQsdGhpcy5fY29uZmlnLnNlbGVjdG9yLCh0PT57Y29uc3QgZT10aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQodCk7ZS5fYWN0aXZlVHJpZ2dlcltcImZvY3VzaW5cIj09PXQudHlwZT9zbjpubl09ITAsZS5fZW50ZXIoKX0pKSxQLm9uKHRoaXMuX2VsZW1lbnQsaSx0aGlzLl9jb25maWcuc2VsZWN0b3IsKHQ9Pntjb25zdCBlPXRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCh0KTtlLl9hY3RpdmVUcmlnZ2VyW1wiZm9jdXNvdXRcIj09PXQudHlwZT9zbjpubl09ZS5fZWxlbWVudC5jb250YWlucyh0LnJlbGF0ZWRUYXJnZXQpLGUuX2xlYXZlKCl9KSl9dGhpcy5faGlkZU1vZGFsSGFuZGxlcj0oKT0+e3RoaXMuX2VsZW1lbnQmJnRoaXMuaGlkZSgpfSxQLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdCh0biksZW4sdGhpcy5faGlkZU1vZGFsSGFuZGxlcil9X2ZpeFRpdGxlKCl7Y29uc3QgdD10aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO3QmJih0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fHRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpfHx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0KSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtYnMtb3JpZ2luYWwtdGl0bGVcIix0KSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInRpdGxlXCIpKX1fZW50ZXIoKXt0aGlzLl9pc1Nob3duKCl8fHRoaXMuX2lzSG92ZXJlZD90aGlzLl9pc0hvdmVyZWQ9ITA6KHRoaXMuX2lzSG92ZXJlZD0hMCx0aGlzLl9zZXRUaW1lb3V0KCgoKT0+e3RoaXMuX2lzSG92ZXJlZCYmdGhpcy5zaG93KCl9KSx0aGlzLl9jb25maWcuZGVsYXkuc2hvdykpfV9sZWF2ZSgpe3RoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKXx8KHRoaXMuX2lzSG92ZXJlZD0hMSx0aGlzLl9zZXRUaW1lb3V0KCgoKT0+e3RoaXMuX2lzSG92ZXJlZHx8dGhpcy5oaWRlKCl9KSx0aGlzLl9jb25maWcuZGVsYXkuaGlkZSkpfV9zZXRUaW1lb3V0KHQsZSl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpLHRoaXMuX3RpbWVvdXQ9c2V0VGltZW91dCh0LGUpfV9pc1dpdGhBY3RpdmVUcmlnZ2VyKCl7cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fYWN0aXZlVHJpZ2dlcikuaW5jbHVkZXMoITApfV9nZXRDb25maWcodCl7Y29uc3QgZT1ILmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpO2Zvcihjb25zdCB0IG9mIE9iamVjdC5rZXlzKGUpKUdpLmhhcyh0KSYmZGVsZXRlIGVbdF07cmV0dXJuIHQ9ey4uLmUsLi4uXCJvYmplY3RcIj09dHlwZW9mIHQmJnQ/dDp7fX0sdD10aGlzLl9tZXJnZUNvbmZpZ09iaih0KSx0PXRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UodCksdGhpcy5fdHlwZUNoZWNrQ29uZmlnKHQpLHR9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQuY29udGFpbmVyPSExPT09dC5jb250YWluZXI/ZG9jdW1lbnQuYm9keTpyKHQuY29udGFpbmVyKSxcIm51bWJlclwiPT10eXBlb2YgdC5kZWxheSYmKHQuZGVsYXk9e3Nob3c6dC5kZWxheSxoaWRlOnQuZGVsYXl9KSxcIm51bWJlclwiPT10eXBlb2YgdC50aXRsZSYmKHQudGl0bGU9dC50aXRsZS50b1N0cmluZygpKSxcIm51bWJlclwiPT10eXBlb2YgdC5jb250ZW50JiYodC5jb250ZW50PXQuY29udGVudC50b1N0cmluZygpKSx0fV9nZXREZWxlZ2F0ZUNvbmZpZygpe2NvbnN0IHQ9e307Zm9yKGNvbnN0W2UsaV1vZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpKXRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlXSE9PWkmJih0W2VdPWkpO3JldHVybiB0LnNlbGVjdG9yPSExLHQudHJpZ2dlcj1cIm1hbnVhbFwiLHR9X2Rpc3Bvc2VQb3BwZXIoKXt0aGlzLl9wb3BwZXImJih0aGlzLl9wb3BwZXIuZGVzdHJveSgpLHRoaXMuX3BvcHBlcj1udWxsKSx0aGlzLnRpcCYmKHRoaXMudGlwLnJlbW92ZSgpLHRoaXMudGlwPW51bGwpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPWxuLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKCl9fSkpfX1tKGxuKTtjb25zdCBjbj17Li4ubG4uRGVmYXVsdCxjb250ZW50OlwiXCIsb2Zmc2V0OlswLDhdLHBsYWNlbWVudDpcInJpZ2h0XCIsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+PC9kaXY+Jyx0cmlnZ2VyOlwiY2xpY2tcIn0saG49ey4uLmxuLkRlZmF1bHRUeXBlLGNvbnRlbnQ6XCIobnVsbHxzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbilcIn07Y2xhc3MgZG4gZXh0ZW5kcyBsbntzdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gY259c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBobn1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInBvcG92ZXJcIn1faXNXaXRoQ29udGVudCgpe3JldHVybiB0aGlzLl9nZXRUaXRsZSgpfHx0aGlzLl9nZXRDb250ZW50KCl9X2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpe3JldHVybntcIi5wb3BvdmVyLWhlYWRlclwiOnRoaXMuX2dldFRpdGxlKCksXCIucG9wb3Zlci1ib2R5XCI6dGhpcy5fZ2V0Q29udGVudCgpfX1fZ2V0Q29udGVudCgpe3JldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudCl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGU9ZG4uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19KSl9fW0oZG4pO2NvbnN0IHVuPVwiY2xpY2suYnMuc2Nyb2xsc3B5XCIsZm49XCJhY3RpdmVcIixwbj1cIltocmVmXVwiLG1uPXtvZmZzZXQ6bnVsbCxyb290TWFyZ2luOlwiMHB4IDBweCAtMjUlXCIsc21vb3RoU2Nyb2xsOiExLHRhcmdldDpudWxsLHRocmVzaG9sZDpbLjEsLjUsMV19LGduPXtvZmZzZXQ6XCIobnVtYmVyfG51bGwpXCIscm9vdE1hcmdpbjpcInN0cmluZ1wiLHNtb290aFNjcm9sbDpcImJvb2xlYW5cIix0YXJnZXQ6XCJlbGVtZW50XCIsdGhyZXNob2xkOlwiYXJyYXlcIn07Y2xhc3MgX24gZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl90YXJnZXRMaW5rcz1uZXcgTWFwLHRoaXMuX29ic2VydmFibGVTZWN0aW9ucz1uZXcgTWFwLHRoaXMuX3Jvb3RFbGVtZW50PVwidmlzaWJsZVwiPT09Z2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50KS5vdmVyZmxvd1k/bnVsbDp0aGlzLl9lbGVtZW50LHRoaXMuX2FjdGl2ZVRhcmdldD1udWxsLHRoaXMuX29ic2VydmVyPW51bGwsdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhPXt2aXNpYmxlRW50cnlUb3A6MCxwYXJlbnRTY3JvbGxUb3A6MH0sdGhpcy5yZWZyZXNoKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIG1ufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gZ259c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJzY3JvbGxzcHlcIn1yZWZyZXNoKCl7dGhpcy5faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpLHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCksdGhpcy5fb2JzZXJ2ZXI/dGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOnRoaXMuX29ic2VydmVyPXRoaXMuX2dldE5ld09ic2VydmVyKCk7Zm9yKGNvbnN0IHQgb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKXRoaXMuX29ic2VydmVyLm9ic2VydmUodCl9ZGlzcG9zZSgpe3RoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKSxzdXBlci5kaXNwb3NlKCl9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQudGFyZ2V0PXIodC50YXJnZXQpfHxkb2N1bWVudC5ib2R5LHQucm9vdE1hcmdpbj10Lm9mZnNldD9gJHt0Lm9mZnNldH1weCAwcHggLTMwJWA6dC5yb290TWFyZ2luLFwic3RyaW5nXCI9PXR5cGVvZiB0LnRocmVzaG9sZCYmKHQudGhyZXNob2xkPXQudGhyZXNob2xkLnNwbGl0KFwiLFwiKS5tYXAoKHQ9Pk51bWJlci5wYXJzZUZsb2F0KHQpKSkpLHR9X21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCl7dGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCYmKFAub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQsdW4pLFAub24odGhpcy5fY29uZmlnLnRhcmdldCx1bixwbiwodD0+e2NvbnN0IGU9dGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldCh0LnRhcmdldC5oYXNoKTtpZihlKXt0LnByZXZlbnREZWZhdWx0KCk7Y29uc3QgaT10aGlzLl9yb290RWxlbWVudHx8d2luZG93LG49ZS5vZmZzZXRUb3AtdGhpcy5fZWxlbWVudC5vZmZzZXRUb3A7aWYoaS5zY3JvbGxUbylyZXR1cm4gdm9pZCBpLnNjcm9sbFRvKHt0b3A6bixiZWhhdmlvcjpcInNtb290aFwifSk7aS5zY3JvbGxUb3A9bn19KSkpfV9nZXROZXdPYnNlcnZlcigpe2NvbnN0IHQ9e3Jvb3Q6dGhpcy5fcm9vdEVsZW1lbnQsdGhyZXNob2xkOnRoaXMuX2NvbmZpZy50aHJlc2hvbGQscm9vdE1hcmdpbjp0aGlzLl9jb25maWcucm9vdE1hcmdpbn07cmV0dXJuIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigodD0+dGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayh0KSksdCl9X29ic2VydmVyQ2FsbGJhY2sodCl7Y29uc3QgZT10PT50aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke3QudGFyZ2V0LmlkfWApLGk9dD0+e3RoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3A9dC50YXJnZXQub2Zmc2V0VG9wLHRoaXMuX3Byb2Nlc3MoZSh0KSl9LG49KHRoaXMuX3Jvb3RFbGVtZW50fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnNjcm9sbFRvcCxzPW4+PXRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3A7dGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcD1uO2Zvcihjb25zdCBvIG9mIHQpe2lmKCFvLmlzSW50ZXJzZWN0aW5nKXt0aGlzLl9hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKGUobykpO2NvbnRpbnVlfWNvbnN0IHQ9by50YXJnZXQub2Zmc2V0VG9wPj10aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wO2lmKHMmJnQpe2lmKGkobyksIW4pcmV0dXJufWVsc2Ugc3x8dHx8aShvKX19X2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKXt0aGlzLl90YXJnZXRMaW5rcz1uZXcgTWFwLHRoaXMuX29ic2VydmFibGVTZWN0aW9ucz1uZXcgTWFwO2NvbnN0IHQ9ei5maW5kKHBuLHRoaXMuX2NvbmZpZy50YXJnZXQpO2Zvcihjb25zdCBlIG9mIHQpe2lmKCFlLmhhc2h8fGwoZSkpY29udGludWU7Y29uc3QgdD16LmZpbmRPbmUoZGVjb2RlVVJJKGUuaGFzaCksdGhpcy5fZWxlbWVudCk7YSh0KSYmKHRoaXMuX3RhcmdldExpbmtzLnNldChkZWNvZGVVUkkoZS5oYXNoKSxlKSx0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGUuaGFzaCx0KSl9fV9wcm9jZXNzKHQpe3RoaXMuX2FjdGl2ZVRhcmdldCE9PXQmJih0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRoaXMuX2NvbmZpZy50YXJnZXQpLHRoaXMuX2FjdGl2ZVRhcmdldD10LHQuY2xhc3NMaXN0LmFkZChmbiksdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHQpLFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwiYWN0aXZhdGUuYnMuc2Nyb2xsc3B5XCIse3JlbGF0ZWRUYXJnZXQ6dH0pKX1fYWN0aXZhdGVQYXJlbnRzKHQpe2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24taXRlbVwiKSl6LmZpbmRPbmUoXCIuZHJvcGRvd24tdG9nZ2xlXCIsdC5jbG9zZXN0KFwiLmRyb3Bkb3duXCIpKS5jbGFzc0xpc3QuYWRkKGZuKTtlbHNlIGZvcihjb25zdCBlIG9mIHoucGFyZW50cyh0LFwiLm5hdiwgLmxpc3QtZ3JvdXBcIikpZm9yKGNvbnN0IHQgb2Ygei5wcmV2KGUsXCIubmF2LWxpbmssIC5uYXYtaXRlbSA+IC5uYXYtbGluaywgLmxpc3QtZ3JvdXAtaXRlbVwiKSl0LmNsYXNzTGlzdC5hZGQoZm4pfV9jbGVhckFjdGl2ZUNsYXNzKHQpe3QuY2xhc3NMaXN0LnJlbW92ZShmbik7Y29uc3QgZT16LmZpbmQoXCJbaHJlZl0uYWN0aXZlXCIsdCk7Zm9yKGNvbnN0IHQgb2YgZSl0LmNsYXNzTGlzdC5yZW1vdmUoZm4pfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPV9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XXx8dC5zdGFydHNXaXRoKFwiX1wiKXx8XCJjb25zdHJ1Y3RvclwiPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKCl9fSkpfX1QLm9uKHdpbmRvdyxcImxvYWQuYnMuc2Nyb2xsc3B5LmRhdGEtYXBpXCIsKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKCdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nKSlfbi5nZXRPckNyZWF0ZUluc3RhbmNlKHQpfSkpLG0oX24pO2NvbnN0IGJuPVwiQXJyb3dMZWZ0XCIsdm49XCJBcnJvd1JpZ2h0XCIseW49XCJBcnJvd1VwXCIsd249XCJBcnJvd0Rvd25cIixBbj1cImFjdGl2ZVwiLEVuPVwiZmFkZVwiLFRuPVwic2hvd1wiLENuPSdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nLE9uPWAubmF2LWxpbms6bm90KC5kcm9wZG93bi10b2dnbGUpLCAubGlzdC1ncm91cC1pdGVtOm5vdCguZHJvcGRvd24tdG9nZ2xlKSwgW3JvbGU9XCJ0YWJcIl06bm90KC5kcm9wZG93bi10b2dnbGUpLCAke0NufWA7Y2xhc3MgeG4gZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQpe3N1cGVyKHQpLHRoaXMuX3BhcmVudD10aGlzLl9lbGVtZW50LmNsb3Nlc3QoJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT1cInRhYmxpc3RcIl0nKSx0aGlzLl9wYXJlbnQmJih0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsdGhpcy5fZ2V0Q2hpbGRyZW4oKSksUC5vbih0aGlzLl9lbGVtZW50LFwia2V5ZG93bi5icy50YWJcIiwodD0+dGhpcy5fa2V5ZG93bih0KSkpKX1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInRhYlwifXNob3coKXtjb25zdCB0PXRoaXMuX2VsZW1lbnQ7aWYodGhpcy5fZWxlbUlzQWN0aXZlKHQpKXJldHVybjtjb25zdCBlPXRoaXMuX2dldEFjdGl2ZUVsZW0oKSxpPWU/UC50cmlnZ2VyKGUsXCJoaWRlLmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0OnR9KTpudWxsO1AudHJpZ2dlcih0LFwic2hvdy5icy50YWJcIix7cmVsYXRlZFRhcmdldDplfSkuZGVmYXVsdFByZXZlbnRlZHx8aSYmaS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5fZGVhY3RpdmF0ZShlLHQpLHRoaXMuX2FjdGl2YXRlKHQsZSkpfV9hY3RpdmF0ZSh0LGUpe3QmJih0LmNsYXNzTGlzdC5hZGQoQW4pLHRoaXMuX2FjdGl2YXRlKHouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KSksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PntcInRhYlwiPT09dC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpPyh0LnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCEwKSx0aGlzLl90b2dnbGVEcm9wRG93bih0LCEwKSxQLnRyaWdnZXIodCxcInNob3duLmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0OmV9KSk6dC5jbGFzc0xpc3QuYWRkKFRuKX0pLHQsdC5jbGFzc0xpc3QuY29udGFpbnMoRW4pKSl9X2RlYWN0aXZhdGUodCxlKXt0JiYodC5jbGFzc0xpc3QucmVtb3ZlKEFuKSx0LmJsdXIoKSx0aGlzLl9kZWFjdGl2YXRlKHouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KSksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PntcInRhYlwiPT09dC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpPyh0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwhMSksdC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIiksdGhpcy5fdG9nZ2xlRHJvcERvd24odCwhMSksUC50cmlnZ2VyKHQsXCJoaWRkZW4uYnMudGFiXCIse3JlbGF0ZWRUYXJnZXQ6ZX0pKTp0LmNsYXNzTGlzdC5yZW1vdmUoVG4pfSksdCx0LmNsYXNzTGlzdC5jb250YWlucyhFbikpKX1fa2V5ZG93bih0KXtpZighW2JuLHZuLHluLHduXS5pbmNsdWRlcyh0LmtleSkpcmV0dXJuO3Quc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IGU9W3ZuLHduXS5pbmNsdWRlcyh0LmtleSksaT1iKHRoaXMuX2dldENoaWxkcmVuKCkuZmlsdGVyKCh0PT4hbCh0KSkpLHQudGFyZ2V0LGUsITApO2kmJihpLmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiEwfSkseG4uZ2V0T3JDcmVhdGVJbnN0YW5jZShpKS5zaG93KCkpfV9nZXRDaGlsZHJlbigpe3JldHVybiB6LmZpbmQoT24sdGhpcy5fcGFyZW50KX1fZ2V0QWN0aXZlRWxlbSgpe3JldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoKHQ9PnRoaXMuX2VsZW1Jc0FjdGl2ZSh0KSkpfHxudWxsfV9zZXRJbml0aWFsQXR0cmlidXRlcyh0LGUpe3RoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHQsXCJyb2xlXCIsXCJ0YWJsaXN0XCIpO2Zvcihjb25zdCB0IG9mIGUpdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKHQpfV9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQodCl7dD10aGlzLl9nZXRJbm5lckVsZW1lbnQodCk7Y29uc3QgZT10aGlzLl9lbGVtSXNBY3RpdmUodCksaT10aGlzLl9nZXRPdXRlckVsZW1lbnQodCk7dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsZSksaSE9PXQmJnRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGksXCJyb2xlXCIsXCJwcmVzZW50YXRpb25cIiksZXx8dC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIiksdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModCxcInJvbGVcIixcInRhYlwiKSx0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwodCl9X3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbCh0KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KTtlJiYodGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZSxcInJvbGVcIixcInRhYnBhbmVsXCIpLHQuaWQmJnRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGUsXCJhcmlhLWxhYmVsbGVkYnlcIixgJHt0LmlkfWApKX1fdG9nZ2xlRHJvcERvd24odCxlKXtjb25zdCBpPXRoaXMuX2dldE91dGVyRWxlbWVudCh0KTtpZighaS5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93blwiKSlyZXR1cm47Y29uc3Qgbj0odCxuKT0+e2NvbnN0IHM9ei5maW5kT25lKHQsaSk7cyYmcy5jbGFzc0xpc3QudG9nZ2xlKG4sZSl9O24oXCIuZHJvcGRvd24tdG9nZ2xlXCIsQW4pLG4oXCIuZHJvcGRvd24tbWVudVwiLFRuKSxpLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixlKX1fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModCxlLGkpe3QuaGFzQXR0cmlidXRlKGUpfHx0LnNldEF0dHJpYnV0ZShlLGkpfV9lbGVtSXNBY3RpdmUodCl7cmV0dXJuIHQuY2xhc3NMaXN0LmNvbnRhaW5zKEFuKX1fZ2V0SW5uZXJFbGVtZW50KHQpe3JldHVybiB0Lm1hdGNoZXMoT24pP3Q6ei5maW5kT25lKE9uLHQpfV9nZXRPdXRlckVsZW1lbnQodCl7cmV0dXJuIHQuY2xvc2VzdChcIi5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbVwiKXx8dH1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT14bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdfHx0LnN0YXJ0c1dpdGgoXCJfXCIpfHxcImNvbnN0cnVjdG9yXCI9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19KSl9fVAub24oZG9jdW1lbnQsXCJjbGljay5icy50YWJcIixDbiwoZnVuY3Rpb24odCl7W1wiQVwiLFwiQVJFQVwiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZ0LnByZXZlbnREZWZhdWx0KCksbCh0aGlzKXx8eG4uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KCl9KSksUC5vbih3aW5kb3csXCJsb2FkLmJzLnRhYlwiLCgoKT0+e2Zvcihjb25zdCB0IG9mIHouZmluZCgnLmFjdGl2ZVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgLmFjdGl2ZVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC5hY3RpdmVbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJykpeG4uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KX0pKSxtKHhuKTtjb25zdCBrbj1cImhpZGVcIixMbj1cInNob3dcIixTbj1cInNob3dpbmdcIixEbj17YW5pbWF0aW9uOlwiYm9vbGVhblwiLGF1dG9oaWRlOlwiYm9vbGVhblwiLGRlbGF5OlwibnVtYmVyXCJ9LEluPXthbmltYXRpb246ITAsYXV0b2hpZGU6ITAsZGVsYXk6NWUzfTtjbGFzcyBObiBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX3RpbWVvdXQ9bnVsbCx0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uPSExLHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb249ITEsdGhpcy5fc2V0TGlzdGVuZXJzKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIElufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gRG59c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJ0b2FzdFwifXNob3coKXtQLnRyaWdnZXIodGhpcy5fZWxlbWVudCxcInNob3cuYnMudG9hc3RcIikuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2NsZWFyVGltZW91dCgpLHRoaXMuX2NvbmZpZy5hbmltYXRpb24mJnRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZhZGVcIiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGtuKSxkKHRoaXMuX2VsZW1lbnQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChMbixTbiksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoU24pLFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwic2hvd24uYnMudG9hc3RcIiksdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKX0pLHRoaXMuX2VsZW1lbnQsdGhpcy5fY29uZmlnLmFuaW1hdGlvbikpfWhpZGUoKXt0aGlzLmlzU2hvd24oKSYmKFAudHJpZ2dlcih0aGlzLl9lbGVtZW50LFwiaGlkZS5icy50b2FzdFwiKS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKFNuKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFNuLExuKSxQLnRyaWdnZXIodGhpcy5fZWxlbWVudCxcImhpZGRlbi5icy50b2FzdFwiKX0pLHRoaXMuX2VsZW1lbnQsdGhpcy5fY29uZmlnLmFuaW1hdGlvbikpKX1kaXNwb3NlKCl7dGhpcy5fY2xlYXJUaW1lb3V0KCksdGhpcy5pc1Nob3duKCkmJnRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShMbiksc3VwZXIuZGlzcG9zZSgpfWlzU2hvd24oKXtyZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoTG4pfV9tYXliZVNjaGVkdWxlSGlkZSgpe3RoaXMuX2NvbmZpZy5hdXRvaGlkZSYmKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb258fHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb258fCh0aGlzLl90aW1lb3V0PXNldFRpbWVvdXQoKCgpPT57dGhpcy5oaWRlKCl9KSx0aGlzLl9jb25maWcuZGVsYXkpKSl9X29uSW50ZXJhY3Rpb24odCxlKXtzd2l0Y2godC50eXBlKXtjYXNlXCJtb3VzZW92ZXJcIjpjYXNlXCJtb3VzZW91dFwiOnRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb249ZTticmVhaztjYXNlXCJmb2N1c2luXCI6Y2FzZVwiZm9jdXNvdXRcIjp0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uPWV9aWYoZSlyZXR1cm4gdm9pZCB0aGlzLl9jbGVhclRpbWVvdXQoKTtjb25zdCBpPXQucmVsYXRlZFRhcmdldDt0aGlzLl9lbGVtZW50PT09aXx8dGhpcy5fZWxlbWVudC5jb250YWlucyhpKXx8dGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKX1fc2V0TGlzdGVuZXJzKCl7UC5vbih0aGlzLl9lbGVtZW50LFwibW91c2VvdmVyLmJzLnRvYXN0XCIsKHQ9PnRoaXMuX29uSW50ZXJhY3Rpb24odCwhMCkpKSxQLm9uKHRoaXMuX2VsZW1lbnQsXCJtb3VzZW91dC5icy50b2FzdFwiLCh0PT50aGlzLl9vbkludGVyYWN0aW9uKHQsITEpKSksUC5vbih0aGlzLl9lbGVtZW50LFwiZm9jdXNpbi5icy50b2FzdFwiLCh0PT50aGlzLl9vbkludGVyYWN0aW9uKHQsITApKSksUC5vbih0aGlzLl9lbGVtZW50LFwiZm9jdXNvdXQuYnMudG9hc3RcIiwodD0+dGhpcy5fb25JbnRlcmFjdGlvbih0LCExKSkpfV9jbGVhclRpbWVvdXQoKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCksdGhpcy5fdGltZW91dD1udWxsfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPU5uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKHRoaXMpfX0pKX19cmV0dXJuIFIoTm4pLG0oTm4pLHtBbGVydDpxLEJ1dHRvbjpLLENhcm91c2VsOnJ0LENvbGxhcHNlOmZ0LERyb3Bkb3duOmNpLE1vZGFsOk5pLE9mZmNhbnZhczp6aSxQb3BvdmVyOmRuLFNjcm9sbFNweTpfbixUYWI6eG4sVG9hc3Q6Tm4sVG9vbHRpcDpsbn19KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib290c3RyYXAuYnVuZGxlLm1pbi5qcy5tYXAiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkFPUz10KCk6ZS5BT1M9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobyl7aWYobltvXSlyZXR1cm4gbltvXS5leHBvcnRzO3ZhciBpPW5bb109e2V4cG9ydHM6e30saWQ6byxsb2FkZWQ6ITF9O3JldHVybiBlW29dLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLHQpLGkubG9hZGVkPSEwLGkuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5wPVwiZGlzdC9cIix0KDApfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBpPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LHI9bigxKSxhPShvKHIpLG4oNikpLHU9byhhKSxjPW4oNykscz1vKGMpLGY9big4KSxkPW8oZiksbD1uKDkpLHA9byhsKSxtPW4oMTApLGI9byhtKSx2PW4oMTEpLHk9byh2KSxnPW4oMTQpLGg9byhnKSx3PVtdLGs9ITEseD17b2Zmc2V0OjEyMCxkZWxheTowLGVhc2luZzpcImVhc2VcIixkdXJhdGlvbjo0MDAsZGlzYWJsZTohMSxvbmNlOiExLHN0YXJ0RXZlbnQ6XCJET01Db250ZW50TG9hZGVkXCIsdGhyb3R0bGVEZWxheTo5OSxkZWJvdW5jZURlbGF5OjUwLGRpc2FibGVNdXRhdGlvbk9ic2VydmVyOiExfSxqPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtpZihlJiYoaz0hMCksaylyZXR1cm4gdz0oMCx5LmRlZmF1bHQpKHcseCksKDAsYi5kZWZhdWx0KSh3LHgub25jZSksd30sTz1mdW5jdGlvbigpe3c9KDAsaC5kZWZhdWx0KSgpLGooKX0sTT1mdW5jdGlvbigpe3cuZm9yRWFjaChmdW5jdGlvbihlLHQpe2Uubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvc1wiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIil9KX0sUz1mdW5jdGlvbihlKXtyZXR1cm4gZT09PSEwfHxcIm1vYmlsZVwiPT09ZSYmcC5kZWZhdWx0Lm1vYmlsZSgpfHxcInBob25lXCI9PT1lJiZwLmRlZmF1bHQucGhvbmUoKXx8XCJ0YWJsZXRcIj09PWUmJnAuZGVmYXVsdC50YWJsZXQoKXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpPT09ITB9LF89ZnVuY3Rpb24oZSl7eD1pKHgsZSksdz0oMCxoLmRlZmF1bHQpKCk7dmFyIHQ9ZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2I7cmV0dXJuIFMoeC5kaXNhYmxlKXx8dD9NKCk6KHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXJ8fGQuZGVmYXVsdC5pc1N1cHBvcnRlZCgpfHwoY29uc29sZS5pbmZvKCdcXG4gICAgICBhb3M6IE11dGF0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIsXFxuICAgICAgY29kZSBtdXRhdGlvbnMgb2JzZXJ2aW5nIGhhcyBiZWVuIGRpc2FibGVkLlxcbiAgICAgIFlvdSBtYXkgaGF2ZSB0byBjYWxsIFwicmVmcmVzaEhhcmQoKVwiIGJ5IHlvdXJzZWxmLlxcbiAgICAnKSx4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyPSEwKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIix4LmVhc2luZyksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZHVyYXRpb25cIix4LmR1cmF0aW9uKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiLHguZGVsYXkpLFwiRE9NQ29udGVudExvYWRlZFwiPT09eC5zdGFydEV2ZW50JiZbXCJjb21wbGV0ZVwiLFwiaW50ZXJhY3RpdmVcIl0uaW5kZXhPZihkb2N1bWVudC5yZWFkeVN0YXRlKT4tMT9qKCEwKTpcImxvYWRcIj09PXguc3RhcnRFdmVudD93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih4LnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtqKCEwKX0pOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoeC5zdGFydEV2ZW50LGZ1bmN0aW9uKCl7aighMCl9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCgwLHMuZGVmYXVsdCkoaix4LmRlYm91bmNlRGVsYXksITApKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsKDAscy5kZWZhdWx0KShqLHguZGVib3VuY2VEZWxheSwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKDAsdS5kZWZhdWx0KShmdW5jdGlvbigpeygwLGIuZGVmYXVsdCkodyx4Lm9uY2UpfSx4LnRocm90dGxlRGVsYXkpKSx4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyfHxkLmRlZmF1bHQucmVhZHkoXCJbZGF0YS1hb3NdXCIsTyksdyl9O2UuZXhwb3J0cz17aW5pdDpfLHJlZnJlc2g6aixyZWZyZXNoSGFyZDpPfX0sZnVuY3Rpb24oZSx0KXt9LCwsLCxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBvKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLGs9dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBrPWUsaD1zZXRUaW1lb3V0KGYsdCksTT9vKGUpOmd9ZnVuY3Rpb24gYShlKXt2YXIgbj1lLXcsbz1lLWssaT10LW47cmV0dXJuIFM/aihpLHktbyk6aX1mdW5jdGlvbiBjKGUpe3ZhciBuPWUtdyxvPWUtaztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxTJiZvPj15fWZ1bmN0aW9uIGYoKXt2YXIgZT1PKCk7cmV0dXJuIGMoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChmLGEoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxfJiZiP28oZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxrPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChPKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1PKCksbj1jKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihTKXJldHVybiBoPXNldFRpbWVvdXQoZix0KSxvKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KGYsdCkpLGd9dmFyIGIsdix5LGcsaCx3LGs9MCxNPSExLFM9ITEsXz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3Iocyk7cmV0dXJuIHQ9dSh0KXx8MCxpKG4pJiYoTT0hIW4ubGVhZGluZyxTPVwibWF4V2FpdFwiaW4gbix5PVM/eCh1KG4ubWF4V2FpdCl8fDAsdCk6eSxfPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOl8pLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlLHQsbyl7dmFyIHI9ITAsYT0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3Iocyk7cmV0dXJuIGkobykmJihyPVwibGVhZGluZ1wiaW4gbz8hIW8ubGVhZGluZzpyLGE9XCJ0cmFpbGluZ1wiaW4gbz8hIW8udHJhaWxpbmc6YSksbihlLHQse2xlYWRpbmc6cixtYXhXYWl0OnQsdHJhaWxpbmc6YX0pfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSkpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuXCJzeW1ib2xcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl8fHIoZSkmJmsuY2FsbChlKT09ZH1mdW5jdGlvbiB1KGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKGEoZSkpcmV0dXJuIGY7aWYoaShlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1pKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGwsXCJcIik7dmFyIG49bS50ZXN0KGUpO3JldHVybiBufHxiLnRlc3QoZSk/dihlLnNsaWNlKDIpLG4/Mjo4KTpwLnRlc3QoZSk/ZjorZX12YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxzPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLGY9TmFOLGQ9XCJbb2JqZWN0IFN5bWJvbF1cIixsPS9eXFxzK3xcXHMrJC9nLHA9L15bLStdMHhbMC05YS1mXSskL2ksbT0vXjBiWzAxXSskL2ksYj0vXjBvWzAtN10rJC9pLHY9cGFyc2VJbnQseT1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpjKHQpKSYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQsZz1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjpjKHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsaD15fHxnfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksdz1PYmplY3QucHJvdG90eXBlLGs9dy50b1N0cmluZyx4PU1hdGgubWF4LGo9TWF0aC5taW4sTz1mdW5jdGlvbigpe3JldHVybiBoLkRhdGUubm93KCl9O2UuZXhwb3J0cz1vfSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBpKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLE89dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBPPWUsaD1zZXRUaW1lb3V0KGYsdCksTT9pKGUpOmd9ZnVuY3Rpb24gdShlKXt2YXIgbj1lLXcsbz1lLU8saT10LW47cmV0dXJuIFM/eChpLHktbyk6aX1mdW5jdGlvbiBzKGUpe3ZhciBuPWUtdyxvPWUtTztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxTJiZvPj15fWZ1bmN0aW9uIGYoKXt2YXIgZT1qKCk7cmV0dXJuIHMoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChmLHUoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxfJiZiP2koZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxPPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChqKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1qKCksbj1zKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihTKXJldHVybiBoPXNldFRpbWVvdXQoZix0KSxpKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KGYsdCkpLGd9dmFyIGIsdix5LGcsaCx3LE89MCxNPSExLFM9ITEsXz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoYyk7cmV0dXJuIHQ9YSh0KXx8MCxvKG4pJiYoTT0hIW4ubGVhZGluZyxTPVwibWF4V2FpdFwiaW4gbix5PVM/ayhhKG4ubWF4V2FpdCl8fDAsdCk6eSxfPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOl8pLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiBpKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKSl9ZnVuY3Rpb24gcihlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKXx8aShlKSYmdy5jYWxsKGUpPT1mfWZ1bmN0aW9uIGEoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYocihlKSlyZXR1cm4gcztpZihvKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPW8odCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UoZCxcIlwiKTt2YXIgbj1wLnRlc3QoZSk7cmV0dXJuIG58fG0udGVzdChlKT9iKGUuc2xpY2UoMiksbj8yOjgpOmwudGVzdChlKT9zOitlfXZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGM9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIscz1OYU4sZj1cIltvYmplY3QgU3ltYm9sXVwiLGQ9L15cXHMrfFxccyskL2csbD0vXlstK10weFswLTlhLWZdKyQvaSxwPS9eMGJbMDFdKyQvaSxtPS9eMG9bMC03XSskL2ksYj1wYXJzZUludCx2PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOnUodCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOnUoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixnPXZ8fHl8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxoPU9iamVjdC5wcm90b3R5cGUsdz1oLnRvU3RyaW5nLGs9TWF0aC5tYXgseD1NYXRoLm1pbixqPWZ1bmN0aW9uKCl7cmV0dXJuIGcuRGF0ZS5ub3coKX07ZS5leHBvcnRzPW59KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXt2YXIgdD12b2lkIDAsbz12b2lkIDAsaT12b2lkIDA7Zm9yKHQ9MDt0PGUubGVuZ3RoO3QrPTEpe2lmKG89ZVt0XSxvLmRhdGFzZXQmJm8uZGF0YXNldC5hb3MpcmV0dXJuITA7aWYoaT1vLmNoaWxkcmVuJiZuKG8uY2hpbGRyZW4pKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIG8oKXtyZXR1cm4gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlcn1mdW5jdGlvbiBpKCl7cmV0dXJuISFvKCl9ZnVuY3Rpb24gcihlLHQpe3ZhciBuPXdpbmRvdy5kb2N1bWVudCxpPW8oKSxyPW5ldyBpKGEpO3U9dCxyLm9ic2VydmUobi5kb2N1bWVudEVsZW1lbnQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwLHJlbW92ZWROb2RlczohMH0pfWZ1bmN0aW9uIGEoZSl7ZSYmZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUuYWRkZWROb2Rlcyksbz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLnJlbW92ZWROb2RlcyksaT10LmNvbmNhdChvKTtpZihuKGkpKXJldHVybiB1KCl9KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgdT1mdW5jdGlvbigpe307dC5kZWZhdWx0PXtpc1N1cHBvcnRlZDppLHJlYWR5OnJ9fSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIG8oKXtyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhfHxcIlwifU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCkscj0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2ksYT0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSx1PS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaSxjPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7bih0aGlzLGUpfXJldHVybiBpKGUsW3trZXk6XCJwaG9uZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bygpO3JldHVybiEoIXIudGVzdChlKSYmIWEudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwibW9iaWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghdS50ZXN0KGUpJiYhYy50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJ0YWJsZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vYmlsZSgpJiYhdGhpcy5waG9uZSgpfX1dKSxlfSgpO3QuZGVmYXVsdD1uZXcgc30sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlLHQsbil7dmFyIG89ZS5ub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9uY2VcIik7dD5lLnBvc2l0aW9uP2Uubm9kZS5jbGFzc0xpc3QuYWRkKFwiYW9zLWFuaW1hdGVcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG8mJihcImZhbHNlXCI9PT1vfHwhbiYmXCJ0cnVlXCIhPT1vKSYmZS5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhb3MtYW5pbWF0ZVwiKX0sbz1mdW5jdGlvbihlLHQpe3ZhciBvPXdpbmRvdy5wYWdlWU9mZnNldCxpPXdpbmRvdy5pbm5lckhlaWdodDtlLmZvckVhY2goZnVuY3Rpb24oZSxyKXtuKGUsaStvLHQpfSl9O3QuZGVmYXVsdD1vfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMikscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUsbil7ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtaW5pdFwiKSxlLnBvc2l0aW9uPSgwLHIuZGVmYXVsdCkoZS5ub2RlLHQub2Zmc2V0KX0pLGV9O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMykscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXt2YXIgbj0wLG89MCxpPXdpbmRvdy5pbm5lckhlaWdodCxhPXtvZmZzZXQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1vZmZzZXRcIiksYW5jaG9yOmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yXCIpLGFuY2hvclBsYWNlbWVudDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnRcIil9O3N3aXRjaChhLm9mZnNldCYmIWlzTmFOKGEub2Zmc2V0KSYmKG89cGFyc2VJbnQoYS5vZmZzZXQpKSxhLmFuY2hvciYmZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcikmJihlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5hbmNob3IpWzBdKSxuPSgwLHIuZGVmYXVsdCkoZSkudG9wLGEuYW5jaG9yUGxhY2VtZW50KXtjYXNlXCJ0b3AtYm90dG9tXCI6YnJlYWs7Y2FzZVwiY2VudGVyLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwiYm90dG9tLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcInRvcC1jZW50ZXJcIjpuKz1pLzI7YnJlYWs7Y2FzZVwiYm90dG9tLWNlbnRlclwiOm4rPWkvMitlLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJjZW50ZXItY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwidG9wLXRvcFwiOm4rPWk7YnJlYWs7Y2FzZVwiYm90dG9tLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0K2k7YnJlYWs7Y2FzZVwiY2VudGVyLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0LzIraX1yZXR1cm4gYS5hbmNob3JQbGFjZW1lbnR8fGEub2Zmc2V0fHxpc05hTih0KXx8KG89dCksbitvfTt0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7ZSYmIWlzTmFOKGUub2Zmc2V0TGVmdCkmJiFpc05hTihlLm9mZnNldFRvcCk7KXQrPWUub2Zmc2V0TGVmdC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbExlZnQ6MCksbis9ZS5vZmZzZXRUb3AtKFwiQk9EWVwiIT1lLnRhZ05hbWU/ZS5zY3JvbGxUb3A6MCksZT1lLm9mZnNldFBhcmVudDtyZXR1cm57dG9wOm4sbGVmdDp0fX07dC5kZWZhdWx0PW59LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFvc11cIiksQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGUsZnVuY3Rpb24oZSl7cmV0dXJue25vZGU6ZX19KX07dC5kZWZhdWx0PW59XSl9KTsiLCIvL1ByZXZlbnQgUGFnZSBSZWxvYWQgb24gYWxsICMgbGlua3NcbnZhciBhbGxMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWY9JyMnXVwiKTtcbmZvciAodmFyIGkgPSAwOyBpIDwgYWxsTGlua3MubGVuZ3RoOyBpKyspIHtcbiAgYWxsTGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc2FibGVEZWZhdWx0QWN0aW9uLCBmYWxzZSk7XG59XG5mdW5jdGlvbiBkaXNhYmxlRGVmYXVsdEFjdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuLy8gT24gc2Nyb2xsIEFkZCBDbGFzc1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMjAwKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdwYWdlLXNjcm9sbGVkJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLXNjcm9sbGVkJyk7XG4gIH1cbn0pO1xuXG4vLyBGb290ZXIgQWRqdXN0bWVudFxuZnVuY3Rpb24gZm9vdGVyQWRqKCkge1xuICB2YXIgZm9vdGVySCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpLm9mZnNldEhlaWdodDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIikuc3R5bGUubWFyZ2luVG9wID0gXCItXCIgKyBmb290ZXJIICsgXCJweFwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGZvb3RlckggKyBcInB4XCI7XG59O1xuLy8gZm9vdGVyQWRqKCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGZvb3RlckFkaigpO1xufSk7XG5cbi8vIEFkZCByZW1vdmUgY2xhc3Mgd2hlbiB3aW5kb3cgcmVzaXplIGZpbmlzaGVkXG52YXIgJHJlc2l6ZVRpbWVyO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2luZG93LXJlc2l6aW5nXCIpKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwid2luZG93LXJlc2l6aW5nXCIpO1xuICB9XG4gIGNsZWFyVGltZW91dCgkcmVzaXplVGltZXIpO1xuICAkcmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJ3aW5kb3ctcmVzaXppbmdcIik7XG4gIH0sIDI1MCk7XG59KTtcblxuLy8gT24gTG9hZCBQYWdlIFZpc2libGVcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInBhZ2UtbG9hZGVkXCIpO1xufSk7XG4iXX0=
