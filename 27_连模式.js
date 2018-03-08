/**
 * 深究jquery 实现自己的库!
*/
+function (window) {
    window.A = function (selector, context) {
        return new A.fn.A(selector);
    }
    /* Object.getOwnPropertyNames(Array).forEach(function (val, index) {
        A[val] = Array[val]
    }) */
    A.fn = A.prototype = {
        constructor: A,
        A: function (selector, context) {
            this.length = 0;
            context = context || document;
            /**~xx.indexOf() 简直巧妙呀*/
            if (~selector.indexOf('#')) {
                this[0] = document.getElementById(selector.slice(1));
                this.length = 1
            } else {
                var doms = document.getElementsByTagName(selector),
                    i = 0,
                    len = doms.length;
                for (; i < len; i++) {
                    this[i] = doms[i];
                }
                this.length = len;
            }
            /* console.log(this.constructor); */
            this.context = context;
            this.selector = selector;
            return this;
        },
        length: 0,
        size: function () {
            return this.length;
        }
    }
    A.fn.A.prototype = A.fn;

    //通过 添加数组函数 可以 把A变为数组对象
    /* Object.getOwnPropertyNames(Array.prototype).forEach(function(val,index){
        A.prototype[val]=Array.prototype[val];
    }) */
    //扩展 如果一个参数 扩展自身,如果大于一个参数 扩展第一个参数
    A.extend = A.fn.extend = function () {
        var i = 1,
            len = arguments.length,
            target = arguments[0],
            j;
        if (i == len) {
            target = this;
            i--;
        }
        for (; i < len; i++) {
            for (j in arguments[i]) {
                target[j] = arguments[i][j];
            }
        }
        return target
    }
    A.fn.extend({
        on: (function () {
            //根据浏览器 返回不同的事件注册函数
            if (document.addEventListener) {
                return function (type, fn) {
                    var len = this.length - 1;
                    for (; len >= 0; len--) {
                        this[i].addEventListener(type, fn, false);
                    }
                    return this;
                }
            }
        })(),
        //将 - 转化为驼峰
        camelCase: function (str) {
            return str.replace(/\-(\w)/g, function (all, letter) {
                return letter.toUpperCase();
            })
        },
        //设置css样式
        css: function () {
            var arg = arguments,
                len = arguments.length;
            //只有一个样式
            if (len == 1) {
                //如果是字符串则获取第一个元素的css样式
                if (typeof arg[0] === 'string') {
                    if (this[0].currentStyle) { return this[0].currentStyle[arg[0]]; }
                    else { return getComputedStyle(this[0], false)[arg[0]]; }
                }
                //如果是对象则设置多个样式
                else if (typeof arg[0] === 'object') {
                    for (var i in arg[0]) {
                        for (var j = this.length - 1; j >= 0; j--) {
                            this[j].style[this.camelCase(i)] = arg[0][i];
                        }
                    }

                }
            }
            //两个参数则设置一个样式 (key:val)
            else if (len == 2) {
                for (var j = this.length - 1; j >= 0; j--) {
                    this[j].style[this.camelCase(arg[0])] = arg[1];
                }

            }
            return this
        },
        attr: function () {
            var arg = arguments,
                len = arg.length;
            if (len == 1) {
                //如果一个参数且是字符串 取属性值
                if (typeof arg[0] === 'string') {
                    return this[0].getAttribute(arg[0]);
                }
                //如果是对象 设置属性
                else if (typeof arg[0] === 'object') {
                    for (i in arg[0]) {
                        for (var j = this.length - 1; j >= 0; j--) {
                            this[j].setAttribute(i, arg[0][i]);
                        }
                    }
                }
            } else if (len == 2) {
                //如果是两个值 ,则赋值属性
                for (var j = this.length - 1; j >= 0; j--) {
                    this[j].setAttribute(arg[0], arg[1]);
                }
            }
            return this
        },
        html: function () {
            var arg = arguments,
                len = this.length;
            if (len == 0) {
                return this[0] && this[0].innerHTML;
            } else if (len == 1) {
                for (var j = len - 1; j >= 0; j--) {
                    this[j].innerHTML = arg[0];
                }
            }
            return this;
        }

    })
}(window)