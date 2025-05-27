/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      56: (e, t, n) => {
        'use strict';
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      72: (e) => {
        'use strict';
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var u = e[s],
              c = r.base ? u[0] + r.base : u[0],
              l = i[c] || 0,
              f = ''.concat(c, ' ').concat(l);
            i[c] = l + 1;
            var p = n(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(d);
            else {
              var h = o(d, r);
              (r.byIndex = s),
                t.splice(s, 0, { identifier: f, updater: h, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              t[s].references--;
            }
            for (var u = r(e, o), c = 0; c < i.length; c++) {
              var l = n(i[c]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = u;
          };
        };
      },
      113: (e) => {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      159: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => s });
        var r = n(978),
          o = n.n(r),
          i = n(267),
          a = n.n(i)()(o());
        a.push([
          e.id,
          "* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    overflow-x: hidden;\n    width: 100%;\n    max-width: 100%;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    margin: 0;\n    margin-bottom: 20px;\n    padding: 0;\n    background-color: #121212;\n    color: #ffffff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\napp-bar {\n    width: 100%;\n    background: #ff4081;\n    color: white;\n    text-align: center;\n    padding: 15px;\n    font-size: 20px;\n    font-weight: bold;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr;\n    max-width: 800px;\n    width: 100%;\n    margin-top: 20px;\n    gap: 20px;\n}\n\nmain h2 {\n    font-weight: bold;\n    text-align: center;\n}\n\n.note-input-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 15px;\n    box-shadow: 0px 4px 10px rgba(255, 105, 180, 0.3);\n    border-radius: 10px;\n}\n\n.note-input-title, \n.note-input-body {\n    width: 100%;\n    padding: 12px;\n    font-size: 16px;\n    border-radius: 5px;\n    background: #2a2a2a;\n    border: 2px solid #ff69b4;\n    color: white;\n    margin-bottom: 10px;\n    min-width: 750px;\n}\n\n.note-input-body {\n    height: 80px;\n    resize: none;\n}\n\n.note-input-button {\n    width: 100%;\n    padding: 12px;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    background-color: #ff4081;\n    color: white;\n    transition: 0.3s;\n}\n\n.note-input-button:hover {\n    background-color: #d50000;\n}\n\n.note-error {\n    color: red;\n    font-size: 14px;\n    text-align: center;\n    display: none;\n}\n\n.notes-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n    width: 100%;\n    max-width: 800px;\n    padding: 10px;\n}\n\n.note-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border: 1px solid #ff4081;\n    padding: 15px;\n    border-radius: 10px;\n    background-color: #1e1e1e;\n    transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.note-card:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 6px 12px rgba(255, 64, 129, 0.4);\n}\n\n.note-card h3 {\n    margin: 0;\n    font-size: 1.2em;\n}\n\n.note-card small {\n    color: gray;\n}\n\n.note-item-action {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n}\n\n.delete-button, .archive-button {\n    flex: 1;\n    padding: 10px;\n    font-size: 14px;\n    border-radius: 6px;\n    color: white;\n    border: none;\n    cursor: pointer;\n    text-align: center;\n    transition: 0.3s;\n}\n\n.delete-button {\n    background-color: #ff1744;\n    margin-right: 5px;\n}\n\n.delete-button:hover {\n    background-color: #d50000;\n}\n\n.archive-button {\n    background-color: #7c4dff;\n}\n\n.archive-button:hover {\n    background-color: #6200ea;\n}\n\n.notes-container:has(.note-card:only-child) {\n    display: flex;\n    justify-content: center;\n}\n\n@media (max-width: 600px) {\n    .note-input-container {\n        max-width: 95%;\n        padding: 12px;\n    }\n\n    .note-input-title, \n    .note-input-body {\n        width: 100%;\n        min-width: unset;\n    }\n\n    .notes-container {\n        grid-template-columns: 1fr;\n    }\n\n    .note-card {\n        max-width: 95%;\n        margin: auto;\n    }\n}\n\n@media (min-width: 601px) and (max-width: 1024px) {\n    .notes-container {\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    }\n}\n\n@media (min-width: 1025px) {\n    .notes-container {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n",
          '',
        ]);
        const s = a;
      },
      267: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {',
                    )),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, r, o, i) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var u = this[s][0];
                  null != u && (a[u] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var l = [].concat(e[c]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = o))
                      : (l[4] = ''.concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      511: function (e, t, n) {
        var r;
        function o(e) {
          return (
            (o =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            o(e)
          );
        }
        (e = n.nmd(e)),
          (function (t, n) {
            'use strict';
            'object' === o(e) && 'object' === o(e.exports)
              ? (e.exports = t.document
                  ? n(t, !0)
                  : function (e) {
                      if (!e.document)
                        throw new Error(
                          'jQuery requires a window with a document',
                        );
                      return n(e);
                    })
              : n(t);
          })('undefined' != typeof window ? window : this, function (n, i) {
            'use strict';
            var a = [],
              s = Object.getPrototypeOf,
              u = a.slice,
              c = a.flat
                ? function (e) {
                    return a.flat.call(e);
                  }
                : function (e) {
                    return a.concat.apply([], e);
                  },
              l = a.push,
              f = a.indexOf,
              p = {},
              d = p.toString,
              h = p.hasOwnProperty,
              y = h.toString,
              v = y.call(Object),
              g = {},
              m = function (e) {
                return (
                  'function' == typeof e &&
                  'number' != typeof e.nodeType &&
                  'function' != typeof e.item
                );
              },
              b = function (e) {
                return null != e && e === e.window;
              },
              x = n.document,
              w = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function T(e, t, n) {
              var r,
                o,
                i = (n = n || x).createElement('script');
              if (((i.text = e), t))
                for (r in w)
                  (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    i.setAttribute(r, o);
              n.head.appendChild(i).parentNode.removeChild(i);
            }
            function S(e) {
              return null == e
                ? e + ''
                : 'object' === o(e) || 'function' == typeof e
                  ? p[d.call(e)] || 'object'
                  : o(e);
            }
            var E = '3.7.1',
              k = /HTML$/i,
              j = function (e, t) {
                return new j.fn.init(e, t);
              };
            function C(e) {
              var t = !!e && 'length' in e && e.length,
                n = S(e);
              return (
                !m(e) &&
                !b(e) &&
                ('array' === n ||
                  0 === t ||
                  ('number' == typeof t && t > 0 && t - 1 in e))
              );
            }
            function A(e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            (j.fn = j.prototype =
              {
                jquery: E,
                constructor: j,
                length: 0,
                toArray: function () {
                  return u.call(this);
                },
                get: function (e) {
                  return null == e
                    ? u.call(this)
                    : e < 0
                      ? this[e + this.length]
                      : this[e];
                },
                pushStack: function (e) {
                  var t = j.merge(this.constructor(), e);
                  return (t.prevObject = this), t;
                },
                each: function (e) {
                  return j.each(this, e);
                },
                map: function (e) {
                  return this.pushStack(
                    j.map(this, function (t, n) {
                      return e.call(t, n, t);
                    }),
                  );
                },
                slice: function () {
                  return this.pushStack(u.apply(this, arguments));
                },
                first: function () {
                  return this.eq(0);
                },
                last: function () {
                  return this.eq(-1);
                },
                even: function () {
                  return this.pushStack(
                    j.grep(this, function (e, t) {
                      return (t + 1) % 2;
                    }),
                  );
                },
                odd: function () {
                  return this.pushStack(
                    j.grep(this, function (e, t) {
                      return t % 2;
                    }),
                  );
                },
                eq: function (e) {
                  var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                  return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                },
                end: function () {
                  return this.prevObject || this.constructor();
                },
                push: l,
                sort: a.sort,
                splice: a.splice,
              }),
              (j.extend = j.fn.extend =
                function () {
                  var e,
                    t,
                    n,
                    r,
                    i,
                    a,
                    s = arguments[0] || {},
                    u = 1,
                    c = arguments.length,
                    l = !1;
                  for (
                    'boolean' == typeof s &&
                      ((l = s), (s = arguments[u] || {}), u++),
                      'object' === o(s) || m(s) || (s = {}),
                      u === c && ((s = this), u--);
                    u < c;
                    u++
                  )
                    if (null != (e = arguments[u]))
                      for (t in e)
                        (r = e[t]),
                          '__proto__' !== t &&
                            s !== r &&
                            (l &&
                            r &&
                            (j.isPlainObject(r) || (i = Array.isArray(r)))
                              ? ((n = s[t]),
                                (a =
                                  i && !Array.isArray(n)
                                    ? []
                                    : i || j.isPlainObject(n)
                                      ? n
                                      : {}),
                                (i = !1),
                                (s[t] = j.extend(l, a, r)))
                              : void 0 !== r && (s[t] = r));
                  return s;
                }),
              j.extend({
                expando: 'jQuery' + (E + Math.random()).replace(/\D/g, ''),
                isReady: !0,
                error: function (e) {
                  throw new Error(e);
                },
                noop: function () {},
                isPlainObject: function (e) {
                  var t, n;
                  return !(
                    !e ||
                    '[object Object]' !== d.call(e) ||
                    ((t = s(e)) &&
                      ('function' !=
                        typeof (n =
                          h.call(t, 'constructor') && t.constructor) ||
                        y.call(n) !== v))
                  );
                },
                isEmptyObject: function (e) {
                  var t;
                  for (t in e) return !1;
                  return !0;
                },
                globalEval: function (e, t, n) {
                  T(e, { nonce: t && t.nonce }, n);
                },
                each: function (e, t) {
                  var n,
                    r = 0;
                  if (C(e))
                    for (
                      n = e.length;
                      r < n && !1 !== t.call(e[r], r, e[r]);
                      r++
                    );
                  else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                  return e;
                },
                text: function (e) {
                  var t,
                    n = '',
                    r = 0,
                    o = e.nodeType;
                  if (!o) for (; (t = e[r++]); ) n += j.text(t);
                  return 1 === o || 11 === o
                    ? e.textContent
                    : 9 === o
                      ? e.documentElement.textContent
                      : 3 === o || 4 === o
                        ? e.nodeValue
                        : n;
                },
                makeArray: function (e, t) {
                  var n = t || [];
                  return (
                    null != e &&
                      (C(Object(e))
                        ? j.merge(n, 'string' == typeof e ? [e] : e)
                        : l.call(n, e)),
                    n
                  );
                },
                inArray: function (e, t, n) {
                  return null == t ? -1 : f.call(t, e, n);
                },
                isXMLDoc: function (e) {
                  var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                  return !k.test(t || (n && n.nodeName) || 'HTML');
                },
                merge: function (e, t) {
                  for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                    e[o++] = t[r];
                  return (e.length = o), e;
                },
                grep: function (e, t, n) {
                  for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                    !t(e[o], o) !== a && r.push(e[o]);
                  return r;
                },
                map: function (e, t, n) {
                  var r,
                    o,
                    i = 0,
                    a = [];
                  if (C(e))
                    for (r = e.length; i < r; i++)
                      null != (o = t(e[i], i, n)) && a.push(o);
                  else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                  return c(a);
                },
                guid: 1,
                support: g,
              }),
              'function' == typeof Symbol &&
                (j.fn[Symbol.iterator] = a[Symbol.iterator]),
              j.each(
                'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                  ' ',
                ),
                function (e, t) {
                  p['[object ' + t + ']'] = t.toLowerCase();
                },
              );
            var D = a.pop,
              O = a.sort,
              L = a.splice,
              N = '[\\x20\\t\\r\\n\\f]',
              P = new RegExp(
                '^' + N + '+|((?:^|[^\\\\])(?:\\\\.)*)' + N + '+$',
                'g',
              );
            j.contains = function (e, t) {
              var n = t && t.parentNode;
              return (
                e === n ||
                !(
                  !n ||
                  1 !== n.nodeType ||
                  !(e.contains
                    ? e.contains(n)
                    : e.compareDocumentPosition &&
                      16 & e.compareDocumentPosition(n))
                )
              );
            };
            var q = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
            function H(e, t) {
              return t
                ? '\0' === e
                  ? '�'
                  : e.slice(0, -1) +
                    '\\' +
                    e.charCodeAt(e.length - 1).toString(16) +
                    ' '
                : '\\' + e;
            }
            j.escapeSelector = function (e) {
              return (e + '').replace(q, H);
            };
            var M = x,
              R = l;
            !(function () {
              var e,
                t,
                r,
                o,
                i,
                s,
                c,
                l,
                p,
                d,
                y = R,
                v = j.expando,
                m = 0,
                b = 0,
                x = ee(),
                w = ee(),
                T = ee(),
                S = ee(),
                E = function (e, t) {
                  return e === t && (i = !0), 0;
                },
                k =
                  'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                C =
                  '(?:\\\\[\\da-fA-F]{1,6}' +
                  N +
                  '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
                q =
                  '\\[' +
                  N +
                  '*(' +
                  C +
                  ')(?:' +
                  N +
                  '*([*^$|!~]?=)' +
                  N +
                  '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                  C +
                  '))|)' +
                  N +
                  '*\\]',
                H =
                  ':(' +
                  C +
                  ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                  q +
                  ')*)|.*)\\)|)',
                _ = new RegExp(N + '+', 'g'),
                I = new RegExp('^' + N + '*,' + N + '*'),
                F = new RegExp('^' + N + '*([>+~]|' + N + ')' + N + '*'),
                W = new RegExp(N + '|>'),
                B = new RegExp(H),
                $ = new RegExp('^' + C + '$'),
                z = {
                  ID: new RegExp('^#(' + C + ')'),
                  CLASS: new RegExp('^\\.(' + C + ')'),
                  TAG: new RegExp('^(' + C + '|[*])'),
                  ATTR: new RegExp('^' + q),
                  PSEUDO: new RegExp('^' + H),
                  CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                      N +
                      '*(even|odd|(([+-]|)(\\d*)n|)' +
                      N +
                      '*(?:([+-]|)' +
                      N +
                      '*(\\d+)|))' +
                      N +
                      '*\\)|)',
                    'i',
                  ),
                  bool: new RegExp('^(?:' + k + ')$', 'i'),
                  needsContext: new RegExp(
                    '^' +
                      N +
                      '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                      N +
                      '*((?:-\\d)?\\d*)' +
                      N +
                      '*\\)|)(?=[^-]|$)',
                    'i',
                  ),
                },
                U = /^(?:input|select|textarea|button)$/i,
                X = /^h\d$/i,
                G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /[+~]/,
                V = new RegExp(
                  '\\\\[\\da-fA-F]{1,6}' + N + '?|\\\\([^\\r\\n\\f])',
                  'g',
                ),
                Y = function (e, t) {
                  var n = '0x' + e.slice(1) - 65536;
                  return (
                    t ||
                    (n < 0
                      ? String.fromCharCode(n + 65536)
                      : String.fromCharCode(
                          (n >> 10) | 55296,
                          (1023 & n) | 56320,
                        ))
                  );
                },
                J = function () {
                  ue();
                },
                Q = pe(
                  function (e) {
                    return !0 === e.disabled && A(e, 'fieldset');
                  },
                  { dir: 'parentNode', next: 'legend' },
                );
              try {
                y.apply((a = u.call(M.childNodes)), M.childNodes),
                  a[M.childNodes.length].nodeType;
              } catch (e) {
                y = {
                  apply: function (e, t) {
                    R.apply(e, u.call(t));
                  },
                  call: function (e) {
                    R.apply(e, u.call(arguments, 1));
                  },
                };
              }
              function K(e, t, n, r) {
                var o,
                  i,
                  a,
                  u,
                  c,
                  f,
                  d,
                  h = t && t.ownerDocument,
                  m = t ? t.nodeType : 9;
                if (
                  ((n = n || []),
                  'string' != typeof e ||
                    !e ||
                    (1 !== m && 9 !== m && 11 !== m))
                )
                  return n;
                if (!r && (ue(t), (t = t || s), l)) {
                  if (11 !== m && (c = G.exec(e)))
                    if ((o = c[1])) {
                      if (9 === m) {
                        if (!(a = t.getElementById(o))) return n;
                        if (a.id === o) return y.call(n, a), n;
                      } else if (
                        h &&
                        (a = h.getElementById(o)) &&
                        K.contains(t, a) &&
                        a.id === o
                      )
                        return y.call(n, a), n;
                    } else {
                      if (c[2]) return y.apply(n, t.getElementsByTagName(e)), n;
                      if ((o = c[3]) && t.getElementsByClassName)
                        return y.apply(n, t.getElementsByClassName(o)), n;
                    }
                  if (!(S[e + ' '] || (p && p.test(e)))) {
                    if (
                      ((d = e), (h = t), 1 === m && (W.test(e) || F.test(e)))
                    ) {
                      for (
                        ((h = (Z.test(e) && se(t.parentNode)) || t) == t &&
                          g.scope) ||
                          ((u = t.getAttribute('id'))
                            ? (u = j.escapeSelector(u))
                            : t.setAttribute('id', (u = v))),
                          i = (f = le(e)).length;
                        i--;

                      )
                        f[i] = (u ? '#' + u : ':scope') + ' ' + fe(f[i]);
                      d = f.join(',');
                    }
                    try {
                      return y.apply(n, h.querySelectorAll(d)), n;
                    } catch (t) {
                      S(e, !0);
                    } finally {
                      u === v && t.removeAttribute('id');
                    }
                  }
                }
                return me(e.replace(P, '$1'), t, n, r);
              }
              function ee() {
                var e = [];
                return function n(r, o) {
                  return (
                    e.push(r + ' ') > t.cacheLength && delete n[e.shift()],
                    (n[r + ' '] = o)
                  );
                };
              }
              function te(e) {
                return (e[v] = !0), e;
              }
              function ne(e) {
                var t = s.createElement('fieldset');
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function re(e) {
                return function (t) {
                  return A(t, 'input') && t.type === e;
                };
              }
              function oe(e) {
                return function (t) {
                  return (A(t, 'input') || A(t, 'button')) && t.type === e;
                };
              }
              function ie(e) {
                return function (t) {
                  return 'form' in t
                    ? t.parentNode && !1 === t.disabled
                      ? 'label' in t
                        ? 'label' in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e ||
                          (t.isDisabled !== !e && Q(t) === e)
                      : t.disabled === e
                    : 'label' in t && t.disabled === e;
                };
              }
              function ae(e) {
                return te(function (t) {
                  return (
                    (t = +t),
                    te(function (n, r) {
                      for (var o, i = e([], n.length, t), a = i.length; a--; )
                        n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                    })
                  );
                });
              }
              function se(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              function ue(e) {
                var n,
                  r = e ? e.ownerDocument || e : M;
                return r != s && 9 === r.nodeType && r.documentElement
                  ? ((c = (s = r).documentElement),
                    (l = !j.isXMLDoc(s)),
                    (d =
                      c.matches ||
                      c.webkitMatchesSelector ||
                      c.msMatchesSelector),
                    c.msMatchesSelector &&
                      M != s &&
                      (n = s.defaultView) &&
                      n.top !== n &&
                      n.addEventListener('unload', J),
                    (g.getById = ne(function (e) {
                      return (
                        (c.appendChild(e).id = j.expando),
                        !s.getElementsByName ||
                          !s.getElementsByName(j.expando).length
                      );
                    })),
                    (g.disconnectedMatch = ne(function (e) {
                      return d.call(e, '*');
                    })),
                    (g.scope = ne(function () {
                      return s.querySelectorAll(':scope');
                    })),
                    (g.cssHas = ne(function () {
                      try {
                        return s.querySelector(':has(*,:jqfake)'), !1;
                      } catch (e) {
                        return !0;
                      }
                    })),
                    g.getById
                      ? ((t.filter.ID = function (e) {
                          var t = e.replace(V, Y);
                          return function (e) {
                            return e.getAttribute('id') === t;
                          };
                        }),
                        (t.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && l) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((t.filter.ID = function (e) {
                          var t = e.replace(V, Y);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode('id');
                            return n && n.value === t;
                          };
                        }),
                        (t.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && l) {
                            var n,
                              r,
                              o,
                              i = t.getElementById(e);
                            if (i) {
                              if (
                                (n = i.getAttributeNode('id')) &&
                                n.value === e
                              )
                                return [i];
                              for (
                                o = t.getElementsByName(e), r = 0;
                                (i = o[r++]);

                              )
                                if (
                                  (n = i.getAttributeNode('id')) &&
                                  n.value === e
                                )
                                  return [i];
                            }
                            return [];
                          }
                        })),
                    (t.find.TAG = function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : t.querySelectorAll(e);
                    }),
                    (t.find.CLASS = function (e, t) {
                      if (void 0 !== t.getElementsByClassName && l)
                        return t.getElementsByClassName(e);
                    }),
                    (p = []),
                    ne(function (e) {
                      var t;
                      (c.appendChild(e).innerHTML =
                        "<a id='" +
                        v +
                        "' href='' disabled='disabled'></a><select id='" +
                        v +
                        "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                        e.querySelectorAll('[selected]').length ||
                          p.push('\\[' + N + '*(?:value|' + k + ')'),
                        e.querySelectorAll('[id~=' + v + '-]').length ||
                          p.push('~='),
                        e.querySelectorAll('a#' + v + '+*').length ||
                          p.push('.#.+[+~]'),
                        e.querySelectorAll(':checked').length ||
                          p.push(':checked'),
                        (t = s.createElement('input')).setAttribute(
                          'type',
                          'hidden',
                        ),
                        e.appendChild(t).setAttribute('name', 'D'),
                        (c.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(':disabled').length &&
                          p.push(':enabled', ':disabled'),
                        (t = s.createElement('input')).setAttribute('name', ''),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          p.push(
                            '\\[' + N + '*name' + N + '*=' + N + '*(?:\'\'|"")',
                          );
                    }),
                    g.cssHas || p.push(':has'),
                    (p = p.length && new RegExp(p.join('|'))),
                    (E = function (e, t) {
                      if (e === t) return (i = !0), 0;
                      var n =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        n ||
                        (1 &
                          (n =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!g.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === s ||
                            (e.ownerDocument == M && K.contains(M, e))
                            ? -1
                            : t === s ||
                                (t.ownerDocument == M && K.contains(M, t))
                              ? 1
                              : o
                                ? f.call(o, e) - f.call(o, t)
                                : 0
                          : 4 & n
                            ? -1
                            : 1)
                      );
                    }),
                    s)
                  : s;
              }
              for (e in ((K.matches = function (e, t) {
                return K(e, null, null, t);
              }),
              (K.matchesSelector = function (e, t) {
                if ((ue(e), l && !S[t + ' '] && (!p || !p.test(t))))
                  try {
                    var n = d.call(e, t);
                    if (
                      n ||
                      g.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return n;
                  } catch (e) {
                    S(t, !0);
                  }
                return K(t, s, null, [e]).length > 0;
              }),
              (K.contains = function (e, t) {
                return (e.ownerDocument || e) != s && ue(e), j.contains(e, t);
              }),
              (K.attr = function (e, n) {
                (e.ownerDocument || e) != s && ue(e);
                var r = t.attrHandle[n.toLowerCase()],
                  o =
                    r && h.call(t.attrHandle, n.toLowerCase())
                      ? r(e, n, !l)
                      : void 0;
                return void 0 !== o ? o : e.getAttribute(n);
              }),
              (K.error = function (e) {
                throw new Error('Syntax error, unrecognized expression: ' + e);
              }),
              (j.uniqueSort = function (e) {
                var t,
                  n = [],
                  r = 0,
                  a = 0;
                if (
                  ((i = !g.sortStable),
                  (o = !g.sortStable && u.call(e, 0)),
                  O.call(e, E),
                  i)
                ) {
                  for (; (t = e[a++]); ) t === e[a] && (r = n.push(a));
                  for (; r--; ) L.call(e, n[r], 1);
                }
                return (o = null), e;
              }),
              (j.fn.uniqueSort = function () {
                return this.pushStack(j.uniqueSort(u.apply(this)));
              }),
              (t = j.expr =
                {
                  cacheLength: 50,
                  createPseudo: te,
                  match: z,
                  attrHandle: {},
                  find: {},
                  relative: {
                    '>': { dir: 'parentNode', first: !0 },
                    ' ': { dir: 'parentNode' },
                    '+': { dir: 'previousSibling', first: !0 },
                    '~': { dir: 'previousSibling' },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(V, Y)),
                        (e[3] = (e[3] || e[4] || e[5] || '').replace(V, Y)),
                        '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        'nth' === e[1].slice(0, 3)
                          ? (e[3] || K.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ('even' === e[3] || 'odd' === e[3]))),
                            (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                          : e[3] && K.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return z.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || '')
                            : n &&
                              B.test(n) &&
                              (t = le(n, !0)) &&
                              (t = n.indexOf(')', n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(V, Y).toLowerCase();
                      return '*' === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return A(e, t);
                          };
                    },
                    CLASS: function (e) {
                      var t = x[e + ' '];
                      return (
                        t ||
                        ((t = new RegExp(
                          '(^|' + N + ')' + e + '(' + N + '|$)',
                        )) &&
                          x(e, function (e) {
                            return t.test(
                              ('string' == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute &&
                                  e.getAttribute('class')) ||
                                '',
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (r) {
                        var o = K.attr(r, e);
                        return null == o
                          ? '!=' === t
                          : !t ||
                              ((o += ''),
                              '=' === t
                                ? o === n
                                : '!=' === t
                                  ? o !== n
                                  : '^=' === t
                                    ? n && 0 === o.indexOf(n)
                                    : '*=' === t
                                      ? n && o.indexOf(n) > -1
                                      : '$=' === t
                                        ? n && o.slice(-n.length) === n
                                        : '~=' === t
                                          ? (
                                              ' ' +
                                              o.replace(_, ' ') +
                                              ' '
                                            ).indexOf(n) > -1
                                          : '|=' === t &&
                                            (o === n ||
                                              o.slice(0, n.length + 1) ===
                                                n + '-'));
                      };
                    },
                    CHILD: function (e, t, n, r, o) {
                      var i = 'nth' !== e.slice(0, 3),
                        a = 'last' !== e.slice(-4),
                        s = 'of-type' === t;
                      return 1 === r && 0 === o
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, u) {
                            var c,
                              l,
                              f,
                              p,
                              d,
                              h = i !== a ? 'nextSibling' : 'previousSibling',
                              y = t.parentNode,
                              g = s && t.nodeName.toLowerCase(),
                              b = !u && !s,
                              x = !1;
                            if (y) {
                              if (i) {
                                for (; h; ) {
                                  for (f = t; (f = f[h]); )
                                    if (s ? A(f, g) : 1 === f.nodeType)
                                      return !1;
                                  d = h = 'only' === e && !d && 'nextSibling';
                                }
                                return !0;
                              }
                              if (
                                ((d = [a ? y.firstChild : y.lastChild]), a && b)
                              ) {
                                for (
                                  x =
                                    (p =
                                      (c =
                                        (l = y[v] || (y[v] = {}))[e] ||
                                        [])[0] === m && c[1]) && c[2],
                                    f = p && y.childNodes[p];
                                  (f =
                                    (++p && f && f[h]) ||
                                    (x = p = 0) ||
                                    d.pop());

                                )
                                  if (1 === f.nodeType && ++x && f === t) {
                                    l[e] = [m, p, x];
                                    break;
                                  }
                              } else if (
                                (b &&
                                  (x = p =
                                    (c =
                                      (l = t[v] || (t[v] = {}))[e] || [])[0] ===
                                      m && c[1]),
                                !1 === x)
                              )
                                for (
                                  ;
                                  (f =
                                    (++p && f && f[h]) ||
                                    (x = p = 0) ||
                                    d.pop()) &&
                                  (!(s ? A(f, g) : 1 === f.nodeType) ||
                                    !++x ||
                                    (b &&
                                      ((l = f[v] || (f[v] = {}))[e] = [m, x]),
                                    f !== t));

                                );
                              return (
                                (x -= o) === r || (x % r == 0 && x / r >= 0)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, n) {
                      var r,
                        o =
                          t.pseudos[e] ||
                          t.setFilters[e.toLowerCase()] ||
                          K.error('unsupported pseudo: ' + e);
                      return o[v]
                        ? o(n)
                        : o.length > 1
                          ? ((r = [e, e, '', n]),
                            t.setFilters.hasOwnProperty(e.toLowerCase())
                              ? te(function (e, t) {
                                  for (var r, i = o(e, n), a = i.length; a--; )
                                    e[(r = f.call(e, i[a]))] = !(t[r] = i[a]);
                                })
                              : function (e) {
                                  return o(e, 0, r);
                                })
                          : o;
                    },
                  },
                  pseudos: {
                    not: te(function (e) {
                      var t = [],
                        n = [],
                        r = ge(e.replace(P, '$1'));
                      return r[v]
                        ? te(function (e, t, n, o) {
                            for (
                              var i, a = r(e, null, o, []), s = e.length;
                              s--;

                            )
                              (i = a[s]) && (e[s] = !(t[s] = i));
                          })
                        : function (e, o, i) {
                            return (
                              (t[0] = e),
                              r(t, null, i, n),
                              (t[0] = null),
                              !n.pop()
                            );
                          };
                    }),
                    has: te(function (e) {
                      return function (t) {
                        return K(e, t).length > 0;
                      };
                    }),
                    contains: te(function (e) {
                      return (
                        (e = e.replace(V, Y)),
                        function (t) {
                          return (t.textContent || j.text(t)).indexOf(e) > -1;
                        }
                      );
                    }),
                    lang: te(function (e) {
                      return (
                        $.test(e || '') || K.error('unsupported lang: ' + e),
                        (e = e.replace(V, Y).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if (
                              (n = l
                                ? t.lang
                                : t.getAttribute('xml:lang') ||
                                  t.getAttribute('lang'))
                            )
                              return (
                                (n = n.toLowerCase()) === e ||
                                0 === n.indexOf(e + '-')
                              );
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (e) {
                      var t = n.location && n.location.hash;
                      return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                      return e === c;
                    },
                    focus: function (e) {
                      return (
                        e ===
                          (function () {
                            try {
                              return s.activeElement;
                            } catch (e) {}
                          })() &&
                        s.hasFocus() &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: ie(!1),
                    disabled: ie(!0),
                    checked: function (e) {
                      return (
                        (A(e, 'input') && !!e.checked) ||
                        (A(e, 'option') && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !t.pseudos.empty(e);
                    },
                    header: function (e) {
                      return X.test(e.nodeName);
                    },
                    input: function (e) {
                      return U.test(e.nodeName);
                    },
                    button: function (e) {
                      return (
                        (A(e, 'input') && 'button' === e.type) || A(e, 'button')
                      );
                    },
                    text: function (e) {
                      var t;
                      return (
                        A(e, 'input') &&
                        'text' === e.type &&
                        (null == (t = e.getAttribute('type')) ||
                          'text' === t.toLowerCase())
                      );
                    },
                    first: ae(function () {
                      return [0];
                    }),
                    last: ae(function (e, t) {
                      return [t - 1];
                    }),
                    eq: ae(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: ae(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: ae(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: ae(function (e, t, n) {
                      var r;
                      for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                        e.push(r);
                      return e;
                    }),
                    gt: ae(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                      return e;
                    }),
                  },
                }),
              (t.pseudos.nth = t.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                t.pseudos[e] = re(e);
              for (e in { submit: !0, reset: !0 }) t.pseudos[e] = oe(e);
              function ce() {}
              function le(e, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c,
                  l = w[e + ' '];
                if (l) return n ? 0 : l.slice(0);
                for (s = e, u = [], c = t.preFilter; s; ) {
                  for (a in ((r && !(o = I.exec(s))) ||
                    (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                  (r = !1),
                  (o = F.exec(s)) &&
                    ((r = o.shift()),
                    i.push({ value: r, type: o[0].replace(P, ' ') }),
                    (s = s.slice(r.length))),
                  t.filter))
                    !(o = z[a].exec(s)) ||
                      (c[a] && !(o = c[a](o))) ||
                      ((r = o.shift()),
                      i.push({ value: r, type: a, matches: o }),
                      (s = s.slice(r.length)));
                  if (!r) break;
                }
                return n ? s.length : s ? K.error(e) : w(e, u).slice(0);
              }
              function fe(e) {
                for (var t = 0, n = e.length, r = ''; t < n; t++)
                  r += e[t].value;
                return r;
              }
              function pe(e, t, n) {
                var r = t.dir,
                  o = t.next,
                  i = o || r,
                  a = n && 'parentNode' === i,
                  s = b++;
                return t.first
                  ? function (t, n, o) {
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a) return e(t, n, o);
                      return !1;
                    }
                  : function (t, n, u) {
                      var c,
                        l,
                        f = [m, s];
                      if (u) {
                        for (; (t = t[r]); )
                          if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                      } else
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || a)
                            if (((l = t[v] || (t[v] = {})), o && A(t, o)))
                              t = t[r] || t;
                            else {
                              if ((c = l[i]) && c[0] === m && c[1] === s)
                                return (f[2] = c[2]);
                              if (((l[i] = f), (f[2] = e(t, n, u)))) return !0;
                            }
                      return !1;
                    };
              }
              function de(e) {
                return e.length > 1
                  ? function (t, n, r) {
                      for (var o = e.length; o--; )
                        if (!e[o](t, n, r)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function he(e, t, n, r, o) {
                for (
                  var i, a = [], s = 0, u = e.length, c = null != t;
                  s < u;
                  s++
                )
                  (i = e[s]) &&
                    ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)));
                return a;
              }
              function ye(e, t, n, r, o, i) {
                return (
                  r && !r[v] && (r = ye(r)),
                  o && !o[v] && (o = ye(o, i)),
                  te(function (i, a, s, u) {
                    var c,
                      l,
                      p,
                      d,
                      h = [],
                      v = [],
                      g = a.length,
                      m =
                        i ||
                        (function (e, t, n) {
                          for (var r = 0, o = t.length; r < o; r++)
                            K(e, t[r], n);
                          return n;
                        })(t || '*', s.nodeType ? [s] : s, []),
                      b = !e || (!i && t) ? m : he(m, h, e, s, u);
                    if (
                      (n
                        ? n(b, (d = o || (i ? e : g || r) ? [] : a), s, u)
                        : (d = b),
                      r)
                    )
                      for (c = he(d, v), r(c, [], s, u), l = c.length; l--; )
                        (p = c[l]) && (d[v[l]] = !(b[v[l]] = p));
                    if (i) {
                      if (o || e) {
                        if (o) {
                          for (c = [], l = d.length; l--; )
                            (p = d[l]) && c.push((b[l] = p));
                          o(null, (d = []), c, u);
                        }
                        for (l = d.length; l--; )
                          (p = d[l]) &&
                            (c = o ? f.call(i, p) : h[l]) > -1 &&
                            (i[c] = !(a[c] = p));
                      }
                    } else
                      (d = he(d === a ? d.splice(g, d.length) : d)),
                        o ? o(null, a, d, u) : y.apply(a, d);
                  })
                );
              }
              function ve(e) {
                for (
                  var n,
                    o,
                    i,
                    a = e.length,
                    s = t.relative[e[0].type],
                    u = s || t.relative[' '],
                    c = s ? 1 : 0,
                    l = pe(
                      function (e) {
                        return e === n;
                      },
                      u,
                      !0,
                    ),
                    p = pe(
                      function (e) {
                        return f.call(n, e) > -1;
                      },
                      u,
                      !0,
                    ),
                    d = [
                      function (e, t, o) {
                        var i =
                          (!s && (o || t != r)) ||
                          ((n = t).nodeType ? l(e, t, o) : p(e, t, o));
                        return (n = null), i;
                      },
                    ];
                  c < a;
                  c++
                )
                  if ((o = t.relative[e[c].type])) d = [pe(de(d), o)];
                  else {
                    if (
                      (o = t.filter[e[c].type].apply(null, e[c].matches))[v]
                    ) {
                      for (i = ++c; i < a && !t.relative[e[i].type]; i++);
                      return ye(
                        c > 1 && de(d),
                        c > 1 &&
                          fe(
                            e
                              .slice(0, c - 1)
                              .concat({
                                value: ' ' === e[c - 2].type ? '*' : '',
                              }),
                          ).replace(P, '$1'),
                        o,
                        c < i && ve(e.slice(c, i)),
                        i < a && ve((e = e.slice(i))),
                        i < a && fe(e),
                      );
                    }
                    d.push(o);
                  }
                return de(d);
              }
              function ge(e, n) {
                var o,
                  i = [],
                  a = [],
                  u = T[e + ' '];
                if (!u) {
                  for (n || (n = le(e)), o = n.length; o--; )
                    (u = ve(n[o]))[v] ? i.push(u) : a.push(u);
                  (u = T(
                    e,
                    (function (e, n) {
                      var o = n.length > 0,
                        i = e.length > 0,
                        a = function (a, u, c, f, p) {
                          var d,
                            h,
                            v,
                            g = 0,
                            b = '0',
                            x = a && [],
                            w = [],
                            T = r,
                            S = a || (i && t.find.TAG('*', p)),
                            E = (m += null == T ? 1 : Math.random() || 0.1),
                            k = S.length;
                          for (
                            p && (r = u == s || u || p);
                            b !== k && null != (d = S[b]);
                            b++
                          ) {
                            if (i && d) {
                              for (
                                h = 0,
                                  u ||
                                    d.ownerDocument == s ||
                                    (ue(d), (c = !l));
                                (v = e[h++]);

                              )
                                if (v(d, u || s, c)) {
                                  y.call(f, d);
                                  break;
                                }
                              p && (m = E);
                            }
                            o && ((d = !v && d) && g--, a && x.push(d));
                          }
                          if (((g += b), o && b !== g)) {
                            for (h = 0; (v = n[h++]); ) v(x, w, u, c);
                            if (a) {
                              if (g > 0)
                                for (; b--; )
                                  x[b] || w[b] || (w[b] = D.call(f));
                              w = he(w);
                            }
                            y.apply(f, w),
                              p &&
                                !a &&
                                w.length > 0 &&
                                g + n.length > 1 &&
                                j.uniqueSort(f);
                          }
                          return p && ((m = E), (r = T)), x;
                        };
                      return o ? te(a) : a;
                    })(a, i),
                  )),
                    (u.selector = e);
                }
                return u;
              }
              function me(e, n, r, o) {
                var i,
                  a,
                  s,
                  u,
                  c,
                  f = 'function' == typeof e && e,
                  p = !o && le((e = f.selector || e));
                if (((r = r || []), 1 === p.length)) {
                  if (
                    (a = p[0] = p[0].slice(0)).length > 2 &&
                    'ID' === (s = a[0]).type &&
                    9 === n.nodeType &&
                    l &&
                    t.relative[a[1].type]
                  ) {
                    if (
                      !(n = (t.find.ID(s.matches[0].replace(V, Y), n) || [])[0])
                    )
                      return r;
                    f && (n = n.parentNode),
                      (e = e.slice(a.shift().value.length));
                  }
                  for (
                    i = z.needsContext.test(e) ? 0 : a.length;
                    i-- && ((s = a[i]), !t.relative[(u = s.type)]);

                  )
                    if (
                      (c = t.find[u]) &&
                      (o = c(
                        s.matches[0].replace(V, Y),
                        (Z.test(a[0].type) && se(n.parentNode)) || n,
                      ))
                    ) {
                      if ((a.splice(i, 1), !(e = o.length && fe(a))))
                        return y.apply(r, o), r;
                      break;
                    }
                }
                return (
                  (f || ge(e, p))(
                    o,
                    n,
                    !l,
                    r,
                    !n || (Z.test(e) && se(n.parentNode)) || n,
                  ),
                  r
                );
              }
              (ce.prototype = t.filters = t.pseudos),
                (t.setFilters = new ce()),
                (g.sortStable = v.split('').sort(E).join('') === v),
                ue(),
                (g.sortDetached = ne(function (e) {
                  return (
                    1 & e.compareDocumentPosition(s.createElement('fieldset'))
                  );
                })),
                (j.find = K),
                (j.expr[':'] = j.expr.pseudos),
                (j.unique = j.uniqueSort),
                (K.compile = ge),
                (K.select = me),
                (K.setDocument = ue),
                (K.tokenize = le),
                (K.escape = j.escapeSelector),
                (K.getText = j.text),
                (K.isXML = j.isXMLDoc),
                (K.selectors = j.expr),
                (K.support = j.support),
                (K.uniqueSort = j.uniqueSort);
            })();
            var _ = function (e, t, n) {
                for (
                  var r = [], o = void 0 !== n;
                  (e = e[t]) && 9 !== e.nodeType;

                )
                  if (1 === e.nodeType) {
                    if (o && j(e).is(n)) break;
                    r.push(e);
                  }
                return r;
              },
              I = function (e, t) {
                for (var n = []; e; e = e.nextSibling)
                  1 === e.nodeType && e !== t && n.push(e);
                return n;
              },
              F = j.expr.match.needsContext,
              W =
                /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function B(e, t, n) {
              return m(t)
                ? j.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n;
                  })
                : t.nodeType
                  ? j.grep(e, function (e) {
                      return (e === t) !== n;
                    })
                  : 'string' != typeof t
                    ? j.grep(e, function (e) {
                        return f.call(t, e) > -1 !== n;
                      })
                    : j.filter(t, e, n);
            }
            (j.filter = function (e, t, n) {
              var r = t[0];
              return (
                n && (e = ':not(' + e + ')'),
                1 === t.length && 1 === r.nodeType
                  ? j.find.matchesSelector(r, e)
                    ? [r]
                    : []
                  : j.find.matches(
                      e,
                      j.grep(t, function (e) {
                        return 1 === e.nodeType;
                      }),
                    )
              );
            }),
              j.fn.extend({
                find: function (e) {
                  var t,
                    n,
                    r = this.length,
                    o = this;
                  if ('string' != typeof e)
                    return this.pushStack(
                      j(e).filter(function () {
                        for (t = 0; t < r; t++)
                          if (j.contains(o[t], this)) return !0;
                      }),
                    );
                  for (n = this.pushStack([]), t = 0; t < r; t++)
                    j.find(e, o[t], n);
                  return r > 1 ? j.uniqueSort(n) : n;
                },
                filter: function (e) {
                  return this.pushStack(B(this, e || [], !1));
                },
                not: function (e) {
                  return this.pushStack(B(this, e || [], !0));
                },
                is: function (e) {
                  return !!B(
                    this,
                    'string' == typeof e && F.test(e) ? j(e) : e || [],
                    !1,
                  ).length;
                },
              });
            var $,
              z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((j.fn.init = function (e, t, n) {
              var r, o;
              if (!e) return this;
              if (((n = n || $), 'string' == typeof e)) {
                if (
                  !(r =
                    '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                      ? [null, e, null]
                      : z.exec(e)) ||
                  (!r[1] && t)
                )
                  return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
                if (r[1]) {
                  if (
                    ((t = t instanceof j ? t[0] : t),
                    j.merge(
                      this,
                      j.parseHTML(
                        r[1],
                        t && t.nodeType ? t.ownerDocument || t : x,
                        !0,
                      ),
                    ),
                    W.test(r[1]) && j.isPlainObject(t))
                  )
                    for (r in t)
                      m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                  return this;
                }
                return (
                  (o = x.getElementById(r[2])) &&
                    ((this[0] = o), (this.length = 1)),
                  this
                );
              }
              return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : m(e)
                  ? void 0 !== n.ready
                    ? n.ready(e)
                    : e(j)
                  : j.makeArray(e, this);
            }).prototype = j.fn),
              ($ = j(x));
            var U = /^(?:parents|prev(?:Until|All))/,
              X = { children: !0, contents: !0, next: !0, prev: !0 };
            function G(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
            }
            j.fn.extend({
              has: function (e) {
                var t = j(e, this),
                  n = t.length;
                return this.filter(function () {
                  for (var e = 0; e < n; e++)
                    if (j.contains(this, t[e])) return !0;
                });
              },
              closest: function (e, t) {
                var n,
                  r = 0,
                  o = this.length,
                  i = [],
                  a = 'string' != typeof e && j(e);
                if (!F.test(e))
                  for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (
                        n.nodeType < 11 &&
                        (a
                          ? a.index(n) > -1
                          : 1 === n.nodeType && j.find.matchesSelector(n, e))
                      ) {
                        i.push(n);
                        break;
                      }
                return this.pushStack(i.length > 1 ? j.uniqueSort(i) : i);
              },
              index: function (e) {
                return e
                  ? 'string' == typeof e
                    ? f.call(j(e), this[0])
                    : f.call(this, e.jquery ? e[0] : e)
                  : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
              },
              add: function (e, t) {
                return this.pushStack(
                  j.uniqueSort(j.merge(this.get(), j(e, t))),
                );
              },
              addBack: function (e) {
                return this.add(
                  null == e ? this.prevObject : this.prevObject.filter(e),
                );
              },
            }),
              j.each(
                {
                  parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                  },
                  parents: function (e) {
                    return _(e, 'parentNode');
                  },
                  parentsUntil: function (e, t, n) {
                    return _(e, 'parentNode', n);
                  },
                  next: function (e) {
                    return G(e, 'nextSibling');
                  },
                  prev: function (e) {
                    return G(e, 'previousSibling');
                  },
                  nextAll: function (e) {
                    return _(e, 'nextSibling');
                  },
                  prevAll: function (e) {
                    return _(e, 'previousSibling');
                  },
                  nextUntil: function (e, t, n) {
                    return _(e, 'nextSibling', n);
                  },
                  prevUntil: function (e, t, n) {
                    return _(e, 'previousSibling', n);
                  },
                  siblings: function (e) {
                    return I((e.parentNode || {}).firstChild, e);
                  },
                  children: function (e) {
                    return I(e.firstChild);
                  },
                  contents: function (e) {
                    return null != e.contentDocument && s(e.contentDocument)
                      ? e.contentDocument
                      : (A(e, 'template') && (e = e.content || e),
                        j.merge([], e.childNodes));
                  },
                },
                function (e, t) {
                  j.fn[e] = function (n, r) {
                    var o = j.map(this, t, n);
                    return (
                      'Until' !== e.slice(-5) && (r = n),
                      r && 'string' == typeof r && (o = j.filter(r, o)),
                      this.length > 1 &&
                        (X[e] || j.uniqueSort(o), U.test(e) && o.reverse()),
                      this.pushStack(o)
                    );
                  };
                },
              );
            var Z = /[^\x20\t\r\n\f]+/g;
            function V(e) {
              return e;
            }
            function Y(e) {
              throw e;
            }
            function J(e, t, n, r) {
              var o;
              try {
                e && m((o = e.promise))
                  ? o.call(e).done(t).fail(n)
                  : e && m((o = e.then))
                    ? o.call(e, t, n)
                    : t.apply(void 0, [e].slice(r));
              } catch (e) {
                n.apply(void 0, [e]);
              }
            }
            (j.Callbacks = function (e) {
              e =
                'string' == typeof e
                  ? (function (e) {
                      var t = {};
                      return (
                        j.each(e.match(Z) || [], function (e, n) {
                          t[n] = !0;
                        }),
                        t
                      );
                    })(e)
                  : j.extend({}, e);
              var t,
                n,
                r,
                o,
                i = [],
                a = [],
                s = -1,
                u = function () {
                  for (o = o || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < i.length; )
                      !1 === i[s].apply(n[0], n[1]) &&
                        e.stopOnFalse &&
                        ((s = i.length), (n = !1));
                  e.memory || (n = !1), (t = !1), o && (i = n ? [] : '');
                },
                c = {
                  add: function () {
                    return (
                      i &&
                        (n && !t && ((s = i.length - 1), a.push(n)),
                        (function t(n) {
                          j.each(n, function (n, r) {
                            m(r)
                              ? (e.unique && c.has(r)) || i.push(r)
                              : r && r.length && 'string' !== S(r) && t(r);
                          });
                        })(arguments),
                        n && !t && u()),
                      this
                    );
                  },
                  remove: function () {
                    return (
                      j.each(arguments, function (e, t) {
                        for (var n; (n = j.inArray(t, i, n)) > -1; )
                          i.splice(n, 1), n <= s && s--;
                      }),
                      this
                    );
                  },
                  has: function (e) {
                    return e ? j.inArray(e, i) > -1 : i.length > 0;
                  },
                  empty: function () {
                    return i && (i = []), this;
                  },
                  disable: function () {
                    return (o = a = []), (i = n = ''), this;
                  },
                  disabled: function () {
                    return !i;
                  },
                  lock: function () {
                    return (o = a = []), n || t || (i = n = ''), this;
                  },
                  locked: function () {
                    return !!o;
                  },
                  fireWith: function (e, n) {
                    return (
                      o ||
                        ((n = [e, (n = n || []).slice ? n.slice() : n]),
                        a.push(n),
                        t || u()),
                      this
                    );
                  },
                  fire: function () {
                    return c.fireWith(this, arguments), this;
                  },
                  fired: function () {
                    return !!r;
                  },
                };
              return c;
            }),
              j.extend({
                Deferred: function (e) {
                  var t = [
                      [
                        'notify',
                        'progress',
                        j.Callbacks('memory'),
                        j.Callbacks('memory'),
                        2,
                      ],
                      [
                        'resolve',
                        'done',
                        j.Callbacks('once memory'),
                        j.Callbacks('once memory'),
                        0,
                        'resolved',
                      ],
                      [
                        'reject',
                        'fail',
                        j.Callbacks('once memory'),
                        j.Callbacks('once memory'),
                        1,
                        'rejected',
                      ],
                    ],
                    r = 'pending',
                    i = {
                      state: function () {
                        return r;
                      },
                      always: function () {
                        return a.done(arguments).fail(arguments), this;
                      },
                      catch: function (e) {
                        return i.then(null, e);
                      },
                      pipe: function () {
                        var e = arguments;
                        return j
                          .Deferred(function (n) {
                            j.each(t, function (t, r) {
                              var o = m(e[r[4]]) && e[r[4]];
                              a[r[1]](function () {
                                var e = o && o.apply(this, arguments);
                                e && m(e.promise)
                                  ? e
                                      .promise()
                                      .progress(n.notify)
                                      .done(n.resolve)
                                      .fail(n.reject)
                                  : n[r[0] + 'With'](this, o ? [e] : arguments);
                              });
                            }),
                              (e = null);
                          })
                          .promise();
                      },
                      then: function (e, r, i) {
                        var a = 0;
                        function s(e, t, r, i) {
                          return function () {
                            var u = this,
                              c = arguments,
                              l = function () {
                                var n, l;
                                if (!(e < a)) {
                                  if ((n = r.apply(u, c)) === t.promise())
                                    throw new TypeError(
                                      'Thenable self-resolution',
                                    );
                                  (l =
                                    n &&
                                    ('object' === o(n) ||
                                      'function' == typeof n) &&
                                    n.then),
                                    m(l)
                                      ? i
                                        ? l.call(
                                            n,
                                            s(a, t, V, i),
                                            s(a, t, Y, i),
                                          )
                                        : (a++,
                                          l.call(
                                            n,
                                            s(a, t, V, i),
                                            s(a, t, Y, i),
                                            s(a, t, V, t.notifyWith),
                                          ))
                                      : (r !== V && ((u = void 0), (c = [n])),
                                        (i || t.resolveWith)(u, c));
                                }
                              },
                              f = i
                                ? l
                                : function () {
                                    try {
                                      l();
                                    } catch (n) {
                                      j.Deferred.exceptionHook &&
                                        j.Deferred.exceptionHook(n, f.error),
                                        e + 1 >= a &&
                                          (r !== Y && ((u = void 0), (c = [n])),
                                          t.rejectWith(u, c));
                                    }
                                  };
                            e
                              ? f()
                              : (j.Deferred.getErrorHook
                                  ? (f.error = j.Deferred.getErrorHook())
                                  : j.Deferred.getStackHook &&
                                    (f.error = j.Deferred.getStackHook()),
                                n.setTimeout(f));
                          };
                        }
                        return j
                          .Deferred(function (n) {
                            t[0][3].add(s(0, n, m(i) ? i : V, n.notifyWith)),
                              t[1][3].add(s(0, n, m(e) ? e : V)),
                              t[2][3].add(s(0, n, m(r) ? r : Y));
                          })
                          .promise();
                      },
                      promise: function (e) {
                        return null != e ? j.extend(e, i) : i;
                      },
                    },
                    a = {};
                  return (
                    j.each(t, function (e, n) {
                      var o = n[2],
                        s = n[5];
                      (i[n[1]] = o.add),
                        s &&
                          o.add(
                            function () {
                              r = s;
                            },
                            t[3 - e][2].disable,
                            t[3 - e][3].disable,
                            t[0][2].lock,
                            t[0][3].lock,
                          ),
                        o.add(n[3].fire),
                        (a[n[0]] = function () {
                          return (
                            a[n[0] + 'With'](
                              this === a ? void 0 : this,
                              arguments,
                            ),
                            this
                          );
                        }),
                        (a[n[0] + 'With'] = o.fireWith);
                    }),
                    i.promise(a),
                    e && e.call(a, a),
                    a
                  );
                },
                when: function (e) {
                  var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = u.call(arguments),
                    i = j.Deferred(),
                    a = function (e) {
                      return function (n) {
                        (r[e] = this),
                          (o[e] = arguments.length > 1 ? u.call(arguments) : n),
                          --t || i.resolveWith(r, o);
                      };
                    };
                  if (
                    t <= 1 &&
                    (J(e, i.done(a(n)).resolve, i.reject, !t),
                    'pending' === i.state() || m(o[n] && o[n].then))
                  )
                    return i.then();
                  for (; n--; ) J(o[n], a(n), i.reject);
                  return i.promise();
                },
              });
            var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (j.Deferred.exceptionHook = function (e, t) {
              n.console &&
                n.console.warn &&
                e &&
                Q.test(e.name) &&
                n.console.warn(
                  'jQuery.Deferred exception: ' + e.message,
                  e.stack,
                  t,
                );
            }),
              (j.readyException = function (e) {
                n.setTimeout(function () {
                  throw e;
                });
              });
            var K = j.Deferred();
            function ee() {
              x.removeEventListener('DOMContentLoaded', ee),
                n.removeEventListener('load', ee),
                j.ready();
            }
            (j.fn.ready = function (e) {
              return (
                K.then(e).catch(function (e) {
                  j.readyException(e);
                }),
                this
              );
            }),
              j.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                  (!0 === e ? --j.readyWait : j.isReady) ||
                    ((j.isReady = !0),
                    (!0 !== e && --j.readyWait > 0) || K.resolveWith(x, [j]));
                },
              }),
              (j.ready.then = K.then),
              'complete' === x.readyState ||
              ('loading' !== x.readyState && !x.documentElement.doScroll)
                ? n.setTimeout(j.ready)
                : (x.addEventListener('DOMContentLoaded', ee),
                  n.addEventListener('load', ee));
            var te = function (e, t, n, r, o, i, a) {
                var s = 0,
                  u = e.length,
                  c = null == n;
                if ('object' === S(n))
                  for (s in ((o = !0), n)) te(e, t, s, n[s], !0, i, a);
                else if (
                  void 0 !== r &&
                  ((o = !0),
                  m(r) || (a = !0),
                  c &&
                    (a
                      ? (t.call(e, r), (t = null))
                      : ((c = t),
                        (t = function (e, t, n) {
                          return c.call(j(e), n);
                        }))),
                  t)
                )
                  for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
              },
              ne = /^-ms-/,
              re = /-([a-z])/g;
            function oe(e, t) {
              return t.toUpperCase();
            }
            function ie(e) {
              return e.replace(ne, 'ms-').replace(re, oe);
            }
            var ae = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function se() {
              this.expando = j.expando + se.uid++;
            }
            (se.uid = 1),
              (se.prototype = {
                cache: function (e) {
                  var t = e[this.expando];
                  return (
                    t ||
                      ((t = {}),
                      ae(e) &&
                        (e.nodeType
                          ? (e[this.expando] = t)
                          : Object.defineProperty(e, this.expando, {
                              value: t,
                              configurable: !0,
                            }))),
                    t
                  );
                },
                set: function (e, t, n) {
                  var r,
                    o = this.cache(e);
                  if ('string' == typeof t) o[ie(t)] = n;
                  else for (r in t) o[ie(r)] = t[r];
                  return o;
                },
                get: function (e, t) {
                  return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][ie(t)];
                },
                access: function (e, t, n) {
                  return void 0 === t ||
                    (t && 'string' == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
                },
                remove: function (e, t) {
                  var n,
                    r = e[this.expando];
                  if (void 0 !== r) {
                    if (void 0 !== t) {
                      n = (t = Array.isArray(t)
                        ? t.map(ie)
                        : (t = ie(t)) in r
                          ? [t]
                          : t.match(Z) || []).length;
                      for (; n--; ) delete r[t[n]];
                    }
                    (void 0 === t || j.isEmptyObject(r)) &&
                      (e.nodeType
                        ? (e[this.expando] = void 0)
                        : delete e[this.expando]);
                  }
                },
                hasData: function (e) {
                  var t = e[this.expando];
                  return void 0 !== t && !j.isEmptyObject(t);
                },
              });
            var ue = new se(),
              ce = new se(),
              le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              fe = /[A-Z]/g;
            function pe(e, t, n) {
              var r;
              if (void 0 === n && 1 === e.nodeType)
                if (
                  ((r = 'data-' + t.replace(fe, '-$&').toLowerCase()),
                  'string' == typeof (n = e.getAttribute(r)))
                ) {
                  try {
                    n = (function (e) {
                      return (
                        'true' === e ||
                        ('false' !== e &&
                          ('null' === e
                            ? null
                            : e === +e + ''
                              ? +e
                              : le.test(e)
                                ? JSON.parse(e)
                                : e))
                      );
                    })(n);
                  } catch (e) {}
                  ce.set(e, t, n);
                } else n = void 0;
              return n;
            }
            j.extend({
              hasData: function (e) {
                return ce.hasData(e) || ue.hasData(e);
              },
              data: function (e, t, n) {
                return ce.access(e, t, n);
              },
              removeData: function (e, t) {
                ce.remove(e, t);
              },
              _data: function (e, t, n) {
                return ue.access(e, t, n);
              },
              _removeData: function (e, t) {
                ue.remove(e, t);
              },
            }),
              j.fn.extend({
                data: function (e, t) {
                  var n,
                    r,
                    i,
                    a = this[0],
                    s = a && a.attributes;
                  if (void 0 === e) {
                    if (
                      this.length &&
                      ((i = ce.get(a)),
                      1 === a.nodeType && !ue.get(a, 'hasDataAttrs'))
                    ) {
                      for (n = s.length; n--; )
                        s[n] &&
                          0 === (r = s[n].name).indexOf('data-') &&
                          ((r = ie(r.slice(5))), pe(a, r, i[r]));
                      ue.set(a, 'hasDataAttrs', !0);
                    }
                    return i;
                  }
                  return 'object' === o(e)
                    ? this.each(function () {
                        ce.set(this, e);
                      })
                    : te(
                        this,
                        function (t) {
                          var n;
                          if (a && void 0 === t)
                            return void 0 !== (n = ce.get(a, e)) ||
                              void 0 !== (n = pe(a, e))
                              ? n
                              : void 0;
                          this.each(function () {
                            ce.set(this, e, t);
                          });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0,
                      );
                },
                removeData: function (e) {
                  return this.each(function () {
                    ce.remove(this, e);
                  });
                },
              }),
              j.extend({
                queue: function (e, t, n) {
                  var r;
                  if (e)
                    return (
                      (t = (t || 'fx') + 'queue'),
                      (r = ue.get(e, t)),
                      n &&
                        (!r || Array.isArray(n)
                          ? (r = ue.access(e, t, j.makeArray(n)))
                          : r.push(n)),
                      r || []
                    );
                },
                dequeue: function (e, t) {
                  t = t || 'fx';
                  var n = j.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = j._queueHooks(e, t);
                  'inprogress' === o && ((o = n.shift()), r--),
                    o &&
                      ('fx' === t && n.unshift('inprogress'),
                      delete i.stop,
                      o.call(
                        e,
                        function () {
                          j.dequeue(e, t);
                        },
                        i,
                      )),
                    !r && i && i.empty.fire();
                },
                _queueHooks: function (e, t) {
                  var n = t + 'queueHooks';
                  return (
                    ue.get(e, n) ||
                    ue.access(e, n, {
                      empty: j.Callbacks('once memory').add(function () {
                        ue.remove(e, [t + 'queue', n]);
                      }),
                    })
                  );
                },
              }),
              j.fn.extend({
                queue: function (e, t) {
                  var n = 2;
                  return (
                    'string' != typeof e && ((t = e), (e = 'fx'), n--),
                    arguments.length < n
                      ? j.queue(this[0], e)
                      : void 0 === t
                        ? this
                        : this.each(function () {
                            var n = j.queue(this, e, t);
                            j._queueHooks(this, e),
                              'fx' === e &&
                                'inprogress' !== n[0] &&
                                j.dequeue(this, e);
                          })
                  );
                },
                dequeue: function (e) {
                  return this.each(function () {
                    j.dequeue(this, e);
                  });
                },
                clearQueue: function (e) {
                  return this.queue(e || 'fx', []);
                },
                promise: function (e, t) {
                  var n,
                    r = 1,
                    o = j.Deferred(),
                    i = this,
                    a = this.length,
                    s = function () {
                      --r || o.resolveWith(i, [i]);
                    };
                  for (
                    'string' != typeof e && ((t = e), (e = void 0)),
                      e = e || 'fx';
                    a--;

                  )
                    (n = ue.get(i[a], e + 'queueHooks')) &&
                      n.empty &&
                      (r++, n.empty.add(s));
                  return s(), o.promise(t);
                },
              });
            var de = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              he = new RegExp('^(?:([+-])=|)(' + de + ')([a-z%]*)$', 'i'),
              ye = ['Top', 'Right', 'Bottom', 'Left'],
              ve = x.documentElement,
              ge = function (e) {
                return j.contains(e.ownerDocument, e);
              },
              me = { composed: !0 };
            ve.getRootNode &&
              (ge = function (e) {
                return (
                  j.contains(e.ownerDocument, e) ||
                  e.getRootNode(me) === e.ownerDocument
                );
              });
            var be = function (e, t) {
              return (
                'none' === (e = t || e).style.display ||
                ('' === e.style.display &&
                  ge(e) &&
                  'none' === j.css(e, 'display'))
              );
            };
            function xe(e, t, n, r) {
              var o,
                i,
                a = 20,
                s = r
                  ? function () {
                      return r.cur();
                    }
                  : function () {
                      return j.css(e, t, '');
                    },
                u = s(),
                c = (n && n[3]) || (j.cssNumber[t] ? '' : 'px'),
                l =
                  e.nodeType &&
                  (j.cssNumber[t] || ('px' !== c && +u)) &&
                  he.exec(j.css(e, t));
              if (l && l[3] !== c) {
                for (u /= 2, c = c || l[3], l = +u || 1; a--; )
                  j.style(e, t, l + c),
                    (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                    (l /= i);
                (l *= 2), j.style(e, t, l + c), (n = n || []);
              }
              return (
                n &&
                  ((l = +l || +u || 0),
                  (o = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                  r && ((r.unit = c), (r.start = l), (r.end = o))),
                o
              );
            }
            var we = {};
            function Te(e) {
              var t,
                n = e.ownerDocument,
                r = e.nodeName,
                o = we[r];
              return (
                o ||
                ((t = n.body.appendChild(n.createElement(r))),
                (o = j.css(t, 'display')),
                t.parentNode.removeChild(t),
                'none' === o && (o = 'block'),
                (we[r] = o),
                o)
              );
            }
            function Se(e, t) {
              for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
                (r = e[i]).style &&
                  ((n = r.style.display),
                  t
                    ? ('none' === n &&
                        ((o[i] = ue.get(r, 'display') || null),
                        o[i] || (r.style.display = '')),
                      '' === r.style.display && be(r) && (o[i] = Te(r)))
                    : 'none' !== n &&
                      ((o[i] = 'none'), ue.set(r, 'display', n)));
              for (i = 0; i < a; i++)
                null != o[i] && (e[i].style.display = o[i]);
              return e;
            }
            j.fn.extend({
              show: function () {
                return Se(this, !0);
              },
              hide: function () {
                return Se(this);
              },
              toggle: function (e) {
                return 'boolean' == typeof e
                  ? e
                    ? this.show()
                    : this.hide()
                  : this.each(function () {
                      be(this) ? j(this).show() : j(this).hide();
                    });
              },
            });
            var Ee,
              ke,
              je = /^(?:checkbox|radio)$/i,
              Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              Ae = /^$|^module$|\/(?:java|ecma)script/i;
            (Ee = x
              .createDocumentFragment()
              .appendChild(x.createElement('div'))),
              (ke = x.createElement('input')).setAttribute('type', 'radio'),
              ke.setAttribute('checked', 'checked'),
              ke.setAttribute('name', 't'),
              Ee.appendChild(ke),
              (g.checkClone = Ee.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (Ee.innerHTML = '<textarea>x</textarea>'),
              (g.noCloneChecked = !!Ee.cloneNode(!0).lastChild.defaultValue),
              (Ee.innerHTML = '<option></option>'),
              (g.option = !!Ee.lastChild);
            var De = {
              thead: [1, '<table>', '</table>'],
              col: [2, '<table><colgroup>', '</colgroup></table>'],
              tr: [2, '<table><tbody>', '</tbody></table>'],
              td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
              _default: [0, '', ''],
            };
            function Oe(e, t) {
              var n;
              return (
                (n =
                  void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t || '*')
                    : void 0 !== e.querySelectorAll
                      ? e.querySelectorAll(t || '*')
                      : []),
                void 0 === t || (t && A(e, t)) ? j.merge([e], n) : n
              );
            }
            function Le(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                ue.set(e[n], 'globalEval', !t || ue.get(t[n], 'globalEval'));
            }
            (De.tbody = De.tfoot = De.colgroup = De.caption = De.thead),
              (De.th = De.td),
              g.option ||
                (De.optgroup = De.option =
                  [1, "<select multiple='multiple'>", '</select>']);
            var Ne = /<|&#?\w+;/;
            function Pe(e, t, n, r, o) {
              for (
                var i,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f = t.createDocumentFragment(),
                  p = [],
                  d = 0,
                  h = e.length;
                d < h;
                d++
              )
                if ((i = e[d]) || 0 === i)
                  if ('object' === S(i)) j.merge(p, i.nodeType ? [i] : i);
                  else if (Ne.test(i)) {
                    for (
                      a = a || f.appendChild(t.createElement('div')),
                        s = (Ce.exec(i) || ['', ''])[1].toLowerCase(),
                        u = De[s] || De._default,
                        a.innerHTML = u[1] + j.htmlPrefilter(i) + u[2],
                        l = u[0];
                      l--;

                    )
                      a = a.lastChild;
                    j.merge(p, a.childNodes),
                      ((a = f.firstChild).textContent = '');
                  } else p.push(t.createTextNode(i));
              for (f.textContent = '', d = 0; (i = p[d++]); )
                if (r && j.inArray(i, r) > -1) o && o.push(i);
                else if (
                  ((c = ge(i)),
                  (a = Oe(f.appendChild(i), 'script')),
                  c && Le(a),
                  n)
                )
                  for (l = 0; (i = a[l++]); )
                    Ae.test(i.type || '') && n.push(i);
              return f;
            }
            var qe = /^([^.]*)(?:\.(.+)|)/;
            function He() {
              return !0;
            }
            function Me() {
              return !1;
            }
            function Re(e, t, n, r, i, a) {
              var s, u;
              if ('object' === o(t)) {
                for (u in ('string' != typeof n && ((r = r || n), (n = void 0)),
                t))
                  Re(e, u, n, r, t[u], a);
                return e;
              }
              if (
                (null == r && null == i
                  ? ((i = n), (r = n = void 0))
                  : null == i &&
                    ('string' == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
                !1 === i)
              )
                i = Me;
              else if (!i) return e;
              return (
                1 === a &&
                  ((s = i),
                  (i = function (e) {
                    return j().off(e), s.apply(this, arguments);
                  }),
                  (i.guid = s.guid || (s.guid = j.guid++))),
                e.each(function () {
                  j.event.add(this, t, i, r, n);
                })
              );
            }
            function _e(e, t, n) {
              n
                ? (ue.set(e, t, !1),
                  j.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                      var n,
                        r = ue.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                        if (r)
                          (j.event.special[t] || {}).delegateType &&
                            e.stopPropagation();
                        else if (
                          ((r = u.call(arguments)),
                          ue.set(this, t, r),
                          this[t](),
                          (n = ue.get(this, t)),
                          ue.set(this, t, !1),
                          r !== n)
                        )
                          return (
                            e.stopImmediatePropagation(), e.preventDefault(), n
                          );
                      } else
                        r &&
                          (ue.set(
                            this,
                            t,
                            j.event.trigger(r[0], r.slice(1), this),
                          ),
                          e.stopPropagation(),
                          (e.isImmediatePropagationStopped = He));
                    },
                  }))
                : void 0 === ue.get(e, t) && j.event.add(e, t, He);
            }
            (j.event = {
              global: {},
              add: function (e, t, n, r, o) {
                var i,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d,
                  h,
                  y,
                  v = ue.get(e);
                if (ae(e))
                  for (
                    n.handler && ((n = (i = n).handler), (o = i.selector)),
                      o && j.find.matchesSelector(ve, o),
                      n.guid || (n.guid = j.guid++),
                      (u = v.events) || (u = v.events = Object.create(null)),
                      (a = v.handle) ||
                        (a = v.handle =
                          function (t) {
                            return void 0 !== j && j.event.triggered !== t.type
                              ? j.event.dispatch.apply(e, arguments)
                              : void 0;
                          }),
                      c = (t = (t || '').match(Z) || ['']).length;
                    c--;

                  )
                    (d = y = (s = qe.exec(t[c]) || [])[1]),
                      (h = (s[2] || '').split('.').sort()),
                      d &&
                        ((f = j.event.special[d] || {}),
                        (d = (o ? f.delegateType : f.bindType) || d),
                        (f = j.event.special[d] || {}),
                        (l = j.extend(
                          {
                            type: d,
                            origType: y,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext:
                              o && j.expr.match.needsContext.test(o),
                            namespace: h.join('.'),
                          },
                          i,
                        )),
                        (p = u[d]) ||
                          (((p = u[d] = []).delegateCount = 0),
                          (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                            (e.addEventListener && e.addEventListener(d, a))),
                        f.add &&
                          (f.add.call(e, l),
                          l.handler.guid || (l.handler.guid = n.guid)),
                        o ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                        (j.event.global[d] = !0));
              },
              remove: function (e, t, n, r, o) {
                var i,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d,
                  h,
                  y,
                  v = ue.hasData(e) && ue.get(e);
                if (v && (u = v.events)) {
                  for (c = (t = (t || '').match(Z) || ['']).length; c--; )
                    if (
                      ((d = y = (s = qe.exec(t[c]) || [])[1]),
                      (h = (s[2] || '').split('.').sort()),
                      d)
                    ) {
                      for (
                        f = j.event.special[d] || {},
                          p =
                            u[(d = (r ? f.delegateType : f.bindType) || d)] ||
                            [],
                          s =
                            s[2] &&
                            new RegExp(
                              '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)',
                            ),
                          a = i = p.length;
                        i--;

                      )
                        (l = p[i]),
                          (!o && y !== l.origType) ||
                            (n && n.guid !== l.guid) ||
                            (s && !s.test(l.namespace)) ||
                            (r &&
                              r !== l.selector &&
                              ('**' !== r || !l.selector)) ||
                            (p.splice(i, 1),
                            l.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, l));
                      a &&
                        !p.length &&
                        ((f.teardown &&
                          !1 !== f.teardown.call(e, h, v.handle)) ||
                          j.removeEvent(e, d, v.handle),
                        delete u[d]);
                    } else for (d in u) j.event.remove(e, d + t[c], n, r, !0);
                  j.isEmptyObject(u) && ue.remove(e, 'handle events');
                }
              },
              dispatch: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s = new Array(arguments.length),
                  u = j.event.fix(e),
                  c =
                    (ue.get(this, 'events') || Object.create(null))[u.type] ||
                    [],
                  l = j.event.special[u.type] || {};
                for (s[0] = u, t = 1; t < arguments.length; t++)
                  s[t] = arguments[t];
                if (
                  ((u.delegateTarget = this),
                  !l.preDispatch || !1 !== l.preDispatch.call(this, u))
                ) {
                  for (
                    a = j.event.handlers.call(this, u, c), t = 0;
                    (o = a[t++]) && !u.isPropagationStopped();

                  )
                    for (
                      u.currentTarget = o.elem, n = 0;
                      (i = o.handlers[n++]) &&
                      !u.isImmediatePropagationStopped();

                    )
                      (u.rnamespace &&
                        !1 !== i.namespace &&
                        !u.rnamespace.test(i.namespace)) ||
                        ((u.handleObj = i),
                        (u.data = i.data),
                        void 0 !==
                          (r = (
                            (j.event.special[i.origType] || {}).handle ||
                            i.handler
                          ).apply(o.elem, s)) &&
                          !1 === (u.result = r) &&
                          (u.preventDefault(), u.stopPropagation()));
                  return (
                    l.postDispatch && l.postDispatch.call(this, u), u.result
                  );
                }
              },
              handlers: function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  a,
                  s = [],
                  u = t.delegateCount,
                  c = e.target;
                if (u && c.nodeType && !('click' === e.type && e.button >= 1))
                  for (; c !== this; c = c.parentNode || this)
                    if (
                      1 === c.nodeType &&
                      ('click' !== e.type || !0 !== c.disabled)
                    ) {
                      for (i = [], a = {}, n = 0; n < u; n++)
                        void 0 === a[(o = (r = t[n]).selector + ' ')] &&
                          (a[o] = r.needsContext
                            ? j(o, this).index(c) > -1
                            : j.find(o, this, null, [c]).length),
                          a[o] && i.push(r);
                      i.length && s.push({ elem: c, handlers: i });
                    }
                return (
                  (c = this),
                  u < t.length && s.push({ elem: c, handlers: t.slice(u) }),
                  s
                );
              },
              addProp: function (e, t) {
                Object.defineProperty(j.Event.prototype, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: m(t)
                    ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[e];
                      },
                  set: function (t) {
                    Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t,
                    });
                  },
                });
              },
              fix: function (e) {
                return e[j.expando] ? e : new j.Event(e);
              },
              special: {
                load: { noBubble: !0 },
                click: {
                  setup: function (e) {
                    var t = this || e;
                    return (
                      je.test(t.type) &&
                        t.click &&
                        A(t, 'input') &&
                        _e(t, 'click', !0),
                      !1
                    );
                  },
                  trigger: function (e) {
                    var t = this || e;
                    return (
                      je.test(t.type) &&
                        t.click &&
                        A(t, 'input') &&
                        _e(t, 'click'),
                      !0
                    );
                  },
                  _default: function (e) {
                    var t = e.target;
                    return (
                      (je.test(t.type) &&
                        t.click &&
                        A(t, 'input') &&
                        ue.get(t, 'click')) ||
                      A(t, 'a')
                    );
                  },
                },
                beforeunload: {
                  postDispatch: function (e) {
                    void 0 !== e.result &&
                      e.originalEvent &&
                      (e.originalEvent.returnValue = e.result);
                  },
                },
              },
            }),
              (j.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
              }),
              (j.Event = function (e, t) {
                if (!(this instanceof j.Event)) return new j.Event(e, t);
                e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                        ? He
                        : Me),
                    (this.target =
                      e.target && 3 === e.target.nodeType
                        ? e.target.parentNode
                        : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget))
                  : (this.type = e),
                  t && j.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || Date.now()),
                  (this[j.expando] = !0);
              }),
              (j.Event.prototype = {
                constructor: j.Event,
                isDefaultPrevented: Me,
                isPropagationStopped: Me,
                isImmediatePropagationStopped: Me,
                isSimulated: !1,
                preventDefault: function () {
                  var e = this.originalEvent;
                  (this.isDefaultPrevented = He),
                    e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function () {
                  var e = this.originalEvent;
                  (this.isPropagationStopped = He),
                    e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                  var e = this.originalEvent;
                  (this.isImmediatePropagationStopped = He),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
                },
              }),
              j.each(
                {
                  altKey: !0,
                  bubbles: !0,
                  cancelable: !0,
                  changedTouches: !0,
                  ctrlKey: !0,
                  detail: !0,
                  eventPhase: !0,
                  metaKey: !0,
                  pageX: !0,
                  pageY: !0,
                  shiftKey: !0,
                  view: !0,
                  char: !0,
                  code: !0,
                  charCode: !0,
                  key: !0,
                  keyCode: !0,
                  button: !0,
                  buttons: !0,
                  clientX: !0,
                  clientY: !0,
                  offsetX: !0,
                  offsetY: !0,
                  pointerId: !0,
                  pointerType: !0,
                  screenX: !0,
                  screenY: !0,
                  targetTouches: !0,
                  toElement: !0,
                  touches: !0,
                  which: !0,
                },
                j.event.addProp,
              ),
              j.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
                function n(e) {
                  if (x.documentMode) {
                    var n = ue.get(this, 'handle'),
                      r = j.event.fix(e);
                    (r.type = 'focusin' === e.type ? 'focus' : 'blur'),
                      (r.isSimulated = !0),
                      n(e),
                      r.target === r.currentTarget && n(r);
                  } else j.event.simulate(t, e.target, j.event.fix(e));
                }
                (j.event.special[e] = {
                  setup: function () {
                    var r;
                    if ((_e(this, e, !0), !x.documentMode)) return !1;
                    (r = ue.get(this, t)) || this.addEventListener(t, n),
                      ue.set(this, t, (r || 0) + 1);
                  },
                  trigger: function () {
                    return _e(this, e), !0;
                  },
                  teardown: function () {
                    var e;
                    if (!x.documentMode) return !1;
                    (e = ue.get(this, t) - 1)
                      ? ue.set(this, t, e)
                      : (this.removeEventListener(t, n), ue.remove(this, t));
                  },
                  _default: function (t) {
                    return ue.get(t.target, e);
                  },
                  delegateType: t,
                }),
                  (j.event.special[t] = {
                    setup: function () {
                      var r = this.ownerDocument || this.document || this,
                        o = x.documentMode ? this : r,
                        i = ue.get(o, t);
                      i ||
                        (x.documentMode
                          ? this.addEventListener(t, n)
                          : r.addEventListener(e, n, !0)),
                        ue.set(o, t, (i || 0) + 1);
                    },
                    teardown: function () {
                      var r = this.ownerDocument || this.document || this,
                        o = x.documentMode ? this : r,
                        i = ue.get(o, t) - 1;
                      i
                        ? ue.set(o, t, i)
                        : (x.documentMode
                            ? this.removeEventListener(t, n)
                            : r.removeEventListener(e, n, !0),
                          ue.remove(o, t));
                    },
                  });
              }),
              j.each(
                {
                  mouseenter: 'mouseover',
                  mouseleave: 'mouseout',
                  pointerenter: 'pointerover',
                  pointerleave: 'pointerout',
                },
                function (e, t) {
                  j.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                      var n,
                        r = e.relatedTarget,
                        o = e.handleObj;
                      return (
                        (r && (r === this || j.contains(this, r))) ||
                          ((e.type = o.origType),
                          (n = o.handler.apply(this, arguments)),
                          (e.type = t)),
                        n
                      );
                    },
                  };
                },
              ),
              j.fn.extend({
                on: function (e, t, n, r) {
                  return Re(this, e, t, n, r);
                },
                one: function (e, t, n, r) {
                  return Re(this, e, t, n, r, 1);
                },
                off: function (e, t, n) {
                  var r, i;
                  if (e && e.preventDefault && e.handleObj)
                    return (
                      (r = e.handleObj),
                      j(e.delegateTarget).off(
                        r.namespace
                          ? r.origType + '.' + r.namespace
                          : r.origType,
                        r.selector,
                        r.handler,
                      ),
                      this
                    );
                  if ('object' === o(e)) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                  }
                  return (
                    (!1 !== t && 'function' != typeof t) ||
                      ((n = t), (t = void 0)),
                    !1 === n && (n = Me),
                    this.each(function () {
                      j.event.remove(this, e, n, t);
                    })
                  );
                },
              });
            var Ie = /<script|<style|<link/i,
              Fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
              We = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
            function Be(e, t) {
              return (
                (A(e, 'table') &&
                  A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                  j(e).children('tbody')[0]) ||
                e
              );
            }
            function $e(e) {
              return (
                (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
              );
            }
            function ze(e) {
              return (
                'true/' === (e.type || '').slice(0, 5)
                  ? (e.type = e.type.slice(5))
                  : e.removeAttribute('type'),
                e
              );
            }
            function Ue(e, t) {
              var n, r, o, i, a, s;
              if (1 === t.nodeType) {
                if (ue.hasData(e) && (s = ue.get(e).events))
                  for (o in (ue.remove(t, 'handle events'), s))
                    for (n = 0, r = s[o].length; n < r; n++)
                      j.event.add(t, o, s[o][n]);
                ce.hasData(e) &&
                  ((i = ce.access(e)), (a = j.extend({}, i)), ce.set(t, a));
              }
            }
            function Xe(e, t) {
              var n = t.nodeName.toLowerCase();
              'input' === n && je.test(e.type)
                ? (t.checked = e.checked)
                : ('input' !== n && 'textarea' !== n) ||
                  (t.defaultValue = e.defaultValue);
            }
            function Ge(e, t, n, r) {
              t = c(t);
              var o,
                i,
                a,
                s,
                u,
                l,
                f = 0,
                p = e.length,
                d = p - 1,
                h = t[0],
                y = m(h);
              if (
                y ||
                (p > 1 && 'string' == typeof h && !g.checkClone && Fe.test(h))
              )
                return e.each(function (o) {
                  var i = e.eq(o);
                  y && (t[0] = h.call(this, o, i.html())), Ge(i, t, n, r);
                });
              if (
                p &&
                ((i = (o = Pe(t, e[0].ownerDocument, !1, e, r)).firstChild),
                1 === o.childNodes.length && (o = i),
                i || r)
              ) {
                for (s = (a = j.map(Oe(o, 'script'), $e)).length; f < p; f++)
                  (u = o),
                    f !== d &&
                      ((u = j.clone(u, !0, !0)),
                      s && j.merge(a, Oe(u, 'script'))),
                    n.call(e[f], u, f);
                if (s)
                  for (
                    l = a[a.length - 1].ownerDocument, j.map(a, ze), f = 0;
                    f < s;
                    f++
                  )
                    (u = a[f]),
                      Ae.test(u.type || '') &&
                        !ue.access(u, 'globalEval') &&
                        j.contains(l, u) &&
                        (u.src && 'module' !== (u.type || '').toLowerCase()
                          ? j._evalUrl &&
                            !u.noModule &&
                            j._evalUrl(
                              u.src,
                              { nonce: u.nonce || u.getAttribute('nonce') },
                              l,
                            )
                          : T(u.textContent.replace(We, ''), u, l));
              }
              return e;
            }
            function Ze(e, t, n) {
              for (
                var r, o = t ? j.filter(t, e) : e, i = 0;
                null != (r = o[i]);
                i++
              )
                n || 1 !== r.nodeType || j.cleanData(Oe(r)),
                  r.parentNode &&
                    (n && ge(r) && Le(Oe(r, 'script')),
                    r.parentNode.removeChild(r));
              return e;
            }
            j.extend({
              htmlPrefilter: function (e) {
                return e;
              },
              clone: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s = e.cloneNode(!0),
                  u = ge(e);
                if (
                  !(
                    g.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    j.isXMLDoc(e)
                  )
                )
                  for (a = Oe(s), r = 0, o = (i = Oe(e)).length; r < o; r++)
                    Xe(i[r], a[r]);
                if (t)
                  if (n)
                    for (
                      i = i || Oe(e), a = a || Oe(s), r = 0, o = i.length;
                      r < o;
                      r++
                    )
                      Ue(i[r], a[r]);
                  else Ue(e, s);
                return (
                  (a = Oe(s, 'script')).length > 0 &&
                    Le(a, !u && Oe(e, 'script')),
                  s
                );
              },
              cleanData: function (e) {
                for (
                  var t, n, r, o = j.event.special, i = 0;
                  void 0 !== (n = e[i]);
                  i++
                )
                  if (ae(n)) {
                    if ((t = n[ue.expando])) {
                      if (t.events)
                        for (r in t.events)
                          o[r]
                            ? j.event.remove(n, r)
                            : j.removeEvent(n, r, t.handle);
                      n[ue.expando] = void 0;
                    }
                    n[ce.expando] && (n[ce.expando] = void 0);
                  }
              },
            }),
              j.fn.extend({
                detach: function (e) {
                  return Ze(this, e, !0);
                },
                remove: function (e) {
                  return Ze(this, e);
                },
                text: function (e) {
                  return te(
                    this,
                    function (e) {
                      return void 0 === e
                        ? j.text(this)
                        : this.empty().each(function () {
                            (1 !== this.nodeType &&
                              11 !== this.nodeType &&
                              9 !== this.nodeType) ||
                              (this.textContent = e);
                          });
                    },
                    null,
                    e,
                    arguments.length,
                  );
                },
                append: function () {
                  return Ge(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      Be(this, e).appendChild(e);
                  });
                },
                prepend: function () {
                  return Ge(this, arguments, function (e) {
                    if (
                      1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType
                    ) {
                      var t = Be(this, e);
                      t.insertBefore(e, t.firstChild);
                    }
                  });
                },
                before: function () {
                  return Ge(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                  });
                },
                after: function () {
                  return Ge(this, arguments, function (e) {
                    this.parentNode &&
                      this.parentNode.insertBefore(e, this.nextSibling);
                  });
                },
                empty: function () {
                  for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                      (j.cleanData(Oe(e, !1)), (e.textContent = ''));
                  return this;
                },
                clone: function (e, t) {
                  return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                      return j.clone(this, e, t);
                    })
                  );
                },
                html: function (e) {
                  return te(
                    this,
                    function (e) {
                      var t = this[0] || {},
                        n = 0,
                        r = this.length;
                      if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                      if (
                        'string' == typeof e &&
                        !Ie.test(e) &&
                        !De[(Ce.exec(e) || ['', ''])[1].toLowerCase()]
                      ) {
                        e = j.htmlPrefilter(e);
                        try {
                          for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType &&
                              (j.cleanData(Oe(t, !1)), (t.innerHTML = e));
                          t = 0;
                        } catch (e) {}
                      }
                      t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length,
                  );
                },
                replaceWith: function () {
                  var e = [];
                  return Ge(
                    this,
                    arguments,
                    function (t) {
                      var n = this.parentNode;
                      j.inArray(this, e) < 0 &&
                        (j.cleanData(Oe(this)), n && n.replaceChild(t, this));
                    },
                    e,
                  );
                },
              }),
              j.each(
                {
                  appendTo: 'append',
                  prependTo: 'prepend',
                  insertBefore: 'before',
                  insertAfter: 'after',
                  replaceAll: 'replaceWith',
                },
                function (e, t) {
                  j.fn[e] = function (e) {
                    for (
                      var n, r = [], o = j(e), i = o.length - 1, a = 0;
                      a <= i;
                      a++
                    )
                      (n = a === i ? this : this.clone(!0)),
                        j(o[a])[t](n),
                        l.apply(r, n.get());
                    return this.pushStack(r);
                  };
                },
              );
            var Ve = new RegExp('^(' + de + ')(?!px)[a-z%]+$', 'i'),
              Ye = /^--/,
              Je = function (e) {
                var t = e.ownerDocument.defaultView;
                return (t && t.opener) || (t = n), t.getComputedStyle(e);
              },
              Qe = function (e, t, n) {
                var r,
                  o,
                  i = {};
                for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
                for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
                return r;
              },
              Ke = new RegExp(ye.join('|'), 'i');
            function et(e, t, n) {
              var r,
                o,
                i,
                a,
                s = Ye.test(t),
                u = e.style;
              return (
                (n = n || Je(e)) &&
                  ((a = n.getPropertyValue(t) || n[t]),
                  s && a && (a = a.replace(P, '$1') || void 0),
                  '' !== a || ge(e) || (a = j.style(e, t)),
                  !g.pixelBoxStyles() &&
                    Ve.test(a) &&
                    Ke.test(t) &&
                    ((r = u.width),
                    (o = u.minWidth),
                    (i = u.maxWidth),
                    (u.minWidth = u.maxWidth = u.width = a),
                    (a = n.width),
                    (u.width = r),
                    (u.minWidth = o),
                    (u.maxWidth = i))),
                void 0 !== a ? a + '' : a
              );
            }
            function tt(e, t) {
              return {
                get: function () {
                  if (!e()) return (this.get = t).apply(this, arguments);
                  delete this.get;
                },
              };
            }
            !(function () {
              function e() {
                if (l) {
                  (c.style.cssText =
                    'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                    (l.style.cssText =
                      'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                    ve.appendChild(c).appendChild(l);
                  var e = n.getComputedStyle(l);
                  (r = '1%' !== e.top),
                    (u = 12 === t(e.marginLeft)),
                    (l.style.right = '60%'),
                    (a = 36 === t(e.right)),
                    (o = 36 === t(e.width)),
                    (l.style.position = 'absolute'),
                    (i = 12 === t(l.offsetWidth / 3)),
                    ve.removeChild(c),
                    (l = null);
                }
              }
              function t(e) {
                return Math.round(parseFloat(e));
              }
              var r,
                o,
                i,
                a,
                s,
                u,
                c = x.createElement('div'),
                l = x.createElement('div');
              l.style &&
                ((l.style.backgroundClip = 'content-box'),
                (l.cloneNode(!0).style.backgroundClip = ''),
                (g.clearCloneStyle = 'content-box' === l.style.backgroundClip),
                j.extend(g, {
                  boxSizingReliable: function () {
                    return e(), o;
                  },
                  pixelBoxStyles: function () {
                    return e(), a;
                  },
                  pixelPosition: function () {
                    return e(), r;
                  },
                  reliableMarginLeft: function () {
                    return e(), u;
                  },
                  scrollboxSize: function () {
                    return e(), i;
                  },
                  reliableTrDimensions: function () {
                    var e, t, r, o;
                    return (
                      null == s &&
                        ((e = x.createElement('table')),
                        (t = x.createElement('tr')),
                        (r = x.createElement('div')),
                        (e.style.cssText =
                          'position:absolute;left:-11111px;border-collapse:separate'),
                        (t.style.cssText =
                          'box-sizing:content-box;border:1px solid'),
                        (t.style.height = '1px'),
                        (r.style.height = '9px'),
                        (r.style.display = 'block'),
                        ve.appendChild(e).appendChild(t).appendChild(r),
                        (o = n.getComputedStyle(t)),
                        (s =
                          parseInt(o.height, 10) +
                            parseInt(o.borderTopWidth, 10) +
                            parseInt(o.borderBottomWidth, 10) ===
                          t.offsetHeight),
                        ve.removeChild(e)),
                      s
                    );
                  },
                }));
            })();
            var nt = ['Webkit', 'Moz', 'ms'],
              rt = x.createElement('div').style,
              ot = {};
            function it(e) {
              return (
                j.cssProps[e] ||
                ot[e] ||
                (e in rt
                  ? e
                  : (ot[e] =
                      (function (e) {
                        for (
                          var t = e[0].toUpperCase() + e.slice(1),
                            n = nt.length;
                          n--;

                        )
                          if ((e = nt[n] + t) in rt) return e;
                      })(e) || e))
              );
            }
            var at = /^(none|table(?!-c[ea]).+)/,
              st = {
                position: 'absolute',
                visibility: 'hidden',
                display: 'block',
              },
              ut = { letterSpacing: '0', fontWeight: '400' };
            function ct(e, t, n) {
              var r = he.exec(t);
              return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
            }
            function lt(e, t, n, r, o, i) {
              var a = 'width' === t ? 1 : 0,
                s = 0,
                u = 0,
                c = 0;
              if (n === (r ? 'border' : 'content')) return 0;
              for (; a < 4; a += 2)
                'margin' === n && (c += j.css(e, n + ye[a], !0, o)),
                  r
                    ? ('content' === n &&
                        (u -= j.css(e, 'padding' + ye[a], !0, o)),
                      'margin' !== n &&
                        (u -= j.css(e, 'border' + ye[a] + 'Width', !0, o)))
                    : ((u += j.css(e, 'padding' + ye[a], !0, o)),
                      'padding' !== n
                        ? (u += j.css(e, 'border' + ye[a] + 'Width', !0, o))
                        : (s += j.css(e, 'border' + ye[a] + 'Width', !0, o)));
              return (
                !r &&
                  i >= 0 &&
                  (u +=
                    Math.max(
                      0,
                      Math.ceil(
                        e['offset' + t[0].toUpperCase() + t.slice(1)] -
                          i -
                          u -
                          s -
                          0.5,
                      ),
                    ) || 0),
                u + c
              );
            }
            function ft(e, t, n) {
              var r = Je(e),
                o =
                  (!g.boxSizingReliable() || n) &&
                  'border-box' === j.css(e, 'boxSizing', !1, r),
                i = o,
                a = et(e, t, r),
                s = 'offset' + t[0].toUpperCase() + t.slice(1);
              if (Ve.test(a)) {
                if (!n) return a;
                a = 'auto';
              }
              return (
                ((!g.boxSizingReliable() && o) ||
                  (!g.reliableTrDimensions() && A(e, 'tr')) ||
                  'auto' === a ||
                  (!parseFloat(a) &&
                    'inline' === j.css(e, 'display', !1, r))) &&
                  e.getClientRects().length &&
                  ((o = 'border-box' === j.css(e, 'boxSizing', !1, r)),
                  (i = s in e) && (a = e[s])),
                (a = parseFloat(a) || 0) +
                  lt(e, t, n || (o ? 'border' : 'content'), i, r, a) +
                  'px'
              );
            }
            function pt(e, t, n, r, o) {
              return new pt.prototype.init(e, t, n, r, o);
            }
            j.extend({
              cssHooks: {
                opacity: {
                  get: function (e, t) {
                    if (t) {
                      var n = et(e, 'opacity');
                      return '' === n ? '1' : n;
                    }
                  },
                },
              },
              cssNumber: {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageSlice: !0,
                columnCount: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                scale: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
              },
              cssProps: {},
              style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                  var i,
                    a,
                    s,
                    u = ie(t),
                    c = Ye.test(t),
                    l = e.style;
                  if (
                    (c || (t = it(u)),
                    (s = j.cssHooks[t] || j.cssHooks[u]),
                    void 0 === n)
                  )
                    return s && 'get' in s && void 0 !== (i = s.get(e, !1, r))
                      ? i
                      : l[t];
                  'string' === (a = o(n)) &&
                    (i = he.exec(n)) &&
                    i[1] &&
                    ((n = xe(e, t, i)), (a = 'number')),
                    null != n &&
                      n == n &&
                      ('number' !== a ||
                        c ||
                        (n += (i && i[3]) || (j.cssNumber[u] ? '' : 'px')),
                      g.clearCloneStyle ||
                        '' !== n ||
                        0 !== t.indexOf('background') ||
                        (l[t] = 'inherit'),
                      (s && 'set' in s && void 0 === (n = s.set(e, n, r))) ||
                        (c ? l.setProperty(t, n) : (l[t] = n)));
                }
              },
              css: function (e, t, n, r) {
                var o,
                  i,
                  a,
                  s = ie(t);
                return (
                  Ye.test(t) || (t = it(s)),
                  (a = j.cssHooks[t] || j.cssHooks[s]) &&
                    'get' in a &&
                    (o = a.get(e, !0, n)),
                  void 0 === o && (o = et(e, t, r)),
                  'normal' === o && t in ut && (o = ut[t]),
                  '' === n || n
                    ? ((i = parseFloat(o)),
                      !0 === n || isFinite(i) ? i || 0 : o)
                    : o
                );
              },
            }),
              j.each(['height', 'width'], function (e, t) {
                j.cssHooks[t] = {
                  get: function (e, n, r) {
                    if (n)
                      return !at.test(j.css(e, 'display')) ||
                        (e.getClientRects().length &&
                          e.getBoundingClientRect().width)
                        ? ft(e, t, r)
                        : Qe(e, st, function () {
                            return ft(e, t, r);
                          });
                  },
                  set: function (e, n, r) {
                    var o,
                      i = Je(e),
                      a = !g.scrollboxSize() && 'absolute' === i.position,
                      s =
                        (a || r) &&
                        'border-box' === j.css(e, 'boxSizing', !1, i),
                      u = r ? lt(e, t, r, s, i) : 0;
                    return (
                      s &&
                        a &&
                        (u -= Math.ceil(
                          e['offset' + t[0].toUpperCase() + t.slice(1)] -
                            parseFloat(i[t]) -
                            lt(e, t, 'border', !1, i) -
                            0.5,
                        )),
                      u &&
                        (o = he.exec(n)) &&
                        'px' !== (o[3] || 'px') &&
                        ((e.style[t] = n), (n = j.css(e, t))),
                      ct(0, n, u)
                    );
                  },
                };
              }),
              (j.cssHooks.marginLeft = tt(
                g.reliableMarginLeft,
                function (e, t) {
                  if (t)
                    return (
                      (parseFloat(et(e, 'marginLeft')) ||
                        e.getBoundingClientRect().left -
                          Qe(e, { marginLeft: 0 }, function () {
                            return e.getBoundingClientRect().left;
                          })) + 'px'
                    );
                },
              )),
              j.each(
                { margin: '', padding: '', border: 'Width' },
                function (e, t) {
                  (j.cssHooks[e + t] = {
                    expand: function (n) {
                      for (
                        var r = 0,
                          o = {},
                          i = 'string' == typeof n ? n.split(' ') : [n];
                        r < 4;
                        r++
                      )
                        o[e + ye[r] + t] = i[r] || i[r - 2] || i[0];
                      return o;
                    },
                  }),
                    'margin' !== e && (j.cssHooks[e + t].set = ct);
                },
              ),
              j.fn.extend({
                css: function (e, t) {
                  return te(
                    this,
                    function (e, t, n) {
                      var r,
                        o,
                        i = {},
                        a = 0;
                      if (Array.isArray(t)) {
                        for (r = Je(e), o = t.length; a < o; a++)
                          i[t[a]] = j.css(e, t[a], !1, r);
                        return i;
                      }
                      return void 0 !== n ? j.style(e, t, n) : j.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1,
                  );
                },
              }),
              (j.Tween = pt),
              (pt.prototype = {
                constructor: pt,
                init: function (e, t, n, r, o, i) {
                  (this.elem = e),
                    (this.prop = n),
                    (this.easing = o || j.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = i || (j.cssNumber[n] ? '' : 'px'));
                },
                cur: function () {
                  var e = pt.propHooks[this.prop];
                  return e && e.get
                    ? e.get(this)
                    : pt.propHooks._default.get(this);
                },
                run: function (e) {
                  var t,
                    n = pt.propHooks[this.prop];
                  return (
                    this.options.duration
                      ? (this.pos = t =
                          j.easing[this.easing](
                            e,
                            this.options.duration * e,
                            0,
                            1,
                            this.options.duration,
                          ))
                      : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                      this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : pt.propHooks._default.set(this),
                    this
                  );
                },
              }),
              (pt.prototype.init.prototype = pt.prototype),
              (pt.propHooks = {
                _default: {
                  get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                      (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                      ? e.elem[e.prop]
                      : (t = j.css(e.elem, e.prop, '')) && 'auto' !== t
                        ? t
                        : 0;
                  },
                  set: function (e) {
                    j.fx.step[e.prop]
                      ? j.fx.step[e.prop](e)
                      : 1 !== e.elem.nodeType ||
                          (!j.cssHooks[e.prop] &&
                            null == e.elem.style[it(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : j.style(e.elem, e.prop, e.now + e.unit);
                  },
                },
              }),
              (pt.propHooks.scrollTop = pt.propHooks.scrollLeft =
                {
                  set: function (e) {
                    e.elem.nodeType &&
                      e.elem.parentNode &&
                      (e.elem[e.prop] = e.now);
                  },
                }),
              (j.easing = {
                linear: function (e) {
                  return e;
                },
                swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: 'swing',
              }),
              (j.fx = pt.prototype.init),
              (j.fx.step = {});
            var dt,
              ht,
              yt = /^(?:toggle|show|hide)$/,
              vt = /queueHooks$/;
            function gt() {
              ht &&
                (!1 === x.hidden && n.requestAnimationFrame
                  ? n.requestAnimationFrame(gt)
                  : n.setTimeout(gt, j.fx.interval),
                j.fx.tick());
            }
            function mt() {
              return (
                n.setTimeout(function () {
                  dt = void 0;
                }),
                (dt = Date.now())
              );
            }
            function bt(e, t) {
              var n,
                r = 0,
                o = { height: e };
              for (t = t ? 1 : 0; r < 4; r += 2 - t)
                o['margin' + (n = ye[r])] = o['padding' + n] = e;
              return t && (o.opacity = o.width = e), o;
            }
            function xt(e, t, n) {
              for (
                var r,
                  o = (wt.tweeners[t] || []).concat(wt.tweeners['*']),
                  i = 0,
                  a = o.length;
                i < a;
                i++
              )
                if ((r = o[i].call(n, t, e))) return r;
            }
            function wt(e, t, n) {
              var r,
                o,
                i = 0,
                a = wt.prefilters.length,
                s = j.Deferred().always(function () {
                  delete u.elem;
                }),
                u = function () {
                  if (o) return !1;
                  for (
                    var t = dt || mt(),
                      n = Math.max(0, c.startTime + c.duration - t),
                      r = 1 - (n / c.duration || 0),
                      i = 0,
                      a = c.tweens.length;
                    i < a;
                    i++
                  )
                    c.tweens[i].run(r);
                  return (
                    s.notifyWith(e, [c, r, n]),
                    r < 1 && a
                      ? n
                      : (a || s.notifyWith(e, [c, 1, 0]),
                        s.resolveWith(e, [c]),
                        !1)
                  );
                },
                c = s.promise({
                  elem: e,
                  props: j.extend({}, t),
                  opts: j.extend(
                    !0,
                    { specialEasing: {}, easing: j.easing._default },
                    n,
                  ),
                  originalProperties: t,
                  originalOptions: n,
                  startTime: dt || mt(),
                  duration: n.duration,
                  tweens: [],
                  createTween: function (t, n) {
                    var r = j.Tween(
                      e,
                      c.opts,
                      t,
                      n,
                      c.opts.specialEasing[t] || c.opts.easing,
                    );
                    return c.tweens.push(r), r;
                  },
                  stop: function (t) {
                    var n = 0,
                      r = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < r; n++) c.tweens[n].run(1);
                    return (
                      t
                        ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                        : s.rejectWith(e, [c, t]),
                      this
                    );
                  },
                }),
                l = c.props;
              for (
                (function (e, t) {
                  var n, r, o, i, a;
                  for (n in e)
                    if (
                      ((o = t[(r = ie(n))]),
                      (i = e[n]),
                      Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                      n !== r && ((e[r] = i), delete e[n]),
                      (a = j.cssHooks[r]) && ('expand' in a))
                    )
                      for (n in ((i = a.expand(i)), delete e[r], i))
                        (n in e) || ((e[n] = i[n]), (t[n] = o));
                    else t[r] = o;
                })(l, c.opts.specialEasing);
                i < a;
                i++
              )
                if ((r = wt.prefilters[i].call(c, e, l, c.opts)))
                  return (
                    m(r.stop) &&
                      (j._queueHooks(c.elem, c.opts.queue).stop =
                        r.stop.bind(r)),
                    r
                  );
              return (
                j.map(l, xt, c),
                m(c.opts.start) && c.opts.start.call(e, c),
                c
                  .progress(c.opts.progress)
                  .done(c.opts.done, c.opts.complete)
                  .fail(c.opts.fail)
                  .always(c.opts.always),
                j.fx.timer(
                  j.extend(u, { elem: e, anim: c, queue: c.opts.queue }),
                ),
                c
              );
            }
            (j.Animation = j.extend(wt, {
              tweeners: {
                '*': [
                  function (e, t) {
                    var n = this.createTween(e, t);
                    return xe(n.elem, e, he.exec(t), n), n;
                  },
                ],
              },
              tweener: function (e, t) {
                m(e) ? ((t = e), (e = ['*'])) : (e = e.match(Z));
                for (var n, r = 0, o = e.length; r < o; r++)
                  (n = e[r]),
                    (wt.tweeners[n] = wt.tweeners[n] || []),
                    wt.tweeners[n].unshift(t);
              },
              prefilters: [
                function (e, t, n) {
                  var r,
                    o,
                    i,
                    a,
                    s,
                    u,
                    c,
                    l,
                    f = 'width' in t || 'height' in t,
                    p = this,
                    d = {},
                    h = e.style,
                    y = e.nodeType && be(e),
                    v = ue.get(e, 'fxshow');
                  for (r in (n.queue ||
                    (null == (a = j._queueHooks(e, 'fx')).unqueued &&
                      ((a.unqueued = 0),
                      (s = a.empty.fire),
                      (a.empty.fire = function () {
                        a.unqueued || s();
                      })),
                    a.unqueued++,
                    p.always(function () {
                      p.always(function () {
                        a.unqueued--, j.queue(e, 'fx').length || a.empty.fire();
                      });
                    })),
                  t))
                    if (((o = t[r]), yt.test(o))) {
                      if (
                        (delete t[r],
                        (i = i || 'toggle' === o),
                        o === (y ? 'hide' : 'show'))
                      ) {
                        if ('show' !== o || !v || void 0 === v[r]) continue;
                        y = !0;
                      }
                      d[r] = (v && v[r]) || j.style(e, r);
                    }
                  if ((u = !j.isEmptyObject(t)) || !j.isEmptyObject(d))
                    for (r in (f &&
                      1 === e.nodeType &&
                      ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                      null == (c = v && v.display) &&
                        (c = ue.get(e, 'display')),
                      'none' === (l = j.css(e, 'display')) &&
                        (c
                          ? (l = c)
                          : (Se([e], !0),
                            (c = e.style.display || c),
                            (l = j.css(e, 'display')),
                            Se([e]))),
                      ('inline' === l || ('inline-block' === l && null != c)) &&
                        'none' === j.css(e, 'float') &&
                        (u ||
                          (p.done(function () {
                            h.display = c;
                          }),
                          null == c &&
                            ((l = h.display), (c = 'none' === l ? '' : l))),
                        (h.display = 'inline-block'))),
                    n.overflow &&
                      ((h.overflow = 'hidden'),
                      p.always(function () {
                        (h.overflow = n.overflow[0]),
                          (h.overflowX = n.overflow[1]),
                          (h.overflowY = n.overflow[2]);
                      })),
                    (u = !1),
                    d))
                      u ||
                        (v
                          ? 'hidden' in v && (y = v.hidden)
                          : (v = ue.access(e, 'fxshow', { display: c })),
                        i && (v.hidden = !y),
                        y && Se([e], !0),
                        p.done(function () {
                          for (r in (y || Se([e]), ue.remove(e, 'fxshow'), d))
                            j.style(e, r, d[r]);
                        })),
                        (u = xt(y ? v[r] : 0, r, p)),
                        r in v ||
                          ((v[r] = u.start),
                          y && ((u.end = u.start), (u.start = 0)));
                },
              ],
              prefilter: function (e, t) {
                t ? wt.prefilters.unshift(e) : wt.prefilters.push(e);
              },
            })),
              (j.speed = function (e, t, n) {
                var r =
                  e && 'object' === o(e)
                    ? j.extend({}, e)
                    : {
                        complete: n || (!n && t) || (m(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !m(t) && t),
                      };
                return (
                  j.fx.off
                    ? (r.duration = 0)
                    : 'number' != typeof r.duration &&
                      (r.duration in j.fx.speeds
                        ? (r.duration = j.fx.speeds[r.duration])
                        : (r.duration = j.fx.speeds._default)),
                  (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
                  (r.old = r.complete),
                  (r.complete = function () {
                    m(r.old) && r.old.call(this),
                      r.queue && j.dequeue(this, r.queue);
                  }),
                  r
                );
              }),
              j.fn.extend({
                fadeTo: function (e, t, n, r) {
                  return this.filter(be)
                    .css('opacity', 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
                },
                animate: function (e, t, n, r) {
                  var o = j.isEmptyObject(e),
                    i = j.speed(t, n, r),
                    a = function () {
                      var t = wt(this, j.extend({}, e), i);
                      (o || ue.get(this, 'finish')) && t.stop(!0);
                    };
                  return (
                    (a.finish = a),
                    o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                  );
                },
                stop: function (e, t, n) {
                  var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                  };
                  return (
                    'string' != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && this.queue(e || 'fx', []),
                    this.each(function () {
                      var t = !0,
                        o = null != e && e + 'queueHooks',
                        i = j.timers,
                        a = ue.get(this);
                      if (o) a[o] && a[o].stop && r(a[o]);
                      else
                        for (o in a) a[o] && a[o].stop && vt.test(o) && r(a[o]);
                      for (o = i.length; o--; )
                        i[o].elem !== this ||
                          (null != e && i[o].queue !== e) ||
                          (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                      (!t && n) || j.dequeue(this, e);
                    })
                  );
                },
                finish: function (e) {
                  return (
                    !1 !== e && (e = e || 'fx'),
                    this.each(function () {
                      var t,
                        n = ue.get(this),
                        r = n[e + 'queue'],
                        o = n[e + 'queueHooks'],
                        i = j.timers,
                        a = r ? r.length : 0;
                      for (
                        n.finish = !0,
                          j.queue(this, e, []),
                          o && o.stop && o.stop.call(this, !0),
                          t = i.length;
                        t--;

                      )
                        i[t].elem === this &&
                          i[t].queue === e &&
                          (i[t].anim.stop(!0), i.splice(t, 1));
                      for (t = 0; t < a; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                      delete n.finish;
                    })
                  );
                },
              }),
              j.each(['toggle', 'show', 'hide'], function (e, t) {
                var n = j.fn[t];
                j.fn[t] = function (e, r, o) {
                  return null == e || 'boolean' == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(bt(t, !0), e, r, o);
                };
              }),
              j.each(
                {
                  slideDown: bt('show'),
                  slideUp: bt('hide'),
                  slideToggle: bt('toggle'),
                  fadeIn: { opacity: 'show' },
                  fadeOut: { opacity: 'hide' },
                  fadeToggle: { opacity: 'toggle' },
                },
                function (e, t) {
                  j.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                  };
                },
              ),
              (j.timers = []),
              (j.fx.tick = function () {
                var e,
                  t = 0,
                  n = j.timers;
                for (dt = Date.now(); t < n.length; t++)
                  (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || j.fx.stop(), (dt = void 0);
              }),
              (j.fx.timer = function (e) {
                j.timers.push(e), j.fx.start();
              }),
              (j.fx.interval = 13),
              (j.fx.start = function () {
                ht || ((ht = !0), gt());
              }),
              (j.fx.stop = function () {
                ht = null;
              }),
              (j.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (j.fn.delay = function (e, t) {
                return (
                  (e = (j.fx && j.fx.speeds[e]) || e),
                  (t = t || 'fx'),
                  this.queue(t, function (t, r) {
                    var o = n.setTimeout(t, e);
                    r.stop = function () {
                      n.clearTimeout(o);
                    };
                  })
                );
              }),
              (function () {
                var e = x.createElement('input'),
                  t = x
                    .createElement('select')
                    .appendChild(x.createElement('option'));
                (e.type = 'checkbox'),
                  (g.checkOn = '' !== e.value),
                  (g.optSelected = t.selected),
                  ((e = x.createElement('input')).value = 't'),
                  (e.type = 'radio'),
                  (g.radioValue = 't' === e.value);
              })();
            var Tt,
              St = j.expr.attrHandle;
            j.fn.extend({
              attr: function (e, t) {
                return te(this, j.attr, e, t, arguments.length > 1);
              },
              removeAttr: function (e) {
                return this.each(function () {
                  j.removeAttr(this, e);
                });
              },
            }),
              j.extend({
                attr: function (e, t, n) {
                  var r,
                    o,
                    i = e.nodeType;
                  if (3 !== i && 8 !== i && 2 !== i)
                    return void 0 === e.getAttribute
                      ? j.prop(e, t, n)
                      : ((1 === i && j.isXMLDoc(e)) ||
                          (o =
                            j.attrHooks[t.toLowerCase()] ||
                            (j.expr.match.bool.test(t) ? Tt : void 0)),
                        void 0 !== n
                          ? null === n
                            ? void j.removeAttr(e, t)
                            : o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                              ? r
                              : (e.setAttribute(t, n + ''), n)
                          : o && 'get' in o && null !== (r = o.get(e, t))
                            ? r
                            : null == (r = j.find.attr(e, t))
                              ? void 0
                              : r);
                },
                attrHooks: {
                  type: {
                    set: function (e, t) {
                      if (!g.radioValue && 'radio' === t && A(e, 'input')) {
                        var n = e.value;
                        return e.setAttribute('type', t), n && (e.value = n), t;
                      }
                    },
                  },
                },
                removeAttr: function (e, t) {
                  var n,
                    r = 0,
                    o = t && t.match(Z);
                  if (o && 1 === e.nodeType)
                    for (; (n = o[r++]); ) e.removeAttribute(n);
                },
              }),
              (Tt = {
                set: function (e, t, n) {
                  return (
                    !1 === t ? j.removeAttr(e, n) : e.setAttribute(n, n), n
                  );
                },
              }),
              j.each(j.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = St[t] || j.find.attr;
                St[t] = function (e, t, r) {
                  var o,
                    i,
                    a = t.toLowerCase();
                  return (
                    r ||
                      ((i = St[a]),
                      (St[a] = o),
                      (o = null != n(e, t, r) ? a : null),
                      (St[a] = i)),
                    o
                  );
                };
              });
            var Et = /^(?:input|select|textarea|button)$/i,
              kt = /^(?:a|area)$/i;
            function jt(e) {
              return (e.match(Z) || []).join(' ');
            }
            function Ct(e) {
              return (e.getAttribute && e.getAttribute('class')) || '';
            }
            function At(e) {
              return Array.isArray(e)
                ? e
                : ('string' == typeof e && e.match(Z)) || [];
            }
            j.fn.extend({
              prop: function (e, t) {
                return te(this, j.prop, e, t, arguments.length > 1);
              },
              removeProp: function (e) {
                return this.each(function () {
                  delete this[j.propFix[e] || e];
                });
              },
            }),
              j.extend({
                prop: function (e, t, n) {
                  var r,
                    o,
                    i = e.nodeType;
                  if (3 !== i && 8 !== i && 2 !== i)
                    return (
                      (1 === i && j.isXMLDoc(e)) ||
                        ((t = j.propFix[t] || t), (o = j.propHooks[t])),
                      void 0 !== n
                        ? o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e[t] = n)
                        : o && 'get' in o && null !== (r = o.get(e, t))
                          ? r
                          : e[t]
                    );
                },
                propHooks: {
                  tabIndex: {
                    get: function (e) {
                      var t = j.find.attr(e, 'tabindex');
                      return t
                        ? parseInt(t, 10)
                        : Et.test(e.nodeName) || (kt.test(e.nodeName) && e.href)
                          ? 0
                          : -1;
                    },
                  },
                },
                propFix: { for: 'htmlFor', class: 'className' },
              }),
              g.optSelected ||
                (j.propHooks.selected = {
                  get: function (e) {
                    var t = e.parentNode;
                    return (
                      t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                  },
                  set: function (e) {
                    var t = e.parentNode;
                    t &&
                      (t.selectedIndex,
                      t.parentNode && t.parentNode.selectedIndex);
                  },
                }),
              j.each(
                [
                  'tabIndex',
                  'readOnly',
                  'maxLength',
                  'cellSpacing',
                  'cellPadding',
                  'rowSpan',
                  'colSpan',
                  'useMap',
                  'frameBorder',
                  'contentEditable',
                ],
                function () {
                  j.propFix[this.toLowerCase()] = this;
                },
              ),
              j.fn.extend({
                addClass: function (e) {
                  var t, n, r, o, i, a;
                  return m(e)
                    ? this.each(function (t) {
                        j(this).addClass(e.call(this, t, Ct(this)));
                      })
                    : (t = At(e)).length
                      ? this.each(function () {
                          if (
                            ((r = Ct(this)),
                            (n = 1 === this.nodeType && ' ' + jt(r) + ' '))
                          ) {
                            for (i = 0; i < t.length; i++)
                              (o = t[i]),
                                n.indexOf(' ' + o + ' ') < 0 && (n += o + ' ');
                            (a = jt(n)),
                              r !== a && this.setAttribute('class', a);
                          }
                        })
                      : this;
                },
                removeClass: function (e) {
                  var t, n, r, o, i, a;
                  return m(e)
                    ? this.each(function (t) {
                        j(this).removeClass(e.call(this, t, Ct(this)));
                      })
                    : arguments.length
                      ? (t = At(e)).length
                        ? this.each(function () {
                            if (
                              ((r = Ct(this)),
                              (n = 1 === this.nodeType && ' ' + jt(r) + ' '))
                            ) {
                              for (i = 0; i < t.length; i++)
                                for (o = t[i]; n.indexOf(' ' + o + ' ') > -1; )
                                  n = n.replace(' ' + o + ' ', ' ');
                              (a = jt(n)),
                                r !== a && this.setAttribute('class', a);
                            }
                          })
                        : this
                      : this.attr('class', '');
                },
                toggleClass: function (e, t) {
                  var n,
                    r,
                    i,
                    a,
                    s = o(e),
                    u = 'string' === s || Array.isArray(e);
                  return m(e)
                    ? this.each(function (n) {
                        j(this).toggleClass(e.call(this, n, Ct(this), t), t);
                      })
                    : 'boolean' == typeof t && u
                      ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                      : ((n = At(e)),
                        this.each(function () {
                          if (u)
                            for (a = j(this), i = 0; i < n.length; i++)
                              (r = n[i]),
                                a.hasClass(r)
                                  ? a.removeClass(r)
                                  : a.addClass(r);
                          else
                            (void 0 !== e && 'boolean' !== s) ||
                              ((r = Ct(this)) &&
                                ue.set(this, '__className__', r),
                              this.setAttribute &&
                                this.setAttribute(
                                  'class',
                                  r || !1 === e
                                    ? ''
                                    : ue.get(this, '__className__') || '',
                                ));
                        }));
                },
                hasClass: function (e) {
                  var t,
                    n,
                    r = 0;
                  for (t = ' ' + e + ' '; (n = this[r++]); )
                    if (
                      1 === n.nodeType &&
                      (' ' + jt(Ct(n)) + ' ').indexOf(t) > -1
                    )
                      return !0;
                  return !1;
                },
              });
            var Dt = /\r/g;
            j.fn.extend({
              val: function (e) {
                var t,
                  n,
                  r,
                  o = this[0];
                return arguments.length
                  ? ((r = m(e)),
                    this.each(function (n) {
                      var o;
                      1 === this.nodeType &&
                        (null == (o = r ? e.call(this, n, j(this).val()) : e)
                          ? (o = '')
                          : 'number' == typeof o
                            ? (o += '')
                            : Array.isArray(o) &&
                              (o = j.map(o, function (e) {
                                return null == e ? '' : e + '';
                              })),
                        ((t =
                          j.valHooks[this.type] ||
                          j.valHooks[this.nodeName.toLowerCase()]) &&
                          'set' in t &&
                          void 0 !== t.set(this, o, 'value')) ||
                          (this.value = o));
                    }))
                  : o
                    ? (t =
                        j.valHooks[o.type] ||
                        j.valHooks[o.nodeName.toLowerCase()]) &&
                      'get' in t &&
                      void 0 !== (n = t.get(o, 'value'))
                      ? n
                      : 'string' == typeof (n = o.value)
                        ? n.replace(Dt, '')
                        : null == n
                          ? ''
                          : n
                    : void 0;
              },
            }),
              j.extend({
                valHooks: {
                  option: {
                    get: function (e) {
                      var t = j.find.attr(e, 'value');
                      return null != t ? t : jt(j.text(e));
                    },
                  },
                  select: {
                    get: function (e) {
                      var t,
                        n,
                        r,
                        o = e.options,
                        i = e.selectedIndex,
                        a = 'select-one' === e.type,
                        s = a ? null : [],
                        u = a ? i + 1 : o.length;
                      for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                        if (
                          ((n = o[r]).selected || r === i) &&
                          !n.disabled &&
                          (!n.parentNode.disabled ||
                            !A(n.parentNode, 'optgroup'))
                        ) {
                          if (((t = j(n).val()), a)) return t;
                          s.push(t);
                        }
                      return s;
                    },
                    set: function (e, t) {
                      for (
                        var n,
                          r,
                          o = e.options,
                          i = j.makeArray(t),
                          a = o.length;
                        a--;

                      )
                        ((r = o[a]).selected =
                          j.inArray(j.valHooks.option.get(r), i) > -1) &&
                          (n = !0);
                      return n || (e.selectedIndex = -1), i;
                    },
                  },
                },
              }),
              j.each(['radio', 'checkbox'], function () {
                (j.valHooks[this] = {
                  set: function (e, t) {
                    if (Array.isArray(t))
                      return (e.checked = j.inArray(j(e).val(), t) > -1);
                  },
                }),
                  g.checkOn ||
                    (j.valHooks[this].get = function (e) {
                      return null === e.getAttribute('value') ? 'on' : e.value;
                    });
              });
            var Ot = n.location,
              Lt = { guid: Date.now() },
              Nt = /\?/;
            j.parseXML = function (e) {
              var t, r;
              if (!e || 'string' != typeof e) return null;
              try {
                t = new n.DOMParser().parseFromString(e, 'text/xml');
              } catch (e) {}
              return (
                (r = t && t.getElementsByTagName('parsererror')[0]),
                (t && !r) ||
                  j.error(
                    'Invalid XML: ' +
                      (r
                        ? j
                            .map(r.childNodes, function (e) {
                              return e.textContent;
                            })
                            .join('\n')
                        : e),
                  ),
                t
              );
            };
            var Pt = /^(?:focusinfocus|focusoutblur)$/,
              qt = function (e) {
                e.stopPropagation();
              };
            j.extend(j.event, {
              trigger: function (e, t, r, i) {
                var a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d,
                  y = [r || x],
                  v = h.call(e, 'type') ? e.type : e,
                  g = h.call(e, 'namespace') ? e.namespace.split('.') : [];
                if (
                  ((s = d = u = r = r || x),
                  3 !== r.nodeType &&
                    8 !== r.nodeType &&
                    !Pt.test(v + j.event.triggered) &&
                    (v.indexOf('.') > -1 &&
                      ((g = v.split('.')), (v = g.shift()), g.sort()),
                    (l = v.indexOf(':') < 0 && 'on' + v),
                    ((e = e[j.expando]
                      ? e
                      : new j.Event(v, 'object' === o(e) && e)).isTrigger = i
                      ? 2
                      : 3),
                    (e.namespace = g.join('.')),
                    (e.rnamespace = e.namespace
                      ? new RegExp(
                          '(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)',
                        )
                      : null),
                    (e.result = void 0),
                    e.target || (e.target = r),
                    (t = null == t ? [e] : j.makeArray(t, [e])),
                    (p = j.event.special[v] || {}),
                    i || !p.trigger || !1 !== p.trigger.apply(r, t)))
                ) {
                  if (!i && !p.noBubble && !b(r)) {
                    for (
                      c = p.delegateType || v,
                        Pt.test(c + v) || (s = s.parentNode);
                      s;
                      s = s.parentNode
                    )
                      y.push(s), (u = s);
                    u === (r.ownerDocument || x) &&
                      y.push(u.defaultView || u.parentWindow || n);
                  }
                  for (a = 0; (s = y[a++]) && !e.isPropagationStopped(); )
                    (d = s),
                      (e.type = a > 1 ? c : p.bindType || v),
                      (f =
                        (ue.get(s, 'events') || Object.create(null))[e.type] &&
                        ue.get(s, 'handle')) && f.apply(s, t),
                      (f = l && s[l]) &&
                        f.apply &&
                        ae(s) &&
                        ((e.result = f.apply(s, t)),
                        !1 === e.result && e.preventDefault());
                  return (
                    (e.type = v),
                    i ||
                      e.isDefaultPrevented() ||
                      (p._default && !1 !== p._default.apply(y.pop(), t)) ||
                      !ae(r) ||
                      (l &&
                        m(r[v]) &&
                        !b(r) &&
                        ((u = r[l]) && (r[l] = null),
                        (j.event.triggered = v),
                        e.isPropagationStopped() && d.addEventListener(v, qt),
                        r[v](),
                        e.isPropagationStopped() &&
                          d.removeEventListener(v, qt),
                        (j.event.triggered = void 0),
                        u && (r[l] = u))),
                    e.result
                  );
                }
              },
              simulate: function (e, t, n) {
                var r = j.extend(new j.Event(), n, {
                  type: e,
                  isSimulated: !0,
                });
                j.event.trigger(r, null, t);
              },
            }),
              j.fn.extend({
                trigger: function (e, t) {
                  return this.each(function () {
                    j.event.trigger(e, t, this);
                  });
                },
                triggerHandler: function (e, t) {
                  var n = this[0];
                  if (n) return j.event.trigger(e, t, n, !0);
                },
              });
            var Ht = /\[\]$/,
              Mt = /\r?\n/g,
              Rt = /^(?:submit|button|image|reset|file)$/i,
              _t = /^(?:input|select|textarea|keygen)/i;
            function It(e, t, n, r) {
              var i;
              if (Array.isArray(t))
                j.each(t, function (t, i) {
                  n || Ht.test(e)
                    ? r(e, i)
                    : It(
                        e +
                          '[' +
                          ('object' === o(i) && null != i ? t : '') +
                          ']',
                        i,
                        n,
                        r,
                      );
                });
              else if (n || 'object' !== S(t)) r(e, t);
              else for (i in t) It(e + '[' + i + ']', t[i], n, r);
            }
            (j.param = function (e, t) {
              var n,
                r = [],
                o = function (e, t) {
                  var n = m(t) ? t() : t;
                  r[r.length] =
                    encodeURIComponent(e) +
                    '=' +
                    encodeURIComponent(null == n ? '' : n);
                };
              if (null == e) return '';
              if (Array.isArray(e) || (e.jquery && !j.isPlainObject(e)))
                j.each(e, function () {
                  o(this.name, this.value);
                });
              else for (n in e) It(n, e[n], t, o);
              return r.join('&');
            }),
              j.fn.extend({
                serialize: function () {
                  return j.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    var e = j.prop(this, 'elements');
                    return e ? j.makeArray(e) : this;
                  })
                    .filter(function () {
                      var e = this.type;
                      return (
                        this.name &&
                        !j(this).is(':disabled') &&
                        _t.test(this.nodeName) &&
                        !Rt.test(e) &&
                        (this.checked || !je.test(e))
                      );
                    })
                    .map(function (e, t) {
                      var n = j(this).val();
                      return null == n
                        ? null
                        : Array.isArray(n)
                          ? j.map(n, function (e) {
                              return {
                                name: t.name,
                                value: e.replace(Mt, '\r\n'),
                              };
                            })
                          : { name: t.name, value: n.replace(Mt, '\r\n') };
                    })
                    .get();
                },
              });
            var Ft = /%20/g,
              Wt = /#.*$/,
              Bt = /([?&])_=[^&]*/,
              $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              zt = /^(?:GET|HEAD)$/,
              Ut = /^\/\//,
              Xt = {},
              Gt = {},
              Zt = '*/'.concat('*'),
              Vt = x.createElement('a');
            function Yt(e) {
              return function (t, n) {
                'string' != typeof t && ((n = t), (t = '*'));
                var r,
                  o = 0,
                  i = t.toLowerCase().match(Z) || [];
                if (m(n))
                  for (; (r = i[o++]); )
                    '+' === r[0]
                      ? ((r = r.slice(1) || '*'),
                        (e[r] = e[r] || []).unshift(n))
                      : (e[r] = e[r] || []).push(n);
              };
            }
            function Jt(e, t, n, r) {
              var o = {},
                i = e === Gt;
              function a(s) {
                var u;
                return (
                  (o[s] = !0),
                  j.each(e[s] || [], function (e, s) {
                    var c = s(t, n, r);
                    return 'string' != typeof c || i || o[c]
                      ? i
                        ? !(u = c)
                        : void 0
                      : (t.dataTypes.unshift(c), a(c), !1);
                  }),
                  u
                );
              }
              return a(t.dataTypes[0]) || (!o['*'] && a('*'));
            }
            function Qt(e, t) {
              var n,
                r,
                o = j.ajaxSettings.flatOptions || {};
              for (n in t)
                void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
              return r && j.extend(!0, e, r), e;
            }
            (Vt.href = Ot.href),
              j.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                  url: Ot.href,
                  type: 'GET',
                  isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                      Ot.protocol,
                    ),
                  global: !0,
                  processData: !0,
                  async: !0,
                  contentType:
                    'application/x-www-form-urlencoded; charset=UTF-8',
                  accepts: {
                    '*': Zt,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript',
                  },
                  contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/,
                  },
                  responseFields: {
                    xml: 'responseXML',
                    text: 'responseText',
                    json: 'responseJSON',
                  },
                  converters: {
                    '* text': String,
                    'text html': !0,
                    'text json': JSON.parse,
                    'text xml': j.parseXML,
                  },
                  flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (e, t) {
                  return t
                    ? Qt(Qt(e, j.ajaxSettings), t)
                    : Qt(j.ajaxSettings, e);
                },
                ajaxPrefilter: Yt(Xt),
                ajaxTransport: Yt(Gt),
                ajax: function (e, t) {
                  'object' === o(e) && ((t = e), (e = void 0)), (t = t || {});
                  var r,
                    i,
                    a,
                    s,
                    u,
                    c,
                    l,
                    f,
                    p,
                    d,
                    h = j.ajaxSetup({}, t),
                    y = h.context || h,
                    v = h.context && (y.nodeType || y.jquery) ? j(y) : j.event,
                    g = j.Deferred(),
                    m = j.Callbacks('once memory'),
                    b = h.statusCode || {},
                    w = {},
                    T = {},
                    S = 'canceled',
                    E = {
                      readyState: 0,
                      getResponseHeader: function (e) {
                        var t;
                        if (l) {
                          if (!s)
                            for (s = {}; (t = $t.exec(a)); )
                              s[t[1].toLowerCase() + ' '] = (
                                s[t[1].toLowerCase() + ' '] || []
                              ).concat(t[2]);
                          t = s[e.toLowerCase() + ' '];
                        }
                        return null == t ? null : t.join(', ');
                      },
                      getAllResponseHeaders: function () {
                        return l ? a : null;
                      },
                      setRequestHeader: function (e, t) {
                        return (
                          null == l &&
                            ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                            (w[e] = t)),
                          this
                        );
                      },
                      overrideMimeType: function (e) {
                        return null == l && (h.mimeType = e), this;
                      },
                      statusCode: function (e) {
                        var t;
                        if (e)
                          if (l) E.always(e[E.status]);
                          else for (t in e) b[t] = [b[t], e[t]];
                        return this;
                      },
                      abort: function (e) {
                        var t = e || S;
                        return r && r.abort(t), k(0, t), this;
                      },
                    };
                  if (
                    (g.promise(E),
                    (h.url = ((e || h.url || Ot.href) + '').replace(
                      Ut,
                      Ot.protocol + '//',
                    )),
                    (h.type = t.method || t.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || '*')
                      .toLowerCase()
                      .match(Z) || ['']),
                    null == h.crossDomain)
                  ) {
                    c = x.createElement('a');
                    try {
                      (c.href = h.url),
                        (c.href = c.href),
                        (h.crossDomain =
                          Vt.protocol + '//' + Vt.host !=
                          c.protocol + '//' + c.host);
                    } catch (e) {
                      h.crossDomain = !0;
                    }
                  }
                  if (
                    (h.data &&
                      h.processData &&
                      'string' != typeof h.data &&
                      (h.data = j.param(h.data, h.traditional)),
                    Jt(Xt, h, t, E),
                    l)
                  )
                    return E;
                  for (p in ((f = j.event && h.global) &&
                    0 == j.active++ &&
                    j.event.trigger('ajaxStart'),
                  (h.type = h.type.toUpperCase()),
                  (h.hasContent = !zt.test(h.type)),
                  (i = h.url.replace(Wt, '')),
                  h.hasContent
                    ? h.data &&
                      h.processData &&
                      0 ===
                        (h.contentType || '').indexOf(
                          'application/x-www-form-urlencoded',
                        ) &&
                      (h.data = h.data.replace(Ft, '+'))
                    : ((d = h.url.slice(i.length)),
                      h.data &&
                        (h.processData || 'string' == typeof h.data) &&
                        ((i += (Nt.test(i) ? '&' : '?') + h.data),
                        delete h.data),
                      !1 === h.cache &&
                        ((i = i.replace(Bt, '$1')),
                        (d = (Nt.test(i) ? '&' : '?') + '_=' + Lt.guid++ + d)),
                      (h.url = i + d)),
                  h.ifModified &&
                    (j.lastModified[i] &&
                      E.setRequestHeader(
                        'If-Modified-Since',
                        j.lastModified[i],
                      ),
                    j.etag[i] &&
                      E.setRequestHeader('If-None-Match', j.etag[i])),
                  ((h.data && h.hasContent && !1 !== h.contentType) ||
                    t.contentType) &&
                    E.setRequestHeader('Content-Type', h.contentType),
                  E.setRequestHeader(
                    'Accept',
                    h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                      ? h.accepts[h.dataTypes[0]] +
                          ('*' !== h.dataTypes[0] ? ', ' + Zt + '; q=0.01' : '')
                      : h.accepts['*'],
                  ),
                  h.headers))
                    E.setRequestHeader(p, h.headers[p]);
                  if (h.beforeSend && (!1 === h.beforeSend.call(y, E, h) || l))
                    return E.abort();
                  if (
                    ((S = 'abort'),
                    m.add(h.complete),
                    E.done(h.success),
                    E.fail(h.error),
                    (r = Jt(Gt, h, t, E)))
                  ) {
                    if (
                      ((E.readyState = 1),
                      f && v.trigger('ajaxSend', [E, h]),
                      l)
                    )
                      return E;
                    h.async &&
                      h.timeout > 0 &&
                      (u = n.setTimeout(function () {
                        E.abort('timeout');
                      }, h.timeout));
                    try {
                      (l = !1), r.send(w, k);
                    } catch (e) {
                      if (l) throw e;
                      k(-1, e);
                    }
                  } else k(-1, 'No Transport');
                  function k(e, t, o, s) {
                    var c,
                      p,
                      d,
                      x,
                      w,
                      T = t;
                    l ||
                      ((l = !0),
                      u && n.clearTimeout(u),
                      (r = void 0),
                      (a = s || ''),
                      (E.readyState = e > 0 ? 4 : 0),
                      (c = (e >= 200 && e < 300) || 304 === e),
                      o &&
                        (x = (function (e, t, n) {
                          for (
                            var r, o, i, a, s = e.contents, u = e.dataTypes;
                            '*' === u[0];

                          )
                            u.shift(),
                              void 0 === r &&
                                (r =
                                  e.mimeType ||
                                  t.getResponseHeader('Content-Type'));
                          if (r)
                            for (o in s)
                              if (s[o] && s[o].test(r)) {
                                u.unshift(o);
                                break;
                              }
                          if (u[0] in n) i = u[0];
                          else {
                            for (o in n) {
                              if (!u[0] || e.converters[o + ' ' + u[0]]) {
                                i = o;
                                break;
                              }
                              a || (a = o);
                            }
                            i = i || a;
                          }
                          if (i) return i !== u[0] && u.unshift(i), n[i];
                        })(h, E, o)),
                      !c &&
                        j.inArray('script', h.dataTypes) > -1 &&
                        j.inArray('json', h.dataTypes) < 0 &&
                        (h.converters['text script'] = function () {}),
                      (x = (function (e, t, n, r) {
                        var o,
                          i,
                          a,
                          s,
                          u,
                          c = {},
                          l = e.dataTypes.slice();
                        if (l[1])
                          for (a in e.converters)
                            c[a.toLowerCase()] = e.converters[a];
                        for (i = l.shift(); i; )
                          if (
                            (e.responseFields[i] &&
                              (n[e.responseFields[i]] = t),
                            !u &&
                              r &&
                              e.dataFilter &&
                              (t = e.dataFilter(t, e.dataType)),
                            (u = i),
                            (i = l.shift()))
                          )
                            if ('*' === i) i = u;
                            else if ('*' !== u && u !== i) {
                              if (!(a = c[u + ' ' + i] || c['* ' + i]))
                                for (o in c)
                                  if (
                                    (s = o.split(' '))[1] === i &&
                                    (a = c[u + ' ' + s[0]] || c['* ' + s[0]])
                                  ) {
                                    !0 === a
                                      ? (a = c[o])
                                      : !0 !== c[o] &&
                                        ((i = s[0]), l.unshift(s[1]));
                                    break;
                                  }
                              if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else
                                  try {
                                    t = a(t);
                                  } catch (e) {
                                    return {
                                      state: 'parsererror',
                                      error: a
                                        ? e
                                        : 'No conversion from ' +
                                          u +
                                          ' to ' +
                                          i,
                                    };
                                  }
                            }
                        return { state: 'success', data: t };
                      })(h, x, E, c)),
                      c
                        ? (h.ifModified &&
                            ((w = E.getResponseHeader('Last-Modified')) &&
                              (j.lastModified[i] = w),
                            (w = E.getResponseHeader('etag')) &&
                              (j.etag[i] = w)),
                          204 === e || 'HEAD' === h.type
                            ? (T = 'nocontent')
                            : 304 === e
                              ? (T = 'notmodified')
                              : ((T = x.state),
                                (p = x.data),
                                (c = !(d = x.error))))
                        : ((d = T),
                          (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                      (E.status = e),
                      (E.statusText = (t || T) + ''),
                      c
                        ? g.resolveWith(y, [p, T, E])
                        : g.rejectWith(y, [E, T, d]),
                      E.statusCode(b),
                      (b = void 0),
                      f &&
                        v.trigger(c ? 'ajaxSuccess' : 'ajaxError', [
                          E,
                          h,
                          c ? p : d,
                        ]),
                      m.fireWith(y, [E, T]),
                      f &&
                        (v.trigger('ajaxComplete', [E, h]),
                        --j.active || j.event.trigger('ajaxStop')));
                  }
                  return E;
                },
                getJSON: function (e, t, n) {
                  return j.get(e, t, n, 'json');
                },
                getScript: function (e, t) {
                  return j.get(e, void 0, t, 'script');
                },
              }),
              j.each(['get', 'post'], function (e, t) {
                j[t] = function (e, n, r, o) {
                  return (
                    m(n) && ((o = o || r), (r = n), (n = void 0)),
                    j.ajax(
                      j.extend(
                        { url: e, type: t, dataType: o, data: n, success: r },
                        j.isPlainObject(e) && e,
                      ),
                    )
                  );
                };
              }),
              j.ajaxPrefilter(function (e) {
                var t;
                for (t in e.headers)
                  'content-type' === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || '');
              }),
              (j._evalUrl = function (e, t, n) {
                return j.ajax({
                  url: e,
                  type: 'GET',
                  dataType: 'script',
                  cache: !0,
                  async: !1,
                  global: !1,
                  converters: { 'text script': function () {} },
                  dataFilter: function (e) {
                    j.globalEval(e, t, n);
                  },
                });
              }),
              j.fn.extend({
                wrapAll: function (e) {
                  var t;
                  return (
                    this[0] &&
                      (m(e) && (e = e.call(this[0])),
                      (t = j(e, this[0].ownerDocument).eq(0).clone(!0)),
                      this[0].parentNode && t.insertBefore(this[0]),
                      t
                        .map(function () {
                          for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                          return e;
                        })
                        .append(this)),
                    this
                  );
                },
                wrapInner: function (e) {
                  return m(e)
                    ? this.each(function (t) {
                        j(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                        var t = j(this),
                          n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                      });
                },
                wrap: function (e) {
                  var t = m(e);
                  return this.each(function (n) {
                    j(this).wrapAll(t ? e.call(this, n) : e);
                  });
                },
                unwrap: function (e) {
                  return (
                    this.parent(e)
                      .not('body')
                      .each(function () {
                        j(this).replaceWith(this.childNodes);
                      }),
                    this
                  );
                },
              }),
              (j.expr.pseudos.hidden = function (e) {
                return !j.expr.pseudos.visible(e);
              }),
              (j.expr.pseudos.visible = function (e) {
                return !!(
                  e.offsetWidth ||
                  e.offsetHeight ||
                  e.getClientRects().length
                );
              }),
              (j.ajaxSettings.xhr = function () {
                try {
                  return new n.XMLHttpRequest();
                } catch (e) {}
              });
            var Kt = { 0: 200, 1223: 204 },
              en = j.ajaxSettings.xhr();
            (g.cors = !!en && 'withCredentials' in en),
              (g.ajax = en = !!en),
              j.ajaxTransport(function (e) {
                var t, r;
                if (g.cors || (en && !e.crossDomain))
                  return {
                    send: function (o, i) {
                      var a,
                        s = e.xhr();
                      if (
                        (s.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                      )
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                      for (a in (e.mimeType &&
                        s.overrideMimeType &&
                        s.overrideMimeType(e.mimeType),
                      e.crossDomain ||
                        o['X-Requested-With'] ||
                        (o['X-Requested-With'] = 'XMLHttpRequest'),
                      o))
                        s.setRequestHeader(a, o[a]);
                      (t = function (e) {
                        return function () {
                          t &&
                            ((t =
                              r =
                              s.onload =
                              s.onerror =
                              s.onabort =
                              s.ontimeout =
                              s.onreadystatechange =
                                null),
                            'abort' === e
                              ? s.abort()
                              : 'error' === e
                                ? 'number' != typeof s.status
                                  ? i(0, 'error')
                                  : i(s.status, s.statusText)
                                : i(
                                    Kt[s.status] || s.status,
                                    s.statusText,
                                    'text' !== (s.responseType || 'text') ||
                                      'string' != typeof s.responseText
                                      ? { binary: s.response }
                                      : { text: s.responseText },
                                    s.getAllResponseHeaders(),
                                  ));
                        };
                      }),
                        (s.onload = t()),
                        (r = s.onerror = s.ontimeout = t('error')),
                        void 0 !== s.onabort
                          ? (s.onabort = r)
                          : (s.onreadystatechange = function () {
                              4 === s.readyState &&
                                n.setTimeout(function () {
                                  t && r();
                                });
                            }),
                        (t = t('abort'));
                      try {
                        s.send((e.hasContent && e.data) || null);
                      } catch (e) {
                        if (t) throw e;
                      }
                    },
                    abort: function () {
                      t && t();
                    },
                  };
              }),
              j.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
              }),
              j.ajaxSetup({
                accepts: {
                  script:
                    'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                  'text script': function (e) {
                    return j.globalEval(e), e;
                  },
                },
              }),
              j.ajaxPrefilter('script', function (e) {
                void 0 === e.cache && (e.cache = !1),
                  e.crossDomain && (e.type = 'GET');
              }),
              j.ajaxTransport('script', function (e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs)
                  return {
                    send: function (r, o) {
                      (t = j('<script>')
                        .attr(e.scriptAttrs || {})
                        .prop({ charset: e.scriptCharset, src: e.url })
                        .on(
                          'load error',
                          (n = function (e) {
                            t.remove(),
                              (n = null),
                              e && o('error' === e.type ? 404 : 200, e.type);
                          }),
                        )),
                        x.head.appendChild(t[0]);
                    },
                    abort: function () {
                      n && n();
                    },
                  };
              });
            var tn,
              nn = [],
              rn = /(=)\?(?=&|$)|\?\?/;
            j.ajaxSetup({
              jsonp: 'callback',
              jsonpCallback: function () {
                var e = nn.pop() || j.expando + '_' + Lt.guid++;
                return (this[e] = !0), e;
              },
            }),
              j.ajaxPrefilter('json jsonp', function (e, t, r) {
                var o,
                  i,
                  a,
                  s =
                    !1 !== e.jsonp &&
                    (rn.test(e.url)
                      ? 'url'
                      : 'string' == typeof e.data &&
                        0 ===
                          (e.contentType || '').indexOf(
                            'application/x-www-form-urlencoded',
                          ) &&
                        rn.test(e.data) &&
                        'data');
                if (s || 'jsonp' === e.dataTypes[0])
                  return (
                    (o = e.jsonpCallback =
                      m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    s
                      ? (e[s] = e[s].replace(rn, '$1' + o))
                      : !1 !== e.jsonp &&
                        (e.url +=
                          (Nt.test(e.url) ? '&' : '?') + e.jsonp + '=' + o),
                    (e.converters['script json'] = function () {
                      return a || j.error(o + ' was not called'), a[0];
                    }),
                    (e.dataTypes[0] = 'json'),
                    (i = n[o]),
                    (n[o] = function () {
                      a = arguments;
                    }),
                    r.always(function () {
                      void 0 === i ? j(n).removeProp(o) : (n[o] = i),
                        e[o] &&
                          ((e.jsonpCallback = t.jsonpCallback), nn.push(o)),
                        a && m(i) && i(a[0]),
                        (a = i = void 0);
                    }),
                    'script'
                  );
              }),
              (g.createHTMLDocument =
                (((tn =
                  x.implementation.createHTMLDocument('').body).innerHTML =
                  '<form></form><form></form>'),
                2 === tn.childNodes.length)),
              (j.parseHTML = function (e, t, n) {
                return 'string' != typeof e
                  ? []
                  : ('boolean' == typeof t && ((n = t), (t = !1)),
                    t ||
                      (g.createHTMLDocument
                        ? (((r = (t =
                            x.implementation.createHTMLDocument(
                              '',
                            )).createElement('base')).href = x.location.href),
                          t.head.appendChild(r))
                        : (t = x)),
                    (i = !n && []),
                    (o = W.exec(e))
                      ? [t.createElement(o[1])]
                      : ((o = Pe([e], t, i)),
                        i && i.length && j(i).remove(),
                        j.merge([], o.childNodes)));
                var r, o, i;
              }),
              (j.fn.load = function (e, t, n) {
                var r,
                  i,
                  a,
                  s = this,
                  u = e.indexOf(' ');
                return (
                  u > -1 && ((r = jt(e.slice(u))), (e = e.slice(0, u))),
                  m(t)
                    ? ((n = t), (t = void 0))
                    : t && 'object' === o(t) && (i = 'POST'),
                  s.length > 0 &&
                    j
                      .ajax({
                        url: e,
                        type: i || 'GET',
                        dataType: 'html',
                        data: t,
                      })
                      .done(function (e) {
                        (a = arguments),
                          s.html(
                            r ? j('<div>').append(j.parseHTML(e)).find(r) : e,
                          );
                      })
                      .always(
                        n &&
                          function (e, t) {
                            s.each(function () {
                              n.apply(this, a || [e.responseText, t, e]);
                            });
                          },
                      ),
                  this
                );
              }),
              (j.expr.pseudos.animated = function (e) {
                return j.grep(j.timers, function (t) {
                  return e === t.elem;
                }).length;
              }),
              (j.offset = {
                setOffset: function (e, t, n) {
                  var r,
                    o,
                    i,
                    a,
                    s,
                    u,
                    c = j.css(e, 'position'),
                    l = j(e),
                    f = {};
                  'static' === c && (e.style.position = 'relative'),
                    (s = l.offset()),
                    (i = j.css(e, 'top')),
                    (u = j.css(e, 'left')),
                    ('absolute' === c || 'fixed' === c) &&
                    (i + u).indexOf('auto') > -1
                      ? ((a = (r = l.position()).top), (o = r.left))
                      : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, j.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + o),
                    'using' in t ? t.using.call(e, f) : l.css(f);
                },
              }),
              j.fn.extend({
                offset: function (e) {
                  if (arguments.length)
                    return void 0 === e
                      ? this
                      : this.each(function (t) {
                          j.offset.setOffset(this, e, t);
                        });
                  var t,
                    n,
                    r = this[0];
                  return r
                    ? r.getClientRects().length
                      ? ((t = r.getBoundingClientRect()),
                        (n = r.ownerDocument.defaultView),
                        {
                          top: t.top + n.pageYOffset,
                          left: t.left + n.pageXOffset,
                        })
                      : { top: 0, left: 0 }
                    : void 0;
                },
                position: function () {
                  if (this[0]) {
                    var e,
                      t,
                      n,
                      r = this[0],
                      o = { top: 0, left: 0 };
                    if ('fixed' === j.css(r, 'position'))
                      t = r.getBoundingClientRect();
                    else {
                      for (
                        t = this.offset(),
                          n = r.ownerDocument,
                          e = r.offsetParent || n.documentElement;
                        e &&
                        (e === n.body || e === n.documentElement) &&
                        'static' === j.css(e, 'position');

                      )
                        e = e.parentNode;
                      e &&
                        e !== r &&
                        1 === e.nodeType &&
                        (((o = j(e).offset()).top += j.css(
                          e,
                          'borderTopWidth',
                          !0,
                        )),
                        (o.left += j.css(e, 'borderLeftWidth', !0)));
                    }
                    return {
                      top: t.top - o.top - j.css(r, 'marginTop', !0),
                      left: t.left - o.left - j.css(r, 'marginLeft', !0),
                    };
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (
                      var e = this.offsetParent;
                      e && 'static' === j.css(e, 'position');

                    )
                      e = e.offsetParent;
                    return e || ve;
                  });
                },
              }),
              j.each(
                { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
                function (e, t) {
                  var n = 'pageYOffset' === t;
                  j.fn[e] = function (r) {
                    return te(
                      this,
                      function (e, r, o) {
                        var i;
                        if (
                          (b(e)
                            ? (i = e)
                            : 9 === e.nodeType && (i = e.defaultView),
                          void 0 === o)
                        )
                          return i ? i[t] : e[r];
                        i
                          ? i.scrollTo(
                              n ? i.pageXOffset : o,
                              n ? o : i.pageYOffset,
                            )
                          : (e[r] = o);
                      },
                      e,
                      r,
                      arguments.length,
                    );
                  };
                },
              ),
              j.each(['top', 'left'], function (e, t) {
                j.cssHooks[t] = tt(g.pixelPosition, function (e, n) {
                  if (n)
                    return (
                      (n = et(e, t)), Ve.test(n) ? j(e).position()[t] + 'px' : n
                    );
                });
              }),
              j.each({ Height: 'height', Width: 'width' }, function (e, t) {
                j.each(
                  { padding: 'inner' + e, content: t, '': 'outer' + e },
                  function (n, r) {
                    j.fn[r] = function (o, i) {
                      var a = arguments.length && (n || 'boolean' != typeof o),
                        s = n || (!0 === o || !0 === i ? 'margin' : 'border');
                      return te(
                        this,
                        function (t, n, o) {
                          var i;
                          return b(t)
                            ? 0 === r.indexOf('outer')
                              ? t['inner' + e]
                              : t.document.documentElement['client' + e]
                            : 9 === t.nodeType
                              ? ((i = t.documentElement),
                                Math.max(
                                  t.body['scroll' + e],
                                  i['scroll' + e],
                                  t.body['offset' + e],
                                  i['offset' + e],
                                  i['client' + e],
                                ))
                              : void 0 === o
                                ? j.css(t, n, s)
                                : j.style(t, n, o, s);
                        },
                        t,
                        a ? o : void 0,
                        a,
                      );
                    };
                  },
                );
              }),
              j.each(
                [
                  'ajaxStart',
                  'ajaxStop',
                  'ajaxComplete',
                  'ajaxError',
                  'ajaxSuccess',
                  'ajaxSend',
                ],
                function (e, t) {
                  j.fn[t] = function (e) {
                    return this.on(t, e);
                  };
                },
              ),
              j.fn.extend({
                bind: function (e, t, n) {
                  return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                  return this.off(e, null, t);
                },
                delegate: function (e, t, n, r) {
                  return this.on(t, e, n, r);
                },
                undelegate: function (e, t, n) {
                  return 1 === arguments.length
                    ? this.off(e, '**')
                    : this.off(t, e || '**', n);
                },
                hover: function (e, t) {
                  return this.on('mouseenter', e).on('mouseleave', t || e);
                },
              }),
              j.each(
                'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                  ' ',
                ),
                function (e, t) {
                  j.fn[t] = function (e, n) {
                    return arguments.length > 0
                      ? this.on(t, null, e, n)
                      : this.trigger(t);
                  };
                },
              );
            var on = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
            (j.proxy = function (e, t) {
              var n, r, o;
              if (
                ('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e))
              )
                return (
                  (r = u.call(arguments, 2)),
                  (o = function () {
                    return e.apply(t || this, r.concat(u.call(arguments)));
                  }),
                  (o.guid = e.guid = e.guid || j.guid++),
                  o
                );
            }),
              (j.holdReady = function (e) {
                e ? j.readyWait++ : j.ready(!0);
              }),
              (j.isArray = Array.isArray),
              (j.parseJSON = JSON.parse),
              (j.nodeName = A),
              (j.isFunction = m),
              (j.isWindow = b),
              (j.camelCase = ie),
              (j.type = S),
              (j.now = Date.now),
              (j.isNumeric = function (e) {
                var t = j.type(e);
                return (
                  ('number' === t || 'string' === t) &&
                  !isNaN(e - parseFloat(e))
                );
              }),
              (j.trim = function (e) {
                return null == e ? '' : (e + '').replace(on, '$1');
              }),
              void 0 ===
                (r = function () {
                  return j;
                }.apply(t, [])) || (e.exports = r);
            var an = n.jQuery,
              sn = n.$;
            return (
              (j.noConflict = function (e) {
                return (
                  n.$ === j && (n.$ = sn),
                  e && n.jQuery === j && (n.jQuery = an),
                  j
                );
              }),
              void 0 === i && (n.jQuery = n.$ = j),
              j
            );
          });
      },
      540: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      659: (e) => {
        'use strict';
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      770: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, n(o.key), o);
          }
        }
        function n(t) {
          var n = (function (t) {
            if ('object' != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, 'string');
              if ('object' != e(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(t);
          })(t);
          return 'symbol' == e(n) ? n : n + '';
        }
        function r(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (r = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return (
                      -1 !== Function.toString.call(e).indexOf('[native code]')
                    );
                  } catch (t) {
                    return 'function' == typeof e;
                  }
                })(e)
              )
                return e;
              if ('function' != typeof e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (function (e, t, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, t);
                  var a = new (e.bind.apply(e, r))();
                  return n && i(a, n.prototype), a;
                })(e, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, e)
              );
            }),
            r(e)
          );
        }
        function o() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (e) {}
          return (o = function () {
            return !!e;
          })();
        }
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var s = (function (n) {
          function r() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, r),
              (function (t, n, r) {
                return (
                  (n = a(n)),
                  (function (t, n) {
                    if (n && ('object' == e(n) || 'function' == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined',
                      );
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return e;
                    })(t);
                  })(
                    t,
                    o()
                      ? Reflect.construct(n, r || [], a(t).constructor)
                      : n.apply(t, r),
                  )
                );
              })(this, r, arguments)
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && i(e, t);
            })(r, n),
            (s = r),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.innerHTML = '<header><h1>NotesApp</h1></header>';
                },
              },
            ]) && t(s.prototype, u),
            Object.defineProperty(s, 'prototype', { writable: !1 }),
            s
          );
          var s, u;
        })(r(HTMLElement));
        customElements.define('app-bar', s);
      },
      825: (e) => {
        'use strict';
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {',
                  )),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var i = n.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */',
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      978: (e) => {
        'use strict';
        e.exports = function (e) {
          return e[1];
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (n.nc = void 0),
    (() => {
      'use strict';
      var e = {};
      n.r(e), n.d(e, { jH: () => t, hK: () => r, Ce: () => o });
      var t = function () {
          var e = localStorage.getItem('notesData');
          return e
            ? JSON.parse(e)
            : [
                {
                  id: 'notes-jT-jjsyz61J8XKiI',
                  title: 'Welcome to Notes, Dimas!',
                  body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
                  createdAt: '2022-07-28T10:03:12.594Z',
                  archived: !1,
                },
                {
                  id: 'notes-aB-cdefg12345',
                  title: 'Meeting Agenda',
                  body: 'Discuss project updates and assign tasks for the upcoming week.',
                  createdAt: '2022-08-05T15:30:00.000Z',
                  archived: !1,
                },
                {
                  id: 'notes-XyZ-789012345',
                  title: 'Shopping List',
                  body: 'Milk, eggs, bread, fruits, and vegetables.',
                  createdAt: '2022-08-10T08:45:23.120Z',
                  archived: !1,
                },
                {
                  id: 'notes-1a-2b3c4d5e6f',
                  title: 'Personal Goals',
                  body: 'Read two books per month, exercise three times a week, learn a new language.',
                  createdAt: '2022-08-15T18:12:55.789Z',
                  archived: !1,
                },
                {
                  id: 'notes-LMN-456789',
                  title: 'Recipe: Spaghetti Bolognese',
                  body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
                  createdAt: '2022-08-20T12:30:40.200Z',
                  archived: !1,
                },
                {
                  id: 'notes-QwErTyUiOp',
                  title: 'Workout Routine',
                  body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
                  createdAt: '2022-08-25T09:15:17.890Z',
                  archived: !1,
                },
                {
                  id: 'notes-abcdef-987654',
                  title: 'Book Recommendations',
                  body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
                  createdAt: '2022-09-01T14:20:05.321Z',
                  archived: !1,
                },
                {
                  id: 'notes-zyxwv-54321',
                  title: 'Daily Reflections',
                  body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
                  createdAt: '2022-09-07T20:40:30.150Z',
                  archived: !1,
                },
                {
                  id: 'notes-poiuyt-987654',
                  title: 'Travel Bucket List',
                  body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
                  createdAt: '2022-09-15T11:55:44.678Z',
                  archived: !1,
                },
                {
                  id: 'notes-asdfgh-123456',
                  title: 'Coding Projects',
                  body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
                  createdAt: '2022-09-20T17:10:12.987Z',
                  archived: !1,
                },
                {
                  id: 'notes-5678-abcd-efgh',
                  title: 'Project Deadline',
                  body: 'Complete project tasks by the deadline on October 1st.',
                  createdAt: '2022-09-28T14:00:00.000Z',
                  archived: !1,
                },
                {
                  id: 'notes-9876-wxyz-1234',
                  title: 'Health Checkup',
                  body: 'Schedule a routine health checkup with the doctor.',
                  createdAt: '2022-10-05T09:30:45.600Z',
                  archived: !1,
                },
                {
                  id: 'notes-qwerty-8765-4321',
                  title: 'Financial Goals',
                  body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
                  createdAt: '2022-10-12T12:15:30.890Z',
                  archived: !1,
                },
                {
                  id: 'notes-98765-54321-12345',
                  title: 'Holiday Plans',
                  body: 'Research and plan for the upcoming holiday destination.',
                  createdAt: '2022-10-20T16:45:00.000Z',
                  archived: !1,
                },
                {
                  id: 'notes-1234-abcd-5678',
                  title: 'Language Learning',
                  body: 'Practice Spanish vocabulary for 30 minutes every day.',
                  createdAt: '2022-10-28T08:00:20.120Z',
                  archived: !1,
                },
              ];
        },
        r = function (e) {
          localStorage.setItem('notesData', JSON.stringify(e));
        },
        o = function (e) {
          var t = new Date(e).toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            n = new Date(e).toLocaleTimeString('id-ID', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: !1,
            });
          return ''.concat(t, ', ').concat(n);
        },
        i = n(72),
        a = n.n(i),
        s = n(825),
        u = n.n(s),
        c = n(659),
        l = n.n(c),
        f = n(56),
        p = n.n(f),
        d = n(540),
        h = n.n(d),
        y = n(113),
        v = n.n(y),
        g = n(159),
        m = {};
      function b(e) {
        return (
          (b =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          b(e)
        );
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, w(r.key), r);
        }
      }
      function w(e) {
        var t = (function (e) {
          if ('object' != b(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, 'string');
            if ('object' != b(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' == b(t) ? t : t + '';
      }
      function T(e) {
        var t = 'function' == typeof Map ? new Map() : void 0;
        return (
          (T = function (e) {
            if (
              null === e ||
              !(function (e) {
                try {
                  return (
                    -1 !== Function.toString.call(e).indexOf('[native code]')
                  );
                } catch (t) {
                  return 'function' == typeof e;
                }
              })(e)
            )
              return e;
            if ('function' != typeof e)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return (function (e, t, n) {
                if (S()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, t);
                var o = new (e.bind.apply(e, r))();
                return n && E(o, n.prototype), o;
              })(e, arguments, k(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              E(n, e)
            );
          }),
          T(e)
        );
      }
      function S() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (S = function () {
          return !!e;
        })();
      }
      function E(e, t) {
        return (
          (E = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          E(e, t)
        );
      }
      function k(e) {
        return (
          (k = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          k(e)
        );
      }
      (m.styleTagTransform = v()),
        (m.setAttributes = p()),
        (m.insert = l().bind(null, 'head')),
        (m.domAPI = u()),
        (m.insertStyleElement = h()),
        a()(g.A, m),
        g.A && g.A.locals && g.A.locals,
        n(770);
      var j = (function (e) {
        function n() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, n),
            (function (e, t, n) {
              return (
                (t = k(t)),
                (function (e, t) {
                  if (t && ('object' == b(t) || 'function' == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined',
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return e;
                  })(e);
                })(
                  e,
                  S()
                    ? Reflect.construct(t, n || [], k(e).constructor)
                    : t.apply(e, n),
                )
              );
            })(this, n, arguments)
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && E(e, t);
          })(n, e),
          (o = n),
          (i = [
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                (this.innerHTML =
                  '\n      <div class="note-input-container">\n        <form id="note-form">\n          <input type="text" id="title" class="note-input-title" placeholder="Title" required>\n          <textarea id="body" class="note-input-body" placeholder="Write your note..." required></textarea>\n          <button type="submit" class="note-input-button">Add Note</button>\n          <p id="error-message" class="note-error">Title and body cannot be empty.</p>\n        </form>\n      </div>\n    '),
                  this.querySelector('#note-form').addEventListener(
                    'submit',
                    function (t) {
                      t.preventDefault(), e.addNote();
                    },
                  ),
                  this.querySelector('#title').addEventListener(
                    'input',
                    function () {
                      return e.validateForm();
                    },
                  ),
                  this.querySelector('#body').addEventListener(
                    'input',
                    function () {
                      return e.validateForm();
                    },
                  );
              },
            },
            {
              key: 'validateForm',
              value: function () {
                var e = this.querySelector('#title').value.trim(),
                  t = this.querySelector('#body').value.trim();
                this.querySelector('#error-message').style.display =
                  '' === e || '' === t ? 'block' : 'none';
              },
            },
            {
              key: 'addNote',
              value: function () {
                var e = this.querySelector('#title').value.trim(),
                  n = this.querySelector('#body').value.trim();
                if (e && n) {
                  var o = {
                      id: Date.now().toString(),
                      title: e,
                      body: n,
                      createdAt: new Date().toISOString(),
                      archived: !1,
                    },
                    i = t();
                  i.push(o),
                    r(i),
                    location.reload(),
                    this.renderNewNote(o),
                    (this.querySelector('#title').value = ''),
                    (this.querySelector('#body').value = '');
                }
              },
            },
            {
              key: 'renderNewNote',
              value: function (e) {
                var t = document.querySelector('#notes-list'),
                  n = document.createElement('div');
                n.classList.add('note-card'),
                  (n.innerHTML = '\n      <h3>'
                    .concat(e.title, '</h3>\n      <p>')
                    .concat(e.body, '</p>\n      <small>')
                    .concat(showFormattedDate(e.createdAt), '</small>\n    ')),
                  (n.style.opacity = '0'),
                  t.prepend(n);
              },
            },
          ]),
          i && x(o.prototype, i),
          Object.defineProperty(o, 'prototype', { writable: !1 }),
          o
        );
        var o, i;
      })(T(HTMLElement));
      function C(e) {
        return (
          (C =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          C(e)
        );
      }
      function A(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function D(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, L(r.key), r);
        }
      }
      function O(e, t, n) {
        return (
          t && D(e.prototype, t),
          n && D(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function L(e) {
        var t = (function (e) {
          if ('object' != C(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, 'string');
            if ('object' != C(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' == C(t) ? t : t + '';
      }
      function N(e, t, n) {
        return (
          (t = R(t)),
          (function (e, t) {
            if (t && ('object' == C(t) || 'function' == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined',
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(
            e,
            H()
              ? Reflect.construct(t, n || [], R(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function P(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && M(e, t);
      }
      function q(e) {
        var t = 'function' == typeof Map ? new Map() : void 0;
        return (
          (q = function (e) {
            if (
              null === e ||
              !(function (e) {
                try {
                  return (
                    -1 !== Function.toString.call(e).indexOf('[native code]')
                  );
                } catch (t) {
                  return 'function' == typeof e;
                }
              })(e)
            )
              return e;
            if ('function' != typeof e)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return (function (e, t, n) {
                if (H()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, t);
                var o = new (e.bind.apply(e, r))();
                return n && M(o, n.prototype), o;
              })(e, arguments, R(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              M(n, e)
            );
          }),
          q(e)
        );
      }
      function H() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (H = function () {
          return !!e;
        })();
      }
      function M(e, t) {
        return (
          (M = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          M(e, t)
        );
      }
      function R(e) {
        return (
          (R = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          R(e)
        );
      }
      customElements.define('note-input', j);
      var _ = (function (e) {
        function t() {
          var e;
          return (
            A(this, t),
            ((e = N(this, t))._notes = []),
            (e._onDelete = null),
            (e._onArchive = null),
            e
          );
        }
        return (
          P(t, e),
          O(t, [
            {
              key: 'notes',
              set: function (e) {
                (this._notes = e || []), this.render();
              },
            },
            {
              key: 'onDelete',
              set: function (e) {
                (this._onDelete = e), this.render();
              },
            },
            {
              key: 'onArchive',
              set: function (e) {
                (this._onArchive = e), this.render();
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this;
                this.innerHTML = '<div class="notes-container"></div>';
                var t = this.querySelector('.notes-container');
                this._notes.forEach(function (n) {
                  var r = document.createElement('div');
                  r.classList.add('note-card'),
                    (r.innerHTML = '\n                <h3>'
                      .concat(n.title, '</h3>\n                <p>')
                      .concat(n.body, '</p>\n                <small>')
                      .concat(
                        o(n.createdAt),
                        '</small>\n                <div class="note-item-action"></div>\n            ',
                      ));
                  var i,
                    a,
                    s,
                    u = r.querySelector('.note-item-action');
                  e._onDelete &&
                    u.appendChild(
                      ((i = n.id),
                      (a = e._onDelete),
                      (s = document.createElement('button')).classList.add(
                        'delete-button',
                      ),
                      (s.innerText = 'Hapus'),
                      s.addEventListener('click', function () {
                        'function' == typeof a
                          ? a(i)
                          : console.error('onDelete bukan fungsi!', a);
                      }),
                      s),
                    ),
                    e._onArchive &&
                      u.appendChild(
                        (function (e, t, n) {
                          var r = document.createElement('button');
                          return (
                            r.classList.add('archive-button'),
                            (r.innerText = t ? 'Pulihkan' : 'Arsipkan'),
                            r.addEventListener('click', function () {
                              'function' == typeof n
                                ? n(e)
                                : console.error('onArchive bukan fungsi!', n);
                            }),
                            r
                          );
                        })(n.id, n.archived, e._onArchive),
                      ),
                    t.appendChild(r);
                });
              },
            },
          ])
        );
      })(q(HTMLElement));
      customElements.define('notes-list', _);
      var I = (function (e) {
        function t() {
          return A(this, t), N(this, t, arguments);
        }
        return P(t, e), O(t);
      })(_);
      function F(e) {
        return (
          (F =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          F(e)
        );
      }
      function W() {
        W = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          s = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var i = t && t.prototype instanceof g ? t : g,
            a = Object.create(i.prototype),
            s = new O(r || []);
          return o(a, '_invoke', { value: j(e, n, s) }), a;
        }
        function f(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        t.wrap = l;
        var p = 'suspendedStart',
          d = 'suspendedYield',
          h = 'executing',
          y = 'completed',
          v = {};
        function g() {}
        function m() {}
        function b() {}
        var x = {};
        c(x, a, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          T = w && w(w(L([])));
        T && T !== n && r.call(T, a) && (x = T);
        var S = (b.prototype = g.prototype = Object.create(x));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function n(o, i, a, s) {
            var u = f(e[o], e, i);
            if ('throw' !== u.type) {
              var c = u.arg,
                l = c.value;
              return l && 'object' == F(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      n('next', e, a, s);
                    },
                    function (e) {
                      n('throw', e, a, s);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      (c.value = e), a(c);
                    },
                    function (e) {
                      return n('throw', e, a, s);
                    },
                  );
            }
            s(u.arg);
          }
          var i;
          o(this, '_invoke', {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(t, n, r) {
          var o = p;
          return function (i, a) {
            if (o === h) throw Error('Generator is already running');
            if (o === y) {
              if ('throw' === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var u = C(s, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (o === p) throw ((o = y), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              o = h;
              var c = f(t, n, r);
              if ('normal' === c.type) {
                if (((o = r.done ? y : d), c.arg === v)) continue;
                return { value: c.arg, done: r.done };
              }
              'throw' === c.type &&
                ((o = y), (r.method = 'throw'), (r.arg = c.arg));
            }
          };
        }
        function C(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ('throw' === r &&
                t.iterator.return &&
                ((n.method = 'return'),
                (n.arg = e),
                C(t, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var i = f(o, t.iterator, n.arg);
          if ('throw' === i.type)
            return (
              (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function A(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function D(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(A, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || '' === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(F(t) + ' is not iterable');
        }
        return (
          (m.prototype = b),
          o(S, 'constructor', { value: b, configurable: !0 }),
          o(b, 'constructor', { value: m, configurable: !0 }),
          (m.displayName = c(b, u, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), c(e, u, 'GeneratorFunction')),
              (e.prototype = Object.create(S)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          E(k.prototype),
          c(k.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = k),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new k(l(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          E(S),
          c(S, u, 'Generator'),
          c(S, a, function () {
            return this;
          }),
          c(S, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(D),
                !t)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = 'throw'),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = 'next'), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc');
                  if (u && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === e.type && t && (this.next = t),
                v
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), D(n), v;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    D(n);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function B(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            u = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function $(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              B(i, r, o, a, s, 'next', e);
            }
            function s(e) {
              B(i, r, o, a, s, 'throw', e);
            }
            a(void 0);
          });
        };
      }
      customElements.define('archived-list', I),
        n(511),
        document.addEventListener(
          'DOMContentLoaded',
          $(
            W().mark(function t() {
              var n, r, o, i, a, s, u, c, l;
              return W().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (l = function () {
                          return (l = $(
                            W().mark(function t(n) {
                              var r;
                              return W().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (r = o.find(function (e) {
                                          return e.id === n;
                                        })),
                                        (t.next = 3),
                                        (0, e.toggleArchive)(n, !r.archived)
                                      );
                                    case 3:
                                      return (t.next = 5), (0, e.getAllNotes)();
                                    case 5:
                                      (o = t.sent), i();
                                    case 7:
                                    case 'end':
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          )).apply(this, arguments);
                        }),
                        (c = function (e) {
                          return l.apply(this, arguments);
                        }),
                        (u = function () {
                          return (u = $(
                            W().mark(function t(n) {
                              return W().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (t.next = 2), (0, e.deleteNote)(n);
                                    case 2:
                                      return (t.next = 4), (0, e.getAllNotes)();
                                    case 4:
                                      (o = t.sent), i();
                                    case 6:
                                    case 'end':
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          )).apply(this, arguments);
                        }),
                        (s = function (e) {
                          return u.apply(this, arguments);
                        }),
                        (a = function () {
                          return (a = $(
                            W().mark(function e() {
                              var t, i;
                              return W().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (t = o.filter(function (e) {
                                        return !e.archived;
                                      })),
                                        (i = o.filter(function (e) {
                                          return e.archived;
                                        })),
                                        (n.notes = t),
                                        (r.notes = i),
                                        (n.onDelete = s),
                                        (n.onArchive = c),
                                        (r.onDelete = s),
                                        (r.onArchive = c);
                                    case 8:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          )).apply(this, arguments);
                        }),
                        (i = function () {
                          return a.apply(this, arguments);
                        }),
                        (n = document.querySelector('notes-list')),
                        (r = document.querySelector('archived-list')),
                        (t.next = 10),
                        (0, e.getAllNotes)()
                      );
                    case 10:
                      (o = t.sent), i();
                    case 12:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          ),
        );
    })();
})();
