function P3(t, e) {
	for (var n = 0; n < e.length; n++) {
		const r = e[n]
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const i in r)
				if (i !== 'default' && !(i in t)) {
					const o = Object.getOwnPropertyDescriptor(r, i)
					o &&
						Object.defineProperty(
							t,
							i,
							o.get ? o : { enumerable: !0, get: () => r[i] }
						)
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' })
	)
}
;(function () {
	const e = document.createElement('link').relList
	if (e && e.supports && e.supports('modulepreload')) return
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === 'childList')
				for (const l of o.addedNodes)
					l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(i) {
		const o = {}
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
			i.crossorigin === 'use-credentials'
				? (o.credentials = 'include')
				: i.crossorigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		)
	}
	function r(i) {
		if (i.ep) return
		i.ep = !0
		const o = n(i)
		fetch(i.href, o)
	}
})()
function T3(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
		? t.default
		: t
}
var Xc = {},
	ph = { exports: {} },
	vn = {},
	$ = { exports: {} },
	ce = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ks = Symbol.for('react.element'),
	R3 = Symbol.for('react.portal'),
	O3 = Symbol.for('react.fragment'),
	M3 = Symbol.for('react.strict_mode'),
	N3 = Symbol.for('react.profiler'),
	L3 = Symbol.for('react.provider'),
	D3 = Symbol.for('react.context'),
	A3 = Symbol.for('react.forward_ref'),
	I3 = Symbol.for('react.suspense'),
	j3 = Symbol.for('react.memo'),
	F3 = Symbol.for('react.lazy'),
	ed = Symbol.iterator
function $3(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (ed && t[ed]) || t['@@iterator']),
		  typeof t == 'function' ? t : null)
}
var hh = {
		isMounted: function () {
			return !1
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	gh = Object.assign,
	mh = {}
function el(t, e, n) {
	;(this.props = t),
		(this.context = e),
		(this.refs = mh),
		(this.updater = n || hh)
}
el.prototype.isReactComponent = {}
el.prototype.setState = function (t, e) {
	if (typeof t != 'object' && typeof t != 'function' && t != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		)
	this.updater.enqueueSetState(this, t, e, 'setState')
}
el.prototype.forceUpdate = function (t) {
	this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
}
function vh() {}
vh.prototype = el.prototype
function S1(t, e, n) {
	;(this.props = t),
		(this.context = e),
		(this.refs = mh),
		(this.updater = n || hh)
}
var k1 = (S1.prototype = new vh())
k1.constructor = S1
gh(k1, el.prototype)
k1.isPureReactComponent = !0
var td = Array.isArray,
	yh = Object.prototype.hasOwnProperty,
	C1 = { current: null },
	_h = { key: !0, ref: !0, __self: !0, __source: !0 }
function wh(t, e, n) {
	var r,
		i = {},
		o = null,
		l = null
	if (e != null)
		for (r in (e.ref !== void 0 && (l = e.ref),
		e.key !== void 0 && (o = '' + e.key),
		e))
			yh.call(e, r) && !_h.hasOwnProperty(r) && (i[r] = e[r])
	var s = arguments.length - 2
	if (s === 1) i.children = n
	else if (1 < s) {
		for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2]
		i.children = a
	}
	if (t && t.defaultProps)
		for (r in ((s = t.defaultProps), s)) i[r] === void 0 && (i[r] = s[r])
	return { $$typeof: ks, type: t, key: o, ref: l, props: i, _owner: C1.current }
}
function b3(t, e) {
	return {
		$$typeof: ks,
		type: t.type,
		key: e,
		ref: t.ref,
		props: t.props,
		_owner: t._owner,
	}
}
function E1(t) {
	return typeof t == 'object' && t !== null && t.$$typeof === ks
}
function B3(t) {
	var e = { '=': '=0', ':': '=2' }
	return (
		'$' +
		t.replace(/[=:]/g, function (n) {
			return e[n]
		})
	)
}
var nd = /\/+/g
function nc(t, e) {
	return typeof t == 'object' && t !== null && t.key != null
		? B3('' + t.key)
		: e.toString(36)
}
function fa(t, e, n, r, i) {
	var o = typeof t
	;(o === 'undefined' || o === 'boolean') && (t = null)
	var l = !1
	if (t === null) l = !0
	else
		switch (o) {
			case 'string':
			case 'number':
				l = !0
				break
			case 'object':
				switch (t.$$typeof) {
					case ks:
					case R3:
						l = !0
				}
		}
	if (l)
		return (
			(l = t),
			(i = i(l)),
			(t = r === '' ? '.' + nc(l, 0) : r),
			td(i)
				? ((n = ''),
				  t != null && (n = t.replace(nd, '$&/') + '/'),
				  fa(i, e, n, '', function (u) {
						return u
				  }))
				: i != null &&
				  (E1(i) &&
						(i = b3(
							i,
							n +
								(!i.key || (l && l.key === i.key)
									? ''
									: ('' + i.key).replace(nd, '$&/') + '/') +
								t
						)),
				  e.push(i)),
			1
		)
	if (((l = 0), (r = r === '' ? '.' : r + ':'), td(t)))
		for (var s = 0; s < t.length; s++) {
			o = t[s]
			var a = r + nc(o, s)
			l += fa(o, e, n, a, i)
		}
	else if (((a = $3(t)), typeof a == 'function'))
		for (t = a.call(t), s = 0; !(o = t.next()).done; )
			(o = o.value), (a = r + nc(o, s++)), (l += fa(o, e, n, a, i))
	else if (o === 'object')
		throw (
			((e = String(t)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(e === '[object Object]'
						? 'object with keys {' + Object.keys(t).join(', ') + '}'
						: e) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		)
	return l
}
function Ds(t, e, n) {
	if (t == null) return t
	var r = [],
		i = 0
	return (
		fa(t, r, '', '', function (o) {
			return e.call(n, o, i++)
		}),
		r
	)
}
function U3(t) {
	if (t._status === -1) {
		var e = t._result
		;(e = e()),
			e.then(
				function (n) {
					;(t._status === 0 || t._status === -1) &&
						((t._status = 1), (t._result = n))
				},
				function (n) {
					;(t._status === 0 || t._status === -1) &&
						((t._status = 2), (t._result = n))
				}
			),
			t._status === -1 && ((t._status = 0), (t._result = e))
	}
	if (t._status === 1) return t._result.default
	throw t._result
}
var Ut = { current: null },
	da = { transition: null },
	V3 = {
		ReactCurrentDispatcher: Ut,
		ReactCurrentBatchConfig: da,
		ReactCurrentOwner: C1,
	}
ce.Children = {
	map: Ds,
	forEach: function (t, e, n) {
		Ds(
			t,
			function () {
				e.apply(this, arguments)
			},
			n
		)
	},
	count: function (t) {
		var e = 0
		return (
			Ds(t, function () {
				e++
			}),
			e
		)
	},
	toArray: function (t) {
		return (
			Ds(t, function (e) {
				return e
			}) || []
		)
	},
	only: function (t) {
		if (!E1(t))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			)
		return t
	},
}
ce.Component = el
ce.Fragment = O3
ce.Profiler = N3
ce.PureComponent = S1
ce.StrictMode = M3
ce.Suspense = I3
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V3
ce.cloneElement = function (t, e, n) {
	if (t == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				t +
				'.'
		)
	var r = gh({}, t.props),
		i = t.key,
		o = t.ref,
		l = t._owner
	if (e != null) {
		if (
			(e.ref !== void 0 && ((o = e.ref), (l = C1.current)),
			e.key !== void 0 && (i = '' + e.key),
			t.type && t.type.defaultProps)
		)
			var s = t.type.defaultProps
		for (a in e)
			yh.call(e, a) &&
				!_h.hasOwnProperty(a) &&
				(r[a] = e[a] === void 0 && s !== void 0 ? s[a] : e[a])
	}
	var a = arguments.length - 2
	if (a === 1) r.children = n
	else if (1 < a) {
		s = Array(a)
		for (var u = 0; u < a; u++) s[u] = arguments[u + 2]
		r.children = s
	}
	return { $$typeof: ks, type: t.type, key: i, ref: o, props: r, _owner: l }
}
ce.createContext = function (t) {
	return (
		(t = {
			$$typeof: D3,
			_currentValue: t,
			_currentValue2: t,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(t.Provider = { $$typeof: L3, _context: t }),
		(t.Consumer = t)
	)
}
ce.createElement = wh
ce.createFactory = function (t) {
	var e = wh.bind(null, t)
	return (e.type = t), e
}
ce.createRef = function () {
	return { current: null }
}
ce.forwardRef = function (t) {
	return { $$typeof: A3, render: t }
}
ce.isValidElement = E1
ce.lazy = function (t) {
	return { $$typeof: F3, _payload: { _status: -1, _result: t }, _init: U3 }
}
ce.memo = function (t, e) {
	return { $$typeof: j3, type: t, compare: e === void 0 ? null : e }
}
ce.startTransition = function (t) {
	var e = da.transition
	da.transition = {}
	try {
		t()
	} finally {
		da.transition = e
	}
}
ce.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.')
}
ce.useCallback = function (t, e) {
	return Ut.current.useCallback(t, e)
}
ce.useContext = function (t) {
	return Ut.current.useContext(t)
}
ce.useDebugValue = function () {}
ce.useDeferredValue = function (t) {
	return Ut.current.useDeferredValue(t)
}
ce.useEffect = function (t, e) {
	return Ut.current.useEffect(t, e)
}
ce.useId = function () {
	return Ut.current.useId()
}
ce.useImperativeHandle = function (t, e, n) {
	return Ut.current.useImperativeHandle(t, e, n)
}
ce.useInsertionEffect = function (t, e) {
	return Ut.current.useInsertionEffect(t, e)
}
ce.useLayoutEffect = function (t, e) {
	return Ut.current.useLayoutEffect(t, e)
}
ce.useMemo = function (t, e) {
	return Ut.current.useMemo(t, e)
}
ce.useReducer = function (t, e, n) {
	return Ut.current.useReducer(t, e, n)
}
ce.useRef = function (t) {
	return Ut.current.useRef(t)
}
ce.useState = function (t) {
	return Ut.current.useState(t)
}
ce.useSyncExternalStore = function (t, e, n) {
	return Ut.current.useSyncExternalStore(t, e, n)
}
ce.useTransition = function () {
	return Ut.current.useTransition()
}
ce.version = '18.2.0'
;(function (t) {
	t.exports = ce
})($)
const kr = T3($.exports),
	Gc = P3({ __proto__: null, default: kr }, [$.exports])
var xh = { exports: {} },
	Sh = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (t) {
	function e(O, B) {
		var x = O.length
		O.push(B)
		e: for (; 0 < x; ) {
			var te = (x - 1) >>> 1,
				D = O[te]
			if (0 < i(D, B)) (O[te] = B), (O[x] = D), (x = te)
			else break e
		}
	}
	function n(O) {
		return O.length === 0 ? null : O[0]
	}
	function r(O) {
		if (O.length === 0) return null
		var B = O[0],
			x = O.pop()
		if (x !== B) {
			O[0] = x
			e: for (var te = 0, D = O.length, j = D >>> 1; te < j; ) {
				var I = 2 * (te + 1) - 1,
					H = O[I],
					E = I + 1,
					Z = O[E]
				if (0 > i(H, x))
					E < D && 0 > i(Z, H)
						? ((O[te] = Z), (O[E] = x), (te = E))
						: ((O[te] = H), (O[I] = x), (te = I))
				else if (E < D && 0 > i(Z, x)) (O[te] = Z), (O[E] = x), (te = E)
				else break e
			}
		}
		return B
	}
	function i(O, B) {
		var x = O.sortIndex - B.sortIndex
		return x !== 0 ? x : O.id - B.id
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var o = performance
		t.unstable_now = function () {
			return o.now()
		}
	} else {
		var l = Date,
			s = l.now()
		t.unstable_now = function () {
			return l.now() - s
		}
	}
	var a = [],
		u = [],
		c = 1,
		d = null,
		f = 3,
		p = !1,
		v = !1,
		g = !1,
		w = typeof setTimeout == 'function' ? setTimeout : null,
		m = typeof clearTimeout == 'function' ? clearTimeout : null,
		h = typeof setImmediate < 'u' ? setImmediate : null
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function y(O) {
		for (var B = n(u); B !== null; ) {
			if (B.callback === null) r(u)
			else if (B.startTime <= O) r(u), (B.sortIndex = B.expirationTime), e(a, B)
			else break
			B = n(u)
		}
	}
	function _(O) {
		if (((g = !1), y(O), !v))
			if (n(a) !== null) (v = !0), q(S)
			else {
				var B = n(u)
				B !== null && K(_, B.startTime - O)
			}
	}
	function S(O, B) {
		;(v = !1), g && ((g = !1), m(P), (P = -1)), (p = !0)
		var x = f
		try {
			for (
				y(B), d = n(a);
				d !== null && (!(d.expirationTime > B) || (O && !F()));

			) {
				var te = d.callback
				if (typeof te == 'function') {
					;(d.callback = null), (f = d.priorityLevel)
					var D = te(d.expirationTime <= B)
					;(B = t.unstable_now()),
						typeof D == 'function' ? (d.callback = D) : d === n(a) && r(a),
						y(B)
				} else r(a)
				d = n(a)
			}
			if (d !== null) var j = !0
			else {
				var I = n(u)
				I !== null && K(_, I.startTime - B), (j = !1)
			}
			return j
		} finally {
			;(d = null), (f = x), (p = !1)
		}
	}
	var z = !1,
		C = null,
		P = -1,
		R = 5,
		M = -1
	function F() {
		return !(t.unstable_now() - M < R)
	}
	function b() {
		if (C !== null) {
			var O = t.unstable_now()
			M = O
			var B = !0
			try {
				B = C(!0, O)
			} finally {
				B ? ee() : ((z = !1), (C = null))
			}
		} else z = !1
	}
	var ee
	if (typeof h == 'function')
		ee = function () {
			h(b)
		}
	else if (typeof MessageChannel < 'u') {
		var Q = new MessageChannel(),
			Y = Q.port2
		;(Q.port1.onmessage = b),
			(ee = function () {
				Y.postMessage(null)
			})
	} else
		ee = function () {
			w(b, 0)
		}
	function q(O) {
		;(C = O), z || ((z = !0), ee())
	}
	function K(O, B) {
		P = w(function () {
			O(t.unstable_now())
		}, B)
	}
	;(t.unstable_IdlePriority = 5),
		(t.unstable_ImmediatePriority = 1),
		(t.unstable_LowPriority = 4),
		(t.unstable_NormalPriority = 3),
		(t.unstable_Profiling = null),
		(t.unstable_UserBlockingPriority = 2),
		(t.unstable_cancelCallback = function (O) {
			O.callback = null
		}),
		(t.unstable_continueExecution = function () {
			v || p || ((v = !0), q(S))
		}),
		(t.unstable_forceFrameRate = function (O) {
			0 > O || 125 < O
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (R = 0 < O ? Math.floor(1e3 / O) : 5)
		}),
		(t.unstable_getCurrentPriorityLevel = function () {
			return f
		}),
		(t.unstable_getFirstCallbackNode = function () {
			return n(a)
		}),
		(t.unstable_next = function (O) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var B = 3
					break
				default:
					B = f
			}
			var x = f
			f = B
			try {
				return O()
			} finally {
				f = x
			}
		}),
		(t.unstable_pauseExecution = function () {}),
		(t.unstable_requestPaint = function () {}),
		(t.unstable_runWithPriority = function (O, B) {
			switch (O) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					O = 3
			}
			var x = f
			f = O
			try {
				return B()
			} finally {
				f = x
			}
		}),
		(t.unstable_scheduleCallback = function (O, B, x) {
			var te = t.unstable_now()
			switch (
				(typeof x == 'object' && x !== null
					? ((x = x.delay), (x = typeof x == 'number' && 0 < x ? te + x : te))
					: (x = te),
				O)
			) {
				case 1:
					var D = -1
					break
				case 2:
					D = 250
					break
				case 5:
					D = 1073741823
					break
				case 4:
					D = 1e4
					break
				default:
					D = 5e3
			}
			return (
				(D = x + D),
				(O = {
					id: c++,
					callback: B,
					priorityLevel: O,
					startTime: x,
					expirationTime: D,
					sortIndex: -1,
				}),
				x > te
					? ((O.sortIndex = x),
					  e(u, O),
					  n(a) === null &&
							O === n(u) &&
							(g ? (m(P), (P = -1)) : (g = !0), K(_, x - te)))
					: ((O.sortIndex = D), e(a, O), v || p || ((v = !0), q(S))),
				O
			)
		}),
		(t.unstable_shouldYield = F),
		(t.unstable_wrapCallback = function (O) {
			var B = f
			return function () {
				var x = f
				f = B
				try {
					return O.apply(this, arguments)
				} finally {
					f = x
				}
			}
		})
})(Sh)
;(function (t) {
	t.exports = Sh
})(xh)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kh = $.exports,
	hn = xh.exports
function L(t) {
	for (
		var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
		n < arguments.length;
		n++
	)
		e += '&args[]=' + encodeURIComponent(arguments[n])
	return (
		'Minified React error #' +
		t +
		'; visit ' +
		e +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	)
}
var Ch = new Set(),
	Kl = {}
function Ki(t, e) {
	Fo(t, e), Fo(t + 'Capture', e)
}
function Fo(t, e) {
	for (Kl[t] = e, t = 0; t < e.length; t++) Ch.add(e[t])
}
var Cr = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Qc = Object.prototype.hasOwnProperty,
	H3 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	rd = {},
	id = {}
function W3(t) {
	return Qc.call(id, t)
		? !0
		: Qc.call(rd, t)
		? !1
		: H3.test(t)
		? (id[t] = !0)
		: ((rd[t] = !0), !1)
}
function q3(t, e, n, r) {
	if (n !== null && n.type === 0) return !1
	switch (typeof e) {
		case 'function':
		case 'symbol':
			return !0
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-')
		default:
			return !1
	}
}
function Y3(t, e, n, r) {
	if (e === null || typeof e > 'u' || q3(t, e, n, r)) return !0
	if (r) return !1
	if (n !== null)
		switch (n.type) {
			case 3:
				return !e
			case 4:
				return e === !1
			case 5:
				return isNaN(e)
			case 6:
				return isNaN(e) || 1 > e
		}
	return !1
}
function Vt(t, e, n, r, i, o, l) {
	;(this.acceptsBooleans = e === 2 || e === 3 || e === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = t),
		(this.type = e),
		(this.sanitizeURL = o),
		(this.removeEmptyString = l)
}
var Et = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (t) {
		Et[t] = new Vt(t, 0, !1, t, null, !1, !1)
	})
;[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (t) {
	var e = t[0]
	Et[e] = new Vt(e, 1, !1, t[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
	Et[t] = new Vt(t, 2, !1, t.toLowerCase(), null, !1, !1)
})
;[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (t) {
	Et[t] = new Vt(t, 2, !1, t, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (t) {
		Et[t] = new Vt(t, 3, !1, t.toLowerCase(), null, !1, !1)
	})
;['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
	Et[t] = new Vt(t, 3, !0, t, null, !1, !1)
})
;['capture', 'download'].forEach(function (t) {
	Et[t] = new Vt(t, 4, !1, t, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (t) {
	Et[t] = new Vt(t, 6, !1, t, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (t) {
	Et[t] = new Vt(t, 5, !1, t.toLowerCase(), null, !1, !1)
})
var z1 = /[\-:]([a-z])/g
function P1(t) {
	return t[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(z1, P1)
		Et[e] = new Vt(e, 1, !1, t, null, !1, !1)
	})
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(z1, P1)
		Et[e] = new Vt(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1)
	})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
	var e = t.replace(z1, P1)
	Et[e] = new Vt(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (t) {
	Et[t] = new Vt(t, 1, !1, t.toLowerCase(), null, !1, !1)
})
Et.xlinkHref = new Vt(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
)
;['src', 'href', 'action', 'formAction'].forEach(function (t) {
	Et[t] = new Vt(t, 1, !1, t.toLowerCase(), null, !0, !0)
})
function T1(t, e, n, r) {
	var i = Et.hasOwnProperty(e) ? Et[e] : null
	;(i !== null
		? i.type !== 0
		: r ||
		  !(2 < e.length) ||
		  (e[0] !== 'o' && e[0] !== 'O') ||
		  (e[1] !== 'n' && e[1] !== 'N')) &&
		(Y3(e, n, i, r) && (n = null),
		r || i === null
			? W3(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
			: i.mustUseProperty
			? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
			: ((e = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? t.removeAttribute(e)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
					  r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var Or = kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	As = Symbol.for('react.element'),
	uo = Symbol.for('react.portal'),
	co = Symbol.for('react.fragment'),
	R1 = Symbol.for('react.strict_mode'),
	Kc = Symbol.for('react.profiler'),
	Eh = Symbol.for('react.provider'),
	zh = Symbol.for('react.context'),
	O1 = Symbol.for('react.forward_ref'),
	Zc = Symbol.for('react.suspense'),
	Jc = Symbol.for('react.suspense_list'),
	M1 = Symbol.for('react.memo'),
	Ar = Symbol.for('react.lazy'),
	Ph = Symbol.for('react.offscreen'),
	od = Symbol.iterator
function cl(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (od && t[od]) || t['@@iterator']),
		  typeof t == 'function' ? t : null)
}
var Ve = Object.assign,
	rc
function xl(t) {
	if (rc === void 0)
		try {
			throw Error()
		} catch (n) {
			var e = n.stack.trim().match(/\n( *(at )?)/)
			rc = (e && e[1]) || ''
		}
	return (
		`
` +
		rc +
		t
	)
}
var ic = !1
function oc(t, e) {
	if (!t || ic) return ''
	ic = !0
	var n = Error.prepareStackTrace
	Error.prepareStackTrace = void 0
	try {
		if (e)
			if (
				((e = function () {
					throw Error()
				}),
				Object.defineProperty(e.prototype, 'props', {
					set: function () {
						throw Error()
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(e, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(t, [], e)
			} else {
				try {
					e.call()
				} catch (u) {
					r = u
				}
				t.call(e.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			t()
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					l = i.length - 1,
					s = o.length - 1;
				1 <= l && 0 <= s && i[l] !== o[s];

			)
				s--
			for (; 1 <= l && 0 <= s; l--, s--)
				if (i[l] !== o[s]) {
					if (l !== 1 || s !== 1)
						do
							if ((l--, s--, 0 > s || i[l] !== o[s])) {
								var a =
									`
` + i[l].replace(' at new ', ' at ')
								return (
									t.displayName &&
										a.includes('<anonymous>') &&
										(a = a.replace('<anonymous>', t.displayName)),
									a
								)
							}
						while (1 <= l && 0 <= s)
					break
				}
		}
	} finally {
		;(ic = !1), (Error.prepareStackTrace = n)
	}
	return (t = t ? t.displayName || t.name : '') ? xl(t) : ''
}
function X3(t) {
	switch (t.tag) {
		case 5:
			return xl(t.type)
		case 16:
			return xl('Lazy')
		case 13:
			return xl('Suspense')
		case 19:
			return xl('SuspenseList')
		case 0:
		case 2:
		case 15:
			return (t = oc(t.type, !1)), t
		case 11:
			return (t = oc(t.type.render, !1)), t
		case 1:
			return (t = oc(t.type, !0)), t
		default:
			return ''
	}
}
function ef(t) {
	if (t == null) return null
	if (typeof t == 'function') return t.displayName || t.name || null
	if (typeof t == 'string') return t
	switch (t) {
		case co:
			return 'Fragment'
		case uo:
			return 'Portal'
		case Kc:
			return 'Profiler'
		case R1:
			return 'StrictMode'
		case Zc:
			return 'Suspense'
		case Jc:
			return 'SuspenseList'
	}
	if (typeof t == 'object')
		switch (t.$$typeof) {
			case zh:
				return (t.displayName || 'Context') + '.Consumer'
			case Eh:
				return (t._context.displayName || 'Context') + '.Provider'
			case O1:
				var e = t.render
				return (
					(t = t.displayName),
					t ||
						((t = e.displayName || e.name || ''),
						(t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
					t
				)
			case M1:
				return (
					(e = t.displayName || null), e !== null ? e : ef(t.type) || 'Memo'
				)
			case Ar:
				;(e = t._payload), (t = t._init)
				try {
					return ef(t(e))
				} catch {}
		}
	return null
}
function G3(t) {
	var e = t.type
	switch (t.tag) {
		case 24:
			return 'Cache'
		case 9:
			return (e.displayName || 'Context') + '.Consumer'
		case 10:
			return (e._context.displayName || 'Context') + '.Provider'
		case 18:
			return 'DehydratedFragment'
		case 11:
			return (
				(t = e.render),
				(t = t.displayName || t.name || ''),
				e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
			)
		case 7:
			return 'Fragment'
		case 5:
			return e
		case 4:
			return 'Portal'
		case 3:
			return 'Root'
		case 6:
			return 'Text'
		case 16:
			return ef(e)
		case 8:
			return e === R1 ? 'StrictMode' : 'Mode'
		case 22:
			return 'Offscreen'
		case 12:
			return 'Profiler'
		case 21:
			return 'Scope'
		case 13:
			return 'Suspense'
		case 19:
			return 'SuspenseList'
		case 25:
			return 'TracingMarker'
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof e == 'function') return e.displayName || e.name || null
			if (typeof e == 'string') return e
	}
	return null
}
function ai(t) {
	switch (typeof t) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return t
		case 'object':
			return t
		default:
			return ''
	}
}
function Th(t) {
	var e = t.type
	return (
		(t = t.nodeName) &&
		t.toLowerCase() === 'input' &&
		(e === 'checkbox' || e === 'radio')
	)
}
function Q3(t) {
	var e = Th(t) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
		r = '' + t[e]
	if (
		!t.hasOwnProperty(e) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var i = n.get,
			o = n.set
		return (
			Object.defineProperty(t, e, {
				configurable: !0,
				get: function () {
					return i.call(this)
				},
				set: function (l) {
					;(r = '' + l), o.call(this, l)
				},
			}),
			Object.defineProperty(t, e, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r
				},
				setValue: function (l) {
					r = '' + l
				},
				stopTracking: function () {
					;(t._valueTracker = null), delete t[e]
				},
			}
		)
	}
}
function Is(t) {
	t._valueTracker || (t._valueTracker = Q3(t))
}
function Rh(t) {
	if (!t) return !1
	var e = t._valueTracker
	if (!e) return !0
	var n = e.getValue(),
		r = ''
	return (
		t && (r = Th(t) ? (t.checked ? 'true' : 'false') : t.value),
		(t = r),
		t !== n ? (e.setValue(t), !0) : !1
	)
}
function Aa(t) {
	if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
		return null
	try {
		return t.activeElement || t.body
	} catch {
		return t.body
	}
}
function tf(t, e) {
	var n = e.checked
	return Ve({}, e, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n != null ? n : t._wrapperState.initialChecked,
	})
}
function ld(t, e) {
	var n = e.defaultValue == null ? '' : e.defaultValue,
		r = e.checked != null ? e.checked : e.defaultChecked
	;(n = ai(e.value != null ? e.value : n)),
		(t._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				e.type === 'checkbox' || e.type === 'radio'
					? e.checked != null
					: e.value != null,
		})
}
function Oh(t, e) {
	;(e = e.checked), e != null && T1(t, 'checked', e, !1)
}
function nf(t, e) {
	Oh(t, e)
	var n = ai(e.value),
		r = e.type
	if (n != null)
		r === 'number'
			? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
			: t.value !== '' + n && (t.value = '' + n)
	else if (r === 'submit' || r === 'reset') {
		t.removeAttribute('value')
		return
	}
	e.hasOwnProperty('value')
		? rf(t, e.type, n)
		: e.hasOwnProperty('defaultValue') && rf(t, e.type, ai(e.defaultValue)),
		e.checked == null &&
			e.defaultChecked != null &&
			(t.defaultChecked = !!e.defaultChecked)
}
function sd(t, e, n) {
	if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
		var r = e.type
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(e.value !== void 0 && e.value !== null)
			)
		)
			return
		;(e = '' + t._wrapperState.initialValue),
			n || e === t.value || (t.value = e),
			(t.defaultValue = e)
	}
	;(n = t.name),
		n !== '' && (t.name = ''),
		(t.defaultChecked = !!t._wrapperState.initialChecked),
		n !== '' && (t.name = n)
}
function rf(t, e, n) {
	;(e !== 'number' || Aa(t.ownerDocument) !== t) &&
		(n == null
			? (t.defaultValue = '' + t._wrapperState.initialValue)
			: t.defaultValue !== '' + n && (t.defaultValue = '' + n))
}
var Sl = Array.isArray
function Po(t, e, n, r) {
	if (((t = t.options), e)) {
		e = {}
		for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0
		for (n = 0; n < t.length; n++)
			(i = e.hasOwnProperty('$' + t[n].value)),
				t[n].selected !== i && (t[n].selected = i),
				i && r && (t[n].defaultSelected = !0)
	} else {
		for (n = '' + ai(n), e = null, i = 0; i < t.length; i++) {
			if (t[i].value === n) {
				;(t[i].selected = !0), r && (t[i].defaultSelected = !0)
				return
			}
			e !== null || t[i].disabled || (e = t[i])
		}
		e !== null && (e.selected = !0)
	}
}
function of(t, e) {
	if (e.dangerouslySetInnerHTML != null) throw Error(L(91))
	return Ve({}, e, {
		value: void 0,
		defaultValue: void 0,
		children: '' + t._wrapperState.initialValue,
	})
}
function ad(t, e) {
	var n = e.value
	if (n == null) {
		if (((n = e.children), (e = e.defaultValue), n != null)) {
			if (e != null) throw Error(L(92))
			if (Sl(n)) {
				if (1 < n.length) throw Error(L(93))
				n = n[0]
			}
			e = n
		}
		e == null && (e = ''), (n = e)
	}
	t._wrapperState = { initialValue: ai(n) }
}
function Mh(t, e) {
	var n = ai(e.value),
		r = ai(e.defaultValue)
	n != null &&
		((n = '' + n),
		n !== t.value && (t.value = n),
		e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
		r != null && (t.defaultValue = '' + r)
}
function ud(t) {
	var e = t.textContent
	e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e)
}
function Nh(t) {
	switch (t) {
		case 'svg':
			return 'http://www.w3.org/2000/svg'
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML'
		default:
			return 'http://www.w3.org/1999/xhtml'
	}
}
function lf(t, e) {
	return t == null || t === 'http://www.w3.org/1999/xhtml'
		? Nh(e)
		: t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: t
}
var js,
	Lh = (function (t) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (e, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return t(e, n, r, i)
					})
			  }
			: t
	})(function (t, e) {
		if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
			t.innerHTML = e
		else {
			for (
				js = js || document.createElement('div'),
					js.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
					e = js.firstChild;
				t.firstChild;

			)
				t.removeChild(t.firstChild)
			for (; e.firstChild; ) t.appendChild(e.firstChild)
		}
	})
function Zl(t, e) {
	if (e) {
		var n = t.firstChild
		if (n && n === t.lastChild && n.nodeType === 3) {
			n.nodeValue = e
			return
		}
	}
	t.textContent = e
}
var Ol = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	K3 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Ol).forEach(function (t) {
	K3.forEach(function (e) {
		;(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ol[e] = Ol[t])
	})
})
function Dh(t, e, n) {
	return e == null || typeof e == 'boolean' || e === ''
		? ''
		: n || typeof e != 'number' || e === 0 || (Ol.hasOwnProperty(t) && Ol[t])
		? ('' + e).trim()
		: e + 'px'
}
function Ah(t, e) {
	t = t.style
	for (var n in e)
		if (e.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = Dh(n, e[n], r)
			n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i)
		}
}
var Z3 = Ve(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
)
function sf(t, e) {
	if (e) {
		if (Z3[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
			throw Error(L(137, t))
		if (e.dangerouslySetInnerHTML != null) {
			if (e.children != null) throw Error(L(60))
			if (
				typeof e.dangerouslySetInnerHTML != 'object' ||
				!('__html' in e.dangerouslySetInnerHTML)
			)
				throw Error(L(61))
		}
		if (e.style != null && typeof e.style != 'object') throw Error(L(62))
	}
}
function af(t, e) {
	if (t.indexOf('-') === -1) return typeof e.is == 'string'
	switch (t) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1
		default:
			return !0
	}
}
var uf = null
function N1(t) {
	return (
		(t = t.target || t.srcElement || window),
		t.correspondingUseElement && (t = t.correspondingUseElement),
		t.nodeType === 3 ? t.parentNode : t
	)
}
var cf = null,
	To = null,
	Ro = null
function cd(t) {
	if ((t = zs(t))) {
		if (typeof cf != 'function') throw Error(L(280))
		var e = t.stateNode
		e && ((e = Eu(e)), cf(t.stateNode, t.type, e))
	}
}
function Ih(t) {
	To ? (Ro ? Ro.push(t) : (Ro = [t])) : (To = t)
}
function jh() {
	if (To) {
		var t = To,
			e = Ro
		if (((Ro = To = null), cd(t), e)) for (t = 0; t < e.length; t++) cd(e[t])
	}
}
function Fh(t, e) {
	return t(e)
}
function $h() {}
var lc = !1
function bh(t, e, n) {
	if (lc) return t(e, n)
	lc = !0
	try {
		return Fh(t, e, n)
	} finally {
		;(lc = !1), (To !== null || Ro !== null) && ($h(), jh())
	}
}
function Jl(t, e) {
	var n = t.stateNode
	if (n === null) return null
	var r = Eu(n)
	if (r === null) return null
	n = r[e]
	e: switch (e) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			;(r = !r.disabled) ||
				((t = t.type),
				(r = !(
					t === 'button' ||
					t === 'input' ||
					t === 'select' ||
					t === 'textarea'
				))),
				(t = !r)
			break e
		default:
			t = !1
	}
	if (t) return null
	if (n && typeof n != 'function') throw Error(L(231, e, typeof n))
	return n
}
var ff = !1
if (Cr)
	try {
		var fl = {}
		Object.defineProperty(fl, 'passive', {
			get: function () {
				ff = !0
			},
		}),
			window.addEventListener('test', fl, fl),
			window.removeEventListener('test', fl, fl)
	} catch {
		ff = !1
	}
function J3(t, e, n, r, i, o, l, s, a) {
	var u = Array.prototype.slice.call(arguments, 3)
	try {
		e.apply(n, u)
	} catch (c) {
		this.onError(c)
	}
}
var Ml = !1,
	Ia = null,
	ja = !1,
	df = null,
	e4 = {
		onError: function (t) {
			;(Ml = !0), (Ia = t)
		},
	}
function t4(t, e, n, r, i, o, l, s, a) {
	;(Ml = !1), (Ia = null), J3.apply(e4, arguments)
}
function n4(t, e, n, r, i, o, l, s, a) {
	if ((t4.apply(this, arguments), Ml)) {
		if (Ml) {
			var u = Ia
			;(Ml = !1), (Ia = null)
		} else throw Error(L(198))
		ja || ((ja = !0), (df = u))
	}
}
function Zi(t) {
	var e = t,
		n = t
	if (t.alternate) for (; e.return; ) e = e.return
	else {
		t = e
		do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return)
		while (t)
	}
	return e.tag === 3 ? n : null
}
function Bh(t) {
	if (t.tag === 13) {
		var e = t.memoizedState
		if (
			(e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
			e !== null)
		)
			return e.dehydrated
	}
	return null
}
function fd(t) {
	if (Zi(t) !== t) throw Error(L(188))
}
function r4(t) {
	var e = t.alternate
	if (!e) {
		if (((e = Zi(t)), e === null)) throw Error(L(188))
		return e !== t ? null : t
	}
	for (var n = t, r = e; ; ) {
		var i = n.return
		if (i === null) break
		var o = i.alternate
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r
				continue
			}
			break
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return fd(i), t
				if (o === r) return fd(i), e
				o = o.sibling
			}
			throw Error(L(188))
		}
		if (n.return !== r.return) (n = i), (r = o)
		else {
			for (var l = !1, s = i.child; s; ) {
				if (s === n) {
					;(l = !0), (n = i), (r = o)
					break
				}
				if (s === r) {
					;(l = !0), (r = i), (n = o)
					break
				}
				s = s.sibling
			}
			if (!l) {
				for (s = o.child; s; ) {
					if (s === n) {
						;(l = !0), (n = o), (r = i)
						break
					}
					if (s === r) {
						;(l = !0), (r = o), (n = i)
						break
					}
					s = s.sibling
				}
				if (!l) throw Error(L(189))
			}
		}
		if (n.alternate !== r) throw Error(L(190))
	}
	if (n.tag !== 3) throw Error(L(188))
	return n.stateNode.current === n ? t : e
}
function Uh(t) {
	return (t = r4(t)), t !== null ? Vh(t) : null
}
function Vh(t) {
	if (t.tag === 5 || t.tag === 6) return t
	for (t = t.child; t !== null; ) {
		var e = Vh(t)
		if (e !== null) return e
		t = t.sibling
	}
	return null
}
var Hh = hn.unstable_scheduleCallback,
	dd = hn.unstable_cancelCallback,
	i4 = hn.unstable_shouldYield,
	o4 = hn.unstable_requestPaint,
	Je = hn.unstable_now,
	l4 = hn.unstable_getCurrentPriorityLevel,
	L1 = hn.unstable_ImmediatePriority,
	Wh = hn.unstable_UserBlockingPriority,
	Fa = hn.unstable_NormalPriority,
	s4 = hn.unstable_LowPriority,
	qh = hn.unstable_IdlePriority,
	xu = null,
	lr = null
function a4(t) {
	if (lr && typeof lr.onCommitFiberRoot == 'function')
		try {
			lr.onCommitFiberRoot(xu, t, void 0, (t.current.flags & 128) === 128)
		} catch {}
}
var Hn = Math.clz32 ? Math.clz32 : f4,
	u4 = Math.log,
	c4 = Math.LN2
function f4(t) {
	return (t >>>= 0), t === 0 ? 32 : (31 - ((u4(t) / c4) | 0)) | 0
}
var Fs = 64,
	$s = 4194304
function kl(t) {
	switch (t & -t) {
		case 1:
			return 1
		case 2:
			return 2
		case 4:
			return 4
		case 8:
			return 8
		case 16:
			return 16
		case 32:
			return 32
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t & 4194240
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return t & 130023424
		case 134217728:
			return 134217728
		case 268435456:
			return 268435456
		case 536870912:
			return 536870912
		case 1073741824:
			return 1073741824
		default:
			return t
	}
}
function $a(t, e) {
	var n = t.pendingLanes
	if (n === 0) return 0
	var r = 0,
		i = t.suspendedLanes,
		o = t.pingedLanes,
		l = n & 268435455
	if (l !== 0) {
		var s = l & ~i
		s !== 0 ? (r = kl(s)) : ((o &= l), o !== 0 && (r = kl(o)))
	} else (l = n & ~i), l !== 0 ? (r = kl(l)) : o !== 0 && (r = kl(o))
	if (r === 0) return 0
	if (
		e !== 0 &&
		e !== r &&
		(e & i) === 0 &&
		((i = r & -r), (o = e & -e), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return e
	if (((r & 4) !== 0 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
		for (t = t.entanglements, e &= r; 0 < e; )
			(n = 31 - Hn(e)), (i = 1 << n), (r |= t[n]), (e &= ~i)
	return r
}
function d4(t, e) {
	switch (t) {
		case 1:
		case 2:
		case 4:
			return e + 250
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e + 5e3
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1
		default:
			return -1
	}
}
function p4(t, e) {
	for (
		var n = t.suspendedLanes,
			r = t.pingedLanes,
			i = t.expirationTimes,
			o = t.pendingLanes;
		0 < o;

	) {
		var l = 31 - Hn(o),
			s = 1 << l,
			a = i[l]
		a === -1
			? ((s & n) === 0 || (s & r) !== 0) && (i[l] = d4(s, e))
			: a <= e && (t.expiredLanes |= s),
			(o &= ~s)
	}
}
function pf(t) {
	return (
		(t = t.pendingLanes & -1073741825),
		t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
	)
}
function Yh() {
	var t = Fs
	return (Fs <<= 1), (Fs & 4194240) === 0 && (Fs = 64), t
}
function sc(t) {
	for (var e = [], n = 0; 31 > n; n++) e.push(t)
	return e
}
function Cs(t, e, n) {
	;(t.pendingLanes |= e),
		e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
		(t = t.eventTimes),
		(e = 31 - Hn(e)),
		(t[e] = n)
}
function h4(t, e) {
	var n = t.pendingLanes & ~e
	;(t.pendingLanes = e),
		(t.suspendedLanes = 0),
		(t.pingedLanes = 0),
		(t.expiredLanes &= e),
		(t.mutableReadLanes &= e),
		(t.entangledLanes &= e),
		(e = t.entanglements)
	var r = t.eventTimes
	for (t = t.expirationTimes; 0 < n; ) {
		var i = 31 - Hn(n),
			o = 1 << i
		;(e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o)
	}
}
function D1(t, e) {
	var n = (t.entangledLanes |= e)
	for (t = t.entanglements; n; ) {
		var r = 31 - Hn(n),
			i = 1 << r
		;(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i)
	}
}
var Se = 0
function Xh(t) {
	return (
		(t &= -t),
		1 < t ? (4 < t ? ((t & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
	)
}
var Gh,
	A1,
	Qh,
	Kh,
	Zh,
	hf = !1,
	bs = [],
	Xr = null,
	Gr = null,
	Qr = null,
	es = new Map(),
	ts = new Map(),
	jr = [],
	g4 =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		)
function pd(t, e) {
	switch (t) {
		case 'focusin':
		case 'focusout':
			Xr = null
			break
		case 'dragenter':
		case 'dragleave':
			Gr = null
			break
		case 'mouseover':
		case 'mouseout':
			Qr = null
			break
		case 'pointerover':
		case 'pointerout':
			es.delete(e.pointerId)
			break
		case 'gotpointercapture':
		case 'lostpointercapture':
			ts.delete(e.pointerId)
	}
}
function dl(t, e, n, r, i, o) {
	return t === null || t.nativeEvent !== o
		? ((t = {
				blockedOn: e,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  e !== null && ((e = zs(e)), e !== null && A1(e)),
		  t)
		: ((t.eventSystemFlags |= r),
		  (e = t.targetContainers),
		  i !== null && e.indexOf(i) === -1 && e.push(i),
		  t)
}
function m4(t, e, n, r, i) {
	switch (e) {
		case 'focusin':
			return (Xr = dl(Xr, t, e, n, r, i)), !0
		case 'dragenter':
			return (Gr = dl(Gr, t, e, n, r, i)), !0
		case 'mouseover':
			return (Qr = dl(Qr, t, e, n, r, i)), !0
		case 'pointerover':
			var o = i.pointerId
			return es.set(o, dl(es.get(o) || null, t, e, n, r, i)), !0
		case 'gotpointercapture':
			return (
				(o = i.pointerId), ts.set(o, dl(ts.get(o) || null, t, e, n, r, i)), !0
			)
	}
	return !1
}
function Jh(t) {
	var e = Pi(t.target)
	if (e !== null) {
		var n = Zi(e)
		if (n !== null) {
			if (((e = n.tag), e === 13)) {
				if (((e = Bh(n)), e !== null)) {
					;(t.blockedOn = e),
						Zh(t.priority, function () {
							Qh(n)
						})
					return
				}
			} else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
				return
			}
		}
	}
	t.blockedOn = null
}
function pa(t) {
	if (t.blockedOn !== null) return !1
	for (var e = t.targetContainers; 0 < e.length; ) {
		var n = gf(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent)
		if (n === null) {
			n = t.nativeEvent
			var r = new n.constructor(n.type, n)
			;(uf = r), n.target.dispatchEvent(r), (uf = null)
		} else return (e = zs(n)), e !== null && A1(e), (t.blockedOn = n), !1
		e.shift()
	}
	return !0
}
function hd(t, e, n) {
	pa(t) && n.delete(e)
}
function v4() {
	;(hf = !1),
		Xr !== null && pa(Xr) && (Xr = null),
		Gr !== null && pa(Gr) && (Gr = null),
		Qr !== null && pa(Qr) && (Qr = null),
		es.forEach(hd),
		ts.forEach(hd)
}
function pl(t, e) {
	t.blockedOn === e &&
		((t.blockedOn = null),
		hf ||
			((hf = !0), hn.unstable_scheduleCallback(hn.unstable_NormalPriority, v4)))
}
function ns(t) {
	function e(i) {
		return pl(i, t)
	}
	if (0 < bs.length) {
		pl(bs[0], t)
		for (var n = 1; n < bs.length; n++) {
			var r = bs[n]
			r.blockedOn === t && (r.blockedOn = null)
		}
	}
	for (
		Xr !== null && pl(Xr, t),
			Gr !== null && pl(Gr, t),
			Qr !== null && pl(Qr, t),
			es.forEach(e),
			ts.forEach(e),
			n = 0;
		n < jr.length;
		n++
	)
		(r = jr[n]), r.blockedOn === t && (r.blockedOn = null)
	for (; 0 < jr.length && ((n = jr[0]), n.blockedOn === null); )
		Jh(n), n.blockedOn === null && jr.shift()
}
var Oo = Or.ReactCurrentBatchConfig,
	ba = !0
function y4(t, e, n, r) {
	var i = Se,
		o = Oo.transition
	Oo.transition = null
	try {
		;(Se = 1), I1(t, e, n, r)
	} finally {
		;(Se = i), (Oo.transition = o)
	}
}
function _4(t, e, n, r) {
	var i = Se,
		o = Oo.transition
	Oo.transition = null
	try {
		;(Se = 4), I1(t, e, n, r)
	} finally {
		;(Se = i), (Oo.transition = o)
	}
}
function I1(t, e, n, r) {
	if (ba) {
		var i = gf(t, e, n, r)
		if (i === null) vc(t, e, r, Ba, n), pd(t, r)
		else if (m4(i, t, e, n, r)) r.stopPropagation()
		else if ((pd(t, r), e & 4 && -1 < g4.indexOf(t))) {
			for (; i !== null; ) {
				var o = zs(i)
				if (
					(o !== null && Gh(o),
					(o = gf(t, e, n, r)),
					o === null && vc(t, e, r, Ba, n),
					o === i)
				)
					break
				i = o
			}
			i !== null && r.stopPropagation()
		} else vc(t, e, r, null, n)
	}
}
var Ba = null
function gf(t, e, n, r) {
	if (((Ba = null), (t = N1(r)), (t = Pi(t)), t !== null))
		if (((e = Zi(t)), e === null)) t = null
		else if (((n = e.tag), n === 13)) {
			if (((t = Bh(e)), t !== null)) return t
			t = null
		} else if (n === 3) {
			if (e.stateNode.current.memoizedState.isDehydrated)
				return e.tag === 3 ? e.stateNode.containerInfo : null
			t = null
		} else e !== t && (t = null)
	return (Ba = t), null
}
function e2(t) {
	switch (t) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4
		case 'message':
			switch (l4()) {
				case L1:
					return 1
				case Wh:
					return 4
				case Fa:
				case s4:
					return 16
				case qh:
					return 536870912
				default:
					return 16
			}
		default:
			return 16
	}
}
var $r = null,
	j1 = null,
	ha = null
function t2() {
	if (ha) return ha
	var t,
		e = j1,
		n = e.length,
		r,
		i = 'value' in $r ? $r.value : $r.textContent,
		o = i.length
	for (t = 0; t < n && e[t] === i[t]; t++);
	var l = n - t
	for (r = 1; r <= l && e[n - r] === i[o - r]; r++);
	return (ha = i.slice(t, 1 < r ? 1 - r : void 0))
}
function ga(t) {
	var e = t.keyCode
	return (
		'charCode' in t
			? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
			: (t = e),
		t === 10 && (t = 13),
		32 <= t || t === 13 ? t : 0
	)
}
function Bs() {
	return !0
}
function gd() {
	return !1
}
function yn(t) {
	function e(n, r, i, o, l) {
		;(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = l),
			(this.currentTarget = null)
		for (var s in t)
			t.hasOwnProperty(s) && ((n = t[s]), (this[s] = n ? n(o) : o[s]))
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? Bs
				: gd),
			(this.isPropagationStopped = gd),
			this
		)
	}
	return (
		Ve(e.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0
				var n = this.nativeEvent
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Bs))
			},
			stopPropagation: function () {
				var n = this.nativeEvent
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Bs))
			},
			persist: function () {},
			isPersistent: Bs,
		}),
		e
	)
}
var tl = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (t) {
			return t.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	F1 = yn(tl),
	Es = Ve({}, tl, { view: 0, detail: 0 }),
	w4 = yn(Es),
	ac,
	uc,
	hl,
	Su = Ve({}, Es, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: $1,
		button: 0,
		buttons: 0,
		relatedTarget: function (t) {
			return t.relatedTarget === void 0
				? t.fromElement === t.srcElement
					? t.toElement
					: t.fromElement
				: t.relatedTarget
		},
		movementX: function (t) {
			return 'movementX' in t
				? t.movementX
				: (t !== hl &&
						(hl && t.type === 'mousemove'
							? ((ac = t.screenX - hl.screenX), (uc = t.screenY - hl.screenY))
							: (uc = ac = 0),
						(hl = t)),
				  ac)
		},
		movementY: function (t) {
			return 'movementY' in t ? t.movementY : uc
		},
	}),
	md = yn(Su),
	x4 = Ve({}, Su, { dataTransfer: 0 }),
	S4 = yn(x4),
	k4 = Ve({}, Es, { relatedTarget: 0 }),
	cc = yn(k4),
	C4 = Ve({}, tl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	E4 = yn(C4),
	z4 = Ve({}, tl, {
		clipboardData: function (t) {
			return 'clipboardData' in t ? t.clipboardData : window.clipboardData
		},
	}),
	P4 = yn(z4),
	T4 = Ve({}, tl, { data: 0 }),
	vd = yn(T4),
	R4 = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	O4 = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	M4 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function N4(t) {
	var e = this.nativeEvent
	return e.getModifierState ? e.getModifierState(t) : (t = M4[t]) ? !!e[t] : !1
}
function $1() {
	return N4
}
var L4 = Ve({}, Es, {
		key: function (t) {
			if (t.key) {
				var e = R4[t.key] || t.key
				if (e !== 'Unidentified') return e
			}
			return t.type === 'keypress'
				? ((t = ga(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
				: t.type === 'keydown' || t.type === 'keyup'
				? O4[t.keyCode] || 'Unidentified'
				: ''
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: $1,
		charCode: function (t) {
			return t.type === 'keypress' ? ga(t) : 0
		},
		keyCode: function (t) {
			return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
		},
		which: function (t) {
			return t.type === 'keypress'
				? ga(t)
				: t.type === 'keydown' || t.type === 'keyup'
				? t.keyCode
				: 0
		},
	}),
	D4 = yn(L4),
	A4 = Ve({}, Su, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	yd = yn(A4),
	I4 = Ve({}, Es, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: $1,
	}),
	j4 = yn(I4),
	F4 = Ve({}, tl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	$4 = yn(F4),
	b4 = Ve({}, Su, {
		deltaX: function (t) {
			return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
		},
		deltaY: function (t) {
			return 'deltaY' in t
				? t.deltaY
				: 'wheelDeltaY' in t
				? -t.wheelDeltaY
				: 'wheelDelta' in t
				? -t.wheelDelta
				: 0
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	B4 = yn(b4),
	U4 = [9, 13, 27, 32],
	b1 = Cr && 'CompositionEvent' in window,
	Nl = null
Cr && 'documentMode' in document && (Nl = document.documentMode)
var V4 = Cr && 'TextEvent' in window && !Nl,
	n2 = Cr && (!b1 || (Nl && 8 < Nl && 11 >= Nl)),
	_d = String.fromCharCode(32),
	wd = !1
function r2(t, e) {
	switch (t) {
		case 'keyup':
			return U4.indexOf(e.keyCode) !== -1
		case 'keydown':
			return e.keyCode !== 229
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0
		default:
			return !1
	}
}
function i2(t) {
	return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null
}
var fo = !1
function H4(t, e) {
	switch (t) {
		case 'compositionend':
			return i2(e)
		case 'keypress':
			return e.which !== 32 ? null : ((wd = !0), _d)
		case 'textInput':
			return (t = e.data), t === _d && wd ? null : t
		default:
			return null
	}
}
function W4(t, e) {
	if (fo)
		return t === 'compositionend' || (!b1 && r2(t, e))
			? ((t = t2()), (ha = j1 = $r = null), (fo = !1), t)
			: null
	switch (t) {
		case 'paste':
			return null
		case 'keypress':
			if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
				if (e.char && 1 < e.char.length) return e.char
				if (e.which) return String.fromCharCode(e.which)
			}
			return null
		case 'compositionend':
			return n2 && e.locale !== 'ko' ? null : e.data
		default:
			return null
	}
}
var q4 = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
}
function xd(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase()
	return e === 'input' ? !!q4[t.type] : e === 'textarea'
}
function o2(t, e, n, r) {
	Ih(r),
		(e = Ua(e, 'onChange')),
		0 < e.length &&
			((n = new F1('onChange', 'change', null, n, r)),
			t.push({ event: n, listeners: e }))
}
var Ll = null,
	rs = null
function Y4(t) {
	m2(t, 0)
}
function ku(t) {
	var e = go(t)
	if (Rh(e)) return t
}
function X4(t, e) {
	if (t === 'change') return e
}
var l2 = !1
if (Cr) {
	var fc
	if (Cr) {
		var dc = 'oninput' in document
		if (!dc) {
			var Sd = document.createElement('div')
			Sd.setAttribute('oninput', 'return;'),
				(dc = typeof Sd.oninput == 'function')
		}
		fc = dc
	} else fc = !1
	l2 = fc && (!document.documentMode || 9 < document.documentMode)
}
function kd() {
	Ll && (Ll.detachEvent('onpropertychange', s2), (rs = Ll = null))
}
function s2(t) {
	if (t.propertyName === 'value' && ku(rs)) {
		var e = []
		o2(e, rs, t, N1(t)), bh(Y4, e)
	}
}
function G4(t, e, n) {
	t === 'focusin'
		? (kd(), (Ll = e), (rs = n), Ll.attachEvent('onpropertychange', s2))
		: t === 'focusout' && kd()
}
function Q4(t) {
	if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return ku(rs)
}
function K4(t, e) {
	if (t === 'click') return ku(e)
}
function Z4(t, e) {
	if (t === 'input' || t === 'change') return ku(e)
}
function J4(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
}
var Yn = typeof Object.is == 'function' ? Object.is : J4
function is(t, e) {
	if (Yn(t, e)) return !0
	if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
		return !1
	var n = Object.keys(t),
		r = Object.keys(e)
	if (n.length !== r.length) return !1
	for (r = 0; r < n.length; r++) {
		var i = n[r]
		if (!Qc.call(e, i) || !Yn(t[i], e[i])) return !1
	}
	return !0
}
function Cd(t) {
	for (; t && t.firstChild; ) t = t.firstChild
	return t
}
function Ed(t, e) {
	var n = Cd(t)
	t = 0
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = t + n.textContent.length), t <= e && r >= e))
				return { node: n, offset: e - t }
			t = r
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = Cd(n)
	}
}
function a2(t, e) {
	return t && e
		? t === e
			? !0
			: t && t.nodeType === 3
			? !1
			: e && e.nodeType === 3
			? a2(t, e.parentNode)
			: 'contains' in t
			? t.contains(e)
			: t.compareDocumentPosition
			? !!(t.compareDocumentPosition(e) & 16)
			: !1
		: !1
}
function u2() {
	for (var t = window, e = Aa(); e instanceof t.HTMLIFrameElement; ) {
		try {
			var n = typeof e.contentWindow.location.href == 'string'
		} catch {
			n = !1
		}
		if (n) t = e.contentWindow
		else break
		e = Aa(t.document)
	}
	return e
}
function B1(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase()
	return (
		e &&
		((e === 'input' &&
			(t.type === 'text' ||
				t.type === 'search' ||
				t.type === 'tel' ||
				t.type === 'url' ||
				t.type === 'password')) ||
			e === 'textarea' ||
			t.contentEditable === 'true')
	)
}
function e5(t) {
	var e = u2(),
		n = t.focusedElem,
		r = t.selectionRange
	if (
		e !== n &&
		n &&
		n.ownerDocument &&
		a2(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && B1(n)) {
			if (
				((e = r.start),
				(t = r.end),
				t === void 0 && (t = e),
				'selectionStart' in n)
			)
				(n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length))
			else if (
				((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
				t.getSelection)
			) {
				t = t.getSelection()
				var i = n.textContent.length,
					o = Math.min(r.start, i)
				;(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!t.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = Ed(n, o))
				var l = Ed(n, r)
				i &&
					l &&
					(t.rangeCount !== 1 ||
						t.anchorNode !== i.node ||
						t.anchorOffset !== i.offset ||
						t.focusNode !== l.node ||
						t.focusOffset !== l.offset) &&
					((e = e.createRange()),
					e.setStart(i.node, i.offset),
					t.removeAllRanges(),
					o > r
						? (t.addRange(e), t.extend(l.node, l.offset))
						: (e.setEnd(l.node, l.offset), t.addRange(e)))
			}
		}
		for (e = [], t = n; (t = t.parentNode); )
			t.nodeType === 1 &&
				e.push({ element: t, left: t.scrollLeft, top: t.scrollTop })
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
			(t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top)
	}
}
var t5 = Cr && 'documentMode' in document && 11 >= document.documentMode,
	po = null,
	mf = null,
	Dl = null,
	vf = !1
function zd(t, e, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
	vf ||
		po == null ||
		po !== Aa(r) ||
		((r = po),
		'selectionStart' in r && B1(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Dl && is(Dl, r)) ||
			((Dl = r),
			(r = Ua(mf, 'onSelect')),
			0 < r.length &&
				((e = new F1('onSelect', 'select', null, e, n)),
				t.push({ event: e, listeners: r }),
				(e.target = po))))
}
function Us(t, e) {
	var n = {}
	return (
		(n[t.toLowerCase()] = e.toLowerCase()),
		(n['Webkit' + t] = 'webkit' + e),
		(n['Moz' + t] = 'moz' + e),
		n
	)
}
var ho = {
		animationend: Us('Animation', 'AnimationEnd'),
		animationiteration: Us('Animation', 'AnimationIteration'),
		animationstart: Us('Animation', 'AnimationStart'),
		transitionend: Us('Transition', 'TransitionEnd'),
	},
	pc = {},
	c2 = {}
Cr &&
	((c2 = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete ho.animationend.animation,
		delete ho.animationiteration.animation,
		delete ho.animationstart.animation),
	'TransitionEvent' in window || delete ho.transitionend.transition)
function Cu(t) {
	if (pc[t]) return pc[t]
	if (!ho[t]) return t
	var e = ho[t],
		n
	for (n in e) if (e.hasOwnProperty(n) && n in c2) return (pc[t] = e[n])
	return t
}
var f2 = Cu('animationend'),
	d2 = Cu('animationiteration'),
	p2 = Cu('animationstart'),
	h2 = Cu('transitionend'),
	g2 = new Map(),
	Pd =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		)
function pi(t, e) {
	g2.set(t, e), Ki(e, [t])
}
for (var hc = 0; hc < Pd.length; hc++) {
	var gc = Pd[hc],
		n5 = gc.toLowerCase(),
		r5 = gc[0].toUpperCase() + gc.slice(1)
	pi(n5, 'on' + r5)
}
pi(f2, 'onAnimationEnd')
pi(d2, 'onAnimationIteration')
pi(p2, 'onAnimationStart')
pi('dblclick', 'onDoubleClick')
pi('focusin', 'onFocus')
pi('focusout', 'onBlur')
pi(h2, 'onTransitionEnd')
Fo('onMouseEnter', ['mouseout', 'mouseover'])
Fo('onMouseLeave', ['mouseout', 'mouseover'])
Fo('onPointerEnter', ['pointerout', 'pointerover'])
Fo('onPointerLeave', ['pointerout', 'pointerover'])
Ki(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Ki(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
)
Ki('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Ki(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Ki(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Ki(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Cl =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	i5 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Cl))
function Td(t, e, n) {
	var r = t.type || 'unknown-event'
	;(t.currentTarget = n), n4(r, e, void 0, t), (t.currentTarget = null)
}
function m2(t, e) {
	e = (e & 4) !== 0
	for (var n = 0; n < t.length; n++) {
		var r = t[n],
			i = r.event
		r = r.listeners
		e: {
			var o = void 0
			if (e)
				for (var l = r.length - 1; 0 <= l; l--) {
					var s = r[l],
						a = s.instance,
						u = s.currentTarget
					if (((s = s.listener), a !== o && i.isPropagationStopped())) break e
					Td(i, s, u), (o = a)
				}
			else
				for (l = 0; l < r.length; l++) {
					if (
						((s = r[l]),
						(a = s.instance),
						(u = s.currentTarget),
						(s = s.listener),
						a !== o && i.isPropagationStopped())
					)
						break e
					Td(i, s, u), (o = a)
				}
		}
	}
	if (ja) throw ((t = df), (ja = !1), (df = null), t)
}
function Ae(t, e) {
	var n = e[Sf]
	n === void 0 && (n = e[Sf] = new Set())
	var r = t + '__bubble'
	n.has(r) || (v2(e, t, 2, !1), n.add(r))
}
function mc(t, e, n) {
	var r = 0
	e && (r |= 4), v2(n, t, r, e)
}
var Vs = '_reactListening' + Math.random().toString(36).slice(2)
function os(t) {
	if (!t[Vs]) {
		;(t[Vs] = !0),
			Ch.forEach(function (n) {
				n !== 'selectionchange' && (i5.has(n) || mc(n, !1, t), mc(n, !0, t))
			})
		var e = t.nodeType === 9 ? t : t.ownerDocument
		e === null || e[Vs] || ((e[Vs] = !0), mc('selectionchange', !1, e))
	}
}
function v2(t, e, n, r) {
	switch (e2(e)) {
		case 1:
			var i = y4
			break
		case 4:
			i = _4
			break
		default:
			i = I1
	}
	;(n = i.bind(null, e, n, t)),
		(i = void 0),
		!ff ||
			(e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
			(i = !0),
		r
			? i !== void 0
				? t.addEventListener(e, n, { capture: !0, passive: i })
				: t.addEventListener(e, n, !0)
			: i !== void 0
			? t.addEventListener(e, n, { passive: i })
			: t.addEventListener(e, n, !1)
}
function vc(t, e, n, r, i) {
	var o = r
	if ((e & 1) === 0 && (e & 2) === 0 && r !== null)
		e: for (;;) {
			if (r === null) return
			var l = r.tag
			if (l === 3 || l === 4) {
				var s = r.stateNode.containerInfo
				if (s === i || (s.nodeType === 8 && s.parentNode === i)) break
				if (l === 4)
					for (l = r.return; l !== null; ) {
						var a = l.tag
						if (
							(a === 3 || a === 4) &&
							((a = l.stateNode.containerInfo),
							a === i || (a.nodeType === 8 && a.parentNode === i))
						)
							return
						l = l.return
					}
				for (; s !== null; ) {
					if (((l = Pi(s)), l === null)) return
					if (((a = l.tag), a === 5 || a === 6)) {
						r = o = l
						continue e
					}
					s = s.parentNode
				}
			}
			r = r.return
		}
	bh(function () {
		var u = o,
			c = N1(n),
			d = []
		e: {
			var f = g2.get(t)
			if (f !== void 0) {
				var p = F1,
					v = t
				switch (t) {
					case 'keypress':
						if (ga(n) === 0) break e
					case 'keydown':
					case 'keyup':
						p = D4
						break
					case 'focusin':
						;(v = 'focus'), (p = cc)
						break
					case 'focusout':
						;(v = 'blur'), (p = cc)
						break
					case 'beforeblur':
					case 'afterblur':
						p = cc
						break
					case 'click':
						if (n.button === 2) break e
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						p = md
						break
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						p = S4
						break
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						p = j4
						break
					case f2:
					case d2:
					case p2:
						p = E4
						break
					case h2:
						p = $4
						break
					case 'scroll':
						p = w4
						break
					case 'wheel':
						p = B4
						break
					case 'copy':
					case 'cut':
					case 'paste':
						p = P4
						break
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						p = yd
				}
				var g = (e & 4) !== 0,
					w = !g && t === 'scroll',
					m = g ? (f !== null ? f + 'Capture' : null) : f
				g = []
				for (var h = u, y; h !== null; ) {
					y = h
					var _ = y.stateNode
					if (
						(y.tag === 5 &&
							_ !== null &&
							((y = _),
							m !== null && ((_ = Jl(h, m)), _ != null && g.push(ls(h, _, y)))),
						w)
					)
						break
					h = h.return
				}
				0 < g.length &&
					((f = new p(f, v, null, n, c)), d.push({ event: f, listeners: g }))
			}
		}
		if ((e & 7) === 0) {
			e: {
				if (
					((f = t === 'mouseover' || t === 'pointerover'),
					(p = t === 'mouseout' || t === 'pointerout'),
					f &&
						n !== uf &&
						(v = n.relatedTarget || n.fromElement) &&
						(Pi(v) || v[Er]))
				)
					break e
				if (
					(p || f) &&
					((f =
						c.window === c
							? c
							: (f = c.ownerDocument)
							? f.defaultView || f.parentWindow
							: window),
					p
						? ((v = n.relatedTarget || n.toElement),
						  (p = u),
						  (v = v ? Pi(v) : null),
						  v !== null &&
								((w = Zi(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
								(v = null))
						: ((p = null), (v = u)),
					p !== v)
				) {
					if (
						((g = md),
						(_ = 'onMouseLeave'),
						(m = 'onMouseEnter'),
						(h = 'mouse'),
						(t === 'pointerout' || t === 'pointerover') &&
							((g = yd),
							(_ = 'onPointerLeave'),
							(m = 'onPointerEnter'),
							(h = 'pointer')),
						(w = p == null ? f : go(p)),
						(y = v == null ? f : go(v)),
						(f = new g(_, h + 'leave', p, n, c)),
						(f.target = w),
						(f.relatedTarget = y),
						(_ = null),
						Pi(c) === u &&
							((g = new g(m, h + 'enter', v, n, c)),
							(g.target = y),
							(g.relatedTarget = w),
							(_ = g)),
						(w = _),
						p && v)
					)
						t: {
							for (g = p, m = v, h = 0, y = g; y; y = ro(y)) h++
							for (y = 0, _ = m; _; _ = ro(_)) y++
							for (; 0 < h - y; ) (g = ro(g)), h--
							for (; 0 < y - h; ) (m = ro(m)), y--
							for (; h--; ) {
								if (g === m || (m !== null && g === m.alternate)) break t
								;(g = ro(g)), (m = ro(m))
							}
							g = null
						}
					else g = null
					p !== null && Rd(d, f, p, g, !1),
						v !== null && w !== null && Rd(d, w, v, g, !0)
				}
			}
			e: {
				if (
					((f = u ? go(u) : window),
					(p = f.nodeName && f.nodeName.toLowerCase()),
					p === 'select' || (p === 'input' && f.type === 'file'))
				)
					var S = X4
				else if (xd(f))
					if (l2) S = Z4
					else {
						S = Q4
						var z = G4
					}
				else
					(p = f.nodeName) &&
						p.toLowerCase() === 'input' &&
						(f.type === 'checkbox' || f.type === 'radio') &&
						(S = K4)
				if (S && (S = S(t, u))) {
					o2(d, S, n, c)
					break e
				}
				z && z(t, f, u),
					t === 'focusout' &&
						(z = f._wrapperState) &&
						z.controlled &&
						f.type === 'number' &&
						rf(f, 'number', f.value)
			}
			switch (((z = u ? go(u) : window), t)) {
				case 'focusin':
					;(xd(z) || z.contentEditable === 'true') &&
						((po = z), (mf = u), (Dl = null))
					break
				case 'focusout':
					Dl = mf = po = null
					break
				case 'mousedown':
					vf = !0
					break
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					;(vf = !1), zd(d, n, c)
					break
				case 'selectionchange':
					if (t5) break
				case 'keydown':
				case 'keyup':
					zd(d, n, c)
			}
			var C
			if (b1)
				e: {
					switch (t) {
						case 'compositionstart':
							var P = 'onCompositionStart'
							break e
						case 'compositionend':
							P = 'onCompositionEnd'
							break e
						case 'compositionupdate':
							P = 'onCompositionUpdate'
							break e
					}
					P = void 0
				}
			else
				fo
					? r2(t, n) && (P = 'onCompositionEnd')
					: t === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart')
			P &&
				(n2 &&
					n.locale !== 'ko' &&
					(fo || P !== 'onCompositionStart'
						? P === 'onCompositionEnd' && fo && (C = t2())
						: (($r = c),
						  (j1 = 'value' in $r ? $r.value : $r.textContent),
						  (fo = !0))),
				(z = Ua(u, P)),
				0 < z.length &&
					((P = new vd(P, t, null, n, c)),
					d.push({ event: P, listeners: z }),
					C ? (P.data = C) : ((C = i2(n)), C !== null && (P.data = C)))),
				(C = V4 ? H4(t, n) : W4(t, n)) &&
					((u = Ua(u, 'onBeforeInput')),
					0 < u.length &&
						((c = new vd('onBeforeInput', 'beforeinput', null, n, c)),
						d.push({ event: c, listeners: u }),
						(c.data = C)))
		}
		m2(d, e)
	})
}
function ls(t, e, n) {
	return { instance: t, listener: e, currentTarget: n }
}
function Ua(t, e) {
	for (var n = e + 'Capture', r = []; t !== null; ) {
		var i = t,
			o = i.stateNode
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = Jl(t, n)),
			o != null && r.unshift(ls(t, o, i)),
			(o = Jl(t, e)),
			o != null && r.push(ls(t, o, i))),
			(t = t.return)
	}
	return r
}
function ro(t) {
	if (t === null) return null
	do t = t.return
	while (t && t.tag !== 5)
	return t || null
}
function Rd(t, e, n, r, i) {
	for (var o = e._reactName, l = []; n !== null && n !== r; ) {
		var s = n,
			a = s.alternate,
			u = s.stateNode
		if (a !== null && a === r) break
		s.tag === 5 &&
			u !== null &&
			((s = u),
			i
				? ((a = Jl(n, o)), a != null && l.unshift(ls(n, a, s)))
				: i || ((a = Jl(n, o)), a != null && l.push(ls(n, a, s)))),
			(n = n.return)
	}
	l.length !== 0 && t.push({ event: e, listeners: l })
}
var o5 = /\r\n?/g,
	l5 = /\u0000|\uFFFD/g
function Od(t) {
	return (typeof t == 'string' ? t : '' + t)
		.replace(
			o5,
			`
`
		)
		.replace(l5, '')
}
function Hs(t, e, n) {
	if (((e = Od(e)), Od(t) !== e && n)) throw Error(L(425))
}
function Va() {}
var yf = null,
	_f = null
function wf(t, e) {
	return (
		t === 'textarea' ||
		t === 'noscript' ||
		typeof e.children == 'string' ||
		typeof e.children == 'number' ||
		(typeof e.dangerouslySetInnerHTML == 'object' &&
			e.dangerouslySetInnerHTML !== null &&
			e.dangerouslySetInnerHTML.__html != null)
	)
}
var xf = typeof setTimeout == 'function' ? setTimeout : void 0,
	s5 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Md = typeof Promise == 'function' ? Promise : void 0,
	a5 =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Md < 'u'
			? function (t) {
					return Md.resolve(null).then(t).catch(u5)
			  }
			: xf
function u5(t) {
	setTimeout(function () {
		throw t
	})
}
function yc(t, e) {
	var n = e,
		r = 0
	do {
		var i = n.nextSibling
		if ((t.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					t.removeChild(i), ns(e)
					return
				}
				r--
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++
		n = i
	} while (n)
	ns(e)
}
function Kr(t) {
	for (; t != null; t = t.nextSibling) {
		var e = t.nodeType
		if (e === 1 || e === 3) break
		if (e === 8) {
			if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break
			if (e === '/$') return null
		}
	}
	return t
}
function Nd(t) {
	t = t.previousSibling
	for (var e = 0; t; ) {
		if (t.nodeType === 8) {
			var n = t.data
			if (n === '$' || n === '$!' || n === '$?') {
				if (e === 0) return t
				e--
			} else n === '/$' && e++
		}
		t = t.previousSibling
	}
	return null
}
var nl = Math.random().toString(36).slice(2),
	tr = '__reactFiber$' + nl,
	ss = '__reactProps$' + nl,
	Er = '__reactContainer$' + nl,
	Sf = '__reactEvents$' + nl,
	c5 = '__reactListeners$' + nl,
	f5 = '__reactHandles$' + nl
function Pi(t) {
	var e = t[tr]
	if (e) return e
	for (var n = t.parentNode; n; ) {
		if ((e = n[Er] || n[tr])) {
			if (
				((n = e.alternate),
				e.child !== null || (n !== null && n.child !== null))
			)
				for (t = Nd(t); t !== null; ) {
					if ((n = t[tr])) return n
					t = Nd(t)
				}
			return e
		}
		;(t = n), (n = t.parentNode)
	}
	return null
}
function zs(t) {
	return (
		(t = t[tr] || t[Er]),
		!t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
	)
}
function go(t) {
	if (t.tag === 5 || t.tag === 6) return t.stateNode
	throw Error(L(33))
}
function Eu(t) {
	return t[ss] || null
}
var kf = [],
	mo = -1
function hi(t) {
	return { current: t }
}
function Ie(t) {
	0 > mo || ((t.current = kf[mo]), (kf[mo] = null), mo--)
}
function Ne(t, e) {
	mo++, (kf[mo] = t.current), (t.current = e)
}
var ui = {},
	Lt = hi(ui),
	Gt = hi(!1),
	bi = ui
function $o(t, e) {
	var n = t.type.contextTypes
	if (!n) return ui
	var r = t.stateNode
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
		return r.__reactInternalMemoizedMaskedChildContext
	var i = {},
		o
	for (o in n) i[o] = e[o]
	return (
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = e),
			(t.__reactInternalMemoizedMaskedChildContext = i)),
		i
	)
}
function Qt(t) {
	return (t = t.childContextTypes), t != null
}
function Ha() {
	Ie(Gt), Ie(Lt)
}
function Ld(t, e, n) {
	if (Lt.current !== ui) throw Error(L(168))
	Ne(Lt, e), Ne(Gt, n)
}
function y2(t, e, n) {
	var r = t.stateNode
	if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
		return n
	r = r.getChildContext()
	for (var i in r) if (!(i in e)) throw Error(L(108, G3(t) || 'Unknown', i))
	return Ve({}, n, r)
}
function Wa(t) {
	return (
		(t =
			((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || ui),
		(bi = Lt.current),
		Ne(Lt, t),
		Ne(Gt, Gt.current),
		!0
	)
}
function Dd(t, e, n) {
	var r = t.stateNode
	if (!r) throw Error(L(169))
	n
		? ((t = y2(t, e, bi)),
		  (r.__reactInternalMemoizedMergedChildContext = t),
		  Ie(Gt),
		  Ie(Lt),
		  Ne(Lt, t))
		: Ie(Gt),
		Ne(Gt, n)
}
var gr = null,
	zu = !1,
	_c = !1
function _2(t) {
	gr === null ? (gr = [t]) : gr.push(t)
}
function d5(t) {
	;(zu = !0), _2(t)
}
function gi() {
	if (!_c && gr !== null) {
		_c = !0
		var t = 0,
			e = Se
		try {
			var n = gr
			for (Se = 1; t < n.length; t++) {
				var r = n[t]
				do r = r(!0)
				while (r !== null)
			}
			;(gr = null), (zu = !1)
		} catch (i) {
			throw (gr !== null && (gr = gr.slice(t + 1)), Hh(L1, gi), i)
		} finally {
			;(Se = e), (_c = !1)
		}
	}
	return null
}
var vo = [],
	yo = 0,
	qa = null,
	Ya = 0,
	kn = [],
	Cn = 0,
	Bi = null,
	yr = 1,
	_r = ''
function Si(t, e) {
	;(vo[yo++] = Ya), (vo[yo++] = qa), (qa = t), (Ya = e)
}
function w2(t, e, n) {
	;(kn[Cn++] = yr), (kn[Cn++] = _r), (kn[Cn++] = Bi), (Bi = t)
	var r = yr
	t = _r
	var i = 32 - Hn(r) - 1
	;(r &= ~(1 << i)), (n += 1)
	var o = 32 - Hn(e) + i
	if (30 < o) {
		var l = i - (i % 5)
		;(o = (r & ((1 << l) - 1)).toString(32)),
			(r >>= l),
			(i -= l),
			(yr = (1 << (32 - Hn(e) + i)) | (n << i) | r),
			(_r = o + t)
	} else (yr = (1 << o) | (n << i) | r), (_r = t)
}
function U1(t) {
	t.return !== null && (Si(t, 1), w2(t, 1, 0))
}
function V1(t) {
	for (; t === qa; )
		(qa = vo[--yo]), (vo[yo] = null), (Ya = vo[--yo]), (vo[yo] = null)
	for (; t === Bi; )
		(Bi = kn[--Cn]),
			(kn[Cn] = null),
			(_r = kn[--Cn]),
			(kn[Cn] = null),
			(yr = kn[--Cn]),
			(kn[Cn] = null)
}
var dn = null,
	fn = null,
	je = !1,
	Vn = null
function x2(t, e) {
	var n = zn(5, null, null, 0)
	;(n.elementType = 'DELETED'),
		(n.stateNode = e),
		(n.return = t),
		(e = t.deletions),
		e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n)
}
function Ad(t, e) {
	switch (t.tag) {
		case 5:
			var n = t.type
			return (
				(e =
					e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
						? null
						: e),
				e !== null
					? ((t.stateNode = e), (dn = t), (fn = Kr(e.firstChild)), !0)
					: !1
			)
		case 6:
			return (
				(e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
				e !== null ? ((t.stateNode = e), (dn = t), (fn = null), !0) : !1
			)
		case 13:
			return (
				(e = e.nodeType !== 8 ? null : e),
				e !== null
					? ((n = Bi !== null ? { id: yr, overflow: _r } : null),
					  (t.memoizedState = {
							dehydrated: e,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = zn(18, null, null, 0)),
					  (n.stateNode = e),
					  (n.return = t),
					  (t.child = n),
					  (dn = t),
					  (fn = null),
					  !0)
					: !1
			)
		default:
			return !1
	}
}
function Cf(t) {
	return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Ef(t) {
	if (je) {
		var e = fn
		if (e) {
			var n = e
			if (!Ad(t, e)) {
				if (Cf(t)) throw Error(L(418))
				e = Kr(n.nextSibling)
				var r = dn
				e && Ad(t, e)
					? x2(r, n)
					: ((t.flags = (t.flags & -4097) | 2), (je = !1), (dn = t))
			}
		} else {
			if (Cf(t)) throw Error(L(418))
			;(t.flags = (t.flags & -4097) | 2), (je = !1), (dn = t)
		}
	}
}
function Id(t) {
	for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
		t = t.return
	dn = t
}
function Ws(t) {
	if (t !== dn) return !1
	if (!je) return Id(t), (je = !0), !1
	var e
	if (
		((e = t.tag !== 3) &&
			!(e = t.tag !== 5) &&
			((e = t.type),
			(e = e !== 'head' && e !== 'body' && !wf(t.type, t.memoizedProps))),
		e && (e = fn))
	) {
		if (Cf(t)) throw (S2(), Error(L(418)))
		for (; e; ) x2(t, e), (e = Kr(e.nextSibling))
	}
	if ((Id(t), t.tag === 13)) {
		if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
			throw Error(L(317))
		e: {
			for (t = t.nextSibling, e = 0; t; ) {
				if (t.nodeType === 8) {
					var n = t.data
					if (n === '/$') {
						if (e === 0) {
							fn = Kr(t.nextSibling)
							break e
						}
						e--
					} else (n !== '$' && n !== '$!' && n !== '$?') || e++
				}
				t = t.nextSibling
			}
			fn = null
		}
	} else fn = dn ? Kr(t.stateNode.nextSibling) : null
	return !0
}
function S2() {
	for (var t = fn; t; ) t = Kr(t.nextSibling)
}
function bo() {
	;(fn = dn = null), (je = !1)
}
function H1(t) {
	Vn === null ? (Vn = [t]) : Vn.push(t)
}
var p5 = Or.ReactCurrentBatchConfig
function $n(t, e) {
	if (t && t.defaultProps) {
		;(e = Ve({}, e)), (t = t.defaultProps)
		for (var n in t) e[n] === void 0 && (e[n] = t[n])
		return e
	}
	return e
}
var Xa = hi(null),
	Ga = null,
	_o = null,
	W1 = null
function q1() {
	W1 = _o = Ga = null
}
function Y1(t) {
	var e = Xa.current
	Ie(Xa), (t._currentValue = e)
}
function zf(t, e, n) {
	for (; t !== null; ) {
		var r = t.alternate
		if (
			((t.childLanes & e) !== e
				? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
				: r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
			t === n)
		)
			break
		t = t.return
	}
}
function Mo(t, e) {
	;(Ga = t),
		(W1 = _o = null),
		(t = t.dependencies),
		t !== null &&
			t.firstContext !== null &&
			((t.lanes & e) !== 0 && (Xt = !0), (t.firstContext = null))
}
function Nn(t) {
	var e = t._currentValue
	if (W1 !== t)
		if (((t = { context: t, memoizedValue: e, next: null }), _o === null)) {
			if (Ga === null) throw Error(L(308))
			;(_o = t), (Ga.dependencies = { lanes: 0, firstContext: t })
		} else _o = _o.next = t
	return e
}
var Ti = null
function X1(t) {
	Ti === null ? (Ti = [t]) : Ti.push(t)
}
function k2(t, e, n, r) {
	var i = e.interleaved
	return (
		i === null ? ((n.next = n), X1(e)) : ((n.next = i.next), (i.next = n)),
		(e.interleaved = n),
		zr(t, r)
	)
}
function zr(t, e) {
	t.lanes |= e
	var n = t.alternate
	for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
		(t.childLanes |= e),
			(n = t.alternate),
			n !== null && (n.childLanes |= e),
			(n = t),
			(t = t.return)
	return n.tag === 3 ? n.stateNode : null
}
var Ir = !1
function G1(t) {
	t.updateQueue = {
		baseState: t.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	}
}
function C2(t, e) {
	;(t = t.updateQueue),
		e.updateQueue === t &&
			(e.updateQueue = {
				baseState: t.baseState,
				firstBaseUpdate: t.firstBaseUpdate,
				lastBaseUpdate: t.lastBaseUpdate,
				shared: t.shared,
				effects: t.effects,
			})
}
function Sr(t, e) {
	return {
		eventTime: t,
		lane: e,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	}
}
function Zr(t, e, n) {
	var r = t.updateQueue
	if (r === null) return null
	if (((r = r.shared), (ve & 2) !== 0)) {
		var i = r.pending
		return (
			i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
			(r.pending = e),
			zr(t, n)
		)
	}
	return (
		(i = r.interleaved),
		i === null ? ((e.next = e), X1(r)) : ((e.next = i.next), (i.next = e)),
		(r.interleaved = e),
		zr(t, n)
	)
}
function ma(t, e, n) {
	if (
		((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
	) {
		var r = e.lanes
		;(r &= t.pendingLanes), (n |= r), (e.lanes = n), D1(t, n)
	}
}
function jd(t, e) {
	var n = t.updateQueue,
		r = t.alternate
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var l = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				}
				o === null ? (i = o = l) : (o = o.next = l), (n = n.next)
			} while (n !== null)
			o === null ? (i = o = e) : (o = o.next = e)
		} else i = o = e
		;(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(t.updateQueue = n)
		return
	}
	;(t = n.lastBaseUpdate),
		t === null ? (n.firstBaseUpdate = e) : (t.next = e),
		(n.lastBaseUpdate = e)
}
function Qa(t, e, n, r) {
	var i = t.updateQueue
	Ir = !1
	var o = i.firstBaseUpdate,
		l = i.lastBaseUpdate,
		s = i.shared.pending
	if (s !== null) {
		i.shared.pending = null
		var a = s,
			u = a.next
		;(a.next = null), l === null ? (o = u) : (l.next = u), (l = a)
		var c = t.alternate
		c !== null &&
			((c = c.updateQueue),
			(s = c.lastBaseUpdate),
			s !== l &&
				(s === null ? (c.firstBaseUpdate = u) : (s.next = u),
				(c.lastBaseUpdate = a)))
	}
	if (o !== null) {
		var d = i.baseState
		;(l = 0), (c = u = a = null), (s = o)
		do {
			var f = s.lane,
				p = s.eventTime
			if ((r & f) === f) {
				c !== null &&
					(c = c.next =
						{
							eventTime: p,
							lane: 0,
							tag: s.tag,
							payload: s.payload,
							callback: s.callback,
							next: null,
						})
				e: {
					var v = t,
						g = s
					switch (((f = e), (p = n), g.tag)) {
						case 1:
							if (((v = g.payload), typeof v == 'function')) {
								d = v.call(p, d, f)
								break e
							}
							d = v
							break e
						case 3:
							v.flags = (v.flags & -65537) | 128
						case 0:
							if (
								((v = g.payload),
								(f = typeof v == 'function' ? v.call(p, d, f) : v),
								f == null)
							)
								break e
							d = Ve({}, d, f)
							break e
						case 2:
							Ir = !0
					}
				}
				s.callback !== null &&
					s.lane !== 0 &&
					((t.flags |= 64),
					(f = i.effects),
					f === null ? (i.effects = [s]) : f.push(s))
			} else
				(p = {
					eventTime: p,
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null,
				}),
					c === null ? ((u = c = p), (a = d)) : (c = c.next = p),
					(l |= f)
			if (((s = s.next), s === null)) {
				if (((s = i.shared.pending), s === null)) break
				;(f = s),
					(s = f.next),
					(f.next = null),
					(i.lastBaseUpdate = f),
					(i.shared.pending = null)
			}
		} while (1)
		if (
			(c === null && (a = d),
			(i.baseState = a),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(e = i.shared.interleaved),
			e !== null)
		) {
			i = e
			do (l |= i.lane), (i = i.next)
			while (i !== e)
		} else o === null && (i.shared.lanes = 0)
		;(Vi |= l), (t.lanes = l), (t.memoizedState = d)
	}
}
function Fd(t, e, n) {
	if (((t = e.effects), (e.effects = null), t !== null))
		for (e = 0; e < t.length; e++) {
			var r = t[e],
				i = r.callback
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(L(191, i))
				i.call(r)
			}
		}
}
var E2 = new kh.Component().refs
function Pf(t, e, n, r) {
	;(e = t.memoizedState),
		(n = n(r, e)),
		(n = n == null ? e : Ve({}, e, n)),
		(t.memoizedState = n),
		t.lanes === 0 && (t.updateQueue.baseState = n)
}
var Pu = {
	isMounted: function (t) {
		return (t = t._reactInternals) ? Zi(t) === t : !1
	},
	enqueueSetState: function (t, e, n) {
		t = t._reactInternals
		var r = Bt(),
			i = ei(t),
			o = Sr(r, i)
		;(o.payload = e),
			n != null && (o.callback = n),
			(e = Zr(t, o, i)),
			e !== null && (Wn(e, t, i, r), ma(e, t, i))
	},
	enqueueReplaceState: function (t, e, n) {
		t = t._reactInternals
		var r = Bt(),
			i = ei(t),
			o = Sr(r, i)
		;(o.tag = 1),
			(o.payload = e),
			n != null && (o.callback = n),
			(e = Zr(t, o, i)),
			e !== null && (Wn(e, t, i, r), ma(e, t, i))
	},
	enqueueForceUpdate: function (t, e) {
		t = t._reactInternals
		var n = Bt(),
			r = ei(t),
			i = Sr(n, r)
		;(i.tag = 2),
			e != null && (i.callback = e),
			(e = Zr(t, i, r)),
			e !== null && (Wn(e, t, r, n), ma(e, t, r))
	},
}
function $d(t, e, n, r, i, o, l) {
	return (
		(t = t.stateNode),
		typeof t.shouldComponentUpdate == 'function'
			? t.shouldComponentUpdate(r, o, l)
			: e.prototype && e.prototype.isPureReactComponent
			? !is(n, r) || !is(i, o)
			: !0
	)
}
function z2(t, e, n) {
	var r = !1,
		i = ui,
		o = e.contextType
	return (
		typeof o == 'object' && o !== null
			? (o = Nn(o))
			: ((i = Qt(e) ? bi : Lt.current),
			  (r = e.contextTypes),
			  (o = (r = r != null) ? $o(t, i) : ui)),
		(e = new e(n, o)),
		(t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
		(e.updater = Pu),
		(t.stateNode = e),
		(e._reactInternals = t),
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = i),
			(t.__reactInternalMemoizedMaskedChildContext = o)),
		e
	)
}
function bd(t, e, n, r) {
	;(t = e.state),
		typeof e.componentWillReceiveProps == 'function' &&
			e.componentWillReceiveProps(n, r),
		typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
			e.UNSAFE_componentWillReceiveProps(n, r),
		e.state !== t && Pu.enqueueReplaceState(e, e.state, null)
}
function Tf(t, e, n, r) {
	var i = t.stateNode
	;(i.props = n), (i.state = t.memoizedState), (i.refs = E2), G1(t)
	var o = e.contextType
	typeof o == 'object' && o !== null
		? (i.context = Nn(o))
		: ((o = Qt(e) ? bi : Lt.current), (i.context = $o(t, o))),
		(i.state = t.memoizedState),
		(o = e.getDerivedStateFromProps),
		typeof o == 'function' && (Pf(t, e, o, n), (i.state = t.memoizedState)),
		typeof e.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((e = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			e !== i.state && Pu.enqueueReplaceState(i, i.state, null),
			Qa(t, n, i, r),
			(i.state = t.memoizedState)),
		typeof i.componentDidMount == 'function' && (t.flags |= 4194308)
}
function gl(t, e, n) {
	if (
		((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(L(309))
				var r = n.stateNode
			}
			if (!r) throw Error(L(147, t))
			var i = r,
				o = '' + t
			return e !== null &&
				e.ref !== null &&
				typeof e.ref == 'function' &&
				e.ref._stringRef === o
				? e.ref
				: ((e = function (l) {
						var s = i.refs
						s === E2 && (s = i.refs = {}), l === null ? delete s[o] : (s[o] = l)
				  }),
				  (e._stringRef = o),
				  e)
		}
		if (typeof t != 'string') throw Error(L(284))
		if (!n._owner) throw Error(L(290, t))
	}
	return t
}
function qs(t, e) {
	throw (
		((t = Object.prototype.toString.call(e)),
		Error(
			L(
				31,
				t === '[object Object]'
					? 'object with keys {' + Object.keys(e).join(', ') + '}'
					: t
			)
		))
	)
}
function Bd(t) {
	var e = t._init
	return e(t._payload)
}
function P2(t) {
	function e(m, h) {
		if (t) {
			var y = m.deletions
			y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h)
		}
	}
	function n(m, h) {
		if (!t) return null
		for (; h !== null; ) e(m, h), (h = h.sibling)
		return null
	}
	function r(m, h) {
		for (m = new Map(); h !== null; )
			h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling)
		return m
	}
	function i(m, h) {
		return (m = ti(m, h)), (m.index = 0), (m.sibling = null), m
	}
	function o(m, h, y) {
		return (
			(m.index = y),
			t
				? ((y = m.alternate),
				  y !== null
						? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
						: ((m.flags |= 2), h))
				: ((m.flags |= 1048576), h)
		)
	}
	function l(m) {
		return t && m.alternate === null && (m.flags |= 2), m
	}
	function s(m, h, y, _) {
		return h === null || h.tag !== 6
			? ((h = zc(y, m.mode, _)), (h.return = m), h)
			: ((h = i(h, y)), (h.return = m), h)
	}
	function a(m, h, y, _) {
		var S = y.type
		return S === co
			? c(m, h, y.props.children, _, y.key)
			: h !== null &&
			  (h.elementType === S ||
					(typeof S == 'object' &&
						S !== null &&
						S.$$typeof === Ar &&
						Bd(S) === h.type))
			? ((_ = i(h, y.props)), (_.ref = gl(m, h, y)), (_.return = m), _)
			: ((_ = Sa(y.type, y.key, y.props, null, m.mode, _)),
			  (_.ref = gl(m, h, y)),
			  (_.return = m),
			  _)
	}
	function u(m, h, y, _) {
		return h === null ||
			h.tag !== 4 ||
			h.stateNode.containerInfo !== y.containerInfo ||
			h.stateNode.implementation !== y.implementation
			? ((h = Pc(y, m.mode, _)), (h.return = m), h)
			: ((h = i(h, y.children || [])), (h.return = m), h)
	}
	function c(m, h, y, _, S) {
		return h === null || h.tag !== 7
			? ((h = Li(y, m.mode, _, S)), (h.return = m), h)
			: ((h = i(h, y)), (h.return = m), h)
	}
	function d(m, h, y) {
		if ((typeof h == 'string' && h !== '') || typeof h == 'number')
			return (h = zc('' + h, m.mode, y)), (h.return = m), h
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case As:
					return (
						(y = Sa(h.type, h.key, h.props, null, m.mode, y)),
						(y.ref = gl(m, null, h)),
						(y.return = m),
						y
					)
				case uo:
					return (h = Pc(h, m.mode, y)), (h.return = m), h
				case Ar:
					var _ = h._init
					return d(m, _(h._payload), y)
			}
			if (Sl(h) || cl(h)) return (h = Li(h, m.mode, y, null)), (h.return = m), h
			qs(m, h)
		}
		return null
	}
	function f(m, h, y, _) {
		var S = h !== null ? h.key : null
		if ((typeof y == 'string' && y !== '') || typeof y == 'number')
			return S !== null ? null : s(m, h, '' + y, _)
		if (typeof y == 'object' && y !== null) {
			switch (y.$$typeof) {
				case As:
					return y.key === S ? a(m, h, y, _) : null
				case uo:
					return y.key === S ? u(m, h, y, _) : null
				case Ar:
					return (S = y._init), f(m, h, S(y._payload), _)
			}
			if (Sl(y) || cl(y)) return S !== null ? null : c(m, h, y, _, null)
			qs(m, y)
		}
		return null
	}
	function p(m, h, y, _, S) {
		if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
			return (m = m.get(y) || null), s(h, m, '' + _, S)
		if (typeof _ == 'object' && _ !== null) {
			switch (_.$$typeof) {
				case As:
					return (m = m.get(_.key === null ? y : _.key) || null), a(h, m, _, S)
				case uo:
					return (m = m.get(_.key === null ? y : _.key) || null), u(h, m, _, S)
				case Ar:
					var z = _._init
					return p(m, h, y, z(_._payload), S)
			}
			if (Sl(_) || cl(_)) return (m = m.get(y) || null), c(h, m, _, S, null)
			qs(h, _)
		}
		return null
	}
	function v(m, h, y, _) {
		for (
			var S = null, z = null, C = h, P = (h = 0), R = null;
			C !== null && P < y.length;
			P++
		) {
			C.index > P ? ((R = C), (C = null)) : (R = C.sibling)
			var M = f(m, C, y[P], _)
			if (M === null) {
				C === null && (C = R)
				break
			}
			t && C && M.alternate === null && e(m, C),
				(h = o(M, h, P)),
				z === null ? (S = M) : (z.sibling = M),
				(z = M),
				(C = R)
		}
		if (P === y.length) return n(m, C), je && Si(m, P), S
		if (C === null) {
			for (; P < y.length; P++)
				(C = d(m, y[P], _)),
					C !== null &&
						((h = o(C, h, P)), z === null ? (S = C) : (z.sibling = C), (z = C))
			return je && Si(m, P), S
		}
		for (C = r(m, C); P < y.length; P++)
			(R = p(C, m, P, y[P], _)),
				R !== null &&
					(t && R.alternate !== null && C.delete(R.key === null ? P : R.key),
					(h = o(R, h, P)),
					z === null ? (S = R) : (z.sibling = R),
					(z = R))
		return (
			t &&
				C.forEach(function (F) {
					return e(m, F)
				}),
			je && Si(m, P),
			S
		)
	}
	function g(m, h, y, _) {
		var S = cl(y)
		if (typeof S != 'function') throw Error(L(150))
		if (((y = S.call(y)), y == null)) throw Error(L(151))
		for (
			var z = (S = null), C = h, P = (h = 0), R = null, M = y.next();
			C !== null && !M.done;
			P++, M = y.next()
		) {
			C.index > P ? ((R = C), (C = null)) : (R = C.sibling)
			var F = f(m, C, M.value, _)
			if (F === null) {
				C === null && (C = R)
				break
			}
			t && C && F.alternate === null && e(m, C),
				(h = o(F, h, P)),
				z === null ? (S = F) : (z.sibling = F),
				(z = F),
				(C = R)
		}
		if (M.done) return n(m, C), je && Si(m, P), S
		if (C === null) {
			for (; !M.done; P++, M = y.next())
				(M = d(m, M.value, _)),
					M !== null &&
						((h = o(M, h, P)), z === null ? (S = M) : (z.sibling = M), (z = M))
			return je && Si(m, P), S
		}
		for (C = r(m, C); !M.done; P++, M = y.next())
			(M = p(C, m, P, M.value, _)),
				M !== null &&
					(t && M.alternate !== null && C.delete(M.key === null ? P : M.key),
					(h = o(M, h, P)),
					z === null ? (S = M) : (z.sibling = M),
					(z = M))
		return (
			t &&
				C.forEach(function (b) {
					return e(m, b)
				}),
			je && Si(m, P),
			S
		)
	}
	function w(m, h, y, _) {
		if (
			(typeof y == 'object' &&
				y !== null &&
				y.type === co &&
				y.key === null &&
				(y = y.props.children),
			typeof y == 'object' && y !== null)
		) {
			switch (y.$$typeof) {
				case As:
					e: {
						for (var S = y.key, z = h; z !== null; ) {
							if (z.key === S) {
								if (((S = y.type), S === co)) {
									if (z.tag === 7) {
										n(m, z.sibling),
											(h = i(z, y.props.children)),
											(h.return = m),
											(m = h)
										break e
									}
								} else if (
									z.elementType === S ||
									(typeof S == 'object' &&
										S !== null &&
										S.$$typeof === Ar &&
										Bd(S) === z.type)
								) {
									n(m, z.sibling),
										(h = i(z, y.props)),
										(h.ref = gl(m, z, y)),
										(h.return = m),
										(m = h)
									break e
								}
								n(m, z)
								break
							} else e(m, z)
							z = z.sibling
						}
						y.type === co
							? ((h = Li(y.props.children, m.mode, _, y.key)),
							  (h.return = m),
							  (m = h))
							: ((_ = Sa(y.type, y.key, y.props, null, m.mode, _)),
							  (_.ref = gl(m, h, y)),
							  (_.return = m),
							  (m = _))
					}
					return l(m)
				case uo:
					e: {
						for (z = y.key; h !== null; ) {
							if (h.key === z)
								if (
									h.tag === 4 &&
									h.stateNode.containerInfo === y.containerInfo &&
									h.stateNode.implementation === y.implementation
								) {
									n(m, h.sibling),
										(h = i(h, y.children || [])),
										(h.return = m),
										(m = h)
									break e
								} else {
									n(m, h)
									break
								}
							else e(m, h)
							h = h.sibling
						}
						;(h = Pc(y, m.mode, _)), (h.return = m), (m = h)
					}
					return l(m)
				case Ar:
					return (z = y._init), w(m, h, z(y._payload), _)
			}
			if (Sl(y)) return v(m, h, y, _)
			if (cl(y)) return g(m, h, y, _)
			qs(m, y)
		}
		return (typeof y == 'string' && y !== '') || typeof y == 'number'
			? ((y = '' + y),
			  h !== null && h.tag === 6
					? (n(m, h.sibling), (h = i(h, y)), (h.return = m), (m = h))
					: (n(m, h), (h = zc(y, m.mode, _)), (h.return = m), (m = h)),
			  l(m))
			: n(m, h)
	}
	return w
}
var Bo = P2(!0),
	T2 = P2(!1),
	Ps = {},
	sr = hi(Ps),
	as = hi(Ps),
	us = hi(Ps)
function Ri(t) {
	if (t === Ps) throw Error(L(174))
	return t
}
function Q1(t, e) {
	switch ((Ne(us, e), Ne(as, t), Ne(sr, Ps), (t = e.nodeType), t)) {
		case 9:
		case 11:
			e = (e = e.documentElement) ? e.namespaceURI : lf(null, '')
			break
		default:
			;(t = t === 8 ? e.parentNode : e),
				(e = t.namespaceURI || null),
				(t = t.tagName),
				(e = lf(e, t))
	}
	Ie(sr), Ne(sr, e)
}
function Uo() {
	Ie(sr), Ie(as), Ie(us)
}
function R2(t) {
	Ri(us.current)
	var e = Ri(sr.current),
		n = lf(e, t.type)
	e !== n && (Ne(as, t), Ne(sr, n))
}
function K1(t) {
	as.current === t && (Ie(sr), Ie(as))
}
var $e = hi(0)
function Ka(t) {
	for (var e = t; e !== null; ) {
		if (e.tag === 13) {
			var n = e.memoizedState
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return e
		} else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
			if ((e.flags & 128) !== 0) return e
		} else if (e.child !== null) {
			;(e.child.return = e), (e = e.child)
			continue
		}
		if (e === t) break
		for (; e.sibling === null; ) {
			if (e.return === null || e.return === t) return null
			e = e.return
		}
		;(e.sibling.return = e.return), (e = e.sibling)
	}
	return null
}
var wc = []
function Z1() {
	for (var t = 0; t < wc.length; t++) wc[t]._workInProgressVersionPrimary = null
	wc.length = 0
}
var va = Or.ReactCurrentDispatcher,
	xc = Or.ReactCurrentBatchConfig,
	Ui = 0,
	Ue = null,
	at = null,
	gt = null,
	Za = !1,
	Al = !1,
	cs = 0,
	h5 = 0
function zt() {
	throw Error(L(321))
}
function J1(t, e) {
	if (e === null) return !1
	for (var n = 0; n < e.length && n < t.length; n++)
		if (!Yn(t[n], e[n])) return !1
	return !0
}
function e0(t, e, n, r, i, o) {
	if (
		((Ui = o),
		(Ue = e),
		(e.memoizedState = null),
		(e.updateQueue = null),
		(e.lanes = 0),
		(va.current = t === null || t.memoizedState === null ? y5 : _5),
		(t = n(r, i)),
		Al)
	) {
		o = 0
		do {
			if (((Al = !1), (cs = 0), 25 <= o)) throw Error(L(301))
			;(o += 1),
				(gt = at = null),
				(e.updateQueue = null),
				(va.current = w5),
				(t = n(r, i))
		} while (Al)
	}
	if (
		((va.current = Ja),
		(e = at !== null && at.next !== null),
		(Ui = 0),
		(gt = at = Ue = null),
		(Za = !1),
		e)
	)
		throw Error(L(300))
	return t
}
function t0() {
	var t = cs !== 0
	return (cs = 0), t
}
function Jn() {
	var t = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	}
	return gt === null ? (Ue.memoizedState = gt = t) : (gt = gt.next = t), gt
}
function Ln() {
	if (at === null) {
		var t = Ue.alternate
		t = t !== null ? t.memoizedState : null
	} else t = at.next
	var e = gt === null ? Ue.memoizedState : gt.next
	if (e !== null) (gt = e), (at = t)
	else {
		if (t === null) throw Error(L(310))
		;(at = t),
			(t = {
				memoizedState: at.memoizedState,
				baseState: at.baseState,
				baseQueue: at.baseQueue,
				queue: at.queue,
				next: null,
			}),
			gt === null ? (Ue.memoizedState = gt = t) : (gt = gt.next = t)
	}
	return gt
}
function fs(t, e) {
	return typeof e == 'function' ? e(t) : e
}
function Sc(t) {
	var e = Ln(),
		n = e.queue
	if (n === null) throw Error(L(311))
	n.lastRenderedReducer = t
	var r = at,
		i = r.baseQueue,
		o = n.pending
	if (o !== null) {
		if (i !== null) {
			var l = i.next
			;(i.next = o.next), (o.next = l)
		}
		;(r.baseQueue = i = o), (n.pending = null)
	}
	if (i !== null) {
		;(o = i.next), (r = r.baseState)
		var s = (l = null),
			a = null,
			u = o
		do {
			var c = u.lane
			if ((Ui & c) === c)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : t(r, u.action))
			else {
				var d = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				}
				a === null ? ((s = a = d), (l = r)) : (a = a.next = d),
					(Ue.lanes |= c),
					(Vi |= c)
			}
			u = u.next
		} while (u !== null && u !== o)
		a === null ? (l = r) : (a.next = s),
			Yn(r, e.memoizedState) || (Xt = !0),
			(e.memoizedState = r),
			(e.baseState = l),
			(e.baseQueue = a),
			(n.lastRenderedState = r)
	}
	if (((t = n.interleaved), t !== null)) {
		i = t
		do (o = i.lane), (Ue.lanes |= o), (Vi |= o), (i = i.next)
		while (i !== t)
	} else i === null && (n.lanes = 0)
	return [e.memoizedState, n.dispatch]
}
function kc(t) {
	var e = Ln(),
		n = e.queue
	if (n === null) throw Error(L(311))
	n.lastRenderedReducer = t
	var r = n.dispatch,
		i = n.pending,
		o = e.memoizedState
	if (i !== null) {
		n.pending = null
		var l = (i = i.next)
		do (o = t(o, l.action)), (l = l.next)
		while (l !== i)
		Yn(o, e.memoizedState) || (Xt = !0),
			(e.memoizedState = o),
			e.baseQueue === null && (e.baseState = o),
			(n.lastRenderedState = o)
	}
	return [o, r]
}
function O2() {}
function M2(t, e) {
	var n = Ue,
		r = Ln(),
		i = e(),
		o = !Yn(r.memoizedState, i)
	if (
		(o && ((r.memoizedState = i), (Xt = !0)),
		(r = r.queue),
		n0(D2.bind(null, n, r, t), [t]),
		r.getSnapshot !== e || o || (gt !== null && gt.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			ds(9, L2.bind(null, n, r, i, e), void 0, null),
			mt === null)
		)
			throw Error(L(349))
		;(Ui & 30) !== 0 || N2(n, e, i)
	}
	return i
}
function N2(t, e, n) {
	;(t.flags |= 16384),
		(t = { getSnapshot: e, value: n }),
		(e = Ue.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
			  (Ue.updateQueue = e),
			  (e.stores = [t]))
			: ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t))
}
function L2(t, e, n, r) {
	;(e.value = n), (e.getSnapshot = r), A2(e) && I2(t)
}
function D2(t, e, n) {
	return n(function () {
		A2(e) && I2(t)
	})
}
function A2(t) {
	var e = t.getSnapshot
	t = t.value
	try {
		var n = e()
		return !Yn(t, n)
	} catch {
		return !0
	}
}
function I2(t) {
	var e = zr(t, 1)
	e !== null && Wn(e, t, 1, -1)
}
function Ud(t) {
	var e = Jn()
	return (
		typeof t == 'function' && (t = t()),
		(e.memoizedState = e.baseState = t),
		(t = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: fs,
			lastRenderedState: t,
		}),
		(e.queue = t),
		(t = t.dispatch = v5.bind(null, Ue, t)),
		[e.memoizedState, t]
	)
}
function ds(t, e, n, r) {
	return (
		(t = { tag: t, create: e, destroy: n, deps: r, next: null }),
		(e = Ue.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
			  (Ue.updateQueue = e),
			  (e.lastEffect = t.next = t))
			: ((n = e.lastEffect),
			  n === null
					? (e.lastEffect = t.next = t)
					: ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
		t
	)
}
function j2() {
	return Ln().memoizedState
}
function ya(t, e, n, r) {
	var i = Jn()
	;(Ue.flags |= t),
		(i.memoizedState = ds(1 | e, n, void 0, r === void 0 ? null : r))
}
function Tu(t, e, n, r) {
	var i = Ln()
	r = r === void 0 ? null : r
	var o = void 0
	if (at !== null) {
		var l = at.memoizedState
		if (((o = l.destroy), r !== null && J1(r, l.deps))) {
			i.memoizedState = ds(e, n, o, r)
			return
		}
	}
	;(Ue.flags |= t), (i.memoizedState = ds(1 | e, n, o, r))
}
function Vd(t, e) {
	return ya(8390656, 8, t, e)
}
function n0(t, e) {
	return Tu(2048, 8, t, e)
}
function F2(t, e) {
	return Tu(4, 2, t, e)
}
function $2(t, e) {
	return Tu(4, 4, t, e)
}
function b2(t, e) {
	if (typeof e == 'function')
		return (
			(t = t()),
			e(t),
			function () {
				e(null)
			}
		)
	if (e != null)
		return (
			(t = t()),
			(e.current = t),
			function () {
				e.current = null
			}
		)
}
function B2(t, e, n) {
	return (
		(n = n != null ? n.concat([t]) : null), Tu(4, 4, b2.bind(null, e, t), n)
	)
}
function r0() {}
function U2(t, e) {
	var n = Ln()
	e = e === void 0 ? null : e
	var r = n.memoizedState
	return r !== null && e !== null && J1(e, r[1])
		? r[0]
		: ((n.memoizedState = [t, e]), t)
}
function V2(t, e) {
	var n = Ln()
	e = e === void 0 ? null : e
	var r = n.memoizedState
	return r !== null && e !== null && J1(e, r[1])
		? r[0]
		: ((t = t()), (n.memoizedState = [t, e]), t)
}
function H2(t, e, n) {
	return (Ui & 21) === 0
		? (t.baseState && ((t.baseState = !1), (Xt = !0)), (t.memoizedState = n))
		: (Yn(n, e) || ((n = Yh()), (Ue.lanes |= n), (Vi |= n), (t.baseState = !0)),
		  e)
}
function g5(t, e) {
	var n = Se
	;(Se = n !== 0 && 4 > n ? n : 4), t(!0)
	var r = xc.transition
	xc.transition = {}
	try {
		t(!1), e()
	} finally {
		;(Se = n), (xc.transition = r)
	}
}
function W2() {
	return Ln().memoizedState
}
function m5(t, e, n) {
	var r = ei(t)
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		q2(t))
	)
		Y2(e, n)
	else if (((n = k2(t, e, n, r)), n !== null)) {
		var i = Bt()
		Wn(n, t, r, i), X2(n, e, r)
	}
}
function v5(t, e, n) {
	var r = ei(t),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
	if (q2(t)) Y2(e, i)
	else {
		var o = t.alternate
		if (
			t.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = e.lastRenderedReducer), o !== null)
		)
			try {
				var l = e.lastRenderedState,
					s = o(l, n)
				if (((i.hasEagerState = !0), (i.eagerState = s), Yn(s, l))) {
					var a = e.interleaved
					a === null
						? ((i.next = i), X1(e))
						: ((i.next = a.next), (a.next = i)),
						(e.interleaved = i)
					return
				}
			} catch {
			} finally {
			}
		;(n = k2(t, e, i, r)),
			n !== null && ((i = Bt()), Wn(n, t, r, i), X2(n, e, r))
	}
}
function q2(t) {
	var e = t.alternate
	return t === Ue || (e !== null && e === Ue)
}
function Y2(t, e) {
	Al = Za = !0
	var n = t.pending
	n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e)
}
function X2(t, e, n) {
	if ((n & 4194240) !== 0) {
		var r = e.lanes
		;(r &= t.pendingLanes), (n |= r), (e.lanes = n), D1(t, n)
	}
}
var Ja = {
		readContext: Nn,
		useCallback: zt,
		useContext: zt,
		useEffect: zt,
		useImperativeHandle: zt,
		useInsertionEffect: zt,
		useLayoutEffect: zt,
		useMemo: zt,
		useReducer: zt,
		useRef: zt,
		useState: zt,
		useDebugValue: zt,
		useDeferredValue: zt,
		useTransition: zt,
		useMutableSource: zt,
		useSyncExternalStore: zt,
		useId: zt,
		unstable_isNewReconciler: !1,
	},
	y5 = {
		readContext: Nn,
		useCallback: function (t, e) {
			return (Jn().memoizedState = [t, e === void 0 ? null : e]), t
		},
		useContext: Nn,
		useEffect: Vd,
		useImperativeHandle: function (t, e, n) {
			return (
				(n = n != null ? n.concat([t]) : null),
				ya(4194308, 4, b2.bind(null, e, t), n)
			)
		},
		useLayoutEffect: function (t, e) {
			return ya(4194308, 4, t, e)
		},
		useInsertionEffect: function (t, e) {
			return ya(4, 2, t, e)
		},
		useMemo: function (t, e) {
			var n = Jn()
			return (
				(e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
			)
		},
		useReducer: function (t, e, n) {
			var r = Jn()
			return (
				(e = n !== void 0 ? n(e) : e),
				(r.memoizedState = r.baseState = e),
				(t = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: t,
					lastRenderedState: e,
				}),
				(r.queue = t),
				(t = t.dispatch = m5.bind(null, Ue, t)),
				[r.memoizedState, t]
			)
		},
		useRef: function (t) {
			var e = Jn()
			return (t = { current: t }), (e.memoizedState = t)
		},
		useState: Ud,
		useDebugValue: r0,
		useDeferredValue: function (t) {
			return (Jn().memoizedState = t)
		},
		useTransition: function () {
			var t = Ud(!1),
				e = t[0]
			return (t = g5.bind(null, t[1])), (Jn().memoizedState = t), [e, t]
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (t, e, n) {
			var r = Ue,
				i = Jn()
			if (je) {
				if (n === void 0) throw Error(L(407))
				n = n()
			} else {
				if (((n = e()), mt === null)) throw Error(L(349))
				;(Ui & 30) !== 0 || N2(r, e, n)
			}
			i.memoizedState = n
			var o = { value: n, getSnapshot: e }
			return (
				(i.queue = o),
				Vd(D2.bind(null, r, o, t), [t]),
				(r.flags |= 2048),
				ds(9, L2.bind(null, r, o, n, e), void 0, null),
				n
			)
		},
		useId: function () {
			var t = Jn(),
				e = mt.identifierPrefix
			if (je) {
				var n = _r,
					r = yr
				;(n = (r & ~(1 << (32 - Hn(r) - 1))).toString(32) + n),
					(e = ':' + e + 'R' + n),
					(n = cs++),
					0 < n && (e += 'H' + n.toString(32)),
					(e += ':')
			} else (n = h5++), (e = ':' + e + 'r' + n.toString(32) + ':')
			return (t.memoizedState = e)
		},
		unstable_isNewReconciler: !1,
	},
	_5 = {
		readContext: Nn,
		useCallback: U2,
		useContext: Nn,
		useEffect: n0,
		useImperativeHandle: B2,
		useInsertionEffect: F2,
		useLayoutEffect: $2,
		useMemo: V2,
		useReducer: Sc,
		useRef: j2,
		useState: function () {
			return Sc(fs)
		},
		useDebugValue: r0,
		useDeferredValue: function (t) {
			var e = Ln()
			return H2(e, at.memoizedState, t)
		},
		useTransition: function () {
			var t = Sc(fs)[0],
				e = Ln().memoizedState
			return [t, e]
		},
		useMutableSource: O2,
		useSyncExternalStore: M2,
		useId: W2,
		unstable_isNewReconciler: !1,
	},
	w5 = {
		readContext: Nn,
		useCallback: U2,
		useContext: Nn,
		useEffect: n0,
		useImperativeHandle: B2,
		useInsertionEffect: F2,
		useLayoutEffect: $2,
		useMemo: V2,
		useReducer: kc,
		useRef: j2,
		useState: function () {
			return kc(fs)
		},
		useDebugValue: r0,
		useDeferredValue: function (t) {
			var e = Ln()
			return at === null ? (e.memoizedState = t) : H2(e, at.memoizedState, t)
		},
		useTransition: function () {
			var t = kc(fs)[0],
				e = Ln().memoizedState
			return [t, e]
		},
		useMutableSource: O2,
		useSyncExternalStore: M2,
		useId: W2,
		unstable_isNewReconciler: !1,
	}
function Vo(t, e) {
	try {
		var n = '',
			r = e
		do (n += X3(r)), (r = r.return)
		while (r)
		var i = n
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack
	}
	return { value: t, source: e, stack: i, digest: null }
}
function Cc(t, e, n) {
	return {
		value: t,
		source: null,
		stack: n != null ? n : null,
		digest: e != null ? e : null,
	}
}
function Rf(t, e) {
	try {
		console.error(e.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var x5 = typeof WeakMap == 'function' ? WeakMap : Map
function G2(t, e, n) {
	;(n = Sr(-1, n)), (n.tag = 3), (n.payload = { element: null })
	var r = e.value
	return (
		(n.callback = function () {
			tu || ((tu = !0), ($f = r)), Rf(t, e)
		}),
		n
	)
}
function Q2(t, e, n) {
	;(n = Sr(-1, n)), (n.tag = 3)
	var r = t.type.getDerivedStateFromError
	if (typeof r == 'function') {
		var i = e.value
		;(n.payload = function () {
			return r(i)
		}),
			(n.callback = function () {
				Rf(t, e)
			})
	}
	var o = t.stateNode
	return (
		o !== null &&
			typeof o.componentDidCatch == 'function' &&
			(n.callback = function () {
				Rf(t, e),
					typeof r != 'function' &&
						(Jr === null ? (Jr = new Set([this])) : Jr.add(this))
				var l = e.stack
				this.componentDidCatch(e.value, { componentStack: l !== null ? l : '' })
			}),
		n
	)
}
function Hd(t, e, n) {
	var r = t.pingCache
	if (r === null) {
		r = t.pingCache = new x5()
		var i = new Set()
		r.set(e, i)
	} else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i))
	i.has(n) || (i.add(n), (t = A5.bind(null, t, e, n)), e.then(t, t))
}
function Wd(t) {
	do {
		var e
		if (
			((e = t.tag === 13) &&
				((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
			e)
		)
			return t
		t = t.return
	} while (t !== null)
	return null
}
function qd(t, e, n, r, i) {
	return (t.mode & 1) === 0
		? (t === e
				? (t.flags |= 65536)
				: ((t.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((e = Sr(-1, 1)), (e.tag = 2), Zr(n, e, 1))),
				  (n.lanes |= 1)),
		  t)
		: ((t.flags |= 65536), (t.lanes = i), t)
}
var S5 = Or.ReactCurrentOwner,
	Xt = !1
function It(t, e, n, r) {
	e.child = t === null ? T2(e, null, n, r) : Bo(e, t.child, n, r)
}
function Yd(t, e, n, r, i) {
	n = n.render
	var o = e.ref
	return (
		Mo(e, i),
		(r = e0(t, e, n, r, o, i)),
		(n = t0()),
		t !== null && !Xt
			? ((e.updateQueue = t.updateQueue),
			  (e.flags &= -2053),
			  (t.lanes &= ~i),
			  Pr(t, e, i))
			: (je && n && U1(e), (e.flags |= 1), It(t, e, r, i), e.child)
	)
}
function Xd(t, e, n, r, i) {
	if (t === null) {
		var o = n.type
		return typeof o == 'function' &&
			!f0(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((e.tag = 15), (e.type = o), K2(t, e, o, r, i))
			: ((t = Sa(n.type, null, r, e, e.mode, i)),
			  (t.ref = e.ref),
			  (t.return = e),
			  (e.child = t))
	}
	if (((o = t.child), (t.lanes & i) === 0)) {
		var l = o.memoizedProps
		if (
			((n = n.compare), (n = n !== null ? n : is), n(l, r) && t.ref === e.ref)
		)
			return Pr(t, e, i)
	}
	return (
		(e.flags |= 1),
		(t = ti(o, r)),
		(t.ref = e.ref),
		(t.return = e),
		(e.child = t)
	)
}
function K2(t, e, n, r, i) {
	if (t !== null) {
		var o = t.memoizedProps
		if (is(o, r) && t.ref === e.ref)
			if (((Xt = !1), (e.pendingProps = r = o), (t.lanes & i) !== 0))
				(t.flags & 131072) !== 0 && (Xt = !0)
			else return (e.lanes = t.lanes), Pr(t, e, i)
	}
	return Of(t, e, n, r, i)
}
function Z2(t, e, n) {
	var r = e.pendingProps,
		i = r.children,
		o = t !== null ? t.memoizedState : null
	if (r.mode === 'hidden')
		if ((e.mode & 1) === 0)
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				Ne(xo, sn),
				(sn |= n)
		else {
			if ((n & 1073741824) === 0)
				return (
					(t = o !== null ? o.baseLanes | n : n),
					(e.lanes = e.childLanes = 1073741824),
					(e.memoizedState = {
						baseLanes: t,
						cachePool: null,
						transitions: null,
					}),
					(e.updateQueue = null),
					Ne(xo, sn),
					(sn |= t),
					null
				)
			;(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				Ne(xo, sn),
				(sn |= r)
		}
	else
		o !== null ? ((r = o.baseLanes | n), (e.memoizedState = null)) : (r = n),
			Ne(xo, sn),
			(sn |= r)
	return It(t, e, i, n), e.child
}
function J2(t, e) {
	var n = e.ref
	;((t === null && n !== null) || (t !== null && t.ref !== n)) &&
		((e.flags |= 512), (e.flags |= 2097152))
}
function Of(t, e, n, r, i) {
	var o = Qt(n) ? bi : Lt.current
	return (
		(o = $o(e, o)),
		Mo(e, i),
		(n = e0(t, e, n, r, o, i)),
		(r = t0()),
		t !== null && !Xt
			? ((e.updateQueue = t.updateQueue),
			  (e.flags &= -2053),
			  (t.lanes &= ~i),
			  Pr(t, e, i))
			: (je && r && U1(e), (e.flags |= 1), It(t, e, n, i), e.child)
	)
}
function Gd(t, e, n, r, i) {
	if (Qt(n)) {
		var o = !0
		Wa(e)
	} else o = !1
	if ((Mo(e, i), e.stateNode === null))
		_a(t, e), z2(e, n, r), Tf(e, n, r, i), (r = !0)
	else if (t === null) {
		var l = e.stateNode,
			s = e.memoizedProps
		l.props = s
		var a = l.context,
			u = n.contextType
		typeof u == 'object' && u !== null
			? (u = Nn(u))
			: ((u = Qt(n) ? bi : Lt.current), (u = $o(e, u)))
		var c = n.getDerivedStateFromProps,
			d =
				typeof c == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
		d ||
			(typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof l.componentWillReceiveProps != 'function') ||
			((s !== r || a !== u) && bd(e, l, r, u)),
			(Ir = !1)
		var f = e.memoizedState
		;(l.state = f),
			Qa(e, r, l, i),
			(a = e.memoizedState),
			s !== r || f !== a || Gt.current || Ir
				? (typeof c == 'function' && (Pf(e, n, c, r), (a = e.memoizedState)),
				  (s = Ir || $d(e, n, s, r, f, a, u))
						? (d ||
								(typeof l.UNSAFE_componentWillMount != 'function' &&
									typeof l.componentWillMount != 'function') ||
								(typeof l.componentWillMount == 'function' &&
									l.componentWillMount(),
								typeof l.UNSAFE_componentWillMount == 'function' &&
									l.UNSAFE_componentWillMount()),
						  typeof l.componentDidMount == 'function' && (e.flags |= 4194308))
						: (typeof l.componentDidMount == 'function' && (e.flags |= 4194308),
						  (e.memoizedProps = r),
						  (e.memoizedState = a)),
				  (l.props = r),
				  (l.state = a),
				  (l.context = u),
				  (r = s))
				: (typeof l.componentDidMount == 'function' && (e.flags |= 4194308),
				  (r = !1))
	} else {
		;(l = e.stateNode),
			C2(t, e),
			(s = e.memoizedProps),
			(u = e.type === e.elementType ? s : $n(e.type, s)),
			(l.props = u),
			(d = e.pendingProps),
			(f = l.context),
			(a = n.contextType),
			typeof a == 'object' && a !== null
				? (a = Nn(a))
				: ((a = Qt(n) ? bi : Lt.current), (a = $o(e, a)))
		var p = n.getDerivedStateFromProps
		;(c =
			typeof p == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function') ||
			(typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof l.componentWillReceiveProps != 'function') ||
			((s !== d || f !== a) && bd(e, l, r, a)),
			(Ir = !1),
			(f = e.memoizedState),
			(l.state = f),
			Qa(e, r, l, i)
		var v = e.memoizedState
		s !== d || f !== v || Gt.current || Ir
			? (typeof p == 'function' && (Pf(e, n, p, r), (v = e.memoizedState)),
			  (u = Ir || $d(e, n, u, r, f, v, a) || !1)
					? (c ||
							(typeof l.UNSAFE_componentWillUpdate != 'function' &&
								typeof l.componentWillUpdate != 'function') ||
							(typeof l.componentWillUpdate == 'function' &&
								l.componentWillUpdate(r, v, a),
							typeof l.UNSAFE_componentWillUpdate == 'function' &&
								l.UNSAFE_componentWillUpdate(r, v, a)),
					  typeof l.componentDidUpdate == 'function' && (e.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
					: (typeof l.componentDidUpdate != 'function' ||
							(s === t.memoizedProps && f === t.memoizedState) ||
							(e.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate != 'function' ||
							(s === t.memoizedProps && f === t.memoizedState) ||
							(e.flags |= 1024),
					  (e.memoizedProps = r),
					  (e.memoizedState = v)),
			  (l.props = r),
			  (l.state = v),
			  (l.context = a),
			  (r = u))
			: (typeof l.componentDidUpdate != 'function' ||
					(s === t.memoizedProps && f === t.memoizedState) ||
					(e.flags |= 4),
			  typeof l.getSnapshotBeforeUpdate != 'function' ||
					(s === t.memoizedProps && f === t.memoizedState) ||
					(e.flags |= 1024),
			  (r = !1))
	}
	return Mf(t, e, n, r, o, i)
}
function Mf(t, e, n, r, i, o) {
	J2(t, e)
	var l = (e.flags & 128) !== 0
	if (!r && !l) return i && Dd(e, n, !1), Pr(t, e, o)
	;(r = e.stateNode), (S5.current = e)
	var s =
		l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
	return (
		(e.flags |= 1),
		t !== null && l
			? ((e.child = Bo(e, t.child, null, o)), (e.child = Bo(e, null, s, o)))
			: It(t, e, s, o),
		(e.memoizedState = r.state),
		i && Dd(e, n, !0),
		e.child
	)
}
function eg(t) {
	var e = t.stateNode
	e.pendingContext
		? Ld(t, e.pendingContext, e.pendingContext !== e.context)
		: e.context && Ld(t, e.context, !1),
		Q1(t, e.containerInfo)
}
function Qd(t, e, n, r, i) {
	return bo(), H1(i), (e.flags |= 256), It(t, e, n, r), e.child
}
var Nf = { dehydrated: null, treeContext: null, retryLane: 0 }
function Lf(t) {
	return { baseLanes: t, cachePool: null, transitions: null }
}
function tg(t, e, n) {
	var r = e.pendingProps,
		i = $e.current,
		o = !1,
		l = (e.flags & 128) !== 0,
		s
	if (
		((s = l) ||
			(s = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
		s
			? ((o = !0), (e.flags &= -129))
			: (t === null || t.memoizedState !== null) && (i |= 1),
		Ne($e, i & 1),
		t === null)
	)
		return (
			Ef(e),
			(t = e.memoizedState),
			t !== null && ((t = t.dehydrated), t !== null)
				? ((e.mode & 1) === 0
						? (e.lanes = 1)
						: t.data === '$!'
						? (e.lanes = 8)
						: (e.lanes = 1073741824),
				  null)
				: ((l = r.children),
				  (t = r.fallback),
				  o
						? ((r = e.mode),
						  (o = e.child),
						  (l = { mode: 'hidden', children: l }),
						  (r & 1) === 0 && o !== null
								? ((o.childLanes = 0), (o.pendingProps = l))
								: (o = Mu(l, r, 0, null)),
						  (t = Li(t, r, n, null)),
						  (o.return = e),
						  (t.return = e),
						  (o.sibling = t),
						  (e.child = o),
						  (e.child.memoizedState = Lf(n)),
						  (e.memoizedState = Nf),
						  t)
						: i0(e, l))
		)
	if (((i = t.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
		return k5(t, e, l, r, s, i, n)
	if (o) {
		;(o = r.fallback), (l = e.mode), (i = t.child), (s = i.sibling)
		var a = { mode: 'hidden', children: r.children }
		return (
			(l & 1) === 0 && e.child !== i
				? ((r = e.child),
				  (r.childLanes = 0),
				  (r.pendingProps = a),
				  (e.deletions = null))
				: ((r = ti(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			s !== null ? (o = ti(s, o)) : ((o = Li(o, l, n, null)), (o.flags |= 2)),
			(o.return = e),
			(r.return = e),
			(r.sibling = o),
			(e.child = r),
			(r = o),
			(o = e.child),
			(l = t.child.memoizedState),
			(l =
				l === null
					? Lf(n)
					: {
							baseLanes: l.baseLanes | n,
							cachePool: null,
							transitions: l.transitions,
					  }),
			(o.memoizedState = l),
			(o.childLanes = t.childLanes & ~n),
			(e.memoizedState = Nf),
			r
		)
	}
	return (
		(o = t.child),
		(t = o.sibling),
		(r = ti(o, { mode: 'visible', children: r.children })),
		(e.mode & 1) === 0 && (r.lanes = n),
		(r.return = e),
		(r.sibling = null),
		t !== null &&
			((n = e.deletions),
			n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
		(e.child = r),
		(e.memoizedState = null),
		r
	)
}
function i0(t, e) {
	return (
		(e = Mu({ mode: 'visible', children: e }, t.mode, 0, null)),
		(e.return = t),
		(t.child = e)
	)
}
function Ys(t, e, n, r) {
	return (
		r !== null && H1(r),
		Bo(e, t.child, null, n),
		(t = i0(e, e.pendingProps.children)),
		(t.flags |= 2),
		(e.memoizedState = null),
		t
	)
}
function k5(t, e, n, r, i, o, l) {
	if (n)
		return e.flags & 256
			? ((e.flags &= -257), (r = Cc(Error(L(422)))), Ys(t, e, l, r))
			: e.memoizedState !== null
			? ((e.child = t.child), (e.flags |= 128), null)
			: ((o = r.fallback),
			  (i = e.mode),
			  (r = Mu({ mode: 'visible', children: r.children }, i, 0, null)),
			  (o = Li(o, i, l, null)),
			  (o.flags |= 2),
			  (r.return = e),
			  (o.return = e),
			  (r.sibling = o),
			  (e.child = r),
			  (e.mode & 1) !== 0 && Bo(e, t.child, null, l),
			  (e.child.memoizedState = Lf(l)),
			  (e.memoizedState = Nf),
			  o)
	if ((e.mode & 1) === 0) return Ys(t, e, l, null)
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst
		return (r = s), (o = Error(L(419))), (r = Cc(o, r, void 0)), Ys(t, e, l, r)
	}
	if (((s = (l & t.childLanes) !== 0), Xt || s)) {
		if (((r = mt), r !== null)) {
			switch (l & -l) {
				case 4:
					i = 2
					break
				case 16:
					i = 8
					break
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32
					break
				case 536870912:
					i = 268435456
					break
				default:
					i = 0
			}
			;(i = (i & (r.suspendedLanes | l)) !== 0 ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), zr(t, i), Wn(r, t, i, -1))
		}
		return c0(), (r = Cc(Error(L(421)))), Ys(t, e, l, r)
	}
	return i.data === '$?'
		? ((e.flags |= 128),
		  (e.child = t.child),
		  (e = I5.bind(null, t)),
		  (i._reactRetry = e),
		  null)
		: ((t = o.treeContext),
		  (fn = Kr(i.nextSibling)),
		  (dn = e),
		  (je = !0),
		  (Vn = null),
		  t !== null &&
				((kn[Cn++] = yr),
				(kn[Cn++] = _r),
				(kn[Cn++] = Bi),
				(yr = t.id),
				(_r = t.overflow),
				(Bi = e)),
		  (e = i0(e, r.children)),
		  (e.flags |= 4096),
		  e)
}
function Kd(t, e, n) {
	t.lanes |= e
	var r = t.alternate
	r !== null && (r.lanes |= e), zf(t.return, e, n)
}
function Ec(t, e, n, r, i) {
	var o = t.memoizedState
	o === null
		? (t.memoizedState = {
				isBackwards: e,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = e),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i))
}
function ng(t, e, n) {
	var r = e.pendingProps,
		i = r.revealOrder,
		o = r.tail
	if ((It(t, e, r.children, n), (r = $e.current), (r & 2) !== 0))
		(r = (r & 1) | 2), (e.flags |= 128)
	else {
		if (t !== null && (t.flags & 128) !== 0)
			e: for (t = e.child; t !== null; ) {
				if (t.tag === 13) t.memoizedState !== null && Kd(t, n, e)
				else if (t.tag === 19) Kd(t, n, e)
				else if (t.child !== null) {
					;(t.child.return = t), (t = t.child)
					continue
				}
				if (t === e) break e
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) break e
					t = t.return
				}
				;(t.sibling.return = t.return), (t = t.sibling)
			}
		r &= 1
	}
	if ((Ne($e, r), (e.mode & 1) === 0)) e.memoizedState = null
	else
		switch (i) {
			case 'forwards':
				for (n = e.child, i = null; n !== null; )
					(t = n.alternate),
						t !== null && Ka(t) === null && (i = n),
						(n = n.sibling)
				;(n = i),
					n === null
						? ((i = e.child), (e.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Ec(e, !1, i, n, o)
				break
			case 'backwards':
				for (n = null, i = e.child, e.child = null; i !== null; ) {
					if (((t = i.alternate), t !== null && Ka(t) === null)) {
						e.child = i
						break
					}
					;(t = i.sibling), (i.sibling = n), (n = i), (i = t)
				}
				Ec(e, !0, n, null, o)
				break
			case 'together':
				Ec(e, !1, null, null, void 0)
				break
			default:
				e.memoizedState = null
		}
	return e.child
}
function _a(t, e) {
	;(e.mode & 1) === 0 &&
		t !== null &&
		((t.alternate = null), (e.alternate = null), (e.flags |= 2))
}
function Pr(t, e, n) {
	if (
		(t !== null && (e.dependencies = t.dependencies),
		(Vi |= e.lanes),
		(n & e.childLanes) === 0)
	)
		return null
	if (t !== null && e.child !== t.child) throw Error(L(153))
	if (e.child !== null) {
		for (
			t = e.child, n = ti(t, t.pendingProps), e.child = n, n.return = e;
			t.sibling !== null;

		)
			(t = t.sibling), (n = n.sibling = ti(t, t.pendingProps)), (n.return = e)
		n.sibling = null
	}
	return e.child
}
function C5(t, e, n) {
	switch (e.tag) {
		case 3:
			eg(e), bo()
			break
		case 5:
			R2(e)
			break
		case 1:
			Qt(e.type) && Wa(e)
			break
		case 4:
			Q1(e, e.stateNode.containerInfo)
			break
		case 10:
			var r = e.type._context,
				i = e.memoizedProps.value
			Ne(Xa, r._currentValue), (r._currentValue = i)
			break
		case 13:
			if (((r = e.memoizedState), r !== null))
				return r.dehydrated !== null
					? (Ne($e, $e.current & 1), (e.flags |= 128), null)
					: (n & e.child.childLanes) !== 0
					? tg(t, e, n)
					: (Ne($e, $e.current & 1),
					  (t = Pr(t, e, n)),
					  t !== null ? t.sibling : null)
			Ne($e, $e.current & 1)
			break
		case 19:
			if (((r = (n & e.childLanes) !== 0), (t.flags & 128) !== 0)) {
				if (r) return ng(t, e, n)
				e.flags |= 128
			}
			if (
				((i = e.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				Ne($e, $e.current),
				r)
			)
				break
			return null
		case 22:
		case 23:
			return (e.lanes = 0), Z2(t, e, n)
	}
	return Pr(t, e, n)
}
var rg, Df, ig, og
rg = function (t, e) {
	for (var n = e.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode)
		else if (n.tag !== 4 && n.child !== null) {
			;(n.child.return = n), (n = n.child)
			continue
		}
		if (n === e) break
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === e) return
			n = n.return
		}
		;(n.sibling.return = n.return), (n = n.sibling)
	}
}
Df = function () {}
ig = function (t, e, n, r) {
	var i = t.memoizedProps
	if (i !== r) {
		;(t = e.stateNode), Ri(sr.current)
		var o = null
		switch (n) {
			case 'input':
				;(i = tf(t, i)), (r = tf(t, r)), (o = [])
				break
			case 'select':
				;(i = Ve({}, i, { value: void 0 })),
					(r = Ve({}, r, { value: void 0 })),
					(o = [])
				break
			case 'textarea':
				;(i = of(t, i)), (r = of(t, r)), (o = [])
				break
			default:
				typeof i.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(t.onclick = Va)
		}
		sf(n, r)
		var l
		n = null
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === 'style') {
					var s = i[u]
					for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(Kl.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
		for (u in r) {
			var a = r[u]
			if (
				((s = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && a !== s && (a != null || s != null))
			)
				if (u === 'style')
					if (s) {
						for (l in s)
							!s.hasOwnProperty(l) ||
								(a && a.hasOwnProperty(l)) ||
								(n || (n = {}), (n[l] = ''))
						for (l in a)
							a.hasOwnProperty(l) &&
								s[l] !== a[l] &&
								(n || (n = {}), (n[l] = a[l]))
					} else n || (o || (o = []), o.push(u, n)), (n = a)
				else
					u === 'dangerouslySetInnerHTML'
						? ((a = a ? a.__html : void 0),
						  (s = s ? s.__html : void 0),
						  a != null && s !== a && (o = o || []).push(u, a))
						: u === 'children'
						? (typeof a != 'string' && typeof a != 'number') ||
						  (o = o || []).push(u, '' + a)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (Kl.hasOwnProperty(u)
								? (a != null && u === 'onScroll' && Ae('scroll', t),
								  o || s === a || (o = []))
								: (o = o || []).push(u, a))
		}
		n && (o = o || []).push('style', n)
		var u = o
		;(e.updateQueue = u) && (e.flags |= 4)
	}
}
og = function (t, e, n, r) {
	n !== r && (e.flags |= 4)
}
function ml(t, e) {
	if (!je)
		switch (t.tailMode) {
			case 'hidden':
				e = t.tail
				for (var n = null; e !== null; )
					e.alternate !== null && (n = e), (e = e.sibling)
				n === null ? (t.tail = null) : (n.sibling = null)
				break
			case 'collapsed':
				n = t.tail
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling)
				r === null
					? e || t.tail === null
						? (t.tail = null)
						: (t.tail.sibling = null)
					: (r.sibling = null)
		}
}
function Pt(t) {
	var e = t.alternate !== null && t.alternate.child === t.child,
		n = 0,
		r = 0
	if (e)
		for (var i = t.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = t),
				(i = i.sibling)
	else
		for (i = t.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = t),
				(i = i.sibling)
	return (t.subtreeFlags |= r), (t.childLanes = n), e
}
function E5(t, e, n) {
	var r = e.pendingProps
	switch ((V1(e), e.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Pt(e), null
		case 1:
			return Qt(e.type) && Ha(), Pt(e), null
		case 3:
			return (
				(r = e.stateNode),
				Uo(),
				Ie(Gt),
				Ie(Lt),
				Z1(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(t === null || t.child === null) &&
					(Ws(e)
						? (e.flags |= 4)
						: t === null ||
						  (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
						  ((e.flags |= 1024), Vn !== null && (Uf(Vn), (Vn = null)))),
				Df(t, e),
				Pt(e),
				null
			)
		case 5:
			K1(e)
			var i = Ri(us.current)
			if (((n = e.type), t !== null && e.stateNode != null))
				ig(t, e, n, r, i),
					t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152))
			else {
				if (!r) {
					if (e.stateNode === null) throw Error(L(166))
					return Pt(e), null
				}
				if (((t = Ri(sr.current)), Ws(e))) {
					;(r = e.stateNode), (n = e.type)
					var o = e.memoizedProps
					switch (((r[tr] = e), (r[ss] = o), (t = (e.mode & 1) !== 0), n)) {
						case 'dialog':
							Ae('cancel', r), Ae('close', r)
							break
						case 'iframe':
						case 'object':
						case 'embed':
							Ae('load', r)
							break
						case 'video':
						case 'audio':
							for (i = 0; i < Cl.length; i++) Ae(Cl[i], r)
							break
						case 'source':
							Ae('error', r)
							break
						case 'img':
						case 'image':
						case 'link':
							Ae('error', r), Ae('load', r)
							break
						case 'details':
							Ae('toggle', r)
							break
						case 'input':
							ld(r, o), Ae('invalid', r)
							break
						case 'select':
							;(r._wrapperState = { wasMultiple: !!o.multiple }),
								Ae('invalid', r)
							break
						case 'textarea':
							ad(r, o), Ae('invalid', r)
					}
					sf(n, o), (i = null)
					for (var l in o)
						if (o.hasOwnProperty(l)) {
							var s = o[l]
							l === 'children'
								? typeof s == 'string'
									? r.textContent !== s &&
									  (o.suppressHydrationWarning !== !0 &&
											Hs(r.textContent, s, t),
									  (i = ['children', s]))
									: typeof s == 'number' &&
									  r.textContent !== '' + s &&
									  (o.suppressHydrationWarning !== !0 &&
											Hs(r.textContent, s, t),
									  (i = ['children', '' + s]))
								: Kl.hasOwnProperty(l) &&
								  s != null &&
								  l === 'onScroll' &&
								  Ae('scroll', r)
						}
					switch (n) {
						case 'input':
							Is(r), sd(r, o, !0)
							break
						case 'textarea':
							Is(r), ud(r)
							break
						case 'select':
						case 'option':
							break
						default:
							typeof o.onClick == 'function' && (r.onclick = Va)
					}
					;(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4)
				} else {
					;(l = i.nodeType === 9 ? i : i.ownerDocument),
						t === 'http://www.w3.org/1999/xhtml' && (t = Nh(n)),
						t === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((t = l.createElement('div')),
								  (t.innerHTML = '<script></script>'),
								  (t = t.removeChild(t.firstChild)))
								: typeof r.is == 'string'
								? (t = l.createElement(n, { is: r.is }))
								: ((t = l.createElement(n)),
								  n === 'select' &&
										((l = t),
										r.multiple
											? (l.multiple = !0)
											: r.size && (l.size = r.size)))
							: (t = l.createElementNS(t, n)),
						(t[tr] = e),
						(t[ss] = r),
						rg(t, e, !1, !1),
						(e.stateNode = t)
					e: {
						switch (((l = af(n, r)), n)) {
							case 'dialog':
								Ae('cancel', t), Ae('close', t), (i = r)
								break
							case 'iframe':
							case 'object':
							case 'embed':
								Ae('load', t), (i = r)
								break
							case 'video':
							case 'audio':
								for (i = 0; i < Cl.length; i++) Ae(Cl[i], t)
								i = r
								break
							case 'source':
								Ae('error', t), (i = r)
								break
							case 'img':
							case 'image':
							case 'link':
								Ae('error', t), Ae('load', t), (i = r)
								break
							case 'details':
								Ae('toggle', t), (i = r)
								break
							case 'input':
								ld(t, r), (i = tf(t, r)), Ae('invalid', t)
								break
							case 'option':
								i = r
								break
							case 'select':
								;(t._wrapperState = { wasMultiple: !!r.multiple }),
									(i = Ve({}, r, { value: void 0 })),
									Ae('invalid', t)
								break
							case 'textarea':
								ad(t, r), (i = of(t, r)), Ae('invalid', t)
								break
							default:
								i = r
						}
						sf(n, i), (s = i)
						for (o in s)
							if (s.hasOwnProperty(o)) {
								var a = s[o]
								o === 'style'
									? Ah(t, a)
									: o === 'dangerouslySetInnerHTML'
									? ((a = a ? a.__html : void 0), a != null && Lh(t, a))
									: o === 'children'
									? typeof a == 'string'
										? (n !== 'textarea' || a !== '') && Zl(t, a)
										: typeof a == 'number' && Zl(t, '' + a)
									: o !== 'suppressContentEditableWarning' &&
									  o !== 'suppressHydrationWarning' &&
									  o !== 'autoFocus' &&
									  (Kl.hasOwnProperty(o)
											? a != null && o === 'onScroll' && Ae('scroll', t)
											: a != null && T1(t, o, a, l))
							}
						switch (n) {
							case 'input':
								Is(t), sd(t, r, !1)
								break
							case 'textarea':
								Is(t), ud(t)
								break
							case 'option':
								r.value != null && t.setAttribute('value', '' + ai(r.value))
								break
							case 'select':
								;(t.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Po(t, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  Po(t, !!r.multiple, r.defaultValue, !0)
								break
							default:
								typeof i.onClick == 'function' && (t.onclick = Va)
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus
								break e
							case 'img':
								r = !0
								break e
							default:
								r = !1
						}
					}
					r && (e.flags |= 4)
				}
				e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152))
			}
			return Pt(e), null
		case 6:
			if (t && e.stateNode != null) og(t, e, t.memoizedProps, r)
			else {
				if (typeof r != 'string' && e.stateNode === null) throw Error(L(166))
				if (((n = Ri(us.current)), Ri(sr.current), Ws(e))) {
					if (
						((r = e.stateNode),
						(n = e.memoizedProps),
						(r[tr] = e),
						(o = r.nodeValue !== n) && ((t = dn), t !== null))
					)
						switch (t.tag) {
							case 3:
								Hs(r.nodeValue, n, (t.mode & 1) !== 0)
								break
							case 5:
								t.memoizedProps.suppressHydrationWarning !== !0 &&
									Hs(r.nodeValue, n, (t.mode & 1) !== 0)
						}
					o && (e.flags |= 4)
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[tr] = e),
						(e.stateNode = r)
			}
			return Pt(e), null
		case 13:
			if (
				(Ie($e),
				(r = e.memoizedState),
				t === null ||
					(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
			) {
				if (je && fn !== null && (e.mode & 1) !== 0 && (e.flags & 128) === 0)
					S2(), bo(), (e.flags |= 98560), (o = !1)
				else if (((o = Ws(e)), r !== null && r.dehydrated !== null)) {
					if (t === null) {
						if (!o) throw Error(L(318))
						if (
							((o = e.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(L(317))
						o[tr] = e
					} else
						bo(),
							(e.flags & 128) === 0 && (e.memoizedState = null),
							(e.flags |= 4)
					Pt(e), (o = !1)
				} else Vn !== null && (Uf(Vn), (Vn = null)), (o = !0)
				if (!o) return e.flags & 65536 ? e : null
			}
			return (e.flags & 128) !== 0
				? ((e.lanes = n), e)
				: ((r = r !== null),
				  r !== (t !== null && t.memoizedState !== null) &&
						r &&
						((e.child.flags |= 8192),
						(e.mode & 1) !== 0 &&
							(t === null || ($e.current & 1) !== 0
								? ft === 0 && (ft = 3)
								: c0())),
				  e.updateQueue !== null && (e.flags |= 4),
				  Pt(e),
				  null)
		case 4:
			return (
				Uo(), Df(t, e), t === null && os(e.stateNode.containerInfo), Pt(e), null
			)
		case 10:
			return Y1(e.type._context), Pt(e), null
		case 17:
			return Qt(e.type) && Ha(), Pt(e), null
		case 19:
			if ((Ie($e), (o = e.memoizedState), o === null)) return Pt(e), null
			if (((r = (e.flags & 128) !== 0), (l = o.rendering), l === null))
				if (r) ml(o, !1)
				else {
					if (ft !== 0 || (t !== null && (t.flags & 128) !== 0))
						for (t = e.child; t !== null; ) {
							if (((l = Ka(t)), l !== null)) {
								for (
									e.flags |= 128,
										ml(o, !1),
										r = l.updateQueue,
										r !== null && ((e.updateQueue = r), (e.flags |= 4)),
										e.subtreeFlags = 0,
										r = n,
										n = e.child;
									n !== null;

								)
									(o = n),
										(t = r),
										(o.flags &= 14680066),
										(l = o.alternate),
										l === null
											? ((o.childLanes = 0),
											  (o.lanes = t),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = l.childLanes),
											  (o.lanes = l.lanes),
											  (o.child = l.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = l.memoizedProps),
											  (o.memoizedState = l.memoizedState),
											  (o.updateQueue = l.updateQueue),
											  (o.type = l.type),
											  (t = l.dependencies),
											  (o.dependencies =
													t === null
														? null
														: {
																lanes: t.lanes,
																firstContext: t.firstContext,
														  })),
										(n = n.sibling)
								return Ne($e, ($e.current & 1) | 2), e.child
							}
							t = t.sibling
						}
					o.tail !== null &&
						Je() > Ho &&
						((e.flags |= 128), (r = !0), ml(o, !1), (e.lanes = 4194304))
				}
			else {
				if (!r)
					if (((t = Ka(l)), t !== null)) {
						if (
							((e.flags |= 128),
							(r = !0),
							(n = t.updateQueue),
							n !== null && ((e.updateQueue = n), (e.flags |= 4)),
							ml(o, !0),
							o.tail === null && o.tailMode === 'hidden' && !l.alternate && !je)
						)
							return Pt(e), null
					} else
						2 * Je() - o.renderingStartTime > Ho &&
							n !== 1073741824 &&
							((e.flags |= 128), (r = !0), ml(o, !1), (e.lanes = 4194304))
				o.isBackwards
					? ((l.sibling = e.child), (e.child = l))
					: ((n = o.last),
					  n !== null ? (n.sibling = l) : (e.child = l),
					  (o.last = l))
			}
			return o.tail !== null
				? ((e = o.tail),
				  (o.rendering = e),
				  (o.tail = e.sibling),
				  (o.renderingStartTime = Je()),
				  (e.sibling = null),
				  (n = $e.current),
				  Ne($e, r ? (n & 1) | 2 : n & 1),
				  e)
				: (Pt(e), null)
		case 22:
		case 23:
			return (
				u0(),
				(r = e.memoizedState !== null),
				t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
				r && (e.mode & 1) !== 0
					? (sn & 1073741824) !== 0 &&
					  (Pt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
					: Pt(e),
				null
			)
		case 24:
			return null
		case 25:
			return null
	}
	throw Error(L(156, e.tag))
}
function z5(t, e) {
	switch ((V1(e), e.tag)) {
		case 1:
			return (
				Qt(e.type) && Ha(),
				(t = e.flags),
				t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			)
		case 3:
			return (
				Uo(),
				Ie(Gt),
				Ie(Lt),
				Z1(),
				(t = e.flags),
				(t & 65536) !== 0 && (t & 128) === 0
					? ((e.flags = (t & -65537) | 128), e)
					: null
			)
		case 5:
			return K1(e), null
		case 13:
			if (
				(Ie($e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
			) {
				if (e.alternate === null) throw Error(L(340))
				bo()
			}
			return (
				(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			)
		case 19:
			return Ie($e), null
		case 4:
			return Uo(), null
		case 10:
			return Y1(e.type._context), null
		case 22:
		case 23:
			return u0(), null
		case 24:
			return null
		default:
			return null
	}
}
var Xs = !1,
	Rt = !1,
	P5 = typeof WeakSet == 'function' ? WeakSet : Set,
	V = null
function wo(t, e) {
	var n = t.ref
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null)
			} catch (r) {
				Ge(t, e, r)
			}
		else n.current = null
}
function Af(t, e, n) {
	try {
		n()
	} catch (r) {
		Ge(t, e, r)
	}
}
var Zd = !1
function T5(t, e) {
	if (((yf = ba), (t = u2()), B1(t))) {
		if ('selectionStart' in t)
			var n = { start: t.selectionStart, end: t.selectionEnd }
		else
			e: {
				n = ((n = t.ownerDocument) && n.defaultView) || window
				var r = n.getSelection && n.getSelection()
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode
					var i = r.anchorOffset,
						o = r.focusNode
					r = r.focusOffset
					try {
						n.nodeType, o.nodeType
					} catch {
						n = null
						break e
					}
					var l = 0,
						s = -1,
						a = -1,
						u = 0,
						c = 0,
						d = t,
						f = null
					t: for (;;) {
						for (
							var p;
							d !== n || (i !== 0 && d.nodeType !== 3) || (s = l + i),
								d !== o || (r !== 0 && d.nodeType !== 3) || (a = l + r),
								d.nodeType === 3 && (l += d.nodeValue.length),
								(p = d.firstChild) !== null;

						)
							(f = d), (d = p)
						for (;;) {
							if (d === t) break t
							if (
								(f === n && ++u === i && (s = l),
								f === o && ++c === r && (a = l),
								(p = d.nextSibling) !== null)
							)
								break
							;(d = f), (f = d.parentNode)
						}
						d = p
					}
					n = s === -1 || a === -1 ? null : { start: s, end: a }
				} else n = null
			}
		n = n || { start: 0, end: 0 }
	} else n = null
	for (_f = { focusedElem: t, selectionRange: n }, ba = !1, V = e; V !== null; )
		if (((e = V), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
			(t.return = e), (V = t)
		else
			for (; V !== null; ) {
				e = V
				try {
					var v = e.alternate
					if ((e.flags & 1024) !== 0)
						switch (e.tag) {
							case 0:
							case 11:
							case 15:
								break
							case 1:
								if (v !== null) {
									var g = v.memoizedProps,
										w = v.memoizedState,
										m = e.stateNode,
										h = m.getSnapshotBeforeUpdate(
											e.elementType === e.type ? g : $n(e.type, g),
											w
										)
									m.__reactInternalSnapshotBeforeUpdate = h
								}
								break
							case 3:
								var y = e.stateNode.containerInfo
								y.nodeType === 1
									? (y.textContent = '')
									: y.nodeType === 9 &&
									  y.documentElement &&
									  y.removeChild(y.documentElement)
								break
							case 5:
							case 6:
							case 4:
							case 17:
								break
							default:
								throw Error(L(163))
						}
				} catch (_) {
					Ge(e, e.return, _)
				}
				if (((t = e.sibling), t !== null)) {
					;(t.return = e.return), (V = t)
					break
				}
				V = e.return
			}
	return (v = Zd), (Zd = !1), v
}
function Il(t, e, n) {
	var r = e.updateQueue
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next)
		do {
			if ((i.tag & t) === t) {
				var o = i.destroy
				;(i.destroy = void 0), o !== void 0 && Af(e, n, o)
			}
			i = i.next
		} while (i !== r)
	}
}
function Ru(t, e) {
	if (
		((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
	) {
		var n = (e = e.next)
		do {
			if ((n.tag & t) === t) {
				var r = n.create
				n.destroy = r()
			}
			n = n.next
		} while (n !== e)
	}
}
function If(t) {
	var e = t.ref
	if (e !== null) {
		var n = t.stateNode
		switch (t.tag) {
			case 5:
				t = n
				break
			default:
				t = n
		}
		typeof e == 'function' ? e(t) : (e.current = t)
	}
}
function lg(t) {
	var e = t.alternate
	e !== null && ((t.alternate = null), lg(e)),
		(t.child = null),
		(t.deletions = null),
		(t.sibling = null),
		t.tag === 5 &&
			((e = t.stateNode),
			e !== null &&
				(delete e[tr], delete e[ss], delete e[Sf], delete e[c5], delete e[f5])),
		(t.stateNode = null),
		(t.return = null),
		(t.dependencies = null),
		(t.memoizedProps = null),
		(t.memoizedState = null),
		(t.pendingProps = null),
		(t.stateNode = null),
		(t.updateQueue = null)
}
function sg(t) {
	return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function Jd(t) {
	e: for (;;) {
		for (; t.sibling === null; ) {
			if (t.return === null || sg(t.return)) return null
			t = t.return
		}
		for (
			t.sibling.return = t.return, t = t.sibling;
			t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

		) {
			if (t.flags & 2 || t.child === null || t.tag === 4) continue e
			;(t.child.return = t), (t = t.child)
		}
		if (!(t.flags & 2)) return t.stateNode
	}
}
function jf(t, e, n) {
	var r = t.tag
	if (r === 5 || r === 6)
		(t = t.stateNode),
			e
				? n.nodeType === 8
					? n.parentNode.insertBefore(t, e)
					: n.insertBefore(t, e)
				: (n.nodeType === 8
						? ((e = n.parentNode), e.insertBefore(t, n))
						: ((e = n), e.appendChild(t)),
				  (n = n._reactRootContainer),
				  n != null || e.onclick !== null || (e.onclick = Va))
	else if (r !== 4 && ((t = t.child), t !== null))
		for (jf(t, e, n), t = t.sibling; t !== null; ) jf(t, e, n), (t = t.sibling)
}
function Ff(t, e, n) {
	var r = t.tag
	if (r === 5 || r === 6)
		(t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t)
	else if (r !== 4 && ((t = t.child), t !== null))
		for (Ff(t, e, n), t = t.sibling; t !== null; ) Ff(t, e, n), (t = t.sibling)
}
var xt = null,
	Bn = !1
function Lr(t, e, n) {
	for (n = n.child; n !== null; ) ag(t, e, n), (n = n.sibling)
}
function ag(t, e, n) {
	if (lr && typeof lr.onCommitFiberUnmount == 'function')
		try {
			lr.onCommitFiberUnmount(xu, n)
		} catch {}
	switch (n.tag) {
		case 5:
			Rt || wo(n, e)
		case 6:
			var r = xt,
				i = Bn
			;(xt = null),
				Lr(t, e, n),
				(xt = r),
				(Bn = i),
				xt !== null &&
					(Bn
						? ((t = xt),
						  (n = n.stateNode),
						  t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
						: xt.removeChild(n.stateNode))
			break
		case 18:
			xt !== null &&
				(Bn
					? ((t = xt),
					  (n = n.stateNode),
					  t.nodeType === 8
							? yc(t.parentNode, n)
							: t.nodeType === 1 && yc(t, n),
					  ns(t))
					: yc(xt, n.stateNode))
			break
		case 4:
			;(r = xt),
				(i = Bn),
				(xt = n.stateNode.containerInfo),
				(Bn = !0),
				Lr(t, e, n),
				(xt = r),
				(Bn = i)
			break
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Rt &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next
				do {
					var o = i,
						l = o.destroy
					;(o = o.tag),
						l !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Af(n, e, l),
						(i = i.next)
				} while (i !== r)
			}
			Lr(t, e, n)
			break
		case 1:
			if (
				!Rt &&
				(wo(n, e),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					;(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount()
				} catch (s) {
					Ge(n, e, s)
				}
			Lr(t, e, n)
			break
		case 21:
			Lr(t, e, n)
			break
		case 22:
			n.mode & 1
				? ((Rt = (r = Rt) || n.memoizedState !== null), Lr(t, e, n), (Rt = r))
				: Lr(t, e, n)
			break
		default:
			Lr(t, e, n)
	}
}
function ep(t) {
	var e = t.updateQueue
	if (e !== null) {
		t.updateQueue = null
		var n = t.stateNode
		n === null && (n = t.stateNode = new P5()),
			e.forEach(function (r) {
				var i = j5.bind(null, t, r)
				n.has(r) || (n.add(r), r.then(i, i))
			})
	}
}
function jn(t, e) {
	var n = e.deletions
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r]
			try {
				var o = t,
					l = e,
					s = l
				e: for (; s !== null; ) {
					switch (s.tag) {
						case 5:
							;(xt = s.stateNode), (Bn = !1)
							break e
						case 3:
							;(xt = s.stateNode.containerInfo), (Bn = !0)
							break e
						case 4:
							;(xt = s.stateNode.containerInfo), (Bn = !0)
							break e
					}
					s = s.return
				}
				if (xt === null) throw Error(L(160))
				ag(o, l, i), (xt = null), (Bn = !1)
				var a = i.alternate
				a !== null && (a.return = null), (i.return = null)
			} catch (u) {
				Ge(i, e, u)
			}
		}
	if (e.subtreeFlags & 12854)
		for (e = e.child; e !== null; ) ug(e, t), (e = e.sibling)
}
function ug(t, e) {
	var n = t.alternate,
		r = t.flags
	switch (t.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((jn(e, t), Zn(t), r & 4)) {
				try {
					Il(3, t, t.return), Ru(3, t)
				} catch (g) {
					Ge(t, t.return, g)
				}
				try {
					Il(5, t, t.return)
				} catch (g) {
					Ge(t, t.return, g)
				}
			}
			break
		case 1:
			jn(e, t), Zn(t), r & 512 && n !== null && wo(n, n.return)
			break
		case 5:
			if (
				(jn(e, t),
				Zn(t),
				r & 512 && n !== null && wo(n, n.return),
				t.flags & 32)
			) {
				var i = t.stateNode
				try {
					Zl(i, '')
				} catch (g) {
					Ge(t, t.return, g)
				}
			}
			if (r & 4 && ((i = t.stateNode), i != null)) {
				var o = t.memoizedProps,
					l = n !== null ? n.memoizedProps : o,
					s = t.type,
					a = t.updateQueue
				if (((t.updateQueue = null), a !== null))
					try {
						s === 'input' && o.type === 'radio' && o.name != null && Oh(i, o),
							af(s, l)
						var u = af(s, o)
						for (l = 0; l < a.length; l += 2) {
							var c = a[l],
								d = a[l + 1]
							c === 'style'
								? Ah(i, d)
								: c === 'dangerouslySetInnerHTML'
								? Lh(i, d)
								: c === 'children'
								? Zl(i, d)
								: T1(i, c, d, u)
						}
						switch (s) {
							case 'input':
								nf(i, o)
								break
							case 'textarea':
								Mh(i, o)
								break
							case 'select':
								var f = i._wrapperState.wasMultiple
								i._wrapperState.wasMultiple = !!o.multiple
								var p = o.value
								p != null
									? Po(i, !!o.multiple, p, !1)
									: f !== !!o.multiple &&
									  (o.defaultValue != null
											? Po(i, !!o.multiple, o.defaultValue, !0)
											: Po(i, !!o.multiple, o.multiple ? [] : '', !1))
						}
						i[ss] = o
					} catch (g) {
						Ge(t, t.return, g)
					}
			}
			break
		case 6:
			if ((jn(e, t), Zn(t), r & 4)) {
				if (t.stateNode === null) throw Error(L(162))
				;(i = t.stateNode), (o = t.memoizedProps)
				try {
					i.nodeValue = o
				} catch (g) {
					Ge(t, t.return, g)
				}
			}
			break
		case 3:
			if (
				(jn(e, t), Zn(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					ns(e.containerInfo)
				} catch (g) {
					Ge(t, t.return, g)
				}
			break
		case 4:
			jn(e, t), Zn(t)
			break
		case 13:
			jn(e, t),
				Zn(t),
				(i = t.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(s0 = Je())),
				r & 4 && ep(t)
			break
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				t.mode & 1 ? ((Rt = (u = Rt) || c), jn(e, t), (Rt = u)) : jn(e, t),
				Zn(t),
				r & 8192)
			) {
				if (
					((u = t.memoizedState !== null),
					(t.stateNode.isHidden = u) && !c && (t.mode & 1) !== 0)
				)
					for (V = t, c = t.child; c !== null; ) {
						for (d = V = c; V !== null; ) {
							switch (((f = V), (p = f.child), f.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Il(4, f, f.return)
									break
								case 1:
									wo(f, f.return)
									var v = f.stateNode
									if (typeof v.componentWillUnmount == 'function') {
										;(r = f), (n = f.return)
										try {
											;(e = r),
												(v.props = e.memoizedProps),
												(v.state = e.memoizedState),
												v.componentWillUnmount()
										} catch (g) {
											Ge(r, n, g)
										}
									}
									break
								case 5:
									wo(f, f.return)
									break
								case 22:
									if (f.memoizedState !== null) {
										np(d)
										continue
									}
							}
							p !== null ? ((p.return = f), (V = p)) : np(d)
						}
						c = c.sibling
					}
				e: for (c = null, d = t; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d
							try {
								;(i = d.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == 'function'
												? o.setProperty('display', 'none', 'important')
												: (o.display = 'none'))
										: ((s = d.stateNode),
										  (a = d.memoizedProps.style),
										  (l =
												a != null && a.hasOwnProperty('display')
													? a.display
													: null),
										  (s.style.display = Dh('display', l)))
							} catch (g) {
								Ge(t, t.return, g)
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = u ? '' : d.memoizedProps
							} catch (g) {
								Ge(t, t.return, g)
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === t) &&
						d.child !== null
					) {
						;(d.child.return = d), (d = d.child)
						continue
					}
					if (d === t) break e
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === t) break e
						c === d && (c = null), (d = d.return)
					}
					c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling)
				}
			}
			break
		case 19:
			jn(e, t), Zn(t), r & 4 && ep(t)
			break
		case 21:
			break
		default:
			jn(e, t), Zn(t)
	}
}
function Zn(t) {
	var e = t.flags
	if (e & 2) {
		try {
			e: {
				for (var n = t.return; n !== null; ) {
					if (sg(n)) {
						var r = n
						break e
					}
					n = n.return
				}
				throw Error(L(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode
					r.flags & 32 && (Zl(i, ''), (r.flags &= -33))
					var o = Jd(t)
					Ff(t, o, i)
					break
				case 3:
				case 4:
					var l = r.stateNode.containerInfo,
						s = Jd(t)
					jf(t, s, l)
					break
				default:
					throw Error(L(161))
			}
		} catch (a) {
			Ge(t, t.return, a)
		}
		t.flags &= -3
	}
	e & 4096 && (t.flags &= -4097)
}
function R5(t, e, n) {
	;(V = t), cg(t)
}
function cg(t, e, n) {
	for (var r = (t.mode & 1) !== 0; V !== null; ) {
		var i = V,
			o = i.child
		if (i.tag === 22 && r) {
			var l = i.memoizedState !== null || Xs
			if (!l) {
				var s = i.alternate,
					a = (s !== null && s.memoizedState !== null) || Rt
				s = Xs
				var u = Rt
				if (((Xs = l), (Rt = a) && !u))
					for (V = i; V !== null; )
						(l = V),
							(a = l.child),
							l.tag === 22 && l.memoizedState !== null
								? rp(i)
								: a !== null
								? ((a.return = l), (V = a))
								: rp(i)
				for (; o !== null; ) (V = o), cg(o), (o = o.sibling)
				;(V = i), (Xs = s), (Rt = u)
			}
			tp(t)
		} else
			(i.subtreeFlags & 8772) !== 0 && o !== null
				? ((o.return = i), (V = o))
				: tp(t)
	}
}
function tp(t) {
	for (; V !== null; ) {
		var e = V
		if ((e.flags & 8772) !== 0) {
			var n = e.alternate
			try {
				if ((e.flags & 8772) !== 0)
					switch (e.tag) {
						case 0:
						case 11:
						case 15:
							Rt || Ru(5, e)
							break
						case 1:
							var r = e.stateNode
							if (e.flags & 4 && !Rt)
								if (n === null) r.componentDidMount()
								else {
									var i =
										e.elementType === e.type
											? n.memoizedProps
											: $n(e.type, n.memoizedProps)
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									)
								}
							var o = e.updateQueue
							o !== null && Fd(e, o, r)
							break
						case 3:
							var l = e.updateQueue
							if (l !== null) {
								if (((n = null), e.child !== null))
									switch (e.child.tag) {
										case 5:
											n = e.child.stateNode
											break
										case 1:
											n = e.child.stateNode
									}
								Fd(e, l, n)
							}
							break
						case 5:
							var s = e.stateNode
							if (n === null && e.flags & 4) {
								n = s
								var a = e.memoizedProps
								switch (e.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										a.autoFocus && n.focus()
										break
									case 'img':
										a.src && (n.src = a.src)
								}
							}
							break
						case 6:
							break
						case 4:
							break
						case 12:
							break
						case 13:
							if (e.memoizedState === null) {
								var u = e.alternate
								if (u !== null) {
									var c = u.memoizedState
									if (c !== null) {
										var d = c.dehydrated
										d !== null && ns(d)
									}
								}
							}
							break
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break
						default:
							throw Error(L(163))
					}
				Rt || (e.flags & 512 && If(e))
			} catch (f) {
				Ge(e, e.return, f)
			}
		}
		if (e === t) {
			V = null
			break
		}
		if (((n = e.sibling), n !== null)) {
			;(n.return = e.return), (V = n)
			break
		}
		V = e.return
	}
}
function np(t) {
	for (; V !== null; ) {
		var e = V
		if (e === t) {
			V = null
			break
		}
		var n = e.sibling
		if (n !== null) {
			;(n.return = e.return), (V = n)
			break
		}
		V = e.return
	}
}
function rp(t) {
	for (; V !== null; ) {
		var e = V
		try {
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					var n = e.return
					try {
						Ru(4, e)
					} catch (a) {
						Ge(e, n, a)
					}
					break
				case 1:
					var r = e.stateNode
					if (typeof r.componentDidMount == 'function') {
						var i = e.return
						try {
							r.componentDidMount()
						} catch (a) {
							Ge(e, i, a)
						}
					}
					var o = e.return
					try {
						If(e)
					} catch (a) {
						Ge(e, o, a)
					}
					break
				case 5:
					var l = e.return
					try {
						If(e)
					} catch (a) {
						Ge(e, l, a)
					}
			}
		} catch (a) {
			Ge(e, e.return, a)
		}
		if (e === t) {
			V = null
			break
		}
		var s = e.sibling
		if (s !== null) {
			;(s.return = e.return), (V = s)
			break
		}
		V = e.return
	}
}
var O5 = Math.ceil,
	eu = Or.ReactCurrentDispatcher,
	o0 = Or.ReactCurrentOwner,
	On = Or.ReactCurrentBatchConfig,
	ve = 0,
	mt = null,
	it = null,
	Ct = 0,
	sn = 0,
	xo = hi(0),
	ft = 0,
	ps = null,
	Vi = 0,
	Ou = 0,
	l0 = 0,
	jl = null,
	qt = null,
	s0 = 0,
	Ho = 1 / 0,
	pr = null,
	tu = !1,
	$f = null,
	Jr = null,
	Gs = !1,
	br = null,
	nu = 0,
	Fl = 0,
	bf = null,
	wa = -1,
	xa = 0
function Bt() {
	return (ve & 6) !== 0 ? Je() : wa !== -1 ? wa : (wa = Je())
}
function ei(t) {
	return (t.mode & 1) === 0
		? 1
		: (ve & 2) !== 0 && Ct !== 0
		? Ct & -Ct
		: p5.transition !== null
		? (xa === 0 && (xa = Yh()), xa)
		: ((t = Se),
		  t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : e2(t.type))),
		  t)
}
function Wn(t, e, n, r) {
	if (50 < Fl) throw ((Fl = 0), (bf = null), Error(L(185)))
	Cs(t, n, r),
		((ve & 2) === 0 || t !== mt) &&
			(t === mt && ((ve & 2) === 0 && (Ou |= n), ft === 4 && Fr(t, Ct)),
			Kt(t, r),
			n === 1 &&
				ve === 0 &&
				(e.mode & 1) === 0 &&
				((Ho = Je() + 500), zu && gi()))
}
function Kt(t, e) {
	var n = t.callbackNode
	p4(t, e)
	var r = $a(t, t === mt ? Ct : 0)
	if (r === 0)
		n !== null && dd(n), (t.callbackNode = null), (t.callbackPriority = 0)
	else if (((e = r & -r), t.callbackPriority !== e)) {
		if ((n != null && dd(n), e === 1))
			t.tag === 0 ? d5(ip.bind(null, t)) : _2(ip.bind(null, t)),
				a5(function () {
					;(ve & 6) === 0 && gi()
				}),
				(n = null)
		else {
			switch (Xh(r)) {
				case 1:
					n = L1
					break
				case 4:
					n = Wh
					break
				case 16:
					n = Fa
					break
				case 536870912:
					n = qh
					break
				default:
					n = Fa
			}
			n = yg(n, fg.bind(null, t))
		}
		;(t.callbackPriority = e), (t.callbackNode = n)
	}
}
function fg(t, e) {
	if (((wa = -1), (xa = 0), (ve & 6) !== 0)) throw Error(L(327))
	var n = t.callbackNode
	if (No() && t.callbackNode !== n) return null
	var r = $a(t, t === mt ? Ct : 0)
	if (r === 0) return null
	if ((r & 30) !== 0 || (r & t.expiredLanes) !== 0 || e) e = ru(t, r)
	else {
		e = r
		var i = ve
		ve |= 2
		var o = pg()
		;(mt !== t || Ct !== e) && ((pr = null), (Ho = Je() + 500), Ni(t, e))
		do
			try {
				L5()
				break
			} catch (s) {
				dg(t, s)
			}
		while (1)
		q1(),
			(eu.current = o),
			(ve = i),
			it !== null ? (e = 0) : ((mt = null), (Ct = 0), (e = ft))
	}
	if (e !== 0) {
		if (
			(e === 2 && ((i = pf(t)), i !== 0 && ((r = i), (e = Bf(t, i)))), e === 1)
		)
			throw ((n = ps), Ni(t, 0), Fr(t, r), Kt(t, Je()), n)
		if (e === 6) Fr(t, r)
		else {
			if (
				((i = t.current.alternate),
				(r & 30) === 0 &&
					!M5(i) &&
					((e = ru(t, r)),
					e === 2 && ((o = pf(t)), o !== 0 && ((r = o), (e = Bf(t, o)))),
					e === 1))
			)
				throw ((n = ps), Ni(t, 0), Fr(t, r), Kt(t, Je()), n)
			switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
				case 0:
				case 1:
					throw Error(L(345))
				case 2:
					ki(t, qt, pr)
					break
				case 3:
					if (
						(Fr(t, r), (r & 130023424) === r && ((e = s0 + 500 - Je()), 10 < e))
					) {
						if ($a(t, 0) !== 0) break
						if (((i = t.suspendedLanes), (i & r) !== r)) {
							Bt(), (t.pingedLanes |= t.suspendedLanes & i)
							break
						}
						t.timeoutHandle = xf(ki.bind(null, t, qt, pr), e)
						break
					}
					ki(t, qt, pr)
					break
				case 4:
					if ((Fr(t, r), (r & 4194240) === r)) break
					for (e = t.eventTimes, i = -1; 0 < r; ) {
						var l = 31 - Hn(r)
						;(o = 1 << l), (l = e[l]), l > i && (i = l), (r &= ~o)
					}
					if (
						((r = i),
						(r = Je() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * O5(r / 1960)) - r),
						10 < r)
					) {
						t.timeoutHandle = xf(ki.bind(null, t, qt, pr), r)
						break
					}
					ki(t, qt, pr)
					break
				case 5:
					ki(t, qt, pr)
					break
				default:
					throw Error(L(329))
			}
		}
	}
	return Kt(t, Je()), t.callbackNode === n ? fg.bind(null, t) : null
}
function Bf(t, e) {
	var n = jl
	return (
		t.current.memoizedState.isDehydrated && (Ni(t, e).flags |= 256),
		(t = ru(t, e)),
		t !== 2 && ((e = qt), (qt = n), e !== null && Uf(e)),
		t
	)
}
function Uf(t) {
	qt === null ? (qt = t) : qt.push.apply(qt, t)
}
function M5(t) {
	for (var e = t; ; ) {
		if (e.flags & 16384) {
			var n = e.updateQueue
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot
					i = i.value
					try {
						if (!Yn(o(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
			(n.return = e), (e = n)
		else {
			if (e === t) break
			for (; e.sibling === null; ) {
				if (e.return === null || e.return === t) return !0
				e = e.return
			}
			;(e.sibling.return = e.return), (e = e.sibling)
		}
	}
	return !0
}
function Fr(t, e) {
	for (
		e &= ~l0,
			e &= ~Ou,
			t.suspendedLanes |= e,
			t.pingedLanes &= ~e,
			t = t.expirationTimes;
		0 < e;

	) {
		var n = 31 - Hn(e),
			r = 1 << n
		;(t[n] = -1), (e &= ~r)
	}
}
function ip(t) {
	if ((ve & 6) !== 0) throw Error(L(327))
	No()
	var e = $a(t, 0)
	if ((e & 1) === 0) return Kt(t, Je()), null
	var n = ru(t, e)
	if (t.tag !== 0 && n === 2) {
		var r = pf(t)
		r !== 0 && ((e = r), (n = Bf(t, r)))
	}
	if (n === 1) throw ((n = ps), Ni(t, 0), Fr(t, e), Kt(t, Je()), n)
	if (n === 6) throw Error(L(345))
	return (
		(t.finishedWork = t.current.alternate),
		(t.finishedLanes = e),
		ki(t, qt, pr),
		Kt(t, Je()),
		null
	)
}
function a0(t, e) {
	var n = ve
	ve |= 1
	try {
		return t(e)
	} finally {
		;(ve = n), ve === 0 && ((Ho = Je() + 500), zu && gi())
	}
}
function Hi(t) {
	br !== null && br.tag === 0 && (ve & 6) === 0 && No()
	var e = ve
	ve |= 1
	var n = On.transition,
		r = Se
	try {
		if (((On.transition = null), (Se = 1), t)) return t()
	} finally {
		;(Se = r), (On.transition = n), (ve = e), (ve & 6) === 0 && gi()
	}
}
function u0() {
	;(sn = xo.current), Ie(xo)
}
function Ni(t, e) {
	;(t.finishedWork = null), (t.finishedLanes = 0)
	var n = t.timeoutHandle
	if ((n !== -1 && ((t.timeoutHandle = -1), s5(n)), it !== null))
		for (n = it.return; n !== null; ) {
			var r = n
			switch ((V1(r), r.tag)) {
				case 1:
					;(r = r.type.childContextTypes), r != null && Ha()
					break
				case 3:
					Uo(), Ie(Gt), Ie(Lt), Z1()
					break
				case 5:
					K1(r)
					break
				case 4:
					Uo()
					break
				case 13:
					Ie($e)
					break
				case 19:
					Ie($e)
					break
				case 10:
					Y1(r.type._context)
					break
				case 22:
				case 23:
					u0()
			}
			n = n.return
		}
	if (
		((mt = t),
		(it = t = ti(t.current, null)),
		(Ct = sn = e),
		(ft = 0),
		(ps = null),
		(l0 = Ou = Vi = 0),
		(qt = jl = null),
		Ti !== null)
	) {
		for (e = 0; e < Ti.length; e++)
			if (((n = Ti[e]), (r = n.interleaved), r !== null)) {
				n.interleaved = null
				var i = r.next,
					o = n.pending
				if (o !== null) {
					var l = o.next
					;(o.next = i), (r.next = l)
				}
				n.pending = r
			}
		Ti = null
	}
	return t
}
function dg(t, e) {
	do {
		var n = it
		try {
			if ((q1(), (va.current = Ja), Za)) {
				for (var r = Ue.memoizedState; r !== null; ) {
					var i = r.queue
					i !== null && (i.pending = null), (r = r.next)
				}
				Za = !1
			}
			if (
				((Ui = 0),
				(gt = at = Ue = null),
				(Al = !1),
				(cs = 0),
				(o0.current = null),
				n === null || n.return === null)
			) {
				;(ft = 1), (ps = e), (it = null)
				break
			}
			e: {
				var o = t,
					l = n.return,
					s = n,
					a = e
				if (
					((e = Ct),
					(s.flags |= 32768),
					a !== null && typeof a == 'object' && typeof a.then == 'function')
				) {
					var u = a,
						c = s,
						d = c.tag
					if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
						var f = c.alternate
						f
							? ((c.updateQueue = f.updateQueue),
							  (c.memoizedState = f.memoizedState),
							  (c.lanes = f.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null))
					}
					var p = Wd(l)
					if (p !== null) {
						;(p.flags &= -257),
							qd(p, l, s, o, e),
							p.mode & 1 && Hd(o, u, e),
							(e = p),
							(a = u)
						var v = e.updateQueue
						if (v === null) {
							var g = new Set()
							g.add(a), (e.updateQueue = g)
						} else v.add(a)
						break e
					} else {
						if ((e & 1) === 0) {
							Hd(o, u, e), c0()
							break e
						}
						a = Error(L(426))
					}
				} else if (je && s.mode & 1) {
					var w = Wd(l)
					if (w !== null) {
						;(w.flags & 65536) === 0 && (w.flags |= 256),
							qd(w, l, s, o, e),
							H1(Vo(a, s))
						break e
					}
				}
				;(o = a = Vo(a, s)),
					ft !== 4 && (ft = 2),
					jl === null ? (jl = [o]) : jl.push(o),
					(o = l)
				do {
					switch (o.tag) {
						case 3:
							;(o.flags |= 65536), (e &= -e), (o.lanes |= e)
							var m = G2(o, a, e)
							jd(o, m)
							break e
						case 1:
							s = a
							var h = o.type,
								y = o.stateNode
							if (
								(o.flags & 128) === 0 &&
								(typeof h.getDerivedStateFromError == 'function' ||
									(y !== null &&
										typeof y.componentDidCatch == 'function' &&
										(Jr === null || !Jr.has(y))))
							) {
								;(o.flags |= 65536), (e &= -e), (o.lanes |= e)
								var _ = Q2(o, s, e)
								jd(o, _)
								break e
							}
					}
					o = o.return
				} while (o !== null)
			}
			gg(n)
		} catch (S) {
			;(e = S), it === n && n !== null && (it = n = n.return)
			continue
		}
		break
	} while (1)
}
function pg() {
	var t = eu.current
	return (eu.current = Ja), t === null ? Ja : t
}
function c0() {
	;(ft === 0 || ft === 3 || ft === 2) && (ft = 4),
		mt === null ||
			((Vi & 268435455) === 0 && (Ou & 268435455) === 0) ||
			Fr(mt, Ct)
}
function ru(t, e) {
	var n = ve
	ve |= 2
	var r = pg()
	;(mt !== t || Ct !== e) && ((pr = null), Ni(t, e))
	do
		try {
			N5()
			break
		} catch (i) {
			dg(t, i)
		}
	while (1)
	if ((q1(), (ve = n), (eu.current = r), it !== null)) throw Error(L(261))
	return (mt = null), (Ct = 0), ft
}
function N5() {
	for (; it !== null; ) hg(it)
}
function L5() {
	for (; it !== null && !i4(); ) hg(it)
}
function hg(t) {
	var e = vg(t.alternate, t, sn)
	;(t.memoizedProps = t.pendingProps),
		e === null ? gg(t) : (it = e),
		(o0.current = null)
}
function gg(t) {
	var e = t
	do {
		var n = e.alternate
		if (((t = e.return), (e.flags & 32768) === 0)) {
			if (((n = E5(n, e, sn)), n !== null)) {
				it = n
				return
			}
		} else {
			if (((n = z5(n, e)), n !== null)) {
				;(n.flags &= 32767), (it = n)
				return
			}
			if (t !== null)
				(t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)
			else {
				;(ft = 6), (it = null)
				return
			}
		}
		if (((e = e.sibling), e !== null)) {
			it = e
			return
		}
		it = e = t
	} while (e !== null)
	ft === 0 && (ft = 5)
}
function ki(t, e, n) {
	var r = Se,
		i = On.transition
	try {
		;(On.transition = null), (Se = 1), D5(t, e, n, r)
	} finally {
		;(On.transition = i), (Se = r)
	}
	return null
}
function D5(t, e, n, r) {
	do No()
	while (br !== null)
	if ((ve & 6) !== 0) throw Error(L(327))
	n = t.finishedWork
	var i = t.finishedLanes
	if (n === null) return null
	if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
		throw Error(L(177))
	;(t.callbackNode = null), (t.callbackPriority = 0)
	var o = n.lanes | n.childLanes
	if (
		(h4(t, o),
		t === mt && ((it = mt = null), (Ct = 0)),
		((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
			Gs ||
			((Gs = !0),
			yg(Fa, function () {
				return No(), null
			})),
		(o = (n.flags & 15990) !== 0),
		(n.subtreeFlags & 15990) !== 0 || o)
	) {
		;(o = On.transition), (On.transition = null)
		var l = Se
		Se = 1
		var s = ve
		;(ve |= 4),
			(o0.current = null),
			T5(t, n),
			ug(n, t),
			e5(_f),
			(ba = !!yf),
			(_f = yf = null),
			(t.current = n),
			R5(n),
			o4(),
			(ve = s),
			(Se = l),
			(On.transition = o)
	} else t.current = n
	if (
		(Gs && ((Gs = !1), (br = t), (nu = i)),
		(o = t.pendingLanes),
		o === 0 && (Jr = null),
		a4(n.stateNode),
		Kt(t, Je()),
		e !== null)
	)
		for (r = t.onRecoverableError, n = 0; n < e.length; n++)
			(i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
	if (tu) throw ((tu = !1), (t = $f), ($f = null), t)
	return (
		(nu & 1) !== 0 && t.tag !== 0 && No(),
		(o = t.pendingLanes),
		(o & 1) !== 0 ? (t === bf ? Fl++ : ((Fl = 0), (bf = t))) : (Fl = 0),
		gi(),
		null
	)
}
function No() {
	if (br !== null) {
		var t = Xh(nu),
			e = On.transition,
			n = Se
		try {
			if (((On.transition = null), (Se = 16 > t ? 16 : t), br === null))
				var r = !1
			else {
				if (((t = br), (br = null), (nu = 0), (ve & 6) !== 0))
					throw Error(L(331))
				var i = ve
				for (ve |= 4, V = t.current; V !== null; ) {
					var o = V,
						l = o.child
					if ((V.flags & 16) !== 0) {
						var s = o.deletions
						if (s !== null) {
							for (var a = 0; a < s.length; a++) {
								var u = s[a]
								for (V = u; V !== null; ) {
									var c = V
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Il(8, c, o)
									}
									var d = c.child
									if (d !== null) (d.return = c), (V = d)
									else
										for (; V !== null; ) {
											c = V
											var f = c.sibling,
												p = c.return
											if ((lg(c), c === u)) {
												V = null
												break
											}
											if (f !== null) {
												;(f.return = p), (V = f)
												break
											}
											V = p
										}
								}
							}
							var v = o.alternate
							if (v !== null) {
								var g = v.child
								if (g !== null) {
									v.child = null
									do {
										var w = g.sibling
										;(g.sibling = null), (g = w)
									} while (g !== null)
								}
							}
							V = o
						}
					}
					if ((o.subtreeFlags & 2064) !== 0 && l !== null)
						(l.return = o), (V = l)
					else
						e: for (; V !== null; ) {
							if (((o = V), (o.flags & 2048) !== 0))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Il(9, o, o.return)
								}
							var m = o.sibling
							if (m !== null) {
								;(m.return = o.return), (V = m)
								break e
							}
							V = o.return
						}
				}
				var h = t.current
				for (V = h; V !== null; ) {
					l = V
					var y = l.child
					if ((l.subtreeFlags & 2064) !== 0 && y !== null)
						(y.return = l), (V = y)
					else
						e: for (l = h; V !== null; ) {
							if (((s = V), (s.flags & 2048) !== 0))
								try {
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											Ru(9, s)
									}
								} catch (S) {
									Ge(s, s.return, S)
								}
							if (s === l) {
								V = null
								break e
							}
							var _ = s.sibling
							if (_ !== null) {
								;(_.return = s.return), (V = _)
								break e
							}
							V = s.return
						}
				}
				if (
					((ve = i), gi(), lr && typeof lr.onPostCommitFiberRoot == 'function')
				)
					try {
						lr.onPostCommitFiberRoot(xu, t)
					} catch {}
				r = !0
			}
			return r
		} finally {
			;(Se = n), (On.transition = e)
		}
	}
	return !1
}
function op(t, e, n) {
	;(e = Vo(n, e)),
		(e = G2(t, e, 1)),
		(t = Zr(t, e, 1)),
		(e = Bt()),
		t !== null && (Cs(t, 1, e), Kt(t, e))
}
function Ge(t, e, n) {
	if (t.tag === 3) op(t, t, n)
	else
		for (; e !== null; ) {
			if (e.tag === 3) {
				op(e, t, n)
				break
			} else if (e.tag === 1) {
				var r = e.stateNode
				if (
					typeof e.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Jr === null || !Jr.has(r)))
				) {
					;(t = Vo(n, t)),
						(t = Q2(e, t, 1)),
						(e = Zr(e, t, 1)),
						(t = Bt()),
						e !== null && (Cs(e, 1, t), Kt(e, t))
					break
				}
			}
			e = e.return
		}
}
function A5(t, e, n) {
	var r = t.pingCache
	r !== null && r.delete(e),
		(e = Bt()),
		(t.pingedLanes |= t.suspendedLanes & n),
		mt === t &&
			(Ct & n) === n &&
			(ft === 4 || (ft === 3 && (Ct & 130023424) === Ct && 500 > Je() - s0)
				? Ni(t, 0)
				: (l0 |= n)),
		Kt(t, e)
}
function mg(t, e) {
	e === 0 &&
		((t.mode & 1) === 0
			? (e = 1)
			: ((e = $s), ($s <<= 1), ($s & 130023424) === 0 && ($s = 4194304)))
	var n = Bt()
	;(t = zr(t, e)), t !== null && (Cs(t, e, n), Kt(t, n))
}
function I5(t) {
	var e = t.memoizedState,
		n = 0
	e !== null && (n = e.retryLane), mg(t, n)
}
function j5(t, e) {
	var n = 0
	switch (t.tag) {
		case 13:
			var r = t.stateNode,
				i = t.memoizedState
			i !== null && (n = i.retryLane)
			break
		case 19:
			r = t.stateNode
			break
		default:
			throw Error(L(314))
	}
	r !== null && r.delete(e), mg(t, n)
}
var vg
vg = function (t, e, n) {
	if (t !== null)
		if (t.memoizedProps !== e.pendingProps || Gt.current) Xt = !0
		else {
			if ((t.lanes & n) === 0 && (e.flags & 128) === 0)
				return (Xt = !1), C5(t, e, n)
			Xt = (t.flags & 131072) !== 0
		}
	else (Xt = !1), je && (e.flags & 1048576) !== 0 && w2(e, Ya, e.index)
	switch (((e.lanes = 0), e.tag)) {
		case 2:
			var r = e.type
			_a(t, e), (t = e.pendingProps)
			var i = $o(e, Lt.current)
			Mo(e, n), (i = e0(null, e, r, t, i, n))
			var o = t0()
			return (
				(e.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((e.tag = 1),
					  (e.memoizedState = null),
					  (e.updateQueue = null),
					  Qt(r) ? ((o = !0), Wa(e)) : (o = !1),
					  (e.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  G1(e),
					  (i.updater = Pu),
					  (e.stateNode = i),
					  (i._reactInternals = e),
					  Tf(e, r, t, n),
					  (e = Mf(null, e, r, !0, o, n)))
					: ((e.tag = 0), je && o && U1(e), It(null, e, i, n), (e = e.child)),
				e
			)
		case 16:
			r = e.elementType
			e: {
				switch (
					(_a(t, e),
					(t = e.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(e.type = r),
					(i = e.tag = $5(r)),
					(t = $n(r, t)),
					i)
				) {
					case 0:
						e = Of(null, e, r, t, n)
						break e
					case 1:
						e = Gd(null, e, r, t, n)
						break e
					case 11:
						e = Yd(null, e, r, t, n)
						break e
					case 14:
						e = Xd(null, e, r, $n(r.type, t), n)
						break e
				}
				throw Error(L(306, r, ''))
			}
			return e
		case 0:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : $n(r, i)),
				Of(t, e, r, i, n)
			)
		case 1:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : $n(r, i)),
				Gd(t, e, r, i, n)
			)
		case 3:
			e: {
				if ((eg(e), t === null)) throw Error(L(387))
				;(r = e.pendingProps),
					(o = e.memoizedState),
					(i = o.element),
					C2(t, e),
					Qa(e, r, null, n)
				var l = e.memoizedState
				if (((r = l.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: l.cache,
							pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
							transitions: l.transitions,
						}),
						(e.updateQueue.baseState = o),
						(e.memoizedState = o),
						e.flags & 256)
					) {
						;(i = Vo(Error(L(423)), e)), (e = Qd(t, e, r, n, i))
						break e
					} else if (r !== i) {
						;(i = Vo(Error(L(424)), e)), (e = Qd(t, e, r, n, i))
						break e
					} else
						for (
							fn = Kr(e.stateNode.containerInfo.firstChild),
								dn = e,
								je = !0,
								Vn = null,
								n = T2(e, null, r, n),
								e.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling)
				else {
					if ((bo(), r === i)) {
						e = Pr(t, e, n)
						break e
					}
					It(t, e, r, n)
				}
				e = e.child
			}
			return e
		case 5:
			return (
				R2(e),
				t === null && Ef(e),
				(r = e.type),
				(i = e.pendingProps),
				(o = t !== null ? t.memoizedProps : null),
				(l = i.children),
				wf(r, i) ? (l = null) : o !== null && wf(r, o) && (e.flags |= 32),
				J2(t, e),
				It(t, e, l, n),
				e.child
			)
		case 6:
			return t === null && Ef(e), null
		case 13:
			return tg(t, e, n)
		case 4:
			return (
				Q1(e, e.stateNode.containerInfo),
				(r = e.pendingProps),
				t === null ? (e.child = Bo(e, null, r, n)) : It(t, e, r, n),
				e.child
			)
		case 11:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : $n(r, i)),
				Yd(t, e, r, i, n)
			)
		case 7:
			return It(t, e, e.pendingProps, n), e.child
		case 8:
			return It(t, e, e.pendingProps.children, n), e.child
		case 12:
			return It(t, e, e.pendingProps.children, n), e.child
		case 10:
			e: {
				if (
					((r = e.type._context),
					(i = e.pendingProps),
					(o = e.memoizedProps),
					(l = i.value),
					Ne(Xa, r._currentValue),
					(r._currentValue = l),
					o !== null)
				)
					if (Yn(o.value, l)) {
						if (o.children === i.children && !Gt.current) {
							e = Pr(t, e, n)
							break e
						}
					} else
						for (o = e.child, o !== null && (o.return = e); o !== null; ) {
							var s = o.dependencies
							if (s !== null) {
								l = o.child
								for (var a = s.firstContext; a !== null; ) {
									if (a.context === r) {
										if (o.tag === 1) {
											;(a = Sr(-1, n & -n)), (a.tag = 2)
											var u = o.updateQueue
											if (u !== null) {
												u = u.shared
												var c = u.pending
												c === null
													? (a.next = a)
													: ((a.next = c.next), (c.next = a)),
													(u.pending = a)
											}
										}
										;(o.lanes |= n),
											(a = o.alternate),
											a !== null && (a.lanes |= n),
											zf(o.return, n, e),
											(s.lanes |= n)
										break
									}
									a = a.next
								}
							} else if (o.tag === 10) l = o.type === e.type ? null : o.child
							else if (o.tag === 18) {
								if (((l = o.return), l === null)) throw Error(L(341))
								;(l.lanes |= n),
									(s = l.alternate),
									s !== null && (s.lanes |= n),
									zf(l, n, e),
									(l = o.sibling)
							} else l = o.child
							if (l !== null) l.return = o
							else
								for (l = o; l !== null; ) {
									if (l === e) {
										l = null
										break
									}
									if (((o = l.sibling), o !== null)) {
										;(o.return = l.return), (l = o)
										break
									}
									l = l.return
								}
							o = l
						}
				It(t, e, i.children, n), (e = e.child)
			}
			return e
		case 9:
			return (
				(i = e.type),
				(r = e.pendingProps.children),
				Mo(e, n),
				(i = Nn(i)),
				(r = r(i)),
				(e.flags |= 1),
				It(t, e, r, n),
				e.child
			)
		case 14:
			return (
				(r = e.type),
				(i = $n(r, e.pendingProps)),
				(i = $n(r.type, i)),
				Xd(t, e, r, i, n)
			)
		case 15:
			return K2(t, e, e.type, e.pendingProps, n)
		case 17:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : $n(r, i)),
				_a(t, e),
				(e.tag = 1),
				Qt(r) ? ((t = !0), Wa(e)) : (t = !1),
				Mo(e, n),
				z2(e, r, i),
				Tf(e, r, i, n),
				Mf(null, e, r, !0, t, n)
			)
		case 19:
			return ng(t, e, n)
		case 22:
			return Z2(t, e, n)
	}
	throw Error(L(156, e.tag))
}
function yg(t, e) {
	return Hh(t, e)
}
function F5(t, e, n, r) {
	;(this.tag = t),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = e),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null)
}
function zn(t, e, n, r) {
	return new F5(t, e, n, r)
}
function f0(t) {
	return (t = t.prototype), !(!t || !t.isReactComponent)
}
function $5(t) {
	if (typeof t == 'function') return f0(t) ? 1 : 0
	if (t != null) {
		if (((t = t.$$typeof), t === O1)) return 11
		if (t === M1) return 14
	}
	return 2
}
function ti(t, e) {
	var n = t.alternate
	return (
		n === null
			? ((n = zn(t.tag, e, t.key, t.mode)),
			  (n.elementType = t.elementType),
			  (n.type = t.type),
			  (n.stateNode = t.stateNode),
			  (n.alternate = t),
			  (t.alternate = n))
			: ((n.pendingProps = e),
			  (n.type = t.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = t.flags & 14680064),
		(n.childLanes = t.childLanes),
		(n.lanes = t.lanes),
		(n.child = t.child),
		(n.memoizedProps = t.memoizedProps),
		(n.memoizedState = t.memoizedState),
		(n.updateQueue = t.updateQueue),
		(e = t.dependencies),
		(n.dependencies =
			e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
		(n.sibling = t.sibling),
		(n.index = t.index),
		(n.ref = t.ref),
		n
	)
}
function Sa(t, e, n, r, i, o) {
	var l = 2
	if (((r = t), typeof t == 'function')) f0(t) && (l = 1)
	else if (typeof t == 'string') l = 5
	else
		e: switch (t) {
			case co:
				return Li(n.children, i, o, e)
			case R1:
				;(l = 8), (i |= 8)
				break
			case Kc:
				return (t = zn(12, n, e, i | 2)), (t.elementType = Kc), (t.lanes = o), t
			case Zc:
				return (t = zn(13, n, e, i)), (t.elementType = Zc), (t.lanes = o), t
			case Jc:
				return (t = zn(19, n, e, i)), (t.elementType = Jc), (t.lanes = o), t
			case Ph:
				return Mu(n, i, o, e)
			default:
				if (typeof t == 'object' && t !== null)
					switch (t.$$typeof) {
						case Eh:
							l = 10
							break e
						case zh:
							l = 9
							break e
						case O1:
							l = 11
							break e
						case M1:
							l = 14
							break e
						case Ar:
							;(l = 16), (r = null)
							break e
					}
				throw Error(L(130, t == null ? t : typeof t, ''))
		}
	return (
		(e = zn(l, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = o), e
	)
}
function Li(t, e, n, r) {
	return (t = zn(7, t, r, e)), (t.lanes = n), t
}
function Mu(t, e, n, r) {
	return (
		(t = zn(22, t, r, e)),
		(t.elementType = Ph),
		(t.lanes = n),
		(t.stateNode = { isHidden: !1 }),
		t
	)
}
function zc(t, e, n) {
	return (t = zn(6, t, null, e)), (t.lanes = n), t
}
function Pc(t, e, n) {
	return (
		(e = zn(4, t.children !== null ? t.children : [], t.key, e)),
		(e.lanes = n),
		(e.stateNode = {
			containerInfo: t.containerInfo,
			pendingChildren: null,
			implementation: t.implementation,
		}),
		e
	)
}
function b5(t, e, n, r, i) {
	;(this.tag = e),
		(this.containerInfo = t),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = sc(0)),
		(this.expirationTimes = sc(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = sc(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null)
}
function d0(t, e, n, r, i, o, l, s, a) {
	return (
		(t = new b5(t, e, n, s, a)),
		e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
		(o = zn(3, null, null, e)),
		(t.current = o),
		(o.stateNode = t),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		G1(o),
		t
	)
}
function B5(t, e, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
	return {
		$$typeof: uo,
		key: r == null ? null : '' + r,
		children: t,
		containerInfo: e,
		implementation: n,
	}
}
function _g(t) {
	if (!t) return ui
	t = t._reactInternals
	e: {
		if (Zi(t) !== t || t.tag !== 1) throw Error(L(170))
		var e = t
		do {
			switch (e.tag) {
				case 3:
					e = e.stateNode.context
					break e
				case 1:
					if (Qt(e.type)) {
						e = e.stateNode.__reactInternalMemoizedMergedChildContext
						break e
					}
			}
			e = e.return
		} while (e !== null)
		throw Error(L(171))
	}
	if (t.tag === 1) {
		var n = t.type
		if (Qt(n)) return y2(t, n, e)
	}
	return e
}
function wg(t, e, n, r, i, o, l, s, a) {
	return (
		(t = d0(n, r, !0, t, i, o, l, s, a)),
		(t.context = _g(null)),
		(n = t.current),
		(r = Bt()),
		(i = ei(n)),
		(o = Sr(r, i)),
		(o.callback = e != null ? e : null),
		Zr(n, o, i),
		(t.current.lanes = i),
		Cs(t, i, r),
		Kt(t, r),
		t
	)
}
function Nu(t, e, n, r) {
	var i = e.current,
		o = Bt(),
		l = ei(i)
	return (
		(n = _g(n)),
		e.context === null ? (e.context = n) : (e.pendingContext = n),
		(e = Sr(o, l)),
		(e.payload = { element: t }),
		(r = r === void 0 ? null : r),
		r !== null && (e.callback = r),
		(t = Zr(i, e, l)),
		t !== null && (Wn(t, i, l, o), ma(t, i, l)),
		l
	)
}
function iu(t) {
	if (((t = t.current), !t.child)) return null
	switch (t.child.tag) {
		case 5:
			return t.child.stateNode
		default:
			return t.child.stateNode
	}
}
function lp(t, e) {
	if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
		var n = t.retryLane
		t.retryLane = n !== 0 && n < e ? n : e
	}
}
function p0(t, e) {
	lp(t, e), (t = t.alternate) && lp(t, e)
}
function U5() {
	return null
}
var xg =
	typeof reportError == 'function'
		? reportError
		: function (t) {
				console.error(t)
		  }
function h0(t) {
	this._internalRoot = t
}
Lu.prototype.render = h0.prototype.render = function (t) {
	var e = this._internalRoot
	if (e === null) throw Error(L(409))
	Nu(t, e, null, null)
}
Lu.prototype.unmount = h0.prototype.unmount = function () {
	var t = this._internalRoot
	if (t !== null) {
		this._internalRoot = null
		var e = t.containerInfo
		Hi(function () {
			Nu(null, t, null, null)
		}),
			(e[Er] = null)
	}
}
function Lu(t) {
	this._internalRoot = t
}
Lu.prototype.unstable_scheduleHydration = function (t) {
	if (t) {
		var e = Kh()
		t = { blockedOn: null, target: t, priority: e }
		for (var n = 0; n < jr.length && e !== 0 && e < jr[n].priority; n++);
		jr.splice(n, 0, t), n === 0 && Jh(t)
	}
}
function g0(t) {
	return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
}
function Du(t) {
	return !(
		!t ||
		(t.nodeType !== 1 &&
			t.nodeType !== 9 &&
			t.nodeType !== 11 &&
			(t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
	)
}
function sp() {}
function V5(t, e, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var o = r
			r = function () {
				var u = iu(l)
				o.call(u)
			}
		}
		var l = wg(e, r, t, 0, null, !1, !1, '', sp)
		return (
			(t._reactRootContainer = l),
			(t[Er] = l.current),
			os(t.nodeType === 8 ? t.parentNode : t),
			Hi(),
			l
		)
	}
	for (; (i = t.lastChild); ) t.removeChild(i)
	if (typeof r == 'function') {
		var s = r
		r = function () {
			var u = iu(a)
			s.call(u)
		}
	}
	var a = d0(t, 0, !1, null, null, !1, !1, '', sp)
	return (
		(t._reactRootContainer = a),
		(t[Er] = a.current),
		os(t.nodeType === 8 ? t.parentNode : t),
		Hi(function () {
			Nu(e, a, n, r)
		}),
		a
	)
}
function Au(t, e, n, r, i) {
	var o = n._reactRootContainer
	if (o) {
		var l = o
		if (typeof i == 'function') {
			var s = i
			i = function () {
				var a = iu(l)
				s.call(a)
			}
		}
		Nu(e, l, t, i)
	} else l = V5(n, e, t, i, r)
	return iu(l)
}
Gh = function (t) {
	switch (t.tag) {
		case 3:
			var e = t.stateNode
			if (e.current.memoizedState.isDehydrated) {
				var n = kl(e.pendingLanes)
				n !== 0 &&
					(D1(e, n | 1),
					Kt(e, Je()),
					(ve & 6) === 0 && ((Ho = Je() + 500), gi()))
			}
			break
		case 13:
			Hi(function () {
				var r = zr(t, 1)
				if (r !== null) {
					var i = Bt()
					Wn(r, t, 1, i)
				}
			}),
				p0(t, 1)
	}
}
A1 = function (t) {
	if (t.tag === 13) {
		var e = zr(t, 134217728)
		if (e !== null) {
			var n = Bt()
			Wn(e, t, 134217728, n)
		}
		p0(t, 134217728)
	}
}
Qh = function (t) {
	if (t.tag === 13) {
		var e = ei(t),
			n = zr(t, e)
		if (n !== null) {
			var r = Bt()
			Wn(n, t, e, r)
		}
		p0(t, e)
	}
}
Kh = function () {
	return Se
}
Zh = function (t, e) {
	var n = Se
	try {
		return (Se = t), e()
	} finally {
		Se = n
	}
}
cf = function (t, e, n) {
	switch (e) {
		case 'input':
			if ((nf(t, n), (e = n.name), n.type === 'radio' && e != null)) {
				for (n = t; n.parentNode; ) n = n.parentNode
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
					),
						e = 0;
					e < n.length;
					e++
				) {
					var r = n[e]
					if (r !== t && r.form === t.form) {
						var i = Eu(r)
						if (!i) throw Error(L(90))
						Rh(r), nf(r, i)
					}
				}
			}
			break
		case 'textarea':
			Mh(t, n)
			break
		case 'select':
			;(e = n.value), e != null && Po(t, !!n.multiple, e, !1)
	}
}
Fh = a0
$h = Hi
var H5 = { usingClientEntryPoint: !1, Events: [zs, go, Eu, Ih, jh, a0] },
	vl = {
		findFiberByHostInstance: Pi,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	W5 = {
		bundleType: vl.bundleType,
		version: vl.version,
		rendererPackageName: vl.rendererPackageName,
		rendererConfig: vl.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Or.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (t) {
			return (t = Uh(t)), t === null ? null : t.stateNode
		},
		findFiberByHostInstance: vl.findFiberByHostInstance || U5,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	}
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__
	if (!Qs.isDisabled && Qs.supportsFiber)
		try {
			;(xu = Qs.inject(W5)), (lr = Qs)
		} catch {}
}
vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H5
vn.createPortal = function (t, e) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
	if (!g0(e)) throw Error(L(200))
	return B5(t, e, null, n)
}
vn.createRoot = function (t, e) {
	if (!g0(t)) throw Error(L(299))
	var n = !1,
		r = '',
		i = xg
	return (
		e != null &&
			(e.unstable_strictMode === !0 && (n = !0),
			e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
			e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
		(e = d0(t, 1, !1, null, null, n, !1, r, i)),
		(t[Er] = e.current),
		os(t.nodeType === 8 ? t.parentNode : t),
		new h0(e)
	)
}
vn.findDOMNode = function (t) {
	if (t == null) return null
	if (t.nodeType === 1) return t
	var e = t._reactInternals
	if (e === void 0)
		throw typeof t.render == 'function'
			? Error(L(188))
			: ((t = Object.keys(t).join(',')), Error(L(268, t)))
	return (t = Uh(e)), (t = t === null ? null : t.stateNode), t
}
vn.flushSync = function (t) {
	return Hi(t)
}
vn.hydrate = function (t, e, n) {
	if (!Du(e)) throw Error(L(200))
	return Au(null, t, e, !0, n)
}
vn.hydrateRoot = function (t, e, n) {
	if (!g0(t)) throw Error(L(405))
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = '',
		l = xg
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
		(e = wg(e, null, t, 1, n != null ? n : null, i, !1, o, l)),
		(t[Er] = e.current),
		os(t),
		r)
	)
		for (t = 0; t < r.length; t++)
			(n = r[t]),
				(i = n._getVersion),
				(i = i(n._source)),
				e.mutableSourceEagerHydrationData == null
					? (e.mutableSourceEagerHydrationData = [n, i])
					: e.mutableSourceEagerHydrationData.push(n, i)
	return new Lu(e)
}
vn.render = function (t, e, n) {
	if (!Du(e)) throw Error(L(200))
	return Au(null, t, e, !1, n)
}
vn.unmountComponentAtNode = function (t) {
	if (!Du(t)) throw Error(L(40))
	return t._reactRootContainer
		? (Hi(function () {
				Au(null, null, t, !1, function () {
					;(t._reactRootContainer = null), (t[Er] = null)
				})
		  }),
		  !0)
		: !1
}
vn.unstable_batchedUpdates = a0
vn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
	if (!Du(n)) throw Error(L(200))
	if (t == null || t._reactInternals === void 0) throw Error(L(38))
	return Au(t, e, n, !1, r)
}
vn.version = '18.2.0-next-9e3b772b8-20220608'
;(function (t) {
	function e() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
			} catch (n) {
				console.error(n)
			}
	}
	e(), (t.exports = vn)
})(ph)
var ap = ph.exports
;(Xc.createRoot = ap.createRoot), (Xc.hydrateRoot = ap.hydrateRoot)
var Iu = { exports: {} },
	ke = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yt = typeof Symbol == 'function' && Symbol.for,
	m0 = yt ? Symbol.for('react.element') : 60103,
	v0 = yt ? Symbol.for('react.portal') : 60106,
	ju = yt ? Symbol.for('react.fragment') : 60107,
	Fu = yt ? Symbol.for('react.strict_mode') : 60108,
	$u = yt ? Symbol.for('react.profiler') : 60114,
	bu = yt ? Symbol.for('react.provider') : 60109,
	Bu = yt ? Symbol.for('react.context') : 60110,
	y0 = yt ? Symbol.for('react.async_mode') : 60111,
	Uu = yt ? Symbol.for('react.concurrent_mode') : 60111,
	Vu = yt ? Symbol.for('react.forward_ref') : 60112,
	Hu = yt ? Symbol.for('react.suspense') : 60113,
	q5 = yt ? Symbol.for('react.suspense_list') : 60120,
	Wu = yt ? Symbol.for('react.memo') : 60115,
	qu = yt ? Symbol.for('react.lazy') : 60116,
	Y5 = yt ? Symbol.for('react.block') : 60121,
	X5 = yt ? Symbol.for('react.fundamental') : 60117,
	G5 = yt ? Symbol.for('react.responder') : 60118,
	Q5 = yt ? Symbol.for('react.scope') : 60119
function _n(t) {
	if (typeof t == 'object' && t !== null) {
		var e = t.$$typeof
		switch (e) {
			case m0:
				switch (((t = t.type), t)) {
					case y0:
					case Uu:
					case ju:
					case $u:
					case Fu:
					case Hu:
						return t
					default:
						switch (((t = t && t.$$typeof), t)) {
							case Bu:
							case Vu:
							case qu:
							case Wu:
							case bu:
								return t
							default:
								return e
						}
				}
			case v0:
				return e
		}
	}
}
function Sg(t) {
	return _n(t) === Uu
}
ke.AsyncMode = y0
ke.ConcurrentMode = Uu
ke.ContextConsumer = Bu
ke.ContextProvider = bu
ke.Element = m0
ke.ForwardRef = Vu
ke.Fragment = ju
ke.Lazy = qu
ke.Memo = Wu
ke.Portal = v0
ke.Profiler = $u
ke.StrictMode = Fu
ke.Suspense = Hu
ke.isAsyncMode = function (t) {
	return Sg(t) || _n(t) === y0
}
ke.isConcurrentMode = Sg
ke.isContextConsumer = function (t) {
	return _n(t) === Bu
}
ke.isContextProvider = function (t) {
	return _n(t) === bu
}
ke.isElement = function (t) {
	return typeof t == 'object' && t !== null && t.$$typeof === m0
}
ke.isForwardRef = function (t) {
	return _n(t) === Vu
}
ke.isFragment = function (t) {
	return _n(t) === ju
}
ke.isLazy = function (t) {
	return _n(t) === qu
}
ke.isMemo = function (t) {
	return _n(t) === Wu
}
ke.isPortal = function (t) {
	return _n(t) === v0
}
ke.isProfiler = function (t) {
	return _n(t) === $u
}
ke.isStrictMode = function (t) {
	return _n(t) === Fu
}
ke.isSuspense = function (t) {
	return _n(t) === Hu
}
ke.isValidElementType = function (t) {
	return (
		typeof t == 'string' ||
		typeof t == 'function' ||
		t === ju ||
		t === Uu ||
		t === $u ||
		t === Fu ||
		t === Hu ||
		t === q5 ||
		(typeof t == 'object' &&
			t !== null &&
			(t.$$typeof === qu ||
				t.$$typeof === Wu ||
				t.$$typeof === bu ||
				t.$$typeof === Bu ||
				t.$$typeof === Vu ||
				t.$$typeof === X5 ||
				t.$$typeof === G5 ||
				t.$$typeof === Q5 ||
				t.$$typeof === Y5))
	)
}
ke.typeOf = _n
;(function (t) {
	t.exports = ke
})(Iu)
function K5(t) {
	function e(D, j, I, H, E) {
		for (
			var Z = 0,
				A = 0,
				Ce = 0,
				re = 0,
				oe,
				U,
				he = 0,
				Ee = 0,
				ie,
				ye = (ie = oe = 0),
				T = 0,
				Pe = 0,
				_e = 0,
				Oe = 0,
				nn = I.length,
				wn = nn - 1,
				Te,
				J = '',
				we = '',
				Le = '',
				_t = '',
				De;
			T < nn;

		) {
			if (
				((U = I.charCodeAt(T)),
				T === wn &&
					A + re + Ce + Z !== 0 &&
					(A !== 0 && (U = A === 47 ? 10 : 47), (re = Ce = Z = 0), nn++, wn++),
				A + re + Ce + Z === 0)
			) {
				if (
					T === wn &&
					(0 < Pe && (J = J.replace(f, '')), 0 < J.trim().length)
				) {
					switch (U) {
						case 32:
						case 9:
						case 59:
						case 13:
						case 10:
							break
						default:
							J += I.charAt(T)
					}
					U = 59
				}
				switch (U) {
					case 123:
						for (
							J = J.trim(), oe = J.charCodeAt(0), ie = 1, Oe = ++T;
							T < nn;

						) {
							switch ((U = I.charCodeAt(T))) {
								case 123:
									ie++
									break
								case 125:
									ie--
									break
								case 47:
									switch ((U = I.charCodeAt(T + 1))) {
										case 42:
										case 47:
											e: {
												for (ye = T + 1; ye < wn; ++ye)
													switch (I.charCodeAt(ye)) {
														case 47:
															if (
																U === 42 &&
																I.charCodeAt(ye - 1) === 42 &&
																T + 2 !== ye
															) {
																T = ye + 1
																break e
															}
															break
														case 10:
															if (U === 47) {
																T = ye + 1
																break e
															}
													}
												T = ye
											}
									}
									break
								case 91:
									U++
								case 40:
									U++
								case 34:
								case 39:
									for (; T++ < wn && I.charCodeAt(T) !== U; );
							}
							if (ie === 0) break
							T++
						}
						switch (
							((ie = I.substring(Oe, T)),
							oe === 0 && (oe = (J = J.replace(d, '').trim()).charCodeAt(0)),
							oe)
						) {
							case 64:
								switch (
									(0 < Pe && (J = J.replace(f, '')), (U = J.charCodeAt(1)), U)
								) {
									case 100:
									case 109:
									case 115:
									case 45:
										Pe = j
										break
									default:
										Pe = q
								}
								if (
									((ie = e(j, Pe, ie, U, E + 1)),
									(Oe = ie.length),
									0 < O &&
										((Pe = n(q, J, _e)),
										(De = s(3, ie, Pe, j, ee, b, Oe, U, E, H)),
										(J = Pe.join('')),
										De !== void 0 &&
											(Oe = (ie = De.trim()).length) === 0 &&
											((U = 0), (ie = ''))),
									0 < Oe)
								)
									switch (U) {
										case 115:
											J = J.replace(z, l)
										case 100:
										case 109:
										case 45:
											ie = J + '{' + ie + '}'
											break
										case 107:
											;(J = J.replace(h, '$1 $2')),
												(ie = J + '{' + ie + '}'),
												(ie =
													Y === 1 || (Y === 2 && o('@' + ie, 3))
														? '@-webkit-' + ie + '@' + ie
														: '@' + ie)
											break
										default:
											;(ie = J + ie), H === 112 && (ie = ((we += ie), ''))
									}
								else ie = ''
								break
							default:
								ie = e(j, n(j, J, _e), ie, H, E + 1)
						}
						;(Le += ie),
							(ie = _e = Pe = ye = oe = 0),
							(J = ''),
							(U = I.charCodeAt(++T))
						break
					case 125:
					case 59:
						if (
							((J = (0 < Pe ? J.replace(f, '') : J).trim()),
							1 < (Oe = J.length))
						)
							switch (
								(ye === 0 &&
									((oe = J.charCodeAt(0)),
									oe === 45 || (96 < oe && 123 > oe)) &&
									(Oe = (J = J.replace(' ', ':')).length),
								0 < O &&
									(De = s(1, J, j, D, ee, b, we.length, H, E, H)) !== void 0 &&
									(Oe = (J = De.trim()).length) === 0 &&
									(J = '\0\0'),
								(oe = J.charCodeAt(0)),
								(U = J.charCodeAt(1)),
								oe)
							) {
								case 0:
									break
								case 64:
									if (U === 105 || U === 99) {
										_t += J + I.charAt(T)
										break
									}
								default:
									J.charCodeAt(Oe - 1) !== 58 &&
										(we += i(J, oe, U, J.charCodeAt(2)))
							}
						;(_e = Pe = ye = oe = 0), (J = ''), (U = I.charCodeAt(++T))
				}
			}
			switch (U) {
				case 13:
				case 10:
					A === 47
						? (A = 0)
						: 1 + oe === 0 &&
						  H !== 107 &&
						  0 < J.length &&
						  ((Pe = 1), (J += '\0')),
						0 < O * x && s(0, J, j, D, ee, b, we.length, H, E, H),
						(b = 1),
						ee++
					break
				case 59:
				case 125:
					if (A + re + Ce + Z === 0) {
						b++
						break
					}
				default:
					switch ((b++, (Te = I.charAt(T)), U)) {
						case 9:
						case 32:
							if (re + Z + A === 0)
								switch (he) {
									case 44:
									case 58:
									case 9:
									case 32:
										Te = ''
										break
									default:
										U !== 32 && (Te = ' ')
								}
							break
						case 0:
							Te = '\\0'
							break
						case 12:
							Te = '\\f'
							break
						case 11:
							Te = '\\v'
							break
						case 38:
							re + A + Z === 0 && ((Pe = _e = 1), (Te = '\f' + Te))
							break
						case 108:
							if (re + A + Z + Q === 0 && 0 < ye)
								switch (T - ye) {
									case 2:
										he === 112 && I.charCodeAt(T - 3) === 58 && (Q = he)
									case 8:
										Ee === 111 && (Q = Ee)
								}
							break
						case 58:
							re + A + Z === 0 && (ye = T)
							break
						case 44:
							A + Ce + re + Z === 0 && ((Pe = 1), (Te += '\r'))
							break
						case 34:
						case 39:
							A === 0 && (re = re === U ? 0 : re === 0 ? U : re)
							break
						case 91:
							re + A + Ce === 0 && Z++
							break
						case 93:
							re + A + Ce === 0 && Z--
							break
						case 41:
							re + A + Z === 0 && Ce--
							break
						case 40:
							if (re + A + Z === 0) {
								if (oe === 0)
									switch (2 * he + 3 * Ee) {
										case 533:
											break
										default:
											oe = 1
									}
								Ce++
							}
							break
						case 64:
							A + Ce + re + Z + ye + ie === 0 && (ie = 1)
							break
						case 42:
						case 47:
							if (!(0 < re + Z + Ce))
								switch (A) {
									case 0:
										switch (2 * U + 3 * I.charCodeAt(T + 1)) {
											case 235:
												A = 47
												break
											case 220:
												;(Oe = T), (A = 42)
										}
										break
									case 42:
										U === 47 &&
											he === 42 &&
											Oe + 2 !== T &&
											(I.charCodeAt(Oe + 2) === 33 &&
												(we += I.substring(Oe, T + 1)),
											(Te = ''),
											(A = 0))
								}
					}
					A === 0 && (J += Te)
			}
			;(Ee = he), (he = U), T++
		}
		if (((Oe = we.length), 0 < Oe)) {
			if (
				((Pe = j),
				0 < O &&
					((De = s(2, we, Pe, D, ee, b, Oe, H, E, H)),
					De !== void 0 && (we = De).length === 0))
			)
				return _t + we + Le
			if (((we = Pe.join(',') + '{' + we + '}'), Y * Q !== 0)) {
				switch ((Y !== 2 || o(we, 2) || (Q = 0), Q)) {
					case 111:
						we = we.replace(_, ':-moz-$1') + we
						break
					case 112:
						we =
							we.replace(y, '::-webkit-input-$1') +
							we.replace(y, '::-moz-$1') +
							we.replace(y, ':-ms-input-$1') +
							we
				}
				Q = 0
			}
		}
		return _t + we + Le
	}
	function n(D, j, I) {
		var H = j.trim().split(w)
		j = H
		var E = H.length,
			Z = D.length
		switch (Z) {
			case 0:
			case 1:
				var A = 0
				for (D = Z === 0 ? '' : D[0] + ' '; A < E; ++A)
					j[A] = r(D, j[A], I).trim()
				break
			default:
				var Ce = (A = 0)
				for (j = []; A < E; ++A)
					for (var re = 0; re < Z; ++re)
						j[Ce++] = r(D[re] + ' ', H[A], I).trim()
		}
		return j
	}
	function r(D, j, I) {
		var H = j.charCodeAt(0)
		switch ((33 > H && (H = (j = j.trim()).charCodeAt(0)), H)) {
			case 38:
				return j.replace(m, '$1' + D.trim())
			case 58:
				return D.trim() + j.replace(m, '$1' + D.trim())
			default:
				if (0 < 1 * I && 0 < j.indexOf('\f'))
					return j.replace(m, (D.charCodeAt(0) === 58 ? '' : '$1') + D.trim())
		}
		return D + j
	}
	function i(D, j, I, H) {
		var E = D + ';',
			Z = 2 * j + 3 * I + 4 * H
		if (Z === 944) {
			D = E.indexOf(':', 9) + 1
			var A = E.substring(D, E.length - 1).trim()
			return (
				(A = E.substring(0, D).trim() + A + ';'),
				Y === 1 || (Y === 2 && o(A, 1)) ? '-webkit-' + A + A : A
			)
		}
		if (Y === 0 || (Y === 2 && !o(E, 1))) return E
		switch (Z) {
			case 1015:
				return E.charCodeAt(10) === 97 ? '-webkit-' + E + E : E
			case 951:
				return E.charCodeAt(3) === 116 ? '-webkit-' + E + E : E
			case 963:
				return E.charCodeAt(5) === 110 ? '-webkit-' + E + E : E
			case 1009:
				if (E.charCodeAt(4) !== 100) break
			case 969:
			case 942:
				return '-webkit-' + E + E
			case 978:
				return '-webkit-' + E + '-moz-' + E + E
			case 1019:
			case 983:
				return '-webkit-' + E + '-moz-' + E + '-ms-' + E + E
			case 883:
				if (E.charCodeAt(8) === 45) return '-webkit-' + E + E
				if (0 < E.indexOf('image-set(', 11))
					return E.replace(F, '$1-webkit-$2') + E
				break
			case 932:
				if (E.charCodeAt(4) === 45)
					switch (E.charCodeAt(5)) {
						case 103:
							return (
								'-webkit-box-' +
								E.replace('-grow', '') +
								'-webkit-' +
								E +
								'-ms-' +
								E.replace('grow', 'positive') +
								E
							)
						case 115:
							return (
								'-webkit-' + E + '-ms-' + E.replace('shrink', 'negative') + E
							)
						case 98:
							return (
								'-webkit-' +
								E +
								'-ms-' +
								E.replace('basis', 'preferred-size') +
								E
							)
					}
				return '-webkit-' + E + '-ms-' + E + E
			case 964:
				return '-webkit-' + E + '-ms-flex-' + E + E
			case 1023:
				if (E.charCodeAt(8) !== 99) break
				return (
					(A = E.substring(E.indexOf(':', 15))
						.replace('flex-', '')
						.replace('space-between', 'justify')),
					'-webkit-box-pack' + A + '-webkit-' + E + '-ms-flex-pack' + A + E
				)
			case 1005:
				return v.test(E)
					? E.replace(p, ':-webkit-') + E.replace(p, ':-moz-') + E
					: E
			case 1e3:
				switch (
					((A = E.substring(13).trim()),
					(j = A.indexOf('-') + 1),
					A.charCodeAt(0) + A.charCodeAt(j))
				) {
					case 226:
						A = E.replace(S, 'tb')
						break
					case 232:
						A = E.replace(S, 'tb-rl')
						break
					case 220:
						A = E.replace(S, 'lr')
						break
					default:
						return E
				}
				return '-webkit-' + E + '-ms-' + A + E
			case 1017:
				if (E.indexOf('sticky', 9) === -1) break
			case 975:
				switch (
					((j = (E = D).length - 10),
					(A = (E.charCodeAt(j) === 33 ? E.substring(0, j) : E)
						.substring(D.indexOf(':', 7) + 1)
						.trim()),
					(Z = A.charCodeAt(0) + (A.charCodeAt(7) | 0)))
				) {
					case 203:
						if (111 > A.charCodeAt(8)) break
					case 115:
						E = E.replace(A, '-webkit-' + A) + ';' + E
						break
					case 207:
					case 102:
						E =
							E.replace(A, '-webkit-' + (102 < Z ? 'inline-' : '') + 'box') +
							';' +
							E.replace(A, '-webkit-' + A) +
							';' +
							E.replace(A, '-ms-' + A + 'box') +
							';' +
							E
				}
				return E + ';'
			case 938:
				if (E.charCodeAt(5) === 45)
					switch (E.charCodeAt(6)) {
						case 105:
							return (
								(A = E.replace('-items', '')),
								'-webkit-' + E + '-webkit-box-' + A + '-ms-flex-' + A + E
							)
						case 115:
							return '-webkit-' + E + '-ms-flex-item-' + E.replace(P, '') + E
						default:
							return (
								'-webkit-' +
								E +
								'-ms-flex-line-pack' +
								E.replace('align-content', '').replace(P, '') +
								E
							)
					}
				break
			case 973:
			case 989:
				if (E.charCodeAt(3) !== 45 || E.charCodeAt(4) === 122) break
			case 931:
			case 953:
				if (M.test(D) === !0)
					return (A = D.substring(D.indexOf(':') + 1)).charCodeAt(0) === 115
						? i(D.replace('stretch', 'fill-available'), j, I, H).replace(
								':fill-available',
								':stretch'
						  )
						: E.replace(A, '-webkit-' + A) +
								E.replace(A, '-moz-' + A.replace('fill-', '')) +
								E
				break
			case 962:
				if (
					((E =
						'-webkit-' + E + (E.charCodeAt(5) === 102 ? '-ms-' + E : '') + E),
					I + H === 211 &&
						E.charCodeAt(13) === 105 &&
						0 < E.indexOf('transform', 10))
				)
					return (
						E.substring(0, E.indexOf(';', 27) + 1).replace(g, '$1-webkit-$2') +
						E
					)
		}
		return E
	}
	function o(D, j) {
		var I = D.indexOf(j === 1 ? ':' : '{'),
			H = D.substring(0, j !== 3 ? I : 10)
		return (
			(I = D.substring(I + 1, D.length - 1)),
			B(j !== 2 ? H : H.replace(R, '$1'), I, j)
		)
	}
	function l(D, j) {
		var I = i(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2))
		return I !== j + ';' ? I.replace(C, ' or ($1)').substring(4) : '(' + j + ')'
	}
	function s(D, j, I, H, E, Z, A, Ce, re, oe) {
		for (var U = 0, he = j, Ee; U < O; ++U)
			switch ((Ee = K[U].call(c, D, he, I, H, E, Z, A, Ce, re, oe))) {
				case void 0:
				case !1:
				case !0:
				case null:
					break
				default:
					he = Ee
			}
		if (he !== j) return he
	}
	function a(D) {
		switch (D) {
			case void 0:
			case null:
				O = K.length = 0
				break
			default:
				if (typeof D == 'function') K[O++] = D
				else if (typeof D == 'object')
					for (var j = 0, I = D.length; j < I; ++j) a(D[j])
				else x = !!D | 0
		}
		return a
	}
	function u(D) {
		return (
			(D = D.prefix),
			D !== void 0 &&
				((B = null),
				D ? (typeof D != 'function' ? (Y = 1) : ((Y = 2), (B = D))) : (Y = 0)),
			u
		)
	}
	function c(D, j) {
		var I = D
		if ((33 > I.charCodeAt(0) && (I = I.trim()), (te = I), (I = [te]), 0 < O)) {
			var H = s(-1, j, I, I, ee, b, 0, 0, 0, 0)
			H !== void 0 && typeof H == 'string' && (j = H)
		}
		var E = e(q, I, j, 0, 0)
		return (
			0 < O &&
				((H = s(-2, E, I, I, ee, b, E.length, 0, 0, 0)),
				H !== void 0 && (E = H)),
			(te = ''),
			(Q = 0),
			(b = ee = 1),
			E
		)
	}
	var d = /^\0+/g,
		f = /[\0\r\f]/g,
		p = /: */g,
		v = /zoo|gra/,
		g = /([,: ])(transform)/g,
		w = /,\r+?/g,
		m = /([\t\r\n ])*\f?&/g,
		h = /@(k\w+)\s*(\S*)\s*/,
		y = /::(place)/g,
		_ = /:(read-only)/g,
		S = /[svh]\w+-[tblr]{2}/,
		z = /\(\s*(.*)\s*\)/g,
		C = /([\s\S]*?);/g,
		P = /-self|flex-/g,
		R = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
		M = /stretch|:\s*\w+\-(?:conte|avail)/,
		F = /([^-])(image-set\()/,
		b = 1,
		ee = 1,
		Q = 0,
		Y = 1,
		q = [],
		K = [],
		O = 0,
		B = null,
		x = 0,
		te = ''
	return (c.use = a), (c.set = u), t !== void 0 && u(t), c
}
var Z5 = {
	animationIterationCount: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1,
}
function J5(t) {
	var e = Object.create(null)
	return function (n) {
		return e[n] === void 0 && (e[n] = t(n)), e[n]
	}
}
var ev =
		/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
	up = J5(function (t) {
		return (
			ev.test(t) ||
			(t.charCodeAt(0) === 111 &&
				t.charCodeAt(1) === 110 &&
				t.charCodeAt(2) < 91)
		)
	}),
	_0 = Iu.exports,
	tv = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0,
	},
	nv = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0,
	},
	rv = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
	},
	kg = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0,
	},
	w0 = {}
w0[_0.ForwardRef] = rv
w0[_0.Memo] = kg
function cp(t) {
	return _0.isMemo(t) ? kg : w0[t.$$typeof] || tv
}
var iv = Object.defineProperty,
	ov = Object.getOwnPropertyNames,
	fp = Object.getOwnPropertySymbols,
	lv = Object.getOwnPropertyDescriptor,
	sv = Object.getPrototypeOf,
	dp = Object.prototype
function Cg(t, e, n) {
	if (typeof e != 'string') {
		if (dp) {
			var r = sv(e)
			r && r !== dp && Cg(t, r, n)
		}
		var i = ov(e)
		fp && (i = i.concat(fp(e)))
		for (var o = cp(t), l = cp(e), s = 0; s < i.length; ++s) {
			var a = i[s]
			if (!nv[a] && !(n && n[a]) && !(l && l[a]) && !(o && o[a])) {
				var u = lv(e, a)
				try {
					iv(t, a, u)
				} catch {}
			}
		}
	}
	return t
}
var av = Cg
function or() {
	return (or =
		Object.assign ||
		function (t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e]
				for (var r in n)
					Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
			}
			return t
		}).apply(this, arguments)
}
var pp = function (t, e) {
		for (var n = [t[0]], r = 0, i = e.length; r < i; r += 1)
			n.push(e[r], t[r + 1])
		return n
	},
	Vf = function (t) {
		return (
			t !== null &&
			typeof t == 'object' &&
			(t.toString ? t.toString() : Object.prototype.toString.call(t)) ===
				'[object Object]' &&
			!Iu.exports.typeOf(t)
		)
	},
	ou = Object.freeze([]),
	ni = Object.freeze({})
function hs(t) {
	return typeof t == 'function'
}
function hp(t) {
	return t.displayName || t.name || 'Component'
}
function x0(t) {
	return t && typeof t.styledComponentId == 'string'
}
var Wo =
		(typeof process < 'u' && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
		'data-styled',
	S0 = typeof window < 'u' && 'HTMLElement' in window,
	uv = Boolean(
		typeof SC_DISABLE_SPEEDY == 'boolean'
			? SC_DISABLE_SPEEDY
			: typeof process < 'u' &&
			  {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
			  {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
			? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
			  {}.REACT_APP_SC_DISABLE_SPEEDY
			: typeof process < 'u' &&
			  {}.SC_DISABLE_SPEEDY !== void 0 &&
			  {}.SC_DISABLE_SPEEDY !== ''
			? {}.SC_DISABLE_SPEEDY !== 'false' && {}.SC_DISABLE_SPEEDY
			: !1
	),
	cv = {}
function Ts(t) {
	for (
		var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
		r < e;
		r++
	)
		n[r - 1] = arguments[r]
	throw new Error(
		'An error occurred. See https://git.io/JUIaE#' +
			t +
			' for more information.' +
			(n.length > 0 ? ' Args: ' + n.join(', ') : '')
	)
}
var fv = (function () {
		function t(n) {
			;(this.groupSizes = new Uint32Array(512)),
				(this.length = 512),
				(this.tag = n)
		}
		var e = t.prototype
		return (
			(e.indexOfGroup = function (n) {
				for (var r = 0, i = 0; i < n; i++) r += this.groupSizes[i]
				return r
			}),
			(e.insertRules = function (n, r) {
				if (n >= this.groupSizes.length) {
					for (var i = this.groupSizes, o = i.length, l = o; n >= l; )
						(l <<= 1) < 0 && Ts(16, '' + n)
					;(this.groupSizes = new Uint32Array(l)),
						this.groupSizes.set(i),
						(this.length = l)
					for (var s = o; s < l; s++) this.groupSizes[s] = 0
				}
				for (var a = this.indexOfGroup(n + 1), u = 0, c = r.length; u < c; u++)
					this.tag.insertRule(a, r[u]) && (this.groupSizes[n]++, a++)
			}),
			(e.clearGroup = function (n) {
				if (n < this.length) {
					var r = this.groupSizes[n],
						i = this.indexOfGroup(n),
						o = i + r
					this.groupSizes[n] = 0
					for (var l = i; l < o; l++) this.tag.deleteRule(i)
				}
			}),
			(e.getGroup = function (n) {
				var r = ''
				if (n >= this.length || this.groupSizes[n] === 0) return r
				for (
					var i = this.groupSizes[n],
						o = this.indexOfGroup(n),
						l = o + i,
						s = o;
					s < l;
					s++
				)
					r +=
						this.tag.getRule(s) +
						`/*!sc*/
`
				return r
			}),
			t
		)
	})(),
	ka = new Map(),
	lu = new Map(),
	$l = 1,
	Ks = function (t) {
		if (ka.has(t)) return ka.get(t)
		for (; lu.has($l); ) $l++
		var e = $l++
		return ka.set(t, e), lu.set(e, t), e
	},
	dv = function (t) {
		return lu.get(t)
	},
	pv = function (t, e) {
		e >= $l && ($l = e + 1), ka.set(t, e), lu.set(e, t)
	},
	hv = 'style[' + Wo + '][data-styled-version="5.3.6"]',
	gv = new RegExp('^' + Wo + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
	mv = function (t, e, n) {
		for (var r, i = n.split(','), o = 0, l = i.length; o < l; o++)
			(r = i[o]) && t.registerName(e, r)
	},
	vv = function (t, e) {
		for (
			var n = (e.textContent || '').split(`/*!sc*/
`),
				r = [],
				i = 0,
				o = n.length;
			i < o;
			i++
		) {
			var l = n[i].trim()
			if (l) {
				var s = l.match(gv)
				if (s) {
					var a = 0 | parseInt(s[1], 10),
						u = s[2]
					a !== 0 && (pv(u, a), mv(t, u, s[3]), t.getTag().insertRules(a, r)),
						(r.length = 0)
				} else r.push(l)
			}
		}
	},
	yv = function () {
		return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null
	},
	Eg = function (t) {
		var e = document.head,
			n = t || e,
			r = document.createElement('style'),
			i = (function (s) {
				for (var a = s.childNodes, u = a.length; u >= 0; u--) {
					var c = a[u]
					if (c && c.nodeType === 1 && c.hasAttribute(Wo)) return c
				}
			})(n),
			o = i !== void 0 ? i.nextSibling : null
		r.setAttribute(Wo, 'active'), r.setAttribute('data-styled-version', '5.3.6')
		var l = yv()
		return l && r.setAttribute('nonce', l), n.insertBefore(r, o), r
	},
	_v = (function () {
		function t(n) {
			var r = (this.element = Eg(n))
			r.appendChild(document.createTextNode('')),
				(this.sheet = (function (i) {
					if (i.sheet) return i.sheet
					for (var o = document.styleSheets, l = 0, s = o.length; l < s; l++) {
						var a = o[l]
						if (a.ownerNode === i) return a
					}
					Ts(17)
				})(r)),
				(this.length = 0)
		}
		var e = t.prototype
		return (
			(e.insertRule = function (n, r) {
				try {
					return this.sheet.insertRule(r, n), this.length++, !0
				} catch {
					return !1
				}
			}),
			(e.deleteRule = function (n) {
				this.sheet.deleteRule(n), this.length--
			}),
			(e.getRule = function (n) {
				var r = this.sheet.cssRules[n]
				return r !== void 0 && typeof r.cssText == 'string' ? r.cssText : ''
			}),
			t
		)
	})(),
	wv = (function () {
		function t(n) {
			var r = (this.element = Eg(n))
			;(this.nodes = r.childNodes), (this.length = 0)
		}
		var e = t.prototype
		return (
			(e.insertRule = function (n, r) {
				if (n <= this.length && n >= 0) {
					var i = document.createTextNode(r),
						o = this.nodes[n]
					return this.element.insertBefore(i, o || null), this.length++, !0
				}
				return !1
			}),
			(e.deleteRule = function (n) {
				this.element.removeChild(this.nodes[n]), this.length--
			}),
			(e.getRule = function (n) {
				return n < this.length ? this.nodes[n].textContent : ''
			}),
			t
		)
	})(),
	xv = (function () {
		function t(n) {
			;(this.rules = []), (this.length = 0)
		}
		var e = t.prototype
		return (
			(e.insertRule = function (n, r) {
				return (
					n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
				)
			}),
			(e.deleteRule = function (n) {
				this.rules.splice(n, 1), this.length--
			}),
			(e.getRule = function (n) {
				return n < this.length ? this.rules[n] : ''
			}),
			t
		)
	})(),
	gp = S0,
	Sv = { isServer: !S0, useCSSOMInjection: !uv },
	su = (function () {
		function t(n, r, i) {
			n === void 0 && (n = ni),
				r === void 0 && (r = {}),
				(this.options = or({}, Sv, {}, n)),
				(this.gs = r),
				(this.names = new Map(i)),
				(this.server = !!n.isServer),
				!this.server &&
					S0 &&
					gp &&
					((gp = !1),
					(function (o) {
						for (
							var l = document.querySelectorAll(hv), s = 0, a = l.length;
							s < a;
							s++
						) {
							var u = l[s]
							u &&
								u.getAttribute(Wo) !== 'active' &&
								(vv(o, u), u.parentNode && u.parentNode.removeChild(u))
						}
					})(this))
		}
		t.registerId = function (n) {
			return Ks(n)
		}
		var e = t.prototype
		return (
			(e.reconstructWithOptions = function (n, r) {
				return (
					r === void 0 && (r = !0),
					new t(
						or({}, this.options, {}, n),
						this.gs,
						(r && this.names) || void 0
					)
				)
			}),
			(e.allocateGSInstance = function (n) {
				return (this.gs[n] = (this.gs[n] || 0) + 1)
			}),
			(e.getTag = function () {
				return (
					this.tag ||
					(this.tag =
						((i = (r = this.options).isServer),
						(o = r.useCSSOMInjection),
						(l = r.target),
						(n = i ? new xv(l) : o ? new _v(l) : new wv(l)),
						new fv(n)))
				)
			}),
			(e.hasNameForId = function (n, r) {
				return this.names.has(n) && this.names.get(n).has(r)
			}),
			(e.registerName = function (n, r) {
				if ((Ks(n), this.names.has(n))) this.names.get(n).add(r)
				else {
					var i = new Set()
					i.add(r), this.names.set(n, i)
				}
			}),
			(e.insertRules = function (n, r, i) {
				this.registerName(n, r), this.getTag().insertRules(Ks(n), i)
			}),
			(e.clearNames = function (n) {
				this.names.has(n) && this.names.get(n).clear()
			}),
			(e.clearRules = function (n) {
				this.getTag().clearGroup(Ks(n)), this.clearNames(n)
			}),
			(e.clearTag = function () {
				this.tag = void 0
			}),
			(e.toString = function () {
				return (function (n) {
					for (var r = n.getTag(), i = r.length, o = '', l = 0; l < i; l++) {
						var s = dv(l)
						if (s !== void 0) {
							var a = n.names.get(s),
								u = r.getGroup(l)
							if (a && u && a.size) {
								var c = Wo + '.g' + l + '[id="' + s + '"]',
									d = ''
								a !== void 0 &&
									a.forEach(function (f) {
										f.length > 0 && (d += f + ',')
									}),
									(o +=
										'' +
										u +
										c +
										'{content:"' +
										d +
										`"}/*!sc*/
`)
							}
						}
					}
					return o
				})(this)
			}),
			t
		)
	})(),
	kv = /(a)(d)/gi,
	mp = function (t) {
		return String.fromCharCode(t + (t > 25 ? 39 : 97))
	}
function Hf(t) {
	var e,
		n = ''
	for (e = Math.abs(t); e > 52; e = (e / 52) | 0) n = mp(e % 52) + n
	return (mp(e % 52) + n).replace(kv, '$1-$2')
}
var So = function (t, e) {
		for (var n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n)
		return t
	},
	zg = function (t) {
		return So(5381, t)
	}
function Pg(t) {
	for (var e = 0; e < t.length; e += 1) {
		var n = t[e]
		if (hs(n) && !x0(n)) return !1
	}
	return !0
}
var Cv = zg('5.3.6'),
	Ev = (function () {
		function t(e, n, r) {
			;(this.rules = e),
				(this.staticRulesId = ''),
				(this.isStatic = (r === void 0 || r.isStatic) && Pg(e)),
				(this.componentId = n),
				(this.baseHash = So(Cv, n)),
				(this.baseStyle = r),
				su.registerId(n)
		}
		return (
			(t.prototype.generateAndInjectStyles = function (e, n, r) {
				var i = this.componentId,
					o = []
				if (
					(this.baseStyle &&
						o.push(this.baseStyle.generateAndInjectStyles(e, n, r)),
					this.isStatic && !r.hash)
				)
					if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId))
						o.push(this.staticRulesId)
					else {
						var l = Wi(this.rules, e, n, r).join(''),
							s = Hf(So(this.baseHash, l) >>> 0)
						if (!n.hasNameForId(i, s)) {
							var a = r(l, '.' + s, void 0, i)
							n.insertRules(i, s, a)
						}
						o.push(s), (this.staticRulesId = s)
					}
				else {
					for (
						var u = this.rules.length,
							c = So(this.baseHash, r.hash),
							d = '',
							f = 0;
						f < u;
						f++
					) {
						var p = this.rules[f]
						if (typeof p == 'string') d += p
						else if (p) {
							var v = Wi(p, e, n, r),
								g = Array.isArray(v) ? v.join('') : v
							;(c = So(c, g + f)), (d += g)
						}
					}
					if (d) {
						var w = Hf(c >>> 0)
						if (!n.hasNameForId(i, w)) {
							var m = r(d, '.' + w, void 0, i)
							n.insertRules(i, w, m)
						}
						o.push(w)
					}
				}
				return o.join(' ')
			}),
			t
		)
	})(),
	zv = /^\s*\/\/.*$/gm,
	Pv = [':', '[', '.', '#']
function Tv(t) {
	var e,
		n,
		r,
		i,
		o = t === void 0 ? ni : t,
		l = o.options,
		s = l === void 0 ? ni : l,
		a = o.plugins,
		u = a === void 0 ? ou : a,
		c = new K5(s),
		d = [],
		f = (function (g) {
			function w(m) {
				if (m)
					try {
						g(m + '}')
					} catch {}
			}
			return function (m, h, y, _, S, z, C, P, R, M) {
				switch (m) {
					case 1:
						if (R === 0 && h.charCodeAt(0) === 64) return g(h + ';'), ''
						break
					case 2:
						if (P === 0) return h + '/*|*/'
						break
					case 3:
						switch (P) {
							case 102:
							case 112:
								return g(y[0] + h), ''
							default:
								return h + (M === 0 ? '/*|*/' : '')
						}
					case -2:
						h.split('/*|*/}').forEach(w)
				}
			}
		})(function (g) {
			d.push(g)
		}),
		p = function (g, w, m) {
			return (w === 0 && Pv.indexOf(m[n.length]) !== -1) || m.match(i)
				? g
				: '.' + e
		}
	function v(g, w, m, h) {
		h === void 0 && (h = '&')
		var y = g.replace(zv, ''),
			_ = w && m ? m + ' ' + w + ' { ' + y + ' }' : y
		return (
			(e = h),
			(n = w),
			(r = new RegExp('\\' + n + '\\b', 'g')),
			(i = new RegExp('(\\' + n + '\\b){2,}')),
			c(m || !w ? '' : w, _)
		)
	}
	return (
		c.use(
			[].concat(u, [
				function (g, w, m) {
					g === 2 &&
						m.length &&
						m[0].lastIndexOf(n) > 0 &&
						(m[0] = m[0].replace(r, p))
				},
				f,
				function (g) {
					if (g === -2) {
						var w = d
						return (d = []), w
					}
				},
			])
		),
		(v.hash = u.length
			? u
					.reduce(function (g, w) {
						return w.name || Ts(15), So(g, w.name)
					}, 5381)
					.toString()
			: ''),
		v
	)
}
var Tg = kr.createContext()
Tg.Consumer
var Rg = kr.createContext(),
	Rv = (Rg.Consumer, new su()),
	Wf = Tv()
function Og() {
	return $.exports.useContext(Tg) || Rv
}
function Mg() {
	return $.exports.useContext(Rg) || Wf
}
var Ov = (function () {
		function t(e, n) {
			var r = this
			;(this.inject = function (i, o) {
				o === void 0 && (o = Wf)
				var l = r.name + o.hash
				i.hasNameForId(r.id, l) ||
					i.insertRules(r.id, l, o(r.rules, l, '@keyframes'))
			}),
				(this.toString = function () {
					return Ts(12, String(r.name))
				}),
				(this.name = e),
				(this.id = 'sc-keyframes-' + e),
				(this.rules = n)
		}
		return (
			(t.prototype.getName = function (e) {
				return e === void 0 && (e = Wf), this.name + e.hash
			}),
			t
		)
	})(),
	Mv = /([A-Z])/,
	Nv = /([A-Z])/g,
	Lv = /^ms-/,
	Dv = function (t) {
		return '-' + t.toLowerCase()
	}
function vp(t) {
	return Mv.test(t) ? t.replace(Nv, Dv).replace(Lv, '-ms-') : t
}
var yp = function (t) {
	return t == null || t === !1 || t === ''
}
function Wi(t, e, n, r) {
	if (Array.isArray(t)) {
		for (var i, o = [], l = 0, s = t.length; l < s; l += 1)
			(i = Wi(t[l], e, n, r)) !== '' &&
				(Array.isArray(i) ? o.push.apply(o, i) : o.push(i))
		return o
	}
	if (yp(t)) return ''
	if (x0(t)) return '.' + t.styledComponentId
	if (hs(t)) {
		if (
			typeof (u = t) != 'function' ||
			(u.prototype && u.prototype.isReactComponent) ||
			!e
		)
			return t
		var a = t(e)
		return Wi(a, e, n, r)
	}
	var u
	return t instanceof Ov
		? n
			? (t.inject(n, r), t.getName(r))
			: t
		: Vf(t)
		? (function c(d, f) {
				var p,
					v,
					g = []
				for (var w in d)
					d.hasOwnProperty(w) &&
						!yp(d[w]) &&
						((Array.isArray(d[w]) && d[w].isCss) || hs(d[w])
							? g.push(vp(w) + ':', d[w], ';')
							: Vf(d[w])
							? g.push.apply(g, c(d[w], w))
							: g.push(
									vp(w) +
										': ' +
										((p = w),
										(v = d[w]) == null || typeof v == 'boolean' || v === ''
											? ''
											: typeof v != 'number' || v === 0 || p in Z5
											? String(v).trim()
											: v + 'px') +
										';'
							  ))
				return f ? [f + ' {'].concat(g, ['}']) : g
		  })(t)
		: t.toString()
}
var _p = function (t) {
	return Array.isArray(t) && (t.isCss = !0), t
}
function Ng(t) {
	for (
		var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
		r < e;
		r++
	)
		n[r - 1] = arguments[r]
	return hs(t) || Vf(t)
		? _p(Wi(pp(ou, [t].concat(n))))
		: n.length === 0 && t.length === 1 && typeof t[0] == 'string'
		? t
		: _p(Wi(pp(t, n)))
}
var Lg = function (t, e, n) {
		return (
			n === void 0 && (n = ni), (t.theme !== n.theme && t.theme) || e || n.theme
		)
	},
	Av = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
	Iv = /(^-|-$)/g
function Tc(t) {
	return t.replace(Av, '-').replace(Iv, '')
}
var Dg = function (t) {
	return Hf(zg(t) >>> 0)
}
function Zs(t) {
	return typeof t == 'string' && !0
}
var qf = function (t) {
		return (
			typeof t == 'function' ||
			(typeof t == 'object' && t !== null && !Array.isArray(t))
		)
	},
	jv = function (t) {
		return t !== '__proto__' && t !== 'constructor' && t !== 'prototype'
	}
function Fv(t, e, n) {
	var r = t[n]
	qf(e) && qf(r) ? Ag(r, e) : (t[n] = e)
}
function Ag(t) {
	for (
		var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
		r < e;
		r++
	)
		n[r - 1] = arguments[r]
	for (var i = 0, o = n; i < o.length; i++) {
		var l = o[i]
		if (qf(l)) for (var s in l) jv(s) && Fv(t, l[s], s)
	}
	return t
}
var k0 = kr.createContext()
k0.Consumer
var Rc = {}
function Ig(t, e, n) {
	var r = x0(t),
		i = !Zs(t),
		o = e.attrs,
		l = o === void 0 ? ou : o,
		s = e.componentId,
		a =
			s === void 0
				? (function (h, y) {
						var _ = typeof h != 'string' ? 'sc' : Tc(h)
						Rc[_] = (Rc[_] || 0) + 1
						var S = _ + '-' + Dg('5.3.6' + _ + Rc[_])
						return y ? y + '-' + S : S
				  })(e.displayName, e.parentComponentId)
				: s,
		u = e.displayName,
		c =
			u === void 0
				? (function (h) {
						return Zs(h) ? 'styled.' + h : 'Styled(' + hp(h) + ')'
				  })(t)
				: u,
		d =
			e.displayName && e.componentId
				? Tc(e.displayName) + '-' + e.componentId
				: e.componentId || a,
		f = r && t.attrs ? Array.prototype.concat(t.attrs, l).filter(Boolean) : l,
		p = e.shouldForwardProp
	r &&
		t.shouldForwardProp &&
		(p = e.shouldForwardProp
			? function (h, y, _) {
					return t.shouldForwardProp(h, y, _) && e.shouldForwardProp(h, y, _)
			  }
			: t.shouldForwardProp)
	var v,
		g = new Ev(n, d, r ? t.componentStyle : void 0),
		w = g.isStatic && l.length === 0,
		m = function (h, y) {
			return (function (_, S, z, C) {
				var P = _.attrs,
					R = _.componentStyle,
					M = _.defaultProps,
					F = _.foldedComponentIds,
					b = _.shouldForwardProp,
					ee = _.styledComponentId,
					Q = _.target,
					Y = (function (H, E, Z) {
						H === void 0 && (H = ni)
						var A = or({}, E, { theme: H }),
							Ce = {}
						return (
							Z.forEach(function (re) {
								var oe,
									U,
									he,
									Ee = re
								for (oe in (hs(Ee) && (Ee = Ee(A)), Ee))
									A[oe] = Ce[oe] =
										oe === 'className'
											? ((U = Ce[oe]),
											  (he = Ee[oe]),
											  U && he ? U + ' ' + he : U || he)
											: Ee[oe]
							}),
							[A, Ce]
						)
					})(Lg(S, $.exports.useContext(k0), M) || ni, S, P),
					q = Y[0],
					K = Y[1],
					O = (function (H, E, Z, A) {
						var Ce = Og(),
							re = Mg(),
							oe = E
								? H.generateAndInjectStyles(ni, Ce, re)
								: H.generateAndInjectStyles(Z, Ce, re)
						return oe
					})(R, C, q),
					B = z,
					x = K.$as || S.$as || K.as || S.as || Q,
					te = Zs(x),
					D = K !== S ? or({}, S, {}, K) : S,
					j = {}
				for (var I in D)
					I[0] !== '$' &&
						I !== 'as' &&
						(I === 'forwardedAs'
							? (j.as = D[I])
							: (b ? b(I, up, x) : !te || up(I)) && (j[I] = D[I]))
				return (
					S.style &&
						K.style !== S.style &&
						(j.style = or({}, S.style, {}, K.style)),
					(j.className = Array.prototype
						.concat(F, ee, O !== ee ? O : null, S.className, K.className)
						.filter(Boolean)
						.join(' ')),
					(j.ref = B),
					$.exports.createElement(x, j)
				)
			})(v, h, y, w)
		}
	return (
		(m.displayName = c),
		((v = kr.forwardRef(m)).attrs = f),
		(v.componentStyle = g),
		(v.displayName = c),
		(v.shouldForwardProp = p),
		(v.foldedComponentIds = r
			? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId)
			: ou),
		(v.styledComponentId = d),
		(v.target = r ? t.target : t),
		(v.withComponent = function (h) {
			var y = e.componentId,
				_ = (function (z, C) {
					if (z == null) return {}
					var P,
						R,
						M = {},
						F = Object.keys(z)
					for (R = 0; R < F.length; R++)
						(P = F[R]), C.indexOf(P) >= 0 || (M[P] = z[P])
					return M
				})(e, ['componentId']),
				S = y && y + '-' + (Zs(h) ? h : Tc(hp(h)))
			return Ig(h, or({}, _, { attrs: f, componentId: S }), n)
		}),
		Object.defineProperty(v, 'defaultProps', {
			get: function () {
				return this._foldedDefaultProps
			},
			set: function (h) {
				this._foldedDefaultProps = r ? Ag({}, t.defaultProps, h) : h
			},
		}),
		(v.toString = function () {
			return '.' + v.styledComponentId
		}),
		i &&
			av(v, t, {
				attrs: !0,
				componentStyle: !0,
				displayName: !0,
				foldedComponentIds: !0,
				shouldForwardProp: !0,
				styledComponentId: !0,
				target: !0,
				withComponent: !0,
			}),
		v
	)
}
var Yf = function (t) {
	return (function e(n, r, i) {
		if ((i === void 0 && (i = ni), !Iu.exports.isValidElementType(r)))
			return Ts(1, String(r))
		var o = function () {
			return n(r, i, Ng.apply(void 0, arguments))
		}
		return (
			(o.withConfig = function (l) {
				return e(n, r, or({}, i, {}, l))
			}),
			(o.attrs = function (l) {
				return e(
					n,
					r,
					or({}, i, {
						attrs: Array.prototype.concat(i.attrs, l).filter(Boolean),
					})
				)
			}),
			o
		)
	})(Ig, t)
}
;[
	'a',
	'abbr',
	'address',
	'area',
	'article',
	'aside',
	'audio',
	'b',
	'base',
	'bdi',
	'bdo',
	'big',
	'blockquote',
	'body',
	'br',
	'button',
	'canvas',
	'caption',
	'cite',
	'code',
	'col',
	'colgroup',
	'data',
	'datalist',
	'dd',
	'del',
	'details',
	'dfn',
	'dialog',
	'div',
	'dl',
	'dt',
	'em',
	'embed',
	'fieldset',
	'figcaption',
	'figure',
	'footer',
	'form',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'head',
	'header',
	'hgroup',
	'hr',
	'html',
	'i',
	'iframe',
	'img',
	'input',
	'ins',
	'kbd',
	'keygen',
	'label',
	'legend',
	'li',
	'link',
	'main',
	'map',
	'mark',
	'marquee',
	'menu',
	'menuitem',
	'meta',
	'meter',
	'nav',
	'noscript',
	'object',
	'ol',
	'optgroup',
	'option',
	'output',
	'p',
	'param',
	'picture',
	'pre',
	'progress',
	'q',
	'rp',
	'rt',
	'ruby',
	's',
	'samp',
	'script',
	'section',
	'select',
	'small',
	'source',
	'span',
	'strong',
	'style',
	'sub',
	'summary',
	'sup',
	'table',
	'tbody',
	'td',
	'textarea',
	'tfoot',
	'th',
	'thead',
	'time',
	'title',
	'tr',
	'track',
	'u',
	'ul',
	'var',
	'video',
	'wbr',
	'circle',
	'clipPath',
	'defs',
	'ellipse',
	'foreignObject',
	'g',
	'image',
	'line',
	'linearGradient',
	'marker',
	'mask',
	'path',
	'pattern',
	'polygon',
	'polyline',
	'radialGradient',
	'rect',
	'stop',
	'svg',
	'text',
	'textPath',
	'tspan',
].forEach(function (t) {
	Yf[t] = Yf(t)
})
var $v = (function () {
	function t(n, r) {
		;(this.rules = n),
			(this.componentId = r),
			(this.isStatic = Pg(n)),
			su.registerId(this.componentId + 1)
	}
	var e = t.prototype
	return (
		(e.createStyles = function (n, r, i, o) {
			var l = o(Wi(this.rules, r, i, o).join(''), ''),
				s = this.componentId + n
			i.insertRules(s, s, l)
		}),
		(e.removeStyles = function (n, r) {
			r.clearRules(this.componentId + n)
		}),
		(e.renderStyles = function (n, r, i, o) {
			n > 2 && su.registerId(this.componentId + n),
				this.removeStyles(n, i),
				this.createStyles(n, r, i, o)
		}),
		t
	)
})()
function bv(t) {
	for (
		var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
		r < e;
		r++
	)
		n[r - 1] = arguments[r]
	var i = Ng.apply(void 0, [t].concat(n)),
		o = 'sc-global-' + Dg(JSON.stringify(i)),
		l = new $v(i, o)
	function s(u) {
		var c = Og(),
			d = Mg(),
			f = $.exports.useContext(k0),
			p = $.exports.useRef(c.allocateGSInstance(o)).current
		return (
			c.server && a(p, u, c, f, d),
			$.exports.useLayoutEffect(
				function () {
					if (!c.server)
						return (
							a(p, u, c, f, d),
							function () {
								return l.removeStyles(p, c)
							}
						)
				},
				[p, u, c, f, d]
			),
			null
		)
	}
	function a(u, c, d, f, p) {
		if (l.isStatic) l.renderStyles(u, cv, d, p)
		else {
			var v = or({}, c, { theme: Lg(c, f, s.defaultProps) })
			l.renderStyles(u, v, d, p)
		}
	}
	return kr.memo(s)
}
const ge = Yf
function hr(t) {
	if (t === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		)
	return t
}
function jg(t, e) {
	;(t.prototype = Object.create(e.prototype)),
		(t.prototype.constructor = t),
		(t.__proto__ = e)
}
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var pn = {
		autoSleep: 120,
		force3D: 'auto',
		nullTargetWarn: 1,
		units: { lineHeight: '' },
	},
	qo = { duration: 0.5, overwrite: !1, delay: 0 },
	C0,
	Zt,
	rt,
	Pn = 1e8,
	ze = 1 / Pn,
	Xf = Math.PI * 2,
	Bv = Xf / 4,
	Uv = 0,
	Fg = Math.sqrt,
	Vv = Math.cos,
	Hv = Math.sin,
	vt = function (e) {
		return typeof e == 'string'
	},
	Qe = function (e) {
		return typeof e == 'function'
	},
	Tr = function (e) {
		return typeof e == 'number'
	},
	E0 = function (e) {
		return typeof e > 'u'
	},
	cr = function (e) {
		return typeof e == 'object'
	},
	Jt = function (e) {
		return e !== !1
	},
	$g = function () {
		return typeof window < 'u'
	},
	Js = function (e) {
		return Qe(e) || vt(e)
	},
	bg =
		(typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
	Nt = Array.isArray,
	Gf = /(?:-?\.?\d|\.)+/gi,
	Bg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	ko = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	Oc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Ug = /[+-]=-?[.\d]+/,
	Vg = /[^,'"\[\]\s]+/gi,
	Wv = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	be,
	Sn,
	Qf,
	z0,
	gn = {},
	au = {},
	Hg,
	Wg = function (e) {
		return (au = qi(e, gn)) && mn
	},
	P0 = function (e, n) {
		return console.warn(
			'Invalid property',
			e,
			'set to',
			n,
			'Missing plugin? gsap.registerPlugin()'
		)
	},
	uu = function (e, n) {
		return !n && console.warn(e)
	},
	qg = function (e, n) {
		return (e && (gn[e] = n) && au && (au[e] = n)) || gn
	},
	gs = function () {
		return 0
	},
	qv = { suppressEvents: !0, isStart: !0, kill: !1 },
	Ca = { suppressEvents: !0, kill: !1 },
	Yv = { suppressEvents: !0 },
	T0 = {},
	ri = [],
	Kf = {},
	Yg,
	an = {},
	Mc = {},
	wp = 30,
	Ea = [],
	R0 = '',
	O0 = function (e) {
		var n = e[0],
			r,
			i
		if ((cr(n) || Qe(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
			for (i = Ea.length; i-- && !Ea[i].targetTest(n); );
			r = Ea[i]
		}
		for (i = e.length; i--; )
			(e[i] && (e[i]._gsap || (e[i]._gsap = new gm(e[i], r)))) || e.splice(i, 1)
		return e
	},
	Di = function (e) {
		return e._gsap || O0(Tn(e))[0]._gsap
	},
	Xg = function (e, n, r) {
		return (r = e[n]) && Qe(r)
			? e[n]()
			: (E0(r) && e.getAttribute && e.getAttribute(n)) || r
	},
	en = function (e, n) {
		return (e = e.split(',')).forEach(n) || e
	},
	Ze = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0
	},
	kt = function (e) {
		return Math.round(e * 1e7) / 1e7 || 0
	},
	Lo = function (e, n) {
		var r = n.charAt(0),
			i = parseFloat(n.substr(2))
		return (
			(e = parseFloat(e)),
			r === '+' ? e + i : r === '-' ? e - i : r === '*' ? e * i : e / i
		)
	},
	Xv = function (e, n) {
		for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
		return i < r
	},
	cu = function () {
		var e = ri.length,
			n = ri.slice(0),
			r,
			i
		for (Kf = {}, ri.length = 0, r = 0; r < e; r++)
			(i = n[r]),
				i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
	},
	Gg = function (e, n, r, i) {
		ri.length && cu(),
			e.render(n, r, i || (Zt && n < 0 && (e._initted || e._startAt))),
			ri.length && cu()
	},
	Qg = function (e) {
		var n = parseFloat(e)
		return (n || n === 0) && (e + '').match(Vg).length < 2
			? n
			: vt(e)
			? e.trim()
			: e
	},
	Kg = function (e) {
		return e
	},
	Dn = function (e, n) {
		for (var r in n) r in e || (e[r] = n[r])
		return e
	},
	Gv = function (e) {
		return function (n, r) {
			for (var i in r)
				i in n || (i === 'duration' && e) || i === 'ease' || (n[i] = r[i])
		}
	},
	qi = function (e, n) {
		for (var r in n) e[r] = n[r]
		return e
	},
	xp = function t(e, n) {
		for (var r in n)
			r !== '__proto__' &&
				r !== 'constructor' &&
				r !== 'prototype' &&
				(e[r] = cr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r])
		return e
	},
	fu = function (e, n) {
		var r = {},
			i
		for (i in e) i in n || (r[i] = e[i])
		return r
	},
	bl = function (e) {
		var n = e.parent || be,
			r = e.keyframes ? Gv(Nt(e.keyframes)) : Dn
		if (Jt(e.inherit))
			for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp)
		return e
	},
	Qv = function (e, n) {
		for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
		return r < 0
	},
	Zg = function (e, n, r, i, o) {
		r === void 0 && (r = '_first'), i === void 0 && (i = '_last')
		var l = e[i],
			s
		if (o) for (s = n[o]; l && l[o] > s; ) l = l._prev
		return (
			l ? ((n._next = l._next), (l._next = n)) : ((n._next = e[r]), (e[r] = n)),
			n._next ? (n._next._prev = n) : (e[i] = n),
			(n._prev = l),
			(n.parent = n._dp = e),
			n
		)
	},
	Yu = function (e, n, r, i) {
		r === void 0 && (r = '_first'), i === void 0 && (i = '_last')
		var o = n._prev,
			l = n._next
		o ? (o._next = l) : e[r] === n && (e[r] = l),
			l ? (l._prev = o) : e[i] === n && (e[i] = o),
			(n._next = n._prev = n.parent = null)
	},
	ci = function (e, n) {
		e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove(e),
			(e._act = 0)
	},
	Ai = function (e, n) {
		if (e && (!n || n._end > e._dur || n._start < 0))
			for (var r = e; r; ) (r._dirty = 1), (r = r.parent)
		return e
	},
	Kv = function (e) {
		for (var n = e.parent; n && n.parent; )
			(n._dirty = 1), n.totalDuration(), (n = n.parent)
		return e
	},
	Zf = function (e, n, r, i) {
		return (
			e._startAt &&
			(Zt
				? e._startAt.revert(Ca)
				: (e.vars.immediateRender && !e.vars.autoRevert) ||
				  e._startAt.render(n, !0, i))
		)
	},
	Zv = function t(e) {
		return !e || (e._ts && t(e.parent))
	},
	Sp = function (e) {
		return e._repeat ? Yo(e._tTime, (e = e.duration() + e._rDelay)) * e : 0
	},
	Yo = function (e, n) {
		var r = Math.floor((e /= n))
		return e && r === e ? r - 1 : r
	},
	du = function (e, n) {
		return (
			(e - n._start) * n._ts +
			(n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
		)
	},
	Xu = function (e) {
		return (e._end = kt(
			e._start + (e._tDur / Math.abs(e._ts || e._rts || ze) || 0)
		))
	},
	Gu = function (e, n) {
		var r = e._dp
		return (
			r &&
				r.smoothChildTiming &&
				e._ts &&
				((e._start = kt(
					r._time -
						(e._ts > 0
							? n / e._ts
							: ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
				)),
				Xu(e),
				r._dirty || Ai(r, e)),
			e
		)
	},
	Jg = function (e, n) {
		var r
		if (
			((n._time || (n._initted && !n._dur)) &&
				((r = du(e.rawTime(), n)),
				(!n._dur || Rs(0, n.totalDuration(), r) - n._tTime > ze) &&
					n.render(r, !0)),
			Ai(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
		) {
			if (e._dur < e.duration())
				for (r = e; r._dp; )
					r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp)
			e._zTime = -ze
		}
	},
	nr = function (e, n, r, i) {
		return (
			n.parent && ci(n),
			(n._start = kt(
				(Tr(r) ? r : r || e !== be ? xn(e, r, n) : e._time) + n._delay
			)),
			(n._end = kt(
				n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
			)),
			Zg(e, n, '_first', '_last', e._sort ? '_start' : 0),
			Jf(n) || (e._recent = n),
			i || Jg(e, n),
			e._ts < 0 && Gu(e, e._tTime),
			e
		)
	},
	em = function (e, n) {
		return (
			(gn.ScrollTrigger || P0('scrollTrigger', n)) &&
			gn.ScrollTrigger.create(n, e)
		)
	},
	tm = function (e, n, r, i, o) {
		if ((N0(e, n, o), !e._initted)) return 1
		if (
			!r &&
			e._pt &&
			!Zt &&
			((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
			Yg !== un.frame
		)
			return ri.push(e), (e._lazy = [o, i]), 1
	},
	Jv = function t(e) {
		var n = e.parent
		return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
	},
	Jf = function (e) {
		var n = e.data
		return n === 'isFromStart' || n === 'isStart'
	},
	ey = function (e, n, r, i) {
		var o = e.ratio,
			l =
				n < 0 ||
				(!n &&
					((!e._start && Jv(e) && !(!e._initted && Jf(e))) ||
						((e._ts < 0 || e._dp._ts < 0) && !Jf(e))))
					? 0
					: 1,
			s = e._rDelay,
			a = 0,
			u,
			c,
			d
		if (
			(s &&
				e._repeat &&
				((a = Rs(0, e._tDur, n)),
				(c = Yo(a, s)),
				e._yoyo && c & 1 && (l = 1 - l),
				c !== Yo(e._tTime, s) &&
					((o = 1 - l), e.vars.repeatRefresh && e._initted && e.invalidate())),
			l !== o || Zt || i || e._zTime === ze || (!n && e._zTime))
		) {
			if (!e._initted && tm(e, n, i, r, a)) return
			for (
				d = e._zTime,
					e._zTime = n || (r ? ze : 0),
					r || (r = n && !d),
					e.ratio = l,
					e._from && (l = 1 - l),
					e._time = 0,
					e._tTime = a,
					u = e._pt;
				u;

			)
				u.r(l, u.d), (u = u._next)
			n < 0 && Zf(e, n, r, !0),
				e._onUpdate && !r && Rn(e, 'onUpdate'),
				a && e._repeat && !r && e.parent && Rn(e, 'onRepeat'),
				(n >= e._tDur || n < 0) &&
					e.ratio === l &&
					(l && ci(e, 1),
					!r &&
						!Zt &&
						(Rn(e, l ? 'onComplete' : 'onReverseComplete', !0),
						e._prom && e._prom()))
		} else e._zTime || (e._zTime = n)
	},
	ty = function (e, n, r) {
		var i
		if (r > n)
			for (i = e._first; i && i._start <= r; ) {
				if (i.data === 'isPause' && i._start > n) return i
				i = i._next
			}
		else
			for (i = e._last; i && i._start >= r; ) {
				if (i.data === 'isPause' && i._start < n) return i
				i = i._prev
			}
	},
	Xo = function (e, n, r, i) {
		var o = e._repeat,
			l = kt(n) || 0,
			s = e._tTime / e._tDur
		return (
			s && !i && (e._time *= l / e._dur),
			(e._dur = l),
			(e._tDur = o ? (o < 0 ? 1e10 : kt(l * (o + 1) + e._rDelay * o)) : l),
			s > 0 && !i && Gu(e, (e._tTime = e._tDur * s)),
			e.parent && Xu(e),
			r || Ai(e.parent, e),
			e
		)
	},
	kp = function (e) {
		return e instanceof Yt ? Ai(e) : Xo(e, e._dur)
	},
	ny = { _start: 0, endTime: gs, totalDuration: gs },
	xn = function t(e, n, r) {
		var i = e.labels,
			o = e._recent || ny,
			l = e.duration() >= Pn ? o.endTime(!1) : e._dur,
			s,
			a,
			u
		return vt(n) && (isNaN(n) || n in i)
			? ((a = n.charAt(0)),
			  (u = n.substr(-1) === '%'),
			  (s = n.indexOf('=')),
			  a === '<' || a === '>'
					? (s >= 0 && (n = n.replace(/=/, '')),
					  (a === '<' ? o._start : o.endTime(o._repeat >= 0)) +
							(parseFloat(n.substr(1)) || 0) *
								(u ? (s < 0 ? o : r).totalDuration() / 100 : 1))
					: s < 0
					? (n in i || (i[n] = l), i[n])
					: ((a = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
					  u && r && (a = (a / 100) * (Nt(r) ? r[0] : r).totalDuration()),
					  s > 1 ? t(e, n.substr(0, s - 1), r) + a : l + a))
			: n == null
			? l
			: +n
	},
	Bl = function (e, n, r) {
		var i = Tr(n[1]),
			o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
			l = n[o],
			s,
			a
		if ((i && (l.duration = n[1]), (l.parent = r), e)) {
			for (s = l, a = r; a && !('immediateRender' in s); )
				(s = a.vars.defaults || {}), (a = Jt(a.vars.inherit) && a.parent)
			;(l.immediateRender = Jt(s.immediateRender)),
				e < 2 ? (l.runBackwards = 1) : (l.startAt = n[o - 1])
		}
		return new ut(n[0], l, n[o + 1])
	},
	mi = function (e, n) {
		return e || e === 0 ? n(e) : n
	},
	Rs = function (e, n, r) {
		return r < e ? e : r > n ? n : r
	},
	Ot = function (e, n) {
		return !vt(e) || !(n = Wv.exec(e)) ? '' : n[1]
	},
	ry = function (e, n, r) {
		return mi(r, function (i) {
			return Rs(e, n, i)
		})
	},
	e1 = [].slice,
	nm = function (e, n) {
		return (
			e &&
			cr(e) &&
			'length' in e &&
			((!n && !e.length) || (e.length - 1 in e && cr(e[0]))) &&
			!e.nodeType &&
			e !== Sn
		)
	},
	iy = function (e, n, r) {
		return (
			r === void 0 && (r = []),
			e.forEach(function (i) {
				var o
				return (vt(i) && !n) || nm(i, 1)
					? (o = r).push.apply(o, Tn(i))
					: r.push(i)
			}) || r
		)
	},
	Tn = function (e, n, r) {
		return rt && !n && rt.selector
			? rt.selector(e)
			: vt(e) && !r && (Qf || !Go())
			? e1.call((n || z0).querySelectorAll(e), 0)
			: Nt(e)
			? iy(e, r)
			: nm(e)
			? e1.call(e, 0)
			: e
			? [e]
			: []
	},
	t1 = function (e) {
		return (
			(e = Tn(e)[0] || uu('Invalid scope') || {}),
			function (n) {
				var r = e.current || e.nativeElement || e
				return Tn(
					n,
					r.querySelectorAll
						? r
						: r === e
						? uu('Invalid scope') || z0.createElement('div')
						: e
				)
			}
		)
	},
	rm = function (e) {
		return e.sort(function () {
			return 0.5 - Math.random()
		})
	},
	im = function (e) {
		if (Qe(e)) return e
		var n = cr(e) ? e : { each: e },
			r = Ii(n.ease),
			i = n.from || 0,
			o = parseFloat(n.base) || 0,
			l = {},
			s = i > 0 && i < 1,
			a = isNaN(i) || s,
			u = n.axis,
			c = i,
			d = i
		return (
			vt(i)
				? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
				: !s && a && ((c = i[0]), (d = i[1])),
			function (f, p, v) {
				var g = (v || n).length,
					w = l[g],
					m,
					h,
					y,
					_,
					S,
					z,
					C,
					P,
					R
				if (!w) {
					if (((R = n.grid === 'auto' ? 0 : (n.grid || [1, Pn])[1]), !R)) {
						for (
							C = -Pn;
							C < (C = v[R++].getBoundingClientRect().left) && R < g;

						);
						R--
					}
					for (
						w = l[g] = [],
							m = a ? Math.min(R, g) * c - 0.5 : i % R,
							h = R === Pn ? 0 : a ? (g * d) / R - 0.5 : (i / R) | 0,
							C = 0,
							P = Pn,
							z = 0;
						z < g;
						z++
					)
						(y = (z % R) - m),
							(_ = h - ((z / R) | 0)),
							(w[z] = S = u ? Math.abs(u === 'y' ? _ : y) : Fg(y * y + _ * _)),
							S > C && (C = S),
							S < P && (P = S)
					i === 'random' && rm(w),
						(w.max = C - P),
						(w.min = P),
						(w.v = g =
							(parseFloat(n.amount) ||
								parseFloat(n.each) *
									(R > g
										? g - 1
										: u
										? u === 'y'
											? g / R
											: R
										: Math.max(R, g / R)) ||
								0) * (i === 'edges' ? -1 : 1)),
						(w.b = g < 0 ? o - g : o),
						(w.u = Ot(n.amount || n.each) || 0),
						(r = r && g < 0 ? dm(r) : r)
				}
				return (
					(g = (w[f] - w.min) / w.max || 0),
					kt(w.b + (r ? r(g) : g) * w.v) + w.u
				)
			}
		)
	},
	n1 = function (e) {
		var n = Math.pow(10, ((e + '').split('.')[1] || '').length)
		return function (r) {
			var i = kt(Math.round(parseFloat(r) / e) * e * n)
			return (i - (i % 1)) / n + (Tr(r) ? 0 : Ot(r))
		}
	},
	om = function (e, n) {
		var r = Nt(e),
			i,
			o
		return (
			!r &&
				cr(e) &&
				((i = r = e.radius || Pn),
				e.values
					? ((e = Tn(e.values)), (o = !Tr(e[0])) && (i *= i))
					: (e = n1(e.increment))),
			mi(
				n,
				r
					? Qe(e)
						? function (l) {
								return (o = e(l)), Math.abs(o - l) <= i ? o : l
						  }
						: function (l) {
								for (
									var s = parseFloat(o ? l.x : l),
										a = parseFloat(o ? l.y : 0),
										u = Pn,
										c = 0,
										d = e.length,
										f,
										p;
									d--;

								)
									o
										? ((f = e[d].x - s), (p = e[d].y - a), (f = f * f + p * p))
										: (f = Math.abs(e[d] - s)),
										f < u && ((u = f), (c = d))
								return (
									(c = !i || u <= i ? e[c] : l),
									o || c === l || Tr(l) ? c : c + Ot(l)
								)
						  }
					: n1(e)
			)
		)
	},
	lm = function (e, n, r, i) {
		return mi(Nt(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
			return Nt(e)
				? e[~~(Math.random() * e.length)]
				: (r = r || 1e-5) &&
						(i = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
						Math.floor(
							Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) *
								r *
								i
						) / i
		})
	},
	oy = function () {
		for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
			n[r] = arguments[r]
		return function (i) {
			return n.reduce(function (o, l) {
				return l(o)
			}, i)
		}
	},
	ly = function (e, n) {
		return function (r) {
			return e(parseFloat(r)) + (n || Ot(r))
		}
	},
	sy = function (e, n, r) {
		return am(e, n, 0, 1, r)
	},
	sm = function (e, n, r) {
		return mi(r, function (i) {
			return e[~~n(i)]
		})
	},
	ay = function t(e, n, r) {
		var i = n - e
		return Nt(e)
			? sm(e, t(0, e.length), n)
			: mi(r, function (o) {
					return ((i + ((o - e) % i)) % i) + e
			  })
	},
	uy = function t(e, n, r) {
		var i = n - e,
			o = i * 2
		return Nt(e)
			? sm(e, t(0, e.length - 1), n)
			: mi(r, function (l) {
					return (l = (o + ((l - e) % o)) % o || 0), e + (l > i ? o - l : l)
			  })
	},
	ms = function (e) {
		for (var n = 0, r = '', i, o, l, s; ~(i = e.indexOf('random(', n)); )
			(l = e.indexOf(')', i)),
				(s = e.charAt(i + 7) === '['),
				(o = e.substr(i + 7, l - i - 7).match(s ? Vg : Gf)),
				(r +=
					e.substr(n, i - n) + lm(s ? o : +o[0], s ? 0 : +o[1], +o[2] || 1e-5)),
				(n = l + 1)
		return r + e.substr(n, e.length - n)
	},
	am = function (e, n, r, i, o) {
		var l = n - e,
			s = i - r
		return mi(o, function (a) {
			return r + (((a - e) / l) * s || 0)
		})
	},
	cy = function t(e, n, r, i) {
		var o = isNaN(e + n)
			? 0
			: function (p) {
					return (1 - p) * e + p * n
			  }
		if (!o) {
			var l = vt(e),
				s = {},
				a,
				u,
				c,
				d,
				f
			if ((r === !0 && (i = 1) && (r = null), l)) (e = { p: e }), (n = { p: n })
			else if (Nt(e) && !Nt(n)) {
				for (c = [], d = e.length, f = d - 2, u = 1; u < d; u++)
					c.push(t(e[u - 1], e[u]))
				d--,
					(o = function (v) {
						v *= d
						var g = Math.min(f, ~~v)
						return c[g](v - g)
					}),
					(r = n)
			} else i || (e = qi(Nt(e) ? [] : {}, e))
			if (!c) {
				for (a in n) M0.call(s, e, a, 'get', n[a])
				o = function (v) {
					return A0(v, s) || (l ? e.p : e)
				}
			}
		}
		return mi(r, o)
	},
	Cp = function (e, n, r) {
		var i = e.labels,
			o = Pn,
			l,
			s,
			a
		for (l in i)
			(s = i[l] - n),
				s < 0 == !!r && s && o > (s = Math.abs(s)) && ((a = l), (o = s))
		return a
	},
	Rn = function (e, n, r) {
		var i = e.vars,
			o = i[n],
			l = rt,
			s = e._ctx,
			a,
			u,
			c
		if (!!o)
			return (
				(a = i[n + 'Params']),
				(u = i.callbackScope || e),
				r && ri.length && cu(),
				s && (rt = s),
				(c = a ? o.apply(u, a) : o.call(u)),
				(rt = l),
				c
			)
	},
	El = function (e) {
		return (
			ci(e),
			e.scrollTrigger && e.scrollTrigger.kill(!!Zt),
			e.progress() < 1 && Rn(e, 'onInterrupt'),
			e
		)
	},
	Co,
	fy = function (e) {
		e = (!e.name && e.default) || e
		var n = e.name,
			r = Qe(e),
			i =
				n && !r && e.init
					? function () {
							this._props = []
					  }
					: e,
			o = { init: gs, render: A0, add: M0, kill: Py, modifier: zy, rawVars: 0 },
			l = { targetTest: 0, get: 0, getSetter: D0, aliases: {}, register: 0 }
		if ((Go(), e !== i)) {
			if (an[n]) return
			Dn(i, Dn(fu(e, o), l)),
				qi(i.prototype, qi(o, fu(e, l))),
				(an[(i.prop = n)] = i),
				e.targetTest && (Ea.push(i), (T0[n] = 1)),
				(n =
					(n === 'css' ? 'CSS' : n.charAt(0).toUpperCase() + n.substr(1)) +
					'Plugin')
		}
		qg(n, i), e.register && e.register(mn, i, tn)
	},
	Re = 255,
	zl = {
		aqua: [0, Re, Re],
		lime: [0, Re, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, Re],
		navy: [0, 0, 128],
		white: [Re, Re, Re],
		olive: [128, 128, 0],
		yellow: [Re, Re, 0],
		orange: [Re, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [Re, 0, 0],
		pink: [Re, 192, 203],
		cyan: [0, Re, Re],
		transparent: [Re, Re, Re, 0],
	},
	Nc = function (e, n, r) {
		return (
			(e += e < 0 ? 1 : e > 1 ? -1 : 0),
			((e * 6 < 1
				? n + (r - n) * e * 6
				: e < 0.5
				? r
				: e * 3 < 2
				? n + (r - n) * (2 / 3 - e) * 6
				: n) *
				Re +
				0.5) |
				0
		)
	},
	um = function (e, n, r) {
		var i = e ? (Tr(e) ? [e >> 16, (e >> 8) & Re, e & Re] : 0) : zl.black,
			o,
			l,
			s,
			a,
			u,
			c,
			d,
			f,
			p,
			v
		if (!i) {
			if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), zl[e]))
				i = zl[e]
			else if (e.charAt(0) === '#') {
				if (
					(e.length < 6 &&
						((o = e.charAt(1)),
						(l = e.charAt(2)),
						(s = e.charAt(3)),
						(e =
							'#' +
							o +
							o +
							l +
							l +
							s +
							s +
							(e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
					e.length === 9)
				)
					return (
						(i = parseInt(e.substr(1, 6), 16)),
						[i >> 16, (i >> 8) & Re, i & Re, parseInt(e.substr(7), 16) / 255]
					)
				;(e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & Re, e & Re])
			} else if (e.substr(0, 3) === 'hsl') {
				if (((i = v = e.match(Gf)), !n))
					(a = (+i[0] % 360) / 360),
						(u = +i[1] / 100),
						(c = +i[2] / 100),
						(l = c <= 0.5 ? c * (u + 1) : c + u - c * u),
						(o = c * 2 - l),
						i.length > 3 && (i[3] *= 1),
						(i[0] = Nc(a + 1 / 3, o, l)),
						(i[1] = Nc(a, o, l)),
						(i[2] = Nc(a - 1 / 3, o, l))
				else if (~e.indexOf('='))
					return (i = e.match(Bg)), r && i.length < 4 && (i[3] = 1), i
			} else i = e.match(Gf) || zl.transparent
			i = i.map(Number)
		}
		return (
			n &&
				!v &&
				((o = i[0] / Re),
				(l = i[1] / Re),
				(s = i[2] / Re),
				(d = Math.max(o, l, s)),
				(f = Math.min(o, l, s)),
				(c = (d + f) / 2),
				d === f
					? (a = u = 0)
					: ((p = d - f),
					  (u = c > 0.5 ? p / (2 - d - f) : p / (d + f)),
					  (a =
							d === o
								? (l - s) / p + (l < s ? 6 : 0)
								: d === l
								? (s - o) / p + 2
								: (o - l) / p + 4),
					  (a *= 60)),
				(i[0] = ~~(a + 0.5)),
				(i[1] = ~~(u * 100 + 0.5)),
				(i[2] = ~~(c * 100 + 0.5))),
			r && i.length < 4 && (i[3] = 1),
			i
		)
	},
	cm = function (e) {
		var n = [],
			r = [],
			i = -1
		return (
			e.split(ii).forEach(function (o) {
				var l = o.match(ko) || []
				n.push.apply(n, l), r.push((i += l.length + 1))
			}),
			(n.c = r),
			n
		)
	},
	Ep = function (e, n, r) {
		var i = '',
			o = (e + i).match(ii),
			l = n ? 'hsla(' : 'rgba(',
			s = 0,
			a,
			u,
			c,
			d
		if (!o) return e
		if (
			((o = o.map(function (f) {
				return (
					(f = um(f, n, 1)) &&
					l +
						(n ? f[0] + ',' + f[1] + '%,' + f[2] + '%,' + f[3] : f.join(',')) +
						')'
				)
			})),
			r && ((c = cm(e)), (a = r.c), a.join(i) !== c.c.join(i)))
		)
			for (u = e.replace(ii, '1').split(ko), d = u.length - 1; s < d; s++)
				i +=
					u[s] +
					(~a.indexOf(s)
						? o.shift() || l + '0,0,0,0)'
						: (c.length ? c : o.length ? o : r).shift())
		if (!u) for (u = e.split(ii), d = u.length - 1; s < d; s++) i += u[s] + o[s]
		return i + u[d]
	},
	ii = (function () {
		var t =
				'(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
			e
		for (e in zl) t += '|' + e + '\\b'
		return new RegExp(t + ')', 'gi')
	})(),
	dy = /hsl[a]?\(/,
	fm = function (e) {
		var n = e.join(' '),
			r
		if (((ii.lastIndex = 0), ii.test(n)))
			return (
				(r = dy.test(n)),
				(e[1] = Ep(e[1], r)),
				(e[0] = Ep(e[0], r, cm(e[1]))),
				!0
			)
	},
	vs,
	un = (function () {
		var t = Date.now,
			e = 500,
			n = 33,
			r = t(),
			i = r,
			o = 1e3 / 240,
			l = o,
			s = [],
			a,
			u,
			c,
			d,
			f,
			p,
			v = function g(w) {
				var m = t() - i,
					h = w === !0,
					y,
					_,
					S,
					z
				if (
					(m > e && (r += m - n),
					(i += m),
					(S = i - r),
					(y = S - l),
					(y > 0 || h) &&
						((z = ++d.frame),
						(f = S - d.time * 1e3),
						(d.time = S = S / 1e3),
						(l += y + (y >= o ? 4 : o - y)),
						(_ = 1)),
					h || (a = u(g)),
					_)
				)
					for (p = 0; p < s.length; p++) s[p](S, f, z, w)
			}
		return (
			(d = {
				time: 0,
				frame: 0,
				tick: function () {
					v(!0)
				},
				deltaRatio: function (w) {
					return f / (1e3 / (w || 60))
				},
				wake: function () {
					Hg &&
						(!Qf &&
							$g() &&
							((Sn = Qf = window),
							(z0 = Sn.document || {}),
							(gn.gsap = mn),
							(Sn.gsapVersions || (Sn.gsapVersions = [])).push(mn.version),
							Wg(au || Sn.GreenSockGlobals || (!Sn.gsap && Sn) || {}),
							(c = Sn.requestAnimationFrame)),
						a && d.sleep(),
						(u =
							c ||
							function (w) {
								return setTimeout(w, (l - d.time * 1e3 + 1) | 0)
							}),
						(vs = 1),
						v(2))
				},
				sleep: function () {
					;(c ? Sn.cancelAnimationFrame : clearTimeout)(a), (vs = 0), (u = gs)
				},
				lagSmoothing: function (w, m) {
					;(e = w || 1 / ze), (n = Math.min(m, e, 0))
				},
				fps: function (w) {
					;(o = 1e3 / (w || 240)), (l = d.time * 1e3 + o)
				},
				add: function (w, m, h) {
					var y = m
						? function (_, S, z, C) {
								w(_, S, z, C), d.remove(y)
						  }
						: w
					return d.remove(w), s[h ? 'unshift' : 'push'](y), Go(), y
				},
				remove: function (w, m) {
					~(m = s.indexOf(w)) && s.splice(m, 1) && p >= m && p--
				},
				_listeners: s,
			}),
			d
		)
	})(),
	Go = function () {
		return !vs && un.wake()
	},
	pe = {},
	py = /^[\d.\-M][\d.\-,\s]/,
	hy = /["']/g,
	gy = function (e) {
		for (
			var n = {},
				r = e.substr(1, e.length - 3).split(':'),
				i = r[0],
				o = 1,
				l = r.length,
				s,
				a,
				u;
			o < l;
			o++
		)
			(a = r[o]),
				(s = o !== l - 1 ? a.lastIndexOf(',') : a.length),
				(u = a.substr(0, s)),
				(n[i] = isNaN(u) ? u.replace(hy, '').trim() : +u),
				(i = a.substr(s + 1).trim())
		return n
	},
	my = function (e) {
		var n = e.indexOf('(') + 1,
			r = e.indexOf(')'),
			i = e.indexOf('(', n)
		return e.substring(n, ~i && i < r ? e.indexOf(')', r + 1) : r)
	},
	vy = function (e) {
		var n = (e + '').split('('),
			r = pe[n[0]]
		return r && n.length > 1 && r.config
			? r.config.apply(
					null,
					~e.indexOf('{') ? [gy(n[1])] : my(e).split(',').map(Qg)
			  )
			: pe._CE && py.test(e)
			? pe._CE('', e)
			: r
	},
	dm = function (e) {
		return function (n) {
			return 1 - e(1 - n)
		}
	},
	pm = function t(e, n) {
		for (var r = e._first, i; r; )
			r instanceof Yt
				? t(r, n)
				: r.vars.yoyoEase &&
				  (!r._yoyo || !r._repeat) &&
				  r._yoyo !== n &&
				  (r.timeline
						? t(r.timeline, n)
						: ((i = r._ease),
						  (r._ease = r._yEase),
						  (r._yEase = i),
						  (r._yoyo = n))),
				(r = r._next)
	},
	Ii = function (e, n) {
		return (e && (Qe(e) ? e : pe[e] || vy(e))) || n
	},
	Ji = function (e, n, r, i) {
		r === void 0 &&
			(r = function (a) {
				return 1 - n(1 - a)
			}),
			i === void 0 &&
				(i = function (a) {
					return a < 0.5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2
				})
		var o = { easeIn: n, easeOut: r, easeInOut: i },
			l
		return (
			en(e, function (s) {
				;(pe[s] = gn[s] = o), (pe[(l = s.toLowerCase())] = r)
				for (var a in o)
					pe[
						l + (a === 'easeIn' ? '.in' : a === 'easeOut' ? '.out' : '.inOut')
					] = pe[s + '.' + a] = o[a]
			}),
			o
		)
	},
	hm = function (e) {
		return function (n) {
			return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2
		}
	},
	Lc = function t(e, n, r) {
		var i = n >= 1 ? n : 1,
			o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
			l = (o / Xf) * (Math.asin(1 / i) || 0),
			s = function (c) {
				return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Hv((c - l) * o) + 1
			},
			a =
				e === 'out'
					? s
					: e === 'in'
					? function (u) {
							return 1 - s(1 - u)
					  }
					: hm(s)
		return (
			(o = Xf / o),
			(a.config = function (u, c) {
				return t(e, u, c)
			}),
			a
		)
	},
	Dc = function t(e, n) {
		n === void 0 && (n = 1.70158)
		var r = function (l) {
				return l ? --l * l * ((n + 1) * l + n) + 1 : 0
			},
			i =
				e === 'out'
					? r
					: e === 'in'
					? function (o) {
							return 1 - r(1 - o)
					  }
					: hm(r)
		return (
			(i.config = function (o) {
				return t(e, o)
			}),
			i
		)
	}
en('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
	var n = e < 5 ? e + 1 : e
	Ji(
		t + ',Power' + (n - 1),
		e
			? function (r) {
					return Math.pow(r, n)
			  }
			: function (r) {
					return r
			  },
		function (r) {
			return 1 - Math.pow(1 - r, n)
		},
		function (r) {
			return r < 0.5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
		}
	)
})
pe.Linear.easeNone = pe.none = pe.Linear.easeIn
Ji('Elastic', Lc('in'), Lc('out'), Lc())
;(function (t, e) {
	var n = 1 / e,
		r = 2 * n,
		i = 2.5 * n,
		o = function (s) {
			return s < n
				? t * s * s
				: s < r
				? t * Math.pow(s - 1.5 / e, 2) + 0.75
				: s < i
				? t * (s -= 2.25 / e) * s + 0.9375
				: t * Math.pow(s - 2.625 / e, 2) + 0.984375
		}
	Ji(
		'Bounce',
		function (l) {
			return 1 - o(1 - l)
		},
		o
	)
})(7.5625, 2.75)
Ji('Expo', function (t) {
	return t ? Math.pow(2, 10 * (t - 1)) : 0
})
Ji('Circ', function (t) {
	return -(Fg(1 - t * t) - 1)
})
Ji('Sine', function (t) {
	return t === 1 ? 1 : -Vv(t * Bv) + 1
})
Ji('Back', Dc('in'), Dc('out'), Dc())
pe.SteppedEase =
	pe.steps =
	gn.SteppedEase =
		{
			config: function (e, n) {
				e === void 0 && (e = 1)
				var r = 1 / e,
					i = e + (n ? 0 : 1),
					o = n ? 1 : 0,
					l = 1 - ze
				return function (s) {
					return (((i * Rs(0, l, s)) | 0) + o) * r
				}
			},
		}
qo.ease = pe['quad.out']
en(
	'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
	function (t) {
		return (R0 += t + ',' + t + 'Params,')
	}
)
var gm = function (e, n) {
		;(this.id = Uv++),
			(e._gsap = this),
			(this.target = e),
			(this.harness = n),
			(this.get = n ? n.get : Xg),
			(this.set = n ? n.getSetter : D0)
	},
	Qo = (function () {
		function t(n) {
			;(this.vars = n),
				(this._delay = +n.delay || 0),
				(this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
					((this._rDelay = n.repeatDelay || 0),
					(this._yoyo = !!n.yoyo || !!n.yoyoEase)),
				(this._ts = 1),
				Xo(this, +n.duration, 1, 1),
				(this.data = n.data),
				rt && ((this._ctx = rt), rt.data.push(this)),
				vs || un.wake()
		}
		var e = t.prototype
		return (
			(e.delay = function (r) {
				return r || r === 0
					? (this.parent &&
							this.parent.smoothChildTiming &&
							this.startTime(this._start + r - this._delay),
					  (this._delay = r),
					  this)
					: this._delay
			}),
			(e.duration = function (r) {
				return arguments.length
					? this.totalDuration(
							this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
					  )
					: this.totalDuration() && this._dur
			}),
			(e.totalDuration = function (r) {
				return arguments.length
					? ((this._dirty = 0),
					  Xo(
							this,
							this._repeat < 0
								? r
								: (r - this._repeat * this._rDelay) / (this._repeat + 1)
					  ))
					: this._tDur
			}),
			(e.totalTime = function (r, i) {
				if ((Go(), !arguments.length)) return this._tTime
				var o = this._dp
				if (o && o.smoothChildTiming && this._ts) {
					for (Gu(this, r), !o._dp || o.parent || Jg(o, this); o && o.parent; )
						o.parent._time !==
							o._start +
								(o._ts >= 0
									? o._tTime / o._ts
									: (o.totalDuration() - o._tTime) / -o._ts) &&
							o.totalTime(o._tTime, !0),
							(o = o.parent)
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && r < this._tDur) ||
							(this._ts < 0 && r > 0) ||
							(!this._tDur && !r)) &&
						nr(this._dp, this, this._start - this._delay)
				}
				return (
					(this._tTime !== r ||
						(!this._dur && !i) ||
						(this._initted && Math.abs(this._zTime) === ze) ||
						(!r && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = r), Gg(this, r, i)),
					this
				)
			}),
			(e.time = function (r, i) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), r + Sp(this)) %
								(this._dur + this._rDelay) || (r ? this._dur : 0),
							i
					  )
					: this._time
			}),
			(e.totalProgress = function (r, i) {
				return arguments.length
					? this.totalTime(this.totalDuration() * r, i)
					: this.totalDuration()
					? Math.min(1, this._tTime / this._tDur)
					: this.ratio
			}),
			(e.progress = function (r, i) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
								Sp(this),
							i
					  )
					: this.duration()
					? Math.min(1, this._time / this._dur)
					: this.ratio
			}),
			(e.iteration = function (r, i) {
				var o = this.duration() + this._rDelay
				return arguments.length
					? this.totalTime(this._time + (r - 1) * o, i)
					: this._repeat
					? Yo(this._tTime, o) + 1
					: 1
			}),
			(e.timeScale = function (r) {
				if (!arguments.length) return this._rts === -ze ? 0 : this._rts
				if (this._rts === r) return this
				var i =
					this.parent && this._ts ? du(this.parent._time, this) : this._tTime
				return (
					(this._rts = +r || 0),
					(this._ts = this._ps || r === -ze ? 0 : this._rts),
					this.totalTime(Rs(-this._delay, this._tDur, i), !0),
					Xu(this),
					Kv(this)
				)
			}),
			(e.paused = function (r) {
				return arguments.length
					? (this._ps !== r &&
							((this._ps = r),
							r
								? ((this._pTime =
										this._tTime || Math.max(-this._delay, this.rawTime())),
								  (this._ts = this._act = 0))
								: (Go(),
								  (this._ts = this._rts),
								  this.totalTime(
										this.parent && !this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== ze &&
											(this._tTime -= ze)
								  ))),
					  this)
					: this._ps
			}),
			(e.startTime = function (r) {
				if (arguments.length) {
					this._start = r
					var i = this.parent || this._dp
					return (
						i && (i._sort || !this.parent) && nr(i, this, r - this._delay), this
					)
				}
				return this._start
			}),
			(e.endTime = function (r) {
				return (
					this._start +
					(Jt(r) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				)
			}),
			(e.rawTime = function (r) {
				var i = this.parent || this._dp
				return i
					? r &&
					  (!this._ts ||
							(this._repeat && this._time && this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
						? du(i.rawTime(r), this)
						: this._tTime
					: this._tTime
			}),
			(e.revert = function (r) {
				r === void 0 && (r = Yv)
				var i = Zt
				return (
					(Zt = r),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(r),
						this.totalTime(-0.01, r.suppressEvents)),
					this.data !== 'nested' && r.kill !== !1 && this.kill(),
					(Zt = i),
					this
				)
			}),
			(e.globalTime = function (r) {
				for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
					(o = i._start + o / (i._ts || 1)), (i = i._dp)
				return !this.parent && this.vars.immediateRender ? -1 : o
			}),
			(e.repeat = function (r) {
				return arguments.length
					? ((this._repeat = r === 1 / 0 ? -2 : r), kp(this))
					: this._repeat === -2
					? 1 / 0
					: this._repeat
			}),
			(e.repeatDelay = function (r) {
				if (arguments.length) {
					var i = this._time
					return (this._rDelay = r), kp(this), i ? this.time(i) : this
				}
				return this._rDelay
			}),
			(e.yoyo = function (r) {
				return arguments.length ? ((this._yoyo = r), this) : this._yoyo
			}),
			(e.seek = function (r, i) {
				return this.totalTime(xn(this, r), Jt(i))
			}),
			(e.restart = function (r, i) {
				return this.play().totalTime(r ? -this._delay : 0, Jt(i))
			}),
			(e.play = function (r, i) {
				return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
			}),
			(e.reverse = function (r, i) {
				return (
					r != null && this.seek(r || this.totalDuration(), i),
					this.reversed(!0).paused(!1)
				)
			}),
			(e.pause = function (r, i) {
				return r != null && this.seek(r, i), this.paused(!0)
			}),
			(e.resume = function () {
				return this.paused(!1)
			}),
			(e.reversed = function (r) {
				return arguments.length
					? (!!r !== this.reversed() &&
							this.timeScale(-this._rts || (r ? -ze : 0)),
					  this)
					: this._rts < 0
			}),
			(e.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -ze), this
			}),
			(e.isActive = function () {
				var r = this.parent || this._dp,
					i = this._start,
					o
				return !!(
					!r ||
					(this._ts &&
						this._initted &&
						r.isActive() &&
						(o = r.rawTime(!0)) >= i &&
						o < this.endTime(!0) - ze)
				)
			}),
			(e.eventCallback = function (r, i, o) {
				var l = this.vars
				return arguments.length > 1
					? (i
							? ((l[r] = i),
							  o && (l[r + 'Params'] = o),
							  r === 'onUpdate' && (this._onUpdate = i))
							: delete l[r],
					  this)
					: l[r]
			}),
			(e.then = function (r) {
				var i = this
				return new Promise(function (o) {
					var l = Qe(r) ? r : Kg,
						s = function () {
							var u = i.then
							;(i.then = null),
								Qe(l) && (l = l(i)) && (l.then || l === i) && (i.then = u),
								o(l),
								(i.then = u)
						}
					;(i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
					(!i._tTime && i._ts < 0)
						? s()
						: (i._prom = s)
				})
			}),
			(e.kill = function () {
				El(this)
			}),
			t
		)
	})()
Dn(Qo.prototype, {
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
	_zTime: -ze,
	_prom: 0,
	_ps: !1,
	_rts: 1,
})
var Yt = (function (t) {
	jg(e, t)
	function e(r, i) {
		var o
		return (
			r === void 0 && (r = {}),
			(o = t.call(this, r) || this),
			(o.labels = {}),
			(o.smoothChildTiming = !!r.smoothChildTiming),
			(o.autoRemoveChildren = !!r.autoRemoveChildren),
			(o._sort = Jt(r.sortChildren)),
			be && nr(r.parent || be, hr(o), i),
			r.reversed && o.reverse(),
			r.paused && o.paused(!0),
			r.scrollTrigger && em(hr(o), r.scrollTrigger),
			o
		)
	}
	var n = e.prototype
	return (
		(n.to = function (i, o, l) {
			return Bl(0, arguments, this), this
		}),
		(n.from = function (i, o, l) {
			return Bl(1, arguments, this), this
		}),
		(n.fromTo = function (i, o, l, s) {
			return Bl(2, arguments, this), this
		}),
		(n.set = function (i, o, l) {
			return (
				(o.duration = 0),
				(o.parent = this),
				bl(o).repeatDelay || (o.repeat = 0),
				(o.immediateRender = !!o.immediateRender),
				new ut(i, o, xn(this, l), 1),
				this
			)
		}),
		(n.call = function (i, o, l) {
			return nr(this, ut.delayedCall(0, i, o), l)
		}),
		(n.staggerTo = function (i, o, l, s, a, u, c) {
			return (
				(l.duration = o),
				(l.stagger = l.stagger || s),
				(l.onComplete = u),
				(l.onCompleteParams = c),
				(l.parent = this),
				new ut(i, l, xn(this, a)),
				this
			)
		}),
		(n.staggerFrom = function (i, o, l, s, a, u, c) {
			return (
				(l.runBackwards = 1),
				(bl(l).immediateRender = Jt(l.immediateRender)),
				this.staggerTo(i, o, l, s, a, u, c)
			)
		}),
		(n.staggerFromTo = function (i, o, l, s, a, u, c, d) {
			return (
				(s.startAt = l),
				(bl(s).immediateRender = Jt(s.immediateRender)),
				this.staggerTo(i, o, s, a, u, c, d)
			)
		}),
		(n.render = function (i, o, l) {
			var s = this._time,
				a = this._dirty ? this.totalDuration() : this._tDur,
				u = this._dur,
				c = i <= 0 ? 0 : kt(i),
				d = this._zTime < 0 != i < 0 && (this._initted || !u),
				f,
				p,
				v,
				g,
				w,
				m,
				h,
				y,
				_,
				S,
				z,
				C
			if (
				(this !== be && c > a && i >= 0 && (c = a), c !== this._tTime || l || d)
			) {
				if (
					(s !== this._time &&
						u &&
						((c += this._time - s), (i += this._time - s)),
					(f = c),
					(_ = this._start),
					(y = this._ts),
					(m = !y),
					d && (u || (s = this._zTime), (i || !o) && (this._zTime = i)),
					this._repeat)
				) {
					if (
						((z = this._yoyo),
						(w = u + this._rDelay),
						this._repeat < -1 && i < 0)
					)
						return this.totalTime(w * 100 + i, o, l)
					if (
						((f = kt(c % w)),
						c === a
							? ((g = this._repeat), (f = u))
							: ((g = ~~(c / w)),
							  g && g === c / w && ((f = u), g--),
							  f > u && (f = u)),
						(S = Yo(this._tTime, w)),
						!s && this._tTime && S !== g && (S = g),
						z && g & 1 && ((f = u - f), (C = 1)),
						g !== S && !this._lock)
					) {
						var P = z && S & 1,
							R = P === (z && g & 1)
						if (
							(g < S && (P = !P),
							(s = P ? 0 : u),
							(this._lock = 1),
							(this.render(s || (C ? 0 : kt(g * w)), o, !u)._lock = 0),
							(this._tTime = c),
							!o && this.parent && Rn(this, 'onRepeat'),
							this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
							(s && s !== this._time) ||
								m !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this
						if (
							((u = this._dur),
							(a = this._tDur),
							R &&
								((this._lock = 2),
								(s = P ? u : -1e-4),
								this.render(s, !0),
								this.vars.repeatRefresh && !C && this.invalidate()),
							(this._lock = 0),
							!this._ts && !m)
						)
							return this
						pm(this, C)
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((h = ty(this, kt(s), kt(f))), h && (c -= f - (f = h._start))),
					(this._tTime = c),
					(this._time = f),
					(this._act = !y),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = i),
						(s = 0)),
					!s && f && !o && (Rn(this, 'onStart'), this._tTime !== c))
				)
					return this
				if (f >= s && i >= 0)
					for (p = this._first; p; ) {
						if (
							((v = p._next), (p._act || f >= p._start) && p._ts && h !== p)
						) {
							if (p.parent !== this) return this.render(i, o, l)
							if (
								(p.render(
									p._ts > 0
										? (f - p._start) * p._ts
										: (p._dirty ? p.totalDuration() : p._tDur) +
												(f - p._start) * p._ts,
									o,
									l
								),
								f !== this._time || (!this._ts && !m))
							) {
								;(h = 0), v && (c += this._zTime = -ze)
								break
							}
						}
						p = v
					}
				else {
					p = this._last
					for (var M = i < 0 ? i : f; p; ) {
						if (((v = p._prev), (p._act || M <= p._end) && p._ts && h !== p)) {
							if (p.parent !== this) return this.render(i, o, l)
							if (
								(p.render(
									p._ts > 0
										? (M - p._start) * p._ts
										: (p._dirty ? p.totalDuration() : p._tDur) +
												(M - p._start) * p._ts,
									o,
									l || (Zt && (p._initted || p._startAt))
								),
								f !== this._time || (!this._ts && !m))
							) {
								;(h = 0), v && (c += this._zTime = M ? -ze : ze)
								break
							}
						}
						p = v
					}
				}
				if (
					h &&
					!o &&
					(this.pause(),
					(h.render(f >= s ? 0 : -ze)._zTime = f >= s ? 1 : -1),
					this._ts)
				)
					return (this._start = _), Xu(this), this.render(i, o, l)
				this._onUpdate && !o && Rn(this, 'onUpdate', !0),
					((c === a && this._tTime >= this.totalDuration()) || (!c && s)) &&
						(_ === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
						(this._lock ||
							((i || !u) &&
								((c === a && this._ts > 0) || (!c && this._ts < 0)) &&
								ci(this, 1),
							!o &&
								!(i < 0 && !s) &&
								(c || s || !a) &&
								(Rn(
									this,
									c === a && i >= 0 ? 'onComplete' : 'onReverseComplete',
									!0
								),
								this._prom &&
									!(c < a && this.timeScale() > 0) &&
									this._prom())))
			}
			return this
		}),
		(n.add = function (i, o) {
			var l = this
			if ((Tr(o) || (o = xn(this, o, i)), !(i instanceof Qo))) {
				if (Nt(i))
					return (
						i.forEach(function (s) {
							return l.add(s, o)
						}),
						this
					)
				if (vt(i)) return this.addLabel(i, o)
				if (Qe(i)) i = ut.delayedCall(0, i)
				else return this
			}
			return this !== i ? nr(this, i, o) : this
		}),
		(n.getChildren = function (i, o, l, s) {
			i === void 0 && (i = !0),
				o === void 0 && (o = !0),
				l === void 0 && (l = !0),
				s === void 0 && (s = -Pn)
			for (var a = [], u = this._first; u; )
				u._start >= s &&
					(u instanceof ut
						? o && a.push(u)
						: (l && a.push(u), i && a.push.apply(a, u.getChildren(!0, o, l)))),
					(u = u._next)
			return a
		}),
		(n.getById = function (i) {
			for (var o = this.getChildren(1, 1, 1), l = o.length; l--; )
				if (o[l].vars.id === i) return o[l]
		}),
		(n.remove = function (i) {
			return vt(i)
				? this.removeLabel(i)
				: Qe(i)
				? this.killTweensOf(i)
				: (Yu(this, i),
				  i === this._recent && (this._recent = this._last),
				  Ai(this))
		}),
		(n.totalTime = function (i, o) {
			return arguments.length
				? ((this._forcing = 1),
				  !this._dp &&
						this._ts &&
						(this._start = kt(
							un.time -
								(this._ts > 0
									? i / this._ts
									: (this.totalDuration() - i) / -this._ts)
						)),
				  t.prototype.totalTime.call(this, i, o),
				  (this._forcing = 0),
				  this)
				: this._tTime
		}),
		(n.addLabel = function (i, o) {
			return (this.labels[i] = xn(this, o)), this
		}),
		(n.removeLabel = function (i) {
			return delete this.labels[i], this
		}),
		(n.addPause = function (i, o, l) {
			var s = ut.delayedCall(0, o || gs, l)
			return (
				(s.data = 'isPause'), (this._hasPause = 1), nr(this, s, xn(this, i))
			)
		}),
		(n.removePause = function (i) {
			var o = this._first
			for (i = xn(this, i); o; )
				o._start === i && o.data === 'isPause' && ci(o), (o = o._next)
		}),
		(n.killTweensOf = function (i, o, l) {
			for (var s = this.getTweensOf(i, l), a = s.length; a--; )
				Br !== s[a] && s[a].kill(i, o)
			return this
		}),
		(n.getTweensOf = function (i, o) {
			for (var l = [], s = Tn(i), a = this._first, u = Tr(o), c; a; )
				a instanceof ut
					? Xv(a._targets, s) &&
					  (u
							? (!Br || (a._initted && a._ts)) &&
							  a.globalTime(0) <= o &&
							  a.globalTime(a.totalDuration()) > o
							: !o || a.isActive()) &&
					  l.push(a)
					: (c = a.getTweensOf(s, o)).length && l.push.apply(l, c),
					(a = a._next)
			return l
		}),
		(n.tweenTo = function (i, o) {
			o = o || {}
			var l = this,
				s = xn(l, i),
				a = o,
				u = a.startAt,
				c = a.onStart,
				d = a.onStartParams,
				f = a.immediateRender,
				p,
				v = ut.to(
					l,
					Dn(
						{
							ease: o.ease || 'none',
							lazy: !1,
							immediateRender: !1,
							time: s,
							overwrite: 'auto',
							duration:
								o.duration ||
								Math.abs(
									(s - (u && 'time' in u ? u.time : l._time)) / l.timeScale()
								) ||
								ze,
							onStart: function () {
								if ((l.pause(), !p)) {
									var w =
										o.duration ||
										Math.abs(
											(s - (u && 'time' in u ? u.time : l._time)) /
												l.timeScale()
										)
									v._dur !== w && Xo(v, w, 0, 1).render(v._time, !0, !0),
										(p = 1)
								}
								c && c.apply(v, d || [])
							},
						},
						o
					)
				)
			return f ? v.render(0) : v
		}),
		(n.tweenFromTo = function (i, o, l) {
			return this.tweenTo(o, Dn({ startAt: { time: xn(this, i) } }, l))
		}),
		(n.recent = function () {
			return this._recent
		}),
		(n.nextLabel = function (i) {
			return i === void 0 && (i = this._time), Cp(this, xn(this, i))
		}),
		(n.previousLabel = function (i) {
			return i === void 0 && (i = this._time), Cp(this, xn(this, i), 1)
		}),
		(n.currentLabel = function (i) {
			return arguments.length
				? this.seek(i, !0)
				: this.previousLabel(this._time + ze)
		}),
		(n.shiftChildren = function (i, o, l) {
			l === void 0 && (l = 0)
			for (var s = this._first, a = this.labels, u; s; )
				s._start >= l && ((s._start += i), (s._end += i)), (s = s._next)
			if (o) for (u in a) a[u] >= l && (a[u] += i)
			return Ai(this)
		}),
		(n.invalidate = function (i) {
			var o = this._first
			for (this._lock = 0; o; ) o.invalidate(i), (o = o._next)
			return t.prototype.invalidate.call(this, i)
		}),
		(n.clear = function (i) {
			i === void 0 && (i = !0)
			for (var o = this._first, l; o; ) (l = o._next), this.remove(o), (o = l)
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				i && (this.labels = {}),
				Ai(this)
			)
		}),
		(n.totalDuration = function (i) {
			var o = 0,
				l = this,
				s = l._last,
				a = Pn,
				u,
				c,
				d
			if (arguments.length)
				return l.timeScale(
					(l._repeat < 0 ? l.duration() : l.totalDuration()) /
						(l.reversed() ? -i : i)
				)
			if (l._dirty) {
				for (d = l.parent; s; )
					(u = s._prev),
						s._dirty && s.totalDuration(),
						(c = s._start),
						c > a && l._sort && s._ts && !l._lock
							? ((l._lock = 1), (nr(l, s, c - s._delay, 1)._lock = 0))
							: (a = c),
						c < 0 &&
							s._ts &&
							((o -= c),
							((!d && !l._dp) || (d && d.smoothChildTiming)) &&
								((l._start += c / l._ts), (l._time -= c), (l._tTime -= c)),
							l.shiftChildren(-c, !1, -1 / 0),
							(a = 0)),
						s._end > o && s._ts && (o = s._end),
						(s = u)
				Xo(l, l === be && l._time > o ? l._time : o, 1, 1), (l._dirty = 0)
			}
			return l._tDur
		}),
		(e.updateRoot = function (i) {
			if ((be._ts && (Gg(be, du(i, be)), (Yg = un.frame)), un.frame >= wp)) {
				wp += pn.autoSleep || 120
				var o = be._first
				if ((!o || !o._ts) && pn.autoSleep && un._listeners.length < 2) {
					for (; o && !o._ts; ) o = o._next
					o || un.sleep()
				}
			}
		}),
		e
	)
})(Qo)
Dn(Yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
var yy = function (e, n, r, i, o, l, s) {
		var a = new tn(this._pt, e, n, 0, 1, xm, null, o),
			u = 0,
			c = 0,
			d,
			f,
			p,
			v,
			g,
			w,
			m,
			h
		for (
			a.b = r,
				a.e = i,
				r += '',
				i += '',
				(m = ~i.indexOf('random(')) && (i = ms(i)),
				l && ((h = [r, i]), l(h, e, n), (r = h[0]), (i = h[1])),
				f = r.match(Oc) || [];
			(d = Oc.exec(i));

		)
			(v = d[0]),
				(g = i.substring(u, d.index)),
				p ? (p = (p + 1) % 5) : g.substr(-5) === 'rgba(' && (p = 1),
				v !== f[c++] &&
					((w = parseFloat(f[c - 1]) || 0),
					(a._pt = {
						_next: a._pt,
						p: g || c === 1 ? g : ',',
						s: w,
						c: v.charAt(1) === '=' ? Lo(w, v) - w : parseFloat(v) - w,
						m: p && p < 4 ? Math.round : 0,
					}),
					(u = Oc.lastIndex))
		return (
			(a.c = u < i.length ? i.substring(u, i.length) : ''),
			(a.fp = s),
			(Ug.test(i) || m) && (a.e = 0),
			(this._pt = a),
			a
		)
	},
	M0 = function (e, n, r, i, o, l, s, a, u, c) {
		Qe(i) && (i = i(o || 0, e, l))
		var d = e[n],
			f =
				r !== 'get'
					? r
					: Qe(d)
					? u
						? e[
								n.indexOf('set') || !Qe(e['get' + n.substr(3)])
									? n
									: 'get' + n.substr(3)
						  ](u)
						: e[n]()
					: d,
			p = Qe(d) ? (u ? ky : _m) : L0,
			v
		if (
			(vt(i) &&
				(~i.indexOf('random(') && (i = ms(i)),
				i.charAt(1) === '=' &&
					((v = Lo(f, i) + (Ot(f) || 0)), (v || v === 0) && (i = v))),
			!c || f !== i || r1)
		)
			return !isNaN(f * i) && i !== ''
				? ((v = new tn(
						this._pt,
						e,
						n,
						+f || 0,
						i - (f || 0),
						typeof d == 'boolean' ? Ey : wm,
						0,
						p
				  )),
				  u && (v.fp = u),
				  s && v.modifier(s, this, e),
				  (this._pt = v))
				: (!d && !(n in e) && P0(n, i),
				  yy.call(this, e, n, f, i, p, a || pn.stringFilter, u))
	},
	_y = function (e, n, r, i, o) {
		if (
			(Qe(e) && (e = Ul(e, o, n, r, i)),
			!cr(e) || (e.style && e.nodeType) || Nt(e) || bg(e))
		)
			return vt(e) ? Ul(e, o, n, r, i) : e
		var l = {},
			s
		for (s in e) l[s] = Ul(e[s], o, n, r, i)
		return l
	},
	mm = function (e, n, r, i, o, l) {
		var s, a, u, c
		if (
			an[e] &&
			(s = new an[e]()).init(
				o,
				s.rawVars ? n[e] : _y(n[e], i, o, l, r),
				r,
				i,
				l
			) !== !1 &&
			((r._pt = a = new tn(r._pt, o, e, 0, 1, s.render, s, 0, s.priority)),
			r !== Co)
		)
			for (u = r._ptLookup[r._targets.indexOf(o)], c = s._props.length; c--; )
				u[s._props[c]] = a
		return s
	},
	Br,
	r1,
	N0 = function t(e, n, r) {
		var i = e.vars,
			o = i.ease,
			l = i.startAt,
			s = i.immediateRender,
			a = i.lazy,
			u = i.onUpdate,
			c = i.onUpdateParams,
			d = i.callbackScope,
			f = i.runBackwards,
			p = i.yoyoEase,
			v = i.keyframes,
			g = i.autoRevert,
			w = e._dur,
			m = e._startAt,
			h = e._targets,
			y = e.parent,
			_ = y && y.data === 'nested' ? y.vars.targets : h,
			S = e._overwrite === 'auto' && !C0,
			z = e.timeline,
			C,
			P,
			R,
			M,
			F,
			b,
			ee,
			Q,
			Y,
			q,
			K,
			O,
			B
		if (
			(z && (!v || !o) && (o = 'none'),
			(e._ease = Ii(o, qo.ease)),
			(e._yEase = p ? dm(Ii(p === !0 ? o : p, qo.ease)) : 0),
			p &&
				e._yoyo &&
				!e._repeat &&
				((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
			(e._from = !z && !!i.runBackwards),
			!z || (v && !i.stagger))
		) {
			if (
				((Q = h[0] ? Di(h[0]).harness : 0),
				(O = Q && i[Q.prop]),
				(C = fu(i, T0)),
				m &&
					(m._zTime < 0 && m.progress(1),
					n < 0 && f && s && !g ? m.render(-1, !0) : m.revert(f && w ? Ca : qv),
					(m._lazy = 0)),
				l)
			) {
				if (
					(ci(
						(e._startAt = ut.set(
							h,
							Dn(
								{
									data: 'isStart',
									overwrite: !1,
									parent: y,
									immediateRender: !0,
									lazy: Jt(a),
									startAt: null,
									delay: 0,
									onUpdate: u,
									onUpdateParams: c,
									callbackScope: d,
									stagger: 0,
								},
								l
							)
						))
					),
					(e._startAt._dp = 0),
					n < 0 && (Zt || (!s && !g)) && e._startAt.revert(Ca),
					s && w && n <= 0 && r <= 0)
				) {
					n && (e._zTime = n)
					return
				}
			} else if (f && w && !m) {
				if (
					(n && (s = !1),
					(R = Dn(
						{
							overwrite: !1,
							data: 'isFromStart',
							lazy: s && Jt(a),
							immediateRender: s,
							stagger: 0,
							parent: y,
						},
						C
					)),
					O && (R[Q.prop] = O),
					ci((e._startAt = ut.set(h, R))),
					(e._startAt._dp = 0),
					n < 0 && (Zt ? e._startAt.revert(Ca) : e._startAt.render(-1, !0)),
					(e._zTime = n),
					!s)
				)
					t(e._startAt, ze, ze)
				else if (!n) return
			}
			for (
				e._pt = e._ptCache = 0, a = (w && Jt(a)) || (a && !w), P = 0;
				P < h.length;
				P++
			) {
				if (
					((F = h[P]),
					(ee = F._gsap || O0(h)[P]._gsap),
					(e._ptLookup[P] = q = {}),
					Kf[ee.id] && ri.length && cu(),
					(K = _ === h ? P : _.indexOf(F)),
					Q &&
						(Y = new Q()).init(F, O || C, e, K, _) !== !1 &&
						((e._pt = M =
							new tn(e._pt, F, Y.name, 0, 1, Y.render, Y, 0, Y.priority)),
						Y._props.forEach(function (x) {
							q[x] = M
						}),
						Y.priority && (b = 1)),
					!Q || O)
				)
					for (R in C)
						an[R] && (Y = mm(R, C, e, K, F, _))
							? Y.priority && (b = 1)
							: (q[R] = M =
									M0.call(e, F, R, 'get', C[R], K, _, 0, i.stringFilter))
				e._op && e._op[P] && e.kill(F, e._op[P]),
					S &&
						e._pt &&
						((Br = e),
						be.killTweensOf(F, q, e.globalTime(n)),
						(B = !e.parent),
						(Br = 0)),
					e._pt && a && (Kf[ee.id] = 1)
			}
			b && Sm(e), e._onInit && e._onInit(e)
		}
		;(e._onUpdate = u),
			(e._initted = (!e._op || e._pt) && !B),
			v && n <= 0 && z.render(Pn, !0, !0)
	},
	wy = function (e, n, r, i, o, l, s) {
		var a = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
			u,
			c,
			d,
			f
		if (!a)
			for (
				a = e._ptCache[n] = [], d = e._ptLookup, f = e._targets.length;
				f--;

			) {
				if (((u = d[f][n]), u && u.d && u.d._pt))
					for (u = u.d._pt; u && u.p !== n && u.fp !== n; ) u = u._next
				if (!u) return (r1 = 1), (e.vars[n] = '+=0'), N0(e, s), (r1 = 0), 1
				a.push(u)
			}
		for (f = a.length; f--; )
			(c = a[f]),
				(u = c._pt || c),
				(u.s = (i || i === 0) && !o ? i : u.s + (i || 0) + l * u.c),
				(u.c = r - u.s),
				c.e && (c.e = Ze(r) + Ot(c.e)),
				c.b && (c.b = u.s + Ot(c.b))
	},
	xy = function (e, n) {
		var r = e[0] ? Di(e[0]).harness : 0,
			i = r && r.aliases,
			o,
			l,
			s,
			a
		if (!i) return n
		o = qi({}, n)
		for (l in i)
			if (l in o) for (a = i[l].split(','), s = a.length; s--; ) o[a[s]] = o[l]
		return o
	},
	Sy = function (e, n, r, i) {
		var o = n.ease || i || 'power1.inOut',
			l,
			s
		if (Nt(n))
			(s = r[e] || (r[e] = [])),
				n.forEach(function (a, u) {
					return s.push({ t: (u / (n.length - 1)) * 100, v: a, e: o })
				})
		else
			for (l in n)
				(s = r[l] || (r[l] = [])),
					l === 'ease' || s.push({ t: parseFloat(e), v: n[l], e: o })
	},
	Ul = function (e, n, r, i, o) {
		return Qe(e)
			? e.call(n, r, i, o)
			: vt(e) && ~e.indexOf('random(')
			? ms(e)
			: e
	},
	vm = R0 + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
	ym = {}
en(vm + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
	return (ym[t] = 1)
})
var ut = (function (t) {
	jg(e, t)
	function e(r, i, o, l) {
		var s
		typeof i == 'number' && ((o.duration = i), (i = o), (o = null)),
			(s = t.call(this, l ? i : bl(i)) || this)
		var a = s.vars,
			u = a.duration,
			c = a.delay,
			d = a.immediateRender,
			f = a.stagger,
			p = a.overwrite,
			v = a.keyframes,
			g = a.defaults,
			w = a.scrollTrigger,
			m = a.yoyoEase,
			h = i.parent || be,
			y = (Nt(r) || bg(r) ? Tr(r[0]) : 'length' in i) ? [r] : Tn(r),
			_,
			S,
			z,
			C,
			P,
			R,
			M,
			F
		if (
			((s._targets = y.length
				? O0(y)
				: uu(
						'GSAP target ' + r + ' not found. https://greensock.com',
						!pn.nullTargetWarn
				  ) || []),
			(s._ptLookup = []),
			(s._overwrite = p),
			v || f || Js(u) || Js(c))
		) {
			if (
				((i = s.vars),
				(_ = s.timeline =
					new Yt({
						data: 'nested',
						defaults: g || {},
						targets: h && h.data === 'nested' ? h.vars.targets : y,
					})),
				_.kill(),
				(_.parent = _._dp = hr(s)),
				(_._start = 0),
				f || Js(u) || Js(c))
			) {
				if (((C = y.length), (M = f && im(f)), cr(f)))
					for (P in f) ~vm.indexOf(P) && (F || (F = {}), (F[P] = f[P]))
				for (S = 0; S < C; S++)
					(z = fu(i, ym)),
						(z.stagger = 0),
						m && (z.yoyoEase = m),
						F && qi(z, F),
						(R = y[S]),
						(z.duration = +Ul(u, hr(s), S, R, y)),
						(z.delay = (+Ul(c, hr(s), S, R, y) || 0) - s._delay),
						!f &&
							C === 1 &&
							z.delay &&
							((s._delay = c = z.delay), (s._start += c), (z.delay = 0)),
						_.to(R, z, M ? M(S, R, y) : 0),
						(_._ease = pe.none)
				_.duration() ? (u = c = 0) : (s.timeline = 0)
			} else if (v) {
				bl(Dn(_.vars.defaults, { ease: 'none' })),
					(_._ease = Ii(v.ease || i.ease || 'none'))
				var b = 0,
					ee,
					Q,
					Y
				if (Nt(v))
					v.forEach(function (q) {
						return _.to(y, q, '>')
					}),
						_.duration()
				else {
					z = {}
					for (P in v)
						P === 'ease' || P === 'easeEach' || Sy(P, v[P], z, v.easeEach)
					for (P in z)
						for (
							ee = z[P].sort(function (q, K) {
								return q.t - K.t
							}),
								b = 0,
								S = 0;
							S < ee.length;
							S++
						)
							(Q = ee[S]),
								(Y = {
									ease: Q.e,
									duration: ((Q.t - (S ? ee[S - 1].t : 0)) / 100) * u,
								}),
								(Y[P] = Q.v),
								_.to(y, Y, b),
								(b += Y.duration)
					_.duration() < u && _.to({}, { duration: u - _.duration() })
				}
			}
			u || s.duration((u = _.duration()))
		} else s.timeline = 0
		return (
			p === !0 && !C0 && ((Br = hr(s)), be.killTweensOf(y), (Br = 0)),
			nr(h, hr(s), o),
			i.reversed && s.reverse(),
			i.paused && s.paused(!0),
			(d ||
				(!u &&
					!v &&
					s._start === kt(h._time) &&
					Jt(d) &&
					Zv(hr(s)) &&
					h.data !== 'nested')) &&
				((s._tTime = -ze), s.render(Math.max(0, -c) || 0)),
			w && em(hr(s), w),
			s
		)
	}
	var n = e.prototype
	return (
		(n.render = function (i, o, l) {
			var s = this._time,
				a = this._tDur,
				u = this._dur,
				c = i < 0,
				d = i > a - ze && !c ? a : i < ze ? 0 : i,
				f,
				p,
				v,
				g,
				w,
				m,
				h,
				y,
				_
			if (!u) ey(this, i, o, l)
			else if (
				d !== this._tTime ||
				!i ||
				l ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== c)
			) {
				if (((f = d), (y = this.timeline), this._repeat)) {
					if (((g = u + this._rDelay), this._repeat < -1 && c))
						return this.totalTime(g * 100 + i, o, l)
					if (
						((f = kt(d % g)),
						d === a
							? ((v = this._repeat), (f = u))
							: ((v = ~~(d / g)),
							  v && v === d / g && ((f = u), v--),
							  f > u && (f = u)),
						(m = this._yoyo && v & 1),
						m && ((_ = this._yEase), (f = u - f)),
						(w = Yo(this._tTime, g)),
						f === s && !l && this._initted)
					)
						return (this._tTime = d), this
					v !== w &&
						(y && this._yEase && pm(y, m),
						this.vars.repeatRefresh &&
							!m &&
							!this._lock &&
							((this._lock = l = 1),
							(this.render(kt(g * v), !0).invalidate()._lock = 0)))
				}
				if (!this._initted) {
					if (tm(this, c ? i : f, l, o, d)) return (this._tTime = 0), this
					if (s !== this._time) return this
					if (u !== this._dur) return this.render(i, o, l)
				}
				if (
					((this._tTime = d),
					(this._time = f),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = h = (_ || this._ease)(f / u)),
					this._from && (this.ratio = h = 1 - h),
					f && !s && !o && (Rn(this, 'onStart'), this._tTime !== d))
				)
					return this
				for (p = this._pt; p; ) p.r(h, p.d), (p = p._next)
				;(y &&
					y.render(
						i < 0 ? i : !f && m ? -ze : y._dur * y._ease(f / this._dur),
						o,
						l
					)) ||
					(this._startAt && (this._zTime = i)),
					this._onUpdate &&
						!o &&
						(c && Zf(this, i, o, l), Rn(this, 'onUpdate')),
					this._repeat &&
						v !== w &&
						this.vars.onRepeat &&
						!o &&
						this.parent &&
						Rn(this, 'onRepeat'),
					(d === this._tDur || !d) &&
						this._tTime === d &&
						(c && !this._onUpdate && Zf(this, i, !0, !0),
						(i || !u) &&
							((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
							ci(this, 1),
						!o &&
							!(c && !s) &&
							(d || s || m) &&
							(Rn(this, d === a ? 'onComplete' : 'onReverseComplete', !0),
							this._prom && !(d < a && this.timeScale() > 0) && this._prom()))
			}
			return this
		}),
		(n.targets = function () {
			return this._targets
		}),
		(n.invalidate = function (i) {
			return (
				(!i || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(i),
				t.prototype.invalidate.call(this, i)
			)
		}),
		(n.resetTo = function (i, o, l, s) {
			vs || un.wake(), this._ts || this.play()
			var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				u
			return (
				this._initted || N0(this, a),
				(u = this._ease(a / this._dur)),
				wy(this, i, o, l, s, u, a)
					? this.resetTo(i, o, l, s)
					: (Gu(this, 0),
					  this.parent ||
							Zg(
								this._dp,
								this,
								'_first',
								'_last',
								this._dp._sort ? '_start' : 0
							),
					  this.render(0))
			)
		}),
		(n.kill = function (i, o) {
			if ((o === void 0 && (o = 'all'), !i && (!o || o === 'all')))
				return (this._lazy = this._pt = 0), this.parent ? El(this) : this
			if (this.timeline) {
				var l = this.timeline.totalDuration()
				return (
					this.timeline.killTweensOf(i, o, Br && Br.vars.overwrite !== !0)
						._first || El(this),
					this.parent &&
						l !== this.timeline.totalDuration() &&
						Xo(this, (this._dur * this.timeline._tDur) / l, 0, 1),
					this
				)
			}
			var s = this._targets,
				a = i ? Tn(i) : s,
				u = this._ptLookup,
				c = this._pt,
				d,
				f,
				p,
				v,
				g,
				w,
				m
			if ((!o || o === 'all') && Qv(s, a))
				return o === 'all' && (this._pt = 0), El(this)
			for (
				d = this._op = this._op || [],
					o !== 'all' &&
						(vt(o) &&
							((g = {}),
							en(o, function (h) {
								return (g[h] = 1)
							}),
							(o = g)),
						(o = xy(s, o))),
					m = s.length;
				m--;

			)
				if (~a.indexOf(s[m])) {
					;(f = u[m]),
						o === 'all'
							? ((d[m] = o), (v = f), (p = {}))
							: ((p = d[m] = d[m] || {}), (v = o))
					for (g in v)
						(w = f && f[g]),
							w &&
								((!('kill' in w.d) || w.d.kill(g) === !0) && Yu(this, w, '_pt'),
								delete f[g]),
							p !== 'all' && (p[g] = 1)
				}
			return this._initted && !this._pt && c && El(this), this
		}),
		(e.to = function (i, o) {
			return new e(i, o, arguments[2])
		}),
		(e.from = function (i, o) {
			return Bl(1, arguments)
		}),
		(e.delayedCall = function (i, o, l, s) {
			return new e(o, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: i,
				onComplete: o,
				onReverseComplete: o,
				onCompleteParams: l,
				onReverseCompleteParams: l,
				callbackScope: s,
			})
		}),
		(e.fromTo = function (i, o, l) {
			return Bl(2, arguments)
		}),
		(e.set = function (i, o) {
			return (o.duration = 0), o.repeatDelay || (o.repeat = 0), new e(i, o)
		}),
		(e.killTweensOf = function (i, o, l) {
			return be.killTweensOf(i, o, l)
		}),
		e
	)
})(Qo)
Dn(ut.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 })
en('staggerTo,staggerFrom,staggerFromTo', function (t) {
	ut[t] = function () {
		var e = new Yt(),
			n = e1.call(arguments, 0)
		return n.splice(t === 'staggerFromTo' ? 5 : 4, 0, 0), e[t].apply(e, n)
	}
})
var L0 = function (e, n, r) {
		return (e[n] = r)
	},
	_m = function (e, n, r) {
		return e[n](r)
	},
	ky = function (e, n, r, i) {
		return e[n](i.fp, r)
	},
	Cy = function (e, n, r) {
		return e.setAttribute(n, r)
	},
	D0 = function (e, n) {
		return Qe(e[n]) ? _m : E0(e[n]) && e.setAttribute ? Cy : L0
	},
	wm = function (e, n) {
		return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
	},
	Ey = function (e, n) {
		return n.set(n.t, n.p, !!(n.s + n.c * e), n)
	},
	xm = function (e, n) {
		var r = n._pt,
			i = ''
		if (!e && n.b) i = n.b
		else if (e === 1 && n.e) i = n.e
		else {
			for (; r; )
				(i =
					r.p +
					(r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
					i),
					(r = r._next)
			i += n.c
		}
		n.set(n.t, n.p, i, n)
	},
	A0 = function (e, n) {
		for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next)
	},
	zy = function (e, n, r, i) {
		for (var o = this._pt, l; o; )
			(l = o._next), o.p === i && o.modifier(e, n, r), (o = l)
	},
	Py = function (e) {
		for (var n = this._pt, r, i; n; )
			(i = n._next),
				(n.p === e && !n.op) || n.op === e
					? Yu(this, n, '_pt')
					: n.dep || (r = 1),
				(n = i)
		return !r
	},
	Ty = function (e, n, r, i) {
		i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
	},
	Sm = function (e) {
		for (var n = e._pt, r, i, o, l; n; ) {
			for (r = n._next, i = o; i && i.pr > n.pr; ) i = i._next
			;(n._prev = i ? i._prev : l) ? (n._prev._next = n) : (o = n),
				(n._next = i) ? (i._prev = n) : (l = n),
				(n = r)
		}
		e._pt = o
	},
	tn = (function () {
		function t(n, r, i, o, l, s, a, u, c) {
			;(this.t = r),
				(this.s = o),
				(this.c = l),
				(this.p = i),
				(this.r = s || wm),
				(this.d = a || this),
				(this.set = u || L0),
				(this.pr = c || 0),
				(this._next = n),
				n && (n._prev = this)
		}
		var e = t.prototype
		return (
			(e.modifier = function (r, i, o) {
				;(this.mSet = this.mSet || this.set),
					(this.set = Ty),
					(this.m = r),
					(this.mt = o),
					(this.tween = i)
			}),
			t
		)
	})()
en(
	R0 +
		'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
	function (t) {
		return (T0[t] = 1)
	}
)
gn.TweenMax = gn.TweenLite = ut
gn.TimelineLite = gn.TimelineMax = Yt
be = new Yt({
	sortChildren: !1,
	defaults: qo,
	autoRemoveChildren: !0,
	id: 'root',
	smoothChildTiming: !0,
})
pn.stringFilter = fm
var Ko = [],
	za = {},
	Ry = [],
	zp = 0,
	Ac = function (e) {
		return (za[e] || Ry).map(function (n) {
			return n()
		})
	},
	i1 = function () {
		var e = Date.now(),
			n = []
		e - zp > 2 &&
			(Ac('matchMediaInit'),
			Ko.forEach(function (r) {
				var i = r.queries,
					o = r.conditions,
					l,
					s,
					a,
					u
				for (s in i)
					(l = Sn.matchMedia(i[s]).matches),
						l && (a = 1),
						l !== o[s] && ((o[s] = l), (u = 1))
				u && (r.revert(), a && n.push(r))
			}),
			Ac('matchMediaRevert'),
			n.forEach(function (r) {
				return r.onMatch(r)
			}),
			(zp = e),
			Ac('matchMedia'))
	},
	km = (function () {
		function t(n, r) {
			;(this.selector = r && t1(r)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				n && this.add(n)
		}
		var e = t.prototype
		return (
			(e.add = function (r, i, o) {
				Qe(r) && ((o = i), (i = r), (r = Qe))
				var l = this,
					s = function () {
						var u = rt,
							c = l.selector,
							d
						return (
							u && u !== l && u.data.push(l),
							o && (l.selector = t1(o)),
							(rt = l),
							(d = i.apply(l, arguments)),
							Qe(d) && l._r.push(d),
							(rt = u),
							(l.selector = c),
							(l.isReverted = !1),
							d
						)
					}
				return (l.last = s), r === Qe ? s(l) : r ? (l[r] = s) : s
			}),
			(e.ignore = function (r) {
				var i = rt
				;(rt = null), r(this), (rt = i)
			}),
			(e.getTweens = function () {
				var r = []
				return (
					this.data.forEach(function (i) {
						return i instanceof t
							? r.push.apply(r, i.getTweens())
							: i instanceof ut &&
									!(i.parent && i.parent.data === 'nested') &&
									r.push(i)
					}),
					r
				)
			}),
			(e.clear = function () {
				this._r.length = this.data.length = 0
			}),
			(e.kill = function (r, i) {
				var o = this
				if (r) {
					var l = this.getTweens()
					this.data.forEach(function (a) {
						a.data === 'isFlip' &&
							(a.revert(),
							a.getChildren(!0, !0, !1).forEach(function (u) {
								return l.splice(l.indexOf(u), 1)
							}))
					}),
						l
							.map(function (a) {
								return { g: a.globalTime(0), t: a }
							})
							.sort(function (a, u) {
								return u.g - a.g || -1
							})
							.forEach(function (a) {
								return a.t.revert(r)
							}),
						this.data.forEach(function (a) {
							return !(a instanceof Qo) && a.revert && a.revert(r)
						}),
						this._r.forEach(function (a) {
							return a(r, o)
						}),
						(this.isReverted = !0)
				} else
					this.data.forEach(function (a) {
						return a.kill && a.kill()
					})
				if ((this.clear(), i)) {
					var s = Ko.indexOf(this)
					~s && Ko.splice(s, 1)
				}
			}),
			(e.revert = function (r) {
				this.kill(r || {})
			}),
			t
		)
	})(),
	Oy = (function () {
		function t(n) {
			;(this.contexts = []), (this.scope = n)
		}
		var e = t.prototype
		return (
			(e.add = function (r, i, o) {
				cr(r) || (r = { matches: r })
				var l = new km(0, o || this.scope),
					s = (l.conditions = {}),
					a,
					u,
					c
				this.contexts.push(l), (i = l.add('onMatch', i)), (l.queries = r)
				for (u in r)
					u === 'all'
						? (c = 1)
						: ((a = Sn.matchMedia(r[u])),
						  a &&
								(Ko.indexOf(l) < 0 && Ko.push(l),
								(s[u] = a.matches) && (c = 1),
								a.addListener
									? a.addListener(i1)
									: a.addEventListener('change', i1)))
				return c && i(l), this
			}),
			(e.revert = function (r) {
				this.kill(r || {})
			}),
			(e.kill = function (r) {
				this.contexts.forEach(function (i) {
					return i.kill(r, !0)
				})
			}),
			t
		)
	})(),
	pu = {
		registerPlugin: function () {
			for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
				n[r] = arguments[r]
			n.forEach(function (i) {
				return fy(i)
			})
		},
		timeline: function (e) {
			return new Yt(e)
		},
		getTweensOf: function (e, n) {
			return be.getTweensOf(e, n)
		},
		getProperty: function (e, n, r, i) {
			vt(e) && (e = Tn(e)[0])
			var o = Di(e || {}).get,
				l = r ? Kg : Qg
			return (
				r === 'native' && (r = ''),
				e &&
					(n
						? l(((an[n] && an[n].get) || o)(e, n, r, i))
						: function (s, a, u) {
								return l(((an[s] && an[s].get) || o)(e, s, a, u))
						  })
			)
		},
		quickSetter: function (e, n, r) {
			if (((e = Tn(e)), e.length > 1)) {
				var i = e.map(function (c) {
						return mn.quickSetter(c, n, r)
					}),
					o = i.length
				return function (c) {
					for (var d = o; d--; ) i[d](c)
				}
			}
			e = e[0] || {}
			var l = an[n],
				s = Di(e),
				a = (s.harness && (s.harness.aliases || {})[n]) || n,
				u = l
					? function (c) {
							var d = new l()
							;(Co._pt = 0),
								d.init(e, r ? c + r : c, Co, 0, [e]),
								d.render(1, d),
								Co._pt && A0(1, Co)
					  }
					: s.set(e, a)
			return l
				? u
				: function (c) {
						return u(e, a, r ? c + r : c, s, 1)
				  }
		},
		quickTo: function (e, n, r) {
			var i,
				o = mn.to(
					e,
					qi(((i = {}), (i[n] = '+=0.1'), (i.paused = !0), i), r || {})
				),
				l = function (a, u, c) {
					return o.resetTo(n, a, u, c)
				}
			return (l.tween = o), l
		},
		isTweening: function (e) {
			return be.getTweensOf(e, !0).length > 0
		},
		defaults: function (e) {
			return e && e.ease && (e.ease = Ii(e.ease, qo.ease)), xp(qo, e || {})
		},
		config: function (e) {
			return xp(pn, e || {})
		},
		registerEffect: function (e) {
			var n = e.name,
				r = e.effect,
				i = e.plugins,
				o = e.defaults,
				l = e.extendTimeline
			;(i || '').split(',').forEach(function (s) {
				return (
					s && !an[s] && !gn[s] && uu(n + ' effect requires ' + s + ' plugin.')
				)
			}),
				(Mc[n] = function (s, a, u) {
					return r(Tn(s), Dn(a || {}, o), u)
				}),
				l &&
					(Yt.prototype[n] = function (s, a, u) {
						return this.add(Mc[n](s, cr(a) ? a : (u = a) && {}, this), u)
					})
		},
		registerEase: function (e, n) {
			pe[e] = Ii(n)
		},
		parseEase: function (e, n) {
			return arguments.length ? Ii(e, n) : pe
		},
		getById: function (e) {
			return be.getById(e)
		},
		exportRoot: function (e, n) {
			e === void 0 && (e = {})
			var r = new Yt(e),
				i,
				o
			for (
				r.smoothChildTiming = Jt(e.smoothChildTiming),
					be.remove(r),
					r._dp = 0,
					r._time = r._tTime = be._time,
					i = be._first;
				i;

			)
				(o = i._next),
					(n ||
						!(
							!i._dur &&
							i instanceof ut &&
							i.vars.onComplete === i._targets[0]
						)) &&
						nr(r, i, i._start - i._delay),
					(i = o)
			return nr(be, r, 0), r
		},
		context: function (e, n) {
			return e ? new km(e, n) : rt
		},
		matchMedia: function (e) {
			return new Oy(e)
		},
		matchMediaRefresh: function () {
			return (
				Ko.forEach(function (e) {
					var n = e.conditions,
						r,
						i
					for (i in n) n[i] && ((n[i] = !1), (r = 1))
					r && e.revert()
				}) || i1()
			)
		},
		addEventListener: function (e, n) {
			var r = za[e] || (za[e] = [])
			~r.indexOf(n) || r.push(n)
		},
		removeEventListener: function (e, n) {
			var r = za[e],
				i = r && r.indexOf(n)
			i >= 0 && r.splice(i, 1)
		},
		utils: {
			wrap: ay,
			wrapYoyo: uy,
			distribute: im,
			random: lm,
			snap: om,
			normalize: sy,
			getUnit: Ot,
			clamp: ry,
			splitColor: um,
			toArray: Tn,
			selector: t1,
			mapRange: am,
			pipe: oy,
			unitize: ly,
			interpolate: cy,
			shuffle: rm,
		},
		install: Wg,
		effects: Mc,
		ticker: un,
		updateRoot: Yt.updateRoot,
		plugins: an,
		globalTimeline: be,
		core: {
			PropTween: tn,
			globals: qg,
			Tween: ut,
			Timeline: Yt,
			Animation: Qo,
			getCache: Di,
			_removeLinkedListItem: Yu,
			reverting: function () {
				return Zt
			},
			context: function (e) {
				return e && rt && (rt.data.push(e), (e._ctx = rt)), rt
			},
			suppressOverwrites: function (e) {
				return (C0 = e)
			},
		},
	}
en('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
	return (pu[t] = ut[t])
})
un.add(Yt.updateRoot)
Co = pu.to({}, { duration: 0 })
var My = function (e, n) {
		for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
			r = r._next
		return r
	},
	Ny = function (e, n) {
		var r = e._targets,
			i,
			o,
			l
		for (i in n)
			for (o = r.length; o--; )
				(l = e._ptLookup[o][i]),
					l &&
						(l = l.d) &&
						(l._pt && (l = My(l, i)),
						l && l.modifier && l.modifier(n[i], e, r[o], i))
	},
	Ic = function (e, n) {
		return {
			name: e,
			rawVars: 1,
			init: function (i, o, l) {
				l._onInit = function (s) {
					var a, u
					if (
						(vt(o) &&
							((a = {}),
							en(o, function (c) {
								return (a[c] = 1)
							}),
							(o = a)),
						n)
					) {
						a = {}
						for (u in o) a[u] = n(o[u])
						o = a
					}
					Ny(s, o)
				}
			},
		}
	},
	mn =
		pu.registerPlugin(
			{
				name: 'attr',
				init: function (e, n, r, i, o) {
					var l, s, a
					this.tween = r
					for (l in n)
						(a = e.getAttribute(l) || ''),
							(s = this.add(
								e,
								'setAttribute',
								(a || 0) + '',
								n[l],
								i,
								o,
								0,
								0,
								l
							)),
							(s.op = l),
							(s.b = a),
							this._props.push(l)
				},
				render: function (e, n) {
					for (var r = n._pt; r; )
						Zt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next)
				},
			},
			{
				name: 'endArray',
				init: function (e, n) {
					for (var r = n.length; r--; )
						this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
				},
			},
			Ic('roundProps', n1),
			Ic('modifiers'),
			Ic('snap', om)
		) || pu
ut.version = Yt.version = mn.version = '3.11.3'
Hg = 1
$g() && Go()
pe.Power0
pe.Power1
pe.Power2
pe.Power3
pe.Power4
pe.Linear
pe.Quad
pe.Cubic
pe.Quart
pe.Quint
pe.Strong
pe.Elastic
pe.Back
pe.SteppedEase
pe.Bounce
pe.Sine
pe.Expo
pe.Circ
/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Pp,
	Ur,
	Do,
	I0,
	Oi,
	Tp,
	j0,
	Ly = function () {
		return typeof window < 'u'
	},
	Rr = {},
	Ci = 180 / Math.PI,
	Ao = Math.PI / 180,
	io = Math.atan2,
	Rp = 1e8,
	F0 = /([A-Z])/g,
	Dy = /(left|right|width|margin|padding|x)/i,
	Ay = /[\s,\(]\S/,
	wr = {
		autoAlpha: 'opacity,visibility',
		scale: 'scaleX,scaleY',
		alpha: 'opacity',
	},
	o1 = function (e, n) {
		return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
	},
	Iy = function (e, n) {
		return n.set(
			n.t,
			n.p,
			e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
			n
		)
	},
	jy = function (e, n) {
		return n.set(
			n.t,
			n.p,
			e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
			n
		)
	},
	Fy = function (e, n) {
		var r = n.s + n.c * e
		n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n)
	},
	Cm = function (e, n) {
		return n.set(n.t, n.p, e ? n.e : n.b, n)
	},
	Em = function (e, n) {
		return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
	},
	$y = function (e, n, r) {
		return (e.style[n] = r)
	},
	by = function (e, n, r) {
		return e.style.setProperty(n, r)
	},
	By = function (e, n, r) {
		return (e._gsap[n] = r)
	},
	Uy = function (e, n, r) {
		return (e._gsap.scaleX = e._gsap.scaleY = r)
	},
	Vy = function (e, n, r, i, o) {
		var l = e._gsap
		;(l.scaleX = l.scaleY = r), l.renderTransform(o, l)
	},
	Hy = function (e, n, r, i, o) {
		var l = e._gsap
		;(l[n] = r), l.renderTransform(o, l)
	},
	Be = 'transform',
	qn = Be + 'Origin',
	Wy = function (e, n) {
		var r = this,
			i = this.target,
			o = i.style
		if (e in Rr) {
			if (
				((this.tfm = this.tfm || {}),
				e !== 'transform' &&
					((e = wr[e] || e),
					~e.indexOf(',')
						? e.split(',').forEach(function (l) {
								return (r.tfm[l] = mr(i, l))
						  })
						: (this.tfm[e] = i._gsap.x ? i._gsap[e] : mr(i, e))),
				this.props.indexOf(Be) >= 0)
			)
				return
			i._gsap.svg &&
				((this.svgo = i.getAttribute('data-svg-origin')),
				this.props.push(qn, n, '')),
				(e = Be)
		}
		;(o || n) && this.props.push(e, n, o[e])
	},
	zm = function (e) {
		e.translate &&
			(e.removeProperty('translate'),
			e.removeProperty('scale'),
			e.removeProperty('rotate'))
	},
	qy = function () {
		var e = this.props,
			n = this.target,
			r = n.style,
			i = n._gsap,
			o,
			l
		for (o = 0; o < e.length; o += 3)
			e[o + 1]
				? (n[e[o]] = e[o + 2])
				: e[o + 2]
				? (r[e[o]] = e[o + 2])
				: r.removeProperty(e[o].replace(F0, '-$1').toLowerCase())
		if (this.tfm) {
			for (l in this.tfm) i[l] = this.tfm[l]
			i.svg &&
				(i.renderTransform(),
				n.setAttribute('data-svg-origin', this.svgo || '')),
				(o = j0()),
				o && !o.isStart && !r[Be] && (zm(r), (i.uncache = 1))
		}
	},
	Pm = function (e, n) {
		var r = { target: e, props: [], revert: qy, save: Wy }
		return (
			n &&
				n.split(',').forEach(function (i) {
					return r.save(i)
				}),
			r
		)
	},
	Tm,
	l1 = function (e, n) {
		var r = Ur.createElementNS
			? Ur.createElementNS(
					(n || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
					e
			  )
			: Ur.createElement(e)
		return r.style ? r : Ur.createElement(e)
	},
	ar = function t(e, n, r) {
		var i = getComputedStyle(e)
		return (
			i[n] ||
			i.getPropertyValue(n.replace(F0, '-$1').toLowerCase()) ||
			i.getPropertyValue(n) ||
			(!r && t(e, Zo(n) || n, 1)) ||
			''
		)
	},
	Op = 'O,Moz,ms,Ms,Webkit'.split(','),
	Zo = function (e, n, r) {
		var i = n || Oi,
			o = i.style,
			l = 5
		if (e in o && !r) return e
		for (
			e = e.charAt(0).toUpperCase() + e.substr(1);
			l-- && !(Op[l] + e in o);

		);
		return l < 0 ? null : (l === 3 ? 'ms' : l >= 0 ? Op[l] : '') + e
	},
	s1 = function () {
		Ly() &&
			window.document &&
			((Pp = window),
			(Ur = Pp.document),
			(Do = Ur.documentElement),
			(Oi = l1('div') || { style: {} }),
			l1('div'),
			(Be = Zo(Be)),
			(qn = Be + 'Origin'),
			(Oi.style.cssText =
				'border-width:0;line-height:0;position:absolute;padding:0'),
			(Tm = !!Zo('perspective')),
			(j0 = mn.core.reverting),
			(I0 = 1))
	},
	jc = function t(e) {
		var n = l1(
				'svg',
				(this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
					'http://www.w3.org/2000/svg'
			),
			r = this.parentNode,
			i = this.nextSibling,
			o = this.style.cssText,
			l
		if (
			(Do.appendChild(n),
			n.appendChild(this),
			(this.style.display = 'block'),
			e)
		)
			try {
				;(l = this.getBBox()),
					(this._gsapBBox = this.getBBox),
					(this.getBBox = t)
			} catch {}
		else this._gsapBBox && (l = this._gsapBBox())
		return (
			r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
			Do.removeChild(n),
			(this.style.cssText = o),
			l
		)
	},
	Mp = function (e, n) {
		for (var r = n.length; r--; )
			if (e.hasAttribute(n[r])) return e.getAttribute(n[r])
	},
	Rm = function (e) {
		var n
		try {
			n = e.getBBox()
		} catch {
			n = jc.call(e, !0)
		}
		return (
			(n && (n.width || n.height)) || e.getBBox === jc || (n = jc.call(e, !0)),
			n && !n.width && !n.x && !n.y
				? {
						x: +Mp(e, ['x', 'cx', 'x1']) || 0,
						y: +Mp(e, ['y', 'cy', 'y1']) || 0,
						width: 0,
						height: 0,
				  }
				: n
		)
	},
	Om = function (e) {
		return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Rm(e))
	},
	ys = function (e, n) {
		if (n) {
			var r = e.style
			n in Rr && n !== qn && (n = Be),
				r.removeProperty
					? ((n.substr(0, 2) === 'ms' || n.substr(0, 6) === 'webkit') &&
							(n = '-' + n),
					  r.removeProperty(n.replace(F0, '-$1').toLowerCase()))
					: r.removeAttribute(n)
		}
	},
	Vr = function (e, n, r, i, o, l) {
		var s = new tn(e._pt, n, r, 0, 1, l ? Em : Cm)
		return (e._pt = s), (s.b = i), (s.e = o), e._props.push(r), s
	},
	Np = { deg: 1, rad: 1, turn: 1 },
	Yy = { grid: 1, flex: 1 },
	fi = function t(e, n, r, i) {
		var o = parseFloat(r) || 0,
			l = (r + '').trim().substr((o + '').length) || 'px',
			s = Oi.style,
			a = Dy.test(n),
			u = e.tagName.toLowerCase() === 'svg',
			c = (u ? 'client' : 'offset') + (a ? 'Width' : 'Height'),
			d = 100,
			f = i === 'px',
			p = i === '%',
			v,
			g,
			w,
			m
		return i === l || !o || Np[i] || Np[l]
			? o
			: (l !== 'px' && !f && (o = t(e, n, r, 'px')),
			  (m = e.getCTM && Om(e)),
			  (p || l === '%') && (Rr[n] || ~n.indexOf('adius'))
					? ((v = m ? e.getBBox()[a ? 'width' : 'height'] : e[c]),
					  Ze(p ? (o / v) * d : (o / 100) * v))
					: ((s[a ? 'width' : 'height'] = d + (f ? l : i)),
					  (g =
							~n.indexOf('adius') || (i === 'em' && e.appendChild && !u)
								? e
								: e.parentNode),
					  m && (g = (e.ownerSVGElement || {}).parentNode),
					  (!g || g === Ur || !g.appendChild) && (g = Ur.body),
					  (w = g._gsap),
					  w && p && w.width && a && w.time === un.time && !w.uncache
							? Ze((o / w.width) * d)
							: ((p || l === '%') &&
									!Yy[ar(g, 'display')] &&
									(s.position = ar(e, 'position')),
							  g === e && (s.position = 'static'),
							  g.appendChild(Oi),
							  (v = Oi[c]),
							  g.removeChild(Oi),
							  (s.position = 'absolute'),
							  a && p && ((w = Di(g)), (w.time = un.time), (w.width = g[c])),
							  Ze(f ? (v * o) / d : v && o ? (d / v) * o : 0))))
	},
	mr = function (e, n, r, i) {
		var o
		return (
			I0 || s1(),
			n in wr &&
				n !== 'transform' &&
				((n = wr[n]), ~n.indexOf(',') && (n = n.split(',')[0])),
			Rr[n] && n !== 'transform'
				? ((o = ws(e, i)),
				  (o =
						n !== 'transformOrigin'
							? o[n]
							: o.svg
							? o.origin
							: gu(ar(e, qn)) + ' ' + o.zOrigin + 'px'))
				: ((o = e.style[n]),
				  (!o || o === 'auto' || i || ~(o + '').indexOf('calc(')) &&
						(o =
							(hu[n] && hu[n](e, n, r)) ||
							ar(e, n) ||
							Xg(e, n) ||
							(n === 'opacity' ? 1 : 0))),
			r && !~(o + '').trim().indexOf(' ') ? fi(e, n, o, r) + r : o
		)
	},
	Xy = function (e, n, r, i) {
		if (!r || r === 'none') {
			var o = Zo(n, e, 1),
				l = o && ar(e, o, 1)
			l && l !== r
				? ((n = o), (r = l))
				: n === 'borderColor' && (r = ar(e, 'borderTopColor'))
		}
		var s = new tn(this._pt, e.style, n, 0, 1, xm),
			a = 0,
			u = 0,
			c,
			d,
			f,
			p,
			v,
			g,
			w,
			m,
			h,
			y,
			_,
			S
		if (
			((s.b = r),
			(s.e = i),
			(r += ''),
			(i += ''),
			i === 'auto' && ((e.style[n] = i), (i = ar(e, n) || i), (e.style[n] = r)),
			(c = [r, i]),
			fm(c),
			(r = c[0]),
			(i = c[1]),
			(f = r.match(ko) || []),
			(S = i.match(ko) || []),
			S.length)
		) {
			for (; (d = ko.exec(i)); )
				(w = d[0]),
					(h = i.substring(a, d.index)),
					v
						? (v = (v + 1) % 5)
						: (h.substr(-5) === 'rgba(' || h.substr(-5) === 'hsla(') && (v = 1),
					w !== (g = f[u++] || '') &&
						((p = parseFloat(g) || 0),
						(_ = g.substr((p + '').length)),
						w.charAt(1) === '=' && (w = Lo(p, w) + _),
						(m = parseFloat(w)),
						(y = w.substr((m + '').length)),
						(a = ko.lastIndex - y.length),
						y ||
							((y = y || pn.units[n] || _),
							a === i.length && ((i += y), (s.e += y))),
						_ !== y && (p = fi(e, n, g, y) || 0),
						(s._pt = {
							_next: s._pt,
							p: h || u === 1 ? h : ',',
							s: p,
							c: m - p,
							m: (v && v < 4) || n === 'zIndex' ? Math.round : 0,
						}))
			s.c = a < i.length ? i.substring(a, i.length) : ''
		} else s.r = n === 'display' && i === 'none' ? Em : Cm
		return Ug.test(i) && (s.e = 0), (this._pt = s), s
	},
	Lp = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
	Gy = function (e) {
		var n = e.split(' '),
			r = n[0],
			i = n[1] || '50%'
		return (
			(r === 'top' || r === 'bottom' || i === 'left' || i === 'right') &&
				((e = r), (r = i), (i = e)),
			(n[0] = Lp[r] || r),
			(n[1] = Lp[i] || i),
			n.join(' ')
		)
	},
	Qy = function (e, n) {
		if (n.tween && n.tween._time === n.tween._dur) {
			var r = n.t,
				i = r.style,
				o = n.u,
				l = r._gsap,
				s,
				a,
				u
			if (o === 'all' || o === !0) (i.cssText = ''), (a = 1)
			else
				for (o = o.split(','), u = o.length; --u > -1; )
					(s = o[u]),
						Rr[s] && ((a = 1), (s = s === 'transformOrigin' ? qn : Be)),
						ys(r, s)
			a &&
				(ys(r, Be),
				l &&
					(l.svg && r.removeAttribute('transform'),
					ws(r, 1),
					(l.uncache = 1),
					zm(i)))
		}
	},
	hu = {
		clearProps: function (e, n, r, i, o) {
			if (o.data !== 'isFromStart') {
				var l = (e._pt = new tn(e._pt, n, r, 0, 0, Qy))
				return (l.u = i), (l.pr = -10), (l.tween = o), e._props.push(r), 1
			}
		},
	},
	_s = [1, 0, 0, 1, 0, 0],
	Mm = {},
	Nm = function (e) {
		return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e
	},
	Dp = function (e) {
		var n = ar(e, Be)
		return Nm(n) ? _s : n.substr(7).match(Bg).map(Ze)
	},
	$0 = function (e, n) {
		var r = e._gsap || Di(e),
			i = e.style,
			o = Dp(e),
			l,
			s,
			a,
			u
		return r.svg && e.getAttribute('transform')
			? ((a = e.transform.baseVal.consolidate().matrix),
			  (o = [a.a, a.b, a.c, a.d, a.e, a.f]),
			  o.join(',') === '1,0,0,1,0,0' ? _s : o)
			: (o === _s &&
					!e.offsetParent &&
					e !== Do &&
					!r.svg &&
					((a = i.display),
					(i.display = 'block'),
					(l = e.parentNode),
					(!l || !e.offsetParent) &&
						((u = 1), (s = e.nextElementSibling), Do.appendChild(e)),
					(o = Dp(e)),
					a ? (i.display = a) : ys(e, 'display'),
					u &&
						(s
							? l.insertBefore(e, s)
							: l
							? l.appendChild(e)
							: Do.removeChild(e))),
			  n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
	},
	a1 = function (e, n, r, i, o, l) {
		var s = e._gsap,
			a = o || $0(e, !0),
			u = s.xOrigin || 0,
			c = s.yOrigin || 0,
			d = s.xOffset || 0,
			f = s.yOffset || 0,
			p = a[0],
			v = a[1],
			g = a[2],
			w = a[3],
			m = a[4],
			h = a[5],
			y = n.split(' '),
			_ = parseFloat(y[0]) || 0,
			S = parseFloat(y[1]) || 0,
			z,
			C,
			P,
			R
		r
			? a !== _s &&
			  (C = p * w - v * g) &&
			  ((P = _ * (w / C) + S * (-g / C) + (g * h - w * m) / C),
			  (R = _ * (-v / C) + S * (p / C) - (p * h - v * m) / C),
			  (_ = P),
			  (S = R))
			: ((z = Rm(e)),
			  (_ = z.x + (~y[0].indexOf('%') ? (_ / 100) * z.width : _)),
			  (S = z.y + (~(y[1] || y[0]).indexOf('%') ? (S / 100) * z.height : S))),
			i || (i !== !1 && s.smooth)
				? ((m = _ - u),
				  (h = S - c),
				  (s.xOffset = d + (m * p + h * g) - m),
				  (s.yOffset = f + (m * v + h * w) - h))
				: (s.xOffset = s.yOffset = 0),
			(s.xOrigin = _),
			(s.yOrigin = S),
			(s.smooth = !!i),
			(s.origin = n),
			(s.originIsAbsolute = !!r),
			(e.style[qn] = '0px 0px'),
			l &&
				(Vr(l, s, 'xOrigin', u, _),
				Vr(l, s, 'yOrigin', c, S),
				Vr(l, s, 'xOffset', d, s.xOffset),
				Vr(l, s, 'yOffset', f, s.yOffset)),
			e.setAttribute('data-svg-origin', _ + ' ' + S)
	},
	ws = function (e, n) {
		var r = e._gsap || new gm(e)
		if ('x' in r && !n && !r.uncache) return r
		var i = e.style,
			o = r.scaleX < 0,
			l = 'px',
			s = 'deg',
			a = getComputedStyle(e),
			u = ar(e, qn) || '0',
			c,
			d,
			f,
			p,
			v,
			g,
			w,
			m,
			h,
			y,
			_,
			S,
			z,
			C,
			P,
			R,
			M,
			F,
			b,
			ee,
			Q,
			Y,
			q,
			K,
			O,
			B,
			x,
			te,
			D,
			j,
			I,
			H
		return (
			(c = d = f = g = w = m = h = y = _ = 0),
			(p = v = 1),
			(r.svg = !!(e.getCTM && Om(e))),
			a.translate &&
				((a.translate !== 'none' ||
					a.scale !== 'none' ||
					a.rotate !== 'none') &&
					(i[Be] =
						(a.translate !== 'none'
							? 'translate3d(' +
							  (a.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
							  ') '
							: '') +
						(a.rotate !== 'none' ? 'rotate(' + a.rotate + ') ' : '') +
						(a.scale !== 'none'
							? 'scale(' + a.scale.split(' ').join(',') + ') '
							: '') +
						(a[Be] !== 'none' ? a[Be] : '')),
				(i.scale = i.rotate = i.translate = 'none')),
			(C = $0(e, r.svg)),
			r.svg &&
				(r.uncache
					? ((O = e.getBBox()),
					  (u = r.xOrigin - O.x + 'px ' + (r.yOrigin - O.y) + 'px'),
					  (K = ''))
					: (K = !n && e.getAttribute('data-svg-origin')),
				a1(e, K || u, !!K || r.originIsAbsolute, r.smooth !== !1, C)),
			(S = r.xOrigin || 0),
			(z = r.yOrigin || 0),
			C !== _s &&
				((F = C[0]),
				(b = C[1]),
				(ee = C[2]),
				(Q = C[3]),
				(c = Y = C[4]),
				(d = q = C[5]),
				C.length === 6
					? ((p = Math.sqrt(F * F + b * b)),
					  (v = Math.sqrt(Q * Q + ee * ee)),
					  (g = F || b ? io(b, F) * Ci : 0),
					  (h = ee || Q ? io(ee, Q) * Ci + g : 0),
					  h && (v *= Math.abs(Math.cos(h * Ao))),
					  r.svg && ((c -= S - (S * F + z * ee)), (d -= z - (S * b + z * Q))))
					: ((H = C[6]),
					  (j = C[7]),
					  (x = C[8]),
					  (te = C[9]),
					  (D = C[10]),
					  (I = C[11]),
					  (c = C[12]),
					  (d = C[13]),
					  (f = C[14]),
					  (P = io(H, D)),
					  (w = P * Ci),
					  P &&
							((R = Math.cos(-P)),
							(M = Math.sin(-P)),
							(K = Y * R + x * M),
							(O = q * R + te * M),
							(B = H * R + D * M),
							(x = Y * -M + x * R),
							(te = q * -M + te * R),
							(D = H * -M + D * R),
							(I = j * -M + I * R),
							(Y = K),
							(q = O),
							(H = B)),
					  (P = io(-ee, D)),
					  (m = P * Ci),
					  P &&
							((R = Math.cos(-P)),
							(M = Math.sin(-P)),
							(K = F * R - x * M),
							(O = b * R - te * M),
							(B = ee * R - D * M),
							(I = Q * M + I * R),
							(F = K),
							(b = O),
							(ee = B)),
					  (P = io(b, F)),
					  (g = P * Ci),
					  P &&
							((R = Math.cos(P)),
							(M = Math.sin(P)),
							(K = F * R + b * M),
							(O = Y * R + q * M),
							(b = b * R - F * M),
							(q = q * R - Y * M),
							(F = K),
							(Y = O)),
					  w &&
							Math.abs(w) + Math.abs(g) > 359.9 &&
							((w = g = 0), (m = 180 - m)),
					  (p = Ze(Math.sqrt(F * F + b * b + ee * ee))),
					  (v = Ze(Math.sqrt(q * q + H * H))),
					  (P = io(Y, q)),
					  (h = Math.abs(P) > 2e-4 ? P * Ci : 0),
					  (_ = I ? 1 / (I < 0 ? -I : I) : 0)),
				r.svg &&
					((K = e.getAttribute('transform')),
					(r.forceCSS = e.setAttribute('transform', '') || !Nm(ar(e, Be))),
					K && e.setAttribute('transform', K))),
			Math.abs(h) > 90 &&
				Math.abs(h) < 270 &&
				(o
					? ((p *= -1), (h += g <= 0 ? 180 : -180), (g += g <= 0 ? 180 : -180))
					: ((v *= -1), (h += h <= 0 ? 180 : -180))),
			(n = n || r.uncache),
			(r.x =
				c -
				((r.xPercent =
					c &&
					((!n && r.xPercent) ||
						(Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
					? (e.offsetWidth * r.xPercent) / 100
					: 0) +
				l),
			(r.y =
				d -
				((r.yPercent =
					d &&
					((!n && r.yPercent) ||
						(Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
					? (e.offsetHeight * r.yPercent) / 100
					: 0) +
				l),
			(r.z = f + l),
			(r.scaleX = Ze(p)),
			(r.scaleY = Ze(v)),
			(r.rotation = Ze(g) + s),
			(r.rotationX = Ze(w) + s),
			(r.rotationY = Ze(m) + s),
			(r.skewX = h + s),
			(r.skewY = y + s),
			(r.transformPerspective = _ + l),
			(r.zOrigin = parseFloat(u.split(' ')[2]) || 0) && (i[qn] = gu(u)),
			(r.xOffset = r.yOffset = 0),
			(r.force3D = pn.force3D),
			(r.renderTransform = r.svg ? Zy : Tm ? Lm : Ky),
			(r.uncache = 0),
			r
		)
	},
	gu = function (e) {
		return (e = e.split(' '))[0] + ' ' + e[1]
	},
	Fc = function (e, n, r) {
		var i = Ot(n)
		return Ze(parseFloat(n) + parseFloat(fi(e, 'x', r + 'px', i))) + i
	},
	Ky = function (e, n) {
		;(n.z = '0px'),
			(n.rotationY = n.rotationX = '0deg'),
			(n.force3D = 0),
			Lm(e, n)
	},
	wi = '0deg',
	yl = '0px',
	xi = ') ',
	Lm = function (e, n) {
		var r = n || this,
			i = r.xPercent,
			o = r.yPercent,
			l = r.x,
			s = r.y,
			a = r.z,
			u = r.rotation,
			c = r.rotationY,
			d = r.rotationX,
			f = r.skewX,
			p = r.skewY,
			v = r.scaleX,
			g = r.scaleY,
			w = r.transformPerspective,
			m = r.force3D,
			h = r.target,
			y = r.zOrigin,
			_ = '',
			S = (m === 'auto' && e && e !== 1) || m === !0
		if (y && (d !== wi || c !== wi)) {
			var z = parseFloat(c) * Ao,
				C = Math.sin(z),
				P = Math.cos(z),
				R
			;(z = parseFloat(d) * Ao),
				(R = Math.cos(z)),
				(l = Fc(h, l, C * R * -y)),
				(s = Fc(h, s, -Math.sin(z) * -y)),
				(a = Fc(h, a, P * R * -y + y))
		}
		w !== yl && (_ += 'perspective(' + w + xi),
			(i || o) && (_ += 'translate(' + i + '%, ' + o + '%) '),
			(S || l !== yl || s !== yl || a !== yl) &&
				(_ +=
					a !== yl || S
						? 'translate3d(' + l + ', ' + s + ', ' + a + ') '
						: 'translate(' + l + ', ' + s + xi),
			u !== wi && (_ += 'rotate(' + u + xi),
			c !== wi && (_ += 'rotateY(' + c + xi),
			d !== wi && (_ += 'rotateX(' + d + xi),
			(f !== wi || p !== wi) && (_ += 'skew(' + f + ', ' + p + xi),
			(v !== 1 || g !== 1) && (_ += 'scale(' + v + ', ' + g + xi),
			(h.style[Be] = _ || 'translate(0, 0)')
	},
	Zy = function (e, n) {
		var r = n || this,
			i = r.xPercent,
			o = r.yPercent,
			l = r.x,
			s = r.y,
			a = r.rotation,
			u = r.skewX,
			c = r.skewY,
			d = r.scaleX,
			f = r.scaleY,
			p = r.target,
			v = r.xOrigin,
			g = r.yOrigin,
			w = r.xOffset,
			m = r.yOffset,
			h = r.forceCSS,
			y = parseFloat(l),
			_ = parseFloat(s),
			S,
			z,
			C,
			P,
			R
		;(a = parseFloat(a)),
			(u = parseFloat(u)),
			(c = parseFloat(c)),
			c && ((c = parseFloat(c)), (u += c), (a += c)),
			a || u
				? ((a *= Ao),
				  (u *= Ao),
				  (S = Math.cos(a) * d),
				  (z = Math.sin(a) * d),
				  (C = Math.sin(a - u) * -f),
				  (P = Math.cos(a - u) * f),
				  u &&
						((c *= Ao),
						(R = Math.tan(u - c)),
						(R = Math.sqrt(1 + R * R)),
						(C *= R),
						(P *= R),
						c &&
							((R = Math.tan(c)),
							(R = Math.sqrt(1 + R * R)),
							(S *= R),
							(z *= R))),
				  (S = Ze(S)),
				  (z = Ze(z)),
				  (C = Ze(C)),
				  (P = Ze(P)))
				: ((S = d), (P = f), (z = C = 0)),
			((y && !~(l + '').indexOf('px')) || (_ && !~(s + '').indexOf('px'))) &&
				((y = fi(p, 'x', l, 'px')), (_ = fi(p, 'y', s, 'px'))),
			(v || g || w || m) &&
				((y = Ze(y + v - (v * S + g * C) + w)),
				(_ = Ze(_ + g - (v * z + g * P) + m))),
			(i || o) &&
				((R = p.getBBox()),
				(y = Ze(y + (i / 100) * R.width)),
				(_ = Ze(_ + (o / 100) * R.height))),
			(R =
				'matrix(' + S + ',' + z + ',' + C + ',' + P + ',' + y + ',' + _ + ')'),
			p.setAttribute('transform', R),
			h && (p.style[Be] = R)
	},
	Jy = function (e, n, r, i, o) {
		var l = 360,
			s = vt(o),
			a = parseFloat(o) * (s && ~o.indexOf('rad') ? Ci : 1),
			u = a - i,
			c = i + u + 'deg',
			d,
			f
		return (
			s &&
				((d = o.split('_')[1]),
				d === 'short' && ((u %= l), u !== u % (l / 2) && (u += u < 0 ? l : -l)),
				d === 'cw' && u < 0
					? (u = ((u + l * Rp) % l) - ~~(u / l) * l)
					: d === 'ccw' && u > 0 && (u = ((u - l * Rp) % l) - ~~(u / l) * l)),
			(e._pt = f = new tn(e._pt, n, r, i, u, Iy)),
			(f.e = c),
			(f.u = 'deg'),
			e._props.push(r),
			f
		)
	},
	Ap = function (e, n) {
		for (var r in n) e[r] = n[r]
		return e
	},
	e6 = function (e, n, r) {
		var i = Ap({}, r._gsap),
			o = 'perspective,force3D,transformOrigin,svgOrigin',
			l = r.style,
			s,
			a,
			u,
			c,
			d,
			f,
			p,
			v
		i.svg
			? ((u = r.getAttribute('transform')),
			  r.setAttribute('transform', ''),
			  (l[Be] = n),
			  (s = ws(r, 1)),
			  ys(r, Be),
			  r.setAttribute('transform', u))
			: ((u = getComputedStyle(r)[Be]),
			  (l[Be] = n),
			  (s = ws(r, 1)),
			  (l[Be] = u))
		for (a in Rr)
			(u = i[a]),
				(c = s[a]),
				u !== c &&
					o.indexOf(a) < 0 &&
					((p = Ot(u)),
					(v = Ot(c)),
					(d = p !== v ? fi(r, a, u, v) : parseFloat(u)),
					(f = parseFloat(c)),
					(e._pt = new tn(e._pt, s, a, d, f - d, o1)),
					(e._pt.u = v || 0),
					e._props.push(a))
		Ap(s, i)
	}
en('padding,margin,Width,Radius', function (t, e) {
	var n = 'Top',
		r = 'Right',
		i = 'Bottom',
		o = 'Left',
		l = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (s) {
			return e < 2 ? t + s : 'border' + s + t
		})
	hu[e > 1 ? 'border' + t : t] = function (s, a, u, c, d) {
		var f, p
		if (arguments.length < 4)
			return (
				(f = l.map(function (v) {
					return mr(s, v, u)
				})),
				(p = f.join(' ')),
				p.split(f[0]).length === 5 ? f[0] : p
			)
		;(f = (c + '').split(' ')),
			(p = {}),
			l.forEach(function (v, g) {
				return (p[v] = f[g] = f[g] || f[((g - 1) / 2) | 0])
			}),
			s.init(a, p, d)
	}
})
var Dm = {
	name: 'css',
	register: s1,
	targetTest: function (e) {
		return e.style && e.nodeType
	},
	init: function (e, n, r, i, o) {
		var l = this._props,
			s = e.style,
			a = r.vars.startAt,
			u,
			c,
			d,
			f,
			p,
			v,
			g,
			w,
			m,
			h,
			y,
			_,
			S,
			z,
			C,
			P
		I0 || s1(),
			(this.styles = this.styles || Pm(e)),
			(P = this.styles.props),
			(this.tween = r)
		for (g in n)
			if (g !== 'autoRound' && ((c = n[g]), !(an[g] && mm(g, n, r, i, e, o)))) {
				if (
					((p = typeof c),
					(v = hu[g]),
					p === 'function' && ((c = c.call(r, i, e, o)), (p = typeof c)),
					p === 'string' && ~c.indexOf('random(') && (c = ms(c)),
					v)
				)
					v(this, e, g, c, r) && (C = 1)
				else if (g.substr(0, 2) === '--')
					(u = (getComputedStyle(e).getPropertyValue(g) + '').trim()),
						(c += ''),
						(ii.lastIndex = 0),
						ii.test(u) || ((w = Ot(u)), (m = Ot(c))),
						m ? w !== m && (u = fi(e, g, u, m) + m) : w && (c += w),
						this.add(s, 'setProperty', u, c, i, o, 0, 0, g),
						l.push(g),
						P.push(g, 0, s[g])
				else if (p !== 'undefined') {
					if (
						(a && g in a
							? ((u = typeof a[g] == 'function' ? a[g].call(r, i, e, o) : a[g]),
							  vt(u) && ~u.indexOf('random(') && (u = ms(u)),
							  Ot(u + '') || (u += pn.units[g] || Ot(mr(e, g)) || ''),
							  (u + '').charAt(1) === '=' && (u = mr(e, g)))
							: (u = mr(e, g)),
						(f = parseFloat(u)),
						(h = p === 'string' && c.charAt(1) === '=' && c.substr(0, 2)),
						h && (c = c.substr(2)),
						(d = parseFloat(c)),
						g in wr &&
							(g === 'autoAlpha' &&
								(f === 1 && mr(e, 'visibility') === 'hidden' && d && (f = 0),
								P.push('visibility', 0, s.visibility),
								Vr(
									this,
									s,
									'visibility',
									f ? 'inherit' : 'hidden',
									d ? 'inherit' : 'hidden',
									!d
								)),
							g !== 'scale' &&
								g !== 'transform' &&
								((g = wr[g]), ~g.indexOf(',') && (g = g.split(',')[0]))),
						(y = g in Rr),
						y)
					) {
						if (
							(this.styles.save(g),
							_ ||
								((S = e._gsap),
								(S.renderTransform && !n.parseTransform) ||
									ws(e, n.parseTransform),
								(z = n.smoothOrigin !== !1 && S.smooth),
								(_ = this._pt =
									new tn(this._pt, s, Be, 0, 1, S.renderTransform, S, 0, -1)),
								(_.dep = 1)),
							g === 'scale')
						)
							(this._pt = new tn(
								this._pt,
								S,
								'scaleY',
								f,
								(h ? Lo(f, h + d) : d) - f || 0,
								o1
							)),
								(this._pt.u = 0),
								l.push('scaleY', g),
								(g += 'X')
						else if (g === 'transformOrigin') {
							P.push(qn, 0, s[qn]),
								(c = Gy(c)),
								S.svg
									? a1(e, c, 0, z, 0, this)
									: ((m = parseFloat(c.split(' ')[2]) || 0),
									  m !== S.zOrigin && Vr(this, S, 'zOrigin', S.zOrigin, m),
									  Vr(this, s, g, gu(u), gu(c)))
							continue
						} else if (g === 'svgOrigin') {
							a1(e, c, 1, z, 0, this)
							continue
						} else if (g in Mm) {
							Jy(this, S, g, f, h ? Lo(f, h + c) : c)
							continue
						} else if (g === 'smoothOrigin') {
							Vr(this, S, 'smooth', S.smooth, c)
							continue
						} else if (g === 'force3D') {
							S[g] = c
							continue
						} else if (g === 'transform') {
							e6(this, c, e)
							continue
						}
					} else g in s || (g = Zo(g) || g)
					if (y || ((d || d === 0) && (f || f === 0) && !Ay.test(c) && g in s))
						(w = (u + '').substr((f + '').length)),
							d || (d = 0),
							(m = Ot(c) || (g in pn.units ? pn.units[g] : w)),
							w !== m && (f = fi(e, g, u, m)),
							(this._pt = new tn(
								this._pt,
								y ? S : s,
								g,
								f,
								(h ? Lo(f, h + d) : d) - f,
								!y && (m === 'px' || g === 'zIndex') && n.autoRound !== !1
									? Fy
									: o1
							)),
							(this._pt.u = m || 0),
							w !== m && m !== '%' && ((this._pt.b = u), (this._pt.r = jy))
					else if (g in s) Xy.call(this, e, g, u, h ? h + c : c)
					else if (g in e) this.add(e, g, u || e[g], h ? h + c : c, i, o)
					else {
						P0(g, c)
						continue
					}
					y || (g in s ? P.push(g, 0, s[g]) : P.push(g, 1, u || e[g])),
						l.push(g)
				}
			}
		C && Sm(this)
	},
	render: function (e, n) {
		if (n.tween._time || !j0())
			for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next)
		else n.styles.revert()
	},
	get: mr,
	aliases: wr,
	getSetter: function (e, n, r) {
		var i = wr[n]
		return (
			i && i.indexOf(',') < 0 && (n = i),
			n in Rr && n !== qn && (e._gsap.x || mr(e, 'x'))
				? r && Tp === r
					? n === 'scale'
						? Uy
						: By
					: (Tp = r || {}) && (n === 'scale' ? Vy : Hy)
				: e.style && !E0(e.style[n])
				? $y
				: ~n.indexOf('-')
				? by
				: D0(e, n)
		)
	},
	core: { _removeProperty: ys, _getMatrix: $0 },
}
mn.utils.checkPrefix = Zo
mn.core.getStyleSaver = Pm
;(function (t, e, n, r) {
	var i = en(t + ',' + e + ',' + n, function (o) {
		Rr[o] = 1
	})
	en(e, function (o) {
		;(pn.units[o] = 'deg'), (Mm[o] = 1)
	}),
		(wr[i[13]] = t + ',' + e),
		en(r, function (o) {
			var l = o.split(':')
			wr[l[1]] = i[l[0]]
		})
})(
	'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
	'rotation,rotationX,rotationY,skewX,skewY',
	'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
	'0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
)
en(
	'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
	function (t) {
		pn.units[t] = 'px'
	}
)
mn.registerPlugin(Dm)
var Os = mn.registerPlugin(Dm) || mn
Os.core.Tween
function Ip(t, e) {
	for (var n = 0; n < e.length; n++) {
		var r = e[n]
		;(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			'value' in r && (r.writable = !0),
			Object.defineProperty(t, r.key, r)
	}
}
function t6(t, e, n) {
	return e && Ip(t.prototype, e), n && Ip(t, n), t
}
/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Mt,
	u1,
	cn,
	Hr,
	Wr,
	Io,
	Am,
	Ei,
	Vl,
	Im,
	xr,
	Fn,
	jm = function () {
		return (
			Mt ||
			(typeof window < 'u' && (Mt = window.gsap) && Mt.registerPlugin && Mt)
		)
	},
	Fm = 1,
	Eo = [],
	de = [],
	ur = [],
	Hl = Date.now,
	c1 = function (e, n) {
		return n
	},
	n6 = function () {
		var e = Vl.core,
			n = e.bridge || {},
			r = e._scrollers,
			i = e._proxies
		r.push.apply(r, de),
			i.push.apply(i, ur),
			(de = r),
			(ur = i),
			(c1 = function (l, s) {
				return n[l](s)
			})
	},
	oi = function (e, n) {
		return ~ur.indexOf(e) && ur[ur.indexOf(e) + 1][n]
	},
	Wl = function (e) {
		return !!~Im.indexOf(e)
	},
	Ht = function (e, n, r, i, o) {
		return e.addEventListener(n, r, { passive: !i, capture: !!o })
	},
	At = function (e, n, r, i) {
		return e.removeEventListener(n, r, !!i)
	},
	ea = 'scrollLeft',
	ta = 'scrollTop',
	f1 = function () {
		return (xr && xr.isPressed) || de.cache++
	},
	mu = function (e, n) {
		var r = function i(o) {
			if (o || o === 0) {
				Fm && (cn.history.scrollRestoration = 'manual')
				var l = xr && xr.isPressed
				;(o = i.v = Math.round(o) || (xr && xr.iOS ? 1 : 0)),
					e(o),
					(i.cacheID = de.cache),
					l && c1('ss', o)
			} else
				(n || de.cache !== i.cacheID || c1('ref')) &&
					((i.cacheID = de.cache), (i.v = e()))
			return i.v + i.offset
		}
		return (r.offset = 0), e && r
	},
	$t = {
		s: ea,
		p: 'left',
		p2: 'Left',
		os: 'right',
		os2: 'Right',
		d: 'width',
		d2: 'Width',
		a: 'x',
		sc: mu(function (t) {
			return arguments.length
				? cn.scrollTo(t, ct.sc())
				: cn.pageXOffset || Hr[ea] || Wr[ea] || Io[ea] || 0
		}),
	},
	ct = {
		s: ta,
		p: 'top',
		p2: 'Top',
		os: 'bottom',
		os2: 'Bottom',
		d: 'height',
		d2: 'Height',
		a: 'y',
		op: $t,
		sc: mu(function (t) {
			return arguments.length
				? cn.scrollTo($t.sc(), t)
				: cn.pageYOffset || Hr[ta] || Wr[ta] || Io[ta] || 0
		}),
	},
	Wt = function (e) {
		return (
			Mt.utils.toArray(e)[0] ||
			(typeof e == 'string' && Mt.config().nullTargetWarn !== !1
				? console.warn('Element not found:', e)
				: null)
		)
	},
	di = function (e, n) {
		var r = n.s,
			i = n.sc
		Wl(e) && (e = Hr.scrollingElement || Wr)
		var o = de.indexOf(e),
			l = i === ct.sc ? 1 : 2
		!~o && (o = de.push(e) - 1), de[o + l] || e.addEventListener('scroll', f1)
		var s = de[o + l],
			a =
				s ||
				(de[o + l] =
					mu(oi(e, r), !0) ||
					(Wl(e)
						? i
						: mu(function (u) {
								return arguments.length ? (e[r] = u) : e[r]
						  })))
		return (
			(a.target = e),
			s || (a.smooth = Mt.getProperty(e, 'scrollBehavior') === 'smooth'),
			a
		)
	},
	d1 = function (e, n, r) {
		var i = e,
			o = e,
			l = Hl(),
			s = l,
			a = n || 50,
			u = Math.max(500, a * 3),
			c = function (v, g) {
				var w = Hl()
				g || w - l > a
					? ((o = i), (i = v), (s = l), (l = w))
					: r
					? (i += v)
					: (i = o + ((v - o) / (w - s)) * (l - s))
			},
			d = function () {
				;(o = i = r ? 0 : i), (s = l = 0)
			},
			f = function (v) {
				var g = s,
					w = o,
					m = Hl()
				return (
					(v || v === 0) && v !== i && c(v),
					l === s || m - s > u
						? 0
						: ((i + (r ? w : -w)) / ((r ? m : l) - g)) * 1e3
				)
			}
		return { update: c, reset: d, getVelocity: f }
	},
	_l = function (e, n) {
		return (
			n && !e._gsapAllow && e.preventDefault(),
			e.changedTouches ? e.changedTouches[0] : e
		)
	},
	jp = function (e) {
		var n = Math.max.apply(Math, e),
			r = Math.min.apply(Math, e)
		return Math.abs(n) >= Math.abs(r) ? n : r
	},
	$m = function () {
		;(Vl = Mt.core.globals().ScrollTrigger), Vl && Vl.core && n6()
	},
	bm = function (e) {
		return (
			(Mt = e || jm()),
			Mt &&
				typeof document < 'u' &&
				document.body &&
				((cn = window),
				(Hr = document),
				(Wr = Hr.documentElement),
				(Io = Hr.body),
				(Im = [cn, Hr, Wr, Io]),
				Mt.utils.clamp,
				(Ei = 'onpointerenter' in Io ? 'pointer' : 'mouse'),
				(Am = ot.isTouch =
					cn.matchMedia &&
					cn.matchMedia('(hover: none), (pointer: coarse)').matches
						? 1
						: 'ontouchstart' in cn ||
						  navigator.maxTouchPoints > 0 ||
						  navigator.msMaxTouchPoints > 0
						? 2
						: 0),
				(Fn = ot.eventTypes =
					(
						'ontouchstart' in Wr
							? 'touchstart,touchmove,touchcancel,touchend'
							: 'onpointerdown' in Wr
							? 'pointerdown,pointermove,pointercancel,pointerup'
							: 'mousedown,mousemove,mouseup,mouseup'
					).split(',')),
				setTimeout(function () {
					return (Fm = 0)
				}, 500),
				$m(),
				(u1 = 1)),
			u1
		)
	}
$t.op = ct
de.cache = 0
var ot = (function () {
	function t(n) {
		this.init(n)
	}
	var e = t.prototype
	return (
		(e.init = function (r) {
			u1 || bm(Mt) || console.warn('Please gsap.registerPlugin(Observer)'),
				Vl || $m()
			var i = r.tolerance,
				o = r.dragMinimum,
				l = r.type,
				s = r.target,
				a = r.lineHeight,
				u = r.debounce,
				c = r.preventDefault,
				d = r.onStop,
				f = r.onStopDelay,
				p = r.ignore,
				v = r.wheelSpeed,
				g = r.event,
				w = r.onDragStart,
				m = r.onDragEnd,
				h = r.onDrag,
				y = r.onPress,
				_ = r.onRelease,
				S = r.onRight,
				z = r.onLeft,
				C = r.onUp,
				P = r.onDown,
				R = r.onChangeX,
				M = r.onChangeY,
				F = r.onChange,
				b = r.onToggleX,
				ee = r.onToggleY,
				Q = r.onHover,
				Y = r.onHoverEnd,
				q = r.onMove,
				K = r.ignoreCheck,
				O = r.isNormalizer,
				B = r.onGestureStart,
				x = r.onGestureEnd,
				te = r.onWheel,
				D = r.onEnable,
				j = r.onDisable,
				I = r.onClick,
				H = r.scrollSpeed,
				E = r.capture,
				Z = r.allowClicks,
				A = r.lockAxis,
				Ce = r.onLockAxis
			;(this.target = s = Wt(s) || Wr),
				(this.vars = r),
				p && (p = Mt.utils.toArray(p)),
				(i = i || 1e-9),
				(o = o || 0),
				(v = v || 1),
				(H = H || 1),
				(l = l || 'wheel,touch,pointer'),
				(u = u !== !1),
				a || (a = parseFloat(cn.getComputedStyle(Io).lineHeight) || 22)
			var re,
				oe,
				U,
				he,
				Ee,
				ie,
				ye,
				T = this,
				Pe = 0,
				_e = 0,
				Oe = di(s, $t),
				nn = di(s, ct),
				wn = Oe(),
				Te = nn(),
				J =
					~l.indexOf('touch') &&
					!~l.indexOf('pointer') &&
					Fn[0] === 'pointerdown',
				we = Wl(s),
				Le = s.ownerDocument || Hr,
				_t = [0, 0, 0],
				De = [0, 0, 0],
				il = 0,
				Dt = function () {
					return (il = Hl())
				},
				Xn = function (N, W) {
					return (
						((T.event = N) && p && ~p.indexOf(N.target)) ||
						(W && J && N.pointerType !== 'touch') ||
						(K && K(N, W))
					)
				},
				ol = function () {
					T._vx.reset(), T._vy.reset(), oe.pause(), d && d(T)
				},
				Mr = function () {
					var N = (T.deltaX = jp(_t)),
						W = (T.deltaY = jp(De)),
						X = Math.abs(N) >= i,
						ne = Math.abs(W) >= i
					F && (X || ne) && F(T, N, W, _t, De),
						X &&
							(S && T.deltaX > 0 && S(T),
							z && T.deltaX < 0 && z(T),
							R && R(T),
							b && T.deltaX < 0 != Pe < 0 && b(T),
							(Pe = T.deltaX),
							(_t[0] = _t[1] = _t[2] = 0)),
						ne &&
							(P && T.deltaY > 0 && P(T),
							C && T.deltaY < 0 && C(T),
							M && M(T),
							ee && T.deltaY < 0 != _e < 0 && ee(T),
							(_e = T.deltaY),
							(De[0] = De[1] = De[2] = 0)),
						(he || U) && (q && q(T), U && (h(T), (U = !1)), (he = !1)),
						ie && !(ie = !1) && Ce && Ce(T),
						Ee && (te(T), (Ee = !1)),
						(re = 0)
				},
				vi = function (N, W, X) {
					;(_t[X] += N),
						(De[X] += W),
						T._vx.update(N),
						T._vy.update(W),
						u ? re || (re = requestAnimationFrame(Mr)) : Mr()
				},
				eo = function (N, W) {
					A &&
						!ye &&
						((T.axis = ye = Math.abs(N) > Math.abs(W) ? 'x' : 'y'), (ie = !0)),
						ye !== 'y' && ((_t[2] += N), T._vx.update(N, !0)),
						ye !== 'x' && ((De[2] += W), T._vy.update(W, !0)),
						u ? re || (re = requestAnimationFrame(Mr)) : Mr()
				},
				xe = function (N) {
					if (!Xn(N, 1)) {
						N = _l(N, c)
						var W = N.clientX,
							X = N.clientY,
							ne = W - T.x,
							lt = X - T.y,
							le = T.isDragging
						;(T.x = W),
							(T.y = X),
							(le ||
								Math.abs(T.startX - W) >= o ||
								Math.abs(T.startY - X) >= o) &&
								(h && (U = !0),
								le || (T.isDragging = !0),
								eo(ne, lt),
								le || (w && w(T)))
					}
				},
				Nr = (T.onPress = function (me) {
					Xn(me, 1) ||
						((T.axis = ye = null),
						oe.pause(),
						(T.isPressed = !0),
						(me = _l(me)),
						(Pe = _e = 0),
						(T.startX = T.x = me.clientX),
						(T.startY = T.y = me.clientY),
						T._vx.reset(),
						T._vy.reset(),
						Ht(O ? s : Le, Fn[1], xe, c, !0),
						(T.deltaX = T.deltaY = 0),
						y && y(T))
				}),
				rn = function (N) {
					if (!Xn(N, 1)) {
						At(O ? s : Le, Fn[1], xe, !0)
						var W =
								T.isDragging &&
								(Math.abs(T.x - T.startX) > 3 || Math.abs(T.y - T.startY) > 3),
							X = _l(N)
						W ||
							(T._vx.reset(),
							T._vy.reset(),
							c &&
								Z &&
								Mt.delayedCall(0.08, function () {
									if (Hl() - il > 300 && !N.defaultPrevented) {
										if (N.target.click) N.target.click()
										else if (Le.createEvent) {
											var ne = Le.createEvent('MouseEvents')
											ne.initMouseEvent(
												'click',
												!0,
												!0,
												cn,
												1,
												X.screenX,
												X.screenY,
												X.clientX,
												X.clientY,
												!1,
												!1,
												!1,
												!1,
												0,
												null
											),
												N.target.dispatchEvent(ne)
										}
									}
								})),
							(T.isDragging = T.isGesturing = T.isPressed = !1),
							d && !O && oe.restart(!0),
							m && W && m(T),
							_ && _(T, W)
					}
				},
				An = function (N) {
					return (
						N.touches &&
						N.touches.length > 1 &&
						(T.isGesturing = !0) &&
						B(N, T.isDragging)
					)
				},
				Gn = function () {
					return (T.isGesturing = !1) || x(T)
				},
				Qn = function (N) {
					if (!Xn(N)) {
						var W = Oe(),
							X = nn()
						vi((W - wn) * H, (X - Te) * H, 1),
							(wn = W),
							(Te = X),
							d && oe.restart(!0)
					}
				},
				yi = function (N) {
					if (!Xn(N)) {
						;(N = _l(N, c)), te && (Ee = !0)
						var W =
							(N.deltaMode === 1 ? a : N.deltaMode === 2 ? cn.innerHeight : 1) *
							v
						vi(N.deltaX * W, N.deltaY * W, 0), d && !O && oe.restart(!0)
					}
				},
				to = function (N) {
					if (!Xn(N)) {
						var W = N.clientX,
							X = N.clientY,
							ne = W - T.x,
							lt = X - T.y
						;(T.x = W), (T.y = X), (he = !0), (ne || lt) && eo(ne, lt)
					}
				},
				fr = function (N) {
					;(T.event = N), Q(T)
				},
				ll = function (N) {
					;(T.event = N), Y(T)
				},
				sl = function (N) {
					return Xn(N) || (_l(N, c) && I(T))
				}
			;(oe = T._dc = Mt.delayedCall(f || 0.25, ol).pause()),
				(T.deltaX = T.deltaY = 0),
				(T._vx = d1(0, 50, !0)),
				(T._vy = d1(0, 50, !0)),
				(T.scrollX = Oe),
				(T.scrollY = nn),
				(T.isDragging = T.isGesturing = T.isPressed = !1),
				(T.enable = function (me) {
					return (
						T.isEnabled ||
							(Ht(we ? Le : s, 'scroll', f1),
							l.indexOf('scroll') >= 0 && Ht(we ? Le : s, 'scroll', Qn, c, E),
							l.indexOf('wheel') >= 0 && Ht(s, 'wheel', yi, c, E),
							((l.indexOf('touch') >= 0 && Am) || l.indexOf('pointer') >= 0) &&
								(Ht(s, Fn[0], Nr, c, E),
								Ht(Le, Fn[2], rn),
								Ht(Le, Fn[3], rn),
								Z && Ht(s, 'click', Dt, !1, !0),
								I && Ht(s, 'click', sl),
								B && Ht(Le, 'gesturestart', An),
								x && Ht(Le, 'gestureend', Gn),
								Q && Ht(s, Ei + 'enter', fr),
								Y && Ht(s, Ei + 'leave', ll),
								q && Ht(s, Ei + 'move', to)),
							(T.isEnabled = !0),
							me && me.type && Nr(me),
							D && D(T)),
						T
					)
				}),
				(T.disable = function () {
					T.isEnabled &&
						(Eo.filter(function (me) {
							return me !== T && Wl(me.target)
						}).length || At(we ? Le : s, 'scroll', f1),
						T.isPressed &&
							(T._vx.reset(), T._vy.reset(), At(O ? s : Le, Fn[1], xe, !0)),
						At(we ? Le : s, 'scroll', Qn, E),
						At(s, 'wheel', yi, E),
						At(s, Fn[0], Nr, E),
						At(Le, Fn[2], rn),
						At(Le, Fn[3], rn),
						At(s, 'click', Dt, !0),
						At(s, 'click', sl),
						At(Le, 'gesturestart', An),
						At(Le, 'gestureend', Gn),
						At(s, Ei + 'enter', fr),
						At(s, Ei + 'leave', ll),
						At(s, Ei + 'move', to),
						(T.isEnabled = T.isPressed = T.isDragging = !1),
						j && j(T))
				}),
				(T.kill = function () {
					T.disable()
					var me = Eo.indexOf(T)
					me >= 0 && Eo.splice(me, 1), xr === T && (xr = 0)
				}),
				Eo.push(T),
				O && Wl(s) && (xr = T),
				T.enable(g)
		}),
		t6(t, [
			{
				key: 'velocityX',
				get: function () {
					return this._vx.getVelocity()
				},
			},
			{
				key: 'velocityY',
				get: function () {
					return this._vy.getVelocity()
				},
			},
		]),
		t
	)
})()
ot.version = '3.11.3'
ot.create = function (t) {
	return new ot(t)
}
ot.register = bm
ot.getAll = function () {
	return Eo.slice()
}
ot.getById = function (t) {
	return Eo.filter(function (e) {
		return e.vars.id === t
	})[0]
}
jm() && Mt.registerPlugin(ot)
/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var G,
	so,
	fe,
	Fe,
	rr,
	Xe,
	Bm,
	vu,
	yu,
	zo,
	Pa,
	na,
	Tt,
	Qu,
	p1,
	jt,
	Fp,
	$p,
	ao,
	Um,
	$c,
	Vm,
	on,
	Hm,
	Wm,
	qm,
	Dr,
	h1,
	b0,
	bc,
	ra = 1,
	Ft = Date.now,
	Bc = Ft(),
	Mn = 0,
	ia = 0,
	bp = function () {
		return (Qu = 1)
	},
	Bp = function () {
		return (Qu = 0)
	},
	er = function (e) {
		return e
	},
	Pl = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0
	},
	Ym = function () {
		return typeof window < 'u'
	},
	Xm = function () {
		return G || (Ym() && (G = window.gsap) && G.registerPlugin && G)
	},
	Yi = function (e) {
		return !!~Bm.indexOf(e)
	},
	Gm = function (e) {
		return (
			oi(e, 'getBoundingClientRect') ||
			(Yi(e)
				? function () {
						return (La.width = fe.innerWidth), (La.height = fe.innerHeight), La
				  }
				: function () {
						return vr(e)
				  })
		)
	},
	r6 = function (e, n, r) {
		var i = r.d,
			o = r.d2,
			l = r.a
		return (l = oi(e, 'getBoundingClientRect'))
			? function () {
					return l()[i]
			  }
			: function () {
					return (n ? fe['inner' + o] : e['client' + o]) || 0
			  }
	},
	i6 = function (e, n) {
		return !n || ~ur.indexOf(e)
			? Gm(e)
			: function () {
					return La
			  }
	},
	qr = function (e, n) {
		var r = n.s,
			i = n.d2,
			o = n.d,
			l = n.a
		return (r = 'scroll' + i) && (l = oi(e, r))
			? l() - Gm(e)()[o]
			: Yi(e)
			? (rr[r] || Xe[r]) -
			  (fe['inner' + i] || rr['client' + i] || Xe['client' + i])
			: e[r] - e['offset' + i]
	},
	oa = function (e, n) {
		for (var r = 0; r < ao.length; r += 3)
			(!n || ~n.indexOf(ao[r + 1])) && e(ao[r], ao[r + 1], ao[r + 2])
	},
	bn = function (e) {
		return typeof e == 'string'
	},
	bt = function (e) {
		return typeof e == 'function'
	},
	Tl = function (e) {
		return typeof e == 'number'
	},
	Ta = function (e) {
		return typeof e == 'object'
	},
	wl = function (e, n, r) {
		return e && e.progress(n ? 0 : 1) && r && e.pause()
	},
	Uc = function (e, n) {
		if (e.enabled) {
			var r = n(e)
			r && r.totalTime && (e.callbackAnimation = r)
		}
	},
	oo = Math.abs,
	Qm = 'left',
	Km = 'top',
	B0 = 'right',
	U0 = 'bottom',
	ji = 'width',
	Fi = 'height',
	ql = 'Right',
	Yl = 'Left',
	Xl = 'Top',
	Gl = 'Bottom',
	Ke = 'padding',
	En = 'margin',
	Jo = 'Width',
	V0 = 'Height',
	wt = 'px',
	ir = function (e) {
		return fe.getComputedStyle(e)
	},
	o6 = function (e) {
		var n = ir(e).position
		e.style.position = n === 'absolute' || n === 'fixed' ? n : 'relative'
	},
	Up = function (e, n) {
		for (var r in n) r in e || (e[r] = n[r])
		return e
	},
	vr = function (e, n) {
		var r =
				n &&
				ir(e)[p1] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
				G.to(e, {
					x: 0,
					y: 0,
					xPercent: 0,
					yPercent: 0,
					rotation: 0,
					rotationX: 0,
					rotationY: 0,
					scale: 1,
					skewX: 0,
					skewY: 0,
				}).progress(1),
			i = e.getBoundingClientRect()
		return r && r.progress(0).kill(), i
	},
	g1 = function (e, n) {
		var r = n.d2
		return e['offset' + r] || e['client' + r] || 0
	},
	Zm = function (e) {
		var n = [],
			r = e.labels,
			i = e.duration(),
			o
		for (o in r) n.push(r[o] / i)
		return n
	},
	l6 = function (e) {
		return function (n) {
			return G.utils.snap(Zm(e), n)
		}
	},
	H0 = function (e) {
		var n = G.utils.snap(e),
			r =
				Array.isArray(e) &&
				e.slice(0).sort(function (i, o) {
					return i - o
				})
		return r
			? function (i, o, l) {
					l === void 0 && (l = 0.001)
					var s
					if (!o) return n(i)
					if (o > 0) {
						for (i -= l, s = 0; s < r.length; s++) if (r[s] >= i) return r[s]
						return r[s - 1]
					} else for (s = r.length, i += l; s--; ) if (r[s] <= i) return r[s]
					return r[0]
			  }
			: function (i, o, l) {
					l === void 0 && (l = 0.001)
					var s = n(i)
					return !o || Math.abs(s - i) < l || s - i < 0 == o < 0
						? s
						: n(o < 0 ? i - e : i + e)
			  }
	},
	s6 = function (e) {
		return function (n, r) {
			return H0(Zm(e))(n, r.direction)
		}
	},
	la = function (e, n, r, i) {
		return r.split(',').forEach(function (o) {
			return e(n, o, i)
		})
	},
	St = function (e, n, r, i, o) {
		return e.addEventListener(n, r, { passive: !i, capture: !!o })
	},
	ht = function (e, n, r, i) {
		return e.removeEventListener(n, r, !!i)
	},
	sa = function (e, n, r) {
		return r && r.wheelHandler && e(n, 'wheel', r)
	},
	Vp = {
		startColor: 'green',
		endColor: 'red',
		indent: 0,
		fontSize: '16px',
		fontWeight: 'normal',
	},
	aa = { toggleActions: 'play', anticipatePin: 0 },
	_u = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	Ra = function (e, n) {
		if (bn(e)) {
			var r = e.indexOf('='),
				i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0
			~r && (e.indexOf('%') > r && (i *= n / 100), (e = e.substr(0, r - 1))),
				(e =
					i +
					(e in _u
						? _u[e] * n
						: ~e.indexOf('%')
						? (parseFloat(e) * n) / 100
						: parseFloat(e) || 0))
		}
		return e
	},
	ua = function (e, n, r, i, o, l, s, a) {
		var u = o.startColor,
			c = o.endColor,
			d = o.fontSize,
			f = o.indent,
			p = o.fontWeight,
			v = Fe.createElement('div'),
			g = Yi(r) || oi(r, 'pinType') === 'fixed',
			w = e.indexOf('scroller') !== -1,
			m = g ? Xe : r,
			h = e.indexOf('start') !== -1,
			y = h ? u : c,
			_ =
				'border-color:' +
				y +
				';font-size:' +
				d +
				';color:' +
				y +
				';font-weight:' +
				p +
				';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
		return (
			(_ += 'position:' + ((w || a) && g ? 'fixed;' : 'absolute;')),
			(w || a || !g) &&
				(_ += (i === ct ? B0 : U0) + ':' + (l + parseFloat(f)) + 'px;'),
			s &&
				(_ +=
					'box-sizing:border-box;text-align:left;width:' +
					s.offsetWidth +
					'px;'),
			(v._isStart = h),
			v.setAttribute('class', 'gsap-marker-' + e + (n ? ' marker-' + n : '')),
			(v.style.cssText = _),
			(v.innerText = n || n === 0 ? e + '-' + n : e),
			m.children[0] ? m.insertBefore(v, m.children[0]) : m.appendChild(v),
			(v._offset = v['offset' + i.op.d2]),
			Oa(v, 0, i, h),
			v
		)
	},
	Oa = function (e, n, r, i) {
		var o = { display: 'block' },
			l = r[i ? 'os2' : 'p2'],
			s = r[i ? 'p2' : 'os2']
		;(e._isFlipped = i),
			(o[r.a + 'Percent'] = i ? -100 : 0),
			(o[r.a] = i ? '1px' : 0),
			(o['border' + l + Jo] = 1),
			(o['border' + s + Jo] = 0),
			(o[r.p] = n + 'px'),
			G.set(e, o)
	},
	ae = [],
	m1 = {},
	xs,
	Hp = function () {
		return Ft() - Mn > 34 && (xs || (xs = requestAnimationFrame(Qi)))
	},
	lo = function () {
		;(!on || !on.isPressed || on.startX > Xe.clientWidth) &&
			(de.cache++,
			on ? xs || (xs = requestAnimationFrame(Qi)) : Qi(),
			Mn || Gi('scrollStart'),
			(Mn = Ft()))
	},
	Vc = function () {
		;(qm = fe.innerWidth), (Wm = fe.innerHeight)
	},
	Rl = function () {
		de.cache++,
			!Tt &&
				!Vm &&
				!Fe.fullscreenElement &&
				!Fe.webkitFullscreenElement &&
				(!Hm ||
					qm !== fe.innerWidth ||
					Math.abs(fe.innerHeight - Wm) > fe.innerHeight * 0.25) &&
				vu.restart(!0)
	},
	Xi = {},
	a6 = [],
	Jm = function t() {
		return ht(ue, 'scrollEnd', t) || Mi(!0)
	},
	Gi = function (e) {
		return (
			(Xi[e] &&
				Xi[e].map(function (n) {
					return n()
				})) ||
			a6
		)
	},
	ln = [],
	e3 = function (e) {
		for (var n = 0; n < ln.length; n += 5)
			(!e || (ln[n + 4] && ln[n + 4].query === e)) &&
				((ln[n].style.cssText = ln[n + 1]),
				ln[n].getBBox && ln[n].setAttribute('transform', ln[n + 2] || ''),
				(ln[n + 3].uncache = 1))
	},
	W0 = function (e, n) {
		var r
		for (jt = 0; jt < ae.length; jt++)
			(r = ae[jt]),
				r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0))
		n && e3(n), n || Gi('revert')
	},
	t3 = function (e, n) {
		de.cache++,
			(n || !Un) &&
				de.forEach(function (r) {
					return bt(r) && r.cacheID++ && (r.rec = 0)
				}),
			bn(e) && (fe.history.scrollRestoration = b0 = e)
	},
	Un,
	$i = 0,
	Wp,
	u6 = function () {
		if (Wp !== $i) {
			var e = (Wp = $i)
			requestAnimationFrame(function () {
				return e === $i && Mi(!0)
			})
		}
	},
	Mi = function (e, n) {
		if (Mn && !e) {
			St(ue, 'scrollEnd', Jm)
			return
		}
		;(Un = ue.isRefreshing = !0),
			de.forEach(function (i) {
				return bt(i) && i.cacheID++ && (i.rec = i())
			})
		var r = Gi('refreshInit')
		Um && ue.sort(),
			n || W0(),
			de.forEach(function (i) {
				bt(i) && (i.smooth && (i.target.style.scrollBehavior = 'auto'), i(0))
			}),
			ae.slice(0).forEach(function (i) {
				return i.refresh()
			}),
			ae.forEach(function (i, o) {
				if (i._subPinOffset && i.pin) {
					var l = i.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
						s = i.pin[l]
					i.revert(!0, 1), i.adjustPinSpacing(i.pin[l] - s), i.revert(!1, 1)
				}
			}),
			ae.forEach(function (i) {
				return (
					i.vars.end === 'max' &&
					i.setPositions(i.start, Math.max(i.start + 1, qr(i.scroller, i._dir)))
				)
			}),
			r.forEach(function (i) {
				return i && i.render && i.render(-1)
			}),
			de.forEach(function (i) {
				bt(i) &&
					(i.smooth &&
						requestAnimationFrame(function () {
							return (i.target.style.scrollBehavior = 'smooth')
						}),
					i.rec && i(i.rec))
			}),
			t3(b0, 1),
			vu.pause(),
			$i++,
			Qi(2),
			ae.forEach(function (i) {
				return bt(i.vars.onRefresh) && i.vars.onRefresh(i)
			}),
			(Un = ue.isRefreshing = !1),
			Gi('refresh')
	},
	qp = 0,
	Ma = 1,
	zi,
	Qi = function (e) {
		if (!Un || e === 2) {
			;(ue.isUpdating = !0), zi && zi.update(0)
			var n = ae.length,
				r = Ft(),
				i = r - Bc >= 50,
				o = n && ae[0].scroll()
			if (
				((Ma = qp > o ? -1 : 1),
				(qp = o),
				i &&
					(Mn && !Qu && r - Mn > 200 && ((Mn = 0), Gi('scrollEnd')),
					(Pa = Bc),
					(Bc = r)),
				Ma < 0)
			) {
				for (jt = n; jt-- > 0; ) ae[jt] && ae[jt].update(0, i)
				Ma = 1
			} else for (jt = 0; jt < n; jt++) ae[jt] && ae[jt].update(0, i)
			ue.isUpdating = !1
		}
		xs = 0
	},
	v1 = [
		Qm,
		Km,
		U0,
		B0,
		En + Gl,
		En + ql,
		En + Xl,
		En + Yl,
		'display',
		'flexShrink',
		'float',
		'zIndex',
		'gridColumnStart',
		'gridColumnEnd',
		'gridRowStart',
		'gridRowEnd',
		'gridArea',
		'justifySelf',
		'alignSelf',
		'placeSelf',
		'order',
	],
	Na = v1.concat([
		ji,
		Fi,
		'boxSizing',
		'max' + Jo,
		'max' + V0,
		'position',
		En,
		Ke,
		Ke + Xl,
		Ke + ql,
		Ke + Gl,
		Ke + Yl,
	]),
	c6 = function (e, n, r) {
		jo(r)
		var i = e._gsap
		if (i.spacerIsNative) jo(i.spacerState)
		else if (e._gsap.swappedIn) {
			var o = n.parentNode
			o && (o.insertBefore(e, n), o.removeChild(n))
		}
		e._gsap.swappedIn = !1
	},
	Hc = function (e, n, r, i) {
		if (!e._gsap.swappedIn) {
			for (var o = v1.length, l = n.style, s = e.style, a; o--; )
				(a = v1[o]), (l[a] = r[a])
			;(l.position = r.position === 'absolute' ? 'absolute' : 'relative'),
				r.display === 'inline' && (l.display = 'inline-block'),
				(s[U0] = s[B0] = 'auto'),
				(l.flexBasis = r.flexBasis || 'auto'),
				(l.overflow = 'visible'),
				(l.boxSizing = 'border-box'),
				(l[ji] = g1(e, $t) + wt),
				(l[Fi] = g1(e, ct) + wt),
				(l[Ke] = s[En] = s[Km] = s[Qm] = '0'),
				jo(i),
				(s[ji] = s['max' + Jo] = r[ji]),
				(s[Fi] = s['max' + V0] = r[Fi]),
				(s[Ke] = r[Ke]),
				e.parentNode !== n &&
					(e.parentNode.insertBefore(n, e), n.appendChild(e)),
				(e._gsap.swappedIn = !0)
		}
	},
	f6 = /([A-Z])/g,
	jo = function (e) {
		if (e) {
			var n = e.t.style,
				r = e.length,
				i = 0,
				o,
				l
			for ((e.t._gsap || G.core.getCache(e.t)).uncache = 1; i < r; i += 2)
				(l = e[i + 1]),
					(o = e[i]),
					l
						? (n[o] = l)
						: n[o] && n.removeProperty(o.replace(f6, '-$1').toLowerCase())
		}
	},
	ca = function (e) {
		for (var n = Na.length, r = e.style, i = [], o = 0; o < n; o++)
			i.push(Na[o], r[Na[o]])
		return (i.t = e), i
	},
	d6 = function (e, n, r) {
		for (var i = [], o = e.length, l = r ? 8 : 0, s; l < o; l += 2)
			(s = e[l]), i.push(s, s in n ? n[s] : e[l + 1])
		return (i.t = e.t), i
	},
	La = { left: 0, top: 0 },
	Yp = function (e, n, r, i, o, l, s, a, u, c, d, f, p) {
		bt(e) && (e = e(a)),
			bn(e) &&
				e.substr(0, 3) === 'max' &&
				(e = f + (e.charAt(4) === '=' ? Ra('0' + e.substr(3), r) : 0))
		var v = p ? p.time() : 0,
			g,
			w,
			m
		if ((p && p.seek(0), Tl(e))) s && Oa(s, r, i, !0)
		else {
			bt(n) && (n = n(a))
			var h = (e || '0').split(' '),
				y,
				_,
				S,
				z
			;(m = Wt(n) || Xe),
				(y = vr(m) || {}),
				(!y || (!y.left && !y.top)) &&
					ir(m).display === 'none' &&
					((z = m.style.display),
					(m.style.display = 'block'),
					(y = vr(m)),
					z ? (m.style.display = z) : m.style.removeProperty('display')),
				(_ = Ra(h[0], y[i.d])),
				(S = Ra(h[1] || '0', r)),
				(e = y[i.p] - u[i.p] - c + _ + o - S),
				s && Oa(s, S, i, r - S < 20 || (s._isStart && S > 20)),
				(r -= r - S)
		}
		if (l) {
			var C = e + r,
				P = l._isStart
			;(g = 'scroll' + i.d2),
				Oa(
					l,
					C,
					i,
					(P && C > 20) ||
						(!P && (d ? Math.max(Xe[g], rr[g]) : l.parentNode[g]) <= C + 1)
				),
				d &&
					((u = vr(s)),
					d && (l.style[i.op.p] = u[i.op.p] - i.op.m - l._offset + wt))
		}
		return (
			p &&
				m &&
				((g = vr(m)),
				p.seek(f),
				(w = vr(m)),
				(p._caScrollDist = g[i.p] - w[i.p]),
				(e = (e / p._caScrollDist) * f)),
			p && p.seek(v),
			p ? e : Math.round(e)
		)
	},
	p6 = /(webkit|moz|length|cssText|inset)/i,
	Xp = function (e, n, r, i) {
		if (e.parentNode !== n) {
			var o = e.style,
				l,
				s
			if (n === Xe) {
				;(e._stOrig = o.cssText), (s = ir(e))
				for (l in s)
					!+l &&
						!p6.test(l) &&
						s[l] &&
						typeof o[l] == 'string' &&
						l !== '0' &&
						(o[l] = s[l])
				;(o.top = r), (o.left = i)
			} else o.cssText = e._stOrig
			;(G.core.getCache(e).uncache = 1), n.appendChild(e)
		}
	},
	Gp = function (e, n) {
		var r = di(e, n),
			i = '_scroll' + n.p2,
			o,
			l,
			s = function a(u, c, d, f, p) {
				var v = a.tween,
					g = c.onComplete,
					w = {}
				return (
					(d = d || r()),
					(p = (f && p) || 0),
					(f = f || u - d),
					v && v.kill(),
					(o = Math.round(d)),
					(c[i] = u),
					(c.modifiers = w),
					(w[i] = function (m) {
						return (
							(m = Math.round(r())),
							m !== o && m !== l && Math.abs(m - o) > 3 && Math.abs(m - l) > 3
								? (v.kill(), (a.tween = 0))
								: (m = d + f * v.ratio + p * v.ratio * v.ratio),
							(l = o),
							(o = Math.round(m))
						)
					}),
					(c.onComplete = function () {
						;(a.tween = 0), g && g.call(v)
					}),
					(v = a.tween = G.to(e, c)),
					v
				)
			}
		return (
			(e[i] = r),
			(r.wheelHandler = function () {
				return s.tween && s.tween.kill() && (s.tween = 0)
			}),
			St(e, 'wheel', r.wheelHandler),
			s
		)
	},
	ue = (function () {
		function t(n, r) {
			so ||
				t.register(G) ||
				console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
				this.init(n, r)
		}
		var e = t.prototype
		return (
			(e.init = function (r, i) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!ia)
				) {
					this.update = this.refresh = this.kill = er
					return
				}
				r = Up(bn(r) || Tl(r) || r.nodeType ? { trigger: r } : r, aa)
				var o = r,
					l = o.onUpdate,
					s = o.toggleClass,
					a = o.id,
					u = o.onToggle,
					c = o.onRefresh,
					d = o.scrub,
					f = o.trigger,
					p = o.pin,
					v = o.pinSpacing,
					g = o.invalidateOnRefresh,
					w = o.anticipatePin,
					m = o.onScrubComplete,
					h = o.onSnapComplete,
					y = o.once,
					_ = o.snap,
					S = o.pinReparent,
					z = o.pinSpacer,
					C = o.containerAnimation,
					P = o.fastScrollEnd,
					R = o.preventOverlaps,
					M =
						r.horizontal || (r.containerAnimation && r.horizontal !== !1)
							? $t
							: ct,
					F = !d && d !== 0,
					b = Wt(r.scroller || fe),
					ee = G.core.getCache(b),
					Q = Yi(b),
					Y =
						('pinType' in r
							? r.pinType
							: oi(b, 'pinType') || (Q && 'fixed')) === 'fixed',
					q = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
					K = F && r.toggleActions.split(' '),
					O = 'markers' in r ? r.markers : aa.markers,
					B = Q ? 0 : parseFloat(ir(b)['border' + M.p2 + Jo]) || 0,
					x = this,
					te =
						r.onRefreshInit &&
						function () {
							return r.onRefreshInit(x)
						},
					D = r6(b, Q, M),
					j = i6(b, Q),
					I = 0,
					H = 0,
					E = di(b, M),
					Z,
					A,
					Ce,
					re,
					oe,
					U,
					he,
					Ee,
					ie,
					ye,
					T,
					Pe,
					_e,
					Oe,
					nn,
					wn,
					Te,
					J,
					we,
					Le,
					_t,
					De,
					il,
					Dt,
					Xn,
					ol,
					Mr,
					vi,
					eo,
					xe,
					Nr,
					rn,
					An,
					Gn,
					Qn,
					yi,
					to,
					fr
				if (
					(h1(x),
					(x._dir = M),
					(w *= 45),
					(x.scroller = b),
					(x.scroll = C ? C.time.bind(C) : E),
					(re = E()),
					(x.vars = r),
					(i = i || r.animation),
					'refreshPriority' in r &&
						((Um = 1), r.refreshPriority === -9999 && (zi = x)),
					(ee.tweenScroll = ee.tweenScroll || {
						top: Gp(b, ct),
						left: Gp(b, $t),
					}),
					(x.tweenTo = Z = ee.tweenScroll[M.p]),
					(x.scrubDuration = function (N) {
						;(Nr = Tl(N) && N),
							Nr
								? xe
									? xe.duration(N)
									: (xe = G.to(i, {
											ease: 'expo',
											totalProgress: '+=0.001',
											duration: Nr,
											paused: !0,
											onComplete: function () {
												return m && m(x)
											},
									  }))
								: (xe && xe.progress(1).kill(), (xe = 0))
					}),
					i &&
						((i.vars.lazy = !1),
						i._initted ||
							(i.vars.immediateRender !== !1 &&
								r.immediateRender !== !1 &&
								i.duration() &&
								i.render(0, !0, !0)),
						(x.animation = i.pause()),
						(i.scrollTrigger = x),
						x.scrubDuration(d),
						(vi = 0),
						a || (a = i.vars.id)),
					ae.push(x),
					_ &&
						((!Ta(_) || _.push) && (_ = { snapTo: _ }),
						'scrollBehavior' in Xe.style &&
							G.set(Q ? [Xe, rr] : b, { scrollBehavior: 'auto' }),
						de.forEach(function (N) {
							return (
								bt(N) &&
								N.target === (Q ? Fe.scrollingElement || rr : b) &&
								(N.smooth = !1)
							)
						}),
						(Ce = bt(_.snapTo)
							? _.snapTo
							: _.snapTo === 'labels'
							? l6(i)
							: _.snapTo === 'labelsDirectional'
							? s6(i)
							: _.directional !== !1
							? function (N, W) {
									return H0(_.snapTo)(N, Ft() - H < 500 ? 0 : W.direction)
							  }
							: G.utils.snap(_.snapTo)),
						(rn = _.duration || { min: 0.1, max: 2 }),
						(rn = Ta(rn) ? zo(rn.min, rn.max) : zo(rn, rn)),
						(An = G.delayedCall(_.delay || Nr / 2 || 0.1, function () {
							var N = E(),
								W = Ft() - H < 500,
								X = Z.tween
							if (
								(W || Math.abs(x.getVelocity()) < 10) &&
								!X &&
								!Qu &&
								I !== N
							) {
								var ne = (N - U) / _e,
									lt = i && !F ? i.totalProgress() : ne,
									le = W ? 0 : ((lt - eo) / (Ft() - Pa)) * 1e3 || 0,
									tt = G.utils.clamp(-ne, 1 - ne, (oo(le / 2) * le) / 0.185),
									He = ne + (_.inertia === !1 ? 0 : tt),
									Kn = zo(0, 1, Ce(He, x)),
									Me = Math.round(U + Kn * _e),
									pt = _,
									In = pt.onStart,
									We = pt.onInterrupt,
									qe = pt.onComplete
								if (N <= he && N >= U && Me !== N) {
									if (X && !X._initted && X.data <= oo(Me - N)) return
									_.inertia === !1 && (tt = Kn - ne),
										Z(
											Me,
											{
												duration: rn(
													oo(
														(Math.max(oo(He - lt), oo(Kn - lt)) * 0.185) /
															le /
															0.05 || 0
													)
												),
												ease: _.ease || 'power3',
												data: oo(Me - N),
												onInterrupt: function () {
													return An.restart(!0) && We && We(x)
												},
												onComplete: function () {
													x.update(),
														(I = E()),
														(vi = eo =
															i && !F ? i.totalProgress() : x.progress),
														h && h(x),
														qe && qe(x)
												},
											},
											N,
											tt * _e,
											Me - N - tt * _e
										),
										In && In(x, Z.tween)
								}
							} else x.isActive && I !== N && An.restart(!0)
						}).pause())),
					a && (m1[a] = x),
					(f = x.trigger = Wt(f || p)),
					(fr = f && f._gsap && f._gsap.stRevert),
					fr && (fr = fr(x)),
					(p = p === !0 ? f : Wt(p)),
					bn(s) && (s = { targets: f, className: s }),
					p &&
						(v === !1 ||
							v === En ||
							(v =
								!v &&
								p.parentNode &&
								p.parentNode.style &&
								ir(p.parentNode).display === 'flex'
									? !1
									: Ke),
						(x.pin = p),
						(A = G.core.getCache(p)),
						A.spacer
							? (Oe = A.pinState)
							: (z &&
									((z = Wt(z)),
									z && !z.nodeType && (z = z.current || z.nativeElement),
									(A.spacerIsNative = !!z),
									z && (A.spacerState = ca(z))),
							  (A.spacer = Te = z || Fe.createElement('div')),
							  Te.classList.add('pin-spacer'),
							  a && Te.classList.add('pin-spacer-' + a),
							  (A.pinState = Oe = ca(p))),
						r.force3D !== !1 && G.set(p, { force3D: !0 }),
						(x.spacer = Te = A.spacer),
						(Mr = ir(p)),
						(il = Mr[v + M.os2]),
						(we = G.getProperty(p)),
						(Le = G.quickSetter(p, M.a, wt)),
						Hc(p, Te, Mr),
						(wn = ca(p))),
					O)
				) {
					;(Pe = Ta(O) ? Up(O, Vp) : Vp),
						(ye = ua('scroller-start', a, b, M, Pe, 0)),
						(T = ua('scroller-end', a, b, M, Pe, 0, ye)),
						(J = ye['offset' + M.op.d2])
					var ll = Wt(oi(b, 'content') || b)
					;(Ee = this.markerStart = ua('start', a, ll, M, Pe, J, 0, C)),
						(ie = this.markerEnd = ua('end', a, ll, M, Pe, J, 0, C)),
						C && (to = G.quickSetter([Ee, ie], M.a, wt)),
						!Y &&
							!(ur.length && oi(b, 'fixedMarkers') === !0) &&
							(o6(Q ? Xe : b),
							G.set([ye, T], { force3D: !0 }),
							(Xn = G.quickSetter(ye, M.a, wt)),
							(ol = G.quickSetter(T, M.a, wt)))
				}
				if (C) {
					var sl = C.vars.onUpdate,
						me = C.vars.onUpdateParams
					C.eventCallback('onUpdate', function () {
						x.update(0, 0, 1), sl && sl.apply(me || [])
					})
				}
				;(x.previous = function () {
					return ae[ae.indexOf(x) - 1]
				}),
					(x.next = function () {
						return ae[ae.indexOf(x) + 1]
					}),
					(x.revert = function (N, W) {
						if (!W) return x.kill(!0)
						var X = N !== !1 || !x.enabled,
							ne = Tt
						X !== x.isReverted &&
							(X &&
								((Qn = Math.max(E(), x.scroll.rec || 0)),
								(Gn = x.progress),
								(yi = i && i.progress())),
							Ee &&
								[Ee, ie, ye, T].forEach(function (lt) {
									return (lt.style.display = X ? 'none' : 'block')
								}),
							X && ((Tt = 1), x.update(X)),
							p &&
								(X
									? c6(p, Te, Oe)
									: (!S || !x.isActive) && Hc(p, Te, ir(p), Dt)),
							X || x.update(X),
							(Tt = ne),
							(x.isReverted = X))
					}),
					(x.refresh = function (N, W) {
						if (!((Tt || !x.enabled) && !W)) {
							if (p && N && Mn) {
								St(t, 'scrollEnd', Jm)
								return
							}
							!Un && te && te(x),
								(Tt = 1),
								(H = Ft()),
								Z.tween && (Z.tween.kill(), (Z.tween = 0)),
								xe && xe.pause(),
								g && i && i.revert({ kill: !1 }).invalidate(),
								x.isReverted || x.revert(!0, !0),
								(x._subPinOffset = !1)
							for (
								var X = D(),
									ne = j(),
									lt = C ? C.duration() : qr(b, M),
									le = 0,
									tt = 0,
									He = r.end,
									Kn = r.endTrigger || f,
									Me =
										r.start || (r.start === 0 || !f ? 0 : p ? '0 0' : '0 100%'),
									pt = (x.pinnedContainer =
										r.pinnedContainer && Wt(r.pinnedContainer)),
									In = (f && Math.max(0, ae.indexOf(x))) || 0,
									We = In,
									qe,
									nt,
									no,
									_i,
									st,
									Ye,
									dr,
									tc,
									J0,
									al;
								We--;

							)
								(Ye = ae[We]),
									Ye.end || Ye.refresh(0, 1) || (Tt = 1),
									(dr = Ye.pin),
									dr &&
										(dr === f || dr === p) &&
										!Ye.isReverted &&
										(al || (al = []), al.unshift(Ye), Ye.revert(!0, !0)),
									Ye !== ae[We] && (In--, We--)
							for (
								bt(Me) && (Me = Me(x)),
									U =
										Yp(Me, f, X, M, E(), Ee, ye, x, ne, B, Y, lt, C) ||
										(p ? -0.001 : 0),
									bt(He) && (He = He(x)),
									bn(He) &&
										!He.indexOf('+=') &&
										(~He.indexOf(' ')
											? (He = (bn(Me) ? Me.split(' ')[0] : '') + He)
											: ((le = Ra(He.substr(2), X)),
											  (He = bn(Me) ? Me : U + le),
											  (Kn = f))),
									he =
										Math.max(
											U,
											Yp(
												He || (Kn ? '100% 0' : lt),
												Kn,
												X,
												M,
												E() + le,
												ie,
												T,
												x,
												ne,
												B,
												Y,
												lt,
												C
											)
										) || -0.001,
									_e = he - U || ((U -= 0.01) && 0.001),
									le = 0,
									We = In;
								We--;

							)
								(Ye = ae[We]),
									(dr = Ye.pin),
									dr &&
										Ye.start - Ye._pinPush <= U &&
										!C &&
										Ye.end > 0 &&
										((qe = Ye.end - Ye.start),
										((dr === f && Ye.start - Ye._pinPush < U) || dr === pt) &&
											!Tl(Me) &&
											(le += qe * (1 - Ye.progress)),
										dr === p && (tt += qe))
							if (
								((U += le),
								(he += le),
								(x._pinPush = tt),
								Ee &&
									le &&
									((qe = {}),
									(qe[M.a] = '+=' + le),
									pt && (qe[M.p] = '-=' + E()),
									G.set([Ee, ie], qe)),
								p)
							)
								(qe = ir(p)),
									(_i = M === ct),
									(no = E()),
									(_t = parseFloat(we(M.a)) + tt),
									!lt &&
										he > 1 &&
										((Q ? Xe : b).style['overflow-' + M.a] = 'scroll'),
									Hc(p, Te, qe),
									(wn = ca(p)),
									(nt = vr(p, !0)),
									(tc = Y && di(b, _i ? $t : ct)()),
									v &&
										((Dt = [v + M.os2, _e + tt + wt]),
										(Dt.t = Te),
										(We = v === Ke ? g1(p, M) + _e + tt : 0),
										We && Dt.push(M.d, We + wt),
										jo(Dt),
										pt &&
											ae.forEach(function (ul) {
												ul.pin === pt &&
													ul.vars.pinSpacing !== !1 &&
													(ul._subPinOffset = !0)
											}),
										Y && E(Qn)),
									Y &&
										((st = {
											top: nt.top + (_i ? no - U : tc) + wt,
											left: nt.left + (_i ? tc : no - U) + wt,
											boxSizing: 'border-box',
											position: 'fixed',
										}),
										(st[ji] = st['max' + Jo] = Math.ceil(nt.width) + wt),
										(st[Fi] = st['max' + V0] = Math.ceil(nt.height) + wt),
										(st[En] =
											st[En + Xl] =
											st[En + ql] =
											st[En + Gl] =
											st[En + Yl] =
												'0'),
										(st[Ke] = qe[Ke]),
										(st[Ke + Xl] = qe[Ke + Xl]),
										(st[Ke + ql] = qe[Ke + ql]),
										(st[Ke + Gl] = qe[Ke + Gl]),
										(st[Ke + Yl] = qe[Ke + Yl]),
										(nn = d6(Oe, st, S)),
										Un && E(0)),
									i
										? ((J0 = i._initted),
										  $c(1),
										  i.render(i.duration(), !0, !0),
										  (De = we(M.a) - _t + _e + tt),
										  _e !== De && Y && nn.splice(nn.length - 2, 2),
										  i.render(0, !0, !0),
										  J0 || i.invalidate(!0),
										  i.parent || i.totalTime(i.totalTime()),
										  $c(0))
										: (De = _e)
							else if (f && E() && !C)
								for (nt = f.parentNode; nt && nt !== Xe; )
									nt._pinOffset &&
										((U -= nt._pinOffset), (he -= nt._pinOffset)),
										(nt = nt.parentNode)
							al &&
								al.forEach(function (ul) {
									return ul.revert(!1, !0)
								}),
								(x.start = U),
								(x.end = he),
								(re = oe = Un ? Qn : E()),
								!C && !Un && (re < Qn && E(Qn), (x.scroll.rec = 0)),
								x.revert(!1, !0),
								An && ((I = -1), x.isActive && E(U + _e * Gn), An.restart(!0)),
								(Tt = 0),
								i &&
									F &&
									(i._initted || yi) &&
									i.progress() !== yi &&
									i.progress(yi, !0).render(i.time(), !0, !0),
								(Gn !== x.progress || C) &&
									(i && !F && i.totalProgress(Gn, !0),
									(x.progress = (re - U) / _e === Gn ? 0 : Gn)),
								p && v && (Te._pinOffset = Math.round(x.progress * De)),
								c && !Un && c(x)
						}
					}),
					(x.getVelocity = function () {
						return ((E() - oe) / (Ft() - Pa)) * 1e3 || 0
					}),
					(x.endAnimation = function () {
						wl(x.callbackAnimation),
							i &&
								(xe
									? xe.progress(1)
									: i.paused()
									? F || wl(i, x.direction < 0, 1)
									: wl(i, i.reversed()))
					}),
					(x.labelToScroll = function (N) {
						return (
							(i &&
								i.labels &&
								(U || x.refresh() || U) + (i.labels[N] / i.duration()) * _e) ||
							0
						)
					}),
					(x.getTrailing = function (N) {
						var W = ae.indexOf(x),
							X = x.direction > 0 ? ae.slice(0, W).reverse() : ae.slice(W + 1)
						return (
							bn(N)
								? X.filter(function (ne) {
										return ne.vars.preventOverlaps === N
								  })
								: X
						).filter(function (ne) {
							return x.direction > 0 ? ne.end <= U : ne.start >= he
						})
					}),
					(x.update = function (N, W, X) {
						if (!(C && !X && !N)) {
							var ne = Un ? Qn : x.scroll(),
								lt = N ? 0 : (ne - U) / _e,
								le = lt < 0 ? 0 : lt > 1 ? 1 : lt || 0,
								tt = x.progress,
								He,
								Kn,
								Me,
								pt,
								In,
								We,
								qe,
								nt
							if (
								(W &&
									((oe = re),
									(re = C ? E() : ne),
									_ && ((eo = vi), (vi = i && !F ? i.totalProgress() : le))),
								w &&
									!le &&
									p &&
									!Tt &&
									!ra &&
									Mn &&
									U < ne + ((ne - oe) / (Ft() - Pa)) * w &&
									(le = 1e-4),
								le !== tt && x.enabled)
							) {
								if (
									((He = x.isActive = !!le && le < 1),
									(Kn = !!tt && tt < 1),
									(We = He !== Kn),
									(In = We || !!le != !!tt),
									(x.direction = le > tt ? 1 : -1),
									(x.progress = le),
									In &&
										!Tt &&
										((Me = le && !tt ? 0 : le === 1 ? 1 : tt === 1 ? 2 : 3),
										F &&
											((pt =
												(!We && K[Me + 1] !== 'none' && K[Me + 1]) || K[Me]),
											(nt =
												i &&
												(pt === 'complete' || pt === 'reset' || pt in i)))),
									R &&
										(We || nt) &&
										(nt || d || !i) &&
										(bt(R)
											? R(x)
											: x.getTrailing(R).forEach(function (Ye) {
													return Ye.endAnimation()
											  })),
									F ||
										(xe && !Tt && !ra
											? ((C || (zi && zi !== x)) &&
													xe.render(xe._dp._time - xe._start),
											  xe.resetTo
													? xe.resetTo('totalProgress', le, i._tTime / i._tDur)
													: ((xe.vars.totalProgress = le),
													  xe.invalidate().restart()))
											: i && i.totalProgress(le, !!Tt)),
									p)
								) {
									if ((N && v && (Te.style[v + M.os2] = il), !Y))
										Le(Pl(_t + De * le))
									else if (In) {
										if (
											((qe =
												!N && le > tt && he + 1 > ne && ne + 1 >= qr(b, M)),
											S)
										)
											if (!N && (He || qe)) {
												var no = vr(p, !0),
													_i = ne - U
												Xp(
													p,
													Xe,
													no.top + (M === ct ? _i : 0) + wt,
													no.left + (M === ct ? 0 : _i) + wt
												)
											} else Xp(p, Te)
										jo(He || qe ? nn : wn),
											(De !== _e && le < 1 && He) ||
												Le(_t + (le === 1 && !qe ? De : 0))
									}
								}
								_ && !Z.tween && !Tt && !ra && An.restart(!0),
									s &&
										(We || (y && le && (le < 1 || !bc))) &&
										yu(s.targets).forEach(function (Ye) {
											return Ye.classList[He || y ? 'add' : 'remove'](
												s.className
											)
										}),
									l && !F && !N && l(x),
									In && !Tt
										? (F &&
												(nt &&
													(pt === 'complete'
														? i.pause().totalProgress(1)
														: pt === 'reset'
														? i.restart(!0).pause()
														: pt === 'restart'
														? i.restart(!0)
														: i[pt]()),
												l && l(x)),
										  (We || !bc) &&
												(u && We && Uc(x, u),
												q[Me] && Uc(x, q[Me]),
												y && (le === 1 ? x.kill(!1, 1) : (q[Me] = 0)),
												We || ((Me = le === 1 ? 1 : 3), q[Me] && Uc(x, q[Me]))),
										  P &&
												!He &&
												Math.abs(x.getVelocity()) > (Tl(P) ? P : 2500) &&
												(wl(x.callbackAnimation),
												xe
													? xe.progress(1)
													: wl(i, pt === 'reverse' ? 1 : !le, 1)))
										: F && l && !Tt && l(x)
							}
							if (ol) {
								var st = C ? (ne / C.duration()) * (C._caScrollDist || 0) : ne
								Xn(st + (ye._isFlipped ? 1 : 0)), ol(st)
							}
							to && to((-ne / C.duration()) * (C._caScrollDist || 0))
						}
					}),
					(x.enable = function (N, W) {
						x.enabled ||
							((x.enabled = !0),
							St(b, 'resize', Rl),
							St(Q ? Fe : b, 'scroll', lo),
							te && St(t, 'refreshInit', te),
							N !== !1 && ((x.progress = Gn = 0), (re = oe = I = E())),
							W !== !1 && x.refresh())
					}),
					(x.getTween = function (N) {
						return N && Z ? Z.tween : xe
					}),
					(x.setPositions = function (N, W) {
						p &&
							((_t += N - U),
							(De += W - N - _e),
							v === Ke && x.adjustPinSpacing(W - N - _e)),
							(x.start = U = N),
							(x.end = he = W),
							(_e = W - N),
							x.update()
					}),
					(x.adjustPinSpacing = function (N) {
						if (Dt) {
							var W = Dt.indexOf(M.d) + 1
							;(Dt[W] = parseFloat(Dt[W]) + N + wt),
								(Dt[1] = parseFloat(Dt[1]) + N + wt),
								jo(Dt)
						}
					}),
					(x.disable = function (N, W) {
						if (
							x.enabled &&
							(N !== !1 && x.revert(!0, !0),
							(x.enabled = x.isActive = !1),
							W || (xe && xe.pause()),
							(Qn = 0),
							A && (A.uncache = 1),
							te && ht(t, 'refreshInit', te),
							An && (An.pause(), Z.tween && Z.tween.kill() && (Z.tween = 0)),
							!Q)
						) {
							for (var X = ae.length; X--; )
								if (ae[X].scroller === b && ae[X] !== x) return
							ht(b, 'resize', Rl), ht(b, 'scroll', lo)
						}
					}),
					(x.kill = function (N, W) {
						x.disable(N, W), xe && !W && xe.kill(), a && delete m1[a]
						var X = ae.indexOf(x)
						X >= 0 && ae.splice(X, 1),
							X === jt && Ma > 0 && jt--,
							(X = 0),
							ae.forEach(function (ne) {
								return ne.scroller === x.scroller && (X = 1)
							}),
							X || Un || (x.scroll.rec = 0),
							i &&
								((i.scrollTrigger = null),
								N && i.revert({ kill: !1 }),
								W || i.kill()),
							Ee &&
								[Ee, ie, ye, T].forEach(function (ne) {
									return ne.parentNode && ne.parentNode.removeChild(ne)
								}),
							zi === x && (zi = 0),
							p &&
								(A && (A.uncache = 1),
								(X = 0),
								ae.forEach(function (ne) {
									return ne.pin === p && X++
								}),
								X || (A.spacer = 0)),
							r.onKill && r.onKill(x)
					}),
					x.enable(!1, !1),
					fr && fr(x),
					!i || !i.add || _e
						? x.refresh()
						: G.delayedCall(0.01, function () {
								return U || he || x.refresh()
						  }) &&
						  (_e = 0.01) &&
						  (U = he = 0),
					p && u6()
			}),
			(t.register = function (r) {
				return (
					so ||
						((G = r || Xm()), Ym() && window.document && t.enable(), (so = ia)),
					so
				)
			}),
			(t.defaults = function (r) {
				if (r) for (var i in r) aa[i] = r[i]
				return aa
			}),
			(t.disable = function (r, i) {
				;(ia = 0),
					ae.forEach(function (l) {
						return l[i ? 'kill' : 'disable'](r)
					}),
					ht(fe, 'wheel', lo),
					ht(Fe, 'scroll', lo),
					clearInterval(na),
					ht(Fe, 'touchcancel', er),
					ht(Xe, 'touchstart', er),
					la(ht, Fe, 'pointerdown,touchstart,mousedown', bp),
					la(ht, Fe, 'pointerup,touchend,mouseup', Bp),
					vu.kill(),
					oa(ht)
				for (var o = 0; o < de.length; o += 3)
					sa(ht, de[o], de[o + 1]), sa(ht, de[o], de[o + 2])
			}),
			(t.enable = function () {
				if (
					((fe = window),
					(Fe = document),
					(rr = Fe.documentElement),
					(Xe = Fe.body),
					G &&
						((yu = G.utils.toArray),
						(zo = G.utils.clamp),
						(h1 = G.core.context || er),
						($c = G.core.suppressOverwrites || er),
						(b0 = fe.history.scrollRestoration || 'auto'),
						G.core.globals('ScrollTrigger', t),
						Xe))
				) {
					;(ia = 1),
						ot.register(G),
						(t.isTouch = ot.isTouch),
						(Dr =
							ot.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						St(fe, 'wheel', lo),
						(Bm = [fe, Fe, rr, Xe]),
						G.matchMedia
							? ((t.matchMedia = function (a) {
									var u = G.matchMedia(),
										c
									for (c in a) u.add(c, a[c])
									return u
							  }),
							  G.addEventListener('matchMediaInit', function () {
									return W0()
							  }),
							  G.addEventListener('matchMediaRevert', function () {
									return e3()
							  }),
							  G.addEventListener('matchMedia', function () {
									Mi(0, 1), Gi('matchMedia')
							  }),
							  G.matchMedia('(orientation: portrait)', function () {
									return Vc(), Vc
							  }))
							: console.warn('Requires GSAP 3.11.0 or later'),
						Vc(),
						St(Fe, 'scroll', lo)
					var r = Xe.style,
						i = r.borderTopStyle,
						o = G.core.Animation.prototype,
						l,
						s
					for (
						o.revert ||
							Object.defineProperty(o, 'revert', {
								value: function () {
									return this.time(-0.01, !0)
								},
							}),
							r.borderTopStyle = 'solid',
							l = vr(Xe),
							ct.m = Math.round(l.top + ct.sc()) || 0,
							$t.m = Math.round(l.left + $t.sc()) || 0,
							i ? (r.borderTopStyle = i) : r.removeProperty('border-top-style'),
							na = setInterval(Hp, 250),
							G.delayedCall(0.5, function () {
								return (ra = 0)
							}),
							St(Fe, 'touchcancel', er),
							St(Xe, 'touchstart', er),
							la(St, Fe, 'pointerdown,touchstart,mousedown', bp),
							la(St, Fe, 'pointerup,touchend,mouseup', Bp),
							p1 = G.utils.checkPrefix('transform'),
							Na.push(p1),
							so = Ft(),
							vu = G.delayedCall(0.2, Mi).pause(),
							ao = [
								Fe,
								'visibilitychange',
								function () {
									var a = fe.innerWidth,
										u = fe.innerHeight
									Fe.hidden
										? ((Fp = a), ($p = u))
										: (Fp !== a || $p !== u) && Rl()
								},
								Fe,
								'DOMContentLoaded',
								Mi,
								fe,
								'load',
								Mi,
								fe,
								'resize',
								Rl,
							],
							oa(St),
							ae.forEach(function (a) {
								return a.enable(0, 1)
							}),
							s = 0;
						s < de.length;
						s += 3
					)
						sa(ht, de[s], de[s + 1]), sa(ht, de[s], de[s + 2])
				}
			}),
			(t.config = function (r) {
				'limitCallbacks' in r && (bc = !!r.limitCallbacks)
				var i = r.syncInterval
				;(i && clearInterval(na)) || ((na = i) && setInterval(Hp, i)),
					'ignoreMobileResize' in r &&
						(Hm = t.isTouch === 1 && r.ignoreMobileResize),
					'autoRefreshEvents' in r &&
						(oa(ht) || oa(St, r.autoRefreshEvents || 'none'),
						(Vm = (r.autoRefreshEvents + '').indexOf('resize') === -1))
			}),
			(t.scrollerProxy = function (r, i) {
				var o = Wt(r),
					l = de.indexOf(o),
					s = Yi(o)
				~l && de.splice(l, s ? 6 : 2),
					i && (s ? ur.unshift(fe, i, Xe, i, rr, i) : ur.unshift(o, i))
			}),
			(t.clearMatchMedia = function (r) {
				ae.forEach(function (i) {
					return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
				})
			}),
			(t.isInViewport = function (r, i, o) {
				var l = (bn(r) ? Wt(r) : r).getBoundingClientRect(),
					s = l[o ? ji : Fi] * i || 0
				return o
					? l.right - s > 0 && l.left + s < fe.innerWidth
					: l.bottom - s > 0 && l.top + s < fe.innerHeight
			}),
			(t.positionInViewport = function (r, i, o) {
				bn(r) && (r = Wt(r))
				var l = r.getBoundingClientRect(),
					s = l[o ? ji : Fi],
					a =
						i == null
							? s / 2
							: i in _u
							? _u[i] * s
							: ~i.indexOf('%')
							? (parseFloat(i) * s) / 100
							: parseFloat(i) || 0
				return o ? (l.left + a) / fe.innerWidth : (l.top + a) / fe.innerHeight
			}),
			(t.killAll = function (r) {
				if (
					(ae.forEach(function (o) {
						return o.vars.id !== 'ScrollSmoother' && o.kill()
					}),
					r !== !0)
				) {
					var i = Xi.killAll || []
					;(Xi = {}),
						i.forEach(function (o) {
							return o()
						})
				}
			}),
			t
		)
	})()
ue.version = '3.11.3'
ue.saveStyles = function (t) {
	return t
		? yu(t).forEach(function (e) {
				if (e && e.style) {
					var n = ln.indexOf(e)
					n >= 0 && ln.splice(n, 5),
						ln.push(
							e,
							e.style.cssText,
							e.getBBox && e.getAttribute('transform'),
							G.core.getCache(e),
							h1()
						)
				}
		  })
		: ln
}
ue.revert = function (t, e) {
	return W0(!t, e)
}
ue.create = function (t, e) {
	return new ue(t, e)
}
ue.refresh = function (t) {
	return t ? Rl() : (so || ue.register()) && Mi(!0)
}
ue.update = Qi
ue.clearScrollMemory = t3
ue.maxScroll = function (t, e) {
	return qr(t, e ? $t : ct)
}
ue.getScrollFunc = function (t, e) {
	return di(Wt(t), e ? $t : ct)
}
ue.getById = function (t) {
	return m1[t]
}
ue.getAll = function () {
	return ae.filter(function (t) {
		return t.vars.id !== 'ScrollSmoother'
	})
}
ue.isScrolling = function () {
	return !!Mn
}
ue.snapDirectional = H0
ue.addEventListener = function (t, e) {
	var n = Xi[t] || (Xi[t] = [])
	~n.indexOf(e) || n.push(e)
}
ue.removeEventListener = function (t, e) {
	var n = Xi[t],
		r = n && n.indexOf(e)
	r >= 0 && n.splice(r, 1)
}
ue.batch = function (t, e) {
	var n = [],
		r = {},
		i = e.interval || 0.016,
		o = e.batchMax || 1e9,
		l = function (u, c) {
			var d = [],
				f = [],
				p = G.delayedCall(i, function () {
					c(d, f), (d = []), (f = [])
				}).pause()
			return function (v) {
				d.length || p.restart(!0),
					d.push(v.trigger),
					f.push(v),
					o <= d.length && p.progress(1)
			}
		},
		s
	for (s in e)
		r[s] =
			s.substr(0, 2) === 'on' && bt(e[s]) && s !== 'onRefreshInit'
				? l(s, e[s])
				: e[s]
	return (
		bt(o) &&
			((o = o()),
			St(ue, 'refresh', function () {
				return (o = e.batchMax())
			})),
		yu(t).forEach(function (a) {
			var u = {}
			for (s in r) u[s] = r[s]
			;(u.trigger = a), n.push(ue.create(u))
		}),
		n
	)
}
var Qp = function (e, n, r, i) {
		return (
			n > i ? e(i) : n < 0 && e(0),
			r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
		)
	},
	Wc = function t(e, n) {
		n === !0
			? e.style.removeProperty('touch-action')
			: (e.style.touchAction =
					n === !0
						? 'auto'
						: n
						? 'pan-' + n + (ot.isTouch ? ' pinch-zoom' : '')
						: 'none'),
			e === rr && t(Xe, n)
	},
	Kp = { auto: 1, scroll: 1 },
	h6 = function (e) {
		var n = e.event,
			r = e.target,
			i = e.axis,
			o = (n.changedTouches ? n.changedTouches[0] : n).target,
			l = o._gsap || G.core.getCache(o),
			s = Ft(),
			a
		if (!l._isScrollT || s - l._isScrollT > 2e3) {
			for (; o && o.scrollHeight <= o.clientHeight; ) o = o.parentNode
			;(l._isScroll =
				o &&
				!Yi(o) &&
				o !== r &&
				(Kp[(a = ir(o)).overflowY] || Kp[a.overflowX])),
				(l._isScrollT = s)
		}
		;(l._isScroll || i === 'x') && (n.stopPropagation(), (n._gsapAllow = !0))
	},
	n3 = function (e, n, r, i) {
		return ot.create({
			target: e,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: n,
			onWheel: (i = i && h6),
			onPress: i,
			onDrag: i,
			onScroll: i,
			onEnable: function () {
				return r && St(Fe, ot.eventTypes[0], Jp, !1, !0)
			},
			onDisable: function () {
				return ht(Fe, ot.eventTypes[0], Jp, !0)
			},
		})
	},
	g6 = /(input|label|select|textarea)/i,
	Zp,
	Jp = function (e) {
		var n = g6.test(e.target.tagName)
		;(n || Zp) && ((e._gsapAllow = !0), (Zp = n))
	},
	m6 = function (e) {
		Ta(e) || (e = {}),
			(e.preventDefault = e.isNormalizer = e.allowClicks = !0),
			e.type || (e.type = 'wheel,touch'),
			(e.debounce = !!e.debounce),
			(e.id = e.id || 'normalizer')
		var n = e,
			r = n.normalizeScrollX,
			i = n.momentum,
			o = n.allowNestedScroll,
			l,
			s,
			a = Wt(e.target) || rr,
			u = G.core.globals().ScrollSmoother,
			c = u && u.get(),
			d =
				Dr &&
				((e.content && Wt(e.content)) ||
					(c && e.content !== !1 && !c.smooth() && c.content())),
			f = di(a, ct),
			p = di(a, $t),
			v = 1,
			g =
				(ot.isTouch && fe.visualViewport
					? fe.visualViewport.scale * fe.visualViewport.width
					: fe.outerWidth) / fe.innerWidth,
			w = 0,
			m = bt(i)
				? function () {
						return i(l)
				  }
				: function () {
						return i || 2.8
				  },
			h,
			y,
			_ = n3(a, e.type, !0, o),
			S = function () {
				return (y = !1)
			},
			z = er,
			C = er,
			P = function () {
				;(s = qr(a, ct)),
					(C = zo(Dr ? 1 : 0, s)),
					r && (z = zo(0, qr(a, $t))),
					(h = $i)
			},
			R = function () {
				;(d._gsap.y = Pl(parseFloat(d._gsap.y) + f.offset) + 'px'),
					(d.style.transform =
						'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
						parseFloat(d._gsap.y) +
						', 0, 1)'),
					(f.offset = f.cacheID = 0)
			},
			M = function () {
				if (y) {
					requestAnimationFrame(S)
					var K = Pl(l.deltaY / 2),
						O = C(f.v - K)
					if (d && O !== f.v + f.offset) {
						f.offset = O - f.v
						var B = Pl((parseFloat(d && d._gsap.y) || 0) - f.offset)
						;(d.style.transform =
							'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
							B +
							', 0, 1)'),
							(d._gsap.y = B + 'px'),
							(f.cacheID = de.cache),
							Qi()
					}
					return !0
				}
				f.offset && R(), (y = !0)
			},
			F,
			b,
			ee,
			Q,
			Y = function () {
				P(),
					F.isActive() &&
						F.vars.scrollY > s &&
						(f() > s ? F.progress(1) && f(s) : F.resetTo('scrollY', s))
			}
		return (
			d && G.set(d, { y: '+=0' }),
			(e.ignoreCheck = function (q) {
				return (
					(Dr && q.type === 'touchmove' && M()) ||
					(v > 1.05 && q.type !== 'touchstart') ||
					l.isGesturing ||
					(q.touches && q.touches.length > 1)
				)
			}),
			(e.onPress = function () {
				var q = v
				;(v = Pl(((fe.visualViewport && fe.visualViewport.scale) || 1) / g)),
					F.pause(),
					q !== v && Wc(a, v > 1.01 ? !0 : r ? !1 : 'x'),
					(b = p()),
					(ee = f()),
					P(),
					(h = $i)
			}),
			(e.onRelease = e.onGestureStart =
				function (q, K) {
					if ((f.offset && R(), !K)) Q.restart(!0)
					else {
						de.cache++
						var O = m(),
							B,
							x
						r &&
							((B = p()),
							(x = B + (O * 0.05 * -q.velocityX) / 0.227),
							(O *= Qp(p, B, x, qr(a, $t))),
							(F.vars.scrollX = z(x))),
							(B = f()),
							(x = B + (O * 0.05 * -q.velocityY) / 0.227),
							(O *= Qp(f, B, x, qr(a, ct))),
							(F.vars.scrollY = C(x)),
							F.invalidate().duration(O).play(0.01),
							((Dr && F.vars.scrollY >= s) || B >= s - 1) &&
								G.to({}, { onUpdate: Y, duration: O })
					}
				}),
			(e.onWheel = function () {
				F._ts && F.pause(), Ft() - w > 1e3 && ((h = 0), (w = Ft()))
			}),
			(e.onChange = function (q, K, O, B, x) {
				if (
					($i !== h && P(),
					K && r && p(z(B[2] === K ? b + (q.startX - q.x) : p() + K - B[1])),
					O)
				) {
					f.offset && R()
					var te = x[2] === O,
						D = te ? ee + q.startY - q.y : f() + O - x[1],
						j = C(D)
					te && D !== j && (ee += j - D), f(j)
				}
				;(O || K) && Qi()
			}),
			(e.onEnable = function () {
				Wc(a, r ? !1 : 'x'),
					ue.addEventListener('refresh', Y),
					St(fe, 'resize', Y),
					f.smooth &&
						((f.target.style.scrollBehavior = 'auto'),
						(f.smooth = p.smooth = !1)),
					_.enable()
			}),
			(e.onDisable = function () {
				Wc(a, !0),
					ht(fe, 'resize', Y),
					ue.removeEventListener('refresh', Y),
					_.kill()
			}),
			(e.lockAxis = e.lockAxis !== !1),
			(l = new ot(e)),
			(l.iOS = Dr),
			Dr && !f() && f(1),
			Dr && G.ticker.add(er),
			(Q = l._dc),
			(F = G.to(l, {
				ease: 'power4',
				paused: !0,
				scrollX: r ? '+=0.1' : '+=0',
				scrollY: '+=0.1',
				onComplete: Q.vars.onComplete,
			})),
			l
		)
	}
ue.sort = function (t) {
	return ae.sort(
		t ||
			function (e, n) {
				return (
					(e.vars.refreshPriority || 0) * -1e6 +
					e.start -
					(n.start + (n.vars.refreshPriority || 0) * -1e6)
				)
			}
	)
}
ue.observe = function (t) {
	return new ot(t)
}
ue.normalizeScroll = function (t) {
	if (typeof t > 'u') return on
	if (t === !0 && on) return on.enable()
	if (t === !1) return on && on.kill()
	var e = t instanceof ot ? t : m6(t)
	return on && on.target === e.target && on.kill(), Yi(e.target) && (on = e), e
}
ue.core = {
	_getVelocityProp: d1,
	_inputObserver: n3,
	_scrollers: de,
	_proxies: ur,
	bridge: {
		ss: function () {
			Mn || Gi('scrollStart'), (Mn = Ft())
		},
		ref: function () {
			return Tt
		},
	},
}
Xm() && G.registerPlugin(ue)
const v6 = '/imageSequence/ezgif-frame-001.jpg',
	y6 = '/imageSequence/ezgif-frame-002.jpg',
	_6 = '/imageSequence/ezgif-frame-003.jpg',
	w6 = '/imageSequence/ezgif-frame-004.jpg',
	x6 = '/imageSequence/ezgif-frame-005.jpg',
	S6 = '/imageSequence/ezgif-frame-006.jpg',
	k6 = '/imageSequence/ezgif-frame-007.jpg',
	C6 = '/imageSequence/ezgif-frame-008.jpg',
	E6 = '/imageSequence/ezgif-frame-009.jpg',
	z6 = '/imageSequence/ezgif-frame-010.jpg',
	P6 = '/imageSequence/ezgif-frame-011.jpg',
	T6 = '/imageSequence/ezgif-frame-012.jpg',
	R6 = '/imageSequence/ezgif-frame-013.jpg',
	O6 = '/imageSequence/ezgif-frame-014.jpg',
	M6 = '/imageSequence/ezgif-frame-015.jpg',
	N6 = '/imageSequence/ezgif-frame-016.jpg',
	L6 = '/imageSequence/ezgif-frame-017.jpg',
	D6 = '/imageSequence/ezgif-frame-018.jpg',
	A6 = '/imageSequence/ezgif-frame-019.jpg',
	I6 = '/imageSequence/ezgif-frame-020.jpg',
	j6 = '/imageSequence/ezgif-frame-021.jpg',
	F6 = '/imageSequence/ezgif-frame-022.jpg',
	$6 = '/imageSequence/ezgif-frame-023.jpg',
	b6 = '/imageSequence/ezgif-frame-024.jpg',
	B6 = '/imageSequence/ezgif-frame-025.jpg',
	U6 = '/imageSequence/ezgif-frame-026.jpg',
	V6 = '/imageSequence/ezgif-frame-027.jpg',
	H6 = '/imageSequence/ezgif-frame-028.jpg',
	W6 = '/imageSequence/ezgif-frame-029.jpg',
	q6 = '/imageSequence/ezgif-frame-030.jpg',
	Y6 = '/imageSequence/ezgif-frame-031.jpg',
	X6 = '/imageSequence/ezgif-frame-032.jpg',
	G6 = '/imageSequence/ezgif-frame-033.jpg',
	Q6 = '/imageSequence/ezgif-frame-034.jpg',
	K6 = '/imageSequence/ezgif-frame-035.jpg',
	Z6 = '/imageSequence/ezgif-frame-036.jpg',
	J6 = '/imageSequence/ezgif-frame-037.jpg',
	e8 = '/imageSequence/ezgif-frame-038.jpg',
	t8 = '/imageSequence/ezgif-frame-039.jpg',
	n8 = '/imageSequence/ezgif-frame-040.jpg',
	r8 = '/imageSequence/ezgif-frame-041.jpg',
	i8 = '/imageSequence/ezgif-frame-042.jpg',
	o8 = '/imageSequence/ezgif-frame-043.jpg',
	l8 = '/imageSequence/ezgif-frame-044.jpg',
	s8 = '/imageSequence/ezgif-frame-045.jpg',
	a8 = '/imageSequence/ezgif-frame-046.jpg',
	u8 = '/imageSequence/ezgif-frame-047.jpg',
	c8 = '/imageSequence/ezgif-frame-048.jpg',
	f8 = '/imageSequence/ezgif-frame-049.jpg',
	d8 = '/imageSequence/ezgif-frame-050.jpg',
	p8 = '/imageSequence/ezgif-frame-051.jpg',
	h8 = '/imageSequence/ezgif-frame-052.jpg',
	g8 = '/imageSequence/ezgif-frame-053.jpg',
	m8 = '/imageSequence/ezgif-frame-054.jpg',
	v8 = '/imageSequence/ezgif-frame-055.jpg',
	y8 = '/imageSequence/ezgif-frame-056.jpg',
	_8 = '/imageSequence/ezgif-frame-057.jpg',
	w8 = '/imageSequence/ezgif-frame-058.jpg',
	x8 = '/imageSequence/ezgif-frame-059.jpg',
	S8 = '/imageSequence/ezgif-frame-060.jpg',
	k8 = '/imageSequence/ezgif-frame-061.jpg',
	C8 = '/imageSequence/ezgif-frame-062.jpg',
	E8 = '/imageSequence/ezgif-frame-063.jpg',
	z8 = '/imageSequence/ezgif-frame-064.jpg',
	P8 = '/imageSequence/ezgif-frame-065.jpg',
	T8 = '/imageSequence/ezgif-frame-066.jpg',
	R8 = '/imageSequence/ezgif-frame-067.jpg',
	O8 = '/imageSequence/ezgif-frame-068.jpg',
	M8 = '/imageSequence/ezgif-frame-069.jpg',
	N8 = '/imageSequence/ezgif-frame-070.jpg',
	L8 = '/imageSequence/ezgif-frame-071.jpg',
	D8 = '/imageSequence/ezgif-frame-072.jpg',
	A8 = '/imageSequence/ezgif-frame-073.jpg',
	I8 = '/imageSequence/ezgif-frame-074.jpg',
	j8 = '/imageSequence/ezgif-frame-075.jpg',
	F8 = '/imageSequence/ezgif-frame-076.jpg',
	$8 = '/imageSequence/ezgif-frame-077.jpg',
	b8 = '/imageSequence/ezgif-frame-078.jpg',
	B8 = '/imageSequence/ezgif-frame-079.jpg',
	U8 = '/imageSequence/ezgif-frame-080.jpg',
	V8 = '/imageSequence/ezgif-frame-081.jpg',
	H8 = '/imageSequence/ezgif-frame-082.jpg',
	W8 = '/imageSequence/ezgif-frame-083.jpg',
	q8 = '/imageSequence/ezgif-frame-084.jpg',
	Y8 = '/imageSequence/ezgif-frame-085.jpg',
	X8 = '/imageSequence/ezgif-frame-086.jpg',
	G8 = '/imageSequence/ezgif-frame-087.jpg',
	Q8 = '/imageSequence/ezgif-frame-088.jpg',
	K8 = '/imageSequence/ezgif-frame-089.jpg',
	Z8 = '/imageSequence/ezgif-frame-090.jpg',
	J8 = '/imageSequence/ezgif-frame-091.jpg',
	e_ = '/imageSequence/ezgif-frame-092.jpg',
	t_ = '/imageSequence/ezgif-frame-093.jpg',
	n_ = '/imageSequence/ezgif-frame-094.jpg',
	r_ = '/imageSequence/ezgif-frame-095.jpg',
	i_ = '/imageSequence/ezgif-frame-096.jpg',
	o_ = '/imageSequence/ezgif-frame-097.jpg',
	l_ = '/imageSequence/ezgif-frame-098.jpg',
	s_ = '/imageSequence/ezgif-frame-099.jpg',
	a_ = '/imageSequence/ezgif-frame-100.jpg',
	u_ = '/imageSequence/ezgif-frame-101.jpg',
	c_ = '/imageSequence/ezgif-frame-102.jpg',
	f_ = '/imageSequence/ezgif-frame-103.jpg',
	d_ = '/imageSequence/ezgif-frame-104.jpg',
	p_ = '/imageSequence/ezgif-frame-105.jpg',
	h_ = '/imageSequence/ezgif-frame-106.jpg',
	g_ = '/imageSequence/ezgif-frame-107.jpg',
	m_ = '/imageSequence/ezgif-frame-108.jpg',
	v_ = '/imageSequence/ezgif-frame-109.jpg',
	y_ = '/imageSequence/ezgif-frame-110.jpg',
	__ = '/imageSequence/ezgif-frame-111.jpg',
	w_ = '/imageSequence/ezgif-frame-112.jpg',
	x_ = '/imageSequence/ezgif-frame-113.jpg',
	S_ = '/imageSequence/ezgif-frame-114.jpg',
	k_ = '/imageSequence/ezgif-frame-115.jpg',
	C_ = '/imageSequence/ezgif-frame-116.jpg',
	E_ = '/imageSequence/ezgif-frame-117.jpg',
	z_ = '/imageSequence/ezgif-frame-118.jpg',
	P_ = '/imageSequence/ezgif-frame-119.jpg',
	T_ = '/imageSequence/ezgif-frame-120.jpg',
	R_ = '/imageSequence/ezgif-frame-121.jpg',
	O_ = '/imageSequence/ezgif-frame-122.jpg',
	M_ = '/imageSequence/ezgif-frame-123.jpg',
	N_ = '/imageSequence/ezgif-frame-124.jpg',
	L_ = '/imageSequence/ezgif-frame-125.jpg',
	D_ = '/imageSequence/ezgif-frame-126.jpg',
	A_ = '/imageSequence/ezgif-frame-127.jpg',
	I_ = '/imageSequence/ezgif-frame-128.jpg',
	j_ = '/imageSequence/ezgif-frame-129.jpg',
	F_ = '/imageSequence/ezgif-frame-130.jpg',
	$_ = '/imageSequence/ezgif-frame-131.jpg',
	b_ = '/imageSequence/ezgif-frame-132.jpg',
	B_ = '/imageSequence/ezgif-frame-133.jpg',
	U_ = '/imageSequence/ezgif-frame-134.jpg',
	V_ = '/imageSequence/ezgif-frame-135.jpg',
	H_ = '/imageSequence/ezgif-frame-136.jpg',
	W_ = '/imageSequence/ezgif-frame-137.jpg',
	q_ = '/imageSequence/ezgif-frame-138.jpg',
	Y_ = '/imageSequence/ezgif-frame-139.jpg',
	r3 = '/imageSequence/ezgif-frame-140.jpg',
	eh = [
		v6,
		y6,
		_6,
		w6,
		x6,
		S6,
		k6,
		C6,
		E6,
		z6,
		P6,
		T6,
		R6,
		O6,
		M6,
		N6,
		L6,
		D6,
		A6,
		I6,
		j6,
		F6,
		$6,
		b6,
		B6,
		U6,
		V6,
		H6,
		W6,
		q6,
		Y6,
		X6,
		G6,
		Q6,
		K6,
		Z6,
		J6,
		e8,
		t8,
		n8,
		r8,
		i8,
		o8,
		l8,
		s8,
		a8,
		u8,
		c8,
		f8,
		d8,
		p8,
		h8,
		g8,
		m8,
		v8,
		y8,
		_8,
		w8,
		x8,
		S8,
		k8,
		C8,
		E8,
		z8,
		P8,
		T8,
		R8,
		O8,
		M8,
		N8,
		L8,
		D8,
		A8,
		I8,
		j8,
		F8,
		$8,
		b8,
		B8,
		U8,
		V8,
		H8,
		W8,
		q8,
		Y8,
		X8,
		G8,
		Q8,
		K8,
		Z8,
		J8,
		e_,
		t_,
		n_,
		r_,
		i_,
		o_,
		l_,
		s_,
		a_,
		u_,
		c_,
		f_,
		d_,
		p_,
		h_,
		g_,
		m_,
		v_,
		y_,
		__,
		w_,
		x_,
		S_,
		k_,
		C_,
		E_,
		z_,
		P_,
		T_,
		R_,
		O_,
		M_,
		N_,
		L_,
		D_,
		A_,
		I_,
		j_,
		F_,
		$_,
		b_,
		B_,
		U_,
		V_,
		H_,
		W_,
		q_,
		Y_,
		r3,
	]
var Ku = { exports: {} },
	Zu = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X_ = $.exports,
	G_ = Symbol.for('react.element'),
	Q_ = Symbol.for('react.fragment'),
	K_ = Object.prototype.hasOwnProperty,
	Z_ = X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	J_ = { key: !0, ref: !0, __self: !0, __source: !0 }
function i3(t, e, n) {
	var r,
		i = {},
		o = null,
		l = null
	n !== void 0 && (o = '' + n),
		e.key !== void 0 && (o = '' + e.key),
		e.ref !== void 0 && (l = e.ref)
	for (r in e) K_.call(e, r) && !J_.hasOwnProperty(r) && (i[r] = e[r])
	if (t && t.defaultProps)
		for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r])
	return { $$typeof: G_, type: t, key: o, ref: l, props: i, _owner: Z_.current }
}
Zu.Fragment = Q_
Zu.jsx = i3
Zu.jsxs = i3
;(function (t) {
	t.exports = Zu
})(Ku)
const q0 = Ku.exports.Fragment,
	k = Ku.exports.jsx,
	se = Ku.exports.jsxs
Os.registerPlugin(ue)
function e7() {
	const t = $.exports.useRef(),
		e = $.exports.useRef()
	return (
		$.exports.useEffect(() => {
			const n = t.current
			console.log(n)
			const r = n.getContext('2d')
			;(n.width = 3840), (n.height = 2160)
			const i = 140,
				o = (u) => eh[u],
				l = { frame: 0 },
				s = []
			eh.forEach((u, c) => {
				const d = new Image()
				;(d.src = o(c)), s.push(d)
			}),
				Os.to(l, {
					frame: i - 1,
					snap: 'frame',
					scrollTrigger: {
						trigger: e.current,
						start: 'top center',
						end: '+=8000',
						scrub: 0.5,
						id: 'bg',
					},
					onUpdate: a,
				}),
				(s[0].onload = a)
			function a(u) {
				r.clearRect(0, 0, n.width, n.height), r.drawImage(s[l.frame], 0, 0)
			}
		}, []),
		se(t7, {
			ref: e,
			children: [k('canvas', { ref: t, id: 'video' }), k(n7, {})],
		})
	)
}
const t7 = ge.div`
	width: 100vw;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;

	#video {
		overflow-x: hidden;
		width: 1600px;
		/* height: 723px; */
		/* height: calc(100vh + 100px); */
		z-index: -2;
		position: fixed;
		left: 0px;
		top: -100px;
		filter: brightness(85%);

		@media only screen and (min-width: 1441px) {
			width: 1920px;
			height: 1080px;
		}
	}
`,
	n7 = ge.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	filter: contrast(300%);
	background: rgb(0, 3, 197)
		url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
	background-blend-mode: difference;
	opacity: 0.15;
	pointer-events: none;
`
var o3 = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	th = kr.createContext && kr.createContext(o3),
	li =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(li =
					Object.assign ||
					function (t) {
						for (var e, n = 1, r = arguments.length; n < r; n++) {
							e = arguments[n]
							for (var i in e)
								Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
						}
						return t
					}),
				li.apply(this, arguments)
			)
		},
	r7 =
		(globalThis && globalThis.__rest) ||
		function (t, e) {
			var n = {}
			for (var r in t)
				Object.prototype.hasOwnProperty.call(t, r) &&
					e.indexOf(r) < 0 &&
					(n[r] = t[r])
			if (t != null && typeof Object.getOwnPropertySymbols == 'function')
				for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
					e.indexOf(r[i]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
						(n[r[i]] = t[r[i]])
			return n
		}
function l3(t) {
	return (
		t &&
		t.map(function (e, n) {
			return kr.createElement(e.tag, li({ key: n }, e.attr), l3(e.child))
		})
	)
}
function et(t) {
	return function (e) {
		return k(i7, { ...li({ attr: li({}, t.attr) }, e), children: l3(t.child) })
	}
}
function i7(t) {
	var e = function (n) {
		var r = t.attr,
			i = t.size,
			o = t.title,
			l = r7(t, ['attr', 'size', 'title']),
			s = i || n.size || '1em',
			a
		return (
			n.className && (a = n.className),
			t.className && (a = (a ? a + ' ' : '') + t.className),
			se('svg', {
				...li(
					{ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
					n.attr,
					r,
					l,
					{
						className: a,
						style: li(li({ color: t.color || n.color }, n.style), t.style),
						height: s,
						width: s,
						xmlns: 'http://www.w3.org/2000/svg',
					}
				),
				children: [o && k('title', { children: o }), t.children],
			})
		)
	}
	return th !== void 0
		? k(th.Consumer, {
				children: function (n) {
					return e(n)
				},
		  })
		: e(o3)
}
function s3(t) {
	return et({
		tag: 'svg',
		attr: { viewBox: '0 0 24 24' },
		child: [
			{
				tag: 'path',
				attr: {
					fill: 'none',
					stroke: '#000',
					strokeWidth: '2',
					d: 'M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,12 L3.24999995,12 L4.49999995,12 C6.5,12 6.75,13.25 6.75,14 C6.75,14.75 6.5,16 4.49999995,16 L3.24999995,16 L3.24999995,18 L3,17.9999999 L3,12 Z M9.5,18 L9.5,12 C9.5,12 10.4473684,12 11.2052633,12 C12.3421053,12 13.5,12.5 13.5,15 C13.5,17.5 12.3421053,18 11.2052633,18 C10.4473684,18 9.5,18 9.5,18 Z M16.5,19 L16.5,12 L20.5,12 M16.5,15.5 L19.5,15.5',
				},
			},
		],
	})(t)
}
function a3(t) {
	return et({
		tag: 'svg',
		attr: { viewBox: '0 0 24 24' },
		child: [
			{
				tag: 'path',
				attr: {
					fillRule: 'evenodd',
					d: 'M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1',
				},
			},
		],
	})(t)
}
function u3(t) {
	return et({
		tag: 'svg',
		attr: { viewBox: '0 0 24 24' },
		child: [
			{
				tag: 'path',
				attr: {
					fillRule: 'evenodd',
					d: 'M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z',
				},
			},
		],
	})(t)
}
function c3(t) {
	return et({
		tag: 'svg',
		attr: { viewBox: '0 0 24 24' },
		child: [
			{
				tag: 'g',
				attr: {},
				child: [
					{ tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
					{
						tag: 'path',
						attr: {
							d: 'M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z',
						},
					},
				],
			},
		],
	})(t)
}
/**
 * @remix-run/router v1.0.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wu() {
	return (
		(wu = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
					}
					return t
			  }),
		wu.apply(this, arguments)
	)
}
var Yr
;(function (t) {
	;(t.Pop = 'POP'), (t.Push = 'PUSH'), (t.Replace = 'REPLACE')
})(Yr || (Yr = {}))
const nh = 'popstate'
function o7(t) {
	t === void 0 && (t = {})
	function e(r, i) {
		let { pathname: o, search: l, hash: s } = r.location
		return y1(
			'',
			{ pathname: o, search: l, hash: s },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || 'default'
		)
	}
	function n(r, i) {
		return typeof i == 'string' ? i : Ss(i)
	}
	return a7(e, n, null, t)
}
function dt(t, e) {
	if (t === !1 || t === null || typeof t > 'u') throw new Error(e)
}
function l7() {
	return Math.random().toString(36).substr(2, 8)
}
function rh(t) {
	return { usr: t.state, key: t.key }
}
function y1(t, e, n, r) {
	return (
		n === void 0 && (n = null),
		wu(
			{ pathname: typeof t == 'string' ? t : t.pathname, search: '', hash: '' },
			typeof e == 'string' ? rl(e) : e,
			{ state: n, key: (e && e.key) || r || l7() }
		)
	)
}
function Ss(t) {
	let { pathname: e = '/', search: n = '', hash: r = '' } = t
	return (
		n && n !== '?' && (e += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
		e
	)
}
function rl(t) {
	let e = {}
	if (t) {
		let n = t.indexOf('#')
		n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)))
		let r = t.indexOf('?')
		r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
			t && (e.pathname = t)
	}
	return e
}
function s7(t) {
	let e =
			typeof window < 'u' &&
			typeof window.location < 'u' &&
			window.location.origin !== 'null'
				? window.location.origin
				: window.location.href,
		n = typeof t == 'string' ? t : Ss(t)
	return (
		dt(
			e,
			'No window.location.(origin|href) available to create URL for href: ' + n
		),
		new URL(n, e)
	)
}
function a7(t, e, n, r) {
	r === void 0 && (r = {})
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		l = i.history,
		s = Yr.Pop,
		a = null
	function u() {
		;(s = Yr.Pop), a && a({ action: s, location: f.location })
	}
	function c(p, v) {
		s = Yr.Push
		let g = y1(f.location, p, v)
		n && n(g, p)
		let w = rh(g),
			m = f.createHref(g)
		try {
			l.pushState(w, '', m)
		} catch {
			i.location.assign(m)
		}
		o && a && a({ action: s, location: f.location })
	}
	function d(p, v) {
		s = Yr.Replace
		let g = y1(f.location, p, v)
		n && n(g, p)
		let w = rh(g),
			m = f.createHref(g)
		l.replaceState(w, '', m), o && a && a({ action: s, location: f.location })
	}
	let f = {
		get action() {
			return s
		},
		get location() {
			return t(i, l)
		},
		listen(p) {
			if (a) throw new Error('A history only accepts one active listener')
			return (
				i.addEventListener(nh, u),
				(a = p),
				() => {
					i.removeEventListener(nh, u), (a = null)
				}
			)
		},
		createHref(p) {
			return e(i, p)
		},
		encodeLocation(p) {
			let v = s7(typeof p == 'string' ? p : Ss(p))
			return { pathname: v.pathname, search: v.search, hash: v.hash }
		},
		push: c,
		replace: d,
		go(p) {
			return l.go(p)
		},
	}
	return f
}
var ih
;(function (t) {
	;(t.data = 'data'),
		(t.deferred = 'deferred'),
		(t.redirect = 'redirect'),
		(t.error = 'error')
})(ih || (ih = {}))
function u7(t, e, n) {
	n === void 0 && (n = '/')
	let r = typeof e == 'string' ? rl(e) : e,
		i = d3(r.pathname || '/', n)
	if (i == null) return null
	let o = f3(t)
	c7(o)
	let l = null
	for (let s = 0; l == null && s < o.length; ++s) l = _7(o[s], S7(i))
	return l
}
function f3(t, e, n, r) {
	return (
		e === void 0 && (e = []),
		n === void 0 && (n = []),
		r === void 0 && (r = ''),
		t.forEach((i, o) => {
			let l = {
				relativePath: i.path || '',
				caseSensitive: i.caseSensitive === !0,
				childrenIndex: o,
				route: i,
			}
			l.relativePath.startsWith('/') &&
				(dt(
					l.relativePath.startsWith(r),
					'Absolute route path "' +
						l.relativePath +
						'" nested under path ' +
						('"' + r + '" is not valid. An absolute child route path ') +
						'must start with the combined path of all its parent routes.'
				),
				(l.relativePath = l.relativePath.slice(r.length)))
			let s = si([r, l.relativePath]),
				a = n.concat(l)
			i.children &&
				i.children.length > 0 &&
				(dt(
					i.index !== !0,
					'Index routes must not have child routes. Please remove ' +
						('all child routes from route path "' + s + '".')
				),
				f3(i.children, e, a, s)),
				!(i.path == null && !i.index) &&
					e.push({ path: s, score: v7(s, i.index), routesMeta: a })
		}),
		e
	)
}
function c7(t) {
	t.sort((e, n) =>
		e.score !== n.score
			? n.score - e.score
			: y7(
					e.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	)
}
const f7 = /^:\w+$/,
	d7 = 3,
	p7 = 2,
	h7 = 1,
	g7 = 10,
	m7 = -2,
	oh = (t) => t === '*'
function v7(t, e) {
	let n = t.split('/'),
		r = n.length
	return (
		n.some(oh) && (r += m7),
		e && (r += p7),
		n
			.filter((i) => !oh(i))
			.reduce((i, o) => i + (f7.test(o) ? d7 : o === '' ? h7 : g7), r)
	)
}
function y7(t, e) {
	return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
		? t[t.length - 1] - e[e.length - 1]
		: 0
}
function _7(t, e) {
	let { routesMeta: n } = t,
		r = {},
		i = '/',
		o = []
	for (let l = 0; l < n.length; ++l) {
		let s = n[l],
			a = l === n.length - 1,
			u = i === '/' ? e : e.slice(i.length) || '/',
			c = w7(
				{ path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
				u
			)
		if (!c) return null
		Object.assign(r, c.params)
		let d = s.route
		o.push({
			params: r,
			pathname: si([i, c.pathname]),
			pathnameBase: z7(si([i, c.pathnameBase])),
			route: d,
		}),
			c.pathnameBase !== '/' && (i = si([i, c.pathnameBase]))
	}
	return o
}
function w7(t, e) {
	typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 })
	let [n, r] = x7(t.path, t.caseSensitive, t.end),
		i = e.match(n)
	if (!i) return null
	let o = i[0],
		l = o.replace(/(.)\/+$/, '$1'),
		s = i.slice(1)
	return {
		params: r.reduce((u, c, d) => {
			if (c === '*') {
				let f = s[d] || ''
				l = o.slice(0, o.length - f.length).replace(/(.)\/+$/, '$1')
			}
			return (u[c] = k7(s[d] || '', c)), u
		}, {}),
		pathname: o,
		pathnameBase: l,
		pattern: t,
	}
}
function x7(t, e, n) {
	e === void 0 && (e = !1),
		n === void 0 && (n = !0),
		Y0(
			t === '*' || !t.endsWith('*') || t.endsWith('/*'),
			'Route path "' +
				t +
				'" will be treated as if it were ' +
				('"' + t.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + t.replace(/\*$/, '/*') + '".')
		)
	let r = [],
		i =
			'^' +
			t
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
				.replace(/:(\w+)/g, (l, s) => (r.push(s), '([^\\/]+)'))
	return (
		t.endsWith('*')
			? (r.push('*'),
			  (i += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (i += '\\/*$')
			: t !== '' && t !== '/' && (i += '(?:(?=\\/|$))'),
		[new RegExp(i, e ? void 0 : 'i'), r]
	)
}
function S7(t) {
	try {
		return decodeURI(t)
	} catch (e) {
		return (
			Y0(
				!1,
				'The URL path "' +
					t +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + e + ').')
			),
			t
		)
	}
}
function k7(t, e) {
	try {
		return decodeURIComponent(t)
	} catch (n) {
		return (
			Y0(
				!1,
				'The value for the URL param "' +
					e +
					'" will not be decoded because' +
					(' the string "' +
						t +
						'" is a malformed URL segment. This is probably') +
					(' due to a bad percent encoding (' + n + ').')
			),
			t
		)
	}
}
function d3(t, e) {
	if (e === '/') return t
	if (!t.toLowerCase().startsWith(e.toLowerCase())) return null
	let n = e.endsWith('/') ? e.length - 1 : e.length,
		r = t.charAt(n)
	return r && r !== '/' ? null : t.slice(n) || '/'
}
function Y0(t, e) {
	if (!t) {
		typeof console < 'u' && console.warn(e)
		try {
			throw new Error(e)
		} catch {}
	}
}
function C7(t, e) {
	e === void 0 && (e = '/')
	let {
		pathname: n,
		search: r = '',
		hash: i = '',
	} = typeof t == 'string' ? rl(t) : t
	return {
		pathname: n ? (n.startsWith('/') ? n : E7(n, e)) : e,
		search: P7(r),
		hash: T7(i),
	}
}
function E7(t, e) {
	let n = e.replace(/\/+$/, '').split('/')
	return (
		t.split('/').forEach((i) => {
			i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
		}),
		n.length > 1 ? n.join('/') : '/'
	)
}
function qc(t, e, n, r) {
	return (
		"Cannot include a '" +
		t +
		"' character in a manually specified " +
		('`to.' +
			e +
			'` field [' +
			JSON.stringify(r) +
			'].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	)
}
function p3(t) {
	return t.filter(
		(e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
	)
}
function h3(t, e, n, r) {
	r === void 0 && (r = !1)
	let i
	typeof t == 'string'
		? (i = rl(t))
		: ((i = wu({}, t)),
		  dt(
				!i.pathname || !i.pathname.includes('?'),
				qc('?', 'pathname', 'search', i)
		  ),
		  dt(
				!i.pathname || !i.pathname.includes('#'),
				qc('#', 'pathname', 'hash', i)
		  ),
		  dt(!i.search || !i.search.includes('#'), qc('#', 'search', 'hash', i)))
	let o = t === '' || i.pathname === '',
		l = o ? '/' : i.pathname,
		s
	if (r || l == null) s = n
	else {
		let d = e.length - 1
		if (l.startsWith('..')) {
			let f = l.split('/')
			for (; f[0] === '..'; ) f.shift(), (d -= 1)
			i.pathname = f.join('/')
		}
		s = d >= 0 ? e[d] : '/'
	}
	let a = C7(i, s),
		u = l && l !== '/' && l.endsWith('/'),
		c = (o || l === '.') && n.endsWith('/')
	return !a.pathname.endsWith('/') && (u || c) && (a.pathname += '/'), a
}
const si = (t) => t.join('/').replace(/\/\/+/g, '/'),
	z7 = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
	P7 = (t) => (!t || t === '?' ? '' : t.startsWith('?') ? t : '?' + t),
	T7 = (t) => (!t || t === '#' ? '' : t.startsWith('#') ? t : '#' + t)
class R7 {
	constructor(e, n, r, i) {
		i === void 0 && (i = !1),
			(this.status = e),
			(this.statusText = n || ''),
			(this.internal = i),
			r instanceof Error
				? ((this.data = r.toString()), (this.error = r))
				: (this.data = r)
	}
}
function O7(t) {
	return t instanceof R7
}
const M7 = ['post', 'put', 'patch', 'delete']
;[...M7]
/**
 * React Router v6.4.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _1() {
	return (
		(_1 = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
					}
					return t
			  }),
		_1.apply(this, arguments)
	)
}
function N7(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
}
const L7 = typeof Object.is == 'function' ? Object.is : N7,
	{ useState: D7, useEffect: A7, useLayoutEffect: I7, useDebugValue: j7 } = Gc
function F7(t, e, n) {
	const r = e(),
		[{ inst: i }, o] = D7({ inst: { value: r, getSnapshot: e } })
	return (
		I7(() => {
			;(i.value = r), (i.getSnapshot = e), Yc(i) && o({ inst: i })
		}, [t, r, e]),
		A7(
			() => (
				Yc(i) && o({ inst: i }),
				t(() => {
					Yc(i) && o({ inst: i })
				})
			),
			[t]
		),
		j7(r),
		r
	)
}
function Yc(t) {
	const e = t.getSnapshot,
		n = t.value
	try {
		const r = e()
		return !L7(n, r)
	} catch {
		return !0
	}
}
function $7(t, e, n) {
	return e()
}
const b7 =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	B7 = !b7,
	U7 = B7 ? $7 : F7
'useSyncExternalStore' in Gc && ((t) => t.useSyncExternalStore)(Gc)
const V7 = $.exports.createContext(null),
	H7 = $.exports.createContext(null),
	g3 = $.exports.createContext(null),
	Ju = $.exports.createContext(null),
	ec = $.exports.createContext(null),
	Ms = $.exports.createContext({ outlet: null, matches: [] }),
	m3 = $.exports.createContext(null)
function W7(t, e) {
	let { relative: n } = e === void 0 ? {} : e
	Ns() || dt(!1)
	let { basename: r, navigator: i } = $.exports.useContext(Ju),
		{ hash: o, pathname: l, search: s } = v3(t, { relative: n }),
		a = l
	return (
		r !== '/' && (a = l === '/' ? r : si([r, l])),
		i.createHref({ pathname: a, search: s, hash: o })
	)
}
function Ns() {
	return $.exports.useContext(ec) != null
}
function Ls() {
	return Ns() || dt(!1), $.exports.useContext(ec).location
}
function q7() {
	Ns() || dt(!1)
	let { basename: t, navigator: e } = $.exports.useContext(Ju),
		{ matches: n } = $.exports.useContext(Ms),
		{ pathname: r } = Ls(),
		i = JSON.stringify(p3(n).map((s) => s.pathnameBase)),
		o = $.exports.useRef(!1)
	return (
		$.exports.useEffect(() => {
			o.current = !0
		}),
		$.exports.useCallback(
			function (s, a) {
				if ((a === void 0 && (a = {}), !o.current)) return
				if (typeof s == 'number') {
					e.go(s)
					return
				}
				let u = h3(s, JSON.parse(i), r, a.relative === 'path')
				t !== '/' &&
					(u.pathname = u.pathname === '/' ? t : si([t, u.pathname])),
					(a.replace ? e.replace : e.push)(u, a.state, a)
			},
			[t, e, i, r]
		)
	)
}
function v3(t, e) {
	let { relative: n } = e === void 0 ? {} : e,
		{ matches: r } = $.exports.useContext(Ms),
		{ pathname: i } = Ls(),
		o = JSON.stringify(p3(r).map((l) => l.pathnameBase))
	return $.exports.useMemo(
		() => h3(t, JSON.parse(o), i, n === 'path'),
		[t, o, i, n]
	)
}
function Y7(t, e) {
	Ns() || dt(!1)
	let { navigator: n } = $.exports.useContext(Ju),
		r = $.exports.useContext(g3),
		{ matches: i } = $.exports.useContext(Ms),
		o = i[i.length - 1],
		l = o ? o.params : {}
	o && o.pathname
	let s = o ? o.pathnameBase : '/'
	o && o.route
	let a = Ls(),
		u
	if (e) {
		var c
		let g = typeof e == 'string' ? rl(e) : e
		s === '/' ||
			((c = g.pathname) == null ? void 0 : c.startsWith(s)) ||
			dt(!1),
			(u = g)
	} else u = a
	let d = u.pathname || '/',
		f = s === '/' ? d : d.slice(s.length) || '/',
		p = u7(t, { pathname: f }),
		v = K7(
			p &&
				p.map((g) =>
					Object.assign({}, g, {
						params: Object.assign({}, l, g.params),
						pathname: si([
							s,
							n.encodeLocation
								? n.encodeLocation(g.pathname).pathname
								: g.pathname,
						]),
						pathnameBase:
							g.pathnameBase === '/'
								? s
								: si([
										s,
										n.encodeLocation
											? n.encodeLocation(g.pathnameBase).pathname
											: g.pathnameBase,
								  ]),
					})
				),
			i,
			r || void 0
		)
	return e && v
		? k(ec.Provider, {
				value: {
					location: _1(
						{
							pathname: '/',
							search: '',
							hash: '',
							state: null,
							key: 'default',
						},
						u
					),
					navigationType: Yr.Pop,
				},
				children: v,
		  })
		: v
}
function X7() {
	let t = J7(),
		e = O7(t)
			? t.status + ' ' + t.statusText
			: t instanceof Error
			? t.message
			: JSON.stringify(t),
		n = t instanceof Error ? t.stack : null,
		r = 'rgba(200,200,200, 0.5)',
		i = { padding: '0.5rem', backgroundColor: r },
		o = { padding: '2px 4px', backgroundColor: r }
	return se(q0, {
		children: [
			k('h2', { children: 'Unhandled Thrown Error!' }),
			k('h3', { style: { fontStyle: 'italic' }, children: e }),
			n ? k('pre', { style: i, children: n }) : null,
			k('p', { children: '\u{1F4BF} Hey developer \u{1F44B}' }),
			se('p', {
				children: [
					'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
					k('code', { style: o, children: 'errorElement' }),
					' props on\xA0',
					k('code', { style: o, children: '<Route>' }),
				],
			}),
		],
	})
}
class G7 extends $.exports.Component {
	constructor(e) {
		super(e), (this.state = { location: e.location, error: e.error })
	}
	static getDerivedStateFromError(e) {
		return { error: e }
	}
	static getDerivedStateFromProps(e, n) {
		return n.location !== e.location
			? { error: e.error, location: e.location }
			: { error: e.error || n.error, location: n.location }
	}
	componentDidCatch(e, n) {
		console.error('React Router caught the following error during render', e, n)
	}
	render() {
		return this.state.error
			? k(m3.Provider, {
					value: this.state.error,
					children: this.props.component,
			  })
			: this.props.children
	}
}
function Q7(t) {
	let { routeContext: e, match: n, children: r } = t,
		i = $.exports.useContext(V7)
	return (
		i && n.route.errorElement && (i._deepestRenderedBoundaryId = n.route.id),
		k(Ms.Provider, { value: e, children: r })
	)
}
function K7(t, e, n) {
	if ((e === void 0 && (e = []), t == null))
		if (n != null && n.errors) t = n.matches
		else return null
	let r = t,
		i = n == null ? void 0 : n.errors
	if (i != null) {
		let o = r.findIndex(
			(l) => l.route.id && (i == null ? void 0 : i[l.route.id])
		)
		o >= 0 || dt(!1), (r = r.slice(0, Math.min(r.length, o + 1)))
	}
	return r.reduceRight((o, l, s) => {
		let a = l.route.id ? (i == null ? void 0 : i[l.route.id]) : null,
			u = n ? l.route.errorElement || k(X7, {}) : null,
			c = () =>
				k(Q7, {
					match: l,
					routeContext: { outlet: o, matches: e.concat(r.slice(0, s + 1)) },
					children: a ? u : l.route.element !== void 0 ? l.route.element : o,
				})
		return n && (l.route.errorElement || s === 0)
			? k(G7, { location: n.location, component: u, error: a, children: c() })
			: c()
	}, null)
}
var lh
;(function (t) {
	t.UseRevalidator = 'useRevalidator'
})(lh || (lh = {}))
var w1
;(function (t) {
	;(t.UseLoaderData = 'useLoaderData'),
		(t.UseActionData = 'useActionData'),
		(t.UseRouteError = 'useRouteError'),
		(t.UseNavigation = 'useNavigation'),
		(t.UseRouteLoaderData = 'useRouteLoaderData'),
		(t.UseMatches = 'useMatches'),
		(t.UseRevalidator = 'useRevalidator')
})(w1 || (w1 = {}))
function Z7(t) {
	let e = $.exports.useContext(g3)
	return e || dt(!1), e
}
function J7() {
	var t
	let e = $.exports.useContext(m3),
		n = Z7(w1.UseRouteError),
		r = $.exports.useContext(Ms),
		i = r.matches[r.matches.length - 1]
	return (
		e ||
		(r || dt(!1),
		i.route.id || dt(!1),
		(t = n.errors) == null ? void 0 : t[i.route.id])
	)
}
function Da(t) {
	dt(!1)
}
function e9(t) {
	let {
		basename: e = '/',
		children: n = null,
		location: r,
		navigationType: i = Yr.Pop,
		navigator: o,
		static: l = !1,
	} = t
	Ns() && dt(!1)
	let s = e.replace(/^\/*/, '/'),
		a = $.exports.useMemo(
			() => ({ basename: s, navigator: o, static: l }),
			[s, o, l]
		)
	typeof r == 'string' && (r = rl(r))
	let {
			pathname: u = '/',
			search: c = '',
			hash: d = '',
			state: f = null,
			key: p = 'default',
		} = r,
		v = $.exports.useMemo(() => {
			let g = d3(u, s)
			return g == null
				? null
				: { pathname: g, search: c, hash: d, state: f, key: p }
		}, [s, u, c, d, f, p])
	return v == null
		? null
		: k(Ju.Provider, {
				value: a,
				children: k(ec.Provider, {
					children: n,
					value: { location: v, navigationType: i },
				}),
		  })
}
function t9(t) {
	let { children: e, location: n } = t,
		r = $.exports.useContext(H7),
		i = r && !e ? r.router.routes : x1(e)
	return Y7(i, n)
}
var sh
;(function (t) {
	;(t[(t.pending = 0)] = 'pending'),
		(t[(t.success = 1)] = 'success'),
		(t[(t.error = 2)] = 'error')
})(sh || (sh = {}))
new Promise(() => {})
function x1(t, e) {
	e === void 0 && (e = [])
	let n = []
	return (
		$.exports.Children.forEach(t, (r, i) => {
			if (!$.exports.isValidElement(r)) return
			if (r.type === $.exports.Fragment) {
				n.push.apply(n, x1(r.props.children, e))
				return
			}
			r.type !== Da && dt(!1), !r.props.index || !r.props.children || dt(!1)
			let o = [...e, i],
				l = {
					id: r.props.id || o.join('-'),
					caseSensitive: r.props.caseSensitive,
					element: r.props.element,
					index: r.props.index,
					path: r.props.path,
					loader: r.props.loader,
					action: r.props.action,
					errorElement: r.props.errorElement,
					hasErrorBoundary: r.props.errorElement != null,
					shouldRevalidate: r.props.shouldRevalidate,
					handle: r.props.handle,
				}
			r.props.children && (l.children = x1(r.props.children, o)), n.push(l)
		}),
		n
	)
}
/**
 * React Router DOM v6.4.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function n9(t, e) {
	if (t == null) return {}
	var n = {},
		r = Object.keys(t),
		i,
		o
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(e.indexOf(i) >= 0) && (n[i] = t[i])
	return n
}
function r9(t) {
	return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function i9(t, e) {
	return t.button === 0 && (!e || e === '_self') && !r9(t)
}
const o9 = [
	'onClick',
	'relative',
	'reloadDocument',
	'replace',
	'state',
	'target',
	'to',
	'preventScrollReset',
]
function l9(t) {
	let { basename: e, children: n, window: r } = t,
		i = $.exports.useRef()
	i.current == null && (i.current = o7({ window: r, v5Compat: !0 }))
	let o = i.current,
		[l, s] = $.exports.useState({ action: o.action, location: o.location })
	return (
		$.exports.useLayoutEffect(() => o.listen(s), [o]),
		k(e9, {
			basename: e,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: o,
		})
	)
}
const Ql = $.exports.forwardRef(function (e, n) {
	let {
			onClick: r,
			relative: i,
			reloadDocument: o,
			replace: l,
			state: s,
			target: a,
			to: u,
			preventScrollReset: c,
		} = e,
		d = n9(e, o9),
		f = W7(u, { relative: i }),
		p = s9(u, {
			replace: l,
			state: s,
			target: a,
			preventScrollReset: c,
			relative: i,
		})
	function v(g) {
		r && r(g), g.defaultPrevented || p(g)
	}
	return k('a', { ...d, href: f, onClick: o ? r : v, ref: n, target: a })
})
var ah
;(function (t) {
	;(t.UseScrollRestoration = 'useScrollRestoration'),
		(t.UseSubmitImpl = 'useSubmitImpl'),
		(t.UseFetcher = 'useFetcher')
})(ah || (ah = {}))
var uh
;(function (t) {
	;(t.UseFetchers = 'useFetchers'),
		(t.UseScrollRestoration = 'useScrollRestoration')
})(uh || (uh = {}))
function s9(t, e) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: o,
			relative: l,
		} = e === void 0 ? {} : e,
		s = q7(),
		a = Ls(),
		u = v3(t, { relative: l })
	return $.exports.useCallback(
		(c) => {
			if (i9(c, n)) {
				c.preventDefault()
				let d = r !== void 0 ? r : Ss(a) === Ss(u)
				s(t, { replace: d, state: i, preventScrollReset: o, relative: l })
			}
		},
		[a, s, u, r, i, n, t, o, l]
	)
}
function a9() {
	return se(u9, {
		children: [
			se(ch, {
				children: [
					k('a', {
						href: 'https://www.linkedin.com/in/michael-wagner-9339881a0/',
						children: k(u3, { className: 'icon' }),
					}),
					k('a', {
						href: 'https://github.com/MichaelWagnr',
						children: k(a3, { className: 'icon' }),
					}),
					k('a', {
						href: './MichaelWagner_CV_EN.pdf',
						target: '_blank',
						type: 'application/pdf',
						rel: 'alternate',
						media: 'print',
						children: k(s3, { className: 'icon' }),
					}),
				],
			}),
			k(ch, {
				children: k('a', {
					href: 'mailto:michaelwagner780@gmail.com?subject = Portfolio Contact: ',
					children: k(c3, { className: 'icon' }),
				}),
			}),
			se(Ql, {
				to: '/portfolio',
				className: 'internal',
				children: [
					k('span', { className: 'en', children: 'Selected Works' }),
					k('br', {}),
					k('span', { className: 'fr', children: 'Mes r\xE9alisations' }),
				],
			}),
			se(Ql, {
				to: '/about',
				className: 'internal',
				children: [
					k('span', { className: 'en', children: 'About me' }),
					k('br', {}),
					k('span', { className: 'fr', children: '\xC0 propos de moi' }),
				],
			}),
		],
	})
}
const u9 = ge.div`
	width: 230px;
	height: 300px;
	z-index: 9;

	a {
		border: 2px solid var(--primary-fg-light);
		border-radius: 50%;
		padding: 20px 10px;
		margin: 5px;
		color: var(--primary-fg-light);

		&:hover {
			cursor: pointer;
			border: 2px solid var(--secondary-fg);
			color: var(--secondary-fg);
			* {
				color: var(--secondary-fg);
				path {
					stroke: var(--secondary-fg);
				}
			}
		}
	}

	a.internal {
		border-radius: 5px;
		display: block;
		padding: 5px;
		margin-bottom: 15px;
		text-align: center;
		text-decoration: none;
		font-size: var(--p);
	}

	.icon {
		pointer-events: none;
		font-size: 2.5rem;
		position: relative;
		top: 14px;
		color: var(--primary-fg-light);
		path {
			stroke: var(--primary-fg-light);
			pointer-events: none;
		}
	}

	.fr {
		color: var(--secondary-fg-light);
	}
`,
	ch = ge.div`
	width: fit-content;
	margin: -15px auto 40px;
`
function y3(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z',
				},
			},
		],
	})(t)
}
function X0(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z',
				},
			},
		],
	})(t)
}
function G0(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z',
				},
			},
		],
	})(t)
}
function _3(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187',
				},
			},
		],
	})(t)
}
function c9(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M17.21 0c-.545.003-1.084.134-1.256.367-.11.165-.192 1.196-.11 1.718 0 0 .032.345.09.614a14.6 14.6 0 0 1-.02.182 7.024 7.024 0 0 1-.097.605c-.01.056-.207.095-.425.152a2.495 2.495 0 0 0-.138-.042c-.234-.069-.385.123-.618.26-.069-.04-.371-.178-.536-.082-.165.096-.275.193-.44.261-.082-.041-.302-.041-.48.028a1.27 1.27 0 0 0-.483.278c-2.314.58-4.813 1.635-5.012 1.741-1.017.522-2.679 1.415-3.434 2.033-1.291 1.071-2.06 2.322-2.363 3.242-.385 1.14-.275 1.827.096 1.387.298-.366 1.632-1.454 2.475-1.999l-.002.007a3.219 3.219 0 0 1 .44-.26l.233-.124.505-.323c.602.552.803 1.433.937 2.63.22 1.841 1.704 2.693 3.434 2.72 1.8.028 2.446.399 3.119 1.305.153.201.318.307.47.368a1.954 1.954 0 0 0-.16.405c-.075.17-.125.38-.157.608a.157.157 0 0 0-.03.075c-.068.536-.055 1.8-.068 2.473-.014.673-.028.77-.083.866-.055.11-.11.178-.178.467-.069.302-.193.384-.316.631-.206.385-.165.81.041 1.003.206.192.77.481 1.538.385.77-.096.88-.151.756-.893-.014-.11-.192-.605-.137-.797.082-.206-.096-.563-.055-.577.041-.014.096-.288.096-.426 0-.137-.014-.796.137-1.14.062-.14.193-.46.326-.785.442-.723.459-1.161.48-1.41.03-.202.046-.46.018-.744.055-.083.289-.275.316-.646 0 0 .644-.337 1.102-1.148.16.557.31.91.286 1.272-.499.39-.684.678-.76.959-.048-.02-.076-.037-.11-.04h-.027a.437.437 0 0 0-.106.029c-.192.068-.041 1.318.165 1.827.206.508.316.81.398 1.36.083.549-.192 1.222-.302 1.524 0 0-.179.536.233.824.358.248 1.704.18 2.308.18.605 0 1.511.219 2.088.109.715-.124.824-.55.399-.77-.426-.22-1.072-.329-1.91-.933-.22-.152-.522-.289-.563-.412-.041-.124-.041-.838-.027-1.457.013-.618.22-1.414.288-1.84.064-.398-.076-.388-.262-.351.032-.147.066-.292.097-.446.344-.632.193-1.223.193-1.223.82-1.044.4-3.27.22-4.048.64.303.96.188.96.188.102-.055.192-.134.274-.224.337-.362.51-.916.51-.916V11c.782-.783 1.151-1.936.26-2.692a1.331 1.331 0 0 0-.219-1.263 1.56 1.56 0 0 0-.37-1.731 1.36 1.36 0 0 0-.487-.297c-.2-.295-.245-.417-.572-.349-.15-.165-.178-.288-.494-.178 0 0-.096-.234-.275-.289a.25.25 0 0 0-.05-.015c-.302-.21-.576-.215-.772-.16-.064-.048-.061-.124-.07-.388-.008-.2-.019-.486-.031-.744.027-.328.102-.974.126-1.303.028-.37.042-.948-.123-1.195C18.303.12 17.754-.003 17.21 0zm-.005.34c.7 0 1.002.22 1.044.343.013.028.082.495.04.797-.013.11-.027.509-.054.687-.014.179-.069.385-.124.673-.041.234-.233.495-.384.536-.261.069-.742.055-1.017 0-.069-.014-.124-.055-.192-.096-.151-.248-.234-.44-.261-.742-.028-.289-.083-.412-.096-.632-.014-.33-.014-.55-.014-.55.014-.178.069-.618.069-.659.013-.123.233-.357.989-.357zm-1.133 2.702c.146.149.301.306.432.416.124.11.426.096.7.096.248 0 .468.028.564-.027.154-.077.355-.235.523-.394.011.152.022.304.026.435.01.295-.043.468.024.57-.082.048-.174.105-.269.156-.151.08-.306.136-.403.115h-.002c-.209-.035-.931-.215-1.331-.407-.167-.259-.335-.398-.326-.448.027-.137.04-.247.054-.425.004-.03.005-.058.008-.088zm-.853.69l.035.001c.424.036.65.152.808.284l.076.03.008-.027c.047.03.102.06.162.088.47.159 1.104.308 1.309.353.247.055.645-.192.838-.316.343-.22.783-.04.989.193.137.15.192.247.192.288.316-.11.357.041.508.206.385-.179.412.041.44.137-.122 0-.298.014-.538.04l-.012-.012c-.144-.153-.402-.289-.599-.384-.087-.031-.18-.049-.252-.097-.11-.055-.22-.137-.385-.123-.687.082-.824.315-1.415.178-.577-.134-.737-.254-1.333-.221l.001.026c-.105.016-.2.03-.22.03-.206.012-.722.067-1.153-.1a1.256 1.256 0 0 0-.161-.076l-.005-.002h-.001c-.18-.07-.39-.11-.63-.112h-.026c.218-.11.356-.259.56-.218.22.041.44.22.564.357a.858.858 0 0 0-.178-.288c.128-.09.245-.229.418-.234zm-1.1.545c.15.002.28.026.417.073.018.009.034.018.059.029.288.137.81.164 1.25.137a2.26 2.26 0 0 0 .563-.095c.322.024.514.11.977.216.31.07.502.045.695-.007.193-.053.386-.13.723-.17a.542.542 0 0 1 .188.013c.038.02.075.04.11.061.062.049.214.135.343.189.164.068.59.357.645.425a.1.1 0 0 0 .038.03c.242.314.407.755.396 1.21-.06.46-.426.214-.626.12-.412-.178-.824-.302-1.305-.302-.48 0-1.099.041-1.635.179-.741.206-.961.192-1.29.027-.33-.178-.907-.618-.907-.618v.01c-.007-.007-.012-.012-.014-.01-.042.069-.138.247-.193.33-.027.522-.343 1.346-.934 1.552a.547.547 0 0 1-.467-.041 2.503 2.503 0 0 0-.55-.275c.481.384.729.673.949 1.181.174.43.415 1.017 1.002 1.646.363-.004.725.097.962.346.137.137.357.289.33.426 0 .041-.083.151-.151.234a3.231 3.231 0 0 1-.207.22c-.054.04-.247.192-.288.22-.041.027-.096.095-.137.109-.138.069-.289.014-.426-.055s.027-.082-.124-.192c-.34-.24-.541-.411-.454-.832-.932-.794-2.561-1.26-2.911-2.108-.22-.55-.248-.824-.042-1.058.605-.687.371-1.346.825-1.634.425-.275.783.04.989.33-.124-.509-.55-.633-.55-.674 0-.632.605-1.071 1.21-1.181.218-.041.389-.062.54-.06zm-1.847.534c-.14.196-.231.435-.246.721-.206.028-.673.055-.907.907a3.39 3.39 0 0 1-.214.62c-.103.045-2.946 1.274-5.229 2.542l-.01-.007c-.32.18-.627.363-.919.546l-.125.077-.001.003c-1.136.723-2.04 1.45-2.637 2.112.412-2.679 2.528-4.08 3.53-4.698 2.42-1.489 4.629-2.225 6.758-2.823zm8.037.323c.26-.004.536.06.756.275.59.577.425 1.209.247 1.648.15.179.508.687.288 1.291-.04.138-.343.138-.563.495.55-.316.893-.233 1.017.165.192.618-.234 1.36-.605 1.772 0-.014-.014-.028-.014-.041-.055.206-.123.604-.535 1.044-.206.22-.371.192-.605.137-.215-.054-.322-.142-.543-.276-.036-.207-.102-.482-.102-.59 0-.044-.004-.141-.01-.243.032-.036.066-.074.106-.114 0 0 .178-.247.44-.233.26.014.535-.041.604-.11 0-.48-.55-.494-.357-1.319.013-.04.082-.11.302-.137-.33-.069-.48-.083-.714-.302l-.013-.013c.11-.253.224-.457.301-.605.193-.385.082-.852.082-.852.207-.069.385-.179.413-.247.203-.673-.164-1.322-.605-1.74.036-.003.073-.005.11-.006zm-5.46.925c.01.016.02.033.034.05.179.22.577.495 1.113.673.26.083.467.028.7-.027 1.123-.278 2.304-.346 3.33.155a1.82 1.82 0 0 1-.157 1.068c-.232.465-.533 1.068-.48 2.215-.246.044-1.419.144-1.992.037-.521-.097-1.416-.525-1.62-.69a6.703 6.703 0 0 1-.125-.848 1.37 1.37 0 0 0 .454-.343c-.412.068-.577.04-.825-.097-.235-.13-.642-.533-.87-.82.229-.29.393-.69.335-1.226.037-.05.07-.099.102-.147zm-4.38 1.598c-.09.253.093.654.224.953.508 1.179 2.07 1.29 3.127 2.18a.723.723 0 0 0 .06.388c.083.165.371.413.371.413-.055.054-.027.164-.027.164.204.217.504.243.547.246-.435 1.248-.816 2.626-.451 4.095-.179.244-.368.445-.531.668a.851.851 0 0 1-.444-.31c-.591-.852-1.457-1.416-3.023-1.374-2.349.055-3.283-.907-3.461-2.748-.094-.974-.357-1.922-.888-2.479C7.489 9.014 9.6 7.937 10.268 7.73a2.8 2.8 0 0 0 .2-.073zm3.496.18c.381.442.795.727 1.193.979.082.343.11.577.192 1.03h-.041l-.027.308a2.836 2.836 0 0 0-.62-.113l.001-.003c-.893-1.057-.7-1.47-1.058-2.019.097-.034.225-.094.36-.182zm5.911 1.086c.076.067.178.12.323.154-.327.68.33.912.37 1.17-.143.083-.367.037-.603.025-.115-.006-.229.065-.321.147l.032-.367c.006-.43.09-.809.2-1.13zM15.79 9.947c.024.035.178.131 1.002.352 1.026.275 2.323.12 2.55.09a.378.378 0 0 1-.022.089c0 .343.055.59.096.81.053.308.13.533.163.74l.008-.007c.234 1.367.561 3.133-.267 4.048.041.192.069.467.014.783a3.204 3.204 0 0 1-.151.535 2.29 2.29 0 0 0-.108.352c-1.1.142-1.755.055-2.06-.015.123-.374.407-.754.876-.735-.022-.911-.264-1.223-.511-1.891.395-.883.299-1.665.621-2.848-.247.261-.44 1.209-.604 1.786-.206.838-.563 1.648-1.525 2.294 0 .22-.069.384-.151.494-.179.261-.412.344-.494.77.11-.138.26-.261.26-.22a8.51 8.51 0 0 1-.025.493l.012.001c-.165 1.044-.522 1.525-.742 2.115-.151.426-.096 1.36-.151 1.374-.385.083-.975-.068-1.14-.15.162-1.14.019-2.278.436-3.6l-.015-.006c.16-.554.478-.878.939-1.464-.161-.52-.532-1.64.266-4.182.033-.014.067-.03.105-.049l.206-.137c.04-.028.096-.069.137-.096.069-.042.371-.371.412-.412.096-.097.165-.124.192-.234.055-.206-.247-.412-.37-.55-.018-.019-.03-.034-.043-.05.013-.039.027-.077.042-.114.01-.125.028-.26.042-.367zm.883 7.942c.05.002.174.122.751.158.66.04 1.539-.083 1.772-.138.234-.055.097.11.069.275l-.026.169c-.399.134-1.008.188-1.416.202-.393.013-.846-.012-1.161-.11-.048-.26-.063-.47-.007-.55a.024.024 0 0 1 .018-.006zm2.506.846c-.02.135-.035.223-.058.372-.388.12-.888.122-1.27.135a4.413 4.413 0 0 1-1.012-.07 2.065 2.065 0 0 1-.033-.109 11.343 11.343 0 0 1-.065-.252c.179.034.53.079 1.15.087a4.142 4.142 0 0 0 1.288-.163zm-.106.685c-.069.44-.055 1.786-.014 2.157.014.11.948.522 1.277.77.107.085.259.157.422.222.042.042.116.105.197.203.162.213.052.436-.135.526-.264-.007-.568-.052-1.074-.128-.695-.104-1.129-.101-1.73-.106v-.003c-.152-.275-.056-.728-.056-.728a2.2 2.2 0 0 1-.809-.18l.012-.026c.234-.48.22-.591.151-1.415-.047-.578-.196-.883-.335-1.195.169.016.409.035.857.041a4.567 4.567 0 0 0 1.237-.138zm-5.306 2.084c.243 0 .6.032.676.1v.014c.014.165.165.399.11.522-.027.069-.096-.041-.192-.068.041.26.151.741.316 1.112.11.248.041.426-.33.495-.33.014-.755 0-1.112-.083-.412-.206-.55-.316-.467-.7.068-.275.494-.59.865-.838-.206.014-.426.165-.398-.014.055-.357.206-.33.302-.508-.02-.02.084-.032.23-.032z',
				},
			},
		],
	})(t)
}
function w3(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z',
				},
			},
		],
	})(t)
}
function x3(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'm7.806 3.845h2.563v5.126h-2.563zm-1.531 1.65c-.14-.104-.272-.183-.397-.239-.126-.056-.28-.084-.463-.084-.167 0-.298.034-.391.102-.094.067-.141.161-.141.28 0 .092.045.168.135.227.089.06.202.117.337.17.135.054.282.11.439.168.157.057.304.128.439.212.135.083.248.186.337.307.09.121.135.274.135.457 0 .255-.091.471-.272.648s-.435.289-.761.337v.878h-.478v-.866c-.207-.02-.412-.073-.615-.158-.203-.086-.378-.19-.526-.314l.311-.471c.171.115.344.209.519.28.176.072.367.108.574.108.191 0 .335-.036.433-.108.097-.071.146-.167.146-.286 0-.104-.045-.189-.135-.257-.089-.068-.202-.13-.337-.188s-.281-.116-.436-.173c-.155-.058-.3-.129-.436-.212-.135-.084-.247-.184-.337-.302-.09-.117-.134-.266-.134-.445 0-.258.087-.469.262-.633.176-.163.412-.264.711-.304v-.782h.478v.776c.211.024.391.078.54.161.149.084.286.187.409.311zm-2.165-2.442c-.456.244-.813.601-1.057 1.057s-.373.908-.373 2.154v11.472c0 1.246.129 1.698.373 2.154s.601.813 1.057 1.057.908.373 2.154.373h11.472c1.246 0 1.698-.129 2.154-.373s.813-.601 1.057-1.057.373-.908.373-2.154v-11.472c0-1.246-.129-1.698-.373-2.154s-.601-.813-1.057-1.057-.908-.373-2.154-.373h-11.472c-1.246 0-1.698.129-2.154.373zm2.199-2.121h11.382c1.87 0 2.548.195 3.231.56.684.366 1.22.902 1.586 1.586.365.683.56 1.361.56 3.231v11.382c0 1.87-.195 2.548-.56 3.231-.366.684-.902 1.22-1.586 1.586-.683.365-1.361.56-3.231.56h-11.382c-1.87 0-2.548-.195-3.231-.56-.684-.366-1.22-.902-1.586-1.586-.365-.683-.56-1.361-.56-3.231v-11.382c0-1.87.195-2.548.56-3.231.366-.684.902-1.22 1.586-1.586.683-.365 1.361-.56 3.231-.56zm-3.567-.216c-.874.467-1.559 1.152-2.026 2.026-.467.873-.716 1.739-.716 4.128v10.26c0 2.389.249 3.255.716 4.128.467.874 1.152 1.559 2.026 2.026.873.467 1.739.716 4.128.716h10.26c2.389 0 3.255-.249 4.128-.716.874-.467 1.559-1.152 2.026-2.026.467-.873.716-1.739.716-4.128v-10.26c0-2.389-.249-3.255-.716-4.128-.467-.874-1.152-1.559-2.026-2.026-.873-.467-1.739-.716-4.128-.716h-10.26c-2.389 0-3.255.249-4.128.716z',
				},
			},
		],
	})(t)
}
function S3(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
				},
			},
		],
	})(t)
}
function Q0(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z',
				},
			},
		],
	})(t)
}
function k3(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z',
				},
			},
		],
	})(t)
}
function K0(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z',
				},
			},
		],
	})(t)
}
function Z0(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z',
				},
			},
		],
	})(t)
}
function f9(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
				},
			},
		],
	})(t)
}
function C3(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z',
				},
			},
		],
	})(t)
}
function E3(t) {
	return et({
		tag: 'svg',
		attr: { role: 'img', viewBox: '0 0 24 24' },
		child: [
			{ tag: 'title', attr: {}, child: [] },
			{
				tag: 'path',
				attr: {
					d: 'M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z',
				},
			},
		],
	})(t)
}
function d9(t) {
	return et({
		tag: 'svg',
		attr: { viewBox: '0 0 640 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z',
				},
			},
		],
	})(t)
}
function p9(t) {
	return et({
		tag: 'svg',
		attr: { viewBox: '0 0 16 16', fill: 'currentColor' },
		child: [
			{
				tag: 'path',
				attr: {
					fillRule: 'evenodd',
					clipRule: 'evenodd',
					d: 'M10.012 2h.976v3.113l2.56-1.557.486.885L11.47 6l2.564 1.559-.485.885-2.561-1.557V10h-.976V6.887l-2.56 1.557-.486-.885L9.53 6 6.966 4.441l.485-.885 2.561 1.557V2zM2 10h4v4H2v-4z',
				},
			},
		],
	})(t)
}
function h9() {
	return se('svg', {
		width: '92',
		viewBox: '0 0 128 128',
		children: [
			k('path', { fill: 'transparent', d: 'M22.67 47h99.67v73.67H22.67z' }),
			k('path', {
				'data-name': 'original',
				fill: 'var(--tertiary-fg-light)',
				d: 'M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z',
			}),
		],
	})
}
function g9() {
	return k(m9, {
		children: se(v9, {
			children: [
				se('p', {
					children: [
						k('span', { className: 'en', children: "I'm fond of " }),
						k('span', { className: 'fr', children: "J'aime" }),
					],
				}),
				k(h9, {}),
				k(K0, { className: 'large' }),
				se('div', {
					className: 'sc',
					children: [
						k('p', { children: 'styled' }),
						k(Z0, { className: 'large' }),
						k('p', { children: 'components' }),
					],
				}),
				se('p', {
					children: [
						k('span', { className: 'en', children: 'I often use ' }),
						k('span', { className: 'fr', children: "J'utilize souvent" }),
					],
				}),
				k(S3, { className: 'medium' }),
				k(Q0, { className: 'medium' }),
				k(X0, { className: 'medium' }),
				k(d9, { className: 'medium' }),
				se('p', {
					children: [
						k('span', { className: 'en', children: 'I work with ' }),
						k('span', { className: 'fr', children: 'Je connais' }),
					],
				}),
				k(_3, { className: 'small' }),
				k(C3, { className: 'small' }),
				k(G0, { className: 'small' }),
				k(w3, { className: 'small' }),
				k(y3, { className: 'small' }),
				k(E3, { className: 'small' }),
				k(x3, { className: 'small' }),
				k(p9, { className: 'small' }),
			],
		}),
	})
}
const m9 = ge.div`
	/* border: 1px solid red; */
	width: 400px;
	height: 400px;
	grid-row: 1;
	grid-column: 2;
`,
	v9 = ge.div`
	/* margin-left: 520px; */
	height: 100%;
	/* border: 1px solid orange; */
	text-align: center;
	padding-top: 35px;

	& * {
		margin: 4px;
	}

	p {
		font-size: var(--h5);
	}

	.fr {
		color: var(--secondary-fg-light);
	}

	.sc {
		display: inline-block;
		flex-direction: column;
		position: relative;
		bottom: 10px;
		p {
			margin: -28px 0px;
			color: var(--tertiary-fg-light);
			font-size: var(--h6);
		}
	}

	.small,
	.medium,
	.large {
		color: var(--tertiary-fg-light);
	}

	.small {
		font-size: 1.827rem;
	}

	.medium {
		font-size: 3.998rem;
	}

	.large {
		font-size: 5.653rem;
	}
`
function y9() {
	return se(_9, { children: [k('img', { src: r3 }), k(w9, {})] })
}
const _9 = ge.div`
	width: 100vw;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;

	img {
		height: 100vh;
		position: fixed;
		top: 0;
		left: 13px;
		filter: brightness(85%);
		@media only screen and (max-width: 920px) {
			left: -270px;
		}
	}
`,
	w9 = ge.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	filter: contrast(300%);
	background: rgb(0, 3, 197)
		url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
	background-blend-mode: difference;
	opacity: 0.1;
	pointer-events: none;
`
Os.registerPlugin(ue)
function x9() {
	const t = window.matchMedia('(min-width: 759px)').matches,
		e = $.exports.useRef(),
		n = $.exports.useRef(),
		r = $.exports.useRef(),
		i = $.exports.useRef(),
		o = $.exports.useRef(),
		l = $.exports.useRef(),
		s = $.exports.useRef(),
		a = $.exports.useRef(),
		u = $.exports.useRef(),
		c = $.exports.useRef(),
		d = $.exports.useRef(),
		f = $.exports.useRef(),
		p = $.exports.useRef(),
		v = $.exports.useRef(),
		g = $.exports.useRef(),
		w = $.exports.useRef(),
		m = $.exports.useRef(),
		h = $.exports.useRef(),
		y = $.exports.useRef(),
		_ = $.exports.useRef(),
		S = $.exports.useRef(),
		z = $.exports.useRef(),
		C = $.exports.useRef(),
		P = $.exports.useRef()
	return (
		$.exports.useEffect(() => {
			Os.timeline({
				defaults: { ease: 'none' },
				scrollTrigger: {
					trigger: e.current,
					start: 'top',
					end: '+=7000',
					id: 'fg',
					scrub: !0,
				},
			})
				.to(r.current, { top: 0 }, 'start')
				.to(o.current, { opacity: 0, visibility: 'hidden' }, '<')
				.to(i.current, { opacity: 0 }, '<')
				.to(a.current, { opacity: 1 }, 'name')
				.to(m.current, { opacity: 1 }, '<')
				.to(u.current, { opacity: 1 }, 'title')
				.to(h.current, { opacity: 1 }, '<')
				.fromTo(
					c.current,
					{ opacity: 0, rotation: -90 },
					{ opacity: t ? 1 : 0.6, rotation: 0, duration: 1, delay: 0.1 },
					'logo'
				)
				.fromTo(
					y.current,
					{ opacity: 0, rotation: -90 },
					{ opacity: t ? 1 : 0.6, rotation: 0, duration: 1, delay: 0.1 },
					'<'
				)
				.to(d.current, { opacity: 1, delay: 8 }, 'listA')
				.to(_.current, { opacity: 1 }, '<')
				.to(f.current, { opacity: 1 }, 'listB')
				.to(S.current, { opacity: 1 }, '<')
				.to(p.current, { opacity: 1 }, 'listC')
				.to(z.current, { opacity: 1 }, '<')
				.to(v.current, { opacity: 1 }, 'listD')
				.to(C.current, { opacity: 1 }, '<')
				.to(g.current, { opacity: 1 }, 'listE')
				.to(P.current, { opacity: 1 }, '<')
				.to(
					w.current,
					{ opacity: 0, top: 100, duration: 2, delay: 4 },
					'transition'
				)
				.to(
					s.current,
					{ opacity: 0, top: 100, duration: 2, delay: 4 },
					'transition'
				)
				.fromTo(
					r.current,
					{ top: 0, right: 0 },
					{ top: t ? 150 : 0, right: t ? 200 : 0, duration: 2, delay: 4 },
					'transition'
				)
				.fromTo(
					l.current,
					{
						opacity: 0,
						top: t ? 200 : 500,
						right: t ? 40 : '',
						gridColumn: t ? '' : '1 / span 2',
						alignSelf: t ? '' : 'center',
					},
					{
						opacity: 1,
						top: t ? 140 : 280,
						gridColumn: t ? '' : '1 / span 2',
						alignSelf: t ? '' : 'center',
						duration: 2,
						delay: 4,
					},
					'transition'
				)
				.to(l.current, { opacity: 0, delay: 8 })
				.to(
					r.current,
					{ top: 0, right: 0, border: '2px solid white', duration: 2 },
					'end'
				)
				.to(n.current, { opacity: 1, duration: 2 }, 'end')
				.to(o.current, { opacity: 1, visibility: 'visible' })
		}, []),
		se(S9, {
			children: [
				t ? k(e7, {}) : k(y9, {}),
				se(k9, {
					ref: e,
					children: [
						k(C9, { ref: r, src: '/popnobg.png', className: '' }),
						k(E9, { ref: o, children: k(a9, {}) }),
						k(z9, { ref: l, children: k(g9, {}) }),
						se(P9, {
							ref: s,
							className: t ? null : 'mobile-view',
							children: [
								k(fh, {
									ref: a,
									className: t ? 'h1 en' : 'h2 en mobile',
									children: 'Michael Wagner',
								}),
								k(dh, {
									ref: u,
									className: t ? 'h1 en' : 'h2 en mobile',
									children: 'Full Stack Developer',
								}),
								k('p', {
									ref: d,
									className: 'h2 list',
									children: '\u22C5Musician',
								}),
								k('p', {
									ref: f,
									className: 'h2 list',
									children: '\u22C5Curious Learner',
								}),
								k('p', {
									ref: p,
									className: 'h2 list',
									children: '\u22C5Fitness Enthusiast',
								}),
								k('p', {
									ref: v,
									className: 'h2 list',
									children: '\u22C5Non-Fiction Fan',
								}),
								k('p', {
									ref: g,
									className: 'h2 list',
									children: '\u22C5Introvert',
								}),
								k(O9, {
									ref: c,
									className: t ? 'mtl' : 'mtl mobile-expo',
									src: '/exponobg5.png',
								}),
							],
						}),
						se(T9, {
							ref: w,
							className: t ? null : 'mobile-view',
							children: [
								k(fh, {
									ref: m,
									className: t ? 'h1 fr' : 'h2 fr mobile',
									children: 'Michael Wagner',
								}),
								k(dh, {
									ref: h,
									className: t ? 'h1 fr' : 'h2 fr mobile',
									children: 'D\xE9veloppeur',
								}),
								k('p', {
									ref: _,
									className: 'h2 list',
									children: '\u22C5Musicien',
								}),
								k('p', {
									ref: S,
									className: 'h2 list',
									children: '\u22C5Apprenant Curieux',
								}),
								k('p', {
									ref: z,
									className: 'h2 list',
									children: '\u22C5Fan de Fitness',
								}),
								k('p', {
									ref: C,
									className: 'h2 list',
									children: '\u22C5Lecteur de Non-Fiction',
								}),
								k('p', {
									ref: P,
									className: 'h2 list',
									children: '\u22C5Introverti',
								}),
								k(R9, {
									ref: y,
									className: t ? 'mtl' : 'mtl mobile-mtl',
									src: '/mtlnobg.png',
								}),
							],
						}),
					],
				}),
				k(N9, { ref: n }),
				se(M9, {
					ref: i,
					children: [
						k('img', { src: 'metronobg.png' }),
						k('span', { children: 'Scroll Gently' }),
						k('div', {}),
						k('span', { children: 'Scrollez Doucement' }),
						k('img', { src: 'metronobg.png' }),
					],
				}),
			],
		})
	)
}
const S9 = ge.div`
	height: 8000px;
`,
	k9 = ge.section`
	position: fixed;
	top: 0;
	left: 0;
	padding: 50px auto;
	width: 100vw;
	height: 100vh;
	display: grid;
	place-content: center;
	color: white;
	z-index: 2;

	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;

	& * {
		justify-self: center;
		position: relative;
	}

	.list {
		opacity: 0;
		margin-top: -20px;
	}

	@media only screen and (max-width: 920px) {
		grid-template-rows: 1fr 1fr 1fr;
		.list {
			display: none;
		}
	}

	@media only screen and (max-width: 499px) {
		margin-top: -60px;
	}
`,
	C9 = ge.img`
	height: 200px;
	width: 200px;
	z-index: 10;
	object-fit: cover;
	border-radius: 50%;
	border: 4px dotted var(--primary-fg);
	justify-self: center;
	align-self: center;
	grid-row: 1;
	grid-column: 1 / span 2;

	position: relative;
`,
	E9 = ge.div`
	grid-column: 1 / span 2;
	grid-row: 2;
	margin-top: -60px;
	display: grid;
	justify-content: center;
`,
	z9 = ge.div`
	width: 400px;
	height: 400px;
	grid-row: 1;
	grid-column: 2;
	opacity: 0;
`,
	P9 = ge.div`
	position: relative;
	top: -40px;
	grid-row: 2;
	grid-column: 1;

	@media only screen and (max-width: 920px) {
		grid-row: 2;
		grid-column: 1 / span 2;
		justify-self: center;
	}

	&.mobile-view {
		grid-row: 2;
		grid-column: 1 / span 2;
		justify-self: center;

		p {
			display: none;
		}
	}
`,
	T9 = ge.div`
	position: relative;
	top: -40px;
	grid-row: 2;
	grid-column: 2;

	@media only screen and (max-width: 920px) {
		grid-row: 3;
		grid-column: 1 / span 2;
		justify-self: center;
		right: 45px;
		margin-top: -40px;
	}

	&.mobile-view {
		grid-row: 3;
		grid-column: 1 / span 2;
		justify-self: center;
		margin-top: -80px;
		margin-left: 10px;

		p {
			display: none;
		}
	}
`,
	fh = ge.h1`
	position: relative;
	opacity: 0;

	&::before {
		content: 'Hello, my name is';
		font-size: var(--h4);
		color: var(--tertiary-fg-light);
		position: absolute;
		bottom: 50px;
		left: 2px;
	}

	&.mobile::before {
		bottom: 40px;
	}

	&.fr::before {
		content: 'Salut, mon nom est';
		color: var(--secondary-fg-light);
	}
`,
	dh = ge.h2`
	position: relative;
	opacity: 0;

	&::before {
		content: 'I am a Montréal-based';
		font-size: var(--h4);
		color: var(--tertiary-fg-light);
		position: absolute;
		bottom: 50px;
	}

	&.mobile::before {
		bottom: 40px;
	}

	&.fr::before {
		content: 'Je suis un';
		color: var(--secondary-fg-light);
	}
`,
	R9 = ge.img`
	width: 180px;
	position: absolute;
	top: -18px;
	left: 247px;
	z-index: -1;
	opacity: 0.7;

	&.mobile-mtl {
		width: 250px;
		left: 0;
		top: -85px;
	}
`,
	O9 = ge.img`
	width: 200px;
	position: absolute;
	top: -29px;
	left: 247px;
	z-index: -1;

	&.mobile-expo {
		width: 250px;
		left: 160px;
		top: -85px;
	}
`,
	M9 = ge.div`
	width: 100%;
	height: 50px;
	position: fixed;
	bottom: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;

	div {
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	img {
		width: 27px;
		height: 27px;
		opacity: 0.8;
		margin: 10px;
	}

	span {
		font-size: var(--p);
	}
`,
	N9 = ge.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	opacity: 0;
	z-index: 0;
	background-color: black;
	pointer-events: none;
`
function z3() {
	return se(L9, {
		children: [
			k(Ql, {
				to: '/',
				className: 'avatar',
				children: k(D9, { src: '/popnobg.png' }),
			}),
			k(Ql, {
				to: '/portfolio',
				className: 'internal',
				children: k('span', { className: 'en', children: 'Selected Works' }),
			}),
			k(Ql, {
				to: '/about',
				className: 'internal',
				children: k('span', { className: 'en', children: 'About me' }),
			}),
			k('div', { className: 'spacer' }),
			k('a', {
				href: 'https://www.linkedin.com/in/michael-wagner-9339881a0/',
				children: k(u3, { className: 'icon' }),
			}),
			k('a', {
				href: 'https://github.com/MichaelWagnr',
				children: k(a3, { className: 'icon' }),
			}),
			k('a', {
				href: './MichaelWagner_CV_EN.pdf',
				target: '_blank',
				type: 'application/pdf',
				rel: 'alternate',
				media: 'print',
				children: k(s3, { className: 'icon' }),
			}),
			k('a', {
				href: 'mailto:michaelwagner780@gmail.com?subject = Portfolio Contact: ',
				children: k(c3, { className: 'icon' }),
			}),
		],
	})
}
const L9 = ge.div`
	width: 100%;
	height: 70px;
	display: flex;
	z-index: 1;
	position: fixed;
	background-color: var(--primary-bg-light);
	align-items: center;
	justify-content: end;
	padding: 0px 15px;
	gap: 10px;
	top: 0;
	left: 0;
	border-bottom: 1px solid var(--primary-bg-dark);

	.spacer {
		flex: 1;
	}

	a {
		&:not(.avatar) {
			color: var(--primary-fg-light);
			border-radius: 50%;
			border: 2px dotted var(--primary-fg);
			padding: 5px 8.5px;
		}

		&:hover {
			cursor: pointer;
			border-color: var(--secondary-fg-light);
			color: var(--secondary-fg);
			* {
				color: var(--secondary-fg);
				path {
					stroke: var(--secondary-fg);
				}
			}
		}
	}

	a.internal {
		border: 1px solid var(--primary-fg);
		padding: 2px 10px;
		border-radius: 5px;
		display: block;
		text-decoration: none;
		font-size: var(--p);

		&:hover {
			border: 1px solid var(--secondary-fg-light);
		}
	}

	.icon {
		font-size: 1.6rem;
		position: relative;
		top: 3px;
		color: var(--primary-fg-light);
		path {
			stroke: var(--primary-fg-light);
			pointer-events: none;
		}
	}

	.fr {
		color: var(--secondary-fg-light);
	}
`,
	D9 = ge.img`
	height: 50px;
	width: 50px;
	object-fit: cover;
	border-radius: 50%;
	border: 2px dotted var(--primary-fg);
	position: relative;
	top: 4px;
	transition: transform 0.5s;

	&:hover {
		border-color: var(--secondary-fg-light);
		transform: scale(1.04);
	}
`
function A9({
	title: t,
	tech: e,
	desc: n,
	lesson: r,
	videoUrl: i,
	githubUrl: o,
	projectUrl: l,
	imgSrc: s,
}) {
	const a = {
		SiTypescript: k(f9, {}),
		SiJavascript: k(S3, {}),
		SiCss3: k(y3, {}),
		SiHtml5: k(w3, {}),
		SiStyledcomponents: k(Z0, {}),
		SiMongodb: k(Q0, {}),
		SiExpress: k(X0, {}),
		SiGit: k(_3, {}),
		SiFigma: k(G0, {}),
		SiYarn: k(E3, {}),
		SiVisualstudiocode: k(C3, {}),
		SiIterm2: k(x3, {}),
		SiReact: k(K0, {}),
		SiNodedotjs: k(k3, {}),
		SiGreensock: k(c9, {}),
	}
	return se(I9, {
		imgSrc: s,
		children: [
			se(j9, {
				children: [
					k('p', { className: 'h3', children: t }),
					k('p', { className: 'h6 tech-used', children: 'Technologies used:' }),
					k('div', { className: 'icons', children: e.map((u) => a[u]) }),
				],
			}),
			se(F9, {
				className: 'desc',
				children: [
					k('p', { className: 'heading', children: 'Description:' }),
					k('p', { children: n }),
					k('p', {
						className: 'heading',
						children: 'What I learned building this:',
					}),
					k('p', { children: r }),
				],
			}),
			se($9, {
				children: [
					i && k('a', { href: i, children: 'Video' }),
					o && k('a', { href: o, children: 'GitHub' }),
					l && k('a', { href: l, children: 'View' }),
				],
			}),
		],
	})
}
const I9 = ge.div`
	position: relative;
	width: 300px;
	height: 500px;
	border: 1px solid var(--secondary-fg);
	border-radius: 10px;
	overflow: hidden;
	transition: all 1s;

	&:hover {
		transform: scale(1.05);

		a {
			border: 1px solid var(--tertiary-fg-light);
			color: var(--tertiary-fg-light);
		}

		.desc {
			background-image: ${({ imgSrc: t }) => `url('${t}')`};
			background-size: cover;
			background-repeat: no-repeat;
			background-position-x: center;
			background-position-y: center;

			p {
				visibility: hidden;
			}
		}
	}
`,
	j9 = ge.div`
	height: 100px;
	background-color: var(--primary-bg-dark);
	color: var(--secondary-fg);
	text-align: center;

	.tech-used {
		font-style: italic;
	}

	.icons {
		font-size: 1.4rem;

		& * {
			margin: 0px 4px;
		}
	}
`,
	F9 = ge.div`
	padding: 3px 15px;
	/* margin-top: 5px; */
	height: 400px;

	.heading {
		margin: 3px 0;
		font-weight: lighter;
	}
`,
	$9 = ge.div`
	position: absolute;
	bottom: 13px;
	width: 100%;
	height: 50px;
	display: flex;
	gap: 10px;
	justify-content: center;
	a {
		width: 50px;
		height: 50px;
		border: 1px solid var(--secondary-fg-dark);
		color: var(--secondary-fg-dark);
		border-radius: 50%;
		display: grid;
		place-content: center;
		font-size: var(--h6);
		transition: transform 1s;
		text-decoration: none;

		&:hover {
			cursor: pointer;
			border: 1px solid var(--tertiary-fg-dark);
			color: var(--tertiary-fg-dark);
			transform: scale(1.05);
		}
	}
`,
	b9 = [
		{
			title: 'Portfolio',
			tech: ['SiReact', 'SiTypescript', 'SiGreensock', 'SiStyledcomponents'],
			desc: 'A personal portfolio website to showcase my projects.',
			lesson:
				'This was my first project that started with TypeScript. Previously I had converted existing projects from JS to TS. This is also my first project using the gsap animation library to create a scrolling animation.',
			videoUrl: '',
			githubUrl: '',
			projectUrl: '',
			imgSrc: '/portfolio.png',
		},
		{
			title: 'Royal Mint',
			tech: ['SiReact', 'SiJavascript', 'SiCss3'],
			desc: 'An app that tracks expenses shared between two people.',
			lesson:
				'This was my first attempt at building a React application. This is also the beginning of a personal style leaning into the minimal color schemes/aesthetics of code text editors.',
			videoUrl: '',
			githubUrl: 'https://github.com/MichaelWagnr/shared-expense-app',
			projectUrl: 'https://michaelwagnr.github.io/shared-expense-app/',
			imgSrc: '/royalmint.png',
		},
	]
function B9() {
	return se(U9, {
		children: [
			se(V9, {
				children: [
					k('p', { className: 'h3', children: 'Patch Diver' }),
					k('p', { className: 'h6 tech-used', children: 'Technologies used:' }),
					se('div', {
						className: 'icons',
						children: [
							k(Q0, {}),
							k(X0, {}),
							k(K0, {}),
							k(k3, {}),
							k(Z0, {}),
							k(G0, {}),
						],
					}),
				],
			}),
			se(H9, {
				children: [
					k('img', {
						src: '/patchdiverbrowser.png',
						className: 'browser-view',
					}),
					se('div', {
						className: 'info',
						children: [
							k('p', { className: 'heading', children: 'Description:' }),
							k('p', {
								children:
									'Patch Diver is an online patch editor for hardware synthesizers. With the ability to load, save, share and browse sounds.',
							}),
							k('p', { className: 'heading', children: 'Background:' }),
							k('p', {
								children:
									"In the mid 1980s, with the success of the Yamaha DX7, a number of synthesizer manufacturers turned to removing sliders and encoders on the panels of their synthesizers in favor of a digital screen and a number of button combinations to navigate menus. These synthesizers are notoriously tedius to program and are often quite under-valued on the used market. Sounds are typically patched with sysex MIDI messages, and the conventional method to upload these sounds can entail over-writing any personally-saved sounds. If this wasn't intimidating enough, sysex messages are often presented as a wall of hexidecimal values.",
							}),
							k('p', {
								children:
									'Patch Diver is my way of creating what I wish existed for synthesizer enthusiasts. The MVP is compatible with the Yamaha DX100 but because of similarities between other Yamaha synthesizer models from the same period, it should hypothetically work with a number of models',
							}),
							k('p', { className: 'heading', children: 'Challenges:' }),
							k('p', {
								children: `One of the principle challenges of this project was working with the Web MIDI API and bridging the gap between old and modern tech. At one point I needed "the lowest 7 bits of the two's complement sum of all data bytes" for each patch, which required research outside the typical realm of JavaScript/React. This was also a massive springboard into the world of SVGs and I had a lot of fun building the graphical user interface and determining ways of targeting parts of the SVG with click events in order to emulate a software GUI.`,
							}),
							k('p', { className: 'heading', children: 'Future plans:' }),
							k('p', {
								children:
									'Patch Diver is the app I wish existed when I was starting to collect synthesizers. The next step for me will be to add support for additional models, manufacturers and to continue adding features to make it a more enjoyable user experience to edit and share sounds.',
							}),
						],
					}),
					se('div', {
						className: 'extra-details',
						children: [
							k('p', { className: 'heading', children: 'Links:' }),
							k('a', {
								href: 'https://github.com/MichaelWagnr/patchdiver',
								children: 'Github',
							}),
							k('br', {}),
							k('a', {
								href: 'https://vimeo.com/777719851',
								children: 'Vimeo',
							}),
						],
					}),
				],
			}),
		],
	})
}
const U9 = ge.div`
	width: 80%;
	margin: 100px auto 20px;
	border: 1px solid var(--secondary-fg);
	border-radius: 10px;
	overflow: hidden;
`,
	V9 = ge.div`
	height: 100px;
	background-color: var(--primary-bg-dark);
	color: var(--secondary-fg);
	text-align: center;

	.tech-used {
		font-style: italic;
	}

	.icons {
		font-size: 1.4rem;

		& * {
			margin: 0px 4px;
		}
	}
`,
	H9 = ge.div`
	padding: 20px;
	display: grid;
	gap: 20px;
	grid-template-columns: 4fr 2fr;
	grid-template-rows: max-content 1fr;

	p:not(.heading) {
		text-indent: 2ch;
	}

	a {
		color: var(--secondary-fg-light);
	}

	.heading {
		margin: 3px 0;
		font-weight: lighter;
	}

	.browser-view {
		grid-row: 1;
		grid-column: 1 / span 2;
		width: 100%;
		border-radius: 10px;
		box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
	}
`
function W9() {
	return se(q9, {
		children: [
			k(z3, {}),
			k(B9, {}),
			k('h2', {
				className: 'h3',
				style: { textAlign: 'center' },
				children: 'Additional projects',
			}),
			k(Y9, {
				children: b9.map((t) =>
					k(A9, {
						title: t.title,
						tech: t.tech,
						desc: t.desc,
						lesson: t.lesson,
						videoUrl: t.videoUrl,
						githubUrl: t.githubUrl,
						projectUrl: t.projectUrl,
						imgSrc: t.imgSrc,
					})
				),
			}),
		],
	})
}
const q9 = ge.div`
	width: 100vw;
	display: grid;
	justify-content: center;
	padding-bottom: 20px;
`,
	Y9 = ge.div`
	/* min-height: 100vh; */
	width: 100vw;
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	place-content: center;
`
function X9() {
	return se(G9, {
		children: [
			k(z3, {}),
			se(Q9, {
				children: [
					se('div', {
						className: 'left',
						children: ['Hacking Databases ', k('br', {}), ' 2017'],
					}),
					k('div', {
						className: 'center',
						children:
							'While working as a production manager for a food distributer, two Python developers were brought on to work on a replacement administrative panel. During this time, managers were given read-only database access and a handful of helpful queries to copy/paste. I spent a weekend watching SQL tutorials - inspired by our CEO who taught himself SQL - in order to better parse the raw data. I began writing client, order and inventory queries for other middle managers, later continuing my self-study with Python - the language our software was being rebuilt in.',
					}),
					se('div', {
						className: 'left',
						children: ['Sink or swim ', k('br', {}), ' 2020'],
					}),
					k('div', {
						className: 'center',
						children:
							'After relocating to Montreal, I shifted my focus towards Web Development. I studied from textbooks and online courses 2-3 hours per day while working full-time. I would often fit an extra hour of listening to Web Development-related podcasts during lunch breaks and long walks. Winter 2022, I obtained a Full Stack Web Development diploma through Concordia University. I had the fortune of committing to this program full-time, 50-60 hours per week, finishing extra-credit assignments as well as pursuing additional online course material on subjects not covered by the program.',
					}),
					k('div', { className: 'right' }),
					se('div', {
						className: 'left',
						children: ['Winning the internet ', k('br', {}), ' 1996'],
					}),
					k('div', {
						className: 'center',
						children:
							"I was a computer enthusiast from a very young age. Our first family computer ran an older operating system that would boot up to a black screen with green text and a shell prompt, where I would 'cd' through directories to find and play MSDOS Freeware games like Commander Keen. When I was a child, my father brought me to a Science and Technology exhibit at the University of Saskatchewan, where we entered a raffle to win an internet modem. We won the internet that summer and became the first family on our block to be online, during the days of Netscape and very slow connections. I watched the internet evolve to present day, on occasion making fan-pages with Geocities and AngelFire and catching glimpses of HTML.",
					}),
					k('div', { className: 'right' }),
					se('div', {
						className: 'left',
						children: ['Music: My secret weapon', k('br', {}), '2015'],
					}),
					k('div', {
						className: 'center',
						children:
							"I owe a lot to my musical background. As a guitarist of many years, I'm comfortable iterating over challenging material for hours at a time. I collect synthesizers and samplers. Each new piece of equipment comes with an extensive user's manual and I delight in researching each new aquisition, learning how it works and testing hypothesises as to how they can be combined together. I find myself in a similar creative mindset whenever I'm pages into library/framework documentation and contemplating how different tech can be woven together.",
					}),
					k('div', { className: 'right' }),
				],
			}),
		],
	})
}
const G9 = ge.div`
	width: 100vw;
	display: grid;
	justify-content: center;
`,
	Q9 = ge.div`
	width: 80%;
	height: fit-content;
	padding: 20px;
	margin: 100px auto 40px;
	border: 1px solid var(--secondary-fg);
	border-radius: 10px;

	display: grid;
	gap: 20px;
	grid-template-columns: 1fr 4fr 1fr;

	.left {
		font-weight: lighter;
		/* justify-self: end; */
		text-align: right;
		grid-column: 1;
	}

	.center {
		grid-column: 2;
	}

	.right {
		font-weight: lighter;
		grid-column: 3;
	}
`
function K9() {
	return k(q0, {
		children: se(t9, {
			children: [
				k(Da, { path: '/', element: k(x9, {}) }),
				k(Da, { path: '/portfolio', element: k(W9, {}) }),
				k(Da, { path: '/about', element: k(X9, {}) }),
			],
		}),
	})
}
const Z9 = bv`
:root {
  --primary-fg: hsl(228.67924528301887, 72.60273972602744%, 85.68627450980392%);
  --primary-fg-light: hsl(228.67924528301887, 72.60273972602744%, 95.68627450980392%);
  --primary-fg-lighter: hsl(228.67924528301887, 72.60273972602744%, 100%);
  --primary-fg-dark: hsl(228.67924528301887, 72.60273972602744%, 75.68627450980392%);

  --secondary-fg: hsl(220.8, 88.65248226950358%, 72.35294117647058%);  
  --secondary-fg-light: hsl(220.8, 88.65248226950358%, 82.35294117647058%);
  --secondary-fg-dark: hsl(220.8, 88.65248226950358%, 62.35294117647058%);  

  --tertiary-fg: hsl(22.451612903225808, 100%, 69.6078431372549%);  
  --tertiary-fg-light: hsl(22.451612903225808, 100%, 79.6078431372549%); 
  --tertiary-fg-dark: hsl(22.451612903225808, 100%, 59.6078431372549%);  

  --primary-bg: hsl(235, 18.75%, 12.549019607843137%);  
  --primary-bg-light: hsl(235, 18.75%, 22.549019607843137%);
  --primary-bg-dark: hsl(235, 18.75%, 2.549019607843137%); 

  --secondary-bg: ;
  --secondary-bg-light: ;
  --secondary-bg-dark: ;

  --tertiary-bg: ;  
  --tertiary-bg-light: ;
  --tertiary-bg-dark: ; 

  --h1: 3.052rem;  
  --h2: 2.441rem;
  --h3: 1.953rem;
  --h4: 1.563rem;
  --h5: 1.25rem;
  --p: 1rem;  
  --h6: 0.8rem;  
  --h7: 0.64rem;  
  --h8: 0.512rem;  
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// ADDITIONAL STYLES

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: var(--primary-fg);
  background: var(--primary-bg);
	height: 100vh;
	max-width: 1440px;
}

h1 {font-size: var(--h1);}
h2 {font-size: var(--h2);}
h3 {font-size: var(--h3);}
h4 {font-size: var(--h4);}
h5 {font-size: var(--h5);}
h6 {font-size: var(--h6);}
h7 {font-size: var(--h7);}
h8 {font-size: var(--h8);}
p {font-size: var(--p);}

.h1 {font-size: var(--h1);}
.h2 {font-size: var(--h2);}
.h3 {font-size: var(--h3);}
.h4 {font-size: var(--h4);}
.h5 {font-size: var(--h5);}
.h6 {font-size: var(--h6);}
.h7 {font-size: var(--h7);}
.h8 {font-size: var(--h8);}
.p {font-size: var(--p);}
`
function J9() {
	const { pathname: t } = Ls()
	return (
		$.exports.useEffect(() => {
			window.scrollTo(0, 0)
		}, [t]),
		null
	)
}
Xc.createRoot(document.getElementById('root')).render(
	k(q0, { children: se(l9, { children: [k(Z9, {}), k(J9, {}), k(K9, {})] }) })
)
