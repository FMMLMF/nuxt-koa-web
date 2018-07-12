require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_normalCompany__ = __webpack_require__(14);


// account api


// list


var router = __WEBPACK_IMPORTED_MODULE_0_koa_router___default()();

// account routes
router.use(__WEBPACK_IMPORTED_MODULE_1__account_login__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_1__account_login__["a" /* default */].allowedMethods());
router.use(__WEBPACK_IMPORTED_MODULE_2__list_normalCompany__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_2__list_normalCompany__["a" /* default */].allowedMethods());

/* harmony default export */ exports["a"] = router;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var log4js = __webpack_require__(18);
var access = __webpack_require__(15);
var methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark'];

var baseInfo = {
  appLogLevel: 'debug',
  dir: 'logs',
  env: 'dev',
  projectName: 'koa2-tutorial',
  serverIp: '0.0.0.0'
};

module.exports = function (options) {
  var contextLogger = {};
  var appenders = {};
  // 继承自 baseInfo 默认参数
  var opts = Object.assign({}, baseInfo, options || {});
  // 需要的变量解构 方便使用
  var env = opts.env,
      appLogLevel = opts.appLogLevel,
      dir = opts.dir,
      serverIp = opts.serverIp,
      projectName = opts.projectName;

  var commonInfo = { projectName: projectName, serverIp: serverIp };

  appenders.cheese = {
    type: 'dateFile',
    filename: dir + '/task',
    pattern: '-yyyy-MM-dd.log',
    alwaysIncludePattern: true
  };

  if (env === 'dev' || env === 'local' || env === 'development') {
    appenders.out = {
      type: 'console'
    };
  }
  var config = {
    appenders: appenders,
    pm2: true,
    categories: {
      default: {
        appenders: Object.keys(appenders),
        level: appLogLevel
      }
    }
  };

  var logger = log4js.getLogger('cheese');

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var start, responseTime;
      return __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(ctx.method === 'POST')) {
                _context.next = 11;
                break;
              }

              start = Date.now();

              log4js.configure(config);
              methods.forEach(function (method, i) {
                contextLogger[method] = function (message) {
                  logger[method](access(ctx, message, commonInfo));
                };
              });
              ctx.log = contextLogger;
              _context.next = 7;
              return next();

            case 7:
              responseTime = Date.now() - start;

              logger.info(access(ctx, {
                responseTime: '\u54CD\u5E94\u65F6\u95F4\u4E3A' + responseTime / 1000 + 's'
              }, commonInfo));
              _context.next = 13;
              break;

            case 11:
              _context.next = 13;
              return next();

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var webpack = __webpack_require__(20);
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  plugins: [
  // {
  // src: '~plugins/tableList',
  // ssr: false,
  // },
  {
    src: '~plugins/element-ui',
    ssr: true
    // {
    //   src: '~plugins/vue-socket',
    //   ssr: true
    // }
  }],
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.less', {
    src: 'assets/css/main.less',
    lang: 'less'
    // 'vue-easytable/libs/themes-base/index.css'
  }],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    vender: ['axios', 'element-ui', 'jquery'],
    "plugins": [new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })],
    babel: {
      "plugins": [["component", {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }]]
    },
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("ip");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("koa-socket-2");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_base64__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_base64__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var fs = __webpack_require__(2);
var path = __webpack_require__(4);

var router = __WEBPACK_IMPORTED_MODULE_1_koa_router___default()();

router.post('/api/login', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var header, payload, secretKey, encodedString, signature;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            header = {
              'alg': 'HS256',
              'typ': 'JWT'
            };
            payload = {
              'ticket': '12345'
            };
            secretKey = fs.readFileSync(path.join(__dirname, '../../config/secret.pem'));
            encodedString = __WEBPACK_IMPORTED_MODULE_2_js_base64__["Base64"].encode(JSON.stringify(header)) + '.' + __WEBPACK_IMPORTED_MODULE_2_js_base64__["Base64"].encode(JSON.stringify(payload));
            signature = __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a.sign({
              exp: Math.floor(Date.now() / 1000) + 15 * 60, // expires 15 minutes
              data: encodedString
            }, secretKey);

            ctx.body = {
              success: true,
              data: signature
            };

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ exports["a"] = router;
/* WEBPACK VAR INJECTION */}.call(exports, "api\\account"))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var verify = __webpack_require__(16);

var router = __WEBPACK_IMPORTED_MODULE_1_koa_router___default()();

router.post('/api/normalCompany/list', verify, function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.body = {
              success: true,
              data: [{
                planId: '1111111',
                repaymentCorpus: '88888888',
                repaymentMonth: '99999999',
                state: '还款中',
                loanPeriods: '12',
                startTime: '2018-04-25',
                endTime: '2018-04-26'
              }, {
                planId: '222222222',
                repaymentCorpus: '88888888',
                repaymentMonth: '99999999',
                state: '还款完成',
                loanPeriods: '6',
                startTime: '2018-04-26',
                endTime: '2018-04-27'
              }, {
                planId: '33333333',
                repaymentCorpus: '88888888',
                repaymentMonth: '99999999',
                state: '',
                loanPeriods: '12',
                startTime: '2018-04-27',
                endTime: '2018-04-28'
              }, {
                planId: '444444444',
                repaymentCorpus: '88888888',
                repaymentMonth: '99999999',
                state: '还款完成',
                loanPeriods: '18',
                startTime: '2018-04-28',
                endTime: '2018-04-29'
              }, {
                planId: '5555555555',
                repaymentCorpus: '88888888',
                repaymentMonth: '99999999',
                state: '',
                loanPeriods: '18',
                startTime: '2018-04-29',
                endTime: '2018-04-30'
              }, {
                planId: '666666666',
                repaymentCorpus: '88888888',
                repaymentMonth: '99999999',
                state: '还款完成',
                loanPeriods: '12',
                startTime: '2018-04-30',
                endTime: '2018-05-01'
              }]
            };

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ exports["a"] = router;

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = function (ctx, message, commonInfo) {
  var _ctx$request = ctx.request,
      method = _ctx$request.method,
      url = _ctx$request.url,
      host = _ctx$request.host,
      headers = _ctx$request.headers;

  var client = {
    method: method,
    url: url,
    host: host,
    message: message,
    referer: headers['referer'], // 请求的源地址
    userAgent: headers['user-agent'] // 客户端信息 设备及浏览器信息
  };
  return JSON.stringify(Object.assign(commonInfo, client));
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var fs = __webpack_require__(2);
var path = __webpack_require__(4);

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var auth, token, secret, payload;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            auth = ctx.get('Authorization');
            token = auth.split(' ')[1];
            secret = fs.readFileSync(path.join(__dirname, '../../config/secret.pem'));
            _context.prev = 3;

            // 解码取出之前存在payload的user_id 和 name
            payload = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.verify(token, secret);

            ctx.user_id = payload.id;
            ctx.name = payload.name;
            _context.next = 9;
            return next();

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](3);

            ctx.throw(401, _context.t0);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[3, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* WEBPACK VAR INJECTION */}.call(exports, "middleware\\auth"))

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("js-base64");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("koa-log4");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("webpack");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(5);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(7);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context2.next = 10;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 10;
            return builder.build();

          case 10:

            // 将配置中间件的参数在注册中间件时作为参数传入
            app.use(miLog({
              env: app.env, // koa 提供的环境变量
              projectName: 'walrus-middle-node',
              appLogLevel: 'debug',
              dir: 'logs',
              serverIp: ip.address()
            }));

            // socket
            io.attach(app);

            app.use(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default()());

            // routes
            app.use(__WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */].allowedMethods());

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0_C_Users_git_nuxt_koa_web_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





// log middleware
var miLog = __webpack_require__(6);
var ip = __webpack_require__(8);
// socket
var IO = __webpack_require__(11);
var io = new IO();



start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map