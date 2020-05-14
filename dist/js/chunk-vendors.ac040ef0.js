(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-vendors'], {
  '0049': function (t, e, n) {
    const r = n('65ee').IteratorPrototype; const i = n('6756'); const o = n('8d23'); const a = n('77da'); const s = n('ca70'); const l = function () { return this; }; t.exports = function (t, e, n) { const c = `${e} Iterator`; return t.prototype = i(r, { next: o(1, n) }), a(t, c, !1, !0), s[c] = l, t; };
  },
  '00ee': function (t, e, n) { const r = n('b622'); const i = r('toStringTag'); const o = {}; o[i] = 'z', t.exports = String(o) === '[object z]'; },
  '0209': function (t, e, n) { const r = n('db8f'); const i = Function.toString; typeof r.inspectSource !== 'function' && (r.inspectSource = function (t) { return i.call(t); }), t.exports = r.inspectSource; },
  '0366': function (t, e, n) { const r = n('1c0b'); t.exports = function (t, e, n) { if (r(t), void 0 === e) return t; switch (n) { case 0: return function () { return t.call(e); }; case 1: return function (n) { return t.call(e, n); }; case 2: return function (n, r) { return t.call(e, n, r); }; case 3: return function (n, r, i) { return t.call(e, n, r, i); }; } return function () { return t.apply(e, arguments); }; }; },
  '0368': function (t, e, n) { const r = n('a714'); t.exports = !r((() => Object.defineProperty({}, 1, { get() { return 7; } })[1] != 7)); },
  '0538': function (t, e, n) {
    const r = n('1c0b'); const i = n('861d'); const o = [].slice; const a = {}; const s = function (t, e, n) { if (!(e in a)) { for (var r = [], i = 0; i < e; i++)r[i] = `a[${i}]`; a[e] = Function('C,a', `return new C(${r.join(',')})`); } return a[e](t, n); }; t.exports = Function.bind || function (t) { const e = r(this); const n = o.call(arguments, 1); var a = function () { const r = n.concat(o.call(arguments)); return this instanceof a ? s(e, r.length, r) : e.apply(t, r); }; return i(e.prototype) && (a.prototype = e.prototype), a; };
  },
  '057f': function (t, e, n) { const r = n('fc6a'); const i = n('241c').f; const o = {}.toString; const a = typeof window === 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []; const s = function (t) { try { return i(t); } catch (e) { return a.slice(); } }; t.exports.f = function (t) { return a && o.call(t) == '[object Window]' ? s(t) : i(r(t)); }; },
  '06cf': function (t, e, n) { const r = n('83ab'); const i = n('d1e7'); const o = n('5c6c'); const a = n('fc6a'); const s = n('c04e'); const l = n('5135'); const c = n('0cfb'); const u = Object.getOwnPropertyDescriptor; e.f = r ? u : function (t, e) { if (t = a(t), e = s(e, !0), c) try { return u(t, e); } catch (n) {} if (l(t, e)) return o(!i.f.call(t, e), t[e]); }; },
  '0761': function (t, e, n) { const r = n('d0c8'); const i = n('caad'); const o = n('09d1'); const a = n('4dd8'); const s = n('c35a'); const l = n('cf9e'); const c = function (t, e) { this.stopped = t, this.result = e; }; const u = t.exports = function (t, e, n, u, f) { let d; let h; let p; let v; let b; let m; let y; const g = a(e, n, u ? 2 : 1); if (f)d = t; else { if (h = s(t), typeof h !== 'function') throw TypeError('Target is not iterable'); if (i(h)) { for (p = 0, v = o(t.length); v > p; p++) if (b = u ? g(r(y = t[p])[0], y[1]) : g(t[p]), b && b instanceof c) return b; return new c(!1); }d = h.call(t); }m = d.next; while (!(y = m.call(d)).done) if (b = l(d, g, y.value, u), typeof b === 'object' && b && b instanceof c) return b; return new c(!1); }; u.stop = function (t) { return new c(!0, t); }; },
  '0828': function (t, e, n) { const r = n('0f33'); const i = n('db8f'); (t.exports = function (t, e) { return i[t] || (i[t] = void 0 !== e ? e : {}); })('versions', []).push({ version: '3.6.5', mode: r ? 'pure' : 'global', copyright: '© 2020 Denis Pushkarev (zloirock.ru)' }); },
  '09d1': function (t, e, n) { const r = n('59c2'); const i = Math.min; t.exports = function (t) { return t > 0 ? i(r(t), 9007199254740991) : 0; }; },
  '09e4': function (t, e, n) { (function (e) { const n = function (t) { return t && t.Math == Math && t; }; t.exports = n(typeof globalThis === 'object' && globalThis) || n(typeof window === 'object' && window) || n(typeof self === 'object' && self) || n(typeof e === 'object' && e) || Function('return this')(); }).call(this, n('c8ba')); },
  '0cfb': function (t, e, n) { const r = n('83ab'); const i = n('d039'); const o = n('cc12'); t.exports = !r && !i((() => Object.defineProperty(o('div'), 'a', { get() { return 7; } }).a != 7)); },
  '0d05': function (t, e, n) { const r = n('09e4'); const i = n('0209'); const o = r.WeakMap; t.exports = typeof o === 'function' && /native code/.test(i(o)); },
  '0d3b': function (t, e, n) { const r = n('d039'); const i = n('b622'); const o = n('c430'); const a = i('iterator'); t.exports = !r((() => { const t = new URL('b?a=1&b=2&c=3', 'http://a'); const e = t.searchParams; let n = ''; return t.pathname = 'c%20d', e.forEach(((t, r) => { e.delete('b'), n += r + t; })), o && !t.toJSON || !e.sort || t.href !== 'http://a/c%20d?a=1&c=3' || e.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !e[a] || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' || new URL('http://тест').host !== 'xn--e1aybc' || new URL('http://a#б').hash !== '#%D0%B1' || n !== 'a1c3' || new URL('http://x', void 0).host !== 'x'; })); },
  '0e17': function (t, e, n) {
    const r = {}.propertyIsEnumerable; const i = Object.getOwnPropertyDescriptor; const o = i && !r.call({ 1: 2 }, 1); e.f = o ? function (t) { const e = i(this, t); return !!e && e.enumerable; } : r;
  },
  '0ee6': function (t, e, n) { const r = n('d1d7'); const i = n('09e4'); const o = function (t) { return typeof t === 'function' ? t : void 0; }; t.exports = function (t, e) { return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e]; }; },
  '0f33': function (t, e) { t.exports = !1; },
  '0fd9': function (t, e, n) { let r; let i; let o; const a = n('09e4'); const s = n('a714'); const l = n('d714'); const c = n('4dd8'); const u = n('68d9'); const f = n('c4dd'); const d = n('68e0'); const h = a.location; let p = a.setImmediate; let v = a.clearImmediate; const b = a.process; const m = a.MessageChannel; const y = a.Dispatch; let g = 0; const w = {}; const O = 'onreadystatechange'; const S = function (t) { if (w.hasOwnProperty(t)) { const e = w[t]; delete w[t], e(); } }; const x = function (t) { return function () { S(t); }; }; const T = function (t) { S(t.data); }; const k = function (t) { a.postMessage(`${t}`, `${h.protocol}//${h.host}`); }; p && v || (p = function (t) { const e = []; let n = 1; while (arguments.length > n)e.push(arguments[n++]); return w[++g] = function () { (typeof t === 'function' ? t : Function(t)).apply(void 0, e); }, r(g), g; }, v = function (t) { delete w[t]; }, l(b) == 'process' ? r = function (t) { b.nextTick(x(t)); } : y && y.now ? r = function (t) { y.now(x(t)); } : m && !d ? (i = new m(), o = i.port2, i.port1.onmessage = T, r = c(o.postMessage, o, 1)) : !a.addEventListener || typeof postMessage !== 'function' || a.importScripts || s(k) || h.protocol === 'file:' ? r = O in f('script') ? function (t) { u.appendChild(f('script'))[O] = function () { u.removeChild(this), S(t); }; } : function (t) { setTimeout(x(t), 0); } : (r = k, a.addEventListener('message', T, !1))), t.exports = { set: p, clear: v }; },
  '14c3': function (t, e, n) { const r = n('c6b6'); const i = n('9263'); t.exports = function (t, e) { const n = t.exec; if (typeof n === 'function') { const o = n.call(t, e); if (typeof o !== 'object') throw TypeError('RegExp exec method returned something other than an Object or null'); return o; } if (r(t) !== 'RegExp') throw TypeError('RegExp#exec called on incompatible receiver'); return i.call(t, e); }; },
  '189d': function (t, e) { t.exports = function (t) { try { return { error: !1, value: t() }; } catch (e) { return { error: !0, value: e }; } }; },
  '199f': function (t, e, n) { const r = n('09e4'); const i = n('2439').f; const o = n('3261'); const a = n('7024'); const s = n('79ae'); const l = n('2d0a'); const c = n('25d0'); t.exports = function (t, e) { let n; let u; let f; let d; let h; let p; const v = t.target; const b = t.global; const m = t.stat; if (u = b ? r : m ? r[v] || s(v, {}) : (r[v] || {}).prototype, u) for (f in e) { if (h = e[f], t.noTargetGet ? (p = i(u, f), d = p && p.value) : d = u[f], n = c(b ? f : v + (m ? '.' : '#') + f, t.forced), !n && void 0 !== d) { if (typeof h === typeof d) continue; l(h, d); }(t.sham || d && d.sham) && o(h, 'sham', !0), a(u, f, h, t); } }; },
  '19aa': function (t, e) { t.exports = function (t, e, n) { if (!(t instanceof e)) throw TypeError(`Incorrect ${n ? `${n} ` : ''}invocation`); return t; }; },
  '1be4': function (t, e, n) { const r = n('d066'); t.exports = r('document', 'documentElement'); },
  '1c0b': function (t, e) { t.exports = function (t) { if (typeof t !== 'function') throw TypeError(`${String(t)} is not a function`); return t; }; },
  '1c7e': function (t, e, n) { const r = n('b622'); const i = r('iterator'); let o = !1; try { let a = 0; const s = { next() { return { done: !!a++ }; }, return() { o = !0; } }; s[i] = function () { return this; }, Array.from(s, (() => { throw 2; })); } catch (l) {}t.exports = function (t, e) { if (!e && !o) return !1; let n = !1; try { const r = {}; r[i] = function () { return { next() { return { done: n = !0 }; } }; }, t(r); } catch (l) {} return n; }; },
  '1cdc': function (t, e, n) { const r = n('342f'); t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r); },
  '1d80': function (t, e) { t.exports = function (t) { if (void 0 == t) throw TypeError(`Can't call method on ${t}`); return t; }; },
  '1da1': function (t, e, n) {
    n.d(e, 'a', (() => i)); n('d3b7'), n('e6cf'); function r(t, e, n, r, i, o, a) { try { var s = t[o](a); var l = s.value; } catch (c) { return void n(c); }s.done ? e(l) : Promise.resolve(l).then(r, i); } function i(t) { return function () { const e = this; const n = arguments; return new Promise((((i, o) => { const a = t.apply(e, n); function s(t) { r(a, i, o, s, l, 'next', t); } function l(t) { r(a, i, o, s, l, 'throw', t); }s(void 0); }))); }; }
  },
  '1fc1': function (t, e) { t.exports = {}; },
  '20a7': function (t, e, n) { const r = n('a714'); t.exports = !!Object.getOwnPropertySymbols && !r((() => !String(Symbol()))); },
  2266(t, e, n) { const r = n('825a'); const i = n('e95a'); const o = n('50c4'); const a = n('0366'); const s = n('35a1'); const l = n('9bdd'); const c = function (t, e) { this.stopped = t, this.result = e; }; const u = t.exports = function (t, e, n, u, f) { let d; let h; let p; let v; let b; let m; let y; const g = a(e, n, u ? 2 : 1); if (f)d = t; else { if (h = s(t), typeof h !== 'function') throw TypeError('Target is not iterable'); if (i(h)) { for (p = 0, v = o(t.length); v > p; p++) if (b = u ? g(r(y = t[p])[0], y[1]) : g(t[p]), b && b instanceof c) return b; return new c(!1); }d = h.call(t); }m = d.next; while (!(y = m.call(d)).done) if (b = l(d, g, y.value, u), typeof b === 'object' && b && b instanceof c) return b; return new c(!1); }; u.stop = function (t) { return new c(!0, t); }; },
  '23cb': function (t, e, n) { const r = n('a691'); const i = Math.max; const o = Math.min; t.exports = function (t, e) { const n = r(t); return n < 0 ? i(n + e, 0) : o(n, e); }; },
  '23e7': function (t, e, n) { const r = n('da84'); const i = n('06cf').f; const o = n('9112'); const a = n('6eeb'); const s = n('ce4e'); const l = n('e893'); const c = n('94ca'); t.exports = function (t, e) { let n; let u; let f; let d; let h; let p; const v = t.target; const b = t.global; const m = t.stat; if (u = b ? r : m ? r[v] || s(v, {}) : (r[v] || {}).prototype, u) for (f in e) { if (h = e[f], t.noTargetGet ? (p = i(u, f), d = p && p.value) : d = u[f], n = c(b ? f : v + (m ? '.' : '#') + f, t.forced), !n && void 0 !== d) { if (typeof h === typeof d) continue; l(h, d); }(t.sham || d && d.sham) && o(h, 'sham', !0), a(u, f, h, t); } }; },
  '241c': function (t, e, n) { const r = n('ca84'); const i = n('7839'); const o = i.concat('length', 'prototype'); e.f = Object.getOwnPropertyNames || function (t) { return r(t, o); }; },
  2439(t, e, n) { const r = n('0368'); const i = n('0e17'); const o = n('8d23'); const a = n('a84f'); const s = n('fe68'); const l = n('7f34'); const c = n('bf45'); const u = Object.getOwnPropertyDescriptor; e.f = r ? u : function (t, e) { if (t = a(t), e = s(e, !0), c) try { return u(t, e); } catch (n) {} if (l(t, e)) return o(!i.f.call(t, e), t[e]); }; },
  '25d0': function (t, e, n) { const r = n('a714'); const i = /#|\.prototype\./; const o = function (t, e) { const n = s[a(t)]; return n == c || n != l && (typeof e === 'function' ? r(e) : !!e); }; var a = o.normalize = function (t) { return String(t).replace(i, '.').toLowerCase(); }; var s = o.data = {}; var l = o.NATIVE = 'N'; var c = o.POLYFILL = 'P'; t.exports = o; },
  '25f0': function (t, e, n) {
    const r = n('6eeb'); const i = n('825a'); const o = n('d039'); const a = n('ad6d'); const s = 'toString'; const l = RegExp.prototype; const c = l[s]; const u = o((() => c.call({ source: 'a', flags: 'b' }) != '/a/b')); const f = c.name != s; (u || f) && r(RegExp.prototype, s, (function () { const t = i(this); const e = String(t.source); const n = t.flags; const r = String(void 0 === n && t instanceof RegExp && !('flags' in l) ? a.call(t) : n); return `/${e}/${r}`; }), { unsafe: !0 });
  },
  2626(t, e, n) {
    const r = n('d066'); const i = n('9bf2'); const o = n('b622'); const a = n('83ab'); const s = o('species'); t.exports = function (t) { const e = r(t); const n = i.f; a && e && !e[s] && n(e, s, { configurable: !0, get() { return this; } }); };
  },
  '262e': function (t, e, n) {
    function r(t, e) { return r = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t; }, r(t, e); } function i(t, e) { if (typeof e !== 'function' && e !== null) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && r(t, e); }n.d(e, 'a', (() => i));
  },
  2877(t, e, n) {
    function r(t, e, n, r, i, o, a, s) { let l; const c = typeof t === 'function' ? t.options : t; if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = `data-v-${o}`), a ? (l = function (t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || typeof __VUE_SSR_CONTEXT__ === 'undefined' || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a); }, c._ssrRegister = l) : i && (l = s ? function () { i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot); } : i), l) if (c.functional) { c._injectStyles = l; const u = c.render; c.render = function (t, e) { return l.call(e), u(t, e); }; } else { const f = c.beforeCreate; c.beforeCreate = f ? [].concat(f, l) : [l]; } return { exports: t, options: c }; }n.d(e, 'a', (() => r));
  },
  '2b0e': function (t, e, n) {
    n.r(e), function (t) {
    /*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
      const n = Object.freeze({}); function r(t) { return void 0 === t || t === null; } function i(t) { return void 0 !== t && t !== null; } function o(t) { return !0 === t; } function a(t) { return !1 === t; } function s(t) { return typeof t === 'string' || typeof t === 'number' || typeof t === 'symbol' || typeof t === 'boolean'; } function l(t) { return t !== null && typeof t === 'object'; } const c = Object.prototype.toString; function u(t) { return c.call(t) === '[object Object]'; } function f(t) { return c.call(t) === '[object RegExp]'; } function d(t) { const e = parseFloat(String(t)); return e >= 0 && Math.floor(e) === e && isFinite(t); } function h(t) { return i(t) && typeof t.then === 'function' && typeof t.catch === 'function'; } function p(t) { return t == null ? '' : Array.isArray(t) || u(t) && t.toString === c ? JSON.stringify(t, null, 2) : String(t); } function v(t) { const e = parseFloat(t); return isNaN(e) ? t : e; } function b(t, e) { for (var n = Object.create(null), r = t.split(','), i = 0; i < r.length; i++)n[r[i]] = !0; return e ? function (t) { return n[t.toLowerCase()]; } : function (t) { return n[t]; }; }b('slot,component', !0); const m = b('key,ref,slot,slot-scope,is'); function y(t, e) { if (t.length) { const n = t.indexOf(e); if (n > -1) return t.splice(n, 1); } } const g = Object.prototype.hasOwnProperty; function w(t, e) { return g.call(t, e); } function O(t) { const e = Object.create(null); return function (n) { const r = e[n]; return r || (e[n] = t(n)); }; } const S = /-(\w)/g; const x = O(((t) => t.replace(S, ((t, e) => (e ? e.toUpperCase() : ''))))); const T = O(((t) => t.charAt(0).toUpperCase() + t.slice(1))); const k = /\B([A-Z])/g; const P = O(((t) => t.replace(k, '-$1').toLowerCase())); function j(t, e) { function n(n) { const r = arguments.length; return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e); } return n._length = t.length, n; } function C(t, e) { return t.bind(e); } const _ = Function.prototype.bind ? C : j; function B(t, e) { e = e || 0; let n = t.length - e; const r = new Array(n); while (n--)r[n] = t[n + e]; return r; } function D(t, e) { for (const n in e)t[n] = e[n]; return t; } function E(t) { for (var e = {}, n = 0; n < t.length; n++)t[n] && D(e, t[n]); return e; } function $(t, e, n) {} const A = function (t, e, n) { return !1; }; const I = function (t) { return t; }; function F(t, e) { if (t === e) return !0; const n = l(t); const r = l(e); if (!n || !r) return !n && !r && String(t) === String(e); try { const i = Array.isArray(t); const o = Array.isArray(e); if (i && o) return t.length === e.length && t.every(((t, n) => F(t, e[n]))); if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime(); if (i || o) return !1; const a = Object.keys(t); const s = Object.keys(e); return a.length === s.length && a.every(((n) => F(t[n], e[n]))); } catch (c) { return !1; } } function L(t, e) { for (let n = 0; n < t.length; n++) if (F(t[n], e)) return n; return -1; } function R(t) { let e = !1; return function () { e || (e = !0, t.apply(this, arguments)); }; } const M = 'data-server-rendered'; const N = ['component', 'directive', 'filter']; const V = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch']; const z = {
        optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: A, isReservedAttr: A, isUnknownElement: A, getTagNamespace: $, parsePlatformTagName: I, mustUseProp: A, async: !0, _lifecycleHooks: V,
      }; const H = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/; function G(t) { const e = (`${t}`).charCodeAt(0); return e === 36 || e === 95; } function U(t, e, n, r) {
        Object.defineProperty(t, e, {
          value: n, enumerable: !!r, writable: !0, configurable: !0,
        });
      } const W = new RegExp(`[^${H.source}.$_\\d]`); function q(t) { if (!W.test(t)) { const e = t.split('.'); return function (t) { for (let n = 0; n < e.length; n++) { if (!t) return; t = t[e[n]]; } return t; }; } } let Y; const K = '__proto__' in {}; const X = typeof window !== 'undefined'; const J = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform; const Z = J && WXEnvironment.platform.toLowerCase(); const Q = X && window.navigator.userAgent.toLowerCase(); const tt = Q && /msie|trident/.test(Q); const et = Q && Q.indexOf('msie 9.0') > 0; const nt = Q && Q.indexOf('edge/') > 0; const rt = (Q && Q.indexOf('android'), Q && /iphone|ipad|ipod|ios/.test(Q) || Z === 'ios'); const it = (Q && /chrome\/\d+/.test(Q), Q && /phantomjs/.test(Q), Q && Q.match(/firefox\/(\d+)/)); const ot = {}.watch; let at = !1; if (X) try { const st = {}; Object.defineProperty(st, 'passive', { get() { at = !0; } }), window.addEventListener('test-passive', null, st); } catch (xa) {} const lt = function () { return void 0 === Y && (Y = !X && !J && typeof t !== 'undefined' && (t.process && t.process.env.VUE_ENV === 'server')), Y; }; const ct = X && window.__VUE_DEVTOOLS_GLOBAL_HOOK__; function ut(t) { return typeof t === 'function' && /native code/.test(t.toString()); } let ft; const dt = typeof Symbol !== 'undefined' && ut(Symbol) && typeof Reflect !== 'undefined' && ut(Reflect.ownKeys); ft = typeof Set !== 'undefined' && ut(Set) ? Set : (function () { function t() { this.set = Object.create(null); } return t.prototype.has = function (t) { return !0 === this.set[t]; }, t.prototype.add = function (t) { this.set[t] = !0; }, t.prototype.clear = function () { this.set = Object.create(null); }, t; }()); const ht = $; let pt = 0; const vt = function () { this.id = pt++, this.subs = []; }; vt.prototype.addSub = function (t) { this.subs.push(t); }, vt.prototype.removeSub = function (t) { y(this.subs, t); }, vt.prototype.depend = function () { vt.target && vt.target.addDep(this); }, vt.prototype.notify = function () { const t = this.subs.slice(); for (let e = 0, n = t.length; e < n; e++)t[e].update(); }, vt.target = null; const bt = []; function mt(t) { bt.push(t), vt.target = t; } function yt() { bt.pop(), vt.target = bt[bt.length - 1]; } const gt = function (t, e, n, r, i, o, a, s) { this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1; }; const wt = { child: { configurable: !0 } }; wt.child.get = function () { return this.componentInstance; }, Object.defineProperties(gt.prototype, wt); const Ot = function (t) { void 0 === t && (t = ''); const e = new gt(); return e.text = t, e.isComment = !0, e; }; function St(t) { return new gt(void 0, void 0, void 0, String(t)); } function xt(t) { const e = new gt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory); return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e; } const Tt = Array.prototype; const kt = Object.create(Tt); const Pt = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']; Pt.forEach(((t) => { const e = Tt[t]; U(kt, t, (function () { const n = []; let r = arguments.length; while (r--)n[r] = arguments[r]; let i; const o = e.apply(this, n); const a = this.__ob__; switch (t) { case 'push': case 'unshift': i = n; break; case 'splice': i = n.slice(2); break; } return i && a.observeArray(i), a.dep.notify(), o; })); })); const jt = Object.getOwnPropertyNames(kt); let Ct = !0; function _t(t) { Ct = t; } const Bt = function (t) { this.value = t, this.dep = new vt(), this.vmCount = 0, U(t, '__ob__', this), Array.isArray(t) ? (K ? Dt(t, kt) : Et(t, kt, jt), this.observeArray(t)) : this.walk(t); }; function Dt(t, e) { t.__proto__ = e; } function Et(t, e, n) { for (let r = 0, i = n.length; r < i; r++) { const o = n[r]; U(t, o, e[o]); } } function $t(t, e) { let n; if (l(t) && !(t instanceof gt)) return w(t, '__ob__') && t.__ob__ instanceof Bt ? n = t.__ob__ : Ct && !lt() && (Array.isArray(t) || u(t)) && Object.isExtensible(t) && !t._isVue && (n = new Bt(t)), e && n && n.vmCount++, n; } function At(t, e, n, r, i) {
        const o = new vt(); const
          a = Object.getOwnPropertyDescriptor(t, e); if (!a || !1 !== a.configurable) {
          const s = a && a.get; const l = a && a.set; s && !l || arguments.length !== 2 || (n = t[e]); let c = !i && $t(n); Object.defineProperty(t, e, {
            enumerable: !0, configurable: !0, get() { const e = s ? s.call(t) : n; return vt.target && (o.depend(), c && (c.dep.depend(), Array.isArray(e) && Lt(e))), e; }, set(e) { const r = s ? s.call(t) : n; e === r || e !== e && r !== r || s && !l || (l ? l.call(t, e) : n = e, c = !i && $t(e), o.notify()); },
          });
        }
      } function It(t, e, n) { if (Array.isArray(t) && d(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n; if (e in t && !(e in Object.prototype)) return t[e] = n, n; const r = t.__ob__; return t._isVue || r && r.vmCount ? n : r ? (At(r.value, e, n), r.dep.notify(), n) : (t[e] = n, n); } function Ft(t, e) { if (Array.isArray(t) && d(e))t.splice(e, 1); else { const n = t.__ob__; t._isVue || n && n.vmCount || w(t, e) && (delete t[e], n && n.dep.notify()); } } function Lt(t) { for (let e = void 0, n = 0, r = t.length; n < r; n++)e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && Lt(e); }Bt.prototype.walk = function (t) { for (let e = Object.keys(t), n = 0; n < e.length; n++)At(t, e[n]); }, Bt.prototype.observeArray = function (t) { for (let e = 0, n = t.length; e < n; e++)$t(t[e]); }; const Rt = z.optionMergeStrategies; function Mt(t, e) { if (!e) return t; for (var n, r, i, o = dt ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < o.length; a++)n = o[a], n !== '__ob__' && (r = t[n], i = e[n], w(t, n) ? r !== i && u(r) && u(i) && Mt(r, i) : It(t, n, i)); return t; } function Nt(t, e, n) { return n ? function () { const r = typeof e === 'function' ? e.call(n, n) : e; const i = typeof t === 'function' ? t.call(n, n) : t; return r ? Mt(r, i) : i; } : e ? t ? function () { return Mt(typeof e === 'function' ? e.call(this, this) : e, typeof t === 'function' ? t.call(this, this) : t); } : e : t; } function Vt(t, e) { const n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t; return n ? zt(n) : n; } function zt(t) { for (var e = [], n = 0; n < t.length; n++)e.indexOf(t[n]) === -1 && e.push(t[n]); return e; } function Ht(t, e, n, r) { const i = Object.create(t || null); return e ? D(i, e) : i; }Rt.data = function (t, e, n) { return n ? Nt(t, e, n) : e && typeof e !== 'function' ? t : Nt(t, e); }, V.forEach(((t) => { Rt[t] = Vt; })), N.forEach(((t) => { Rt[`${t}s`] = Ht; })), Rt.watch = function (t, e, n, r) { if (t === ot && (t = void 0), e === ot && (e = void 0), !e) return Object.create(t || null); if (!t) return e; const i = {}; for (const o in D(i, t), e) { let a = i[o]; const s = e[o]; a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]; } return i; }, Rt.props = Rt.methods = Rt.inject = Rt.computed = function (t, e, n, r) { if (!t) return e; const i = Object.create(null); return D(i, t), e && D(i, e), i; }, Rt.provide = Nt; const Gt = function (t, e) { return void 0 === e ? t : e; }; function Ut(t, e) { const n = t.props; if (n) { let r; let i; let o; const a = {}; if (Array.isArray(n)) { r = n.length; while (r--)i = n[r], typeof i === 'string' && (o = x(i), a[o] = { type: null }); } else if (u(n)) for (const s in n)i = n[s], o = x(s), a[o] = u(i) ? i : { type: i }; else 0; t.props = a; } } function Wt(t, e) { const n = t.inject; if (n) { const r = t.inject = {}; if (Array.isArray(n)) for (let i = 0; i < n.length; i++)r[n[i]] = { from: n[i] }; else if (u(n)) for (const o in n) { const a = n[o]; r[o] = u(a) ? D({ from: o }, a) : { from: a }; } else 0; } } function qt(t) { const e = t.directives; if (e) for (const n in e) { const r = e[n]; typeof r === 'function' && (e[n] = { bind: r, update: r }); } } function Yt(t, e, n) { if (typeof e === 'function' && (e = e.options), Ut(e, n), Wt(e, n), qt(e), !e._base && (e.extends && (t = Yt(t, e.extends, n)), e.mixins)) for (let r = 0, i = e.mixins.length; r < i; r++)t = Yt(t, e.mixins[r], n); let o; const a = {}; for (o in t)s(o); for (o in e)w(t, o) || s(o); function s(r) { const i = Rt[r] || Gt; a[r] = i(t[r], e[r], n, r); } return a; } function Kt(t, e, n, r) { if (typeof n === 'string') { const i = t[e]; if (w(i, n)) return i[n]; const o = x(n); if (w(i, o)) return i[o]; const a = T(o); if (w(i, a)) return i[a]; const s = i[n] || i[o] || i[a]; return s; } } function Xt(t, e, n, r) { const i = e[t]; const o = !w(n, t); let a = n[t]; const s = te(Boolean, i.type); if (s > -1) if (o && !w(i, 'default'))a = !1; else if (a === '' || a === P(t)) { const l = te(String, i.type); (l < 0 || s < l) && (a = !0); } if (void 0 === a) { a = Jt(r, i, t); const c = Ct; _t(!0), $t(a), _t(c); } return a; } function Jt(t, e, n) { if (w(e, 'default')) { const r = e.default; return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : typeof r === 'function' && Zt(e.type) !== 'Function' ? r.call(t) : r; } } function Zt(t) { const e = t && t.toString().match(/^\s*function (\w+)/); return e ? e[1] : ''; } function Qt(t, e) { return Zt(t) === Zt(e); } function te(t, e) { if (!Array.isArray(e)) return Qt(e, t) ? 0 : -1; for (let n = 0, r = e.length; n < r; n++) if (Qt(e[n], t)) return n; return -1; } function ee(t, e, n) { mt(); try { if (e) { let r = e; while (r = r.$parent) { const i = r.$options.errorCaptured; if (i) for (let o = 0; o < i.length; o++) try { const a = !1 === i[o].call(r, t, e, n); if (a) return; } catch (xa) { re(xa, r, 'errorCaptured hook'); } } }re(t, e, n); } finally { yt(); } } function ne(t, e, n, r, i) { let o; try { o = n ? t.apply(e, n) : t.call(e), o && !o._isVue && h(o) && !o._handled && (o.catch(((t) => ee(t, r, `${i} (Promise/async)`))), o._handled = !0); } catch (xa) { ee(xa, r, i); } return o; } function re(t, e, n) { if (z.errorHandler) try { return z.errorHandler.call(null, t, e, n); } catch (xa) { xa !== t && ie(xa, null, 'config.errorHandler'); }ie(t, e, n); } function ie(t, e, n) { if (!X && !J || typeof console === 'undefined') throw t; console.error(t); } let oe; let ae = !1; const se = []; let le = !1; function ce() { le = !1; const t = se.slice(0); se.length = 0; for (let e = 0; e < t.length; e++)t[e](); } if (typeof Promise !== 'undefined' && ut(Promise)) { const ue = Promise.resolve(); oe = function () { ue.then(ce), rt && setTimeout($); }, ae = !0; } else if (tt || typeof MutationObserver === 'undefined' || !ut(MutationObserver) && MutationObserver.toString() !== '[object MutationObserverConstructor]')oe = typeof setImmediate !== 'undefined' && ut(setImmediate) ? function () { setImmediate(ce); } : function () { setTimeout(ce, 0); }; else { let fe = 1; const de = new MutationObserver(ce); const he = document.createTextNode(String(fe)); de.observe(he, { characterData: !0 }), oe = function () { fe = (fe + 1) % 2, he.data = String(fe); }, ae = !0; } function pe(t, e) { let n; if (se.push((() => { if (t) try { t.call(e); } catch (xa) { ee(xa, e, 'nextTick'); } else n && n(e); })), le || (le = !0, oe()), !t && typeof Promise !== 'undefined') return new Promise((((t) => { n = t; }))); } const ve = new ft(); function be(t) { me(t, ve), ve.clear(); } function me(t, e) { let n; let r; const i = Array.isArray(t); if (!(!i && !l(t) || Object.isFrozen(t) || t instanceof gt)) { if (t.__ob__) { const o = t.__ob__.dep.id; if (e.has(o)) return; e.add(o); } if (i) { n = t.length; while (n--)me(t[n], e); } else { r = Object.keys(t), n = r.length; while (n--)me(t[r[n]], e); } } } const ye = O(((t) => {
        const e = t.charAt(0) === '&'; t = e ? t.slice(1) : t; const n = t.charAt(0) === '~'; t = n ? t.slice(1) : t; const r = t.charAt(0) === '!'; return t = r ? t.slice(1) : t, {
          name: t, once: n, capture: r, passive: e,
        };
      })); function ge(t, e) { function n() { const t = arguments; const r = n.fns; if (!Array.isArray(r)) return ne(r, null, arguments, e, 'v-on handler'); for (let i = r.slice(), o = 0; o < i.length; o++)ne(i[o], null, t, e, 'v-on handler'); } return n.fns = t, n; } function we(t, e, n, i, a, s) { let l; let c; let u; let f; for (l in t)c = t[l], u = e[l], f = ye(l), r(c) || (r(u) ? (r(c.fns) && (c = t[l] = ge(c, s)), o(f.once) && (c = t[l] = a(f.name, c, f.capture)), n(f.name, c, f.capture, f.passive, f.params)) : c !== u && (u.fns = c, t[l] = u)); for (l in e)r(t[l]) && (f = ye(l), i(f.name, e[l], f.capture)); } function Oe(t, e, n) { let a; t instanceof gt && (t = t.data.hook || (t.data.hook = {})); const s = t[e]; function l() { n.apply(this, arguments), y(a.fns, l); }r(s) ? a = ge([l]) : i(s.fns) && o(s.merged) ? (a = s, a.fns.push(l)) : a = ge([s, l]), a.merged = !0, t[e] = a; } function Se(t, e, n) { const o = e.options.props; if (!r(o)) { const a = {}; const s = t.attrs; const l = t.props; if (i(s) || i(l)) for (const c in o) { const u = P(c); xe(a, l, c, u, !0) || xe(a, s, c, u, !1); } return a; } } function xe(t, e, n, r, o) { if (i(e)) { if (w(e, n)) return t[n] = e[n], o || delete e[n], !0; if (w(e, r)) return t[n] = e[r], o || delete e[r], !0; } return !1; } function Te(t) { for (let e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t); return t; } function ke(t) { return s(t) ? [St(t)] : Array.isArray(t) ? je(t) : void 0; } function Pe(t) { return i(t) && i(t.text) && a(t.isComment); } function je(t, e) { let n; let a; let l; let c; const u = []; for (n = 0; n < t.length; n++)a = t[n], r(a) || typeof a === 'boolean' || (l = u.length - 1, c = u[l], Array.isArray(a) ? a.length > 0 && (a = je(a, `${e || ''}_${n}`), Pe(a[0]) && Pe(c) && (u[l] = St(c.text + a[0].text), a.shift()), u.push.apply(u, a)) : s(a) ? Pe(c) ? u[l] = St(c.text + a) : a !== '' && u.push(St(a)) : Pe(a) && Pe(c) ? u[l] = St(c.text + a.text) : (o(t._isVList) && i(a.tag) && r(a.key) && i(e) && (a.key = `__vlist${e}_${n}__`), u.push(a))); return u; } function Ce(t) { const e = t.$options.provide; e && (t._provided = typeof e === 'function' ? e.call(t) : e); } function _e(t) { const e = Be(t.$options.inject, t); e && (_t(!1), Object.keys(e).forEach(((n) => { At(t, n, e[n]); })), _t(!0)); } function Be(t, e) { if (t) { for (var n = Object.create(null), r = dt ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++) { const o = r[i]; if (o !== '__ob__') { const a = t[o].from; let s = e; while (s) { if (s._provided && w(s._provided, a)) { n[o] = s._provided[a]; break; }s = s.$parent; } if (!s) if ('default' in t[o]) { const l = t[o].default; n[o] = typeof l === 'function' ? l.call(e) : l; } else 0; } } return n; } } function De(t, e) { if (!t || !t.length) return {}; for (var n = {}, r = 0, i = t.length; r < i; r++) { const o = t[r]; const a = o.data; if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== e && o.fnContext !== e || !a || a.slot == null)(n.default || (n.default = [])).push(o); else { const s = a.slot; const l = n[s] || (n[s] = []); o.tag === 'template' ? l.push.apply(l, o.children || []) : l.push(o); } } for (const c in n)n[c].every(Ee) && delete n[c]; return n; } function Ee(t) { return t.isComment && !t.asyncFactory || t.text === ' '; } function $e(t, e, r) { let i; const o = Object.keys(e).length > 0; const a = t ? !!t.$stable : !o; const s = t && t.$key; if (t) { if (t._normalized) return t._normalized; if (a && r && r !== n && s === r.$key && !o && !r.$hasNormal) return r; for (const l in i = {}, t)t[l] && l[0] !== '$' && (i[l] = Ae(e, l, t[l])); } else i = {}; for (const c in e)c in i || (i[c] = Ie(e, c)); return t && Object.isExtensible(t) && (t._normalized = i), U(i, '$stable', a), U(i, '$key', s), U(i, '$hasNormal', o), i; } function Ae(t, e, n) { const r = function () { let t = arguments.length ? n.apply(null, arguments) : n({}); return t = t && typeof t === 'object' && !Array.isArray(t) ? [t] : ke(t), t && (t.length === 0 || t.length === 1 && t[0].isComment) ? void 0 : t; }; return n.proxy && Object.defineProperty(t, e, { get: r, enumerable: !0, configurable: !0 }), r; } function Ie(t, e) { return function () { return t[e]; }; } function Fe(t, e) { let n; let r; let o; let a; let s; if (Array.isArray(t) || typeof t === 'string') for (n = new Array(t.length), r = 0, o = t.length; r < o; r++)n[r] = e(t[r], r); else if (typeof t === 'number') for (n = new Array(t), r = 0; r < t; r++)n[r] = e(r + 1, r); else if (l(t)) if (dt && t[Symbol.iterator]) { n = []; const c = t[Symbol.iterator](); let u = c.next(); while (!u.done)n.push(e(u.value, n.length)), u = c.next(); } else for (a = Object.keys(t), n = new Array(a.length), r = 0, o = a.length; r < o; r++)s = a[r], n[r] = e(t[s], s, r); return i(n) || (n = []), n._isVList = !0, n; } function Le(t, e, n, r) { let i; const o = this.$scopedSlots[t]; o ? (n = n || {}, r && (n = D(D({}, r), n)), i = o(n) || e) : i = this.$slots[t] || e; const a = n && n.slot; return a ? this.$createElement('template', { slot: a }, i) : i; } function Re(t) { return Kt(this.$options, 'filters', t, !0) || I; } function Me(t, e) { return Array.isArray(t) ? t.indexOf(e) === -1 : t !== e; } function Ne(t, e, n, r, i) { const o = z.keyCodes[e] || n; return i && r && !z.keyCodes[e] ? Me(i, r) : o ? Me(o, t) : r ? P(r) !== e : void 0; } function Ve(t, e, n, r, i) { if (n) if (l(n)) { let o; Array.isArray(n) && (n = E(n)); const a = function (a) { if (a === 'class' || a === 'style' || m(a))o = t; else { const s = t.attrs && t.attrs.type; o = r || z.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {}); } const l = x(a); const c = P(a); if (!(l in o) && !(c in o) && (o[a] = n[a], i)) { const u = t.on || (t.on = {}); u[`update:${a}`] = function (t) { n[a] = t; }; } }; for (const s in n)a(s); } else;return t; } function ze(t, e) { const n = this._staticTrees || (this._staticTrees = []); let r = n[t]; return r && !e || (r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), Ge(r, `__static__${t}`, !1)), r; } function He(t, e, n) { return Ge(t, `__once__${e}${n ? `_${n}` : ''}`, !0), t; } function Ge(t, e, n) { if (Array.isArray(t)) for (let r = 0; r < t.length; r++)t[r] && typeof t[r] !== 'string' && Ue(t[r], `${e}_${r}`, n); else Ue(t, e, n); } function Ue(t, e, n) { t.isStatic = !0, t.key = e, t.isOnce = n; } function We(t, e) { if (e) if (u(e)) { const n = t.on = t.on ? D({}, t.on) : {}; for (const r in e) { const i = n[r]; const o = e[r]; n[r] = i ? [].concat(i, o) : o; } } else;return t; } function qe(t, e, n, r) { e = e || { $stable: !n }; for (let i = 0; i < t.length; i++) { const o = t[i]; Array.isArray(o) ? qe(o, e, n) : o && (o.proxy && (o.fn.proxy = !0), e[o.key] = o.fn); } return r && (e.$key = r), e; } function Ye(t, e) { for (let n = 0; n < e.length; n += 2) { const r = e[n]; typeof r === 'string' && r && (t[e[n]] = e[n + 1]); } return t; } function Ke(t, e) { return typeof t === 'string' ? e + t : t; } function Xe(t) { t._o = He, t._n = v, t._s = p, t._l = Fe, t._t = Le, t._q = F, t._i = L, t._m = ze, t._f = Re, t._k = Ne, t._b = Ve, t._v = St, t._e = Ot, t._u = qe, t._g = We, t._d = Ye, t._p = Ke; } function Je(t, e, r, i, a) { let s; const l = this; const c = a.options; w(i, '_uid') ? (s = Object.create(i), s._original = i) : (s = i, i = i._original); const u = o(c._compiled); const f = !u; this.data = t, this.props = e, this.children = r, this.parent = i, this.listeners = t.on || n, this.injections = Be(c.inject, i), this.slots = function () { return l.$slots || $e(t.scopedSlots, l.$slots = De(r, i)), l.$slots; }, Object.defineProperty(this, 'scopedSlots', { enumerable: !0, get() { return $e(t.scopedSlots, this.slots()); } }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = $e(t.scopedSlots, this.$slots)), c._scopeId ? this._c = function (t, e, n, r) { const o = fn(s, t, e, n, r, f); return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId, o.fnContext = i), o; } : this._c = function (t, e, n, r) { return fn(s, t, e, n, r, f); }; } function Ze(t, e, r, o, a) { const s = t.options; const l = {}; const c = s.props; if (i(c)) for (const u in c)l[u] = Xt(u, c, e || n); else i(r.attrs) && tn(l, r.attrs), i(r.props) && tn(l, r.props); const f = new Je(r, l, a, o, t); const d = s.render.call(null, f._c, f); if (d instanceof gt) return Qe(d, r, f.parent, s, f); if (Array.isArray(d)) { for (var h = ke(d) || [], p = new Array(h.length), v = 0; v < h.length; v++)p[v] = Qe(h[v], r, f.parent, s, f); return p; } } function Qe(t, e, n, r, i) { const o = xt(t); return o.fnContext = n, o.fnOptions = r, e.slot && ((o.data || (o.data = {})).slot = e.slot), o; } function tn(t, e) { for (const n in e)t[x(n)] = e[n]; }Xe(Je.prototype); var en = {
        init(t, e) { if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) { const n = t; en.prepatch(n, n); } else { const r = t.componentInstance = on(t, Bn); r.$mount(e ? t.elm : void 0, e); } }, prepatch(t, e) { const n = e.componentOptions; const r = e.componentInstance = t.componentInstance; In(r, n.propsData, n.listeners, e, n.children); }, insert(t) { const e = t.context; const n = t.componentInstance; n._isMounted || (n._isMounted = !0, Mn(n, 'mounted')), t.data.keepAlive && (e._isMounted ? Zn(n) : Ln(n, !0)); }, destroy(t) { const e = t.componentInstance; e._isDestroyed || (t.data.keepAlive ? Rn(e, !0) : e.$destroy()); },
      }; const nn = Object.keys(en); function rn(t, e, n, a, s) {
        if (!r(t)) {
          const c = n.$options._base; if (l(t) && (t = c.extend(t)), typeof t === 'function') {
            let u; if (r(t.cid) && (u = t, t = On(u, c), void 0 === t)) return wn(u, e, n, a, s); e = e || {}, Or(t), i(e.model) && ln(t.options, e); const f = Se(e, t, s); if (o(t.options.functional)) return Ze(t, f, e, n, a); const d = e.on; if (e.on = e.nativeOn, o(t.options.abstract)) { const h = e.slot; e = {}, h && (e.slot = h); }an(e); const p = t.options.name || s; const v = new gt(`vue-component-${t.cid}${p ? `-${p}` : ''}`, e, void 0, void 0, void 0, n, {
              Ctor: t, propsData: f, listeners: d, tag: s, children: a,
            }, u); return v;
          }
        }
      } function on(t, e) { const n = { _isComponent: !0, _parentVnode: t, parent: e }; const r = t.data.inlineTemplate; return i(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new t.componentOptions.Ctor(n); } function an(t) { for (let e = t.hook || (t.hook = {}), n = 0; n < nn.length; n++) { const r = nn[n]; const i = e[r]; const o = en[r]; i === o || i && i._merged || (e[r] = i ? sn(o, i) : o); } } function sn(t, e) { const n = function (n, r) { t(n, r), e(n, r); }; return n._merged = !0, n; } function ln(t, e) { const n = t.model && t.model.prop || 'value'; const r = t.model && t.model.event || 'input'; (e.attrs || (e.attrs = {}))[n] = e.model.value; const o = e.on || (e.on = {}); const a = o[r]; const s = e.model.callback; i(a) ? (Array.isArray(a) ? a.indexOf(s) === -1 : a !== s) && (o[r] = [s].concat(a)) : o[r] = s; } const cn = 1; const un = 2; function fn(t, e, n, r, i, a) { return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), o(a) && (i = un), dn(t, e, n, r, i); } function dn(t, e, n, r, o) { if (i(n) && i(n.__ob__)) return Ot(); if (i(n) && i(n.is) && (e = n.is), !e) return Ot(); let a; let s; let l; (Array.isArray(r) && typeof r[0] === 'function' && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), o === un ? r = ke(r) : o === cn && (r = Te(r)), typeof e === 'string') ? (s = t.$vnode && t.$vnode.ns || z.getTagNamespace(e), a = z.isReservedTag(e) ? new gt(z.parsePlatformTagName(e), n, r, void 0, void 0, t) : n && n.pre || !i(l = Kt(t.$options, 'components', e)) ? new gt(e, n, r, void 0, void 0, t) : rn(l, n, t, r, e)) : a = rn(e, n, t, r); return Array.isArray(a) ? a : i(a) ? (i(s) && hn(a, s), i(n) && pn(n), a) : Ot(); } function hn(t, e, n) { if (t.ns = e, t.tag === 'foreignObject' && (e = void 0, n = !0), i(t.children)) for (let a = 0, s = t.children.length; a < s; a++) { const l = t.children[a]; i(l.tag) && (r(l.ns) || o(n) && l.tag !== 'svg') && hn(l, e, n); } } function pn(t) { l(t.style) && be(t.style), l(t.class) && be(t.class); } function vn(t) { t._vnode = null, t._staticTrees = null; const e = t.$options; const r = t.$vnode = e._parentVnode; const i = r && r.context; t.$slots = De(e._renderChildren, i), t.$scopedSlots = n, t._c = function (e, n, r, i) { return fn(t, e, n, r, i, !1); }, t.$createElement = function (e, n, r, i) { return fn(t, e, n, r, i, !0); }; const o = r && r.data; At(t, '$attrs', o && o.attrs || n, null, !0), At(t, '$listeners', e._parentListeners || n, null, !0); } let bn; let mn = null; function yn(t) { Xe(t.prototype), t.prototype.$nextTick = function (t) { return pe(t, this); }, t.prototype._render = function () { let t; const e = this; const n = e.$options; const r = n.render; const i = n._parentVnode; i && (e.$scopedSlots = $e(i.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = i; try { mn = e, t = r.call(e._renderProxy, e.$createElement); } catch (xa) { ee(xa, e, 'render'), t = e._vnode; } finally { mn = null; } return Array.isArray(t) && t.length === 1 && (t = t[0]), t instanceof gt || (t = Ot()), t.parent = i, t; }; } function gn(t, e) { return (t.__esModule || dt && t[Symbol.toStringTag] === 'Module') && (t = t.default), l(t) ? e.extend(t) : t; } function wn(t, e, n, r, i) {
        const o = Ot(); return o.asyncFactory = t, o.asyncMeta = {
          data: e, context: n, children: r, tag: i,
        }, o;
      } function On(t, e) { if (o(t.error) && i(t.errorComp)) return t.errorComp; if (i(t.resolved)) return t.resolved; const n = mn; if (n && i(t.owners) && t.owners.indexOf(n) === -1 && t.owners.push(n), o(t.loading) && i(t.loadingComp)) return t.loadingComp; if (n && !i(t.owners)) { const a = t.owners = [n]; let s = !0; let c = null; let u = null; n.$on('hook:destroyed', (() => y(a, n))); const f = function (t) { for (let e = 0, n = a.length; e < n; e++)a[e].$forceUpdate(); t && (a.length = 0, c !== null && (clearTimeout(c), c = null), u !== null && (clearTimeout(u), u = null)); }; const d = R(((n) => { t.resolved = gn(n, e), s ? a.length = 0 : f(!0); })); const p = R(((e) => { i(t.errorComp) && (t.error = !0, f(!0)); })); const v = t(d, p); return l(v) && (h(v) ? r(t.resolved) && v.then(d, p) : h(v.component) && (v.component.then(d, p), i(v.error) && (t.errorComp = gn(v.error, e)), i(v.loading) && (t.loadingComp = gn(v.loading, e), v.delay === 0 ? t.loading = !0 : c = setTimeout((() => { c = null, r(t.resolved) && r(t.error) && (t.loading = !0, f(!1)); }), v.delay || 200)), i(v.timeout) && (u = setTimeout((() => { u = null, r(t.resolved) && p(null); }), v.timeout)))), s = !1, t.loading ? t.loadingComp : t.resolved; } } function Sn(t) { return t.isComment && t.asyncFactory; } function xn(t) { if (Array.isArray(t)) for (let e = 0; e < t.length; e++) { const n = t[e]; if (i(n) && (i(n.componentOptions) || Sn(n))) return n; } } function Tn(t) { t._events = Object.create(null), t._hasHookEvent = !1; const e = t.$options._parentListeners; e && Cn(t, e); } function kn(t, e) { bn.$on(t, e); } function Pn(t, e) { bn.$off(t, e); } function jn(t, e) { const n = bn; return function r() { const i = e.apply(null, arguments); i !== null && n.$off(t, r); }; } function Cn(t, e, n) { bn = t, we(e, n || {}, kn, Pn, jn, t), bn = void 0; } function _n(t) { const e = /^hook:/; t.prototype.$on = function (t, n) { const r = this; if (Array.isArray(t)) for (let i = 0, o = t.length; i < o; i++)r.$on(t[i], n); else (r._events[t] || (r._events[t] = [])).push(n), e.test(t) && (r._hasHookEvent = !0); return r; }, t.prototype.$once = function (t, e) { const n = this; function r() { n.$off(t, r), e.apply(n, arguments); } return r.fn = e, n.$on(t, r), n; }, t.prototype.$off = function (t, e) { const n = this; if (!arguments.length) return n._events = Object.create(null), n; if (Array.isArray(t)) { for (let r = 0, i = t.length; r < i; r++)n.$off(t[r], e); return n; } let o; const a = n._events[t]; if (!a) return n; if (!e) return n._events[t] = null, n; let s = a.length; while (s--) if (o = a[s], o === e || o.fn === e) { a.splice(s, 1); break; } return n; }, t.prototype.$emit = function (t) { const e = this; let n = e._events[t]; if (n) { n = n.length > 1 ? B(n) : n; for (let r = B(arguments, 1), i = `event handler for "${t}"`, o = 0, a = n.length; o < a; o++)ne(n[o], e, r, e, i); } return e; }; } var Bn = null; function Dn(t) { const e = Bn; return Bn = t, function () { Bn = e; }; } function En(t) { const e = t.$options; let n = e.parent; if (n && !e.abstract) { while (n.$options.abstract && n.$parent)n = n.$parent; n.$children.push(t); }t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1; } function $n(t) { t.prototype._update = function (t, e) { const n = this; const r = n.$el; const i = n._vnode; const o = Dn(n); n._vnode = t, n.$el = i ? n.__patch__(i, t) : n.__patch__(n.$el, t, e, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el); }, t.prototype.$forceUpdate = function () { const t = this; t._watcher && t._watcher.update(); }, t.prototype.$destroy = function () { const t = this; if (!t._isBeingDestroyed) { Mn(t, 'beforeDestroy'), t._isBeingDestroyed = !0; const e = t.$parent; !e || e._isBeingDestroyed || t.$options.abstract || y(e.$children, t), t._watcher && t._watcher.teardown(); let n = t._watchers.length; while (n--)t._watchers[n].teardown(); t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Mn(t, 'destroyed'), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null); } }; } function An(t, e, n) { let r; return t.$el = e, t.$options.render || (t.$options.render = Ot), Mn(t, 'beforeMount'), r = function () { t._update(t._render(), n); }, new nr(t, r, $, { before() { t._isMounted && !t._isDestroyed && Mn(t, 'beforeUpdate'); } }, !0), n = !1, t.$vnode == null && (t._isMounted = !0, Mn(t, 'mounted')), t; } function In(t, e, r, i, o) { const a = i.data.scopedSlots; const s = t.$scopedSlots; const l = !!(a && !a.$stable || s !== n && !s.$stable || a && t.$scopedSlots.$key !== a.$key); const c = !!(o || t.$options._renderChildren || l); if (t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i), t.$options._renderChildren = o, t.$attrs = i.data.attrs || n, t.$listeners = r || n, e && t.$options.props) { _t(!1); for (let u = t._props, f = t.$options._propKeys || [], d = 0; d < f.length; d++) { const h = f[d]; const p = t.$options.props; u[h] = Xt(h, p, e, t); }_t(!0), t.$options.propsData = e; }r = r || n; const v = t.$options._parentListeners; t.$options._parentListeners = r, Cn(t, r, v), c && (t.$slots = De(o, i.context), t.$forceUpdate()); } function Fn(t) { while (t && (t = t.$parent)) if (t._inactive) return !0; return !1; } function Ln(t, e) { if (e) { if (t._directInactive = !1, Fn(t)) return; } else if (t._directInactive) return; if (t._inactive || t._inactive === null) { t._inactive = !1; for (let n = 0; n < t.$children.length; n++)Ln(t.$children[n]); Mn(t, 'activated'); } } function Rn(t, e) { if ((!e || (t._directInactive = !0, !Fn(t))) && !t._inactive) { t._inactive = !0; for (let n = 0; n < t.$children.length; n++)Rn(t.$children[n]); Mn(t, 'deactivated'); } } function Mn(t, e) { mt(); const n = t.$options[e]; const r = `${e} hook`; if (n) for (let i = 0, o = n.length; i < o; i++)ne(n[i], t, null, t, r); t._hasHookEvent && t.$emit(`hook:${e}`), yt(); } const Nn = []; const Vn = []; let zn = {}; let Hn = !1; let Gn = !1; let Un = 0; function Wn() { Un = Nn.length = Vn.length = 0, zn = {}, Hn = Gn = !1; } let qn = 0; let Yn = Date.now; if (X && !tt) { const Kn = window.performance; Kn && typeof Kn.now === 'function' && Yn() > document.createEvent('Event').timeStamp && (Yn = function () { return Kn.now(); }); } function Xn() { let t; let e; for (qn = Yn(), Gn = !0, Nn.sort(((t, e) => t.id - e.id)), Un = 0; Un < Nn.length; Un++)t = Nn[Un], t.before && t.before(), e = t.id, zn[e] = null, t.run(); const n = Vn.slice(); const r = Nn.slice(); Wn(), Qn(n), Jn(r), ct && z.devtools && ct.emit('flush'); } function Jn(t) { let e = t.length; while (e--) { const n = t[e]; const r = n.vm; r._watcher === n && r._isMounted && !r._isDestroyed && Mn(r, 'updated'); } } function Zn(t) { t._inactive = !1, Vn.push(t); } function Qn(t) { for (let e = 0; e < t.length; e++)t[e]._inactive = !0, Ln(t[e], !0); } function tr(t) { const e = t.id; if (zn[e] == null) { if (zn[e] = !0, Gn) { let n = Nn.length - 1; while (n > Un && Nn[n].id > t.id)n--; Nn.splice(n + 1, 0, t); } else Nn.push(t); Hn || (Hn = !0, pe(Xn)); } } let er = 0; var nr = function (t, e, n, r, i) { this.vm = t, i && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++er, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ft(), this.newDepIds = new ft(), this.expression = '', typeof e === 'function' ? this.getter = e : (this.getter = q(e), this.getter || (this.getter = $)), this.value = this.lazy ? void 0 : this.get(); }; nr.prototype.get = function () { let t; mt(this); const e = this.vm; try { t = this.getter.call(e, e); } catch (xa) { if (!this.user) throw xa; ee(xa, e, `getter for watcher "${this.expression}"`); } finally { this.deep && be(t), yt(), this.cleanupDeps(); } return t; }, nr.prototype.addDep = function (t) { const e = t.id; this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this)); }, nr.prototype.cleanupDeps = function () { let t = this.deps.length; while (t--) { const e = this.deps[t]; this.newDepIds.has(e.id) || e.removeSub(this); } let n = this.depIds; this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0; }, nr.prototype.update = function () { this.lazy ? this.dirty = !0 : this.sync ? this.run() : tr(this); }, nr.prototype.run = function () { if (this.active) { const t = this.get(); if (t !== this.value || l(t) || this.deep) { const e = this.value; if (this.value = t, this.user) try { this.cb.call(this.vm, t, e); } catch (xa) { ee(xa, this.vm, `callback for watcher "${this.expression}"`); } else this.cb.call(this.vm, t, e); } } }, nr.prototype.evaluate = function () { this.value = this.get(), this.dirty = !1; }, nr.prototype.depend = function () { let t = this.deps.length; while (t--) this.deps[t].depend(); }, nr.prototype.teardown = function () { if (this.active) { this.vm._isBeingDestroyed || y(this.vm._watchers, this); let t = this.deps.length; while (t--) this.deps[t].removeSub(this); this.active = !1; } }; const rr = {
        enumerable: !0, configurable: !0, get: $, set: $,
      }; function ir(t, e, n) { rr.get = function () { return this[e][n]; }, rr.set = function (t) { this[e][n] = t; }, Object.defineProperty(t, n, rr); } function or(t) { t._watchers = []; const e = t.$options; e.props && ar(t, e.props), e.methods && pr(t, e.methods), e.data ? sr(t) : $t(t._data = {}, !0), e.computed && ur(t, e.computed), e.watch && e.watch !== ot && vr(t, e.watch); } function ar(t, e) { const n = t.$options.propsData || {}; const r = t._props = {}; const i = t.$options._propKeys = []; const o = !t.$parent; o || _t(!1); const a = function (o) { i.push(o); const a = Xt(o, e, n, t); At(r, o, a), o in t || ir(t, '_props', o); }; for (const s in e)a(s); _t(!0); } function sr(t) { let e = t.$options.data; e = t._data = typeof e === 'function' ? lr(e, t) : e || {}, u(e) || (e = {}); const n = Object.keys(e); const r = t.$options.props; let i = (t.$options.methods, n.length); while (i--) { const o = n[i]; 0, r && w(r, o) || G(o) || ir(t, '_data', o); }$t(e, !0); } function lr(t, e) { mt(); try { return t.call(e, e); } catch (xa) { return ee(xa, e, 'data()'), {}; } finally { yt(); } } const cr = { lazy: !0 }; function ur(t, e) { const n = t._computedWatchers = Object.create(null); const r = lt(); for (const i in e) { const o = e[i]; const a = typeof o === 'function' ? o : o.get; 0, r || (n[i] = new nr(t, a || $, $, cr)), i in t || fr(t, i, o); } } function fr(t, e, n) { const r = !lt(); typeof n === 'function' ? (rr.get = r ? dr(e) : hr(n), rr.set = $) : (rr.get = n.get ? r && !1 !== n.cache ? dr(e) : hr(n.get) : $, rr.set = n.set || $), Object.defineProperty(t, e, rr); } function dr(t) { return function () { const e = this._computedWatchers && this._computedWatchers[t]; if (e) return e.dirty && e.evaluate(), vt.target && e.depend(), e.value; }; } function hr(t) { return function () { return t.call(this, this); }; } function pr(t, e) { t.$options.props; for (const n in e)t[n] = typeof e[n] !== 'function' ? $ : _(e[n], t); } function vr(t, e) { for (const n in e) { const r = e[n]; if (Array.isArray(r)) for (let i = 0; i < r.length; i++)br(t, n, r[i]); else br(t, n, r); } } function br(t, e, n, r) { return u(n) && (r = n, n = n.handler), typeof n === 'string' && (n = t[n]), t.$watch(e, n, r); } function mr(t) { const e = { get() { return this._data; } }; const n = { get() { return this._props; } }; Object.defineProperty(t.prototype, '$data', e), Object.defineProperty(t.prototype, '$props', n), t.prototype.$set = It, t.prototype.$delete = Ft, t.prototype.$watch = function (t, e, n) { const r = this; if (u(e)) return br(r, t, e, n); n = n || {}, n.user = !0; const i = new nr(r, t, e, n); if (n.immediate) try { e.call(r, i.value); } catch (o) { ee(o, r, `callback for immediate watcher "${i.expression}"`); } return function () { i.teardown(); }; }; } let yr = 0; function gr(t) { t.prototype._init = function (t) { const e = this; e._uid = yr++, e._isVue = !0, t && t._isComponent ? wr(e, t) : e.$options = Yt(Or(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, En(e), Tn(e), vn(e), Mn(e, 'beforeCreate'), _e(e), or(e), Ce(e), Mn(e, 'created'), e.$options.el && e.$mount(e.$options.el); }; } function wr(t, e) { const n = t.$options = Object.create(t.constructor.options); const r = e._parentVnode; n.parent = e.parent, n._parentVnode = r; const i = r.componentOptions; n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns); } function Or(t) { let e = t.options; if (t.super) { const n = Or(t.super); const r = t.superOptions; if (n !== r) { t.superOptions = n; const i = Sr(t); i && D(t.extendOptions, i), e = t.options = Yt(n, t.extendOptions), e.name && (e.components[e.name] = t); } } return e; } function Sr(t) { let e; const n = t.options; const r = t.sealedOptions; for (const i in n)n[i] !== r[i] && (e || (e = {}), e[i] = n[i]); return e; } function xr(t) { this._init(t); } function Tr(t) { t.use = function (t) { const e = this._installedPlugins || (this._installedPlugins = []); if (e.indexOf(t) > -1) return this; const n = B(arguments, 1); return n.unshift(this), typeof t.install === 'function' ? t.install.apply(t, n) : typeof t === 'function' && t.apply(null, n), e.push(t), this; }; } function kr(t) { t.mixin = function (t) { return this.options = Yt(this.options, t), this; }; } function Pr(t) { t.cid = 0; let e = 1; t.extend = function (t) { t = t || {}; const n = this; const r = n.cid; const i = t._Ctor || (t._Ctor = {}); if (i[r]) return i[r]; const o = t.name || n.options.name; const a = function (t) { this._init(t); }; return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, a.options = Yt(n.options, t), a.super = n, a.options.props && jr(a), a.options.computed && Cr(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, N.forEach(((t) => { a[t] = n[t]; })), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, a.sealedOptions = D({}, a.options), i[r] = a, a; }; } function jr(t) { const e = t.options.props; for (const n in e)ir(t.prototype, '_props', n); } function Cr(t) { const e = t.options.computed; for (const n in e)fr(t.prototype, n, e[n]); } function _r(t) { N.forEach(((e) => { t[e] = function (t, n) { return n ? (e === 'component' && u(n) && (n.name = n.name || t, n = this.options._base.extend(n)), e === 'directive' && typeof n === 'function' && (n = { bind: n, update: n }), this.options[`${e}s`][t] = n, n) : this.options[`${e}s`][t]; }; })); } function Br(t) { return t && (t.Ctor.options.name || t.tag); } function Dr(t, e) { return Array.isArray(t) ? t.indexOf(e) > -1 : typeof t === 'string' ? t.split(',').indexOf(e) > -1 : !!f(t) && t.test(e); } function Er(t, e) { const n = t.cache; const r = t.keys; const i = t._vnode; for (const o in n) { const a = n[o]; if (a) { const s = Br(a.componentOptions); s && !e(s) && $r(n, o, r, i); } } } function $r(t, e, n, r) { const i = t[e]; !i || r && i.tag === r.tag || i.componentInstance.$destroy(), t[e] = null, y(n, e); }gr(xr), mr(xr), _n(xr), $n(xr), yn(xr); const Ar = [String, RegExp, Array]; const Ir = {
        name: 'keep-alive', abstract: !0, props: { include: Ar, exclude: Ar, max: [String, Number] }, created() { this.cache = Object.create(null), this.keys = []; }, destroyed() { for (const t in this.cache)$r(this.cache, t, this.keys); }, mounted() { const t = this; this.$watch('include', ((e) => { Er(t, ((t) => Dr(e, t))); })), this.$watch('exclude', ((e) => { Er(t, ((t) => !Dr(e, t))); })); }, render() { const t = this.$slots.default; const e = xn(t); const n = e && e.componentOptions; if (n) { const r = Br(n); const i = this; const o = i.include; const a = i.exclude; if (o && (!r || !Dr(o, r)) || a && r && Dr(a, r)) return e; const s = this; const l = s.cache; const c = s.keys; const u = e.key == null ? n.Ctor.cid + (n.tag ? `::${n.tag}` : '') : e.key; l[u] ? (e.componentInstance = l[u].componentInstance, y(c, u), c.push(u)) : (l[u] = e, c.push(u), this.max && c.length > parseInt(this.max) && $r(l, c[0], c, this._vnode)), e.data.keepAlive = !0; } return e || t && t[0]; },
      }; const Fr = { KeepAlive: Ir }; function Lr(t) {
        const e = { get() { return z; } }; Object.defineProperty(t, 'config', e), t.util = {
          warn: ht, extend: D, mergeOptions: Yt, defineReactive: At,
        }, t.set = It, t.delete = Ft, t.nextTick = pe, t.observable = function (t) { return $t(t), t; }, t.options = Object.create(null), N.forEach(((e) => { t.options[`${e}s`] = Object.create(null); })), t.options._base = t, D(t.options.components, Fr), Tr(t), kr(t), Pr(t), _r(t);
      }Lr(xr), Object.defineProperty(xr.prototype, '$isServer', { get: lt }), Object.defineProperty(xr.prototype, '$ssrContext', { get() { return this.$vnode && this.$vnode.ssrContext; } }), Object.defineProperty(xr, 'FunctionalRenderContext', { value: Je }), xr.version = '2.6.11'; const Rr = b('style,class'); const Mr = b('input,textarea,option,select,progress'); const Nr = function (t, e, n) { return n === 'value' && Mr(t) && e !== 'button' || n === 'selected' && t === 'option' || n === 'checked' && t === 'input' || n === 'muted' && t === 'video'; }; const Vr = b('contenteditable,draggable,spellcheck'); const zr = b('events,caret,typing,plaintext-only'); const Hr = function (t, e) { return Yr(e) || e === 'false' ? 'false' : t === 'contenteditable' && zr(e) ? e : 'true'; }; const Gr = b('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible'); const Ur = 'http://www.w3.org/1999/xlink'; const Wr = function (t) { return t.charAt(5) === ':' && t.slice(0, 5) === 'xlink'; }; const qr = function (t) { return Wr(t) ? t.slice(6, t.length) : ''; }; var Yr = function (t) { return t == null || !1 === t; }; function Kr(t) { let e = t.data; let n = t; let r = t; while (i(r.componentInstance))r = r.componentInstance._vnode, r && r.data && (e = Xr(r.data, e)); while (i(n = n.parent))n && n.data && (e = Xr(e, n.data)); return Jr(e.staticClass, e.class); } function Xr(t, e) { return { staticClass: Zr(t.staticClass, e.staticClass), class: i(t.class) ? [t.class, e.class] : e.class }; } function Jr(t, e) { return i(t) || i(e) ? Zr(t, Qr(e)) : ''; } function Zr(t, e) { return t ? e ? `${t} ${e}` : t : e || ''; } function Qr(t) { return Array.isArray(t) ? ti(t) : l(t) ? ei(t) : typeof t === 'string' ? t : ''; } function ti(t) { for (var e, n = '', r = 0, o = t.length; r < o; r++)i(e = Qr(t[r])) && e !== '' && (n && (n += ' '), n += e); return n; } function ei(t) { let e = ''; for (const n in t)t[n] && (e && (e += ' '), e += n); return e; } const ni = { svg: 'http://www.w3.org/2000/svg', math: 'http://www.w3.org/1998/Math/MathML' }; const ri = b('html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot'); const ii = b('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', !0); const oi = function (t) { return ri(t) || ii(t); }; function ai(t) { return ii(t) ? 'svg' : t === 'math' ? 'math' : void 0; } const si = Object.create(null); function li(t) { if (!X) return !0; if (oi(t)) return !1; if (t = t.toLowerCase(), si[t] != null) return si[t]; const e = document.createElement(t); return t.indexOf('-') > -1 ? si[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : si[t] = /HTMLUnknownElement/.test(e.toString()); } const ci = b('text,number,password,search,email,tel,url'); function ui(t) { if (typeof t === 'string') { const e = document.querySelector(t); return e || document.createElement('div'); } return t; } function fi(t, e) { const n = document.createElement(t); return t !== 'select' || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute('multiple', 'multiple'), n; } function di(t, e) { return document.createElementNS(ni[t], e); } function hi(t) { return document.createTextNode(t); } function pi(t) { return document.createComment(t); } function vi(t, e, n) { t.insertBefore(e, n); } function bi(t, e) { t.removeChild(e); } function mi(t, e) { t.appendChild(e); } function yi(t) { return t.parentNode; } function gi(t) { return t.nextSibling; } function wi(t) { return t.tagName; } function Oi(t, e) { t.textContent = e; } function Si(t, e) { t.setAttribute(e, ''); } const xi = Object.freeze({
        createElement: fi, createElementNS: di, createTextNode: hi, createComment: pi, insertBefore: vi, removeChild: bi, appendChild: mi, parentNode: yi, nextSibling: gi, tagName: wi, setTextContent: Oi, setStyleScope: Si,
      }); const Ti = { create(t, e) { ki(e); }, update(t, e) { t.data.ref !== e.data.ref && (ki(t, !0), ki(e)); }, destroy(t) { ki(t, !0); } }; function ki(t, e) { const n = t.data.ref; if (i(n)) { const r = t.context; const o = t.componentInstance || t.elm; const a = r.$refs; e ? Array.isArray(a[n]) ? y(a[n], o) : a[n] === o && (a[n] = void 0) : t.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(o) < 0 && a[n].push(o) : a[n] = [o] : a[n] = o; } } const Pi = new gt('', {}, []); const ji = ['create', 'activate', 'update', 'remove', 'destroy']; function Ci(t, e) { return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && i(t.data) === i(e.data) && _i(t, e) || o(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && r(e.asyncFactory.error)); } function _i(t, e) { if (t.tag !== 'input') return !0; let n; const r = i(n = t.data) && i(n = n.attrs) && n.type; const o = i(n = e.data) && i(n = n.attrs) && n.type; return r === o || ci(r) && ci(o); } function Bi(t, e, n) { let r; let o; const a = {}; for (r = e; r <= n; ++r)o = t[r].key, i(o) && (a[o] = r); return a; } function Di(t) { let e; let n; const a = {}; const l = t.modules; const c = t.nodeOps; for (e = 0; e < ji.length; ++e) for (a[ji[e]] = [], n = 0; n < l.length; ++n)i(l[n][ji[e]]) && a[ji[e]].push(l[n][ji[e]]); function u(t) { return new gt(c.tagName(t).toLowerCase(), {}, [], void 0, t); } function f(t, e) { function n() { --n.listeners === 0 && d(t); } return n.listeners = e, n; } function d(t) { const e = c.parentNode(t); i(e) && c.removeChild(e, t); } function h(t, e, n, r, a, s, l) { if (i(t.elm) && i(s) && (t = s[l] = xt(t)), t.isRootInsert = !a, !p(t, e, n, r)) { const u = t.data; const f = t.children; const d = t.tag; i(d) ? (t.elm = t.ns ? c.createElementNS(t.ns, d) : c.createElement(d, t), S(t), g(t, f, e), i(u) && O(t, e), y(n, t.elm, r)) : o(t.isComment) ? (t.elm = c.createComment(t.text), y(n, t.elm, r)) : (t.elm = c.createTextNode(t.text), y(n, t.elm, r)); } } function p(t, e, n, r) { let a = t.data; if (i(a)) { const s = i(t.componentInstance) && a.keepAlive; if (i(a = a.hook) && i(a = a.init) && a(t, !1), i(t.componentInstance)) return v(t, e), y(n, t.elm, r), o(s) && m(t, e, n, r), !0; } } function v(t, e) { i(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, w(t) ? (O(t, e), S(t)) : (ki(t), e.push(t)); } function m(t, e, n, r) { let o; let s = t; while (s.componentInstance) if (s = s.componentInstance._vnode, i(o = s.data) && i(o = o.transition)) { for (o = 0; o < a.activate.length; ++o)a.activate[o](Pi, s); e.push(s); break; }y(n, t.elm, r); } function y(t, e, n) { i(t) && (i(n) ? c.parentNode(n) === t && c.insertBefore(t, e, n) : c.appendChild(t, e)); } function g(t, e, n) { if (Array.isArray(e)) { 0; for (let r = 0; r < e.length; ++r)h(e[r], n, t.elm, null, !0, e, r); } else s(t.text) && c.appendChild(t.elm, c.createTextNode(String(t.text))); } function w(t) { while (t.componentInstance)t = t.componentInstance._vnode; return i(t.tag); } function O(t, n) { for (let r = 0; r < a.create.length; ++r)a.create[r](Pi, t); e = t.data.hook, i(e) && (i(e.create) && e.create(Pi, t), i(e.insert) && n.push(t)); } function S(t) { let e; if (i(e = t.fnScopeId))c.setStyleScope(t.elm, e); else { let n = t; while (n)i(e = n.context) && i(e = e.$options._scopeId) && c.setStyleScope(t.elm, e), n = n.parent; }i(e = Bn) && e !== t.context && e !== t.fnContext && i(e = e.$options._scopeId) && c.setStyleScope(t.elm, e); } function x(t, e, n, r, i, o) { for (;r <= i; ++r)h(n[r], o, t, e, !1, n, r); } function T(t) { let e; let n; const r = t.data; if (i(r)) for (i(e = r.hook) && i(e = e.destroy) && e(t), e = 0; e < a.destroy.length; ++e)a.destroy[e](t); if (i(e = t.children)) for (n = 0; n < t.children.length; ++n)T(t.children[n]); } function k(t, e, n) { for (;e <= n; ++e) { const r = t[e]; i(r) && (i(r.tag) ? (P(r), T(r)) : d(r.elm)); } } function P(t, e) { if (i(e) || i(t.data)) { let n; const r = a.remove.length + 1; for (i(e) ? e.listeners += r : e = f(t.elm, r), i(n = t.componentInstance) && i(n = n._vnode) && i(n.data) && P(n, e), n = 0; n < a.remove.length; ++n)a.remove[n](t, e); i(n = t.data.hook) && i(n = n.remove) ? n(t, e) : e(); } else d(t.elm); } function j(t, e, n, o, a) { let s; let l; let u; let f; let d = 0; let p = 0; let v = e.length - 1; let b = e[0]; let m = e[v]; let y = n.length - 1; let g = n[0]; let w = n[y]; const O = !a; while (d <= v && p <= y)r(b) ? b = e[++d] : r(m) ? m = e[--v] : Ci(b, g) ? (_(b, g, o, n, p), b = e[++d], g = n[++p]) : Ci(m, w) ? (_(m, w, o, n, y), m = e[--v], w = n[--y]) : Ci(b, w) ? (_(b, w, o, n, y), O && c.insertBefore(t, b.elm, c.nextSibling(m.elm)), b = e[++d], w = n[--y]) : Ci(m, g) ? (_(m, g, o, n, p), O && c.insertBefore(t, m.elm, b.elm), m = e[--v], g = n[++p]) : (r(s) && (s = Bi(e, d, v)), l = i(g.key) ? s[g.key] : C(g, e, d, v), r(l) ? h(g, o, t, b.elm, !1, n, p) : (u = e[l], Ci(u, g) ? (_(u, g, o, n, p), e[l] = void 0, O && c.insertBefore(t, u.elm, b.elm)) : h(g, o, t, b.elm, !1, n, p)), g = n[++p]); d > v ? (f = r(n[y + 1]) ? null : n[y + 1].elm, x(t, f, n, p, y, o)) : p > y && k(e, d, v); } function C(t, e, n, r) { for (let o = n; o < r; o++) { const a = e[o]; if (i(a) && Ci(t, a)) return o; } } function _(t, e, n, s, l, u) { if (t !== e) { i(e.elm) && i(s) && (e = s[l] = xt(e)); const f = e.elm = t.elm; if (o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved) ? E(t.elm, e, n) : e.isAsyncPlaceholder = !0; else if (o(e.isStatic) && o(t.isStatic) && e.key === t.key && (o(e.isCloned) || o(e.isOnce)))e.componentInstance = t.componentInstance; else { let d; const h = e.data; i(h) && i(d = h.hook) && i(d = d.prepatch) && d(t, e); const p = t.children; const v = e.children; if (i(h) && w(e)) { for (d = 0; d < a.update.length; ++d)a.update[d](t, e); i(d = h.hook) && i(d = d.update) && d(t, e); }r(e.text) ? i(p) && i(v) ? p !== v && j(f, p, v, n, u) : i(v) ? (i(t.text) && c.setTextContent(f, ''), x(f, null, v, 0, v.length - 1, n)) : i(p) ? k(p, 0, p.length - 1) : i(t.text) && c.setTextContent(f, '') : t.text !== e.text && c.setTextContent(f, e.text), i(h) && i(d = h.hook) && i(d = d.postpatch) && d(t, e); } } } function B(t, e, n) { if (o(n) && i(t.parent))t.parent.data.pendingInsert = e; else for (let r = 0; r < e.length; ++r)e[r].data.hook.insert(e[r]); } const D = b('attrs,class,staticClass,staticStyle,key'); function E(t, e, n, r) { let a; const s = e.tag; const l = e.data; const c = e.children; if (r = r || l && l.pre, e.elm = t, o(e.isComment) && i(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0; if (i(l) && (i(a = l.hook) && i(a = a.init) && a(e, !0), i(a = e.componentInstance))) return v(e, n), !0; if (i(s)) { if (i(c)) if (t.hasChildNodes()) if (i(a = l) && i(a = a.domProps) && i(a = a.innerHTML)) { if (a !== t.innerHTML) return !1; } else { for (var u = !0, f = t.firstChild, d = 0; d < c.length; d++) { if (!f || !E(f, c[d], n, r)) { u = !1; break; }f = f.nextSibling; } if (!u || f) return !1; } else g(e, c, n); if (i(l)) { let h = !1; for (const p in l) if (!D(p)) { h = !0, O(e, n); break; }!h && l.class && be(l.class); } } else t.data !== e.text && (t.data = e.text); return !0; } return function (t, e, n, s) { if (!r(e)) { let l = !1; const f = []; if (r(t))l = !0, h(e, f); else { const d = i(t.nodeType); if (!d && Ci(t, e))_(t, e, f, null, null, s); else { if (d) { if (t.nodeType === 1 && t.hasAttribute(M) && (t.removeAttribute(M), n = !0), o(n) && E(t, e, f)) return B(e, f, !0), t; t = u(t); } const p = t.elm; const v = c.parentNode(p); if (h(e, f, p._leaveCb ? null : v, c.nextSibling(p)), i(e.parent)) { let b = e.parent; const m = w(e); while (b) { for (let y = 0; y < a.destroy.length; ++y)a.destroy[y](b); if (b.elm = e.elm, m) { for (let g = 0; g < a.create.length; ++g)a.create[g](Pi, b); const O = b.data.hook.insert; if (O.merged) for (let S = 1; S < O.fns.length; S++)O.fns[S](); } else ki(b); b = b.parent; } }i(v) ? k([t], 0, 0) : i(t.tag) && T(t); } } return B(e, f, l), e.elm; }i(t) && T(t); }; } const Ei = { create: $i, update: $i, destroy(t) { $i(t, Pi); } }; function $i(t, e) { (t.data.directives || e.data.directives) && Ai(t, e); } function Ai(t, e) { let n; let r; let i; const o = t === Pi; const a = e === Pi; const s = Fi(t.data.directives, t.context); const l = Fi(e.data.directives, e.context); const c = []; const u = []; for (n in l)r = s[n], i = l[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, Ri(i, 'update', e, t), i.def && i.def.componentUpdated && u.push(i)) : (Ri(i, 'bind', e, t), i.def && i.def.inserted && c.push(i)); if (c.length) { const f = function () { for (let n = 0; n < c.length; n++)Ri(c[n], 'inserted', e, t); }; o ? Oe(e, 'insert', f) : f(); } if (u.length && Oe(e, 'postpatch', (() => { for (let n = 0; n < u.length; n++)Ri(u[n], 'componentUpdated', e, t); })), !o) for (n in s)l[n] || Ri(s[n], 'unbind', t, t, a); } const Ii = Object.create(null); function Fi(t, e) { let n; let r; const i = Object.create(null); if (!t) return i; for (n = 0; n < t.length; n++)r = t[n], r.modifiers || (r.modifiers = Ii), i[Li(r)] = r, r.def = Kt(e.$options, 'directives', r.name, !0); return i; } function Li(t) { return t.rawName || `${t.name}.${Object.keys(t.modifiers || {}).join('.')}`; } function Ri(t, e, n, r, i) { const o = t.def && t.def[e]; if (o) try { o(n.elm, t, n, r, i); } catch (xa) { ee(xa, n.context, `directive ${t.name} ${e} hook`); } } const Mi = [Ti, Ei]; function Ni(t, e) { const n = e.componentOptions; if ((!i(n) || !1 !== n.Ctor.options.inheritAttrs) && (!r(t.data.attrs) || !r(e.data.attrs))) { let o; let a; let s; const l = e.elm; const c = t.data.attrs || {}; let u = e.data.attrs || {}; for (o in i(u.__ob__) && (u = e.data.attrs = D({}, u)), u)a = u[o], s = c[o], s !== a && Vi(l, o, a); for (o in (tt || nt) && u.value !== c.value && Vi(l, 'value', u.value), c)r(u[o]) && (Wr(o) ? l.removeAttributeNS(Ur, qr(o)) : Vr(o) || l.removeAttribute(o)); } } function Vi(t, e, n) { t.tagName.indexOf('-') > -1 ? zi(t, e, n) : Gr(e) ? Yr(n) ? t.removeAttribute(e) : (n = e === 'allowfullscreen' && t.tagName === 'EMBED' ? 'true' : e, t.setAttribute(e, n)) : Vr(e) ? t.setAttribute(e, Hr(e, n)) : Wr(e) ? Yr(n) ? t.removeAttributeNS(Ur, qr(e)) : t.setAttributeNS(Ur, e, n) : zi(t, e, n); } function zi(t, e, n) { if (Yr(n))t.removeAttribute(e); else { if (tt && !et && t.tagName === 'TEXTAREA' && e === 'placeholder' && n !== '' && !t.__ieph) { var r = function (e) { e.stopImmediatePropagation(), t.removeEventListener('input', r); }; t.addEventListener('input', r), t.__ieph = !0; }t.setAttribute(e, n); } } const Hi = { create: Ni, update: Ni }; function Gi(t, e) { const n = e.elm; const o = e.data; const a = t.data; if (!(r(o.staticClass) && r(o.class) && (r(a) || r(a.staticClass) && r(a.class)))) { let s = Kr(e); const l = n._transitionClasses; i(l) && (s = Zr(s, Qr(l))), s !== n._prevClass && (n.setAttribute('class', s), n._prevClass = s); } } let Ui; const Wi = { create: Gi, update: Gi }; const qi = '__r'; const Yi = '__c'; function Ki(t) { if (i(t[qi])) { const e = tt ? 'change' : 'input'; t[e] = [].concat(t[qi], t[e] || []), delete t[qi]; }i(t[Yi]) && (t.change = [].concat(t[Yi], t.change || []), delete t[Yi]); } function Xi(t, e, n) { const r = Ui; return function i() { const o = e.apply(null, arguments); o !== null && Qi(t, i, n, r); }; } const Ji = ae && !(it && Number(it[1]) <= 53); function Zi(t, e, n, r) { if (Ji) { const i = qn; const o = e; e = o._wrapper = function (t) { if (t.target === t.currentTarget || t.timeStamp >= i || t.timeStamp <= 0 || t.target.ownerDocument !== document) return o.apply(this, arguments); }; }Ui.addEventListener(t, e, at ? { capture: n, passive: r } : n); } function Qi(t, e, n, r) { (r || Ui).removeEventListener(t, e._wrapper || e, n); } function to(t, e) { if (!r(t.data.on) || !r(e.data.on)) { const n = e.data.on || {}; const i = t.data.on || {}; Ui = e.elm, Ki(n), we(n, i, Zi, Qi, Xi, e.context), Ui = void 0; } } let eo; const no = { create: to, update: to }; function ro(t, e) { if (!r(t.data.domProps) || !r(e.data.domProps)) { let n; let o; const a = e.elm; const s = t.data.domProps || {}; let l = e.data.domProps || {}; for (n in i(l.__ob__) && (l = e.data.domProps = D({}, l)), s)n in l || (a[n] = ''); for (n in l) { if (o = l[n], n === 'textContent' || n === 'innerHTML') { if (e.children && (e.children.length = 0), o === s[n]) continue; a.childNodes.length === 1 && a.removeChild(a.childNodes[0]); } if (n === 'value' && a.tagName !== 'PROGRESS') { a._value = o; const c = r(o) ? '' : String(o); io(a, c) && (a.value = c); } else if (n === 'innerHTML' && ii(a.tagName) && r(a.innerHTML)) { eo = eo || document.createElement('div'), eo.innerHTML = `<svg>${o}</svg>`; const u = eo.firstChild; while (a.firstChild)a.removeChild(a.firstChild); while (u.firstChild)a.appendChild(u.firstChild); } else if (o !== s[n]) try { a[n] = o; } catch (xa) {} } } } function io(t, e) { return !t.composing && (t.tagName === 'OPTION' || oo(t, e) || ao(t, e)); } function oo(t, e) { let n = !0; try { n = document.activeElement !== t; } catch (xa) {} return n && t.value !== e; } function ao(t, e) { const n = t.value; const r = t._vModifiers; if (i(r)) { if (r.number) return v(n) !== v(e); if (r.trim) return n.trim() !== e.trim(); } return n !== e; } const so = { create: ro, update: ro }; const lo = O(((t) => { const e = {}; const n = /;(?![^(]*\))/g; const r = /:(.+)/; return t.split(n).forEach(((t) => { if (t) { const n = t.split(r); n.length > 1 && (e[n[0].trim()] = n[1].trim()); } })), e; })); function co(t) { const e = uo(t.style); return t.staticStyle ? D(t.staticStyle, e) : e; } function uo(t) { return Array.isArray(t) ? E(t) : typeof t === 'string' ? lo(t) : t; } function fo(t, e) { let n; const r = {}; if (e) { let i = t; while (i.componentInstance)i = i.componentInstance._vnode, i && i.data && (n = co(i.data)) && D(r, n); }(n = co(t.data)) && D(r, n); let o = t; while (o = o.parent)o.data && (n = co(o.data)) && D(r, n); return r; } let ho; const po = /^--/; const vo = /\s*!important$/; const bo = function (t, e, n) { if (po.test(e))t.style.setProperty(e, n); else if (vo.test(n))t.style.setProperty(P(e), n.replace(vo, ''), 'important'); else { const r = yo(e); if (Array.isArray(n)) for (let i = 0, o = n.length; i < o; i++)t.style[r] = n[i]; else t.style[r] = n; } }; const mo = ['Webkit', 'Moz', 'ms']; var yo = O(((t) => { if (ho = ho || document.createElement('div').style, t = x(t), t !== 'filter' && t in ho) return t; for (let e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < mo.length; n++) { const r = mo[n] + e; if (r in ho) return r; } })); function go(t, e) { const n = e.data; const o = t.data; if (!(r(n.staticStyle) && r(n.style) && r(o.staticStyle) && r(o.style))) { let a; let s; const l = e.elm; const c = o.staticStyle; const u = o.normalizedStyle || o.style || {}; const f = c || u; const d = uo(e.data.style) || {}; e.data.normalizedStyle = i(d.__ob__) ? D({}, d) : d; const h = fo(e, !0); for (s in f)r(h[s]) && bo(l, s, ''); for (s in h)a = h[s], a !== f[s] && bo(l, s, a == null ? '' : a); } } const wo = { create: go, update: go }; const Oo = /\s+/; function So(t, e) { if (e && (e = e.trim())) if (t.classList)e.indexOf(' ') > -1 ? e.split(Oo).forEach(((e) => t.classList.add(e))) : t.classList.add(e); else { const n = ` ${t.getAttribute('class') || ''} `; n.indexOf(` ${e} `) < 0 && t.setAttribute('class', (n + e).trim()); } } function xo(t, e) { if (e && (e = e.trim())) if (t.classList)e.indexOf(' ') > -1 ? e.split(Oo).forEach(((e) => t.classList.remove(e))) : t.classList.remove(e), t.classList.length || t.removeAttribute('class'); else { let n = ` ${t.getAttribute('class') || ''} `; const r = ` ${e} `; while (n.indexOf(r) >= 0)n = n.replace(r, ' '); n = n.trim(), n ? t.setAttribute('class', n) : t.removeAttribute('class'); } } function To(t) { if (t) { if (typeof t === 'object') { const e = {}; return !1 !== t.css && D(e, ko(t.name || 'v')), D(e, t), e; } return typeof t === 'string' ? ko(t) : void 0; } } var ko = O(((t) => ({
        enterClass: `${t}-enter`, enterToClass: `${t}-enter-to`, enterActiveClass: `${t}-enter-active`, leaveClass: `${t}-leave`, leaveToClass: `${t}-leave-to`, leaveActiveClass: `${t}-leave-active`,
      }))); const Po = X && !et; const jo = 'transition'; const Co = 'animation'; let _o = 'transition'; let Bo = 'transitionend'; let Do = 'animation'; let Eo = 'animationend'; Po && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (_o = 'WebkitTransition', Bo = 'webkitTransitionEnd'), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Do = 'WebkitAnimation', Eo = 'webkitAnimationEnd')); const $o = X ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (t) { return t(); }; function Ao(t) { $o((() => { $o(t); })); } function Io(t, e) { const n = t._transitionClasses || (t._transitionClasses = []); n.indexOf(e) < 0 && (n.push(e), So(t, e)); } function Fo(t, e) { t._transitionClasses && y(t._transitionClasses, e), xo(t, e); } function Lo(t, e, n) { const r = Mo(t, e); const i = r.type; const o = r.timeout; const a = r.propCount; if (!i) return n(); const s = i === jo ? Bo : Eo; let l = 0; const c = function () { t.removeEventListener(s, u), n(); }; var u = function (e) { e.target === t && ++l >= a && c(); }; setTimeout((() => { l < a && c(); }), o + 1), t.addEventListener(s, u); } const Ro = /\b(transform|all)(,|$)/; function Mo(t, e) {
        let n; const r = window.getComputedStyle(t); const i = (r[`${_o}Delay`] || '').split(', '); const o = (r[`${_o}Duration`] || '').split(', '); const a = No(i, o); const s = (r[`${Do}Delay`] || '').split(', '); const l = (r[`${Do}Duration`] || '').split(', '); const c = No(s, l); let u = 0; let f = 0; e === jo ? a > 0 && (n = jo, u = a, f = o.length) : e === Co ? c > 0 && (n = Co, u = c, f = l.length) : (u = Math.max(a, c), n = u > 0 ? a > c ? jo : Co : null, f = n ? n === jo ? o.length : l.length : 0); const d = n === jo && Ro.test(r[`${_o}Property`]); return {
          type: n, timeout: u, propCount: f, hasTransform: d,
        };
      } function No(t, e) { while (t.length < e.length)t = t.concat(t); return Math.max.apply(null, e.map(((e, n) => Vo(e) + Vo(t[n])))); } function Vo(t) { return 1e3 * Number(t.slice(0, -1).replace(',', '.')); } function zo(t, e) { const n = t.elm; i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb()); const o = To(t.data.transition); if (!r(o) && !i(n._enterCb) && n.nodeType === 1) { const a = o.css; const s = o.type; const c = o.enterClass; const u = o.enterToClass; const f = o.enterActiveClass; const d = o.appearClass; const h = o.appearToClass; const p = o.appearActiveClass; const b = o.beforeEnter; const m = o.enter; const y = o.afterEnter; const g = o.enterCancelled; const w = o.beforeAppear; const O = o.appear; const S = o.afterAppear; const x = o.appearCancelled; const T = o.duration; let k = Bn; let P = Bn.$vnode; while (P && P.parent)k = P.context, P = P.parent; const j = !k._isMounted || !t.isRootInsert; if (!j || O || O === '') { const C = j && d ? d : c; const _ = j && p ? p : f; const B = j && h ? h : u; const D = j && w || b; const E = j && typeof O === 'function' ? O : m; const $ = j && S || y; const A = j && x || g; const I = v(l(T) ? T.enter : T); 0; const F = !1 !== a && !et; const L = Uo(E); var M = n._enterCb = R((() => { F && (Fo(n, B), Fo(n, _)), M.cancelled ? (F && Fo(n, C), A && A(n)) : $ && $(n), n._enterCb = null; })); t.data.show || Oe(t, 'insert', (() => { const e = n.parentNode; const r = e && e._pending && e._pending[t.key]; r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), E && E(n, M); })), D && D(n), F && (Io(n, C), Io(n, _), Ao((() => { Fo(n, C), M.cancelled || (Io(n, B), L || (Go(I) ? setTimeout(M, I) : Lo(n, s, M))); }))), t.data.show && (e && e(), E && E(n, M)), F || L || M(); } } } function Ho(t, e) { const n = t.elm; i(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb()); const o = To(t.data.transition); if (r(o) || n.nodeType !== 1) return e(); if (!i(n._leaveCb)) { const a = o.css; var s = o.type; var c = o.leaveClass; var u = o.leaveToClass; var f = o.leaveActiveClass; var d = o.beforeLeave; var h = o.leave; const p = o.afterLeave; const b = o.leaveCancelled; const m = o.delayLeave; const y = o.duration; var g = !1 !== a && !et; var w = Uo(h); var O = v(l(y) ? y.leave : y); 0; var S = n._leaveCb = R((() => { n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), g && (Fo(n, u), Fo(n, f)), S.cancelled ? (g && Fo(n, c), b && b(n)) : (e(), p && p(n)), n._leaveCb = null; })); m ? m(x) : x(); } function x() { S.cancelled || (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), d && d(n), g && (Io(n, c), Io(n, f), Ao((() => { Fo(n, c), S.cancelled || (Io(n, u), w || (Go(O) ? setTimeout(S, O) : Lo(n, s, S))); }))), h && h(n, S), g || w || S()); } } function Go(t) { return typeof t === 'number' && !isNaN(t); } function Uo(t) { if (r(t)) return !1; const e = t.fns; return i(e) ? Uo(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1; } function Wo(t, e) { !0 !== e.data.show && zo(e); } const qo = X ? { create: Wo, activate: Wo, remove(t, e) { !0 !== t.data.show ? Ho(t, e) : e(); } } : {}; const Yo = [Hi, Wi, no, so, wo, qo]; const Ko = Yo.concat(Mi); const Xo = Di({ nodeOps: xi, modules: Ko }); et && document.addEventListener('selectionchange', (() => { const t = document.activeElement; t && t.vmodel && ia(t, 'input'); })); var Jo = { inserted(t, e, n, r) { n.tag === 'select' ? (r.elm && !r.elm._vOptions ? Oe(n, 'postpatch', (() => { Jo.componentUpdated(t, e, n); })) : Zo(t, e, n.context), t._vOptions = [].map.call(t.options, ea)) : (n.tag === 'textarea' || ci(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener('compositionstart', na), t.addEventListener('compositionend', ra), t.addEventListener('change', ra), et && (t.vmodel = !0))); }, componentUpdated(t, e, n) { if (n.tag === 'select') { Zo(t, e, n.context); const r = t._vOptions; const i = t._vOptions = [].map.call(t.options, ea); if (i.some(((t, e) => !F(t, r[e])))) { const o = t.multiple ? e.value.some(((t) => ta(t, i))) : e.value !== e.oldValue && ta(e.value, i); o && ia(t, 'change'); } } } }; function Zo(t, e, n) { Qo(t, e, n), (tt || nt) && setTimeout((() => { Qo(t, e, n); }), 0); } function Qo(t, e, n) { const r = e.value; const i = t.multiple; if (!i || Array.isArray(r)) { for (var o, a, s = 0, l = t.options.length; s < l; s++) if (a = t.options[s], i)o = L(r, ea(a)) > -1, a.selected !== o && (a.selected = o); else if (F(ea(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s)); i || (t.selectedIndex = -1); } } function ta(t, e) { return e.every(((e) => !F(e, t))); } function ea(t) { return '_value' in t ? t._value : t.value; } function na(t) { t.target.composing = !0; } function ra(t) { t.target.composing && (t.target.composing = !1, ia(t.target, 'input')); } function ia(t, e) { const n = document.createEvent('HTMLEvents'); n.initEvent(e, !0, !0), t.dispatchEvent(n); } function oa(t) { return !t.componentInstance || t.data && t.data.transition ? t : oa(t.componentInstance._vnode); } const aa = { bind(t, e, n) { const r = e.value; n = oa(n); const i = n.data && n.data.transition; const o = t.__vOriginalDisplay = t.style.display === 'none' ? '' : t.style.display; r && i ? (n.data.show = !0, zo(n, (() => { t.style.display = o; }))) : t.style.display = r ? o : 'none'; }, update(t, e, n) { const r = e.value; const i = e.oldValue; if (!r !== !i) { n = oa(n); const o = n.data && n.data.transition; o ? (n.data.show = !0, r ? zo(n, (() => { t.style.display = t.__vOriginalDisplay; })) : Ho(n, (() => { t.style.display = 'none'; }))) : t.style.display = r ? t.__vOriginalDisplay : 'none'; } }, unbind(t, e, n, r, i) { i || (t.style.display = t.__vOriginalDisplay); } }; const sa = { model: Jo, show: aa }; const la = {
        name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object],
      }; function ca(t) { const e = t && t.componentOptions; return e && e.Ctor.options.abstract ? ca(xn(e.children)) : t; } function ua(t) { const e = {}; const n = t.$options; for (const r in n.propsData)e[r] = t[r]; const i = n._parentListeners; for (const o in i)e[x(o)] = i[o]; return e; } function fa(t, e) { if (/\d-keep-alive$/.test(e.tag)) return t('keep-alive', { props: e.componentOptions.propsData }); } function da(t) { while (t = t.parent) if (t.data.transition) return !0; } function ha(t, e) { return e.key === t.key && e.tag === t.tag; } const pa = function (t) { return t.tag || Sn(t); }; const va = function (t) { return t.name === 'show'; }; const ba = {
        name: 'transition', props: la, abstract: !0, render(t) { const e = this; let n = this.$slots.default; if (n && (n = n.filter(pa), n.length)) { 0; const r = this.mode; 0; const i = n[0]; if (da(this.$vnode)) return i; const o = ca(i); if (!o) return i; if (this._leaving) return fa(t, i); const a = `__transition-${this._uid}-`; o.key = o.key == null ? o.isComment ? `${a}comment` : a + o.tag : s(o.key) ? String(o.key).indexOf(a) === 0 ? o.key : a + o.key : o.key; const l = (o.data || (o.data = {})).transition = ua(this); const c = this._vnode; const u = ca(c); if (o.data.directives && o.data.directives.some(va) && (o.data.show = !0), u && u.data && !ha(o, u) && !Sn(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) { const f = u.data.transition = D({}, l); if (r === 'out-in') return this._leaving = !0, Oe(f, 'afterLeave', (() => { e._leaving = !1, e.$forceUpdate(); })), fa(t, i); if (r === 'in-out') { if (Sn(o)) return c; let d; const h = function () { d(); }; Oe(l, 'afterEnter', h), Oe(l, 'enterCancelled', h), Oe(f, 'delayLeave', ((t) => { d = t; })); } } return i; } },
      }; const ma = D({ tag: String, moveClass: String }, la); delete ma.mode; const ya = {
        props: ma, beforeMount() { const t = this; const e = this._update; this._update = function (n, r) { const i = Dn(t); t.__patch__(t._vnode, t.kept, !1, !0), t._vnode = t.kept, i(), e.call(t, n, r); }; }, render(t) { for (var e = this.tag || this.$vnode.data.tag || 'span', n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = ua(this), s = 0; s < i.length; s++) { const l = i[s]; if (l.tag) if (l.key != null && String(l.key).indexOf('__vlist') !== 0)o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a; else; } if (r) { for (var c = [], u = [], f = 0; f < r.length; f++) { const d = r[f]; d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? c.push(d) : u.push(d); } this.kept = t(e, null, c), this.removed = u; } return t(e, null, o); }, updated() { const t = this.prevChildren; const e = this.moveClass || `${this.name || 'v'}-move`; t.length && this.hasMove(t[0].elm, e) && (t.forEach(ga), t.forEach(wa), t.forEach(Oa), this._reflow = document.body.offsetHeight, t.forEach(((t) => { if (t.data.moved) { const n = t.elm; const r = n.style; Io(n, e), r.transform = r.WebkitTransform = r.transitionDuration = '', n.addEventListener(Bo, n._moveCb = function t(r) { r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Bo, t), n._moveCb = null, Fo(n, e)); }); } }))); }, methods: { hasMove(t, e) { if (!Po) return !1; if (this._hasMove) return this._hasMove; const n = t.cloneNode(); t._transitionClasses && t._transitionClasses.forEach(((t) => { xo(n, t); })), So(n, e), n.style.display = 'none', this.$el.appendChild(n); const r = Mo(n); return this.$el.removeChild(n), this._hasMove = r.hasTransform; } },
      }; function ga(t) { t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb(); } function wa(t) { t.data.newPos = t.elm.getBoundingClientRect(); } function Oa(t) { const e = t.data.pos; const n = t.data.newPos; const r = e.left - n.left; const i = e.top - n.top; if (r || i) { t.data.moved = !0; const o = t.elm.style; o.transform = o.WebkitTransform = `translate(${r}px,${i}px)`, o.transitionDuration = '0s'; } } const Sa = { Transition: ba, TransitionGroup: ya }; xr.config.mustUseProp = Nr, xr.config.isReservedTag = oi, xr.config.isReservedAttr = Rr, xr.config.getTagNamespace = ai, xr.config.isUnknownElement = li, D(xr.options.directives, sa), D(xr.options.components, Sa), xr.prototype.__patch__ = X ? Xo : $, xr.prototype.$mount = function (t, e) { return t = t && X ? ui(t) : void 0, An(this, t, e); }, X && setTimeout((() => { z.devtools && ct && ct.emit('init', xr); }), 0), e.default = xr;
    }.call(this, n('c8ba'));
  },
  '2b3d': function (t, e, n) {
    n('3ca3'); let r; const i = n('23e7'); const o = n('83ab'); const a = n('0d3b'); const s = n('da84'); const l = n('37e8'); const c = n('6eeb'); const u = n('19aa'); const f = n('5135'); const d = n('60da'); const h = n('4df4'); const p = n('6547').codeAt; const v = n('5fb2'); const b = n('d44e'); const m = n('9861'); const y = n('69f3'); const g = s.URL; const w = m.URLSearchParams; const O = m.getState; const S = y.set; const x = y.getterFor('URL'); const T = Math.floor; const k = Math.pow; const P = 'Invalid authority'; const j = 'Invalid scheme'; const C = 'Invalid host'; const _ = 'Invalid port'; const B = /[A-Za-z]/; const D = /[\d+\-.A-Za-z]/; const E = /\d/; const $ = /^(0x|0X)/; const A = /^[0-7]+$/; const I = /^\d+$/; const F = /^[\dA-Fa-f]+$/; const L = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/; const R = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/; const M = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g; const N = /[\u0009\u000A\u000D]/g; const V = function (t, e) { let n; let r; let i; if (e.charAt(0) == '[') { if (e.charAt(e.length - 1) != ']') return C; if (n = H(e.slice(1, -1)), !n) return C; t.host = n; } else if (Z(t)) { if (e = v(e), L.test(e)) return C; if (n = z(e), n === null) return C; t.host = n; } else { if (R.test(e)) return C; for (n = '', r = h(e), i = 0; i < r.length; i++)n += X(r[i], W); t.host = n; } }; var z = function (t) { let e; let n; let r; let i; let o; let a; let s; const l = t.split('.'); if (l.length && l[l.length - 1] == '' && l.pop(), e = l.length, e > 4) return t; for (n = [], r = 0; r < e; r++) { if (i = l[r], i == '') return t; if (o = 10, i.length > 1 && i.charAt(0) == '0' && (o = $.test(i) ? 16 : 8, i = i.slice(o == 8 ? 1 : 2)), i === '')a = 0; else { if (!(o == 10 ? I : o == 8 ? A : F).test(i)) return t; a = parseInt(i, o); }n.push(a); } for (r = 0; r < e; r++) if (a = n[r], r == e - 1) { if (a >= k(256, 5 - e)) return null; } else if (a > 255) return null; for (s = n.pop(), r = 0; r < n.length; r++)s += n[r] * k(256, 3 - r); return s; }; var H = function (t) { let e; let n; let r; let i; let o; let a; let s; const l = [0, 0, 0, 0, 0, 0, 0, 0]; let c = 0; let u = null; let f = 0; const d = function () { return t.charAt(f); }; if (d() == ':') { if (t.charAt(1) != ':') return; f += 2, c++, u = c; } while (d()) { if (c == 8) return; if (d() != ':') { e = n = 0; while (n < 4 && F.test(d()))e = 16 * e + parseInt(d(), 16), f++, n++; if (d() == '.') { if (n == 0) return; if (f -= n, c > 6) return; r = 0; while (d()) { if (i = null, r > 0) { if (!(d() == '.' && r < 4)) return; f++; } if (!E.test(d())) return; while (E.test(d())) { if (o = parseInt(d(), 10), i === null)i = o; else { if (i == 0) return; i = 10 * i + o; } if (i > 255) return; f++; }l[c] = 256 * l[c] + i, r++, r != 2 && r != 4 || c++; } if (r != 4) return; break; } if (d() == ':') { if (f++, !d()) return; } else if (d()) return; l[c++] = e; } else { if (u !== null) return; f++, c++, u = c; } } if (u !== null) { a = c - u, c = 7; while (c != 0 && a > 0)s = l[c], l[c--] = l[u + a - 1], l[u + --a] = s; } else if (c != 8) return; return l; }; const G = function (t) { for (var e = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)t[o] !== 0 ? (i > n && (e = r, n = i), r = null, i = 0) : (r === null && (r = o), ++i); return i > n && (e = r, n = i), e; }; const U = function (t) { let e; let n; let r; let i; if (typeof t === 'number') { for (e = [], n = 0; n < 4; n++)e.unshift(t % 256), t = T(t / 256); return e.join('.'); } if (typeof t === 'object') { for (e = '', r = G(t), n = 0; n < 8; n++)i && t[n] === 0 || (i && (i = !1), r === n ? (e += n ? ':' : '::', i = !0) : (e += t[n].toString(16), n < 7 && (e += ':'))); return `[${e}]`; } return t; }; var W = {}; const q = d({}, W, {
      ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1,
    }); const Y = d({}, q, {
      '#': 1, '?': 1, '{': 1, '}': 1,
    }); const K = d({}, Y, {
      '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1,
    }); var X = function (t, e) { const n = p(t, 0); return n > 32 && n < 127 && !f(e, t) ? t : encodeURIComponent(t); }; const J = {
      ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443,
    }; var Z = function (t) { return f(J, t.scheme); }; const Q = function (t) { return t.username != '' || t.password != ''; }; const tt = function (t) { return !t.host || t.cannotBeABaseURL || t.scheme == 'file'; }; const et = function (t, e) { let n; return t.length == 2 && B.test(t.charAt(0)) && ((n = t.charAt(1)) == ':' || !e && n == '|'); }; const nt = function (t) { let e; return t.length > 1 && et(t.slice(0, 2)) && (t.length == 2 || (e = t.charAt(2)) === '/' || e === '\\' || e === '?' || e === '#'); }; const rt = function (t) { const e = t.path; const n = e.length; !n || t.scheme == 'file' && n == 1 && et(e[0], !0) || e.pop(); }; const it = function (t) { return t === '.' || t.toLowerCase() === '%2e'; }; const ot = function (t) { return t = t.toLowerCase(), t === '..' || t === '%2e.' || t === '.%2e' || t === '%2e%2e'; }; const at = {}; const st = {}; const lt = {}; const ct = {}; const ut = {}; const ft = {}; const dt = {}; const ht = {}; const pt = {}; const vt = {}; const bt = {}; const mt = {}; const yt = {}; const gt = {}; const wt = {}; const Ot = {}; const St = {}; const xt = {}; const Tt = {}; const kt = {}; const Pt = {}; const jt = function (t, e, n, i) { let o; let a; let s; let l; let c = n || at; let u = 0; let d = ''; let p = !1; let v = !1; let b = !1; n || (t.scheme = '', t.username = '', t.password = '', t.host = null, t.port = null, t.path = [], t.query = null, t.fragment = null, t.cannotBeABaseURL = !1, e = e.replace(M, '')), e = e.replace(N, ''), o = h(e); while (u <= o.length) { switch (a = o[u], c) { case at: if (!a || !B.test(a)) { if (n) return j; c = lt; continue; }d += a.toLowerCase(), c = st; break; case st: if (a && (D.test(a) || a == '+' || a == '-' || a == '.'))d += a.toLowerCase(); else { if (a != ':') { if (n) return j; d = '', c = lt, u = 0; continue; } if (n && (Z(t) != f(J, d) || d == 'file' && (Q(t) || t.port !== null) || t.scheme == 'file' && !t.host)) return; if (t.scheme = d, n) return void (Z(t) && J[t.scheme] == t.port && (t.port = null)); d = '', t.scheme == 'file' ? c = gt : Z(t) && i && i.scheme == t.scheme ? c = ct : Z(t) ? c = ht : o[u + 1] == '/' ? (c = ut, u++) : (t.cannotBeABaseURL = !0, t.path.push(''), c = Tt); } break; case lt: if (!i || i.cannotBeABaseURL && a != '#') return j; if (i.cannotBeABaseURL && a == '#') { t.scheme = i.scheme, t.path = i.path.slice(), t.query = i.query, t.fragment = '', t.cannotBeABaseURL = !0, c = Pt; break; }c = i.scheme == 'file' ? gt : ft; continue; case ct: if (a != '/' || o[u + 1] != '/') { c = ft; continue; }c = pt, u++; break; case ut: if (a == '/') { c = vt; break; }c = xt; continue; case ft: if (t.scheme = i.scheme, a == r)t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, t.path = i.path.slice(), t.query = i.query; else if (a == '/' || a == '\\' && Z(t))c = dt; else if (a == '?')t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, t.path = i.path.slice(), t.query = '', c = kt; else { if (a != '#') { t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, t.path = i.path.slice(), t.path.pop(), c = xt; continue; }t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, t.path = i.path.slice(), t.query = i.query, t.fragment = '', c = Pt; } break; case dt: if (!Z(t) || a != '/' && a != '\\') { if (a != '/') { t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, c = xt; continue; }c = vt; } else c = pt; break; case ht: if (c = pt, a != '/' || d.charAt(u + 1) != '/') continue; u++; break; case pt: if (a != '/' && a != '\\') { c = vt; continue; } break; case vt: if (a == '@') { p && (d = `%40${d}`), p = !0, s = h(d); for (let m = 0; m < s.length; m++) { const y = s[m]; if (y != ':' || b) { const g = X(y, K); b ? t.password += g : t.username += g; } else b = !0; }d = ''; } else if (a == r || a == '/' || a == '?' || a == '#' || a == '\\' && Z(t)) { if (p && d == '') return P; u -= h(d).length + 1, d = '', c = bt; } else d += a; break; case bt: case mt: if (n && t.scheme == 'file') { c = Ot; continue; } if (a != ':' || v) { if (a == r || a == '/' || a == '?' || a == '#' || a == '\\' && Z(t)) { if (Z(t) && d == '') return C; if (n && d == '' && (Q(t) || t.port !== null)) return; if (l = V(t, d), l) return l; if (d = '', c = St, n) return; continue; }a == '[' ? v = !0 : a == ']' && (v = !1), d += a; } else { if (d == '') return C; if (l = V(t, d), l) return l; if (d = '', c = yt, n == mt) return; } break; case yt: if (!E.test(a)) { if (a == r || a == '/' || a == '?' || a == '#' || a == '\\' && Z(t) || n) { if (d != '') { const w = parseInt(d, 10); if (w > 65535) return _; t.port = Z(t) && w === J[t.scheme] ? null : w, d = ''; } if (n) return; c = St; continue; } return _; }d += a; break; case gt: if (t.scheme = 'file', a == '/' || a == '\\')c = wt; else { if (!i || i.scheme != 'file') { c = xt; continue; } if (a == r)t.host = i.host, t.path = i.path.slice(), t.query = i.query; else if (a == '?')t.host = i.host, t.path = i.path.slice(), t.query = '', c = kt; else { if (a != '#') { nt(o.slice(u).join('')) || (t.host = i.host, t.path = i.path.slice(), rt(t)), c = xt; continue; }t.host = i.host, t.path = i.path.slice(), t.query = i.query, t.fragment = '', c = Pt; } } break; case wt: if (a == '/' || a == '\\') { c = Ot; break; }i && i.scheme == 'file' && !nt(o.slice(u).join('')) && (et(i.path[0], !0) ? t.path.push(i.path[0]) : t.host = i.host), c = xt; continue; case Ot: if (a == r || a == '/' || a == '\\' || a == '?' || a == '#') { if (!n && et(d))c = xt; else if (d == '') { if (t.host = '', n) return; c = St; } else { if (l = V(t, d), l) return l; if (t.host == 'localhost' && (t.host = ''), n) return; d = '', c = St; } continue; }d += a; break; case St: if (Z(t)) { if (c = xt, a != '/' && a != '\\') continue; } else if (n || a != '?') if (n || a != '#') { if (a != r && (c = xt, a != '/')) continue; } else t.fragment = '', c = Pt; else t.query = '', c = kt; break; case xt: if (a == r || a == '/' || a == '\\' && Z(t) || !n && (a == '?' || a == '#')) { if (ot(d) ? (rt(t), a == '/' || a == '\\' && Z(t) || t.path.push('')) : it(d) ? a == '/' || a == '\\' && Z(t) || t.path.push('') : (t.scheme == 'file' && !t.path.length && et(d) && (t.host && (t.host = ''), d = `${d.charAt(0)}:`), t.path.push(d)), d = '', t.scheme == 'file' && (a == r || a == '?' || a == '#')) while (t.path.length > 1 && t.path[0] === '')t.path.shift(); a == '?' ? (t.query = '', c = kt) : a == '#' && (t.fragment = '', c = Pt); } else d += X(a, Y); break; case Tt: a == '?' ? (t.query = '', c = kt) : a == '#' ? (t.fragment = '', c = Pt) : a != r && (t.path[0] += X(a, W)); break; case kt: n || a != '#' ? a != r && (a == "'" && Z(t) ? t.query += '%27' : t.query += a == '#' ? '%23' : X(a, W)) : (t.fragment = '', c = Pt); break; case Pt: a != r && (t.fragment += X(a, q)); break; }u++; } }; var Ct = function (t) {
      let e; let n; const r = u(this, Ct, 'URL'); const i = arguments.length > 1 ? arguments[1] : void 0; const a = String(t); const s = S(r, { type: 'URL' }); if (void 0 !== i) if (i instanceof Ct)e = x(i); else if (n = jt(e = {}, String(i)), n) throw TypeError(n); if (n = jt(s, a, null, e), n) throw TypeError(n); const l = s.searchParams = new w(); const
        c = O(l); c.updateSearchParams(s.query), c.updateURL = function () { s.query = String(l) || null; }, o || (r.href = Bt.call(r), r.origin = Dt.call(r), r.protocol = Et.call(r), r.username = $t.call(r), r.password = At.call(r), r.host = It.call(r), r.hostname = Ft.call(r), r.port = Lt.call(r), r.pathname = Rt.call(r), r.search = Mt.call(r), r.searchParams = Nt.call(r), r.hash = Vt.call(r));
    }; const _t = Ct.prototype; var Bt = function () { const t = x(this); const e = t.scheme; const n = t.username; const r = t.password; const i = t.host; const o = t.port; const a = t.path; const s = t.query; const l = t.fragment; let c = `${e}:`; return i !== null ? (c += '//', Q(t) && (c += `${n + (r ? `:${r}` : '')}@`), c += U(i), o !== null && (c += `:${o}`)) : e == 'file' && (c += '//'), c += t.cannotBeABaseURL ? a[0] : a.length ? `/${a.join('/')}` : '', s !== null && (c += `?${s}`), l !== null && (c += `#${l}`), c; }; var Dt = function () { const t = x(this); const e = t.scheme; const n = t.port; if (e == 'blob') try { return new URL(e.path[0]).origin; } catch (r) { return 'null'; } return e != 'file' && Z(t) ? `${e}://${U(t.host)}${n !== null ? `:${n}` : ''}` : 'null'; }; var Et = function () { return `${x(this).scheme}:`; }; var $t = function () { return x(this).username; }; var At = function () { return x(this).password; }; var It = function () { const t = x(this); const e = t.host; const n = t.port; return e === null ? '' : n === null ? U(e) : `${U(e)}:${n}`; }; var Ft = function () { const t = x(this).host; return t === null ? '' : U(t); }; var Lt = function () { const t = x(this).port; return t === null ? '' : String(t); }; var Rt = function () { const t = x(this); const e = t.path; return t.cannotBeABaseURL ? e[0] : e.length ? `/${e.join('/')}` : ''; }; var Mt = function () { const t = x(this).query; return t ? `?${t}` : ''; }; var Nt = function () { return x(this).searchParams; }; var Vt = function () { const t = x(this).fragment; return t ? `#${t}` : ''; }; const zt = function (t, e) {
      return {
        get: t, set: e, configurable: !0, enumerable: !0,
      };
    }; if (o && l(_t, {
      href: zt(Bt, (function (t) { const e = x(this); const n = String(t); const r = jt(e, n); if (r) throw TypeError(r); O(e.searchParams).updateSearchParams(e.query); })), origin: zt(Dt), protocol: zt(Et, (function (t) { const e = x(this); jt(e, `${String(t)}:`, at); })), username: zt($t, (function (t) { const e = x(this); const n = h(String(t)); if (!tt(e)) { e.username = ''; for (let r = 0; r < n.length; r++)e.username += X(n[r], K); } })), password: zt(At, (function (t) { const e = x(this); const n = h(String(t)); if (!tt(e)) { e.password = ''; for (let r = 0; r < n.length; r++)e.password += X(n[r], K); } })), host: zt(It, (function (t) { const e = x(this); e.cannotBeABaseURL || jt(e, String(t), bt); })), hostname: zt(Ft, (function (t) { const e = x(this); e.cannotBeABaseURL || jt(e, String(t), mt); })), port: zt(Lt, (function (t) { const e = x(this); tt(e) || (t = String(t), t == '' ? e.port = null : jt(e, t, yt)); })), pathname: zt(Rt, (function (t) { const e = x(this); e.cannotBeABaseURL || (e.path = [], jt(e, `${t}`, St)); })), search: zt(Mt, (function (t) { const e = x(this); t = String(t), t == '' ? e.query = null : (t.charAt(0) == '?' && (t = t.slice(1)), e.query = '', jt(e, t, kt)), O(e.searchParams).updateSearchParams(e.query); })), searchParams: zt(Nt), hash: zt(Vt, (function (t) { const e = x(this); t = String(t), t != '' ? (t.charAt(0) == '#' && (t = t.slice(1)), e.fragment = '', jt(e, t, Pt)) : e.fragment = null; })),
    }), c(_t, 'toJSON', (function () { return Bt.call(this); }), { enumerable: !0 }), c(_t, 'toString', (function () { return Bt.call(this); }), { enumerable: !0 }), g) { const Ht = g.createObjectURL; const Gt = g.revokeObjectURL; Ht && c(Ct, 'createObjectURL', (function (t) { return Ht.apply(g, arguments); })), Gt && c(Ct, 'revokeObjectURL', (function (t) { return Gt.apply(g, arguments); })); }b(Ct, 'URL'), i({ global: !0, forced: !a, sham: !o }, { URL: Ct });
  },
  '2b88': function (t, e, n) {
    /*!
  * portal-vue © Thorsten Lünborg, 2019
  *
  * Version: 2.1.7
  *
  * LICENCE: MIT
  *
  * https://github.com/linusborg/portal-vue
  *
 */function r(t) { return t && typeof t === 'object' && 'default' in t ? t.default : t; }Object.defineProperty(e, '__esModule', { value: !0 }); const i = r(n('2b0e')); function o(t) { return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, o(t); } function a(t) { return s(t) || l(t) || c(); } function s(t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e]; return n; } } function l(t) { if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === '[object Arguments]') return Array.from(t); } function c() { throw new TypeError('Invalid attempt to spread non-iterable instance'); } const u = typeof window !== 'undefined'; function f(t) { return Array.isArray(t) || o(t) === 'object' ? Object.freeze(t) : t; } function d(t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return t.reduce(((t, n) => { const r = n.passengers[0]; const i = typeof r === 'function' ? r(e) : n.passengers; return t.concat(i); }), []); } function h(t, e) { return t.map(((t, e) => [e, t])).sort(((t, n) => e(t[1], n[1]) || t[0] - n[0])).map(((t) => t[1])); } function p(t, e) { return e.reduce(((e, n) => (t.hasOwnProperty(n) && (e[n] = t[n]), e)), {}); } const v = {}; const b = {}; const m = {}; const y = i.extend({
      data() {
        return {
          transports: v, targets: b, sources: m, trackInstances: u,
        };
      },
      methods: {
        open(t) {
          if (u) {
            const e = t.to; const n = t.from; const r = t.passengers; const o = t.order; const a = void 0 === o ? 1 / 0 : o; if (e && n && r) {
              const s = {
                to: e, from: n, passengers: f(r), order: a,
              }; const l = Object.keys(this.transports); l.indexOf(e) === -1 && i.set(this.transports, e, []); const c = this.$_getTransportIndex(s); const d = this.transports[e].slice(0); c === -1 ? d.push(s) : d[c] = s, this.transports[e] = h(d, ((t, e) => t.order - e.order));
            }
          }
        },
        close(t) { const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; const n = t.to; const r = t.from; if (n && (r || !1 !== e) && this.transports[n]) if (e) this.transports[n] = []; else { const i = this.$_getTransportIndex(t); if (i >= 0) { const o = this.transports[n].slice(0); o.splice(i, 1), this.transports[n] = o; } } },
        registerTarget(t, e, n) { u && (this.trackInstances && !n && this.targets[t] && console.warn('[portal-vue]: Target '.concat(t, ' already exists')), this.$set(this.targets, t, Object.freeze([e]))); },
        unregisterTarget(t) { this.$delete(this.targets, t); },
        registerSource(t, e, n) { u && (this.trackInstances && !n && this.sources[t] && console.warn('[portal-vue]: source '.concat(t, ' already exists')), this.$set(this.sources, t, Object.freeze([e]))); },
        unregisterSource(t) { this.$delete(this.sources, t); },
        hasTarget(t) { return !(!this.targets[t] || !this.targets[t][0]); },
        hasSource(t) { return !(!this.sources[t] || !this.sources[t][0]); },
        hasContentFor(t) { return !!this.transports[t] && !!this.transports[t].length; },
        $_getTransportIndex(t) { const e = t.to; const n = t.from; for (const r in this.transports[e]) if (this.transports[e][r].from === n) return +r; return -1; },
      },
    }); const g = new y(v); let w = 1; const O = i.extend({
      name: 'portal',
      props: {
        disabled: { type: Boolean }, name: { type: String, default() { return String(w++); } }, order: { type: Number, default: 0 }, slim: { type: Boolean }, slotProps: { type: Object, default() { return {}; } }, tag: { type: String, default: 'DIV' }, to: { type: String, default() { return String(Math.round(1e7 * Math.random())); } },
      },
      created() { const t = this; this.$nextTick((() => { g.registerSource(t.name, t); })); },
      mounted() { this.disabled || this.sendUpdate(); },
      updated() { this.disabled ? this.clear() : this.sendUpdate(); },
      beforeDestroy() { g.unregisterSource(this.name), this.clear(); },
      watch: { to(t, e) { e && e !== t && this.clear(e), this.sendUpdate(); } },
      methods: {
        clear(t) { const e = { from: this.name, to: t || this.to }; g.close(e); },
        normalizeSlots() { return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default; },
        normalizeOwnChildren(t) { return typeof t === 'function' ? t(this.slotProps) : t; },
        sendUpdate() {
          const t = this.normalizeSlots(); if (t) {
            const e = {
              from: this.name, to: this.to, passengers: a(t), order: this.order,
            }; g.open(e);
          } else this.clear();
        },
      },
      render(t) { const e = this.$slots.default || this.$scopedSlots.default || []; const n = this.tag; return e && this.disabled ? e.length <= 1 && this.slim ? this.normalizeOwnChildren(e)[0] : t(n, [this.normalizeOwnChildren(e)]) : this.slim ? t() : t(n, { class: { 'v-portal': !0 }, style: { display: 'none' }, key: 'v-portal-placeholder' }); },
    }); const S = i.extend({
      name: 'portalTarget',
      props: {
        multiple: { type: Boolean, default: !1 }, name: { type: String, required: !0 }, slim: { type: Boolean, default: !1 }, slotProps: { type: Object, default() { return {}; } }, tag: { type: String, default: 'div' }, transition: { type: [String, Object, Function] },
      },
      data() { return { transports: g.transports, firstRender: !0 }; },
      created() { const t = this; this.$nextTick((() => { g.registerTarget(t.name, t); })); },
      watch: { ownTransports() { this.$emit('change', this.children().length > 0); }, name(t, e) { g.unregisterTarget(e), g.registerTarget(t, this); } },
      mounted() { const t = this; this.transition && this.$nextTick((() => { t.firstRender = !1; })); },
      beforeDestroy() { g.unregisterTarget(this.name); },
      computed: { ownTransports() { const t = this.transports[this.name] || []; return this.multiple ? t : t.length === 0 ? [] : [t[t.length - 1]]; }, passengers() { return d(this.ownTransports, this.slotProps); } },
      methods: { children() { return this.passengers.length !== 0 ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || []; }, noWrapper() { const t = this.slim && !this.transition; return t && this.children().length > 1 && console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.'), t; } },
      render(t) { const e = this.noWrapper(); const n = this.children(); const r = this.transition || this.tag; return e ? n[0] : this.slim && !r ? t() : t(r, { props: { tag: this.transition && this.tag ? this.tag : void 0 }, class: { 'vue-portal-target': !0 } }, n); },
    }); let x = 0; const T = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to']; const k = ['multiple', 'transition']; const P = i.extend({
      name: 'MountingPortal',
      inheritAttrs: !1,
      props: {
        append: { type: [Boolean, String] }, bail: { type: Boolean }, mountTo: { type: String, required: !0 }, disabled: { type: Boolean }, name: { type: String, default() { return `mounted_${String(x++)}`; } }, order: { type: Number, default: 0 }, slim: { type: Boolean }, slotProps: { type: Object, default() { return {}; } }, tag: { type: String, default: 'DIV' }, to: { type: String, default() { return String(Math.round(1e7 * Math.random())); } }, multiple: { type: Boolean, default: !1 }, targetSlim: { type: Boolean }, targetSlotProps: { type: Object, default() { return {}; } }, targetTag: { type: String, default: 'div' }, transition: { type: [String, Object, Function] },
      },
      created() {
        if (typeof document !== 'undefined') {
          let t = document.querySelector(this.mountTo); if (t) {
            const e = this.$props; if (g.targets[e.name])e.bail ? console.warn('[portal-vue]: Target '.concat(e.name, " is already mounted.\n        Aborting because 'bail: true' is set")) : this.portalTarget = g.targets[e.name]; else {
              const n = e.append; if (n) {
                const r = typeof n === 'string' ? n : 'DIV'; const
                  i = document.createElement(r); t.appendChild(i), t = i;
              } const o = p(this.$props, k); o.slim = this.targetSlim, o.tag = this.targetTag, o.slotProps = this.targetSlotProps, o.name = this.to, this.portalTarget = new S({ el: t, parent: this.$parent || this, propsData: o });
            }
          } else console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
        }
      },
      beforeDestroy() { const t = this.portalTarget; if (this.append) { const e = t.$el; e.parentNode.removeChild(e); }t.$destroy(); },
      render(t) {
        if (!this.portalTarget) return console.warn("[portal-vue] Target wasn't mounted"), t(); if (!this.$scopedSlots.manual) {
          const e = p(this.$props, T); return t(O, {
            props: e, attrs: this.$attrs, on: this.$listeners, scopedSlots: this.$scopedSlots,
          }, this.$slots.default);
        } let n = this.$scopedSlots.manual({ to: this.to }); return Array.isArray(n) && (n = n[0]), n || t();
      },
    }); function j(t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; t.component(e.portalName || 'Portal', O), t.component(e.portalTargetName || 'PortalTarget', S), t.component(e.MountingPortalName || 'MountingPortal', P); } const C = { install: j }; e.default = C, e.Portal = O, e.PortalTarget = S, e.MountingPortal = P, e.Wormhole = g;
  },
  '2ba0': function (t, e, n) { const r = n('7024'); t.exports = function (t, e, n) { for (const i in e)r(t, i, e[i], n); return t; }; },
  '2caf': function (t, e, n) {
    n.d(e, 'a', (() => l)); n('4ae1'), n('3410'); function r(t) { return r = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, r(t); }n('d3b7'), n('25f0'); function i() { if (typeof Reflect === 'undefined' || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if (typeof Proxy === 'function') return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (() => {}))), !0; } catch (t) { return !1; } }n('a4d3'), n('e01a'), n('d28b'), n('e260'), n('3ca3'), n('ddb0'); function o(t) { return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, o(t); } function a(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t; } function s(t, e) { return !e || o(e) !== 'object' && typeof e !== 'function' ? a(t) : e; } function l(t) { const e = i(); return function () { let n; const i = r(t); if (e) { const o = r(this).constructor; n = Reflect.construct(i, arguments, o); } else n = i.apply(this, arguments); return s(this, n); }; }
  },
  '2cf4': function (t, e, n) { let r; let i; let o; const a = n('da84'); const s = n('d039'); const l = n('c6b6'); const c = n('0366'); const u = n('1be4'); const f = n('cc12'); const d = n('1cdc'); const h = a.location; let p = a.setImmediate; let v = a.clearImmediate; const b = a.process; const m = a.MessageChannel; const y = a.Dispatch; let g = 0; const w = {}; const O = 'onreadystatechange'; const S = function (t) { if (w.hasOwnProperty(t)) { const e = w[t]; delete w[t], e(); } }; const x = function (t) { return function () { S(t); }; }; const T = function (t) { S(t.data); }; const k = function (t) { a.postMessage(`${t}`, `${h.protocol}//${h.host}`); }; p && v || (p = function (t) { const e = []; let n = 1; while (arguments.length > n)e.push(arguments[n++]); return w[++g] = function () { (typeof t === 'function' ? t : Function(t)).apply(void 0, e); }, r(g), g; }, v = function (t) { delete w[t]; }, l(b) == 'process' ? r = function (t) { b.nextTick(x(t)); } : y && y.now ? r = function (t) { y.now(x(t)); } : m && !d ? (i = new m(), o = i.port2, i.port1.onmessage = T, r = c(o.postMessage, o, 1)) : !a.addEventListener || typeof postMessage !== 'function' || a.importScripts || s(k) ? r = O in f('script') ? function (t) { u.appendChild(f('script'))[O] = function () { u.removeChild(this), S(t); }; } : function (t) { setTimeout(x(t), 0); } : (r = k, a.addEventListener('message', T, !1))), t.exports = { set: p, clear: v }; },
  '2d00': function (t, e, n) { let r; let i; const o = n('da84'); const a = n('342f'); const s = o.process; const l = s && s.versions; const c = l && l.v8; c ? (r = c.split('.'), i = r[0] + r[1]) : a && (r = a.match(/Edge\/(\d+)/), (!r || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/), r && (i = r[1]))), t.exports = i && +i; },
  '2d0a': function (t, e, n) { const r = n('7f34'); const i = n('b973'); const o = n('2439'); const a = n('4c07'); t.exports = function (t, e) { for (let n = i(e), s = a.f, l = o.f, c = 0; c < n.length; c++) { const u = n[c]; r(t, u) || s(t, u, l(e, u)); } }; },
  '2f62': function (t, e, n) {
    (function (t) {
    /**
 * vuex v3.1.3
 * (c) 2020 Evan You
 * @license MIT
 */
      function r(t) { const e = Number(t.version.split('.')[0]); if (e >= 2)t.mixin({ beforeCreate: r }); else { const n = t.prototype._init; t.prototype._init = function (t) { void 0 === t && (t = {}), t.init = t.init ? [r].concat(t.init) : r, n.call(this, t); }; } function r() { const t = this.$options; t.store ? this.$store = typeof t.store === 'function' ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store); } }n.d(e, 'e', (() => D)), n.d(e, 'd', (() => E)), n.d(e, 'c', (() => $)), n.d(e, 'b', (() => A)); const i = typeof window !== 'undefined' ? window : typeof t !== 'undefined' ? t : {}; const o = i.__VUE_DEVTOOLS_GLOBAL_HOOK__; function a(t) { o && (t._devtoolHook = o, o.emit('vuex:init', t), o.on('vuex:travel-to-state', ((e) => { t.replaceState(e); })), t.subscribe(((t, e) => { o.emit('vuex:mutation', t, e); }))); } function s(t, e) { Object.keys(t).forEach(((n) => e(t[n], n))); } function l(t) { return t !== null && typeof t === 'object'; } function c(t) { return t && typeof t.then === 'function'; } function u(t, e) { return function () { return t(e); }; } const f = function (t, e) { this.runtime = e, this._children = Object.create(null), this._rawModule = t; const n = t.state; this.state = (typeof n === 'function' ? n() : n) || {}; }; const d = { namespaced: { configurable: !0 } }; d.namespaced.get = function () { return !!this._rawModule.namespaced; }, f.prototype.addChild = function (t, e) { this._children[t] = e; }, f.prototype.removeChild = function (t) { delete this._children[t]; }, f.prototype.getChild = function (t) { return this._children[t]; }, f.prototype.update = function (t) { this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters); }, f.prototype.forEachChild = function (t) { s(this._children, t); }, f.prototype.forEachGetter = function (t) { this._rawModule.getters && s(this._rawModule.getters, t); }, f.prototype.forEachAction = function (t) { this._rawModule.actions && s(this._rawModule.actions, t); }, f.prototype.forEachMutation = function (t) { this._rawModule.mutations && s(this._rawModule.mutations, t); }, Object.defineProperties(f.prototype, d); const h = function (t) { this.register([], t, !1); }; function p(t, e, n) { if (e.update(n), n.modules) for (const r in n.modules) { if (!e.getChild(r)) return void 0; p(t.concat(r), e.getChild(r), n.modules[r]); } }h.prototype.get = function (t) { return t.reduce(((t, e) => t.getChild(e)), this.root); }, h.prototype.getNamespace = function (t) { let e = this.root; return t.reduce(((t, n) => (e = e.getChild(n), t + (e.namespaced ? `${n}/` : ''))), ''); }, h.prototype.update = function (t) { p([], this.root, t); }, h.prototype.register = function (t, e, n) { const r = this; void 0 === n && (n = !0); const i = new f(e, n); if (t.length === 0) this.root = i; else { const o = this.get(t.slice(0, -1)); o.addChild(t[t.length - 1], i); }e.modules && s(e.modules, ((e, i) => { r.register(t.concat(i), e, n); })); }, h.prototype.unregister = function (t) { const e = this.get(t.slice(0, -1)); const n = t[t.length - 1]; e.getChild(n).runtime && e.removeChild(n); }; let v; const b = function (t) { const e = this; void 0 === t && (t = {}), !v && typeof window !== 'undefined' && window.Vue && B(window.Vue); let n = t.plugins; void 0 === n && (n = []); let r = t.strict; void 0 === r && (r = !1), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new h(t), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new v(), this._makeLocalGettersCache = Object.create(null); const i = this; const o = this; const s = o.dispatch; const l = o.commit; this.dispatch = function (t, e) { return s.call(i, t, e); }, this.commit = function (t, e, n) { return l.call(i, t, e, n); }, this.strict = r; const c = this._modules.root.state; O(this, c, [], this._modules.root), w(this, c), n.forEach(((t) => t(e))); const u = void 0 !== t.devtools ? t.devtools : v.config.devtools; u && a(this); }; const m = { state: { configurable: !0 } }; function y(t, e) { return e.indexOf(t) < 0 && e.push(t), function () { const n = e.indexOf(t); n > -1 && e.splice(n, 1); }; } function g(t, e) { t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), t._modulesNamespaceMap = Object.create(null); const n = t.state; O(t, n, [], t._modules.root, !0), w(t, n, e); } function w(t, e, n) { const r = t._vm; t.getters = {}, t._makeLocalGettersCache = Object.create(null); const i = t._wrappedGetters; const o = {}; s(i, ((e, n) => { o[n] = u(e, t), Object.defineProperty(t.getters, n, { get() { return t._vm[n]; }, enumerable: !0 }); })); const a = v.config.silent; v.config.silent = !0, t._vm = new v({ data: { $$state: e }, computed: o }), v.config.silent = a, t.strict && j(t), r && (n && t._withCommit((() => { r._data.$$state = null; })), v.nextTick((() => r.$destroy()))); } function O(t, e, n, r, i) { const o = !n.length; const a = t._modules.getNamespace(n); if (r.namespaced && (t._modulesNamespaceMap[a], t._modulesNamespaceMap[a] = r), !o && !i) { const s = C(e, n.slice(0, -1)); const l = n[n.length - 1]; t._withCommit((() => { v.set(s, l, r.state); })); } const c = r.context = S(t, a, n); r.forEachMutation(((e, n) => { const r = a + n; T(t, r, e, c); })), r.forEachAction(((e, n) => { const r = e.root ? n : a + n; const i = e.handler || e; k(t, r, i, c); })), r.forEachGetter(((e, n) => { const r = a + n; P(t, r, e, c); })), r.forEachChild(((r, o) => { O(t, e, n.concat(o), r, i); })); } function S(t, e, n) { const r = e === ''; const i = { dispatch: r ? t.dispatch : function (n, r, i) { const o = _(n, r, i); const a = o.payload; const s = o.options; let l = o.type; return s && s.root || (l = e + l), t.dispatch(l, a); }, commit: r ? t.commit : function (n, r, i) { const o = _(n, r, i); const a = o.payload; const s = o.options; let l = o.type; s && s.root || (l = e + l), t.commit(l, a, s); } }; return Object.defineProperties(i, { getters: { get: r ? function () { return t.getters; } : function () { return x(t, e); } }, state: { get() { return C(t.state, n); } } }), i; } function x(t, e) { if (!t._makeLocalGettersCache[e]) { const n = {}; const r = e.length; Object.keys(t.getters).forEach(((i) => { if (i.slice(0, r) === e) { const o = i.slice(r); Object.defineProperty(n, o, { get() { return t.getters[i]; }, enumerable: !0 }); } })), t._makeLocalGettersCache[e] = n; } return t._makeLocalGettersCache[e]; } function T(t, e, n, r) { const i = t._mutations[e] || (t._mutations[e] = []); i.push(((e) => { n.call(t, r.state, e); })); } function k(t, e, n, r) {
        const i = t._actions[e] || (t._actions[e] = []); i.push(((e) => {
          let i = n.call(t, {
            dispatch: r.dispatch, commit: r.commit, getters: r.getters, state: r.state, rootGetters: t.getters, rootState: t.state,
          }, e); return c(i) || (i = Promise.resolve(i)), t._devtoolHook ? i.catch(((e) => { throw t._devtoolHook.emit('vuex:error', e), e; })) : i;
        }));
      } function P(t, e, n, r) { t._wrappedGetters[e] || (t._wrappedGetters[e] = function (t) { return n(r.state, r.getters, t.state, t.getters); }); } function j(t) { t._vm.$watch((function () { return this._data.$$state; }), (() => { 0; }), { deep: !0, sync: !0 }); } function C(t, e) { return e.reduce(((t, e) => t[e]), t); } function _(t, e, n) { return l(t) && t.type && (n = e, e = t, t = t.type), { type: t, payload: e, options: n }; } function B(t) { v && t === v || (v = t, r(v)); }m.state.get = function () { return this._vm._data.$$state; }, m.state.set = function (t) { 0; }, b.prototype.commit = function (t, e, n) { const r = this; const i = _(t, e, n); const o = i.type; const a = i.payload; const s = (i.options, { type: o, payload: a }); const l = this._mutations[o]; l && (this._withCommit((() => { l.forEach(((t) => { t(a); })); })), this._subscribers.slice().forEach(((t) => t(s, r.state)))); }, b.prototype.dispatch = function (t, e) { const n = this; const r = _(t, e); const i = r.type; const o = r.payload; const a = { type: i, payload: o }; const s = this._actions[i]; if (s) { try { this._actionSubscribers.slice().filter(((t) => t.before)).forEach(((t) => t.before(a, n.state))); } catch (c) { 0; } const l = s.length > 1 ? Promise.all(s.map(((t) => t(o)))) : s[0](o); return l.then(((t) => { try { n._actionSubscribers.filter(((t) => t.after)).forEach(((t) => t.after(a, n.state))); } catch (c) { 0; } return t; })); } }, b.prototype.subscribe = function (t) { return y(t, this._subscribers); }, b.prototype.subscribeAction = function (t) { const e = typeof t === 'function' ? { before: t } : t; return y(e, this._actionSubscribers); }, b.prototype.watch = function (t, e, n) { const r = this; return this._watcherVM.$watch((() => t(r.state, r.getters)), e, n); }, b.prototype.replaceState = function (t) { const e = this; this._withCommit((() => { e._vm._data.$$state = t; })); }, b.prototype.registerModule = function (t, e, n) { void 0 === n && (n = {}), typeof t === 'string' && (t = [t]), this._modules.register(t, e), O(this, this.state, t, this._modules.get(t), n.preserveState), w(this, this.state); }, b.prototype.unregisterModule = function (t) { const e = this; typeof t === 'string' && (t = [t]), this._modules.unregister(t), this._withCommit((() => { const n = C(e.state, t.slice(0, -1)); v.delete(n, t[t.length - 1]); })), g(this); }, b.prototype.hotUpdate = function (t) { this._modules.update(t), g(this, !0); }, b.prototype._withCommit = function (t) { const e = this._committing; this._committing = !0, t(), this._committing = e; }, Object.defineProperties(b.prototype, m); var D = R(((t, e) => { const n = {}; return F(e).forEach(((e) => { const r = e.key; const i = e.val; n[r] = function () { let e = this.$store.state; let n = this.$store.getters; if (t) { const r = M(this.$store, 'mapState', t); if (!r) return; e = r.context.state, n = r.context.getters; } return typeof i === 'function' ? i.call(this, e, n) : e[i]; }, n[r].vuex = !0; })), n; })); var E = R(((t, e) => { const n = {}; return F(e).forEach(((e) => { const r = e.key; const i = e.val; n[r] = function () { const e = []; let n = arguments.length; while (n--)e[n] = arguments[n]; let r = this.$store.commit; if (t) { const o = M(this.$store, 'mapMutations', t); if (!o) return; r = o.context.commit; } return typeof i === 'function' ? i.apply(this, [r].concat(e)) : r.apply(this.$store, [i].concat(e)); }; })), n; })); var $ = R(((t, e) => { const n = {}; return F(e).forEach(((e) => { const r = e.key; let i = e.val; i = t + i, n[r] = function () { if (!t || M(this.$store, 'mapGetters', t)) return this.$store.getters[i]; }, n[r].vuex = !0; })), n; })); var A = R(((t, e) => { const n = {}; return F(e).forEach(((e) => { const r = e.key; const i = e.val; n[r] = function () { const e = []; let n = arguments.length; while (n--)e[n] = arguments[n]; let r = this.$store.dispatch; if (t) { const o = M(this.$store, 'mapActions', t); if (!o) return; r = o.context.dispatch; } return typeof i === 'function' ? i.apply(this, [r].concat(e)) : r.apply(this.$store, [i].concat(e)); }; })), n; })); const I = function (t) {
        return {
          mapState: D.bind(null, t), mapGetters: $.bind(null, t), mapMutations: E.bind(null, t), mapActions: A.bind(null, t),
        };
      }; function F(t) { return L(t) ? Array.isArray(t) ? t.map(((t) => ({ key: t, val: t }))) : Object.keys(t).map(((e) => ({ key: e, val: t[e] }))) : []; } function L(t) { return Array.isArray(t) || l(t); } function R(t) { return function (e, n) { return typeof e !== 'string' ? (n = e, e = '') : e.charAt(e.length - 1) !== '/' && (e += '/'), t(e, n); }; } function M(t, e, n) { const r = t._modulesNamespaceMap[n]; return r; } const N = {
        Store: b, install: B, version: '3.1.3', mapState: D, mapMutations: E, mapGetters: $, mapActions: A, createNamespacedHelpers: I,
      }; e.a = N;
    }).call(this, n('c8ba'));
  },
  '2fe1': function (t, e, n) {
    n.d(e, 'a', (() => v)); const r = n('2b0e');
    /**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */function i(t) { return i = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, i(t); } function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } function a(t) { return s(t) || l(t) || c(); } function s(t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e]; return n; } } function l(t) { if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === '[object Arguments]') return Array.from(t); } function c() { throw new TypeError('Invalid attempt to spread non-iterable instance'); } function u() { return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys; } function f(t, e) { d(t, e), Object.getOwnPropertyNames(e.prototype).forEach(((n) => { d(t.prototype, e.prototype, n); })), Object.getOwnPropertyNames(e).forEach(((n) => { d(t, e, n); })); } function d(t, e, n) { const r = n ? Reflect.getOwnMetadataKeys(e, n) : Reflect.getOwnMetadataKeys(e); r.forEach(((r) => { const i = n ? Reflect.getOwnMetadata(r, e, n) : Reflect.getOwnMetadata(r, e); n ? Reflect.defineMetadata(r, i, t, n) : Reflect.defineMetadata(r, i, t); })); } const h = { __proto__: [] }; const p = h instanceof Array; function v(t) { return function (e, n, r) { const i = typeof e === 'function' ? e : e.constructor; i.__decorators__ || (i.__decorators__ = []), typeof r !== 'number' && (r = void 0), i.__decorators__.push(((e) => t(e, n, r))); }; } function b(t) { const e = i(t); return t == null || e !== 'object' && e !== 'function'; } function m(t, e) { const n = e.prototype._init; e.prototype._init = function () { const e = this; const n = Object.getOwnPropertyNames(t); if (t.$options.props) for (const r in t.$options.props)t.hasOwnProperty(r) || n.push(r); n.forEach(((n) => { n.charAt(0) !== '_' && Object.defineProperty(e, n, { get() { return t[n]; }, set(e) { t[n] = e; }, configurable: !0 }); })); }; const r = new e(); e.prototype._init = n; const i = {}; return Object.keys(r).forEach(((t) => { void 0 !== r[t] && (i[t] = r[t]); })), i; } const y = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch']; function g(t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; e.name = e.name || t._componentTag || t.name; const n = t.prototype; Object.getOwnPropertyNames(n).forEach(((t) => { if (t !== 'constructor') if (y.indexOf(t) > -1)e[t] = n[t]; else { const r = Object.getOwnPropertyDescriptor(n, t); void 0 !== r.value ? typeof r.value === 'function' ? (e.methods || (e.methods = {}))[t] = r.value : (e.mixins || (e.mixins = [])).push({ data() { return o({}, t, r.value); } }) : (r.get || r.set) && ((e.computed || (e.computed = {}))[t] = { get: r.get, set: r.set }); } })), (e.mixins || (e.mixins = [])).push({ data() { return m(this, t); } }); const i = t.__decorators__; i && (i.forEach(((t) => t(e))), delete t.__decorators__); const a = Object.getPrototypeOf(t.prototype); const s = a instanceof r.default ? a.constructor : r.default; const l = s.extend(e); return O(l, t, s), u() && f(l, t), l; } const w = {
      prototype: !0, arguments: !0, callee: !0, caller: !0,
    }; function O(t, e, n) { Object.getOwnPropertyNames(e).forEach(((r) => { if (!w[r]) { const i = Object.getOwnPropertyDescriptor(t, r); if (!i || i.configurable) { const o = Object.getOwnPropertyDescriptor(e, r); if (!p) { if (r === 'cid') return; const a = Object.getOwnPropertyDescriptor(n, r); if (!b(o.value) && a && a.value === o.value) return; }0, Object.defineProperty(t, r, o); } } })); } function S(t) { return typeof t === 'function' ? g(t) : function (e) { return g(e, t); }; }S.registerHooks = function (t) { y.push.apply(y, a(t)); }, e.b = S;
  },
  3261(t, e, n) { const r = n('0368'); const i = n('4c07'); const o = n('8d23'); t.exports = r ? function (t, e, n) { return i.f(t, e, o(1, n)); } : function (t, e, n) { return t[e] = n, t; }; },
  3410(t, e, n) {
    const r = n('23e7'); const i = n('d039'); const o = n('7b0b'); const a = n('e163'); const s = n('e177'); const l = i((() => { a(1); })); r({
      target: 'Object', stat: !0, forced: l, sham: !s,
    }, { getPrototypeOf(t) { return a(o(t)); } });
  },
  '342f': function (t, e, n) { const r = n('d066'); t.exports = r('navigator', 'userAgent') || ''; },
  '35a1': function (t, e, n) { const r = n('f5df'); const i = n('3f8c'); const o = n('b622'); const a = o('iterator'); t.exports = function (t) { if (void 0 != t) return t[a] || t['@@iterator'] || i[r(t)]; }; },
  '37e1': function (t, e, n) {
    const r = n('199f'); const i = n('0f33'); const o = n('c85d'); const a = n('a714'); const s = n('0ee6'); const l = n('894d'); const c = n('8fe4'); const u = n('7024'); const f = !!o && a((() => { o.prototype.finally.call({ then() {} }, (() => {})); })); r({
      target: 'Promise', proto: !0, real: !0, forced: f,
    }, { finally(t) { const e = l(this, s('Promise')); const n = typeof t === 'function'; return this.then(n ? (n) => c(e, t()).then((() => n)) : t, n ? (n) => c(e, t()).then((() => { throw n; })) : t); } }), i || typeof o !== 'function' || o.prototype.finally || u(o.prototype, 'finally', s('Promise').prototype.finally);
  },
  '37e8': function (t, e, n) { const r = n('83ab'); const i = n('9bf2'); const o = n('825a'); const a = n('df75'); t.exports = r ? Object.defineProperties : function (t, e) { o(t); let n; const r = a(e); const s = r.length; let l = 0; while (s > l)i.f(t, n = r[l++], e[n]); return t; }; },
  '3bbe': function (t, e, n) { const r = n('861d'); t.exports = function (t) { if (!r(t) && t !== null) throw TypeError(`Can't set ${String(t)} as a prototype`); return t; }; },
  '3ca3': function (t, e, n) {
    const r = n('6547').charAt; const i = n('69f3'); const o = n('7dd0'); const a = 'String Iterator'; const s = i.set; const l = i.getterFor(a); o(String, 'String', (function (t) { s(this, { type: a, string: String(t), index: 0 }); }), (function () { let t; const e = l(this); const n = e.string; const i = e.index; return i >= n.length ? { value: void 0, done: !0 } : (t = r(n, i), e.index += t.length, { value: t, done: !1 }); }));
  },
  '3f8c': function (t, e) { t.exports = {}; },
  '428f': function (t, e, n) { const r = n('da84'); t.exports = r; },
  4362(t, e, n) { e.nextTick = function (t) { const e = Array.prototype.slice.call(arguments); e.shift(), setTimeout((() => { t.apply(null, e); }), 0); }, e.platform = e.arch = e.execPath = e.title = 'browser', e.pid = 1, e.browser = !0, e.env = {}, e.argv = [], e.binding = function (t) { throw new Error('No such module. (Possibly not yet loaded)'); }, (function () { let t; let r = '/'; e.cwd = function () { return r; }, e.chdir = function (e) { t || (t = n('df7c')), r = t.resolve(e, r); }; }()), e.exit = e.kill = e.umask = e.dlopen = e.uptime = e.memoryUsage = e.uvCounters = function () {}, e.features = {}; },
  '44ad': function (t, e, n) { const r = n('d039'); const i = n('c6b6'); const o = ''.split; t.exports = r((() => !Object('z').propertyIsEnumerable(0))) ? function (t) { return i(t) == 'String' ? o.call(t, '') : Object(t); } : Object; },
  '44d2': function (t, e, n) { const r = n('b622'); const i = n('7c73'); const o = n('9bf2'); const a = r('unscopables'); const s = Array.prototype; void 0 == s[a] && o.f(s, a, { configurable: !0, value: i(null) }), t.exports = function (t) { s[a][t] = !0; }; },
  '44de': function (t, e, n) { const r = n('da84'); t.exports = function (t, e) { const n = r.console; n && n.error && (arguments.length === 1 ? n.error(t) : n.error(t, e)); }; },
  4840(t, e, n) { const r = n('825a'); const i = n('1c0b'); const o = n('b622'); const a = o('species'); t.exports = function (t, e) { let n; const o = r(t).constructor; return void 0 === o || void 0 == (n = r(o)[a]) ? e : i(n); }; },
  4930(t, e, n) { const r = n('d039'); t.exports = !!Object.getOwnPropertySymbols && !r((() => !String(Symbol()))); },
  '4ae1': function (t, e, n) {
    const r = n('23e7'); const i = n('d066'); const o = n('1c0b'); const a = n('825a'); const s = n('861d'); const l = n('7c73'); const c = n('0538'); const u = n('d039'); const f = i('Reflect', 'construct'); const d = u((() => { function t() {} return !(f((() => {}), [], t) instanceof t); })); const h = !u((() => { f((() => {})); })); const p = d || h; r({
      target: 'Reflect', stat: !0, forced: p, sham: p,
    }, { construct(t, e) { o(t), a(e); const n = arguments.length < 3 ? t : o(arguments[2]); if (h && !d) return f(t, e, n); if (t == n) { switch (e.length) { case 0: return new t(); case 1: return new t(e[0]); case 2: return new t(e[0], e[1]); case 3: return new t(e[0], e[1], e[2]); case 4: return new t(e[0], e[1], e[2], e[3]); } const r = [null]; return r.push.apply(r, e), new (c.apply(t, r))(); } const i = n.prototype; const u = l(s(i) ? i : Object.prototype); const p = Function.apply.call(t, u, e); return s(p) ? p : u; } });
  },
  '4bb5': function (t, e, n) {
    n.d(e, 'a', (() => o)); const r = n('2fe1'); const i = n('2f62'); var o = (a('computed', i.e), a('computed', i.c)); a('methods', i.b), a('methods', i.d); function a(t, e) { function n(n, i) { return Object(r.a)(((r, o) => { r[t] || (r[t] = {}); let a; const s = (a = {}, a[o] = n, a); r[t][o] = void 0 !== i ? e(i, s)[o] : e(s)[o]; })); } function i(t, e) { if (typeof e === 'string') { const r = e; const i = t; return n(r, void 0)(i, r); } const o = s(e); const a = t; return n(a, o); } return i; } function s(t) { const e = t && t.namespace; if (typeof e === 'string') return e[e.length - 1] !== '/' ? `${e}/` : e; }
  },
  '4c07': function (t, e, n) { const r = n('0368'); const i = n('bf45'); const o = n('d0c8'); const a = n('fe68'); const s = Object.defineProperty; e.f = r ? s : function (t, e, n) { if (o(t), e = a(e, !0), o(n), i) try { return s(t, e, n); } catch (r) {} if ('get' in n || 'set' in n) throw TypeError('Accessors not supported'); return 'value' in n && (t[e] = n.value), t; }; },
  '4d64': function (t, e, n) { const r = n('fc6a'); const i = n('50c4'); const o = n('23cb'); const a = function (t) { return function (e, n, a) { let s; const l = r(e); const c = i(l.length); let u = o(a, c); if (t && n != n) { while (c > u) if (s = l[u++], s != s) return !0; } else for (;c > u; u++) if ((t || u in l) && l[u] === n) return t || u || 0; return !t && -1; }; }; t.exports = { includes: a(!0), indexOf: a(!1) }; },
  '4dd8': function (t, e, n) { const r = n('90c5'); t.exports = function (t, e, n) { if (r(t), void 0 === e) return t; switch (n) { case 0: return function () { return t.call(e); }; case 1: return function (n) { return t.call(e, n); }; case 2: return function (n, r) { return t.call(e, n, r); }; case 3: return function (n, r, i) { return t.call(e, n, r, i); }; } return function () { return t.apply(e, arguments); }; }; },
  '4df4': function (t, e, n) {
    const r = n('0366'); const i = n('7b0b'); const o = n('9bdd'); const a = n('e95a'); const s = n('50c4'); const l = n('8418'); const c = n('35a1'); t.exports = function (t) { let e; let n; let u; let f; let d; let h; const p = i(t); const v = typeof this === 'function' ? this : Array; const b = arguments.length; let m = b > 1 ? arguments[1] : void 0; const y = void 0 !== m; const g = c(p); let w = 0; if (y && (m = r(m, b > 2 ? arguments[2] : void 0, 2)), void 0 == g || v == Array && a(g)) for (e = s(p.length), n = new v(e); e > w; w++)h = y ? m(p[w], w) : p[w], l(n, w, h); else for (f = g.call(p), d = f.next, n = new v(); !(u = d.call(f)).done; w++)h = y ? o(f, m, [u.value, w], !0) : u.value, l(n, w, h); return n.length = w, n; };
  },
  '50c4': function (t, e, n) { const r = n('a691'); const i = Math.min; t.exports = function (t) { return t > 0 ? i(r(t), 9007199254740991) : 0; }; },
  5135(t, e) { const n = {}.hasOwnProperty; t.exports = function (t, e) { return n.call(t, e); }; },
  '51d2': function (t, e, n) {
    const r = n('0368'); const i = n('a714'); const o = n('f14a'); const a = n('a5b6'); const s = n('0e17'); const l = n('ebca'); const c = n('774c'); const u = Object.assign; const f = Object.defineProperty; t.exports = !u || i((() => { if (r && ({ b: 1, ...u(f({}, 'a', { enumerable: !0, get() { f(this, 'b', { value: 3, enumerable: !1 }); } }), { b: 2 }) }).b !== 1) return !0; const t = {}; const e = {}; const n = Symbol(); const i = 'abcdefghijklmnopqrst'; return t[n] = 7, i.split('').forEach(((t) => { e[t] = t; })), ({ ...t })[n] != 7 || o({ ...e }).join('') != i; })) ? function (t, e) { const n = l(t); const i = arguments.length; let u = 1; const { f } = a; const d = s.f; while (i > u) { var h; const p = c(arguments[u++]); const v = f ? o(p).concat(f(p)) : o(p); const b = v.length; let m = 0; while (b > m)h = v[m++], r && !d.call(p, h) || (n[h] = p[h]); } return n; } : u;
  },
  5319(t, e, n) {
    const r = n('d784'); const i = n('825a'); const o = n('7b0b'); const a = n('50c4'); const s = n('a691'); const l = n('1d80'); const c = n('8aa5'); const u = n('14c3'); const f = Math.max; const d = Math.min; const h = Math.floor; const p = /\$([$&'`]|\d\d?|<[^>]*>)/g; const v = /\$([$&'`]|\d\d?)/g; const b = function (t) { return void 0 === t ? t : String(t); }; r('replace', 2, ((t, e, n, r) => { const m = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE; const y = r.REPLACE_KEEPS_$0; const g = m ? '$' : '$0'; return [function (n, r) { const i = l(this); const o = void 0 == n ? void 0 : n[t]; return void 0 !== o ? o.call(n, i, r) : e.call(String(i), n, r); }, function (t, r) { if (!m && y || typeof r === 'string' && r.indexOf(g) === -1) { const o = n(e, t, this, r); if (o.done) return o.value; } const l = i(t); const h = String(this); const p = typeof r === 'function'; p || (r = String(r)); const v = l.global; if (v) { var O = l.unicode; l.lastIndex = 0; } const S = []; while (1) { var x = u(l, h); if (x === null) break; if (S.push(x), !v) break; const T = String(x[0]); T === '' && (l.lastIndex = c(h, a(l.lastIndex), O)); } for (var k = '', P = 0, j = 0; j < S.length; j++) { x = S[j]; for (var C = String(x[0]), _ = f(d(s(x.index), h.length), 0), B = [], D = 1; D < x.length; D++)B.push(b(x[D])); const E = x.groups; if (p) { const $ = [C].concat(B, _, h); void 0 !== E && $.push(E); var A = String(r.apply(void 0, $)); } else A = w(C, h, _, B, E, r); _ >= P && (k += h.slice(P, _) + A, P = _ + C.length); } return k + h.slice(P); }]; function w(t, n, r, i, a, s) { const l = r + t.length; const c = i.length; let u = v; return void 0 !== a && (a = o(a), u = p), e.call(s, u, ((e, o) => { let s; switch (o.charAt(0)) { case '$': return '$'; case '&': return t; case '`': return n.slice(0, r); case "'": return n.slice(l); case '<': s = a[o.slice(1, -1)]; break; default: var u = +o; if (u === 0) return e; if (u > c) { const f = h(u / 10); return f === 0 ? e : f <= c ? void 0 === i[f - 1] ? o.charAt(1) : i[f - 1] + o.charAt(1) : e; }s = i[u - 1]; } return void 0 === s ? '' : s; })); } }));
  },
  5692(t, e, n) { const r = n('c430'); const i = n('c6cd'); (t.exports = function (t, e) { return i[t] || (i[t] = void 0 !== e ? e : {}); })('versions', []).push({ version: '3.6.4', mode: r ? 'pure' : 'global', copyright: '© 2020 Denis Pushkarev (zloirock.ru)' }); },
  '56ef': function (t, e, n) { const r = n('d066'); const i = n('241c'); const o = n('7418'); const a = n('825a'); t.exports = r('Reflect', 'ownKeys') || function (t) { const e = i.f(a(t)); const n = o.f; return n ? e.concat(n(t)) : e; }; },
  5923(t, e, n) { let r; let i; let o; let a; let s; let l; let c; let u; const f = n('09e4'); const d = n('2439').f; const h = n('d714'); const p = n('0fd9').set; const v = n('68e0'); const b = f.MutationObserver || f.WebKitMutationObserver; const m = f.process; const y = f.Promise; const g = h(m) == 'process'; const w = d(f, 'queueMicrotask'); const O = w && w.value; O || (r = function () { let t; let e; g && (t = m.domain) && t.exit(); while (i) { e = i.fn, i = i.next; try { e(); } catch (n) { throw i ? a() : o = void 0, n; } }o = void 0, t && t.enter(); }, g ? a = function () { m.nextTick(r); } : b && !v ? (s = !0, l = document.createTextNode(''), new b(r).observe(l, { characterData: !0 }), a = function () { l.data = s = !s; }) : y && y.resolve ? (c = y.resolve(void 0), u = c.then, a = function () { u.call(c, r); }) : a = function () { p.call(f, r); }), t.exports = O || function (t) { const e = { fn: t, next: void 0 }; o && (o.next = e), i || (i = e, a()), o = e; }; },
  '59c2': function (t, e) { const n = Math.ceil; const r = Math.floor; t.exports = function (t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t); }; },
  '5c6c': function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e,
      };
    };
  },
  '5dc8': function (t, e, n) { const r = n('199f'); const i = n('51d2'); r({ target: 'Object', stat: !0, forced: Object.assign !== i }, { assign: i }); },
  '5f2f': function (t, e, n) { const r = n('0ee6'); t.exports = r('navigator', 'userAgent') || ''; },
  '5f5b': function (t, e, n) {
    const r = n('2b0e'); const i = r.default; const o = function () { return Array.from.apply(Array, arguments); }; const a = function (t) { return Array.isArray(t); }; const s = function (t, e) { return t.indexOf(e) !== -1; }; const l = function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; return Array.prototype.concat.apply([], e); }; function c(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function u(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? c(Object(n), !0).forEach(((e) => { f(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function f(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } function d(t) { return d = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, d(t); } const h = function () { return Object.assign.apply(Object, arguments); }; const p = function (t, e) { return Object.create(t, e); }; const v = function (t, e) { return Object.defineProperties(t, e); }; const b = function (t, e, n) { return Object.defineProperty(t, e, n); }; const m = function (t) { return Object.freeze(t); }; const y = function (t) { return Object.getOwnPropertyNames(t); }; const g = function (t) { return Object.keys(t); }; const w = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }; const O = function (t) { return Object.prototype.toString.call(t); }; const S = function (t) { return t !== null && d(t) === 'object'; }; const x = function (t) { return Object.prototype.toString.call(t) === '[object Object]'; }; const T = function (t) { return u({}, t); }; const k = function (t, e) { return g(t).filter(((t) => e.indexOf(t) !== -1)).reduce(((e, n) => u(u({}, e), {}, f({}, n, t[n]))), {}); }; const P = function (t, e) { return g(t).filter(((t) => e.indexOf(t) === -1)).reduce(((e, n) => u(u({}, e), {}, f({}, n, t[n]))), {}); }; const j = function () { return { enumerable: !0, configurable: !1, writable: !1 }; }; const C = function t(e) { const n = g(e); return n.forEach(((n) => { const r = e[n]; e[n] = r && (x(r) || a(r)) ? t(r) : r; })), m(e); }; function _(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function B(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? _(Object(n), !0).forEach(((e) => { D(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function D(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } function E(t) { return F(t) || I(t) || A(t) || $(); } function $() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function A(t, e) { if (t) { if (typeof t === 'string') return L(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? L(t, e) : void 0; } } function I(t) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t); } function F(t) { if (Array.isArray(t)) return L(t); } function L(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } const R = function t(e) { const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e; return a(e) ? e.reduce(((e, n) => [].concat(E(e), [t(n, n)])), []) : x(e) ? g(e).reduce(((n, r) => B(B({}, n), {}, D({}, r, t(e[r], e[r])))), {}) : n; }; const M = R; const N = function (t) { return t; }; const V = N; const z = n('938d'); function H(t) { return H = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, H(t); } function G(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function U(t, e) { if (typeof e !== 'function' && e !== null) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Q(t, e); } function W(t) { const e = J(); return function () { let n; const r = tt(t); if (e) { const i = tt(this).constructor; n = Reflect.construct(r, arguments, i); } else n = r.apply(this, arguments); return q(this, n); }; } function q(t, e) { return !e || H(e) !== 'object' && typeof e !== 'function' ? Y(t) : e; } function Y(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t; } function K(t) {
      const e = typeof Map === 'function' ? new Map() : void 0; return K = function (t) {
        if (t === null || !Z(t)) return t; if (typeof t !== 'function') throw new TypeError('Super expression must either be null or a function'); if (typeof e !== 'undefined') { if (e.has(t)) return e.get(t); e.set(t, n); } function n() { return X(t, arguments, tt(this).constructor); } return n.prototype = Object.create(t.prototype, {
          constructor: {
            value: n, enumerable: !1, writable: !0, configurable: !0,
          },
        }), Q(n, t);
      }, K(t);
    } function X(t, e, n) { return X = J() ? Reflect.construct : function (t, e, n) { const r = [null]; r.push.apply(r, e); const i = Function.bind.apply(t, r); const o = new i(); return n && Q(o, n.prototype), o; }, X.apply(null, arguments); } function J() { if (typeof Reflect === 'undefined' || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if (typeof Proxy === 'function') return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (() => {}))), !0; } catch (t) { return !1; } } function Z(t) { return Function.toString.call(t).indexOf('[native code]') !== -1; } function Q(t, e) { return Q = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t; }, Q(t, e); } function tt(t) { return tt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, tt(t); } const et = z.i ? window : {}; const nt = z.i ? et.Element : (function (t) { U(n, t); const e = W(n); function n() { return G(this, n), e.apply(this, arguments); } return n; }(K(Object))); const rt = z.i ? et.HTMLElement : (function (t) { U(n, t); const e = W(n); function n() { return G(this, n), e.apply(this, arguments); } return n; }(nt)); const it = z.i ? et.SVGElement : (function (t) { U(n, t); const e = W(n); function n() { return G(this, n), e.apply(this, arguments); } return n; }(nt)); const ot = z.i ? et.File : (function (t) { U(n, t); const e = W(n); function n() { return G(this, n), e.apply(this, arguments); } return n; }(K(Object))); function at(t) { return at = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, at(t); } const st = function (t) { return at(t); }; const lt = function (t) { return Object.prototype.toString.call(t).slice(8, -1); }; const ct = function (t) { return void 0 === t; }; const ut = function (t) { return t === null; }; const ft = function (t) { return ct(t) || ut(t); }; const dt = function (t) { return st(t) === 'function'; }; const ht = function (t) { return st(t) === 'boolean'; }; const pt = function (t) { return st(t) === 'string'; }; const vt = function (t) { return st(t) === 'number'; }; const bt = function (t) { return t instanceof Date; }; const mt = function (t) { return t instanceof Event; }; const yt = function (t) { return t instanceof ot; }; const gt = function (t) { return lt(t) === 'RegExp'; }; const wt = function (t) { return !ft(t) && dt(t.then) && dt(t.catch); }; const Ot = /\[(\d+)]/g; const St = function (t, e) { const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; if (e = a(e) ? e.join('.') : e, !e || !S(t)) return n; if (e in t) return t[e]; e = String(e).replace(Ot, '.$1'); const r = e.split('.').filter(V); return r.length === 0 ? n : r.every(((e) => S(t) && e in t && !ft(t = t[e]))) ? t : ut(t) ? null : n; }; const xt = function (t, e) { const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; const r = St(t, e); return ft(r) ? n : r; }; const Tt = xt; const kt = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; Object(z.a)() || console.warn('[BootstrapVue warn]: '.concat(e ? ''.concat(e, ' - ') : '').concat(t)); }; const Pt = function (t) { return !z.j && (kt(''.concat(t, ': Can not be called during SSR.')), !0); }; const jt = function (t) { return !z.g && (kt(''.concat(t, ': Requires Promise support.')), !0); }; const Ct = function (t) { return !z.d && (kt(''.concat(t, ': Requires MutationObserver support.')), !0); }; const _t = C({
      breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
      formControls: { size: void 0 },
      BAlert: { dismissLabel: 'Close', variant: 'info' },
      BAvatar: { variant: 'secondary', badgeVariant: 'primary' },
      BBadge: { variant: 'secondary' },
      BButton: { size: void 0, variant: 'secondary' },
      BButtonClose: { content: '&times;', textVariant: void 0, ariaLabel: 'Close' },
      BCalendar: {
        labelPrevDecade: 'Previous decade', labelPrevYear: 'Previous year', labelPrevMonth: 'Previous month', labelCurrentMonth: 'Current month', labelNextMonth: 'Next month', labelNextYear: 'Next year', labelNextDecade: 'Next decade', labelToday: 'Today', labelSelected: 'Selected date', labelNoDateSelected: 'No date selected', labelCalendar: 'Calendar', labelNav: 'Calendar navigation', labelHelp: 'Use cursor keys to navigate calendar dates',
      },
      BCardSubTitle: { subTitleTextVariant: 'muted' },
      BCarousel: {
        labelPrev: 'Previous Slide', labelNext: 'Next Slide', labelGotoSlide: 'Goto Slide', labelIndicators: 'Select a slide to display',
      },
      BDropdown: {
        toggleText: 'Toggle Dropdown', size: void 0, variant: 'secondary', splitVariant: void 0,
      },
      BFormDatepicker: {
        labelPrevDecade: void 0, labelPrevYear: void 0, labelPrevMonth: void 0, labelCurrentMonth: void 0, labelNextMonth: void 0, labelNextYear: void 0, labelNextDecade: void 0, labelToday: void 0, labelSelected: void 0, labelNoDateSelected: void 0, labelCalendar: void 0, labelNav: void 0, labelHelp: void 0, labelTodayButton: 'Select today', labelResetButton: 'Reset', labelCloseButton: 'Close',
      },
      BFormFile: { browseText: 'Browse', placeholder: 'No file chosen', dropPlaceholder: 'Drop files here' },
      BFormRating: { variant: null, color: null },
      BFormTag: { removeLabel: 'Remove tag', variant: 'secondary' },
      BFormTags: {
        addButtonText: 'Add', addButtonVariant: 'outline-secondary', duplicateTagText: 'Duplicate tag(s)', invalidTagText: 'Invalid tag(s)', placeholder: 'Add tag...', tagRemoveLabel: 'Remove tag', tagRemovedLabel: 'Tag removed', tagVariant: 'secondary',
      },
      BFormText: { textVariant: 'muted' },
      BFormTimepicker: {
        labelNoTimeSelected: void 0, labelSelected: void 0, labelHours: void 0, labelMinutes: void 0, labelSeconds: void 0, labelAmpm: void 0, labelAm: void 0, labelPm: void 0, labelDecrement: void 0, labelIncrement: void 0, labelNowButton: 'Select now', labelResetButton: 'Reset', labelCloseButton: 'Close',
      },
      BFormSpinbutton: { labelDecrement: 'Decrement', labelIncrement: 'Increment' },
      BImg: { blankColor: 'transparent' },
      BImgLazy: { blankColor: 'transparent' },
      BInputGroup: { size: void 0 },
      BJumbotron: { bgVariant: void 0, borderVariant: void 0, textVariant: void 0 },
      BListGroupItem: { variant: void 0 },
      BModal: {
        titleTag: 'h5', size: 'md', headerBgVariant: void 0, headerBorderVariant: void 0, headerTextVariant: void 0, headerCloseVariant: void 0, bodyBgVariant: void 0, bodyTextVariant: void 0, footerBgVariant: void 0, footerBorderVariant: void 0, footerTextVariant: void 0, cancelTitle: 'Cancel', cancelVariant: 'secondary', okTitle: 'OK', okVariant: 'primary', headerCloseContent: '&times;', headerCloseLabel: 'Close',
      },
      BNavbar: { variant: null },
      BNavbarToggle: { label: 'Toggle navigation' },
      BPagination: { size: void 0 },
      BPaginationNav: { size: void 0 },
      BPopover: {
        boundary: 'scrollParent', boundaryPadding: 5, customClass: void 0, delay: 50, variant: void 0,
      },
      BProgress: { variant: void 0 },
      BProgressBar: { variant: void 0 },
      BSpinner: { variant: void 0 },
      BSidebar: {
        bgVariant: 'light', textVariant: 'dark', shadow: !1, width: void 0, tag: 'div',
      },
      BTable: { selectedVariant: 'active', headVariant: void 0, footVariant: void 0 },
      BTime: {
        labelNoTimeSelected: 'No time selected', labelSelected: 'Selected time', labelHours: 'Hours', labelMinutes: 'Minutes', labelSeconds: 'Seconds', labelAmpm: 'AM/PM', labelAm: 'AM', labelPm: 'PM', labelIncrement: void 0, labelDecrement: void 0,
      },
      BToast: {
        toaster: 'b-toaster-top-right', autoHideDelay: 5e3, variant: void 0, toastClass: void 0, headerClass: void 0, bodyClass: void 0,
      },
      BToaster: { ariaLive: void 0, ariaAtomic: void 0, role: void 0 },
      BTooltip: {
        boundary: 'scrollParent', boundaryPadding: 5, customClass: void 0, delay: 50, variant: void 0,
      },
    }); function Bt(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function Dt(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } function Et(t, e, n) { return e && Dt(t.prototype, e), n && Dt(t, n), t; } const $t = 'BvConfig'; const At = '$bvConfig'; const It = (function () { function t() { Bt(this, t), this.$_config = {}, this.$_cachedBreakpoints = null; } return Et(t, [{ key: 'getDefaults', value() { return this.defaults; } }, { key: 'setConfig', value() { const t = this; const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if (x(e)) { const n = y(e); n.forEach(((n) => { if (w(_t, n)) { const r = e[n]; if (n === 'breakpoints') { const i = e.breakpoints; !a(i) || i.length < 2 || i.some(((t) => !pt(t) || t.length === 0)) ? kt('"breakpoints" must be an array of at least 2 breakpoint names', $t) : t.$_config.breakpoints = M(i); } else if (x(r)) { const o = y(r); o.forEach(((e) => { w(_t[n], e) ? (t.$_config[n] = t.$_config[n] || {}, ct(r[e]) || (t.$_config[n][e] = M(r[e]))) : kt('Unknown config property "'.concat(n, '.').concat(e, '"'), $t); })); } } else kt('Unknown config property "'.concat(n, '"'), $t); })); } } }, { key: 'resetConfig', value() { this.$_config = {}; } }, { key: 'getConfig', value() { return M(this.$_config); } }, { key: 'getConfigValue', value(t) { return M(St(this.$_config, t, St(_t, t))); } }, { key: 'defaults', get() { return _t; } }], [{ key: 'Defaults', get() { return _t; } }]), t; }()); const Ft = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i; e.prototype[At] = i.prototype[At] = e.prototype[At] || i.prototype[At] || new It(), e.prototype[At].setConfig(t); }; function Lt(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Rt(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Lt(Object(n), !0).forEach(((e) => { Mt(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Mt(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Nt = (function () { let t = !1; const e = ['Multiple instances of Vue detected!', 'You may need to set up an alias for Vue in your bundler config.', 'See: https://bootstrap-vue.org/docs#using-module-bundlers'].join('\n'); return function (n) { t || i === n || z.k || kt(e), t = !0; }; }()); const Vt = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const e = t.components; const n = t.directives; const r = t.plugins; const i = function t(i) { const o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; t.installed || (t.installed = !0, Nt(i), Ft(o, i), Ut(i, e), qt(i, n), Ht(i, r)); }; return i.installed = !1, i; }; const zt = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return Rt(Rt({}, e), {}, { install: Vt(t) }); }; var Ht = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; for (const n in e)n && e[n] && t.use(e[n]); }; const Gt = function (t, e, n) { t && e && n && t.component(e, n); }; var Ut = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; for (const n in e)Gt(t, n, e[n]); }; const Wt = function (t, e, n) { t && e && n && t.directive(e.replace(/^VB/, 'B'), n); }; var qt = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; for (const n in e)Wt(t, n, e[n]); }; const Yt = function (t) { const e = p(null); return function () { for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)r[i] = arguments[i]; const o = JSON.stringify(r); return e[o] = e[o] || t.apply(null, r); }; }; const Kt = Yt; const Xt = '$bvConfig'; const Jt = i.prototype; const Zt = function (t) { return Jt[Xt] ? Jt[Xt].getConfigValue(t) : M(St(_t, t)); }; const Qt = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return e ? Zt(''.concat(t, '.').concat(e)) : Zt(t) || {}; }; const te = function () { return Zt('breakpoints'); }; const ee = Kt((() => te())); const ne = function () { return M(ee()); }; const re = Kt((() => { const t = ne(); return t[0] = '', t; })); const ie = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN; const n = parseInt(t, 10); return isNaN(n) ? e : n; }; const oe = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN; const n = parseFloat(t); return isNaN(n) ? e : n; }; const ae = function (t, e) { return oe(t).toFixed(ie(e, 0)); }; const se = ['button', '[href]:not(.disabled)', 'input', 'select', 'textarea', '[tabindex]', '[contenteditable]'].map(((t) => ''.concat(t, ':not(:disabled):not([disabled])'))).join(', '); const le = z.i ? window : {}; const ce = z.b ? document : {}; const ue = typeof Element !== 'undefined' ? Element.prototype : {}; const fe = ue.matches || ue.msMatchesSelector || ue.webkitMatchesSelector; const de = ue.closest || function (t) { let e = this; do { if (Te(e, t)) return e; e = e.parentElement || e.parentNode; } while (!ut(e) && e.nodeType === Node.ELEMENT_NODE);return null; }; const he = le.requestAnimationFrame || le.webkitRequestAnimationFrame || le.mozRequestAnimationFrame || le.msRequestAnimationFrame || le.oRequestAnimationFrame || function (t) { return setTimeout(t, 16); }; const pe = le.MutationObserver || le.WebKitMutationObserver || le.MozMutationObserver || null; const ve = function (t) { return t && t.parentNode && t.parentNode.removeChild(t); }; const be = function (t) { return !(!t || t.nodeType !== Node.ELEMENT_NODE); }; const me = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; const e = ce.activeElement; return e && !t.some(((t) => t === e)) ? e : null; }; const ye = function (t) { return be(t) && t === me(); }; const ge = function (t) { if (!be(t) || !t.parentNode || !Pe(ce.body, t)) return !1; if (t.style.display === 'none') return !1; const e = Ie(t); return !!(e && e.height > 0 && e.width > 0); }; const we = function (t) { return !be(t) || t.disabled || Ae(t, 'disabled') || Be(t, 'disabled'); }; const Oe = function (t) { return be(t) && t.offsetHeight; }; const Se = function (t, e) { return o((be(e) ? e : ce).querySelectorAll(t)); }; const xe = function (t, e) { return (be(e) ? e : ce).querySelector(t) || null; }; var Te = function (t, e) { return !!be(t) && fe.call(t, e); }; const ke = function (t, e) { const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; if (!be(e)) return null; const r = de.call(e, t); return n ? r : r === e ? null : r; }; var Pe = function (t, e) { return !(!t || !dt(t.contains)) && t.contains(e); }; const je = function (t) { return ce.getElementById(/^#/.test(t) ? t.slice(1) : t) || null; }; const Ce = function (t, e) { e && be(t) && t.classList && t.classList.add(e); }; const _e = function (t, e) { e && be(t) && t.classList && t.classList.remove(e); }; var Be = function (t, e) { return !!(e && be(t) && t.classList) && t.classList.contains(e); }; const De = function (t, e, n) { e && be(t) && t.setAttribute(e, n); }; const Ee = function (t, e) { e && be(t) && t.removeAttribute(e); }; const $e = function (t, e) { return e && be(t) ? t.getAttribute(e) : null; }; var Ae = function (t, e) { return e && be(t) ? t.hasAttribute(e) : null; }; var Ie = function (t) { return be(t) ? t.getBoundingClientRect() : null; }; const Fe = function (t) { return z.i && be(t) ? le.getComputedStyle(t) : {}; }; const Le = function () { return z.i && le.getSelection ? le.getSelection() : null; }; const Re = function (t) { const e = { top: 0, left: 0 }; if (!be(t) || t.getClientRects().length === 0) return e; const n = Ie(t); if (n) { const r = t.ownerDocument.defaultView; e.top = n.top + r.pageYOffset, e.left = n.left + r.pageXOffset; } return e; }; const Me = function (t) { let e = { top: 0, left: 0 }; if (!be(t)) return e; let n = { top: 0, left: 0 }; const r = Fe(t); if (r.position === 'fixed')e = Ie(t) || e; else { e = Re(t); const i = t.ownerDocument; let o = t.offsetParent || i.documentElement; while (o && (o === i.body || o === i.documentElement) && Fe(o).position === 'static')o = o.parentNode; if (o && o !== t && o.nodeType === Node.ELEMENT_NODE) { n = Re(o); const a = Fe(o); n.top += oe(a.borderTopWidth, 0), n.left += oe(a.borderLeftWidth, 0); } } return { top: e.top - n.top - oe(r.marginTop, 0), left: e.left - n.left - oe(r.marginLeft, 0) }; }; const Ne = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document; return Se(se, t).filter(ge).filter(((t) => t.tabIndex > -1 && !t.disabled)); }; const Ve = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; try { t.focus(e); } catch (n) {} return ye(t); }; const ze = function (t) { try { t.blur(); } catch (e) {} return !ye(t); }; var He = function () { return (He = Object.assign || function (t) { for (var e, n = 1, r = arguments.length; n < r; n++) for (const i in e = arguments[n])Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t; }).apply(this, arguments); }; const Ge = { kebab: /-(\w)/g, styleProp: /:(.*)/, styleList: /;(?![^(]*\))/g }; function Ue(t, e) { return e ? e.toUpperCase() : ''; } function We(t) { for (var e, n = {}, r = 0, i = t.split(Ge.styleList); r < i.length; r++) { const o = i[r].split(Ge.styleProp); let a = o[0]; let s = o[1]; (a = a.trim()) && (typeof s === 'string' && (s = s.trim()), n[(e = a, e.replace(Ge.kebab, Ue))] = s); } return n; } function qe() { for (var t, e, n = {}, r = arguments.length; r--;) for (let i = 0, o = Object.keys(arguments[r]); i < o.length; i++) switch (t = o[i]) { case 'class': case 'style': case 'directives': if (Array.isArray(n[t]) || (n[t] = []), t === 'style') { let a = void 0; a = Array.isArray(arguments[r].style) ? arguments[r].style : [arguments[r].style]; for (let s = 0; s < a.length; s++) { const l = a[s]; typeof l === 'string' && (a[s] = We(l)); }arguments[r].style = a; }n[t] = n[t].concat(arguments[r][t]); break; case 'staticClass': if (!arguments[r][t]) break; void 0 === n[t] && (n[t] = ''), n[t] && (n[t] += ' '), n[t] += arguments[r][t].trim(); break; case 'on': case 'nativeOn': n[t] || (n[t] = {}); for (let c = 0, u = Object.keys(arguments[r][t] || {}); c < u.length; c++)e = u[c], n[t][e] ? n[t][e] = [].concat(n[t][e], arguments[r][t][e]) : n[t][e] = arguments[r][t][e]; break; case 'attrs': case 'props': case 'domProps': case 'scopedSlots': case 'staticStyle': case 'hook': case 'transition': n[t] || (n[t] = {}), n[t] = { ...arguments[r][t], ...n[t] }; break; case 'slot': case 'key': case 'ref': case 'tag': case 'show': case 'keepAlive': default: n[t] || (n[t] = arguments[r][t]); } return n; } function Ye(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ke(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Ye(Object(n), !0).forEach(((e) => { Xe(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Xe(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Je = {
      name: '', enterClass: '', enterActiveClass: '', enterToClass: 'show', leaveClass: 'show', leaveActiveClass: '', leaveToClass: '',
    }; const Ze = Ke(Ke({}, Je), {}, { enterActiveClass: 'fade', leaveActiveClass: 'fade' }); const Qe = i.extend({
      name: 'BVTransition',
      functional: !0,
      props: {
        noFade: { type: Boolean, default: !1 }, appear: { type: Boolean, default: !1 }, mode: { type: String }, transProps: { type: Object, default: null },
      },
      render(t, e) {
        const n = e.children; const r = e.data; const i = e.props; let o = i.transProps; return x(o) || (o = i.noFade ? Je : Ze, i.appear && (o = Ke(Ke({}, o), {}, {
          appear: !0, appearClass: o.enterClass, appearActiveClass: o.enterActiveClass, appearToClass: o.enterToClass,
        }))), o = Ke(Ke({ mode: i.mode }, o), {}, { css: !0 }), t('transition', qe(r, { props: o }), n);
      },
    }); const tn = Qe; const en = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; return t = l(t).filter(V), t.some(((t) => e[t] || n[t])); }; const nn = function (t) { let e; const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; const i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; t = l(t).filter(V); for (let o = 0; o < t.length && !e; o++) { const a = t[o]; e = r[a] || i[a]; } return dt(e) ? e(n) : e; }; const rn = { methods: { hasNormalizedSlot(t) { return en(t, this.$scopedSlots, this.$slots); }, normalizeSlot(t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const n = nn(t, e, this.$scopedSlots, this.$slots); return n ? l(n) : n; } } }; function on(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const an = 'BButtonClose'; const sn = {
      content: { type: String, default() { return Qt(an, 'content'); } }, disabled: { type: Boolean, default: !1 }, ariaLabel: { type: String, default() { return Qt(an, 'ariaLabel'); } }, textVariant: { type: String, default() { return Qt(an, 'textVariant'); } },
    }; const ln = i.extend({
      name: an,
      functional: !0,
      props: sn,
      render(t, e) {
        const n = e.props; const r = e.data; const i = e.slots; const o = e.scopedSlots; const a = i(); const s = o || {}; const l = {
          staticClass: 'close', class: on({}, 'text-'.concat(n.textVariant), n.textVariant), attrs: { type: 'button', disabled: n.disabled, 'aria-label': n.ariaLabel ? String(n.ariaLabel) : null }, on: { click(t) { n.disabled && mt(t) && (t.stopPropagation(), t.preventDefault()); } },
        }; return en('default', s, a) || (l.domProps = { innerHTML: n.content }), t('button', qe(r, l), nn('default', {}, s, a));
      },
    }); function cn(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const un = 'BAlert'; const fn = function (t) { return t === '' || ht(t) ? 0 : (t = ie(t, 0), t > 0 ? t : 0); }; const dn = function (t) { return t === '' || !0 === t || !(ie(t, 0) < 1) && !!t; }; const hn = function (t) { return !isNaN(ie(t)); }; const pn = i.extend({
      name: un,
      mixins: [rn],
      model: { prop: 'show', event: 'input' },
      props: {
        variant: { type: String, default() { return Qt(un, 'variant'); } }, dismissible: { type: Boolean, default: !1 }, dismissLabel: { type: String, default() { return Qt(un, 'dismissLabel'); } }, show: { type: [Boolean, Number, String], default: !1 }, fade: { type: Boolean, default: !1 },
      },
      data() { return { countDown: 0, countDownTimeout: null, localShow: dn(this.show) }; },
      watch: { show(t) { this.countDown = fn(t), this.localShow = dn(t); }, countDown(t) { const e = this; this.clearCountDownInterval(), hn(this.show) && (this.$emit('dismiss-count-down', t), this.show !== t && this.$emit('input', t), t > 0 ? (this.localShow = !0, this.countDownTimeout = setTimeout((() => { e.countDown--; }), 1e3)) : this.$nextTick((() => { he((() => { e.localShow = !1; })); }))); }, localShow(t) { t || !this.dismissible && !hn(this.show) || this.$emit('dismissed'), hn(this.show) || this.show === t || this.$emit('input', t); } },
      created() { this.countDown = fn(this.show), this.localShow = dn(this.show); },
      mounted() { this.countDown = fn(this.show), this.localShow = dn(this.show); },
      beforeDestroy() { this.clearCountDownInterval(); },
      methods: { dismiss() { this.clearCountDownInterval(), this.countDown = 0, this.localShow = !1; }, clearCountDownInterval() { this.countDownTimeout && (clearTimeout(this.countDownTimeout), this.countDownTimeout = null); } },
      render(t) {
        let e; if (this.localShow) {
          let n = t(); this.dismissible && (n = t(ln, { attrs: { 'aria-label': this.dismissLabel }, on: { click: this.dismiss } }, [this.normalizeSlot('dismiss')])), e = t('div', {
            key: this._uid, staticClass: 'alert', class: cn({ 'alert-dismissible': this.dismissible }, 'alert-'.concat(this.variant), this.variant), attrs: { role: 'alert', 'aria-live': 'polite', 'aria-atomic': !0 },
          }, [n, this.normalizeSlot('default')]), e = [e];
        } return t(tn, { props: { noFade: !this.fade } }, e);
      },
    }); const vn = zt({ components: { BAlert: pn } }); const bn = Math.min; const mn = Math.max; const yn = Math.abs; const gn = Math.ceil; const wn = Math.floor; const On = Math.pow; const Sn = Math.round; function xn(t, e) { return Cn(t) || jn(t, e) || kn(t, e) || Tn(); } function Tn() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function kn(t, e) { if (t) { if (typeof t === 'string') return Pn(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pn(t, e) : void 0; } } function Pn(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } function jn(t, e) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) { const n = []; let r = !0; let i = !1; let o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) if (n.push(a.value), e && n.length === e) break; } catch (l) { i = !0, o = l; } finally { try { r || s.return == null || s.return(); } finally { if (i) throw o; } } return n; } } function Cn(t) { if (Array.isArray(t)) return t; } const _n = 'BAspect'; const Bn = 'b-aspect'; const Dn = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/; const En = /[/:]/; const $n = i.extend({
      name: _n, mixins: [rn], props: { aspect: { type: [Number, String], default: '1:1' }, tag: { type: String, default: 'div' } }, computed: { padding() { const t = this.aspect; let e = 1; if (Dn.test(t)) { const n = t.split(En).map(((t) => oe(t) || 1)); const r = xn(n, 2); const i = r[0]; const o = r[1]; e = i / o; } else e = oe(t) || 1; return ''.concat(100 / yn(e), '%'); } }, render(t) { const e = t('div', { staticClass: ''.concat(Bn, '-sizer flex-grow-1'), style: { paddingBottom: this.padding, height: 0 } }); const n = t('div', { staticClass: ''.concat(Bn, '-content flex-grow-1 w-100 mw-100'), style: { marginLeft: '-100%' } }, [this.normalizeSlot('default')]); return t(this.tag, { staticClass: ''.concat(Bn, ' d-flex') }, [e, n]); },
    }); const An = zt({ components: { BAspect: $n } }); const In = function (t, e) { const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : V; return (a(t) ? t.slice() : g(t)).reduce(((t, r) => (t[n(r)] = e[r], t)), {}); }; const Fn = In; const Ln = m({
      SPACE: 32, ENTER: 13, ESC: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, PAGEUP: 33, PAGEDOWN: 34, HOME: 36, END: 35, TAB: 9, SHIFT: 16, CTRL: 17, BACKSPACE: 8, ALT: 18, PAUSE: 19, BREAK: 19, INSERT: 45, INS: 45, DELETE: 46,
    }); const Rn = Ln; const Mn = /^\s+/; const Nn = /[-/\\^$*+?.()|[\]{}]/g; const Vn = /-(\w)/g; const zn = /\B([A-Z])/g; const Hn = function (t) { return t.replace(zn, '-$1').toLowerCase(); }; const Gn = function (t) { return t = Hn(t).replace(Vn, ((t, e) => (e ? e.toUpperCase() : ''))), t.charAt(0).toUpperCase() + t.slice(1); }; const Un = function (t) { return t = pt(t) ? t.trim() : String(t), t.charAt(0).toLowerCase() + t.slice(1); }; const Wn = function (t) { return t = pt(t) ? t.trim() : String(t), t.charAt(0).toUpperCase() + t.slice(1); }; const qn = function (t) { return t.replace(Nn, '\\$&'); }; const Yn = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2; return ft(t) ? '' : a(t) || x(t) && t.toString === Object.prototype.toString ? JSON.stringify(t, null, e) : String(t); }; const Kn = function (t) { return Yn(t).replace(Mn, ''); }; const Xn = function (t) { return Yn(t).trim(); }; const Jn = function (t) { return Yn(t).toLowerCase(); }; const Zn = 'a'; const Qn = /%2C/g; const tr = /[!'()*]/g; const er = /\+/g; const nr = /^(\?|#|&)/; const rr = function (t) { return `%${t.charCodeAt(0).toString(16)}`; }; const ir = function (t) { return encodeURIComponent(Yn(t)).replace(tr, rr).replace(Qn, ','); }; const or = decodeURIComponent; const ar = function (t) { if (!x(t)) return ''; const e = g(t).map(((e) => { const n = t[e]; return ct(n) ? '' : ut(n) ? ir(e) : a(n) ? n.reduce(((t, n) => (ut(n) ? t.push(ir(e)) : ct(n) || t.push(`${ir(e)}=${ir(n)}`), t)), []).join('&') : `${ir(e)}=${ir(n)}`; })).filter(((t) => t.length > 0)).join('&'); return e ? '?'.concat(e) : ''; }; const sr = function (t) { const e = {}; return t = Yn(t).trim().replace(nr, ''), t ? (t.split('&').forEach(((t) => { const n = t.replace(er, ' ').split('='); const r = or(n.shift()); const i = n.length > 0 ? or(n.join('=')) : null; ct(e[r]) ? e[r] = i : a(e[r]) ? e[r].push(i) : e[r] = [e[r], i]; })), e) : e; }; const lr = function (t) { return Yn(t).toLowerCase() !== Zn; }; const cr = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const e = t.to; const n = t.disabled; const r = arguments.length > 1 ? arguments[1] : void 0; return r.$router && e && !n ? r.$nuxt ? 'nuxt-link' : 'router-link' : Zn; }; const ur = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const e = t.target; const n = t.rel; return e === '_blank' && ut(n) ? 'noopener' : n || null; }; const fr = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const e = t.href; const n = t.to; const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zn; const i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '#'; const o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '/'; if (lr(r)) return null; if (e) return e; if (n) { if (pt(n)) return n || o; if (x(n) && (n.path || n.query || n.hash)) { const a = Yn(n.path); const s = ar(n.query); let l = Yn(n.hash); return l = l && l.charAt(0) !== '#' ? '#'.concat(l) : l, ''.concat(a).concat(s).concat(l) || o; } } return i; }; function dr(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function hr(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? dr(Object(n), !0).forEach(((e) => { pr(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : dr(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function pr(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const vr = function (t) { return { handler(e, n) { for (const r in n)w(e, r) || this.$delete(this.$data[t], r); for (const i in e) this.$set(this.$data[t], i, e[i]); } }; }; const br = function (t, e) { return { data() { return pr({}, e, {}); }, watch: pr({}, t, vr(e)), created() { this[e] = hr({}, this[t]); } }; }; const mr = br('$attrs', 'bvAttrs'); const yr = br('$listeners', 'bvListeners'); function gr(t) { return xr(t) || Sr(t) || Or(t) || wr(); } function wr() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function Or(t, e) { if (t) { if (typeof t === 'string') return Tr(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tr(t, e) : void 0; } } function Sr(t) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t); } function xr(t) { if (Array.isArray(t)) return Tr(t); } function Tr(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } function kr(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Pr(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? kr(Object(n), !0).forEach(((e) => { jr(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : kr(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function jr(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Cr = function () {
      return {
        href: { type: String, default: null }, rel: { type: String, default: null }, target: { type: String, default: '_self' }, active: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, to: { type: [String, Object], default: null }, append: { type: Boolean, default: !1 }, replace: { type: Boolean, default: !1 }, event: { type: [String, Array], default: 'click' }, activeClass: { type: String }, exact: { type: Boolean, default: !1 }, exactActiveClass: { type: String }, routerTag: { type: String, default: 'a' }, noPrefetch: { type: Boolean, default: !1 },
      };
    }; const _r = (Cr(), i.extend({
      name: 'BLink',
      mixins: [mr, yr, rn],
      inheritAttrs: !1,
      props: Cr(),
      computed: {
        computedTag() { return cr({ to: this.to, disabled: this.disabled }, this); }, isRouterLink() { return lr(this.computedTag); }, computedRel() { return ur({ target: this.target, rel: this.rel }); }, computedHref() { return fr({ to: this.to, href: this.href }, this.computedTag); }, computedProps() { const t = this.isRouterLink ? Pr(Pr({}, this.$props), {}, { tag: this.routerTag }) : {}; return this.computedHref ? t : P(t, ['href']); }, computedAttrs() { const t = this.bvAttrs; const e = this.computedHref; const n = this.computedRel; const r = this.disabled; const i = this.target; const o = this.routerTag; const a = this.isRouterLink; return Pr(Pr(Pr(Pr({}, t), e ? { href: e } : {}), a && o !== 'a' && o !== 'area' ? {} : { rel: n, target: i }), {}, { tabindex: r ? '-1' : ct(t.tabindex) ? null : t.tabindex, 'aria-disabled': r ? 'true' : null }); }, computedListeners() { return Pr(Pr({}, this.bvListeners), {}, { click: this.onClick }); },
      },
      methods: { onClick(t) { const e = arguments; const n = mt(t); const r = this.isRouterLink; const i = this.bvListeners.click; n && this.disabled ? (t.stopPropagation(), t.stopImmediatePropagation()) : (r && t.currentTarget.__vue__ && t.currentTarget.__vue__.$emit('click', t), l(i).filter(((t) => dt(t))).forEach(((t) => { t.apply(void 0, gr(e)); })), this.$root.$emit('clicked::link', t)), n && (this.disabled || !r && this.computedHref === '#') && t.preventDefault(); }, focus() { Ve(this.$el); }, blur() { ze(this.$el); } },
      render(t) { const e = this.active; const n = this.disabled; return t(this.computedTag, jr({ class: { active: e, disabled: n }, attrs: this.computedAttrs, props: this.computedProps }, this.isRouterLink ? 'nativeOn' : 'on', this.computedListeners), this.normalizeSlot('default')); },
    })); function Br(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Dr(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Br(Object(n), !0).forEach(((e) => { Er(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Br(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Er(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const $r = 'BButton'; const Ar = {
      block: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, size: { type: String, default() { return Qt($r, 'size'); } }, variant: { type: String, default() { return Qt($r, 'variant'); } }, type: { type: String, default: 'button' }, tag: { type: String, default: 'button' }, pill: { type: Boolean, default: !1 }, squared: { type: Boolean, default: !1 }, pressed: { type: Boolean, default: null },
    }; const Ir = Cr(); delete Ir.href.default, delete Ir.to.default; const Fr = g(Ir); const Lr = Dr(Dr({}, Ir), Ar); const Rr = function (t, e) { return Yn(t).toLowerCase() === Yn(e).toLowerCase(); }; const Mr = function (t) { t.type === 'focusin' ? Ce(t.target, 'focus') : t.type === 'focusout' && _e(t.target, 'focus'); }; const Nr = function (t) { return t.href || t.to || Rr(t.tag, 'a'); }; const Vr = function (t) { return ht(t.pressed); }; const zr = function (t) { return !(Nr(t) || t.tag && !Rr(t.tag, 'button')); }; const Hr = function (t) { return !Nr(t) && !zr(t); }; const Gr = function (t) { let e; return ['btn-'.concat(t.variant || Qt($r, 'variant')), (e = {}, Er(e, 'btn-'.concat(t.size), t.size), Er(e, 'btn-block', t.block), Er(e, 'rounded-pill', t.pill), Er(e, 'rounded-0', t.squared && !t.pill), Er(e, 'disabled', t.disabled), Er(e, 'active', t.pressed), e)]; }; const Ur = function (t) { return Nr(t) ? Fn(Fr, t) : null; }; const Wr = function (t, e) {
      const n = zr(t); const r = Nr(t); const i = Vr(t); const o = Hr(t); const a = r && t.href === '#'; const s = e.attrs && e.attrs.role ? e.attrs.role : null; let l = e.attrs ? e.attrs.tabindex : null; return (o || a) && (l = '0'), {
        type: n && !r ? t.type : null, disabled: n ? t.disabled : null, role: o || a ? 'button' : s, 'aria-disabled': o ? String(t.disabled) : null, 'aria-pressed': i ? String(t.pressed) : null, autocomplete: i ? 'off' : null, tabindex: t.disabled && !n ? '-1' : l,
      };
    }; const qr = i.extend({
      name: $r,
      functional: !0,
      props: Lr,
      render(t, e) {
        const n = e.props; const r = e.data; const i = e.listeners; const o = e.children; const a = Vr(n); const s = Nr(n); const c = Hr(n); const u = s && n.href === '#'; const f = { keydown(t) { if (!n.disabled && (c || u)) { const e = t.keyCode; if (e === Rn.SPACE || e === Rn.ENTER && c) { const r = t.currentTarget || t.target; t.preventDefault(), r.click(); } } }, click(t) { n.disabled && mt(t) ? (t.stopPropagation(), t.preventDefault()) : a && i && i['update:pressed'] && l(i['update:pressed']).forEach(((t) => { dt(t) && t(!n.pressed); })); } }; a && (f.focusin = Mr, f.focusout = Mr); const d = {
          staticClass: 'btn', class: Gr(n), props: Ur(n), attrs: Wr(n, r), on: f,
        }; return t(s ? _r : n.tag, qe(r, d), o);
      },
    }); function Yr(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Kr(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Yr(Object(n), !0).forEach(((e) => { Xr(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Yr(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Xr(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Jr = {
      variant: { type: String, default: null }, fontScale: { type: [Number, String], default: 1 }, scale: { type: [Number, String], default: 1 }, rotate: { type: [Number, String], default: 0 }, flipH: { type: Boolean, default: !1 }, flipV: { type: Boolean, default: !1 }, shiftH: { type: [Number, String], default: 0 }, shiftV: { type: [Number, String], default: 0 }, animation: { type: String, default: null },
    }; const Zr = {
      viewBox: '0 0 16 16', width: '1em', height: '1em', focusable: 'false', role: 'img', alt: 'icon',
    }; const Qr = {
      width: null, height: null, focusable: null, role: null, alt: null,
    }; const ti = i.extend({
      name: 'BVIconBase',
      functional: !0,
      props: Kr({ content: { type: String }, stacked: { type: Boolean, default: !1 } }, Jr),
      render(t, e) {
        let n; const r = e.data; const i = e.props; const o = e.children; const a = mn(oe(i.fontScale, 1), 0) || 1; const s = mn(oe(i.scale, 1), 0) || 1; const l = oe(i.rotate, 0); const c = oe(i.shiftH, 0); const u = oe(i.shiftV, 0); const f = i.flipH; const d = i.flipV; const h = i.animation; const p = f || d || s !== 1; const v = p || l; const b = c || u; const m = [v ? 'translate(8 8)' : null, p ? 'scale('.concat((f ? -1 : 1) * s, ' ').concat((d ? -1 : 1) * s, ')') : null, l ? 'rotate('.concat(l, ')') : null, v ? 'translate(-8 -8)' : null].filter(V); const y = i.stacked; const g = !ft(i.content); let w = t('g', { attrs: { transform: m.join(' ') || null }, domProps: g ? { innerHTML: i.content || '' } : {} }, o); return b && (w = t('g', { attrs: { transform: 'translate('.concat(16 * c / 16, ' ').concat(-16 * u / 16, ')') } }, [w])), y && (w = t('g', {}, [w])), t('svg', qe({
          staticClass: 'b-icon bi', class: (n = {}, Xr(n, 'text-'.concat(i.variant), !!i.variant), Xr(n, 'b-icon-animation-'.concat(h), !!h), n), attrs: Zr, style: y ? {} : { fontSize: a === 1 ? null : ''.concat(100 * a, '%') },
        }, r, y ? { attrs: Qr } : {}, { attrs: { xmlns: y ? null : 'http://www.w3.org/2000/svg', fill: 'currentColor' } }), [w]);
      },
    }); function ei(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function ni(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? ei(Object(n), !0).forEach(((e) => { ri(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ei(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function ri(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const ii = function (t, e) {
      const n = 'BIcon'.concat(Gn(t)); const r = 'bi-'.concat(Hn(t)); const o = Xn(e || ''); return i.extend({
        name: n, functional: !0, props: ni(ni({}, Jr), {}, { stacked: { type: Boolean, default: !1 } }), render(t, e) { const n = e.data; const i = e.props; return t(ti, qe(n, { staticClass: r, props: ni(ni({}, i), {}, { content: o }) })); },
      });
    }; const oi = ii('Blank', ''); const ai = ii('Calendar', '<path fill-rule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>'); const si = ii('CalendarFill', '<path d="M0 2a2 2 0 012-2h12a2 2 0 012 2H0z"/><path fill-rule="evenodd" d="M0 3h16v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm6.5 4a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm-8 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm-8 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>'); const li = ii('ChevronBarLeft', '<path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 010 .708L8.207 8l3.647 3.646a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708 0zM4.5 1a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5z" clip-rule="evenodd"/>'); const ci = ii('ChevronDoubleLeft', '<path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 010 .708L2.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 010 .708L6.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/>'); const ui = ii('ChevronDown', '<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>'); const fi = ii('ChevronLeft', '<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/>'); const di = ii('ChevronUp', '<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clip-rule="evenodd"/>'); const hi = ii('CircleFill', '<circle cx="8" cy="8" r="8"/>'); const pi = ii('Clock', '<path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm8-7A8 8 0 110 8a8 8 0 0116 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>'); const vi = ii('ClockFill', '<path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" clip-rule="evenodd"/>'); const bi = ii('Dash', '<path fill-rule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>'); const mi = ii('PersonFill', '<path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>'); const yi = ii('Plus', '<path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>'); const gi = ii('Star', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" clip-rule="evenodd"/>'); const wi = ii('StarFill', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'); const Oi = ii('StarHalf', '<path fill-rule="evenodd" d="M5.354 5.119L7.538.792A.516.516 0 018 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0116 6.32a.55.55 0 01-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 01-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 01-.171-.403.59.59 0 01.084-.302.513.513 0 01.37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 01.163-.505l2.906-2.77-4.052-.576a.525.525 0 01-.393-.288L8.002 2.223 8 2.226v9.8z" clip-rule="evenodd"/>'); const Si = ii('X', '<path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>');
    /*!
 * BootstrapVue Icons, generated from Bootstrap Icons 1.0.0-alpha3
 *
 * @link https://icons.getbootstrap.com/
 * @license MIT
 * https://github.com/twbs/icons/blob/master/LICENSE.md
 */function xi(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ti(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? xi(Object(n), !0).forEach(((e) => { ki(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xi(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function ki(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Pi = /^BIcon/; const ji = i.extend({
      name: 'BIcon', functional: !0, props: Ti(Ti({ icon: { type: String, default: null } }, Jr), {}, { stacked: { type: Boolean, default: !1 } }), render(t, e) { const n = e.data; const r = e.props; const i = e.parent; const o = Gn(Xn(r.icon || '')).replace(Pi, ''); const a = 'BIcon'.concat(o); const s = ((i || {}).$options || {}).components; const l = o && s ? s[a] || oi : o ? a : oi; return t(l, qe(n, { props: Ti(Ti({}, r), {}, { icon: null }) })); },
    }); function Ci(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function _i(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Ci(Object(n), !0).forEach(((e) => { Bi(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ci(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Bi(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Di = 'BAvatar'; const Ei = 'b-avatar'; const $i = /^[0-9]*\.?[0-9]+$/; const Ai = 0.4; const Ii = 0.7 * Ai; const Fi = { sm: '1.5em', md: '2.5em', lg: '3.5em' }; const Li = {
      href: { type: String }, to: { type: [String, Object] }, append: { type: Boolean, default: !1 }, replace: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, rel: { type: String }, target: { type: String }, activeClass: { type: String }, exact: { type: Boolean, default: !1 }, exactActiveClass: { type: String }, noPrefetch: { type: Boolean, default: !1 },
    }; const Ri = _i(_i({
      src: { type: String }, text: { type: String }, icon: { type: String }, alt: { type: String, default: 'avatar' }, variant: { type: String, default() { return Qt(Di, 'variant'); } }, size: { type: [Number, String], default: null }, square: { type: Boolean, default: !1 }, rounded: { type: [Boolean, String], default: !1 }, button: { type: Boolean, default: !1 }, buttonType: { type: String, default: 'button' }, badge: { type: [Boolean, String], default: !1 }, badgeVariant: { type: String, default() { return Qt(Di, 'badgeVariant'); } }, badgeTop: { type: Boolean, default: !1 }, badgeLeft: { type: Boolean, default: !1 }, badgeOffset: { type: String, default: '0px' },
    }, Li), {}, { ariaLabel: { type: String } }); const Mi = function (t) { return t = ft(t) || t === '' ? 'md' : pt(t) && $i.test(t) ? oe(t, 0) : t, vt(t) ? ''.concat(t, 'px') : Fi[t] || t; }; const Ni = i.extend({
      name: Di,
      mixins: [rn],
      inject: { bvAvatarGroup: { default: null } },
      props: Ri,
      data() { return { localSrc: this.src || null }; },
      computed: {
        computedSize() { return Mi(this.bvAvatarGroup ? this.bvAvatarGroup.size : this.size); },
        computedVariant() { const t = this.bvAvatarGroup; return t && t.variant ? t.variant : this.variant; },
        computedRounded() { const t = this.bvAvatarGroup; const e = !(!t || !t.square) || this.square; const n = t && t.rounded ? t.rounded : this.rounded; return e ? '0' : n === '' || (n || 'circle'); },
        fontStyle() { let t = this.computedSize; return t = t ? 'calc('.concat(t, ' * ').concat(Ai, ')') : null, t ? { fontSize: t } : {}; },
        marginStyle() { const t = this.bvAvatarGroup; const e = t ? t.overlapScale : 0; const n = this.computedSize; const r = n && e ? 'calc('.concat(n, ' * -').concat(e, ')') : null; return r ? { marginLeft: r, marginRight: r } : {}; },
        badgeStyle() {
          const t = this.computedSize; const e = this.badgeTop; const n = this.badgeLeft; const r = this.badgeOffset; const i = r || '0px'; return {
            fontSize: t ? 'calc('.concat(t, ' * ').concat(Ii, ' )') : null, top: e ? i : null, bottom: e ? null : i, left: n ? i : null, right: n ? null : i,
          };
        },
      },
      watch: { src(t, e) { t !== e && (this.localSrc = t || null); } },
      methods: { onImgError(t) { this.localSrc = null, this.$emit('img-error', t); }, onClick(t) { this.$emit('click', t); } },
      render(t) {
        let e; const n = this.computedVariant; const r = this.disabled; const i = this.computedRounded; const o = this.icon; const a = this.localSrc; const s = this.text; const l = this.fontStyle; const c = this.marginStyle; const u = this.computedSize; const f = this.button; const d = this.buttonType; const h = this.badge; const p = this.badgeVariant; const v = this.badgeStyle; const b = !f && (this.href || this.to); const m = f ? qr : b ? _r : 'span'; const y = this.alt || null; const g = this.ariaLabel || null; let w = null; this.hasNormalizedSlot('default') ? w = t('span', { staticClass: 'b-avatar-custom' }, [this.normalizeSlot('default')]) : a ? (w = t('img', { style: n ? {} : { width: '100%', height: '100%' }, attrs: { src: a, alt: y }, on: { error: this.onImgError } }), w = t('span', { staticClass: 'b-avatar-img' }, [w])) : w = o ? t(ji, { props: { icon: o }, attrs: { 'aria-hidden': 'true', alt: y } }) : s ? t('span', { staticClass: 'b-avatar-text', style: l }, [t('span', s)]) : t(mi, { attrs: { 'aria-hidden': 'true', alt: y } }); let O = t(); const S = this.hasNormalizedSlot('badge'); if (h || h === '' || S) { const x = !0 === h ? '' : h; O = t('span', { staticClass: 'b-avatar-badge', class: Bi({}, 'badge-'.concat(p), !!p), style: v }, [S ? this.normalizeSlot('badge') : x]); } const T = {
          staticClass: Ei, class: (e = {}, Bi(e, 'badge-'.concat(n), !f && n), Bi(e, 'rounded', !0 === i), Bi(e, 'rounded-'.concat(i), i && !0 !== i), Bi(e, 'disabled', r), e), style: _i({ width: u, height: u }, c), attrs: { 'aria-label': g || null }, props: f ? { variant: n, disabled: r, type: d } : b ? Fn(Li, this) : {}, on: b || f ? { click: this.onClick } : {},
        }; return t(m, T, [w, O]);
      },
    }); const Vi = 'BAvatarGroup'; const zi = i.extend({
      name: Vi,
      mixins: [rn],
      provide() { return { bvAvatarGroup: this }; },
      props: {
        variant: { type: String, default: null }, size: { type: String, default: null }, overlap: { type: [Number, String], default: 0.3 }, square: { type: Boolean, default: !1 }, rounded: { type: [Boolean, String], default: !1 }, tag: { type: String, default: 'div' },
      },
      computed: { computedSize() { return Mi(this.size); }, overlapScale() { return bn(mn(oe(this.overlap, 0), 0), 1) / 2; }, paddingStyle() { let t = this.computedSize; return t = t ? 'calc('.concat(t, ' * ').concat(this.overlapScale, ')') : null, t ? { paddingLeft: t, paddingRight: t } : {}; } },
      render(t) { const e = t('div', { staticClass: 'b-avatar-group-inner', style: this.paddingStyle }, [this.normalizeSlot('default')]); return t(this.tag, { staticClass: 'b-avatar-group', attrs: { role: 'group' } }, [e]); },
    }); const Hi = zt({ components: { BAvatar: Ni, BAvatarGroup: zi } }); function Gi(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ui(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Gi(Object(n), !0).forEach(((e) => { Wi(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gi(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Wi(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const qi = 'BBadge'; const Yi = Cr(); delete Yi.href.default, delete Yi.to.default; const Ki = Ui(Ui({}, Yi), {}, { tag: { type: String, default: 'span' }, variant: { type: String, default() { return Qt(qi, 'variant'); } }, pill: { type: Boolean, default: !1 } }); const Xi = i.extend({
      name: qi, functional: !0, props: Ki, render(t, e) { const n = e.props; const r = e.data; const i = e.children; const o = n.href || n.to; const a = o ? _r : n.tag; const s = { staticClass: 'badge', class: [n.variant ? 'badge-'.concat(n.variant) : 'badge-secondary', { 'badge-pill': n.pill, active: n.active, disabled: n.disabled }], props: o ? Fn(Yi, n) : {} }; return t(a, qe(r, s), i); },
    }); const Ji = zt({ components: { BBadge: Xi } }); const Zi = /(<([^>]+)>)/gi; const Qi = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; return String(t).replace(Zi, ''); }; const to = function (t, e) { return t ? { innerHTML: t } : e ? { textContent: e } : {}; }; function eo(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function no(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? eo(Object(n), !0).forEach(((e) => { ro(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : eo(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function ro(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const io = no(no({}, Cr()), {}, { text: { type: String, default: null }, html: { type: String, default: null }, ariaCurrent: { type: String, default: 'location' } }); const oo = i.extend({
      name: 'BBreadcrumbLink', functional: !0, props: io, render(t, e) { const n = e.props; const r = e.data; const i = e.children; const o = n.active ? 'span' : _r; const a = { props: Fn(io, n) }; return n.active && (a.attrs = { 'aria-current': n.ariaCurrent }), i || (a.domProps = to(n.html, n.text)), t(o, qe(r, a), i); },
    }); const ao = i.extend({
      name: 'BBreadcrumbItem', functional: !0, props: io, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t('li', qe(r, { staticClass: 'breadcrumb-item', class: { active: n.active } }), [t(oo, { props: n }, i)]); },
    }); function so(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function lo(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? so(Object(n), !0).forEach(((e) => { co(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : so(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function co(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const uo = { items: { type: Array, default: null } }; const fo = i.extend({
      name: 'BBreadcrumb', functional: !0, props: uo, render(t, e) { const n = e.props; const r = e.data; const i = e.children; let o = i; if (a(n.items)) { let s = !1; o = n.items.map(((e, r) => { S(e) || (e = { text: Yn(e) }); let i = e.active; return i && (s = !0), i || s || (i = r + 1 === n.items.length), t(ao, { props: lo(lo({}, e), {}, { active: i }) }); })); } return t('ol', qe(r, { staticClass: 'breadcrumb' }), o); },
    }); const ho = zt({ components: { BBreadcrumb: fo, BBreadcrumbItem: ao, BBreadcrumbLink: oo } }); const po = zt({
      components: {
        BButton: qr, BBtn: qr, BButtonClose: ln, BBtnClose: ln,
      },
    }); function vo(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const bo = 'BButtonGroup'; const mo = {
      vertical: { type: Boolean, default: !1 }, size: { type: String, default() { return Qt('BButton', 'size'); } }, tag: { type: String, default: 'div' }, ariaRole: { type: String, default: 'group' },
    }; const yo = i.extend({
      name: bo, functional: !0, props: mo, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.tag, qe(r, { class: vo({ 'btn-group': !n.vertical, 'btn-group-vertical': n.vertical }, 'btn-group-'.concat(n.size), n.size), attrs: { role: n.ariaRole } }), i); },
    }); const go = zt({ components: { BButtonGroup: yo, BBtnGroup: yo } }); const wo = ['.btn:not(.disabled):not([disabled]):not(.dropdown-item)', '.form-control:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(','); const Oo = i.extend({
      name: 'BButtonToolbar',
      mixins: [rn],
      props: { justify: { type: Boolean, default: !1 }, keyNav: { type: Boolean, default: !1 } },
      mounted() { this.keyNav && this.getItems(); },
      methods: {
        onFocusin(t) { t.target === this.$el && (t.preventDefault(), t.stopPropagation(), this.focusFirst(t)); }, stop(t) { t.preventDefault(), t.stopPropagation(); }, onKeydown(t) { if (this.keyNav) { const e = t.keyCode; const n = t.shiftKey; e === Rn.UP || e === Rn.LEFT ? (this.stop(t), n ? this.focusFirst(t) : this.focusPrev(t)) : e !== Rn.DOWN && e !== Rn.RIGHT || (this.stop(t), n ? this.focusLast(t) : this.focusNext(t)); } }, focusFirst() { const t = this.getItems(); Ve(t[0]); }, focusPrev(t) { let e = this.getItems(); const n = e.indexOf(t.target); n > -1 && (e = e.slice(0, n).reverse(), Ve(e[0])); }, focusNext(t) { let e = this.getItems(); const n = e.indexOf(t.target); n > -1 && (e = e.slice(n + 1), Ve(e[0])); }, focusLast() { const t = this.getItems().reverse(); Ve(t[0]); }, getItems() { const t = Se(wo, this.$el); return t.forEach(((t) => { t.tabIndex = -1; })), t.filter(((t) => ge(t))); },
      },
      render(t) {
        return t('div', {
          staticClass: 'btn-toolbar', class: { 'justify-content-between': this.justify }, attrs: { role: 'toolbar', tabindex: this.keyNav ? '0' : null }, on: this.keyNav ? { focusin: this.onFocusin, keydown: this.onKeydown } : {},
        }, [this.normalizeSlot('default')]);
      },
    }); const So = zt({ components: { BButtonToolbar: Oo, BBtnToolbar: Oo } }); const xo = function (t, e) { if (t.length !== e.length) return !1; for (var n = !0, r = 0; n && r < t.length; r++)n = To(t[r], e[r]); return n; }; var To = function t(e, n) { if (e === n) return !0; let r = bt(e); let i = bt(n); if (r || i) return !(!r || !i) && e.getTime() === n.getTime(); if (r = a(e), i = a(n), r || i) return !(!r || !i) && xo(e, n); if (r = S(e), i = S(n), r || i) { if (!r || !i) return !1; const o = g(e).length; const s = g(n).length; if (o !== s) return !1; for (const l in e) { const c = e.hasOwnProperty(l); const u = n.hasOwnProperty(l); if (c && !u || !c && u || !t(e[l], n[l])) return !1; } } return String(e) === String(n); }; const ko = To; function Po(t, e) { return Do(t) || Bo(t, e) || Co(t, e) || jo(); } function jo() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function Co(t, e) { if (t) { if (typeof t === 'string') return _o(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _o(t, e) : void 0; } } function _o(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } function Bo(t, e) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) { const n = []; let r = !0; let i = !1; let o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) if (n.push(a.value), e && n.length === e) break; } catch (l) { i = !0, o = l; } finally { try { r || s.return == null || s.return(); } finally { if (i) throw o; } } return n; } } function Do(t) { if (Array.isArray(t)) return t; } function Eo(t, e, n) { return Eo = $o() ? Reflect.construct : function (t, e, n) { const r = [null]; r.push.apply(r, e); const i = Function.bind.apply(t, r); const o = new i(); return n && Ao(o, n.prototype), o; }, Eo.apply(null, arguments); } function $o() { if (typeof Reflect === 'undefined' || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if (typeof Proxy === 'function') return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (() => {}))), !0; } catch (t) { return !1; } } function Ao(t, e) { return Ao = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t; }, Ao(t, e); } const Io = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; const Fo = /-|\s|T/; const Lo = function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; return Eo(Date, e); }; const Ro = function (t) { if (pt(t) && Io.test(t.trim())) { const e = t.split(Fo).map(((t) => ie(t, 1))); const n = Po(e, 3); const r = n[0]; const i = n[1]; const o = n[2]; return Lo(r, i - 1, o); } return bt(t) ? Lo(t.getFullYear(), t.getMonth(), t.getDate()) : null; }; const Mo = function (t) { if (t = Ro(t), !t) return null; const e = t.getFullYear(); const n = '0'.concat(t.getMonth() + 1).slice(-2); const r = '0'.concat(t.getDate()).slice(-2); return ''.concat(e, '-').concat(n, '-').concat(r); }; const No = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'gregory'; t = l(t).filter(V); const n = new Intl.DateTimeFormat(t, { calendar: e }); return n.resolvedOptions().locale; }; const Vo = function (t, e) { const n = new Intl.DateTimeFormat(t, e); return n.format; }; const zo = function (t, e) { return Mo(t) === Mo(e); }; const Ho = function (t) { return t = Lo(t), t.setDate(1), t; }; const Go = function (t) { return t = Lo(t), t.setMonth(t.getMonth() + 1), t.setDate(0), t; }; const Uo = function (t, e) { t = Lo(t); const n = t.getMonth(); return t.setFullYear(t.getFullYear() + e), t.getMonth() !== n && t.setDate(0), t; }; const Wo = function (t) { t = Lo(t); const e = t.getMonth(); return t.setMonth(e - 1), t.getMonth() === e && t.setDate(0), t; }; const qo = function (t) { t = Lo(t); const e = t.getMonth(); return t.setMonth(e + 1), t.getMonth() === (e + 2) % 12 && t.setDate(0), t; }; const Yo = function (t) { return Uo(t, -1); }; const Ko = function (t) { return Uo(t, 1); }; const Xo = function (t) { return Uo(t, -10); }; const Jo = function (t) { return Uo(t, 10); }; const Zo = function (t) { let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; return t = Ro(t), e = Ro(e) || t, n = Ro(n) || t, t ? t < e ? e : t > n ? n : t : null; }; const Qo = ['ar', 'az', 'ckb', 'fa', 'he', 'ks', 'lrc', 'mzn', 'ps', 'sd', 'te', 'ug', 'ur', 'yi'].map(((t) => t.toLowerCase())); const ta = /-u-.+/; const ea = function (t) { const e = Yn(t).toLowerCase().replace(ta, '').split('-'); const n = e.slice(0, 2).join('-'); const r = e[0]; return s(Qo, n) || s(Qo, r); }; const na = {
      props: { id: { type: String } }, data() { return { localId_: null }; }, computed: { safeId() { const t = this.id || this.localId_; const e = function (e) { return t ? (e = String(e || '').replace(/\s+/g, '_'), e ? `${t}_${e}` : t) : null; }; return e; } }, mounted() { const t = this; this.$nextTick((() => { t.localId_ = '__BVID__'.concat(t._uid); })); },
    }; function ra(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function ia(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? ra(Object(n), !0).forEach(((e) => { oa(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function oa(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const aa = 'BCalendar'; const sa = Rn.UP; const la = Rn.DOWN; const ca = Rn.LEFT; const ua = Rn.RIGHT; const fa = Rn.PAGEUP; const da = Rn.PAGEDOWN; const ha = Rn.HOME; const pa = Rn.END; const va = Rn.ENTER; const ba = Rn.SPACE; const ma = 'gregory'; const ya = 'numeric'; const ga = '2-digit'; const wa = 'long'; const Oa = 'short'; const Sa = 'narrow'; const xa = i.extend({
      name: aa,
      mixins: [mr, na, rn],
      model: { prop: 'value', event: 'input' },
      props: {
        value: { type: [String, Date] },
        valueAsDate: { type: Boolean, default: !1 },
        initialDate: { type: [String, Date] },
        disabled: { type: Boolean, default: !1 },
        readonly: { type: Boolean, default: !1 },
        min: { type: [String, Date] },
        max: { type: [String, Date] },
        dateDisabledFn: { type: Function },
        startWeekday: { type: [Number, String], default: 0 },
        locale: { type: [String, Array] },
        direction: { type: String },
        selectedVariant: { type: String, default: 'primary' },
        todayVariant: { type: String },
        noHighlightToday: { type: Boolean, default: !1 },
        dateInfoFn: { type: Function },
        width: { type: String, default: '270px' },
        block: { type: Boolean, default: !1 },
        hideHeader: { type: Boolean, default: !1 },
        showDecadeNav: { type: Boolean, default: !1 },
        hidden: { type: Boolean, default: !1 },
        ariaControls: { type: String },
        roleDescription: { type: String },
        labelPrevDecade: { type: String, default() { return Qt(aa, 'labelPrevDecade'); } },
        labelPrevYear: { type: String, default() { return Qt(aa, 'labelPrevYear'); } },
        labelPrevMonth: { type: String, default() { return Qt(aa, 'labelPrevMonth'); } },
        labelCurrentMonth: { type: String, default() { return Qt(aa, 'labelCurrentMonth'); } },
        labelNextMonth: { type: String, default() { return Qt(aa, 'labelNextMonth'); } },
        labelNextYear: { type: String, default() { return Qt(aa, 'labelNextYear'); } },
        labelNextDecade: { type: String, default() { return Qt(aa, 'labelNextDecade'); } },
        labelToday: { type: String, default() { return Qt(aa, 'labelToday'); } },
        labelSelected: { type: String, default() { return Qt(aa, 'labelSelected'); } },
        labelNoDateSelected: { type: String, default() { return Qt(aa, 'labelNoDateSelected'); } },
        labelCalendar: { type: String, default() { return Qt(aa, 'labelCalendar'); } },
        labelNav: { type: String, default() { return Qt(aa, 'labelNav'); } },
        labelHelp: { type: String, default() { return Qt(aa, 'labelHelp'); } },
        dateFormatOptions: {
          type: Object,
          default() {
            return {
              year: ya, month: wa, day: ya, weekday: wa,
            };
          },
        },
        weekdayHeaderFormat: { type: String, default: Oa, validator(t) { return s([wa, Oa, Sa], t); } },
      },
      data() {
        const t = Mo(this.value) || ''; return {
          selectedYMD: t, activeYMD: t || Mo(Zo(this.initialDate || this.getToday()), this.min, this.max), gridHasFocus: !1, isLive: !1,
        };
      },
      computed: {
        valueId() { return this.safeId(); },
        widgetId() { return this.safeId('_calendar-wrapper_'); },
        navId() { return this.safeId('_calendar-nav_'); },
        gridId() { return this.safeId('_calendar-grid_'); },
        gridCaptionId() { return this.safeId('_calendar-grid-caption_'); },
        gridHelpId() { return this.safeId('_calendar-grid-help_'); },
        activeId() { return this.activeYMD ? this.safeId('_cell-'.concat(this.activeYMD, '_')) : null; },
        selectedDate() { return Ro(this.selectedYMD); },
        activeDate() { return Ro(this.activeYMD); },
        computedMin() { return Ro(this.min); },
        computedMax() { return Ro(this.max); },
        computedWeekStarts() { return mn(ie(this.startWeekday, 0), 0) % 7; },
        computedLocale() { return No(l(this.locale).filter(V), ma); },
        calendarLocale() { const t = new Intl.DateTimeFormat(this.computedLocale, { calendar: ma }); const e = t.resolvedOptions().calendar; let n = t.resolvedOptions().locale; return e !== ma && (n = n.replace(/-u-.+$/i, '').concat('-u-ca-gregory')), n; },
        calendarYear() { return this.activeDate.getFullYear(); },
        calendarMonth() { return this.activeDate.getMonth(); },
        calendarFirstDay() { return Lo(this.calendarYear, this.calendarMonth, 1); },
        calendarDaysInMonth() { const t = Lo(this.calendarFirstDay); return t.setMonth(t.getMonth() + 1, 0), t.getDate(); },
        computedVariant() { return 'btn-'.concat(this.selectedVariant || 'primary'); },
        computedTodayVariant() { return 'btn-outline-'.concat(this.todayVariant || this.selectedVariant || 'primary'); },
        isRTL() { const t = Yn(this.direction).toLowerCase(); return t === 'rtl' || t !== 'ltr' && ea(this.computedLocale); },
        context() {
          const t = this.selectedYMD; const e = Ro(t); const n = this.activeYMD; const r = Ro(n); return {
            selectedYMD: t, selectedDate: e, selectedFormatted: e ? this.formatDateString(e) : this.labelNoDateSelected, activeYMD: n, activeDate: r, activeFormatted: r ? this.formatDateString(r) : '', disabled: this.dateDisabled(r), locale: this.computedLocale, calendarLocale: this.calendarLocale, rtl: this.isRTL,
          };
        },
        dateOutOfRange() { const t = this.computedMin; const e = this.computedMax; return function (n) { return n = Ro(n), t && n < t || e && n > e; }; },
        dateDisabled() { const t = this.dateOutOfRange; const e = dt(this.dateDisabledFn) ? this.dateDisabledFn : function () { return !1; }; return function (n) { n = Ro(n); const r = Mo(n); return !(!t(n) && !e(r, n)); }; },
        formatDateString() {
          return Vo(this.calendarLocale, ia(ia({ year: ya, month: ga, day: ga }, this.dateFormatOptions), {}, {
            hour: void 0, minute: void 0, second: void 0, calendar: ma,
          }));
        },
        formatYearMonth() { return Vo(this.calendarLocale, { year: ya, month: wa, calendar: ma }); },
        formatWeekdayName() { return Vo(this.calendarLocale, { weekday: wa, calendar: ma }); },
        formatWeekdayNameShort() { return Vo(this.calendarLocale, { weekday: this.weekdayHeaderFormat || Oa, calendar: ma }); },
        formatDay() {
          const t = new Intl.NumberFormat([this.computedLocale], {
            style: 'decimal', minimumIntegerDigits: 1, minimumFractionDigits: 0, maximumFractionDigits: 0, notation: 'standard',
          }); return function (e) { return t.format(e.getDate()); };
        },
        prevDecadeDisabled() { const t = this.computedMin; return this.disabled || t && Go(Xo(this.activeDate)) < t; },
        prevYearDisabled() { const t = this.computedMin; return this.disabled || t && Go(Yo(this.activeDate)) < t; },
        prevMonthDisabled() { const t = this.computedMin; return this.disabled || t && Go(Wo(this.activeDate)) < t; },
        thisMonthDisabled() { return this.disabled; },
        nextMonthDisabled() { const t = this.computedMax; return this.disabled || t && Ho(qo(this.activeDate)) > t; },
        nextYearDisabled() { const t = this.computedMax; return this.disabled || t && Ho(Ko(this.activeDate)) > t; },
        nextDecadeDisabled() { const t = this.computedMax; return this.disabled || t && Ho(Jo(this.activeDate)) > t; },
        calendar() {
          for (var t = [], e = this.calendarFirstDay, n = e.getFullYear(), r = e.getMonth(), i = this.calendarDaysInMonth, o = e.getDay(), s = (this.computedWeekStarts > o ? 7 : 0) - this.computedWeekStarts, l = dt(this.dateInfoFn) ? this.dateInfoFn : function () { return {}; }, c = 0 - s - o, u = 0; u < 6 && c < i; u++) {
            t[u] = []; for (let f = 0; f < 7; f++) {
              c++; const d = Lo(n, r, c); const h = d.getMonth(); const p = Mo(d); const v = this.dateDisabled(d); let b = l(p, Ro(p)); b = pt(b) || a(b) ? { class: b } : x(b) ? ia({ class: '' }, b) : { class: '' }, t[u].push({
                ymd: p, day: this.formatDay(d), label: this.formatDateString(d), isThisMonth: h === r, isDisabled: v, info: b,
              });
            }
          } return t;
        },
        calendarHeadings() { const t = this; return this.calendar[0].map(((e) => ({ text: t.formatWeekdayNameShort(Ro(e.ymd)), label: t.formatWeekdayName(Ro(e.ymd)) }))); },
      },
      watch: {
        value(t, e) { const n = Mo(t) || ''; const r = Mo(e) || ''; zo(n, r) || (this.activeYMD = n || this.activeYMD, this.selectedYMD = n); }, selectedYMD(t, e) { t !== e && this.$emit('input', this.valueAsDate ? Ro(t) || null : t || ''); }, context(t, e) { ko(t, e) || this.$emit('context', t); }, hidden(t) { this.activeYMD = this.selectedYMD || Mo(this.value || this.constrainDate(this.initialDate || this.getToday())), this.setLive(!t); },
      },
      created() { const t = this; this.$nextTick((() => { t.$emit('context', t.context); })); },
      mounted() { this.setLive(!0); },
      activated() { this.setLive(!0); },
      deactivated() { this.setLive(!1); },
      beforeDestroy() { this.setLive(!1); },
      methods: {
        focus() { this.disabled || Ve(this.$refs.grid); }, blur() { this.disabled || ze(this.$refs.grid); }, setLive(t) { const e = this; t ? this.$nextTick((() => { he((() => { e.isLive = !0; })); })) : this.isLive = !1; }, getToday() { return Ro(Lo()); }, constrainDate(t) { return Zo(t, this.computedMin, this.computedMax); }, emitSelected(t) { const e = this; this.$nextTick((() => { e.$emit('selected', Mo(t) || '', Ro(t) || null); })); }, setGridFocusFlag(t) { this.gridHasFocus = !this.disabled && t.type === 'focus'; }, onKeydownWrapper(t) { const e = t.altKey; const n = t.ctrlKey; const r = t.keyCode; if (s([fa, da, pa, ha, ca, sa, ua, la], r)) { t.preventDefault(), t.stopPropagation(); let i = Lo(this.activeDate); let o = Lo(this.activeDate); const a = i.getDate(); const l = this.constrainDate(this.getToday()); const c = this.isRTL; r === fa ? (i = (e ? n ? Xo : Yo : Wo)(i), o = Lo(i), o.setDate(1)) : r === da ? (i = (e ? n ? Jo : Ko : qo)(i), o = Lo(i), o.setMonth(o.getMonth() + 1), o.setDate(0)) : r === ca ? (i.setDate(a + (c ? 1 : -1)), i = this.constrainDate(i), o = i) : r === ua ? (i.setDate(a + (c ? -1 : 1)), i = this.constrainDate(i), o = i) : r === sa ? (i.setDate(a - 7), i = this.constrainDate(i), o = i) : r === la ? (i.setDate(a + 7), i = this.constrainDate(i), o = i) : r === ha ? (i = l, o = i) : r === pa && (i = Ro(this.selectedDate) || l, o = i), this.dateOutOfRange(o) || zo(i, this.activeDate) || (this.activeYMD = Mo(i)), this.focus(); } }, onKeydownGrid(t) { const e = t.keyCode; const n = this.activeDate; e !== va && e !== ba || (t.preventDefault(), t.stopPropagation(), this.disabled || this.readonly || this.dateDisabled(n) || (this.selectedYMD = Mo(n), this.emitSelected(n)), this.focus()); }, onClickDay(t) { const e = this.selectedDate; const n = this.activeDate; const r = Ro(t.ymd); this.disabled || t.isDisabled || this.dateDisabled(r) || (this.readonly || (this.selectedYMD = Mo(zo(r, e) ? e : r), this.emitSelected(r)), this.activeYMD = Mo(zo(r, n) ? n : Lo(r)), this.focus()); }, gotoPrevDecade() { this.activeYMD = Mo(this.constrainDate(Xo(this.activeDate))); }, gotoPrevYear() { this.activeYMD = Mo(this.constrainDate(Yo(this.activeDate))); }, gotoPrevMonth() { this.activeYMD = Mo(this.constrainDate(Wo(this.activeDate))); }, gotoCurrentMonth() { this.activeYMD = Mo(this.constrainDate(this.getToday())); }, gotoNextMonth() { this.activeYMD = Mo(this.constrainDate(qo(this.activeDate))); }, gotoNextYear() { this.activeYMD = Mo(this.constrainDate(Ko(this.activeDate))); }, gotoNextDecade() { this.activeYMD = Mo(this.constrainDate(Jo(this.activeDate))); }, onHeaderClick() { this.disabled || (this.activeYMD = this.selectedYMD || Mo(this.getToday()), this.focus()); },
      },
      render(t) {
        const e = this; if (this.hidden) return t(); const n = this.valueId; const r = this.widgetId; const i = this.navId; const o = this.gridId; const a = this.gridCaptionId; const s = this.gridHelpId; const l = this.activeId; const c = this.isLive; const u = this.isRTL; const f = this.activeYMD; const d = this.selectedYMD; const h = this.safeId; const p = !this.showDecadeNav; const v = Mo(this.getToday()); const b = !this.noHighlightToday; let m = t('output', {
          staticClass: 'form-control form-control-sm text-center',
          class: { 'text-muted': this.disabled, readonly: this.readonly || this.disabled },
          attrs: {
            id: n, for: o, role: 'status', tabindex: this.disabled ? null : '-1', 'data-selected': Yn(d), 'aria-live': c ? 'polite' : 'off', 'aria-atomic': c ? 'true' : null,
          },
          on: { click: this.onHeaderClick, focus: this.onHeaderClick },
        }, this.selectedDate ? [t('bdi', { staticClass: 'sr-only' }, ' ('.concat(Yn(this.labelSelected), ') ')), t('bdi', this.formatDateString(this.selectedDate))] : this.labelNoDateSelected || ' '); m = t('header', { staticClass: 'b-calendar-header', class: { 'sr-only': this.hideHeader }, attrs: { title: this.selectedDate && this.labelSelectedDate || null } }, [m]); const y = { isRTL: u }; const g = { shiftV: 0.5 }; const w = ia(ia({}, g), {}, { flipH: u }); const O = ia(ia({}, g), {}, { flipH: !u }); const S = this.normalizeSlot('nav-prev-decade', y) || t(li, { props: w }); const x = this.normalizeSlot('nav-prev-year', y) || t(ci, { props: w }); const T = this.normalizeSlot('nav-prev-month', y) || t(fi, { props: w }); const k = this.normalizeSlot('nav-this-month', y) || t(hi, { props: g }); const P = this.normalizeSlot('nav-next-month', y) || t(fi, { props: O }); const j = this.normalizeSlot('nav-next-year', y) || t(ci, { props: O }); const C = this.normalizeSlot('nav-next-decade', y) || t(li, { props: O }); const _ = function (e, n, r, i, o) {
          return t('button', {
            staticClass: 'btn btn-sm btn-outline-secondary border-0 flex-fill',
            class: { disabled: i },
            attrs: {
              title: n || null, type: 'button', 'aria-label': n || null, 'aria-disabled': i ? 'true' : null, 'aria-keyshortcuts': o || null,
            },
            on: i ? {} : { click: r },
          }, [t('div', { attrs: { 'aria-hidden': 'true' } }, [e])]);
        }; const B = t('div', {
          staticClass: 'b-calendar-nav d-flex',
          attrs: {
            id: i, role: 'group', 'aria-hidden': this.disabled ? 'true' : null, 'aria-label': this.labelNav || null, 'aria-controls': o,
          },
        }, [p ? t() : _(S, this.labelPrevDecade, this.gotoPrevDecade, this.prevDecadeDisabled, 'Ctrl+Alt+PageDown'), _(x, this.labelPrevYear, this.gotoPrevYear, this.prevYearDisabled, 'Alt+PageDown'), _(T, this.labelPrevMonth, this.gotoPrevMonth, this.prevMonthDisabled, 'PageDown'), _(k, this.labelCurrentMonth, this.gotoCurrentMonth, this.thisMonthDisabled, 'Home'), _(P, this.labelNextMonth, this.gotoNextMonth, this.nextMonthDisabled, 'PageUp'), _(j, this.labelNextYear, this.gotoNextYear, this.nextYearDisabled, 'Alt+PageUp'), p ? t() : _(C, this.labelNextDecade, this.gotoNextDecade, this.nextDecadeDisabled, 'Ctrl+Alt+PageUp')]); const D = t('header', {
          key: 'grid-caption', staticClass: 'b-calendar-grid-caption text-center font-weight-bold', class: { 'text-muted': this.disabled }, attrs: { id: a, 'aria-live': c ? 'polite' : null, 'aria-atomic': c ? 'true' : null },
        }, this.formatYearMonth(this.calendarFirstDay)); const E = t('div', { staticClass: 'b-calendar-grid-weekdays row no-gutters border-bottom', attrs: { 'aria-hidden': 'true' } }, this.calendarHeadings.map(((n, r) => t('small', {
          key: r, staticClass: 'col text-truncate', class: { 'text-muted': e.disabled }, attrs: { title: n.label === n.text ? null : n.label, 'aria-label': n.label },
        }, n.text)))); let $ = this.calendar.map(((n) => {
          const r = n.map(((n, r) => {
            let i; const o = n.ymd === d; const a = n.ymd === f; const s = n.ymd === v; const l = h('_cell-'.concat(n.ymd, '_')); const c = t('span', { staticClass: 'btn border-0 rounded-circle text-nowrap', class: (i = { focus: a && e.gridHasFocus, disabled: n.isDisabled || e.disabled, active: o }, oa(i, e.computedVariant, o), oa(i, e.computedTodayVariant, s && b && !o && n.isThisMonth), oa(i, 'btn-outline-light', !(s && b) && !o && !a), oa(i, 'btn-light', !(s && b) && !o && a), oa(i, 'text-muted', !n.isThisMonth && !o), oa(i, 'text-dark', !(s && b) && !o && !a && n.isThisMonth), oa(i, 'font-weight-bold', (o || n.isThisMonth) && !n.isDisabled), i), on: { click() { return e.onClickDay(n); } } }, n.day); return t('div', {
              key: r,
              staticClass: 'col p-0',
              class: n.isDisabled ? 'bg-light' : n.info.class || '',
              attrs: {
                id: l, role: 'button', 'data-date': n.ymd, 'aria-hidden': n.isThisMonth ? null : 'true', 'aria-disabled': n.isDisabled || e.disabled ? 'true' : null, 'aria-label': [n.label, o ? '('.concat(e.labelSelected, ')') : null, s ? '('.concat(e.labelToday, ')') : null].filter(V).join(' '), 'aria-selected': o ? 'true' : null, 'aria-current': o ? 'date' : null,
              },
            }, [c]);
          })); return t('div', { key: n[0].ymd, staticClass: 'row no-gutters' }, r);
        })); $ = t('div', { staticClass: 'b-calendar-grid-body', style: this.disabled ? { pointerEvents: 'none' } : {} }, $); const A = t('footer', { staticClass: 'b-calendar-grid-help border-top small text-muted text-center bg-light', attrs: { id: s } }, [t('div', { staticClass: 'small' }, this.labelHelp)]); const I = t('div', {
          ref: 'grid',
          staticClass: 'b-calendar-grid form-control h-auto text-center',
          attrs: {
            id: o, role: 'application', tabindex: this.disabled ? null : '0', 'data-month': f.slice(0, -3), 'aria-roledescription': this.labelCalendar || null, 'aria-labelledby': a, 'aria-describedby': s, 'aria-disabled': this.disabled ? 'true' : null, 'aria-activedescendant': l,
          },
          on: { keydown: this.onKeydownGrid, focus: this.setGridFocusFlag, blur: this.setGridFocusFlag },
        }, [D, E, $, A]); let F = this.normalizeSlot('default'); F = F ? t('footer', { staticClass: 'b-calendar-footer' }, F) : t(); const L = t('div', {
          staticClass: 'b-calendar-inner',
          style: this.block ? {} : { width: this.width },
          attrs: {
            id: r, dir: u ? 'rtl' : 'ltr', lang: this.computedLocale || null, role: 'group', 'aria-disabled': this.disabled ? 'true' : null, 'aria-controls': this.ariaControls || null, 'aria-roledescription': this.roleDescription || null, 'aria-describedby': [this.bvAttrs['aria-describedby'], n, s].filter(V).join(' '),
          },
          on: { keydown: this.onKeydownWrapper },
        }, [m, B, I, F]); return t('div', { staticClass: 'b-calendar', class: { 'd-block': this.block } }, [L]);
      },
    }); const Ta = zt({ components: { BCalendar: xa } }); const ka = function (t, e) { return t + Wn(e); }; const Pa = ka; const ja = function (t, e) { return Un(e.replace(t, '')); }; const Ca = ja; const _a = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V; if (a(t)) return t.map(e); const n = {}; for (const r in t)t.hasOwnProperty(r) && (n[e(r)] = S(t[r]) ? T(t[r]) : t[r]); return n; }; const Ba = _a; const Da = {
      props: {
        tag: { type: String, default: 'div' }, bgVariant: { type: String }, borderVariant: { type: String }, textVariant: { type: String },
      },
    }; const Ea = { title: { type: String }, titleTag: { type: String, default: 'h4' } }; const $a = i.extend({
      name: 'BCardTitle', functional: !0, props: Ea, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.titleTag, qe(r, { staticClass: 'card-title' }), i || Yn(n.title)); },
    }); const Aa = 'BCardSubTitle'; const Ia = { subTitle: { type: String }, subTitleTag: { type: String, default: 'h6' }, subTitleTextVariant: { type: String, default() { return Qt(Aa, 'subTitleTextVariant'); } } }; const Fa = i.extend({
      name: Aa, functional: !0, props: Ia, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.subTitleTag, qe(r, { staticClass: 'card-subtitle', class: [n.subTitleTextVariant ? 'text-'.concat(n.subTitleTextVariant) : null] }), i || Yn(n.subTitle)); },
    }); function La(t) { return Va(t) || Na(t) || Ma(t) || Ra(); } function Ra() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function Ma(t, e) { if (t) { if (typeof t === 'string') return za(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? za(t, e) : void 0; } } function Na(t) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t); } function Va(t) { if (Array.isArray(t)) return za(t); } function za(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } function Ha(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ga(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Ha(Object(n), !0).forEach(((e) => { Ua(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ha(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Ua(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Wa = Ga(Ga(Ga(Ga({}, Ba(Da.props, Pa.bind(null, 'body'))), {}, { bodyClass: { type: [String, Object, Array] } }, Ea), Ia), {}, { overlay: { type: Boolean, default: !1 } }); const qa = i.extend({
      name: 'BCardBody', functional: !0, props: Wa, render(t, e) { let n; const r = e.props; const i = e.data; const o = e.children; let a = t(); let s = t(); const l = o || [t()]; return r.title && (a = t($a, { props: Fn(Ea, r) })), r.subTitle && (s = t(Fa, { props: Fn(Ia, r), class: ['mb-2'] })), t(r.bodyTag, qe(i, { staticClass: 'card-body', class: [(n = { 'card-img-overlay': r.overlay }, Ua(n, 'bg-'.concat(r.bodyBgVariant), r.bodyBgVariant), Ua(n, 'border-'.concat(r.bodyBorderVariant), r.bodyBorderVariant), Ua(n, 'text-'.concat(r.bodyTextVariant), r.bodyTextVariant), n), r.bodyClass || {}] }), [a, s].concat(La(l))); },
    }); function Ya(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ka(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Ya(Object(n), !0).forEach(((e) => { Xa(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ya(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Xa(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Ja = Ka(Ka({}, Ba(Da.props, Pa.bind(null, 'header'))), {}, { header: { type: String }, headerHtml: { type: String }, headerClass: { type: [String, Object, Array] } }); const Za = i.extend({
      name: 'BCardHeader', functional: !0, props: Ja, render(t, e) { let n; const r = e.props; const i = e.data; const o = e.children; return t(r.headerTag, qe(i, { staticClass: 'card-header', class: [r.headerClass, (n = {}, Xa(n, 'bg-'.concat(r.headerBgVariant), r.headerBgVariant), Xa(n, 'border-'.concat(r.headerBorderVariant), r.headerBorderVariant), Xa(n, 'text-'.concat(r.headerTextVariant), r.headerTextVariant), n)] }), o || [t('div', { domProps: to(r.headerHtml, r.header) })]); },
    }); function Qa(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function ts(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Qa(Object(n), !0).forEach(((e) => { es(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qa(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function es(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const ns = ts(ts({}, Ba(Da.props, Pa.bind(null, 'footer'))), {}, { footer: { type: String }, footerHtml: { type: String }, footerClass: { type: [String, Object, Array] } }); const rs = i.extend({
      name: 'BCardFooter', functional: !0, props: ns, render(t, e) { let n; const r = e.props; const i = e.data; const o = e.children; return t(r.footerTag, qe(i, { staticClass: 'card-footer', class: [r.footerClass, (n = {}, es(n, 'bg-'.concat(r.footerBgVariant), r.footerBgVariant), es(n, 'border-'.concat(r.footerBorderVariant), r.footerBorderVariant), es(n, 'text-'.concat(r.footerTextVariant), r.footerTextVariant), n)] }), o || [t('div', { domProps: to(r.footerHtml, r.footer) })]); },
    }); const is = {
      src: { type: String, required: !0 }, alt: { type: String }, top: { type: Boolean, default: !1 }, bottom: { type: Boolean, default: !1 }, start: { type: Boolean, default: !1 }, left: { type: Boolean, default: !1 }, end: { type: Boolean, default: !1 }, right: { type: Boolean, default: !1 }, height: { type: [Number, String] }, width: { type: [Number, String] },
    }; const os = i.extend({
      name: 'BCardImg',
      functional: !0,
      props: is,
      render(t, e) {
        const n = e.props; const r = e.data; let i = 'card-img'; return n.top ? i += '-top' : n.right || n.end ? i += '-right' : n.bottom ? i += '-bottom' : (n.left || n.start) && (i += '-left'), t('img', qe(r, {
          class: [i],
          attrs: {
            src: n.src || null, alt: n.alt || null, height: n.height || null, width: n.width || null,
          },
        }));
      },
    }); function as(t) { return us(t) || cs(t) || ls(t) || ss(); } function ss() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function ls(t, e) { if (t) { if (typeof t === 'string') return fs(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fs(t, e) : void 0; } } function cs(t) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t); } function us(t) { if (Array.isArray(t)) return fs(t); } function fs(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } function ds(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function hs(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? ds(Object(n), !0).forEach(((e) => { ps(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ds(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function ps(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const vs = Ba(is, Pa.bind(null, 'img')); vs.imgSrc.required = !1; const bs = hs(hs(hs(hs(hs(hs({}, Wa), Ja), ns), vs), Ba(Da.props)), {}, { align: { type: String }, noBody: { type: Boolean, default: !1 } }); const ms = i.extend({
      name: 'BCard', functional: !0, props: bs, render(t, e) { let n; const r = e.props; const i = e.data; const o = e.slots; const a = e.scopedSlots; const s = o(); const l = a || {}; let c = t(); let u = t(); let f = t(); let d = t(); let h = t(); if (r.imgSrc) { const p = t(os, { props: Fn(vs, r, Ca.bind(null, 'img')) }); r.imgBottom ? h = p : c = p; } return (r.header || r.headerHtml || en('header', l, s)) && (u = t(Za, { props: Fn(Ja, r) }, nn('header', {}, l, s))), f = nn('default', {}, l, s) || [], r.noBody || (f = [t(qa, { props: Fn(Wa, r) }, as(f))]), (r.footer || r.footerHtml || en('footer', l, s)) && (d = t(rs, { props: Fn(ns, r) }, nn('footer', {}, l, s))), t(r.tag, qe(i, { staticClass: 'card', class: (n = { 'flex-row': r.imgLeft || r.imgStart, 'flex-row-reverse': (r.imgRight || r.imgEnd) && !(r.imgLeft || r.imgStart) }, ps(n, 'text-'.concat(r.align), r.align), ps(n, 'bg-'.concat(r.bgVariant), r.bgVariant), ps(n, 'border-'.concat(r.borderVariant), r.borderVariant), ps(n, 'text-'.concat(r.textVariant), r.textVariant), n) }), [c, u].concat(as(f), [d, h])); },
    }); function ys(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function gs(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } function ws(t, e, n) { return e && gs(t.prototype, e), n && gs(t, n), t; } const Os = '__bv__visibility_observer'; const Ss = /^\d+$/; const xs = (function () { function t(e, n, r) { ys(this, t), this.el = e, this.callback = n.callback, this.margin = n.margin || 0, this.once = n.once || !1, this.observer = null, this.visible = void 0, this.doneOnce = !1, this.createObserver(r); } return ws(t, [{ key: 'createObserver', value(t) { const e = this; if (this.observer && this.stop(), !this.doneOnce && dt(this.callback)) { try { this.observer = new IntersectionObserver(this.handler.bind(this), { root: null, rootMargin: this.margin, threshold: 0 }); } catch (n) { return this.doneOnce = !0, this.observer = void 0, void this.callback(null); }t.context.$nextTick((() => { he((() => { e.observer && e.observer.observe(e.el); })); })); } } }, { key: 'handler', value(t) { const e = t ? t[0] : {}; const n = Boolean(e.isIntersecting || e.intersectionRatio > 0); n !== this.visible && (this.visible = n, this.callback(n), this.once && this.visible && (this.doneOnce = !0, this.stop())); } }, { key: 'stop', value() { const t = this.observer; t && t.disconnect && t.disconnect(), this.observer = null; } }]), t; }()); const Ts = function (t) { const e = t[Os]; e && e.stop && e.stop(), delete t[Os]; }; const ks = function (t, e, n) { const r = e.value; const i = e.modifiers; const o = { margin: '0px', once: !1, callback: r }; g(i).forEach(((t) => { Ss.test(t) ? o.margin = ''.concat(t, 'px') : t.toLowerCase() === 'once' && (o.once = !0); })), Ts(t), t[Os] = new xs(t, o, n), t[Os]._prevModifiers = T(i); }; const Ps = function (t, e, n) { const r = e.value; const i = e.oldValue; let o = e.modifiers; o = T(o), !t || r === i && t[Os] && ko(o, t[Os]._prevModifiers) || ks(t, { value: r, modifiers: o }, n); }; const js = function (t) { Ts(t); }; const Cs = { bind: ks, componentUpdated: Ps, unbind: js }; function _s(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Bs = 'BImg'; const Ds = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>'; const Es = {
      src: { type: String }, srcset: { type: [String, Array] }, sizes: { type: [String, Array] }, alt: { type: String }, width: { type: [Number, String] }, height: { type: [Number, String] }, block: { type: Boolean, default: !1 }, fluid: { type: Boolean, default: !1 }, fluidGrow: { type: Boolean, default: !1 }, rounded: { type: [Boolean, String], default: !1 }, thumbnail: { type: Boolean, default: !1 }, left: { type: Boolean, default: !1 }, right: { type: Boolean, default: !1 }, center: { type: Boolean, default: !1 }, blank: { type: Boolean, default: !1 }, blankColor: { type: String, default() { return Qt(Bs, 'blankColor'); } },
    }; const $s = function (t, e, n) { const r = encodeURIComponent(Ds.replace('%{w}', Yn(t)).replace('%{h}', Yn(e)).replace('%{f}', n)); return 'data:image/svg+xml;charset=UTF-8,'.concat(r); }; const As = i.extend({
      name: Bs,
      functional: !0,
      props: Es,
      render(t, e) {
        let n; const r = e.props; const i = e.data; let o = r.src; let a = ie(r.width) || null; let s = ie(r.height) || null; let c = null; let u = r.block; let f = l(r.srcset).filter(V).join(','); let d = l(r.sizes).filter(V).join(','); return r.blank && (!s && a ? s = a : !a && s && (a = s), a || s || (a = 1, s = 1), o = $s(a, s, r.blankColor || 'transparent'), f = null, d = null), r.left ? c = 'float-left' : r.right ? c = 'float-right' : r.center && (c = 'mx-auto', u = !0), t('img', qe(i, {
          attrs: {
            src: o, alt: r.alt || null, width: a ? Yn(a) : null, height: s ? Yn(s) : null, srcset: f || null, sizes: d || null,
          },
          class: (n = {
            'img-thumbnail': r.thumbnail, 'img-fluid': r.fluid || r.fluidGrow, 'w-100': r.fluidGrow, rounded: r.rounded === '' || !0 === r.rounded,
          }, _s(n, 'rounded-'.concat(r.rounded), pt(r.rounded) && r.rounded !== ''), _s(n, c, c), _s(n, 'd-block', u), n),
        }));
      },
    }); function Is(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Fs = 'BImgLazy'; const Ls = {
      src: { type: String, required: !0 }, srcset: { type: [String, Array] }, sizes: { type: [String, Array] }, alt: { type: String }, width: { type: [Number, String] }, height: { type: [Number, String] }, blankSrc: { type: String, default: null }, blankColor: { type: String, default() { return Qt(Fs, 'blankColor'); } }, blankWidth: { type: [Number, String] }, blankHeight: { type: [Number, String] }, show: { type: Boolean, default: !1 }, fluid: { type: Boolean, default: !1 }, fluidGrow: { type: Boolean, default: !1 }, block: { type: Boolean, default: !1 }, thumbnail: { type: Boolean, default: !1 }, rounded: { type: [Boolean, String], default: !1 }, left: { type: Boolean, default: !1 }, right: { type: Boolean, default: !1 }, center: { type: Boolean, default: !1 }, offset: { type: [Number, String], default: 360 },
    }; const Rs = i.extend({
      name: Fs,
      directives: { bVisible: Cs },
      props: Ls,
      data() { return { isShown: this.show }; },
      computed: {
        computedSrc() { return !this.blankSrc || this.isShown ? this.src : this.blankSrc; }, computedBlank() { return !(this.isShown || this.blankSrc); }, computedWidth() { return this.isShown ? this.width : this.blankWidth || this.width; }, computedHeight() { return this.isShown ? this.height : this.blankHeight || this.height; }, computedSrcset() { const t = l(this.srcset).filter(V).join(','); return !this.blankSrc || this.isShown ? t : null; }, computedSizes() { const t = l(this.sizes).filter(V).join(','); return !this.blankSrc || this.isShown ? t : null; },
      },
      watch: { show(t, e) { if (t !== e) { const n = !z.c || t; this.isShown = n, n !== t && this.$nextTick(this.updateShowProp); } }, isShown(t, e) { t !== e && this.updateShowProp(); } },
      mounted() { this.isShown = !z.c || this.show; },
      methods: { updateShowProp() { this.$emit('update:show', this.isShown); }, doShow(t) { !t && t !== null || this.isShown || (this.isShown = !0); } },
      render(t) {
        let e; const n = []; this.isShown || n.push({ name: 'b-visible', value: this.doShow, modifiers: (e = {}, Is(e, ''.concat(ie(this.offset, 0)), !0), Is(e, 'once', !0), e) }); return t(As, {
          directives: n,
          props: {
            src: this.computedSrc, blank: this.computedBlank, width: this.computedWidth, height: this.computedHeight, srcset: this.computedSrcset || null, sizes: this.computedSizes || null, alt: this.alt, blankColor: this.blankColor, fluid: this.fluid, fluidGrow: this.fluidGrow, block: this.block, thumbnail: this.thumbnail, rounded: this.rounded, left: this.left, right: this.right, center: this.center,
          },
        });
      },
    }); function Ms(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ns(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Ms(Object(n), !0).forEach(((e) => { Vs(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ms(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Vs(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const zs = P(Ls, ['left', 'right', 'center', 'block', 'rounded', 'thumbnail', 'fluid', 'fluidGrow']); const Hs = Ns(Ns({}, zs), {}, {
      top: { type: Boolean, default: !1 }, bottom: { type: Boolean, default: !1 }, start: { type: Boolean, default: !1 }, left: { type: Boolean, default: !1 }, end: { type: Boolean, default: !1 }, right: { type: Boolean, default: !1 },
    }); const Gs = i.extend({
      name: 'BCardImgLazy', functional: !0, props: Hs, render(t, e) { const n = e.props; const r = e.data; let i = 'card-img'; n.top ? i += '-top' : n.right || n.end ? i += '-right' : n.bottom ? i += '-bottom' : (n.left || n.start) && (i += '-left'); const o = Ns(Ns({}, n), {}, { left: !1, right: !1, center: !1 }); return t(Rs, qe(r, { class: [i], props: o })); },
    }); const Us = { textTag: { type: String, default: 'p' } }; const Ws = i.extend({
      name: 'BCardText', functional: !0, props: Us, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.textTag, qe(r, { staticClass: 'card-text' }), i); },
    }); const qs = { tag: { type: String, default: 'div' }, deck: { type: Boolean, default: !1 }, columns: { type: Boolean, default: !1 } }; const Ys = i.extend({
      name: 'BCardGroup', functional: !0, props: qs, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.tag, qe(r, { class: n.deck ? 'card-deck' : n.columns ? 'card-columns' : 'card-group' }), i); },
    }); const Ks = zt({
      components: {
        BCard: ms, BCardHeader: Za, BCardBody: qa, BCardTitle: $a, BCardSubTitle: Fa, BCardFooter: rs, BCardImg: os, BCardImgLazy: Gs, BCardText: Ws, BCardGroup: Ys,
      },
    }); const Xs = function () {}; const Js = Xs; function Zs(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Qs(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Zs(Object(n), !0).forEach(((e) => { tl(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Zs(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function tl(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const el = function (t, e, n) { if (t = t ? t.$el || t : null, !be(t)) return null; if (Ct('observeDom')) return null; const r = new pe((((t) => { for (var n = !1, r = 0; r < t.length && !n; r++) { const i = t[r]; const o = i.type; const a = i.target; (o === 'characterData' && a.nodeType === Node.TEXT_NODE || o === 'attributes' || o === 'childList' && (i.addedNodes.length > 0 || i.removedNodes.length > 0)) && (n = !0); }n && e(); }))); return r.observe(t, Qs({ childList: !0, subtree: !0 }, n)), r; }; const nl = el; const rl = { passive: !0 }; const il = { passive: !0, capture: !1 }; const ol = function (t) { return z.e ? S(t) ? t : { capture: !!t || !1 } : !!(S(t) ? t.capture : t); }; const al = function (t, e, n, r) { t && t.addEventListener && t.addEventListener(e, n, ol(r)); }; const sl = function (t, e, n, r) { t && t.removeEventListener && t.removeEventListener(e, n, ol(r)); }; const ll = function (t) { for (var e = t ? al : sl, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i]; e.apply(void 0, r); }; const cl = 'BCarousel'; const ul = { next: { dirClass: 'carousel-item-left', overlayClass: 'carousel-item-next' }, prev: { dirClass: 'carousel-item-right', overlayClass: 'carousel-item-prev' } }; const fl = 650; const dl = 500; const hl = 40; const pl = { TOUCH: 'touch', PEN: 'pen' }; const vl = {
      WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'otransitionend oTransitionEnd', transition: 'transitionend',
    }; const bl = function (t) { for (const e in vl) if (!ct(t.style[e])) return vl[e]; return null; }; const ml = i.extend({
      name: cl,
      mixins: [na, rn],
      provide() { return { bvCarousel: this }; },
      model: { prop: 'value', event: 'input' },
      props: {
        labelPrev: { type: String, default() { return Qt(cl, 'labelPrev'); } }, labelNext: { type: String, default() { return Qt(cl, 'labelNext'); } }, labelGotoSlide: { type: String, default() { return Qt(cl, 'labelGotoSlide'); } }, labelIndicators: { type: String, default() { return Qt(cl, 'labelIndicators'); } }, interval: { type: Number, default: 5e3 }, indicators: { type: Boolean, default: !1 }, controls: { type: Boolean, default: !1 }, noAnimation: { type: Boolean, default: !1 }, fade: { type: Boolean, default: !1 }, noWrap: { type: Boolean, default: !1 }, noTouch: { type: Boolean, default: !1 }, noHoverPause: { type: Boolean, default: !1 }, imgWidth: { type: [Number, String] }, imgHeight: { type: [Number, String] }, background: { type: String }, value: { type: Number, default: 0 },
      },
      data() {
        return {
          index: this.value || 0, isSliding: !1, transitionEndEvent: null, slides: [], direction: null, isPaused: !(ie(this.interval, 0) > 0), touchStartX: 0, touchDeltaX: 0,
        };
      },
      computed: { numSlides() { return this.slides.length; } },
      watch: {
        value(t, e) { t !== e && this.setSlide(ie(t, 0)); }, interval(t, e) { t !== e && (t ? (this.pause(!0), this.start(!1)) : this.pause(!1)); }, isPaused(t, e) { t !== e && this.$emit(t ? 'paused' : 'unpaused'); }, index(t, e) { t === e || this.isSliding || this.doSlide(t, e); },
      },
      created() { this._intervalId = null, this._animationTimeout = null, this._touchTimeout = null, this.isPaused = !(ie(this.interval, 0) > 0); },
      mounted() {
        this.transitionEndEvent = bl(this.$el) || null, this.updateSlides(), nl(this.$refs.inner, this.updateSlides.bind(this), {
          subtree: !1, childList: !0, attributes: !0, attributeFilter: ['id'],
        });
      },
      beforeDestroy() { clearTimeout(this._animationTimeout), clearTimeout(this._touchTimeout), clearInterval(this._intervalId), this._intervalId = null, this._animationTimeout = null, this._touchTimeout = null; },
      methods: {
        setSlide(t) { const e = this; const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; if (!(z.j && document.visibilityState && document.hidden)) { const r = this.noWrap; const i = this.numSlides; t = wn(t), i !== 0 && (this.isSliding ? this.$once('sliding-end', (() => e.setSlide(t, n))) : (this.direction = n, this.index = t >= i ? r ? i - 1 : 0 : t < 0 ? r ? 0 : i - 1 : t, r && this.index !== t && this.index !== this.value && this.$emit('input', this.index))); } }, prev() { this.setSlide(this.index - 1, 'prev'); }, next() { this.setSlide(this.index + 1, 'next'); }, pause(t) { t || (this.isPaused = !0), this._intervalId && (clearInterval(this._intervalId), this._intervalId = null); }, start(t) { t || (this.isPaused = !1), this._intervalId && (clearInterval(this._intervalId), this._intervalId = null), this.interval && this.numSlides > 1 && (this._intervalId = setInterval(this.next, mn(1e3, this.interval))); }, restart() { this.$el.contains(me()) || this.start(); }, doSlide(t, e) { const n = this; const r = Boolean(this.interval); const i = this.calcDirection(this.direction, e, t); const o = i.overlayClass; const a = i.dirClass; const s = this.slides[e]; const l = this.slides[t]; if (s && l) { if (this.isSliding = !0, r && this.pause(!1), this.$emit('sliding-start', t), this.$emit('input', this.index), this.noAnimation)Ce(l, 'active'), _e(s, 'active'), this.isSliding = !1, this.$nextTick((() => n.$emit('sliding-end', t))); else { Ce(l, o), Oe(l), Ce(s, a), Ce(l, a); let c = !1; const u = function e() { if (!c) { if (c = !0, n.transitionEndEvent) { const r = n.transitionEndEvent.split(/\s+/); r.forEach(((t) => sl(s, t, e, il))); }n._animationTimeout = null, _e(l, a), _e(l, o), Ce(l, 'active'), _e(s, 'active'), _e(s, a), _e(s, o), De(s, 'aria-current', 'false'), De(l, 'aria-current', 'true'), De(s, 'aria-hidden', 'true'), De(l, 'aria-hidden', 'false'), n.isSliding = !1, n.direction = null, n.$nextTick((() => n.$emit('sliding-end', t))); } }; if (this.transitionEndEvent) { const f = this.transitionEndEvent.split(/\s+/); f.forEach(((t) => al(s, t, u, il))); } this._animationTimeout = setTimeout(u, fl); }r && this.start(!1); } }, updateSlides() { this.pause(!0), this.slides = Se('.carousel-item', this.$refs.inner); const t = this.slides.length; const e = mn(0, bn(wn(this.index), t - 1)); this.slides.forEach(((n, r) => { const i = r + 1; r === e ? (Ce(n, 'active'), De(n, 'aria-current', 'true')) : (_e(n, 'active'), De(n, 'aria-current', 'false')), De(n, 'aria-posinset', String(i)), De(n, 'aria-setsize', String(t)); })), this.setSlide(e), this.start(this.isPaused); }, calcDirection() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return t ? ul[t] : n > e ? ul.next : ul.prev; }, handleClick(t, e) { const n = t.keyCode; t.type !== 'click' && n !== Rn.SPACE && n !== Rn.ENTER || (t.preventDefault(), t.stopPropagation(), e()); }, handleSwipe() { const t = yn(this.touchDeltaX); if (!(t <= hl)) { const e = t / this.touchDeltaX; this.touchDeltaX = 0, e > 0 ? this.prev() : e < 0 && this.next(); } }, touchStart(t) { z.f && pl[t.pointerType.toUpperCase()] ? this.touchStartX = t.clientX : z.f || (this.touchStartX = t.touches[0].clientX); }, touchMove(t) { t.touches && t.touches.length > 1 ? this.touchDeltaX = 0 : this.touchDeltaX = t.touches[0].clientX - this.touchStartX; }, touchEnd(t) { z.f && pl[t.pointerType.toUpperCase()] && (this.touchDeltaX = t.clientX - this.touchStartX), this.handleSwipe(), this.pause(!1), this._touchTimeout && clearTimeout(this._touchTimeout), this._touchTimeout = setTimeout(this.start, dl + mn(1e3, this.interval)); },
      },
      render(t) {
        const e = this; const n = t('div', { ref: 'inner', class: ['carousel-inner'], attrs: { id: this.safeId('__BV_inner_'), role: 'list' } }, [this.normalizeSlot('default')]); let r = t(); if (this.controls) {
          const i = function (t) { e.isSliding ? t.preventDefault() : e.handleClick(t, e.prev); }; const o = function (t) { e.isSliding ? t.preventDefault() : e.handleClick(t, e.next); }; r = [t('a', {
            class: ['carousel-control-prev'],
            attrs: {
              href: '#', role: 'button', 'aria-controls': this.safeId('__BV_inner_'), 'aria-disabled': this.isSliding ? 'true' : null,
            },
            on: { click: i, keydown: i },
          }, [t('span', { class: ['carousel-control-prev-icon'], attrs: { 'aria-hidden': 'true' } }), t('span', { class: ['sr-only'] }, [this.labelPrev])]), t('a', {
            class: ['carousel-control-next'],
            attrs: {
              href: '#', role: 'button', 'aria-controls': this.safeId('__BV_inner_'), 'aria-disabled': this.isSliding ? 'true' : null,
            },
            on: { click: o, keydown: o },
          }, [t('span', { class: ['carousel-control-next-icon'], attrs: { 'aria-hidden': 'true' } }), t('span', { class: ['sr-only'] }, [this.labelNext])])];
        } const a = t('ol', {
          class: ['carousel-indicators'],
          directives: [{
            name: 'show', rawName: 'v-show', value: this.indicators, expression: 'indicators',
          }],
          attrs: {
            id: this.safeId('__BV_indicators_'), 'aria-hidden': this.indicators ? 'false' : 'true', 'aria-label': this.labelIndicators, 'aria-owns': this.safeId('__BV_inner_'),
          },
        }, this.slides.map(((n, r) => t('li', {
          key: 'slide_'.concat(r),
          class: { active: r === e.index },
          attrs: {
            role: 'button', id: e.safeId('__BV_indicator_'.concat(r + 1, '_')), tabindex: e.indicators ? '0' : '-1', 'aria-current': r === e.index ? 'true' : 'false', 'aria-label': ''.concat(e.labelGotoSlide, ' ').concat(r + 1), 'aria-describedby': e.slides[r].id || null, 'aria-controls': e.safeId('__BV_inner_'),
          },
          on: { click(t) { e.handleClick(t, (() => { e.setSlide(r); })); }, keydown(t) { e.handleClick(t, (() => { e.setSlide(r); })); } },
        })))); const s = {
          mouseenter: this.noHoverPause ? Js : this.pause, mouseleave: this.noHoverPause ? Js : this.restart, focusin: this.pause, focusout: this.restart, keydown(t) { if (!/input|textarea/i.test(t.target.tagName)) { const n = t.keyCode; n !== Rn.LEFT && n !== Rn.RIGHT || (t.preventDefault(), t.stopPropagation(), e[n === Rn.LEFT ? 'prev' : 'next']()); } },
        }; return !this.noTouch && z.h && (z.f ? (s['&pointerdown'] = this.touchStart, s['&pointerup'] = this.touchEnd) : (s['&touchstart'] = this.touchStart, s['&touchmove'] = this.touchMove, s['&touchend'] = this.touchEnd)), t('div', {
          staticClass: 'carousel', class: { slide: !this.noAnimation, 'carousel-fade': !this.noAnimation && this.fade, 'pointer-event': !this.noTouch && z.h && z.f }, style: { background: this.background }, attrs: { role: 'region', id: this.safeId(), 'aria-busy': this.isSliding ? 'true' : 'false' }, on: s,
        }, [n, r, a]);
      },
    }); const yl = {
      imgSrc: { type: String }, imgAlt: { type: String }, imgWidth: { type: [Number, String] }, imgHeight: { type: [Number, String] }, imgBlank: { type: Boolean, default: !1 }, imgBlankColor: { type: String, default: 'transparent' }, contentVisibleUp: { type: String }, contentTag: { type: String, default: 'div' }, caption: { type: String }, captionHtml: { type: String }, captionTag: { type: String, default: 'h3' }, text: { type: String }, textHtml: { type: String }, textTag: { type: String, default: 'p' }, background: { type: String },
    }; const gl = i.extend({
      name: 'BCarouselSlide',
      mixins: [na, rn],
      inject: { bvCarousel: { default() { return { noTouch: !0 }; } } },
      props: yl,
      computed: { contentClasses() { return [this.contentVisibleUp ? 'd-none' : '', this.contentVisibleUp ? 'd-'.concat(this.contentVisibleUp, '-block') : '']; }, computedWidth() { return this.imgWidth || this.bvCarousel.imgWidth || null; }, computedHeight() { return this.imgHeight || this.bvCarousel.imgHeight || null; } },
      render(t) {
        const e = !this.bvCarousel.noTouch && z.h; let
          n = this.normalizeSlot('img'); n || !this.imgSrc && !this.imgBlank || (n = t(As, {
          props: {
            fluidGrow: !0, block: !0, src: this.imgSrc, blank: this.imgBlank, blankColor: this.imgBlankColor, width: this.computedWidth, height: this.computedHeight, alt: this.imgAlt,
          },
          on: e ? { dragstart(t) { t.preventDefault(); } } : {},
        })), n || (n = t()); let r = t(); const i = [!(!this.caption && !this.captionHtml) && t(this.captionTag, { domProps: to(this.captionHtml, this.caption) }), !(!this.text && !this.textHtml) && t(this.textTag, { domProps: to(this.textHtml, this.text) }), this.normalizeSlot('default') || !1]; return i.some(Boolean) && (r = t(this.contentTag, { staticClass: 'carousel-caption', class: this.contentClasses }, i.map(((e) => e || t())))), t('div', { staticClass: 'carousel-item', style: { background: this.background || this.bvCarousel.background || null }, attrs: { id: this.safeId(), role: 'listitem' } }, [n, r]);
      },
    }); const wl = zt({ components: { BCarousel: ml, BCarouselSlide: gl } }); const Ol = function (t) { t.style.height = 0, he((() => { Oe(t), t.style.height = ''.concat(t.scrollHeight, 'px'); })); }; const Sl = function (t) { t.style.height = null; }; const xl = function (t) { t.style.height = 'auto', t.style.display = 'block', t.style.height = ''.concat(Ie(t).height, 'px'), Oe(t), t.style.height = 0; }; const Tl = function (t) { t.style.height = null; }; const kl = {
      css: !0, enterClass: '', enterActiveClass: 'collapsing', enterToClass: 'collapse show', leaveClass: 'collapse show', leaveActiveClass: 'collapsing', leaveToClass: 'collapse',
    }; const Pl = {
      enter: Ol, afterEnter: Sl, leave: xl, afterLeave: Tl,
    }; const jl = i.extend({
      name: 'BVCollapse', functional: !0, props: { appear: { type: Boolean, default: !1 } }, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t('transition', qe(r, { props: kl, on: Pl }, { props: n }), i); },
    }); const Cl = { methods: { listenOnRoot(t, e) { const n = this; this.$root.$on(t, e), this.$on('hook:beforeDestroy', (() => { n.$root.$off(t, e); })); }, listenOnRootOnce(t, e) { const n = this; this.$root.$once(t, e), this.$on('hook:beforeDestroy', (() => { n.$root.$off(t, e); })); }, emitOnRoot(t) { for (var e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i]; (e = this.$root).$emit.apply(e, [t].concat(r)); } } }; const _l = Rn.ENTER; const Bl = Rn.SPACE; const Dl = 'collapsed'; const El = 'not-collapsed'; const $l = '__BV_toggle'; const Al = ''.concat($l, '_HANDLER__'); const Il = ''.concat($l, '_CLICK__'); const Fl = ''.concat($l, '_STATE__'); const Ll = ''.concat($l, '_TARGETS__'); const Rl = 'false'; const Ml = 'true'; const Nl = 'aria-controls'; const Vl = 'aria-expanded'; const zl = 'role'; const Hl = 'tabindex'; const Gl = 'bv::toggle::collapse'; const Ul = 'bv::collapse::state'; const Wl = 'bv::collapse::sync::state'; const ql = 'bv::request::collapse::state'; const Yl = [_l, Bl]; const Kl = /\s+/; const Xl = function (t) { return !s(['BUTTON', 'A'], t.tagName); }; const Jl = function (t) { const e = t.modifiers; const n = t.arg; let r = t.value; const i = g(e || {}); return r = pt(r) ? r.split(Kl) : r, l(n, r).forEach(((t) => pt(t) && i.push(t))), i.filter(((t, e, n) => t && n.indexOf(t) === e)); }; const Zl = function (t) { const e = t[Il]; e && (sl(t, 'click', e), sl(t, 'keydown', e)), t[Il] = null; }; const Ql = function (t, e) { if (Zl(t), e.context) { const n = function (n) { const r = t[Ll] || []; const i = n.type === 'keydown' && !s(Yl, n.keyCode); n.defaultPrevented || i || we(t) || r.forEach(((t) => { e.context.$root.$emit(Gl, t); })); }; t[Il] = n, al(t, 'click', n), Xl(t) && al(t, 'keydown', n); } }; const tc = function (t, e) { t[Al] && e.context && e.context.$root.$off([Ul, Wl], t[Al]), t[Al] = null; }; const ec = function (t, e) { if (tc(t, e), e.context) { const n = function (e, n) { s(t[Ll] || [], e) && (t[Fl] = n, nc(t, n)); }; t[Al] = n, e.context.$root.$on([Ul, Wl], n); } }; var nc = function (t, e) { e ? (_e(t, Dl), Ce(t, El), De(t, Vl, Ml)) : (_e(t, El), Ce(t, Dl), De(t, Vl, Rl)); }; const rc = function (t, e) { t[e] = null, delete t[e]; }; const ic = function (t, e, n) { if (z.j && n.context) { Xl(t) && (Ae(t, zl) || De(t, zl, 'button'), Ae(t, Hl) || De(t, Hl, '0')), nc(t, t[Fl]); const r = Jl(e); r.length ? De(t, Nl, r.join(' ')) : Ee(t, Nl), Ql(t, n), ko(r, t[Ll]) || (t[Ll] = r, r.forEach(((t) => { n.context.$root.$emit(ql, t); }))); } }; const oc = {
      bind(t, e, n) { t[Fl] = !1, t[Ll] = [], ec(t, n), ic(t, e, n); }, componentUpdated: ic, updated: ic, unbind(t, e, n) { Zl(t), tc(t, n), rc(t, Al), rc(t, Il), rc(t, Fl), rc(t, Ll), _e(t, Dl), _e(t, El), Ee(t, Vl), Ee(t, Nl), Ee(t, zl); },
    }; const ac = 'bv::collapse::accordion'; const sc = i.extend({
      name: 'BCollapse',
      mixins: [na, Cl, rn],
      model: { prop: 'visible', event: 'input' },
      props: {
        isNav: { type: Boolean, default: !1 }, accordion: { type: String }, visible: { type: Boolean, default: !1 }, tag: { type: String, default: 'div' }, appear: { type: Boolean, default: !1 },
      },
      data() { return { show: this.visible, transitioning: !1 }; },
      computed: { classObject() { return { 'navbar-collapse': this.isNav, collapse: !this.transitioning, show: this.show && !this.transitioning }; } },
      watch: { visible(t) { t !== this.show && (this.show = t); }, show(t, e) { t !== e && this.emitState(); } },
      created() { this.show = this.visible; },
      mounted() { const t = this; this.show = this.visible, this.listenOnRoot(Gl, this.handleToggleEvt), this.listenOnRoot(ac, this.handleAccordionEvt), this.isNav && (this.setWindowEvents(!0), this.handleResize()), this.$nextTick((() => { t.emitState(); })), this.listenOnRoot(ql, ((e) => { e === t.safeId() && t.$nextTick(t.emitSync); })); },
      updated() { this.emitSync(); },
      deactivated() { this.isNav && this.setWindowEvents(!1); },
      activated() { this.isNav && this.setWindowEvents(!0), this.emitSync(); },
      beforeDestroy() { this.show = !1, this.isNav && z.j && this.setWindowEvents(!1); },
      methods: {
        setWindowEvents(t) { ll(t, window, 'resize', this.handleResize, il), ll(t, window, 'orientationchange', this.handleResize, il); }, toggle() { this.show = !this.show; }, onEnter() { this.transitioning = !0, this.$emit('show'); }, onAfterEnter() { this.transitioning = !1, this.$emit('shown'); }, onLeave() { this.transitioning = !0, this.$emit('hide'); }, onAfterLeave() { this.transitioning = !1, this.$emit('hidden'); }, emitState() { this.$emit('input', this.show), this.emitOnRoot(Ul, this.safeId(), this.show), this.accordion && this.show && this.emitOnRoot(ac, this.safeId(), this.accordion); }, emitSync() { this.emitOnRoot(Wl, this.safeId(), this.show); }, checkDisplayBlock() { const t = Be(this.$el, 'show'); _e(this.$el, 'show'); const e = Fe(this.$el).display === 'block'; return t && Ce(this.$el, 'show'), e; }, clickHandler(t) { const e = t.target; this.isNav && e && Fe(this.$el).display === 'block' && (Te(e, '.nav-link,.dropdown-item') || ke('.nav-link,.dropdown-item', e)) && (this.checkDisplayBlock() || (this.show = !1)); }, handleToggleEvt(t) { t === this.safeId() && this.toggle(); }, handleAccordionEvt(t, e) { this.accordion && e === this.accordion && (t === this.safeId() ? this.show || this.toggle() : this.show && this.toggle()); }, handleResize() { this.show = Fe(this.$el).display === 'block'; },
      },
      render(t) {
        const e = this; const n = { visible: this.show, close() { return e.show = !1; } }; const r = t(this.tag, {
          class: this.classObject, directives: [{ name: 'show', value: this.show }], attrs: { id: this.safeId() }, on: { click: this.clickHandler },
        }, [this.normalizeSlot('default', n)]); return t(jl, {
          props: { appear: this.appear },
          on: {
            enter: this.onEnter, afterEnter: this.onAfterEnter, leave: this.onLeave, afterLeave: this.onAfterLeave,
          },
        }, [r]);
      },
    }); const lc = zt({ directives: { VBToggle: oc } }); const cc = zt({ components: { BCollapse: sc }, plugins: { VBTogglePlugin: lc } }); const uc = n('f0bd'); function fc(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function dc(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } function hc(t, e, n) { return e && dc(t.prototype, e), n && dc(t, n), t; } const pc = (function () {
      function t(e) {
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (fc(this, t), !e) throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, ' given.')); h(this, t.Defaults, this.constructor.Defaults, n, { type: e }), v(this, {
          type: j(), cancelable: j(), nativeEvent: j(), target: j(), relatedTarget: j(), vueTarget: j(), componentId: j(),
        }); let r = !1; this.preventDefault = function () { this.cancelable && (r = !0); }, b(this, 'defaultPrevented', { enumerable: !0, get() { return r; } });
      } return hc(t, null, [{
        key: 'Defaults',
        get() {
          return {
            type: '', cancelable: !0, nativeEvent: null, target: null, relatedTarget: null, vueTarget: null, componentId: null,
          };
        },
      }]), t;
    }()); const vc = {
      data() { return { listenForClickOut: !1 }; }, watch: { listenForClickOut(t, e) { t !== e && (sl(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, il), t && al(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, il)); } }, beforeCreate() { this.clickOutElement = null, this.clickOutEventName = null; }, mounted() { this.clickOutElement || (this.clickOutElement = document), this.clickOutEventName || (this.clickOutEventName = 'click'), this.listenForClickOut && al(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, il); }, beforeDestroy() { sl(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, il); }, methods: { isClickOut(t) { return !Pe(this.$el, t.target); }, _clickOutHandler(t) { this.clickOutHandler && this.isClickOut(t) && this.clickOutHandler(t); } },
    }; const bc = {
      data() { return { listenForFocusIn: !1 }; }, watch: { listenForFocusIn(t, e) { t !== e && (sl(this.focusInElement, 'focusin', this._focusInHandler, il), t && al(this.focusInElement, 'focusin', this._focusInHandler, il)); } }, beforeCreate() { this.focusInElement = null; }, mounted() { this.focusInElement || (this.focusInElement = document), this.listenForFocusIn && al(this.focusInElement, 'focusin', this._focusInHandler, il); }, beforeDestroy() { sl(this.focusInElement, 'focusin', this._focusInHandler, il); }, methods: { _focusInHandler(t) { this.focusInHandler && this.focusInHandler(t); } },
    }; function mc(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function yc(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? mc(Object(n), !0).forEach(((e) => { gc(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mc(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function gc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const wc = function (t) { return (t || []).filter(ge); }; const Oc = 'bv::dropdown::'; const Sc = ''.concat(Oc, 'shown'); const xc = ''.concat(Oc, 'hidden'); const Tc = { FORM_CHILD: '.dropdown form', ITEM_SELECTOR: ['.dropdown-item', '.b-dropdown-form'].map(((t) => ''.concat(t, ':not(.disabled):not([disabled])'))).join(', ') }; const kc = {
      TOP: 'top-start', TOPEND: 'top-end', BOTTOM: 'bottom-start', BOTTOMEND: 'bottom-end', RIGHT: 'right-start', RIGHTEND: 'right-end', LEFT: 'left-start', LEFTEND: 'left-end',
    }; const Pc = {
      dropup: { type: Boolean, default: !1 }, dropright: { type: Boolean, default: !1 }, dropleft: { type: Boolean, default: !1 }, right: { type: Boolean, default: !1 }, offset: { type: [Number, String], default: 0 }, noFlip: { type: Boolean, default: !1 }, popperOpts: { default() {} }, boundary: { type: [String, rt], default: 'scrollParent' },
    }; const jc = {
      mixins: [na, vc, bc],
      provide() { return { bvDropdown: this }; },
      inject: { bvNavbar: { default: null } },
      props: yc({ disabled: { type: Boolean, default: !1 } }, Pc),
      data() { return { visible: !1, visibleChangePrevented: !1 }; },
      computed: { inNavbar() { return !ut(this.bvNavbar); }, toggler() { const t = this.$refs.toggle; return t ? t.$el || t : null; }, directionClass() { return this.dropup ? 'dropup' : this.dropright ? 'dropright' : this.dropleft ? 'dropleft' : ''; } },
      watch: {
        visible(t, e) {
          if (this.visibleChangePrevented) this.visibleChangePrevented = !1; else if (t !== e) {
            const n = t ? 'show' : 'hide'; const
              r = new pc(n, {
                cancelable: !0, vueTarget: this, target: this.$refs.menu, relatedTarget: null, componentId: this.safeId ? this.safeId() : this.id || null,
              }); if (this.emitEvent(r), r.defaultPrevented) return this.visibleChangePrevented = !0, this.visible = e, void this.$off('hidden', this.focusToggler); n === 'show' ? this.showMenu() : this.hideMenu();
          }
        },
        disabled(t, e) { t !== e && t && this.visible && (this.visible = !1); },
      },
      created() { this.$_popper = null; },
      deactivated() { this.visible = !1, this.whileOpenListen(!1), this.destroyPopper(); },
      beforeDestroy() { this.visible = !1, this.whileOpenListen(!1), this.destroyPopper(); },
      methods: {
        emitEvent(t) { const e = t.type; this.$emit(e, t), this.$root.$emit(''.concat(Oc).concat(e), t); }, showMenu() { const t = this; if (!this.disabled) { if (!this.inNavbar) if (typeof uc.a === 'undefined')kt('Popper.js not found. Falling back to CSS positioning', 'BDropdown'); else { let e = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle; e = e.$el || e, this.createPopper(e); } this.$root.$emit(Sc, this), this.whileOpenListen(!0), this.$nextTick((() => { t.focusMenu(), t.$emit('shown'); })); } }, hideMenu() { this.whileOpenListen(!1), this.$root.$emit(xc, this), this.$emit('hidden'), this.destroyPopper(); }, createPopper(t) { this.destroyPopper(), this.$_popper = new uc.a(t, this.$refs.menu, this.getPopperConfig()); }, destroyPopper() { this.$_popper && this.$_popper.destroy(), this.$_popper = null; }, updatePopper() { try { this.$_popper.scheduleUpdate(); } catch (t) {} }, getPopperConfig() { let t = kc.BOTTOM; this.dropup ? t = this.right ? kc.TOPEND : kc.TOP : this.dropright ? t = kc.RIGHT : this.dropleft ? t = kc.LEFT : this.right && (t = kc.BOTTOMEND); const e = { placement: t, modifiers: { offset: { offset: this.offset || 0 }, flip: { enabled: !this.noFlip } } }; return this.boundary && (e.modifiers.preventOverflow = { boundariesElement: this.boundary }), yc(yc({}, e), this.popperOpts || {}); }, whileOpenListen(t) { this.listenForClickOut = t, this.listenForFocusIn = t; const e = t ? '$on' : '$off'; this.$root[e](Sc, this.rootCloseListener); }, rootCloseListener(t) { t !== this && (this.visible = !1); }, show() { const t = this; this.disabled || he((() => { t.visible = !0; })); }, hide() { const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; this.disabled || (this.visible = !1, t && this.$once('hidden', this.focusToggler)); }, toggle(t) { t = t || {}; const e = t; const n = e.type; const r = e.keyCode; (n === 'click' || n === 'keydown' && [Rn.ENTER, Rn.SPACE, Rn.DOWN].indexOf(r) !== -1) && (this.disabled ? this.visible = !1 : (this.$emit('toggle', t), t.preventDefault(), t.stopPropagation(), this.visible ? this.hide(!0) : this.show())); }, onMousedown(t) { t.preventDefault(); }, onKeydown(t) { const e = t.keyCode; e === Rn.ESC ? this.onEsc(t) : e === Rn.DOWN ? this.focusNext(t, !1) : e === Rn.UP && this.focusNext(t, !0); }, onEsc(t) { this.visible && (this.visible = !1, t.preventDefault(), t.stopPropagation(), this.$once('hidden', this.focusToggler)); }, onSplitClick(t) { this.disabled ? this.visible = !1 : this.$emit('click', t); }, hideHandler(t) { const e = t.target; !this.visible || Pe(this.$refs.menu, e) || Pe(this.toggler, e) || this.hide(); }, clickOutHandler(t) { this.hideHandler(t); }, focusInHandler(t) { this.hideHandler(t); }, focusNext(t, e) { const n = this; const r = t.target; !this.visible || t && ke(Tc.FORM_CHILD, r) || (t.preventDefault(), t.stopPropagation(), this.$nextTick((() => { const t = n.getItems(); if (!(t.length < 1)) { let i = t.indexOf(r); e && i > 0 ? i-- : !e && i < t.length - 1 && i++, i < 0 && (i = 0), n.focusItem(i, t); } }))); }, focusItem(t, e) { const n = e.find(((e, n) => n === t)); Ve(n); }, getItems() { return wc(Se(Tc.ITEM_SELECTOR, this.$refs.menu)); }, focusMenu() { Ve(this.$refs.menu); }, focusToggler() { const t = this; this.$nextTick((() => { Ve(t.toggler); })); },
      },
    }; const Cc = 'BDropdown'; const _c = {
      text: { type: String, default: '' }, html: { type: String }, size: { type: String, default() { return Qt(Cc, 'size'); } }, variant: { type: String, default() { return Qt(Cc, 'variant'); } }, block: { type: Boolean, default: !1 }, menuClass: { type: [String, Array, Object] }, toggleTag: { type: String, default: 'button' }, toggleText: { type: String, default() { return Qt(Cc, 'toggleText'); } }, toggleClass: { type: [String, Array, Object] }, noCaret: { type: Boolean, default: !1 }, split: { type: Boolean, default: !1 }, splitHref: { type: String }, splitTo: { type: [String, Object] }, splitVariant: { type: String, default() { return Qt(Cc, 'splitVariant'); } }, splitClass: { type: [String, Array, Object] }, splitButtonType: { type: String, default: 'button', validator(t) { return s(['button', 'submit', 'reset'], t); } }, lazy: { type: Boolean, default: !1 }, role: { type: String, default: 'menu' },
    }; const Bc = i.extend({
      name: Cc,
      mixins: [na, jc, rn],
      props: _c,
      computed: {
        dropdownClasses() {
          return [this.directionClass, {
            show: this.visible, 'btn-group': this.split || !this.block, 'd-flex': this.block && this.split, 'position-static': this.boundary !== 'scrollParent' || !this.boundary,
          }];
        },
        menuClasses() { return [this.menuClass, { 'dropdown-menu-right': this.right, show: this.visible }]; },
        toggleClasses() { return [this.toggleClass, { 'dropdown-toggle-split': this.split, 'dropdown-toggle-no-caret': this.noCaret && !this.split }]; },
      },
      render(t) {
        let e = t(); const n = this.normalizeSlot('button-content') || this.html || Qi(this.text); if (this.split) {
          const r = {
            variant: this.splitVariant || this.variant, size: this.size, block: this.block, disabled: this.disabled,
          }; this.splitTo ? r.to = this.splitTo : this.splitHref ? r.href = this.splitHref : this.splitButtonType && (r.type = this.splitButtonType), e = t(qr, {
            ref: 'button', props: r, class: this.splitClass, attrs: { id: this.safeId('_BV_button_') }, on: { click: this.onSplitClick },
          }, [n]);
        } const i = t(qr, {
          ref: 'toggle',
          staticClass: 'dropdown-toggle',
          class: this.toggleClasses,
          props: {
            tag: this.toggleTag, variant: this.variant, size: this.size, block: this.block && !this.split, disabled: this.disabled,
          },
          attrs: { id: this.safeId('_BV_toggle_'), 'aria-haspopup': 'true', 'aria-expanded': this.visible ? 'true' : 'false' },
          on: { mousedown: this.onMousedown, click: this.toggle, keydown: this.toggle },
        }, [this.split ? t('span', { class: ['sr-only'] }, [this.toggleText]) : n]); const o = t('ul', {
          ref: 'menu', staticClass: 'dropdown-menu', class: this.menuClasses, attrs: { role: this.role, tabindex: '-1', 'aria-labelledby': this.safeId(this.split ? '_BV_button_' : '_BV_toggle_') }, on: { keydown: this.onKeydown },
        }, !this.lazy || this.visible ? this.normalizeSlot('default', { hide: this.hide }) : [t()]); return t('div', { staticClass: 'dropdown b-dropdown', class: this.dropdownClasses, attrs: { id: this.safeId() } }, [e, i, o]);
      },
    }); function Dc(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ec(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Dc(Object(n), !0).forEach(((e) => { $c(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Dc(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function $c(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Ac = Cr(); const Ic = i.extend({
      name: 'BDropdownItem',
      mixins: [mr, rn],
      inheritAttrs: !1,
      inject: { bvDropdown: { default: null } },
      props: Ec(Ec({}, Ac), {}, { linkClass: { type: [String, Array, Object], default: null }, variant: { type: String, default: null } }),
      computed: { computedAttrs() { return Ec(Ec({}, this.bvAttrs), {}, { role: 'menuitem' }); } },
      methods: { closeDropdown() { const t = this; he((() => { t.bvDropdown && t.bvDropdown.hide(!0); })); }, onClick(t) { this.$emit('click', t), this.closeDropdown(); } },
      render(t) {
        return t('li', { attrs: { role: 'presentation' } }, [t(_r, {
          props: this.$props, staticClass: 'dropdown-item', class: [this.linkClass, $c({}, 'text-'.concat(this.variant), this.variant && !(this.active || this.disabled))], attrs: this.computedAttrs, on: { click: this.onClick }, ref: 'item',
        }, this.normalizeSlot('default'))]);
      },
    }); function Fc(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Lc(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Fc(Object(n), !0).forEach(((e) => { Rc(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fc(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Rc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Mc = {
      active: { type: Boolean, default: !1 }, activeClass: { type: String, default: 'active' }, buttonClass: { type: [String, Array, Object] }, disabled: { type: Boolean, default: !1 }, variant: { type: String },
    }; const Nc = i.extend({
      name: 'BDropdownItemButton',
      mixins: [mr, rn],
      inheritAttrs: !1,
      inject: { bvDropdown: { default: null } },
      props: Mc,
      computed: { computedAttrs() { return Lc(Lc({}, this.bvAttrs), {}, { role: 'menuitem', type: 'button', disabled: this.disabled }); } },
      methods: { closeDropdown() { this.bvDropdown && this.bvDropdown.hide(!0); }, onClick(t) { this.$emit('click', t), this.closeDropdown(); } },
      render(t) {
        let e; return t('li', { attrs: { role: 'presentation' } }, [t('button', {
          staticClass: 'dropdown-item', class: [this.buttonClass, (e = {}, Rc(e, this.activeClass, this.active), Rc(e, 'text-'.concat(this.variant), this.variant && !(this.active || this.disabled)), e)], attrs: this.computedAttrs, on: { click: this.onClick }, ref: 'button',
        }, this.normalizeSlot('default'))]);
      },
    }); function Vc(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function zc(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Vc(Object(n), !0).forEach(((e) => { Hc(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Vc(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Hc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Gc = { id: { type: String }, tag: { type: String, default: 'header' }, variant: { type: String } }; const Uc = i.extend({
      name: 'BDropdownHeader',
      functional: !0,
      props: Gc,
      render(t, e) {
        const n = e.props; const r = e.data; const i = e.children; const o = r.attrs || {}; return r.attrs = {}, t('li', qe(r, { attrs: { role: 'presentation' } }), [t(n.tag, {
          staticClass: 'dropdown-header', class: Hc({}, 'text-'.concat(n.variant), n.variant), attrs: zc(zc({}, o), {}, { id: n.id || null, role: 'heading' }), ref: 'header',
        }, i)]);
      },
    }); function Wc(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function qc(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Wc(Object(n), !0).forEach(((e) => { Yc(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wc(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Yc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Kc = { tag: { type: String, default: 'hr' } }; const Xc = i.extend({
      name: 'BDropdownDivider', functional: !0, props: Kc, render(t, e) { const n = e.props; const r = e.data; const i = r.attrs || {}; return r.attrs = {}, t('li', qe(r, { attrs: { role: 'presentation' } }), [t(n.tag, { staticClass: 'dropdown-divider', attrs: qc(qc({}, i), {}, { role: 'separator', 'aria-orientation': 'horizontal' }), ref: 'divider' })]); },
    }); const Jc = {
      id: { type: String }, inline: { type: Boolean, default: !1 }, novalidate: { type: Boolean, default: !1 }, validated: { type: Boolean, default: !1 },
    }; const Zc = i.extend({
      name: 'BForm', functional: !0, props: Jc, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t('form', qe(r, { class: { 'form-inline': n.inline, 'was-validated': n.validated }, attrs: { id: n.id, novalidate: n.novalidate } }), i); },
    }); function Qc(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function tu(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Qc(Object(n), !0).forEach(((e) => { eu(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qc(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function eu(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const nu = i.extend({
      name: 'BDropdownForm',
      functional: !0,
      props: tu(tu({}, Jc), {}, { disabled: { type: Boolean, default: !1 }, formClass: { type: [String, Object, Array] } }),
      render(t, e) {
        const n = e.props; const r = e.data; const i = e.children; const o = r.attrs || {}; const a = r.on || {}; return r.attrs = {}, r.on = {}, t('li', qe(r, { attrs: { role: 'presentation' } }), [t(Zc, {
          ref: 'form', staticClass: 'b-dropdown-form', class: [n.formClass, { disabled: n.disabled }], props: n, attrs: tu(tu({}, o), {}, { disabled: n.disabled, tabindex: n.disabled ? null : '-1' }), on: a,
        }, i)]);
      },
    }); function ru(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const iu = i.extend({
      name: 'BDropdownText',
      functional: !0,
      props: { tag: { type: String, default: 'p' }, variant: { type: String } },
      render(t, e) {
        const n = e.props; const r = e.data; const i = e.children; const o = r.attrs || {}; return r.attrs = {}, t('li', qe(r, { attrs: { role: 'presentation' } }), [t(n.tag, {
          staticClass: 'b-dropdown-text', class: ru({}, 'text-'.concat(n.variant), n.variant), props: n, attrs: o, ref: 'text',
        }, i)]);
      },
    }); function ou(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function au(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? ou(Object(n), !0).forEach(((e) => { su(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ou(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function su(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const lu = {
      id: { type: String }, header: { type: String }, headerTag: { type: String, default: 'header' }, headerVariant: { type: String }, headerClasses: { type: [String, Array, Object] }, ariaDescribedby: { type: String },
    }; const cu = i.extend({
      name: 'BDropdownGroup', functional: !0, props: lu, render(t, e) { let n; const r = e.props; const i = e.data; const o = e.slots; const a = e.scopedSlots; const s = o(); const l = a || {}; const c = i.attrs || {}; i.attrs = {}; let u = null; (en('header', l, s) || r.header) && (u = r.id ? '_bv_'.concat(r.id, '_group_dd_header') : null, n = t(r.headerTag, { staticClass: 'dropdown-header', class: [r.headerClasses, su({}, 'text-'.concat(r.variant), r.variant)], attrs: { id: u, role: 'heading' } }, nn('header', {}, l, s) || r.header)); const f = [u, r.ariaDescribedBy].filter(V).join(' ').trim(); return t('li', qe(i, { attrs: { role: 'presentation' } }), [n || t(), t('ul', { staticClass: 'list-unstyled', attrs: au(au({}, c), {}, { id: r.id || null, role: 'group', 'aria-describedby': f || null }) }, nn('default', {}, l, s))]); },
    }); const uu = zt({
      components: {
        BDropdown: Bc, BDd: Bc, BDropdownItem: Ic, BDdItem: Ic, BDropdownItemButton: Nc, BDropdownItemBtn: Nc, BDdItemButton: Nc, BDdItemBtn: Nc, BDropdownHeader: Uc, BDdHeader: Uc, BDropdownDivider: Xc, BDdDivider: Xc, BDropdownForm: nu, BDdForm: nu, BDropdownText: iu, BDdText: iu, BDropdownGroup: cu, BDdGroup: cu,
      },
    }); function fu(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const du = { type: { type: String, default: 'iframe', validator(t) { return s(['iframe', 'embed', 'video', 'object', 'img', 'b-img', 'b-img-lazy'], t); } }, tag: { type: String, default: 'div' }, aspect: { type: String, default: '16by9' } }; const hu = i.extend({
      name: 'BEmbed', functional: !0, props: du, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.tag, { ref: r.ref, staticClass: 'embed-responsive', class: fu({}, 'embed-responsive-'.concat(n.aspect), n.aspect) }, [t(n.type, qe(r, { ref: '', staticClass: 'embed-responsive-item' }), i)]); },
    }); const pu = zt({ components: { BEmbed: hu } }); const vu = 'Setting prop "options" to an object is deprecated. Use the array format instead.'; const bu = {
      props: {
        options: { type: [Array, Object], default() { return []; } }, valueField: { type: String, default: 'value' }, textField: { type: String, default: 'text' }, htmlField: { type: String, default: 'html' }, disabledField: { type: String, default: 'disabled' },
      },
      computed: { formOptions() { return this.normalizeOptions(this.options); } },
      methods: {
        normalizeOption(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; if (x(t)) {
            const n = Tt(t, this.valueField); const r = Tt(t, this.textField); return {
              value: ct(n) ? e || r : n, text: Qi(String(ct(r) ? e : r)), html: Tt(t, this.htmlField), disabled: Boolean(Tt(t, this.disabledField)),
            };
          } return { value: e || t, text: Qi(String(t)), disabled: !1 };
        },
        normalizeOptions(t) { const e = this; return a(t) ? t.map(((t) => e.normalizeOption(t))) : x(t) ? (kt(vu, this.$options.name), g(t).map(((n) => e.normalizeOption(t[n] || {}, n)))) : []; },
      },
    }; function mu(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function yu(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? mu(Object(n), !0).forEach(((e) => { gu(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mu(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function gu(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const wu = i.extend({
      name: 'BFormDatalist', mixins: [bu, rn], props: { id: { type: String, required: !0 } }, render(t) { const e = this.formOptions.map(((e, n) => t('option', { key: 'option_'.concat(n, '_opt'), attrs: { disabled: e.disabled }, domProps: yu(yu({}, to(e.html, e.text)), {}, { value: e.value }) }))); return t('datalist', { attrs: { id: this.id } }, [e, this.normalizeSlot('default')]); },
    }); function Ou(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Su = 'BFormText'; const xu = {
      id: { type: String }, tag: { type: String, default: 'small' }, textVariant: { type: String, default() { return Qt(Su, 'textVariant'); } }, inline: { type: Boolean, default: !1 },
    }; const Tu = i.extend({
      name: Su, functional: !0, props: xu, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.tag, qe(r, { class: Ou({ 'form-text': !n.inline }, 'text-'.concat(n.textVariant), n.textVariant), attrs: { id: n.id } }), i); },
    }); const ku = {
      id: { type: String }, tag: { type: String, default: 'div' }, tooltip: { type: Boolean, default: !1 }, forceShow: { type: Boolean, default: !1 }, state: { type: Boolean, default: null }, ariaLive: { type: String }, role: { type: String },
    }; const Pu = i.extend({
      name: 'BFormInvalidFeedback',
      functional: !0,
      props: ku,
      render(t, e) {
        const n = e.props; const r = e.data; const i = e.children; const o = !0 === n.forceShow || !1 === n.state; return t(n.tag, qe(r, {
          class: { 'invalid-feedback': !n.tooltip, 'invalid-tooltip': n.tooltip, 'd-block': o },
          attrs: {
            id: n.id || null, role: n.role || null, 'aria-live': n.ariaLive || null, 'aria-atomic': n.ariaLive ? 'true' : null,
          },
        }), i);
      },
    }); const ju = {
      id: { type: String }, tag: { type: String, default: 'div' }, tooltip: { type: Boolean, default: !1 }, forceShow: { type: Boolean, default: !1 }, state: { type: Boolean, default: null }, ariaLive: { type: String }, role: { type: String },
    }; const Cu = i.extend({
      name: 'BFormValidFeedback',
      functional: !0,
      props: ju,
      render(t, e) {
        const n = e.props; const r = e.data; const i = e.children; const o = !0 === n.forceShow || !0 === n.state; return t(n.tag, qe(r, {
          class: { 'valid-feedback': !n.tooltip, 'valid-tooltip': n.tooltip, 'd-block': o },
          attrs: {
            id: n.id || null, role: n.role || null, 'aria-live': n.ariaLive || null, 'aria-atomic': n.ariaLive ? 'true' : null,
          },
        }), i);
      },
    }); const _u = { tag: { type: String, default: 'div' } }; const Bu = i.extend({
      name: 'BFormRow', functional: !0, props: _u, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.tag, qe(r, { staticClass: 'form-row' }), i); },
    }); const Du = zt({
      components: {
        BForm: Zc, BFormDatalist: wu, BDatalist: wu, BFormText: Tu, BFormInvalidFeedback: Pu, BFormFeedback: Pu, BFormValidFeedback: Cu, BFormRow: Bu,
      },
    }); const Eu = function (t, e) { for (let n = 0; n < t.length; n++) if (ko(t[n], e)) return n; return -1; }; const $u = Eu; const Au = 'input, textarea, select'; const Iu = {
      props: {
        name: { type: String }, id: { type: String }, disabled: { type: Boolean }, required: { type: Boolean, default: !1 }, form: { type: String }, autofocus: { type: Boolean, default: !1 },
      },
      mounted() { this.handleAutofocus(); },
      activated() { this.handleAutofocus(); },
      methods: { handleAutofocus() { const t = this; this.$nextTick((() => { he((() => { let e = t.$el; t.autofocus && ge(e) && (Te(e, Au) || (e = xe(Au, e)), Ve(e)); })); })); } },
    }; function Fu(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Lu(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Fu(Object(n), !0).forEach(((e) => { Ru(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fu(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Ru(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Mu = {
      mixins: [mr, rn],
      inheritAttrs: !1,
      model: { prop: 'checked', event: 'input' },
      props: {
        value: {}, checked: {}, inline: { type: Boolean, default: !1 }, plain: { type: Boolean, default: !1 }, button: { type: Boolean, default: !1 }, buttonVariant: { type: String }, ariaLabel: { type: String }, ariaLabelledby: { type: String },
      },
      data() { return { localChecked: this.isGroup ? this.bvGroup.checked : this.checked, hasFocus: !1 }; },
      computed: {
        computedLocalChecked: { get() { return this.isGroup ? this.bvGroup.localChecked : this.localChecked; }, set(t) { this.isGroup ? this.bvGroup.localChecked = t : this.localChecked = t; } },
        isGroup() { return Boolean(this.bvGroup); },
        isBtnMode() { return this.isGroup ? this.bvGroup.buttons : this.button; },
        isPlain() { return !this.isBtnMode && (this.isGroup ? this.bvGroup.plain : this.plain); },
        isCustom() { return !this.isBtnMode && !this.isPlain; },
        isSwitch() { return !(this.isBtnMode || this.isRadio || this.isPlain) && (this.isGroup ? this.bvGroup.switches : this.switch); },
        isInline() { return this.isGroup ? this.bvGroup.inline : this.inline; },
        isDisabled() { return this.isGroup && this.bvGroup.disabled || this.disabled; },
        isRequired() { return this.getName && (this.isGroup ? this.bvGroup.required : this.required); },
        getName() { return (this.isGroup ? this.bvGroup.groupName : this.name) || null; },
        getForm() { return (this.isGroup ? this.bvGroup.form : this.form) || null; },
        getSize() { return (this.isGroup ? this.bvGroup.size : this.size) || ''; },
        getState() { return this.isGroup ? this.bvGroup.computedState : this.computedState; },
        getButtonVariant() { return this.buttonVariant ? this.buttonVariant : this.isGroup && this.bvGroup.buttonVariant ? this.bvGroup.buttonVariant : 'secondary'; },
        buttonClasses() { let t; return ['btn', 'btn-'.concat(this.getButtonVariant), (t = {}, Ru(t, 'btn-'.concat(this.getSize), this.getSize), Ru(t, 'disabled', this.isDisabled), Ru(t, 'active', this.isChecked), Ru(t, 'focus', this.hasFocus), t)]; },
        computedAttrs() {
          return Lu(Lu({}, this.bvAttrs), {}, {
            id: this.safeId(), type: this.isRadio ? 'radio' : 'checkbox', name: this.getName, form: this.getForm, disabled: this.isDisabled, required: this.isRequired, autocomplete: 'off', 'aria-required': this.isRequired || null, 'aria-label': this.ariaLabel || null, 'aria-labelledby': this.ariaLabelledby || null,
          });
        },
      },
      watch: { checked(t) { this.computedLocalChecked = t; } },
      methods: { handleFocus(t) { t.target && (t.type === 'focus' ? this.hasFocus = !0 : t.type === 'blur' && (this.hasFocus = !1)); }, focus() { this.isDisabled || Ve(this.$refs.input); }, blur() { this.isDisabled || ze(this.$refs.input); } },
      render(t) {
        const e = this.normalizeSlot('default'); const n = { change: this.handleChange }; this.isBtnMode && (n.focus = n.blur = this.handleFocus); const r = t('input', {
          ref: 'input',
          key: 'input',
          on: n,
          class: {
            'form-check-input': this.isPlain, 'custom-control-input': this.isCustom, 'is-valid': !0 === this.getState && !this.isBtnMode, 'is-invalid': !1 === this.getState && !this.isBtnMode, 'position-static': this.isPlain && !e,
          },
          directives: [{
            name: 'model', rawName: 'v-model', value: this.computedLocalChecked, expression: 'computedLocalChecked',
          }],
          attrs: this.computedAttrs,
          domProps: { value: this.value, checked: this.isChecked },
        }); if (this.isBtnMode) { let i = t('label', { class: this.buttonClasses }, [r, e]); return this.isGroup || (i = t('div', { class: ['btn-group-toggle', 'd-inline-block'] }, [i])), i; } let o = t(); return this.isPlain && !e || (o = t('label', { class: { 'form-check-label': this.isPlain, 'custom-control-label': this.isCustom }, attrs: { for: this.safeId() } }, e)), t('div', {
          class: Ru({
            'form-check': this.isPlain, 'form-check-inline': this.isPlain && this.isInline, 'custom-control': this.isCustom, 'custom-control-inline': this.isCustom && this.isInline, 'custom-checkbox': this.isCustom && this.isCheck && !this.isSwitch, 'custom-switch': this.isSwitch, 'custom-radio': this.isCustom && this.isRadio,
          }, 'b-custom-control-'.concat(this.getSize), Boolean(this.getSize && !this.isBtnMode)),
        }, [r, o]);
      },
    }; const Nu = { props: { size: { type: String, default() { return Qt('formControls', 'size'); } } }, computed: { sizeFormClass() { return [this.size ? 'form-control-'.concat(this.size) : null]; }, sizeBtnClass() { return [this.size ? 'btn-'.concat(this.size) : null]; } } }; const Vu = { props: { state: { type: Boolean, default: null } }, computed: { computedState() { return ht(this.state) ? this.state : null; }, stateClass() { const t = this.computedState; return !0 === t ? 'is-valid' : !1 === t ? 'is-invalid' : null; } } }; const zu = i.extend({
      name: 'BFormCheckbox',
      mixins: [Mu, na, Iu, Nu, Vu],
      inject: { bvGroup: { from: 'bvCheckGroup', default: !1 } },
      props: {
        value: { default: !0 }, uncheckedValue: { default: !1 }, indeterminate: { type: Boolean, default: !1 }, switch: { type: Boolean, default: !1 }, checked: { default: null },
      },
      computed: { isChecked() { const t = this.computedLocalChecked; const e = this.value; return a(t) ? $u(t, e) > -1 : ko(t, e); }, isRadio() { return !1; }, isCheck() { return !0; } },
      watch: { computedLocalChecked(t) { this.$emit('input', t), this.$refs && this.$refs.input && this.$emit('update:indeterminate', this.$refs.input.indeterminate); }, indeterminate(t) { this.setIndeterminate(t); } },
      mounted() { this.setIndeterminate(this.indeterminate); },
      methods: { handleChange(t) { const e = t.target; const n = e.checked; const r = e.indeterminate; let i = this.computedLocalChecked; const o = this.value; const s = a(i); const l = s ? null : this.uncheckedValue; if (s) { const c = $u(i, o); n && c < 0 ? i = i.concat(o) : !n && c > -1 && (i = i.slice(0, c).concat(i.slice(c + 1))); } else i = n ? o : l; this.computedLocalChecked = i, this.$emit('change', n ? o : l), this.isGroup && this.bvGroup.$emit('change', i), this.$emit('update:indeterminate', r); }, setIndeterminate(t) { a(this.computedLocalChecked) && (t = !1), this.$refs && this.$refs.input && (this.$refs.input.indeterminate = t, this.$emit('update:indeterminate', t)); } },
    }); const Hu = i.extend({
      name: 'BFormRadio', mixins: [na, Mu, Iu, Nu, Vu], inject: { bvGroup: { from: 'bvRadioGroup', default: !1 } }, props: { checked: { default: null } }, computed: { isChecked() { return ko(this.value, this.computedLocalChecked); }, isRadio() { return !0; }, isCheck() { return !1; } }, watch: { computedLocalChecked() { this.$emit('input', this.computedLocalChecked); } }, methods: { handleChange(t) { const e = t.target.checked; const n = this.value; this.computedLocalChecked = n, this.$emit('change', e ? n : null), this.isGroup && this.bvGroup.$emit('change', e ? n : null); } },
    }); const Gu = {
      mixins: [rn],
      model: { prop: 'checked', event: 'input' },
      props: {
        validated: { type: Boolean, default: !1 }, ariaInvalid: { type: [Boolean, String], default: !1 }, stacked: { type: Boolean, default: !1 }, plain: { type: Boolean, default: !1 }, buttons: { type: Boolean, default: !1 }, buttonVariant: { type: String, default: 'secondary' },
      },
      computed: {
        inline() { return !this.stacked; }, groupName() { return this.name || this.safeId(); }, groupClasses() { return this.buttons ? ['btn-group-toggle', this.inline ? 'btn-group' : 'btn-group-vertical', this.size ? 'btn-group-'.concat(this.size) : '', this.validated ? 'was-validated' : ''] : [this.validated ? 'was-validated' : '']; }, computedAriaInvalid() { const t = this.ariaInvalid; return !0 === t || t === 'true' || t === '' || !1 === this.computedState ? 'true' : null; },
      },
      watch: { checked(t) { this.localChecked = t; }, localChecked(t) { this.$emit('input', t); } },
      render(t) {
        const e = this; const n = this.formOptions.map(((n, r) => { const i = '_BV_option_'.concat(r, '_'); return t(e.isRadioGroup ? Hu : zu, { key: i, props: { id: e.safeId(i), value: n.value, disabled: n.disabled || !1 } }, [t('span', { domProps: to(n.html, n.text) })]); })); return t('div', {
          class: [this.groupClasses, 'bv-no-focus-ring'],
          attrs: {
            id: this.safeId(), role: this.isRadioGroup ? 'radiogroup' : 'group', tabindex: '-1', 'aria-required': this.required ? 'true' : null, 'aria-invalid': this.computedAriaInvalid,
          },
        }, [this.normalizeSlot('first'), n, this.normalizeSlot('default')]);
      },
    }; const Uu = { switches: { type: Boolean, default: !1 }, checked: { type: Array, default: null } }; const Wu = i.extend({
      name: 'BFormCheckboxGroup', mixins: [na, Iu, Gu, bu, Nu, Vu], provide() { return { bvCheckGroup: this }; }, props: Uu, data() { return { localChecked: this.checked || [] }; }, computed: { isRadioGroup() { return !1; } },
    }); const qu = zt({
      components: {
        BFormCheckbox: zu, BCheckbox: zu, BCheck: zu, BFormCheckboxGroup: Wu, BCheckboxGroup: Wu, BCheckGroup: Wu,
      },
    }); const Yu = '__BV_hover_handler__'; const Ku = 'mouseenter'; const Xu = 'mouseleave'; const Ju = function (t) { const e = function (e) { t(e.type === Ku, e); }; return e.fn = t, e; }; const Zu = function (t, e, n) { ll(t, e, Ku, n, il), ll(t, e, Xu, n, il); }; const Qu = function (t, e) { const n = e.value; const r = void 0 === n ? null : n; if (z.j) { const i = t[Yu]; const o = dt(i); const a = !(o && i.fn === r); o && a && (Zu(!1, t, i), delete t[Yu]), dt(r) && a && (t[Yu] = Ju(r), Zu(!0, t, t[Yu])); } }; const tf = { bind: Qu, componentUpdated: Qu, unbind(t) { Qu(t, { value: null }); } }; function ef(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const nf = Pc; const rf = i.extend({
      name: 'BVFormBtnLabelControl',
      directives: { BHover: tf },
      mixins: [na, rn, jc],
      props: {
        value: { type: String, default: '' }, formattedValue: { type: String }, placeholder: { type: String }, labelSelected: { type: String }, state: { type: Boolean, default: null }, size: { type: String }, name: { type: String }, form: { type: String }, disabled: { type: Boolean, default: !1 }, readonly: { type: Boolean, default: !1 }, required: { type: Boolean, default: !1 }, lang: { type: String }, rtl: { type: Boolean, default: null }, buttonOnly: { type: Boolean, default: !1 }, buttonVariant: { type: String, default: 'secondary' }, menuClass: { type: [String, Array, Object] },
      },
      data() { return { isHovered: !1, hasFocus: !1 }; },
      computed: {
        idButton() { return this.safeId(); }, idLabel() { return this.safeId('_value_'); }, idMenu() { return this.safeId('_dialog_'); }, idWrapper() { return this.safeId('_outer_'); }, computedDir() { return !0 === this.rtl ? 'rtl' : !1 === this.rtl ? 'ltr' : null; },
      },
      methods: {
        focus() { this.disabled || Ve(this.$refs.toggle); }, blur() { this.disabled || ze(this.$refs.toggle); }, setFocus(t) { this.hasFocus = t.type === 'focus'; }, handleHover(t) { this.isHovered = t; }, stopEvent(t) { t.stopPropagation(); },
      },
      render(t) {
        let e; let n; let r; const i = this.idButton; const o = this.idLabel; const a = this.idMenu; const s = this.idWrapper; const l = this.disabled; const c = this.readonly; const u = this.required; const f = this.isHovered; const d = this.hasFocus; const h = this.state; const p = this.visible; const v = this.size; const b = Yn(this.value) || ''; const m = this.labelSelected; const y = !!this.buttonOnly; const g = this.buttonVariant; const w = {
          isHovered: f, hasFocus: d, state: h, opened: p,
        }; const O = t('button', {
          ref: 'toggle',
          staticClass: 'btn',
          class: (e = {}, ef(e, 'btn-'.concat(g), y), ef(e, 'btn-'.concat(v), !!v), ef(e, 'h-auto', !y), ef(e, 'dropdown-toggle', y), ef(e, 'dropdown-toggle-no-caret', y), e),
          attrs: {
            id: i, type: 'button', disabled: l, 'aria-haspopup': 'dialog', 'aria-expanded': p ? 'true' : 'false', 'aria-invalid': !1 === h || u && !b ? 'true' : null, 'aria-required': u ? 'true' : null,
          },
          directives: [{ name: 'b-hover', value: this.handleHover }],
          on: {
            mousedown: this.onMousedown, click: this.toggle, keydown: this.toggle, '!focus': this.setFocus, '!blur': this.setFocus,
          },
        }, [this.hasNormalizedSlot('button-content') ? this.normalizeSlot('button-content', w) : t(ui, { props: { scale: 1.25 } })]); let S = t(); this.name && !l && (S = t('input', {
          attrs: {
            type: 'hidden', name: this.name || null, form: this.form || null, value: b,
          },
        })); const x = t('div', {
          ref: 'menu',
          staticClass: 'dropdown-menu',
          class: [this.menuClass, { show: p, 'dropdown-menu-right': this.right }],
          attrs: {
            id: a, role: 'dialog', tabindex: '-1', 'aria-modal': 'false', 'aria-labelledby': o,
          },
          on: { keydown: this.onKeydown },
        }, [this.normalizeSlot('default', { opened: p })]); const T = t('label', {
          staticClass: 'form-control text-break text-wrap bg-transparent h-auto',
          class: (n = { 'sr-only': y, 'text-muted': !b }, ef(n, 'form-control-'.concat(v), !!v), ef(n, 'is-invalid', !1 === h), ef(n, 'is-valid', !0 === h), n),
          attrs: {
            id: o, for: i, 'aria-invalid': !1 === h || u && !b ? 'true' : null, 'aria-required': u ? 'true' : null,
          },
          directives: [{ name: 'b-hover', value: this.handleHover }],
          on: { '!click': this.stopEvent },
        }, [b ? this.formattedValue || b : this.placeholder || '', b && m ? t('bdi', { staticClass: 'sr-only' }, m) : '']); return t('div', {
          staticClass: 'b-form-btn-label-control dropdown',
          class: [this.directionClass, (r = { 'btn-group': y, 'form-control': !y }, ef(r, 'form-control-'.concat(v), !!v && !y), ef(r, 'd-flex', !y), ef(r, 'h-auto', !y), ef(r, 'align-items-stretch', !y), ef(r, 'focus', d && !y), ef(r, 'show', p), ef(r, 'is-valid', !0 === h), ef(r, 'is-invalid', !1 === h), r)],
          attrs: {
            id: s, role: y ? null : 'group', lang: this.lang || null, dir: this.computedDir, 'aria-disabled': l, 'aria-readonly': c && !l, 'aria-labelledby': o, 'aria-invalid': !1 === h || u && !b ? 'true' : null, 'aria-required': u ? 'true' : null,
          },
        }, [O, S, x, T]);
      },
    }); function of(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function af(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? of(Object(n), !0).forEach(((e) => { sf(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : of(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function sf(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const lf = 'BFormDatepicker'; const cf = function (t) { return Qt(lf, t) || Qt('BCalendar', t); }; const uf = {
      props: af({
        value: { type: [String, Date], default: null },
        valueAsDate: { type: Boolean, default: !1 },
        resetValue: { type: [String, Date] },
        initialDate: { type: [String, Date] },
        placeholder: { type: String },
        size: { type: String },
        min: { type: [String, Date] },
        max: { type: [String, Date] },
        disabled: { type: Boolean, default: !1 },
        readonly: { type: Boolean, default: !1 },
        required: { type: Boolean, default: !1 },
        name: { type: String },
        form: { type: String },
        state: { type: Boolean, default: null },
        dateDisabledFn: { type: Function },
        noCloseOnSelect: { type: Boolean, default: !1 },
        hideHeader: { type: Boolean, default: !1 },
        showDecadeNav: { type: Boolean, default: !1 },
        locale: { type: [String, Array] },
        startWeekday: { type: [Number, String], default: 0 },
        direction: { type: String },
        buttonOnly: { type: Boolean, default: !1 },
        buttonVariant: { type: String, default: 'secondary' },
        calendarWidth: { type: String, default: '270px' },
        selectedVariant: { type: String, default: 'primary' },
        todayVariant: { type: String },
        noHighlightToday: { type: Boolean, default: !1 },
        todayButton: { type: Boolean, default: !1 },
        labelTodayButton: { type: String, default() { return Qt(lf, 'labelTodayButton'); } },
        todayButtonVariant: { type: String, default: 'outline-primary' },
        resetButton: { type: Boolean, default: !1 },
        labelResetButton: { type: String, default() { return Qt(lf, 'labelResetButton'); } },
        resetButtonVariant: { type: String, default: 'outline-danger' },
        closeButton: { type: Boolean, default: !1 },
        labelCloseButton: { type: String, default() { return Qt(lf, 'labelCloseButton'); } },
        closeButtonVariant: { type: String, default: 'outline-secondary' },
        dateInfoFn: { type: Function },
        labelPrevDecade: { type: String, default() { return cf('labelPrevDecade'); } },
        labelPrevYear: { type: String, default() { return cf('labelPrevYear'); } },
        labelPrevMonth: { type: String, default() { return cf('labelPrevMonth'); } },
        labelCurrentMonth: { type: String, default() { return cf('labelCurrentMonth'); } },
        labelNextMonth: { type: String, default() { return cf('labelNextMonth'); } },
        labelNextYear: { type: String, default() { return cf('labelNextYear'); } },
        labelNextDecade: { type: String, default() { return cf('labelNextDecade'); } },
        labelToday: { type: String, default() { return cf('labelToday'); } },
        labelSelected: { type: String, default() { return cf('labelSelected'); } },
        labelNoDateSelected: { type: String, default() { return cf('labelNoDateSelected'); } },
        labelCalendar: { type: String, default() { return cf('labelCalendar'); } },
        labelNav: { type: String, default() { return cf('labelNav'); } },
        labelHelp: { type: String, default() { return cf('labelHelp'); } },
        dateFormatOptions: {
          type: Object,
          default() {
            return {
              year: ya, month: wa, day: ya, weekday: wa,
            };
          },
        },
        weekdayHeaderFormat: { type: String, default: Oa, validator(t) { return s([wa, Oa, Sa], t); } },
        dark: { type: Boolean, default: !1 },
        menuClass: { type: [String, Array, Object] },
      }, nf),
    }; const ff = i.extend({
      name: lf,
      mixins: [na, uf],
      model: { prop: 'value', event: 'input' },
      data() {
        return {
          localYMD: Mo(this.value) || '', isVisible: !1, localLocale: null, isRTL: !1, formattedValue: '', activeYMD: '',
        };
      },
      computed: {
        calendarYM() { return this.activeYMD.slice(0, -3); },
        calendarProps() {
          const t = this; return {
            hidden: !t.isVisible, value: t.localYMD, min: t.min, max: t.max, initialDate: t.initialDate, readonly: t.readonly, disabled: t.disabled, locale: t.locale, startWeekday: t.startWeekday, direction: t.direction, width: t.calendarWidth, dateDisabledFn: t.dateDisabledFn, selectedVariant: t.selectedVariant, todayVariant: t.todayVariant, dateInfoFn: t.dateInfoFn, hideHeader: t.hideHeader, showDecadeNav: t.showDecadeNav, noHighlightToday: t.noHighlightToday, labelPrevDecade: t.labelPrevDecade, labelPrevYear: t.labelPrevYear, labelPrevMonth: t.labelPrevMonth, labelCurrentMonth: t.labelCurrentMonth, labelNextMonth: t.labelNextMonth, labelNextYear: t.labelNextYear, labelNextDecade: t.labelNextDecade, labelToday: t.labelToday, labelSelected: t.labelSelected, labelNoDateSelected: t.labelNoDateSelected, labelCalendar: t.labelCalendar, labelNav: t.labelNav, labelHelp: t.labelHelp, dateFormatOptions: t.dateFormatOptions, weekdayHeaderFormat: t.weekdayHeaderFormat,
          };
        },
        computedLang() { return (this.localLocale || '').replace(/-u-.*$/i, '') || null; },
        computedResetValue() { return Mo(Zo(this.resetValue)) || ''; },
      },
      watch: { value(t) { this.localYMD = Mo(t) || ''; }, localYMD(t) { this.isVisible && this.$emit('input', this.valueAsDate ? Ro(t) || null : t || ''); }, calendarYM(t, e) { if (t !== e && e) try { this.$refs.control.updatePopper(); } catch (n) {} } },
      methods: {
        focus() { this.disabled || Ve(this.$refs.control); }, blur() { this.disabled || ze(this.$refs.control); }, setAndClose(t) { const e = this; this.localYMD = t, this.noCloseOnSelect || this.$nextTick((() => { e.$refs.control.hide(!0); })); }, onSelected(t) { const e = this; this.$nextTick((() => { e.setAndClose(t); })); }, onInput(t) { this.localYMD !== t && (this.localYMD = t); }, onContext(t) { const e = t.activeYMD; const n = t.isRTL; const r = t.locale; const i = t.selectedYMD; const o = t.selectedFormatted; this.isRTL = n, this.localLocale = r, this.formattedValue = o, this.localYMD = i, this.activeYMD = e, this.$emit('context', t); }, onTodayButton() { this.setAndClose(Mo(Zo(Lo(), this.min, this.max))); }, onResetButton() { this.setAndClose(this.computedResetValue); }, onCloseButton() { this.$refs.control.hide(!0); }, onShow() { this.isVisible = !0; }, onShown() { const t = this; this.$nextTick((() => { Ve(t.$refs.calendar), t.$emit('shown'); })); }, onHidden() { this.isVisible = !1, this.$emit('hidden'); }, defaultButtonFn(t) { const e = t.isHovered; const n = t.hasFocus; return this.$createElement(e || n ? si : ai, { attrs: { 'aria-hidden': 'true' } }); },
      },
      render(t) {
        const e = this.$scopedSlots; const n = this.localYMD; const r = this.disabled; const i = this.readonly; const o = ft(this.placeholder) ? this.labelNoDateSelected : this.placeholder; let a = []; if (this.todayButton) { const s = this.labelTodayButton; a.push(t(qr, { props: { size: 'sm', disabled: r || i, variant: this.todayButtonVariant }, attrs: { 'aria-label': s || null }, on: { click: this.onTodayButton } }, s)); } if (this.resetButton) { const l = this.labelResetButton; a.push(t(qr, { props: { size: 'sm', disabled: r || i, variant: this.resetButtonVariant }, attrs: { 'aria-label': l || null }, on: { click: this.onResetButton } }, l)); } if (this.closeButton) { const c = this.labelCloseButton; a.push(t(qr, { props: { size: 'sm', disabled: r, variant: this.closeButtonVariant }, attrs: { 'aria-label': c || null }, on: { click: this.onCloseButton } }, c)); }a.length > 0 && (a = [t('div', { staticClass: 'b-form-date-controls d-flex flex-wrap', class: { 'justify-content-between': a.length > 1, 'justify-content-end': a.length < 2 } }, a)]); const u = t(xa, {
          key: 'calendar', ref: 'calendar', staticClass: 'b-form-date-calendar w-100', props: this.calendarProps, on: { selected: this.onSelected, input: this.onInput, context: this.onContext }, scopedSlots: k(e, ['nav-prev-decade', 'nav-prev-year', 'nav-prev-month', 'nav-this-month', 'nav-next-month', 'nav-next-year', 'nav-next-decade']),
        }, a); return t(rf, {
          ref: 'control',
          staticClass: 'b-form-datepicker',
          props: af(af({}, this.$props), {}, {
            id: this.safeId(), rtl: this.isRTL, lang: this.computedLang, value: n || '', formattedValue: n ? this.formattedValue : '', placeholder: o || '', menuClass: [{ 'bg-dark': !!this.dark, 'text-light': !!this.dark }, this.menuClass],
          }),
          on: { show: this.onShow, shown: this.onShown, hidden: this.onHidden },
          scopedSlots: { 'button-content': e['button-content'] || this.defaultButtonFn },
        }, [u]);
      },
    }); const df = zt({ components: { BFormDatepicker: ff, BDatepicker: ff } }); const hf = { props: { plain: { type: Boolean, default: !1 } }, computed: { custom() { return !this.plain; } } }; function pf(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function vf(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? pf(Object(n), !0).forEach(((e) => { bf(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pf(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function bf(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const mf = 'BFormFile'; const yf = 'Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.'; const gf = function t(e) { return yt(e) || a(e) && e.every(((e) => t(e))); }; const wf = i.extend({
      name: mf,
      mixins: [mr, na, Iu, Vu, hf, rn],
      inheritAttrs: !1,
      model: { prop: 'value', event: 'input' },
      props: {
        size: { type: String, default() { return Qt('BFormControl', 'size'); } }, value: { type: [ot, Array], default: null, validator(t) { return t === '' ? (kt(yf, mf), !0) : ft(t) || gf(t); } }, accept: { type: String, default: '' }, capture: { type: Boolean, default: !1 }, placeholder: { type: String, default() { return Qt(mf, 'placeholder'); } }, browseText: { type: String, default() { return Qt(mf, 'browseText'); } }, dropPlaceholder: { type: String, default() { return Qt(mf, 'dropPlaceholder'); } }, multiple: { type: Boolean, default: !1 }, directory: { type: Boolean, default: !1 }, noTraverse: { type: Boolean, default: !1 }, noDrop: { type: Boolean, default: !1 }, fileNameFormatter: { type: Function, default: null },
      },
      data() { return { selectedFile: null, dragging: !1, hasFocus: !1 }; },
      computed: {
        selectLabel() { if (this.dragging && this.dropPlaceholder) return this.dropPlaceholder; if (!this.selectedFile || this.selectedFile.length === 0) return this.placeholder; const t = l(this.selectedFile).filter(V); return this.hasNormalizedSlot('file-name') ? [this.normalizeSlot('file-name', { files: t, names: t.map(((t) => t.name)) })] : dt(this.fileNameFormatter) ? Yn(this.fileNameFormatter(t)) : t.map(((t) => t.name)).join(', '); },
        computedAttrs() {
          return vf(vf({}, this.bvAttrs), {}, {
            type: 'file', id: this.safeId(), name: this.name, disabled: this.disabled, required: this.required, form: this.form || null, capture: this.capture || null, accept: this.accept || null, multiple: this.multiple, webkitdirectory: this.directory, 'aria-required': this.required ? 'true' : null,
          });
        },
      },
      watch: { selectedFile(t, e) { t === e || a(t) && a(e) && t.length === e.length && t.every(((t, n) => t === e[n])) || (!t && this.multiple ? this.$emit('input', []) : this.$emit('input', t)); }, value(t) { (!t || a(t) && t.length === 0) && this.reset(); } },
      methods: {
        focusHandler(t) { this.plain || t.type === 'focusout' ? this.hasFocus = !1 : this.hasFocus = !0; }, reset() { try { const t = this.$refs.input; t.value = '', t.type = '', t.type = 'file'; } catch (e) {} this.selectedFile = this.multiple ? [] : null; }, onFileChange(t) { const e = this; this.$emit('change', t); const n = t.dataTransfer && t.dataTransfer.items; if (!n || this.noTraverse) this.setFiles(t.target.files || t.dataTransfer.files); else { for (var r = [], i = 0; i < n.length; i++) { const a = n[i].webkitGetAsEntry(); a && r.push(this.traverseFileTree(a)); }Promise.all(r).then(((t) => { e.setFiles(o(t)); })); } }, setFiles() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; if (t) if (this.multiple) { for (var e = [], n = 0; n < t.length; n++)e.push(t[n]); this.selectedFile = e; } else this.selectedFile = t[0] || null; else this.selectedFile = null; }, onReset() { this.selectedFile = this.multiple ? [] : null; }, onDragover(t) { if (t.preventDefault(), t.stopPropagation(), !this.noDrop && this.custom) { this.dragging = !0; try { t.dataTransfer.dropEffect = 'copy'; } catch (e) {} } }, onDragleave(t) { t.preventDefault(), t.stopPropagation(), this.dragging = !1; }, onDrop(t) { t.preventDefault(), t.stopPropagation(), this.noDrop || (this.dragging = !1, t.dataTransfer.files && t.dataTransfer.files.length > 0 && this.onFileChange(t)); }, traverseFileTree(t, e) { const n = this; return new Promise((((r) => { e = e || '', t.isFile ? t.file(((t) => { t.$path = e, r(t); })) : t.isDirectory && t.createReader().readEntries(((i) => { for (var a = [], s = 0; s < i.length; s++)a.push(n.traverseFileTree(i[s], `${e + t.name}/`)); Promise.all(a).then(((t) => { r(o(t)); })); })); }))); },
      },
      render(t) {
        const e = t('input', {
          ref: 'input',
          class: [{ 'form-control-file': this.plain, 'custom-file-input': this.custom, focus: this.custom && this.hasFocus }, this.stateClass],
          attrs: this.computedAttrs,
          on: {
            change: this.onFileChange, focusin: this.focusHandler, focusout: this.focusHandler, reset: this.onReset,
          },
        }); if (this.plain) return e; const n = t('label', { staticClass: 'custom-file-label', class: [this.dragging ? 'dragging' : null], attrs: { for: this.safeId(), 'data-browse': this.browseText || null } }, this.selectLabel); return t('div', {
          staticClass: 'custom-file b-form-file', class: [this.stateClass, bf({}, 'b-custom-control-'.concat(this.size), this.size)], attrs: { id: this.safeId('_BV_file_outer_') }, on: { dragover: this.onDragover, dragleave: this.onDragleave, drop: this.onDrop },
        }, [e, n]);
      },
    }); const Of = zt({ components: { BFormFile: wf, BFile: wf } }); const Sf = function (t, e) { return e + (t ? Wn(t) : ''); }; const xf = Sf; function Tf(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function kf(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Tf(Object(n), !0).forEach(((e) => { Pf(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tf(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Pf(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const jf = /^col-/; const Cf = function () { return { type: [Boolean, String, Number], default: !1 }; }; const _f = function () { return { type: [String, Number], default: null }; }; const Bf = function (t, e, n) { let r = t; if (!ft(n) && !1 !== n) return e && (r += '-'.concat(e)), t !== 'col' || n !== '' && !0 !== n ? (r += '-'.concat(n), Jn(r)) : Jn(r); }; const Df = Kt(Bf); let Ef = p(null); const $f = function () { const t = re().filter(V); const e = t.reduce(((t, e) => (e && (t[e] = Cf()), t)), p(null)); const n = t.reduce(((t, e) => (t[xf(e, 'offset')] = _f(), t)), p(null)); const r = t.reduce(((t, e) => (t[xf(e, 'order')] = _f(), t)), p(null)); return Ef = h(p(null), { col: g(e), offset: g(n), order: g(r) }), kf(kf(kf(kf({ col: { type: Boolean, default: !1 }, cols: _f() }, e), {}, { offset: _f() }, n), {}, { order: _f() }, r), {}, { alignSelf: { type: String, default: null, validator(t) { return s(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], t); } }, tag: { type: String, default: 'div' } }); }; const Af = {
      name: 'BCol', functional: !0, get props() { return delete this.props, this.props = $f(); }, render(t, e) { let n; const r = e.props; const i = e.data; const o = e.children; const a = []; for (const s in Ef) for (let l = Ef[s], c = 0; c < l.length; c++) { const u = Df(s, l[c].replace(s, ''), r[l[c]]); u && a.push(u); } const f = a.some(((t) => jf.test(t))); return a.push((n = { col: r.col || !f && !r.cols }, Pf(n, 'col-'.concat(r.cols), r.cols), Pf(n, 'offset-'.concat(r.offset), r.offset), Pf(n, 'order-'.concat(r.order), r.order), Pf(n, 'align-self-'.concat(r.alignSelf), r.alignSelf), n)), t(r.tag, qe(i, { class: a }), o); },
    }; function If(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ff(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? If(Object(n), !0).forEach(((e) => { Lf(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : If(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Lf(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Rf = 'BFormGroup'; const Mf = 'input:not([disabled]),textarea:not([disabled]),select:not([disabled])'; const Nf = function (t, e) {
      const n = e.normalizeSlot('invalid-feedback') || e.invalidFeedback; let r = t(); return n && (r = t(Pu, {
        props: {
          id: e.invalidFeedbackId, state: e.computedState, tooltip: e.tooltip, ariaLive: e.feedbackAriaLive, role: e.feedbackAriaLive ? 'alert' : null,
        },
        attrs: { tabindex: n ? '-1' : null },
      }, [n])), r;
    }; const Vf = function (t, e) {
      const n = e.normalizeSlot('valid-feedback') || e.validFeedback; let r = t(); return n && (r = t(Cu, {
        props: {
          id: e.validFeedbackId, state: e.computedState, tooltip: e.tooltip, ariaLive: e.feedbackAriaLive, role: e.feedbackAriaLive ? 'alert' : null,
        },
        attrs: { tabindex: n ? '-1' : null },
      }, [n])), r;
    }; const zf = function (t, e) { const n = e.normalizeSlot('description') || e.description; let r = t(); return n && (r = t(Tu, { attrs: { id: e.descriptionId, tabindex: n ? '-1' : null } }, [n])), r; }; const Hf = function (t, e) {
      const n = e.normalizeSlot('label') || e.label; const r = e.labelFor; const i = !r; const o = e.isHorizontal; const a = i ? 'legend' : 'label'; if (n || o) {
        if (e.labelSrOnly) { let s = t(); return n && (s = t(a, { class: 'sr-only', attrs: { id: e.labelId, for: r || null } }, [n])), t(o ? Af : 'div', { props: o ? e.labelColProps : {} }, [s]); } return t(o ? Af : a, {
          on: i ? { click: e.legendClick } : {}, props: o ? Ff({ tag: a }, e.labelColProps) : {}, attrs: { id: e.labelId, for: r || null, tabindex: i ? '-1' : null }, class: [i ? 'bv-no-focus-ring' : '', o || i ? 'col-form-label' : '', !o && i ? 'pt-0' : '', o || i ? '' : 'd-block', e.labelSize ? 'col-form-label-'.concat(e.labelSize) : '', e.labelAlignClasses, e.labelClass],
        }, [n]);
      } return t();
    }; const Gf = Kt((function () {
      const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; const
        e = arguments.length > 1 ? arguments[1] : void 0; return ''.concat(e).concat(Wn(t));
    })); const Uf = function () {
      const t = re(); const e = t.reduce(((t, e) => (t[Gf(e, 'labelCols')] = { type: [Number, String, Boolean], default: !e && null }, t)), p(null)); const n = t.reduce(((t, e) => (t[Gf(e, 'labelAlign')] = { type: String }, t)), p(null)); return Ff(Ff(Ff({
        label: { type: String }, labelFor: { type: String }, labelSize: { type: String }, labelSrOnly: { type: Boolean, default: !1 },
      }, e), n), {}, {
        labelClass: { type: [String, Array, Object] }, description: { type: String }, invalidFeedback: { type: String }, validFeedback: { type: String }, tooltip: { type: Boolean, default: !1 }, feedbackAriaLive: { type: String, default: 'assertive' }, validated: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 },
      });
    }; const Wf = {
      name: Rf,
      mixins: [na, Vu, rn],
      get props() { return delete this.props, this.props = Uf(); },
      computed: {
        labelColProps() { const t = this; const e = {}; return re().forEach(((n) => { let r = t[Gf(n, 'labelCols')]; if (r = r === '' || (r || !1), ht(r) || r === 'auto' || (r = ie(r, 0), r = r > 0 && r), r) { const i = n || (ht(r) ? 'col' : 'cols'); e[i] = r; } })), e; }, labelAlignClasses() { const t = this; const e = []; return re().forEach(((n) => { const r = t[Gf(n, 'labelAlign')] || null; if (r) { const i = n ? 'text-'.concat(n, '-').concat(r) : 'text-'.concat(r); e.push(i); } })), e; }, isHorizontal() { return g(this.labelColProps).length > 0; }, labelId() { return this.hasNormalizedSlot('label') || this.label ? this.safeId('_BV_label_') : null; }, descriptionId() { return this.hasNormalizedSlot('description') || this.description ? this.safeId('_BV_description_') : null; }, hasInvalidFeedback() { return !1 === this.computedState && (this.hasNormalizedSlot('invalid-feedback') || this.invalidFeedback); }, invalidFeedbackId() { return this.hasInvalidFeedback ? this.safeId('_BV_feedback_invalid_') : null; }, hasValidFeedback() { return !0 === this.computedState && (this.hasNormalizedSlot('valid-feedback') || this.validFeedback); }, validFeedbackId() { return this.hasValidFeedback ? this.safeId('_BV_feedback_valid_') : null; }, describedByIds() { return [this.descriptionId, this.invalidFeedbackId, this.validFeedbackId].filter(Boolean).join(' ') || null; },
      },
      watch: { describedByIds(t, e) { t !== e && this.setInputDescribedBy(t, e); } },
      mounted() { const t = this; this.$nextTick((() => { t.setInputDescribedBy(t.describedByIds); })); },
      methods: { legendClick(t) { if (!this.labelFor) { const e = t.target ? t.target.tagName : ''; if (!/^(input|select|textarea|label|button|a)$/i.test(e)) { const n = Se(Mf, this.$refs.content).filter(ge); n && n.length === 1 && Ve(n[0]); } } }, setInputDescribedBy(t, e) { if (this.labelFor && z.j) { const n = xe('#'.concat(this.labelFor), this.$refs.content); if (n) { const r = 'aria-describedby'; let i = ($e(n, r) || '').split(/\s+/); t = (t || '').split(/\s+/), e = (e || '').split(/\s+/), i = i.filter(((t) => !s(e, t))).concat(t).filter(Boolean), i = g(i.reduce(((t, e) => Ff(Ff({}, t), {}, Lf({}, e, !0))), {})).join(' ').trim(), i ? De(n, r, i) : Ee(n, r); } } } },
      render(t) {
        const e = !this.labelFor; const n = this.isHorizontal; const r = Hf(t, this); const i = t(n ? Af : 'div', { ref: 'content', staticClass: 'bv-no-focus-ring', attrs: { tabindex: e ? '-1' : null, role: e ? 'group' : null } }, [this.normalizeSlot('default') || t(), Nf(t, this), Vf(t, this), zf(t, this)]); const o = {
          staticClass: 'form-group',
          class: [this.validated ? 'was-validated' : null, this.stateClass],
          attrs: {
            id: this.safeId(), disabled: e ? this.disabled : null, role: e ? null : 'group', 'aria-invalid': !1 === this.computedState ? 'true' : null, 'aria-labelledby': e && n ? this.labelId : null, 'aria-describedby': e ? this.describedByIds : null,
          },
        }; return t(e ? 'fieldset' : n ? Bu : 'div', o, n && e ? [t(Bu, [r, i])] : [r, i]);
      },
    }; const qf = zt({ components: { BFormGroup: Wf, BFormFieldset: Wf } }); const Yf = { computed: { selectionStart: { cache: !1, get() { return this.$refs.input.selectionStart; }, set(t) { this.$refs.input.selectionStart = t; } }, selectionEnd: { cache: !1, get() { return this.$refs.input.selectionEnd; }, set(t) { this.$refs.input.selectionEnd = t; } }, selectionDirection: { cache: !1, get() { return this.$refs.input.selectionDirection; }, set(t) { this.$refs.input.selectionDirection = t; } } }, methods: { select() { let t; (t = this.$refs.input).select.apply(t, arguments); }, setSelectionRange() { let t; (t = this.$refs.input).setSelectionRange.apply(t, arguments); }, setRangeText() { let t; (t = this.$refs.input).setRangeText.apply(t, arguments); } } }; const Kf = {
      model: { prop: 'value', event: 'update' },
      props: {
        value: { type: [String, Number], default: '' }, ariaInvalid: { type: [Boolean, String], default: !1 }, readonly: { type: Boolean, default: !1 }, plaintext: { type: Boolean, default: !1 }, autocomplete: { type: String }, placeholder: { type: String }, formatter: { type: Function }, lazyFormatter: { type: Boolean, default: !1 }, trim: { type: Boolean, default: !1 }, number: { type: Boolean, default: !1 }, lazy: { type: Boolean, default: !1 }, debounce: { type: [Number, String], default: 0 },
      },
      data() { return { localValue: Yn(this.value), vModelValue: this.value }; },
      computed: {
        computedClass() { return [{ 'custom-range': this.type === 'range', 'form-control-plaintext': this.plaintext && this.type !== 'range' && this.type !== 'color', 'form-control': !this.plaintext && this.type !== 'range' || this.type === 'color' }, this.sizeFormClass, this.stateClass]; }, computedAriaInvalid() { return this.ariaInvalid && this.ariaInvalid !== 'false' ? !0 === this.ariaInvalid ? 'true' : this.ariaInvalid : !1 === this.computedState ? 'true' : null; }, computedDebounce() { return mn(ie(this.debounce, 0), 0); }, hasFormatter() { return dt(this.formatter); },
      },
      watch: { value(t) { const e = Yn(t); e !== this.localValue && t !== this.vModelValue && (this.clearDebounce(), this.localValue = e, this.vModelValue = t); } },
      mounted() { this.$_inputDebounceTimer = null, this.$on('hook:beforeDestroy', this.clearDebounce); const t = this.value; const e = Yn(t); e !== this.localValue && t !== this.vModelValue && (this.localValue = e, this.vModelValue = t); },
      methods: {
        clearDebounce() { clearTimeout(this.$_inputDebounceTimer), this.$_inputDebounceTimer = null; }, formatValue(t, e) { const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; return t = Yn(t), !this.hasFormatter || this.lazyFormatter && !n || (t = this.formatter(t, e)), t; }, modifyValue(t) { return this.trim && (t = t.trim()), this.number && (t = oe(t, t)), t; }, updateValue(t) { const e = this; const n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; const r = this.lazy; if (!r || n) if (t = this.modifyValue(t), t !== this.vModelValue) { this.clearDebounce(); const i = function () { e.vModelValue = t, e.$emit('update', t); }; const o = this.computedDebounce; o > 0 && !r && !n ? this.$_inputDebounceTimer = setTimeout(i, o) : i(); } else if (this.hasFormatter) { const a = this.$refs.input; a && t !== a.value && (a.value = t); } }, onInput(t) { if (!t.target.composing) { const e = t.target.value; const n = this.formatValue(e, t); !1 === n || t.defaultPrevented ? t.preventDefault() : (this.localValue = n, this.updateValue(n), this.$emit('input', n)); } }, onChange(t) { const e = t.target.value; const n = this.formatValue(e, t); !1 === n || t.defaultPrevented ? t.preventDefault() : (this.localValue = n, this.updateValue(n, !0), this.$emit('change', n)); }, onBlur(t) { const e = t.target.value; const n = this.formatValue(e, t, !0); !1 !== n && (this.localValue = Yn(this.modifyValue(n)), this.updateValue(n, !0)), this.$emit('blur', t); }, focus() { this.disabled || Ve(this.$el); }, blur() { this.disabled || ze(this.$el); },
      },
    }; const Xf = { computed: { validity: { cache: !1, get() { return this.$refs.input.validity; } }, validationMessage: { cache: !1, get() { return this.$refs.input.validationMessage; } }, willValidate: { cache: !1, get() { return this.$refs.input.willValidate; } } }, methods: { setCustomValidity() { let t; return (t = this.$refs.input).setCustomValidity.apply(t, arguments); }, checkValidity() { let t; return (t = this.$refs.input).checkValidity.apply(t, arguments); }, reportValidity() { let t; return (t = this.$refs.input).reportValidity.apply(t, arguments); } } }; function Jf(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Zf(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Jf(Object(n), !0).forEach(((e) => { Qf(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jf(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Qf(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const td = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; const ed = i.extend({
      name: 'BFormInput',
      mixins: [yr, na, Iu, Nu, Vu, Kf, Yf, Xf],
      props: {
        type: { type: String, default: 'text', validator(t) { return s(td, t); } }, noWheel: { type: Boolean, default: !1 }, min: { type: [String, Number] }, max: { type: [String, Number] }, step: { type: [String, Number] }, list: { type: String },
      },
      computed: {
        localType() { return s(td, this.type) ? this.type : 'text'; },
        computedAttrs() {
          const t = this.localType; const e = this.disabled; const n = this.placeholder; const r = this.required; const i = this.min; const o = this.max; const a = this.step; return {
            id: this.safeId(), name: this.name || null, form: this.form || null, type: t, disabled: e, placeholder: n, required: r, autocomplete: this.autocomplete || null, readonly: this.readonly || this.plaintext, min: i, max: o, step: a, list: t !== 'password' ? this.list : null, 'aria-required': r ? 'true' : null, 'aria-invalid': this.computedAriaInvalid,
          };
        },
        computedListeners() { return Zf(Zf({}, this.bvListeners), {}, { input: this.onInput, change: this.onChange, blur: this.onBlur }); },
      },
      watch: { noWheel(t) { this.setWheelStopper(t); } },
      mounted() { this.setWheelStopper(this.noWheel); },
      deactivated() { this.setWheelStopper(!1); },
      activated() { this.setWheelStopper(this.noWheel); },
      beforeDestroy() { this.setWheelStopper(!1); },
      methods: {
        setWheelStopper(t) { const e = this.$el; ll(t, e, 'focus', this.onWheelFocus), ll(t, e, 'blur', this.onWheelBlur), t || sl(document, 'wheel', this.stopWheel); }, onWheelFocus() { al(document, 'wheel', this.stopWheel); }, onWheelBlur() { sl(document, 'wheel', this.stopWheel); }, stopWheel(t) { t.preventDefault(), ze(this.$el); },
      },
      render(t) {
        return t('input', {
          ref: 'input', class: this.computedClass, attrs: this.computedAttrs, domProps: { value: this.localValue }, on: this.computedListeners,
        });
      },
    }); const nd = zt({ components: { BFormInput: ed, BInput: ed } }); const rd = { checked: { default: null } }; const id = i.extend({
      name: 'BFormRadioGroup', mixins: [na, Iu, Gu, bu, Nu, Vu], provide() { return { bvRadioGroup: this }; }, props: rd, data() { return { localChecked: this.checked }; }, computed: { isRadioGroup() { return !0; } },
    }); const od = zt({
      components: {
        BFormRadio: Hu, BRadio: Hu, BFormRadioGroup: id, BRadioGroup: id,
      },
    }); function ad(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const sd = 'BFormRating'; const ld = 3; const cd = 5; const ud = Rn.LEFT; const fd = Rn.RIGHT; const dd = Rn.UP; const hd = Rn.DOWN; const pd = i.extend({
      name: 'BVFormRatingStar',
      mixins: [rn],
      props: {
        rating: { type: Number, default: 0 }, star: { type: Number, default: 0 }, focused: { type: Boolean, default: !1 }, variant: { type: String }, disabled: { type: Boolean, default: !1 }, readonly: { type: Boolean, default: !1 }, hasClear: { type: Boolean, default: !1 },
      },
      methods: { onClick(t) { this.disabled || this.readonly || (t.preventDefault(), this.$emit('selected', this.star)); } },
      render(t) {
        const e = this.rating; const n = this.star; const r = this.focused; const i = this.hasClear; const o = this.variant; const a = this.disabled; const s = this.readonly; const l = i ? 0 : 1; const c = e >= n ? 'full' : e >= n - 0.5 ? 'half' : 'empty'; const u = { variant: o, disabled: a, readonly: s }; return t('span', {
          staticClass: 'b-rating-star',
          class: {
            focused: r && e === n || !ie(e) && n === l, 'b-rating-star-empty': c === 'empty', 'b-rating-star-half': c === 'half', 'b-rating-star-full': c === 'full',
          },
          attrs: { tabindex: a || s ? null : '-1' },
          on: { click: this.onClick },
        }, [t('span', { staticClass: 'b-rating-icon' }, [this.normalizeSlot(c, u)])]);
      },
    }); const vd = function (t) { return mn(ld, ie(t, cd)); }; const bd = function (t, e, n) { return mn(bn(t, n), e); }; const md = i.extend({
      name: sd,
      components: {
        BIconStar: gi, BIconStarHalf: Oi, BIconStarFill: wi, BIconX: Si,
      },
      mixins: [na],
      model: { prop: 'value', event: 'change' },
      props: {
        value: { type: [Number, String], default: null }, stars: { type: [Number, String], default: cd, validator(t) { return ie(t) >= ld; } }, variant: { type: String, default() { return Qt(sd, 'variant'); } }, color: { type: String, default() { return Qt(sd, 'color'); } }, showValue: { type: Boolean, default: !1 }, showValueMax: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, readonly: { type: Boolean, default: !1 }, size: { type: String }, name: { type: String }, form: { type: String }, noBorder: { type: Boolean, default: !1 }, inline: { type: Boolean, default: !1 }, precision: { type: [Number, String], default: null }, iconEmpty: { type: String, default: 'star' }, iconHalf: { type: String, default: 'star-half' }, iconFull: { type: String, default: 'star-fill' }, iconClear: { type: String, default: 'x' }, locale: { type: [String, Array] }, showClear: { type: Boolean, default: !1 },
      },
      data() { const t = oe(this.value, null); const e = vd(this.stars); return { localValue: ut(t) ? null : bd(t, 0, e), hasFocus: !1 }; },
      computed: {
        computedStars() { return vd(this.stars); }, computedRating() { const t = oe(this.localValue, 0); const e = ie(this.precision, 3); return bd(oe(t.toFixed(e)), 0, this.computedStars); }, computedLocale() { const t = l(this.locale).filter(V); const e = new Intl.NumberFormat(t); return e.resolvedOptions().locale; }, isInteractive() { return !this.disabled && !this.readonly; }, isRTL() { return ea(this.computedLocale); }, formattedRating() { const t = ie(this.precision); const e = this.showValueMax; const n = this.computedLocale; const r = { notation: 'standard', minimumFractionDigits: isNaN(t) ? 0 : t, maximumFractionDigits: isNaN(t) ? 3 : t }; const i = this.computedStars.toLocaleString(n); let o = this.localValue; return o = ut(o) ? e ? '-' : '' : o.toLocaleString(n, r), e ? ''.concat(o, '/').concat(i) : o; },
      },
      watch: { value(t, e) { if (t !== e) { const n = oe(t, null); this.localValue = ut(n) ? null : bd(n, 0, this.computedStars); } }, localValue(t, e) { t !== e && t !== (this.value || 0) && this.$emit('change', t || null); }, disabled(t) { t && (this.hasFocus = !1, this.blur()); } },
      methods: {
        focus() { this.disabled || Ve(this.$el); }, blur() { this.disabled || ze(this.$el); }, onKeydown(t) { const e = t.keyCode; if (this.isInteractive && s([ud, hd, fd, dd], e)) { t.preventDefault(); const n = ie(this.localValue, 0); const r = this.showClear ? 0 : 1; const i = this.computedStars; const o = this.isRTL ? -1 : 1; e === ud ? this.localValue = bd(n - o, r, i) || null : e === fd ? this.localValue = bd(n + o, r, i) : e === hd ? this.localValue = bd(n - 1, r, i) || null : e === dd && (this.localValue = bd(n + 1, r, i)); } }, onSelected(t) { this.isInteractive && (this.localValue = t); }, onFocus(t) { this.hasFocus = !!this.isInteractive && t.type === 'focus'; }, renderIcon(t) { return this.$createElement(ji, { props: { icon: t, variant: this.disabled || this.color ? null : this.variant || null } }); }, iconEmptyFn() { return this.renderIcon(this.iconEmpty); }, iconHalfFn() { return this.renderIcon(this.iconHalf); }, iconFullFn() { return this.renderIcon(this.iconFull); }, iconClearFn() { return this.$createElement(ji, { props: { icon: this.iconClear } }); },
      },
      render(t) {
        let e; const n = this; const r = this.disabled; const i = this.readonly; const o = this.size; const a = this.name; const s = this.form; const l = this.inline; const c = this.variant; const u = this.color; const f = this.noBorder; const d = this.hasFocus; const h = this.computedRating; const p = this.computedStars; const v = this.formattedRating; const b = this.showClear; const m = this.isRTL; const y = this.isInteractive; const g = this.$scopedSlots; const w = []; if (b && !r && !i) {
          const O = t('span', { staticClass: 'b-rating-icon' }, [(g['icon-clear'] || this.iconClearFn)()]); w.push(t('span', {
            staticClass: 'b-rating-star b-rating-star-clear flex-grow-1', class: { focused: d && h === 0 }, attrs: { tabindex: y ? '-1' : null }, on: { click() { return n.onSelected(null); } }, key: 'clear',
          }, [O]));
        } for (let S = 0; S < p; S++) {
          const x = S + 1; w.push(t(pd, {
            staticClass: 'flex-grow-1',
            style: u && !r ? { color: u } : {},
            props: {
              rating: h, star: x, variant: r ? null : c || null, disabled: r, readonly: i, focused: d, hasClear: b,
            },
            on: { selected: this.onSelected },
            scopedSlots: { empty: g['icon-empty'] || this.iconEmptyFn, half: g['icon-half'] || this.iconHalfFn, full: g['icon-full'] || this.iconFullFn },
            key: S,
          }));
        } return a && w.push(t('input', {
          attrs: {
            type: 'hidden', value: ut(this.localValue) ? '' : h, name: a, form: s || null,
          },
          key: 'hidden',
        })), this.showValue && w.push(t('b', { staticClass: 'b-rating-value flex-grow-1', attrs: { 'aria-hidden': 'true' }, key: 'value' }, Yn(v))), t('output', {
          staticClass: 'b-rating form-control align-items-center',
          class: (e = {}, ad(e, 'form-control-'.concat(o), !!o), ad(e, 'd-inline-flex', l), ad(e, 'd-flex', !l), ad(e, 'border-0', f), ad(e, 'disabled', r), ad(e, 'readonly', !r && i), e),
          attrs: {
            id: this.safeId(), dir: m ? 'rtl' : 'ltr', tabindex: r ? null : '0', disabled: r, role: 'slider', 'aria-disabled': r ? 'true' : null, 'aria-readonly': !r && i ? 'true' : null, 'aria-live': 'off', 'aria-valuemin': b ? '0' : '1', 'aria-valuemax': Yn(p), 'aria-valuenow': h ? Yn(h) : null,
          },
          on: { keydown: this.onKeydown, focus: this.onFocus, blur: this.onFocus },
        }, w);
      },
    }); const yd = zt({ components: { BFormRating: md, BRating: md } }); const gd = {
      mixins: [bu],
      props: { labelField: { type: String, default: 'label' }, optionsField: { type: String, default: 'options' } },
      methods: {
        normalizeOption(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; if (x(t)) {
            const n = Tt(t, this.valueField); const r = Tt(t, this.textField); const i = Tt(t, this.optionsField, null); return ut(i) ? {
              value: ct(n) ? e || r : n, text: String(ct(r) ? e : r), html: Tt(t, this.htmlField), disabled: Boolean(Tt(t, this.disabledField)),
            } : { label: String(Tt(t, this.labelField) || r), options: this.normalizeOptions(i) };
          } return { value: e || t, text: String(t), disabled: !1 };
        },
      },
    }; const wd = 'BFormSelectOption'; const Od = { value: { required: !0 }, disabled: { type: Boolean, default: !1 } }; const Sd = i.extend({
      name: wd, functional: !0, props: Od, render(t, e) { const n = e.props; const r = e.data; const i = e.children; const o = n.value; const a = n.disabled; return t('option', qe(r, { attrs: { disabled: a }, domProps: { value: o } }), i); },
    }); const xd = i.extend({
      name: 'BFormSelectOptionGroup', mixins: [rn, bu], props: { label: { type: String, required: !0 } }, render(t) { return t('optgroup', { attrs: { label: this.label } }, [this.normalizeSlot('first'), this.formOptions.map(((e, n) => t(Sd, { props: { value: e.value, disabled: e.disabled }, domProps: to(e.html, e.text), key: 'option_'.concat(n, '_opt') }))), this.normalizeSlot('default')]); },
    }); const Td = i.extend({
      name: 'BFormSelect',
      mixins: [na, rn, Iu, Nu, Vu, hf, gd],
      model: { prop: 'value', event: 'input' },
      props: {
        value: {}, multiple: { type: Boolean, default: !1 }, selectSize: { type: Number, default: 0 }, ariaInvalid: { type: [Boolean, String], default: !1 },
      },
      data() { return { localValue: this.value }; },
      computed: { computedSelectSize() { return this.plain || this.selectSize !== 0 ? this.selectSize : null; }, inputClass() { return [this.plain ? 'form-control' : 'custom-select', this.size && this.plain ? 'form-control-'.concat(this.size) : null, this.size && !this.plain ? 'custom-select-'.concat(this.size) : null, this.stateClass]; }, computedAriaInvalid() { return !0 === this.ariaInvalid || this.ariaInvalid === 'true' || this.stateClass === 'is-invalid' ? 'true' : null; } },
      watch: { value(t) { this.localValue = t; }, localValue() { this.$emit('input', this.localValue); } },
      methods: { focus() { Ve(this.$refs.input); }, blur() { ze(this.$refs.input); } },
      render(t) {
        const e = this; return t('select', {
          ref: 'input',
          class: this.inputClass,
          directives: [{
            name: 'model', rawName: 'v-model', value: this.localValue, expression: 'localValue',
          }],
          attrs: {
            id: this.safeId(), name: this.name, form: this.form || null, multiple: this.multiple || null, size: this.computedSelectSize, disabled: this.disabled, required: this.required, 'aria-required': this.required ? 'true' : null, 'aria-invalid': this.computedAriaInvalid,
          },
          on: { change(t) { const n = t.target; const r = o(n.options).filter(((t) => t.selected)).map(((t) => ('_value' in t ? t._value : t.value))); e.localValue = n.multiple ? r : r[0], e.$nextTick((() => { e.$emit('change', e.localValue); })); } },
        }, [this.normalizeSlot('first'), this.formOptions.map(((e, n) => { const r = 'option_'.concat(n, '_opt'); const i = e.options; return a(i) ? t(xd, { props: { label: e.label, options: i }, key: r }) : t(Sd, { props: { value: e.value, disabled: e.disabled }, domProps: to(e.html, e.text), key: r }); })), this.normalizeSlot('default')]);
      },
    }); const kd = zt({
      components: {
        BFormSelect: Td, BFormSelectOption: Sd, BFormSelectOptionGroup: xd, BSelect: Td, BSelectOption: Sd, BSelectOptionGroup: xd,
      },
    }); function Pd(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function jd(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Pd(Object(n), !0).forEach(((e) => { Cd(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pd(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Cd(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const _d = 'BFormSpinbutton'; const Bd = Rn.UP; const Dd = Rn.DOWN; const Ed = Rn.HOME; const $d = Rn.END; const Ad = Rn.PAGEUP; const Id = Rn.PAGEDOWN; const Fd = 1; const Ld = 100; const Rd = 1; const Md = 500; const Nd = 100; const Vd = 10; const zd = 4; const Hd = i.extend({
      name: _d,
      mixins: [mr, na, rn],
      inheritAttrs: !1,
      props: {
        value: { type: Number, default: null }, min: { type: [Number, String], default: Fd }, max: { type: [Number, String], default: Ld }, step: { type: [Number, String], default: Rd }, wrap: { type: Boolean, default: !1 }, formatterFn: { type: Function }, size: { type: String }, placeholder: { type: String }, disabled: { type: Boolean, default: !1 }, readonly: { type: Boolean, default: !1 }, required: { type: Boolean, default: !1 }, name: { type: String }, form: { type: String }, state: { type: Boolean, default: null }, inline: { type: Boolean, default: !1 }, vertical: { type: Boolean, default: !1 }, ariaLabel: { type: String }, ariaControls: { type: String }, labelDecrement: { type: String, default() { return Qt(_d, 'labelDecrement'); } }, labelIncrement: { type: String, default() { return Qt(_d, 'labelIncrement'); } }, locale: { type: [String, Array] }, repeatDelay: { type: [Number, String], default: Md }, repeatInterval: { type: [Number, String], default: Nd }, repeatThreshold: { type: [Number, String], default: Vd }, repeatStepMultiplier: { type: [Number, String], default: zd },
      },
      data() { return { localValue: oe(this.value, null), hasFocus: !1 }; },
      computed: {
        spinId() { return this.safeId(); },
        computedInline() { return this.inline && !this.vertical; },
        computedReadonly() { return this.readonly && !this.disabled; },
        computedRequired() { return this.required && !this.computedReadonly && !this.disabled; },
        computedStep() { return oe(this.step, Rd); },
        computedMin() { return oe(this.min, Fd); },
        computedMax() { const t = oe(this.max, Ld); const e = this.computedStep; const n = this.computedMin; return wn((t - n) / e) * e + n; },
        computedDelay() { const t = ie(this.repeatDelay, 0); return t > 0 ? t : Md; },
        computedInterval() { const t = ie(this.repeatInterval, 0); return t > 0 ? t : Nd; },
        computedThreshold() { return mn(ie(this.repeatThreshold, Vd), 1); },
        computedStepMultiplier() { return mn(ie(this.repeatStepMultiplier, zd), 1); },
        computedPrecision() { const t = this.computedStep; return wn(t) === t ? 0 : (t.toString().split('.')[1] || '').length; },
        computedMultiplier() { return On(10, this.computedPrecision || 0); },
        valueAsFixed() { const t = this.localValue; return ut(t) ? '' : t.toFixed(this.computedPrecision); },
        computedLocale() { const t = l(this.locale).filter(V); const e = new Intl.NumberFormat(t); return e.resolvedOptions().locale; },
        computedRTL() { return ea(this.computedLocale); },
        defaultFormatter() {
          const t = this.computedPrecision; const e = new Intl.NumberFormat(this.computedLocale, {
            style: 'decimal', useGrouping: !1, minimumIntegerDigits: 1, minimumFractionDigits: t, maximumFractionDigits: t, notation: 'standard',
          }); return e.format;
        },
        computedFormatter() { return dt(this.formatterFn) ? this.formatterFn : this.defaultFormatter; },
        computedAttrs() {
          return jd(jd({}, this.bvAttrs), {}, {
            role: 'group', lang: this.computedLocale, tabindex: this.disabled ? null : '-1', title: this.ariaLabel,
          });
        },
        computedSpinAttrs() {
          const t = this.spinId; const e = this.localValue; const n = this.computedRequired; const r = this.disabled; const i = this.state; const o = this.computedFormatter; const a = !ut(e); return jd(jd({ dir: this.computedRTL ? 'rtl' : 'ltr' }, this.bvAttrs), {}, {
            id: t, role: 'spinbutton', tabindex: r ? null : '0', 'aria-live': 'off', 'aria-label': this.ariaLabel || null, 'aria-controls': this.ariaControls || null, 'aria-invalid': !1 === i || !a && n ? 'true' : null, 'aria-required': n ? 'true' : null, 'aria-valuemin': Yn(this.computedMin), 'aria-valuemax': Yn(this.computedMax), 'aria-valuenow': a ? e : null, 'aria-valuetext': a ? o(e) : null,
          });
        },
      },
      watch: {
        value(t) { this.localValue = oe(t, null); }, localValue(t) { this.$emit('input', t); }, disabled(t) { t && this.clearRepeat(); }, readonly(t) { t && this.clearRepeat(); },
      },
      created() { this.$_autoDelayTimer = null, this.$_autoRepeatTimer = null, this.$_keyIsDown = !1; },
      beforeDestroy() { this.clearRepeat(); },
      deactivated() { this.clearRepeat(); },
      methods: {
        focus() { this.disabled || Ve(this.$refs.spinner); }, blur() { this.disabled || ze(this.$refs.spinner); }, emitChange() { this.$emit('change', this.localValue); }, stepValue(t) { let e = this.localValue; if (!this.disabled && !ut(e)) { const n = this.computedStep * t; const r = this.computedMin; const i = this.computedMax; const o = this.computedMultiplier; const a = this.wrap; e = Sn((e - r) / n) * n + r + n, e = Sn(e * o) / o, this.localValue = e > i ? a ? r : i : e < r ? a ? i : r : e; } }, onFocusBlur(t) { this.disabled ? this.hasFocus = !1 : this.hasFocus = t.type === 'focus'; }, stepUp() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; const e = this.localValue; ut(e) ? this.localValue = this.computedMin : this.stepValue(1 * t); }, stepDown() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; const e = this.localValue; ut(e) ? this.localValue = this.wrap ? this.computedMax : this.computedMin : this.stepValue(-1 * t); }, onKeydown(t) { const e = t.keyCode; const n = t.altKey; const r = t.ctrlKey; const i = t.metaKey; if (!(this.disabled || this.readonly || n || r || i) && s([Bd, Dd, Ed, $d, Ad, Id], e)) { if (t.preventDefault(), this.$_keyIsDown) return; this.resetTimers(), s([Bd, Dd], e) ? (this.$_keyIsDown = !0, e === Bd ? this.handleStepRepeat(t, this.stepUp) : e === Dd && this.handleStepRepeat(t, this.stepDown)) : e === Ad ? this.stepUp(this.computedStepMultiplier) : e === Id ? this.stepDown(this.computedStepMultiplier) : e === Ed ? this.localValue = this.computedMin : e === $d && (this.localValue = this.computedMax); } }, onKeyup(t) { const e = t.keyCode; const n = t.altKey; const r = t.ctrlKey; const i = t.metaKey; this.disabled || this.readonly || n || r || i || s([Bd, Dd, Ed, $d, Ad, Id], e) && (this.resetTimers(), this.$_keyIsDown = !1, t.preventDefault(), this.emitChange()); }, handleStepRepeat(t, e) { const n = this; const r = t || {}; const i = r.type; const o = r.button; if (!this.disabled && !this.readonly) { if (i === 'mousedown' && o) return; this.resetTimers(), e(1); const a = this.computedThreshold; const s = this.computedStepMultiplier; const l = this.computedDelay; const c = this.computedInterval; this.$_autoDelayTimer = setTimeout((() => { let t = 0; n.$_autoRepeatTimer = setInterval((() => { e(t < a ? 1 : s), t++; }), c); }), l); } }, onMouseup(t) { const e = t || {}; const n = e.type; const r = e.button; n === 'mouseup' && r || (t.preventDefault(), this.resetTimers(), this.setMouseup(!1), this.emitChange()); }, setMouseup(t) { try { ll(t, document.body, 'mouseup', this.onMouseup, !1), ll(t, document.body, 'touchend', this.onMouseup, !1); } catch (e) {} }, resetTimers() { clearTimeout(this.$_autoDelayTimer), clearInterval(this.$_autoRepeatTimer); }, clearRepeat() { this.resetTimers(), this.setMouseup(!1), this.$_keyIsDown = !1; },
      },
      render(t) {
        let e; const n = this; const r = this.spinId; const i = this.localValue; const o = this.computedInline; const a = this.computedReadonly; const s = this.vertical; const l = this.disabled; const c = this.state; const u = this.size; const f = this.computedFormatter; const d = !ut(i); const h = function (e, i, o, c, u, f, d) {
          const h = t(o, { props: { scale: n.hasFocus ? 1.5 : 1.25 }, attrs: { 'aria-hidden': 'true' } }); const p = { hasFocus: n.hasFocus }; const v = function (t) { l || a || (t.preventDefault(), n.setMouseup(!0), Ve(t.currentTarget), n.handleStepRepeat(t, e)); }; return t('button', {
            key: c || null,
            ref: c,
            staticClass: 'btn btn-sm border-0 rounded-0',
            class: { 'py-0': !s },
            attrs: {
              tabindex: '-1', type: 'button', disabled: l || a || f, 'aria-disabled': l || a || f ? 'true' : null, 'aria-controls': r, 'aria-label': i || null, 'aria-keyshortcuts': u || null,
            },
            on: { mousedown: v, touchstart: v },
          }, [t('div', [n.normalizeSlot(d, p) || h])]);
        }; const p = h(this.stepUp, this.labelIncrement, yi, 'inc', 'ArrowUp', !1, 'increment'); const v = h(this.stepDown, this.labelDecrement, bi, 'dec', 'ArrowDown', !1, 'decrement'); let b = t(); this.name && !l && (b = t('input', {
          key: 'hidden',
          attrs: {
            type: 'hidden', name: this.name, form: this.form || null, value: this.valueAsFixed,
          },
        })); const m = t('output', {
          ref: 'spinner',
          key: 'output',
          staticClass: 'flex-grow-1',
          class: {
            'd-flex': s, 'align-self-center': !s, 'align-items-center': s, 'border-top': s, 'border-bottom': s, 'border-left': !s, 'border-right': !s,
          },
          attrs: this.computedSpinAttrs,
        }, [t('bdi', d ? f(i) : this.placeholder || '')]); return t('div', {
          staticClass: 'b-form-spinbutton form-control',
          class: (e = { disabled: l, readonly: a, focus: this.hasFocus }, Cd(e, 'form-control-'.concat(u), !!u), Cd(e, 'd-inline-flex', o || s), Cd(e, 'd-flex', !o && !s), Cd(e, 'align-items-stretch', !s), Cd(e, 'flex-column', s), Cd(e, 'is-valid', !0 === c), Cd(e, 'is-invalid', !1 === c), e),
          attrs: this.computedAttrs,
          on: {
            keydown: this.onKeydown, keyup: this.onKeyup, '!focus': this.onFocusBlur, '!blur': this.onFocusBlur,
          },
        }, s ? [p, b, m, v] : [v, b, m, p]);
      },
    }); const Gd = zt({ components: { BFormSpinbutton: Hd, BSpinbutton: Hd } }); const Ud = 'BFormTag'; const Wd = i.extend({
      name: Ud,
      mixins: [na, rn],
      props: {
        variant: { type: String, default() { return Qt(Ud, 'variant'); } }, disabled: { type: Boolean, default: !1 }, title: { type: String }, pill: { type: Boolean, default: !1 }, removeLabel: { type: String, default() { return Qt(Ud, 'removeLabel'); } }, tag: { type: String, default: 'span' },
      },
      methods: { onDelete(t) { const e = t.type; const n = t.keyCode; this.disabled || e !== 'click' && (e !== 'keydown' || n !== Rn.DELETE) || this.$emit('remove'); } },
      render(t) {
        const e = this.safeId(); const n = this.safeId('_taglabel_'); let r = t(); this.disabled || (r = t(ln, {
          staticClass: 'b-form-tag-remove ml-1', props: { ariaLabel: this.removeLabel }, attrs: { 'aria-controls': e, 'aria-describedby': n, 'aria-keyshortcuts': 'Delete' }, on: { click: this.onDelete, keydown: this.onDelete },
        })); const i = t('span', { staticClass: 'b-form-tag-content flex-grow-1 text-truncate', attrs: { id: n } }, this.normalizeSlot('default') || this.title || [t()]); return t(Xi, {
          staticClass: 'b-form-tag d-inline-flex align-items-baseline mw-100', class: { disabled: this.disabled }, attrs: { id: e, title: this.title || null, 'aria-labelledby': n }, props: { tag: this.tag, variant: this.variant, pill: this.pill },
        }, [i, r]);
      },
    }); function qd(t) { return Jd(t) || Xd(t) || Kd(t) || Yd(); } function Yd() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function Kd(t, e) { if (t) { if (typeof t === 'string') return Zd(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zd(t, e) : void 0; } } function Xd(t) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t); } function Jd(t) { if (Array.isArray(t)) return Zd(t); } function Zd(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } function Qd(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function th(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Qd(Object(n), !0).forEach(((e) => { eh(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qd(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function eh(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const nh = 'BFormTags'; const rh = ['text', 'email', 'tel', 'url', 'number']; const ih = /[\s\uFEFF\xA0]+/g; const oh = Rn.ENTER; const ah = Rn.BACKSPACE; const sh = Rn.DELETE; const lh = function (t) { return qn(t).replace(ih, '\\s'); }; const ch = function (t) { return l(t).map(((t) => Xn(Yn(t)))).filter(((t, e, n) => t.length > 0 && n.indexOf(t) === e)); }; const uh = function (t) { return pt(t) ? t : mt(t) && t.target.value || ''; }; const fh = function () {
      return {
        all: [], valid: [], invalid: [], duplicate: [],
      };
    }; const dh = i.extend({
      name: nh,
      mixins: [na, rn],
      model: { prop: 'value', event: 'input' },
      props: {
        inputId: { type: String }, placeholder: { type: String, default() { return Qt(nh, 'placeholder'); } }, disabled: { type: Boolean, default: !1 }, name: { type: String }, form: { type: String }, autofocus: { type: Boolean, default: !1 }, state: { type: Boolean, default: null }, size: { type: String }, inputType: { type: String, default: 'text', validator(t) { return s(rh, t); } }, inputClass: { type: [String, Array, Object] }, inputAttrs: { type: Object, default() { return {}; } }, addButtonText: { type: String, default() { return Qt(nh, 'addButtonText'); } }, addButtonVariant: { type: String, default() { return Qt(nh, 'addButtonVariant'); } }, tagVariant: { type: String, default() { return Qt(nh, 'tagVariant'); } }, tagClass: { type: [String, Array, Object] }, tagPills: { type: Boolean, default: !1 }, tagRemoveLabel: { type: String, default() { return Qt(nh, 'tagRemoveLabel'); } }, tagRemovedLabel: { type: String, default() { return Qt(nh, 'tagRemovedLabel'); } }, tagValidator: { type: Function }, duplicateTagText: { type: String, default() { return Qt(nh, 'duplicateTagText'); } }, invalidTagText: { type: String, default() { return Qt(nh, 'invalidTagText'); } }, separator: { type: [String, Array] }, removeOnDelete: { type: Boolean, default: !1 }, addOnChange: { type: Boolean, default: !1 }, noAddOnEnter: { type: Boolean, default: !1 }, noOuterFocus: { type: Boolean, default: !1 }, value: { type: Array, default() { return []; } },
      },
      data() {
        return {
          hasFocus: !1, newTag: '', tags: [], removedTags: [], tagsState: fh(),
        };
      },
      computed: {
        computedInputId() { return this.inputId || this.safeId('__input__'); },
        computedInputType() { return s(rh, this.inputType) ? this.inputType : 'text'; },
        computedInputAttrs() {
          return th(th({}, this.inputAttrs), {}, {
            id: this.computedInputId, value: this.newTag, disabled: this.disabled || null, form: this.form || null,
          });
        },
        computedInputHandlers() { return { input: this.onInputInput, change: this.onInputChange, keydown: this.onInputKeydown }; },
        computedSeparator() { return l(this.separator).filter(pt).filter(V).join(''); },
        computedSeparatorRegExp() { const t = this.computedSeparator; return t ? new RegExp('['.concat(lh(t), ']+')) : null; },
        computedJoiner() { const t = this.computedSeparator.charAt(0); return t !== ' ' ? ''.concat(t, ' ') : t; },
        disableAddButton() { const t = this; const e = Xn(this.newTag); return e === '' || !this.splitTags(e).some(((e) => !s(t.tags, e) && t.validateTag(e))); },
        duplicateTags() { return this.tagsState.duplicate; },
        hasDuplicateTags() { return this.duplicateTags.length > 0; },
        invalidTags() { return this.tagsState.invalid; },
        hasInvalidTags() { return this.invalidTags.length > 0; },
      },
      watch: { value(t) { this.tags = ch(t); }, tags(t, e) { ko(t, this.value) || this.$emit('input', t), ko(t, e) || (t = l(t).filter(V), e = l(e).filter(V), this.removedTags = e.filter(((e) => !s(t, e)))); }, tagsState(t, e) { ko(t, e) || this.$emit('tag-state', t.valid, t.invalid, t.duplicate); } },
      created() { this.tags = ch(this.value); },
      mounted() { this.handleAutofocus(); },
      activated() { this.handleAutofocus(); },
      methods: {
        addTag(t) { if (t = pt(t) ? t : this.newTag, !this.disabled && Xn(t) !== '') { const e = this.parseTags(t); if (e.valid.length > 0 || e.all.length === 0) if (Te(this.getInput(), 'select')) this.newTag = ''; else { const n = [].concat(qd(e.invalid), qd(e.duplicate)); this.newTag = e.all.filter(((t) => s(n, t))).join(this.computedJoiner).concat(n.length > 0 ? this.computedJoiner.charAt(0) : ''); }e.valid.length > 0 && (this.tags = l(this.tags, e.valid)), this.tagsState = e, this.focus(); } },
        removeTag(t) { const e = this; this.disabled || (this.tags = this.tags.filter(((e) => e !== t)), this.$nextTick((() => { e.focus(); }))); },
        onInputInput(t) { if (!(this.disabled || mt(t) && t.target.composing)) { let e = uh(t); const n = this.computedSeparatorRegExp; this.newTag !== e && (this.newTag = e), e = Kn(e), n && n.test(e.slice(-1)) ? this.addTag() : this.tagsState = e === '' ? fh() : this.parseTags(e); } },
        onInputChange(t) { if (!this.disabled && this.addOnChange) { const e = uh(t); this.newTag !== e && (this.newTag = e), this.addTag(); } },
        onInputKeydown(t) { if (!this.disabled && mt(t)) { const e = t.keyCode; const n = t.target.value || ''; this.noAddOnEnter || e !== oh ? !this.removeOnDelete || e !== ah && e !== sh || n !== '' || (t.preventDefault(), this.tags = this.tags.slice(0, -1)) : (t.preventDefault(), this.addTag()); } },
        onClick(t) { const e = this; !this.disabled && mt(t) && t.target === t.currentTarget && this.$nextTick((() => { e.focus(); })); },
        onFocusin() { this.hasFocus = !0; },
        onFocusout() { this.hasFocus = !1; },
        handleAutofocus() { const t = this; this.$nextTick((() => { he((() => { t.autofocus && !t.disabled && t.focus(); })); })); },
        focus() { this.disabled || Ve(this.getInput()); },
        blur() { this.disabled || ze(this.getInput()); },
        splitTags(t) { t = Yn(t); const e = this.computedSeparatorRegExp; return (e ? t.split(e) : [t]).map(Xn).filter(V); },
        parseTags(t) {
          const e = this; const n = this.splitTags(t); const r = {
            all: n, valid: [], invalid: [], duplicate: [],
          }; return n.forEach(((t) => { s(e.tags, t) || s(r.valid, t) ? s(r.duplicate, t) || r.duplicate.push(t) : e.validateTag(t) ? r.valid.push(t) : s(r.invalid, t) || r.invalid.push(t); })), r;
        },
        validateTag(t) { const e = this.tagValidator; return !dt(e) || e(t); },
        getInput() { return xe('#'.concat(this.computedInputId), this.$el); },
        defaultRender(t) {
          const e = t.tags; const n = t.addTag; const r = t.removeTag; const i = t.inputType; const o = t.inputAttrs; const a = t.inputHandlers; const s = t.inputClass; const c = t.tagClass; const u = t.tagVariant; const f = t.tagPills; const d = t.tagRemoveLabel; const h = t.invalidTagText; const p = t.duplicateTagText; const v = t.isInvalid; const b = t.isDuplicate; const m = t.disabled; const y = t.placeholder; const g = t.addButtonText; const w = t.addButtonVariant; const O = t.disableAddButton; const S = this.$createElement; const x = e.map(((t) => (t = Yn(t), S(Wd, {
            key: 'li-tag__'.concat(t),
            staticClass: 'mt-1 mr-1',
            class: c,
            props: {
              tag: 'li', title: t, disabled: m, variant: u, pill: f, removeLabel: d,
            },
            on: { remove() { return r(t); } },
          }, t)))); const T = h && v ? this.safeId('__invalid_feedback__') : null; const k = p && b ? this.safeId('__duplicate_feedback__') : null; const P = [o['aria-describedby'], T, k].filter(V).join(' '); const j = S('input', {
            ref: 'input', directives: [{ name: 'model', value: o.value }], staticClass: 'b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0', class: s, style: { outline: 0, minWidth: '5rem' }, attrs: th(th({}, o), {}, { 'aria-describedby': P || null, type: i, placeholder: y || null }), domProps: { value: o.value }, on: a,
          }); const C = S(qr, {
            ref: 'button', staticClass: 'b-form-tags-button py-0', class: { invisible: O }, style: { fontSize: '90%' }, props: { variant: w, disabled: O }, on: { click() { return n(); } },
          }, [this.normalizeSlot('add-button-text') || g]); const _ = this.safeId('__TAG__LIST__'); const B = S('li', { key: '__li-input__', staticClass: 'flex-grow-1 mt-1', attrs: { role: 'none', 'aria-live': 'off', 'aria-controls': _ } }, [S('div', { staticClass: 'd-flex', attrs: { role: 'group' } }, [j, C])]); const D = S('ul', { key: '_tags_list_', staticClass: 'list-unstyled mt-n1 mb-0 d-flex flex-wrap align-items-center', attrs: { id: _ } }, l(x, B)); let E = S(); if (h || p) { const $ = this.computedJoiner; let A = S(); T && (A = S(Pu, { key: '_tags_invalid_feedback_', props: { id: T, forceShow: !0 } }, [this.invalidTagText, ': ', this.invalidTags.join($)])); let I = S(); k && (I = S(Tu, { key: '_tags_duplicate_feedback_', props: { id: k } }, [this.duplicateTagText, ': ', this.duplicateTags.join($)])), E = S('div', { key: '_tags_feedback_', attrs: { 'aria-live': 'polite', 'aria-atomic': 'true' } }, [A, I]); } return [D, E];
        },
      },
      render(t) {
        const e = this; const n = {
          tags: this.tags.slice(), removeTag: this.removeTag, addTag: this.addTag, inputType: this.computedInputType, inputAttrs: this.computedInputAttrs, inputHandlers: this.computedInputHandlers, inputId: this.computedInputId, invalidTags: this.invalidTags.slice(), isInvalid: this.hasInvalidTags, duplicateTags: this.duplicateTags.slice(), isDuplicate: this.hasDuplicateTags, disableAddButton: this.disableAddButton, state: this.state, separator: this.separator, disabled: this.disabled, size: this.size, placeholder: this.placeholder, inputClass: this.inputClass, tagRemoveLabel: this.tagRemoveLabel, tagVariant: this.tagVariant, tagPills: this.tagPills, tagClass: this.tagClass, addButtonText: this.addButtonText, addButtonVariant: this.addButtonVariant, invalidTagText: this.invalidTagText, duplicateTagText: this.duplicateTagText,
        }; const r = this.normalizeSlot('default', n) || this.defaultRender(n); const i = t('output', {
          staticClass: 'sr-only',
          attrs: {
            id: this.safeId('_selected-tags_'), role: 'status', for: this.computedInputId, 'aria-live': this.hasFocus ? 'polite' : 'off', 'aria-atomic': 'true', 'aria-relevant': 'additions text',
          },
        }, this.tags.join(', ')); const o = t('div', {
          staticClass: 'sr-only',
          attrs: {
            id: this.safeId('_removed-tags_'), role: 'status', 'aria-live': this.hasFocus ? 'assertive' : 'off', 'aria-atomic': 'true',
          },
        }, this.removedTags.length > 0 ? '('.concat(this.tagRemovedLabel, ') ').concat(this.removedTags.join(', ')) : ''); let a = t(); return this.name && !this.disabled && (a = this.tags.map(((n) => t('input', {
          key: n,
          attrs: {
            type: 'hidden', value: n, name: e.name, form: e.form || null,
          },
        })))), t('div', {
          staticClass: 'b-form-tags form-control h-auto',
          class: eh({
            focus: this.hasFocus && !this.noOuterFocus && !this.disabled, disabled: this.disabled, 'is-valid': !0 === this.state, 'is-invalid': !1 === this.state,
          }, 'form-control-'.concat(this.size), this.size),
          attrs: {
            id: this.safeId(), role: 'group', tabindex: this.disabled || this.noOuterFocus ? null : '-1', 'aria-describedby': this.safeId('_selected_'),
          },
          on: { focusin: this.onFocusin, focusout: this.onFocusout, click: this.onClick },
        }, l(i, o, r, a));
      },
    }); const hh = zt({
      components: {
        BFormTags: dh, BTags: dh, BFormTag: Wd, BTag: Wd,
      },
    }); function ph(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function vh(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? ph(Object(n), !0).forEach(((e) => { bh(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ph(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function bh(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const mh = i.extend({
      name: 'BFormTextarea',
      directives: { 'b-visible': Cs },
      mixins: [yr, na, Cl, Iu, Nu, Vu, Kf, Yf, Xf],
      props: {
        rows: { type: [Number, String], default: 2 }, maxRows: { type: [Number, String] }, wrap: { type: String, default: 'soft' }, noResize: { type: Boolean, default: !1 }, noAutoShrink: { type: Boolean, default: !1 },
      },
      data() { return { heightInPx: null }; },
      computed: {
        computedStyle() { const t = { resize: !this.computedRows || this.noResize ? 'none' : null }; return this.computedRows || (t.height = this.heightInPx, t.overflowY = 'scroll'), t; },
        computedMinRows() { return mn(ie(this.rows, 2), 2); },
        computedMaxRows() { return mn(this.computedMinRows, ie(this.maxRows, 0)); },
        computedRows() { return this.computedMinRows === this.computedMaxRows ? this.computedMinRows : null; },
        computedAttrs() {
          const t = this.disabled; const e = this.required; return {
            id: this.safeId(), name: this.name || null, form: this.form || null, disabled: t, placeholder: this.placeholder || null, required: e, autocomplete: this.autocomplete || null, readonly: this.readonly || this.plaintext, rows: this.computedRows, wrap: this.wrap || null, 'aria-required': this.required ? 'true' : null, 'aria-invalid': this.computedAriaInvalid,
          };
        },
        computedListeners() { return vh(vh({}, this.bvListeners), {}, { input: this.onInput, change: this.onChange, blur: this.onBlur }); },
      },
      watch: { localValue() { this.setHeight(); } },
      mounted() { this.setHeight(); },
      methods: { visibleCallback(t) { t && this.$nextTick(this.setHeight); }, setHeight() { const t = this; this.$nextTick((() => { he((() => { t.heightInPx = t.computeHeight(); })); })); }, computeHeight() { if (this.$isServer || !ut(this.computedRows)) return null; const t = this.$el; if (!ge(t)) return null; const e = Fe(t); const n = oe(e.lineHeight, 1); const r = oe(e.borderTopWidth, 0) + oe(e.borderBottomWidth, 0); const i = oe(e.paddingTop, 0) + oe(e.paddingBottom, 0); const o = r + i; const a = n * this.computedMinRows + o; const s = t.style.height || e.height; t.style.height = 'auto'; const l = t.scrollHeight; t.style.height = s; const c = mn((l - i) / n, 2); const u = bn(mn(c, this.computedMinRows), this.computedMaxRows); const f = mn(gn(u * n + o), a); return this.noAutoShrink && oe(s, 0) > f ? s : ''.concat(f, 'px'); } },
      render(t) {
        return t('textarea', {
          ref: 'input', class: this.computedClass, style: this.computedStyle, directives: [{ name: 'b-visible', value: this.visibleCallback, modifiers: { 640: !0 } }], attrs: this.computedAttrs, domProps: { value: this.localValue }, on: this.computedListeners,
        });
      },
    }); const yh = zt({ components: { BFormTextarea: mh, BTextarea: mh } }); function gh(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function wh(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? gh(Object(n), !0).forEach(((e) => { Oh(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gh(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Oh(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } function Sh(t, e) { return jh(t) || Ph(t, e) || Th(t, e) || xh(); } function xh() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function Th(t, e) { if (t) { if (typeof t === 'string') return kh(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kh(t, e) : void 0; } } function kh(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } function Ph(t, e) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) { const n = []; let r = !0; let i = !1; let o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) if (n.push(a.value), e && n.length === e) break; } catch (l) { i = !0, o = l; } finally { try { r || s.return == null || s.return(); } finally { if (i) throw o; } } return n; } } function jh(t) { if (Array.isArray(t)) return t; } const Ch = 'BTime'; const _h = 'numeric'; const Bh = Rn.LEFT; const Dh = Rn.RIGHT; const Eh = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/; const $h = function (t) { return Qt(Ch, t) || Qt('BFormSpinbutton', t); }; const Ah = function (t) { return '00'.concat(t || '').slice(-2); }; const Ih = function (t) {
      t = Yn(t); let e = null; let n = null; let r = null; if (Eh.test(t)) { const i = t.split(':').map(((t) => ie(t, null))); const o = Sh(i, 3); e = o[0], n = o[1], r = o[2]; } return {
        hours: ft(e) ? null : e, minutes: ft(n) ? null : n, seconds: ft(r) ? null : r, ampm: ft(e) || e < 12 ? 0 : 1,
      };
    }; const Fh = function (t) { const e = t.hours; const n = t.minutes; const r = t.seconds; const i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if (ut(e) || ut(n) || i && ut(r)) return ''; const o = [e, n, i ? r : 0]; return o.map(Ah).join(':'); }; const Lh = i.extend({
      name: Ch,
      mixins: [na, rn],
      model: { prop: 'value', event: 'input' },
      props: {
        value: { type: String, default: '' }, showSeconds: { type: Boolean, default: !1 }, hour12: { type: Boolean, default: null }, locale: { type: [String, Array] }, ariaLabelledby: { type: String }, secondsStep: { type: [Number, String], default: 1 }, minutesStep: { type: [Number, String], default: 1 }, disabled: { type: Boolean, default: !1 }, readonly: { type: Boolean, default: !1 }, hideHeader: { type: Boolean, default: !1 }, labelNoTimeSelected: { type: String, default() { return Qt(Ch, 'labelNoTimeSelected'); } }, labelSelected: { type: String, default() { return Qt(Ch, 'labelSelected'); } }, labelHours: { type: String, default() { return Qt(Ch, 'labelHours'); } }, labelMinutes: { type: String, default() { return Qt(Ch, 'labelMinutes'); } }, labelSeconds: { type: String, default() { return Qt(Ch, 'labelSeconds'); } }, labelAmpm: { type: String, default() { return Qt(Ch, 'labelAmpm'); } }, labelAm: { type: String, default() { return Qt(Ch, 'labelAm'); } }, labelPm: { type: String, default() { return Qt(Ch, 'labelPm'); } }, labelIncrement: { type: String, default() { return $h('labelIncrement'); } }, labelDecrement: { type: String, default() { return $h('labelDecrement'); } }, hidden: { type: Boolean, default: !1 },
      },
      data() {
        const t = Ih(this.value || ''); return {
          modelHours: t.hours, modelMinutes: t.minutes, modelSeconds: t.seconds, modelAmpm: t.ampm, isLive: !1,
        };
      },
      computed: {
        computedHMS() { const t = this.modelHours; const e = this.modelMinutes; const n = this.modelSeconds; return Fh({ hours: t, minutes: e, seconds: n }, this.showSeconds); },
        resolvedOptions() { const t = l(this.locale).filter(V); const e = { hour: _h, minute: _h, second: _h }; ft(this.hour12) || (e.hour12 = !!this.hour12); const n = new Intl.DateTimeFormat(t, e); const r = n.resolvedOptions(); const i = r.hour12 || !1; const o = r.hourCycle || (i ? 'h12' : 'h23'); return { locale: r.locale, hour12: i, hourCycle: o }; },
        computedLocale() { return this.resolvedOptions.locale; },
        computedLang() { return (this.computedLocale || '').replace(/-u-.*$/, ''); },
        computedRTL() { return ea(this.computedLang); },
        computedHourCycle() { return this.resolvedOptions.hourCycle; },
        is12Hour() { return !!this.resolvedOptions.hour12; },
        context() {
          return {
            locale: this.computedLocale, isRTL: this.computedRTL, hourCycle: this.computedHourCycle, hour12: this.is12Hour, hours: this.modelHours, minutes: this.modelMinutes, seconds: this.showSeconds ? this.modelSeconds : 0, value: this.computedHMS, formatted: this.formattedTimeString,
          };
        },
        valueId() { return this.safeId() || null; },
        computedAriaLabelledby() { return [this.ariaLabelledby, this.valueId].filter(V).join(' ') || null; },
        timeFormatter() {
          const t = {
            hour12: this.is12Hour, hourCycle: this.computedHourCycle, hour: _h, minute: _h, timeZone: 'UTC',
          }; return this.showSeconds && (t.second = _h), Vo(this.computedLocale, t);
        },
        numberFormatter() {
          const t = new Intl.NumberFormat(this.computedLocale, {
            style: 'decimal', minimumIntegerDigits: 2, minimumFractionDigits: 0, maximumFractionDigits: 0, notation: 'standard',
          }); return t.format;
        },
        formattedTimeString() { const t = this.modelHours; const e = this.modelMinutes; const n = this.showSeconds && this.modelSeconds || 0; return this.computedHMS ? this.timeFormatter(Lo(Date.UTC(0, 0, 1, t, e, n))) : this.labelNoTimeSelected || ' '; },
        spinScopedSlots() { const t = this.$createElement; return { increment(e) { const n = e.hasFocus; return t(di, { props: { scale: n ? 1.5 : 1.25 }, attrs: { 'aria-hidden': 'true' } }); }, decrement(e) { const n = e.hasFocus; return t(di, { props: { flipV: !0, scale: n ? 1.5 : 1.25 }, attrs: { 'aria-hidden': 'true' } }); } }; },
      },
      watch: {
        value(t, e) { if (t !== e && !ko(Ih(t), Ih(this.computedHMS))) { const n = Ih(t); const r = n.hours; const i = n.minutes; const o = n.seconds; const a = n.ampm; this.modelHours = r, this.modelMinutes = i, this.modelSeconds = o, this.modelAmpm = a; } }, computedHMS(t, e) { t !== e && this.$emit('input', t); }, context(t, e) { ko(t, e) || this.$emit('context', t); }, modelAmpm(t, e) { const n = this; if (t !== e) { const r = ut(this.modelHours) ? 0 : this.modelHours; this.$nextTick((() => { t === 0 && r > 11 ? n.modelHours = r - 12 : t === 1 && r < 12 && (n.modelHours = r + 12); })); } }, modelHours(t, e) { t !== e && (this.modelAmpm = t > 11 ? 1 : 0); },
      },
      created() { const t = this; this.$nextTick((() => { t.$emit('context', t.context); })); },
      mounted() { this.setLive(!0); },
      activated() { this.setLive(!0); },
      deactivated() { this.setLive(!1); },
      beforeDestroy() { this.setLive(!1); },
      methods: {
        focus() { this.disabled || Ve(this.$refs.spinners[0]); }, blur() { if (!this.disabled) { const t = me(); Pe(this.$el, t) && ze(t); } }, formatHours(t) { const e = this.computedHourCycle; return t = this.is12Hour && t > 12 ? t - 12 : t, t = t === 0 && e === 'h12' ? 12 : t === 0 && e === 'h24' ? 24 : t === 12 && e === 'h11' ? 0 : t, this.numberFormatter(t); }, formatMinutes(t) { return this.numberFormatter(t); }, formatSeconds(t) { return this.numberFormatter(t); }, formatAmpm(t) { return t === 0 ? this.labelAm : t === 1 ? this.labelPm : ''; }, setHours(t) { this.modelHours = t; }, setMinutes(t) { this.modelMinutes = t; }, setSeconds(t) { this.modelSeconds = t; }, setAmpm(t) { this.modelAmpm = t; }, onSpinLeftRight() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const e = t.type; const n = t.keyCode; if (!this.disabled && e === 'keydown' && (n === Bh || n === Dh)) { t.preventDefault(), t.stopPropagation(); const r = this.$refs.spinners || []; let i = r.map(((t) => !!t.hasFocus)).indexOf(!0); i += n === Bh ? -1 : 1, i = i >= r.length ? 0 : i < 0 ? r.length - 1 : i, Ve(r[i]); } }, setLive(t) { const e = this; t ? this.$nextTick((() => { he((() => { e.isLive = !0; })); })) : this.isLive = !1; },
      },
      render(t) {
        const e = this; if (this.hidden) return t(); const n = this.valueId; const r = this.computedAriaLabelledby; const i = []; const o = function (r, o, a) {
          const s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; const l = e.safeId('_spinbutton_'.concat(o, '_')) || null; return i.push(l), t(Hd, {
            key: o,
            ref: 'spinners',
            refInFor: !0,
            class: a,
            props: wh({
              id: l, placeholder: '--', vertical: !0, required: !0, disabled: e.disabled, readonly: e.readonly, locale: e.computedLocale, labelIncrement: e.labelIncrement, labelDecrement: e.labelDecrement, wrap: !0, ariaControls: n, min: 0,
            }, s),
            scopedSlots: e.spinScopedSlots,
            on: { change: r },
          });
        }; const a = function () { return t('div', { staticClass: 'd-flex flex-column', class: { 'text-muted': e.disabled || e.readonly }, attrs: { 'aria-hidden': 'true' } }, [t(hi, { props: { shiftV: 4, scale: 0.5 } }), t(hi, { props: { shiftV: -4, scale: 0.5 } })]); }; let s = []; s.push(o(this.setHours, 'hours', 'b-time-hours', {
          value: this.modelHours, max: 23, step: 1, formatterFn: this.formatHours, ariaLabel: this.labelHours,
        })), s.push(a()), s.push(o(this.setMinutes, 'minutes', 'b-time-minutes', {
          value: this.modelMinutes, max: 59, step: this.minutesStep || 1, formatterFn: this.formatMinutes, ariaLabel: this.labelMinutes,
        })), this.showSeconds && (s.push(a()), s.push(o(this.setSeconds, 'seconds', 'b-time-seconds', {
          value: this.modelSeconds, max: 59, step: this.secondsStep || 1, formatterFn: this.formatSeconds, ariaLabel: this.labelSeconds,
        }))), this.is12Hour && s.push(o(this.setAmpm, 'ampm', 'b-time-ampm', {
          value: this.modelAmpm, max: 1, formatterFn: this.formatAmpm, ariaLabel: this.labelAmpm, required: !1,
        })), s = t('div', { staticClass: 'd-flex align-items-center justify-content-center mx-auto', attrs: { role: 'group', tabindex: this.disabled || this.readonly ? null : '-1', 'aria-labelledby': r }, on: { keydown: this.onSpinLeftRight, click(t) { t.target === t.currentTarget && e.focus(); } } }, s); const l = t('output', {
          staticClass: 'form-control form-control-sm text-center',
          class: { disabled: this.disabled || this.readonly },
          attrs: {
            id: n, role: 'status', for: i.filter(V).join(' ') || null, tabindex: this.disabled ? null : '-1', 'aria-live': this.isLive ? 'polite' : 'off', 'aria-atomic': 'true',
          },
          on: { click: this.focus, focus: this.focus },
        }, [t('bdi', this.formattedTimeString), this.computedHMS ? t('span', { staticClass: 'sr-only' }, ' ('.concat(this.labelSelected, ') ')) : '']); const c = t('header', { staticClass: 'b-time-header', class: { 'sr-only': this.hideHeader } }, [l]); let u = this.normalizeSlot('default'); return u = u ? t('footer', { staticClass: 'b-time-footer' }, u) : t(), t('div', {
          staticClass: 'b-time d-inline-flex flex-column text-center',
          attrs: {
            role: 'group', lang: this.computedLang || null, 'aria-labelledby': r || null, 'aria-disabled': this.disabled ? 'true' : null, 'aria-readonly': this.readonly && !this.disabled ? 'true' : null,
          },
        }, [c, s, u]);
      },
    }); function Rh(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Mh(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Rh(Object(n), !0).forEach(((e) => { Nh(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Rh(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Nh(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Vh = 'BFormTimepicker'; const zh = function (t) { return Qt(Vh, t) || Qt('BTime', t) || Qt('BFormSpinbutton', t); }; const Hh = {
      props: Mh({
        value: { type: String, default: '' }, resetValue: { type: String, default: '' }, placeholder: { type: String }, size: { type: String }, disabled: { type: Boolean, default: !1 }, readonly: { type: Boolean, default: !1 }, required: { type: Boolean, default: !1 }, name: { type: String }, form: { type: String }, state: { type: Boolean, default: null }, hour12: { type: Boolean, default: null }, locale: { type: [String, Array] }, showSeconds: { type: Boolean, default: !1 }, hideHeader: { type: Boolean, default: !1 }, secondsStep: { type: [Number, String], default: 1 }, minutesStep: { type: [Number, String], default: 1 }, buttonOnly: { type: Boolean, default: !1 }, buttonVariant: { type: String, default: 'secondary' }, nowButton: { type: Boolean, default: !1 }, labelNowButton: { type: String, default() { return Qt(Vh, 'labelNowButton'); } }, nowButtonVariant: { type: String, default: 'outline-primary' }, resetButton: { type: Boolean, default: !1 }, labelResetButton: { type: String, default() { return Qt(Vh, 'labelResetButton'); } }, resetButtonVariant: { type: String, default: 'outline-danger' }, noCloseButton: { type: Boolean, default: !1 }, labelCloseButton: { type: String, default() { return Qt(Vh, 'labelCloseButton'); } }, closeButtonVariant: { type: String, default: 'outline-secondary' }, labelSelected: { type: String, default() { return zh('labelSelected'); } }, labelNoTimeSelected: { type: String, default() { return zh('labelNoTimeSelected'); } }, labelHours: { type: String, default() { return zh('labelHours'); } }, labelMinutes: { type: String, default() { return zh('labelMinutes'); } }, labelSeconds: { type: String, default() { return zh('labelSeconds'); } }, labelAmpm: { type: String, default() { return zh('labelAmpm'); } }, labelAm: { type: String, default() { return zh('labelAm'); } }, labelPm: { type: String, default() { return zh('labelPm'); } }, labelIncrement: { type: String, default() { return zh('labelIncrement'); } }, labelDecrement: { type: String, default() { return zh('labelDecrement'); } }, menuClass: { type: [String, Array, Object] },
      }, nf),
    }; const Gh = i.extend({
      name: Vh,
      mixins: [na, Hh],
      model: { prop: 'value', event: 'input' },
      data() {
        return {
          localHMS: this.value || '', localLocale: null, isRTL: !1, formattedValue: '', isVisible: !1,
        };
      },
      computed: {
        computedLang() { return (this.localLocale || '').replace(/-u-.*$/i, '') || null; },
        timeProps() {
          const t = this; return {
            hidden: !t.isVisible, value: t.localHMS, readonly: t.readonly, disabled: t.disabled, locale: t.locale, hour12: t.hour12, hideHeader: t.hideHeader, showSeconds: t.showSeconds, secondsStep: t.secondsStep, minutesStep: t.minutesStep, labelNoTimeSelected: t.labelNoTimeSelected, labelSelected: t.labelSelected, labelHours: t.labelHours, labelMinutes: t.labelMinutes, labelSeconds: t.labelSeconds, labelAmpm: t.labelAmpm, labelAm: t.labelAm, labelPm: t.labelPm, labelIncrement: t.labelIncrement, labelDecrement: t.labelDecrement,
          };
        },
      },
      watch: { value(t) { this.localHMS = t || ''; }, localHMS(t) { this.isVisible && this.$emit('input', t || ''); } },
      methods: {
        focus() { this.disabled || Ve(this.$refs.control); },
        blur() { this.disabled || ze(this.$refs.control); },
        setAndClose(t) { const e = this; this.localHMS = t, this.$nextTick((() => { e.$refs.control.hide(!0); })); },
        onInput(t) { this.localHMS !== t && (this.localHMS = t); },
        onContext(t) { const e = t.isRTL; const n = t.locale; const r = t.value; const i = t.formatted; this.isRTL = e, this.localLocale = n, this.formattedValue = i, this.localHMS = r || '', this.$emit('context', t); },
        onNowButton() {
          const t = new Date(); const e = t.getHours(); const n = t.getMinutes(); const r = this.showSeconds ? t.getSeconds() : 0; const
            i = [e, n, r].map(((t) => '00'.concat(t || '').slice(-2))).join(':'); this.setAndClose(i);
        },
        onResetButton() { this.setAndClose(this.resetValue); },
        onCloseButton() { this.$refs.control.hide(!0); },
        onShow() { this.isVisible = !0; },
        onShown() { const t = this; this.$nextTick((() => { Ve(t.$refs.time), t.$emit('shown'); })); },
        onHidden() { this.isVisible = !1, this.$emit('hidden'); },
        defaultButtonFn(t) { const e = t.isHovered; const n = t.hasFocus; return this.$createElement(e || n ? vi : pi, { attrs: { 'aria-hidden': 'true' } }); },
      },
      render(t) {
        const e = this.localHMS; const n = this.disabled; const r = this.readonly; const i = ft(this.placeholder) ? this.labelNoTimeSelected : this.placeholder; let o = []; if (this.nowButton) {
          const a = this.labelNowButton; o.push(t(qr, {
            key: 'now-btn', props: { size: 'sm', disabled: n || r, variant: this.nowButtonVariant }, attrs: { 'aria-label': a || null }, on: { click: this.onNowButton },
          }, a));
        } if (this.resetButton) {
          o.length > 0 && o.push(t('span', ' ')); const s = this.labelResetButton; o.push(t(qr, {
            key: 'reset-btn', props: { size: 'sm', disabled: n || r, variant: this.resetButtonVariant }, attrs: { 'aria-label': s || null }, on: { click: this.onResetButton },
          }, s));
        } if (!this.noCloseButton) {
          o.length > 0 && o.push(t('span', ' ')); const l = this.labelCloseButton; o.push(t(qr, {
            key: 'close-btn', props: { size: 'sm', disabled: n, variant: this.closeButtonVariant }, attrs: { 'aria-label': l || null }, on: { click: this.onCloseButton },
          }, l));
        }o.length > 0 && (o = [t('div', { staticClass: 'b-form-date-controls d-flex flex-wrap', class: { 'justify-content-between': o.length > 1, 'justify-content-end': o.length < 2 } }, o)]); const c = t(Lh, {
          ref: 'time', staticClass: 'b-form-time-control', props: this.timeProps, on: { input: this.onInput, context: this.onContext },
        }, o); return t(rf, {
          ref: 'control',
          staticClass: 'b-form-timepicker',
          props: Mh(Mh({}, this.$props), {}, {
            id: this.safeId(), rtl: this.isRTL, lang: this.computedLang, value: e || '', formattedValue: e ? this.formattedValue : '', placeholder: i || '',
          }),
          on: { show: this.onShow, shown: this.onShown, hidden: this.onHidden },
          scopedSlots: { 'button-content': this.$scopedSlots['button-content'] || this.defaultButtonFn },
        }, [c]);
      },
    }); const Uh = zt({ components: { BFormTimepicker: Gh, BTimepicker: Gh } }); const Wh = zt({ components: { BImg: As, BImgLazy: Rs } }); const qh = { tag: { type: String, default: 'div' } }; const Yh = i.extend({
      name: 'BInputGroupText', functional: !0, props: qh, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.tag, qe(r, { staticClass: 'input-group-text' }), i); },
    }); function Kh(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Xh(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Kh(Object(n), !0).forEach(((e) => { Jh(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Kh(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Jh(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Zh = { id: { type: String, default: null }, tag: { type: String, default: 'div' }, isText: { type: Boolean, default: !1 } }; const Qh = i.extend({
      name: 'BInputGroupAddon', functional: !0, props: Xh(Xh({}, Zh), {}, { append: { type: Boolean, default: !1 } }), render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.tag, qe(r, { class: { 'input-group-append': n.append, 'input-group-prepend': !n.append }, attrs: { id: n.id } }), n.isText ? [t(Yh, i)] : i); },
    }); function tp(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function ep(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? tp(Object(n), !0).forEach(((e) => { np(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tp(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function np(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const rp = i.extend({
      name: 'BInputGroupPrepend', functional: !0, props: Zh, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(Qh, qe(r, { props: ep(ep({}, n), {}, { append: !1 }) }), i); },
    }); function ip(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function op(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? ip(Object(n), !0).forEach(((e) => { ap(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ip(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function ap(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const sp = i.extend({
      name: 'BInputGroupAppend', functional: !0, props: Zh, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(Qh, qe(r, { props: op(op({}, n), {}, { append: !0 }) }), i); },
    }); function lp(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } function cp(t) { return hp(t) || dp(t) || fp(t) || up(); } function up() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function fp(t, e) { if (t) { if (typeof t === 'string') return pp(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pp(t, e) : void 0; } } function dp(t) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t); } function hp(t) { if (Array.isArray(t)) return pp(t); } function pp(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } const vp = 'BInputGroup'; const bp = {
      id: { type: String }, size: { type: String, default() { return Qt(vp, 'size'); } }, prepend: { type: String }, prependHtml: { type: String }, append: { type: String }, appendHtml: { type: String }, tag: { type: String, default: 'div' },
    }; const mp = i.extend({
      name: vp, functional: !0, props: bp, render(t, e) { const n = e.props; const r = e.data; const i = e.slots; const o = e.scopedSlots; const a = i(); const s = o || {}; const l = []; return n.prepend || n.prependHtml || en('prepend', s, a) ? l.push(t(rp, [n.prepend || n.prependHtml ? t(Yh, { domProps: to(n.prependHtml, n.prepend) }) : t(), nn('prepend', {}, s, a) || t()])) : l.push(t()), en('default', s, a) ? l.push.apply(l, cp(nn('default', {}, s, a))) : l.push(t()), n.append || n.appendHtml || en('append', s, a) ? l.push(t(sp, [n.append || n.appendHtml ? t(Yh, { domProps: to(n.appendHtml, n.append) }) : t(), nn('append', {}, s, a) || t()])) : l.push(t()), t(n.tag, qe(r, { staticClass: 'input-group', class: lp({}, 'input-group-'.concat(n.size), n.size), attrs: { id: n.id || null, role: 'group' } }), l); },
    }); const yp = zt({
      components: {
        BInputGroup: mp, BInputGroupAddon: Qh, BInputGroupPrepend: rp, BInputGroupAppend: sp, BInputGroupText: Yh,
      },
    }); function gp(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const wp = { tag: { type: String, default: 'div' }, fluid: { type: [Boolean, String], default: !1 } }; const Op = i.extend({
      name: 'BContainer', functional: !0, props: wp, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.tag, qe(r, { class: gp({ container: !(n.fluid || n.fluid === ''), 'container-fluid': !0 === n.fluid || n.fluid === '' }, 'container-'.concat(n.fluid), n.fluid && !0 !== n.fluid) }), i); },
    }); function Sp(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const xp = 'BJumbotron'; const Tp = {
      fluid: { type: Boolean, default: !1 }, containerFluid: { type: [Boolean, String], default: !1 }, header: { type: String }, headerHtml: { type: String }, headerTag: { type: String, default: 'h1' }, headerLevel: { type: [Number, String], default: '3' }, lead: { type: String }, leadHtml: { type: String }, leadTag: { type: String, default: 'p' }, tag: { type: String, default: 'div' }, bgVariant: { type: String, default() { return Qt(xp, 'bgVariant'); } }, borderVariant: { type: String, default() { return Qt(xp, 'borderVariant'); } }, textVariant: { type: String, default() { return Qt(xp, 'textVariant'); } },
    }; const kp = i.extend({
      name: xp, functional: !0, props: Tp, render(t, e) { let n; const r = e.props; const i = e.data; const o = e.slots; const a = e.scopedSlots; let s = []; const l = o(); const c = a || {}; return (r.header || en('header', c, l) || r.headerHtml) && s.push(t(r.headerTag, { class: Sp({}, 'display-'.concat(r.headerLevel), r.headerLevel) }, nn('header', {}, c, l) || r.headerHtml || Qi(r.header))), (r.lead || en('lead', c, l) || r.leadHtml) && s.push(t(r.leadTag, { staticClass: 'lead' }, nn('lead', {}, c, l) || r.leadHtml || Qi(r.lead))), en('default', c, l) && s.push(nn('default', {}, c, l)), r.fluid && (s = [t(Op, { props: { fluid: r.containerFluid } }, s)]), t(r.tag, qe(i, { staticClass: 'jumbotron', class: (n = { 'jumbotron-fluid': r.fluid }, Sp(n, 'text-'.concat(r.textVariant), r.textVariant), Sp(n, 'bg-'.concat(r.bgVariant), r.bgVariant), Sp(n, 'border-'.concat(r.borderVariant), r.borderVariant), Sp(n, 'border', r.borderVariant), n) }), s); },
    }); const Pp = zt({ components: { BJumbotron: kp } }); function jp(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Cp(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? jp(Object(n), !0).forEach(((e) => { _p(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : jp(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function _p(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Bp = ['start', 'end', 'center']; const Dp = function () { return { type: [String, Number], default: null }; }; const Ep = Kt(((t, e) => (e = Xn(Yn(e)), e ? Jn(['row-cols', t, e].filter(V).join('-')) : null))); const $p = Kt(((t) => Jn(t.replace('cols', '')))); let Ap = []; const Ip = function () {
      const t = re(); const e = t.reduce(((t, e) => (t[xf(e, 'cols')] = Dp(), t)), p(null)); return Ap = g(e), Cp({
        tag: { type: String, default: 'div' }, noGutters: { type: Boolean, default: !1 }, alignV: { type: String, default: null, validator(t) { return s(l(Bp, 'baseline', 'stretch'), t); } }, alignH: { type: String, default: null, validator(t) { return s(l(Bp, 'between', 'around'), t); } }, alignContent: { type: String, default: null, validator(t) { return s(l(Bp, 'between', 'around', 'stretch'), t); } },
      }, e);
    }; const Fp = {
      name: 'BRow', functional: !0, get props() { return delete this.props, this.props = Ip(), this.props; }, render(t, e) { let n; const r = e.props; const i = e.data; const o = e.children; const a = []; return Ap.forEach(((t) => { const e = Ep($p(t), r[t]); e && a.push(e); })), a.push((n = { 'no-gutters': r.noGutters }, _p(n, 'align-items-'.concat(r.alignV), r.alignV), _p(n, 'justify-content-'.concat(r.alignH), r.alignH), _p(n, 'align-content-'.concat(r.alignContent), r.alignContent), n)), t(r.tag, qe(i, { staticClass: 'row', class: a }), o); },
    }; const Lp = zt({
      components: {
        BContainer: Op, BRow: Fp, BCol: Af, BFormRow: Bu,
      },
    }); const Rp = zt({ components: { BLink: _r } }); function Mp(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Np = { tag: { type: String, default: 'div' }, flush: { type: Boolean, default: !1 }, horizontal: { type: [Boolean, String], default: !1 } }; const Vp = i.extend({
      name: 'BListGroup', functional: !0, props: Np, render(t, e) { const n = e.props; const r = e.data; const i = e.children; let o = n.horizontal === '' || n.horizontal; o = !n.flush && o; const a = { staticClass: 'list-group', class: Mp({ 'list-group-flush': n.flush, 'list-group-horizontal': !0 === o }, 'list-group-horizontal-'.concat(o), pt(o)) }; return t(n.tag, qe(r, a), i); },
    }); function zp(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Hp(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? zp(Object(n), !0).forEach(((e) => { Gp(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zp(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Gp(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Up = 'BListGroupItem'; const Wp = ['a', 'router-link', 'button', 'b-link']; const qp = Cr(); delete qp.href.default, delete qp.to.default; const Yp = Hp({
      tag: { type: String, default: 'div' }, action: { type: Boolean, default: null }, button: { type: Boolean, default: null }, variant: { type: String, default() { return Qt(Up, 'variant'); } },
    }, qp); const Kp = i.extend({
      name: Up,
      functional: !0,
      props: Yp,
      render(t, e) {
        let n; const r = e.props; const i = e.data; const o = e.children; const a = r.button ? 'button' : r.href || r.to ? _r : r.tag; const l = Boolean(r.href || r.to || r.action || r.button || s(Wp, r.tag)); const c = {}; let u = {}; a === 'button' ? (i.attrs && i.attrs.type || (c.type = 'button'), r.disabled && (c.disabled = !0)) : u = Fn(qp, r); const f = {
          attrs: c, props: u, staticClass: 'list-group-item', class: (n = {}, Gp(n, 'list-group-item-'.concat(r.variant), r.variant), Gp(n, 'list-group-item-action', l), Gp(n, 'active', r.active), Gp(n, 'disabled', r.disabled), n),
        }; return t(a, qe(i, f), o);
      },
    }); const Xp = zt({ components: { BListGroup: Vp, BListGroupItem: Kp } }); const Jp = { tag: { type: String, default: 'div' } }; const Zp = i.extend({
      name: 'BMediaBody', functional: !0, props: Jp, render(t, e) { const n = e.props; const r = e.data; const i = e.children; return t(n.tag, qe(r, { staticClass: 'media-body' }), i); },
    }); function Qp(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const tv = { tag: { type: String, default: 'div' }, verticalAlign: { type: String, default: 'top' } }; const ev = i.extend({
      name: 'BMediaAside', functional: !0, props: tv, render(t, e) { const n = e.props; const r = e.data; const i = e.children; const o = n.verticalAlign === 'top' ? 'start' : n.verticalAlign === 'bottom' ? 'end' : n.verticalAlign; return t(n.tag, qe(r, { staticClass: 'd-flex', class: Qp({}, 'align-self-'.concat(o), o) }), i); },
    }); const nv = {
      tag: { type: String, default: 'div' }, rightAlign: { type: Boolean, default: !1 }, verticalAlign: { type: String, default: 'top' }, noBody: { type: Boolean, default: !1 },
    }; const rv = i.extend({
      name: 'BMedia', functional: !0, props: nv, render(t, e) { const n = e.props; const r = e.data; const i = e.slots; const o = e.scopedSlots; const a = e.children; const s = n.noBody ? a : []; if (!n.noBody) { const l = i(); const c = o || {}; const u = nn('aside', {}, c, l); const f = nn('default', {}, c, l); u && !n.rightAlign && s.push(t(ev, { staticClass: 'mr-3', props: { verticalAlign: n.verticalAlign } }, u)), s.push(t(Zp, f)), u && n.rightAlign && s.push(t(ev, { staticClass: 'ml-3', props: { verticalAlign: n.verticalAlign } }, u)); } return t(n.tag, qe(r, { staticClass: 'media' }), s); },
    }); const iv = zt({ components: { BMedia: rv, BMediaAside: ev, BMediaBody: Zp } }); const ov = i.extend({
      abstract: !0, name: 'BTransporterTargetSingle', props: { nodes: { type: [Array, Function] } }, data(t) { return { updatedNodes: t.nodes }; }, destroyed() { ve(this.$el); }, render(t) { let e = dt(this.updatedNodes) ? this.updatedNodes({}) : this.updatedNodes; return e = l(e).filter(Boolean), e && e.length > 0 && !e[0].text ? e[0] : t(); },
    }); const av = i.extend({
      name: 'BTransporterSingle',
      mixins: [rn],
      props: { disabled: { type: Boolean, default: !1 }, container: { type: [String, rt], default: 'body' }, tag: { type: String, default: 'div' } },
      watch: { disabled: { immediate: !0, handler(t) { t ? this.unmountTarget() : this.$nextTick(this.mountTarget); } } },
      created() { this._bv_defaultFn = null, this._bv_target = null; },
      beforeMount() { this.mountTarget(); },
      updated() { this.updateTarget(); },
      beforeDestroy() { this.unmountTarget(), this._bv_defaultFn = null; },
      methods: {
        getContainer() { if (z.j) { const t = this.container; return pt(t) ? xe(t) : t; } return null; }, mountTarget() { if (!this._bv_target) { const t = this.getContainer(); if (t) { const e = document.createElement('div'); t.appendChild(e), this._bv_target = new ov({ el: e, parent: this, propsData: { nodes: l(this.normalizeSlot('default')) } }); } } }, updateTarget() { if (z.j && this._bv_target) { const t = this.$scopedSlots.default; this.disabled || (t && this._bv_defaultFn !== t ? this._bv_target.updatedNodes = t : t || (this._bv_target.updatedNodes = this.$slots.default)), this._bv_defaultFn = t; } }, unmountTarget() { this._bv_target && (this._bv_target.$destroy(), this._bv_target = null); },
      },
      render(t) { if (this.disabled) { const e = l(this.normalizeSlot('default')).filter(V); if (e.length > 0 && !e[0].text) return e[0]; } return t(); },
    }); const sv = '$_bv_documentHandlers_'; const lv = { created() { const t = this; z.j && (this[sv] = {}, this.$once('hook:beforeDestroy', (() => { const e = t[sv] || {}; delete t[sv], g(e).forEach(((t) => { const n = e[t] || []; n.forEach(((e) => sl(document, t, e, il))); })); }))); }, methods: { listenDocument(t, e, n) { t ? this.listenOnDocument(e, n) : this.listenOffDocument(e, n); }, listenOnDocument(t, e) { this[sv] && pt(t) && dt(e) && (this[sv][t] = this[sv][t] || [], s(this[sv][t], e) || (this[sv][t].push(e), al(document, t, e, il))); }, listenOffDocument(t, e) { this[sv] && pt(t) && dt(e) && (sl(document, t, e, il), this[sv][t] = (this[sv][t] || []).filter(((t) => t !== e))); } } }; const cv = '$_bv_windowHandlers_'; const uv = { beforeCreate() { this[cv] = {}; }, beforeDestroy() { if (z.j) { const t = this[cv]; delete this[cv], g(t).forEach(((e) => { const n = t[e] || []; n.forEach(((t) => sl(window, e, t, il))); })); } }, methods: { listenWindow(t, e, n) { t ? this.listenOnWindow(e, n) : this.listenOffWindow(e, n); }, listenOnWindow(t, e) { z.j && this[cv] && pt(t) && dt(e) && (this[cv][t] = this[cv][t] || [], s(this[cv][t], e) || (this[cv][t].push(e), al(window, t, e, il))); }, listenOffWindow(t, e) { z.j && this[cv] && pt(t) && dt(e) && (sl(window, t, e, il), this[cv][t] = (this[cv][t] || []).filter(((t) => t !== e))); } } }; const fv = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return t && t.$options._scopeId || e; }; const dv = fv; function hv(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const pv = { computed: { scopedStyleAttrs() { const t = dv(this.$parent); return t ? hv({}, t, '') : {}; } } }; const vv = 1040; const bv = { FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top', STICKY_CONTENT: '.sticky-top', NAVBAR_TOGGLER: '.navbar-toggler' }; const mv = i.extend({
      data() {
        return {
          modals: [], baseZIndex: null, scrollbarWidth: null, isBodyOverflowing: !1,
        };
      },
      computed: { modalCount() { return this.modals.length; }, modalsAreOpen() { return this.modalCount > 0; } },
      watch: { modalCount(t, e) { z.j && (this.getScrollbarWidth(), t > 0 && e === 0 ? (this.checkScrollbar(), this.setScrollbar(), Ce(document.body, 'modal-open')) : t === 0 && e > 0 && (this.resetScrollbar(), _e(document.body, 'modal-open')), De(document.body, 'data-modal-open-count', String(t))); }, modals(t) { const e = this; this.checkScrollbar(), he((() => { e.updateModals(t || []); })); } },
      methods: {
        registerModal(t) { const e = this; t && this.modals.indexOf(t) === -1 && (this.modals.push(t), t.$once('hook:beforeDestroy', (() => { e.unregisterModal(t); }))); }, unregisterModal(t) { const e = this.modals.indexOf(t); e > -1 && (this.modals.splice(e, 1), t._isBeingDestroyed || t._isDestroyed || this.resetModal(t)); }, getBaseZIndex() { if (ut(this.baseZIndex) && z.j) { const t = document.createElement('div'); t.className = 'modal-backdrop d-none', t.style.display = 'none', document.body.appendChild(t), this.baseZIndex = ie(Fe(t).zIndex, vv), document.body.removeChild(t); } return this.baseZIndex || vv; }, getScrollbarWidth() { if (ut(this.scrollbarWidth) && z.j) { const t = document.createElement('div'); t.className = 'modal-scrollbar-measure', document.body.appendChild(t), this.scrollbarWidth = Ie(t).width - t.clientWidth, document.body.removeChild(t); } return this.scrollbarWidth || 0; }, updateModals(t) { const e = this; const n = this.getBaseZIndex(); const r = this.getScrollbarWidth(); t.forEach(((t, i) => { t.zIndex = n + i, t.scrollbarWidth = r, t.isTop = i === e.modals.length - 1, t.isBodyOverflowing = e.isBodyOverflowing; })); }, resetModal(t) { t && (t.zIndex = this.getBaseZIndex(), t.isTop = !0, t.isBodyOverflowing = !1); }, checkScrollbar() { const t = Ie(document.body); const e = t.left; const n = t.right; this.isBodyOverflowing = e + n < window.innerWidth; }, setScrollbar() { const t = document.body; if (t._paddingChangedForModal = t._paddingChangedForModal || [], t._marginChangedForModal = t._marginChangedForModal || [], this.isBodyOverflowing) { const e = this.scrollbarWidth; Se(bv.FIXED_CONTENT).forEach(((n) => { const r = n.style.paddingRight; De(n, 'data-padding-right', r), n.style.paddingRight = ''.concat(oe(Fe(n).paddingRight, 0) + e, 'px'), t._paddingChangedForModal.push(n); })), Se(bv.STICKY_CONTENT).forEach(((n) => { const r = n.style.marginRight; De(n, 'data-margin-right', r), n.style.marginRight = ''.concat(oe(Fe(n).marginRight, 0) - e, 'px'), t._marginChangedForModal.push(n); })), Se(bv.NAVBAR_TOGGLER).forEach(((n) => { const r = n.style.marginRight; De(n, 'data-margin-right', r), n.style.marginRight = ''.concat(oe(Fe(n).marginRight, 0) + e, 'px'), t._marginChangedForModal.push(n); })); const n = t.style.paddingRight; De(t, 'data-padding-right', n), t.style.paddingRight = ''.concat(oe(Fe(t).paddingRight, 0) + e, 'px'); } }, resetScrollbar() { const t = document.body; t._paddingChangedForModal && t._paddingChangedForModal.forEach(((t) => { Ae(t, 'data-padding-right') && (t.style.paddingRight = $e(t, 'data-padding-right') || '', Ee(t, 'data-padding-right')); })), t._marginChangedForModal && t._marginChangedForModal.forEach(((t) => { Ae(t, 'data-margin-right') && (t.style.marginRight = $e(t, 'data-margin-right') || '', Ee(t, 'data-margin-right')); })), t._paddingChangedForModal = null, t._marginChangedForModal = null, Ae(t, 'data-padding-right') && (t.style.paddingRight = $e(t, 'data-padding-right') || '', Ee(t, 'data-padding-right')); },
      },
    }); const yv = new mv(); function gv(t) { return gv = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, gv(t); } function wv(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ov(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? wv(Object(n), !0).forEach(((e) => { Sv(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wv(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Sv(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } function xv(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function Tv(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } function kv(t, e, n) { return e && Tv(t.prototype, e), n && Tv(t, n), t; } function Pv(t, e, n) { return Pv = typeof Reflect !== 'undefined' && Reflect.get ? Reflect.get : function (t, e, n) { const r = jv(t, e); if (r) { const i = Object.getOwnPropertyDescriptor(r, e); return i.get ? i.get.call(n) : i.value; } }, Pv(t, e, n || t); } function jv(t, e) { while (!Object.prototype.hasOwnProperty.call(t, e)) if (t = Av(t), t === null) break; return t; } function Cv(t, e) { if (typeof e !== 'function' && e !== null) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && _v(t, e); } function _v(t, e) { return _v = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t; }, _v(t, e); } function Bv(t) { const e = $v(); return function () { let n; const r = Av(t); if (e) { const i = Av(this).constructor; n = Reflect.construct(r, arguments, i); } else n = r.apply(this, arguments); return Dv(this, n); }; } function Dv(t, e) { return !e || gv(e) !== 'object' && typeof e !== 'function' ? Ev(t) : e; } function Ev(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t; } function $v() { if (typeof Reflect === 'undefined' || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if (typeof Proxy === 'function') return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (() => {}))), !0; } catch (t) { return !1; } } function Av(t) { return Av = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Av(t); } const Iv = (function (t) { Cv(n, t); const e = Bv(n); function n(t) { let r; const i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return xv(this, n), r = e.call(this, t, i), v(Ev(r), { trigger: j() }), r; } return kv(n, null, [{ key: 'Defaults', get() { return Ov(Ov({}, Pv(Av(n), 'Defaults', this)), {}, { trigger: null }); } }]), n; }(pc)); function Fv(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Lv(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Fv(Object(n), !0).forEach(((e) => { Rv(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fv(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Rv(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Mv = 'BModal'; const Nv = {
      subtree: !0, childList: !0, characterData: !0, attributes: !0, attributeFilter: ['style', 'class'],
    }; const Vv = {
      size: { type: String, default() { return Qt(Mv, 'size'); } }, centered: { type: Boolean, default: !1 }, scrollable: { type: Boolean, default: !1 }, buttonSize: { type: String }, noStacking: { type: Boolean, default: !1 }, noFade: { type: Boolean, default: !1 }, noCloseOnBackdrop: { type: Boolean, default: !1 }, noCloseOnEsc: { type: Boolean, default: !1 }, noEnforceFocus: { type: Boolean, default: !1 }, ignoreEnforceFocusSelector: { type: [Array, String], default: '' }, title: { type: String, default: '' }, titleHtml: { type: String }, titleTag: { type: String, default() { return Qt(Mv, 'titleTag'); } }, titleClass: { type: [String, Array, Object] }, titleSrOnly: { type: Boolean, default: !1 }, ariaLabel: { type: String }, headerBgVariant: { type: String, default() { return Qt(Mv, 'headerBgVariant'); } }, headerBorderVariant: { type: String, default() { return Qt(Mv, 'headerBorderVariant'); } }, headerTextVariant: { type: String, default() { return Qt(Mv, 'headerTextVariant'); } }, headerCloseVariant: { type: String, default() { return Qt(Mv, 'headerCloseVariant'); } }, headerClass: { type: [String, Array, Object] }, bodyBgVariant: { type: String, default() { return Qt(Mv, 'bodyBgVariant'); } }, bodyTextVariant: { type: String, default() { return Qt(Mv, 'bodyTextVariant'); } }, modalClass: { type: [String, Array, Object] }, dialogClass: { type: [String, Array, Object] }, contentClass: { type: [String, Array, Object] }, bodyClass: { type: [String, Array, Object] }, footerBgVariant: { type: String, default() { return Qt(Mv, 'footerBgVariant'); } }, footerBorderVariant: { type: String, default() { return Qt(Mv, 'footerBorderVariant'); } }, footerTextVariant: { type: String, default() { return Qt(Mv, 'footerTextVariant'); } }, footerClass: { type: [String, Array, Object] }, hideHeader: { type: Boolean, default: !1 }, hideFooter: { type: Boolean, default: !1 }, hideHeaderClose: { type: Boolean, default: !1 }, hideBackdrop: { type: Boolean, default: !1 }, okOnly: { type: Boolean, default: !1 }, okDisabled: { type: Boolean, default: !1 }, cancelDisabled: { type: Boolean, default: !1 }, visible: { type: Boolean, default: !1 }, returnFocus: { type: [rt, String, Object], default: null }, headerCloseContent: { type: String, default() { return Qt(Mv, 'headerCloseContent'); } }, headerCloseLabel: { type: String, default() { return Qt(Mv, 'headerCloseLabel'); } }, cancelTitle: { type: String, default() { return Qt(Mv, 'cancelTitle'); } }, cancelTitleHtml: { type: String }, okTitle: { type: String, default() { return Qt(Mv, 'okTitle'); } }, okTitleHtml: { type: String }, cancelVariant: { type: String, default() { return Qt(Mv, 'cancelVariant'); } }, okVariant: { type: String, default() { return Qt(Mv, 'okVariant'); } }, lazy: { type: Boolean, default: !1 }, busy: { type: Boolean, default: !1 }, static: { type: Boolean, default: !1 }, autoFocusButton: { type: String, default: null, validator(t) { return ft(t) || s(['ok', 'cancel', 'close'], t); } },
    }; const zv = i.extend({
      name: Mv,
      mixins: [mr, na, lv, Cl, uv, rn, pv],
      inheritAttrs: !1,
      model: { prop: 'visible', event: 'change' },
      props: Vv,
      data() {
        return {
          isHidden: !0, isVisible: !1, isTransitioning: !1, isShow: !1, isBlock: !1, isOpening: !1, isClosing: !1, ignoreBackdropClick: !1, isModalOverflowing: !1, return_focus: this.returnFocus || null, scrollbarWidth: 0, zIndex: yv.getBaseZIndex(), isTop: !0, isBodyOverflowing: !1,
        };
      },
      computed: {
        modalId() { return this.safeId(); },
        modalOuterId() { return this.safeId('__BV_modal_outer_'); },
        modalHeaderId() { return this.safeId('__BV_modal_header_'); },
        modalBodyId() { return this.safeId('__BV_modal_body_'); },
        modalTitleId() { return this.safeId('__BV_modal_title_'); },
        modalContentId() { return this.safeId('__BV_modal_content_'); },
        modalFooterId() { return this.safeId('__BV_modal_footer_'); },
        modalBackdropId() { return this.safeId('__BV_modal_backdrop_'); },
        modalClasses() { return [{ fade: !this.noFade, show: this.isShow }, this.modalClass]; },
        modalStyles() { const t = ''.concat(this.scrollbarWidth, 'px'); return { paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing ? t : '', paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? t : '', display: this.isBlock ? 'block' : 'none' }; },
        dialogClasses() { let t; return [(t = {}, Rv(t, 'modal-'.concat(this.size), this.size), Rv(t, 'modal-dialog-centered', this.centered), Rv(t, 'modal-dialog-scrollable', this.scrollable), t), this.dialogClass]; },
        headerClasses() { let t; return [(t = {}, Rv(t, 'bg-'.concat(this.headerBgVariant), this.headerBgVariant), Rv(t, 'text-'.concat(this.headerTextVariant), this.headerTextVariant), Rv(t, 'border-'.concat(this.headerBorderVariant), this.headerBorderVariant), t), this.headerClass]; },
        titleClasses() { return [{ 'sr-only': this.titleSrOnly }, this.titleClass]; },
        bodyClasses() { let t; return [(t = {}, Rv(t, 'bg-'.concat(this.bodyBgVariant), this.bodyBgVariant), Rv(t, 'text-'.concat(this.bodyTextVariant), this.bodyTextVariant), t), this.bodyClass]; },
        footerClasses() { let t; return [(t = {}, Rv(t, 'bg-'.concat(this.footerBgVariant), this.footerBgVariant), Rv(t, 'text-'.concat(this.footerTextVariant), this.footerTextVariant), Rv(t, 'border-'.concat(this.footerBorderVariant), this.footerBorderVariant), t), this.footerClass]; },
        modalOuterStyle() { return { position: 'absolute', zIndex: this.zIndex }; },
        slotScope() {
          return {
            ok: this.onOk, cancel: this.onCancel, close: this.onClose, hide: this.hide, visible: this.isVisible,
          };
        },
        computeIgnoreEnforceFocusSelector() { return l(this.ignoreEnforceFocusSelector).filter(V).join(',').trim(); },
        computedAttrs() { const t = this.static ? {} : this.scopedStyleAttrs; return Lv(Lv(Lv({}, t), this.bvAttrs), {}, { id: this.modalOuterId }); },
        computedModalAttrs() {
          const t = this.isVisible; const e = this.ariaLabel; return {
            id: this.modalId, role: 'dialog', 'aria-hidden': t ? null : 'true', 'aria-modal': t ? 'true' : null, 'aria-label': e, 'aria-labelledby': this.hideHeader || e || !(this.hasNormalizedSlot('modal-title') || this.titleHtml || this.title) ? null : this.modalTitleId, 'aria-describedby': this.modalBodyId,
          };
        },
      },
      watch: { visible(t, e) { t !== e && this[t ? 'show' : 'hide'](); } },
      created() { this._observer = null; },
      mounted() { this.zIndex = yv.getBaseZIndex(), this.listenOnRoot('bv::show::modal', this.showHandler), this.listenOnRoot('bv::hide::modal', this.hideHandler), this.listenOnRoot('bv::toggle::modal', this.toggleHandler), this.listenOnRoot('bv::modal::show', this.modalListener), !0 === this.visible && this.$nextTick(this.show); },
      beforeDestroy() { this._observer && (this._observer.disconnect(), this._observer = null), this.isVisible && (this.isVisible = !1, this.isShow = !1, this.isTransitioning = !1); },
      methods: {
        updateModel(t) { t !== this.visible && this.$emit('change', t); },
        buildEvent(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return new Iv(t, Lv(Lv({
            cancelable: !1, target: this.$refs.modal || this.$el || null, relatedTarget: null, trigger: null,
          }, e), {}, { vueTarget: this, componentId: this.modalId }));
        },
        show() { if (!this.isVisible && !this.isOpening) if (this.isClosing) this.$once('hidden', this.show); else { this.isOpening = !0, this.return_focus = this.return_focus || this.getActiveElement(); const t = this.buildEvent('show', { cancelable: !0 }); if (this.emitEvent(t), t.defaultPrevented || this.isVisible) return this.isOpening = !1, void this.updateModel(!1); this.doShow(); } },
        hide() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; if (this.isVisible && !this.isClosing) { this.isClosing = !0; const e = this.buildEvent('hide', { cancelable: t !== 'FORCE', trigger: t || null }); if (t === 'ok' ? this.$emit('ok', e) : t === 'cancel' ? this.$emit('cancel', e) : t === 'headerclose' && this.$emit('close', e), this.emitEvent(e), e.defaultPrevented || !this.isVisible) return this.isClosing = !1, void this.updateModel(!0); this._observer && (this._observer.disconnect(), this._observer = null), this.isVisible = !1, this.updateModel(!1); } },
        toggle(t) { t && (this.return_focus = t), this.isVisible ? this.hide('toggle') : this.show(); },
        getActiveElement() { const t = me(z.j ? [document.body] : []); return t && t.focus ? t : null; },
        doShow() { const t = this; yv.modalsAreOpen && this.noStacking ? this.listenOnRootOnce('bv::modal::hidden', this.doShow) : (yv.registerModal(this), this.isHidden = !1, this.$nextTick((() => { t.isVisible = !0, t.isOpening = !1, t.updateModel(!0), t.$nextTick((() => { t._observer = nl(t.$refs.content, t.checkModalOverflow.bind(t), Nv); })); }))); },
        onBeforeEnter() { this.isTransitioning = !0, this.setResizeEvent(!0); },
        onEnter() { const t = this; this.isBlock = !0, he((() => { he((() => { t.isShow = !0; })); })); },
        onAfterEnter() { const t = this; this.checkModalOverflow(), this.isTransitioning = !1, he((() => { t.emitEvent(t.buildEvent('shown')), t.setEnforceFocus(!0), t.$nextTick((() => { t.focusFirst(); })); })); },
        onBeforeLeave() { this.isTransitioning = !0, this.setResizeEvent(!1), this.setEnforceFocus(!1); },
        onLeave() { this.isShow = !1; },
        onAfterLeave() { const t = this; this.isBlock = !1, this.isTransitioning = !1, this.isModalOverflowing = !1, this.isHidden = !0, this.$nextTick((() => { t.isClosing = !1, yv.unregisterModal(t), t.returnFocusTo(), t.emitEvent(t.buildEvent('hidden')); })); },
        emitEvent(t) { const e = t.type; this.emitOnRoot('bv::modal::'.concat(e), t, t.componentId), this.$emit(e, t); },
        onDialogMousedown() { const t = this; const e = this.$refs.modal; const n = function n(r) { sl(e, 'mouseup', n, il), r.target === e && (t.ignoreBackdropClick = !0); }; al(e, 'mouseup', n, il); },
        onClickOut(t) { this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : this.isVisible && !this.noCloseOnBackdrop && Pe(document.body, t.target) && (Pe(this.$refs.content, t.target) || this.hide('backdrop')); },
        onOk() { this.hide('ok'); },
        onCancel() { this.hide('cancel'); },
        onClose() { this.hide('headerclose'); },
        onEsc(t) { t.keyCode === Rn.ESC && this.isVisible && !this.noCloseOnEsc && this.hide('esc'); },
        focusHandler(t) { const e = this.$refs.content; const n = t.target; if (!(this.noEnforceFocus || !this.isTop || !this.isVisible || !e || document === n || Pe(e, n) || this.computeIgnoreEnforceFocusSelector && ke(this.computeIgnoreEnforceFocusSelector, n, !0))) { const r = Ne(this.$refs.content); const i = this.$refs; const o = i.bottomTrap; const a = i.topTrap; if (o && n === o) { if (Ve(r[0])) return; } else if (a && n === a && Ve(r[r.length - 1])) return; Ve(e, { preventScroll: !0 }); } },
        setEnforceFocus(t) { this.listenDocument(t, 'focusin', this.focusHandler); },
        setResizeEvent(t) { this.listenWindow(t, 'resize', this.checkModalOverflow), this.listenWindow(t, 'orientationchange', this.checkModalOverflow); },
        showHandler(t, e) { t === this.modalId && (this.return_focus = e || this.getActiveElement(), this.show()); },
        hideHandler(t) { t === this.modalId && this.hide('event'); },
        toggleHandler(t, e) { t === this.modalId && this.toggle(e); },
        modalListener(t) { this.noStacking && t.vueTarget !== this && this.hide(); },
        focusFirst() { const t = this; z.j && he((() => { const e = t.$refs.modal; const n = t.$refs.content; const r = t.getActiveElement(); if (e && n && (!r || !Pe(n, r))) { const i = t.$refs['ok-button']; const o = t.$refs['cancel-button']; const a = t.$refs['close-button']; const s = t.autoFocusButton; const l = s === 'ok' && i ? i.$el || i : s === 'cancel' && o ? o.$el || o : s === 'close' && a ? a.$el || a : n; Ve(l), l === n && t.$nextTick((() => { e.scrollTop = 0; })); } })); },
        returnFocusTo() { let t = this.returnFocus || this.return_focus || null; this.return_focus = null, this.$nextTick((() => { t = pt(t) ? xe(t) : t, t && (t = t.$el || t, Ve(t)); })); },
        checkModalOverflow() { if (this.isVisible) { const t = this.$refs.modal; this.isModalOverflowing = t.scrollHeight > document.documentElement.clientHeight; } },
        makeModal(t) {
          let e = t(); if (!this.hideHeader) {
            let n = this.normalizeSlot('modal-header', this.slotScope); if (!n) {
              let r = t(); this.hideHeaderClose || (r = t(ln, {
                ref: 'close-button',
                props: {
                  content: this.headerCloseContent, disabled: this.isTransitioning, ariaLabel: this.headerCloseLabel, textVariant: this.headerCloseVariant || this.headerTextVariant,
                },
                on: { click: this.onClose },
              }, [this.normalizeSlot('modal-header-close')])); const i = !this.hasNormalizedSlot('modal-title') && this.titleHtml ? { innerHTML: this.titleHtml } : {}; n = [t(this.titleTag, {
                staticClass: 'modal-title', class: this.titleClasses, attrs: { id: this.modalTitleId }, domProps: i,
              }, [this.normalizeSlot('modal-title', this.slotScope) || Qi(this.title)]), r];
            }e = t('header', {
              ref: 'header', staticClass: 'modal-header', class: this.headerClasses, attrs: { id: this.modalHeaderId },
            }, [n]);
          } const o = t('div', {
            ref: 'body', staticClass: 'modal-body', class: this.bodyClasses, attrs: { id: this.modalBodyId },
          }, this.normalizeSlot('default', this.slotScope)); let a = t(); if (!this.hideFooter) {
            let s = this.normalizeSlot('modal-footer', this.slotScope); if (!s) { let l = t(); if (!this.okOnly) { const c = this.cancelTitleHtml ? { innerHTML: this.cancelTitleHtml } : null; l = t(qr, { ref: 'cancel-button', props: { variant: this.cancelVariant, size: this.buttonSize, disabled: this.cancelDisabled || this.busy || this.isTransitioning }, on: { click: this.onCancel } }, [this.normalizeSlot('modal-cancel') || (c ? t('span', { domProps: c }) : Qi(this.cancelTitle))]); } const u = this.okTitleHtml ? { innerHTML: this.okTitleHtml } : null; const f = t(qr, { ref: 'ok-button', props: { variant: this.okVariant, size: this.buttonSize, disabled: this.okDisabled || this.busy || this.isTransitioning }, on: { click: this.onOk } }, [this.normalizeSlot('modal-ok') || (u ? t('span', { domProps: u }) : Qi(this.okTitle))]); s = [l, f]; }a = t('footer', {
              ref: 'footer', staticClass: 'modal-footer', class: this.footerClasses, attrs: { id: this.modalFooterId },
            }, [s]);
          } const d = t('div', {
            ref: 'content', staticClass: 'modal-content', class: this.contentClass, attrs: { id: this.modalContentId, tabindex: '-1' },
          }, [e, o, a]); let h = t(); let p = t(); this.isVisible && !this.noEnforceFocus && (h = t('span', { ref: 'topTrap', attrs: { tabindex: '0' } }), p = t('span', { ref: 'bottomTrap', attrs: { tabindex: '0' } })); const v = t('div', {
            ref: 'dialog', staticClass: 'modal-dialog', class: this.dialogClasses, on: { mousedown: this.onDialogMousedown },
          }, [h, d, p]); let b = t('div', {
            ref: 'modal',
            staticClass: 'modal',
            class: this.modalClasses,
            style: this.modalStyles,
            directives: [{
              name: 'show', rawName: 'v-show', value: this.isVisible, expression: 'isVisible',
            }],
            attrs: this.computedModalAttrs,
            on: { keydown: this.onEsc, click: this.onClickOut },
          }, [v]); b = t('transition', {
            props: {
              enterClass: '', enterToClass: '', enterActiveClass: '', leaveClass: '', leaveActiveClass: '', leaveToClass: '',
            },
            on: {
              beforeEnter: this.onBeforeEnter, enter: this.onEnter, afterEnter: this.onAfterEnter, beforeLeave: this.onBeforeLeave, leave: this.onLeave, afterLeave: this.onAfterLeave,
            },
          }, [b]); let m = t(); return !this.hideBackdrop && this.isVisible && (m = t('div', { staticClass: 'modal-backdrop', attrs: { id: this.modalBackdropId } }, [this.normalizeSlot('modal-backdrop')])), m = t(tn, { props: { noFade: this.noFade } }, [m]), t('div', { key: 'modal-outer-'.concat(this._uid), style: this.modalOuterStyle, attrs: this.computedAttrs }, [b, m]);
        },
      },
      render(t) { return this.static ? this.lazy && this.isHidden ? t() : this.makeModal(t) : this.isHidden ? t() : t(av, [this.makeModal(t)]); },
    }); const Hv = 'bv::show::modal'; const Gv = '__bv_modal_directive__'; const Uv = function (t) { const e = t.modifiers; const n = void 0 === e ? {} : e; const r = t.arg; const i = t.value; return pt(i) ? i : pt(r) ? r : g(n).reverse()[0]; }; const Wv = function (t) { return t && Te(t, '.dropdown-menu > li, li.nav-item') && xe('a, button', t) || t; }; const qv = function (t) { t && t.tagName !== 'BUTTON' && (Ae(t, 'role') || De(t, 'role', 'button'), t.tagName === 'A' || Ae(t, 'tabindex') || De(t, 'tabindex', '0')); }; const Yv = function (t, e, n) { const r = Uv(e); const i = Wv(t); if (r && i) { const o = function (t) { const e = t.currentTarget; if (!we(e)) { const i = t.type; const o = t.keyCode; i !== 'click' && (i !== 'keydown' || o !== Rn.ENTER && o !== Rn.SPACE) || n.context.$root.$emit(Hv, r, e); } }; t[Gv] = { handler: o, target: r, trigger: i }, qv(i), al(i, 'click', o, rl), i.tagName !== 'BUTTON' && $e(i, 'role') === 'button' && al(i, 'keydown', o, rl); } }; const Kv = function (t) { const e = t[Gv] || {}; const n = e.trigger; const r = e.handler; n && r && (sl(n, 'click', r, rl), sl(n, 'keydown', r, rl), sl(t, 'click', r, rl), sl(t, 'keydown', r, rl)), delete t[Gv]; }; const Xv = function (t, e, n) { const r = t[Gv] || {}; const i = Uv(e); const o = Wv(t); i === r.target && o === r.trigger || (Kv(t, e, n), Yv(t, e, n)), qv(o); }; const Jv = function () {}; const Zv = {
      inserted: Xv, updated: Jv, componentUpdated: Xv, unbind: Kv,
    }; function Qv(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function tb(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } function eb(t, e, n) { return e && tb(t.prototype, e), n && tb(t, n), t; } function nb(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function rb(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? nb(Object(n), !0).forEach(((e) => { ib(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nb(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function ib(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } function ob(t) { return cb(t) || lb(t) || sb(t) || ab(); } function ab() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function sb(t, e) { if (t) { if (typeof t === 'string') return ub(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ub(t, e) : void 0; } } function lb(t) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t); } function cb(t) { if (Array.isArray(t)) return ub(t); } function ub(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } const fb = '$bvModal'; const db = '_bv__modal'; const hb = ['id'].concat(ob(g(P(Vv, ['busy', 'lazy', 'noStacking', 'static', 'visible'])))); const pb = function () {}; const vb = {
      msgBoxContent: 'default', title: 'modal-title', okTitle: 'modal-ok', cancelTitle: 'modal-cancel',
    }; const bb = function (t) { return hb.reduce(((e, n) => (ct(t[n]) || (e[n] = t[n]), e)), {}); }; const mb = function (t) {
      const e = t.extend({
        name: 'BMsgBox', extends: zv, destroyed() { this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el); }, mounted() { const t = this; const e = function () { const e = t; t.$nextTick((() => { setTimeout((() => e.$destroy()), 0); })); }; this.$parent.$once('hook:destroyed', e), this.$once('hidden', e), this.$router && this.$route && this.$once('hook:beforeDestroy', this.$watch('$router', e)), this.show(); },
      }); const n = function (t, n) {
        const r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pb; if (!Pt(fb) && !jt(fb)) {
          const i = new e({
            parent: t,
            propsData: rb(rb(rb({}, bb(Qt('BModal') || {})), {}, { hideHeaderClose: !0, hideHeader: !(n.title || n.titleHtml) }, P(n, g(vb))), {}, {
              lazy: !1, busy: !1, visible: !1, noStacking: !1, noEnforceFocus: !1,
            }),
          }); return g(vb).forEach(((t) => { ct(n[t]) || (i.$slots[vb[t]] = l(n[t])); })), new Promise((((t, e) => { let n = !1; i.$once('hook:destroyed', (() => { n || e(new Error('BootstrapVue MsgBox destroyed before resolve')); })), i.$on('hide', ((e) => { if (!e.defaultPrevented) { const i = r(e); e.defaultPrevented || (n = !0, t(i)); } })); const o = document.createElement('div'); document.body.appendChild(o), i.$mount(o); })));
        }
      }; const r = function (t, e) { const r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; const i = arguments.length > 3 ? arguments[3] : void 0; if (e && !jt(fb) && !Pt(fb) && dt(i)) return n(t, rb(rb({}, bb(r)), {}, { msgBoxContent: e }), i); }; const i = (function () {
        function t(e) { Qv(this, t), h(this, { _vm: e, _root: e.$root }), v(this, { _vm: j(), _root: j() }); } return eb(t, [{ key: 'show', value(t) { if (t && this._root) { for (var e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i]; (e = this._root).$emit.apply(e, ['bv::show::modal', t].concat(r)); } } }, { key: 'hide', value(t) { if (t && this._root) { for (var e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i]; (e = this._root).$emit.apply(e, ['bv::hide::modal', t].concat(r)); } } }, {
          key: 'msgBoxOk',
          value(t) {
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const n = rb(rb({}, e), {}, {
              okOnly: !0, okDisabled: !1, hideFooter: !1, msgBoxContent: t,
            }); return r(this._vm, t, n, (() => !0));
          },
        }, {
          key: 'msgBoxConfirm',
          value(t) {
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const n = rb(rb({}, e), {}, {
              okOnly: !1, okDisabled: !1, cancelDisabled: !1, hideFooter: !1,
            }); return r(this._vm, t, n, ((t) => { const e = t.trigger; return e === 'ok' || e !== 'cancel' && null; }));
          },
        }]), t;
      }()); t.mixin({ beforeCreate() { this[db] = new i(this); } }), w(t.prototype, fb) || b(t.prototype, fb, { get() { return this && this[db] || kt('"'.concat(fb, '" must be accessed from a Vue instance "this" context.'), 'BModal'), this[db]; } });
    }; const yb = zt({ plugins: { plugin: mb } }); const gb = zt({ components: { BModal: zv }, directives: { VBModal: Zv }, plugins: { BVModalPlugin: yb } }); function wb(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Ob = {
      tag: { type: String, default: 'ul' }, fill: { type: Boolean, default: !1 }, justified: { type: Boolean, default: !1 }, align: { type: String }, tabs: { type: Boolean, default: !1 }, pills: { type: Boolean, default: !1 }, vertical: { type: Boolean, default: !1 }, small: { type: Boolean, default: !1 }, cardHeader: { type: Boolean, default: !1 },
    }; const Sb = function (t) { return t = t === 'left' ? 'start' : t === 'right' ? 'end' : t, 'justify-content-'.concat(t); }; const xb = i.extend({
      name: 'BNav',
      functional: !0,
      props: Ob,
      render(t, e) {
        let n; const r = e.props; const i = e.data; const o = e.children; return t(r.tag, qe(i, {
          staticClass: 'nav',
          class: (n = {
            'nav-tabs': r.tabs, 'nav-pills': r.pills && !r.tabs, 'card-header-tabs': !r.vertical && r.cardHeader && r.tabs, 'card-header-pills': !r.vertical && r.cardHeader && r.pills && !r.tabs, 'flex-column': r.vertical, 'nav-fill': !r.vertical && r.fill, 'nav-justified': !r.vertical && r.justified,
          }, wb(n, Sb(r.align), !r.vertical && r.align), wb(n, 'small', r.small), n),
        }), o);
      },
    }); function Tb(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function kb(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Tb(Object(n), !0).forEach(((e) => { Pb(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tb(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Pb(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const jb = Cr(); const Cb = i.extend({
      name: 'BNavItem',
      functional: !0,
      props: kb(kb({}, jb), {}, { linkAttrs: { type: Object, default() {} }, linkClasses: { type: [String, Object, Array], default: null } }),
      render(t, e) {
        const n = e.props; const r = e.data; const i = e.listeners; const o = e.children; return delete r.on, t('li', qe(r, { staticClass: 'nav-item' }), [t(_r, {
          staticClass: 'nav-link', class: n.linkClasses, attrs: n.linkAttrs, props: n, on: i,
        }, o)]);
      },
    }); const _b = {}; const Bb = i.extend({
      name: 'BNavText', functional: !0, props: _b, render(t, e) { const n = e.data; const r = e.children; return t('li', qe(n, { staticClass: 'navbar-text' }), r); },
    }); function Db(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Eb(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Db(Object(n), !0).forEach(((e) => { $b(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Db(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function $b(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Ab = Eb(Eb({}, P(Jc, ['inline'])), {}, { formClass: { type: [String, Array, Object] } }); const Ib = i.extend({
      name: 'BNavForm',
      functional: !0,
      props: Ab,
      render(t, e) {
        const n = e.props; const r = e.data; const i = e.children; const o = e.listeners; const a = void 0 === o ? {} : o; const s = r.attrs; r.attrs = {}, r.on = {}; const l = t(Zc, {
          class: n.formClass, props: Eb(Eb({}, n), {}, { inline: !0 }), attrs: s, on: a,
        }, i); return t('li', qe(r, { staticClass: 'form-inline' }), [l]);
      },
    }); const Fb = Fn(['text', 'html', 'menuClass', 'toggleClass', 'noCaret', 'role', 'lazy'], _c); const Lb = i.extend({
      name: 'BNavItemDropdown',
      mixins: [na, jc, rn],
      props: Fb,
      computed: {
        toggleId() { return this.safeId('_BV_toggle_'); }, isNav() { return !0; }, dropdownClasses() { return [this.directionClass, { show: this.visible }]; }, menuClasses() { return [this.menuClass, { 'dropdown-menu-right': this.right, show: this.visible }]; }, toggleClasses() { return [this.toggleClass, { 'dropdown-toggle-no-caret': this.noCaret }]; },
      },
      render(t) {
        const e = this.toggleId; const n = this.visible; const r = t(_r, {
          staticClass: 'nav-link dropdown-toggle',
          class: this.toggleClasses,
          props: { href: '#'.concat(this.id || ''), disabled: this.disabled },
          attrs: {
            id: e, role: 'button', 'aria-haspopup': 'true', 'aria-expanded': n ? 'true' : 'false',
          },
          on: { mousedown: this.onMousedown, click: this.toggle, keydown: this.toggle },
          ref: 'toggle',
        }, [this.normalizeSlot(['button-content', 'text']) || t('span', { domProps: to(this.html, this.text) })]); const i = t('ul', {
          staticClass: 'dropdown-menu', class: this.menuClasses, attrs: { tabindex: '-1', 'aria-labelledby': e }, on: { keydown: this.onKeydown }, ref: 'menu',
        }, !this.lazy || n ? this.normalizeSlot('default', { hide: this.hide }) : [t()]); return t('li', { staticClass: 'nav-item b-nav-dropdown dropdown', class: this.dropdownClasses, attrs: { id: this.safeId() } }, [r, i]);
      },
    }); const Rb = zt({
      components: {
        BNav: xb, BNavItem: Cb, BNavText: Bb, BNavForm: Ib, BNavItemDropdown: Lb, BNavItemDd: Lb, BNavDropdown: Lb, BNavDd: Lb,
      },
      plugins: { DropdownPlugin: uu },
    }); function Mb(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Nb = 'BNavbar'; const Vb = {
      tag: { type: String, default: 'nav' }, type: { type: String, default: 'light' }, variant: { type: String, default() { return Qt(Nb, 'variant'); } }, toggleable: { type: [Boolean, String], default: !1 }, fixed: { type: String }, sticky: { type: Boolean, default: !1 }, print: { type: Boolean, default: !1 },
    }; const zb = i.extend({
      name: Nb, mixins: [rn], props: Vb, provide() { return { bvNavbar: this }; }, computed: { breakpointClass() { let t = null; const e = te()[0]; const n = this.toggleable; return n && pt(n) && n !== e ? t = 'navbar-expand-'.concat(n) : !1 === n && (t = 'navbar-expand'), t; } }, render(t) { let e; return t(this.tag, { staticClass: 'navbar', class: [(e = { 'd-print': this.print, 'sticky-top': this.sticky }, Mb(e, 'navbar-'.concat(this.type), this.type), Mb(e, 'bg-'.concat(this.variant), this.variant), Mb(e, 'fixed-'.concat(this.fixed), this.fixed), e), this.breakpointClass], attrs: { role: this.tag === 'nav' ? null : 'navigation' } }, [this.normalizeSlot('default')]); },
    }); function Hb(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Gb = Fn(['tag', 'fill', 'justified', 'align', 'small'], Ob); const Ub = function (t) { return t = t === 'left' ? 'start' : t === 'right' ? 'end' : t, 'justify-content-'.concat(t); }; const Wb = i.extend({
      name: 'BNavbarNav', functional: !0, props: Gb, render(t, e) { let n; const r = e.props; const i = e.data; const o = e.children; return t(r.tag, qe(i, { staticClass: 'navbar-nav', class: (n = { 'nav-fill': r.fill, 'nav-justified': r.justified }, Hb(n, Ub(r.align), r.align), Hb(n, 'small', r.small), n) }), o); },
    }); function qb(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Yb(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? qb(Object(n), !0).forEach(((e) => { Kb(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qb(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Kb(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Xb = Cr(); Xb.href.default = void 0, Xb.to.default = void 0; const Jb = Yb(Yb({}, Xb), {}, { tag: { type: String, default: 'div' } }); const Zb = i.extend({
      name: 'BNavbarBrand', functional: !0, props: Jb, render(t, e) { const n = e.props; const r = e.data; const i = e.children; const o = n.to || n.href; const a = o ? _r : n.tag; return t(a, qe(r, { staticClass: 'navbar-brand', props: o ? Fn(Xb, n) : {} }), i); },
    }); const Qb = 'BNavbarToggle'; const tm = 'navbar-toggler'; const em = i.extend({
      name: Qb,
      directives: { BToggle: oc },
      mixins: [Cl, rn],
      props: { label: { type: String, default() { return Qt(Qb, 'label'); } }, target: { type: String, required: !0 } },
      data() { return { toggleState: !1 }; },
      created() { this.listenOnRoot(Ul, this.handleStateEvt), this.listenOnRoot(Wl, this.handleStateEvt); },
      methods: { onClick(t) { this.$emit('click', t); }, handleStateEvt(t, e) { t === this.target && (this.toggleState = e); } },
      render(t) {
        const e = this.toggleState; return t('button', {
          staticClass: tm, directives: [{ name: 'BToggle', value: this.target }], attrs: { type: 'button', 'aria-label': this.label }, on: { click: this.onClick },
        }, [this.normalizeSlot('default', { expanded: e }) || t('span', { staticClass: ''.concat(tm, '-icon') })]);
      },
    }); const nm = zt({
      components: {
        BNavbar: zb, BNavbarNav: Wb, BNavbarBrand: Zb, BNavbarToggle: em, BNavToggle: em,
      },
      plugins: { NavPlugin: Rb, CollapsePlugin: cc, DropdownPlugin: uu },
    }); function rm(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const im = 'BSpinner'; const om = i.extend({
      name: im,
      functional: !0,
      props: {
        type: { type: String, default: 'border' }, label: { type: String }, variant: { type: String, default() { return Qt(im, 'variant'); } }, small: { type: Boolean, default: !1 }, role: { type: String, default: 'status' }, tag: { type: String, default: 'span' },
      },
      render(t, e) { let n; const r = e.props; const i = e.data; const o = e.slots; const a = e.scopedSlots; const s = o(); const l = a || {}; let c = nn('label', {}, l, s) || r.label; return c && (c = t('span', { staticClass: 'sr-only' }, c)), t(r.tag, qe(i, { attrs: { role: c ? r.role || 'status' : null, 'aria-hidden': c ? null : 'true' }, class: (n = {}, rm(n, 'spinner-'.concat(r.type), r.type), rm(n, 'spinner-'.concat(r.type, '-sm'), r.small), rm(n, 'text-'.concat(r.variant), r.variant), n) }), [c || t()]); },
    }); function am(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function sm(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? am(Object(n), !0).forEach(((e) => { lm(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : am(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function lm(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const cm = {
      top: 0, left: 0, bottom: 0, right: 0,
    }; const um = i.extend({
      name: 'BOverlay',
      mixins: [rn],
      props: {
        show: { type: Boolean, default: !1 }, variant: { type: String, default: 'light' }, bgColor: { type: String }, opacity: { type: [Number, String], default: 0.85, validator(t) { const e = oe(t, 0); return e >= 0 && e <= 1; } }, blur: { type: String, default: '2px' }, rounded: { type: [Boolean, String], default: !1 }, noCenter: { type: Boolean, default: !1 }, noFade: { type: Boolean, default: !1 }, spinnerType: { type: String, default: 'border' }, spinnerVariant: { type: String }, spinnerSmall: { type: Boolean, default: !1 }, overlayTag: { type: String, default: 'div' }, wrapTag: { type: String, default: 'div' }, noWrap: { type: Boolean, default: !1 }, fixed: { type: Boolean, default: !1 }, zIndex: { type: [Number, String], default: 10 },
      },
      computed: { computedRounded() { const t = this.rounded; return !0 === t || t === '' ? 'rounded' : t ? 'rounded-'.concat(t) : ''; }, computedVariant() { return this.variant && !this.bgColor ? 'bg-'.concat(this.variant) : ''; }, overlayScope() { return { spinnerType: this.spinnerType || null, spinnerVariant: this.spinnerVariant || null, spinnerSmall: this.spinnerSmall }; } },
      methods: { defaultOverlayFn(t) { const e = t.spinnerType; const n = t.spinnerVariant; const r = t.spinnerSmall; return this.$createElement(om, { props: { type: e, variant: n, small: r } }); } },
      render(t) {
        const e = this; let n = t(); if (this.show) {
          const r = this.overlayScope; const i = t('div', { staticClass: 'position-absolute', class: [this.computedVariant, this.computedRounded], style: sm(sm({}, cm), {}, { opacity: this.opacity, backgroundColor: this.bgColor || null, backdropFilter: this.blur ? 'blur('.concat(this.blur, ')') : null }) }); const o = t('div', { staticClass: 'position-absolute', style: this.noCenter ? sm({}, cm) : { top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)' } }, [this.normalizeSlot('overlay', r) || this.defaultOverlayFn(r)]); n = t(this.overlayTag, {
            key: 'overlay', staticClass: 'b-overlay', class: { 'position-absolute': !this.noWrap || this.noWrap && !this.fixed, 'position-fixed': this.noWrap && this.fixed }, style: sm(sm({}, cm), {}, { zIndex: this.zIndex || 10 }), on: { click(t) { return e.$emit('click', t); } },
          }, [i, o]);
        } return n = t(Qe, { props: { noFade: this.noFade, appear: !0 }, on: { 'after-enter': function () { return e.$emit('shown'); }, 'after-leave': function () { return e.$emit('hidden'); } } }, [n]), this.noWrap ? n : t(this.wrapTag, { staticClass: 'b-overlay-wrap position-relative', attrs: { 'aria-busy': this.show ? 'true' : null } }, this.noWrap ? [n] : [this.normalizeSlot('default'), n]);
      },
    }); const fm = zt({ components: { BOverlay: um } }); const dm = function (t) { return Array.apply(null, { length: t }); }; const hm = dm; const pm = 3; const vm = 5; const bm = function (t, e) { return hm(e).map(((e, n) => ({ number: t + n, classes: null }))); }; const mm = function (t) { const e = ie(t) || 1; return e < 1 ? vm : e; }; const ym = function (t, e) { const n = ie(t) || 1; return n > e ? e : n < 1 ? 1 : n; }; const gm = function (t) { if (t.keyCode === Rn.SPACE) return t.preventDefault(), t.stopImmediatePropagation(), t.stopPropagation(), t.currentTarget.click(), !1; }; const wm = {
      disabled: { type: Boolean, default: !1 }, value: { type: [Number, String], default: null, validator(t) { return !(!ut(t) && ie(t, 0) < 1) || (kt('"v-model" value must be a number greater than "0"', 'BPagination'), !1); } }, limit: { type: [Number, String], default: vm, validator(t) { return !(ie(t, 0) < 1) || (kt('Prop "limit" must be a number greater than "0"', 'BPagination'), !1); } }, align: { type: String, default: 'left' }, pills: { type: Boolean, default: !1 }, hideGotoEndButtons: { type: Boolean, default: !1 }, ariaLabel: { type: String, default: 'Pagination' }, labelFirstPage: { type: String, default: 'Go to first page' }, firstText: { type: String, default: '«' }, firstNumber: { type: Boolean, default: !1 }, firstClass: { type: [String, Array, Object], default: null }, labelPrevPage: { type: String, default: 'Go to previous page' }, prevText: { type: String, default: '‹' }, prevClass: { type: [String, Array, Object], default: null }, labelNextPage: { type: String, default: 'Go to next page' }, nextText: { type: String, default: '›' }, nextClass: { type: [String, Array, Object] }, labelLastPage: { type: String, default: 'Go to last page' }, lastText: { type: String, default: '»' }, lastNumber: { type: Boolean, default: !1 }, lastClass: { type: [String, Array, Object] }, labelPage: { type: [String, Function], default: 'Go to page' }, pageClass: { type: [String, Array, Object] }, hideEllipsis: { type: Boolean, default: !1 }, ellipsisText: { type: String, default: '…' }, ellipsisClass: { type: [String, Array, Object] },
    }; const Om = {
      mixins: [rn],
      model: { prop: 'value', event: 'input' },
      props: wm,
      data() { let t = ie(this.value, 0); return t = t > 0 ? t : -1, { currentPage: t, localNumberOfPages: 1, localLimit: vm }; },
      computed: {
        btnSize() { return this.size ? 'pagination-'.concat(this.size) : ''; },
        alignment() { const t = this.align; return t === 'center' ? 'justify-content-center' : t === 'end' || t === 'right' ? 'justify-content-end' : t === 'fill' ? 'text-center' : ''; },
        styleClass() { return this.pills ? 'b-pagination-pills' : ''; },
        computedCurrentPage() { return ym(this.currentPage, this.localNumberOfPages); },
        paginationParams() {
          const t = this.localLimit; const e = this.localNumberOfPages; const n = this.computedCurrentPage; const r = this.hideEllipsis; const i = this.firstNumber; const o = this.lastNumber; let a = !1; let s = !1; let l = t; let c = 1; e <= t ? l = e : n < t - 1 && t > pm ? (r && !o || (s = !0, l = t - (i ? 0 : 1)), l = bn(l, t)) : e - n + 2 < t && t > pm ? (r && !i || (a = !0, l = t - (o ? 0 : 1)), c = e - l + 1) : (t > pm && (l = t - 2, a = !(r && !i), s = !(r && !o)), c = n - wn(l / 2)), c < 1 ? (c = 1, a = !1) : c > e - l && (c = e - l + 1, s = !1), a && i && c < 4 && (l += 2, c = 1, a = !1); const u = c + l - 1; return s && o && u > e - 3 && (l += u === e - 2 ? 2 : 3, s = !1), t <= pm && (i && c === 1 ? l = bn(l + 1, e, t + 1) : o && e === c + l - 1 && (c = mn(c - 1, 1), l = bn(e - c + 1, e, t + 1))), l = bn(l, e - c + 1), {
            showFirstDots: a, showLastDots: s, numberOfLinks: l, startNumber: c,
          };
        },
        pageList() { const t = this.paginationParams; const e = t.numberOfLinks; const n = t.startNumber; const r = this.computedCurrentPage; const i = bm(n, e); if (i.length > 3) { const o = r - n; const a = 'bv-d-xs-down-none'; if (o === 0) for (let s = 3; s < i.length; s++)i[s].classes = a; else if (o === i.length - 1) for (let l = 0; l < i.length - 3; l++)i[l].classes = a; else { for (let c = 0; c < o - 1; c++)i[c].classes = a; for (let u = i.length - 1; u > o + 1; u--)i[u].classes = a; } } return i; },
      },
      watch: { value(t, e) { t !== e && (this.currentPage = ym(t, this.localNumberOfPages)); }, currentPage(t, e) { t !== e && this.$emit('input', t > 0 ? t : null); }, limit(t, e) { t !== e && (this.localLimit = mm(t)); } },
      created() { const t = this; this.localLimit = mm(this.limit), this.$nextTick((() => { t.currentPage = t.currentPage > t.localNumberOfPages ? t.localNumberOfPages : t.currentPage; })); },
      methods: {
        handleKeyNav(t) { const e = t.keyCode; const n = t.shiftKey; this.isNav || (e === Rn.LEFT || e === Rn.UP ? (t.preventDefault(), n ? this.focusFirst() : this.focusPrev()) : e !== Rn.RIGHT && e !== Rn.DOWN || (t.preventDefault(), n ? this.focusLast() : this.focusNext())); }, getButtons() { return Se('button.page-link, a.page-link', this.$el).filter(((t) => ge(t))); }, focusCurrent() { const t = this; this.$nextTick((() => { const e = t.getButtons().find(((e) => ie($e(e, 'aria-posinset'), 0) === t.computedCurrentPage)); Ve(e) || t.focusFirst(); })); }, focusFirst() { const t = this; this.$nextTick((() => { const e = t.getButtons().find(((t) => !we(t))); Ve(e); })); }, focusLast() { const t = this; this.$nextTick((() => { const e = t.getButtons().reverse().find(((t) => !we(t))); Ve(e); })); }, focusPrev() { const t = this; this.$nextTick((() => { const e = t.getButtons(); const n = e.indexOf(me()); n > 0 && !we(e[n - 1]) && Ve(e[n - 1]); })); }, focusNext() { const t = this; this.$nextTick((() => { const e = t.getButtons(); const n = e.indexOf(me()); n < e.length - 1 && !we(e[n + 1]) && Ve(e[n + 1]); })); },
      },
      render(t) {
        const e = this; const n = []; const r = this.localNumberOfPages; const i = this.pageList.map(((t) => t.number)); const o = this.disabled; const a = this.paginationParams; const s = a.showFirstDots; const l = a.showLastDots; const c = this.computedCurrentPage; const u = this.align === 'fill'; const f = this.isNav; const d = function (t) { return t === c; }; const h = this.currentPage < 1; const p = function (n, i, a, s, l, c, p) {
          const v = o || d(c) || h || n < 1 || n > r; const b = n < 1 ? 1 : n > r ? r : n; const m = { disabled: v, page: b, index: b - 1 }; const y = e.normalizeSlot(a, m) || Yn(s) || t(); const g = t(v ? 'span' : f ? _r : 'button', {
            staticClass: 'page-link',
            class: { 'flex-grow-1': !f && !v && u },
            props: v || !f ? {} : e.linkProps(n),
            attrs: {
              role: f ? null : 'menuitem', type: f || v ? null : 'button', tabindex: v || f ? null : '-1', 'aria-label': i, 'aria-controls': e.ariaControls || null, 'aria-disabled': v ? 'true' : null,
            },
            on: v ? {} : { '!click': function (t) { e.onClick(n, t); }, keydown: gm },
          }, [y]); return t('li', {
            key: p, staticClass: 'page-item', class: [{ disabled: v, 'flex-fill': u, 'd-flex': u && !f && !v }, l], attrs: { role: f ? null : 'presentation', 'aria-hidden': v ? 'true' : null },
          }, [g]);
        }; const v = function (n) {
          return t('li', {
            key: 'ellipsis-'.concat(n ? 'last' : 'first'), staticClass: 'page-item', class: ['disabled', 'bv-d-xs-down-none', u ? 'flex-fill' : '', e.ellipsisClass], attrs: { role: 'separator' },
          }, [t('span', { staticClass: 'page-link' }, [e.normalizeSlot('ellipsis-text') || Yn(e.ellipsisText) || t()])]);
        }; const b = function (n, i) {
          const a = d(n.number) && !h; const s = o ? null : a || h && i === 0 ? '0' : '-1'; const l = {
            role: f ? null : 'menuitemradio', type: f || o ? null : 'button', 'aria-disabled': o ? 'true' : null, 'aria-controls': e.ariaControls || null, 'aria-label': dt(e.labelPage) ? e.labelPage(n.number) : ''.concat(e.labelPage, ' ').concat(n.number), 'aria-checked': f ? null : a ? 'true' : 'false', 'aria-current': f && a ? 'page' : null, 'aria-posinset': n.number, 'aria-setsize': r, tabindex: f ? null : s,
          }; const c = Yn(e.makePage(n.number)); const p = {
            page: n.number, index: n.number - 1, content: c, active: a, disabled: o,
          }; const v = t(o ? 'span' : f ? _r : 'button', {
            props: o || !f ? {} : e.linkProps(n.number), staticClass: 'page-link', class: { 'flex-grow-1': !f && !o && u }, attrs: l, on: o ? {} : { '!click': function (t) { e.onClick(n.number, t); }, keydown: gm },
          }, [e.normalizeSlot('page', p) || c]); return t('li', {
            key: 'page-'.concat(n.number),
            staticClass: 'page-item',
            class: [{
              disabled: o, active: a, 'flex-fill': u, 'd-flex': u && !f && !o,
            }, n.classes, e.pageClass],
            attrs: { role: f ? null : 'presentation' },
          }, [v]);
        }; let m = t(); this.firstNumber || this.hideGotoEndButtons || (m = p(1, this.labelFirstPage, 'first-text', this.firstText, this.firstClass, 1, 'pagination-goto-first')), n.push(m), n.push(p(c - 1, this.labelPrevPage, 'prev-text', this.prevText, this.prevClass, 1, 'pagination-goto-prev')), n.push(this.firstNumber && i[0] !== 1 ? b({ number: 1 }, 0) : t()), n.push(s ? v(!1) : t()), this.pageList.forEach(((t, r) => { const o = s && e.firstNumber && i[0] !== 1 ? 1 : 0; n.push(b(t, r + o)); })), n.push(l ? v(!0) : t()), n.push(this.lastNumber && i[i.length - 1] !== r ? b({ number: r }, -1) : t()), n.push(p(c + 1, this.labelNextPage, 'next-text', this.nextText, this.nextClass, r, 'pagination-goto-next')); let y = t(); this.lastNumber || this.hideGotoEndButtons || (y = p(r, this.labelLastPage, 'last-text', this.lastText, this.lastClass, r, 'pagination-goto-last')), n.push(y); const g = t('ul', {
          ref: 'ul', staticClass: 'pagination', class: ['b-pagination', this.btnSize, this.alignment, this.styleClass], attrs: { role: f ? null : 'menubar', 'aria-disabled': o ? 'true' : 'false', 'aria-label': f ? null : this.ariaLabel || null }, on: f ? {} : { keydown: this.handleKeyNav },
        }, n); return f ? t('nav', { attrs: { 'aria-disabled': o ? 'true' : null, 'aria-hidden': o ? 'true' : 'false', 'aria-label': f && this.ariaLabel || null } }, [g]) : g;
      },
    }; const Sm = 'BPagination'; const xm = 20; const Tm = 0; const km = {
      size: { type: String, default() { return Qt(Sm, 'size'); } }, perPage: { type: [Number, String], default: xm }, totalRows: { type: [Number, String], default: Tm }, ariaControls: { type: String },
    }; const Pm = function (t) { return mn(ie(t) || xm, 1); }; const jm = function (t) { return mn(ie(t) || Tm, 0); }; const Cm = i.extend({
      name: Sm, mixins: [Om], props: km, computed: { numberOfPages() { const t = gn(jm(this.totalRows) / Pm(this.perPage)); return t < 1 ? 1 : t; }, pageSizeNumberOfPages() { return { perPage: Pm(this.perPage), totalRows: jm(this.totalRows), numberOfPages: this.numberOfPages }; } }, watch: { pageSizeNumberOfPages(t, e) { ft(e) || (t.perPage !== e.perPage && t.totalRows === e.totalRows || t.numberOfPages !== e.numberOfPages && this.currentPage > t.numberOfPages) && (this.currentPage = 1), this.localNumberOfPages = t.numberOfPages; } }, created() { const t = this; this.localNumberOfPages = this.numberOfPages; const e = ie(this.value, 0); e > 0 ? this.currentPage = e : this.$nextTick((() => { t.currentPage = 0; })); }, mounted() { this.localNumberOfPages = this.numberOfPages; }, methods: { onClick(t, e) { const n = this; t > this.numberOfPages ? t = this.numberOfPages : t < 1 && (t = 1), this.currentPage = t, this.$emit('change', this.currentPage), this.$nextTick((() => { const t = e.target; ge(t) && n.$el.contains(t) ? Ve(t) : n.focusCurrent(); })); }, makePage(t) { return t; }, linkProps() { return {}; } },
    }); const _m = zt({ components: { BPagination: Cm } }); const Bm = 'BPaginationNav'; const Dm = function (t) { return mn(ie(t, 0), 1); }; const Em = {
      size: { type: String, default() { return Qt(Bm, 'size'); } }, numberOfPages: { type: [Number, String], default: 1, validator(t) { const e = ie(t, 0); return !(e < 1) || (kt('Prop "number-of-pages" must be a number greater than "0"', Bm), !1); } }, baseUrl: { type: String, default: '/' }, useRouter: { type: Boolean, default: !1 }, linkGen: { type: Function }, pageGen: { type: Function }, pages: { type: Array }, noPageDetect: { type: Boolean, default: !1 }, activeClass: { type: String }, exact: { type: Boolean, default: !1 }, exactActiveClass: { type: String }, noPrefetch: { type: Boolean, default: !1 },
    }; const $m = i.extend({
      name: Bm,
      mixins: [Om],
      props: Em,
      computed: { isNav() { return !0; }, computedValue() { const t = ie(this.value, 0); return t < 1 ? null : t; } },
      watch: { numberOfPages() { const t = this; this.$nextTick((() => { t.setNumberOfPages(); })); }, pages() { const t = this; this.$nextTick((() => { t.setNumberOfPages(); })); } },
      created() { this.setNumberOfPages(); },
      mounted() { const t = this; this.$router && this.$watch('$route', (() => { t.$nextTick((() => { he((() => { t.guessCurrentPage(); })); })); })); },
      methods: {
        setNumberOfPages() { const t = this; a(this.pages) && this.pages.length > 0 ? this.localNumberOfPages = this.pages.length : this.localNumberOfPages = Dm(this.numberOfPages), this.$nextTick((() => { t.guessCurrentPage(); })); },
        onClick(t, e) { const n = this; t !== this.currentPage && (he((() => { n.currentPage = t, n.$emit('change', t); })), this.$nextTick((() => { const t = e.currentTarget || e.target; ze(t); }))); },
        getPageInfo(t) { if (!a(this.pages) || this.pages.length === 0 || ct(this.pages[t - 1])) { const e = ''.concat(this.baseUrl).concat(t); return { link: this.useRouter ? { path: e } : e, text: Yn(t) }; } const n = this.pages[t - 1]; if (S(n)) { const r = n.link; return { link: S(r) ? r : this.useRouter ? { path: r } : r, text: Yn(n.text || t) }; } return { link: Yn(n), text: Yn(t) }; },
        makePage(t) { const e = this.getPageInfo(t); return this.pageGen && dt(this.pageGen) ? this.pageGen(t, e) : e.text; },
        makeLink(t) { const e = this.getPageInfo(t); return this.linkGen && dt(this.linkGen) ? this.linkGen(t, e) : e.link; },
        linkProps(t) {
          const e = this.makeLink(t); const n = {
            target: this.target || null, rel: this.rel || null, disabled: this.disabled, exact: this.exact, activeClass: this.activeClass, exactActiveClass: this.exactActiveClass, append: this.append, replace: this.replace, noPrefetch: this.noPrefetch,
          }; return this.useRouter || S(e) ? n.to = e : n.href = e, n;
        },
        resolveLink() { let t; const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; try { t = document.createElement('a'), t.href = fr({ to: e }, 'a', '/', '/'), document.body.appendChild(t); const n = t; const r = n.pathname; const i = n.hash; const o = n.search; return document.body.removeChild(t), { path: r, hash: i, query: sr(o) }; } catch (a) { try { t && t.parentNode && t.parentNode.removeChild(t); } catch (a) {} return {}; } },
        resolveRoute() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; try { const e = this.$router.resolve(t, this.$route).route; return { path: e.path, hash: e.hash, query: e.query }; } catch (n) { return {}; } },
        guessCurrentPage() { let t = this.computedValue; const e = this.$router; const n = this.$route; if (!this.noPageDetect && !t && (z.j || !z.j && e)) for (let r = e && n ? { path: n.path, hash: n.hash, query: n.query } : {}, i = z.j ? window.location || document.location : null, o = i ? { path: i.pathname, hash: i.hash, query: sr(i.search) } : {}, a = 1; !t && a <= this.localNumberOfPages; a++) { const s = this.makeLink(a); t = e && (S(s) || this.useRouter) ? ko(this.resolveRoute(s), r) ? a : null : z.j ? ko(this.resolveLink(s), o) ? a : null : -1; } this.currentPage = t > 0 ? t : 0; },
      },
    }); const Am = zt({ components: { BPaginationNav: $m } }); const Im = 'BVPopper'; const Fm = {
      AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left', TOPLEFT: 'top', TOPRIGHT: 'top', RIGHTTOP: 'right', RIGHTBOTTOM: 'right', BOTTOMLEFT: 'bottom', BOTTOMRIGHT: 'bottom', LEFTTOP: 'left', LEFTBOTTOM: 'left',
    }; const Lm = {
      AUTO: 0, TOPLEFT: -1, TOP: 0, TOPRIGHT: 1, RIGHTTOP: -1, RIGHT: 0, RIGHTBOTTOM: 1, BOTTOMLEFT: -1, BOTTOM: 0, BOTTOMRIGHT: 1, LEFTTOP: -1, LEFT: 0, LEFTBOTTOM: 1,
    }; const Rm = i.extend({
      name: Im,
      props: {
        target: { type: [rt, it] }, placement: { type: String, default: 'top' }, fallbackPlacement: { type: [String, Array], default: 'flip' }, offset: { type: Number, default: 0 }, boundary: { type: [String, rt], default: 'scrollParent' }, boundaryPadding: { type: Number, default: 5 }, arrowPadding: { type: Number, default: 6 },
      },
      data() { return { noFade: !1, localShow: !0, attachment: this.getAttachment(this.placement) }; },
      computed: {
        templateType() { return 'unknown'; },
        popperConfig() {
          const t = this; const e = this.placement; return {
            placement: this.getAttachment(e),
            modifiers: {
              offset: { offset: this.getOffset(e) }, flip: { behavior: this.fallbackPlacement }, arrow: { element: '.arrow' }, preventOverflow: { padding: this.boundaryPadding, boundariesElement: this.boundary },
            },
            onCreate(e) { e.originalPlacement !== e.placement && t.popperPlacementChange(e); },
            onUpdate(e) { t.popperPlacementChange(e); },
          };
        },
      },
      created() { const t = this; this.$_popper = null, this.localShow = !0, this.$on('show', ((e) => { t.popperCreate(e); })), this.$on('hidden', (() => { t.$nextTick(t.$destroy); })), this.$parent.$once('hook:destroyed', this.$destroy); },
      beforeMount() { this.attachment = this.getAttachment(this.placement); },
      mounted() {},
      updated() { this.popperUpdate(); },
      beforeDestroy() { this.popperDestroy(); },
      destroyed() { const t = this.$el; t && t.parentNode && t.parentNode.removeChild(t); },
      methods: {
        hide() { this.localShow = !1; }, getAttachment(t) { return Fm[String(t).toUpperCase()] || 'auto'; }, getOffset(t) { if (!this.offset) { const e = this.$refs.arrow || xe('.arrow', this.$el); const n = oe(Fe(e).width, 0) + oe(this.arrowPadding, 0); switch (Lm[String(t).toUpperCase()] || 0) { case 1: return '+50%p - '.concat(n, 'px'); case -1: return '-50%p + '.concat(n, 'px'); default: return 0; } } return this.offset; }, popperCreate(t) { this.popperDestroy(), this.$_popper = new uc.a(this.target, t, this.popperConfig); }, popperDestroy() { this.$_popper && this.$_popper.destroy(), this.$_popper = null; }, popperUpdate() { this.$_popper && this.$_popper.scheduleUpdate(); }, popperPlacementChange(t) { this.attachment = this.getAttachment(t.placement); }, renderTemplate(t) { return t('div'); },
      },
      render(t) {
        const e = this; return t(Qe, {
          props: { appear: !0, noFade: this.noFade },
          on: {
            beforeEnter(t) { return e.$emit('show', t); }, afterEnter(t) { return e.$emit('shown', t); }, beforeLeave(t) { return e.$emit('hide', t); }, afterLeave(t) { return e.$emit('hidden', t); },
          },
        }, [this.localShow ? this.renderTemplate(t) : t()]);
      },
    }); function Mm(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Nm(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Mm(Object(n), !0).forEach(((e) => { Vm(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mm(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Vm(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const zm = 'BVTooltipTemplate'; const Hm = i.extend({
      name: zm,
      extends: Rm,
      mixins: [pv],
      props: { id: { type: String }, html: { type: Boolean } },
      data() {
        return {
          title: '', content: '', variant: null, customClass: null, interactive: !0,
        };
      },
      computed: {
        templateType() { return 'tooltip'; },
        templateClasses() { let t; return [(t = { noninteractive: !this.interactive }, Vm(t, 'b-'.concat(this.templateType, '-').concat(this.variant), this.variant), Vm(t, 'bs-'.concat(this.templateType, '-').concat(this.attachment), this.attachment), t), this.customClass]; },
        templateAttributes() { return Nm({ id: this.id, role: 'tooltip', tabindex: '-1' }, this.scopedStyleAttrs); },
        templateListeners() {
          const t = this; return {
            mouseenter(e) { t.$emit('mouseenter', e); }, mouseleave(e) { t.$emit('mouseleave', e); }, focusin(e) { t.$emit('focusin', e); }, focusout(e) { t.$emit('focusout', e); },
          };
        },
      },
      methods: {
        renderTemplate(t) {
          const e = dt(this.title) ? this.title({}) : ft(this.title) ? t() : this.title; const n = this.html && !dt(this.title) ? { innerHTML: this.title } : {}; return t('div', {
            staticClass: 'tooltip b-tooltip', class: this.templateClasses, attrs: this.templateAttributes, on: this.templateListeners,
          }, [t('div', { ref: 'arrow', staticClass: 'arrow' }), t('div', { staticClass: 'tooltip-inner', domProps: n }, [e])]);
        },
      },
    }); function Gm(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Um(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Gm(Object(n), !0).forEach(((e) => { Wm(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gm(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Wm(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const qm = 'BVTooltip'; const Ym = '.modal-content'; const Km = 'bv::modal::hidden'; const Xm = '.b-sidebar'; const Jm = [Ym, Xm].join(', '); const Zm = 'dropdown'; const Qm = '.dropdown-menu.show'; const ty = {
      title: '', content: '', variant: null, customClass: null, triggers: '', placement: 'auto', fallbackPlacement: 'flip', target: null, container: null, noFade: !1, boundary: 'scrollParent', boundaryPadding: 5, offset: 0, delay: 0, arrowPadding: 6, interactive: !0, disabled: !1, id: null, html: !1,
    }; const ey = i.extend({
      name: qm,
      props: {},
      data() { return Um(Um({}, ty), {}, { activeTrigger: { hover: !1, click: !1, focus: !1 }, localShow: !1 }); },
      computed: {
        templateType() { return 'tooltip'; },
        computedId() { return this.id || '__bv_'.concat(this.templateType, '_').concat(this._uid, '__'); },
        computedDelay() { const t = { show: 0, hide: 0 }; return x(this.delay) ? (t.show = mn(ie(this.delay.show, 0), 0), t.hide = mn(ie(this.delay.hide, 0), 0)) : (vt(this.delay) || pt(this.delay)) && (t.show = t.hide = mn(ie(this.delay, 0), 0)), t; },
        computedTriggers() {
          return l(this.triggers).filter(Boolean).join(' ').trim()
            .toLowerCase()
            .split(/\s+/)
            .sort();
        },
        isWithActiveTrigger() { for (const t in this.activeTrigger) if (this.activeTrigger[t]) return !0; return !1; },
        computedTemplateData() {
          return {
            title: this.title, content: this.content, variant: this.variant, customClass: this.customClass, noFade: this.noFade, interactive: this.interactive,
          };
        },
      },
      watch: { computedTriggers(t, e) { const n = this; ko(t, e) || this.$nextTick((() => { n.unListen(), e.forEach(((e) => { s(t, e) || n.activeTrigger[e] && (n.activeTrigger[e] = !1); })), n.listen(); })); }, computedTemplateData() { this.handleTemplateUpdate(); }, disabled(t) { t ? this.disable() : this.enable(); } },
      created() { const t = this; this.$_tip = null, this.$_hoverTimeout = null, this.$_hoverState = '', this.$_visibleInterval = null, this.$_enabled = !this.disabled, this.$_noop = Js.bind(this), this.$parent && this.$parent.$once('hook:beforeDestroy', this.$destroy), this.$nextTick((() => { const e = t.getTarget(); e && Pe(document.body, e) ? (t.scopeId = dv(t.$parent), t.listen()) : kt('Unable to find target element in document.', t.templateType); })); },
      updated() { this.$nextTick(this.handleTemplateUpdate); },
      deactivated() { this.forceHide(); },
      beforeDestroy() { this.unListen(), this.setWhileOpenListeners(!1), this.clearHoverTimeout(), this.clearVisibilityInterval(), this.destroyTemplate(), this.$_noop = null; },
      methods: {
        getTemplate() { return Hm; },
        updateData() { const t = this; const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; let n = !1; g(ty).forEach(((r) => { ct(e[r]) || t[r] === e[r] || (t[r] = e[r], r === 'title' && (n = !0)); })), n && this.localShow && this.fixTitle(); },
        createTemplateAndShow() {
          const t = this.getContainer(); const e = this.getTemplate(); const n = this.$_tip = new e({
            parent: this,
            propsData: {
              id: this.computedId, html: this.html, placement: this.placement, fallbackPlacement: this.fallbackPlacement, target: this.getPlacementTarget(), boundary: this.getBoundary(), offset: ie(this.offset, 0), arrowPadding: ie(this.arrowPadding, 0), boundaryPadding: ie(this.boundaryPadding, 0),
            },
          }); this.handleTemplateUpdate(), n.$once('show', this.onTemplateShow), n.$once('shown', this.onTemplateShown), n.$once('hide', this.onTemplateHide), n.$once('hidden', this.onTemplateHidden), n.$once('hook:destroyed', this.destroyTemplate), n.$on('focusin', this.handleEvent), n.$on('focusout', this.handleEvent), n.$on('mouseenter', this.handleEvent), n.$on('mouseleave', this.handleEvent), n.$mount(t.appendChild(document.createElement('div')));
        },
        hideTemplate() { this.$_tip && this.$_tip.hide(), this.clearActiveTriggers(), this.$_hoverState = ''; },
        destroyTemplate() { this.setWhileOpenListeners(!1), this.clearHoverTimeout(), this.$_hoverState = '', this.clearActiveTriggers(), this.localPlacementTarget = null; try { this.$_tip && this.$_tip.$destroy(); } catch (t) {} this.$_tip = null, this.removeAriaDescribedby(), this.restoreTitle(), this.localShow = !1; },
        getTemplateElement() { return this.$_tip ? this.$_tip.$el : null; },
        handleTemplateUpdate() { const t = this; const e = this.$_tip; if (e) { const n = ['title', 'content', 'variant', 'customClass', 'noFade', 'interactive']; n.forEach(((n) => { e[n] !== t[n] && (e[n] = t[n]); })); } },
        show() { const t = this.getTarget(); if (t && Pe(document.body, t) && ge(t) && !this.dropdownOpen() && (!ft(this.title) && this.title !== '' || !ft(this.content) && this.content !== '') && !this.$_tip && !this.localShow) { this.localShow = !0; const e = this.buildEvent('show', { cancelable: !0 }); this.emitEvent(e), e.defaultPrevented ? this.destroyTemplate() : (this.fixTitle(), this.addAriaDescribedby(), this.createTemplateAndShow()); } },
        hide() { const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; const e = this.getTemplateElement(); if (e && this.localShow) { const n = this.buildEvent('hide', { cancelable: !t }); this.emitEvent(n), n.defaultPrevented || this.hideTemplate(); } else this.restoreTitle(); },
        forceHide() { const t = this.getTemplateElement(); t && this.localShow && (this.setWhileOpenListeners(!1), this.clearHoverTimeout(), this.$_hoverState = '', this.clearActiveTriggers(), this.$_tip && (this.$_tip.noFade = !0), this.hide(!0)); },
        enable() { this.$_enabled = !0, this.emitEvent(this.buildEvent('enabled')); },
        disable() { this.$_enabled = !1, this.emitEvent(this.buildEvent('disabled')); },
        onTemplateShow() { this.setWhileOpenListeners(!0); },
        onTemplateShown() { const t = this.$_hoverState; this.$_hoverState = '', t === 'out' && this.leave(null), this.emitEvent(this.buildEvent('shown')); },
        onTemplateHide() { this.setWhileOpenListeners(!1); },
        onTemplateHidden() { this.destroyTemplate(), this.emitEvent(this.buildEvent('hidden')); },
        getTarget() { let t = this.target ? this.target.$el || this.target : null; return t = pt(t) ? je(t.replace(/^#/, '')) : t, t = dt(t) ? t() : t, be(t) ? t : null; },
        getPlacementTarget() { return this.getTarget(); },
        getTargetId() { const t = this.getTarget(); return t && t.id ? t.id : null; },
        getContainer() { const t = !!this.container && (this.container.$el || this.container); const e = document.body; const n = this.getTarget(); return !1 === t ? ke(Jm, n) || e : pt(t) && je(t.replace(/^#/, '')) || e; },
        getBoundary() { return this.boundary ? this.boundary.$el || this.boundary : 'scrollParent'; },
        isInModal() { const t = this.getTarget(); return t && ke(Ym, t); },
        isDropdown() { const t = this.getTarget(); return t && Be(t, Zm); },
        dropdownOpen() { const t = this.getTarget(); return this.isDropdown() && t && xe(Qm, t); },
        clearHoverTimeout() { this.$_hoverTimeout && (clearTimeout(this.$_hoverTimeout), this.$_hoverTimeout = null); },
        clearVisibilityInterval() { this.$_visibleInterval && (clearInterval(this.$_visibleInterval), this.$_visibleInterval = null); },
        clearActiveTriggers() { for (const t in this.activeTrigger) this.activeTrigger[t] = !1; },
        addAriaDescribedby() { const t = this.getTarget(); let e = $e(t, 'aria-describedby') || ''; e = e.split(/\s+/).concat(this.computedId).join(' ').trim(), De(t, 'aria-describedby', e); },
        removeAriaDescribedby() { const t = this; const e = this.getTarget(); let n = $e(e, 'aria-describedby') || ''; n = n.split(/\s+/).filter(((e) => e !== t.computedId)).join(' ').trim(), n ? De(e, 'aria-describedby', n) : Ee(e, 'aria-describedby'); },
        fixTitle() { const t = this.getTarget(); t && $e(t, 'title') && (De(t, 'data-original-title', $e(t, 'title') || ''), De(t, 'title', '')); },
        restoreTitle() { const t = this.getTarget(); t && Ae(t, 'data-original-title') && (De(t, 'title', $e(t, 'data-original-title') || ''), Ee(t, 'data-original-title')); },
        buildEvent(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return new pc(t, Um({
            cancelable: !1, target: this.getTarget(), relatedTarget: this.getTemplateElement() || null, componentId: this.computedId, vueTarget: this,
          }, e));
        },
        emitEvent(t) { const e = t.type; const n = this.$root; n && n.$emit && n.$emit('bv::'.concat(this.templateType, '::').concat(e), t), this.$emit(e, t); },
        listen() { const t = this; const e = this.getTarget(); e && (this.setRootListener(!0), this.computedTriggers.forEach(((n) => { n === 'click' ? al(e, 'click', t.handleEvent, il) : n === 'focus' ? (al(e, 'focusin', t.handleEvent, il), al(e, 'focusout', t.handleEvent, il)) : n === 'blur' ? al(e, 'focusout', t.handleEvent, il) : n === 'hover' && (al(e, 'mouseenter', t.handleEvent, il), al(e, 'mouseleave', t.handleEvent, il)); }), this)); },
        unListen() { const t = this; const e = ['click', 'focusin', 'focusout', 'mouseenter', 'mouseleave']; const n = this.getTarget(); this.setRootListener(!1), e.forEach(((e) => { n && sl(n, e, t.handleEvent, il); }), this); },
        setRootListener(t) {
          const e = this.$root; if (e) {
            const n = t ? '$on' : '$off'; const
              r = this.templateType; e[n]('bv::hide::'.concat(r), this.doHide), e[n]('bv::show::'.concat(r), this.doShow), e[n]('bv::disable::'.concat(r), this.doDisable), e[n]('bv::enable::'.concat(r), this.doEnable);
          }
        },
        setWhileOpenListeners(t) { this.setModalListener(t), this.setDropdownListener(t), this.visibleCheck(t), this.setOnTouchStartListener(t); },
        visibleCheck(t) { const e = this; this.clearVisibilityInterval(); const n = this.getTarget(); const r = this.getTemplateElement(); t && (this.$_visibleInterval = setInterval((() => { !r || !e.localShow || n.parentNode && ge(n) || e.forceHide(); }), 100)); },
        setModalListener(t) { this.isInModal() && this.$root[t ? '$on' : '$off'](Km, this.forceHide); },
        setOnTouchStartListener(t) { const e = this; 'ontouchstart' in document.documentElement && o(document.body.children).forEach(((n) => { ll(t, n, 'mouseover', e.$_noop); })); },
        setDropdownListener(t) { const e = this.getTarget(); e && this.$root && this.isDropdown && e.__vue__ && e.__vue__[t ? '$on' : '$off']('shown', this.forceHide); },
        handleEvent(t) { const e = this.getTarget(); if (e && !we(e) && this.$_enabled && !this.dropdownOpen()) { const n = t.type; const r = this.computedTriggers; if (n === 'click' && s(r, 'click')) this.click(t); else if (n === 'mouseenter' && s(r, 'hover')) this.enter(t); else if (n === 'focusin' && s(r, 'focus')) this.enter(t); else if (n === 'focusout' && (s(r, 'focus') || s(r, 'blur')) || n === 'mouseleave' && s(r, 'hover')) { const i = this.getTemplateElement(); const o = t.target; const a = t.relatedTarget; if (i && Pe(i, o) && Pe(e, a) || i && Pe(e, o) && Pe(i, a) || i && Pe(i, o) && Pe(i, a) || Pe(e, o) && Pe(e, a)) return; this.leave(t); } } },
        doHide(t) { t && this.getTargetId() !== t && this.computedId !== t || this.forceHide(); },
        doShow(t) { t && this.getTargetId() !== t && this.computedId !== t || this.show(); },
        doDisable(t) { t && this.getTargetId() !== t && this.computedId !== t || this.disable(); },
        doEnable(t) { t && this.getTargetId() !== t && this.computedId !== t || this.enable(); },
        click(t) { this.$_enabled && !this.dropdownOpen() && (Ve(t.currentTarget), this.activeTrigger.click = !this.activeTrigger.click, this.isWithActiveTrigger ? this.enter(null) : this.leave(null)); },
        toggle() { this.$_enabled && !this.dropdownOpen() && (this.localShow ? this.leave(null) : this.enter(null)); },
        enter() { const t = this; const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; e && (this.activeTrigger[e.type === 'focusin' ? 'focus' : 'hover'] = !0), this.localShow || this.$_hoverState === 'in' ? this.$_hoverState = 'in' : (this.clearHoverTimeout(), this.$_hoverState = 'in', this.computedDelay.show ? (this.fixTitle(), this.$_hoverTimeout = setTimeout((() => { t.$_hoverState === 'in' ? t.show() : t.localShow || t.restoreTitle(); }), this.computedDelay.show)) : this.show()); },
        leave() { const t = this; const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; e && (this.activeTrigger[e.type === 'focusout' ? 'focus' : 'hover'] = !1, e.type === 'focusout' && s(this.computedTriggers, 'blur') && (this.activeTrigger.click = !1, this.activeTrigger.hover = !1)), this.isWithActiveTrigger || (this.clearHoverTimeout(), this.$_hoverState = 'out', this.computedDelay.hide ? this.$_hoverTimeout = setTimeout((() => { t.$_hoverState === 'out' && t.hide(); }), this.computedDelay.hide) : this.hide()); },
      },
    }); const ny = 'BTooltip'; const ry = i.extend({
      name: ny,
      props: {
        title: { type: String }, target: { type: [String, rt, it, Function, Object], required: !0 }, triggers: { type: [String, Array], default: 'hover focus' }, placement: { type: String, default: 'top' }, fallbackPlacement: { type: [String, Array], default: 'flip', validator(t) { return a(t) && t.every(((t) => pt(t))) || s(['flip', 'clockwise', 'counterclockwise'], t); } }, variant: { type: String, default() { return Qt(ny, 'variant'); } }, customClass: { type: String, default() { return Qt(ny, 'customClass'); } }, delay: { type: [Number, Object, String], default() { return Qt(ny, 'delay'); } }, boundary: { type: [String, rt, Object], default() { return Qt(ny, 'boundary'); } }, boundaryPadding: { type: [Number, String], default() { return Qt(ny, 'boundaryPadding'); } }, offset: { type: [Number, String], default: 0 }, noFade: { type: Boolean, default: !1 }, container: { type: [String, rt, Object] }, show: { type: Boolean, default: !1 }, noninteractive: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, id: { type: String },
      },
      data() { return { localShow: this.show, localTitle: '', localContent: '' }; },
      computed: {
        templateData() {
          return {
            title: this.localTitle, content: this.localContent, target: this.target, triggers: this.triggers, placement: this.placement, fallbackPlacement: this.fallbackPlacement, variant: this.variant, customClass: this.customClass, container: this.container, boundary: this.boundary, boundaryPadding: this.boundaryPadding, delay: this.delay, offset: this.offset, noFade: this.noFade, interactive: !this.noninteractive, disabled: this.disabled, id: this.id,
          };
        },
        templateTitleContent() { return { title: this.title, content: this.content }; },
      },
      watch: {
        show(t, e) { t !== e && t !== this.localShow && this.$_bv_toolpop && (t ? this.$_bv_toolpop.show() : this.$_bv_toolpop.forceHide()); }, disabled(t) { t ? this.doDisable() : this.doEnable(); }, localShow(t) { this.$emit('update:show', t); }, templateData() { const t = this; this.$nextTick((() => { t.$_bv_toolpop && t.$_bv_toolpop.updateData(t.templateData); })); }, templateTitleContent() { this.$nextTick(this.updateContent); },
      },
      created() { this.$_bv_toolpop = null; },
      updated() { this.$nextTick(this.updateContent); },
      beforeDestroy() { this.$off('open', this.doOpen), this.$off('close', this.doClose), this.$off('disable', this.doDisable), this.$off('enable', this.doEnable), this.$_bv_toolpop && this.$_bv_toolpop.$destroy(), this.$_bv_toolpop = null; },
      mounted() { const t = this; this.$nextTick((() => { const e = t.getComponent(); t.updateContent(); const n = dv(t) || dv(t.$parent); const r = t.$_bv_toolpop = new e({ parent: t, _scopeId: n || void 0 }); r.updateData(t.templateData), r.$on('show', t.onShow), r.$on('shown', t.onShown), r.$on('hide', t.onHide), r.$on('hidden', t.onHidden), r.$on('disabled', t.onDisabled), r.$on('enabled', t.onEnabled), t.disabled && t.doDisable(), t.$on('open', t.doOpen), t.$on('close', t.doClose), t.$on('disable', t.doDisable), t.$on('enable', t.doEnable), t.localShow && t.$_bv_toolpop && t.$_bv_toolpop.show(); })); },
      methods: {
        getComponent() { return ey; }, updateContent() { this.setTitle(this.$scopedSlots.default || this.title); }, setTitle(t) { t = ft(t) ? '' : t, this.localTitle !== t && (this.localTitle = t); }, setContent(t) { t = ft(t) ? '' : t, this.localContent !== t && (this.localContent = t); }, onShow(t) { this.$emit('show', t), t && (this.localShow = !t.defaultPrevented); }, onShown(t) { this.localShow = !0, this.$emit('shown', t); }, onHide(t) { this.$emit('hide', t); }, onHidden(t) { this.$emit('hidden', t), this.localShow = !1; }, onDisabled(t) { t && t.type === 'disabled' && (this.$emit('update:disabled', !0), this.$emit('disabled', t)); }, onEnabled(t) { t && t.type === 'enabled' && (this.$emit('update:disabled', !1), this.$emit('enabled', t)); }, doOpen() { !this.localShow && this.$_bv_toolpop && this.$_bv_toolpop.show(); }, doClose() { this.localShow && this.$_bv_toolpop && this.$_bv_toolpop.hide(); }, doDisable() { this.$_bv_toolpop && this.$_bv_toolpop.disable(); }, doEnable() { this.$_bv_toolpop && this.$_bv_toolpop.enable(); },
      },
      render(t) { return t(); },
    }); const iy = 'BVPopoverTemplate'; const oy = i.extend({
      name: iy,
      extends: Hm,
      computed: { templateType() { return 'popover'; } },
      methods: {
        renderTemplate(t) {
          const e = dt(this.title) ? this.title({}) : this.title; const n = dt(this.content) ? this.content({}) : this.content; const r = this.html && !dt(this.title) ? { innerHTML: this.title } : {}; const i = this.html && !dt(this.content) ? { innerHTML: this.content } : {}; return t('div', {
            staticClass: 'popover b-popover', class: this.templateClasses, attrs: this.templateAttributes, on: this.templateListeners,
          }, [t('div', { ref: 'arrow', staticClass: 'arrow' }), ft(e) || e === '' ? t() : t('h3', { staticClass: 'popover-header', domProps: r }, [e]), ft(n) || n === '' ? t() : t('div', { staticClass: 'popover-body', domProps: i }, [n])]);
        },
      },
    }); const ay = 'BVPopover'; const sy = i.extend({
      name: ay, extends: ey, computed: { templateType() { return 'popover'; } }, methods: { getTemplate() { return oy; } },
    }); const ly = 'BPopover'; const cy = i.extend({
      name: ly,
      extends: ry,
      inheritAttrs: !1,
      props: {
        title: { type: String }, content: { type: String }, triggers: { type: [String, Array], default: 'click' }, placement: { type: String, default: 'right' }, variant: { type: String, default() { return Qt(ly, 'variant'); } }, customClass: { type: String, default() { return Qt(ly, 'customClass'); } }, delay: { type: [Number, Object, String], default() { return Qt(ly, 'delay'); } }, boundary: { type: [String, rt, Object], default() { return Qt(ly, 'boundary'); } }, boundaryPadding: { type: [Number, String], default() { return Qt(ly, 'boundaryPadding'); } },
      },
      methods: { getComponent() { return sy; }, updateContent() { this.setContent(this.$scopedSlots.default || this.content), this.setTitle(this.$scopedSlots.title || this.title); } },
    }); function uy(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function fy(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? uy(Object(n), !0).forEach(((e) => { dy(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : uy(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function dy(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const hy = '__BV_Popover__'; const py = 'click'; const vy = {
      focus: !0, hover: !0, click: !0, blur: !0, manual: !0,
    }; const by = /^html$/i; const my = /^nofade$/i; const yy = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i; const gy = /^(window|viewport|scrollParent)$/i; const wy = /^d\d+$/i; const Oy = /^ds\d+$/i; const Sy = /^dh\d+$/i; const xy = /^o-?\d+$/i; const Ty = /^v-.+$/i; const ky = /\s+/; const Py = function (t, e) {
      const n = 'BPopover'; let r = {
        title: void 0, content: void 0, trigger: '', placement: 'right', fallbackPlacement: 'flip', container: !1, animation: !0, offset: 0, disabled: !1, id: null, html: !1, delay: Qt(n, 'delay'), boundary: String(Qt(n, 'boundary')), boundaryPadding: ie(Qt(n, 'boundaryPadding'), 0), variant: Qt(n, 'variant'), customClass: Qt(n, 'customClass'),
      }; if (pt(t.value) || vt(t.value) || dt(t.value) ? r.content = t.value : x(t.value) && (r = fy(fy({}, r), t.value)), t.arg && (r.container = '#'.concat(t.arg)), ct(r.title)) { const i = e.data || {}; r.title = i.attrs && !ft(i.attrs.title) ? i.attrs.title : void 0; }x(r.delay) || (r.delay = { show: ie(r.delay, 0), hide: ie(r.delay, 0) }), g(t.modifiers).forEach(((t) => { if (by.test(t))r.html = !0; else if (my.test(t))r.animation = !1; else if (yy.test(t))r.placement = t; else if (gy.test(t))t = t === 'scrollparent' ? 'scrollParent' : t, r.boundary = t; else if (wy.test(t)) { const e = ie(t.slice(1), 0); r.delay.show = e, r.delay.hide = e; } else Oy.test(t) ? r.delay.show = ie(t.slice(2), 0) : Sy.test(t) ? r.delay.hide = ie(t.slice(2), 0) : xy.test(t) ? r.offset = ie(t.slice(1), 0) : Ty.test(t) && (r.variant = t.slice(2) || null); })); const o = {}; return l(r.trigger || '').filter(V).join(' ').trim()
        .toLowerCase()
        .split(ky)
        .forEach(((t) => { vy[t] && (o[t] = !0); })), g(t.modifiers).forEach(((t) => { t = t.toLowerCase(), vy[t] && (o[t] = !0); })), r.trigger = g(o).join(' '), r.trigger === 'blur' && (r.trigger = 'focus'), r.trigger || (r.trigger = py), r;
    }; const jy = function (t, e, n) {
      if (z.j) {
        const r = Py(e, n); if (!t[hy]) { const i = n.context; t[hy] = new sy({ parent: i, _scopeId: dv(i, void 0) }), t[hy].__bv_prev_data__ = {}, t[hy].$on('show', (() => { const e = {}; dt(r.title) && (e.title = r.title(t)), dt(r.content) && (e.content = r.content(t)), g(e).length > 0 && t[hy].updateData(e); })); } const o = {
          title: r.title, content: r.content, triggers: r.trigger, placement: r.placement, fallbackPlacement: r.fallbackPlacement, variant: r.variant, customClass: r.customClass, container: r.container, boundary: r.boundary, delay: r.delay, offset: r.offset, noFade: !r.animation, id: r.id, disabled: r.disabled, html: r.html,
        }; const a = t[hy].__bv_prev_data__; if (t[hy].__bv_prev_data__ = o, !ko(o, a)) { const s = { target: t }; g(o).forEach(((e) => { o[e] !== a[e] && (s[e] = e !== 'title' && e !== 'content' || !dt(o[e]) ? o[e] : o[e](t)); })), t[hy].updateData(s); }
      }
    }; const Cy = function (t) { t[hy] && (t[hy].$destroy(), t[hy] = null), delete t[hy]; }; const _y = { bind(t, e, n) { jy(t, e, n); }, componentUpdated(t, e, n) { n.context.$nextTick((() => { jy(t, e, n); })); }, unbind(t) { Cy(t); } }; const By = zt({ directives: { VBPopover: _y } }); const Dy = zt({ components: { BPopover: cy }, plugins: { VBPopoverPlugin: By } }); const Ey = 'BProgressBar'; const $y = i.extend({
      name: Ey,
      mixins: [rn],
      inject: { bvProgress: { default() { return {}; } } },
      props: {
        value: { type: [Number, String], default: 0 }, label: { type: String }, labelHtml: { type: String }, max: { type: [Number, String], default: null }, precision: { type: [Number, String], default: null }, variant: { type: String, default() { return Qt(Ey, 'variant'); } }, striped: { type: Boolean, default: null }, animated: { type: Boolean, default: null }, showProgress: { type: Boolean, default: null }, showValue: { type: Boolean, default: null },
      },
      computed: {
        progressBarClasses() { return [this.computedVariant ? 'bg-'.concat(this.computedVariant) : '', this.computedStriped || this.computedAnimated ? 'progress-bar-striped' : '', this.computedAnimated ? 'progress-bar-animated' : '']; }, progressBarStyles() { return { width: `${this.computedValue / this.computedMax * 100}%` }; }, computedValue() { return oe(this.value, 0); }, computedMax() { const t = oe(this.max) || oe(this.bvProgress.max, 0); return t > 0 ? t : 100; }, computedPrecision() { return mn(ie(this.precision, ie(this.bvProgress.precision, 0)), 0); }, computedProgress() { const t = this.computedPrecision; const e = On(10, t); return ae(100 * e * this.computedValue / this.computedMax / e, t); }, computedVariant() { return this.variant || this.bvProgress.variant; }, computedStriped() { return ht(this.striped) ? this.striped : this.bvProgress.striped || !1; }, computedAnimated() { return ht(this.animated) ? this.animated : this.bvProgress.animated || !1; }, computedShowProgress() { return ht(this.showProgress) ? this.showProgress : this.bvProgress.showProgress || !1; }, computedShowValue() { return ht(this.showValue) ? this.showValue : this.bvProgress.showValue || !1; },
      },
      render(t) {
        let e = t(); return this.hasNormalizedSlot('default') ? e = this.normalizeSlot('default') : this.label || this.labelHtml ? e = t('span', { domProps: to(this.labelHtml, this.label) }) : this.computedShowProgress ? e = this.computedProgress : this.computedShowValue && (e = ae(this.computedValue, this.computedPrecision)), t('div', {
          staticClass: 'progress-bar',
          class: this.progressBarClasses,
          style: this.progressBarStyles,
          attrs: {
            role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': Yn(this.computedMax), 'aria-valuenow': ae(this.computedValue, this.computedPrecision),
          },
        }, [e]);
      },
    }); const Ay = 'BProgress'; const Iy = i.extend({
      name: Ay,
      mixins: [rn],
      provide() { return { bvProgress: this }; },
      props: {
        variant: { type: String, default() { return Qt(Ay, 'variant'); } }, striped: { type: Boolean, default: !1 }, animated: { type: Boolean, default: !1 }, height: { type: String }, precision: { type: [Number, String], default: 0 }, showProgress: { type: Boolean, default: !1 }, showValue: { type: Boolean, default: !1 }, max: { type: [Number, String], default: 100 }, value: { type: [Number, String], default: 0 },
      },
      computed: { progressHeight() { return { height: this.height || null }; } },
      render(t) {
        let e = this.normalizeSlot('default'); return e || (e = t($y, {
          props: {
            value: this.value, max: this.max, precision: this.precision, variant: this.variant, animated: this.animated, striped: this.striped, showProgress: this.showProgress, showValue: this.showValue,
          },
        })), t('div', { class: ['progress'], style: this.progressHeight }, [e]);
      },
    }); const Fy = zt({ components: { BProgress: Iy, BProgressBar: $y } }); function Ly(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Ry(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Ly(Object(n), !0).forEach(((e) => { My(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ly(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function My(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Ny = 'BSidebar'; const Vy = 'b-sidebar'; const zy = function (t, e) { const n = e.normalizeSlot('title', e.slotScope) || Yn(e.title) || null; return n ? t('strong', { attrs: { id: e.safeId('__title__') } }, [n]) : t('span'); }; const Hy = function (t, e) { if (e.noHeaderClose) return t(); const n = e.closeLabel; const r = e.textVariant; const i = e.hide; return t(ln, { ref: 'close-button', props: { ariaLabel: n, textVariant: r }, on: { click: i } }, [e.normalizeSlot('header-close') || t(Si)]); }; const Gy = function (t, e) { if (e.noHeader) return t(); const n = zy(t, e); const r = Hy(t, e); return t('header', { key: 'header', staticClass: ''.concat(Vy, '-header'), class: e.headerClass }, e.right ? [r, n] : [n, r]); }; const Uy = function (t, e) { return t('div', { key: 'body', staticClass: ''.concat(Vy, '-body'), class: e.bodyClass }, [e.normalizeSlot('default', e.slotScope)]); }; const Wy = function (t, e) { const n = e.normalizeSlot('footer', e.slotScope); return n ? t('footer', { key: 'footer', staticClass: ''.concat(Vy, '-footer'), class: e.footerClass }, [n]) : t(); }; const qy = function (t, e) { const n = Gy(t, e); return e.lazy && !e.isOpen ? n : [n, Uy(t, e), Wy(t, e)]; }; const Yy = function (t, e) { return e.backdrop ? t('div', { directives: [{ name: 'show', value: e.localShow }], staticClass: 'b-sidebar-backdrop', on: { click: e.onBackdropClick } }) : t(); }; const Ky = i.extend({
      name: Ny,
      mixins: [mr, na, Cl, rn],
      inheritAttrs: !1,
      model: { prop: 'visible', event: 'change' },
      props: {
        title: { type: String }, right: { type: Boolean, default: !1 }, bgVariant: { type: String, default() { return Qt(Ny, 'bgVariant'); } }, textVariant: { type: String, default() { return Qt(Ny, 'textVariant'); } }, shadow: { type: [Boolean, String], default() { return Qt(Ny, 'shadow'); } }, width: { type: String, default() { return Qt(Ny, 'width'); } }, zIndex: { type: [Number, String] }, ariaLabel: { type: String }, ariaLabelledby: { type: String }, closeLabel: { type: String }, tag: { type: String, default() { return Qt(Ny, 'tag'); } }, sidebarClass: { type: [String, Array, Object] }, headerClass: { type: [String, Array, Object] }, bodyClass: { type: [String, Array, Object] }, footerClass: { type: [String, Array, Object] }, backdrop: { type: Boolean, default: !1 }, noSlide: { type: Boolean, default: !1 }, noHeader: { type: Boolean, default: !1 }, noHeaderClose: { type: Boolean, default: !1 }, noCloseOnEsc: { type: Boolean, default: !1 }, noCloseOnBackdrop: { type: Boolean, default: !1 }, noCloseOnRouteChange: { type: Boolean, default: !1 }, lazy: { type: Boolean, default: !1 }, visible: { type: Boolean, default: !1 },
      },
      data() { return { localShow: !!this.visible, isOpen: !!this.visible }; },
      computed: {
        transitionProps() {
          return this.noSlide ? { css: !0 } : {
            css: !0, enterClass: '', enterActiveClass: 'slide', enterToClass: 'show', leaveClass: 'show', leaveActiveClass: 'slide', leaveToClass: '',
          };
        },
        slotScope() { return { visible: this.localShow, right: this.right, hide: this.hide }; },
        computedTile() { return this.normalizeSlot('title', this.slotScope) || Yn(this.title) || null; },
        titleId() { return this.computedTile ? this.safeId('__title__') : null; },
        computedAttrs() {
          return Ry(Ry({}, this.bvAttrs), {}, {
            id: this.safeId(), tabindex: '-1', role: 'dialog', 'aria-modal': this.backdrop ? 'true' : 'false', 'aria-hidden': this.localShow ? null : 'true', 'aria-label': this.ariaLabel || null, 'aria-labelledby': this.ariaLabelledby || this.titleId || null,
          });
        },
      },
      watch: { visible(t, e) { t !== e && (this.localShow = t); }, localShow(t, e) { t !== e && (this.emitState(t), this.$emit('change', t)); }, $route() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; this.noCloseOnRouteChange || t.fullPath === e.fullPath || this.hide(); } },
      created() { this.$_returnFocusEl = null; },
      mounted() { const t = this; this.listenOnRoot(Gl, this.handleToggle), this.listenOnRoot(ql, this.handleSync), this.$nextTick((() => { t.emitState(t.localShow); })); },
      activated() { this.emitSync(); },
      beforeDestroy() { this.localShow = !1, this.$_returnFocusEl = null; },
      methods: {
        hide() { this.localShow = !1; }, emitState() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.localShow; this.emitOnRoot(Ul, this.safeId(), t); }, emitSync() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.localShow; this.emitOnRoot(Wl, this.safeId(), t); }, handleToggle(t) { t && t === this.safeId() && (this.localShow = !this.localShow); }, handleSync(t) { const e = this; t && t === this.safeId() && this.$nextTick((() => { e.emitSync(e.localShow); })); }, onKeydown(t) { const e = t.keyCode; !this.noCloseOnEsc && e === Rn.ESC && this.localShow && this.hide(); }, onBackdropClick() { this.localShow && !this.noCloseOnBackdrop && this.hide(); }, onTopTrapFocus() { const t = Ne(this.$refs.content); Ve(t.reverse()[0]); }, onBottomTrapFocus() { const t = Ne(this.$refs.content); Ve(t[0]); }, onBeforeEnter() { this.$_returnFocusEl = me(z.j ? [document.body] : []), this.isOpen = !0; }, onAfterEnter(t) { Pe(t, me()) || Ve(t), this.$emit('shown'); }, onAfterLeave() { Ve(this.$_returnFocusEl), this.$_returnFocusEl = null, this.isOpen = !1, this.$emit('hidden'); },
      },
      render(t) {
        let e; const n = this.localShow; const r = this.shadow === '' || this.shadow; let i = t(this.tag, {
          ref: 'content', directives: [{ name: 'show', value: n }], staticClass: Vy, class: [(e = { shadow: !0 === r }, My(e, 'shadow-'.concat(r), r && !0 !== r), My(e, ''.concat(Vy, '-right'), this.right), My(e, 'bg-'.concat(this.bgVariant), !!this.bgVariant), My(e, 'text-'.concat(this.textVariant), !!this.textVariant), e), this.sidebarClass], attrs: this.computedAttrs, style: { width: this.width },
        }, [qy(t, this)]); i = t('transition', { props: this.transitionProps, on: { beforeEnter: this.onBeforeEnter, afterEnter: this.onAfterEnter, afterLeave: this.onAfterLeave } }, [i]); const o = t(tn, { props: { noFade: this.noSlide } }, [Yy(t, this)]); let a = t(); let s = t(); return this.backdrop && this.localShow && (a = t('div', { attrs: { tabindex: '0' }, on: { focus: this.onTopTrapFocus } }), s = t('div', { attrs: { tabindex: '0' }, on: { focus: this.onBottomTrapFocus } })), t('div', {
          staticClass: 'b-sidebar-outer', style: { zIndex: this.zIndex }, attrs: { tabindex: '-1' }, on: { keydown: this.onKeydown },
        }, [a, i, s, o]);
      },
    }); const Xy = zt({ components: { BSidebar: Ky }, plugins: { VBTogglePlugin: lc } }); const Jy = zt({ components: { BSpinner: om } }); const Zy = { methods: { hasListener(t) { const e = this.$listeners || {}; const n = this._events || {}; return !ct(e[t]) || a(n[t]) && n[t].length > 0; } } }; const Qy = /_/g; const tg = /([a-z])([A-Z])/g; const eg = /(\s|^)(\w)/g; const ng = function (t) { return t.replace(Qy, ' ').replace(tg, ((t, e, n) => `${e} ${n}`)).replace(eg, ((t, e, n) => e + n.toUpperCase())); }; const rg = ng; const ig = { _rowVariant: !0, _cellVariants: !0, _showDetails: !0 }; const og = ['a', 'a *', 'button', 'button *', 'input:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'textarea:not(.disabled):not([disabled])', '[role="link"]', '[role="link"] *', '[role="button"]', '[role="button"] *', '[tabindex]:not(.disabled):not([disabled])'].join(','); const ag = function (t, e) { let n = null; return pt(e) ? n = { key: t, label: e } : dt(e) ? n = { key: t, formatter: e } : S(e) ? (n = T(e), n.key = n.key || t) : !1 !== e && (n = { key: t }), n; }; const sg = function (t, e) { const n = []; if (a(t) && t.filter(V).forEach(((t) => { if (pt(t))n.push({ key: t, label: rg(t) }); else if (S(t) && t.key && pt(t.key))n.push(T(t)); else if (S(t) && g(t).length === 1) { const e = g(t)[0]; const r = ag(e, t[e]); r && n.push(r); } })), n.length === 0 && a(e) && e.length > 0) { const r = e[0]; g(r).forEach(((t) => { ig[t] || n.push({ key: t, label: rg(t) }); })); } const i = {}; return n.filter(((t) => !i[t.key] && (i[t.key] = !0, t.label = pt(t.label) ? t.label : rg(t.key), !0))); }; const lg = sg; const cg = {
      props: {
        items: { type: Array, default() { return []; } }, fields: { type: Array, default: null }, primaryKey: { type: String }, value: { type: Array, default() { return []; } },
      },
      data() { return { localItems: a(this.items) ? this.items.slice() : [] }; },
      computed: {
        computedFields() { return lg(this.fields, this.localItems); },
        computedFieldsObj() { const t = this.$parent; return this.computedFields.reduce(((e, n) => { if (e[n.key] = T(n), n.formatter) { let r = n.formatter; pt(r) && dt(t[r]) ? r = t[r] : dt(r) || (r = void 0), e[n.key].formatter = r; } return e; }), {}); },
        computedItems() { return (this.paginatedItems || this.sortedItems || this.filteredItems || this.localItems || []).slice(); },
        context() {
          return {
            filter: this.localFilter, sortBy: this.localSortBy, sortDesc: this.localSortDesc, perPage: mn(ie(this.perPage, 0), 0), currentPage: mn(ie(this.currentPage, 0), 1), apiUrl: this.apiUrl,
          };
        },
      },
      watch: { items(t) { a(t) ? this.localItems = t.slice() : ft(t) && (this.localItems = []); }, computedItems(t) { this.$emit('input', t); }, context(t, e) { ko(t, e) || this.$emit('context-changed', t); } },
      mounted() { this.$emit('input', this.computedItems); },
      methods: { getFieldFormatter(t) { const e = this.computedFieldsObj[t]; return e ? e.formatter : void 0; } },
    }; function ug(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const fg = { props: { stacked: { type: [Boolean, String], default: !1 } }, computed: { isStacked() { return this.stacked === '' || this.stacked; }, isStackedAlways() { return !0 === this.isStacked; }, stackedTableClasses() { return ug({ 'b-table-stacked': this.isStackedAlways }, 'b-table-stacked-'.concat(this.stacked), !this.isStackedAlways && this.isStacked); } } }; const dg = function (t, e, n) { const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return g(t).reduce(((i, o) => { if (!ig[o] && !(e && e.length > 0 && s(e, o)) && (!(n && n.length > 0) || s(n, o))) { const a = r[o] || {}; const l = t[o]; const c = a.filterByFormatted; const u = dt(c) ? c : c ? a.formatter : null; i[o] = dt(u) ? u(l, o, t) : l; } return i; }), {}); }; const hg = dg; const pg = function t(e) {
      return ft(e) ? '' : S(e) && !bt(e) ? g(e).sort().filter(((t) => !ft(t))).map(((n) => t(e[n])))
        .join(' ') : Yn(e);
    }; const vg = pg; const bg = function (t, e, n, r) { return S(t) ? vg(hg(t, e, n, r)) : ''; }; const mg = bg; const yg = 'Prop "filter-debounce" is deprecated. Use the debounce feature of "<b-form-input>" instead.'; const gg = /[\s\uFEFF\xA0]+/g; const wg = {
      props: {
        filter: { type: [String, RegExp, Object, Array], default: null },
        filterFunction: { type: Function },
        filterIgnoredFields: { type: Array },
        filterIncludedFields: { type: Array },
        filterDebounce: {
          type: [Number, String], deprecated: yg, default: 0, validator(t) { return /^\d+/.test(String(t)); },
        },
      },
      data() { return { isFiltered: !1, localFilter: this.filterSanitize(this.filter) }; },
      computed: {
        computedFilterIgnored() { return this.filterIgnoredFields ? l(this.filterIgnoredFields).filter(V) : null; }, computedFilterIncluded() { return this.filterIncludedFields ? l(this.filterIncludedFields).filter(V) : null; }, computedFilterDebounce() { const t = ie(this.filterDebounce, 0); return t > 0 && kt(yg, 'BTable'), t; }, localFiltering() { return !this.hasProvider || !!this.noProviderFiltering; }, filteredCheck() { return { filteredItems: this.filteredItems, localItems: this.localItems, localFilter: this.localFilter }; }, localFilterFn() { return dt(this.filterFunction) ? this.filterFunction : null; }, filteredItems() { const t = this.localItems || []; const e = this.localFilter; const n = this.localFiltering ? this.filterFnFactory(this.localFilterFn, e) || this.defaultFilterFnFactory(e) : null; return n && t.length > 0 ? t.filter(n) : t; },
      },
      watch: {
        computedFilterDebounce(t) { !t && this.$_filterTimer && (clearTimeout(this.$_filterTimer), this.$_filterTimer = null, this.localFilter = this.filterSanitize(this.filter)); }, filter: { deep: !0, handler(t) { const e = this; const n = this.computedFilterDebounce; clearTimeout(this.$_filterTimer), this.$_filterTimer = null, n && n > 0 ? this.$_filterTimer = setTimeout((() => { e.localFilter = e.filterSanitize(t); }), n) : this.localFilter = this.filterSanitize(t); } }, filteredCheck(t) { const e = t.filteredItems; const n = t.localFilter; let r = !1; n ? ko(n, []) || ko(n, {}) ? r = !1 : n && (r = !0) : r = !1, r && this.$emit('filtered', e, e.length), this.isFiltered = r; }, isFiltered(t, e) { !1 === t && !0 === e && this.$emit('filtered', this.localItems, this.localItems.length); },
      },
      created() { const t = this; this.$_filterTimer = null, this.$nextTick((() => { t.isFiltered = Boolean(t.localFilter); })); },
      beforeDestroy() { clearTimeout(this.$_filterTimer), this.$_filterTimer = null; },
      methods: { filterSanitize(t) { return !this.localFiltering || this.localFilterFn || pt(t) || gt(t) ? M(t) : ''; }, filterFnFactory(t, e) { if (!t || !dt(t) || !e || ko(e, []) || ko(e, {})) return null; const n = function (n) { return t(n, e); }; return n; }, defaultFilterFnFactory(t) { const e = this; if (!t || !pt(t) && !gt(t)) return null; let n = t; if (pt(n)) { const r = qn(t).replace(gg, '\\s+'); n = new RegExp('.*'.concat(r, '.*'), 'i'); } const i = function (t) { return n.lastIndex = 0, n.test(mg(t, e.computedFilterIgnored, e.computedFilterIncluded, e.computedFieldsObj)); }; return i; } },
    }; const Og = function (t, e) { return t.map(((t, e) => [e, t])).sort(function (t, e) { return this(t[1], e[1]) || t[0] - e[0]; }.bind(e)).map(((t) => t[1])); }; const Sg = Og; const xg = function (t, e, n, r, i, o, a, s) { let l = Tt(t, n, null); let c = Tt(e, n, null); return dt(i) && (l = i(l, n, t), c = i(c, n, e)), l = ft(l) ? '' : l, c = ft(c) ? '' : c, bt(l) && bt(c) || vt(l) && vt(c) ? l < c ? -1 : l > c ? 1 : 0 : s && l === '' && c !== '' ? 1 : s && l !== '' && c === '' ? -1 : vg(l).localeCompare(vg(c), a, o); }; const Tg = xg; function kg(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Pg(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? kg(Object(n), !0).forEach(((e) => { jg(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : kg(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function jg(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Cg = {
      props: {
        sortBy: { type: String, default: '' }, sortDesc: { type: Boolean, default: !1 }, sortDirection: { type: String, default: 'asc', validator(t) { return s(['asc', 'desc', 'last'], t); } }, sortCompare: { type: Function }, sortCompareOptions: { type: Object, default() { return { numeric: !0 }; } }, sortCompareLocale: { type: [String, Array] }, sortNullLast: { type: Boolean, default: !1 }, noSortReset: { type: Boolean, default: !1 }, labelSortAsc: { type: String, default: 'Click to sort Ascending' }, labelSortDesc: { type: String, default: 'Click to sort Descending' }, labelSortClear: { type: String, default: 'Click to clear sorting' }, noLocalSorting: { type: Boolean, default: !1 }, noFooterSorting: { type: Boolean, default: !1 }, sortIconLeft: { type: Boolean, default: !1 },
      },
      data() { return { localSortBy: this.sortBy || '', localSortDesc: this.sortDesc || !1 }; },
      computed: { localSorting() { return this.hasProvider ? !!this.noProviderSorting : !this.noLocalSorting; }, isSortable() { return this.computedFields.some(((t) => t.sortable)); }, sortedItems() { const t = (this.filteredItems || this.localItems || []).slice(); const e = this.localSortBy; const n = this.localSortDesc; const r = this.sortCompare; const i = this.localSorting; const o = Pg(Pg({}, this.sortCompareOptions), {}, { usage: 'sort' }); const a = this.sortCompareLocale || void 0; const s = this.sortNullLast; if (e && i) { const l = this.computedFieldsObj[e] || {}; const c = l.sortByFormatted; const u = dt(c) ? c : c ? this.getFieldFormatter(e) : void 0; return Sg(t, ((t, i) => { let l = null; return dt(r) && (l = r(t, i, e, n, u, o, a)), (ft(l) || !1 === l) && (l = Tg(t, i, e, n, u, o, a, s)), (l || 0) * (n ? -1 : 1); })); } return t; } },
      watch: {
        isSortable(t) { t ? this.isSortable && this.$on('head-clicked', this.handleSort) : this.$off('head-clicked', this.handleSort); }, sortDesc(t) { t !== this.localSortDesc && (this.localSortDesc = t || !1); }, sortBy(t) { t !== this.localSortBy && (this.localSortBy = t || ''); }, localSortDesc(t, e) { t !== e && this.$emit('update:sortDesc', t); }, localSortBy(t, e) { t !== e && this.$emit('update:sortBy', t); },
      },
      created() { this.isSortable && this.$on('head-clicked', this.handleSort); },
      methods: {
        handleSort(t, e, n, r) { const i = this; if (this.isSortable && (!r || !this.noFooterSorting)) { let o = !1; const a = function () { const t = e.sortDirection || i.sortDirection; t === 'asc' ? i.localSortDesc = !1 : t === 'desc' && (i.localSortDesc = !0); }; e.sortable ? (t === this.localSortBy ? this.localSortDesc = !this.localSortDesc : (this.localSortBy = t, a()), o = !0) : this.localSortBy && !this.noSortReset && (this.localSortBy = '', a(), o = !0), o && this.$emit('sort-changed', this.context); } }, sortTheadThClasses(t, e, n) { return { 'b-table-sort-icon-left': e.sortable && this.sortIconLeft && !(n && this.noFooterSorting) }; }, sortTheadThAttrs(t, e, n) { if (!this.isSortable || n && this.noFooterSorting) return {}; const r = e.sortable; const i = r && this.localSortBy === t ? this.localSortDesc ? 'descending' : 'ascending' : r ? 'none' : null; return { 'aria-sort': i }; }, sortTheadThLabel(t, e, n) { if (!this.isSortable || n && this.noFooterSorting) return null; const r = e.sortable; let i = ''; if (r) if (this.localSortBy === t)i = this.localSortDesc ? this.labelSortAsc : this.labelSortDesc; else { i = this.localSortDesc ? this.labelSortDesc : this.labelSortAsc; const o = this.sortDirection || e.sortDirection; o === 'asc' ? i = this.labelSortAsc : o === 'desc' && (i = this.labelSortDesc); } else this.noSortReset || (i = this.localSortBy ? this.labelSortClear : ''); return Xn(i) || null; },
      },
    }; const _g = { props: { perPage: { type: [Number, String], default: 0 }, currentPage: { type: [Number, String], default: 1 } }, computed: { localPaging() { return !this.hasProvider || !!this.noProviderPaging; }, paginatedItems() { let t = this.sortedItems || this.filteredItems || this.localItems || []; const e = mn(ie(this.currentPage, 1), 1); const n = mn(ie(this.perPage, 0), 0); return this.localPaging && n && (t = t.slice((e - 1) * n, e * n)), t; } } }; const Bg = { props: { caption: { type: String }, captionHtml: { type: String } }, computed: { captionId() { return this.isStacked ? this.safeId('_caption_') : null; } }, methods: { renderCaption() { const t = this.$createElement; const e = this.normalizeSlot('table-caption'); let n = t(); if (e || this.caption || this.captionHtml) { const r = { key: 'caption', attrs: { id: this.captionId } }; e || (r.domProps = to(this.captionHtml, this.caption)), n = t('caption', r, [e]); } return n; } } }; const Dg = { methods: { renderColgroup() { const t = this.$createElement; const e = this.computedFields; let n = t(); return this.hasNormalizedSlot('table-colgroup') && (n = t('colgroup', { key: 'colgroup' }, [this.normalizeSlot('table-colgroup', { columns: e.length, fields: e })])), n; } } }; const Eg = ['TD', 'TH', 'TR']; const $g = function (t) { if (!t || !t.target) return !1; const e = t.target; if (e.disabled || Eg.indexOf(e.tagName) !== -1) return !1; if (ke('.dropdown-menu', e)) return !0; const n = e.tagName === 'LABEL' ? e : ke('label', e); if (n) { const r = $e(n, 'for'); const i = r ? je(r) : xe('input, select, textarea', n); if (i && !i.disabled) return !0; } return Te(e, og); }; const Ag = $g; const Ig = function () { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document; const e = Le(); return !!(e && e.toString().trim() !== '' && e.containsNode && be(t)) && e.containsNode(t, !0); }; const Fg = Ig; function Lg(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Rg(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Lg(Object(n), !0).forEach(((e) => { Mg(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lg(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Mg(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Ng = { headVariant: { type: String, default: null } }; const Vg = i.extend({
      name: 'BThead',
      mixins: [mr, yr, rn],
      inheritAttrs: !1,
      provide() { return { bvTableRowGroup: this }; },
      inject: { bvTable: { default() { return {}; } } },
      props: Ng,
      computed: {
        isThead() { return !0; }, isDark() { return this.bvTable.dark; }, isStacked() { return this.bvTable.isStacked; }, isResponsive() { return this.bvTable.isResponsive; }, isStickyHeader() { return !this.isStacked && this.bvTable.stickyHeader; }, hasStickyHeader() { return !this.isStacked && this.bvTable.stickyHeader; }, tableVariant() { return this.bvTable.tableVariant; }, theadClasses() { return [this.headVariant ? 'thead-'.concat(this.headVariant) : null]; }, theadAttrs() { return Rg({ role: 'rowgroup' }, this.bvAttrs); },
      },
      render(t) { return t('thead', { class: this.theadClasses, attrs: this.theadAttrs, on: this.bvListeners }, this.normalizeSlot('default')); },
    }); function zg(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Hg(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? zg(Object(n), !0).forEach(((e) => { Gg(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zg(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Gg(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Ug = { footVariant: { type: String, default: null } }; const Wg = i.extend({
      name: 'BTfoot',
      mixins: [mr, yr, rn],
      inheritAttrs: !1,
      provide() { return { bvTableRowGroup: this }; },
      inject: { bvTable: { default() { return {}; } } },
      props: Ug,
      computed: {
        isTfoot() { return !0; }, isDark() { return this.bvTable.dark; }, isStacked() { return this.bvTable.isStacked; }, isResponsive() { return this.bvTable.isResponsive; }, isStickyHeader() { return !1; }, hasStickyHeader() { return !this.isStacked && this.bvTable.stickyHeader; }, tableVariant() { return this.bvTable.tableVariant; }, tfootClasses() { return [this.footVariant ? 'thead-'.concat(this.footVariant) : null]; }, tfootAttrs() { return Hg({ role: 'rowgroup' }, this.bvAttrs); },
      },
      render(t) { return t('tfoot', { class: this.tfootClasses, attrs: this.tfootAttrs, on: this.bvListeners }, this.normalizeSlot('default')); },
    }); function qg(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Yg(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? qg(Object(n), !0).forEach(((e) => { Kg(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qg(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Kg(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Xg = { variant: { type: String, default: null } }; const Jg = 'light'; const Zg = 'dark'; const Qg = i.extend({
      name: 'BTr',
      mixins: [mr, yr, rn],
      inheritAttrs: !1,
      provide() { return { bvTableTr: this }; },
      inject: { bvTableRowGroup: { default() { return {}; } } },
      props: Xg,
      computed: {
        inTbody() { return this.bvTableRowGroup.isTbody; }, inThead() { return this.bvTableRowGroup.isThead; }, inTfoot() { return this.bvTableRowGroup.isTfoot; }, isDark() { return this.bvTableRowGroup.isDark; }, isStacked() { return this.bvTableRowGroup.isStacked; }, isResponsive() { return this.bvTableRowGroup.isResponsive; }, isStickyHeader() { return this.bvTableRowGroup.isStickyHeader; }, hasStickyHeader() { return !this.isStacked && this.bvTableRowGroup.hasStickyHeader; }, tableVariant() { return this.bvTableRowGroup.tableVariant; }, headVariant() { return this.inThead ? this.bvTableRowGroup.headVariant : null; }, footVariant() { return this.inTfoot ? this.bvTableRowGroup.footVariant : null; }, isRowDark() { return this.headVariant !== Jg && this.footVariant !== Jg && (this.headVariant === Zg || this.footVariant === Zg || this.isDark); }, trClasses() { return [this.variant ? ''.concat(this.isRowDark ? 'bg' : 'table', '-').concat(this.variant) : null]; }, trAttrs() { return Yg({ role: 'row' }, this.bvAttrs); },
      },
      render(t) { return t('tr', { class: this.trClasses, attrs: this.trAttrs, on: this.bvListeners }, this.normalizeSlot('default')); },
    }); function tw(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function ew(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? tw(Object(n), !0).forEach(((e) => { nw(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tw(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function nw(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const rw = function (t) { return t = ie(t, 0), t > 0 ? t : null; }; const iw = function (t) { return ft(t) || rw(t) > 0; }; const ow = {
      variant: { type: String, default: null }, colspan: { type: [Number, String], default: null, validator: iw }, rowspan: { type: [Number, String], default: null, validator: iw }, stackedHeading: { type: String, default: null }, stickyColumn: { type: Boolean, default: !1 },
    }; const aw = i.extend({
      name: 'BTableCell',
      mixins: [mr, yr, rn],
      inheritAttrs: !1,
      inject: { bvTableTr: { default() { return {}; } } },
      props: ow,
      computed: {
        tag() { return 'td'; },
        inTbody() { return this.bvTableTr.inTbody; },
        inThead() { return this.bvTableTr.inThead; },
        inTfoot() { return this.bvTableTr.inTfoot; },
        isDark() { return this.bvTableTr.isDark; },
        isStacked() { return this.bvTableTr.isStacked; },
        isStackedCell() { return this.inTbody && this.isStacked; },
        isResponsive() { return this.bvTableTr.isResponsive; },
        isStickyHeader() { return this.bvTableTr.isStickyHeader; },
        hasStickyHeader() { return this.bvTableTr.hasStickyHeader; },
        isStickyColumn() { return !this.isStacked && (this.isResponsive || this.hasStickyHeader) && this.stickyColumn; },
        rowVariant() { return this.bvTableTr.variant; },
        headVariant() { return this.bvTableTr.headVariant; },
        footVariant() { return this.bvTableTr.footVariant; },
        tableVariant() { return this.bvTableTr.tableVariant; },
        computedColspan() { return rw(this.colspan); },
        computedRowspan() { return rw(this.rowspan); },
        cellClasses() { let t = this.variant; return (!t && this.isStickyHeader && !this.headVariant || !t && this.isStickyColumn && this.inTfoot && !this.footVariant || !t && this.isStickyColumn && this.inThead && !this.headVariant || !t && this.isStickyColumn && this.inTbody) && (t = this.rowVariant || this.tableVariant || 'b-table-default'), [t ? ''.concat(this.isDark ? 'bg' : 'table', '-').concat(t) : null, this.isStickyColumn ? 'b-table-sticky-column' : null]; },
        cellAttrs() {
          const t = this.inThead || this.inTfoot; const e = this.computedColspan; const n = this.computedRowspan; let r = 'cell'; let i = null; return t ? (r = 'columnheader', i = e > 0 ? 'colspan' : 'col') : this.tag === 'th' && (r = 'rowheader', i = n > 0 ? 'rowgroup' : 'row'), ew(ew({
            colspan: e, rowspan: n, role: r, scope: i,
          }, this.bvAttrs), {}, { 'data-label': this.isStackedCell && !ft(this.stackedHeading) ? Yn(this.stackedHeading) : null });
        },
      },
      render(t) { const e = [this.normalizeSlot('default')]; return t(this.tag, { class: this.cellClasses, attrs: this.cellAttrs, on: this.bvListeners }, [this.isStackedCell ? t('div', [e]) : e]); },
    }); const sw = i.extend({ name: 'BTh', extends: aw, computed: { tag() { return 'th'; } } }); function lw(t) { return dw(t) || fw(t) || uw(t) || cw(); } function cw() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function uw(t, e) { if (t) { if (typeof t === 'string') return hw(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hw(t, e) : void 0; } } function fw(t) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t); } function dw(t) { if (Array.isArray(t)) return hw(t); } function hw(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } function pw(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function vw(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? pw(Object(n), !0).forEach(((e) => { bw(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pw(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function bw(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const mw = {
      props: {
        headVariant: { type: String, default() { return Qt('BTable', 'headVariant'); } }, headRowVariant: { type: String }, theadClass: { type: [String, Array, Object] }, theadTrClass: { type: [String, Array, Object] },
      },
      methods: {
        fieldClasses(t) { return [t.class ? t.class : '', t.thClass ? t.thClass : '']; },
        headClicked(t, e, n) { this.stopIfBusy && this.stopIfBusy(t) || Ag(t) || Fg(this.$el) || (t.stopPropagation(), t.preventDefault(), this.$emit('head-clicked', e.key, e, t, n)); },
        renderThead() {
          const t = this; const e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; const n = this.$createElement; const r = this.computedFields || []; if (this.isStackedAlways || r.length === 0) return n(); const i = this.isSelectable ? this.selectAllRows : function () {}; const o = this.isSelectable ? this.clearSelected : function () {}; const a = function (r, a) {
            let s = null; r.label.trim() || r.headerTitle || (s = rg(r.key)); const l = t.hasListener('head-clicked') || t.isSortable; const c = {}; l && (c.click = function (n) { t.headClicked(n, r, e); }, c.keydown = function (n) { const i = n.keyCode; i !== Rn.ENTER && i !== Rn.SPACE || t.headClicked(n, r, e); }); const u = t.isSortable ? t.sortTheadThAttrs(r.key, r, e) : {}; const f = t.isSortable ? t.sortTheadThClasses(r.key, r, e) : null; const d = t.isSortable ? t.sortTheadThLabel(r.key, r, e) : null; const h = {
              key: r.key,
              class: [t.fieldClasses(r), f],
              props: { variant: r.variant, stickyColumn: r.stickyColumn },
              style: r.thStyle || {},
              attrs: vw(vw({
                tabindex: l ? '0' : null, abbr: r.headerAbbr || null, title: r.headerTitle || null, 'aria-colindex': a + 1, 'aria-label': s,
              }, t.getThValues(null, r.key, r.thAttr, e ? 'foot' : 'head', {})), u),
              on: c,
            }; let p = ['head('.concat(r.key, ')'), 'head('.concat(r.key.toLowerCase(), ')'), 'head()']; e && (p = ['foot('.concat(r.key, ')'), 'foot('.concat(r.key.toLowerCase(), ')'), 'foot()'].concat(lw(p))); const v = {
              label: r.label, column: r.key, field: r, isFoot: e, selectAllRows: i, clearSelected: o,
            }; const b = t.normalizeSlot(p, v) || (r.labelHtml ? n('div', { domProps: to(r.labelHtml) }) : r.label); const m = d ? n('span', { staticClass: 'sr-only' }, ' ('.concat(d, ')')) : null; return n(sw, h, [b, m].filter(V));
          }; const s = r.map(a).filter(V); const l = []; if (e) { const c = { variant: ft(this.footRowVariant) ? this.headRowVariant : this.footRowVariant }; l.push(n(Qg, { class: this.tfootTrClass, props: c }, s)); } else {
            const u = {
              columns: r.length, fields: r, selectAllRows: i, clearSelected: o,
            }; l.push(this.normalizeSlot('thead-top', u) || n()), l.push(n(Qg, { class: this.theadTrClass, props: { variant: this.headRowVariant } }, s));
          } return n(e ? Wg : Vg, { key: e ? 'bv-tfoot' : 'bv-thead', class: (e ? this.tfootClass : this.theadClass) || null, props: e ? { footVariant: this.footVariant || this.headVariant || null } : { headVariant: this.headVariant || null } }, l);
        },
      },
    }; const yw = {
      props: {
        footClone: { type: Boolean, default: !1 }, footVariant: { type: String, default() { return Qt('BTable', 'footVariant'); } }, footRowVariant: { type: String }, tfootClass: { type: [String, Array, Object] }, tfootTrClass: { type: [String, Array, Object] },
      },
      methods: { renderTFootCustom() { const t = this.$createElement; return this.hasNormalizedSlot('custom-foot') ? t(Wg, { key: 'bv-tfoot-custom', class: this.tfootClass || null, props: { footVariant: this.footVariant || this.headVariant || null } }, this.normalizeSlot('custom-foot', { items: this.computedItems.slice(), fields: this.computedFields.slice(), columns: this.computedFields.length })) : t(); }, renderTfoot() { return this.footClone ? this.renderThead(!0) : this.renderTFootCustom(); } },
    }; function gw(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function ww(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? gw(Object(n), !0).forEach(((e) => { Ow(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gw(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Ow(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Sw = { tbodyTransitionProps: { type: Object }, tbodyTransitionHandlers: { type: Object } }; const xw = i.extend({
      name: 'BTbody',
      mixins: [mr, yr, rn],
      inheritAttrs: !1,
      provide() { return { bvTableRowGroup: this }; },
      inject: { bvTable: { default() { return {}; } } },
      props: Sw,
      computed: {
        isTbody() { return !0; }, isDark() { return this.bvTable.dark; }, isStacked() { return this.bvTable.isStacked; }, isResponsive() { return this.bvTable.isResponsive; }, isStickyHeader() { return !1; }, hasStickyHeader() { return !this.isStacked && this.bvTable.stickyHeader; }, tableVariant() { return this.bvTable.tableVariant; }, isTransitionGroup() { return this.tbodyTransitionProps || this.tbodyTransitionHandlers; }, tbodyAttrs() { return ww({ role: 'rowgroup' }, this.bvAttrs); }, tbodyProps() { return this.tbodyTransitionProps ? ww(ww({}, this.tbodyTransitionProps), {}, { tag: 'tbody' }) : {}; },
      },
      render(t) { const e = { props: this.tbodyProps, attrs: this.tbodyAttrs }; return this.isTransitionGroup ? (e.on = this.tbodyTransitionHandlers || {}, e.nativeOn = this.bvListeners) : e.on = this.bvListeners, t(this.isTransitionGroup ? 'transition-group' : 'tbody', e, this.normalizeSlot('default')); },
    }); function Tw(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function kw(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Tw(Object(n), !0).forEach(((e) => { Pw(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tw(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Pw(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const jw = 'row-details'; const Cw = {
      props: { tbodyTrClass: { type: [String, Array, Object, Function] }, tbodyTrAttr: { type: [Object, Function] }, detailsTdClass: { type: [String, Array, Object] } },
      methods: {
        getTdValues(t, e, n, r) { const i = this.$parent; if (n) { const o = Tt(t, e, ''); return dt(n) ? n(o, e, t) : pt(n) && dt(i[n]) ? i[n](o, e, t) : n; } return r; },
        getThValues(t, e, n, r, i) { const o = this.$parent; if (n) { const a = Tt(t, e, ''); return dt(n) ? n(a, e, t, r) : pt(n) && dt(o[n]) ? o[n](a, e, t, r) : n; } return i; },
        getFormattedValue(t, e) { const n = e.key; const r = this.getFieldFormatter(n); let i = Tt(t, n, null); return dt(r) && (i = r(i, n, t)), ft(i) ? '' : i; },
        toggleDetailsFactory(t, e) { const n = this; return function () { t && n.$set(e, '_showDetails', !e._showDetails); }; },
        rowHovered(t) { this.tbodyRowEvtStopped(t) || this.emitTbodyRowEvent('row-hovered', t); },
        rowUnhovered(t) { this.tbodyRowEvtStopped(t) || this.emitTbodyRowEvent('row-unhovered', t); },
        renderTbodyRowCell(t, e, n, r) {
          const i = this; const o = this.$createElement; const a = this.hasNormalizedSlot(jw); const s = this.getFormattedValue(n, t); const l = t.key; const c = !this.isStacked && (this.isResponsive || this.stickyHeader) && t.stickyColumn; const u = c ? t.isRowHeader ? sw : aw : t.isRowHeader ? 'th' : 'td'; const f = n._cellVariants && n._cellVariants[l] ? n._cellVariants[l] : t.variant || null; const d = {
            key: 'row-'.concat(r, '-cell-').concat(e, '-').concat(l), class: [t.class ? t.class : '', this.getTdValues(n, l, t.tdClass, '')], props: {}, attrs: kw({ 'aria-colindex': String(e + 1) }, t.isRowHeader ? this.getThValues(n, l, t.thAttr, 'row', {}) : this.getTdValues(n, l, t.tdAttr, {})),
          }; c ? d.props = { stackedHeading: this.isStacked ? t.label : null, stickyColumn: !0, variant: f } : (d.attrs['data-label'] = this.isStacked && !ft(t.label) ? Yn(t.label) : null, d.attrs.role = t.isRowHeader ? 'rowheader' : 'cell', d.attrs.scope = t.isRowHeader ? 'row' : null, f && d.class.push(''.concat(this.dark ? 'bg' : 'table', '-').concat(f))); const h = {
            item: n, index: r, field: t, unformatted: Tt(n, l, ''), value: s, toggleDetails: this.toggleDetailsFactory(a, n), detailsShowing: Boolean(n._showDetails),
          }; this.supportsSelectableRows && (h.rowSelected = this.isRowSelected(r), h.selectRow = function () { return i.selectRow(r); }, h.unselectRow = function () { return i.unselectRow(r); }); const p = this.$_bodyFieldSlotNameCache[l]; let v = p ? this.normalizeSlot(p, h) : Yn(s); return this.isStacked && (v = [o('div', [v])]), o(u, d, [v]);
        },
        renderTbodyRow(t, e) {
          const n = this; const r = this.$createElement; const i = this.computedFields; const o = this.striped; const a = this.hasNormalizedSlot(jw); const s = t._showDetails && a; const l = this.$listeners['row-clicked'] || this.hasSelectableRowClick; const c = []; const u = s ? this.safeId('_details_'.concat(e, '_')) : null; const f = i.map(((r, i) => n.renderTbodyRowCell(r, i, t, e))); let d = null; this.currentPage && this.perPage && this.perPage > 0 && (d = String((this.currentPage - 1) * this.perPage + e + 1)); const h = this.primaryKey; const p = Yn(Tt(t, h)) || null; const v = p || Yn(e); const b = p ? this.safeId('_row_'.concat(p)) : null; const m = this.selectableRowClasses ? this.selectableRowClasses(e) : {}; const y = this.selectableRowAttrs ? this.selectableRowAttrs(e) : {}; const g = dt(this.tbodyTrClass) ? this.tbodyTrClass(t, 'row') : this.tbodyTrClass; const w = dt(this.tbodyTrAttr) ? this.tbodyTrAttr(t, 'row') : this.tbodyTrAttr; if (c.push(r(Qg, {
            key: '__b-table-row-'.concat(v, '__'),
            ref: 'itemRows',
            refInFor: !0,
            class: [g, m, s ? 'b-table-has-details' : ''],
            props: { variant: t._rowVariant || null },
            attrs: kw(kw({ id: b }, w), {}, {
              tabindex: l ? '0' : null, 'data-pk': p || null, 'aria-details': u, 'aria-owns': u, 'aria-rowindex': d,
            }, y),
            on: { mouseenter: this.rowHovered, mouseleave: this.rowUnhovered },
          }, f)), s) {
            const O = {
              item: t, index: e, fields: i, toggleDetails: this.toggleDetailsFactory(a, t),
            }; this.supportsSelectableRows && (O.rowSelected = this.isRowSelected(e), O.selectRow = function () { return n.selectRow(e); }, O.unselectRow = function () { return n.unselectRow(e); }); const S = r(aw, { props: { colspan: i.length }, class: this.detailsTdClass }, [this.normalizeSlot(jw, O)]); o && c.push(r('tr', { key: '__b-table-details-stripe__'.concat(v), staticClass: 'd-none', attrs: { 'aria-hidden': 'true', role: 'presentation' } })); const x = dt(this.tbodyTrClass) ? this.tbodyTrClass(t, jw) : this.tbodyTrClass; const T = dt(this.tbodyTrAttr) ? this.tbodyTrAttr(t, jw) : this.tbodyTrAttr; c.push(r(Qg, {
              key: '__b-table-details__'.concat(v), staticClass: 'b-table-details', class: [x], props: { variant: t._rowVariant || null }, attrs: kw(kw({}, T), {}, { id: u, tabindex: '-1' }),
            }, [S]));
          } else a && (c.push(r()), o && c.push(r())); return c;
        },
      },
    }; function _w(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Bw(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? _w(Object(n), !0).forEach(((e) => { Dw(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _w(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Dw(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const Ew = Bw(Bw({}, Sw), {}, { tbodyClass: { type: [String, Array, Object] } }); const $w = {
      mixins: [Cw],
      props: Ew,
      methods: {
        getTbodyTrs() { const t = this.$refs || {}; const e = t.tbody ? t.tbody.$el || t.tbody : null; const n = (t.itemRows || []).map(((t) => t.$el || t)); return e && e.children && e.children.length > 0 && n && n.length > 0 ? o(e.children).filter(((t) => s(n, t))) : []; },
        getTbodyTrIndex(t) { if (!be(t)) return -1; const e = t.tagName === 'TR' ? t : ke('tr', t, !0); return e ? this.getTbodyTrs().indexOf(e) : -1; },
        emitTbodyRowEvent(t, e) { if (t && this.hasListener(t) && e && e.target) { const n = this.getTbodyTrIndex(e.target); if (n > -1) { const r = this.computedItems[n]; this.$emit(t, r, n, e); } } },
        tbodyRowEvtStopped(t) { return this.stopIfBusy && this.stopIfBusy(t); },
        onTbodyRowKeydown(t) { const e = t.target; if (!this.tbodyRowEvtStopped(t) && e.tagName === 'TR' && ye(e) && e.tabIndex === 0) { const n = t.keyCode; if (s([Rn.ENTER, Rn.SPACE], n))t.stopPropagation(), t.preventDefault(), this.onTBodyRowClicked(t); else if (s([Rn.UP, Rn.DOWN, Rn.HOME, Rn.END], n)) { const r = this.getTbodyTrIndex(e); if (r > -1) { t.stopPropagation(), t.preventDefault(); const i = this.getTbodyTrs(); const o = t.shiftKey; n === Rn.HOME || o && n === Rn.UP ? Ve(i[0]) : n === Rn.END || o && n === Rn.DOWN ? Ve(i[i.length - 1]) : n === Rn.UP && r > 0 ? Ve(i[r - 1]) : n === Rn.DOWN && r < i.length - 1 && Ve(i[r + 1]); } } } },
        onTBodyRowClicked(t) { this.tbodyRowEvtStopped(t) || Ag(t) || Fg(this.$el) || this.emitTbodyRowEvent('row-clicked', t); },
        onTbodyRowMiddleMouseRowClicked(t) { this.tbodyRowEvtStopped(t) || t.which !== 2 || this.emitTbodyRowEvent('row-middle-clicked', t); },
        onTbodyRowContextmenu(t) { this.tbodyRowEvtStopped(t) || this.emitTbodyRowEvent('row-contextmenu', t); },
        onTbodyRowDblClicked(t) { this.tbodyRowEvtStopped(t) || Ag(t) || this.emitTbodyRowEvent('row-dblclicked', t); },
        renderTbody() {
          const t = this; const e = this.computedItems; const n = this.$createElement; const r = this.hasListener('row-clicked') || this.hasSelectableRowClick; const i = []; const o = this.renderBusy ? this.renderBusy() : null; if (o)i.push(o); else { const a = {}; const s = this.hasNormalizedSlot('cell()') ? 'cell()' : null; this.computedFields.forEach(((e) => { const n = e.key; const r = 'cell('.concat(n, ')'); const i = 'cell('.concat(n.toLowerCase(), ')'); a[n] = t.hasNormalizedSlot(r) ? r : t.hasNormalizedSlot(i) ? i : s; })), this.$_bodyFieldSlotNameCache = a, i.push(this.renderTopRow ? this.renderTopRow() : n()), e.forEach(((e, n) => { i.push(t.renderTbodyRow(e, n)); })), i.push(this.renderEmpty ? this.renderEmpty() : n()), i.push(this.renderBottomRow ? this.renderBottomRow() : n()); } const l = { auxclick: this.onTbodyRowMiddleMouseRowClicked, contextmenu: this.onTbodyRowContextmenu, dblclick: this.onTbodyRowDblClicked }; r && (l.click = this.onTBodyRowClicked, l.keydown = this.onTbodyRowKeydown); const c = n(xw, {
            ref: 'tbody', class: this.tbodyClass || null, props: { tbodyTransitionProps: this.tbodyTransitionProps, tbodyTransitionHandlers: this.tbodyTransitionHandlers }, on: l,
          }, i); return c;
        },
      },
    }; const Aw = {
      props: {
        showEmpty: { type: Boolean, default: !1 }, emptyText: { type: String, default: 'There are no records to show' }, emptyHtml: { type: String }, emptyFilteredText: { type: String, default: 'There are no records matching your request' }, emptyFilteredHtml: { type: String },
      },
      methods: {
        renderEmpty() {
          let t; const e = this.$createElement; const n = this.computedItems; return !this.showEmpty || n && n.length !== 0 || this.computedBusy && this.hasNormalizedSlot('table-busy') || (t = this.normalizeSlot(this.isFiltered ? 'emptyfiltered' : 'empty', {
            emptyFilteredHtml: this.emptyFilteredHtml, emptyFilteredText: this.emptyFilteredText, emptyHtml: this.emptyHtml, emptyText: this.emptyText, fields: this.computedFields, items: this.computedItems,
          }), t || (t = e('div', { class: ['text-center', 'my-2'], domProps: this.isFiltered ? to(this.emptyFilteredHtml, this.emptyFilteredText) : to(this.emptyHtml, this.emptyText) })), t = e(aw, { props: { colspan: this.computedFields.length || null } }, [e('div', { attrs: { role: 'alert', 'aria-live': 'polite' } }, [t])]), t = e(Qg, {
            key: this.isFiltered ? 'b-empty-filtered-row' : 'b-empty-row', staticClass: 'b-table-empty-row', class: [dt(this.tbodyTrClass) ? this.tbodyTrClass(null, 'row-empty') : this.tbodyTrClass], attrs: dt(this.tbodyTrAttr) ? this.tbodyTrAttr(null, 'row-empty') : this.tbodyTrAttr,
          }, [t])), t || e();
        },
      },
    }; const Iw = 'top-row'; const Fw = {
      methods: {
        renderTopRow() {
          const t = this.$createElement; if (!this.hasNormalizedSlot(Iw) || !0 === this.stacked || this.stacked === '') return t(); const e = this.computedFields; return t(Qg, {
            key: 'b-top-row', staticClass: 'b-table-top-row', class: [dt(this.tbodyTrClass) ? this.tbodyTrClass(null, 'row-top') : this.tbodyTrClass], attrs: dt(this.tbodyTrAttr) ? this.tbodyTrAttr(null, 'row-top') : this.tbodyTrAttr,
          }, [this.normalizeSlot(Iw, { columns: e.length, fields: e })]);
        },
      },
    }; const Lw = 'bottom-row'; const Rw = {
      methods: {
        renderBottomRow() {
          const t = this.$createElement; if (!this.hasNormalizedSlot(Lw) || !0 === this.stacked || this.stacked === '') return t(); const e = this.computedFields; return t(Qg, {
            key: 'b-bottom-row', staticClass: 'b-table-bottom-row', class: [dt(this.tbodyTrClass) ? this.tbodyTrClass(null, 'row-bottom') : this.tbodyTrClass], attrs: dt(this.tbodyTrAttr) ? this.tbodyTrAttr(null, 'row-bottom') : this.tbodyTrAttr,
          }, this.normalizeSlot(Lw, { columns: e.length, fields: e }));
        },
      },
    }; const Mw = 'table-busy'; const Nw = {
      props: { busy: { type: Boolean, default: !1 } },
      data() { return { localBusy: !1 }; },
      computed: { computedBusy() { return this.busy || this.localBusy; } },
      watch: { localBusy(t, e) { t !== e && this.$emit('update:busy', t); } },
      methods: {
        stopIfBusy(t) { return !!this.computedBusy && (t.preventDefault(), t.stopPropagation(), !0); },
        renderBusy() {
          const t = this.$createElement; return this.computedBusy && this.hasNormalizedSlot(Mw) ? t(Qg, {
            key: 'table-busy-slot', staticClass: 'b-table-busy-slot', class: [dt(this.tbodyTrClass) ? this.tbodyTrClass(null, Mw) : this.tbodyTrClass], attrs: dt(this.tbodyTrAttr) ? this.tbodyTrAttr(null, Mw) : this.tbodyTrAttr,
          }, [t(aw, { props: { colspan: this.computedFields.length || null } }, [this.normalizeSlot(Mw)])]) : null;
        },
      },
    }; function Vw(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const zw = {
      props: {
        selectable: { type: Boolean, default: !1 }, selectMode: { type: String, default: 'multi', validator(t) { return s(['range', 'multi', 'single'], t); } }, selectedVariant: { type: String, default() { return Qt('BTable', 'selectedVariant'); } }, noSelectOnClick: { type: Boolean, default: !1 },
      },
      data() { return { selectedRows: [], selectedLastRow: -1 }; },
      computed: {
        isSelectable() { return this.selectable && this.selectMode; }, hasSelectableRowClick() { return this.isSelectable && !this.noSelectOnClick; }, supportsSelectableRows() { return !0; }, selectableHasSelection() { return this.isSelectable && this.selectedRows && this.selectedRows.length > 0 && this.selectedRows.some(V); }, selectableIsMultiSelect() { return this.isSelectable && s(['range', 'multi'], this.selectMode); }, selectableTableClasses() { let t; return t = { 'b-table-selectable': this.isSelectable }, Vw(t, 'b-table-select-'.concat(this.selectMode), this.isSelectable), Vw(t, 'b-table-selecting', this.selectableHasSelection), Vw(t, 'b-table-selectable-no-click', this.isSelectable && !this.hasSelectableRowClick), t; }, selectableTableAttrs() { return { 'aria-multiselectable': this.isSelectable ? this.selectableIsMultiSelect ? 'true' : 'false' : null }; },
      },
      watch: {
        computedItems(t, e) { let n = !1; if (this.isSelectable && this.selectedRows.length > 0) { n = a(t) && a(e) && t.length === e.length; for (let r = 0; n && r < t.length; r++)n = ko(hg(t[r]), hg(e[r])); }n || this.clearSelected(); }, selectable(t) { this.clearSelected(), this.setSelectionHandlers(t); }, selectMode() { this.clearSelected(); }, hasSelectableRowClick(t) { this.clearSelected(), this.setSelectionHandlers(!t); }, selectedRows(t, e) { const n = this; if (this.isSelectable && !ko(t, e)) { const r = []; t.forEach(((t, e) => { t && r.push(n.computedItems[e]); })), this.$emit('row-selected', r); } },
      },
      beforeMount() { this.isSelectable && this.setSelectionHandlers(!0); },
      methods: {
        selectRow(t) { if (this.isSelectable && vt(t) && t >= 0 && t < this.computedItems.length && !this.isRowSelected(t)) { const e = this.selectableIsMultiSelect ? this.selectedRows.slice() : []; e[t] = !0, this.selectedLastClicked = -1, this.selectedRows = e; } }, unselectRow(t) { if (this.isSelectable && vt(t) && this.isRowSelected(t)) { const e = this.selectedRows.slice(); e[t] = !1, this.selectedLastClicked = -1, this.selectedRows = e; } }, selectAllRows() { const t = this.computedItems.length; this.isSelectable && t > 0 && (this.selectedLastClicked = -1, this.selectedRows = this.selectableIsMultiSelect ? hm(t).map((() => !0)) : [!0]); }, isRowSelected(t) { return !(!vt(t) || !this.selectedRows[t]); }, clearSelected() { this.selectedLastClicked = -1, this.selectedRows = []; }, selectableRowClasses(t) { if (this.isSelectable && this.isRowSelected(t)) { const e = this.selectedVariant; return Vw({ 'b-table-row-selected': !0 }, ''.concat(this.dark ? 'bg' : 'table', '-').concat(e), e); } return {}; }, selectableRowAttrs(t) { return { 'aria-selected': this.isSelectable ? this.isRowSelected(t) ? 'true' : 'false' : null }; }, setSelectionHandlers(t) { const e = t && !this.noSelectOnClick ? '$on' : '$off'; this[e]('row-clicked', this.selectionHandler), this[e]('filtered', this.clearSelected), this[e]('context-changed', this.clearSelected); }, selectionHandler(t, e, n) { if (this.isSelectable && !this.noSelectOnClick) { const r = this.selectMode; let i = this.selectedRows.slice(); let o = !i[e]; if (r === 'single')i = []; else if (r === 'range') if (this.selectedLastRow > -1 && n.shiftKey) { for (let a = bn(this.selectedLastRow, e); a <= mn(this.selectedLastRow, e); a++)i[a] = !0; o = !0; } else n.ctrlKey || n.metaKey || (i = [], o = !0), this.selectedLastRow = o ? e : -1; i[e] = o, this.selectedRows = i; } else this.clearSelected(); },
      },
    }; const Hw = {
      mixins: [Cl],
      props: {
        items: { type: [Array, Function], default() { return []; } }, noProviderPaging: { type: Boolean, default: !1 }, noProviderSorting: { type: Boolean, default: !1 }, noProviderFiltering: { type: Boolean, default: !1 }, apiUrl: { type: String, default: '' },
      },
      computed: {
        hasProvider() { return dt(this.items); },
        providerTriggerContext() {
          const t = {
            apiUrl: this.apiUrl, filter: null, sortBy: null, sortDesc: null, perPage: null, currentPage: null,
          }; return this.noProviderFiltering || (t.filter = this.localFilter), this.noProviderSorting || (t.sortBy = this.localSortBy, t.sortDesc = this.localSortDesc), this.noProviderPaging || (t.perPage = this.perPage, t.currentPage = this.currentPage), T(t);
        },
      },
      watch: { items(t) { (this.hasProvider || dt(t)) && this.$nextTick(this._providerUpdate); }, providerTriggerContext(t, e) { ko(t, e) || this.$nextTick(this._providerUpdate); } },
      mounted() { const t = this; !this.hasProvider || this.localItems && this.localItems.length !== 0 || this._providerUpdate(), this.listenOnRoot('bv::refresh::table', ((e) => { e !== t.id && e !== t || t.refresh(); })); },
      methods: { refresh() { this.$off('refreshed', this.refresh), this.computedBusy ? this.localBusy && this.hasProvider && this.$on('refreshed', this.refresh) : (this.clearSelected(), this.hasProvider ? this.$nextTick(this._providerUpdate) : this.localItems = a(this.items) ? this.items.slice() : []); }, _providerSetLocal(t) { this.localItems = a(t) ? t.slice() : [], this.localBusy = !1, this.$emit('refreshed'), this.id && this.emitOnRoot('bv::table::refreshed', this.id); }, _providerUpdate() { const t = this; this.hasProvider && (this.computedBusy ? this.$nextTick(this.refresh) : (this.localBusy = !0, this.$nextTick((() => { try { const e = t.items(t.context, t._providerSetLocal); wt(e) ? e.then(((e) => { t._providerSetLocal(e); })) : a(e) ? t._providerSetLocal(e) : t.items.length !== 2 && (kt("Provider function didn't request callback and did not return a promise or data.", 'BTable'), t.localBusy = !1); } catch (n) { kt('Provider function error ['.concat(n.name, '] ').concat(n.message, '.'), 'BTable'), t.localBusy = !1, t.$off('refreshed', t.refresh); } })))); } },
    }; function Gw(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function Uw(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Gw(Object(n), !0).forEach(((e) => { Ww(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gw(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function Ww(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const qw = {
      inheritAttrs: !1,
      mixins: [mr],
      provide() { return { bvTable: this }; },
      props: {
        striped: { type: Boolean, default: !1 }, bordered: { type: Boolean, default: !1 }, borderless: { type: Boolean, default: !1 }, outlined: { type: Boolean, default: !1 }, dark: { type: Boolean, default: !1 }, hover: { type: Boolean, default: !1 }, small: { type: Boolean, default: !1 }, fixed: { type: Boolean, default: !1 }, responsive: { type: [Boolean, String], default: !1 }, stickyHeader: { type: [Boolean, String], default: !1 }, noBorderCollapse: { type: Boolean, default: !1 }, captionTop: { type: Boolean, default: !1 }, tableVariant: { type: String }, tableClass: { type: [String, Array, Object] },
      },
      computed: {
        isResponsive() { const t = this.responsive === '' || this.responsive; return !this.isStacked && t; },
        isStickyHeader() { const t = this.stickyHeader === '' || this.stickyHeader; return !this.isStacked && t; },
        wrapperClasses() { return [this.isStickyHeader ? 'b-table-sticky-header' : '', !0 === this.isResponsive ? 'table-responsive' : this.isResponsive ? 'table-responsive-'.concat(this.responsive) : ''].filter(V); },
        wrapperStyles() { return this.isStickyHeader && !ht(this.isStickyHeader) ? { maxHeight: this.isStickyHeader } : {}; },
        tableClasses() {
          const t = this.isTableSimple ? this.hover : this.hover && this.computedItems.length > 0 && !this.computedBusy; return [this.tableClass, {
            'table-striped': this.striped, 'table-hover': t, 'table-dark': this.dark, 'table-bordered': this.bordered, 'table-borderless': this.borderless, 'table-sm': this.small, border: this.outlined, 'b-table-fixed': this.fixed, 'b-table-caption-top': this.captionTop, 'b-table-no-border-collapse': this.noBorderCollapse,
          }, this.tableVariant ? ''.concat(this.dark ? 'bg' : 'table', '-').concat(this.tableVariant) : '', this.stackedTableClasses, this.selectableTableClasses];
        },
        tableAttrs() { const t = [(this.bvAttrs || {})['aria-describedby'], this.captionId].filter(V).join(' ') || null; const e = this.computedItems; const n = this.filteredItems; const r = this.computedFields; const i = this.selectableTableAttrs || {}; const o = this.isTableSimple ? {} : { 'aria-busy': this.computedBusy ? 'true' : 'false', 'aria-colcount': Yn(r.length), 'aria-describedby': t }; const a = e && n && n.length > e.length ? Yn(n.length) : null; return Uw(Uw(Uw({ 'aria-rowcount': a }, this.bvAttrs), {}, { id: this.safeId(), role: 'table' }, o), i); },
      },
      render(t) {
        const e = []; this.isTableSimple ? e.push(this.normalizeSlot('default')) : (e.push(this.renderCaption ? this.renderCaption() : null), e.push(this.renderColgroup ? this.renderColgroup() : null), e.push(this.renderThead ? this.renderThead() : null), e.push(this.renderTbody ? this.renderTbody() : null), e.push(this.renderTfoot ? this.renderTfoot() : null)); const n = t('table', {
          key: 'b-table', staticClass: 'table b-table', class: this.tableClasses, attrs: this.tableAttrs,
        }, e.filter(V)); return this.wrapperClasses.length > 0 ? t('div', { key: 'wrap', class: this.wrapperClasses, style: this.wrapperStyles }, [n]) : n;
      },
    }; const Yw = i.extend({ name: 'BTable', mixins: [mr, Zy, na, rn, cg, qw, fg, mw, yw, $w, fg, wg, Cg, _g, Bg, Dg, zw, Aw, Fw, Rw, Nw, Hw] }); const Kw = i.extend({ name: 'BTableLite', mixins: [Zy, na, rn, cg, qw, fg, mw, yw, $w, Bg, Dg] }); const Xw = i.extend({ name: 'BTableSimple', mixins: [na, rn, qw, fg], computed: { isTableSimple() { return !0; } } }); const Jw = zt({ components: { BTableLite: Kw } }); const Zw = zt({
      components: {
        BTableSimple: Xw, BTbody: xw, BThead: Vg, BTfoot: Wg, BTr: Qg, BTd: aw, BTh: sw,
      },
    }); const Qw = zt({ components: { BTable: Yw }, plugins: { TableLitePlugin: Jw, TableSimplePlugin: Zw } }); function tO(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function eO(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? tO(Object(n), !0).forEach(((e) => { nO(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tO(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function nO(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const rO = P(Ob, ['tabs', 'isNavBar', 'cardHeader']); const iO = function (t) { return !t.disabled; }; const oO = i.extend({
      name: 'BTabButtonHelper',
      inject: { bvTabs: { default() { return {}; } } },
      props: {
        tab: { default: null }, tabs: { type: Array, default() { return []; } }, id: { type: String, default: null }, controls: { type: String, default: null }, tabIndex: { type: Number, default: null }, posInSet: { type: Number, default: null }, setSize: { type: Number, default: null }, noKeyNav: { type: Boolean, default: !1 },
      },
      methods: { focus() { Ve(this.$refs.link); }, handleEvt(t) { const e = function () { t.preventDefault(), t.stopPropagation(); }; if (!this.tab.disabled) { const n = t.type; const r = t.keyCode; const i = t.shiftKey; n === 'click' || n === 'keydown' && r === Rn.SPACE ? (e(), this.$emit('click', t)) : n !== 'keydown' || this.noKeyNav || (r === Rn.UP || r === Rn.LEFT || r === Rn.HOME ? (e(), i || r === Rn.HOME ? this.$emit('first', t) : this.$emit('prev', t)) : r !== Rn.DOWN && r !== Rn.RIGHT && r !== Rn.END || (e(), i || r === Rn.END ? this.$emit('last', t) : this.$emit('next', t))); } } },
      render(t) {
        const e = t(_r, {
          ref: 'link',
          staticClass: 'nav-link',
          class: [{ active: this.tab.localActive && !this.tab.disabled, disabled: this.tab.disabled }, this.tab.titleLinkClass, this.tab.localActive ? this.bvTabs.activeNavItemClass : null],
          props: { disabled: this.tab.disabled },
          attrs: eO(eO({}, this.tab.titleLinkAttributes), {}, {
            role: 'tab', id: this.id, tabindex: this.tabIndex, 'aria-selected': this.tab.localActive && !this.tab.disabled ? 'true' : 'false', 'aria-setsize': this.setSize, 'aria-posinset': this.posInSet, 'aria-controls': this.controls,
          }),
          on: { click: this.handleEvt, keydown: this.handleEvt },
        }, [this.tab.normalizeSlot('title') || this.tab.title]); return t('li', { staticClass: 'nav-item', class: [this.tab.titleItemClass], attrs: { role: 'presentation' } }, [e]);
      },
    }); const aO = i.extend({
      name: 'BTabs',
      mixins: [na, rn],
      provide() { return { bvTabs: this }; },
      model: { prop: 'value', event: 'input' },
      props: eO(eO({}, rO), {}, {
        tag: { type: String, default: 'div' }, card: { type: Boolean, default: !1 }, end: { type: Boolean, default: !1 }, noFade: { type: Boolean, default: !1 }, noNavStyle: { type: Boolean, default: !1 }, noKeyNav: { type: Boolean, default: !1 }, lazy: { type: Boolean, default: !1 }, contentClass: { type: [String, Array, Object] }, navClass: { type: [String, Array, Object] }, navWrapperClass: { type: [String, Array, Object] }, activeNavItemClass: { type: [String, Array, Object] }, activeTabClass: { type: [String, Array, Object] }, value: { type: Number, default: null },
      }),
      data() {
        return {
          currentTab: ie(this.value, -1), tabs: [], registeredTabs: [], isMounted: !1,
        };
      },
      computed: { fade() { return !this.noFade; }, localNavClass() { const t = []; return this.card && this.vertical && t.push('card-header', 'h-100', 'border-bottom-0', 'rounded-0'), [].concat(t, [this.navClass]); } },
      watch: {
        currentTab(t) { let e = -1; this.tabs.forEach(((n, r) => { t !== r || n.disabled ? n.localActive = !1 : (n.localActive = !0, e = r); })), this.$emit('input', e); }, value(t, e) { if (t !== e) { t = ie(t, -1), e = ie(e, 0); const n = this.tabs; n[t] && !n[t].disabled ? this.activateTab(n[t]) : t < e ? this.previousTab() : this.nextTab(); } }, registeredTabs() { const t = this; this.$nextTick((() => { he((() => { t.updateTabs(); })); })); }, tabs(t, e) { const n = this; ko(t.map(((t) => t._uid)), e.map(((t) => t._uid))) || this.$nextTick((() => { n.$emit('changed', t.slice(), e.slice()); })); }, isMounted(t) { const e = this; t && he((() => { e.updateTabs(); })), this.setObserver(t); },
      },
      created() { const t = this; this.currentTab = ie(this.value, -1), this._bvObserver = null, this.$nextTick((() => { t.updateTabs(); })); },
      mounted() { const t = this; this.updateTabs(), this.$nextTick((() => { t.isMounted = !0; })); },
      deactivated() { this.isMounted = !1; },
      activated() { const t = this; this.currentTab = ie(this.value, -1), this.$nextTick((() => { t.updateTabs(), t.isMounted = !0; })); },
      beforeDestroy() { this.isMounted = !1; },
      destroyed() { this.tabs = []; },
      methods: {
        registerTab(t) { const e = this; s(this.registeredTabs, t) || (this.registeredTabs.push(t), t.$once('hook:destroyed', (() => { e.unregisterTab(t); }))); },
        unregisterTab(t) { this.registeredTabs = this.registeredTabs.slice().filter(((e) => e !== t)); },
        setObserver(t) {
          if (t) {
            this.setObserver(!1); const e = this; const n = function () { e.$nextTick((() => { he((() => { e.updateTabs(); })); })); }; this._bvObserver = nl(this.$refs.tabsContainer, n, {
              childList: !0, subtree: !1, attributes: !0, attributeFilter: ['id'],
            });
          } else this._bvObserver && this._bvObserver.disconnect && this._bvObserver.disconnect(), this._bvObserver = null;
        },
        getTabs() { const t = this.registeredTabs.filter(((t) => t.$children.filter(((t) => t._isTab)).length === 0)); let e = []; if (this.isMounted && t.length > 0) { const n = t.map(((t) => '#'.concat(t.safeId()))).join(', '); e = Se(n, this.$el).map(((t) => t.id)).filter(V); } return Sg(t, ((t, n) => e.indexOf(t.safeId()) - e.indexOf(n.safeId()))); },
        updateTabs() { const t = this.getTabs(); let e = t.indexOf(t.slice().reverse().find(((t) => t.localActive && !t.disabled))); if (e < 0) { const n = this.currentTab; n >= t.length ? e = t.indexOf(t.slice().reverse().find(iO)) : t[n] && !t[n].disabled && (e = n); }e < 0 && (e = t.indexOf(t.find(iO))), t.forEach(((t) => { t.localActive = !1; })), t[e] && (t[e].localActive = !0), this.tabs = t, this.currentTab = e; },
        getButtonForTab(t) { return (this.$refs.buttons || []).find(((e) => e.tab === t)); },
        updateButton(t) { const e = this.getButtonForTab(t); e && e.$forceUpdate && e.$forceUpdate(); },
        activateTab(t) { let e = !1; if (t) { const n = this.tabs.indexOf(t); if (!t.disabled && n > -1 && n !== this.currentTab) { const r = new pc('activate-tab', { cancelable: !0, vueTarget: this, componentId: this.safeId() }); this.$emit(r.type, n, this.currentTab, r), r.defaultPrevented || (e = !0, this.currentTab = n); } } return e || this.currentTab === this.value || this.$emit('input', this.currentTab), e; },
        deactivateTab(t) { return !!t && this.activateTab(this.tabs.filter(((e) => e !== t)).find(iO)); },
        focusButton(t) { const e = this; this.$nextTick((() => { Ve(e.getButtonForTab(t)); })); },
        emitTabClick(t, e) { mt(e) && t && t.$emit && !t.disabled && t.$emit('click', e); },
        clickTab(t, e) { this.activateTab(t), this.emitTabClick(t, e); },
        firstTab(t) { const e = this.tabs.find(iO); this.activateTab(e) && t && (this.focusButton(e), this.emitTabClick(e, t)); },
        previousTab(t) { const e = mn(this.currentTab, 0); const n = this.tabs.slice(0, e).reverse().find(iO); this.activateTab(n) && t && (this.focusButton(n), this.emitTabClick(n, t)); },
        nextTab(t) { const e = mn(this.currentTab, -1); const n = this.tabs.slice(e + 1).find(iO); this.activateTab(n) && t && (this.focusButton(n), this.emitTabClick(n, t)); },
        lastTab(t) { const e = this.tabs.slice().reverse().find(iO); this.activateTab(e) && t && (this.focusButton(e), this.emitTabClick(e, t)); },
      },
      render(t) {
        const e = this; const n = this.tabs; const r = n.find(((t) => t.localActive && !t.disabled)); const i = n.find(((t) => !t.disabled)); const o = n.map(((o, a) => {
          let s = null; return e.noKeyNav || (s = -1, (r === o || !r && i === o) && (s = null)), t(oO, {
            key: o._uid || a,
            ref: 'buttons',
            refInFor: !0,
            props: {
              tab: o, tabs: n, id: o.controlledBy || (o.safeId ? o.safeId('_BV_tab_button_') : null), controls: o.safeId ? o.safeId() : null, tabIndex: s, setSize: n.length, posInSet: a + 1, noKeyNav: e.noKeyNav,
            },
            on: {
              click(t) { e.clickTab(o, t); }, first: e.firstTab, prev: e.previousTab, next: e.nextTab, last: e.lastTab,
            },
          });
        })); let a = t(xb, {
          ref: 'nav',
          class: this.localNavClass,
          attrs: { role: 'tablist', id: this.safeId('_BV_tab_controls_') },
          props: {
            fill: this.fill, justified: this.justified, align: this.align, tabs: !this.noNavStyle && !this.pills, pills: !this.noNavStyle && this.pills, vertical: this.vertical, small: this.small, cardHeader: this.card && !this.vertical,
          },
        }, [this.normalizeSlot('tabs-start') || t(), o, this.normalizeSlot('tabs-end') || t()]); a = t('div', { key: 'bv-tabs-nav', class: [{ 'card-header': this.card && !this.vertical && !this.end, 'card-footer': this.card && !this.vertical && this.end, 'col-auto': this.vertical }, this.navWrapperClass] }, [a]); let s = t(); n && n.length !== 0 || (s = t('div', { key: 'bv-empty-tab', class: ['tab-pane', 'active', { 'card-body': this.card }] }, this.normalizeSlot('empty'))); const c = t('div', {
          ref: 'tabsContainer', key: 'bv-tabs-container', staticClass: 'tab-content', class: [{ col: this.vertical }, this.contentClass], attrs: { id: this.safeId('_BV_tab_container_') },
        }, l(this.normalizeSlot('default'), s)); return t(this.tag, { staticClass: 'tabs', class: { row: this.vertical, 'no-gutters': this.vertical && this.card }, attrs: { id: this.safeId() } }, [this.end ? c : t(), [a], this.end ? t() : c]);
      },
    }); const sO = i.extend({
      name: 'BTab',
      mixins: [na, rn],
      inject: { bvTabs: { default() { return {}; } } },
      props: {
        active: { type: Boolean, default: !1 }, tag: { type: String, default: 'div' }, buttonId: { type: String }, title: { type: String, default: '' }, titleItemClass: { type: [String, Array, Object] }, titleLinkClass: { type: [String, Array, Object] }, titleLinkAttributes: { type: Object }, disabled: { type: Boolean, default: !1 }, noBody: { type: Boolean, default: !1 }, lazy: { type: Boolean, default: !1 },
      },
      data() { return { localActive: this.active && !this.disabled, show: !1 }; },
      computed: {
        tabClasses() { return [{ active: this.localActive, disabled: this.disabled, 'card-body': this.bvTabs.card && !this.noBody }, this.localActive ? this.bvTabs.activeTabClass : null]; }, controlledBy() { return this.buttonId || this.safeId('__BV_tab_button__'); }, computedNoFade() { return !this.bvTabs.fade; }, computedLazy() { return this.bvTabs.lazy || this.lazy; }, _isTab() { return !0; },
      },
      watch: { localActive(t) { this.$emit('update:active', t); }, active(t, e) { t !== e && (t ? this.activate() : this.deactivate() || this.$emit('update:active', this.localActive)); }, disabled(t, e) { t !== e && t && this.localActive && this.bvTabs.firstTab && (this.localActive = !1, this.bvTabs.firstTab()); } },
      mounted() { this.registerTab(), this.show = this.localActive; },
      updated() { this.hasNormalizedSlot('title') && this.bvTabs.updateButton && this.bvTabs.updateButton(this); },
      destroyed() { this.unregisterTab(); },
      methods: {
        registerTab() { this.bvTabs.registerTab && this.bvTabs.registerTab(this); }, unregisterTab() { this.bvTabs.unregisterTab && this.bvTabs.unregisterTab(this); }, activate() { return !(!this.bvTabs.activateTab || this.disabled) && this.bvTabs.activateTab(this); }, deactivate() { return !(!this.bvTabs.deactivateTab || !this.localActive) && this.bvTabs.deactivateTab(this); },
      },
      render(t) {
        const e = t(this.tag, {
          ref: 'panel',
          staticClass: 'tab-pane',
          class: this.tabClasses,
          directives: [{
            name: 'show', rawName: 'v-show', value: this.localActive, expression: 'localActive',
          }],
          attrs: {
            role: 'tabpanel', id: this.safeId(), 'aria-hidden': this.localActive ? 'false' : 'true', 'aria-labelledby': this.controlledBy || null,
          },
        }, [this.localActive || !this.computedLazy ? this.normalizeSlot('default') : t()]); return t(tn, { props: { mode: 'out-in', noFade: this.computedNoFade } }, [e]);
      },
    }); const lO = zt({ components: { BTabs: aO, BTab: sO } }); const cO = zt({ components: { BTime: Lh } }); const uO = n('2b88'); const fO = 'BToaster'; const dO = {
      name: { type: String, required: !0 }, ariaLive: { type: String, default() { return Qt(fO, 'ariaLive'); } }, ariaAtomic: { type: String, default() { return Qt(fO, 'ariaAtomic'); } }, role: { type: String, default() { return Qt(fO, 'role'); } },
    }; const hO = i.extend({ data() { return { name: 'b-toaster' }; }, methods: { onAfterEnter(t) { const e = this; he((() => { _e(t, ''.concat(e.name, '-enter-to')); })); } }, render(t) { return t('transition-group', { props: { tag: 'div', name: this.name }, on: { afterEnter: this.onAfterEnter } }, this.$slots.default); } }); const pO = i.extend({
      name: fO,
      props: dO,
      data() { return { doRender: !1, dead: !1, staticName: this.name }; },
      beforeMount() { const t = this; this.staticName = this.name, uO.Wormhole.hasTarget(this.staticName) ? (kt('A "<portal-target>" with name "'.concat(this.name, '" already exists in the document.'), 'BToaster'), this.dead = !0) : (this.doRender = !0, this.$once('hook:beforeDestroy', (() => { t.$root.$emit('bv::toaster::destroyed', t.staticName); }))); },
      destroyed() { this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el); },
      render(t) {
        let e = t('div', { class: ['d-none', { 'b-dead-toaster': this.dead }] }); if (this.doRender) {
          const n = t(uO.PortalTarget, {
            staticClass: 'b-toaster-slot',
            props: {
              name: this.staticName, multiple: !0, tag: 'div', slim: !1, transition: hO,
            },
          }); e = t('div', {
            staticClass: 'b-toaster',
            class: [this.staticName],
            attrs: {
              id: this.staticName, role: this.role || null, 'aria-live': this.ariaLive, 'aria-atomic': this.ariaAtomic,
            },
          }, [n]);
        } return e;
      },
    }); function vO(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function bO(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? vO(Object(n), !0).forEach(((e) => { mO(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vO(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function mO(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const yO = 'BToast'; const gO = 1e3; const wO = {
      id: { type: String }, title: { type: String }, toaster: { type: String, default() { return Qt(yO, 'toaster'); } }, visible: { type: Boolean, default: !1 }, variant: { type: String, default() { return Qt(yO, 'variant'); } }, isStatus: { type: Boolean, default: !1 }, appendToast: { type: Boolean, default: !1 }, noAutoHide: { type: Boolean, default: !1 }, autoHideDelay: { type: [Number, String], default() { return Qt(yO, 'autoHideDelay'); } }, noCloseButton: { type: Boolean, default: !1 }, noFade: { type: Boolean, default: !1 }, noHoverPause: { type: Boolean, default: !1 }, solid: { type: Boolean, default: !1 }, toastClass: { type: [String, Object, Array], default() { return Qt(yO, 'toastClass'); } }, headerClass: { type: [String, Object, Array], default() { return Qt(yO, 'headerClass'); } }, bodyClass: { type: [String, Object, Array], default() { return Qt(yO, 'bodyClass'); } }, href: { type: String }, to: { type: [String, Object] }, static: { type: Boolean, default: !1 },
    }; const OO = i.extend({
      name: yO,
      mixins: [mr, na, Cl, rn, pv],
      inheritAttrs: !1,
      model: { prop: 'visible', event: 'change' },
      props: wO,
      data() {
        return {
          isMounted: !1, doRender: !1, localShow: !1, isTransitioning: !1, isHiding: !1, order: 0, timer: null, dismissStarted: 0, resumeDismiss: 0,
        };
      },
      computed: {
        bToastClasses() { return mO({ 'b-toast-solid': this.solid, 'b-toast-append': this.appendToast, 'b-toast-prepend': !this.appendToast }, 'b-toast-'.concat(this.variant), this.variant); },
        slotScope() { return { hide: this.hide }; },
        computedDuration() { return mn(ie(this.autoHideDelay, 0), gO); },
        computedToaster() { return String(this.toaster); },
        transitionHandlers() {
          return {
            beforeEnter: this.onBeforeEnter, afterEnter: this.onAfterEnter, beforeLeave: this.onBeforeLeave, afterLeave: this.onAfterLeave,
          };
        },
        computedAttrs() { return bO(bO({}, this.bvAttrs), {}, { id: this.safeId(), tabindex: '0' }); },
      },
      watch: {
        visible(t) { t ? this.show() : this.hide(); }, localShow(t) { t !== this.visible && this.$emit('change', t); }, toaster() { this.$nextTick(this.ensureToaster); }, static(t) { t && this.localShow && this.ensureToaster(); },
      },
      mounted() { const t = this; this.isMounted = !0, this.$nextTick((() => { t.visible && he((() => { t.show(); })); })), this.listenOnRoot('bv::show::toast', ((e) => { e === t.safeId() && t.show(); })), this.listenOnRoot('bv::hide::toast', ((e) => { e && e !== t.safeId() || t.hide(); })), this.listenOnRoot('bv::toaster::destroyed', ((e) => { e === t.computedToaster && t.hide(); })); },
      beforeDestroy() { this.clearDismissTimer(); },
      methods: {
        show() { const t = this; if (!this.localShow) { this.ensureToaster(); const e = this.buildEvent('show'); this.emitEvent(e), this.dismissStarted = this.resumeDismiss = 0, this.order = Date.now() * (this.appendToast ? 1 : -1), this.isHiding = !1, this.doRender = !0, this.$nextTick((() => { he((() => { t.localShow = !0; })); })); } },
        hide() { const t = this; if (this.localShow) { const e = this.buildEvent('hide'); this.emitEvent(e), this.setHoverHandler(!1), this.dismissStarted = this.resumeDismiss = 0, this.clearDismissTimer(), this.isHiding = !0, he((() => { t.localShow = !1; })); } },
        buildEvent(t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return new pc(t, bO(bO({ cancelable: !1, target: this.$el || null, relatedTarget: null }, e), {}, { vueTarget: this, componentId: this.safeId() })); },
        emitEvent(t) { const e = t.type; this.emitOnRoot('bv::toast:'.concat(e), t), this.$emit(e, t); },
        ensureToaster() { if (!this.static && !uO.Wormhole.hasTarget(this.computedToaster)) { const t = document.createElement('div'); document.body.appendChild(t); const e = new pO({ parent: this.$root, propsData: { name: this.computedToaster } }); e.$mount(t); } },
        startDismissTimer() { this.clearDismissTimer(), this.noAutoHide || (this.timer = setTimeout(this.hide, this.resumeDismiss || this.computedDuration), this.dismissStarted = Date.now(), this.resumeDismiss = 0); },
        clearDismissTimer() { clearTimeout(this.timer), this.timer = null; },
        setHoverHandler(t) { const e = this.$refs['b-toast']; ll(t, e, 'mouseenter', this.onPause, il), ll(t, e, 'mouseleave', this.onUnPause, il); },
        onPause() { if (!this.noAutoHide && !this.noHoverPause && this.timer && !this.resumeDismiss) { const t = Date.now() - this.dismissStarted; t > 0 && (this.clearDismissTimer(), this.resumeDismiss = mn(this.computedDuration - t, gO)); } },
        onUnPause() { this.noAutoHide || this.noHoverPause || !this.resumeDismiss ? this.resumeDismiss = this.dismissStarted = 0 : this.startDismissTimer(); },
        onLinkClick() { const t = this; this.$nextTick((() => { he((() => { t.hide(); })); })); },
        onBeforeEnter() { this.isTransitioning = !0; },
        onAfterEnter() { this.isTransitioning = !1; const t = this.buildEvent('shown'); this.emitEvent(t), this.startDismissTimer(), this.setHoverHandler(!0); },
        onBeforeLeave() { this.isTransitioning = !0; },
        onAfterLeave() { this.isTransitioning = !1, this.order = 0, this.resumeDismiss = this.dismissStarted = 0; const t = this.buildEvent('hidden'); this.emitEvent(t), this.doRender = !1; },
        makeToast(t) {
          const e = this; const n = []; const r = this.normalizeSlot('toast-title', this.slotScope); r ? n.push(r) : this.title && n.push(t('strong', { staticClass: 'mr-2' }, this.title)), this.noCloseButton || n.push(t(ln, { staticClass: 'ml-auto mb-1', on: { click() { e.hide(); } } })); let i = t(); n.length > 0 && (i = t('header', { staticClass: 'toast-header', class: this.headerClass }, n)); const o = this.href || this.to; const a = t(o ? _r : 'div', {
            staticClass: 'toast-body', class: this.bodyClass, props: o ? { to: this.to, href: this.href } : {}, on: o ? { click: this.onLinkClick } : {},
          }, [this.normalizeSlot('default', this.slotScope) || t()]); const s = t('div', {
            key: 'toast-'.concat(this._uid), ref: 'toast', staticClass: 'toast', class: this.toastClass, attrs: this.computedAttrs,
          }, [i, a]); return s;
        },
      },
      render(t) {
        if (!this.doRender || !this.isMounted) return t(); const e = 'b-toast-'.concat(this._uid); const n = this.static ? {} : this.scopedStyleAttrs; return t(uO.Portal, {
          props: {
            name: e, to: this.computedToaster, order: this.order, slim: !0, disabled: this.static,
          },
        }, [t('div', {
          key: e,
          ref: 'b-toast',
          staticClass: 'b-toast',
          class: this.bToastClasses,
          attrs: bO(bO({}, n), {}, {
            id: this.safeId('_toast_outer'), role: this.isHiding ? null : this.isStatus ? 'status' : 'alert', 'aria-live': this.isHiding ? null : this.isStatus ? 'polite' : 'assertive', 'aria-atomic': this.isHiding ? null : 'true',
          }),
        }, [t(tn, { props: { noFade: this.noFade }, on: this.transitionHandlers }, [this.localShow ? this.makeToast(t) : t()])])]);
      },
    }); function SO(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function xO(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } function TO(t, e, n) { return e && xO(t.prototype, e), n && xO(t, n), t; } function kO(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function PO(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? kO(Object(n), !0).forEach(((e) => { jO(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : kO(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function jO(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } function CO(t) { return EO(t) || DO(t) || BO(t) || _O(); } function _O() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } function BO(t, e) { if (t) { if (typeof t === 'string') return $O(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $O(t, e) : void 0; } } function DO(t) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t); } function EO(t) { if (Array.isArray(t)) return $O(t); } function $O(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r; } const AO = '$bvToast'; const IO = '_bv__toast'; const FO = ['id'].concat(CO(g(P(wO, ['static', 'visible'])))); const LO = { toastContent: 'default', title: 'toast-title' }; const RO = function (t) { return FO.reduce(((e, n) => (ct(t[n]) || (e[n] = t[n]), e)), {}); }; const MO = function (t) {
      const e = t.extend({
        name: 'BToastPop', extends: OO, destroyed() { this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el); }, mounted() { const t = this; const e = function () { t.localShow = !1, t.doRender = !1, t.$nextTick((() => { t.$nextTick((() => { he((() => { t.$destroy(); })); })); })); }; this.$parent.$once('hook:destroyed', e), this.$once('hidden', e), this.listenOnRoot('bv::toaster::destroyed', ((n) => { n === t.toaster && e(); })); },
      }); const n = function (t, n) { if (!Pt(AO)) { const r = new e({ parent: n, propsData: PO(PO(PO({}, RO(Qt('BToast') || {})), P(t, g(LO))), {}, { static: !1, visible: !0 }) }); g(LO).forEach(((e) => { let i = t[e]; ct(i) || (e === 'title' && pt(i) && (i = [n.$createElement('strong', { class: 'mr-2' }, i)]), r.$slots[LO[e]] = l(i)); })); const i = document.createElement('div'); document.body.appendChild(i), r.$mount(i); } }; const r = (function () { function t(e) { SO(this, t), h(this, { _vm: e, _root: e.$root }), v(this, { _vm: j(), _root: j() }); } return TO(t, [{ key: 'toast', value(t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; t && !Pt(AO) && n(PO(PO({}, RO(e)), {}, { toastContent: t }), this._vm); } }, { key: 'show', value(t) { t && this._root.$emit('bv::show::toast', t); } }, { key: 'hide', value() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; this._root.$emit('bv::hide::toast', t); } }]), t; }()); t.mixin({ beforeCreate() { this[IO] = new r(this); } }), w(t.prototype, AO) || b(t.prototype, AO, { get() { return this && this[IO] || kt('"'.concat(AO, '" must be accessed from a Vue instance "this" context.'), 'BToast'), this[IO]; } });
    }; const NO = zt({ plugins: { plugin: MO } }); const VO = zt({ components: { BToast: OO, BToaster: pO }, plugins: { BVToastPlugin: NO } }); function zO(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function HO(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? zO(Object(n), !0).forEach(((e) => { GO(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zO(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function GO(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } const UO = '__BV_Tooltip__'; const WO = 'hover focus'; const qO = {
      focus: !0, hover: !0, click: !0, blur: !0, manual: !0,
    }; const YO = /^html$/i; const KO = /^noninteractive$/i; const XO = /^nofade$/i; const JO = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i; const ZO = /^(window|viewport|scrollParent)$/i; const QO = /^d\d+$/i; const tS = /^ds\d+$/i; const eS = /^dh\d+$/i; const nS = /^o-?\d+$/i; const rS = /^v-.+$/i; const iS = /\s+/; const oS = function (t, e) {
      const n = 'BTooltip'; let r = {
        title: void 0, trigger: '', placement: 'top', fallbackPlacement: 'flip', container: !1, animation: !0, offset: 0, id: null, html: !1, interactive: !0, disabled: !1, delay: Qt(n, 'delay'), boundary: String(Qt(n, 'boundary')), boundaryPadding: ie(Qt(n, 'boundaryPadding'), 0), variant: Qt(n, 'variant'), customClass: Qt(n, 'customClass'),
      }; if (pt(t.value) || vt(t.value) || dt(t.value) ? r.title = t.value : x(t.value) && (r = HO(HO({}, r), t.value)), ct(r.title)) { const i = e.data || {}; r.title = i.attrs && !ft(i.attrs.title) ? i.attrs.title : void 0; }x(r.delay) || (r.delay = { show: ie(r.delay, 0), hide: ie(r.delay, 0) }), t.arg && (r.container = '#'.concat(t.arg)), g(t.modifiers).forEach(((t) => { if (YO.test(t))r.html = !0; else if (KO.test(t))r.interactive = !1; else if (XO.test(t))r.animation = !1; else if (JO.test(t))r.placement = t; else if (ZO.test(t))t = t === 'scrollparent' ? 'scrollParent' : t, r.boundary = t; else if (QO.test(t)) { const e = ie(t.slice(1), 0); r.delay.show = e, r.delay.hide = e; } else tS.test(t) ? r.delay.show = ie(t.slice(2), 0) : eS.test(t) ? r.delay.hide = ie(t.slice(2), 0) : nS.test(t) ? r.offset = ie(t.slice(1), 0) : rS.test(t) && (r.variant = t.slice(2) || null); })); const o = {}; return l(r.trigger || '').filter(V).join(' ').trim()
        .toLowerCase()
        .split(iS)
        .forEach(((t) => { qO[t] && (o[t] = !0); })), g(t.modifiers).forEach(((t) => { t = t.toLowerCase(), qO[t] && (o[t] = !0); })), r.trigger = g(o).join(' '), r.trigger === 'blur' && (r.trigger = 'focus'), r.trigger || (r.trigger = WO), r;
    }; const aS = function (t, e, n) {
      if (z.j) {
        const r = oS(e, n); if (!t[UO]) { const i = n.context; t[UO] = new ey({ parent: i, _scopeId: dv(i, void 0) }), t[UO].__bv_prev_data__ = {}, t[UO].$on('show', (() => { dt(r.title) && t[UO].updateData({ title: r.title(t) }); })); } const o = {
          title: r.title, triggers: r.trigger, placement: r.placement, fallbackPlacement: r.fallbackPlacement, variant: r.variant, customClass: r.customClass, container: r.container, boundary: r.boundary, delay: r.delay, offset: r.offset, noFade: !r.animation, id: r.id, interactive: r.interactive, disabled: r.disabled, html: r.html,
        }; const a = t[UO].__bv_prev_data__; if (t[UO].__bv_prev_data__ = o, !ko(o, a)) { const s = { target: t }; g(o).forEach(((e) => { o[e] !== a[e] && (s[e] = e === 'title' && dt(o[e]) ? o[e](t) : o[e]); })), t[UO].updateData(s); }
      }
    }; const sS = function (t) { t[UO] && (t[UO].$destroy(), t[UO] = null), delete t[UO]; }; const lS = { bind(t, e, n) { aS(t, e, n); }, componentUpdated(t, e, n) { n.context.$nextTick((() => { aS(t, e, n); })); }, unbind(t) { sS(t); } }; const cS = zt({ directives: { VBTooltip: lS } }); const uS = zt({ components: { BTooltip: ry }, plugins: { VBTooltipPlugin: cS } }); const fS = zt({
      plugins: {
        AlertPlugin: vn, AspectPlugin: An, AvatarPlugin: Hi, BadgePlugin: Ji, BreadcrumbPlugin: ho, ButtonPlugin: po, ButtonGroupPlugin: go, ButtonToolbarPlugin: So, CalendarPlugin: Ta, CardPlugin: Ks, CarouselPlugin: wl, CollapsePlugin: cc, DropdownPlugin: uu, EmbedPlugin: pu, FormPlugin: Du, FormCheckboxPlugin: qu, FormDatepickerPlugin: df, FormFilePlugin: Of, FormGroupPlugin: qf, FormInputPlugin: nd, FormRadioPlugin: od, FormRatingPlugin: yd, FormSelectPlugin: kd, FormSpinbuttonPlugin: Gd, FormTagsPlugin: hh, FormTextareaPlugin: yh, FormTimepickerPlugin: Uh, ImagePlugin: Wh, InputGroupPlugin: yp, JumbotronPlugin: Pp, LayoutPlugin: Lp, LinkPlugin: Rp, ListGroupPlugin: Xp, MediaPlugin: iv, ModalPlugin: gb, NavPlugin: Rb, NavbarPlugin: nm, OverlayPlugin: fm, PaginationPlugin: _m, PaginationNavPlugin: Am, PopoverPlugin: Dy, ProgressPlugin: Fy, SidebarPlugin: Xy, SpinnerPlugin: Jy, TablePlugin: Qw, TabsPlugin: lO, TimePlugin: cO, ToastPlugin: VO, TooltipPlugin: uS,
      },
    }); const dS = zt({ directives: { VBHover: tf } }); const hS = zt({ directives: { VBModal: Zv } }); function pS(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter(((e) => Object.getOwnPropertyDescriptor(t, e).enumerable))), n.push.apply(n, r); } return n; } function vS(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? pS(Object(n), !0).forEach(((e) => { bS(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pS(Object(n)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function bS(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : t[e] = n, t;
    } function mS(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function yS(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } function gS(t, e, n) { return e && yS(t.prototype, e), n && yS(t, n), t; } const wS = 'v-b-scrollspy'; const OS = 'bv::scrollspy::activate'; const SS = {
      element: 'body', offset: 10, method: 'auto', throttle: 75,
    }; const xS = {
      element: '(string|element|component)', offset: 'number', method: 'string', throttle: 'number',
    }; const TS = { DROPDOWN_ITEM: 'dropdown-item', ACTIVE: 'active' }; const kS = {
      ACTIVE: '.active', NAV_LIST_GROUP: '.nav, .list-group', NAV_LINKS: '.nav-link', NAV_ITEMS: '.nav-item', LIST_ITEMS: '.list-group-item', DROPDOWN: '.dropdown, .dropup', DROPDOWN_ITEMS: '.dropdown-item', DROPDOWN_TOGGLE: '.dropdown-toggle',
    }; const PS = { OFFSET: 'offset', POSITION: 'position' }; const jS = /^.*(#[^#]+)$/; const CS = ['webkitTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd']; const _S = function (t) { return O(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase(); }; const BS = function (t, e, n) { for (const r in n) if (w(n, r)) { const i = n[r]; const o = e[r]; let a = o && be(o) ? 'element' : _S(o); a = o && o._isVue ? 'component' : a, new RegExp(i).test(a) || kt(''.concat(t, ': Option "').concat(r, '" provided type "').concat(a, '" but expected type "').concat(i, '"')); } }; const DS = (function () {
      function t(e, n, r) { mS(this, t), this.$el = e, this.$scroller = null, this.$selector = [kS.NAV_LINKS, kS.LIST_ITEMS, kS.DROPDOWN_ITEMS].join(','), this.$offsets = [], this.$targets = [], this.$activeTarget = null, this.$scrollHeight = 0, this.$resizeTimeout = null, this.$obs_scroller = null, this.$obs_targets = null, this.$root = r || null, this.$config = null, this.updateConfig(n); } return gS(t, [{ key: 'updateConfig', value(t, e) { this.$scroller && (this.unlisten(), this.$scroller = null); const n = vS(vS({}, this.constructor.Default), t); if (e && (this.$root = e), BS(this.constructor.Name, n, this.constructor.DefaultType), this.$config = n, this.$root) { const r = this; this.$root.$nextTick((() => { r.listen(); })); } else this.listen(); } }, { key: 'dispose', value() { this.unlisten(), clearTimeout(this.$resizeTimeout), this.$resizeTimeout = null, this.$el = null, this.$config = null, this.$scroller = null, this.$selector = null, this.$offsets = null, this.$targets = null, this.$activeTarget = null, this.$scrollHeight = null; } }, { key: 'listen', value() { const t = this; const e = this.getScroller(); e && e.tagName !== 'BODY' && al(e, 'scroll', this, il), al(window, 'scroll', this, il), al(window, 'resize', this, il), al(window, 'orientationchange', this, il), CS.forEach(((e) => { al(window, e, t, il); })), this.setObservers(!0), this.handleEvent('refresh'); } }, { key: 'unlisten', value() { const t = this; const e = this.getScroller(); this.setObservers(!1), e && e.tagName !== 'BODY' && sl(e, 'scroll', this, il), sl(window, 'scroll', this, il), sl(window, 'resize', this, il), sl(window, 'orientationchange', this, il), CS.forEach(((e) => { sl(window, e, t, il); })); } }, {
        key: 'setObservers',
        value(t) {
          const e = this; this.$obs_scroller && (this.$obs_scroller.disconnect(), this.$obs_scroller = null), this.$obs_targets && (this.$obs_targets.disconnect(), this.$obs_targets = null), t && (this.$obs_targets = nl(this.$el, (() => { e.handleEvent('mutation'); }), {
            subtree: !0, childList: !0, attributes: !0, attributeFilter: ['href'],
          }), this.$obs_scroller = nl(this.getScroller(), (() => { e.handleEvent('mutation'); }), {
            subtree: !0, childList: !0, characterData: !0, attributes: !0, attributeFilter: ['id', 'style', 'class'],
          }));
        },
      }, { key: 'handleEvent', value(t) { const e = pt(t) ? t : t.type; const n = this; const r = function () { n.$resizeTimeout || (n.$resizeTimeout = setTimeout((() => { n.refresh(), n.process(), n.$resizeTimeout = null; }), n.$config.throttle)); }; e === 'scroll' ? (this.$obs_scroller || this.listen(), this.process()) : /(resize|orientationchange|mutation|refresh)/.test(e) && r(); } }, {
        key: 'refresh',
        value() {
          const t = this; const e = this.getScroller(); if (e) {
            const n = e !== e.window ? PS.POSITION : PS.OFFSET; const r = this.$config.method === 'auto' ? n : this.$config.method; const i = r === PS.POSITION ? Me : Re; const o = r === PS.POSITION ? this.getScrollTop() : 0; return this.$offsets = [], this.$targets = [], this.$scrollHeight = this.getScrollHeight(), Se(this.$selector, this.$el).map(((t) => $e(t, 'href'))).filter(((t) => t && jS.test(t || ''))).map(((t) => { const n = t.replace(jS, '$1').trim(); if (!n) return null; const r = xe(n, e); return r && ge(r) ? { offset: ie(i(r).top, 0) + o, target: n } : null; }))
              .filter(Boolean)
              .sort(((t, e) => t.offset - e.offset))
              .reduce(((e, n) => (e[n.target] || (t.$offsets.push(n.offset), t.$targets.push(n.target), e[n.target] = !0), e)), {}), this;
          }
        },
      }, { key: 'process', value() { const t = this.getScrollTop() + this.$config.offset; const e = this.getScrollHeight(); const n = this.$config.offset + e - this.getOffsetHeight(); if (this.$scrollHeight !== e && this.refresh(), t >= n) { const r = this.$targets[this.$targets.length - 1]; this.$activeTarget !== r && this.activate(r); } else { if (this.$activeTarget && t < this.$offsets[0] && this.$offsets[0] > 0) return this.$activeTarget = null, void this.clear(); for (let i = this.$offsets.length; i--;) { const o = this.$activeTarget !== this.$targets[i] && t >= this.$offsets[i] && (ct(this.$offsets[i + 1]) || t < this.$offsets[i + 1]); o && this.activate(this.$targets[i]); } } } }, { key: 'getScroller', value() { if (this.$scroller) return this.$scroller; let t = this.$config.element; return t ? (be(t.$el) ? t = t.$el : pt(t) && (t = xe(t)), t ? (this.$scroller = t.tagName === 'BODY' ? window : t, this.$scroller) : null) : null; } }, { key: 'getScrollTop', value() { const t = this.getScroller(); return t === window ? t.pageYOffset : t.scrollTop; } }, { key: 'getScrollHeight', value() { return this.getScroller().scrollHeight || mn(document.body.scrollHeight, document.documentElement.scrollHeight); } }, { key: 'getOffsetHeight', value() { const t = this.getScroller(); return t === window ? window.innerHeight : Ie(t).height; } }, { key: 'activate', value(t) { const e = this; this.$activeTarget = t, this.clear(); const n = Se(this.$selector.split(',').map(((e) => ''.concat(e, '[href$="').concat(t, '"]'))).join(','), this.$el); n.forEach(((t) => { if (Be(t, TS.DROPDOWN_ITEM)) { const n = ke(kS.DROPDOWN, t); n && e.setActiveState(xe(kS.DROPDOWN_TOGGLE, n), !0), e.setActiveState(t, !0); } else { e.setActiveState(t, !0), Te(t.parentElement, kS.NAV_ITEMS) && e.setActiveState(t.parentElement, !0); let r = t; while (r) { r = ke(kS.NAV_LIST_GROUP, r); const i = r ? r.previousElementSibling : null; i && Te(i, ''.concat(kS.NAV_LINKS, ', ').concat(kS.LIST_ITEMS)) && e.setActiveState(i, !0), i && Te(i, kS.NAV_ITEMS) && (e.setActiveState(xe(kS.NAV_LINKS, i), !0), e.setActiveState(i, !0)); } } })), n && n.length > 0 && this.$root && this.$root.$emit(OS, t, n); } }, { key: 'clear', value() { const t = this; Se(''.concat(this.$selector, ', ').concat(kS.NAV_ITEMS), this.$el).filter(((t) => Be(t, TS.ACTIVE))).forEach(((e) => t.setActiveState(e, !1))); } }, { key: 'setActiveState', value(t, e) { t && (e ? Ce(t, TS.ACTIVE) : _e(t, TS.ACTIVE)); } }], [{ key: 'Name', get() { return wS; } }, { key: 'Default', get() { return SS; } }, { key: 'DefaultType', get() { return xS; } }]), t;
    }()); const ES = DS; const $S = '__BV_ScrollSpy__'; const AS = /^\d+$/; const IS = /^(auto|position|offset)$/; const FS = function (t) { const e = {}; return t.arg && (e.element = '#'.concat(t.arg)), g(t.modifiers).forEach(((t) => { AS.test(t) ? e.offset = ie(t, 0) : IS.test(t) && (e.method = t); })), pt(t.value) ? e.element = t.value : vt(t.value) ? e.offset = Sn(t.value) : S(t.value) && g(t.value).filter(((t) => !!ES.DefaultType[t])).forEach(((n) => { e[n] = t.value[n]; })), e; }; const LS = function (t, e, n) { if (z.j) { const r = FS(e); t[$S] ? t[$S].updateConfig(r, n.context.$root) : t[$S] = new ES(t, r, n.context.$root); } }; const RS = function (t) { t[$S] && (t[$S].dispose(), t[$S] = null, delete t[$S]); }; const MS = {
      bind(t, e, n) { LS(t, e, n); }, inserted(t, e, n) { LS(t, e, n); }, update(t, e, n) { e.value !== e.oldValue && LS(t, e, n); }, componentUpdated(t, e, n) { e.value !== e.oldValue && LS(t, e, n); }, unbind(t) { RS(t); },
    }; const NS = zt({ directives: { VBScrollspy: MS } }); const VS = zt({ directives: { VBVisible: Cs } }); const zS = zt({
      plugins: {
        VBHoverPlugin: dS, VBModalPlugin: hS, VBPopoverPlugin: By, VBScrollspyPlugin: NS, VBTogglePlugin: lc, VBTooltipPlugin: cS, VBVisiblePlugin: VS,
      },
    }); const HS = 'BootstrapVue'; const GS = Vt({ plugins: { componentsPlugin: fS, directivesPlugin: zS } }); const US = { install: GS, NAME: HS }; e.a = US;
  },
  '5fb2': function (t, e, n) {
    const r = 2147483647; const i = 36; const o = 1; const a = 26; const s = 38; const l = 700; const c = 72; const u = 128; const f = '-'; const d = /[^\0-\u007E]/; const h = /[.\u3002\uFF0E\uFF61]/g; const p = 'Overflow: input needs wider integers to process'; const v = i - o; const b = Math.floor; const m = String.fromCharCode; const y = function (t) { const e = []; let n = 0; const r = t.length; while (n < r) { const i = t.charCodeAt(n++); if (i >= 55296 && i <= 56319 && n < r) { const o = t.charCodeAt(n++); (64512 & o) == 56320 ? e.push(((1023 & i) << 10) + (1023 & o) + 65536) : (e.push(i), n--); } else e.push(i); } return e; }; const g = function (t) { return t + 22 + 75 * (t < 26); }; const w = function (t, e, n) { let r = 0; for (t = n ? b(t / l) : t >> 1, t += b(t / e); t > v * a >> 1; r += i)t = b(t / v); return b(r + (v + 1) * t / (t + s)); }; const O = function (t) { const e = []; t = y(t); let n; let s; const l = t.length; let d = u; let h = 0; let v = c; for (n = 0; n < t.length; n++)s = t[n], s < 128 && e.push(m(s)); const O = e.length; let S = O; O && e.push(f); while (S < l) { let x = r; for (n = 0; n < t.length; n++)s = t[n], s >= d && s < x && (x = s); const T = S + 1; if (x - d > b((r - h) / T)) throw RangeError(p); for (h += (x - d) * T, d = x, n = 0; n < t.length; n++) { if (s = t[n], s < d && ++h > r) throw RangeError(p); if (s == d) { for (var k = h, P = i; ;P += i) { const j = P <= v ? o : P >= v + a ? a : P - v; if (k < j) break; const C = k - j; const _ = i - j; e.push(m(g(j + C % _))), k = b(C / _); }e.push(m(g(k))), v = w(h, T, S == O), h = 0, ++S; } }++h, ++d; } return e.join(''); }; t.exports = function (t) { let e; let n; const r = []; const i = t.toLowerCase().replace(h, '.').split('.'); for (e = 0; e < i.length; e++)n = i[e], r.push(d.test(n) ? `xn--${O(n)}` : n); return r.join('.'); };
  },
  '60a3': function (t, e, n) {
    const r = n('2b0e'); n.d(e, 'b', (() => r.default)); const i = n('2fe1'); n.d(e, 'a', (() => i.b)); typeof Reflect !== 'undefined' && Reflect.getMetadata;
  },
  '60da': function (t, e, n) {
    const r = n('83ab'); const i = n('d039'); const o = n('df75'); const a = n('7418'); const s = n('d1e7'); const l = n('7b0b'); const c = n('44ad'); const u = Object.assign; const f = Object.defineProperty; t.exports = !u || i((() => { if (r && ({ b: 1, ...u(f({}, 'a', { enumerable: !0, get() { f(this, 'b', { value: 3, enumerable: !1 }); } }), { b: 2 }) }).b !== 1) return !0; const t = {}; const e = {}; const n = Symbol(); const i = 'abcdefghijklmnopqrst'; return t[n] = 7, i.split('').forEach(((t) => { e[t] = t; })), ({ ...t })[n] != 7 || o({ ...e }).join('') != i; })) ? function (t, e) { const n = l(t); const i = arguments.length; let u = 1; const { f } = a; const d = s.f; while (i > u) { var h; const p = c(arguments[u++]); const v = f ? o(p).concat(f(p)) : o(p); const b = v.length; let m = 0; while (b > m)h = v[m++], r && !d.call(p, h) || (n[h] = p[h]); } return n; } : u;
  },
  6117(t, e, n) { const r = n('8b0e'); const i = r('toStringTag'); const o = {}; o[i] = 'z', t.exports = String(o) === '[object z]'; },
  '613f': function (t, e, n) { const r = n('8b0e'); const i = n('6756'); const o = n('4c07'); const a = r('unscopables'); const s = Array.prototype; void 0 == s[a] && o.f(s, a, { configurable: !0, value: i(null) }), t.exports = function (t) { s[a][t] = !0; }; },
  6547(t, e, n) { const r = n('a691'); const i = n('1d80'); const o = function (t) { return function (e, n) { let o; let a; const s = String(i(e)); const l = r(n); const c = s.length; return l < 0 || l >= c ? t ? '' : void 0 : (o = s.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : o : t ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536); }; }; t.exports = { codeAt: o(!1), charAt: o(!0) }; },
  '65ee': function (t, e, n) {
    let r; let i; let o; const a = n('9aed'); const s = n('3261'); const l = n('7f34'); const c = n('8b0e'); const u = n('0f33'); const f = c('iterator'); let d = !1; const h = function () { return this; }; [].keys && (o = [].keys(), 'next' in o ? (i = a(a(o)), i !== Object.prototype && (r = i)) : d = !0), void 0 == r && (r = {}), u || l(r, f) || s(r, f, h), t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d };
  },
  '65f0': function (t, e, n) { const r = n('861d'); const i = n('e8b5'); const o = n('b622'); const a = o('species'); t.exports = function (t, e) { let n; return i(t) && (n = t.constructor, typeof n !== 'function' || n !== Array && !i(n.prototype) ? r(n) && (n = n[a], n === null && (n = void 0)) : n = void 0), new (void 0 === n ? Array : n)(e === 0 ? 0 : e); }; },
  6756(t, e, n) { let r; const i = n('d0c8'); const o = n('df84'); const a = n('c51e'); const s = n('1fc1'); const l = n('68d9'); const c = n('c4dd'); const u = n('816e'); const f = '>'; const d = '<'; const h = 'prototype'; const p = 'script'; const v = u('IE_PROTO'); const b = function () {}; const m = function (t) { return `${d + p + f + t + d}/${p}${f}`; }; const y = function (t) { t.write(m('')), t.close(); const e = t.parentWindow.Object; return t = null, e; }; const g = function () { let t; const e = c('iframe'); const n = `java${p}:`; return e.style.display = 'none', l.appendChild(e), e.src = String(n), t = e.contentWindow.document, t.open(), t.write(m('document.F=Object')), t.close(), t.F; }; var w = function () { try { r = document.domain && new ActiveXObject('htmlfile'); } catch (e) {}w = r ? y(r) : g(); let t = a.length; while (t--) delete w[h][a[t]]; return w(); }; s[v] = !0, t.exports = Object.create || function (t, e) { let n; return t !== null ? (b[h] = i(t), n = new b(), b[h] = null, n[v] = t) : n = w(), void 0 === e ? n : o(n, e); }; },
  '68d9': function (t, e, n) { const r = n('0ee6'); t.exports = r('document', 'documentElement'); },
  '68e0': function (t, e, n) { const r = n('5f2f'); t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r); },
  '69f3': function (t, e, n) {
    let r; let i; let o; const a = n('7f9a'); const s = n('da84'); const l = n('861d'); const c = n('9112'); const u = n('5135'); const f = n('f772'); const d = n('d012'); const h = s.WeakMap; const p = function (t) { return o(t) ? i(t) : r(t, {}); }; const v = function (t) { return function (e) { let n; if (!l(e) || (n = i(e)).type !== t) throw TypeError(`Incompatible receiver, ${t} required`); return n; }; }; if (a) {
      const b = new h(); const m = b.get; const y = b.has; const
        g = b.set; r = function (t, e) { return g.call(b, t, e), e; }, i = function (t) { return m.call(b, t) || {}; }, o = function (t) { return y.call(b, t); };
    } else { const w = f('state'); d[w] = !0, r = function (t, e) { return c(t, w, e), e; }, i = function (t) { return u(t, w) ? t[w] : {}; }, o = function (t) { return u(t, w); }; }t.exports = {
      set: r, get: i, has: o, enforce: p, getterFor: v,
    };
  },
  '6eeb': function (t, e, n) { const r = n('da84'); const i = n('9112'); const o = n('5135'); const a = n('ce4e'); const s = n('8925'); const l = n('69f3'); const c = l.get; const u = l.enforce; const f = String(String).split('String'); (t.exports = function (t, e, n, s) { const l = !!s && !!s.unsafe; let c = !!s && !!s.enumerable; const d = !!s && !!s.noTargetGet; typeof n === 'function' && (typeof e !== 'string' || o(n, 'name') || i(n, 'name', e), u(n).source = f.join(typeof e === 'string' ? e : '')), t !== r ? (l ? !d && t[e] && (c = !0) : delete t[e], c ? t[e] = n : i(t, e, n)) : c ? t[e] = n : a(e, n); })(Function.prototype, 'toString', (function () { return typeof this === 'function' && c(this).source || s(this); })); },
  7024(t, e, n) { const r = n('09e4'); const i = n('3261'); const o = n('7f34'); const a = n('79ae'); const s = n('0209'); const l = n('a547'); const c = l.get; const u = l.enforce; const f = String(String).split('String'); (t.exports = function (t, e, n, s) { const l = !!s && !!s.unsafe; let c = !!s && !!s.enumerable; const d = !!s && !!s.noTargetGet; typeof n === 'function' && (typeof e !== 'string' || o(n, 'name') || i(n, 'name', e), u(n).source = f.join(typeof e === 'string' ? e : '')), t !== r ? (l ? !d && t[e] && (c = !0) : delete t[e], c ? t[e] = n : i(t, e, n)) : c ? t[e] = n : a(e, n); })(Function.prototype, 'toString', (function () { return typeof this === 'function' && c(this).source || s(this); })); },
  7418(t, e) { e.f = Object.getOwnPropertySymbols; },
  '746f': function (t, e, n) { const r = n('428f'); const i = n('5135'); const o = n('e538'); const a = n('9bf2').f; t.exports = function (t) { const e = r.Symbol || (r.Symbol = {}); i(e, t) || a(e, t, { value: o.f(t) }); }; },
  '761e': function (t, e, n) {
    const r = n('90c5'); const i = function (t) { let e; let n; this.promise = new t((((t, r) => { if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor'); e = t, n = r; }))), this.resolve = r(e), this.reject = r(n); }; t.exports.f = function (t) { return new i(t); };
  },
  '76af': function (t, e) { t.exports = function (t) { if (void 0 == t) throw TypeError(`Can't call method on ${t}`); return t; }; },
  '774c': function (t, e, n) { const r = n('a714'); const i = n('d714'); const o = ''.split; t.exports = r((() => !Object('z').propertyIsEnumerable(0))) ? function (t) { return i(t) == 'String' ? o.call(t, '') : Object(t); } : Object; },
  '77da': function (t, e, n) { const r = n('4c07').f; const i = n('7f34'); const o = n('8b0e'); const a = o('toStringTag'); t.exports = function (t, e, n) { t && !i(t = n ? t : t.prototype, a) && r(t, a, { configurable: !0, value: e }); }; },
  7820(t, e, n) { const r = n('6117'); const i = n('d714'); const o = n('8b0e'); const a = o('toStringTag'); const s = i(function () { return arguments; }()) == 'Arguments'; const l = function (t, e) { try { return t[e]; } catch (n) {} }; t.exports = r ? i : function (t) { let e; let n; let r; return void 0 === t ? 'Undefined' : t === null ? 'Null' : typeof (n = l(e = Object(t), a)) === 'string' ? n : s ? i(e) : (r = i(e)) == 'Object' && typeof e.callee === 'function' ? 'Arguments' : r; }; },
  7839(t, e) { t.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf']; },
  '793f': function (t, e, n) {
    const r = n('0ee6'); const i = n('4c07'); const o = n('8b0e'); const a = n('0368'); const s = o('species'); t.exports = function (t) { const e = r(t); const n = i.f; a && e && !e[s] && n(e, s, { configurable: !0, get() { return this; } }); };
  },
  '79ae': function (t, e, n) { const r = n('09e4'); const i = n('3261'); t.exports = function (t, e) { try { i(r, t, e); } catch (n) { r[t] = e; } return e; }; },
  '7b0b': function (t, e, n) { const r = n('1d80'); t.exports = function (t) { return Object(r(t)); }; },
  '7c73': function (t, e, n) { let r; const i = n('825a'); const o = n('37e8'); const a = n('7839'); const s = n('d012'); const l = n('1be4'); const c = n('cc12'); const u = n('f772'); const f = '>'; const d = '<'; const h = 'prototype'; const p = 'script'; const v = u('IE_PROTO'); const b = function () {}; const m = function (t) { return `${d + p + f + t + d}/${p}${f}`; }; const y = function (t) { t.write(m('')), t.close(); const e = t.parentWindow.Object; return t = null, e; }; const g = function () { let t; const e = c('iframe'); const n = `java${p}:`; return e.style.display = 'none', l.appendChild(e), e.src = String(n), t = e.contentWindow.document, t.open(), t.write(m('document.F=Object')), t.close(), t.F; }; var w = function () { try { r = document.domain && new ActiveXObject('htmlfile'); } catch (e) {}w = r ? y(r) : g(); let t = a.length; while (t--) delete w[h][a[t]]; return w(); }; s[v] = !0, t.exports = Object.create || function (t, e) { let n; return t !== null ? (b[h] = i(t), n = new b(), b[h] = null, n[v] = t) : n = w(), void 0 === e ? n : o(n, e); }; },
  '7dd0': function (t, e, n) {
    const r = n('23e7'); const i = n('9ed3'); const o = n('e163'); const a = n('d2bb'); const s = n('d44e'); const l = n('9112'); const c = n('6eeb'); const u = n('b622'); const f = n('c430'); const d = n('3f8c'); const h = n('ae93'); const p = h.IteratorPrototype; const v = h.BUGGY_SAFARI_ITERATORS; const b = u('iterator'); const m = 'keys'; const y = 'values'; const g = 'entries'; const w = function () { return this; }; t.exports = function (t, e, n, u, h, O, S) { i(n, e, u); let x; let T; let k; const P = function (t) { if (t === h && D) return D; if (!v && t in _) return _[t]; switch (t) { case m: return function () { return new n(this, t); }; case y: return function () { return new n(this, t); }; case g: return function () { return new n(this, t); }; } return function () { return new n(this); }; }; const j = `${e} Iterator`; let C = !1; var _ = t.prototype; const B = _[b] || _['@@iterator'] || h && _[h]; var D = !v && B || P(h); const E = e == 'Array' && _.entries || B; if (E && (x = o(E.call(new t())), p !== Object.prototype && x.next && (f || o(x) === p || (a ? a(x, p) : typeof x[b] !== 'function' && l(x, b, w)), s(x, j, !0, !0), f && (d[j] = w))), h == y && B && B.name !== y && (C = !0, D = function () { return B.call(this); }), f && !S || _[b] === D || l(_, b, D), d[e] = D, h) if (T = { values: P(y), keys: O ? D : P(m), entries: P(g) }, S) for (k in T)(v || C || !(k in _)) && c(_, k, T[k]); else r({ target: e, proto: !0, forced: v || C }, T); return T; };
  },
  '7f34': function (t, e) { const n = {}.hasOwnProperty; t.exports = function (t, e) { return n.call(t, e); }; },
  '7f9a': function (t, e, n) { const r = n('da84'); const i = n('8925'); const o = r.WeakMap; t.exports = typeof o === 'function' && /native code/.test(i(o)); },
  '808c': function (t, e, n) { const r = n('8b0e'); const i = r('iterator'); let o = !1; try { let a = 0; const s = { next() { return { done: !!a++ }; }, return() { o = !0; } }; s[i] = function () { return this; }, Array.from(s, (() => { throw 2; })); } catch (l) {}t.exports = function (t, e) { if (!e && !o) return !1; let n = !1; try { const r = {}; r[i] = function () { return { next() { return { done: n = !0 }; } }; }, t(r); } catch (l) {} return n; }; },
  '816e': function (t, e, n) { const r = n('0828'); const i = n('f385'); const o = r('keys'); t.exports = function (t) { return o[t] || (o[t] = i(t)); }; },
  '825a': function (t, e, n) { const r = n('861d'); t.exports = function (t) { if (!r(t)) throw TypeError(`${String(t)} is not an object`); return t; }; },
  '83ab': function (t, e, n) { const r = n('d039'); t.exports = !r((() => Object.defineProperty({}, 1, { get() { return 7; } })[1] != 7)); },
  8418(t, e, n) {
    const r = n('c04e'); const i = n('9bf2'); const o = n('5c6c'); t.exports = function (t, e, n) { const a = r(e); a in t ? i.f(t, a, o(0, n)) : t[a] = n; };
  },
  '861d': function (t, e) { t.exports = function (t) { return typeof t === 'object' ? t !== null : typeof t === 'function'; }; },
  8779(t, e, n) { const r = n('a714'); t.exports = !r((() => { function t() {} return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype; })); },
  8925(t, e, n) { const r = n('c6cd'); const i = Function.toString; typeof r.inspectSource !== 'function' && (r.inspectSource = function (t) { return i.call(t); }), t.exports = r.inspectSource; },
  '894d': function (t, e, n) { const r = n('d0c8'); const i = n('90c5'); const o = n('8b0e'); const a = o('species'); t.exports = function (t, e) { let n; const o = r(t).constructor; return void 0 === o || void 0 == (n = r(o)[a]) ? e : i(n); }; },
  '8aa5': function (t, e, n) {
    const r = n('6547').charAt; t.exports = function (t, e, n) { return e + (n ? r(t, e).length : 1); };
  },
  '8b0e': function (t, e, n) { const r = n('09e4'); const i = n('0828'); const o = n('7f34'); const a = n('f385'); const s = n('20a7'); const l = n('aa51'); const c = i('wks'); const u = r.Symbol; const f = l ? u : u && u.withoutSetter || a; t.exports = function (t) { return o(c, t) || (s && o(u, t) ? c[t] = u[t] : c[t] = f(`Symbol.${t}`)), c[t]; }; },
  '8c4f': function (t, e, n) {
    /*!
  * vue-router v3.1.6
  * (c) 2020 Evan You
  * @license MIT
  */function r(t, e) { 0; } function i(t) { return Object.prototype.toString.call(t).indexOf('Error') > -1; } function o(t, e) { return e instanceof t || e && (e.name === t.name || e._name === t._name); } function a(t, e) { for (const n in e)t[n] = e[n]; return t; } const s = {
      name: 'RouterView', functional: !0, props: { name: { type: String, default: 'default' } }, render(t, e) { const n = e.props; const r = e.children; let i = e.parent; const o = e.data; o.routerView = !0; const s = i.$createElement; const c = n.name; const u = i.$route; const f = i._routerViewCache || (i._routerViewCache = {}); let d = 0; let h = !1; while (i && i._routerRoot !== i) { const p = i.$vnode ? i.$vnode.data : {}; p.routerView && d++, p.keepAlive && i._directInactive && i._inactive && (h = !0), i = i.$parent; } if (o.routerViewDepth = d, h) { const v = f[c]; const b = v && v.component; return b ? (v.configProps && l(b, o, v.route, v.configProps), s(b, o, r)) : s(); } const m = u.matched[d]; const y = m && m.components[c]; if (!m || !y) return f[c] = null, s(); f[c] = { component: y }, o.registerRouteInstance = function (t, e) { const n = m.instances[c]; (e && n !== t || !e && n === t) && (m.instances[c] = e); }, (o.hook || (o.hook = {})).prepatch = function (t, e) { m.instances[c] = e.componentInstance; }, o.hook.init = function (t) { t.data.keepAlive && t.componentInstance && t.componentInstance !== m.instances[c] && (m.instances[c] = t.componentInstance); }; const g = m.props && m.props[c]; return g && (a(f[c], { route: u, configProps: g }), l(y, o, u, g)), s(y, o, r); },
    }; function l(t, e, n, r) { let i = e.props = c(n, r); if (i) { i = e.props = a({}, i); const o = e.attrs = e.attrs || {}; for (const s in i)t.props && s in t.props || (o[s] = i[s], delete i[s]); } } function c(t, e) { switch (typeof e) { case 'undefined': return; case 'object': return e; case 'function': return e(t); case 'boolean': return e ? t.params : void 0; default: 0; } } const u = /[!'()*]/g; const f = function (t) { return `%${t.charCodeAt(0).toString(16)}`; }; const d = /%2C/g; const h = function (t) { return encodeURIComponent(t).replace(u, f).replace(d, ','); }; const p = decodeURIComponent; function v(t, e, n) { void 0 === e && (e = {}); let r; const i = n || b; try { r = i(t || ''); } catch (a) { r = {}; } for (const o in e)r[o] = e[o]; return r; } function b(t) { const e = {}; return t = t.trim().replace(/^(\?|#|&)/, ''), t ? (t.split('&').forEach(((t) => { const n = t.replace(/\+/g, ' ').split('='); const r = p(n.shift()); const i = n.length > 0 ? p(n.join('=')) : null; void 0 === e[r] ? e[r] = i : Array.isArray(e[r]) ? e[r].push(i) : e[r] = [e[r], i]; })), e) : e; } function m(t) { const e = t ? Object.keys(t).map(((e) => { const n = t[e]; if (void 0 === n) return ''; if (n === null) return h(e); if (Array.isArray(n)) { const r = []; return n.forEach(((t) => { void 0 !== t && (t === null ? r.push(h(e)) : r.push(`${h(e)}=${h(t)}`)); })), r.join('&'); } return `${h(e)}=${h(n)}`; })).filter(((t) => t.length > 0)).join('&') : null; return e ? `?${e}` : ''; } const y = /\/?$/; function g(t, e, n, r) {
      const i = r && r.options.stringifyQuery; let o = e.query || {}; try { o = w(o); } catch (s) {} const a = {
        name: e.name || t && t.name, meta: t && t.meta || {}, path: e.path || '/', hash: e.hash || '', query: o, params: e.params || {}, fullPath: x(e, i), matched: t ? S(t) : [],
      }; return n && (a.redirectedFrom = x(n, i)), Object.freeze(a);
    } function w(t) { if (Array.isArray(t)) return t.map(w); if (t && typeof t === 'object') { const e = {}; for (const n in t)e[n] = w(t[n]); return e; } return t; } const O = g(null, { path: '/' }); function S(t) { const e = []; while (t)e.unshift(t), t = t.parent; return e; } function x(t, e) { const n = t.path; let r = t.query; void 0 === r && (r = {}); let i = t.hash; void 0 === i && (i = ''); const o = e || m; return (n || '/') + o(r) + i; } function T(t, e) { return e === O ? t === e : !!e && (t.path && e.path ? t.path.replace(y, '') === e.path.replace(y, '') && t.hash === e.hash && k(t.query, e.query) : !(!t.name || !e.name) && (t.name === e.name && t.hash === e.hash && k(t.query, e.query) && k(t.params, e.params))); } function k(t, e) { if (void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e) return t === e; const n = Object.keys(t); const r = Object.keys(e); return n.length === r.length && n.every(((n) => { const r = t[n]; const i = e[n]; return typeof r === 'object' && typeof i === 'object' ? k(r, i) : String(r) === String(i); })); } function P(t, e) { return t.path.replace(y, '/').indexOf(e.path.replace(y, '/')) === 0 && (!e.hash || t.hash === e.hash) && j(t.query, e.query); } function j(t, e) { for (const n in e) if (!(n in t)) return !1; return !0; } function C(t, e, n) { const r = t.charAt(0); if (r === '/') return t; if (r === '?' || r === '#') return e + t; const i = e.split('/'); n && i[i.length - 1] || i.pop(); for (let o = t.replace(/^\//, '').split('/'), a = 0; a < o.length; a++) { const s = o[a]; s === '..' ? i.pop() : s !== '.' && i.push(s); } return i[0] !== '' && i.unshift(''), i.join('/'); } function _(t) { let e = ''; let n = ''; const r = t.indexOf('#'); r >= 0 && (e = t.slice(r), t = t.slice(0, r)); const i = t.indexOf('?'); return i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), { path: t, query: n, hash: e }; } function B(t) { return t.replace(/\/\//g, '/'); } const D = Array.isArray || function (t) { return Object.prototype.toString.call(t) == '[object Array]'; }; const E = J; const $ = R; const A = M; const I = z; const F = X; const L = new RegExp(['(\\\\.)', '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g'); function R(t, e) {
      let n; const r = []; let i = 0; let o = 0; let a = ''; const s = e && e.delimiter || '/'; while ((n = L.exec(t)) != null) {
        const l = n[0]; const c = n[1]; const u = n.index; if (a += t.slice(o, u), o = u + l.length, c)a += c[1]; else {
          const f = t[o]; const d = n[2]; const h = n[3]; const p = n[4]; const v = n[5]; const b = n[6]; const m = n[7]; a && (r.push(a), a = ''); const y = d != null && f != null && f !== d; const g = b === '+' || b === '*'; const w = b === '?' || b === '*'; const O = n[2] || s; const S = p || v; r.push({
            name: h || i++, prefix: d || '', delimiter: O, optional: w, repeat: g, partial: y, asterisk: !!m, pattern: S ? G(S) : m ? '.*' : `[^${H(O)}]+?`,
          });
        }
      } return o < t.length && (a += t.substr(o)), a && r.push(a), r;
    } function M(t, e) { return z(R(t, e)); } function N(t) { return encodeURI(t).replace(/[\/?#]/g, ((t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`)); } function V(t) { return encodeURI(t).replace(/[?#]/g, ((t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`)); } function z(t) { for (var e = new Array(t.length), n = 0; n < t.length; n++) typeof t[n] === 'object' && (e[n] = new RegExp(`^(?:${t[n].pattern})$`)); return function (n, r) { for (var i = '', o = n || {}, a = r || {}, s = a.pretty ? N : encodeURIComponent, l = 0; l < t.length; l++) { const c = t[l]; if (typeof c !== 'string') { var u; const f = o[c.name]; if (f == null) { if (c.optional) { c.partial && (i += c.prefix); continue; } throw new TypeError(`Expected "${c.name}" to be defined`); } if (D(f)) { if (!c.repeat) throw new TypeError(`Expected "${c.name}" to not repeat, but received \`${JSON.stringify(f)}\``); if (f.length === 0) { if (c.optional) continue; throw new TypeError(`Expected "${c.name}" to not be empty`); } for (let d = 0; d < f.length; d++) { if (u = s(f[d]), !e[l].test(u)) throw new TypeError(`Expected all "${c.name}" to match "${c.pattern}", but received \`${JSON.stringify(u)}\``); i += (d === 0 ? c.prefix : c.delimiter) + u; } } else { if (u = c.asterisk ? V(f) : s(f), !e[l].test(u)) throw new TypeError(`Expected "${c.name}" to match "${c.pattern}", but received "${u}"`); i += c.prefix + u; } } else i += c; } return i; }; } function H(t) { return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1'); } function G(t) { return t.replace(/([=!:$\/()])/g, '\\$1'); } function U(t, e) { return t.keys = e, t; } function W(t) { return t.sensitive ? '' : 'i'; } function q(t, e) {
      const n = t.source.match(/\((?!\?)/g); if (n) {
        for (let r = 0; r < n.length; r++) {
          e.push({
            name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null,
          });
        }
      } return U(t, e);
    } function Y(t, e, n) { for (var r = [], i = 0; i < t.length; i++)r.push(J(t[i], e, n).source); const o = new RegExp(`(?:${r.join('|')})`, W(n)); return U(o, e); } function K(t, e, n) { return X(R(t, n), e, n); } function X(t, e, n) { D(e) || (n = e || n, e = []), n = n || {}; for (var r = n.strict, i = !1 !== n.end, o = '', a = 0; a < t.length; a++) { const s = t[a]; if (typeof s === 'string')o += H(s); else { const l = H(s.prefix); let c = `(?:${s.pattern})`; e.push(s), s.repeat && (c += `(?:${l}${c})*`), c = s.optional ? s.partial ? `${l}(${c})?` : `(?:${l}(${c}))?` : `${l}(${c})`, o += c; } } const u = H(n.delimiter || '/'); const f = o.slice(-u.length) === u; return r || (o = `${f ? o.slice(0, -u.length) : o}(?:${u}(?=$))?`), o += i ? '$' : r && f ? '' : `(?=${u}|$)`, U(new RegExp(`^${o}`, W(n)), e); } function J(t, e, n) { return D(e) || (n = e || n, e = []), n = n || {}, t instanceof RegExp ? q(t, e) : D(t) ? Y(t, e, n) : K(t, e, n); }E.parse = $, E.compile = A, E.tokensToFunction = I, E.tokensToRegExp = F; const Z = Object.create(null); function Q(t, e, n) { e = e || {}; try { const r = Z[t] || (Z[t] = E.compile(t)); return typeof e.pathMatch === 'string' && (e[0] = e.pathMatch), r(e, { pretty: !0 }); } catch (i) { return ''; } finally { delete e[0]; } } function tt(t, e, n, r) {
      let i = typeof t === 'string' ? { path: t } : t; if (i._normalized) return i; if (i.name) { i = a({}, t); const o = i.params; return o && typeof o === 'object' && (i.params = a({}, o)), i; } if (!i.path && i.params && e) { i = a({}, i), i._normalized = !0; const s = a(a({}, e.params), i.params); if (e.name)i.name = e.name, i.params = s; else if (e.matched.length) { const l = e.matched[e.matched.length - 1].path; i.path = Q(l, s, `path ${e.path}`); } else 0; return i; } const c = _(i.path || ''); const u = e && e.path || '/'; const f = c.path ? C(c.path, u, n || i.append) : u; const d = v(c.query, i.query, r && r.options.parseQuery); let h = i.hash || c.hash; return h && h.charAt(0) !== '#' && (h = `#${h}`), {
        _normalized: !0, path: f, query: d, hash: h,
      };
    } let et; const nt = [String, Object]; const rt = [String, Array]; const it = function () {}; const ot = {
      name: 'RouterLink',
      props: {
        to: { type: nt, required: !0 }, tag: { type: String, default: 'a' }, exact: Boolean, append: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, event: { type: rt, default: 'click' },
      },
      render(t) {
        const e = this; const n = this.$router; const r = this.$route; const i = n.resolve(this.to, r, this.append); const o = i.location; const s = i.route; const l = i.href; const c = {}; const u = n.options.linkActiveClass; const f = n.options.linkExactActiveClass; const d = u == null ? 'router-link-active' : u; const h = f == null ? 'router-link-exact-active' : f; const p = this.activeClass == null ? d : this.activeClass; const v = this.exactActiveClass == null ? h : this.exactActiveClass; const b = s.redirectedFrom ? g(null, tt(s.redirectedFrom), null, n) : s; c[v] = T(r, b), c[p] = this.exact ? c[v] : P(r, b); const m = function (t) { at(t) && (e.replace ? n.replace(o, it) : n.push(o, it)); }; const y = { click: at }; Array.isArray(this.event) ? this.event.forEach(((t) => { y[t] = m; })) : y[this.event] = m; const w = { class: c }; const O = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
          href: l, route: s, navigate: m, isActive: c[p], isExactActive: c[v],
        }); if (O) { if (O.length === 1) return O[0]; if (O.length > 1 || !O.length) return O.length === 0 ? t() : t('span', {}, O); } if (this.tag === 'a')w.on = y, w.attrs = { href: l }; else { const S = st(this.$slots.default); if (S) { S.isStatic = !1; const x = S.data = a({}, S.data); for (const k in x.on = x.on || {}, x.on) { const j = x.on[k]; k in y && (x.on[k] = Array.isArray(j) ? j : [j]); } for (const C in y)C in x.on ? x.on[C].push(y[C]) : x.on[C] = m; const _ = S.data.attrs = a({}, S.data.attrs); _.href = l; } else w.on = y; } return t(this.tag, w, this.$slots.default);
      },
    }; function at(t) { if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && (void 0 === t.button || t.button === 0)) { if (t.currentTarget && t.currentTarget.getAttribute) { const e = t.currentTarget.getAttribute('target'); if (/\b_blank\b/i.test(e)) return; } return t.preventDefault && t.preventDefault(), !0; } } function st(t) { if (t) for (var e, n = 0; n < t.length; n++) { if (e = t[n], e.tag === 'a') return e; if (e.children && (e = st(e.children))) return e; } } function lt(t) { if (!lt.installed || et !== t) { lt.installed = !0, et = t; const e = function (t) { return void 0 !== t; }; const n = function (t, n) { let r = t.$options._parentVnode; e(r) && e(r = r.data) && e(r = r.registerRouteInstance) && r(t, n); }; t.mixin({ beforeCreate() { e(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), t.util.defineReactive(this, '_route', this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, n(this, this); }, destroyed() { n(this); } }), Object.defineProperty(t.prototype, '$router', { get() { return this._routerRoot._router; } }), Object.defineProperty(t.prototype, '$route', { get() { return this._routerRoot._route; } }), t.component('RouterView', s), t.component('RouterLink', ot); const r = t.config.optionMergeStrategies; r.beforeRouteEnter = r.beforeRouteLeave = r.beforeRouteUpdate = r.created; } } const ct = typeof window !== 'undefined'; function ut(t, e, n, r) { const i = e || []; const o = n || Object.create(null); const a = r || Object.create(null); t.forEach(((t) => { ft(i, o, a, t); })); for (let s = 0, l = i.length; s < l; s++)i[s] === '*' && (i.push(i.splice(s, 1)[0]), l--, s--); return { pathList: i, pathMap: o, nameMap: a }; } function ft(t, e, n, r, i, o) {
      const a = r.path; const s = r.name; const l = r.pathToRegexpOptions || {}; const c = ht(a, i, l.strict); typeof r.caseSensitive === 'boolean' && (l.sensitive = r.caseSensitive); const u = {
        path: c, regex: dt(c, l), components: r.components || { default: r.component }, instances: {}, name: s, parent: i, matchAs: o, redirect: r.redirect, beforeEnter: r.beforeEnter, meta: r.meta || {}, props: r.props == null ? {} : r.components ? r.props : { default: r.props },
      }; if (r.children && r.children.forEach(((r) => { const i = o ? B(`${o}/${r.path}`) : void 0; ft(t, e, n, r, u, i); })), e[u.path] || (t.push(u.path), e[u.path] = u), void 0 !== r.alias) for (let f = Array.isArray(r.alias) ? r.alias : [r.alias], d = 0; d < f.length; ++d) { const h = f[d]; 0; const p = { path: h, children: r.children }; ft(t, e, n, p, i, u.path || '/'); }s && (n[s] || (n[s] = u));
    } function dt(t, e) { const n = E(t, [], e); return n; } function ht(t, e, n) { return n || (t = t.replace(/\/$/, '')), t[0] === '/' || e == null ? t : B(`${e.path}/${t}`); } function pt(t, e) {
      const n = ut(t); const r = n.pathList; const i = n.pathMap; const o = n.nameMap; function a(t) { ut(t, r, i, o); } function s(t, n, a) { const s = tt(t, n, !1, e); const l = s.name; if (l) { const c = o[l]; if (!c) return u(null, s); const f = c.regex.keys.filter(((t) => !t.optional)).map(((t) => t.name)); if (typeof s.params !== 'object' && (s.params = {}), n && typeof n.params === 'object') for (const d in n.params)!(d in s.params) && f.indexOf(d) > -1 && (s.params[d] = n.params[d]); return s.path = Q(c.path, s.params, `named route "${l}"`), u(c, s, a); } if (s.path) { s.params = {}; for (let h = 0; h < r.length; h++) { const p = r[h]; const v = i[p]; if (vt(v.regex, s.path, s.params)) return u(v, s, a); } } return u(null, s); } function l(t, n) {
        const r = t.redirect; let i = typeof r === 'function' ? r(g(t, n, null, e)) : r; if (typeof i === 'string' && (i = { path: i }), !i || typeof i !== 'object') return u(null, n); const a = i; const l = a.name; const c = a.path; let f = n.query; let d = n.hash; let h = n.params; if (f = a.hasOwnProperty('query') ? a.query : f, d = a.hasOwnProperty('hash') ? a.hash : d, h = a.hasOwnProperty('params') ? a.params : h, l) {
          o[l]; return s({
            _normalized: !0, name: l, query: f, hash: d, params: h,
          }, void 0, n);
        } if (c) {
          const p = bt(c, t); const v = Q(p, h, `redirect route with path "${p}"`); return s({
            _normalized: !0, path: v, query: f, hash: d,
          }, void 0, n);
        } return u(null, n);
      } function c(t, e, n) { const r = Q(n, e.params, `aliased route with path "${n}"`); const i = s({ _normalized: !0, path: r }); if (i) { const o = i.matched; const a = o[o.length - 1]; return e.params = i.params, u(a, e); } return u(null, e); } function u(t, n, r) { return t && t.redirect ? l(t, r || n) : t && t.matchAs ? c(t, n, t.matchAs) : g(t, n, r, e); } return { match: s, addRoutes: a };
    } function vt(t, e, n) { const r = e.match(t); if (!r) return !1; if (!n) return !0; for (let i = 1, o = r.length; i < o; ++i) { const a = t.keys[i - 1]; const s = typeof r[i] === 'string' ? decodeURIComponent(r[i]) : r[i]; a && (n[a.name || 'pathMatch'] = s); } return !0; } function bt(t, e) { return C(t, e.parent ? e.parent.path : '/', !0); } const mt = ct && window.performance && window.performance.now ? window.performance : Date; function yt() { return mt.now().toFixed(3); } let gt = yt(); function wt() { return gt; } function Ot(t) { return gt = t; } const St = Object.create(null); function xt() { const t = `${window.location.protocol}//${window.location.host}`; const e = window.location.href.replace(t, ''); const n = a({}, window.history.state); n.key = wt(), window.history.replaceState(n, '', e), window.addEventListener('popstate', ((t) => { kt(), t.state && t.state.key && Ot(t.state.key); })); } function Tt(t, e, n, r) { if (t.app) { const i = t.options.scrollBehavior; i && t.app.$nextTick((() => { const o = Pt(); const a = i.call(t, e, n, r ? o : null); a && (typeof a.then === 'function' ? a.then(((t) => { $t(t, o); })).catch(((t) => { 0; })) : $t(a, o)); })); } } function kt() { const t = wt(); t && (St[t] = { x: window.pageXOffset, y: window.pageYOffset }); } function Pt() { const t = wt(); if (t) return St[t]; } function jt(t, e) { const n = document.documentElement; const r = n.getBoundingClientRect(); const i = t.getBoundingClientRect(); return { x: i.left - r.left - e.x, y: i.top - r.top - e.y }; } function Ct(t) { return Dt(t.x) || Dt(t.y); } function _t(t) { return { x: Dt(t.x) ? t.x : window.pageXOffset, y: Dt(t.y) ? t.y : window.pageYOffset }; } function Bt(t) { return { x: Dt(t.x) ? t.x : 0, y: Dt(t.y) ? t.y : 0 }; } function Dt(t) { return typeof t === 'number'; } const Et = /^#\d/; function $t(t, e) { const n = typeof t === 'object'; if (n && typeof t.selector === 'string') { const r = Et.test(t.selector) ? document.getElementById(t.selector.slice(1)) : document.querySelector(t.selector); if (r) { let i = t.offset && typeof t.offset === 'object' ? t.offset : {}; i = Bt(i), e = jt(r, i); } else Ct(t) && (e = _t(t)); } else n && Ct(t) && (e = _t(t)); e && window.scrollTo(e.x, e.y); } const At = ct && (function () { const t = window.navigator.userAgent; return (t.indexOf('Android 2.') === -1 && t.indexOf('Android 4.0') === -1 || t.indexOf('Mobile Safari') === -1 || t.indexOf('Chrome') !== -1 || t.indexOf('Windows Phone') !== -1) && (window.history && 'pushState' in window.history); }()); function It(t, e) { kt(); const n = window.history; try { if (e) { const r = a({}, n.state); r.key = wt(), n.replaceState(r, '', t); } else n.pushState({ key: Ot(yt()) }, '', t); } catch (i) { window.location[e ? 'replace' : 'assign'](t); } } function Ft(t) { It(t, !0); } function Lt(t, e, n) { var r = function (i) { i >= t.length ? n() : t[i] ? e(t[i], (() => { r(i + 1); })) : r(i + 1); }; r(0); } function Rt(t) { return function (e, n, r) { let o = !1; let a = 0; let s = null; Mt(t, ((t, e, n, l) => { if (typeof t === 'function' && void 0 === t.cid) { o = !0, a++; let c; const u = Ht(((e) => { zt(e) && (e = e.default), t.resolved = typeof e === 'function' ? e : et.extend(e), n.components[l] = e, a--, a <= 0 && r(); })); const f = Ht(((t) => { const e = `Failed to resolve async component ${l}: ${t}`; s || (s = i(t) ? t : new Error(e), r(s)); })); try { c = t(u, f); } catch (h) { f(h); } if (c) if (typeof c.then === 'function')c.then(u, f); else { const d = c.component; d && typeof d.then === 'function' && d.then(u, f); } } })), o || r(); }; } function Mt(t, e) { return Nt(t.map(((t) => Object.keys(t.components).map(((n) => e(t.components[n], t.instances[n], t, n)))))); } function Nt(t) { return Array.prototype.concat.apply([], t); } const Vt = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'; function zt(t) { return t.__esModule || Vt && t[Symbol.toStringTag] === 'Module'; } function Ht(t) { let e = !1; return function () { const n = []; let r = arguments.length; while (r--)n[r] = arguments[r]; if (!e) return e = !0, t.apply(this, n); }; } const Gt = (function (t) { function e(e) { t.call(this), this.name = this._name = 'NavigationDuplicated', this.message = `Navigating to current location ("${e.fullPath}") is not allowed`, Object.defineProperty(this, 'stack', { value: (new t()).stack, writable: !0, configurable: !0 }); } return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e; }(Error)); Gt._name = 'NavigationDuplicated'; const Ut = function (t, e) { this.router = t, this.base = Wt(e), this.current = O, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = []; }; function Wt(t) { if (!t) if (ct) { const e = document.querySelector('base'); t = e && e.getAttribute('href') || '/', t = t.replace(/^https?:\/\/[^\/]+/, ''); } else t = '/'; return t.charAt(0) !== '/' && (t = `/${t}`), t.replace(/\/$/, ''); } function qt(t, e) { let n; const r = Math.max(t.length, e.length); for (n = 0; n < r; n++) if (t[n] !== e[n]) break; return { updated: e.slice(0, n), activated: e.slice(n), deactivated: t.slice(n) }; } function Yt(t, e, n, r) { const i = Mt(t, ((t, r, i, o) => { const a = Kt(t, e); if (a) return Array.isArray(a) ? a.map(((t) => n(t, r, i, o))) : n(a, r, i, o); })); return Nt(r ? i.reverse() : i); } function Kt(t, e) { return typeof t !== 'function' && (t = et.extend(t)), t.options[e]; } function Xt(t) { return Yt(t, 'beforeRouteLeave', Zt, !0); } function Jt(t) { return Yt(t, 'beforeRouteUpdate', Zt); } function Zt(t, e) { if (e) return function () { return t.apply(e, arguments); }; } function Qt(t, e, n) { return Yt(t, 'beforeRouteEnter', ((t, r, i, o) => te(t, i, o, e, n))); } function te(t, e, n, r, i) { return function (o, a, s) { return t(o, a, ((t) => { typeof t === 'function' && r.push((() => { ee(t, e.instances, n, i); })), s(t); })); }; } function ee(t, e, n, r) { e[n] && !e[n]._isBeingDestroyed ? t(e[n]) : r() && setTimeout((() => { ee(t, e, n, r); }), 16); }Ut.prototype.listen = function (t) { this.cb = t; }, Ut.prototype.onReady = function (t, e) { this.ready ? t() : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e)); }, Ut.prototype.onError = function (t) { this.errorCbs.push(t); }, Ut.prototype.transitionTo = function (t, e, n) { const r = this; const i = this.router.match(t, this.current); this.confirmTransition(i, (() => { r.updateRoute(i), e && e(i), r.ensureURL(), r.ready || (r.ready = !0, r.readyCbs.forEach(((t) => { t(i); }))); }), ((t) => { n && n(t), t && !r.ready && (r.ready = !0, r.readyErrorCbs.forEach(((e) => { e(t); }))); })); }, Ut.prototype.confirmTransition = function (t, e, n) { const a = this; const s = this.current; const l = function (t) { !o(Gt, t) && i(t) && (a.errorCbs.length ? a.errorCbs.forEach(((e) => { e(t); })) : (r(!1, 'uncaught error during route navigation:'), console.error(t))), n && n(t); }; if (T(t, s) && t.matched.length === s.matched.length) return this.ensureURL(), l(new Gt(t)); const c = qt(this.current.matched, t.matched); const u = c.updated; const f = c.deactivated; const d = c.activated; const h = [].concat(Xt(f), this.router.beforeHooks, Jt(u), d.map(((t) => t.beforeEnter)), Rt(d)); this.pending = t; const p = function (e, n) { if (a.pending !== t) return l(); try { e(t, s, ((t) => { !1 === t || i(t) ? (a.ensureURL(!0), l(t)) : typeof t === 'string' || typeof t === 'object' && (typeof t.path === 'string' || typeof t.name === 'string') ? (l(), typeof t === 'object' && t.replace ? a.replace(t) : a.push(t)) : n(t); })); } catch (r) { l(r); } }; Lt(h, p, (() => { const n = []; const r = function () { return a.current === t; }; const i = Qt(d, n, r); const o = i.concat(a.router.resolveHooks); Lt(o, p, (() => { if (a.pending !== t) return l(); a.pending = null, e(t), a.router.app && a.router.app.$nextTick((() => { n.forEach(((t) => { t(); })); })); })); })); }, Ut.prototype.updateRoute = function (t) { const e = this.current; this.current = t, this.cb && this.cb(t), this.router.afterHooks.forEach(((n) => { n && n(t, e); })); }; const ne = (function (t) { function e(e, n) { const r = this; t.call(this, e, n); const i = e.options.scrollBehavior; const o = At && i; o && xt(); const a = re(this.base); window.addEventListener('popstate', ((t) => { const n = r.current; const i = re(r.base); r.current === O && i === a || r.transitionTo(i, ((t) => { o && Tt(e, t, n, !0); })); })); } return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.go = function (t) { window.history.go(t); }, e.prototype.push = function (t, e, n) { const r = this; const i = this; const o = i.current; this.transitionTo(t, ((t) => { It(B(r.base + t.fullPath)), Tt(r.router, t, o, !1), e && e(t); }), n); }, e.prototype.replace = function (t, e, n) { const r = this; const i = this; const o = i.current; this.transitionTo(t, ((t) => { Ft(B(r.base + t.fullPath)), Tt(r.router, t, o, !1), e && e(t); }), n); }, e.prototype.ensureURL = function (t) { if (re(this.base) !== this.current.fullPath) { const e = B(this.base + this.current.fullPath); t ? It(e) : Ft(e); } }, e.prototype.getCurrentLocation = function () { return re(this.base); }, e; }(Ut)); function re(t) { let e = decodeURI(window.location.pathname); return t && e.indexOf(t) === 0 && (e = e.slice(t.length)), (e || '/') + window.location.search + window.location.hash; } const ie = (function (t) { function e(e, n, r) { t.call(this, e, n), r && oe(this.base) || ae(); } return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setupListeners = function () { const t = this; const e = this.router; const n = e.options.scrollBehavior; const r = At && n; r && xt(), window.addEventListener(At ? 'popstate' : 'hashchange', (() => { const e = t.current; ae() && t.transitionTo(se(), ((n) => { r && Tt(t.router, n, e, !0), At || ue(n.fullPath); })); })); }, e.prototype.push = function (t, e, n) { const r = this; const i = this; const o = i.current; this.transitionTo(t, ((t) => { ce(t.fullPath), Tt(r.router, t, o, !1), e && e(t); }), n); }, e.prototype.replace = function (t, e, n) { const r = this; const i = this; const o = i.current; this.transitionTo(t, ((t) => { ue(t.fullPath), Tt(r.router, t, o, !1), e && e(t); }), n); }, e.prototype.go = function (t) { window.history.go(t); }, e.prototype.ensureURL = function (t) { const e = this.current.fullPath; se() !== e && (t ? ce(e) : ue(e)); }, e.prototype.getCurrentLocation = function () { return se(); }, e; }(Ut)); function oe(t) { const e = re(t); if (!/^\/#/.test(e)) return window.location.replace(B(`${t}/#${e}`)), !0; } function ae() { const t = se(); return t.charAt(0) === '/' || (ue(`/${t}`), !1); } function se() { let t = window.location.href; const e = t.indexOf('#'); if (e < 0) return ''; t = t.slice(e + 1); const n = t.indexOf('?'); if (n < 0) { const r = t.indexOf('#'); t = r > -1 ? decodeURI(t.slice(0, r)) + t.slice(r) : decodeURI(t); } else t = decodeURI(t.slice(0, n)) + t.slice(n); return t; } function le(t) { const e = window.location.href; const n = e.indexOf('#'); const r = n >= 0 ? e.slice(0, n) : e; return `${r}#${t}`; } function ce(t) { At ? It(le(t)) : window.location.hash = t; } function ue(t) { At ? Ft(le(t)) : window.location.replace(le(t)); } const fe = (function (t) { function e(e, n) { t.call(this, e, n), this.stack = [], this.index = -1; } return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function (t, e, n) { const r = this; this.transitionTo(t, ((t) => { r.stack = r.stack.slice(0, r.index + 1).concat(t), r.index++, e && e(t); }), n); }, e.prototype.replace = function (t, e, n) { const r = this; this.transitionTo(t, ((t) => { r.stack = r.stack.slice(0, r.index).concat(t), e && e(t); }), n); }, e.prototype.go = function (t) { const e = this; const n = this.index + t; if (!(n < 0 || n >= this.stack.length)) { const r = this.stack[n]; this.confirmTransition(r, (() => { e.index = n, e.updateRoute(r); }), ((t) => { o(Gt, t) && (e.index = n); })); } }, e.prototype.getCurrentLocation = function () { const t = this.stack[this.stack.length - 1]; return t ? t.fullPath : '/'; }, e.prototype.ensureURL = function () {}, e; }(Ut)); const de = function (t) { void 0 === t && (t = {}), this.app = null, this.apps = [], this.options = t, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = pt(t.routes || [], this); let e = t.mode || 'hash'; switch (this.fallback = e === 'history' && !At && !1 !== t.fallback, this.fallback && (e = 'hash'), ct || (e = 'abstract'), this.mode = e, e) { case 'history': this.history = new ne(this, t.base); break; case 'hash': this.history = new ie(this, t.base, this.fallback); break; case 'abstract': this.history = new fe(this, t.base); break; default: 0; } }; const he = { currentRoute: { configurable: !0 } }; function pe(t, e) { return t.push(e), function () { const n = t.indexOf(e); n > -1 && t.splice(n, 1); }; } function ve(t, e, n) { const r = n === 'hash' ? `#${e}` : e; return t ? B(`${t}/${r}`) : r; }de.prototype.match = function (t, e, n) { return this.matcher.match(t, e, n); }, he.currentRoute.get = function () { return this.history && this.history.current; }, de.prototype.init = function (t) { const e = this; if (this.apps.push(t), t.$once('hook:destroyed', (() => { const n = e.apps.indexOf(t); n > -1 && e.apps.splice(n, 1), e.app === t && (e.app = e.apps[0] || null); })), !this.app) { this.app = t; const n = this.history; if (n instanceof ne)n.transitionTo(n.getCurrentLocation()); else if (n instanceof ie) { const r = function () { n.setupListeners(); }; n.transitionTo(n.getCurrentLocation(), r, r); }n.listen(((t) => { e.apps.forEach(((e) => { e._route = t; })); })); } }, de.prototype.beforeEach = function (t) { return pe(this.beforeHooks, t); }, de.prototype.beforeResolve = function (t) { return pe(this.resolveHooks, t); }, de.prototype.afterEach = function (t) { return pe(this.afterHooks, t); }, de.prototype.onReady = function (t, e) { this.history.onReady(t, e); }, de.prototype.onError = function (t) { this.history.onError(t); }, de.prototype.push = function (t, e, n) { const r = this; if (!e && !n && typeof Promise !== 'undefined') return new Promise((((e, n) => { r.history.push(t, e, n); }))); this.history.push(t, e, n); }, de.prototype.replace = function (t, e, n) { const r = this; if (!e && !n && typeof Promise !== 'undefined') return new Promise((((e, n) => { r.history.replace(t, e, n); }))); this.history.replace(t, e, n); }, de.prototype.go = function (t) { this.history.go(t); }, de.prototype.back = function () { this.go(-1); }, de.prototype.forward = function () { this.go(1); }, de.prototype.getMatchedComponents = function (t) { const e = t ? t.matched ? t : this.resolve(t).route : this.currentRoute; return e ? [].concat.apply([], e.matched.map(((t) => Object.keys(t.components).map(((e) => t.components[e]))))) : []; }, de.prototype.resolve = function (t, e, n) {
      e = e || this.history.current; const r = tt(t, e, n, this); const i = this.match(r, e); const o = i.redirectedFrom || i.fullPath; const a = this.history.base; const s = ve(a, o, this.mode); return {
        location: r, route: i, href: s, normalizedTo: r, resolved: i,
      };
    }, de.prototype.addRoutes = function (t) { this.matcher.addRoutes(t), this.history.current !== O && this.history.transitionTo(this.history.getCurrentLocation()); }, Object.defineProperties(de.prototype, he), de.install = lt, de.version = '3.1.6', ct && window.Vue && window.Vue.use(de), e.a = de;
  },
  '8d23': function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e,
      };
    };
  },
  '8f08': function (t, e) { t.exports = function (t, e, n) { if (!(t instanceof e)) throw TypeError(`Incorrect ${n ? `${n} ` : ''}invocation`); return t; }; },
  '8fe4': function (t, e, n) { const r = n('d0c8'); const i = n('bb6e'); const o = n('761e'); t.exports = function (t, e) { if (r(t), i(e) && e.constructor === t) return e; const n = o.f(t); const a = n.resolve; return a(e), n.promise; }; },
  '90c5': function (t, e) { t.exports = function (t) { if (typeof t !== 'function') throw TypeError(`${String(t)} is not a function`); return t; }; },
  '90e3': function (t, e) { let n = 0; const r = Math.random(); t.exports = function (t) { return `Symbol(${String(void 0 === t ? '' : t)})_${(++n + r).toString(36)}`; }; },
  9112(t, e, n) { const r = n('83ab'); const i = n('9bf2'); const o = n('5c6c'); t.exports = r ? function (t, e, n) { return i.f(t, e, o(1, n)); } : function (t, e, n) { return t[e] = n, t; }; },
  9263(t, e, n) {
    const r = n('ad6d'); const i = n('9f7f'); const o = RegExp.prototype.exec; const a = String.prototype.replace; let s = o; const l = (function () { const t = /a/; const e = /b*/g; return o.call(t, 'a'), o.call(e, 'a'), t.lastIndex !== 0 || e.lastIndex !== 0; }()); const c = i.UNSUPPORTED_Y || i.BROKEN_CARET; const u = void 0 !== /()??/.exec('')[1]; const f = l || u || c; f && (s = function (t) { let e; let n; let i; let s; const f = this; const d = c && f.sticky; let h = r.call(f); let p = f.source; let v = 0; let b = t; return d && (h = h.replace('y', ''), h.indexOf('g') === -1 && (h += 'g'), b = String(t).slice(f.lastIndex), f.lastIndex > 0 && (!f.multiline || f.multiline && t[f.lastIndex - 1] !== '\n') && (p = `(?: ${p})`, b = ` ${b}`, v++), n = new RegExp(`^(?:${p})`, h)), u && (n = new RegExp(`^${p}$(?!\\s)`, h)), l && (e = f.lastIndex), i = o.call(d ? n : f, b), d ? i ? (i.input = i.input.slice(v), i[0] = i[0].slice(v), i.index = f.lastIndex, f.lastIndex += i[0].length) : f.lastIndex = 0 : l && i && (f.lastIndex = f.global ? i.index + i[0].length : e), u && i && i.length > 1 && a.call(i[0], n, (function () { for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (i[s] = void 0); })), i; }), t.exports = s;
  },
  '938d': function (t, e, n) {
    (function (t) { n.d(e, 'i', (() => r)), n.d(e, 'b', (() => i)), n.d(e, 'g', (() => a)), n.d(e, 'd', (() => s)), n.d(e, 'j', (() => l)), n.d(e, 'k', (() => u)), n.d(e, 'e', (() => f)), n.d(e, 'h', (() => d)), n.d(e, 'f', (() => h)), n.d(e, 'c', (() => p)), n.d(e, 'a', (() => b)); var r = typeof window !== 'undefined'; var i = typeof document !== 'undefined'; const o = typeof navigator !== 'undefined'; var a = typeof Promise !== 'undefined'; var s = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined'; var l = r && i && o; const c = l ? window.navigator.userAgent.toLowerCase() : ''; var u = c.indexOf('jsdom') > 0; var f = (/msie|trident/.test(c), (function () { let t = !1; if (l) try { const e = { get passive() { t = !0; } }; window.addEventListener('test', e, e), window.removeEventListener('test', e, e); } catch (n) { t = !1; } return t; }())); var d = l && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0); var h = l && Boolean(window.PointerEvent || window.MSPointerEvent); var p = l && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype; const v = function (e) { const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; const r = typeof t !== 'undefined' && t ? Object({ NODE_ENV: 'production', BASE_URL: '/' }) || !1 : {}; return e ? r[e] || n : r; }; var b = function () { return v('BOOTSTRAP_VUE_NO_WARN'); }; }).call(this, n('4362'));
  },
  '94ca': function (t, e, n) { const r = n('d039'); const i = /#|\.prototype\./; const o = function (t, e) { const n = s[a(t)]; return n == c || n != l && (typeof e === 'function' ? r(e) : !!e); }; var a = o.normalize = function (t) { return String(t).replace(i, '.').toLowerCase(); }; var s = o.data = {}; var l = o.NATIVE = 'N'; var c = o.POLYFILL = 'P'; t.exports = o; },
  '96cf': function (t, e, n) {
    const r = (function (t) {
      let e; const n = Object.prototype; const r = n.hasOwnProperty; const i = typeof Symbol === 'function' ? Symbol : {}; const o = i.iterator || '@@iterator'; const a = i.asyncIterator || '@@asyncIterator'; const s = i.toStringTag || '@@toStringTag'; function l(t, e, n, r) { const i = e && e.prototype instanceof v ? e : v; const o = Object.create(i.prototype); const a = new C(r || []); return o._invoke = T(t, n, a), o; } function c(t, e, n) { try { return { type: 'normal', arg: t.call(e, n) }; } catch (r) { return { type: 'throw', arg: r }; } }t.wrap = l; const u = 'suspendedStart'; const f = 'suspendedYield'; const d = 'executing'; const h = 'completed'; const p = {}; function v() {} function b() {} function m() {} let y = {}; y[o] = function () { return this; }; const g = Object.getPrototypeOf; const w = g && g(g(_([]))); w && w !== n && r.call(w, o) && (y = w); const O = m.prototype = v.prototype = Object.create(y); function S(t) { ['next', 'throw', 'return'].forEach(((e) => { t[e] = function (t) { return this._invoke(e, t); }; })); } function x(t, e) { function n(i, o, a, s) { const l = c(t[i], t, o); if (l.type !== 'throw') { const u = l.arg; const f = u.value; return f && typeof f === 'object' && r.call(f, '__await') ? e.resolve(f.__await).then(((t) => { n('next', t, a, s); }), ((t) => { n('throw', t, a, s); })) : e.resolve(f).then(((t) => { u.value = t, a(u); }), ((t) => n('throw', t, a, s))); }s(l.arg); } let i; function o(t, r) { function o() { return new e((((e, i) => { n(t, r, e, i); }))); } return i = i ? i.then(o, o) : o(); } this._invoke = o; } function T(t, e, n) { let r = u; return function (i, o) { if (r === d) throw new Error('Generator is already running'); if (r === h) { if (i === 'throw') throw o; return B(); }n.method = i, n.arg = o; while (1) { const a = n.delegate; if (a) { const s = k(a, n); if (s) { if (s === p) continue; return s; } } if (n.method === 'next')n.sent = n._sent = n.arg; else if (n.method === 'throw') { if (r === u) throw r = h, n.arg; n.dispatchException(n.arg); } else n.method === 'return' && n.abrupt('return', n.arg); r = d; const l = c(t, e, n); if (l.type === 'normal') { if (r = n.done ? h : f, l.arg === p) continue; return { value: l.arg, done: n.done }; }l.type === 'throw' && (r = h, n.method = 'throw', n.arg = l.arg); } }; } function k(t, n) { const r = t.iterator[n.method]; if (r === e) { if (n.delegate = null, n.method === 'throw') { if (t.iterator.return && (n.method = 'return', n.arg = e, k(t, n), n.method === 'throw')) return p; n.method = 'throw', n.arg = new TypeError("The iterator does not provide a 'throw' method"); } return p; } const i = c(r, t.iterator, n.arg); if (i.type === 'throw') return n.method = 'throw', n.arg = i.arg, n.delegate = null, p; const o = i.arg; return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, n.method !== 'return' && (n.method = 'next', n.arg = e), n.delegate = null, p) : o : (n.method = 'throw', n.arg = new TypeError('iterator result is not an object'), n.delegate = null, p); } function P(t) { const e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function j(t) { const e = t.completion || {}; e.type = 'normal', delete e.arg, t.completion = e; } function C(t) { this.tryEntries = [{ tryLoc: 'root' }], t.forEach(P, this), this.reset(!0); } function _(t) { if (t) { const n = t[o]; if (n) return n.call(t); if (typeof t.next === 'function') return t; if (!isNaN(t.length)) { let i = -1; const a = function n() { while (++i < t.length) if (r.call(t, i)) return n.value = t[i], n.done = !1, n; return n.value = e, n.done = !0, n; }; return a.next = a; } } return { next: B }; } function B() { return { value: e, done: !0 }; } return b.prototype = O.constructor = m, m.constructor = b, m[s] = b.displayName = 'GeneratorFunction', t.isGeneratorFunction = function (t) { const e = typeof t === 'function' && t.constructor; return !!e && (e === b || (e.displayName || e.name) === 'GeneratorFunction'); }, t.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, s in t || (t[s] = 'GeneratorFunction')), t.prototype = Object.create(O), t; }, t.awrap = function (t) { return { __await: t }; }, S(x.prototype), x.prototype[a] = function () { return this; }, t.AsyncIterator = x, t.async = function (e, n, r, i, o) { void 0 === o && (o = Promise); const a = new x(l(e, n, r, i), o); return t.isGeneratorFunction(n) ? a : a.next().then(((t) => (t.done ? t.value : a.next()))); }, S(O), O[s] = 'Generator', O[o] = function () { return this; }, O.toString = function () { return '[object Generator]'; }, t.keys = function (t) { const e = []; for (const n in t)e.push(n); return e.reverse(), function n() { while (e.length) { const r = e.pop(); if (r in t) return n.value = r, n.done = !1, n; } return n.done = !0, n; }; }, t.values = _, C.prototype = {
        constructor: C, reset(t) { if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = 'next', this.arg = e, this.tryEntries.forEach(j), !t) for (const n in this)n.charAt(0) === 't' && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e); }, stop() { this.done = !0; const t = this.tryEntries[0]; const e = t.completion; if (e.type === 'throw') throw e.arg; return this.rval; }, dispatchException(t) { if (this.done) throw t; const n = this; function i(r, i) { return s.type = 'throw', s.arg = t, n.next = r, i && (n.method = 'next', n.arg = e), !!i; } for (let o = this.tryEntries.length - 1; o >= 0; --o) { const a = this.tryEntries[o]; var s = a.completion; if (a.tryLoc === 'root') return i('end'); if (a.tryLoc <= this.prev) { const l = r.call(a, 'catchLoc'); const c = r.call(a, 'finallyLoc'); if (l && c) { if (this.prev < a.catchLoc) return i(a.catchLoc, !0); if (this.prev < a.finallyLoc) return i(a.finallyLoc); } else if (l) { if (this.prev < a.catchLoc) return i(a.catchLoc, !0); } else { if (!c) throw new Error('try statement without catch or finally'); if (this.prev < a.finallyLoc) return i(a.finallyLoc); } } } }, abrupt(t, e) { for (let n = this.tryEntries.length - 1; n >= 0; --n) { const i = this.tryEntries[n]; if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) { var o = i; break; } }o && (t === 'break' || t === 'continue') && o.tryLoc <= e && e <= o.finallyLoc && (o = null); const a = o ? o.completion : {}; return a.type = t, a.arg = e, o ? (this.method = 'next', this.next = o.finallyLoc, p) : this.complete(a); }, complete(t, e) { if (t.type === 'throw') throw t.arg; return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && e && (this.next = e), p; }, finish(t) { for (let e = this.tryEntries.length - 1; e >= 0; --e) { const n = this.tryEntries[e]; if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), j(n), p; } }, catch(t) { for (let e = this.tryEntries.length - 1; e >= 0; --e) { const n = this.tryEntries[e]; if (n.tryLoc === t) { const r = n.completion; if (r.type === 'throw') { var i = r.arg; j(n); } return i; } } throw new Error('illegal catch attempt'); }, delegateYield(t, n, r) { return this.delegate = { iterator: _(t), resultName: n, nextLoc: r }, this.method === 'next' && (this.arg = e), p; },
      }, t;
    }(t.exports)); try { regeneratorRuntime = r; } catch (i) { Function('r', 'regeneratorRuntime = r')(r); }
  },
  9861(t, e, n) {
    n('e260'); const r = n('23e7'); const i = n('d066'); const o = n('0d3b'); const a = n('6eeb'); const s = n('e2cc'); const l = n('d44e'); const c = n('9ed3'); const u = n('69f3'); const f = n('19aa'); const d = n('5135'); const h = n('0366'); const p = n('f5df'); const v = n('825a'); const b = n('861d'); const m = n('7c73'); const y = n('5c6c'); const g = n('9a1f'); const w = n('35a1'); const O = n('b622'); const S = i('fetch'); const x = i('Headers'); const T = O('iterator'); const k = 'URLSearchParams'; const P = `${k}Iterator`; const j = u.set; const C = u.getterFor(k); const _ = u.getterFor(P); const B = /\+/g; const D = Array(4); const E = function (t) { return D[t - 1] || (D[t - 1] = RegExp(`((?:%[\\da-f]{2}){${t}})`, 'gi')); }; const $ = function (t) { try { return decodeURIComponent(t); } catch (e) { return t; } }; const A = function (t) { let e = t.replace(B, ' '); let n = 4; try { return decodeURIComponent(e); } catch (r) { while (n)e = e.replace(E(n--), $); return e; } }; const I = /[!'()~]|%20/g; const F = {
      '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+',
    }; const L = function (t) { return F[t]; }; const R = function (t) { return encodeURIComponent(t).replace(I, L); }; const M = function (t, e) { if (e) { let n; let r; const i = e.split('&'); let o = 0; while (o < i.length)n = i[o++], n.length && (r = n.split('='), t.push({ key: A(r.shift()), value: A(r.join('=')) })); } }; const N = function (t) { this.entries.length = 0, M(this.entries, t); }; const V = function (t, e) { if (t < e) throw TypeError('Not enough arguments'); }; const z = c((function (t, e) { j(this, { type: P, iterator: g(C(t).entries), kind: e }); }), 'Iterator', (function () { const t = _(this); const e = t.kind; const n = t.iterator.next(); const r = n.value; return n.done || (n.value = e === 'keys' ? r.key : e === 'values' ? r.value : [r.key, r.value]), n; })); var H = function () {
      f(this, H, k); let t; let e; let n; let r; let i; let o; let a; let s; let l; const c = arguments.length > 0 ? arguments[0] : void 0; const u = this; const h = []; if (j(u, {
        type: k, entries: h, updateURL() {}, updateSearchParams: N,
      }), void 0 !== c) if (b(c)) if (t = w(c), typeof t === 'function') { e = t.call(c), n = e.next; while (!(r = n.call(e)).done) { if (i = g(v(r.value)), o = i.next, (a = o.call(i)).done || (s = o.call(i)).done || !o.call(i).done) throw TypeError('Expected sequence with length 2'); h.push({ key: `${a.value}`, value: `${s.value}` }); } } else for (l in c)d(c, l) && h.push({ key: l, value: `${c[l]}` }); else M(h, typeof c === 'string' ? c.charAt(0) === '?' ? c.slice(1) : c : `${c}`);
    }; const G = H.prototype; s(G, {
      append(t, e) { V(arguments.length, 2); const n = C(this); n.entries.push({ key: `${t}`, value: `${e}` }), n.updateURL(); }, delete(t) { V(arguments.length, 1); const e = C(this); const n = e.entries; const r = `${t}`; let i = 0; while (i < n.length)n[i].key === r ? n.splice(i, 1) : i++; e.updateURL(); }, get(t) { V(arguments.length, 1); for (let e = C(this).entries, n = `${t}`, r = 0; r < e.length; r++) if (e[r].key === n) return e[r].value; return null; }, getAll(t) { V(arguments.length, 1); for (var e = C(this).entries, n = `${t}`, r = [], i = 0; i < e.length; i++)e[i].key === n && r.push(e[i].value); return r; }, has(t) { V(arguments.length, 1); const e = C(this).entries; const n = `${t}`; let r = 0; while (r < e.length) if (e[r++].key === n) return !0; return !1; }, set(t, e) { V(arguments.length, 1); for (var n, r = C(this), i = r.entries, o = !1, a = `${t}`, s = `${e}`, l = 0; l < i.length; l++)n = i[l], n.key === a && (o ? i.splice(l--, 1) : (o = !0, n.value = s)); o || i.push({ key: a, value: s }), r.updateURL(); }, sort() { let t; let e; let n; const r = C(this); const i = r.entries; const o = i.slice(); for (i.length = 0, n = 0; n < o.length; n++) { for (t = o[n], e = 0; e < n; e++) if (i[e].key > t.key) { i.splice(e, 0, t); break; }e === n && i.push(t); }r.updateURL(); }, forEach(t) { let e; const n = C(this).entries; const r = h(t, arguments.length > 1 ? arguments[1] : void 0, 3); let i = 0; while (i < n.length)e = n[i++], r(e.value, e.key, this); }, keys() { return new z(this, 'keys'); }, values() { return new z(this, 'values'); }, entries() { return new z(this, 'entries'); },
    }, { enumerable: !0 }), a(G, T, G.entries), a(G, 'toString', (function () { let t; const e = C(this).entries; const n = []; let r = 0; while (r < e.length)t = e[r++], n.push(`${R(t.key)}=${R(t.value)}`); return n.join('&'); }), { enumerable: !0 }), l(H, k), r({ global: !0, forced: !o }, { URLSearchParams: H }), o || typeof S !== 'function' || typeof x !== 'function' || r({ global: !0, enumerable: !0, forced: !0 }, { fetch(t) { let e; let n; let r; const i = [t]; return arguments.length > 1 && (e = arguments[1], b(e) && (n = e.body, p(n) === k && (r = e.headers ? new x(e.headers) : new x(), r.has('content-type') || r.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'), e = m(e, { body: y(0, String(n)), headers: y(0, r) }))), i.push(e)), S.apply(this, i); } }), t.exports = { URLSearchParams: H, getState: C };
  },
  '997c': function (t, e, n) { const r = n('d0c8'); const i = n('ba83'); t.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () { let t; let e = !1; const n = {}; try { t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set, t.call(n, []), e = n instanceof Array; } catch (o) {} return function (n, o) { return r(n), i(o), e ? t.call(n, o) : n.__proto__ = o, n; }; }()) : void 0); },
  '9a1f': function (t, e, n) { const r = n('825a'); const i = n('35a1'); t.exports = function (t) { const e = i(t); if (typeof e !== 'function') throw TypeError(`${String(t)} is not iterable`); return r(e.call(t)); }; },
  '9ab4': function (t, e, n) {
    n.r(e), n.d(e, '__extends', (() => i)), n.d(e, '__assign', (() => o)), n.d(e, '__rest', (() => a)), n.d(e, '__decorate', (() => s)), n.d(e, '__param', (() => l)), n.d(e, '__metadata', (() => c)), n.d(e, '__awaiter', (() => u)), n.d(e, '__generator', (() => f)), n.d(e, '__createBinding', (() => d)), n.d(e, '__exportStar', (() => h)), n.d(e, '__values', (() => p)), n.d(e, '__read', (() => v)), n.d(e, '__spread', (() => b)), n.d(e, '__spreadArrays', (() => m)), n.d(e, '__await', (() => y)), n.d(e, '__asyncGenerator', (() => g)), n.d(e, '__asyncDelegator', (() => w)), n.d(e, '__asyncValues', (() => O)), n.d(e, '__makeTemplateObject', (() => S)), n.d(e, '__importStar', (() => T)), n.d(e, '__importDefault', (() => k)), n.d(e, '__classPrivateFieldGet', (() => P)), n.d(e, '__classPrivateFieldSet', (() => j));
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (const n in e)e.hasOwnProperty(n) && (t[n] = e[n]); }, r(t, e); }; function i(t, e) { function n() { this.constructor = t; }r(t, e), t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n()); } var o = function () { return o = Object.assign || function (t) { for (var e, n = 1, r = arguments.length; n < r; n++) for (const i in e = arguments[n], e)Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t; }, o.apply(this, arguments); }; function a(t, e) { const n = {}; for (var r in t)Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]); if (t != null && typeof Object.getOwnPropertySymbols === 'function') { let i = 0; for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]); } return n; } function s(t, e, n, r) { let i; const o = arguments.length; let a = o < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r; if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')a = Reflect.decorate(t, e, n, r); else for (let s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a); return o > 3 && a && Object.defineProperty(e, n, a), a; } function l(t, e) { return function (n, r) { e(n, r, t); }; } function c(t, e) { if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(t, e); } function u(t, e, n, r) { function i(t) { return t instanceof n ? t : new n((((e) => { e(t); }))); } return new (n || (n = Promise))((((n, o) => { function a(t) { try { l(r.next(t)); } catch (e) { o(e); } } function s(t) { try { l(r.throw(t)); } catch (e) { o(e); } } function l(t) { t.done ? n(t.value) : i(t.value).then(a, s); }l((r = r.apply(t, e || [])).next()); }))); } function f(t, e) {
      let n; let r; let i; let o; let a = {
        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
      }; return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (o[Symbol.iterator] = function () { return this; }), o; function s(t) { return function (e) { return l([t, e]); }; } function l(o) { if (n) throw new TypeError('Generator is already executing.'); while (a) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return a.label++, { value: o[1], done: !1 }; case 5: a.label++, r = o[1], o = [0]; continue; case 7: o = a.ops.pop(), a.trys.pop(); continue; default: if (i = a.trys, !(i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) { a = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break; } if (o[0] === 6 && a.label < i[1]) { a.label = i[1], i = o; break; } if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break; }i[2] && a.ops.pop(), a.trys.pop(); continue; }o = e.call(t, a); } catch (s) { o = [6, s], r = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }
    } const d = Object.create ? function (t, e, n, r) { void 0 === r && (r = n), Object.defineProperty(t, r, { enumerable: !0, get() { return e[n]; } }); } : function (t, e, n, r) { void 0 === r && (r = n), t[r] = e[n]; }; function h(t, e) { for (const n in t)n === 'default' || e.hasOwnProperty(n) || d(e, t, n); } function p(t) { const e = typeof Symbol === 'function' && Symbol.iterator; const n = e && t[e]; let r = 0; if (n) return n.call(t); if (t && typeof t.length === 'number') return { next() { return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }; } }; throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'); } function v(t, e) { let n = typeof Symbol === 'function' && t[Symbol.iterator]; if (!n) return t; let r; let i; const o = n.call(t); const a = []; try { while ((void 0 === e || e-- > 0) && !(r = o.next()).done)a.push(r.value); } catch (s) { i = { error: s }; } finally { try { r && !r.done && (n = o.return) && n.call(o); } finally { if (i) throw i.error; } } return a; } function b() { for (var t = [], e = 0; e < arguments.length; e++)t = t.concat(v(arguments[e])); return t; } function m() { for (var t = 0, e = 0, n = arguments.length; e < n; e++)t += arguments[e].length; const r = Array(t); let i = 0; for (e = 0; e < n; e++) for (let o = arguments[e], a = 0, s = o.length; a < s; a++, i++)r[i] = o[a]; return r; } function y(t) { return this instanceof y ? (this.v = t, this) : new y(t); } function g(t, e, n) { if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.'); let r; const i = n.apply(t, e || []); const o = []; return r = {}, a('next'), a('throw'), a('return'), r[Symbol.asyncIterator] = function () { return this; }, r; function a(t) { i[t] && (r[t] = function (e) { return new Promise((((n, r) => { o.push([t, e, n, r]) > 1 || s(t, e); }))); }); } function s(t, e) { try { l(i[t](e)); } catch (n) { f(o[0][3], n); } } function l(t) { t.value instanceof y ? Promise.resolve(t.value.v).then(c, u) : f(o[0][2], t); } function c(t) { s('next', t); } function u(t) { s('throw', t); } function f(t, e) { t(e), o.shift(), o.length && s(o[0][0], o[0][1]); } } function w(t) { let e; let n; return e = {}, r('next'), r('throw', ((t) => { throw t; })), r('return'), e[Symbol.iterator] = function () { return this; }, e; function r(r, i) { e[r] = t[r] ? function (e) { return (n = !n) ? { value: y(t[r](e)), done: r === 'return' } : i ? i(e) : e; } : i; } } function O(t) { if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.'); let e; const n = t[Symbol.asyncIterator]; return n ? n.call(t) : (t = typeof p === 'function' ? p(t) : t[Symbol.iterator](), e = {}, r('next'), r('throw'), r('return'), e[Symbol.asyncIterator] = function () { return this; }, e); function r(n) { e[n] = t[n] && function (e) { return new Promise((((r, o) => { e = t[n](e), i(r, o, e.done, e.value); }))); }; } function i(t, e, n, r) { Promise.resolve(r).then(((e) => { t({ value: e, done: n }); }), e); } } function S(t, e) { return Object.defineProperty ? Object.defineProperty(t, 'raw', { value: e }) : t.raw = e, t; } const x = Object.create ? function (t, e) { Object.defineProperty(t, 'default', { enumerable: !0, value: e }); } : function (t, e) { t.default = e; }; function T(t) { if (t && t.__esModule) return t; const e = {}; if (t != null) for (const n in t)Object.hasOwnProperty.call(t, n) && d(e, t, n); return x(e, t), e; } function k(t) { return t && t.__esModule ? t : { default: t }; } function P(t, e) { if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance'); return e.get(t); } function j(t, e, n) { if (!e.has(t)) throw new TypeError('attempted to set private field on non-instance'); return e.set(t, n), n; }
  },
  '9aed': function (t, e, n) { const r = n('7f34'); const i = n('ebca'); const o = n('816e'); const a = n('8779'); const s = o('IE_PROTO'); const l = Object.prototype; t.exports = a ? Object.getPrototypeOf : function (t) { return t = i(t), r(t, s) ? t[s] : typeof t.constructor === 'function' && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null; }; },
  '9bdd': function (t, e, n) { const r = n('825a'); t.exports = function (t, e, n, i) { try { return i ? e(r(n)[0], n[1]) : e(n); } catch (a) { const o = t.return; throw void 0 !== o && r(o.call(t)), a; } }; },
  '9bf2': function (t, e, n) { const r = n('83ab'); const i = n('0cfb'); const o = n('825a'); const a = n('c04e'); const s = Object.defineProperty; e.f = r ? s : function (t, e, n) { if (o(t), e = a(e, !0), o(n), i) try { return s(t, e, n); } catch (r) {} if ('get' in n || 'set' in n) throw TypeError('Accessors not supported'); return 'value' in n && (t[e] = n.value), t; }; },
  '9ed3': function (t, e, n) {
    const r = n('ae93').IteratorPrototype; const i = n('7c73'); const o = n('5c6c'); const a = n('d44e'); const s = n('3f8c'); const l = function () { return this; }; t.exports = function (t, e, n) { const c = `${e} Iterator`; return t.prototype = i(r, { next: o(1, n) }), a(t, c, !1, !0), s[c] = l, t; };
  },
  '9f7f': function (t, e, n) {
    const r = n('d039'); function i(t, e) { return RegExp(t, e); }e.UNSUPPORTED_Y = r((() => { const t = i('a', 'y'); return t.lastIndex = 2, t.exec('abcd') != null; })), e.BROKEN_CARET = r((() => { const t = i('^r', 'gy'); return t.lastIndex = 2, t.exec('str') != null; }));
  },
  a4d3(t, e, n) {
    const r = n('23e7'); const i = n('da84'); const o = n('d066'); const a = n('c430'); const s = n('83ab'); const l = n('4930'); const c = n('fdbf'); const u = n('d039'); const f = n('5135'); const d = n('e8b5'); const h = n('861d'); const p = n('825a'); const v = n('7b0b'); const b = n('fc6a'); const m = n('c04e'); const y = n('5c6c'); const g = n('7c73'); const w = n('df75'); const O = n('241c'); const S = n('057f'); const x = n('7418'); const T = n('06cf'); const k = n('9bf2'); const P = n('d1e7'); const j = n('9112'); const C = n('6eeb'); const _ = n('5692'); const B = n('f772'); const D = n('d012'); const E = n('90e3'); const $ = n('b622'); const A = n('e538'); const I = n('746f'); const F = n('d44e'); const L = n('69f3'); const R = n('b727').forEach; const M = B('hidden'); const N = 'Symbol'; const V = 'prototype'; const z = $('toPrimitive'); const H = L.set; const G = L.getterFor(N); const U = Object[V]; let W = i.Symbol; const q = o('JSON', 'stringify'); const Y = T.f; const K = k.f; const X = S.f; const J = P.f; const Z = _('symbols'); const Q = _('op-symbols'); const tt = _('string-to-symbol-registry'); const et = _('symbol-to-string-registry'); const nt = _('wks'); const rt = i.QObject; let it = !rt || !rt[V] || !rt[V].findChild; const ot = s && u((() => g(K({}, 'a', { get() { return K(this, 'a', { value: 7 }).a; } })).a != 7)) ? function (t, e, n) { const r = Y(U, e); r && delete U[e], K(t, e, n), r && t !== U && K(U, e, r); } : K; const at = function (t, e) { const n = Z[t] = g(W[V]); return H(n, { type: N, tag: t, description: e }), s || (n.description = e), n; }; const st = c ? function (t) { return typeof t === 'symbol'; } : function (t) { return Object(t) instanceof W; }; var lt = function (t, e, n) { t === U && lt(Q, e, n), p(t); const r = m(e, !0); return p(n), f(Z, r) ? (n.enumerable ? (f(t, M) && t[M][r] && (t[M][r] = !1), n = g(n, { enumerable: y(0, !1) })) : (f(t, M) || K(t, M, y(1, {})), t[M][r] = !0), ot(t, r, n)) : K(t, r, n); }; const ct = function (t, e) { p(t); const n = b(e); const r = w(n).concat(pt(n)); return R(r, ((e) => { s && !ft.call(n, e) || lt(t, e, n[e]); })), t; }; const ut = function (t, e) { return void 0 === e ? g(t) : ct(g(t), e); }; var ft = function (t) { const e = m(t, !0); const n = J.call(this, e); return !(this === U && f(Z, e) && !f(Q, e)) && (!(n || !f(this, e) || !f(Z, e) || f(this, M) && this[M][e]) || n); }; const dt = function (t, e) { const n = b(t); const r = m(e, !0); if (n !== U || !f(Z, r) || f(Q, r)) { const i = Y(n, r); return !i || !f(Z, r) || f(n, M) && n[M][r] || (i.enumerable = !0), i; } }; const ht = function (t) { const e = X(b(t)); const n = []; return R(e, ((t) => { f(Z, t) || f(D, t) || n.push(t); })), n; }; var pt = function (t) { const e = t === U; const n = X(e ? Q : b(t)); const r = []; return R(n, ((t) => { !f(Z, t) || e && !f(U, t) || r.push(Z[t]); })), r; }; if (l || (W = function () { if (this instanceof W) throw TypeError('Symbol is not a constructor'); const t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0; const e = E(t); var n = function (t) { this === U && n.call(Q, t), f(this, M) && f(this[M], e) && (this[M][e] = !1), ot(this, e, y(1, t)); }; return s && it && ot(U, e, { configurable: !0, set: n }), at(e, t); }, C(W[V], 'toString', (function () { return G(this).tag; })), C(W, 'withoutSetter', ((t) => at(E(t), t))), P.f = ft, k.f = lt, T.f = dt, O.f = S.f = ht, x.f = pt, A.f = function (t) { return at($(t), t); }, s && (K(W[V], 'description', { configurable: !0, get() { return G(this).description; } }), a || C(U, 'propertyIsEnumerable', ft, { unsafe: !0 }))), r({
      global: !0, wrap: !0, forced: !l, sham: !l,
    }, { Symbol: W }), R(w(nt), ((t) => { I(t); })), r({ target: N, stat: !0, forced: !l }, {
      for(t) { const e = String(t); if (f(tt, e)) return tt[e]; const n = W(e); return tt[e] = n, et[n] = e, n; }, keyFor(t) { if (!st(t)) throw TypeError(`${t} is not a symbol`); if (f(et, t)) return et[t]; }, useSetter() { it = !0; }, useSimple() { it = !1; },
    }), r({
      target: 'Object', stat: !0, forced: !l, sham: !s,
    }, {
      create: ut, defineProperty: lt, defineProperties: ct, getOwnPropertyDescriptor: dt,
    }), r({ target: 'Object', stat: !0, forced: !l }, { getOwnPropertyNames: ht, getOwnPropertySymbols: pt }), r({ target: 'Object', stat: !0, forced: u((() => { x.f(1); })) }, { getOwnPropertySymbols(t) { return x.f(v(t)); } }), q) { const vt = !l || u((() => { const t = W(); return q([t]) != '[null]' || q({ a: t }) != '{}' || q(Object(t)) != '{}'; })); r({ target: 'JSON', stat: !0, forced: vt }, { stringify(t, e, n) { let r; const i = [t]; let o = 1; while (arguments.length > o)i.push(arguments[o++]); if (r = e, (h(e) || void 0 !== t) && !st(t)) return d(e) || (e = function (t, e) { if (typeof r === 'function' && (e = r.call(this, t, e)), !st(e)) return e; }), i[1] = e, q.apply(null, i); } }); }W[V][z] || j(W[V], z, W[V].valueOf), F(W, N), D[M] = !0;
  },
  a547(t, e, n) {
    let r; let i; let o; const a = n('0d05'); const s = n('09e4'); const l = n('bb6e'); const c = n('3261'); const u = n('7f34'); const f = n('816e'); const d = n('1fc1'); const h = s.WeakMap; const p = function (t) { return o(t) ? i(t) : r(t, {}); }; const v = function (t) { return function (e) { let n; if (!l(e) || (n = i(e)).type !== t) throw TypeError(`Incompatible receiver, ${t} required`); return n; }; }; if (a) {
      const b = new h(); const m = b.get; const y = b.has; const
        g = b.set; r = function (t, e) { return g.call(b, t, e), e; }, i = function (t) { return m.call(b, t) || {}; }, o = function (t) { return y.call(b, t); };
    } else { const w = f('state'); d[w] = !0, r = function (t, e) { return c(t, w, e), e; }, i = function (t) { return u(t, w) ? t[w] : {}; }, o = function (t) { return u(t, w); }; }t.exports = {
      set: r, get: i, has: o, enforce: p, getterFor: v,
    };
  },
  a580(t, e, n) {
    const r = n('199f'); const i = n('0049'); const o = n('9aed'); const a = n('997c'); const s = n('77da'); const l = n('3261'); const c = n('7024'); const u = n('8b0e'); const f = n('0f33'); const d = n('ca70'); const h = n('65ee'); const p = h.IteratorPrototype; const v = h.BUGGY_SAFARI_ITERATORS; const b = u('iterator'); const m = 'keys'; const y = 'values'; const g = 'entries'; const w = function () { return this; }; t.exports = function (t, e, n, u, h, O, S) { i(n, e, u); let x; let T; let k; const P = function (t) { if (t === h && D) return D; if (!v && t in _) return _[t]; switch (t) { case m: return function () { return new n(this, t); }; case y: return function () { return new n(this, t); }; case g: return function () { return new n(this, t); }; } return function () { return new n(this); }; }; const j = `${e} Iterator`; let C = !1; var _ = t.prototype; const B = _[b] || _['@@iterator'] || h && _[h]; var D = !v && B || P(h); const E = e == 'Array' && _.entries || B; if (E && (x = o(E.call(new t())), p !== Object.prototype && x.next && (f || o(x) === p || (a ? a(x, p) : typeof x[b] !== 'function' && l(x, b, w)), s(x, j, !0, !0), f && (d[j] = w))), h == y && B && B.name !== y && (C = !0, D = function () { return B.call(this); }), f && !S || _[b] === D || l(_, b, D), d[e] = D, h) if (T = { values: P(y), keys: O ? D : P(m), entries: P(g) }, S) for (k in T)(v || C || !(k in _)) && c(_, k, T[k]); else r({ target: e, proto: !0, forced: v || C }, T); return T; };
  },
  a5b6(t, e) { e.f = Object.getOwnPropertySymbols; },
  a691(t, e) { const n = Math.ceil; const r = Math.floor; t.exports = function (t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t); }; },
  a714(t, e) { t.exports = function (t) { try { return !!t(); } catch (e) { return !0; } }; },
  a84f(t, e, n) { const r = n('774c'); const i = n('76af'); t.exports = function (t) { return r(i(t)); }; },
  aa51(t, e, n) { const r = n('20a7'); t.exports = r && !Symbol.sham && typeof Symbol.iterator === 'symbol'; },
  ac1f(t, e, n) {
    const r = n('23e7'); const i = n('9263'); r({ target: 'RegExp', proto: !0, forced: /./.exec !== i }, { exec: i });
  },
  ad3d(t, e, n) {
    (function (t) {
      n.d(e, 'a', (() => S)); const r = n('ecee'); const i = typeof window !== 'undefined' ? window : typeof t !== 'undefined' ? t : typeof self !== 'undefined' ? self : {}; function o(t, e) { return e = { exports: {} }, t(e, e.exports), e.exports; } const a = o(((t) => {
        (function (e) {
          var n = function (t, e, r) { if (!c(e) || f(e) || d(e) || h(e) || l(e)) return e; let i; let o = 0; let a = 0; if (u(e)) for (i = [], a = e.length; o < a; o++)i.push(n(t, e[o], r)); else for (const s in i = {}, e)Object.prototype.hasOwnProperty.call(e, s) && (i[t(s, r)] = n(t, e[s], r)); return i; }; const r = function (t, e) { e = e || {}; const n = e.separator || '_'; const r = e.split || /(?=[A-Z])/; return t.split(r).join(n); }; const i = function (t) { return p(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, ((t, e) => (e ? e.toUpperCase() : ''))), t.substr(0, 1).toLowerCase() + t.substr(1)); }; const o = function (t) { const e = i(t); return e.substr(0, 1).toUpperCase() + e.substr(1); }; const a = function (t, e) { return r(t, e).toLowerCase(); }; const s = Object.prototype.toString; var l = function (t) { return typeof t === 'function'; }; var c = function (t) { return t === Object(t); }; var u = function (t) { return s.call(t) == '[object Array]'; }; var f = function (t) { return s.call(t) == '[object Date]'; }; var d = function (t) { return s.call(t) == '[object RegExp]'; }; var h = function (t) { return s.call(t) == '[object Boolean]'; }; var p = function (t) { return t -= 0, t === t; }; const v = function (t, e) { const n = e && 'process' in e ? e.process : e; return typeof n !== 'function' ? t : function (e, r) { return n(e, t, r); }; }; const b = {
            camelize: i, decamelize: a, pascalize: o, depascalize: a, camelizeKeys(t, e) { return n(v(i, e), t); }, decamelizeKeys(t, e) { return n(v(a, e), t, e); }, pascalizeKeys(t, e) { return n(v(o, e), t); }, depascalizeKeys() { return this.decamelizeKeys.apply(this, arguments); },
          }; t.exports ? t.exports = b : e.humps = b;
        }(i));
      })); const s = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }; const l = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n, enumerable: !0, configurable: !0, writable: !0,
        }) : t[e] = n, t;
      }; const c = Object.assign || function (t) { for (let e = 1; e < arguments.length; e++) { const n = arguments[e]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]); } return t; }; const u = function (t, e) { const n = {}; for (const r in t)e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]); return n; }; const f = function (t) { if (Array.isArray(t)) { for (var e = 0, n = Array(t.length); e < t.length; e++)n[e] = t[e]; return n; } return Array.from(t); }; function d(t) { return t.split(';').map(((t) => t.trim())).filter(((t) => t)).reduce(((t, e) => { const n = e.indexOf(':'); const r = a.camelize(e.slice(0, n)); const i = e.slice(n + 1).trim(); return t[r] = i, t; }), {}); } function h(t) { return t.split(/\s+/).reduce(((t, e) => (t[e] = !0, t)), {}); } function p() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)e[n] = arguments[n]; return e.reduce(((t, e) => (Array.isArray(e) ? t = t.concat(e) : t.push(e), t)), []); } function v(t, e) {
        const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; const i = (e.children || []).map(v.bind(null, t)); const o = Object.keys(e.attributes || {}).reduce(((t, n) => { const r = e.attributes[n]; switch (n) { case 'class': t.class = h(r); break; case 'style': t.style = d(r); break; default: t.attrs[n] = r; } return t; }), { class: {}, style: {}, attrs: {} }); const a = r.class; const s = void 0 === a ? {} : a; const l = r.style; const f = void 0 === l ? {} : l; const b = r.attrs; const m = void 0 === b ? {} : b; const y = u(r, ['class', 'style', 'attrs']); return typeof e === 'string' ? e : t(e.tag, {
          class: p(o.class, s), style: { ...o.style, ...f }, attrs: { ...o.attrs, ...m }, ...y, props: n,
        }, i);
      } let b = !1; try { b = !0; } catch (x) {} function m() { let t; !b && console && typeof console.error === 'function' && (t = console).error.apply(t, arguments); } function y(t, e) { return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? l({}, t, e) : {}; } function g(t) {
        let e; const n = (e = {
          'fa-spin': t.spin, 'fa-pulse': t.pulse, 'fa-fw': t.fixedWidth, 'fa-border': t.border, 'fa-li': t.listItem, 'fa-flip-horizontal': t.flip === 'horizontal' || t.flip === 'both', 'fa-flip-vertical': t.flip === 'vertical' || t.flip === 'both',
        }, l(e, `fa-${t.size}`, t.size !== null), l(e, `fa-rotate-${t.rotation}`, t.rotation !== null), l(e, `fa-pull-${t.pull}`, t.pull !== null), e); return Object.keys(n).map(((t) => (n[t] ? t : null))).filter(((t) => t));
      } function w(t, e) { const n = (t || '').length === 0 ? [] : [t]; return n.concat(e).join(' '); } function O(t) { return t === null ? null : (typeof t === 'undefined' ? 'undefined' : s(t)) === 'object' && t.prefix && t.iconName ? t : Array.isArray(t) && t.length === 2 ? { prefix: t[0], iconName: t[1] } : typeof t === 'string' ? { prefix: 'fas', iconName: t } : void 0; } var S = {
        name: 'FontAwesomeIcon',
        functional: !0,
        props: {
          border: { type: Boolean, default: !1 }, fixedWidth: { type: Boolean, default: !1 }, flip: { type: String, default: null, validator(t) { return ['horizontal', 'vertical', 'both'].indexOf(t) > -1; } }, icon: { type: [Object, Array, String], required: !0 }, mask: { type: [Object, Array, String], default: null }, listItem: { type: Boolean, default: !1 }, pull: { type: String, default: null, validator(t) { return ['right', 'left'].indexOf(t) > -1; } }, pulse: { type: Boolean, default: !1 }, rotation: { type: [String, Number], default: null, validator(t) { return [90, 180, 270].indexOf(parseInt(t, 10)) > -1; } }, size: { type: String, default: null, validator(t) { return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(t) > -1; } }, spin: { type: Boolean, default: !1 }, transform: { type: [String, Object], default: null }, symbol: { type: [Boolean, String], default: !1 }, title: { type: String, default: null },
        },
        render(t, e) {
          const n = e.props; const i = n.icon; const o = n.mask; const a = n.symbol; const s = n.title; const l = O(i); const u = y('classes', g(n)); const f = y('transform', typeof n.transform === 'string' ? r.d.transform(n.transform) : n.transform); const d = y('mask', O(o)); const h = Object(r.b)(l, {
            ...u, ...f, ...d, symbol: a, title: s,
          }); if (!h) return m('Could not find one or more icon(s)', l, d); const p = h.abstract; const b = v.bind(null, t); return b(p[0], {}, e.data);
        },
      }; Boolean;
    }).call(this, n('c8ba'));
  },
  ad6d(t, e, n) {
    const r = n('825a'); t.exports = function () { const t = r(this); let e = ''; return t.global && (e += 'g'), t.ignoreCase && (e += 'i'), t.multiline && (e += 'm'), t.dotAll && (e += 's'), t.unicode && (e += 'u'), t.sticky && (e += 'y'), e; };
  },
  ae93(t, e, n) {
    let r; let i; let o; const a = n('e163'); const s = n('9112'); const l = n('5135'); const c = n('b622'); const u = n('c430'); const f = c('iterator'); let d = !1; const h = function () { return this; }; [].keys && (o = [].keys(), 'next' in o ? (i = a(a(o)), i !== Object.prototype && (r = i)) : d = !0), void 0 == r && (r = {}), u || l(r, f) || s(r, f, h), t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d };
  },
  b041(t, e, n) {
    const r = n('00ee'); const i = n('f5df'); t.exports = r ? {}.toString : function () { return `[object ${i(this)}]`; };
  },
  b1b0(t, e, n) { const r = n('09e4'); t.exports = function (t, e) { const n = r.console; n && n.error && (arguments.length === 1 ? n.error(t) : n.error(t, e)); }; },
  b575(t, e, n) { let r; let i; let o; let a; let s; let l; let c; let u; const f = n('da84'); const d = n('06cf').f; const h = n('c6b6'); const p = n('2cf4').set; const v = n('1cdc'); const b = f.MutationObserver || f.WebKitMutationObserver; const m = f.process; const y = f.Promise; const g = h(m) == 'process'; const w = d(f, 'queueMicrotask'); const O = w && w.value; O || (r = function () { let t; let e; g && (t = m.domain) && t.exit(); while (i) { e = i.fn, i = i.next; try { e(); } catch (n) { throw i ? a() : o = void 0, n; } }o = void 0, t && t.enter(); }, g ? a = function () { m.nextTick(r); } : b && !v ? (s = !0, l = document.createTextNode(''), new b(r).observe(l, { characterData: !0 }), a = function () { l.data = s = !s; }) : y && y.resolve ? (c = y.resolve(void 0), u = c.then, a = function () { u.call(c, r); }) : a = function () { p.call(f, r); }), t.exports = O || function (t) { const e = { fn: t, next: void 0 }; o && (o.next = e), i || (i = e, a()), o = e; }; },
  b622(t, e, n) { const r = n('da84'); const i = n('5692'); const o = n('5135'); const a = n('90e3'); const s = n('4930'); const l = n('fdbf'); const c = i('wks'); const u = r.Symbol; const f = l ? u : u && u.withoutSetter || a; t.exports = function (t) { return o(c, t) || (s && o(u, t) ? c[t] = u[t] : c[t] = f(`Symbol.${t}`)), c[t]; }; },
  b702(t, e, n) {
    n.d(e, 'a', (() => r)), n.d(e, 'b', (() => i)); var r = { prefix: 'far', iconName: 'check-circle', icon: [512, 512, [], 'f058', 'M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z'] }; var i = { prefix: 'far', iconName: 'save', icon: [448, 512, [], 'f0c7', 'M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z'] };
  },
  b727(t, e, n) {
    const r = n('0366'); const i = n('44ad'); const o = n('7b0b'); const a = n('50c4'); const s = n('65f0'); const l = [].push; const c = function (t) { const e = t == 1; const n = t == 2; const c = t == 3; const u = t == 4; const f = t == 6; const d = t == 5 || f; return function (h, p, v, b) { for (var m, y, g = o(h), w = i(g), O = r(p, v, 3), S = a(w.length), x = 0, T = b || s, k = e ? T(h, S) : n ? T(h, 0) : void 0; S > x; x++) if ((d || x in w) && (m = w[x], y = O(m, x, g), t)) if (e)k[x] = y; else if (y) switch (t) { case 3: return !0; case 5: return m; case 6: return x; case 2: l.call(k, m); } else if (u) return !1; return f ? -1 : c || u ? u : k; }; }; t.exports = {
      forEach: c(0), map: c(1), filter: c(2), some: c(3), every: c(4), find: c(5), findIndex: c(6),
    };
  },
  b973(t, e, n) { const r = n('0ee6'); const i = n('fdbe'); const o = n('a5b6'); const a = n('d0c8'); t.exports = r('Reflect', 'ownKeys') || function (t) { const e = i.f(a(t)); const n = o.f; return n ? e.concat(n(t)) : e; }; },
  ba83(t, e, n) { const r = n('bb6e'); t.exports = function (t) { if (!r(t) && t !== null) throw TypeError(`Can't set ${String(t)} as a prototype`); return t; }; },
  bb6e(t, e) { t.exports = function (t) { return typeof t === 'object' ? t !== null : typeof t === 'function'; }; },
  bee2(t, e, n) {
    function r(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } function i(t, e, n) { return e && r(t.prototype, e), n && r(t, n), t; }n.d(e, 'a', (() => i));
  },
  bf45(t, e, n) { const r = n('0368'); const i = n('a714'); const o = n('c4dd'); t.exports = !r && !i((() => Object.defineProperty(o('div'), 'a', { get() { return 7; } }).a != 7)); },
  c04e(t, e, n) { const r = n('861d'); t.exports = function (t, e) { if (!r(t)) return t; let n; let i; if (e && typeof (n = t.toString) === 'function' && !r(i = n.call(t))) return i; if (typeof (n = t.valueOf) === 'function' && !r(i = n.call(t))) return i; if (!e && typeof (n = t.toString) === 'function' && !r(i = n.call(t))) return i; throw TypeError("Can't convert object to primitive value"); }; },
  c074(t, e, n) {
    n.d(e, 'a', (() => r)), n.d(e, 'b', (() => i)), n.d(e, 'c', (() => o)), n.d(e, 'd', (() => a)), n.d(e, 'e', (() => s)); var r = { prefix: 'fas', iconName: 'arrow-right', icon: [448, 512, [], 'f061', 'M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'] }; var i = { prefix: 'fas', iconName: 'shield-alt', icon: [512, 512, [], 'f3ed', 'M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'] }; var o = { prefix: 'fas', iconName: 'user-astronaut', icon: [448, 512, [], 'f4fb', 'M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z'] }; var a = { prefix: 'fas', iconName: 'user-lock', icon: [640, 512, [], 'f502', 'M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z'] }; var s = { prefix: 'fas', iconName: 'user-secret', icon: [448, 512, [], 'f21b', 'M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z'] };
  },
  c272(t, e, n) { const r = n('a84f'); const i = n('09d1'); const o = n('fb8a'); const a = function (t) { return function (e, n, a) { let s; const l = r(e); const c = i(l.length); let u = o(a, c); if (t && n != n) { while (c > u) if (s = l[u++], s != s) return !0; } else for (;c > u; u++) if ((t || u in l) && l[u] === n) return t || u || 0; return !t && -1; }; }; t.exports = { includes: a(!0), indexOf: a(!1) }; },
  c35a(t, e, n) { const r = n('7820'); const i = n('ca70'); const o = n('8b0e'); const a = o('iterator'); t.exports = function (t) { if (void 0 != t) return t[a] || t['@@iterator'] || i[r(t)]; }; },
  c430(t, e) { t.exports = !1; },
  c4dd(t, e, n) { const r = n('09e4'); const i = n('bb6e'); const o = r.document; const a = i(o) && i(o.createElement); t.exports = function (t) { return a ? o.createElement(t) : {}; }; },
  c51e(t, e) { t.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf']; },
  c6b6(t, e) { const n = {}.toString; t.exports = function (t) { return n.call(t).slice(8, -1); }; },
  c6cd(t, e, n) { const r = n('da84'); const i = n('ce4e'); const o = '__core-js_shared__'; const a = r[o] || i(o, {}); t.exports = a; },
  c85d(t, e, n) { const r = n('09e4'); t.exports = r.Promise; },
  c8ba(t, e) { let n; n = (function () { return this; }()); try { n = n || new Function('return this')(); } catch (r) { typeof window === 'object' && (n = window); }t.exports = n; },
  ca70(t, e) { t.exports = {}; },
  ca84(t, e, n) { const r = n('5135'); const i = n('fc6a'); const o = n('4d64').indexOf; const a = n('d012'); t.exports = function (t, e) { let n; const s = i(t); let l = 0; const c = []; for (n in s)!r(a, n) && r(s, n) && c.push(n); while (e.length > l)r(s, n = e[l++]) && (~o(c, n) || c.push(n)); return c; }; },
  caad(t, e, n) { const r = n('8b0e'); const i = n('ca70'); const o = r('iterator'); const a = Array.prototype; t.exports = function (t) { return void 0 !== t && (i.Array === t || a[o] === t); }; },
  cc12(t, e, n) { const r = n('da84'); const i = n('861d'); const o = r.document; const a = i(o) && i(o.createElement); t.exports = function (t) { return a ? o.createElement(t) : {}; }; },
  cdf9(t, e, n) { const r = n('825a'); const i = n('861d'); const o = n('f069'); t.exports = function (t, e) { if (r(t), i(e) && e.constructor === t) return e; const n = o.f(t); const a = n.resolve; return a(e), n.promise; }; },
  ce4e(t, e, n) { const r = n('da84'); const i = n('9112'); t.exports = function (t, e) { try { i(r, t, e); } catch (n) { r[t] = e; } return e; }; },
  cf9e(t, e, n) { const r = n('d0c8'); t.exports = function (t, e, n, i) { try { return i ? e(r(n)[0], n[1]) : e(n); } catch (a) { const o = t.return; throw void 0 !== o && r(o.call(t)), a; } }; },
  d012(t, e) { t.exports = {}; },
  d039(t, e) { t.exports = function (t) { try { return !!t(); } catch (e) { return !0; } }; },
  d066(t, e, n) { const r = n('428f'); const i = n('da84'); const o = function (t) { return typeof t === 'function' ? t : void 0; }; t.exports = function (t, e) { return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e]; }; },
  d0c8(t, e, n) { const r = n('bb6e'); t.exports = function (t) { if (!r(t)) throw TypeError(`${String(t)} is not an object`); return t; }; },
  d1d7(t, e, n) { const r = n('09e4'); t.exports = r; },
  d1e7(t, e, n) {
    const r = {}.propertyIsEnumerable; const i = Object.getOwnPropertyDescriptor; const o = i && !r.call({ 1: 2 }, 1); e.f = o ? function (t) { const e = i(this, t); return !!e && e.enumerable; } : r;
  },
  d28b(t, e, n) { const r = n('746f'); r('iterator'); },
  d2bb(t, e, n) { const r = n('825a'); const i = n('3bbe'); t.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () { let t; let e = !1; const n = {}; try { t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set, t.call(n, []), e = n instanceof Array; } catch (o) {} return function (n, o) { return r(n), i(o), e ? t.call(n, o) : n.__proto__ = o, n; }; }()) : void 0); },
  d3b7(t, e, n) { const r = n('00ee'); const i = n('6eeb'); const o = n('b041'); r || i(Object.prototype, 'toString', o, { unsafe: !0 }); },
  d44e(t, e, n) { const r = n('9bf2').f; const i = n('5135'); const o = n('b622'); const a = o('toStringTag'); t.exports = function (t, e, n) { t && !i(t = n ? t : t.prototype, a) && r(t, a, { configurable: !0, value: e }); }; },
  d4ec(t, e, n) {
    function r(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }n.d(e, 'a', (() => r));
  },
  d714(t, e) { const n = {}.toString; t.exports = function (t) { return n.call(t).slice(8, -1); }; },
  d784(t, e, n) {
    n('ac1f'); const r = n('6eeb'); const i = n('d039'); const o = n('b622'); const a = n('9263'); const s = n('9112'); const l = o('species'); const c = !i((() => { const t = /./; return t.exec = function () { const t = []; return t.groups = { a: '7' }, t; }, ''.replace(t, '$<a>') !== '7'; })); const u = (function () { return 'a'.replace(/./, '$0') === '$0'; }()); const f = o('replace'); const d = (function () { return !!/./[f] && /./[f]('a', '$0') === ''; }()); const h = !i((() => { const t = /(?:)/; const e = t.exec; t.exec = function () { return e.apply(this, arguments); }; const n = 'ab'.split(t); return n.length !== 2 || n[0] !== 'a' || n[1] !== 'b'; })); t.exports = function (t, e, n, f) { const p = o(t); const v = !i((() => { const e = {}; return e[p] = function () { return 7; }, ''[t](e) != 7; })); const b = v && !i((() => { let e = !1; let n = /a/; return t === 'split' && (n = {}, n.constructor = {}, n.constructor[l] = function () { return n; }, n.flags = '', n[p] = /./[p]), n.exec = function () { return e = !0, null; }, n[p](''), !e; })); if (!v || !b || t === 'replace' && (!c || !u || d) || t === 'split' && !h) { const m = /./[p]; const y = n(p, ''[t], ((t, e, n, r, i) => (e.exec === a ? v && !i ? { done: !0, value: m.call(e, n, r) } : { done: !0, value: t.call(n, e, r) } : { done: !1 })), { REPLACE_KEEPS_$0: u, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d }); const g = y[0]; const w = y[1]; r(String.prototype, t, g), r(RegExp.prototype, p, e == 2 ? function (t, e) { return w.call(t, this, e); } : function (t) { return w.call(t, this); }); }f && s(RegExp.prototype[p], 'sham', !0); };
  },
  da84(t, e, n) { (function (e) { const n = function (t) { return t && t.Math == Math && t; }; t.exports = n(typeof globalThis === 'object' && globalThis) || n(typeof window === 'object' && window) || n(typeof self === 'object' && self) || n(typeof e === 'object' && e) || Function('return this')(); }).call(this, n('c8ba')); },
  db8f(t, e, n) { const r = n('09e4'); const i = n('79ae'); const o = '__core-js_shared__'; const a = r[o] || i(o, {}); t.exports = a; },
  ddb0(t, e, n) { const r = n('da84'); const i = n('fdbc'); const o = n('e260'); const a = n('9112'); const s = n('b622'); const l = s('iterator'); const c = s('toStringTag'); const u = o.values; for (const f in i) { const d = r[f]; const h = d && d.prototype; if (h) { if (h[l] !== u) try { a(h, l, u); } catch (v) { h[l] = u; } if (h[c] || a(h, c, f), i[f]) for (const p in o) if (h[p] !== o[p]) try { a(h, p, o[p]); } catch (v) { h[p] = o[p]; } } } },
  df75(t, e, n) { const r = n('ca84'); const i = n('7839'); t.exports = Object.keys || function (t) { return r(t, i); }; },
  df7c(t, e, n) { (function (t) { function n(t, e) { for (var n = 0, r = t.length - 1; r >= 0; r--) { const i = t[r]; i === '.' ? t.splice(r, 1) : i === '..' ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--); } if (e) for (;n--; n)t.unshift('..'); return t; } function r(t) { typeof t !== 'string' && (t += ''); let e; let n = 0; let r = -1; let i = !0; for (e = t.length - 1; e >= 0; --e) if (t.charCodeAt(e) === 47) { if (!i) { n = e + 1; break; } } else r === -1 && (i = !1, r = e + 1); return r === -1 ? '' : t.slice(n, r); } function i(t, e) { if (t.filter) return t.filter(e); for (var n = [], r = 0; r < t.length; r++)e(t[r], r, t) && n.push(t[r]); return n; }e.resolve = function () { for (var e = '', r = !1, o = arguments.length - 1; o >= -1 && !r; o--) { const a = o >= 0 ? arguments[o] : t.cwd(); if (typeof a !== 'string') throw new TypeError('Arguments to path.resolve must be strings'); a && (e = `${a}/${e}`, r = a.charAt(0) === '/'); } return e = n(i(e.split('/'), ((t) => !!t)), !r).join('/'), (r ? '/' : '') + e || '.'; }, e.normalize = function (t) { const r = e.isAbsolute(t); const a = o(t, -1) === '/'; return t = n(i(t.split('/'), ((t) => !!t)), !r).join('/'), t || r || (t = '.'), t && a && (t += '/'), (r ? '/' : '') + t; }, e.isAbsolute = function (t) { return t.charAt(0) === '/'; }, e.join = function () { const t = Array.prototype.slice.call(arguments, 0); return e.normalize(i(t, ((t, e) => { if (typeof t !== 'string') throw new TypeError('Arguments to path.join must be strings'); return t; })).join('/')); }, e.relative = function (t, n) { function r(t) { for (var e = 0; e < t.length; e++) if (t[e] !== '') break; for (var n = t.length - 1; n >= 0; n--) if (t[n] !== '') break; return e > n ? [] : t.slice(e, n - e + 1); }t = e.resolve(t).substr(1), n = e.resolve(n).substr(1); for (var i = r(t.split('/')), o = r(n.split('/')), a = Math.min(i.length, o.length), s = a, l = 0; l < a; l++) if (i[l] !== o[l]) { s = l; break; } let c = []; for (l = s; l < i.length; l++)c.push('..'); return c = c.concat(o.slice(s)), c.join('/'); }, e.sep = '/', e.delimiter = ':', e.dirname = function (t) { if (typeof t !== 'string' && (t += ''), t.length === 0) return '.'; for (var e = t.charCodeAt(0), n = e === 47, r = -1, i = !0, o = t.length - 1; o >= 1; --o) if (e = t.charCodeAt(o), e === 47) { if (!i) { r = o; break; } } else i = !1; return r === -1 ? n ? '/' : '.' : n && r === 1 ? '/' : t.slice(0, r); }, e.basename = function (t, e) { let n = r(t); return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n; }, e.extname = function (t) { typeof t !== 'string' && (t += ''); for (var e = -1, n = 0, r = -1, i = !0, o = 0, a = t.length - 1; a >= 0; --a) { const s = t.charCodeAt(a); if (s !== 47)r === -1 && (i = !1, r = a + 1), s === 46 ? e === -1 ? e = a : o !== 1 && (o = 1) : e !== -1 && (o = -1); else if (!i) { n = a + 1; break; } } return e === -1 || r === -1 || o === 0 || o === 1 && e === r - 1 && e === n + 1 ? '' : t.slice(e, r); }; var o = 'ab'.substr(-1) === 'b' ? function (t, e, n) { return t.substr(e, n); } : function (t, e, n) { return e < 0 && (e = t.length + e), t.substr(e, n); }; }).call(this, n('4362')); },
  df84(t, e, n) { const r = n('0368'); const i = n('4c07'); const o = n('d0c8'); const a = n('f14a'); t.exports = r ? Object.defineProperties : function (t, e) { o(t); let n; const r = a(e); const s = r.length; let l = 0; while (s > l)i.f(t, n = r[l++], e[n]); return t; }; },
  e01a(t, e, n) {
    const r = n('23e7'); const i = n('83ab'); const o = n('da84'); const a = n('5135'); const s = n('861d'); const l = n('9bf2').f; const c = n('e893'); const u = o.Symbol; if (i && typeof u === 'function' && (!('description' in u.prototype) || void 0 !== u().description)) { const f = {}; var d = function () { const t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]); const e = this instanceof d ? new u(t) : void 0 === t ? u() : u(t); return t === '' && (f[e] = !0), e; }; c(d, u); const h = d.prototype = u.prototype; h.constructor = d; const p = h.toString; const v = String(u('test')) == 'Symbol(test)'; const b = /^Symbol\((.*)\)[^)]+$/; l(h, 'description', { configurable: !0, get() { const t = s(this) ? this.valueOf() : this; const e = p.call(t); if (a(f, t)) return ''; const n = v ? e.slice(7, -1) : e.replace(b, '$1'); return n === '' ? void 0 : n; } }), r({ global: !0, forced: !0 }, { Symbol: d }); }
  },
  e163(t, e, n) { const r = n('5135'); const i = n('7b0b'); const o = n('f772'); const a = n('e177'); const s = o('IE_PROTO'); const l = Object.prototype; t.exports = a ? Object.getPrototypeOf : function (t) { return t = i(t), r(t, s) ? t[s] : typeof t.constructor === 'function' && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null; }; },
  e177(t, e, n) { const r = n('d039'); t.exports = !r((() => { function t() {} return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype; })); },
  e260(t, e, n) {
    const r = n('fc6a'); const i = n('44d2'); const o = n('3f8c'); const a = n('69f3'); const s = n('7dd0'); const l = 'Array Iterator'; const c = a.set; const u = a.getterFor(l); t.exports = s(Array, 'Array', (function (t, e) {
      c(this, {
        type: l, target: r(t), index: 0, kind: e,
      });
    }), (function () { const t = u(this); const e = t.target; const n = t.kind; const r = t.index++; return !e || r >= e.length ? (t.target = void 0, { value: void 0, done: !0 }) : n == 'keys' ? { value: r, done: !1 } : n == 'values' ? { value: e[r], done: !1 } : { value: [r, e[r]], done: !1 }; }), 'values'), o.Arguments = o.Array, i('keys'), i('values'), i('entries');
  },
  e2cc(t, e, n) { const r = n('6eeb'); t.exports = function (t, e, n) { for (const i in e)r(t, i, e[i], n); return t; }; },
  e379(t, e, n) {
    let r; let i; let o; let a; const s = n('199f'); const l = n('0f33'); const c = n('09e4'); const u = n('0ee6'); const f = n('c85d'); const d = n('7024'); const h = n('2ba0'); const p = n('77da'); const v = n('793f'); const b = n('bb6e'); const m = n('90c5'); const y = n('8f08'); const g = n('d714'); const w = n('0209'); const O = n('0761'); const S = n('808c'); const x = n('894d'); const T = n('0fd9').set; const k = n('5923'); const P = n('8fe4'); const j = n('b1b0'); const C = n('761e'); const _ = n('189d'); const B = n('a547'); const D = n('25d0'); const E = n('8b0e'); const $ = n('fce5'); const A = E('species'); const I = 'Promise'; const F = B.get; const L = B.set; const R = B.getterFor(I); let M = f; const N = c.TypeError; const V = c.document; const z = c.process; const H = u('fetch'); let G = C.f; const U = G; const W = g(z) == 'process'; const q = !!(V && V.createEvent && c.dispatchEvent); const Y = 'unhandledrejection'; const K = 'rejectionhandled'; const X = 0; const J = 1; const Z = 2; const Q = 1; const tt = 2; const et = D(I, (() => { const t = w(M) !== String(M); if (!t) { if ($ === 66) return !0; if (!W && typeof PromiseRejectionEvent !== 'function') return !0; } if (l && !M.prototype.finally) return !0; if ($ >= 51 && /native code/.test(M)) return !1; const e = M.resolve(1); const n = function (t) { t((() => {}), (() => {})); }; const r = e.constructor = {}; return r[A] = n, !(e.then((() => {})) instanceof n); })); const nt = et || !S(((t) => { M.all(t).catch((() => {})); })); const rt = function (t) { let e; return !(!b(t) || typeof (e = t.then) !== 'function') && e; }; const it = function (t, e, n) { if (!e.notified) { e.notified = !0; const r = e.reactions; k((() => { const i = e.value; const o = e.state == J; let a = 0; while (r.length > a) { var s; var l; var c; const u = r[a++]; const f = o ? u.ok : u.fail; const d = u.resolve; const h = u.reject; const p = u.domain; try { f ? (o || (e.rejection === tt && lt(t, e), e.rejection = Q), !0 === f ? s = i : (p && p.enter(), s = f(i), p && (p.exit(), c = !0)), s === u.promise ? h(N('Promise-chain cycle')) : (l = rt(s)) ? l.call(s, d, h) : d(s)) : h(i); } catch (v) { p && !c && p.exit(), h(v); } }e.reactions = [], e.notified = !1, n && !e.rejection && at(t, e); })); } }; const ot = function (t, e, n) { let r; let i; q ? (r = V.createEvent('Event'), r.promise = e, r.reason = n, r.initEvent(t, !1, !0), c.dispatchEvent(r)) : r = { promise: e, reason: n }, (i = c[`on${t}`]) ? i(r) : t === Y && j('Unhandled promise rejection', n); }; var at = function (t, e) { T.call(c, (() => { let n; const r = e.value; const i = st(e); if (i && (n = _((() => { W ? z.emit('unhandledRejection', r, t) : ot(Y, t, r); })), e.rejection = W || st(e) ? tt : Q, n.error)) throw n.value; })); }; var st = function (t) { return t.rejection !== Q && !t.parent; }; var lt = function (t, e) { T.call(c, (() => { W ? z.emit('rejectionHandled', t) : ot(K, t, e.value); })); }; const ct = function (t, e, n, r) { return function (i) { t(e, n, i, r); }; }; const ut = function (t, e, n, r) { e.done || (e.done = !0, r && (e = r), e.value = n, e.state = Z, it(t, e, !0)); }; var ft = function (t, e, n, r) { if (!e.done) { e.done = !0, r && (e = r); try { if (t === n) throw N("Promise can't be resolved itself"); const i = rt(n); i ? k((() => { const r = { done: !1 }; try { i.call(n, ct(ft, t, r, e), ct(ut, t, r, e)); } catch (o) { ut(t, r, o, e); } })) : (e.value = n, e.state = J, it(t, e, !1)); } catch (o) { ut(t, { done: !1 }, o, e); } } }; et && (M = function (t) { y(this, M, I), m(t), r.call(this); const e = F(this); try { t(ct(ft, this, e), ct(ut, this, e)); } catch (n) { ut(this, e, n); } }, r = function (t) {
      L(this, {
        type: I, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: X, value: void 0,
      });
    }, r.prototype = h(M.prototype, { then(t, e) { const n = R(this); const r = G(x(this, M)); return r.ok = typeof t !== 'function' || t, r.fail = typeof e === 'function' && e, r.domain = W ? z.domain : void 0, n.parent = !0, n.reactions.push(r), n.state != X && it(this, n, !1), r.promise; }, catch(t) { return this.then(void 0, t); } }), i = function () {
      const t = new r(); const
        e = F(t); this.promise = t, this.resolve = ct(ft, t, e), this.reject = ct(ut, t, e);
    }, C.f = G = function (t) { return t === M || t === o ? new i(t) : U(t); }, l || typeof f !== 'function' || (a = f.prototype.then, d(f.prototype, 'then', (function (t, e) { const n = this; return new M((((t, e) => { a.call(n, t, e); }))).then(t, e); }), { unsafe: !0 }), typeof H === 'function' && s({ global: !0, enumerable: !0, forced: !0 }, { fetch(t) { return P(M, H.apply(c, arguments)); } }))), s({ global: !0, wrap: !0, forced: et }, { Promise: M }), p(M, I, !1, !0), v(I), o = u(I), s({ target: I, stat: !0, forced: et }, { reject(t) { const e = G(this); return e.reject.call(void 0, t), e.promise; } }), s({ target: I, stat: !0, forced: l || et }, { resolve(t) { return P(l && this === o ? M : this, t); } }), s({ target: I, stat: !0, forced: nt }, { all(t) { const e = this; const n = G(e); const r = n.resolve; const i = n.reject; const o = _((() => { const n = m(e.resolve); const o = []; let a = 0; let s = 1; O(t, ((t) => { const l = a++; let c = !1; o.push(void 0), s++, n.call(e, t).then(((t) => { c || (c = !0, o[l] = t, --s || r(o)); }), i); })), --s || r(o); })); return o.error && i(o.value), n.promise; }, race(t) { const e = this; const n = G(e); const r = n.reject; const i = _((() => { const i = m(e.resolve); O(t, ((t) => { i.call(e, t).then(n.resolve, r); })); })); return i.error && r(i.value), n.promise; } });
  },
  e538(t, e, n) { const r = n('b622'); e.f = r; },
  e623(t, e, n) {
    const r = n('a84f'); const i = n('613f'); const o = n('ca70'); const a = n('a547'); const s = n('a580'); const l = 'Array Iterator'; const c = a.set; const u = a.getterFor(l); t.exports = s(Array, 'Array', (function (t, e) {
      c(this, {
        type: l, target: r(t), index: 0, kind: e,
      });
    }), (function () { const t = u(this); const e = t.target; const n = t.kind; const r = t.index++; return !e || r >= e.length ? (t.target = void 0, { value: void 0, done: !0 }) : n == 'keys' ? { value: r, done: !1 } : n == 'values' ? { value: e[r], done: !1 } : { value: [r, e[r]], done: !1 }; }), 'values'), o.Arguments = o.Array, i('keys'), i('values'), i('entries');
  },
  e667(t, e) { t.exports = function (t) { try { return { error: !1, value: t() }; } catch (e) { return { error: !0, value: e }; } }; },
  e6cf(t, e, n) {
    let r; let i; let o; let a; const s = n('23e7'); const l = n('c430'); const c = n('da84'); const u = n('d066'); const f = n('fea9'); const d = n('6eeb'); const h = n('e2cc'); const p = n('d44e'); const v = n('2626'); const b = n('861d'); const m = n('1c0b'); const y = n('19aa'); const g = n('c6b6'); const w = n('8925'); const O = n('2266'); const S = n('1c7e'); const x = n('4840'); const T = n('2cf4').set; const k = n('b575'); const P = n('cdf9'); const j = n('44de'); const C = n('f069'); const _ = n('e667'); const B = n('69f3'); const D = n('94ca'); const E = n('b622'); const $ = n('2d00'); const A = E('species'); const I = 'Promise'; const F = B.get; const L = B.set; const R = B.getterFor(I); let M = f; const N = c.TypeError; const V = c.document; const z = c.process; const H = u('fetch'); let G = C.f; const U = G; const W = g(z) == 'process'; const q = !!(V && V.createEvent && c.dispatchEvent); const Y = 'unhandledrejection'; const K = 'rejectionhandled'; const X = 0; const J = 1; const Z = 2; const Q = 1; const tt = 2; const et = D(I, (() => { const t = w(M) !== String(M); if (!t) { if ($ === 66) return !0; if (!W && typeof PromiseRejectionEvent !== 'function') return !0; } if (l && !M.prototype.finally) return !0; if ($ >= 51 && /native code/.test(M)) return !1; const e = M.resolve(1); const n = function (t) { t((() => {}), (() => {})); }; const r = e.constructor = {}; return r[A] = n, !(e.then((() => {})) instanceof n); })); const nt = et || !S(((t) => { M.all(t).catch((() => {})); })); const rt = function (t) { let e; return !(!b(t) || typeof (e = t.then) !== 'function') && e; }; const it = function (t, e, n) { if (!e.notified) { e.notified = !0; const r = e.reactions; k((() => { const i = e.value; const o = e.state == J; let a = 0; while (r.length > a) { var s; var l; var c; const u = r[a++]; const f = o ? u.ok : u.fail; const d = u.resolve; const h = u.reject; const p = u.domain; try { f ? (o || (e.rejection === tt && lt(t, e), e.rejection = Q), !0 === f ? s = i : (p && p.enter(), s = f(i), p && (p.exit(), c = !0)), s === u.promise ? h(N('Promise-chain cycle')) : (l = rt(s)) ? l.call(s, d, h) : d(s)) : h(i); } catch (v) { p && !c && p.exit(), h(v); } }e.reactions = [], e.notified = !1, n && !e.rejection && at(t, e); })); } }; const ot = function (t, e, n) { let r; let i; q ? (r = V.createEvent('Event'), r.promise = e, r.reason = n, r.initEvent(t, !1, !0), c.dispatchEvent(r)) : r = { promise: e, reason: n }, (i = c[`on${t}`]) ? i(r) : t === Y && j('Unhandled promise rejection', n); }; var at = function (t, e) { T.call(c, (() => { let n; const r = e.value; const i = st(e); if (i && (n = _((() => { W ? z.emit('unhandledRejection', r, t) : ot(Y, t, r); })), e.rejection = W || st(e) ? tt : Q, n.error)) throw n.value; })); }; var st = function (t) { return t.rejection !== Q && !t.parent; }; var lt = function (t, e) { T.call(c, (() => { W ? z.emit('rejectionHandled', t) : ot(K, t, e.value); })); }; const ct = function (t, e, n, r) { return function (i) { t(e, n, i, r); }; }; const ut = function (t, e, n, r) { e.done || (e.done = !0, r && (e = r), e.value = n, e.state = Z, it(t, e, !0)); }; var ft = function (t, e, n, r) { if (!e.done) { e.done = !0, r && (e = r); try { if (t === n) throw N("Promise can't be resolved itself"); const i = rt(n); i ? k((() => { const r = { done: !1 }; try { i.call(n, ct(ft, t, r, e), ct(ut, t, r, e)); } catch (o) { ut(t, r, o, e); } })) : (e.value = n, e.state = J, it(t, e, !1)); } catch (o) { ut(t, { done: !1 }, o, e); } } }; et && (M = function (t) { y(this, M, I), m(t), r.call(this); const e = F(this); try { t(ct(ft, this, e), ct(ut, this, e)); } catch (n) { ut(this, e, n); } }, r = function (t) {
      L(this, {
        type: I, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: X, value: void 0,
      });
    }, r.prototype = h(M.prototype, { then(t, e) { const n = R(this); const r = G(x(this, M)); return r.ok = typeof t !== 'function' || t, r.fail = typeof e === 'function' && e, r.domain = W ? z.domain : void 0, n.parent = !0, n.reactions.push(r), n.state != X && it(this, n, !1), r.promise; }, catch(t) { return this.then(void 0, t); } }), i = function () {
      const t = new r(); const
        e = F(t); this.promise = t, this.resolve = ct(ft, t, e), this.reject = ct(ut, t, e);
    }, C.f = G = function (t) { return t === M || t === o ? new i(t) : U(t); }, l || typeof f !== 'function' || (a = f.prototype.then, d(f.prototype, 'then', (function (t, e) { const n = this; return new M((((t, e) => { a.call(n, t, e); }))).then(t, e); }), { unsafe: !0 }), typeof H === 'function' && s({ global: !0, enumerable: !0, forced: !0 }, { fetch(t) { return P(M, H.apply(c, arguments)); } }))), s({ global: !0, wrap: !0, forced: et }, { Promise: M }), p(M, I, !1, !0), v(I), o = u(I), s({ target: I, stat: !0, forced: et }, { reject(t) { const e = G(this); return e.reject.call(void 0, t), e.promise; } }), s({ target: I, stat: !0, forced: l || et }, { resolve(t) { return P(l && this === o ? M : this, t); } }), s({ target: I, stat: !0, forced: nt }, { all(t) { const e = this; const n = G(e); const r = n.resolve; const i = n.reject; const o = _((() => { const n = m(e.resolve); const o = []; let a = 0; let s = 1; O(t, ((t) => { const l = a++; let c = !1; o.push(void 0), s++, n.call(e, t).then(((t) => { c || (c = !0, o[l] = t, --s || r(o)); }), i); })), --s || r(o); })); return o.error && i(o.value), n.promise; }, race(t) { const e = this; const n = G(e); const r = n.reject; const i = _((() => { const i = m(e.resolve); O(t, ((t) => { i.call(e, t).then(n.resolve, r); })); })); return i.error && r(i.value), n.promise; } });
  },
  e893(t, e, n) { const r = n('5135'); const i = n('56ef'); const o = n('06cf'); const a = n('9bf2'); t.exports = function (t, e) { for (let n = i(e), s = a.f, l = o.f, c = 0; c < n.length; c++) { const u = n[c]; r(t, u) || s(t, u, l(e, u)); } }; },
  e8b5(t, e, n) { const r = n('c6b6'); t.exports = Array.isArray || function (t) { return r(t) == 'Array'; }; },
  e95a(t, e, n) { const r = n('b622'); const i = n('3f8c'); const o = r('iterator'); const a = Array.prototype; t.exports = function (t) { return void 0 !== t && (i.Array === t || a[o] === t); }; },
  ebca(t, e, n) { const r = n('76af'); t.exports = function (t) { return Object(r(t)); }; },
  ecee(t, e, n) {
    (function (t) {
      function r(t) { return r = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, r(t); } function i(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); } function o(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } function a(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t; } function s(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n, enumerable: !0, configurable: !0, writable: !0,
        }) : t[e] = n, t;
      } function l(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; let r = Object.keys(n); typeof Object.getOwnPropertySymbols === 'function' && (r = r.concat(Object.getOwnPropertySymbols(n).filter(((t) => Object.getOwnPropertyDescriptor(n, t).enumerable)))), r.forEach(((e) => { s(t, e, n[e]); })); } return t; } function c(t, e) { return d(t) || p(t, e) || b(); } function u(t) { return f(t) || h(t) || v(); } function f(t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e]; return n; } } function d(t) { if (Array.isArray(t)) return t; } function h(t) { if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === '[object Arguments]') return Array.from(t); } function p(t, e) { const n = []; let r = !0; let i = !1; let o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) if (n.push(a.value), e && n.length === e) break; } catch (l) { i = !0, o = l; } finally { try { r || s.return == null || s.return(); } finally { if (i) throw o; } } return n; } function v() { throw new TypeError('Invalid attempt to spread non-iterable instance'); } function b() { throw new TypeError('Invalid attempt to destructure non-iterable instance'); }n.d(e, 'b', (() => oe)), n.d(e, 'a', (() => z)), n.d(e, 'e', (() => ae)), n.d(e, 'c', (() => ne)), n.d(e, 'd', (() => ie)); const m = function () {}; let y = {}; let g = {}; let w = { mark: m, measure: m }; try { typeof window !== 'undefined' && (y = window), typeof document !== 'undefined' && (g = document), typeof MutationObserver !== 'undefined' && MutationObserver, typeof performance !== 'undefined' && (w = performance); } catch (se) {} const O = y.navigator || {}; const S = O.userAgent; const x = void 0 === S ? '' : S; const T = y; const k = g; const P = w; const j = (T.document, !!k.documentElement && !!k.head && typeof k.addEventListener === 'function' && typeof k.createElement === 'function'); const C = ~x.indexOf('MSIE') || ~x.indexOf('Trident/'); const _ = '___FONT_AWESOME___'; const B = 16; const D = 'fa'; const E = 'svg-inline--fa'; const $ = 'data-fa-i2svg'; const A = ((function () { try {} catch (se) { return !1; } }()), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); const I = A.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]); const F = (['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(A.map(((t) => ''.concat(t, 'x')))).concat(I.map(((t) => 'w-'.concat(t)))), T.FontAwesomeConfig || {}); function L(t) { const e = k.querySelector(`script[${t}]`); if (e) return e.getAttribute(t); } function R(t) { return t === '' || t !== 'false' && (t === 'true' || t); } if (k && typeof k.querySelector === 'function') { const M = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']]; M.forEach(((t) => { const e = c(t, 2); const n = e[0]; const r = e[1]; const i = R(L(n)); void 0 !== i && i !== null && (F[r] = i); })); } const N = {
        familyPrefix: D, replacementClass: E, autoReplaceSvg: !0, autoAddCss: !0, autoA11y: !0, searchPseudoElements: !1, observeMutations: !0, mutateApproach: 'async', keepOriginalSource: !0, measurePerformance: !1, showMissingIcons: !0,
      }; const V = l({}, N, F); V.autoReplaceSvg || (V.observeMutations = !1); var z = l({}, V); T.FontAwesomeConfig = z; const H = T || {}; H[_] || (H[_] = {}), H[_].styles || (H[_].styles = {}), H[_].hooks || (H[_].hooks = {}), H[_].shims || (H[_].shims = []); const G = H[_]; const U = []; const W = function t() { k.removeEventListener('DOMContentLoaded', t), q = 1, U.map(((t) => t())); }; var q = !1; j && (q = (k.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(k.readyState), q || k.addEventListener('DOMContentLoaded', W)); let Y; const K = 'pending'; const X = 'settled'; const J = 'fulfilled'; const Z = 'rejected'; const Q = function () {}; const tt = typeof t !== 'undefined' && typeof t.process !== 'undefined' && typeof t.process.emit === 'function'; const et = typeof setImmediate === 'undefined' ? setTimeout : setImmediate; let nt = []; function rt() { for (let t = 0; t < nt.length; t++)nt[t][0](nt[t][1]); nt = [], Y = !1; } function it(t, e) { nt.push([t, e]), Y || (Y = !0, et(rt, 0)); } function ot(t, e) { function n(t) { lt(e, t); } function r(t) { ut(e, t); } try { t(n, r); } catch (se) { r(se); } } function at(t) { const e = t.owner; let n = e._state; let r = e._data; const i = t[n]; const o = t.then; if (typeof i === 'function') { n = J; try { r = i(r); } catch (se) { ut(o, se); } }st(o, r) || (n === J && lt(o, r), n === Z && ut(o, r)); } function st(t, e) { let n; try { if (t === e) throw new TypeError('A promises callback cannot return that same promise.'); if (e && (typeof e === 'function' || r(e) === 'object')) { const i = e.then; if (typeof i === 'function') return i.call(e, ((r) => { n || (n = !0, e === r ? ct(t, r) : lt(t, r)); }), ((e) => { n || (n = !0, ut(t, e)); })), !0; } } catch (se) { return n || ut(t, se), !0; } return !1; } function lt(t, e) { t !== e && st(t, e) || ct(t, e); } function ct(t, e) { t._state === K && (t._state = X, t._data = e, it(dt, t)); } function ut(t, e) { t._state === K && (t._state = X, t._data = e, it(ht, t)); } function ft(t) { t._then = t._then.forEach(at); } function dt(t) { t._state = J, ft(t); } function ht(e) { e._state = Z, ft(e), !e._handled && tt && t.process.emit('unhandledRejection', e._data, e); } function pt(e) { t.process.emit('rejectionHandled', e); } function vt(t) { if (typeof t !== 'function') throw new TypeError(`Promise resolver ${t} is not a function`); if (this instanceof vt === !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."); this._then = [], ot(t, this); }vt.prototype = {
        constructor: vt,
        _state: K,
        _then: null,
        _data: void 0,
        _handled: !1,
        then(t, e) {
          const n = {
            owner: this, then: new this.constructor(Q), fulfilled: t, rejected: e,
          }; return !e && !t || this._handled || (this._handled = !0, this._state === Z && tt && it(pt, this)), this._state === J || this._state === Z ? it(at, n) : this._then.push(n), n.then;
        },
        catch(t) { return this.then(null, t); },
      }, vt.all = function (t) { if (!Array.isArray(t)) throw new TypeError('You must pass an array to Promise.all().'); return new vt((((e, n) => { const r = []; let i = 0; function o(t) { return i++, function (n) { r[t] = n, --i || e(r); }; } for (var a, s = 0; s < t.length; s++)a = t[s], a && typeof a.then === 'function' ? a.then(o(s), n) : r[s] = a; i || e(r); }))); }, vt.race = function (t) { if (!Array.isArray(t)) throw new TypeError('You must pass an array to Promise.race().'); return new vt((((e, n) => { for (var r, i = 0; i < t.length; i++)r = t[i], r && typeof r.then === 'function' ? r.then(e, n) : e(r); }))); }, vt.resolve = function (t) { return t && r(t) === 'object' && t.constructor === vt ? t : new vt((((e) => { e(t); }))); }, vt.reject = function (t) { return new vt((((e, n) => { n(t); }))); }; const bt = B; const mt = {
        size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1,
      }; function yt(t) { if (t && j) { const e = k.createElement('style'); e.setAttribute('type', 'text/css'), e.innerHTML = t; for (var n = k.head.childNodes, r = null, i = n.length - 1; i > -1; i--) { const o = n[i]; const a = (o.tagName || '').toUpperCase(); ['STYLE', 'LINK'].indexOf(a) > -1 && (r = o); } return k.head.insertBefore(e, r), t; } } const gt = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; function wt() { let t = 12; let e = ''; while (t-- > 0)e += gt[62 * Math.random() | 0]; return e; } function Ot(t) {
        return ''.concat(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      } function St(t) { return Object.keys(t || {}).reduce(((e, n) => e + ''.concat(n, '="').concat(Ot(t[n]), '" ')), '').trim(); } function xt(t) { return Object.keys(t || {}).reduce(((e, n) => e + ''.concat(n, ': ').concat(t[n], ';')), ''); } function Tt(t) { return t.size !== mt.size || t.x !== mt.x || t.y !== mt.y || t.rotate !== mt.rotate || t.flipX || t.flipY; } function kt(t) { const e = t.transform; const n = t.containerWidth; const r = t.iconWidth; const i = { transform: 'translate('.concat(n / 2, ' 256)') }; const o = 'translate('.concat(32 * e.x, ', ').concat(32 * e.y, ') '); const a = 'scale('.concat(e.size / 16 * (e.flipX ? -1 : 1), ', ').concat(e.size / 16 * (e.flipY ? -1 : 1), ') '); const s = 'rotate('.concat(e.rotate, ' 0 0)'); const l = { transform: ''.concat(o, ' ').concat(a, ' ').concat(s) }; const c = { transform: 'translate('.concat(r / 2 * -1, ' -256)') }; return { outer: i, inner: l, path: c }; } function Pt(t) { const e = t.transform; const n = t.width; const r = void 0 === n ? B : n; const i = t.height; const o = void 0 === i ? B : i; const a = t.startCentered; const s = void 0 !== a && a; let l = ''; return l += s && C ? 'translate('.concat(e.x / bt - r / 2, 'em, ').concat(e.y / bt - o / 2, 'em) ') : s ? 'translate(calc(-50% + '.concat(e.x / bt, 'em), calc(-50% + ').concat(e.y / bt, 'em)) ') : 'translate('.concat(e.x / bt, 'em, ').concat(e.y / bt, 'em) '), l += 'scale('.concat(e.size / bt * (e.flipX ? -1 : 1), ', ').concat(e.size / bt * (e.flipY ? -1 : 1), ') '), l += 'rotate('.concat(e.rotate, 'deg) '), l; } const jt = {
        x: 0, y: 0, width: '100%', height: '100%',
      }; function Ct(t) { const e = t.children; const n = t.attributes; const r = t.main; const i = t.mask; const o = t.transform; const a = r.width; const s = r.icon; const c = i.width; const u = i.icon; const f = kt({ transform: o, containerWidth: c, iconWidth: a }); const d = { tag: 'rect', attributes: l({}, jt, { fill: 'white' }) }; const h = { tag: 'g', attributes: l({}, f.inner), children: [{ tag: 'path', attributes: l({}, s.attributes, f.path, { fill: 'black' }) }] }; const p = { tag: 'g', attributes: l({}, f.outer), children: [h] }; const v = 'mask-'.concat(wt()); const b = 'clip-'.concat(wt()); const m = { tag: 'mask', attributes: l({}, jt, { id: v, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }), children: [d, p] }; const y = { tag: 'defs', children: [{ tag: 'clipPath', attributes: { id: b }, children: [u] }, m] }; return e.push(y, { tag: 'rect', attributes: l({ fill: 'currentColor', 'clip-path': 'url(#'.concat(b, ')'), mask: 'url(#'.concat(v, ')') }, jt) }), { children: e, attributes: n }; } function _t(t) { const e = t.children; const n = t.attributes; const r = t.main; const i = t.transform; const o = t.styles; const a = xt(o); if (a.length > 0 && (n.style = a), Tt(i)) { const s = kt({ transform: i, containerWidth: r.width, iconWidth: r.width }); e.push({ tag: 'g', attributes: l({}, s.outer), children: [{ tag: 'g', attributes: l({}, s.inner), children: [{ tag: r.icon.tag, children: r.icon.children, attributes: l({}, r.icon.attributes, s.path) }] }] }); } else e.push(r.icon); return { children: e, attributes: n }; } function Bt(t) { const e = t.children; const n = t.main; const r = t.mask; const i = t.attributes; const o = t.styles; const a = t.transform; if (Tt(a) && n.found && !r.found) { const s = n.width; const c = n.height; const u = { x: s / c / 2, y: 0.5 }; i.style = xt(l({}, o, { 'transform-origin': ''.concat(u.x + a.x / 16, 'em ').concat(u.y + a.y / 16, 'em') })); } return [{ tag: 'svg', attributes: i, children: e }]; } function Dt(t) { const e = t.prefix; const n = t.iconName; const r = t.children; const i = t.attributes; const o = t.symbol; const a = !0 === o ? ''.concat(e, '-').concat(z.familyPrefix, '-').concat(n) : o; return [{ tag: 'svg', attributes: { style: 'display: none;' }, children: [{ tag: 'symbol', attributes: l({}, i, { id: a }), children: r }] }]; } function Et(t) {
        const e = t.icons; const n = e.main; const r = e.mask; const i = t.prefix; const o = t.iconName; const a = t.transform; const s = t.symbol; const c = t.title; const u = t.extra; const f = t.watchable; const d = void 0 !== f && f; const h = r.found ? r : n; const p = h.width; const v = h.height; const b = 'fa-w-'.concat(Math.ceil(p / v * 16)); const m = [z.replacementClass, o ? ''.concat(z.familyPrefix, '-').concat(o) : '', b].filter(((t) => u.classes.indexOf(t) === -1)).concat(u.classes).join(' '); const y = {
          children: [],
          attributes: l({}, u.attributes, {
            'data-prefix': i, 'data-icon': o, class: m, role: u.attributes.role || 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 '.concat(p, ' ').concat(v),
          }),
        }; d && (y.attributes[$] = ''), c && y.children.push({ tag: 'title', attributes: { id: y.attributes['aria-labelledby'] || 'title-'.concat(wt()) }, children: [c] }); const g = l({}, y, {
          prefix: i, iconName: o, main: n, mask: r, transform: a, symbol: s, styles: u.styles,
        }); const w = r.found && n.found ? Ct(g) : _t(g); const O = w.children; const S = w.attributes; return g.children = O, g.attributes = S, s ? Dt(g) : Bt(g);
      } function $t(t) {
        const e = t.content; const n = t.width; const r = t.height; const i = t.transform; const o = t.title; const a = t.extra; const s = t.watchable; const c = void 0 !== s && s; const u = l({}, a.attributes, o ? { title: o } : {}, { class: a.classes.join(' ') }); c && (u[$] = ''); const f = l({}, a.styles); Tt(i) && (f.transform = Pt({
          transform: i, startCentered: !0, width: n, height: r,
        }), f['-webkit-transform'] = f.transform); const d = xt(f); d.length > 0 && (u.style = d); const h = []; return h.push({ tag: 'span', attributes: u, children: [e] }), o && h.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }), h;
      } const At = function () {}; const It = (z.measurePerformance && P && P.mark && P.measure, function (t, e) { return function (n, r, i, o) { return t.call(e, n, r, i, o); }; }); const Ft = function (t, e, n, r) { let i; let o; let a; const s = Object.keys(t); const l = s.length; const c = void 0 !== r ? It(e, r) : e; for (void 0 === n ? (i = 1, a = t[s[0]]) : (i = 0, a = n); i < l; i++)o = s[i], a = c(a, t[o], o, t); return a; }; function Lt(t, e) { const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; const r = n.skipHooks; const i = void 0 !== r && r; const o = Object.keys(e).reduce(((t, n) => { const r = e[n]; const i = !!r.icon; return i ? t[r.iconName] = r.icon : t[n] = r, t; }), {}); typeof G.hooks.addPack !== 'function' || i ? G.styles[t] = l({}, G.styles[t] || {}, o) : G.hooks.addPack(t, o), t === 'fas' && Lt('fa', e); } const Rt = G.styles; const Mt = G.shims; const Nt = function () { const t = function (t) { return Ft(Rt, ((e, n, r) => (e[r] = Ft(n, t, {}), e)), {}); }; t(((t, e, n) => (e[3] && (t[e[3]] = n), t))), t(((t, e, n) => { const r = e[2]; return t[n] = n, r.forEach(((e) => { t[e] = n; })), t; })); const e = 'far' in Rt; Ft(Mt, ((t, n) => { const r = n[0]; let i = n[1]; const o = n[2]; return i !== 'far' || e || (i = 'fas'), t[r] = { prefix: i, iconName: o }, t; }), {}); }; Nt(); G.styles; function Vt(t, e, n) { if (t && t[e] && t[e][n]) return { prefix: e, iconName: n, icon: t[e][n] }; } function zt(t) { const e = t.tag; const n = t.attributes; const r = void 0 === n ? {} : n; const i = t.children; const o = void 0 === i ? [] : i; return typeof t === 'string' ? Ot(t) : '<'.concat(e, ' ').concat(St(r), '>').concat(o.map(zt).join(''), '</').concat(e, '>'); } const Ht = function (t) {
        const e = {
          size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0,
        }; return t ? t.toLowerCase().split(' ').reduce(((t, e) => { const n = e.toLowerCase().split('-'); const r = n[0]; let i = n.slice(1).join('-'); if (r && i === 'h') return t.flipX = !0, t; if (r && i === 'v') return t.flipY = !0, t; if (i = parseFloat(i), isNaN(i)) return t; switch (r) { case 'grow': t.size += i; break; case 'shrink': t.size -= i; break; case 'left': t.x -= i; break; case 'right': t.x += i; break; case 'up': t.y -= i; break; case 'down': t.y += i; break; case 'rotate': t.rotate += i; break; } return t; }), e) : e;
      }; function Gt(t) { this.name = 'MissingIcon', this.message = t || 'Icon unavailable', this.stack = (new Error()).stack; }Gt.prototype = Object.create(Error.prototype), Gt.prototype.constructor = Gt; const Ut = { fill: 'currentColor' }; const Wt = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' }; const qt = (l({}, Ut, { d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z' }), l({}, Wt, { attributeName: 'opacity' })); l({}, Ut, { cx: '256', cy: '364', r: '28' }), l({}, Wt, { attributeName: 'r', values: '28;14;28;28;14;28;' }), l({}, qt, { values: '1;0;1;1;0;1;' }), l({}, Ut, { opacity: '1', d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z' }), l({}, qt, { values: '1;0;0;0;0;1;' }), l({}, Ut, { opacity: '0', d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z' }), l({}, qt, { values: '0;0;1;1;0;0;' }), G.styles; G.styles; const Yt = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}'; function Kt() { const t = D; const e = E; const n = z.familyPrefix; const r = z.replacementClass; let i = Yt; if (n !== t || r !== e) { const o = new RegExp('\\.'.concat(t, '\\-'), 'g'); const a = new RegExp('\\.'.concat(e), 'g'); i = i.replace(o, '.'.concat(n, '-')).replace(a, '.'.concat(r)); } return i; } const Xt = (function () { function t() { i(this, t), this.definitions = {}; } return a(t, [{ key: 'add', value() { for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r]; const i = n.reduce(this._pullDefinitions, {}); Object.keys(i).forEach(((e) => { t.definitions[e] = l({}, t.definitions[e] || {}, i[e]), Lt(e, i[e]), Nt(); })); } }, { key: 'reset', value() { this.definitions = {}; } }, { key: '_pullDefinitions', value(t, e) { const n = e.prefix && e.iconName && e.icon ? { 0: e } : e; return Object.keys(n).map(((e) => { const r = n[e]; const i = r.prefix; const o = r.iconName; const a = r.icon; t[i] || (t[i] = {}), t[i][o] = a; })), t; } }]), t; }()); function Jt(t) {
        const e = t[0]; const n = t[1]; const r = t.slice(4); return {
          found: !0, width: e, height: n, icon: { tag: 'path', attributes: { fill: 'currentColor', d: r[0] } },
        };
      } function Zt() { z.autoAddCss && !re && (yt(Kt()), re = !0); } function Qt(t, e) { return Object.defineProperty(t, 'abstract', { get: e }), Object.defineProperty(t, 'html', { get() { return t.abstract.map(((t) => zt(t))); } }), Object.defineProperty(t, 'node', { get() { if (j) { const e = k.createElement('div'); return e.innerHTML = t.html, e.children; } } }), t; } function te(t) { const e = t.prefix; const n = void 0 === e ? 'fa' : e; const r = t.iconName; if (r) return Vt(ne.definitions, n, r) || Vt(G.styles, n, r); } function ee(t) { return function (e) { const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const r = (e || {}).icon ? e : te(e || {}); let i = n.mask; return i && (i = (i || {}).icon ? i : te(i || {})), t(r, l({}, n, { mask: i })); }; } var ne = new Xt(); var re = !1; var ie = { transform(t) { return Ht(t); } }; var oe = ee((function (t) {
        const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const n = e.transform; const r = void 0 === n ? mt : n; const i = e.symbol; const o = void 0 !== i && i; const a = e.mask; const s = void 0 === a ? null : a; const c = e.title; const u = void 0 === c ? null : c; const f = e.classes; const d = void 0 === f ? [] : f; const h = e.attributes; const p = void 0 === h ? {} : h; const v = e.styles; const b = void 0 === v ? {} : v; if (t) {
          const m = t.prefix; const y = t.iconName; const g = t.icon; return Qt(l({ type: 'icon' }, t), (() => (Zt(), z.autoA11y && (u ? p['aria-labelledby'] = ''.concat(z.replacementClass, '-title-').concat(wt()) : (p['aria-hidden'] = 'true', p.focusable = 'false')), Et({
            icons: {
              main: Jt(g),
              mask: s ? Jt(s.icon) : {
                found: !1, width: null, height: null, icon: {},
              },
            },
            prefix: m,
            iconName: y,
            transform: l({}, mt, r),
            symbol: o,
            title: u,
            extra: { attributes: p, styles: b, classes: d },
          }))));
        }
      })); var
        ae = function (t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const n = e.transform; const r = void 0 === n ? mt : n; const i = e.title; const o = void 0 === i ? null : i; const a = e.classes; const s = void 0 === a ? [] : a; const c = e.attributes; const f = void 0 === c ? {} : c; const d = e.styles; const h = void 0 === d ? {} : d; return Qt({ type: 'text', content: t }, (() => (Zt(), $t({
            content: t, transform: l({}, mt, r), title: o, extra: { attributes: f, styles: h, classes: [''.concat(z.familyPrefix, '-layers-text')].concat(u(s)) },
          }))));
        };
    }).call(this, n('c8ba'));
  },
  f069(t, e, n) {
    const r = n('1c0b'); const i = function (t) { let e; let n; this.promise = new t((((t, r) => { if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor'); e = t, n = r; }))), this.resolve = r(e), this.reject = r(n); }; t.exports.f = function (t) { return new i(t); };
  },
  f0bd(t, e, n) {
    (function (t) {
    /** !
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
      const n = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined'; const r = (function () { for (let t = ['Edge', 'Trident', 'Firefox'], e = 0; e < t.length; e += 1) if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1; return 0; }()); function i(t) { let e = !1; return function () { e || (e = !0, window.Promise.resolve().then((() => { e = !1, t(); }))); }; } function o(t) { let e = !1; return function () { e || (e = !0, setTimeout((() => { e = !1, t(); }), r)); }; } const a = n && window.Promise; const s = a ? i : o; function l(t) { const e = {}; return t && e.toString.call(t) === '[object Function]'; } function c(t, e) { if (t.nodeType !== 1) return []; const n = t.ownerDocument.defaultView; const r = n.getComputedStyle(t, null); return e ? r[e] : r; } function u(t) { return t.nodeName === 'HTML' ? t : t.parentNode || t.host; } function f(t) { if (!t) return document.body; switch (t.nodeName) { case 'HTML': case 'BODY': return t.ownerDocument.body; case '#document': return t.body; } const e = c(t); const n = e.overflow; const r = e.overflowX; const i = e.overflowY; return /(auto|scroll|overlay)/.test(n + i + r) ? t : f(u(t)); } function d(t) { return t && t.referenceNode ? t.referenceNode : t; } const h = n && !(!window.MSInputMethodContext || !document.documentMode); const p = n && /MSIE 10/.test(navigator.userAgent); function v(t) { return t === 11 ? h : t === 10 ? p : h || p; } function b(t) { if (!t) return document.documentElement; const e = v(10) ? document.body : null; let n = t.offsetParent || null; while (n === e && t.nextElementSibling)n = (t = t.nextElementSibling).offsetParent; const r = n && n.nodeName; return r && r !== 'BODY' && r !== 'HTML' ? ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 && c(n, 'position') === 'static' ? b(n) : n : t ? t.ownerDocument.documentElement : document.documentElement; } function m(t) { const e = t.nodeName; return e !== 'BODY' && (e === 'HTML' || b(t.firstElementChild) === t); } function y(t) { return t.parentNode !== null ? y(t.parentNode) : t; } function g(t, e) { if (!t || !t.nodeType || !e || !e.nodeType) return document.documentElement; const n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING; const r = n ? t : e; const i = n ? e : t; const o = document.createRange(); o.setStart(r, 0), o.setEnd(i, 0); const a = o.commonAncestorContainer; if (t !== a && e !== a || r.contains(i)) return m(a) ? a : b(a); const s = y(t); return s.host ? g(s.host, e) : g(t, y(e).host); } function w(t) {
        const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top'; const n = e === 'top' ? 'scrollTop' : 'scrollLeft'; const
          r = t.nodeName; if (r === 'BODY' || r === 'HTML') { const i = t.ownerDocument.documentElement; const o = t.ownerDocument.scrollingElement || i; return o[n]; } return t[n];
      } function O(t, e) { const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; const r = w(e, 'top'); const i = w(e, 'left'); const o = n ? -1 : 1; return t.top += r * o, t.bottom += r * o, t.left += i * o, t.right += i * o, t; } function S(t, e) {
        const n = e === 'x' ? 'Left' : 'Top'; const
          r = n === 'Left' ? 'Right' : 'Bottom'; return parseFloat(t[`border${n}Width`]) + parseFloat(t[`border${r}Width`]);
      } function x(t, e, n, r) { return Math.max(e[`offset${t}`], e[`scroll${t}`], n[`client${t}`], n[`offset${t}`], n[`scroll${t}`], v(10) ? parseInt(n[`offset${t}`]) + parseInt(r[`margin${t === 'Height' ? 'Top' : 'Left'}`]) + parseInt(r[`margin${t === 'Height' ? 'Bottom' : 'Right'}`]) : 0); } function T(t) { const e = t.body; const n = t.documentElement; const r = v(10) && getComputedStyle(n); return { height: x('Height', e, n, r), width: x('Width', e, n, r) }; } const k = function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }; const P = (function () { function t(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e; }; }()); const j = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n, enumerable: !0, configurable: !0, writable: !0,
        }) : t[e] = n, t;
      }; const C = Object.assign || function (t) { for (let e = 1; e < arguments.length; e++) { const n = arguments[e]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]); } return t; }; function _(t) { return { ...t, right: t.left + t.width, bottom: t.top + t.height }; } function B(t) {
        let e = {}; try { if (v(10)) { e = t.getBoundingClientRect(); const n = w(t, 'top'); const r = w(t, 'left'); e.top += n, e.left += r, e.bottom += n, e.right += r; } else e = t.getBoundingClientRect(); } catch (d) {} const i = {
          left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top,
        }; const o = t.nodeName === 'HTML' ? T(t.ownerDocument) : {}; const a = o.width || t.clientWidth || i.width; const s = o.height || t.clientHeight || i.height; let l = t.offsetWidth - a; let u = t.offsetHeight - s; if (l || u) { const f = c(t); l -= S(f, 'x'), u -= S(f, 'y'), i.width -= l, i.height -= u; } return _(i);
      } function D(t, e) {
        const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; const r = v(10); const i = e.nodeName === 'HTML'; const o = B(t); const a = B(e); const s = f(t); const l = c(e); const u = parseFloat(l.borderTopWidth); const d = parseFloat(l.borderLeftWidth); n && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0)); let h = _({
          top: o.top - a.top - u, left: o.left - a.left - d, width: o.width, height: o.height,
        }); if (h.marginTop = 0, h.marginLeft = 0, !r && i) { const p = parseFloat(l.marginTop); const b = parseFloat(l.marginLeft); h.top -= u - p, h.bottom -= u - p, h.left -= d - b, h.right -= d - b, h.marginTop = p, h.marginLeft = b; } return (r && !n ? e.contains(s) : e === s && s.nodeName !== 'BODY') && (h = O(h, e)), h;
      } function E(t) {
        const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; const n = t.ownerDocument.documentElement; const r = D(t, n); const i = Math.max(n.clientWidth, window.innerWidth || 0); const o = Math.max(n.clientHeight, window.innerHeight || 0); const a = e ? 0 : w(n); const s = e ? 0 : w(n, 'left'); const l = {
          top: a - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: i, height: o,
        }; return _(l);
      } function $(t) { const e = t.nodeName; if (e === 'BODY' || e === 'HTML') return !1; if (c(t, 'position') === 'fixed') return !0; const n = u(t); return !!n && $(n); } function A(t) { if (!t || !t.parentElement || v()) return document.documentElement; let e = t.parentElement; while (e && c(e, 'transform') === 'none')e = e.parentElement; return e || document.documentElement; } function I(t, e, n, r) { const i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]; let o = { top: 0, left: 0 }; const a = i ? A(t) : g(t, d(e)); if (r === 'viewport')o = E(a, i); else { let s = void 0; r === 'scrollParent' ? (s = f(u(e)), s.nodeName === 'BODY' && (s = t.ownerDocument.documentElement)) : s = r === 'window' ? t.ownerDocument.documentElement : r; const l = D(s, a, i); if (s.nodeName !== 'HTML' || $(a))o = l; else { const c = T(t.ownerDocument); const h = c.height; const p = c.width; o.top += l.top - l.marginTop, o.bottom = h + l.top, o.left += l.left - l.marginLeft, o.right = p + l.left; } }n = n || 0; const v = typeof n === 'number'; return o.left += v ? n : n.left || 0, o.top += v ? n : n.top || 0, o.right -= v ? n : n.right || 0, o.bottom -= v ? n : n.bottom || 0, o; } function F(t) { const e = t.width; const n = t.height; return e * n; } function L(t, e, n, r, i) {
        const o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0; if (t.indexOf('auto') === -1) return t; const a = I(n, r, o, i); const s = {
          top: { width: a.width, height: e.top - a.top }, right: { width: a.right - e.right, height: a.height }, bottom: { width: a.width, height: a.bottom - e.bottom }, left: { width: e.left - a.left, height: a.height },
        }; const l = Object.keys(s).map(((t) => ({ key: t, ...s[t], area: F(s[t]) }))).sort(((t, e) => e.area - t.area)); const c = l.filter(((t) => { const e = t.width; const r = t.height; return e >= n.clientWidth && r >= n.clientHeight; })); const u = c.length > 0 ? c[0].key : l[0].key; const f = t.split('-')[1]; return u + (f ? `-${f}` : '');
      } function R(t, e, n) { const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; const i = r ? A(e) : g(e, d(n)); return D(n, i, r); } function M(t) { const e = t.ownerDocument.defaultView; const n = e.getComputedStyle(t); const r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0); const i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0); const o = { width: t.offsetWidth + i, height: t.offsetHeight + r }; return o; } function N(t) {
        const e = {
          left: 'right', right: 'left', bottom: 'top', top: 'bottom',
        }; return t.replace(/left|right|bottom|top/g, ((t) => e[t]));
      } function V(t, e, n) { n = n.split('-')[0]; const r = M(t); const i = { width: r.width, height: r.height }; const o = ['right', 'left'].indexOf(n) !== -1; const a = o ? 'top' : 'left'; const s = o ? 'left' : 'top'; const l = o ? 'height' : 'width'; const c = o ? 'width' : 'height'; return i[a] = e[a] + e[l] / 2 - r[l] / 2, i[s] = n === s ? e[s] - r[c] : e[N(s)], i; } function z(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0]; } function H(t, e, n) { if (Array.prototype.findIndex) return t.findIndex(((t) => t[e] === n)); const r = z(t, ((t) => t[e] === n)); return t.indexOf(r); } function G(t, e, n) { const r = void 0 === n ? t : t.slice(0, H(t, 'name', n)); return r.forEach(((t) => { t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); const n = t.function || t.fn; t.enabled && l(n) && (e.offsets.popper = _(e.offsets.popper), e.offsets.reference = _(e.offsets.reference), e = n(e, t)); })), e; } function U() {
        if (!this.state.isDestroyed) {
          let t = {
            instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {},
          }; t.offsets.reference = R(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = L(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = V(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', t = G(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
        }
      } function W(t, e) { return t.some(((t) => { const n = t.name; const r = t.enabled; return r && n === e; })); } function q(t) { for (let e = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) { const i = e[r]; const o = i ? `${i}${n}` : t; if (typeof document.body.style[o] !== 'undefined') return o; } return null; } function Y() { return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[q('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this; } function K(t) { const e = t.ownerDocument; return e ? e.defaultView : window; } function X(t, e, n, r) { const i = t.nodeName === 'BODY'; const o = i ? t.ownerDocument.defaultView : t; o.addEventListener(e, n, { passive: !0 }), i || X(f(o.parentNode), e, n, r), r.push(o); } function J(t, e, n, r) { n.updateBound = r, K(t).addEventListener('resize', n.updateBound, { passive: !0 }); const i = f(t); return X(i, 'scroll', n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n; } function Z() { this.state.eventsEnabled || (this.state = J(this.reference, this.options, this.state, this.scheduleUpdate)); } function Q(t, e) { return K(t).removeEventListener('resize', e.updateBound), e.scrollParents.forEach(((t) => { t.removeEventListener('scroll', e.updateBound); })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e; } function tt() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = Q(this.reference, this.state)); } function et(t) { return t !== '' && !isNaN(parseFloat(t)) && isFinite(t); } function nt(t, e) { Object.keys(e).forEach(((n) => { let r = ''; ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !== -1 && et(e[n]) && (r = 'px'), t.style[n] = e[n] + r; })); } function rt(t, e) { Object.keys(e).forEach(((n) => { const r = e[n]; !1 !== r ? t.setAttribute(n, e[n]) : t.removeAttribute(n); })); } function it(t) { return nt(t.instance.popper, t.styles), rt(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && nt(t.arrowElement, t.arrowStyles), t; } function ot(t, e, n, r, i) { const o = R(i, e, t, n.positionFixed); const a = L(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return e.setAttribute('x-placement', a), nt(e, { position: n.positionFixed ? 'fixed' : 'absolute' }), n; } function at(t, e) {
        const n = t.offsets; const r = n.popper; const i = n.reference; const o = Math.round; const a = Math.floor; const s = function (t) { return t; }; const l = o(i.width); const c = o(r.width); const u = ['left', 'right'].indexOf(t.placement) !== -1; const f = t.placement.indexOf('-') !== -1; const d = l % 2 === c % 2; const h = l % 2 === 1 && c % 2 === 1; const p = e ? u || f || d ? o : a : s; const v = e ? o : s; return {
          left: p(h && !f && e ? r.left - 1 : r.left), top: v(r.top), bottom: v(r.bottom), right: p(r.right),
        };
      } const st = n && /Firefox/i.test(navigator.userAgent); function lt(t, e) { const n = e.x; const r = e.y; const i = t.offsets.popper; const o = z(t.instance.modifiers, ((t) => t.name === 'applyStyle')).gpuAcceleration; void 0 !== o && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); const a = void 0 !== o ? o : e.gpuAcceleration; const s = b(t.instance.popper); const l = B(s); const c = { position: i.position }; const u = at(t, window.devicePixelRatio < 2 || !st); const f = n === 'bottom' ? 'top' : 'bottom'; const d = r === 'right' ? 'left' : 'right'; const h = q('transform'); let p = void 0; let v = void 0; if (v = f === 'bottom' ? s.nodeName === 'HTML' ? -s.clientHeight + u.bottom : -l.height + u.bottom : u.top, p = d === 'right' ? s.nodeName === 'HTML' ? -s.clientWidth + u.right : -l.width + u.right : u.left, a && h)c[h] = `translate3d(${p}px, ${v}px, 0)`, c[f] = 0, c[d] = 0, c.willChange = 'transform'; else { const m = f === 'bottom' ? -1 : 1; const y = d === 'right' ? -1 : 1; c[f] = v * m, c[d] = p * y, c.willChange = `${f}, ${d}`; } const g = { 'x-placement': t.placement }; return t.attributes = { ...g, ...t.attributes }, t.styles = { ...c, ...t.styles }, t.arrowStyles = { ...t.offsets.arrow, ...t.arrowStyles }, t; } function ct(t, e, n) { const r = z(t, ((t) => { const n = t.name; return n === e; })); const i = !!r && t.some(((t) => t.name === n && t.enabled && t.order < r.order)); if (!i) { const o = `\`${e}\``; const a = `\`${n}\``; console.warn(`${a} modifier is required by ${o} modifier in order to work, be sure to include it before ${o}!`); } return i; } function ut(t, e) { let n; if (!ct(t.instance.modifiers, 'arrow', 'keepTogether')) return t; let r = e.element; if (typeof r === 'string') { if (r = t.instance.popper.querySelector(r), !r) return t; } else if (!t.instance.popper.contains(r)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t; const i = t.placement.split('-')[0]; const o = t.offsets; const a = o.popper; const s = o.reference; const l = ['left', 'right'].indexOf(i) !== -1; const u = l ? 'height' : 'width'; const f = l ? 'Top' : 'Left'; const d = f.toLowerCase(); const h = l ? 'left' : 'top'; const p = l ? 'bottom' : 'right'; const v = M(r)[u]; s[p] - v < a[d] && (t.offsets.popper[d] -= a[d] - (s[p] - v)), s[d] + v > a[p] && (t.offsets.popper[d] += s[d] + v - a[p]), t.offsets.popper = _(t.offsets.popper); const b = s[d] + s[u] / 2 - v / 2; const m = c(t.instance.popper); const y = parseFloat(m[`margin${f}`]); const g = parseFloat(m[`border${f}Width`]); let w = b - t.offsets.popper[d] - y - g; return w = Math.max(Math.min(a[u] - v, w), 0), t.arrowElement = r, t.offsets.arrow = (n = {}, j(n, d, Math.round(w)), j(n, h, ''), n), t; } function ft(t) { return t === 'end' ? 'start' : t === 'start' ? 'end' : t; } const dt = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; const ht = dt.slice(3); function pt(t) { const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; const n = ht.indexOf(t); const r = ht.slice(n + 1).concat(ht.slice(0, n)); return e ? r.reverse() : r; } const vt = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' }; function bt(t, e) { if (W(t.instance.modifiers, 'inner')) return t; if (t.flipped && t.placement === t.originalPlacement) return t; const n = I(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed); let r = t.placement.split('-')[0]; let i = N(r); let o = t.placement.split('-')[1] || ''; let a = []; switch (e.behavior) { case vt.FLIP: a = [r, i]; break; case vt.CLOCKWISE: a = pt(r); break; case vt.COUNTERCLOCKWISE: a = pt(r, !0); break; default: a = e.behavior; } return a.forEach(((s, l) => { if (r !== s || a.length === l + 1) return t; r = t.placement.split('-')[0], i = N(r); const c = t.offsets.popper; const u = t.offsets.reference; const f = Math.floor; const d = r === 'left' && f(c.right) > f(u.left) || r === 'right' && f(c.left) < f(u.right) || r === 'top' && f(c.bottom) > f(u.top) || r === 'bottom' && f(c.top) < f(u.bottom); const h = f(c.left) < f(n.left); const p = f(c.right) > f(n.right); const v = f(c.top) < f(n.top); const b = f(c.bottom) > f(n.bottom); const m = r === 'left' && h || r === 'right' && p || r === 'top' && v || r === 'bottom' && b; const y = ['top', 'bottom'].indexOf(r) !== -1; const g = !!e.flipVariations && (y && o === 'start' && h || y && o === 'end' && p || !y && o === 'start' && v || !y && o === 'end' && b); const w = !!e.flipVariationsByContent && (y && o === 'start' && p || y && o === 'end' && h || !y && o === 'start' && b || !y && o === 'end' && v); const O = g || w; (d || m || O) && (t.flipped = !0, (d || m) && (r = a[l + 1]), O && (o = ft(o)), t.placement = r + (o ? `-${o}` : ''), t.offsets.popper = { ...t.offsets.popper, ...V(t.instance.popper, t.offsets.reference, t.placement) }, t = G(t.instance.modifiers, t, 'flip')); })), t; } function mt(t) { const e = t.offsets; const n = e.popper; const r = e.reference; const i = t.placement.split('-')[0]; const o = Math.floor; const a = ['top', 'bottom'].indexOf(i) !== -1; const s = a ? 'right' : 'bottom'; const l = a ? 'left' : 'top'; const c = a ? 'width' : 'height'; return n[s] < o(r[l]) && (t.offsets.popper[l] = o(r[l]) - n[c]), n[l] > o(r[s]) && (t.offsets.popper[l] = o(r[s])), t; } function yt(t, e, n, r) { const i = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/); const o = +i[1]; const a = i[2]; if (!o) return t; if (a.indexOf('%') === 0) { let s = void 0; switch (a) { case '%p': s = n; break; case '%': case '%r': default: s = r; } const l = _(s); return l[e] / 100 * o; } if (a === 'vh' || a === 'vw') { let c = void 0; return c = a === 'vh' ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0), c / 100 * o; } return o; } function gt(t, e, n, r) {
        const i = [0, 0]; const o = ['right', 'left'].indexOf(r) !== -1; const a = t.split(/(\+|\-)/).map(((t) => t.trim())); const s = a.indexOf(z(a, ((t) => t.search(/,|\s/) !== -1))); a[s] && a[s].indexOf(',') === -1 && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); const l = /\s*,\s*|\s+/; let c = s !== -1 ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a]; return c = c.map(((t, r) => {
          const i = (r === 1 ? !o : o) ? 'height' : 'width'; let
            a = !1; return t.reduce(((t, e) => (t[t.length - 1] === '' && ['+', '-'].indexOf(e) !== -1 ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e))), []).map(((t) => yt(t, i, e, n)));
        })), c.forEach(((t, e) => { t.forEach(((n, r) => { et(n) && (i[e] += n * (t[r - 1] === '-' ? -1 : 1)); })); })), i;
      } function wt(t, e) { const n = e.offset; const r = t.placement; const i = t.offsets; const o = i.popper; const a = i.reference; const s = r.split('-')[0]; let l = void 0; return l = et(+n) ? [+n, 0] : gt(n, o, a, s), s === 'left' ? (o.top += l[0], o.left -= l[1]) : s === 'right' ? (o.top += l[0], o.left += l[1]) : s === 'top' ? (o.left += l[0], o.top -= l[1]) : s === 'bottom' && (o.left += l[0], o.top += l[1]), t.popper = o, t; } function Ot(t, e) {
        let n = e.boundariesElement || b(t.instance.popper); t.instance.reference === n && (n = b(n)); const r = q('transform'); const i = t.instance.popper.style; const o = i.top; const a = i.left; const s = i[r]; i.top = '', i.left = '', i[r] = ''; const l = I(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed); i.top = o, i.left = a, i[r] = s, e.boundaries = l; const c = e.priority; let u = t.offsets.popper; const f = {
          primary(t) { let n = u[t]; return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), j({}, t, n); },
          secondary(t) {
            const n = t === 'right' ? 'left' : 'top'; let
              r = u[n]; return u[t] > l[t] && !e.escapeWithReference && (r = Math.min(u[n], l[t] - (t === 'right' ? u.width : u.height))), j({}, n, r);
          },
        }; return c.forEach(((t) => { const e = ['left', 'top'].indexOf(t) !== -1 ? 'primary' : 'secondary'; u = { ...u, ...f[e](t) }; })), t.offsets.popper = u, t;
      } function St(t) { const e = t.placement; const n = e.split('-')[0]; const r = e.split('-')[1]; if (r) { const i = t.offsets; const o = i.reference; const a = i.popper; const s = ['bottom', 'top'].indexOf(n) !== -1; const l = s ? 'left' : 'top'; const c = s ? 'width' : 'height'; const u = { start: j({}, l, o[l]), end: j({}, l, o[l] + o[c] - a[c]) }; t.offsets.popper = { ...a, ...u[r] }; } return t; } function xt(t) { if (!ct(t.instance.modifiers, 'hide', 'preventOverflow')) return t; const e = t.offsets.reference; const n = z(t.instance.modifiers, ((t) => t.name === 'preventOverflow')).boundaries; if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) { if (!0 === t.hide) return t; t.hide = !0, t.attributes['x-out-of-boundaries'] = ''; } else { if (!1 === t.hide) return t; t.hide = !1, t.attributes['x-out-of-boundaries'] = !1; } return t; } function Tt(t) { const e = t.placement; const n = e.split('-')[0]; const r = t.offsets; const i = r.popper; const o = r.reference; const a = ['left', 'right'].indexOf(n) !== -1; const s = ['top', 'left'].indexOf(n) === -1; return i[a ? 'left' : 'top'] = o[n] - (s ? i[a ? 'width' : 'height'] : 0), t.placement = N(e), t.offsets.popper = _(i), t; } const kt = {
        shift: { order: 100, enabled: !0, fn: St },
        offset: {
          order: 200, enabled: !0, fn: wt, offset: 0,
        },
        preventOverflow: {
          order: 300, enabled: !0, fn: Ot, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent',
        },
        keepTogether: { order: 400, enabled: !0, fn: mt },
        arrow: {
          order: 500, enabled: !0, fn: ut, element: '[x-arrow]',
        },
        flip: {
          order: 600, enabled: !0, fn: bt, behavior: 'flip', padding: 5, boundariesElement: 'viewport', flipVariations: !1, flipVariationsByContent: !1,
        },
        inner: { order: 700, enabled: !1, fn: Tt },
        hide: { order: 800, enabled: !0, fn: xt },
        computeStyle: {
          order: 850, enabled: !0, fn: lt, gpuAcceleration: !0, x: 'bottom', y: 'right',
        },
        applyStyle: {
          order: 900, enabled: !0, fn: it, onLoad: ot, gpuAcceleration: void 0,
        },
      }; const Pt = {
        placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate() {}, onUpdate() {}, modifiers: kt,
      }; const jt = (function () { function t(e, n) { const r = this; const i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; k(this, t), this.scheduleUpdate = function () { return requestAnimationFrame(r.update); }, this.update = s(this.update.bind(this)), this.options = { ...t.Defaults, ...i }, this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys({ ...t.Defaults.modifiers, ...i.modifiers }).forEach(((e) => { r.options.modifiers[e] = { ...t.Defaults.modifiers[e] || {}, ...(i.modifiers ? i.modifiers[e] : {}) }; })), this.modifiers = Object.keys(this.options.modifiers).map(((t) => ({ name: t, ...r.options.modifiers[t] }))).sort(((t, e) => t.order - e.order)), this.modifiers.forEach(((t) => { t.enabled && l(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state); })), this.update(); const o = this.options.eventsEnabled; o && this.enableEventListeners(), this.state.eventsEnabled = o; } return P(t, [{ key: 'update', value() { return U.call(this); } }, { key: 'destroy', value() { return Y.call(this); } }, { key: 'enableEventListeners', value() { return Z.call(this); } }, { key: 'disableEventListeners', value() { return tt.call(this); } }]), t; }()); jt.Utils = (typeof window !== 'undefined' ? window : t).PopperUtils, jt.placements = dt, jt.Defaults = Pt, e.a = jt;
    }).call(this, n('c8ba'));
  },
  f14a(t, e, n) { const r = n('f55b'); const i = n('c51e'); t.exports = Object.keys || function (t) { return r(t, i); }; },
  f385(t, e) { let n = 0; const r = Math.random(); t.exports = function (t) { return `Symbol(${String(void 0 === t ? '' : t)})_${(++n + r).toString(36)}`; }; },
  f55b(t, e, n) { const r = n('7f34'); const i = n('a84f'); const o = n('c272').indexOf; const a = n('1fc1'); t.exports = function (t, e) { let n; const s = i(t); let l = 0; const c = []; for (n in s)!r(a, n) && r(s, n) && c.push(n); while (e.length > l)r(s, n = e[l++]) && (~o(c, n) || c.push(n)); return c; }; },
  f5df(t, e, n) { const r = n('00ee'); const i = n('c6b6'); const o = n('b622'); const a = o('toStringTag'); const s = i(function () { return arguments; }()) == 'Arguments'; const l = function (t, e) { try { return t[e]; } catch (n) {} }; t.exports = r ? i : function (t) { let e; let n; let r; return void 0 === t ? 'Undefined' : t === null ? 'Null' : typeof (n = l(e = Object(t), a)) === 'string' ? n : s ? i(e) : (r = i(e)) == 'Object' && typeof e.callee === 'function' ? 'Arguments' : r; }; },
  f772(t, e, n) { const r = n('5692'); const i = n('90e3'); const o = r('keys'); t.exports = function (t) { return o[t] || (o[t] = i(t)); }; },
  fb8a(t, e, n) { const r = n('59c2'); const i = Math.max; const o = Math.min; t.exports = function (t, e) { const n = r(t); return n < 0 ? i(n + e, 0) : o(n, e); }; },
  fc6a(t, e, n) { const r = n('44ad'); const i = n('1d80'); t.exports = function (t) { return r(i(t)); }; },
  fce5(t, e, n) { let r; let i; const o = n('09e4'); const a = n('5f2f'); const s = o.process; const l = s && s.versions; const c = l && l.v8; c ? (r = c.split('.'), i = r[0] + r[1]) : a && (r = a.match(/Edge\/(\d+)/), (!r || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/), r && (i = r[1]))), t.exports = i && +i; },
  fdbc(t, e) {
    t.exports = {
      CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0,
    };
  },
  fdbe(t, e, n) { const r = n('f55b'); const i = n('c51e'); const o = i.concat('length', 'prototype'); e.f = Object.getOwnPropertyNames || function (t) { return r(t, o); }; },
  fdbf(t, e, n) { const r = n('4930'); t.exports = r && !Symbol.sham && typeof Symbol.iterator === 'symbol'; },
  fe68(t, e, n) { const r = n('bb6e'); t.exports = function (t, e) { if (!r(t)) return t; let n; let i; if (e && typeof (n = t.toString) === 'function' && !r(i = n.call(t))) return i; if (typeof (n = t.valueOf) === 'function' && !r(i = n.call(t))) return i; if (!e && typeof (n = t.toString) === 'function' && !r(i = n.call(t))) return i; throw TypeError("Can't convert object to primitive value"); }; },
  fea9(t, e, n) { const r = n('da84'); t.exports = r.Promise; },
}]);
// # sourceMappingURL=chunk-vendors.ac040ef0.js.map
