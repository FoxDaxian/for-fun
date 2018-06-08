(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function __$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

function __$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var t = function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
    var raf = window.requestAnimationFrame;
    var clraf = window.cancelAnimationFrame;
    return {
        raf: raf,
        clraf: clraf
    };
}();

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var raf = t.raf;

var ani = function () {
    function ani(el) {
        classCallCheck(this, ani);

        this.el = typeof el == 'string' ? document.querySelector(el) : el;
        this.style = this.el.style;
    }

    createClass(ani, [{
        key: 'setMode',
        value: function setMode(k, end) {
            var v = void 0;
            // transform dir
            var td = null;
            switch (true) {
                case /(left|translateX)/.test(k):
                    k = 'transform';
                    v = 'translateX';
                    td = 1;
                    break;
                case /right/.test(k):
                    k = 'transform';
                    v = 'translateX';
                    td = -1;
                    break;
                case /(top|translateY)/.test(k):
                    k = 'transform';
                    v = 'translateY';
                    td = 1;
                    break;
                case /bottom/.test(k):
                    k = 'transform';
                    v = 'translateY';
                    td = -1;
                    break;
                case /(height|width)/.test(k):
                    v = k;
                    end = end < 0 ? 0 : end;
                    break;
                case /rotate/.test(k):
                    v = k;
                    k = 'transform';
                    break;
                case /scale/.test(k):
                    console.log('正则');
                    v = k;
                    k = 'transform';
                    break;
                default:
                    break;
            }
            this.k = k;
            this.v = v;
            this.td = td;
            return end;
        }

        // 获取只读

    }, {
        key: 'getStyle',
        value: function getStyle() {
            return this.el.style[this.k] || (this.el.currentStyle ? this.el.currentStyle[this.k] : window.getComputedStyle(this.el, false)[this.k]);
        }

        // 设置css

    }, {
        key: 'setStyle',
        value: function setStyle(v) {
            switch (true) {
                case /(translateX|translateY)/.test(this.v):
                    v = v * this.td;
                    v = this.v + '(' + v * this.td + 'px)';
                    break;
                case /rotate/.test(this.v):
                    v = this.v + '(' + v + 'deg)';
                    break;
                case /height|width/.test(this.v):
                    v = v + 'px';
                    break;
                case /scale|scaleX|scaleY/.test(this.v):
                    v = this.v + '(' + v + ')';
                    break;
                default:
                    break;
            }
            return this.style[this.k] = v;
        }

        // 获取number

    }, {
        key: 'getNumber',
        value: function getNumber(value) {
            var patt = new RegExp('-?[\\d\\.]', 'g');
            var res = typeof value === 'number' ? String(value).match(patt) : value.match(patt);
            return res !== null ? +res.join('') : 0;
        }

        // launch

    }, {
        key: 'ani',
        value: function ani(attr, end) {
            end = this.getNumber(end);
            end = this.setMode(attr, end);
            // 转化和缓存
            console.log(this.k);
            console.log(this.v);
            var style = this.getStyle(this.k);
            console.log(style);
            if (this.k === 'transform') {
                var matrix = style.match(/\(.+\)/g)[0].slice(1, -1).split(',');

                // https://fanmingfei.com/posts/CSS3_Transform_Matrix_Intro.html 这个很全面
                // http://www.cnblogs.com/shibaxiong/p/4673035.html 这个网站获取角度
                // 张鑫旭 http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/
                // 根据公式来算
                // transform: matrix(1, 0, 0, 1, 30, 30); /* a=1, b=0, c=0, d=1, e=30, f=30 */
                // 其中，x, y表示转换元素的  !!所有!!  坐标（变量）
                // translateX: ax + cy + e
                // translateY: bx + dy + f
                // scaleX: sx
                // scaleY: sy
                // rotateX: x * cosθ - y * sinθ
                // rotateY: x * sinθ + y * cosθ
                // skewX: tan(c)
                // skewY: tan(b)
            }
            var start = this.getNumber(style);
            this.td !== null && (end *= this.td);
            // 增加还是减少
            this.inOrde = end - start > 0 ? 1 : -1;
            if (/(auto|none)/.test(this.getStyle(this.k))) {
                this.setStyle(0);
            }
            this.innerAni(this.k, start, end);
        }

        // 动画速度轨迹

    }, {
        key: 'innerAni',
        value: function innerAni(attr, start, end) {
            var _this = this;

            var i = start;
            var fn = function fn() {
                i += 0.01 * _this.inOrde;
                _this.setStyle(i);

                // if (this.inOrde > 0) {
                //     if (this.getNumber(this.getStyle(this.k)) < end) {
                //         raf(fn);
                //     }
                // } else {
                //     if (this.getNumber(this.getStyle(this.k)) > end) {
                //         raf(fn);
                //     }
                // }
            };
            raf(fn);
        }
    }, {
        key: 'fn',
        value: function fn() {}
    }]);
    return ani;
}();

var o = new ani('.box');
o.ani('left', '2');

})));
//# sourceMappingURL=bundle.js.map
