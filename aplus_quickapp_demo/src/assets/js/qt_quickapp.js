<<<<<<< HEAD
import * as __WEBPACK_EXTERNAL_MODULE__system_app_8fb6b5f7__ from "@system.app";
import * as __WEBPACK_EXTERNAL_MODULE__system_device_283b97d4__ from "@system.device";
import * as __WEBPACK_EXTERNAL_MODULE__system_fetch_3cd13842__ from "@system.fetch";
import * as __WEBPACK_EXTERNAL_MODULE__system_network_20e0ec2d__ from "@system.network";
import * as __WEBPACK_EXTERNAL_MODULE__system_router_f277ef2b__ from "@system.router";
import * as __WEBPACK_EXTERNAL_MODULE__system_storage_31564c76__ from "@system.storage";
/******/ var __webpack_modules__ = ({

/***/ "./src/core/BaseQueue.js":
/*!*******************************!*\
  !*** ./src/core/BaseQueue.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_ulog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ulog */ "./src/utils/ulog.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: BaseQueue.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */


var BaseQueue = /*#__PURE__*/function () {
  function BaseQueue(maxCount) {
    _classCallCheck(this, BaseQueue);

    _defineProperty(this, "_maxCount", 0);

    _defineProperty(this, "_items", []);

    this._maxCount = maxCount || 0;
  }

  _createClass(BaseQueue, [{
    key: "enqueue",
    value: function enqueue(item) {
      if (typeof this._maxCount === 'number' && this.size() >= this._maxCount) {
        this.dequeue();
      }

      this._items.push(item);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this._items.shift();
    }
  }, {
    key: "front",
    value: function front() {
      return this._items[0];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._items.length === 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._items.length = 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this._items.length;
    }
  }, {
    key: "items",
    value: function items() {
      return this._items;
    }
  }, {
    key: "print",
    value: function print() {
      (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_0__["default"])().i(this._items.toString());
    }
  }]);

  return BaseQueue;
}();

/* harmony default export */ __webpack_exports__["default"] = (BaseQueue);

/***/ }),

/***/ "./src/core/Body.js":
/*!**************************!*\
  !*** ./src/core/Body.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _EventManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventManager */ "./src/core/EventManager.js");
/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
/*
 * File: Body.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */




function _buildEkv() {
  var data = null;
  var ekvs = _EventManager__WEBPACK_IMPORTED_MODULE_1__["default"].getEkvs();

  if (ekvs) {
    data = {
      analytics: {
        ekvs: _utils_dash__WEBPACK_IMPORTED_MODULE_2__["default"].clone(ekvs)
      }
    };
    _EventManager__WEBPACK_IMPORTED_MODULE_1__["default"].clear();
  }

  return data;
}

function build(dataType) {
  var data = null;

  switch (dataType) {
    case _utils_consts__WEBPACK_IMPORTED_MODULE_0__["default"].DataType.EKV:
      data = _buildEkv();
      break;

    default:
      break;
  }

  return data;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  build: build
});

/***/ }),

/***/ "./src/core/Cache.js":
/*!***************************!*\
  !*** ./src/core/Cache.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
/* harmony import */ var _utils_ulog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ulog */ "./src/utils/ulog.js");
/* harmony import */ var _SDKConfigManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKConfigManager */ "./src/core/SDKConfigManager.js");
/* harmony import */ var _system_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @system.storage */ "@system.storage");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: cache.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */






var Cache = /*#__PURE__*/function () {
  function Cache() {
    _classCallCheck(this, Cache);

    _defineProperty(this, "_name", '');

    _defineProperty(this, "_data", null);

    _defineProperty(this, "_loaded", false);
  }

  _createClass(Cache, [{
    key: "load",
    value: function load(cb) {
      if (!this._data) {
        // this._name = 'qt_cahce_' +  userConfig.appKey;
        var that = this;
        this.getStorage({
          key: _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].QT_REMOTE_CONFIG,
          success: function success(resp) {
            var lsRemoteCfg = JSON.parse(resp);
            _SDKConfigManager__WEBPACK_IMPORTED_MODULE_2__["default"].updateRemoteConfig(lsRemoteCfg);
            that._loaded = true;
            that._data = {};
            _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(cb) && cb(that._loaded);
          },
          fail: function fail(err) {
            (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().w('cache loaded failed, errmsg = ', err);
            _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(cb) && cb(that._loaded);
          }
        });
      } else {
        cb && cb();
      }
    }
  }, {
    key: "set",
    value: function set(props) {
      var key = props.key,
          value = props.value;

      if (this._data) {
        this._data[key] = value;
      }
    }
  }, {
    key: "get",
    value: function get(k) {
      return (this._data || {})[k];
    }
  }, {
    key: "isLoaded",
    value: function isLoaded() {
      return this._loaded;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      if (this._data && this._data[key]) {
        delete this._data[key];
      }
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this._data;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._data = null;
    }
  }, {
    key: "has",
    value: function has(key) {
      return !!this.get(key);
    }
  }, {
    key: "getStorage",
    value: function getStorage(props) {
      var key = props.key,
          _success = props.success,
          _fail = props.fail;
      _system_storage__WEBPACK_IMPORTED_MODULE_3__["default"].get({
        key: key,
        success: function success(data) {
          _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(_success) && _success(data);
        },
        fail: function fail(data, code) {
          (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().w('get storage failed, errcode = ', code);
          _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(_fail) && _fail(data);
        }
      });
    }
  }, {
    key: "setStorage",
    value: function setStorage(props) {
      var key = props.key,
          value = props.value,
          _success2 = props.success,
          _fail2 = props.fail;
      _system_storage__WEBPACK_IMPORTED_MODULE_3__["default"].set({
        key: key,
        value: _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value) ? value : JSON.stringify(value),
        success: function success(data) {
          _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(_success2) && _success2(data);
        },
        fail: function fail(data, code) {
          (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().w("set storage failed, errcode = ".concat(code));
          _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(_fail2) && _fail2(data);
        }
      });
    }
  }, {
    key: "deleteStorage",
    value: function deleteStorage(props) {
      var key = props.key,
          success = props.success;
      _system_storage__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"]({
        key: key,
        success: success
      });
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new Cache();
      }

      return this.instance;
    }
  }]);

  return Cache;
}();

var cache = Cache.getInstance();
/* harmony default export */ __webpack_exports__["default"] = (cache);

/***/ }),

/***/ "./src/core/Event.js":
/*!***************************!*\
  !*** ./src/core/Event.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _UserConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserConfig */ "./src/core/UserConfig.js");
/* harmony import */ var _system_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @system.app */ "@system.app");
/* harmony import */ var _utils_ulog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ulog */ "./src/utils/ulog.js");
/* harmony import */ var _system_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @system.router */ "@system.router");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * File: event.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */







var Event = /*#__PURE__*/_createClass(function Event(id, properties) {
  _classCallCheck(this, Event);

  this.id = id;
  this.ts = Date.now();
  this.cusp = Object.create(null);

  if (_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(properties)) {
    for (var key in properties) {
      if (_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty.call(properties, key)) {
        if (key === 'ts') {
          this[key] = properties[key];
        } else {
          this.cusp[key] = properties[key];
        }
      }
    }
  }

  var info = _system_app__WEBPACK_IMPORTED_MODULE_3__["default"].getInfo();

  if (info && info.source && info.source.extra && info.source.extra.scene) {
    this.scene = info.source.extra.scene;
  }

  var page = _system_router__WEBPACK_IMPORTED_MODULE_5__["default"].getState();
  this.url = _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(page) ? page.path : '';
  this.page_name = properties[_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].PAGE_NAME] || this.url;
  this.page_title = properties[_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].PAGE_TITLE] || (_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(page) ? page.name : "");
  this.gp = _UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"].globalproperty;
  this.track_type = '0';
  (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_4__["default"])().i('before send eventcode =', this.id);

  if (!_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isEmptyObject(this.cusp)) {
    (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_4__["default"])().i('event properties = ', this.cusp);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/core/EventManager.js":
/*!**********************************!*\
  !*** ./src/core/EventManager.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_ulog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ulog */ "./src/utils/ulog.js");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cache */ "./src/core/Cache.js");
/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: eventManager.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */





var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    _defineProperty(this, "_memoryEvents", []);

    _defineProperty(this, "_noSessionEvents", []);

    _defineProperty(this, "_sessionId", 'sessionid');
  }

  _createClass(EventManager, [{
    key: "_getCacheEventsLength",
    value: function _getCacheEventsLength(eventsMap) {
      var len = 0;

      for (var key in eventsMap) {
        if (_utils_dash__WEBPACK_IMPORTED_MODULE_3__["default"].isArray(eventsMap[key])) {
          len += eventsMap[key].length;
        }
      }

      return len;
    }
  }, {
    key: "_buildEkvs",
    value: function _buildEkvs(ekvs, memoryEvents) {
      ekvs = ekvs || {};
      var events = ekvs[this._sessionId];

      if (_utils_dash__WEBPACK_IMPORTED_MODULE_3__["default"].isArray(events) && events.length) {
        ekvs[this._sessionId] = events.concat(memoryEvents);
      } else {
        ekvs[this._sessionId] = [].concat(memoryEvents);
      }

      return ekvs;
    }
  }, {
    key: "_cacheEvents",
    value: function _cacheEvents() {
      if (this._memoryEvents.length) {
        var ekvs = _Cache__WEBPACK_IMPORTED_MODULE_2__["default"].get(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].EKVS); // 本地最多存储 EVENT_MAX_COUNT 条数据，「多余数据」暂时先抛弃

        if (this._getCacheEventsLength(ekvs) + this._memoryEvents.length <= _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].EVENT_MAX_COUNT) {
          ekvs = this._buildEkvs(ekvs, this._memoryEvents);
          _Cache__WEBPACK_IMPORTED_MODULE_2__["default"].set(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].EKVS, ekvs);
        }
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent(event) {
      if (this._sessionId) {
        this._memoryEvents.unshift(event);

        if (this._memoryEvents.length > _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].MEMORY_MAX_COUNT) {
          this._cacheEvents(this._sessionId);

          this._memoryEvents.length = 0;
        }
      } else {
        (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_0__["default"])().w('session id is null: ', this._sessionId);

        this._noSessionEvents.unshift(event);
      }
    }
  }, {
    key: "setSessionId",
    value: function setSessionId(sid) {
      this._sessionId = sid || 'sessionid';

      if (_utils_dash__WEBPACK_IMPORTED_MODULE_3__["default"].isArray(this._noSessionEvents) && this._noSessionEvents.length) {
        for (var i = 0; i < this._noSessionEvents.length; i++) {
          this.addEvent(this._noSessionEvents[i]);
        }

        this._noSessionEvents.length = 0;
      }
    }
  }, {
    key: "getEkvs",
    value: function getEkvs() {
      var ekvs = _Cache__WEBPACK_IMPORTED_MODULE_2__["default"].get(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].EKVS);

      if (this._memoryEvents && this._memoryEvents.length) {
        ekvs = this._buildEkvs(ekvs, this._memoryEvents);
      }

      return ekvs;
    }
  }, {
    key: "clear",
    value: function clear() {
      _Cache__WEBPACK_IMPORTED_MODULE_2__["default"].remove(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].EKVS);
      this._memoryEvents = [];
      this._noSessionEvents = [];
    } // 返回当前ekvs内的日志条数

  }, {
    key: "getEkvsLen",
    value: function getEkvsLen() {
      var ekvs = _Cache__WEBPACK_IMPORTED_MODULE_2__["default"].get(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].EKVS) || {};
      var events = ekvs[this._sessionId] || [];
      var memoryEventsLen = this._memoryEvents ? this._memoryEvents.length : 0;
      return events.length + memoryEventsLen;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new EventManager();
      }

      return this.instance;
    }
  }]);

  return EventManager;
}();

var eventManager = EventManager.getInstance();
/* harmony default export */ __webpack_exports__["default"] = (eventManager);

/***/ }),

/***/ "./src/core/Header.js":
/*!****************************!*\
  !*** ./src/core/Header.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _system_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @system.device */ "@system.device");
/* harmony import */ var _UserConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserConfig */ "./src/core/UserConfig.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../package.json */ "./package.json");
/* harmony import */ var _system_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @system.network */ "@system.network");
/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
/* harmony import */ var _utils_ulog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ulog */ "./src/utils/ulog.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: Header.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */








function getDeviceInfo(result, callback) {
  _system_device__WEBPACK_IMPORTED_MODULE_1__["default"].getInfo({
    success: function success(res) {
      var w = Number(res.windowWidth);
      var h = Number(res.windowHeight);
      var brand = res.brand;
      var model = res.model;
      result.device_type = res.deviceType;
      result.os = res.osType;
      result.os_version = res.osVersionName;
      result.pixel_ratio = res.screenDensity;
      result.resolution = w > h ? w + '*' + h : h + '*' + w;
      result.language = res.language;
      result.platform_version = res.platformVersionName;
      result.platform_sdk_version = res.platformVersionCode;
      result.device_model = model;
      result.device_brand = brand;
      result.device_name = model; // 内部产品代号

      result.device_manufacturer = res.manufacturer;
      result.product = res.product;
      callback && _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(callback) && callback(result);
    },
    fail: function fail(err) {
      (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_6__["default"])().i('quickapp get deviceInfo failed, errmsg=', err);
      callback && _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(callback) && callback(result);
    }
  });
}

function getNetwokInfo(result, callback) {
  _system_network__WEBPACK_IMPORTED_MODULE_4__["default"].getType({
    success: function success(res) {
      result.access = res.type;
    },
    fail: function fail(err) {
      (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_6__["default"])().i('quickapp get network info failed. errmsg=', err);
    },
    complete: function complete() {
      getDeviceInfo && getDeviceInfo(result, callback);
    }
  });
}

function generate(result, callback) {
  result.device_type = 'Phone';
  getNetwokInfo(result, callback);
}

var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

    _defineProperty(this, "_header", {});

    _defineProperty(this, "_loaded", false);

    _defineProperty(this, "baseHeader", {
      sdk_version: _package_json__WEBPACK_IMPORTED_MODULE_3__.version,
      //sdk_version
      sdk_name: 'qt_quickapp_sdk',
      platform: 'quickapp',
      sdk_type: 'quickappmp'
    });
  }

  _createClass(Header, [{
    key: "init",
    value: function init(cb) {
      var that = this;
      generate(this.baseHeader, function (result) {
        that._header = result;
        that._loaded = true;
        that._header.appKey = _UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"].appKey;
        _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(cb) && cb();
      });
    }
  }, {
    key: "isLoaded",
    value: function isLoaded() {
      return this._loaded;
    }
  }, {
    key: "get",
    value: function get() {
      return this._header;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      Header.getInstance()._header[key] = value;
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return Header.getInstance()._header[key];
    }
  }, {
    key: "setIdTracking",
    value: function setIdTracking(idTracking) {
      this.setItem(_utils_consts__WEBPACK_IMPORTED_MODULE_0__["default"].ID_TRACKING, idTracking);
    }
  }, {
    key: "setIdType",
    value: function setIdType(idType) {
      this.setItem(_utils_consts__WEBPACK_IMPORTED_MODULE_0__["default"].ID_TYPE, idType);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new Header();
      }

      return this._instance;
    }
  }]);

  return Header;
}();

var LogHeader = Header.getInstance();
/* harmony default export */ __webpack_exports__["default"] = (LogHeader);

/***/ }),

/***/ "./src/core/RequestQueue.js":
/*!**********************************!*\
  !*** ./src/core/RequestQueue.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _BaseQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseQueue */ "./src/core/BaseQueue.js");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body */ "./src/core/Body.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/core/Header.js");
/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request */ "./src/core/request.js");
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cache */ "./src/core/Cache.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: RequestQueue.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */








var RequestQueue = /*#__PURE__*/function () {
  function RequestQueue(type) {
    _classCallCheck(this, RequestQueue);

    _defineProperty(this, "_instance", null);

    _defineProperty(this, "_running", false);

    _defineProperty(this, "_currentType", '');

    _defineProperty(this, "_failRequests", []);

    _defineProperty(this, "_failQueue", new _BaseQueue__WEBPACK_IMPORTED_MODULE_0__["default"](_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].MAX_QUEUE_COUNT));

    _defineProperty(this, "_queue", new _BaseQueue__WEBPACK_IMPORTED_MODULE_0__["default"](_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].MAX_QUEUE_COUNT));

    this._currentType = type;
  }

  _createClass(RequestQueue, [{
    key: "_enqueueRequest",
    value: function _enqueueRequest(dataType, options, cb) {
      var that = this;

      if (_Header__WEBPACK_IMPORTED_MODULE_3__["default"].isLoaded()) {
        options = options || {};
        var data = _Body__WEBPACK_IMPORTED_MODULE_2__["default"].build(dataType);

        if (data) {
          data.header = _Header__WEBPACK_IMPORTED_MODULE_3__["default"];
          data.noCache = options.noCache;

          this._queue.enqueue(data);
        }

        _utils_dash__WEBPACK_IMPORTED_MODULE_4__["default"].isFunction(cb) && cb();
      } else {
        setTimeout(function () {
          that._enqueueRequest(dataType);
        }, 100);
      }
    }
  }, {
    key: "_sendQueue",
    value: function _sendQueue(type, cb) {
      var isFR = type === _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].Requests;

      var _sendQueue = isFR ? this._queue : this._failQueue;

      var data = _sendQueue.dequeue();

      var that = this;

      var success = function success() {
        that._sendQueue(type, cb);
      };

      var fail = function fail() {
        // 发送失败则将该条数据添加到队列尾部，防止影响后续数据的发送
        // var item = that._queue.dequeue();
        data && !data.noCache && that._failRequests.push(data);

        that._sendQueue(type, cb);
      };

      if (data) {
        (0,_request__WEBPACK_IMPORTED_MODULE_5__["default"])(data, success, fail);
      } else {
        that._processFailRequests();

        cb && cb();
      }
    }
  }, {
    key: "_processFailRequests",
    value: function _processFailRequests() {
      // 发送完成后将失败的请求重新添加到队列中
      var that = this;

      this._failRequests.forEach(function (item) {
        that._queue.enqueue(item);
      });

      this._failRequests.length = 0;
    }
  }, {
    key: "_startSend",
    value: function _startSend(type, cb) {
      this._sendQueue(type, function () {
        _utils_dash__WEBPACK_IMPORTED_MODULE_4__["default"].isFunction(cb) && cb();
      });
    }
  }, {
    key: "send",
    value: function send(dataType, options, completedCallback) {
      var that = this;

      if (dataType) {
        this.add(dataType, options, function () {
          that._startSend(that._currentType, completedCallback);
        });
      } else {
        that._startSend(that._currentType, completedCallback);
      }
    }
  }, {
    key: "add",
    value: function add(dataType, options, cb) {
      this._enqueueRequest(dataType, options, cb);
    }
  }, {
    key: "load",
    value: function load() {
      var isFR = this._currentType === _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].Requests;
      var loadQueue = isFR ? this._queue : this._failedQueue;
      var items = _Cache__WEBPACK_IMPORTED_MODULE_6__["default"].get(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].Requests);

      if (items && items.length) {
        items.forEach(function (item) {
          loadQueue.enqueue(item);
        });
      }

      _Cache__WEBPACK_IMPORTED_MODULE_6__["default"].remove(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].Requests);
    } // 当前只有失败队列调用save方法

  }, {
    key: "save",
    value: function save() {
      var cached = _Cache__WEBPACK_IMPORTED_MODULE_6__["default"].get(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].FailedRequests) || [];
      var newCache = cached.concat(this._failedQueue.items());

      if (newCache && newCache.length) {
        _Cache__WEBPACK_IMPORTED_MODULE_6__["default"].set(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].FailedRequests, newCache);
      }

      this._failedQueue.clear(); // 一定要先保存再清空，否则保存的永远是空数据

    }
  }], [{
    key: "getInstance",
    value: function getInstance(type) {
      if (!this._instance) {
        this._instance = new RequestQueue(type);
      }

      return this._instance;
    }
  }]);

  return RequestQueue;
}();

var requestQueue = RequestQueue.getInstance(_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].Requests); // var failedRequestQueue = RequestQueue.getInstance(constant.FailedRequests);

/* harmony default export */ __webpack_exports__["default"] = (requestQueue);

/***/ }),

/***/ "./src/core/SDKConfigManager.js":
/*!**************************************!*\
  !*** ./src/core/SDKConfigManager.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: ConfigManager.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */



function mapEventSampleRates(arr) {
  var result = [];

  _utils_dash__WEBPACK_IMPORTED_MODULE_1__["default"].each(arr, function (item) {
    if (item.eventIds && item.eventIds.length > 0) {
      _utils_dash__WEBPACK_IMPORTED_MODULE_1__["default"].each(item.eventIds, function (ekv) {
        result.push({
          eventId: ekv,
          samplingRate: item.samplingRate
        });
      });
    }
  });

  return result;
}

var SDKConfigManager = /*#__PURE__*/function () {
  function SDKConfigManager() {
    _classCallCheck(this, SDKConfigManager);

    _defineProperty(this, "config", {});
  }

  _createClass(SDKConfigManager, [{
    key: "setItem",
    value: function setItem(key, value) {
      this.config[key] = value;
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return this.config[key];
    }
  }, {
    key: "getALL",
    value: function getALL() {
      return this.config;
    }
  }, {
    key: "updateRemoteConfig",
    value: function updateRemoteConfig(cfg) {
      if (cfg) {
        if (_utils_dash__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwnProperty.call(cfg, 'currentDeviceEnable')) {
          this.setItem(_utils_consts__WEBPACK_IMPORTED_MODULE_0__["default"].QT_DEVICE_ENABLE, cfg.currentDeviceEnable);
        }

        if (_utils_dash__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwnProperty.call(cfg, 'eventSamplingRate') && _utils_dash__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(cfg.eventSamplingRate) && cfg.eventSamplingRate.length > 0) {
          this.setItem(_utils_consts__WEBPACK_IMPORTED_MODULE_0__["default"].QT_EVENT_LIMITRATES, mapEventSampleRates(cfg.eventSamplingRate));
        }
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new SDKConfigManager();
      }

      return this._instance;
    }
  }]);

  return SDKConfigManager;
}();

var sdkConfig = SDKConfigManager.getInstance();
/* harmony default export */ __webpack_exports__["default"] = (sdkConfig);

/***/ }),

/***/ "./src/core/UserConfig.js":
/*!********************************!*\
  !*** ./src/core/UserConfig.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: UserConfig.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */
var UserConfig = /*#__PURE__*/function () {
  function UserConfig() {
    _classCallCheck(this, UserConfig);

    _defineProperty(this, "_globalProperty", {});

    _defineProperty(this, "_appKey", '');

    _defineProperty(this, "_puid", '');

    _defineProperty(this, "_config", {});

    _defineProperty(this, "_pageConfig", {});
  }

  _createClass(UserConfig, [{
    key: "puid",
    get: function get() {
      return this._puid;
    },
    set: function set(value) {
      this._puid = value;
    }
  }, {
    key: "appKey",
    get: function get() {
      return this._appKey;
    },
    set: function set(appkey) {
      this._appKey = appkey;
    }
  }, {
    key: "globalproperty",
    get: function get() {
      return this._globalProperty || {};
    },
    set: function set(value) {
      this._globalProperty = value;
    }
  }, {
    key: "setItem",
    value: function setItem(k, v) {
      this._config[k] = v;
    }
  }, {
    key: "getItem",
    value: function getItem(k) {
      return this._config[k];
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new UserConfig();
      }

      return this.instance;
    }
  }]);

  return UserConfig;
}();

var userConfig = UserConfig.getInstance();
/* harmony default export */ __webpack_exports__["default"] = (userConfig);

/***/ }),

/***/ "./src/core/eventEmitter.js":
/*!**********************************!*\
  !*** ./src/core/eventEmitter.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/*
 * File: message.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 * via umeng/mini sdk logic. EventEmitter.js
 */
function EventEmitter() {// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

EventEmitter.prototype = {
  on: function on(name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });
    return this;
  },
  once: function once(name, callback, ctx) {
    var self = this;

    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }

    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function emit(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },
  off: function off(name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
      }
    } // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EventEmitter);

/***/ }),

/***/ "./src/core/getContext.js":
/*!********************************!*\
  !*** ./src/core/getContext.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getContext; }
/* harmony export */ });
/* harmony import */ var _utils_ulog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ulog */ "./src/utils/ulog.js");
/*
 * File: getContext.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */

function getContext() {
  try {
    return __webpack_require__.g.__proto__ || __webpack_require__.g || window;
  } catch (error) {
    (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_0__["default"])().w('get context failed', error);
  }
}

/***/ }),

/***/ "./src/core/idManager.js":
/*!*******************************!*\
  !*** ./src/core/idManager.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _utils_ulog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ulog */ "./src/utils/ulog.js");
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cache */ "./src/core/Cache.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: idManager.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */





function createUUID() {
  return _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomStr(10) + Date.now() + _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomStr(7) + _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].UUID_SUFFIX;
}

var IDManager = /*#__PURE__*/function () {
  function IDManager() {
    _classCallCheck(this, IDManager);

    _defineProperty(this, "_idType", _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].IDType.uuid);

    _defineProperty(this, "_uuid", '');

    _defineProperty(this, "_userId", '');

    _defineProperty(this, "_openId", '');

    _defineProperty(this, "_unionId", '');

    _defineProperty(this, "_advertisingId", '');

    _defineProperty(this, "_phoneNumber", '');

    _defineProperty(this, "_androidId", '');

    _defineProperty(this, "_deviceId", '');

    _defineProperty(this, "_mac", '');

    _defineProperty(this, "_serial", '');

    _defineProperty(this, "_oaid", '');
  }

  _createClass(IDManager, [{
    key: "init",
    value: function init() {
      this.initUUID();
      this.initUserId();
    }
  }, {
    key: "initUUID",
    value: function initUUID() {
      var that = this;
      _Cache__WEBPACK_IMPORTED_MODULE_3__["default"].getStorage({
        key: _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].IDType.uuid,
        success: function success(data) {
          if (!data) {
            that._uuid = createUUID();
            _Cache__WEBPACK_IMPORTED_MODULE_3__["default"].setStorage({
              key: _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].IDType.uuid,
              value: that._uuid
            });
          } else {
            that._uuid = data;
          }
        },
        fail: function fail() {
          that._uuid = createUUID();
          _Cache__WEBPACK_IMPORTED_MODULE_3__["default"].setStorage({
            key: _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].IDType.uuid,
            value: that._uuid
          });
        }
      });
    }
  }, {
    key: "initUserId",
    value: function initUserId() {
      var that = this;
      _Cache__WEBPACK_IMPORTED_MODULE_3__["default"].getStorage({
        key: _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].IDType.userid,
        success: function success(userid) {
          that._userId = userid;
        }
      });
    }
  }, {
    key: "setUserId",
    value: function setUserId(userid) {
      IDManager.getInstance()._userId = userid;
      _Cache__WEBPACK_IMPORTED_MODULE_3__["default"].set({
        key: _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].IDType.userid,
        value: userid
      });
      _Cache__WEBPACK_IMPORTED_MODULE_3__["default"].setStorage({
        key: _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].IDType.userid,
        value: userid,
        success: function success(data) {
          (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_2__["default"])().i('login success, puid = ', data);
        },
        fail: function fail(err) {
          (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_2__["default"])().w('login failed, err = ', err);
        }
      });
    }
  }, {
    key: "setOpenId",
    value: function setOpenId(openId) {
      this._openId = openId;
    }
  }, {
    key: "setUnionId",
    value: function setUnionId(unionId) {
      this._unionId = unionId;
    }
  }, {
    key: "setAdvertisingId",
    value: function setAdvertisingId(aid) {
      this._advertisingId = aid;
    }
  }, {
    key: "setPhonenum",
    value: function setPhonenum(phoneNumber) {
      this._phoneNumber = phoneNumber;
    }
  }, {
    key: "setAndroidId",
    value: function setAndroidId(androidid) {
      this._androidId = androidid;
    }
  }, {
    key: "setDeviceId",
    value: function setDeviceId(did) {
      this._deviceId = did;
    }
  }, {
    key: "setMac",
    value: function setMac(mac) {
      this._mac = mac;
    }
  }, {
    key: "setSerial",
    value: function setSerial(serial) {
      this._serial = serial;
    }
  }, {
    key: "setOaid",
    value: function setOaid(oaid) {
      this._oaid = oaid;
    }
  }, {
    key: "removeUserId",
    value: function removeUserId(msg) {
      this._userId = '';
      _Cache__WEBPACK_IMPORTED_MODULE_3__["default"].deleteStorage({
        key: _utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].IDType.userid,
        success: function success() {
          msg && (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_2__["default"])().i(msg);
        }
      });
    }
  }, {
    key: "setIDType",
    value: function setIDType(type) {
      this._idType = type;
    }
  }, {
    key: "getIDType",
    value: function getIDType() {
      return this._idType;
    }
  }, {
    key: "getIDTracking",
    value: function getIDTracking() {
      var idTracking = {};

      if (this._uuid) {
        idTracking.uuid = this._uuid;
      }

      if (IDManager.getInstance()._userId) {
        idTracking.userid = IDManager.getInstance()._userid;
      }

      if (IDManager.getInstance()._advertisingId) {
        idTracking.advertisingid = IDManager.getInstance()._advertisingId;
      }

      if (IDManager.getInstance()._openId) {
        idTracking.openId = IDManager.getInstance()._openId;
      }

      if (IDManager.getInstance()._unionId) {
        idTracking.unionId = IDManager.getInstance()._unionId;
      }

      if (IDManager.getInstance()._phoneNumber) {
        idTracking.phoneNumber = IDManager.getInstance()._phoneNumber;
      }

      if (IDManager.getInstance()._androidId) {
        idTracking.androidid = IDManager.getInstance()._phoneNumber;
      }

      if (IDManager.getInstance()._deviceId) {
        idTracking.deviceId = IDManager.getInstance()._deviceId;
      }

      if (IDManager.getInstance()._mac) {
        idTracking.mac = IDManager.getInstance()._mac;
      }

      if (IDManager.getInstance()._serial) {
        idTracking.serial = IDManager.getInstance()._serial;
      }

      if (IDManager.getInstance()._oaid) {
        idTracking.oaid = IDManager.getInstance()._oaid;
      }

      return idTracking;
    }
  }], [{
    key: "getInstance",
    value: //匿名设备标识符
    function getInstance() {
      if (!this._instance) {
        this._instance = new IDManager();
      }

      return this._instance;
    }
  }]);

  return IDManager;
}();

var idManager = IDManager.getInstance();
/* harmony default export */ __webpack_exports__["default"] = (idManager);

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
/* harmony import */ var _utils_ulog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ulog */ "./src/utils/ulog.js");
/* harmony import */ var _UserConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserConfig */ "./src/core/UserConfig.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Event */ "./src/core/Event.js");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _RequestQueue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RequestQueue */ "./src/core/RequestQueue.js");
/* harmony import */ var _EventManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventManager */ "./src/core/EventManager.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./src/core/Header.js");
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messager */ "./src/core/messager.js");
/* harmony import */ var _idManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./idManager */ "./src/core/idManager.js");
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Cache */ "./src/core/Cache.js");
/* harmony import */ var _SDKConfigManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SDKConfigManager */ "./src/core/SDKConfigManager.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: api.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */













function needLimitSend(eventcode) {
  var eventLimitRates = _SDKConfigManager__WEBPACK_IMPORTED_MODULE_11__["default"].getItem(_utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].QT_EVENT_LIMITRATES);

  if (eventLimitRates && eventLimitRates.length > 0) {
    var event = _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].find(eventLimitRates, function (item) {
      return item.eventId === eventcode;
    });

    if (event) {
      var random = Math.ceil(Math.random() * 1000);

      if (random < event.samplingRate * 1000) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return true;
  }
}

var Core = /*#__PURE__*/function () {
  function Core() {
    _classCallCheck(this, Core);

    _defineProperty(this, "_inited", false);

    _defineProperty(this, "_appStartTime", 0);
  }

  _createClass(Core, [{
    key: "ready",
    get: function get() {
      return this._inited;
    }
  }, {
    key: "init",
    value: function init() {
      var that = this;
      _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].init();
      _Header__WEBPACK_IMPORTED_MODULE_7__["default"].init(function () {
        _Cache__WEBPACK_IMPORTED_MODULE_10__["default"].load(function (cacheLoaded) {
          that._inited = cacheLoaded;
          _messager__WEBPACK_IMPORTED_MODULE_8__["default"].emit(_messager__WEBPACK_IMPORTED_MODULE_8__["default"].messageType.SDK_INITED);
        });
      });
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(id, params) {
      if (!this._inited) {
        return;
      }

      var deviceEnable = _SDKConfigManager__WEBPACK_IMPORTED_MODULE_11__["default"].getItem(_utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].QT_DEVICE_ENABLE);

      if (deviceEnable || /^(\$\$_app_start|\$\$_app_end)$/.test(id)) {
        if (_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].checkEvent(id, params) && needLimitSend(id)) {
          var event = new _Event__WEBPACK_IMPORTED_MODULE_3__["default"](id, params);
          _EventManager__WEBPACK_IMPORTED_MODULE_6__["default"].addEvent(event);
          _RequestQueue__WEBPACK_IMPORTED_MODULE_5__["default"].send(_utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].DataType.EKV, {
            noCache: true
          }, function () {});
        }
      }
    }
  }, {
    key: "appLaunch",
    value: function appLaunch() {
      var that = this;
      this._appStartTime = Date.now();
      _messager__WEBPACK_IMPORTED_MODULE_8__["default"].on(_messager__WEBPACK_IMPORTED_MODULE_8__["default"].messageType.SDK_INITED, function () {
        that.sendEvent(_utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].APP_START, {
          ts: that._appStartTime
        });
      });
    }
  }, {
    key: "appHide",
    value: function appHide() {
      var endTime = Date.now();
      var duration = endTime - this._appStartTime;
      this.sendEvent(_utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].APP_END, {
        ts: endTime,
        duration: duration
      });
    }
  }, {
    key: "sendPageStart",
    value: function sendPageStart(params) {
      this.sendEvent(_utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].PAGE_START, _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].assign(params, {
        ts: Date.now()
      }));
    }
  }, {
    key: "sendUserProfile",
    value: function sendUserProfile(parmas) {
      this.sendEvent(_utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].USER_PROFILE, parmas);
    }
  }, {
    key: "getGlobalProperty",
    value: function getGlobalProperty() {
      return _UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"].globalproperty || {};
    }
  }, {
    key: "setGlobalProperty",
    value: function setGlobalProperty(value) {
      if (_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) || _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(value)) {
        var nested = false;

        _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].eachMap(value, function (k, v) {
          if (_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(v) || _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(v)) {
            nested = true;
            (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().w('globalproperty k/v pair should not contain nested json format. current value=\n');
            (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().w(JSON.stringify(value));
            return;
          }
        });

        if (!nested) {
          _UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"].globalproperty = _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].clone(value);
        }
      } else {
        (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().w("setGlobalProperty can only be assigned as Object/Array format value.");
      }
    }
  }, {
    key: "appendGlobalProperty",
    value: function appendGlobalProperty(value) {
      if (_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) || _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(value)) {
        _UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"].globalProperty = _utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].clone(_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].assign(_UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"].globalProperty, value));
      } else {
        (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().w("appendGlobalProperty can only be assigned as Object/Array format value.");
      }
    }
  }, {
    key: "login",
    value: function login(puid) {
      if (puid) {
        _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setUserId(puid);
      }
    }
  }, {
    key: "logoff",
    value: function logoff() {
      _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].removeUserId('logoff success!');
    }
  }, {
    key: "setIdTracking",
    value: function setIdTracking(ids) {
      for (var key in ids) {
        switch (key) {
          case _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].IDType.openid:
            _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setOpenId(ids[key]);
            break;

          case _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].IDType.unionid:
            _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setUnionId(ids[key]);
            break;

          case _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].IDType.adroidid:
            _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setAndroidId(ids[key]);
            break;

          case _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].IDType.advertisingid:
            _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setAdvertisingId(ids[key]);
            break;

          case _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].IDType.phonenumber:
            _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setPhonenum(ids[key]);
            break;

          case _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].IDType.deviceId:
            _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setDeviceId(ids[key]);
            break;

          case _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].IDType.mac:
            _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setMac(ids[key]);
            break;

          case _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].IDType.serial:
            _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setSerial(ids[key]);
            break;

          case _utils_consts__WEBPACK_IMPORTED_MODULE_4__["default"].IDType.oaid:
            _idManager__WEBPACK_IMPORTED_MODULE_9__["default"].setOaid(ids[key]);
            break;

          default:
            (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().w('invalid id key = ', key);
            break;
        }
      }
    }
  }]);

  return Core;
}();

/* harmony default export */ __webpack_exports__["default"] = (Core);

/***/ }),

/***/ "./src/core/messager.js":
/*!******************************!*\
  !*** ./src/core/messager.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _eventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventEmitter */ "./src/core/eventEmitter.js");
/*
 * File: message.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */

var emitter = new _eventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
emitter.messageType = {
  PARAMS_LOADED: 0,
  SDK_INITED: 1
};
/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./src/core/request.js":
/*!*****************************!*\
  !*** ./src/core/request.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cache */ "./src/core/Cache.js");
/* harmony import */ var _system_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @system.fetch */ "@system.fetch");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/core/Header.js");
/* harmony import */ var _UserConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserConfig */ "./src/core/UserConfig.js");
/* harmony import */ var _idManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./idManager */ "./src/core/idManager.js");
/* harmony import */ var _utils_dash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dash */ "./src/utils/dash.js");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _SDKConfigManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SDKConfigManager */ "./src/core/SDKConfigManager.js");
/* harmony import */ var _utils_ulog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ulog */ "./src/utils/ulog.js");
/* harmony import */ var _system_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @system.app */ "@system.app");
/*
 * File: request.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */











function getLogURL() {
  var trackDomain = _UserConfig__WEBPACK_IMPORTED_MODULE_3__["default"].getItem(_utils_consts__WEBPACK_IMPORTED_MODULE_6__["default"].TRACK_DOMAIN);
  if (!_utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].checkDomain(trackDomain)) return;
  return _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].fixDomain(trackDomain) + '/qappm_logs';
}

function getRemoteCfgURL(imprintVersion) {
  var trackDomain = _UserConfig__WEBPACK_IMPORTED_MODULE_3__["default"].getItem(_utils_consts__WEBPACK_IMPORTED_MODULE_6__["default"].TRACK_DOMAIN);
  return _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].fixDomain(trackDomain) + imprintVersion;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(data, successCallback, failCallback, completeCallback) {
  _Header__WEBPACK_IMPORTED_MODULE_2__["default"].setIdType(_idManager__WEBPACK_IMPORTED_MODULE_4__["default"].getIDType());
  _Header__WEBPACK_IMPORTED_MODULE_2__["default"].setIdTracking(_idManager__WEBPACK_IMPORTED_MODULE_4__["default"].getIDTracking());

  if (data.analytics) {
    data.analytics.active_user = {
      puid: _UserConfig__WEBPACK_IMPORTED_MODULE_3__["default"].puid || ""
    };
  }

  data.header = _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].assign(_Header__WEBPACK_IMPORTED_MODULE_2__["default"].get(), {
    traceId: _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].getRandomStr(10) + Date.now() + _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].getRandomStr(9),
    app_version: _system_app__WEBPACK_IMPORTED_MODULE_9__["default"].getInfo().versionName,
    //TODO: 需要在app onCreate之后
    appid: _system_app__WEBPACK_IMPORTED_MODULE_9__["default"].getInfo().packageName,
    //来源类型, 一级来源 //TODO: 新增
    app_source_type: _system_app__WEBPACK_IMPORTED_MODULE_9__["default"].getInfo().source.type //来源类型, 二级来源 //TODO: 新增

  });

  var mangleData = _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].mangle(data);

  var requestData = _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].base64Encode(JSON.stringify(mangleData));

  var url = getLogURL();
  _system_fetch__WEBPACK_IMPORTED_MODULE_1__["default"].fetch({
    url: url,
    header: {
      'Content-Type': 'qappmp/json',
      'Msg-Type': 'qappmp/json'
    },
    data: requestData,
    method: 'POST',
    responseType: 'json',
    success: function success(resp) {
      var statusCode = resp.code;

      if (statusCode === 200) {
        (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_8__["default"])().i('data send success:', JSON.stringify(data)); //在此处将imprint内容加入到本地缓存中

        saveImprint(resp.data || {});
        _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(successCallback) && successCallback(resp);
      } else {
        (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_8__["default"])().w('data send failed:', requestData);
        _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(failCallback) && failCallback();
      }
    },
    fail: function fail(isTimeout) {
      (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_8__["default"])().w('data send' + isTimeout ? 'timeout: ' : 0, requestData);
      _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(failCallback) && failCallback();
    },
    complete: function complete() {
      _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(completeCallback) && completeCallback();
    }
  });
}

function fetchImprintVersion(impv) {
  var url = getRemoteCfgURL(impv);
  _system_fetch__WEBPACK_IMPORTED_MODULE_1__["default"].fetch({
    url: url,
    method: 'GET',
    responseType: 'json',
    success: function success(resp) {
      if (resp.data && resp.data.data) {
        _SDKConfigManager__WEBPACK_IMPORTED_MODULE_7__["default"].updateRemoteConfig(resp.data.data);
        _Cache__WEBPACK_IMPORTED_MODULE_0__["default"].setStorage({
          key: _utils_consts__WEBPACK_IMPORTED_MODULE_6__["default"].QT_REMOTE_CONFIG,
          value: resp.data.data
        });
      }
    },
    fail: function fail(error) {
      (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_8__["default"])().w('remote configuration request failed, errmsg:', error);
    }
  });
}

function saveImprint(imprint) {
  try {
    var imprintVersion = imprint.imprintVersion;
    _Cache__WEBPACK_IMPORTED_MODULE_0__["default"].getStorage({
      key: _utils_consts__WEBPACK_IMPORTED_MODULE_6__["default"].QT_IMPRINT_VERSION,
      success: function success(res) {
        if (res && _utils_dash__WEBPACK_IMPORTED_MODULE_5__["default"].isString(res)) {
          var localImpv = res;

          if (imprintVersion && imprintVersion !== localImpv) {
            fetchImprintVersion(imprintVersion);
            _Cache__WEBPACK_IMPORTED_MODULE_0__["default"].setStorage({
              key: _utils_consts__WEBPACK_IMPORTED_MODULE_6__["default"].QT_IMPRINT_VERSION,
              value: imprintVersion
            });
          } else {
            _Cache__WEBPACK_IMPORTED_MODULE_0__["default"].getStorage({
              key: _utils_consts__WEBPACK_IMPORTED_MODULE_6__["default"].QT_REMOTE_CONFIG,
              success: function success(res) {
                var lsRemoteCfg = JSON.parse(res);
                _SDKConfigManager__WEBPACK_IMPORTED_MODULE_7__["default"].updateRemoteConfig(lsRemoteCfg);
              }
            });
          }
        } else {
          imprintVersion && fetchImprintVersion(imprintVersion);
          imprintVersion && _Cache__WEBPACK_IMPORTED_MODULE_0__["default"].setStorage({
            key: _utils_consts__WEBPACK_IMPORTED_MODULE_6__["default"].QT_IMPRINT_VERSION,
            value: imprintVersion
          });
        }
      },
      fail: function fail(err) {
        (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_8__["default"])().w('save imprint failed!, errmsg = ', err);
      }
    });
  } catch (e) {
    (0,_utils_ulog__WEBPACK_IMPORTED_MODULE_8__["default"])().w('save imprint failed, errmsg = ', e);
  }
}

/***/ }),

/***/ "./src/utils/consts.js":
/*!*****************************!*\
  !*** ./src/utils/consts.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/*
 * File: consts.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */
var constant = {
  TRACK_DOMAIN: 'trackDomain',
  APPKEY: 'appKey',
  showLog: 'showLog',
  APP_START: '$$_app_start',
  APP_END: '$$_app_end',
  PAGE_START: '$$_page_start',
  PAGE_END: '$$_page_end',
  USER_PROFILE: '$$_user_profile',
  EKV_SHARE: '$$_share',
  PAGE_TITLE: 'page_title',
  PAGE_NAME: 'page_name',
  EKVS: 'ekvs',
  PAGE_CONFIG: 'pageConfig',
  EVENT_MAX_COUNT: 10000,
  // 本地最多存储这么多ekv数据
  MEMORY_MAX_COUNT: 1,
  // 内存中存储的最大数据数量，超过则缓存到本地
  CURRENT_SESSION: 'current_session',
  SESSION_INTERVAL: 30000,
  // sessionId过期时间 30秒
  MAX_QUEUE_COUNT: 50,
  // 为防止因网络异常导致缓存过大，设置缓存个数上限
  MAX_REQUEST_TIMEOUT: 5000,
  MAX_EVENTID_LENGTH: 128,
  MAX_PROPERTY_KEY_LENGTH: 128,
  MAX_PROPERTY_KEYS_COUNT: 100,
  ID_TRACKING: 'id_tracking',
  ID_TYPE: 'id_type',
  APP_VERSION: 'app_version',
  IMPRINT: 'imprint',
  Requests: 'Requests',
  FailedRequests: 'failedRequests',
  QT_REMOTE_CONFIG: 'QT_REMOTE_CONFIG',
  QT_IMPRINT_VERSION: 'QT_IMPRINT_VERSION',
  QT_DEVICE_ENABLE: 'QT_DEVICE_ENALBE',
  QT_EVENT_LIMITRATES: 'QT_EVENT_LIMITRATES',
  GlobalProperty: 'globalproperty',
  UUID_SUFFIX: 'ud',
  //ENUM
  DataType: {
    EKV: 'ekv'
  },
  IDType: {
    uuid: 'uuid',
    userid: 'userid',
    openid: 'openid',
    unionid: 'unionid',
    adroidid: 'androidid',
    advertisingid: 'advertisingid',
    phonenumber: 'phonenumber',
    mac: 'mac',
    oaid: 'oaid',
    serial: 'serial',
    deviceId: 'deviceid'
  },
  ID_MAP: {
    uuid: 'ud',
    unionid: 'und',
    openid: 'od',
    android_id: 'android_id',
    advertisingId: 'advertising_id',
    phonenumber: 'phonenumber'
  },
  Header_Map_H: {
    sdk_type: 'sdt',
    //sdk类型 quickappmp
    language: 'lang',
    //系统语言
    device_type: 'dt',
    //设备类型
    os_version: 'ov',
    //操作系统版本
    os: 'os',
    //操作系统
    appKey: 'ak',
    //appKey
    sdk_version: 'sv',
    //sdk版本
    resolution: 'rl',
    //分辨率
    pixel_ratio: 'pr',
    //设备的屏幕密度
    id_type: 'it',
    //id类型
    id_tracking: 'itr',
    access: 'ac',
    //网络
    device_manufacturer: 'dmf',
    //设备生产商
    device_model: 'dm',
    //设备型号
    device_name: 'dn',
    //设设备型号
    platform_version: 'pv',
    //运行平台版本名称
    platform_sdk_version: 'psv',
    //平台sdk版本
    device_brand: 'db',
    //设备品牌
    debugId: 'dk'
  },
  Header_Map_A: {
    ekvs: 'e',
    active_user: 'active_user'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (constant);

/***/ }),

/***/ "./src/utils/dash.js":
/*!***************************!*\
  !*** ./src/utils/dash.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/utils/consts.js");
/* harmony import */ var _ulog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ulog */ "./src/utils/ulog.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
 * File: dash.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */


var ArrayProto = Array.prototype;
var FuncProto = Function.prototype;
var ObjProto = Object.prototype;
var slice = ArrayProto.slice;
var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;
var originIsArray = Array.isArray; // eslint-disable-next-line no-unused-vars

var originFuncBind = FuncProto.bind; // eslint-disable-next-line no-unused-vars

var originForEach = ArrayProto.forEach; // eslint-disable-next-line no-unused-vars

var originIndexOf = ArrayProto.indexOf;

function _mangleObj(obj, map) {
  var result = {};

  for (var key in obj) {
    if (map[key]) {
      result[map[key]] = obj[key];
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

var _ = {
  isFunction: function isFunction(func) {
    try {
      return /^\s*\bfunction\b/.test(func);
    } catch (t) {
      return false;
    }
  },
  isArray: originIsArray || function (t) {
    return "[object Array]" === toString.call(t);
  },
  isArguments: function isArguments(t) {
    return !(!t || !hasOwnProperty.call(t, "callee"));
  },
  toArray: function toArray(t) {
    if (t && t.toArray) {
      return t.toArray();
    } else if (this.isArray(t)) {
      return slice.call(t);
    } else if (this.isArguments(t)) {
      return slice.call(t);
    } else {
      return [];
    }
  },
  isString: function isString(str) {
    return Object.prototype.toString.call(str) === "[object String]";
  },
  isUndefined: function isUndefined(target) {
    return void 0 === target;
  },
  isDate: function isDate(t) {
    return "[object Date]" == toString.call(t);
  },
  isBoolean: function isBoolean(t) {
    return "[object Boolean]" == toString.call(t);
  },
  isNumber: function isNumber(t) {
    // eslint-disable-next-line no-useless-escape
    return "[object Number]" == toString.call(t) && /[\d\.]+/.test(String(t));
  },
  isJSONString: function isJSONString(t) {
    try {
      JSON.parse(t);
    } catch (t) {
      return false;
    }

    return true;
  },
  utf8Encode: function utf8Encode(t) {
    var e,
        n,
        r,
        i,
        a = "";

    for (e = n = 0, r = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i = 0; i < r; i++) {
      var s = t.charCodeAt(i),
          o = null;
      s < 128 ? n++ : o = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== o && (n > e && (a += t.substring(e, n)), a += o, e = n = i + 1);
    }

    return n > e && (a += t.substring(e, t.length)), a;
  },
  base64Encode: function base64Encode(target) {
    var e,
        n,
        r,
        i,
        a,
        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        o = 0,
        c = 0,
        u = "",
        f = [];
    if (!target) return target;
    target = this.utf8Encode(target);

    do {
      e = (a = target.charCodeAt(o++) << 16 | target.charCodeAt(o++) << 8 | target.charCodeAt(o++)) >> 18 & 63, n = a >> 12 & 63, r = a >> 6 & 63, i = 63 & a, f[c++] = s.charAt(e) + s.charAt(n) + s.charAt(r) + s.charAt(i);
    } while (o < target.length);

    switch (u = f.join(""), target.length % 3) {
      case 1:
        u = u.slice(0, -2) + "==";
        break;

      case 2:
        u = u.slice(0, -1) + "=";
    }

    return u;
  },
  each: function each(arr, fn) {
    if (this.isObject(arr) && arr.length === void 0) {
      for (var attr in arr) {
        if (hasOwnProperty.call(arr, attr)) {
          fn(attr, arr[attr], arr);
        }
      }
    } else {
      var i;
      var l = arr.length;

      for (i = 0; i < l; i++) {
        var rs = fn(arr[i], i);

        if (rs === 'break') {
          break;
        }
      }
    }
  },
  eachMap: function eachMap(map, cb) {
    if (Object && Object.keys) {
      var keys = Object.keys(map);
      var len = keys.length;

      for (var i = 0; i < len; i++) {
        var k1 = keys[i];
        cb && cb(k1, map[k1]);
      }
    } else {
      for (var k in map) {
        cb && cb(k, map[k]);
      }
    }
  },
  isObject: function isObject(obj) {
    if (_typeof(obj) !== 'object' || obj === null) return false;
    var proto = obj;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(obj) === proto;
  },
  isEmptyObject: function isEmptyObject(obj) {
    try {
      if (!obj) {
        return true;
      }

      if (typeof Object.keys === 'function' && Object.keys(obj).length === 0) {
        return true;
      }

      for (var k in obj) {
        if (hasOwnProperty.call(obj, k)) {
          return false;
        }
      }

      return true;
    } catch (error) {
      return false;
    }
  },
  assign: function assign(targetObj, argsObj) {
    if (typeof Object.assign !== 'function') {
      return function (target) {
        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource !== null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
              if (hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }

        return to;
      }(targetObj, argsObj);
    } else {
      return Object.assign({}, targetObj, argsObj);
    }
  },
  find: function find(arr, callback) {
    try {
      return arr.find(callback);
    } catch (e) {
      for (var i = 0; i < arr.length; i++) {
        var match = callback(arr[i]);

        if (match) {
          return arr[i];
        }
      }
    }
  },
  checkDomain: function checkDomain(url) {
    var reg = new RegExp(/^((http|https|''):\/\/)?([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:[0-9]{1,5})*)$/);
    var matched = ((url || '').match(reg) || [])[0];

    if (!url || !matched) {
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w((0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().repeat("!"));
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w("trackDomain error, please check trackDomain setting, current value is: " + url || 0);
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w("we accept these three patterns:");
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w("eg1: https://test-qtracking-xxx.com:port, port is optional");
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w("eg2: http://test-qtracking-xxx.com:port, port is optional");
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w("eg3: test-qtracking-xxx.com:port, port is optional");
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w((0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().repeat("!"));
      return false;
    }

    return true;
  },
  checkEvent: function checkEvent(id, params) {
    if (!(id && typeof id === 'string')) {
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().w('eventcode is invalid, id =', id || "'' event properties = ", JSON.stringfy(params));
      return false;
    } // 保留关键字


    var reserveWords = ['id', 'du'];
    var reserveWordMap = {};
    reserveWords.forEach(function (word) {
      reserveWordMap[word] = 1;
    }); // 检查eventId是否与保留关键字冲突

    if (reserveWordMap[id]) {
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().e('eventcode has conflict with reservewords: ' + reserveWords.join(','));
      return false;
    }

    if (id.length > _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_EVENTID_LENGTH) {
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().e('The maximum length of eventcode shall not exceed ' + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_EVENTID_LENGTH);
      return false;
    } // properties的合法类型为 string | object(not include Array)


    if (params && (_typeof(params) !== 'object' || this.isArray(params)) && typeof params !== 'string') {
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().e('please check trackEvent properties. properties should be string or object(not include Array)');
      return false;
    }

    if (this.isArray(params)) {
      var count = 0;

      for (var key in params) {
        if ({}.hasOwnProperty.call(params, key)) {
          if (key.length > _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_PROPERTY_KEY_LENGTH) {
            (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().e('The maximum length of property key shall not exceed ' + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_PROPERTY_KEY_LENGTH);
            return false;
          }

          if (count >= _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_PROPERTY_KEYS_COUNT) {
            (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().e('The maximum count of properties shall not exceed ' + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_PROPERTY_KEYS_COUNT);
            return false;
          }

          if (reserveWordMap[key]) {
            (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().e('property key has conflict with reserveWords: ' + reserveWords.join(','));
            return false;
          }

          count += 1;
        }
      }
    }

    return true;
  },
  fixDomain: function fixDomain(url) {
    if (url.indexOf('https://') !== -1 || url.indexOf('http://') !== -1) {
      return url;
    } else {
      url = (/^\/\//.test(url) ? '' : '//') + url;

      if (/(\d+\.){3,}\d+/.test(url)) {
        return 'http:' + url;
      } else {
        return 'https:' + url;
      }
    }
  },
  checkAppKey: function checkAppKey(appKey) {
    if (appKey && this.isString(appKey)) {
      return appKey;
    } else {
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w((0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().repeat("!"));
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w("appKey error, please check appKey setting!");
      (0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().tip_w((0,_ulog__WEBPACK_IMPORTED_MODULE_1__["default"])().repeat("!"));
    }
  },
  getRandomStr: function getRandomStr(len) {
    var str = '';
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (var i = 0; i < Number(len); i++) {
      var pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }

    return str;
  },
  mangle: function mangle(data) {
    function _mangleHeader(params, map) {
      var result = _mangleObj(params, map);

      if (params && params.id_tracking) {
        result[map.id_tracking || 'id_tracking'] = _mangleObj(params.id_tracking, _consts__WEBPACK_IMPORTED_MODULE_0__["default"].ID_MAP);
      }

      return result;
    }

    function _mangleAnalytics(params, map) {
      var result = {};

      if (params) {
        for (var prop in params) {
          if (params[prop]) {
            result[map[prop]] = params[prop];
          }
        }
      }

      return result;
    }

    return {
      h: _mangleHeader(data.header, _consts__WEBPACK_IMPORTED_MODULE_0__["default"].Header_Map_H),
      a: _mangleAnalytics(data.analytics, _consts__WEBPACK_IMPORTED_MODULE_0__["default"].Header_Map_A)
    };
  },
  hasOwnProperty: hasOwnProperty,
  hash: function hash(str, s) {
    var def_v = 1315423911;
    var hmac = s || def_v,
        i,
        ch;

    for (i = str.length - 1; i >= 0; i--) {
      ch = str.charCodeAt(i);
      hmac ^= (hmac << 5) + ch + (hmac >> 2);
    }

    var rs = (hmac & 0x7FFFFFFF).toString(16);
    return rs;
  },
  clone: function clone(obj) {
    var str;
    var newobj = Array.isArray(obj) ? [] : {}; //Fix obj.contructor typeError constructor undefined

    if (_typeof(obj) !== 'object') {
      return;
    } else if (JSON && JSON.parse) {
      str = JSON.stringify(obj); //系列化对象

      newobj = JSON.parse(str); //还原
    } else {
      for (var i in obj) {
        newobj[i] = _typeof(obj[i]) === 'object' ? this.clone(obj[i]) : obj[i];
      }
    }

    return newobj;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_);

/***/ }),

/***/ "./src/utils/ulog.js":
/*!***************************!*\
  !*** ./src/utils/ulog.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/*
 * File: utilLogger.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */


var LOG_PREFIX_QT = '[QT] -- ';
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var _instance = null;
  var _debug = false;
  var _log_prefix = '';

  function ULog() {
    this.setDebug = function (debug) {
      _debug = debug;
      _log_prefix = LOG_PREFIX_QT;
    };

    this.i = function () {
      if (_debug) {
        try {
          if (typeof arguments[0] === 'string') {
            arguments[0] = _log_prefix + arguments[0];
          }

          console.info.apply(console, arguments);
        } catch (e) {// e
        }
      }
    };

    this.e = function () {
      if (_debug) {
        try {
          if (typeof arguments[0] === 'string') {
            arguments[0] = _log_prefix + arguments[0];
          }

          console.error.apply(console, arguments);
        } catch (e) {// e
        }
      }
    };

    this.w = function () {
      if (_debug) {
        try {
          if (typeof arguments[0] === 'string') {
            arguments[0] = _log_prefix + arguments[0];
          }

          console.warn.apply(console, arguments);
        } catch (e) {// e
        }
      }
    };

    this.v = function () {
      try {
        if (typeof arguments[0] === 'string') {
          arguments[0] = _log_prefix + arguments[0];
        }

        console.warn.apply(console, arguments);
      } catch (e) {// e
      }
    };

    this.tip_w = function (msg) {
      try {
        console.log('%c ' + _log_prefix + msg, 'background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;');
      } catch (e) {// e
      }
    };

    this.repeat = function (_char) {
      var res = _char;

      while (res.length < 86) {
        res = res + _char;
      }

      return res;
    };
  }

  return function () {
    if (_instance === null) {
      _instance = new ULog();
    }

    return _instance;
  };
})());

/***/ }),

/***/ "@system.app":
/*!******************************!*\
  !*** external "@system.app" ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE__system_app_8fb6b5f7__["default"] });

/***/ }),

/***/ "@system.device":
/*!*********************************!*\
  !*** external "@system.device" ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE__system_device_283b97d4__["default"] });

/***/ }),

/***/ "@system.fetch":
/*!********************************!*\
  !*** external "@system.fetch" ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE__system_fetch_3cd13842__["default"] });

/***/ }),

/***/ "@system.network":
/*!**********************************!*\
  !*** external "@system.network" ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE__system_network_20e0ec2d__["default"] });

/***/ }),

/***/ "@system.router":
/*!*********************************!*\
  !*** external "@system.router" ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE__system_router_f277ef2b__["default"] });

/***/ }),

/***/ "@system.storage":
/*!**********************************!*\
  !*** external "@system.storage" ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE__system_storage_31564c76__["default"] });

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

module.exports = {"version":"1.0.0"};

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/global */
/******/ !function() {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/* harmony import */ var _src_utils_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils/dash */ "./src/utils/dash.js");
/* harmony import */ var _src_utils_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _src_core_UserConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/core/UserConfig */ "./src/core/UserConfig.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @log */ "./src/utils/ulog.js");
/* harmony import */ var _src_core_getContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/core/getContext */ "./src/core/getContext.js");
/* harmony import */ var _src_core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/core/index */ "./src/core/index.js");
/* harmony import */ var _src_core_messager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/core/messager */ "./src/core/messager.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * File: index.js
 * Project: qt_quickapp_sdk
 *      
 * Author: 钰昭 (changliang.lcl@umeng.com)
 *      
 * Copyright - 2022 Alibaba Group Holding Limited.
 */








var QT = /*#__PURE__*/function () {
  function QT() {
    _classCallCheck(this, QT);

    _defineProperty(this, "_params", {
      'name': 'qt'
    });

    _defineProperty(this, "_core", null);

    this._core = new _src_core_index__WEBPACK_IMPORTED_MODULE_5__["default"]();
  }

  _createClass(QT, [{
    key: "init",
    value: function init(ctx) {
      try {
        var localCtx = ctx || (0,_src_core_getContext__WEBPACK_IMPORTED_MODULE_4__["default"])();

        if (localCtx) {
          localCtx[this._params.name] = QT.getInstance();

          if (localCtx.$app) {
            localCtx.$app[this._params.name] = QT.getInstance();
          }
        }

        this._core.init();

        var that = this;
        _src_core_messager__WEBPACK_IMPORTED_MODULE_6__["default"].on(_src_core_messager__WEBPACK_IMPORTED_MODULE_6__["default"].messageType.SDK_INITED, function () {
          if (that._core.ready) {
            (0,_log__WEBPACK_IMPORTED_MODULE_3__["default"])().v('QT SDK init success!!!');
          } else {
            (0,_log__WEBPACK_IMPORTED_MODULE_3__["default"])().v('QT SDK init failed, current setting is: \n');
            (0,_log__WEBPACK_IMPORTED_MODULE_3__["default"])().v(JSON.stringify(QT.getInstance()._params));
          }
        });
      } catch (error) {
        (0,_log__WEBPACK_IMPORTED_MODULE_3__["default"])().w('qt quickapp init failed!');
      }
    }
  }, {
    key: "setParams",
    value: function setParams(aParams) {
      var that = this;

      if (aParams && _src_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(aParams)) {
        (0,_log__WEBPACK_IMPORTED_MODULE_3__["default"])().setDebug(!!aParams.showLog);

        _src_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].eachMap(aParams, function (k, v) {
          switch (k) {
            case _src_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].TRACK_DOMAIN:
              if (_src_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].checkDomain(v)) {
                QT.getInstance()._params[k] = v;
                _src_core_UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"].setItem(_src_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].TRACK_DOMAIN, v);
              }

              break;

            case _src_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].APPKEY:
              if (_src_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].checkAppKey(v)) {
                QT.getInstance()._params[k] = v;
                _src_core_UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"].appKey = v;
              }

              break;

            case _src_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].IDType.userid:
              _src_core_UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"].puid = v;
              break;

            case _src_utils_consts__WEBPACK_IMPORTED_MODULE_1__["default"].GlobalProperty:
              that.setGlobalProperty(v);
              break;

            default:
              QT.getInstance()._params[k] = v;
              break;
          }
        });
      }
    }
  }, {
    key: "setIds",
    value: function setIds(ids) {
      console.log('yz-----core', this._core);

      if (this._core && _src_utils_dash__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(ids)) {
        this._core.setIdTracking(ids);
      }
    }
  }, {
    key: "appLaunch",
    value: function appLaunch(options) {
      if (this._core) {
        this._core.appLaunch(options);
      }
    }
  }, {
    key: "appHide",
    value: function appHide(options) {
      if (this._core) {
        this._core.appHide(options);
      }
    }
  }, {
    key: "sendPageStart",
    value: function sendPageStart(params) {
      if (this._core) {
        this._core.sendPageStart(params);
      }
    }
  }, {
    key: "sendUserProfile",
    value: function sendUserProfile(params) {
      if (this._core) {
        this._core.sendUserProfile(params);
      }
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(id, parmas) {
      if (this._core) {
        this._core.sendEvent(id, parmas);
      }
    }
  }, {
    key: "setGlobalProperty",
    value: function setGlobalProperty(value) {
      if (this._core) {
        this._core.setGlobalProperty(value);
      }
    }
  }, {
    key: "appendGlobalProperty",
    value: function appendGlobalProperty(value) {
      if (this._core) {
        this._core.appendGlobalProperty(value);
      }
    }
  }, {
    key: "getGlobalProperty",
    value: function getGlobalProperty() {
      if (this._core) {
        return this._core.getGlobalProperty();
      }

      return {};
    }
  }, {
    key: "login",
    value: function login(puid) {
      this._core.login(puid);
    }
  }, {
    key: "logoff",
    value: function logoff() {
      this._core.logoff();
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new QT();
      }

      return this._instance;
    }
  }]);

  return QT;
}();

var qt = QT.getInstance();
/* harmony default export */ __webpack_exports__["default"] = (qt);
}();
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQWhDO01BQ0Q7SUFDRjs7O1dBRUQsNkJBQW9CO01BQ2xCLElBQUksS0FBSzRhLEtBQVQsRUFBZ0I7UUFDZCxPQUFPLEtBQUtBLEtBQUwsQ0FBV1ksaUJBQVgsRUFBUDtNQUNEOztNQUNELE9BQU8sRUFBUDtJQUNEOzs7V0FFRCxlQUFNaEwsSUFBTixFQUFZO01BQ1YsS0FBS29LLEtBQUwsQ0FBV2EsS0FBWCxDQUFpQmpMLElBQWpCO0lBQ0Q7OztXQUVELGtCQUFTO01BQ1AsS0FBS29LLEtBQUwsQ0FBV2MsTUFBWDtJQUNEOzs7V0FqSUQsdUJBQXFCO01BQ25CLElBQUksQ0FBQyxLQUFLcFUsU0FBVixFQUFxQjtRQUNuQixLQUFLQSxTQUFMLEdBQWlCLElBQUlxVCxFQUFKLEVBQWpCO01BQ0Q7O01BQ0QsT0FBTyxLQUFLclQsU0FBWjtJQUNEOzs7Ozs7QUE4SEgsSUFBTXFVLEVBQUUsR0FBR2hCLEVBQUUsQ0FBQ2xhLFdBQUgsRUFBWDtBQUVBLCtEQUFla2IsRUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrLy4vc3JjL2NvcmUvQmFzZVF1ZXVlLmpzIiwid2VicGFjazovL3F0X3F1aWNrYXBwX3Nkay8uL3NyYy9jb3JlL0JvZHkuanMiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrLy4vc3JjL2NvcmUvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrLy4vc3JjL2NvcmUvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrLy4vc3JjL2NvcmUvRXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL3F0X3F1aWNrYXBwX3Nkay8uL3NyYy9jb3JlL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9xdF9xdWlja2FwcF9zZGsvLi9zcmMvY29yZS9SZXF1ZXN0UXVldWUuanMiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrLy4vc3JjL2NvcmUvU0RLQ29uZmlnTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9xdF9xdWlja2FwcF9zZGsvLi9zcmMvY29yZS9Vc2VyQ29uZmlnLmpzIiwid2VicGFjazovL3F0X3F1aWNrYXBwX3Nkay8uL3NyYy9jb3JlL2V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly9xdF9xdWlja2FwcF9zZGsvLi9zcmMvY29yZS9nZXRDb250ZXh0LmpzIiwid2VicGFjazovL3F0X3F1aWNrYXBwX3Nkay8uL3NyYy9jb3JlL2lkTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9xdF9xdWlja2FwcF9zZGsvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9xdF9xdWlja2FwcF9zZGsvLi9zcmMvY29yZS9tZXNzYWdlci5qcyIsIndlYnBhY2s6Ly9xdF9xdWlja2FwcF9zZGsvLi9zcmMvY29yZS9yZXF1ZXN0LmpzIiwid2VicGFjazovL3F0X3F1aWNrYXBwX3Nkay8uL3NyYy91dGlscy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrLy4vc3JjL3V0aWxzL2Rhc2guanMiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrLy4vc3JjL3V0aWxzL3Vsb2cuanMiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrL2V4dGVybmFsIG1vZHVsZSBcIkBzeXN0ZW0uYXBwXCIiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrL2V4dGVybmFsIG1vZHVsZSBcIkBzeXN0ZW0uZGV2aWNlXCIiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrL2V4dGVybmFsIG1vZHVsZSBcIkBzeXN0ZW0uZmV0Y2hcIiIsIndlYnBhY2s6Ly9xdF9xdWlja2FwcF9zZGsvZXh0ZXJuYWwgbW9kdWxlIFwiQHN5c3RlbS5uZXR3b3JrXCIiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrL2V4dGVybmFsIG1vZHVsZSBcIkBzeXN0ZW0ucm91dGVyXCIiLCJ3ZWJwYWNrOi8vcXRfcXVpY2thcHBfc2RrL2V4dGVybmFsIG1vZHVsZSBcIkBzeXN0ZW0uc3RvcmFnZVwiIiwid2VicGFjazovL3F0X3F1aWNrYXBwX3Nkay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9xdF9xdWlja2FwcF9zZGsvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3F0X3F1aWNrYXBwX3Nkay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3F0X3F1aWNrYXBwX3Nkay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F0X3F1aWNrYXBwX3Nkay8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBGaWxlOiBCYXNlUXVldWUuanNcbiAqIFByb2plY3Q6IHF0X3F1aWNrYXBwX3Nka1xuICogICAgICBcbiAqIEF1dGhvcjog6ZKw5pitIChjaGFuZ2xpYW5nLmxjbEB1bWVuZy5jb20pXG4gKiAgICAgIFxuICogQ29weXJpZ2h0IC0gMjAyMiBBbGliYWJhIEdyb3VwIEhvbGRpbmcgTGltaXRlZC5cbiAqL1xuaW1wb3J0IHVsb2cgZnJvbSAnLi4vdXRpbHMvdWxvZyc7XG5cbmNsYXNzIEJhc2VRdWV1ZSB7XG5cbiAgX21heENvdW50ID0gMDtcbiAgX2l0ZW1zID0gW107XG5cbiAgY29uc3RydWN0b3IobWF4Q291bnQpIHtcbiAgICB0aGlzLl9tYXhDb3VudCA9IG1heENvdW50IHx8IDA7XG4gIH1cblxuICBlbnF1ZXVlKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX21heENvdW50ID09PSAnbnVtYmVyJyAmJiB0aGlzLnNpemUoKSA+PSB0aGlzLl9tYXhDb3VudCkge1xuICAgICAgdGhpcy5kZXF1ZXVlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faXRlbXMucHVzaChpdGVtKTtcbiAgfVxuXG4gIGRlcXVldWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNoaWZ0KCk7XG4gIH1cblxuICBmcm9udCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXNbMF07XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLl9pdGVtcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgcHJpbnQoKSB7XG4gICAgdWxvZygpLmkodGhpcy5faXRlbXMudG9TdHJpbmcoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVF1ZXVlOyIsIi8qXG4gKiBGaWxlOiBCb2R5LmpzXG4gKiBQcm9qZWN0OiBxdF9xdWlja2FwcF9zZGtcbiAqICAgICAgXG4gKiBBdXRob3I6IOmSsOaYrSAoY2hhbmdsaWFuZy5sY2xAdW1lbmcuY29tKVxuICogICAgICBcbiAqIENvcHlyaWdodCAtIDIwMjIgQWxpYmFiYSBHcm91cCBIb2xkaW5nIExpbWl0ZWQuXG4gKi9cblxuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi91dGlscy9jb25zdHNcIjtcbmltcG9ydCBldmVudE1hbmFnZXIgZnJvbSBcIi4vRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgXyBmcm9tIFwiLi4vdXRpbHMvZGFzaFwiO1xuXG5mdW5jdGlvbiBfYnVpbGRFa3YoKSB7XG4gIHZhciBkYXRhID0gbnVsbDtcblxuICB2YXIgZWt2cyA9IGV2ZW50TWFuYWdlci5nZXRFa3ZzKCk7XG4gIGlmIChla3ZzKSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGFuYWx5dGljczoge1xuICAgICAgICBla3ZzOiBfLmNsb25lKGVrdnMpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGV2ZW50TWFuYWdlci5jbGVhcigpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkKGRhdGFUeXBlKSB7XG4gIHZhciBkYXRhID0gbnVsbDtcbiAgc3dpdGNoIChkYXRhVHlwZSkge1xuICAgIGNhc2UgY29uc3RhbnQuRGF0YVR5cGUuRUtWOlxuICAgICAgZGF0YSA9IF9idWlsZEVrdigpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJ1aWxkXG59IiwiLypcbiAqIEZpbGU6IGNhY2hlLmpzXG4gKiBQcm9qZWN0OiBxdF9xdWlja2FwcF9zZGtcbiAqICAgICAgXG4gKiBBdXRob3I6IOmSsOaYrSAoY2hhbmdsaWFuZy5sY2xAdW1lbmcuY29tKVxuICogICAgICBcbiAqIENvcHlyaWdodCAtIDIwMjIgQWxpYmFiYSBHcm91cCBIb2xkaW5nIExpbWl0ZWQuXG4gKi9cblxuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMvZGFzaCc7XG5pbXBvcnQgdWxvZyBmcm9tICcuLi91dGlscy91bG9nJztcbmltcG9ydCBzZGtDb25maWcgZnJvbSAnLi9TREtDb25maWdNYW5hZ2VyJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vdXRpbHMvY29uc3RzJztcblxuY2xhc3MgQ2FjaGUge1xuICBfbmFtZSA9ICcnO1xuICBfZGF0YSA9IG51bGw7XG4gIF9sb2FkZWQgPSBmYWxzZTtcblxuICBsb2FkKGNiKSB7XG4gICAgaWYgKCF0aGlzLl9kYXRhKSB7XG4gICAgICAvLyB0aGlzLl9uYW1lID0gJ3F0X2NhaGNlXycgKyAgdXNlckNvbmZpZy5hcHBLZXk7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB0aGlzLmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6IGNvbnN0YW50LlFUX1JFTU9URV9DT05GSUcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICB2YXIgbHNSZW1vdGVDZmcgPSBKU09OLnBhcnNlKHJlc3ApO1xuICAgICAgICAgIHNka0NvbmZpZy51cGRhdGVSZW1vdGVDb25maWcobHNSZW1vdGVDZmcpO1xuICAgICAgICAgIHRoYXQuX2xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgdGhhdC5fZGF0YSA9IHt9O1xuICAgICAgICAgIF8uaXNGdW5jdGlvbihjYikgJiYgY2IodGhhdC5fbG9hZGVkKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgdWxvZygpLncoJ2NhY2hlIGxvYWRlZCBmYWlsZWQsIGVycm1zZyA9ICcsIGVycik7XG4gICAgICAgICAgXy5pc0Z1bmN0aW9uKGNiKSAmJiBjYih0aGF0Ll9sb2FkZWQpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjYiAmJiBjYigpO1xuICAgIH1cbiAgfVxuXG4gIHNldChwcm9wcykge1xuICAgIGNvbnN0IHtrZXksIHZhbHVlfSA9IHByb3BzO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQoaykge1xuICAgIHJldHVybiAodGhpcy5fZGF0YSB8fCB7fSlba11cbiAgfVxuXG4gIGlzTG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZWQ7XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgaWYgKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YVtrZXldKSB7XG4gICAgICBkZWxldGUgdGhpcy5fZGF0YVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX2RhdGEgPSBudWxsO1xuICB9XG5cbiAgaGFzKGtleSkge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0KGtleSk7XG4gIH1cblxuICBnZXRTdG9yYWdlKHByb3BzKSB7XG4gICAgY29uc3Qge2tleSwgc3VjY2VzcywgZmFpbH0gPSBwcm9wcztcbiAgICBzdG9yYWdlLmdldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgXy5pc0Z1bmN0aW9uKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MoZGF0YSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oZGF0YSwgY29kZSkge1xuICAgICAgICB1bG9nKCkudygnZ2V0IHN0b3JhZ2UgZmFpbGVkLCBlcnJjb2RlID0gJywgY29kZSk7XG4gICAgICAgIF8uaXNGdW5jdGlvbihmYWlsKSAmJiBmYWlsKGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RvcmFnZShwcm9wcykge1xuICAgIGNvbnN0IHtrZXksIHZhbHVlLCBzdWNjZXNzLCBmYWlsfSA9IHByb3BzO1xuICAgIHN0b3JhZ2Uuc2V0KHtcbiAgICAgIGtleToga2V5LFxuICAgICAgdmFsdWU6IF8uaXNTdHJpbmcodmFsdWUpID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7IFxuICAgICAgICBfLmlzRnVuY3Rpb24oc3VjY2VzcykgJiYgc3VjY2VzcyhkYXRhKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihkYXRhLCBjb2RlKSB7XG4gICAgICAgIHVsb2coKS53KGBzZXQgc3RvcmFnZSBmYWlsZWQsIGVycmNvZGUgPSAke2NvZGV9YClcbiAgICAgICAgXy5pc0Z1bmN0aW9uKGZhaWwpICYmIGZhaWwoZGF0YSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZVN0b3JhZ2UocHJvcHMpIHtcbiAgICBjb25zdCB7IGtleSwgc3VjY2VzcyB9ID0gcHJvcHM7XG4gICAgc3RvcmFnZS5kZWxldGUoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBzdWNjZXNzOiBzdWNjZXNzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENhY2hlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG59XG5cbnZhciBjYWNoZSA9IENhY2hlLmdldEluc3RhbmNlKCk7XG5leHBvcnQgZGVmYXVsdCBjYWNoZTsiLCIvKlxuICogRmlsZTogZXZlbnQuanNcbiAqIFByb2plY3Q6IHF0X3F1aWNrYXBwX3Nka1xuICogICAgICBcbiAqIEF1dGhvcjog6ZKw5pitIChjaGFuZ2xpYW5nLmxjbEB1bWVuZy5jb20pXG4gKiAgICAgIFxuICogQ29weXJpZ2h0IC0gMjAyMiBBbGliYWJhIEdyb3VwIEhvbGRpbmcgTGltaXRlZC5cbiAqL1xuXG5pbXBvcnQgXyBmcm9tICcuLi91dGlscy9kYXNoJztcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi91dGlscy9jb25zdHMnO1xuaW1wb3J0IHVzZXJDb25maWcgZnJvbSAnLi9Vc2VyQ29uZmlnJztcbmltcG9ydCBhcHAgZnJvbSAnQHN5c3RlbS5hcHAnO1xuaW1wb3J0IHVsb2cgZnJvbSAnLi4vdXRpbHMvdWxvZyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcblxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihpZCwgcHJvcGVydGllcykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRzID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmN1c3AgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgaWYgKF8uaXNPYmplY3QocHJvcGVydGllcykpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChfLmhhc093blByb3BlcnR5LmNhbGwocHJvcGVydGllcywga2V5KSkge1xuICAgICAgICAgIGlmIChrZXkgPT09ICd0cycpIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXNwW2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpbmZvID0gYXBwLmdldEluZm8oKTtcbiAgICBpZiAoaW5mbyAmJiBpbmZvLnNvdXJjZSAmJiBpbmZvLnNvdXJjZS5leHRyYSAmJiBpbmZvLnNvdXJjZS5leHRyYS5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZSA9IGluZm8uc291cmNlLmV4dHJhLnNjZW5lOyBcbiAgICB9XG4gICAgdmFyIHBhZ2UgPSByb3V0ZXIuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLnVybCA9IF8uaXNPYmplY3QocGFnZSkgPyBwYWdlLnBhdGggOiAnJztcbiAgICB0aGlzLnBhZ2VfbmFtZSA9IHByb3BlcnRpZXNbY29uc3RhbnQuUEFHRV9OQU1FXSB8fCB0aGlzLnVybDtcbiAgICB0aGlzLnBhZ2VfdGl0bGUgPSBwcm9wZXJ0aWVzW2NvbnN0YW50LlBBR0VfVElUTEVdIHx8IChfLmlzT2JqZWN0KHBhZ2UpID8gcGFnZS5uYW1lIDogXCJcIik7XG4gICAgdGhpcy5ncCA9IHVzZXJDb25maWcuZ2xvYmFscHJvcGVydHk7XG4gICAgdGhpcy50cmFja190eXBlID0gJzAnO1xuICAgIHVsb2coKS5pKCdiZWZvcmUgc2VuZCBldmVudGNvZGUgPScsIHRoaXMuaWQpO1xuICAgIGlmICghXy5pc0VtcHR5T2JqZWN0KHRoaXMuY3VzcCkpIHtcbiAgICAgIHVsb2coKS5pKCdldmVudCBwcm9wZXJ0aWVzID0gJywgdGhpcy5jdXNwKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7IiwiLypcbiAqIEZpbGU6IGV2ZW50TWFuYWdlci5qc1xuICogUHJvamVjdDogcXRfcXVpY2thcHBfc2RrXG4gKiAgICAgIFxuICogQXV0aG9yOiDpkrDmmK0gKGNoYW5nbGlhbmcubGNsQHVtZW5nLmNvbSlcbiAqICAgICAgXG4gKiBDb3B5cmlnaHQgLSAyMDIyIEFsaWJhYmEgR3JvdXAgSG9sZGluZyBMaW1pdGVkLlxuICovXG5pbXBvcnQgdWxvZyBmcm9tICcuLi91dGlscy91bG9nJztcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi91dGlscy9jb25zdHMnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vQ2FjaGUnO1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMvZGFzaCc7XG5cblxuY2xhc3MgRXZlbnRNYW5hZ2VyIHtcbiAgX21lbW9yeUV2ZW50cyA9IFtdO1xuICBfbm9TZXNzaW9uRXZlbnRzID0gW107XG4gIF9zZXNzaW9uSWQgPSAnc2Vzc2lvbmlkJztcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEV2ZW50TWFuYWdlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9nZXRDYWNoZUV2ZW50c0xlbmd0aChldmVudHNNYXApIHtcbiAgICB2YXIgbGVuID0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gZXZlbnRzTWFwKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KGV2ZW50c01hcFtrZXldKSkge1xuICAgICAgICBsZW4gKz0gZXZlbnRzTWFwW2tleV0ubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuO1xuICB9XG5cbiAgX2J1aWxkRWt2cyhla3ZzLCBtZW1vcnlFdmVudHMpIHtcbiAgICBla3ZzID0gZWt2cyB8fCB7fTtcbiAgICB2YXIgZXZlbnRzID0gZWt2c1t0aGlzLl9zZXNzaW9uSWRdO1xuXG4gICAgaWYgKF8uaXNBcnJheShldmVudHMpICYmIGV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIGVrdnNbdGhpcy5fc2Vzc2lvbklkXSA9IGV2ZW50cy5jb25jYXQobWVtb3J5RXZlbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWt2c1t0aGlzLl9zZXNzaW9uSWRdID0gW10uY29uY2F0KG1lbW9yeUV2ZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVrdnM7XG4gIH1cblxuICBfY2FjaGVFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX21lbW9yeUV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIHZhciBla3ZzID0gY2FjaGUuZ2V0KGNvbnN0YW50LkVLVlMpO1xuICAgICAgLy8g5pys5Zyw5pyA5aSa5a2Y5YKoIEVWRU5UX01BWF9DT1VOVCDmnaHmlbDmja7vvIzjgIzlpJrkvZnmlbDmja7jgI3mmoLml7blhYjmipvlvINcbiAgICAgIGlmICh0aGlzLl9nZXRDYWNoZUV2ZW50c0xlbmd0aChla3ZzKSArIHRoaXMuX21lbW9yeUV2ZW50cy5sZW5ndGggPD0gY29uc3RhbnQuRVZFTlRfTUFYX0NPVU5UKSB7XG4gICAgICAgIGVrdnMgPSB0aGlzLl9idWlsZEVrdnMoZWt2cywgdGhpcy5fbWVtb3J5RXZlbnRzKTtcbiAgICAgICAgY2FjaGUuc2V0KGNvbnN0YW50LkVLVlMsIGVrdnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX3Nlc3Npb25JZCkge1xuICAgICAgdGhpcy5fbWVtb3J5RXZlbnRzLnVuc2hpZnQoZXZlbnQpO1xuICAgICAgaWYgKHRoaXMuX21lbW9yeUV2ZW50cy5sZW5ndGggPiBjb25zdGFudC5NRU1PUllfTUFYX0NPVU5UKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlRXZlbnRzKHRoaXMuX3Nlc3Npb25JZCk7XG4gICAgICAgIHRoaXMuX21lbW9yeUV2ZW50cy5sZW5ndGggPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1bG9nKCkudygnc2Vzc2lvbiBpZCBpcyBudWxsOiAnLCB0aGlzLl9zZXNzaW9uSWQpO1xuICAgICAgdGhpcy5fbm9TZXNzaW9uRXZlbnRzLnVuc2hpZnQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldFNlc3Npb25JZChzaWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uSWQgPSBzaWQgfHwgJ3Nlc3Npb25pZCc7XG4gICAgaWYgKF8uaXNBcnJheSh0aGlzLl9ub1Nlc3Npb25FdmVudHMpICYmIHRoaXMuX25vU2Vzc2lvbkV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbm9TZXNzaW9uRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQodGhpcy5fbm9TZXNzaW9uRXZlbnRzW2ldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX25vU2Vzc2lvbkV2ZW50cy5sZW5ndGggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGdldEVrdnMoKSB7XG4gICAgdmFyIGVrdnMgPSBjYWNoZS5nZXQoY29uc3RhbnQuRUtWUyk7XG4gICAgaWYgKHRoaXMuX21lbW9yeUV2ZW50cyAmJiB0aGlzLl9tZW1vcnlFdmVudHMubGVuZ3RoKSB7XG4gICAgICBla3ZzID0gdGhpcy5fYnVpbGRFa3ZzKGVrdnMsIHRoaXMuX21lbW9yeUV2ZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBla3ZzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY2FjaGUucmVtb3ZlKGNvbnN0YW50LkVLVlMpO1xuICAgIHRoaXMuX21lbW9yeUV2ZW50cyA9IFtdO1xuICAgIHRoaXMuX25vU2Vzc2lvbkV2ZW50cyA9IFtdO1xuICB9XG5cbiAgLy8g6L+U5Zue5b2T5YmNZWt2c+WGheeahOaXpeW/l+adoeaVsFxuICBnZXRFa3ZzTGVuKCkge1xuICAgIHZhciBla3ZzID0gY2FjaGUuZ2V0KGNvbnN0YW50LkVLVlMpIHx8IHt9O1xuICAgIHZhciBldmVudHMgPSBla3ZzW3RoaXMuX3Nlc3Npb25JZF0gfHwgW107XG4gICAgdmFyIG1lbW9yeUV2ZW50c0xlbiA9IHRoaXMuX21lbW9yeUV2ZW50cyA/IHRoaXMuX21lbW9yeUV2ZW50cy5sZW5ndGggOiAwO1xuICAgIHJldHVybiBldmVudHMubGVuZ3RoICsgbWVtb3J5RXZlbnRzTGVuO1xuICB9XG59XG5cbnZhciBldmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRNYW5hZ2VyO1xuIiwiLypcbiAqIEZpbGU6IEhlYWRlci5qc1xuICogUHJvamVjdDogcXRfcXVpY2thcHBfc2RrXG4gKiAgICAgIFxuICogQXV0aG9yOiDpkrDmmK0gKGNoYW5nbGlhbmcubGNsQHVtZW5nLmNvbSlcbiAqICAgICAgXG4gKiBDb3B5cmlnaHQgLSAyMDIyIEFsaWJhYmEgR3JvdXAgSG9sZGluZyBMaW1pdGVkLlxuICovXG5cbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi4vdXRpbHMvY29uc3RzXCI7XG5pbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJztcbmltcG9ydCB1c2VyQ29uZmlnIGZyb20gXCIuL1VzZXJDb25maWdcIjtcbmltcG9ydCBwa2cgZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCBuZXR3b3JrIGZyb20gXCJAc3lzdGVtLm5ldHdvcmtcIjtcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzL2Rhc2gnO1xuaW1wb3J0IHVsb2cgZnJvbSAnLi4vdXRpbHMvdWxvZyc7XG5cbmZ1bmN0aW9uIGdldERldmljZUluZm8ocmVzdWx0LCBjYWxsYmFjaykge1xuICBkZXZpY2UuZ2V0SW5mbyh7XG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICB2YXIgdyA9IE51bWJlcihyZXMud2luZG93V2lkdGgpO1xuICAgICAgdmFyIGggPSBOdW1iZXIocmVzLndpbmRvd0hlaWdodCk7XG4gICAgICB2YXIgYnJhbmQgPSByZXMuYnJhbmQ7XG4gICAgICB2YXIgbW9kZWwgPSByZXMubW9kZWw7XG5cbiAgICAgIHJlc3VsdC5kZXZpY2VfdHlwZSA9IHJlcy5kZXZpY2VUeXBlO1xuICAgICAgcmVzdWx0Lm9zID0gcmVzLm9zVHlwZTtcbiAgICAgIHJlc3VsdC5vc192ZXJzaW9uID0gcmVzLm9zVmVyc2lvbk5hbWU7XG4gICAgICByZXN1bHQucGl4ZWxfcmF0aW8gPSByZXMuc2NyZWVuRGVuc2l0eTtcbiAgICAgIHJlc3VsdC5yZXNvbHV0aW9uID0gdyA+IGggPyB3ICsgJyonICsgaCA6IGggKyAnKicgKyB3O1xuICAgICAgcmVzdWx0Lmxhbmd1YWdlID0gcmVzLmxhbmd1YWdlO1xuICAgICAgcmVzdWx0LnBsYXRmb3JtX3ZlcnNpb24gPSByZXMucGxhdGZvcm1WZXJzaW9uTmFtZTtcbiAgICAgIHJlc3VsdC5wbGF0Zm9ybV9zZGtfdmVyc2lvbiA9IHJlcy5wbGF0Zm9ybVZlcnNpb25Db2RlO1xuICAgICAgcmVzdWx0LmRldmljZV9tb2RlbCA9IG1vZGVsO1xuICAgICAgcmVzdWx0LmRldmljZV9icmFuZCA9IGJyYW5kO1xuICAgICAgcmVzdWx0LmRldmljZV9uYW1lID0gbW9kZWw7IC8vIOWGhemDqOS6p+WTgeS7o+WPt1xuICAgICAgcmVzdWx0LmRldmljZV9tYW51ZmFjdHVyZXIgPSByZXMubWFudWZhY3R1cmVyO1xuICAgICAgcmVzdWx0LnByb2R1Y3QgPSByZXMucHJvZHVjdDtcbiAgICAgIGNhbGxiYWNrICYmIF8uaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uKGVycikge1xuICAgICAgdWxvZygpLmkoJ3F1aWNrYXBwIGdldCBkZXZpY2VJbmZvIGZhaWxlZCwgZXJybXNnPScsIGVycik7XG4gICAgICBjYWxsYmFjayAmJiBfLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV0d29rSW5mbyhyZXN1bHQsIGNhbGxiYWNrKSB7XG4gIG5ldHdvcmsuZ2V0VHlwZSh7XG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICByZXN1bHQuYWNjZXNzID0gcmVzLnR5cGU7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgIHVsb2coKS5pKCdxdWlja2FwcCBnZXQgbmV0d29yayBpbmZvIGZhaWxlZC4gZXJybXNnPScsIGVycik7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICBnZXREZXZpY2VJbmZvICYmIGdldERldmljZUluZm8ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGUocmVzdWx0LCBjYWxsYmFjaykge1xuICByZXN1bHQuZGV2aWNlX3R5cGUgPSAnUGhvbmUnO1xuICBnZXROZXR3b2tJbmZvKHJlc3VsdCwgY2FsbGJhY2spO1xufVxuXG5jbGFzcyBIZWFkZXIge1xuICBfaGVhZGVyID0ge307XG4gIF9sb2FkZWQgPSBmYWxzZTtcbiAgYmFzZUhlYWRlciA9IHtcbiAgICBzZGtfdmVyc2lvbjogcGtnLnZlcnNpb24sIC8vc2RrX3ZlcnNpb25cbiAgICBzZGtfbmFtZTogJ3F0X3F1aWNrYXBwX3NkaycsXG4gICAgcGxhdGZvcm06ICdxdWlja2FwcCcsXG4gICAgc2RrX3R5cGU6ICdxdWlja2FwcG1wJyxcbiAgfTtcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgSGVhZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQoY2IpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZ2VuZXJhdGUodGhpcy5iYXNlSGVhZGVyLCBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIHRoYXQuX2hlYWRlciA9IHJlc3VsdDtcbiAgICAgIHRoYXQuX2xvYWRlZCA9IHRydWU7XG4gICAgICB0aGF0Ll9oZWFkZXIuYXBwS2V5ID0gdXNlckNvbmZpZy5hcHBLZXk7XG4gICAgICBfLmlzRnVuY3Rpb24oY2IpICYmIGNiKCk7XG4gICAgfSk7XG4gIH1cbiAgXG5cbiAgaXNMb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRlZDtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyO1xuICB9XG5cbiAgc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgSGVhZGVyLmdldEluc3RhbmNlKCkuX2hlYWRlcltrZXldID0gdmFsdWU7XG4gIH1cblxuICBnZXRJdGVtKGtleSkge1xuICAgIHJldHVybiBIZWFkZXIuZ2V0SW5zdGFuY2UoKS5faGVhZGVyW2tleV07XG4gIH1cblxuICBzZXRJZFRyYWNraW5nKGlkVHJhY2tpbmcpIHtcbiAgICB0aGlzLnNldEl0ZW0oY29uc3RhbnQuSURfVFJBQ0tJTkcsIGlkVHJhY2tpbmcpO1xuICB9XG5cbiAgc2V0SWRUeXBlKGlkVHlwZSkge1xuICAgIHRoaXMuc2V0SXRlbShjb25zdGFudC5JRF9UWVBFLCBpZFR5cGUpO1xuICB9XG5cbn1cblxuY29uc3QgTG9nSGVhZGVyID0gSGVhZGVyLmdldEluc3RhbmNlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0hlYWRlcjsiLCIvKlxuICogRmlsZTogUmVxdWVzdFF1ZXVlLmpzXG4gKiBQcm9qZWN0OiBxdF9xdWlja2FwcF9zZGtcbiAqICAgICAgXG4gKiBBdXRob3I6IOmSsOaYrSAoY2hhbmdsaWFuZy5sY2xAdW1lbmcuY29tKVxuICogICAgICBcbiAqIENvcHlyaWdodCAtIDIwMjIgQWxpYmFiYSBHcm91cCBIb2xkaW5nIExpbWl0ZWQuXG4gKi9cblxuaW1wb3J0IEJhc2VRdWV1ZSBmcm9tICcuL0Jhc2VRdWV1ZSc7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vdXRpbHMvY29uc3RzJztcbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keSc7XG5pbXBvcnQgTG9nSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzL2Rhc2gnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcbmltcG9ydCBjYWNoZSBmcm9tICcuL0NhY2hlJztcblxuY2xhc3MgUmVxdWVzdFF1ZXVlIHtcblxuICBfaW5zdGFuY2UgPSBudWxsO1xuICBfcnVubmluZyA9IGZhbHNlO1xuICBfY3VycmVudFR5cGUgPSAnJztcbiAgX2ZhaWxSZXF1ZXN0cyA9IFtdO1xuICBfZmFpbFF1ZXVlID0gbmV3IEJhc2VRdWV1ZShjb25zdGFudC5NQVhfUVVFVUVfQ09VTlQpO1xuICBfcXVldWUgPSBuZXcgQmFzZVF1ZXVlKGNvbnN0YW50Lk1BWF9RVUVVRV9DT1VOVCk7XG5cbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMuX2N1cnJlbnRUeXBlID0gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSh0eXBlKSB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUmVxdWVzdFF1ZXVlKHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBfZW5xdWV1ZVJlcXVlc3QoZGF0YVR5cGUsIG9wdGlvbnMsIGNiKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGlmIChMb2dIZWFkZXIuaXNMb2FkZWQoKSkge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICB2YXIgZGF0YSA9IEJvZHkuYnVpbGQoZGF0YVR5cGUpO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGF0YS5oZWFkZXIgPSBMb2dIZWFkZXI7XG4gICAgICAgIGRhdGEubm9DYWNoZSA9IG9wdGlvbnMubm9DYWNoZTtcbiAgICAgICAgdGhpcy5fcXVldWUuZW5xdWV1ZShkYXRhKTtcbiAgICAgIH1cbiAgICAgIF8uaXNGdW5jdGlvbihjYikgJiYgY2IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoYXQuX2VucXVldWVSZXF1ZXN0KGRhdGFUeXBlKVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBfc2VuZFF1ZXVlKHR5cGUsIGNiKSB7XG4gICAgdmFyIGlzRlIgPSB0eXBlID09PSBjb25zdGFudC5SZXF1ZXN0cztcbiAgICB2YXIgX3NlbmRRdWV1ZSA9IGlzRlIgPyB0aGlzLl9xdWV1ZSA6IHRoaXMuX2ZhaWxRdWV1ZTtcbiAgICB2YXIgZGF0YSA9IF9zZW5kUXVldWUuZGVxdWV1ZSgpO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuX3NlbmRRdWV1ZSh0eXBlLCBjYik7XG4gICAgfTtcblxuICAgIHZhciBmYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8g5Y+R6YCB5aSx6LSl5YiZ5bCG6K+l5p2h5pWw5o2u5re75Yqg5Yiw6Zif5YiX5bC+6YOo77yM6Ziy5q2i5b2x5ZON5ZCO57ut5pWw5o2u55qE5Y+R6YCBXG4gICAgICAvLyB2YXIgaXRlbSA9IHRoYXQuX3F1ZXVlLmRlcXVldWUoKTtcbiAgICAgIGRhdGEgJiYgKCFkYXRhLm5vQ2FjaGUpICYmIHRoYXQuX2ZhaWxSZXF1ZXN0cy5wdXNoKGRhdGEpO1xuICAgICAgdGhhdC5fc2VuZFF1ZXVlKHR5cGUsIGNiKTtcbiAgICB9O1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHJlcXVlc3QoZGF0YSwgc3VjY2VzcywgZmFpbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX3Byb2Nlc3NGYWlsUmVxdWVzdHMoKTtcbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfVxuICB9XG5cbiAgX3Byb2Nlc3NGYWlsUmVxdWVzdHMoKSB7XG4gICAgLy8g5Y+R6YCB5a6M5oiQ5ZCO5bCG5aSx6LSl55qE6K+35rGC6YeN5paw5re75Yqg5Yiw6Zif5YiX5LitXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuX2ZhaWxSZXF1ZXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB0aGF0Ll9xdWV1ZS5lbnF1ZXVlKGl0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMuX2ZhaWxSZXF1ZXN0cy5sZW5ndGggPSAwO1xuICB9XG5cbiAgX3N0YXJ0U2VuZCh0eXBlLCBjYikge1xuICAgIHRoaXMuX3NlbmRRdWV1ZSh0eXBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfLmlzRnVuY3Rpb24oY2IpICYmIGNiKCk7XG4gICAgfSk7XG4gIH1cblxuICBzZW5kKGRhdGFUeXBlLCBvcHRpb25zLCBjb21wbGV0ZWRDYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBpZiAoZGF0YVR5cGUpIHtcbiAgICAgIHRoaXMuYWRkKGRhdGFUeXBlLCBvcHRpb25zLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoYXQuX3N0YXJ0U2VuZCh0aGF0Ll9jdXJyZW50VHlwZSwgY29tcGxldGVkQ2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX3N0YXJ0U2VuZCh0aGF0Ll9jdXJyZW50VHlwZSwgY29tcGxldGVkQ2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGFkZChkYXRhVHlwZSwgb3B0aW9ucywgY2IpIHtcbiAgICB0aGlzLl9lbnF1ZXVlUmVxdWVzdChkYXRhVHlwZSwgb3B0aW9ucywgY2IpO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB2YXIgaXNGUiA9IHRoaXMuX2N1cnJlbnRUeXBlID09PSBjb25zdGFudC5SZXF1ZXN0cztcbiAgICB2YXIgbG9hZFF1ZXVlID0gaXNGUiA/IHRoaXMuX3F1ZXVlIDogdGhpcy5fZmFpbGVkUXVldWU7XG4gICAgdmFyIGl0ZW1zID0gY2FjaGUuZ2V0KGNvbnN0YW50LlJlcXVlc3RzKTtcbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGxvYWRRdWV1ZS5lbnF1ZXVlKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNhY2hlLnJlbW92ZShjb25zdGFudC5SZXF1ZXN0cyk7XG4gIH1cblxuICAvLyDlvZPliY3lj6rmnInlpLHotKXpmJ/liJfosIPnlKhzYXZl5pa55rOVXG4gIHNhdmUoKSB7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLmdldChjb25zdGFudC5GYWlsZWRSZXF1ZXN0cykgfHwgW107XG4gICAgdmFyIG5ld0NhY2hlID0gY2FjaGVkLmNvbmNhdCh0aGlzLl9mYWlsZWRRdWV1ZS5pdGVtcygpKTtcbiAgICBpZihuZXdDYWNoZSAmJiBuZXdDYWNoZS5sZW5ndGgpIHtcbiAgICAgIGNhY2hlLnNldChjb25zdGFudC5GYWlsZWRSZXF1ZXN0cywgbmV3Q2FjaGUpO1xuICAgIH0gXG4gICAgdGhpcy5fZmFpbGVkUXVldWUuY2xlYXIoKTsgLy8g5LiA5a6a6KaB5YWI5L+d5a2Y5YaN5riF56m677yM5ZCm5YiZ5L+d5a2Y55qE5rC46L+c5piv56m65pWw5o2uXG4gIH1cbn1cblxudmFyIHJlcXVlc3RRdWV1ZSA9IFJlcXVlc3RRdWV1ZS5nZXRJbnN0YW5jZShjb25zdGFudC5SZXF1ZXN0cyk7XG4vLyB2YXIgZmFpbGVkUmVxdWVzdFF1ZXVlID0gUmVxdWVzdFF1ZXVlLmdldEluc3RhbmNlKGNvbnN0YW50LkZhaWxlZFJlcXVlc3RzKTtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RRdWV1ZTsiLCIvKlxuICogRmlsZTogQ29uZmlnTWFuYWdlci5qc1xuICogUHJvamVjdDogcXRfcXVpY2thcHBfc2RrXG4gKiAgICAgIFxuICogQXV0aG9yOiDpkrDmmK0gKGNoYW5nbGlhbmcubGNsQHVtZW5nLmNvbSlcbiAqICAgICAgXG4gKiBDb3B5cmlnaHQgLSAyMDIyIEFsaWJhYmEgR3JvdXAgSG9sZGluZyBMaW1pdGVkLlxuICovXG5cbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi91dGlscy9jb25zdHMnO1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMvZGFzaCc7XG5cbmZ1bmN0aW9uIG1hcEV2ZW50U2FtcGxlUmF0ZXMoYXJyKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgXy5lYWNoKGFyciwgZnVuY3Rpb24oaXRlbSl7XG4gICAgaWYgKGl0ZW0uZXZlbnRJZHMgJiYgaXRlbS5ldmVudElkcy5sZW5ndGggPiAwKSB7XG4gICAgICBfLmVhY2goaXRlbS5ldmVudElkcywgZnVuY3Rpb24oZWt2KXtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGV2ZW50SWQ6IGVrdixcbiAgICAgICAgICBzYW1wbGluZ1JhdGU6IGl0ZW0uc2FtcGxpbmdSYXRlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuY2xhc3MgU0RLQ29uZmlnTWFuYWdlciB7XG4gIFxuICBjb25maWcgPSB7fTtcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU0RLQ29uZmlnTWFuYWdlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBzZXRJdGVtKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLmNvbmZpZ1trZXldID0gdmFsdWU7XG4gIH1cblxuICBnZXRJdGVtKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1trZXldO1xuICB9XG5cbiAgZ2V0QUxMKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIHVwZGF0ZVJlbW90ZUNvbmZpZyhjZmcpIHtcbiAgICBpZiAoY2ZnKSB7XG4gICAgICBpZiAoXy5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNmZywgJ2N1cnJlbnREZXZpY2VFbmFibGUnKSkge1xuICAgICAgICB0aGlzLnNldEl0ZW0oY29uc3RhbnQuUVRfREVWSUNFX0VOQUJMRSwgY2ZnLmN1cnJlbnREZXZpY2VFbmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXy5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNmZywgJ2V2ZW50U2FtcGxpbmdSYXRlJykgJiYgXy5pc0FycmF5KGNmZy5ldmVudFNhbXBsaW5nUmF0ZSkgJiYgY2ZnLmV2ZW50U2FtcGxpbmdSYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtKGNvbnN0YW50LlFUX0VWRU5UX0xJTUlUUkFURVMsIG1hcEV2ZW50U2FtcGxlUmF0ZXMoY2ZnLmV2ZW50U2FtcGxpbmdSYXRlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNka0NvbmZpZyA9IFNES0NvbmZpZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbmV4cG9ydCBkZWZhdWx0IHNka0NvbmZpZztcblxuIiwiLypcbiAqIEZpbGU6IFVzZXJDb25maWcuanNcbiAqIFByb2plY3Q6IHF0X3F1aWNrYXBwX3Nka1xuICogICAgICBcbiAqIEF1dGhvcjog6ZKw5pitIChjaGFuZ2xpYW5nLmxjbEB1bWVuZy5jb20pXG4gKiAgICAgIFxuICogQ29weXJpZ2h0IC0gMjAyMiBBbGliYWJhIEdyb3VwIEhvbGRpbmcgTGltaXRlZC5cbiAqL1xuXG5jbGFzcyBVc2VyQ29uZmlnIHtcbiAgX2dsb2JhbFByb3BlcnR5ID0ge307XG4gIF9hcHBLZXkgPSAnJztcbiAgX3B1aWQgPSAnJztcbiAgX2NvbmZpZyA9IHt9O1xuICBfcGFnZUNvbmZpZyA9IHt9O1xuXG4gIHNldCBwdWlkICh2YWx1ZSkge1xuICAgIHRoaXMuX3B1aWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwdWlkKCkge1xuICAgIHJldHVybiB0aGlzLl9wdWlkO1xuICB9XG4gIFxuICBzZXQgYXBwS2V5IChhcHBrZXkpIHtcbiAgICB0aGlzLl9hcHBLZXkgPSBhcHBrZXk7XG4gIH1cblxuICBnZXQgYXBwS2V5KCl7XG4gICAgcmV0dXJuIHRoaXMuX2FwcEtleTtcbiAgfVxuXG4gIHNldCBnbG9iYWxwcm9wZXJ0eSh2YWx1ZSkge1xuICAgIHRoaXMuX2dsb2JhbFByb3BlcnR5ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZ2xvYmFscHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbFByb3BlcnR5IHx8IHt9O1xuICB9XG5cbiAgc2V0SXRlbShrLCB2KSB7XG4gICAgdGhpcy5fY29uZmlnW2tdID0gdjtcbiAgfVxuXG4gIGdldEl0ZW0oaykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdba107XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFVzZXJDb25maWcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cbn1cblxudmFyIHVzZXJDb25maWcgPSBVc2VyQ29uZmlnLmdldEluc3RhbmNlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJDb25maWc7IiwiLypcbiAqIEZpbGU6IG1lc3NhZ2UuanNcbiAqIFByb2plY3Q6IHF0X3F1aWNrYXBwX3Nka1xuICogICAgICBcbiAqIEF1dGhvcjog6ZKw5pitIChjaGFuZ2xpYW5nLmxjbEB1bWVuZy5jb20pXG4gKiAgICAgIFxuICogQ29weXJpZ2h0IC0gMjAyMiBBbGliYWJhIEdyb3VwIEhvbGRpbmcgTGltaXRlZC5cbiAqIHZpYSB1bWVuZy9taW5pIHNkayBsb2dpYy4gRXZlbnRFbWl0dGVyLmpzXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlciAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyOyIsIi8qXG4gKiBGaWxlOiBnZXRDb250ZXh0LmpzXG4gKiBQcm9qZWN0OiBxdF9xdWlja2FwcF9zZGtcbiAqICAgICAgXG4gKiBBdXRob3I6IOmSsOaYrSAoY2hhbmdsaWFuZy5sY2xAdW1lbmcuY29tKVxuICogICAgICBcbiAqIENvcHlyaWdodCAtIDIwMjIgQWxpYmFiYSBHcm91cCBIb2xkaW5nIExpbWl0ZWQuXG4gKi9cbmltcG9ydCB1bG9nIGZyb20gXCIuLi91dGlscy91bG9nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdsb2JhbC5fX3Byb3RvX18gfHwgZ2xvYmFsIHx8IHdpbmRvdztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB1bG9nKCkudygnZ2V0IGNvbnRleHQgZmFpbGVkJywgZXJyb3IpO1xuICB9XG59IiwiLypcbiAqIEZpbGU6IGlkTWFuYWdlci5qc1xuICogUHJvamVjdDogcXRfcXVpY2thcHBfc2RrXG4gKiAgICAgIFxuICogQXV0aG9yOiDpkrDmmK0gKGNoYW5nbGlhbmcubGNsQHVtZW5nLmNvbSlcbiAqICAgICAgXG4gKiBDb3B5cmlnaHQgLSAyMDIyIEFsaWJhYmEgR3JvdXAgSG9sZGluZyBMaW1pdGVkLlxuICovXG5cblxuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMvZGFzaCc7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vdXRpbHMvY29uc3RzJztcbmltcG9ydCB1bG9nIGZyb20gJy4uL3V0aWxzL3Vsb2cnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vQ2FjaGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVVVUlEKCkge1xuICByZXR1cm4gXy5nZXRSYW5kb21TdHIoMTApICsgRGF0ZS5ub3coKSArIF8uZ2V0UmFuZG9tU3RyKDcpICsgY29uc3RhbnQuVVVJRF9TVUZGSVg7XG59XG5cbmNsYXNzIElETWFuYWdlciB7XG4gIF9pZFR5cGUgPSBjb25zdGFudC5JRFR5cGUudXVpZDtcbiAgXG4gIF91dWlkID0gJyc7XG4gIF91c2VySWQgPSAnJztcbiAgX29wZW5JZCA9ICcnO1xuICBfdW5pb25JZCA9ICcnO1xuICBfYWR2ZXJ0aXNpbmdJZCA9ICcnO1xuICBfcGhvbmVOdW1iZXIgPSAnJztcbiAgX2FuZHJvaWRJZCA9ICcnOyAvL+eUqOaIt+WUr+S4gOagh+ivhlxuICBfZGV2aWNlSWQgPSAnJzsgLy/orr7lpIfllK/kuIDmoIfor4ZcbiAgX21hYyA9ICcnO1xuICBfc2VyaWFsID0gJyc7IC8v6K6+5aSH5bqP5YiX5Y+3XG4gIF9vYWlkID0gJyc7IC8v5Yy/5ZCN6K6+5aSH5qCH6K+G56ymXG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IElETWFuYWdlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdFVVSUQoKTtcbiAgICB0aGlzLmluaXRVc2VySWQoKTtcbiAgfVxuXG4gIGluaXRVVUlEKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBjYWNoZS5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogY29uc3RhbnQuSURUeXBlLnV1aWQsIFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICB0aGF0Ll91dWlkID0gY3JlYXRlVVVJRCgpO1xuICAgICAgICAgIGNhY2hlLnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAga2V5OiBjb25zdGFudC5JRFR5cGUudXVpZCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGF0Ll91dWlkXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGF0Ll91dWlkID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0Ll91dWlkID0gY3JlYXRlVVVJRCgpO1xuICAgICAgICBjYWNoZS5zZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6IGNvbnN0YW50LklEVHlwZS51dWlkLFxuICAgICAgICAgIHZhbHVlOiB0aGF0Ll91dWlkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0VXNlcklkKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBjYWNoZS5nZXRTdG9yYWdlKHsgXG4gICAgICBrZXk6IGNvbnN0YW50LklEVHlwZS51c2VyaWQsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbih1c2VyaWQpIHtcbiAgICAgICAgdGhhdC5fdXNlcklkID0gdXNlcmlkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VXNlcklkKHVzZXJpZCkge1xuICAgIElETWFuYWdlci5nZXRJbnN0YW5jZSgpLl91c2VySWQgPSB1c2VyaWQ7XG4gICAgY2FjaGUuc2V0KHtcbiAgICAgIGtleTogY29uc3RhbnQuSURUeXBlLnVzZXJpZCxcbiAgICAgIHZhbHVlOiB1c2VyaWRcbiAgICB9KTtcbiAgICBjYWNoZS5zZXRTdG9yYWdlKHtcbiAgICAgIGtleTogY29uc3RhbnQuSURUeXBlLnVzZXJpZCxcbiAgICAgIHZhbHVlOiB1c2VyaWQsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHVsb2coKS5pKCdsb2dpbiBzdWNjZXNzLCBwdWlkID0gJywgZGF0YSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIHVsb2coKS53KCdsb2dpbiBmYWlsZWQsIGVyciA9ICcsIGVycik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldE9wZW5JZChvcGVuSWQpIHtcbiAgICB0aGlzLl9vcGVuSWQgPSBvcGVuSWQ7XG4gIH1cblxuICBzZXRVbmlvbklkKHVuaW9uSWQpIHtcbiAgICB0aGlzLl91bmlvbklkID0gdW5pb25JZDtcbiAgfVxuXG4gIHNldEFkdmVydGlzaW5nSWQoYWlkKSB7XG4gICAgdGhpcy5fYWR2ZXJ0aXNpbmdJZCA9IGFpZDtcbiAgfVxuXG4gIHNldFBob25lbnVtKHBob25lTnVtYmVyKSB7XG4gICAgdGhpcy5fcGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlcjtcbiAgfVxuXG4gIHNldEFuZHJvaWRJZChhbmRyb2lkaWQpIHtcbiAgICB0aGlzLl9hbmRyb2lkSWQgPSBhbmRyb2lkaWQ7XG4gIH1cblxuICBzZXREZXZpY2VJZChkaWQpIHtcbiAgICB0aGlzLl9kZXZpY2VJZCA9IGRpZDtcbiAgfVxuXG4gIHNldE1hYyhtYWMpIHtcbiAgICB0aGlzLl9tYWMgPSBtYWM7XG4gIH1cblxuICBzZXRTZXJpYWwoc2VyaWFsKSB7XG4gICAgdGhpcy5fc2VyaWFsID0gc2VyaWFsO1xuICB9XG5cbiAgc2V0T2FpZChvYWlkKSB7XG4gICAgdGhpcy5fb2FpZCA9IG9haWQ7XG4gIH1cblxuICByZW1vdmVVc2VySWQobXNnKSB7XG4gICAgdGhpcy5fdXNlcklkID0gJyc7XG4gICAgY2FjaGUuZGVsZXRlU3RvcmFnZSh7XG4gICAgICBrZXk6IGNvbnN0YW50LklEVHlwZS51c2VyaWQsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbXNnICYmIHVsb2coKS5pKG1zZyk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldElEVHlwZSh0eXBlKSB7XG4gICAgdGhpcy5faWRUeXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldElEVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRUeXBlO1xuICB9XG5cbiAgZ2V0SURUcmFja2luZygpIHtcbiAgICB2YXIgaWRUcmFja2luZyA9IHt9O1xuICAgIGlmICh0aGlzLl91dWlkKSB7XG4gICAgICBpZFRyYWNraW5nLnV1aWQgPSB0aGlzLl91dWlkO1xuICAgIH1cblxuICAgIGlmIChJRE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5fdXNlcklkKSB7XG4gICAgICBpZFRyYWNraW5nLnVzZXJpZCA9IElETWFuYWdlci5nZXRJbnN0YW5jZSgpLl91c2VyaWQ7XG4gICAgfVxuXG4gICAgaWYoSURNYW5hZ2VyLmdldEluc3RhbmNlKCkuX2FkdmVydGlzaW5nSWQpIHtcbiAgICAgIGlkVHJhY2tpbmcuYWR2ZXJ0aXNpbmdpZCA9IElETWFuYWdlci5nZXRJbnN0YW5jZSgpLl9hZHZlcnRpc2luZ0lkO1xuICAgIH1cblxuICAgIGlmIChJRE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5fb3BlbklkKSB7XG4gICAgICBpZFRyYWNraW5nLm9wZW5JZCA9IElETWFuYWdlci5nZXRJbnN0YW5jZSgpLl9vcGVuSWQ7XG4gICAgfVxuXG4gICAgaWYgKElETWFuYWdlci5nZXRJbnN0YW5jZSgpLl91bmlvbklkKSB7XG4gICAgICBpZFRyYWNraW5nLnVuaW9uSWQgPSBJRE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5fdW5pb25JZDtcbiAgICB9XG5cbiAgICBpZiAoSURNYW5hZ2VyLmdldEluc3RhbmNlKCkuX3Bob25lTnVtYmVyKSB7XG4gICAgICBpZFRyYWNraW5nLnBob25lTnVtYmVyID0gSURNYW5hZ2VyLmdldEluc3RhbmNlKCkuX3Bob25lTnVtYmVyO1xuICAgIH1cblxuICAgIGlmIChJRE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5fYW5kcm9pZElkKSB7XG4gICAgICBpZFRyYWNraW5nLmFuZHJvaWRpZCA9IElETWFuYWdlci5nZXRJbnN0YW5jZSgpLl9waG9uZU51bWJlcjtcbiAgICB9XG5cbiAgICBpZiAoSURNYW5hZ2VyLmdldEluc3RhbmNlKCkuX2RldmljZUlkKSB7XG4gICAgICBpZFRyYWNraW5nLmRldmljZUlkID0gSURNYW5hZ2VyLmdldEluc3RhbmNlKCkuX2RldmljZUlkO1xuICAgIH1cblxuICAgIGlmIChJRE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5fbWFjKSB7XG4gICAgICBpZFRyYWNraW5nLm1hYyA9IElETWFuYWdlci5nZXRJbnN0YW5jZSgpLl9tYWM7XG4gICAgfVxuXG4gICAgaWYgKElETWFuYWdlci5nZXRJbnN0YW5jZSgpLl9zZXJpYWwpIHtcbiAgICAgIGlkVHJhY2tpbmcuc2VyaWFsID0gSURNYW5hZ2VyLmdldEluc3RhbmNlKCkuX3NlcmlhbDtcbiAgICB9XG5cbiAgICBpZiAoSURNYW5hZ2VyLmdldEluc3RhbmNlKCkuX29haWQpIHtcbiAgICAgIGlkVHJhY2tpbmcub2FpZCA9IElETWFuYWdlci5nZXRJbnN0YW5jZSgpLl9vYWlkO1xuICAgIH1cblxuICAgIHJldHVybiBpZFRyYWNraW5nO1xuICB9XG59XG5cbmNvbnN0IGlkTWFuYWdlciA9IElETWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuZXhwb3J0IGRlZmF1bHQgaWRNYW5hZ2VyOyIsIi8qXG4gKiBGaWxlOiBhcGkuanNcbiAqIFByb2plY3Q6IHF0X3F1aWNrYXBwX3Nka1xuICogICAgICBcbiAqIEF1dGhvcjog6ZKw5pitIChjaGFuZ2xpYW5nLmxjbEB1bWVuZy5jb20pXG4gKiAgICAgIFxuICogQ29weXJpZ2h0IC0gMjAyMiBBbGliYWJhIEdyb3VwIEhvbGRpbmcgTGltaXRlZC5cbiAqL1xuXG5cbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzL2Rhc2gnO1xuaW1wb3J0IHVsb2cgZnJvbSAnLi4vdXRpbHMvdWxvZyc7XG5pbXBvcnQgdXNlckNvbmZpZyBmcm9tICcuL1VzZXJDb25maWcnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL3V0aWxzL2NvbnN0cyc7XG5pbXBvcnQgcmVxdWVzdFF1ZXVlIGZyb20gJy4vUmVxdWVzdFF1ZXVlJztcbmltcG9ydCBldmVudE1hbmFnZXIgZnJvbSAnLi9FdmVudE1hbmFnZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgZW1pdHRlciBmcm9tICcuL21lc3NhZ2VyJztcbmltcG9ydCBpZE1hbmFnZXIgZnJvbSAnLi9pZE1hbmFnZXInO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vQ2FjaGUnO1xuaW1wb3J0IHNka0NvbmZpZyBmcm9tICcuL1NES0NvbmZpZ01hbmFnZXInO1xuXG5cbmZ1bmN0aW9uIG5lZWRMaW1pdFNlbmQoZXZlbnRjb2RlKSB7XG4gIHZhciBldmVudExpbWl0UmF0ZXMgPSBzZGtDb25maWcuZ2V0SXRlbShjb25zdGFudC5RVF9FVkVOVF9MSU1JVFJBVEVTKTtcbiAgaWYgKGV2ZW50TGltaXRSYXRlcyAmJiBldmVudExpbWl0UmF0ZXMubGVuZ3RoID4gMCkge1xuICAgIHZhciBldmVudCA9IF8uZmluZChldmVudExpbWl0UmF0ZXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmV2ZW50SWQgPT09IGV2ZW50Y29kZTtcbiAgICB9KTtcbiAgICBcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHZhciByYW5kb20gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDAwKTtcbiAgICAgIGlmIChyYW5kb20gPCAoZXZlbnQuc2FtcGxpbmdSYXRlICogMTAwMCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5cbmNsYXNzIENvcmUge1xuICBfaW5pdGVkID0gZmFsc2U7XG4gIF9hcHBTdGFydFRpbWUgPSAwO1xuXG4gIGdldCByZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGVkO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgaWRNYW5hZ2VyLmluaXQoKTtcbiAgICBIZWFkZXIuaW5pdChmdW5jdGlvbigpIHtcbiAgICAgIGNhY2hlLmxvYWQoZnVuY3Rpb24oY2FjaGVMb2FkZWQpIHtcbiAgICAgICAgdGhhdC5faW5pdGVkID0gY2FjaGVMb2FkZWQ7XG4gICAgICAgIGVtaXR0ZXIuZW1pdChlbWl0dGVyLm1lc3NhZ2VUeXBlLlNES19JTklURUQpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRFdmVudChpZCwgcGFyYW1zKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGV2aWNlRW5hYmxlID0gc2RrQ29uZmlnLmdldEl0ZW0oY29uc3RhbnQuUVRfREVWSUNFX0VOQUJMRSk7XG4gICAgaWYgKGRldmljZUVuYWJsZSB8fCAoL14oXFwkXFwkX2FwcF9zdGFydHxcXCRcXCRfYXBwX2VuZCkkLy50ZXN0KGlkKSkpIHtcbiAgICAgIGlmIChfLmNoZWNrRXZlbnQoaWQsIHBhcmFtcykgJiYgbmVlZExpbWl0U2VuZChpZCkpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KGlkLCBwYXJhbXMpO1xuICAgICAgICBldmVudE1hbmFnZXIuYWRkRXZlbnQoZXZlbnQpO1xuICAgICAgICByZXF1ZXN0UXVldWUuc2VuZChjb25zdGFudC5EYXRhVHlwZS5FS1YsIHsgbm9DYWNoZTogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gIFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBMYXVuY2goKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuX2FwcFN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICBlbWl0dGVyLm9uKGVtaXR0ZXIubWVzc2FnZVR5cGUuU0RLX0lOSVRFRCwgZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0LnNlbmRFdmVudChjb25zdGFudC5BUFBfU1RBUlQsIHt0czogdGhhdC5fYXBwU3RhcnRUaW1lfSk7XG4gICAgfSlcbiAgfVxuXG4gIGFwcEhpZGUoKSB7XG4gICAgdmFyIGVuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBkdXJhdGlvbiA9IGVuZFRpbWUgLSB0aGlzLl9hcHBTdGFydFRpbWU7XG4gICAgdGhpcy5zZW5kRXZlbnQoY29uc3RhbnQuQVBQX0VORCwgeyB0czogZW5kVGltZSwgZHVyYXRpb246IGR1cmF0aW9ufSk7XG4gIH1cblxuICBzZW5kUGFnZVN0YXJ0KHBhcmFtcykge1xuICAgIHRoaXMuc2VuZEV2ZW50KGNvbnN0YW50LlBBR0VfU1RBUlQsIF8uYXNzaWduKHBhcmFtcywge1xuICAgICAgdHM6IERhdGUubm93KClcbiAgICB9KSk7XG4gIH1cblxuICBzZW5kVXNlclByb2ZpbGUocGFybWFzKSB7XG4gICAgdGhpcy5zZW5kRXZlbnQoY29uc3RhbnQuVVNFUl9QUk9GSUxFLCBwYXJtYXMpO1xuICB9XG5cbiAgZ2V0R2xvYmFsUHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHVzZXJDb25maWcuZ2xvYmFscHJvcGVydHkgfHwge307XG4gIH1cbiAgXG4gIHNldEdsb2JhbFByb3BlcnR5KHZhbHVlKSB7XG4gICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkgfHwgXy5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHZhciBuZXN0ZWQgPSBmYWxzZTtcbiAgICAgIF8uZWFjaE1hcCh2YWx1ZSwgZnVuY3Rpb24oaywgdikge1xuICAgICAgICBpZiAoXy5pc0FycmF5KHYpIHx8IF8uaXNPYmplY3QodikpIHtcbiAgICAgICAgICBuZXN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHVsb2coKS53KCdnbG9iYWxwcm9wZXJ0eSBrL3YgcGFpciBzaG91bGQgbm90IGNvbnRhaW4gbmVzdGVkIGpzb24gZm9ybWF0LiBjdXJyZW50IHZhbHVlPVxcbicpO1xuICAgICAgICAgIHVsb2coKS53KEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghbmVzdGVkKSB7XG4gICAgICAgIHVzZXJDb25maWcuZ2xvYmFscHJvcGVydHkgPSBfLmNsb25lKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdWxvZygpLncoXCJzZXRHbG9iYWxQcm9wZXJ0eSBjYW4gb25seSBiZSBhc3NpZ25lZCBhcyBPYmplY3QvQXJyYXkgZm9ybWF0IHZhbHVlLlwiKTtcbiAgICB9XG4gIH1cblxuICBhcHBlbmRHbG9iYWxQcm9wZXJ0eSh2YWx1ZSkge1xuICAgIGlmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICB1c2VyQ29uZmlnLmdsb2JhbFByb3BlcnR5ID0gXy5jbG9uZShfLmFzc2lnbih1c2VyQ29uZmlnLmdsb2JhbFByb3BlcnR5LCB2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bG9nKCkudyhcImFwcGVuZEdsb2JhbFByb3BlcnR5IGNhbiBvbmx5IGJlIGFzc2lnbmVkIGFzIE9iamVjdC9BcnJheSBmb3JtYXQgdmFsdWUuXCIpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luKHB1aWQpIHtcbiAgICBpZiAocHVpZCkge1xuICAgICAgaWRNYW5hZ2VyLnNldFVzZXJJZChwdWlkKTtcbiAgICB9IFxuICB9XG5cbiAgbG9nb2ZmKCkge1xuICAgIGlkTWFuYWdlci5yZW1vdmVVc2VySWQoJ2xvZ29mZiBzdWNjZXNzIScpO1xuICB9XG5cbiAgc2V0SWRUcmFja2luZyhpZHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gaWRzKSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlIGNvbnN0YW50LklEVHlwZS5vcGVuaWQ6XG4gICAgICAgICAgaWRNYW5hZ2VyLnNldE9wZW5JZChpZHNba2V5XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY29uc3RhbnQuSURUeXBlLnVuaW9uaWQ6XG4gICAgICAgICAgaWRNYW5hZ2VyLnNldFVuaW9uSWQoaWRzW2tleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNvbnN0YW50LklEVHlwZS5hZHJvaWRpZDpcbiAgICAgICAgICBpZE1hbmFnZXIuc2V0QW5kcm9pZElkKGlkc1trZXldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGNvbnN0YW50LklEVHlwZS5hZHZlcnRpc2luZ2lkOlxuICAgICAgICAgIGlkTWFuYWdlci5zZXRBZHZlcnRpc2luZ0lkKGlkc1trZXldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBjb25zdGFudC5JRFR5cGUucGhvbmVudW1iZXI6XG4gICAgICAgICAgaWRNYW5hZ2VyLnNldFBob25lbnVtKGlkc1trZXldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBjb25zdGFudC5JRFR5cGUuZGV2aWNlSWQ6XG4gICAgICAgICAgaWRNYW5hZ2VyLnNldERldmljZUlkKGlkc1trZXldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBjb25zdGFudC5JRFR5cGUubWFjOlxuICAgICAgICAgIGlkTWFuYWdlci5zZXRNYWMoaWRzW2tleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNvbnN0YW50LklEVHlwZS5zZXJpYWw6XG4gICAgICAgICAgaWRNYW5hZ2VyLnNldFNlcmlhbChpZHNba2V5XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY29uc3RhbnQuSURUeXBlLm9haWQ6XG4gICAgICAgICAgaWRNYW5hZ2VyLnNldE9haWQoaWRzW2tleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHVsb2coKS53KCdpbnZhbGlkIGlkIGtleSA9ICcsIGtleSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvcmU7IiwiLypcbiAqIEZpbGU6IG1lc3NhZ2UuanNcbiAqIFByb2plY3Q6IHF0X3F1aWNrYXBwX3Nka1xuICogICAgICBcbiAqIEF1dGhvcjog6ZKw5pitIChjaGFuZ2xpYW5nLmxjbEB1bWVuZy5jb20pXG4gKiAgICAgIFxuICogQ29weXJpZ2h0IC0gMjAyMiBBbGliYWJhIEdyb3VwIEhvbGRpbmcgTGltaXRlZC5cbiAqL1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiLi9ldmVudEVtaXR0ZXJcIjtcblxudmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5lbWl0dGVyLm1lc3NhZ2VUeXBlID0ge1xuICBQQVJBTVNfTE9BREVEOiAwLFxuICBTREtfSU5JVEVEOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbWl0dGVyOyIsIi8qXG4gKiBGaWxlOiByZXF1ZXN0LmpzXG4gKiBQcm9qZWN0OiBxdF9xdWlja2FwcF9zZGtcbiAqICAgICAgXG4gKiBBdXRob3I6IOmSsOaYrSAoY2hhbmdsaWFuZy5sY2xAdW1lbmcuY29tKVxuICogICAgICBcbiAqIENvcHlyaWdodCAtIDIwMjIgQWxpYmFiYSBHcm91cCBIb2xkaW5nIExpbWl0ZWQuXG4gKi9cblxuaW1wb3J0IGNhY2hlIGZyb20gXCIuL0NhY2hlXCI7XG5pbXBvcnQgbmF0aXZlRmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IHVzZXJDb25maWcgZnJvbSBcIi4vVXNlckNvbmZpZ1wiO1xuaW1wb3J0IGlkTWFuYWdlciBmcm9tIFwiLi9pZE1hbmFnZXJcIjtcbmltcG9ydCBfIGZyb20gXCIuLi91dGlscy9kYXNoXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL3V0aWxzL2NvbnN0c1wiO1xuaW1wb3J0IHNka0NvbmZpZyBmcm9tIFwiLi9TREtDb25maWdNYW5hZ2VyXCI7XG5pbXBvcnQgdWxvZyBmcm9tIFwiLi4vdXRpbHMvdWxvZ1wiO1xuaW1wb3J0IGFwcCBmcm9tICdAc3lzdGVtLmFwcCc7XG5cbmZ1bmN0aW9uIGdldExvZ1VSTCgpIHtcbiAgdmFyIHRyYWNrRG9tYWluID0gdXNlckNvbmZpZy5nZXRJdGVtKGNvbnN0YW50LlRSQUNLX0RPTUFJTik7XG4gIGlmICghXy5jaGVja0RvbWFpbih0cmFja0RvbWFpbikpIHJldHVybjtcbiAgcmV0dXJuIF8uZml4RG9tYWluKHRyYWNrRG9tYWluKSArICcvcWFwcG1fbG9ncydcbn1cblxuZnVuY3Rpb24gZ2V0UmVtb3RlQ2ZnVVJMKGltcHJpbnRWZXJzaW9uKSB7XG4gIHZhciB0cmFja0RvbWFpbiA9IHVzZXJDb25maWcuZ2V0SXRlbShjb25zdGFudC5UUkFDS19ET01BSU4pO1xuICByZXR1cm4gXy5maXhEb21haW4odHJhY2tEb21haW4pICsgaW1wcmludFZlcnNpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWxDYWxsYmFjaywgY29tcGxldGVDYWxsYmFjaykge1xuICBIZWFkZXIuc2V0SWRUeXBlKGlkTWFuYWdlci5nZXRJRFR5cGUoKSk7XG4gIEhlYWRlci5zZXRJZFRyYWNraW5nKGlkTWFuYWdlci5nZXRJRFRyYWNraW5nKCkpO1xuICBpZiAoZGF0YS5hbmFseXRpY3MpIHtcbiAgICBkYXRhLmFuYWx5dGljcy5hY3RpdmVfdXNlciA9IHtcbiAgICBwdWlkOiB1c2VyQ29uZmlnLnB1aWQgfHwgXCJcIixcbiAgICB9O1xuICB9XG4gIGRhdGEuaGVhZGVyID0gXy5hc3NpZ24oSGVhZGVyLmdldCgpLCB7XG4gICAgdHJhY2VJZDogXy5nZXRSYW5kb21TdHIoMTApICsgRGF0ZS5ub3coKSArIF8uZ2V0UmFuZG9tU3RyKDkpLFxuICAgIGFwcF92ZXJzaW9uOiBhcHAuZ2V0SW5mbygpLnZlcnNpb25OYW1lLCAvL1RPRE86IOmcgOimgeWcqGFwcCBvbkNyZWF0ZeS5i+WQjlxuICAgIGFwcGlkOiBhcHAuZ2V0SW5mbygpLnBhY2thZ2VOYW1lLCAgICAgLy/mnaXmupDnsbvlnossIOS4gOe6p+adpea6kCAvL1RPRE86IOaWsOWinlxuICAgIGFwcF9zb3VyY2VfdHlwZTogYXBwLmdldEluZm8oKS5zb3VyY2UudHlwZSwgLy/mnaXmupDnsbvlnossIOS6jOe6p+adpea6kCAvL1RPRE86IOaWsOWinlxuICB9KTtcblxuICB2YXIgbWFuZ2xlRGF0YSA9IF8ubWFuZ2xlKGRhdGEpO1xuICB2YXIgcmVxdWVzdERhdGEgPSBfLmJhc2U2NEVuY29kZShKU09OLnN0cmluZ2lmeShtYW5nbGVEYXRhKSk7XG4gIHZhciB1cmwgPSBnZXRMb2dVUkwoKTtcblxuICBuYXRpdmVGZXRjaC5mZXRjaCh7XG4gICAgdXJsOiB1cmwsXG4gICAgaGVhZGVyOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ3FhcHBtcC9qc29uJyxcbiAgICAgICdNc2ctVHlwZSc6ICdxYXBwbXAvanNvbidcbiAgICB9LFxuICAgIGRhdGE6IHJlcXVlc3REYXRhLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICB2YXIgc3RhdHVzQ29kZSA9IHJlc3AuY29kZTtcbiAgICAgIGlmIChzdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgdWxvZygpLmkoJ2RhdGEgc2VuZCBzdWNjZXNzOicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgLy/lnKjmraTlpITlsIZpbXByaW505YaF5a655Yqg5YWl5Yiw5pys5Zyw57yT5a2Y5LitXG4gICAgICAgIHNhdmVJbXByaW50KChyZXNwLmRhdGEgfHwge30pKTtcbiAgICAgICAgXy5pc0Z1bmN0aW9uKHN1Y2Nlc3NDYWxsYmFjaykgJiYgc3VjY2Vzc0NhbGxiYWNrKHJlc3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdWxvZygpLncoJ2RhdGEgc2VuZCBmYWlsZWQ6JywgcmVxdWVzdERhdGEpO1xuICAgICAgICBfLmlzRnVuY3Rpb24oZmFpbENhbGxiYWNrKSAmJiBmYWlsQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIChpc1RpbWVvdXQpIHtcbiAgICAgIHVsb2coKS53KCdkYXRhIHNlbmQnICsgaXNUaW1lb3V0ID8gJ3RpbWVvdXQ6ICcgOiAnZmFpbGVkOiAnLCByZXF1ZXN0RGF0YSk7XG4gICAgICBfLmlzRnVuY3Rpb24oZmFpbENhbGxiYWNrKSAmJiBmYWlsQ2FsbGJhY2soKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBfLmlzRnVuY3Rpb24oY29tcGxldGVDYWxsYmFjaykgJiYgY29tcGxldGVDYWxsYmFjaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZldGNoSW1wcmludFZlcnNpb24oaW1wdikge1xuICB2YXIgdXJsID0gZ2V0UmVtb3RlQ2ZnVVJMKGltcHYpO1xuICBuYXRpdmVGZXRjaC5mZXRjaCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBpZiAocmVzcC5kYXRhICYmIHJlc3AuZGF0YS5kYXRhKSB7XG4gICAgICAgIHNka0NvbmZpZy51cGRhdGVSZW1vdGVDb25maWcocmVzcC5kYXRhLmRhdGEpO1xuICAgICAgICBjYWNoZS5zZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6IGNvbnN0YW50LlFUX1JFTU9URV9DT05GSUcsXG4gICAgICAgICAgdmFsdWU6IHJlc3AuZGF0YS5kYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIHVsb2coKS53KCdyZW1vdGUgY29uZmlndXJhdGlvbiByZXF1ZXN0IGZhaWxlZCwgZXJybXNnOicsIGVycm9yKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzYXZlSW1wcmludChpbXByaW50KSB7XG4gIHRyeSB7XG4gICAgdmFyIGltcHJpbnRWZXJzaW9uID0gaW1wcmludC5pbXByaW50VmVyc2lvbjtcbiAgICBjYWNoZS5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogY29uc3RhbnQuUVRfSU1QUklOVF9WRVJTSU9OLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGlmIChyZXMgJiYgXy5pc1N0cmluZyhyZXMpKSB7XG4gICAgICAgICAgdmFyIGxvY2FsSW1wdiA9IHJlcztcbiAgICAgICAgICBpZiAoaW1wcmludFZlcnNpb24gJiYgaW1wcmludFZlcnNpb24gIT09IGxvY2FsSW1wdikge1xuICAgICAgICAgICAgZmV0Y2hJbXByaW50VmVyc2lvbihpbXByaW50VmVyc2lvbik7XG4gICAgICAgICAgICBjYWNoZS5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAga2V5OiBjb25zdGFudC5RVF9JTVBSSU5UX1ZFUlNJT04sXG4gICAgICAgICAgICAgIHZhbHVlOiBpbXByaW50VmVyc2lvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlLmdldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICBrZXk6IGNvbnN0YW50LlFUX1JFTU9URV9DT05GSUcsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxzUmVtb3RlQ2ZnID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICAgICAgICAgIHNka0NvbmZpZy51cGRhdGVSZW1vdGVDb25maWcobHNSZW1vdGVDZmcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1wcmludFZlcnNpb24gJiYgZmV0Y2hJbXByaW50VmVyc2lvbihpbXByaW50VmVyc2lvbik7XG4gICAgICAgICAgaW1wcmludFZlcnNpb24gJiYgY2FjaGUuc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICBrZXk6IGNvbnN0YW50LlFUX0lNUFJJTlRfVkVSU0lPTixcbiAgICAgICAgICAgIHZhbHVlOiBpbXByaW50VmVyc2lvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIHVsb2coKS53KCdzYXZlIGltcHJpbnQgZmFpbGVkISwgZXJybXNnID0gJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaChlKSB7XG4gICAgdWxvZygpLncoJ3NhdmUgaW1wcmludCBmYWlsZWQsIGVycm1zZyA9ICcsIGUpO1xuICB9XG59IiwiLypcbiAqIEZpbGU6IGNvbnN0cy5qc1xuICogUHJvamVjdDogcXRfcXVpY2thcHBfc2RrXG4gKiAgICAgIFxuICogQXV0aG9yOiDpkrDmmK0gKGNoYW5nbGlhbmcubGNsQHVtZW5nLmNvbSlcbiAqICAgICAgXG4gKiBDb3B5cmlnaHQgLSAyMDIyIEFsaWJhYmEgR3JvdXAgSG9sZGluZyBMaW1pdGVkLlxuICovXG5cbmNvbnN0IGNvbnN0YW50ID0ge1xuICBUUkFDS19ET01BSU46ICd0cmFja0RvbWFpbicsXG4gIEFQUEtFWTogJ2FwcEtleScsXG4gIHNob3dMb2c6ICdzaG93TG9nJyxcbiAgQVBQX1NUQVJUOiAnJCRfYXBwX3N0YXJ0JyxcbiAgQVBQX0VORDogJyQkX2FwcF9lbmQnLFxuICBQQUdFX1NUQVJUOiAnJCRfcGFnZV9zdGFydCcsXG4gIFBBR0VfRU5EOiAnJCRfcGFnZV9lbmQnLFxuICBVU0VSX1BST0ZJTEU6ICckJF91c2VyX3Byb2ZpbGUnLFxuICBFS1ZfU0hBUkU6ICckJF9zaGFyZScsXG4gIFBBR0VfVElUTEU6ICdwYWdlX3RpdGxlJyxcbiAgUEFHRV9OQU1FOiAncGFnZV9uYW1lJyxcbiAgRUtWUzogJ2VrdnMnLFxuICBQQUdFX0NPTkZJRzogJ3BhZ2VDb25maWcnLFxuICBFVkVOVF9NQVhfQ09VTlQ6IDEwMDAwLCAvLyDmnKzlnLDmnIDlpJrlrZjlgqjov5nkuYjlpJpla3bmlbDmja5cbiAgTUVNT1JZX01BWF9DT1VOVDogMSwgLy8g5YaF5a2Y5Lit5a2Y5YKo55qE5pyA5aSn5pWw5o2u5pWw6YeP77yM6LaF6L+H5YiZ57yT5a2Y5Yiw5pys5ZywXG4gIENVUlJFTlRfU0VTU0lPTjogJ2N1cnJlbnRfc2Vzc2lvbicsXG4gIFNFU1NJT05fSU5URVJWQUw6IDMwMDAwLCAvLyBzZXNzaW9uSWTov4fmnJ/ml7bpl7QgMzDnp5JcbiAgTUFYX1FVRVVFX0NPVU5UOiA1MCwgLy8g5Li66Ziy5q2i5Zug572R57uc5byC5bi45a+86Ie057yT5a2Y6L+H5aSn77yM6K6+572u57yT5a2Y5Liq5pWw5LiK6ZmQXG4gIE1BWF9SRVFVRVNUX1RJTUVPVVQ6IDUwMDAsXG4gIE1BWF9FVkVOVElEX0xFTkdUSDogMTI4LFxuICBNQVhfUFJPUEVSVFlfS0VZX0xFTkdUSDogMTI4LFxuICBNQVhfUFJPUEVSVFlfS0VZU19DT1VOVDogMTAwLFxuICBJRF9UUkFDS0lORzogJ2lkX3RyYWNraW5nJyxcbiAgSURfVFlQRTogJ2lkX3R5cGUnLFxuICBBUFBfVkVSU0lPTjogJ2FwcF92ZXJzaW9uJyxcbiAgSU1QUklOVDogJ2ltcHJpbnQnLCBcbiAgUmVxdWVzdHM6ICdSZXF1ZXN0cycsXG4gIEZhaWxlZFJlcXVlc3RzOiAnZmFpbGVkUmVxdWVzdHMnLFxuICBRVF9SRU1PVEVfQ09ORklHOiAnUVRfUkVNT1RFX0NPTkZJRycsXG4gIFFUX0lNUFJJTlRfVkVSU0lPTjogJ1FUX0lNUFJJTlRfVkVSU0lPTicsXG4gIFFUX0RFVklDRV9FTkFCTEU6ICdRVF9ERVZJQ0VfRU5BTEJFJyxcbiAgUVRfRVZFTlRfTElNSVRSQVRFUzogJ1FUX0VWRU5UX0xJTUlUUkFURVMnLFxuICBHbG9iYWxQcm9wZXJ0eTogJ2dsb2JhbHByb3BlcnR5JyxcbiAgVVVJRF9TVUZGSVg6ICd1ZCcsXG4gIC8vRU5VTVxuICBEYXRhVHlwZToge1xuICAgIEVLVjogJ2VrdidcbiAgfSxcbiAgSURUeXBlOiB7XG4gICAgdXVpZDogJ3V1aWQnLFxuICAgIHVzZXJpZDogJ3VzZXJpZCcsXG4gICAgb3BlbmlkOiAnb3BlbmlkJyxcbiAgICB1bmlvbmlkOiAndW5pb25pZCcsXG4gICAgYWRyb2lkaWQ6ICdhbmRyb2lkaWQnLFxuICAgIGFkdmVydGlzaW5naWQ6ICdhZHZlcnRpc2luZ2lkJyxcbiAgICBwaG9uZW51bWJlcjogJ3Bob25lbnVtYmVyJyxcbiAgICBtYWM6ICdtYWMnLFxuICAgIG9haWQ6ICdvYWlkJyxcbiAgICBzZXJpYWw6ICdzZXJpYWwnLFxuICAgIGRldmljZUlkOiAnZGV2aWNlaWQnXG4gIH0sXG4gIElEX01BUDoge1xuICAgIHV1aWQ6ICd1ZCcsXG4gICAgdW5pb25pZDogJ3VuZCcsXG4gICAgb3BlbmlkOiAnb2QnLFxuICAgIGFuZHJvaWRfaWQ6ICdhbmRyb2lkX2lkJyxcbiAgICBhZHZlcnRpc2luZ0lkOiAnYWR2ZXJ0aXNpbmdfaWQnLFxuICAgIHBob25lbnVtYmVyOiAncGhvbmVudW1iZXInXG4gIH0sXG4gIEhlYWRlcl9NYXBfSDoge1xuICAgIHNka190eXBlOiAnc2R0JywgICAvL3Nka+exu+WeiyBxdWlja2FwcG1wXG4gICAgbGFuZ3VhZ2U6ICdsYW5nJywgIC8v57O757uf6K+t6KiAXG4gICAgZGV2aWNlX3R5cGU6ICdkdCcsIC8v6K6+5aSH57G75Z6LXG4gICAgb3NfdmVyc2lvbjogJ292JywgIC8v5pON5L2c57O757uf54mI5pysXG4gICAgb3M6ICdvcycsICAgICAgICAgIC8v5pON5L2c57O757ufXG4gICAgYXBwS2V5OiAnYWsnLCAgICAgIC8vYXBwS2V5XG4gICAgc2RrX3ZlcnNpb246ICdzdicsIC8vc2Rr54mI5pysXG4gICAgcmVzb2x1dGlvbjogJ3JsJywgIC8v5YiG6L6o546HXG4gICAgcGl4ZWxfcmF0aW86ICdwcicsIC8v6K6+5aSH55qE5bGP5bmV5a+G5bqmXG4gICAgaWRfdHlwZTogJ2l0JywgICAgIC8vaWTnsbvlnotcbiAgICBpZF90cmFja2luZzogJ2l0cicsXG4gICAgYWNjZXNzOiAnYWMnLCAgICAgIC8v572R57ucXG4gICAgZGV2aWNlX21hbnVmYWN0dXJlcjogJ2RtZicsIC8v6K6+5aSH55Sf5Lqn5ZWGXG4gICAgZGV2aWNlX21vZGVsOiAnZG0nLC8v6K6+5aSH5Z6L5Y+3XG4gICAgZGV2aWNlX25hbWU6ICdkbicsICAvL+iuvuiuvuWkh+Wei+WPt1xuICAgIHBsYXRmb3JtX3ZlcnNpb246ICdwdicsIC8v6L+Q6KGM5bmz5Y+w54mI5pys5ZCN56ewXG4gICAgcGxhdGZvcm1fc2RrX3ZlcnNpb246ICdwc3YnLCAvL+W5s+WPsHNka+eJiOacrFxuICAgIGRldmljZV9icmFuZDogJ2RiJywgLy/orr7lpIflk4HniYxcbiAgICBkZWJ1Z0lkOiAnZGsnLFxuICB9LFxuICBIZWFkZXJfTWFwX0E6IHtcbiAgICBla3ZzOiAnZScsXG4gICAgYWN0aXZlX3VzZXI6ICdhY3RpdmVfdXNlcidcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uc3RhbnQ7IiwiLypcbiAqIEZpbGU6IGRhc2guanNcbiAqIFByb2plY3Q6IHF0X3F1aWNrYXBwX3Nka1xuICogICAgICBcbiAqIEF1dGhvcjog6ZKw5pitIChjaGFuZ2xpYW5nLmxjbEB1bWVuZy5jb20pXG4gKiAgICAgIFxuICogQ29weXJpZ2h0IC0gMjAyMiBBbGliYWJhIEdyb3VwIEhvbGRpbmcgTGltaXRlZC5cbiAqL1xuXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi9jb25zdHMnO1xuaW1wb3J0IHVsb2cgZnJvbSAnLi91bG9nJztcblxuXG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbnZhciBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIHNsaWNlID0gQXJyYXlQcm90by5zbGljZTtcbnZhciB0b1N0cmluZyA9IE9ialByb3RvLnRvU3RyaW5nO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbnZhciBvcmlnaW5Jc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xudmFyIG9yaWdpbkZ1bmNCaW5kID0gRnVuY1Byb3RvLmJpbmQ7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbnZhciBvcmlnaW5Gb3JFYWNoID0gQXJyYXlQcm90by5mb3JFYWNoO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG52YXIgb3JpZ2luSW5kZXhPZiA9IEFycmF5UHJvdG8uaW5kZXhPZjtcblxuZnVuY3Rpb24gX21hbmdsZU9iaihvYmosIG1hcCkge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChtYXBba2V5XSkge1xuICAgICAgcmVzdWx0W21hcFtrZXldXSA9IG9ialtrZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBfID0ge1xuICBpc0Z1bmN0aW9uOiBmdW5jdGlvbihmdW5jKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKlxcYmZ1bmN0aW9uXFxiLy50ZXN0KGZ1bmMpXG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIGlzQXJyYXk6IG9yaWdpbklzQXJyYXkgfHwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBcIltvYmplY3QgQXJyYXldXCIgPT09IHRvU3RyaW5nLmNhbGwodClcbiAgfSxcblxuICBpc0FyZ3VtZW50czogZnVuY3Rpb24odCkge1xuICAgIHJldHVybiAhKCF0IHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIFwiY2FsbGVlXCIpKTtcbiAgfSxcblxuICB0b0FycmF5OiBmdW5jdGlvbiAodCkge1xuICAgIGlmICh0ICYmIHQudG9BcnJheSkge1xuICAgICAgcmV0dXJuIHQudG9BcnJheSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0FycmF5KHQpKSB7XG4gICAgICByZXR1cm4gc2xpY2UuY2FsbCh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNBcmd1bWVudHModCkpIHtcbiAgICAgIHJldHVybiBzbGljZS5jYWxsKHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9LFxuICBpc1N0cmluZzogZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3RyKT09PVwiW29iamVjdCBTdHJpbmddXCI7XG4gIH0sXG5cbiAgaXNVbmRlZmluZWQ6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB2b2lkIDAgPT09IHRhcmdldDtcbiAgfSxcblxuICBpc0RhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IERhdGVdXCIgPT0gdG9TdHJpbmcuY2FsbCh0KVxuICB9LFxuICBpc0Jvb2xlYW46IGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEJvb2xlYW5dXCIgPT0gdG9TdHJpbmcuY2FsbCh0KVxuICB9LFxuICBpc051bWJlcjogZnVuY3Rpb24odCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgIHJldHVybiBcIltvYmplY3QgTnVtYmVyXVwiID09IHRvU3RyaW5nLmNhbGwodCkgJiYgL1tcXGRcXC5dKy8udGVzdChTdHJpbmcodCkpXG4gIH0sXG4gIGlzSlNPTlN0cmluZzogZnVuY3Rpb24odCkge1xuICAgIHRyeSB7XG4gICAgICBKU09OLnBhcnNlKHQpXG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgdXRmOEVuY29kZTogZnVuY3Rpb24odCkge1xuICAgIHZhciBlLCBuLCByLCBpLCBhID0gXCJcIjtcbiAgICBmb3IgKGUgPSBuID0gMCwgciA9ICh0ID0gKHQgKyBcIlwiKS5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpKS5sZW5ndGgsIGkgPSAwOyBpIDwgcjsgaSsrKSB7XG4gICAgICB2YXIgcyA9IHQuY2hhckNvZGVBdChpKSwgbyA9IG51bGw7XG4gICAgICBzIDwgMTI4ID8gbisrIDogbyA9IHMgPiAxMjcgJiYgcyA8IDIwNDggPyBTdHJpbmcuZnJvbUNoYXJDb2RlKHMgPj4gNiB8IDE5MiwgNjMgJiBzIHwgMTI4KSA6IFN0cmluZy5mcm9tQ2hhckNvZGUocyA+PiAxMiB8IDIyNCwgcyA+PiA2ICYgNjMgfCAxMjgsIDYzICYgcyB8IDEyOCksIG51bGwgIT09IG8gJiYgKG4gPiBlICYmIChhICs9IHQuc3Vic3RyaW5nKGUsIG4pKSwgYSArPSBvLCBlID0gbiA9IGkgKyAxKVxuICAgIH1cbiAgICByZXR1cm4gbiA+IGUgJiYgKGEgKz0gdC5zdWJzdHJpbmcoZSwgdC5sZW5ndGgpKSwgYVxuICB9LFxuXG4gIGJhc2U2NEVuY29kZTogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdmFyIGUsIG4sIHIsIGksIGEsIHMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsXG4gICAgICBvID0gMCxcbiAgICAgIGMgPSAwLFxuICAgICAgdSA9IFwiXCIsXG4gICAgICBmID0gW107XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybiB0YXJnZXQ7XG4gICAgdGFyZ2V0ID0gdGhpcy51dGY4RW5jb2RlKHRhcmdldCk7XG4gICAgZG8ge1xuICAgICAgZSA9IChhID0gdGFyZ2V0LmNoYXJDb2RlQXQobysrKSA8PCAxNiB8IHRhcmdldC5jaGFyQ29kZUF0KG8rKykgPDwgOCB8IHRhcmdldC5jaGFyQ29kZUF0KG8rKykpID4+IDE4ICYgNjMsIG4gPSBhID4+IDEyICYgNjMsIHIgPSBhID4+IDYgJiA2MywgaSA9IDYzICYgYSwgZltjKytdID0gcy5jaGFyQXQoZSkgKyBzLmNoYXJBdChuKSArIHMuY2hhckF0KHIpICsgcy5jaGFyQXQoaSlcbiAgICB9IHdoaWxlIChvIDwgdGFyZ2V0Lmxlbmd0aCk7XG4gICAgc3dpdGNoICh1ID0gZi5qb2luKFwiXCIpLCB0YXJnZXQubGVuZ3RoICUgMykge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB1ID0gdS5zbGljZSgwLCAtMikgKyBcIj09XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB1ID0gdS5zbGljZSgwLCAtMSkgKyBcIj1cIlxuICAgIH1cbiAgICByZXR1cm4gdVxuICB9LFxuXG4gIGVhY2g6IGZ1bmN0aW9uIChhcnIsIGZuKSB7XG4gICAgaWYgKHRoaXMuaXNPYmplY3QoYXJyKSAmJiBhcnIubGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGZvciAodmFyIGF0dHIgaW4gYXJyKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGFyciwgYXR0cikpIHtcbiAgICAgICAgICBmbihhdHRyLGFyclthdHRyXSxhcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGwgPSBhcnIubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcnMgPSBmbihhcnJbaV0sIGkpO1xuICAgICAgICBpZiAocnMgPT09ICdicmVhaycpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBlYWNoTWFwOiBmdW5jdGlvbiAobWFwLCBjYikge1xuICAgIGlmIChPYmplY3QgJiYgT2JqZWN0LmtleXMpIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMobWFwKTtcbiAgICAgIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGsxID0ga2V5c1tpXTtcbiAgICAgICAgY2IgJiYgY2IoazEsIG1hcFtrMV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrIGluIG1hcCkge1xuICAgICAgICBjYiAmJiBjYihrLCBtYXBba10pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBpc09iamVjdDogZnVuY3Rpb24gKG9iaikge1xuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBwcm90byA9IG9iajtcbiAgICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IHByb3RvO1xuICB9LFxuXG4gIGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uIChvYmopIHtcbiAgICB0cnkge1xuICAgICAgaWYoIW9iaikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgKE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgYXNzaWduOiBmdW5jdGlvbih0YXJnZXRPYmosIGFyZ3NPYmopIHtcbiAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPT0gbnVsbCkgeyAvLyBTa2lwIG92ZXIgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG87XG4gICAgICB9KHRhcmdldE9iaiwgYXJnc09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXRPYmosIGFyZ3NPYmopO1xuICAgIH1cbiAgfSxcblxuICBmaW5kOiBmdW5jdGlvbihhcnIsIGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhcnIuZmluZChjYWxsYmFjayk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbWF0Y2ggPSBjYWxsYmFjayhhcnJbaV0pO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gYXJyW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNoZWNrRG9tYWluOiBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgvXigoaHR0cHxodHRwc3wnJyk6XFwvXFwvKT8oW2EtekEtWjAtOV1bLWEtekEtWjAtOV17MCw2Mn0oXFwuW2EtekEtWjAtOV1bLWEtekEtWjAtOV17MCw2Mn0pKyg6WzAtOV17MSw1fSkqKSQvKTtcbiAgICB2YXIgbWF0Y2hlZCA9ICgodXJsIHx8ICcnKS5tYXRjaChyZWcpIHx8IFtdKVswXTsgIFxuICAgIGlmICghdXJsIHx8ICFtYXRjaGVkKSB7XG4gICAgICB1bG9nKCkudGlwX3codWxvZygpLnJlcGVhdChcIiFcIikpO1xuICAgICAgdWxvZygpLnRpcF93KFwidHJhY2tEb21haW4gZXJyb3IsIHBsZWFzZSBjaGVjayB0cmFja0RvbWFpbiBzZXR0aW5nLCBjdXJyZW50IHZhbHVlIGlzOiBcIiArIHVybCB8fCAndW5kZWZpbmVkJyk7XG4gICAgICB1bG9nKCkudGlwX3coXCJ3ZSBhY2NlcHQgdGhlc2UgdGhyZWUgcGF0dGVybnM6XCIpO1xuICAgICAgdWxvZygpLnRpcF93KFwiZWcxOiBodHRwczovL3Rlc3QtcXRyYWNraW5nLXh4eC5jb206cG9ydCwgcG9ydCBpcyBvcHRpb25hbFwiKTtcbiAgICAgIHVsb2coKS50aXBfdyhcImVnMjogaHR0cDovL3Rlc3QtcXRyYWNraW5nLXh4eC5jb206cG9ydCwgcG9ydCBpcyBvcHRpb25hbFwiKTtcbiAgICAgIHVsb2coKS50aXBfdyhcImVnMzogdGVzdC1xdHJhY2tpbmcteHh4LmNvbTpwb3J0LCBwb3J0IGlzIG9wdGlvbmFsXCIpO1xuICAgICAgdWxvZygpLnRpcF93KHVsb2coKS5yZXBlYXQoXCIhXCIpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIGNoZWNrRXZlbnQ6IGZ1bmN0aW9uIChpZCwgcGFyYW1zKSB7XG4gICAgaWYgKCEoaWQgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJykpIHtcbiAgICAgIHVsb2coKS53KCdldmVudGNvZGUgaXMgaW52YWxpZCwgaWQgPScsIGlkIHx8IFwiJycgZXZlbnQgcHJvcGVydGllcyA9IFwiLCBKU09OLnN0cmluZ2Z5KHBhcmFtcykpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIOS/neeVmeWFs+mUruWtl1xuICAgIHZhciByZXNlcnZlV29yZHMgPSBbJ2lkJywgJ2R1J107XG4gICAgdmFyIHJlc2VydmVXb3JkTWFwID0ge307XG5cbiAgICByZXNlcnZlV29yZHMuZm9yRWFjaChmdW5jdGlvbiAod29yZCkge1xuICAgICAgcmVzZXJ2ZVdvcmRNYXBbd29yZF0gPSAxO1xuICAgIH0pO1xuXG4gICAgLy8g5qOA5p+lZXZlbnRJZOaYr+WQpuS4juS/neeVmeWFs+mUruWtl+WGsueqgVxuICAgIGlmIChyZXNlcnZlV29yZE1hcFtpZF0pIHtcbiAgICAgIHVsb2coKS5lKCdldmVudGNvZGUgaGFzIGNvbmZsaWN0IHdpdGggcmVzZXJ2ZXdvcmRzOiAnICsgcmVzZXJ2ZVdvcmRzLmpvaW4oJywnKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlkLmxlbmd0aCA+IGNvbnN0YW50Lk1BWF9FVkVOVElEX0xFTkdUSCkge1xuICAgICAgdWxvZygpLmUoJ1RoZSBtYXhpbXVtIGxlbmd0aCBvZiBldmVudGNvZGUgc2hhbGwgbm90IGV4Y2VlZCAnICsgY29uc3RhbnQuTUFYX0VWRU5USURfTEVOR1RIKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBwcm9wZXJ0aWVz55qE5ZCI5rOV57G75Z6L5Li6IHN0cmluZyB8IG9iamVjdChub3QgaW5jbHVkZSBBcnJheSlcbiAgICBpZiAocGFyYW1zXG4gICAgICAmJiAodHlwZW9mIHBhcmFtcyAhPT0gJ29iamVjdCcgfHwgdGhpcy5pc0FycmF5KHBhcmFtcykpXG4gICAgICAmJiB0eXBlb2YgcGFyYW1zICE9PSAnc3RyaW5nJykge1xuICAgICAgdWxvZygpLmUoJ3BsZWFzZSBjaGVjayB0cmFja0V2ZW50IHByb3BlcnRpZXMuIHByb3BlcnRpZXMgc2hvdWxkIGJlIHN0cmluZyBvciBvYmplY3Qobm90IGluY2x1ZGUgQXJyYXkpJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBcnJheShwYXJhbXMpKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuICAgICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIGtleSkpIHtcbiAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IGNvbnN0YW50Lk1BWF9QUk9QRVJUWV9LRVlfTEVOR1RIKSB7XG4gICAgICAgICAgICB1bG9nKCkuZSgnVGhlIG1heGltdW0gbGVuZ3RoIG9mIHByb3BlcnR5IGtleSBzaGFsbCBub3QgZXhjZWVkICcgKyBjb25zdGFudC5NQVhfUFJPUEVSVFlfS0VZX0xFTkdUSCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvdW50ID49IGNvbnN0YW50Lk1BWF9QUk9QRVJUWV9LRVlTX0NPVU5UKSB7XG4gICAgICAgICAgICB1bG9nKCkuZSgnVGhlIG1heGltdW0gY291bnQgb2YgcHJvcGVydGllcyBzaGFsbCBub3QgZXhjZWVkICcgKyBjb25zdGFudC5NQVhfUFJPUEVSVFlfS0VZU19DT1VOVCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJlc2VydmVXb3JkTWFwW2tleV0pIHtcbiAgICAgICAgICAgIHVsb2coKS5lKCdwcm9wZXJ0eSBrZXkgaGFzIGNvbmZsaWN0IHdpdGggcmVzZXJ2ZVdvcmRzOiAnICsgcmVzZXJ2ZVdvcmRzLmpvaW4oJywnKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBmaXhEb21haW46IGZ1bmN0aW9uKHVybCkgeyAgXG4gICAgaWYgKHVybC5pbmRleE9mKCdodHRwczovLycpICE9PSAtMSB8fCB1cmwuaW5kZXhPZignaHR0cDovLycpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gKC9eXFwvXFwvLy50ZXN0KHVybCkgPyAnJyA6ICcvLycpICsgdXJsOyAgICBcbiAgICAgIGlmICgvKFxcZCtcXC4pezMsfVxcZCsvLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ2h0dHA6JyArIHVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnaHR0cHM6JyArIHVybDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY2hlY2tBcHBLZXk6IGZ1bmN0aW9uIChhcHBLZXkpIHtcbiAgICBpZiAoYXBwS2V5ICYmIHRoaXMuaXNTdHJpbmcoYXBwS2V5KSkge1xuICAgICAgcmV0dXJuIGFwcEtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgdWxvZygpLnRpcF93KHVsb2coKS5yZXBlYXQoXCIhXCIpKTtcbiAgICAgIHVsb2coKS50aXBfdyhcImFwcEtleSBlcnJvciwgcGxlYXNlIGNoZWNrIGFwcEtleSBzZXR0aW5nIVwiKTtcbiAgICAgIHVsb2coKS50aXBfdyh1bG9nKCkucmVwZWF0KFwiIVwiKSk7XG4gICAgfVxuICB9LFxuXG4gIGdldFJhbmRvbVN0cihsZW4pIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGFyciA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJywgJ2snLCAnbCcsICdtJywgJ24nLCAnbycsICdwJywgJ3EnLCAncicsICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLCAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLCAnWScsICdaJ107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOdW1iZXIobGVuKTsgaSsrKSB7XG4gICAgICB2YXIgcG9zID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGFyci5sZW5ndGggLSAxKSk7XG4gICAgICBzdHIgKz0gYXJyW3Bvc107XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH0sXG5cbiAgbWFuZ2xlKGRhdGEpIHtcbiAgICBmdW5jdGlvbiBfbWFuZ2xlSGVhZGVyKHBhcmFtcywgbWFwKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gX21hbmdsZU9iaihwYXJhbXMsIG1hcCk7XG4gICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5pZF90cmFja2luZykge1xuICAgICAgICByZXN1bHRbbWFwLmlkX3RyYWNraW5nIHx8ICdpZF90cmFja2luZyddID0gX21hbmdsZU9iaihwYXJhbXMuaWRfdHJhY2tpbmcsIGNvbnN0YW50LklEX01BUCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9tYW5nbGVBbmFseXRpY3MocGFyYW1zLCBtYXApIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAocGFyYW1zW3Byb3BdKSB7XG4gICAgICAgICAgICByZXN1bHRbbWFwW3Byb3BdXSA9IHBhcmFtc1twcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGg6IF9tYW5nbGVIZWFkZXIoZGF0YS5oZWFkZXIsIGNvbnN0YW50LkhlYWRlcl9NYXBfSCksXG4gICAgICBhOiBfbWFuZ2xlQW5hbHl0aWNzKGRhdGEuYW5hbHl0aWNzLCBjb25zdGFudC5IZWFkZXJfTWFwX0EpXG4gICAgfVxuICB9LFxuXG4gIGhhc093blByb3BlcnR5OiBoYXNPd25Qcm9wZXJ0eSxcblxuICBoYXNoOiBmdW5jdGlvbihzdHIsIHMpIHtcbiAgICB2YXIgZGVmX3YgPSAxMzE1NDIzOTExO1xuICAgIHZhciBobWFjID0gcyB8fCBkZWZfdiwgaSwgY2g7XG4gICAgZm9yIChpID0gc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgaG1hYyBePSAoKGhtYWMgPDwgNSkgKyBjaCArIChobWFjID4+IDIpKTtcbiAgICB9XG4gICAgdmFyIHJzID0gKGhtYWMgJiAweDdGRkZGRkZGKS50b1N0cmluZygxNik7XG4gICAgcmV0dXJuIHJzO1xuICB9LFxuXG4gIGNsb25lOiBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgc3RyO1xuICAgIHZhciBuZXdvYmogPSBBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IHt9OyAvL0ZpeCBvYmouY29udHJ1Y3RvciB0eXBlRXJyb3IgY29uc3RydWN0b3IgdW5kZWZpbmVkXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChKU09OICYmIEpTT04ucGFyc2UpIHtcbiAgICAgIHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7IC8v57O75YiX5YyW5a+56LGhXG4gICAgICBuZXdvYmogPSBKU09OLnBhcnNlKHN0cik7IC8v6L+Y5Y6fXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgIG5ld29ialtpXSA9IHR5cGVvZiBvYmpbaV0gPT09ICdvYmplY3QnID8gdGhpcy5jbG9uZShvYmpbaV0pIDogb2JqW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3b2JqO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IF87IiwiLypcbiAqIEZpbGU6IHV0aWxMb2dnZXIuanNcbiAqIFByb2plY3Q6IHF0X3F1aWNrYXBwX3Nka1xuICogICAgICBcbiAqIEF1dGhvcjog6ZKw5pitIChjaGFuZ2xpYW5nLmxjbEB1bWVuZy5jb20pXG4gKiAgICAgIFxuICogQ29weXJpZ2h0IC0gMjAyMiBBbGliYWJhIEdyb3VwIEhvbGRpbmcgTGltaXRlZC5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgTE9HX1BSRUZJWF9RVCA9ICdbUVRdIC0tICc7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIHZhciBfaW5zdGFuY2UgPSBudWxsO1xuICB2YXIgX2RlYnVnID0gZmFsc2U7XG4gIHZhciBfbG9nX3ByZWZpeCA9ICcnO1xuXG4gIGZ1bmN0aW9uIFVMb2coKSB7XG4gICAgdGhpcy5zZXREZWJ1ZyA9IGZ1bmN0aW9uIChkZWJ1Zykge1xuICAgICAgX2RlYnVnID0gZGVidWc7XG4gICAgICBfbG9nX3ByZWZpeCA9IExPR19QUkVGSVhfUVQ7ICAgICAgXG4gICAgfTtcblxuICAgIHRoaXMuaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfZGVidWcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IF9sb2dfcHJlZml4ICsgYXJndW1lbnRzWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBfbG9nX3ByZWZpeCArIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMudyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfZGVidWcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IF9sb2dfcHJlZml4ICsgYXJndW1lbnRzWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnYgPSBmdW5jdGlvbiAoKSB7ICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPSBfbG9nX3ByZWZpeCArIGFyZ3VtZW50c1swXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnRpcF93ID0gZnVuY3Rpb24gKG1zZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgJyVjICcgKyBfbG9nX3ByZWZpeCArIG1zZyxcbiAgICAgICAgICAnYmFja2dyb3VuZDpyZWQ7IHBhZGRpbmc6IDRweDsgcGFkZGluZy1yaWdodDogOHB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGNvbG9yOiAjZmZmOydcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnJlcGVhdCA9IGZ1bmN0aW9uKGNoYXIpIHtcbiAgICAgIHZhciByZXMgPSBjaGFyO1xuICAgICAgd2hpbGUgKHJlcy5sZW5ndGggPCA4Nikge1xuICAgICAgICByZXMgPSByZXMgKyBjaGFyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX2luc3RhbmNlID09PSBudWxsKSB7XG4gICAgICBfaW5zdGFuY2UgPSBuZXcgVUxvZygpO1xuICAgIH1cbiAgICByZXR1cm4gX2luc3RhbmNlO1xuICB9O1xufSkoKTsiLCJ2YXIgeCA9IHkgPT4geyB2YXIgeCA9IHt9OyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoeCwgeSk7IHJldHVybiB4OyB9XG52YXIgeSA9IHggPT4gKCkgPT4geFxubW9kdWxlLmV4cG9ydHMgPSB4KHsgW1wiZGVmYXVsdFwiXTogKCkgPT4gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3lzdGVtX2FwcF84ZmI2YjVmN19fW1wiZGVmYXVsdFwiXSB9KTsiLCJ2YXIgeCA9IHkgPT4geyB2YXIgeCA9IHt9OyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoeCwgeSk7IHJldHVybiB4OyB9XG52YXIgeSA9IHggPT4gKCkgPT4geFxubW9kdWxlLmV4cG9ydHMgPSB4KHsgW1wiZGVmYXVsdFwiXTogKCkgPT4gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3lzdGVtX2RldmljZV8yODNiOTdkNF9fW1wiZGVmYXVsdFwiXSB9KTsiLCJ2YXIgeCA9IHkgPT4geyB2YXIgeCA9IHt9OyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoeCwgeSk7IHJldHVybiB4OyB9XG52YXIgeSA9IHggPT4gKCkgPT4geFxubW9kdWxlLmV4cG9ydHMgPSB4KHsgW1wiZGVmYXVsdFwiXTogKCkgPT4gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3lzdGVtX2ZldGNoXzNjZDEzODQyX19bXCJkZWZhdWx0XCJdIH0pOyIsInZhciB4ID0geSA9PiB7IHZhciB4ID0ge307IF9fd2VicGFja19yZXF1aXJlX18uZCh4LCB5KTsgcmV0dXJuIHg7IH1cbnZhciB5ID0geCA9PiAoKSA9PiB4XG5tb2R1bGUuZXhwb3J0cyA9IHgoeyBbXCJkZWZhdWx0XCJdOiAoKSA9PiBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zeXN0ZW1fbmV0d29ya18yMGUwZWMyZF9fW1wiZGVmYXVsdFwiXSB9KTsiLCJ2YXIgeCA9IHkgPT4geyB2YXIgeCA9IHt9OyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoeCwgeSk7IHJldHVybiB4OyB9XG52YXIgeSA9IHggPT4gKCkgPT4geFxubW9kdWxlLmV4cG9ydHMgPSB4KHsgW1wiZGVmYXVsdFwiXTogKCkgPT4gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3lzdGVtX3JvdXRlcl9mMjc3ZWYyYl9fW1wiZGVmYXVsdFwiXSB9KTsiLCJ2YXIgeCA9IHkgPT4geyB2YXIgeCA9IHt9OyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoeCwgeSk7IHJldHVybiB4OyB9XG52YXIgeSA9IHggPT4gKCkgPT4geFxubW9kdWxlLmV4cG9ydHMgPSB4KHsgW1wiZGVmYXVsdFwiXTogKCkgPT4gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3lzdGVtX3N0b3JhZ2VfMzE1NjRjNzZfX1tcImRlZmF1bHRcIl0gfSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLypcbiAqIEZpbGU6IGluZGV4LmpzXG4gKiBQcm9qZWN0OiBxdF9xdWlja2FwcF9zZGtcbiAqICAgICAgXG4gKiBBdXRob3I6IOmSsOaYrSAoY2hhbmdsaWFuZy5sY2xAdW1lbmcuY29tKVxuICogICAgICBcbiAqIENvcHlyaWdodCAtIDIwMjIgQWxpYmFiYSBHcm91cCBIb2xkaW5nIExpbWl0ZWQuXG4gKi9cblxuaW1wb3J0IF8gZnJvbSAnLi9zcmMvdXRpbHMvZGFzaCc7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi9zcmMvdXRpbHMvY29uc3RzJztcbmltcG9ydCB1c2VyQ29uZmlnIGZyb20gJy4vc3JjL2NvcmUvVXNlckNvbmZpZyc7XG5pbXBvcnQgdWxvZyBmcm9tICdAbG9nJztcbmltcG9ydCBnZXRDb250ZXh0IGZyb20gJy4vc3JjL2NvcmUvZ2V0Q29udGV4dCc7XG5pbXBvcnQgQ29yZSBmcm9tICcuL3NyYy9jb3JlL2luZGV4JztcbmltcG9ydCBlbWl0dGVyIGZyb20gJy4vc3JjL2NvcmUvbWVzc2FnZXInO1xuXG5jbGFzcyBRVCB7XG4gIF9wYXJhbXMgPSB7J25hbWUnOiAncXQnfVxuICBfY29yZSA9IG51bGw7XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFFUKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NvcmUgPSBuZXcgQ29yZSgpO1xuICB9XG4gIGluaXQgKGN0eCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbG9jYWxDdHggPSBjdHggfHwgZ2V0Q29udGV4dCgpO1xuICAgICAgaWYgKGxvY2FsQ3R4KSB7XG4gICAgICAgIGxvY2FsQ3R4W3RoaXMuX3BhcmFtcy5uYW1lXSA9IFFULmdldEluc3RhbmNlKCk7XG4gICAgICAgIGlmIChsb2NhbEN0eC4kYXBwKSB7XG4gICAgICAgICAgbG9jYWxDdHguJGFwcFt0aGlzLl9wYXJhbXMubmFtZV0gPSBRVC5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9jb3JlLmluaXQoKTtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIGVtaXR0ZXIub24oZW1pdHRlci5tZXNzYWdlVHlwZS5TREtfSU5JVEVELCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoYXQuX2NvcmUucmVhZHkpIHtcbiAgICAgICAgICB1bG9nKCkudignUVQgU0RLIGluaXQgc3VjY2VzcyEhIScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVsb2coKS52KCdRVCBTREsgaW5pdCBmYWlsZWQsIGN1cnJlbnQgc2V0dGluZyBpczogXFxuJyk7XG4gICAgICAgICAgdWxvZygpLnYoSlNPTi5zdHJpbmdpZnkoUVQuZ2V0SW5zdGFuY2UoKS5fcGFyYW1zKSk7IFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdWxvZygpLncoJ3F0IHF1aWNrYXBwIGluaXQgZmFpbGVkIScpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhcmFtcyhhUGFyYW1zKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGlmIChhUGFyYW1zICYmIF8uaXNPYmplY3QoYVBhcmFtcykpIHtcbiAgICAgIHVsb2coKS5zZXREZWJ1ZyghIWFQYXJhbXMuc2hvd0xvZyk7XG4gICAgICBfLmVhY2hNYXAoYVBhcmFtcywgZnVuY3Rpb24oaywgdikge1xuICAgICAgICBzd2l0Y2ggKGspIHtcbiAgICAgICAgICBjYXNlIGNvbnN0YW50LlRSQUNLX0RPTUFJTjpcbiAgICAgICAgICAgIGlmIChfLmNoZWNrRG9tYWluKHYpKSB7XG4gICAgICAgICAgICAgIFFULmdldEluc3RhbmNlKCkuX3BhcmFtc1trXSA9IHY7XG4gICAgICAgICAgICAgIHVzZXJDb25maWcuc2V0SXRlbShjb25zdGFudC5UUkFDS19ET01BSU4sIHYpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgY29uc3RhbnQuQVBQS0VZOiBcbiAgICAgICAgICAgIGlmIChfLmNoZWNrQXBwS2V5KHYpKSB7XG4gICAgICAgICAgICAgIFFULmdldEluc3RhbmNlKCkuX3BhcmFtc1trXSA9IHY7XG4gICAgICAgICAgICAgIHVzZXJDb25maWcuYXBwS2V5ID0gdjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGNvbnN0YW50LklEVHlwZS51c2VyaWQ6IFxuICAgICAgICAgICAgdXNlckNvbmZpZy5wdWlkID0gdjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgY29uc3RhbnQuR2xvYmFsUHJvcGVydHk6XG4gICAgICAgICAgICB0aGF0LnNldEdsb2JhbFByb3BlcnR5KHYpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIFFULmdldEluc3RhbmNlKCkuX3BhcmFtc1trXSA9IHY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0SWRzKGlkcykge1xuICAgIGNvbnNvbGUubG9nKCd5ei0tLS0tY29yZScsIHRoaXMuX2NvcmUpO1xuICAgIFxuICAgIGlmICh0aGlzLl9jb3JlICYmIF8uaXNPYmplY3QoaWRzKSkge1xuICAgICAgdGhpcy5fY29yZS5zZXRJZFRyYWNraW5nKGlkcyk7XG4gICAgfVxuICB9XG5cbiAgYXBwTGF1bmNoKG9wdGlvbnMpIHsgICAgXG4gICAgaWYgKHRoaXMuX2NvcmUpIHtcbiAgICAgIHRoaXMuX2NvcmUuYXBwTGF1bmNoKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGFwcEhpZGUob3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9jb3JlKSB7XG4gICAgICB0aGlzLl9jb3JlLmFwcEhpZGUob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgc2VuZFBhZ2VTdGFydChwYXJhbXMpIHtcbiAgICBpZiAodGhpcy5fY29yZSkge1xuICAgICAgdGhpcy5fY29yZS5zZW5kUGFnZVN0YXJ0KHBhcmFtcyk7XG4gICAgfVxuICB9XG5cbiAgc2VuZFVzZXJQcm9maWxlKHBhcmFtcykge1xuICAgIGlmICh0aGlzLl9jb3JlKSB7XG4gICAgICB0aGlzLl9jb3JlLnNlbmRVc2VyUHJvZmlsZShwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRFdmVudChpZCwgcGFybWFzKSB7XG4gICAgaWYgKHRoaXMuX2NvcmUpIHtcbiAgICAgIHRoaXMuX2NvcmUuc2VuZEV2ZW50KGlkLCBwYXJtYXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEdsb2JhbFByb3BlcnR5KHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2NvcmUpIHtcbiAgICAgIHRoaXMuX2NvcmUuc2V0R2xvYmFsUHJvcGVydHkodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGVuZEdsb2JhbFByb3BlcnR5KHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2NvcmUpIHtcbiAgICAgIHRoaXMuX2NvcmUuYXBwZW5kR2xvYmFsUHJvcGVydHkodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldEdsb2JhbFByb3BlcnR5KCkge1xuICAgIGlmICh0aGlzLl9jb3JlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29yZS5nZXRHbG9iYWxQcm9wZXJ0eSgpO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBsb2dpbihwdWlkKSB7XG4gICAgdGhpcy5fY29yZS5sb2dpbihwdWlkKTtcbiAgfVxuXG4gIGxvZ29mZigpIHtcbiAgICB0aGlzLl9jb3JlLmxvZ29mZigpO1xuICB9XG59XG5jb25zdCBxdCA9IFFULmdldEluc3RhbmNlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHF0O1xuIl0sIm5hbWVzIjpbInVsb2ciLCJCYXNlUXVldWUiLCJtYXhDb3VudCIsIl9tYXhDb3VudCIsIml0ZW0iLCJzaXplIiwiZGVxdWV1ZSIsIl9pdGVtcyIsInB1c2giLCJzaGlmdCIsImxlbmd0aCIsImkiLCJ0b1N0cmluZyIsImNvbnN0YW50IiwiZXZlbnRNYW5hZ2VyIiwiXyIsIl9idWlsZEVrdiIsImRhdGEiLCJla3ZzIiwiZ2V0RWt2cyIsImFuYWx5dGljcyIsImNsb25lIiwiY2xlYXIiLCJidWlsZCIsImRhdGFUeXBlIiwiRGF0YVR5cGUiLCJFS1YiLCJzZGtDb25maWciLCJzdG9yYWdlIiwiQ2FjaGUiLCJjYiIsIl9kYXRhIiwidGhhdCIsImdldFN0b3JhZ2UiLCJrZXkiLCJRVF9SRU1PVEVfQ09ORklHIiwic3VjY2VzcyIsInJlc3AiLCJsc1JlbW90ZUNmZyIsIkpTT04iLCJwYXJzZSIsInVwZGF0ZVJlbW90ZUNvbmZpZyIsIl9sb2FkZWQiLCJpc0Z1bmN0aW9uIiwiZmFpbCIsImVyciIsInciLCJwcm9wcyIsInZhbHVlIiwiayIsImdldCIsImNvZGUiLCJzZXQiLCJpc1N0cmluZyIsInN0cmluZ2lmeSIsImluc3RhbmNlIiwiY2FjaGUiLCJnZXRJbnN0YW5jZSIsInVzZXJDb25maWciLCJhcHAiLCJyb3V0ZXIiLCJFdmVudCIsImlkIiwicHJvcGVydGllcyIsInRzIiwiRGF0ZSIsIm5vdyIsImN1c3AiLCJPYmplY3QiLCJjcmVhdGUiLCJpc09iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZm8iLCJnZXRJbmZvIiwic291cmNlIiwiZXh0cmEiLCJzY2VuZSIsInBhZ2UiLCJnZXRTdGF0ZSIsInVybCIsInBhdGgiLCJwYWdlX25hbWUiLCJQQUdFX05BTUUiLCJwYWdlX3RpdGxlIiwiUEFHRV9USVRMRSIsIm5hbWUiLCJncCIsImdsb2JhbHByb3BlcnR5IiwidHJhY2tfdHlwZSIsImlzRW1wdHlPYmplY3QiLCJFdmVudE1hbmFnZXIiLCJldmVudHNNYXAiLCJsZW4iLCJpc0FycmF5IiwibWVtb3J5RXZlbnRzIiwiZXZlbnRzIiwiX3Nlc3Npb25JZCIsImNvbmNhdCIsIl9tZW1vcnlFdmVudHMiLCJFS1ZTIiwiX2dldENhY2hlRXZlbnRzTGVuZ3RoIiwiRVZFTlRfTUFYX0NPVU5UIiwiX2J1aWxkRWt2cyIsImV2ZW50IiwidW5zaGlmdCIsIk1FTU9SWV9NQVhfQ09VTlQiLCJfY2FjaGVFdmVudHMiLCJfbm9TZXNzaW9uRXZlbnRzIiwic2lkIiwiYWRkRXZlbnQiLCJyZW1vdmUiLCJtZW1vcnlFdmVudHNMZW4iLCJkZXZpY2UiLCJwa2ciLCJuZXR3b3JrIiwiZ2V0RGV2aWNlSW5mbyIsInJlc3VsdCIsImNhbGxiYWNrIiwicmVzIiwiTnVtYmVyIiwid2luZG93V2lkdGgiLCJoIiwid2luZG93SGVpZ2h0IiwiYnJhbmQiLCJtb2RlbCIsImRldmljZV90eXBlIiwiZGV2aWNlVHlwZSIsIm9zIiwib3NUeXBlIiwib3NfdmVyc2lvbiIsIm9zVmVyc2lvbk5hbWUiLCJwaXhlbF9yYXRpbyIsInNjcmVlbkRlbnNpdHkiLCJyZXNvbHV0aW9uIiwibGFuZ3VhZ2UiLCJwbGF0Zm9ybV92ZXJzaW9uIiwicGxhdGZvcm1WZXJzaW9uTmFtZSIsInBsYXRmb3JtX3Nka192ZXJzaW9uIiwicGxhdGZvcm1WZXJzaW9uQ29kZSIsImRldmljZV9tb2RlbCIsImRldmljZV9icmFuZCIsImRldmljZV9uYW1lIiwiZGV2aWNlX21hbnVmYWN0dXJlciIsIm1hbnVmYWN0dXJlciIsInByb2R1Y3QiLCJnZXROZXR3b2tJbmZvIiwiZ2V0VHlwZSIsImFjY2VzcyIsInR5cGUiLCJjb21wbGV0ZSIsImdlbmVyYXRlIiwiSGVhZGVyIiwic2RrX3ZlcnNpb24iLCJ2ZXJzaW9uIiwic2RrX25hbWUiLCJwbGF0Zm9ybSIsInNka190eXBlIiwiYmFzZUhlYWRlciIsIl9oZWFkZXIiLCJhcHBLZXkiLCJpZFRyYWNraW5nIiwic2V0SXRlbSIsIklEX1RSQUNLSU5HIiwiaWRUeXBlIiwiSURfVFlQRSIsIl9pbnN0YW5jZSIsIkxvZ0hlYWRlciIsIkJvZHkiLCJyZXF1ZXN0IiwiUmVxdWVzdFF1ZXVlIiwiTUFYX1FVRVVFX0NPVU5UIiwiX2N1cnJlbnRUeXBlIiwib3B0aW9ucyIsImlzTG9hZGVkIiwiaGVhZGVyIiwibm9DYWNoZSIsIl9xdWV1ZSIsImVucXVldWUiLCJzZXRUaW1lb3V0IiwiX2VucXVldWVSZXF1ZXN0IiwiaXNGUiIsIlJlcXVlc3RzIiwiX3NlbmRRdWV1ZSIsIl9mYWlsUXVldWUiLCJfZmFpbFJlcXVlc3RzIiwiX3Byb2Nlc3NGYWlsUmVxdWVzdHMiLCJmb3JFYWNoIiwiY29tcGxldGVkQ2FsbGJhY2siLCJhZGQiLCJfc3RhcnRTZW5kIiwibG9hZFF1ZXVlIiwiX2ZhaWxlZFF1ZXVlIiwiaXRlbXMiLCJjYWNoZWQiLCJGYWlsZWRSZXF1ZXN0cyIsIm5ld0NhY2hlIiwicmVxdWVzdFF1ZXVlIiwibWFwRXZlbnRTYW1wbGVSYXRlcyIsImFyciIsImVhY2giLCJldmVudElkcyIsImVrdiIsImV2ZW50SWQiLCJzYW1wbGluZ1JhdGUiLCJTREtDb25maWdNYW5hZ2VyIiwiY29uZmlnIiwiY2ZnIiwiUVRfREVWSUNFX0VOQUJMRSIsImN1cnJlbnREZXZpY2VFbmFibGUiLCJldmVudFNhbXBsaW5nUmF0ZSIsIlFUX0VWRU5UX0xJTUlUUkFURVMiLCJVc2VyQ29uZmlnIiwiX3B1aWQiLCJfYXBwS2V5IiwiYXBwa2V5IiwiX2dsb2JhbFByb3BlcnR5IiwidiIsIl9jb25maWciLCJFdmVudEVtaXR0ZXIiLCJwcm90b3R5cGUiLCJvbiIsImN0eCIsImUiLCJmbiIsIm9uY2UiLCJzZWxmIiwibGlzdGVuZXIiLCJvZmYiLCJhcHBseSIsImFyZ3VtZW50cyIsImVtaXQiLCJzbGljZSIsImV2dEFyciIsImV2dHMiLCJsaXZlRXZlbnRzIiwiZ2V0Q29udGV4dCIsImdsb2JhbCIsIl9fcHJvdG9fXyIsIndpbmRvdyIsImVycm9yIiwiY3JlYXRlVVVJRCIsImdldFJhbmRvbVN0ciIsIlVVSURfU1VGRklYIiwiSURNYW5hZ2VyIiwiSURUeXBlIiwidXVpZCIsImluaXRVVUlEIiwiaW5pdFVzZXJJZCIsIl91dWlkIiwic2V0U3RvcmFnZSIsInVzZXJpZCIsIl91c2VySWQiLCJvcGVuSWQiLCJfb3BlbklkIiwidW5pb25JZCIsIl91bmlvbklkIiwiYWlkIiwiX2FkdmVydGlzaW5nSWQiLCJwaG9uZU51bWJlciIsIl9waG9uZU51bWJlciIsImFuZHJvaWRpZCIsIl9hbmRyb2lkSWQiLCJkaWQiLCJfZGV2aWNlSWQiLCJtYWMiLCJfbWFjIiwic2VyaWFsIiwiX3NlcmlhbCIsIm9haWQiLCJfb2FpZCIsIm1zZyIsImRlbGV0ZVN0b3JhZ2UiLCJfaWRUeXBlIiwiX3VzZXJpZCIsImFkdmVydGlzaW5naWQiLCJkZXZpY2VJZCIsImlkTWFuYWdlciIsImVtaXR0ZXIiLCJuZWVkTGltaXRTZW5kIiwiZXZlbnRjb2RlIiwiZXZlbnRMaW1pdFJhdGVzIiwiZ2V0SXRlbSIsImZpbmQiLCJyYW5kb20iLCJNYXRoIiwiY2VpbCIsIkNvcmUiLCJfaW5pdGVkIiwiaW5pdCIsImxvYWQiLCJjYWNoZUxvYWRlZCIsIm1lc3NhZ2VUeXBlIiwiU0RLX0lOSVRFRCIsInBhcmFtcyIsImRldmljZUVuYWJsZSIsInRlc3QiLCJjaGVja0V2ZW50Iiwic2VuZCIsIl9hcHBTdGFydFRpbWUiLCJzZW5kRXZlbnQiLCJBUFBfU1RBUlQiLCJlbmRUaW1lIiwiZHVyYXRpb24iLCJBUFBfRU5EIiwiUEFHRV9TVEFSVCIsImFzc2lnbiIsInBhcm1hcyIsIlVTRVJfUFJPRklMRSIsIm5lc3RlZCIsImVhY2hNYXAiLCJnbG9iYWxQcm9wZXJ0eSIsInB1aWQiLCJzZXRVc2VySWQiLCJyZW1vdmVVc2VySWQiLCJpZHMiLCJvcGVuaWQiLCJzZXRPcGVuSWQiLCJ1bmlvbmlkIiwic2V0VW5pb25JZCIsImFkcm9pZGlkIiwic2V0QW5kcm9pZElkIiwic2V0QWR2ZXJ0aXNpbmdJZCIsInBob25lbnVtYmVyIiwic2V0UGhvbmVudW0iLCJzZXREZXZpY2VJZCIsInNldE1hYyIsInNldFNlcmlhbCIsInNldE9haWQiLCJQQVJBTVNfTE9BREVEIiwibmF0aXZlRmV0Y2giLCJnZXRMb2dVUkwiLCJ0cmFja0RvbWFpbiIsIlRSQUNLX0RPTUFJTiIsImNoZWNrRG9tYWluIiwiZml4RG9tYWluIiwiZ2V0UmVtb3RlQ2ZnVVJMIiwiaW1wcmludFZlcnNpb24iLCJzdWNjZXNzQ2FsbGJhY2siLCJmYWlsQ2FsbGJhY2siLCJjb21wbGV0ZUNhbGxiYWNrIiwic2V0SWRUeXBlIiwiZ2V0SURUeXBlIiwic2V0SWRUcmFja2luZyIsImdldElEVHJhY2tpbmciLCJhY3RpdmVfdXNlciIsInRyYWNlSWQiLCJhcHBfdmVyc2lvbiIsInZlcnNpb25OYW1lIiwiYXBwaWQiLCJwYWNrYWdlTmFtZSIsImFwcF9zb3VyY2VfdHlwZSIsIm1hbmdsZURhdGEiLCJtYW5nbGUiLCJyZXF1ZXN0RGF0YSIsImJhc2U2NEVuY29kZSIsImZldGNoIiwibWV0aG9kIiwicmVzcG9uc2VUeXBlIiwic3RhdHVzQ29kZSIsInNhdmVJbXByaW50IiwiaXNUaW1lb3V0IiwiZmV0Y2hJbXByaW50VmVyc2lvbiIsImltcHYiLCJpbXByaW50IiwiUVRfSU1QUklOVF9WRVJTSU9OIiwibG9jYWxJbXB2IiwiQVBQS0VZIiwic2hvd0xvZyIsIlBBR0VfRU5EIiwiRUtWX1NIQVJFIiwiUEFHRV9DT05GSUciLCJDVVJSRU5UX1NFU1NJT04iLCJTRVNTSU9OX0lOVEVSVkFMIiwiTUFYX1JFUVVFU1RfVElNRU9VVCIsIk1BWF9FVkVOVElEX0xFTkdUSCIsIk1BWF9QUk9QRVJUWV9LRVlfTEVOR1RIIiwiTUFYX1BST1BFUlRZX0tFWVNfQ09VTlQiLCJBUFBfVkVSU0lPTiIsIklNUFJJTlQiLCJHbG9iYWxQcm9wZXJ0eSIsIklEX01BUCIsImFuZHJvaWRfaWQiLCJhZHZlcnRpc2luZ0lkIiwiSGVhZGVyX01hcF9IIiwiaWRfdHlwZSIsImlkX3RyYWNraW5nIiwiZGVidWdJZCIsIkhlYWRlcl9NYXBfQSIsIkFycmF5UHJvdG8iLCJBcnJheSIsIkZ1bmNQcm90byIsIkZ1bmN0aW9uIiwiT2JqUHJvdG8iLCJvcmlnaW5Jc0FycmF5Iiwib3JpZ2luRnVuY0JpbmQiLCJiaW5kIiwib3JpZ2luRm9yRWFjaCIsIm9yaWdpbkluZGV4T2YiLCJpbmRleE9mIiwiX21hbmdsZU9iaiIsIm9iaiIsIm1hcCIsImZ1bmMiLCJ0IiwiaXNBcmd1bWVudHMiLCJ0b0FycmF5Iiwic3RyIiwiaXNVbmRlZmluZWQiLCJ0YXJnZXQiLCJpc0RhdGUiLCJpc0Jvb2xlYW4iLCJpc051bWJlciIsIlN0cmluZyIsImlzSlNPTlN0cmluZyIsInV0ZjhFbmNvZGUiLCJuIiwiciIsImEiLCJyZXBsYWNlIiwicyIsImNoYXJDb2RlQXQiLCJvIiwiZnJvbUNoYXJDb2RlIiwic3Vic3RyaW5nIiwiYyIsInUiLCJmIiwiY2hhckF0Iiwiam9pbiIsImF0dHIiLCJsIiwicnMiLCJrZXlzIiwiazEiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwidGFyZ2V0T2JqIiwiYXJnc09iaiIsInRvIiwiaW5kZXgiLCJuZXh0U291cmNlIiwibmV4dEtleSIsIm1hdGNoIiwicmVnIiwiUmVnRXhwIiwibWF0Y2hlZCIsInRpcF93IiwicmVwZWF0Iiwic3RyaW5nZnkiLCJyZXNlcnZlV29yZHMiLCJyZXNlcnZlV29yZE1hcCIsIndvcmQiLCJjb3VudCIsImNoZWNrQXBwS2V5IiwicG9zIiwicm91bmQiLCJfbWFuZ2xlSGVhZGVyIiwiX21hbmdsZUFuYWx5dGljcyIsInByb3AiLCJoYXNoIiwiZGVmX3YiLCJobWFjIiwiY2giLCJuZXdvYmoiLCJMT0dfUFJFRklYX1FUIiwiX2RlYnVnIiwiX2xvZ19wcmVmaXgiLCJVTG9nIiwic2V0RGVidWciLCJkZWJ1ZyIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiY2hhciIsIlFUIiwiX2NvcmUiLCJsb2NhbEN0eCIsIl9wYXJhbXMiLCIkYXBwIiwicmVhZHkiLCJhUGFyYW1zIiwic2V0R2xvYmFsUHJvcGVydHkiLCJhcHBMYXVuY2giLCJhcHBIaWRlIiwic2VuZFBhZ2VTdGFydCIsInNlbmRVc2VyUHJvZmlsZSIsImFwcGVuZEdsb2JhbFByb3BlcnR5IiwiZ2V0R2xvYmFsUHJvcGVydHkiLCJsb2dpbiIsImxvZ29mZiIsInF0Il0sInNvdXJjZVJvb3QiOiIifQ==
=======
import*as e from"@system.app";import*as t from"@system.router";import*as n from"@system.storage";import*as i from"@system.device";import*as r from"@system.network";import*as a from"@system.fetch";var s={d:function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}};s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};s.d(o,{Z:function(){return pe}});var u={TRACK_DOMAIN:"trackDomain",APPKEY:"appKey",showLog:"showLog",APP_START:"$$_app_start",APP_END:"$$_app_end",PAGE_START:"$$_page_start",PAGE_END:"$$_page_end",USER_PROFILE:"$$_user_profile",EKV_SHARE:"$$_share",PAGE_TITLE:"page_title",PAGE_NAME:"page_name",EKVS:"ekvs",PAGE_CONFIG:"pageConfig",EVENT_MAX_COUNT:1e4,MEMORY_MAX_COUNT:1,CURRENT_SESSION:"current_session",SESSION_INTERVAL:3e4,MAX_QUEUE_COUNT:50,MAX_REQUEST_TIMEOUT:5e3,MAX_EVENTID_LENGTH:128,MAX_PROPERTY_KEY_LENGTH:128,MAX_PROPERTY_KEYS_COUNT:100,ID_TRACKING:"id_tracking",ID_TYPE:"id_type",APP_VERSION:"app_version",IMPRINT:"imprint",Requests:"Requests",FailedRequests:"failedRequests",QT_REMOTE_CONFIG:"QT_REMOTE_CONFIG",QT_IMPRINT_VERSION:"QT_IMPRINT_VERSION",QT_DEVICE_ENABLE:"deviceEnable",QT_EVENT_LIMITRATES:"QT_EVENT_LIMITRATES",GlobalProperty:"globalproperty",UUID_SUFFIX:"ud",DEBUGID:"debugId",DataType:{EKV:"ekv"},IDType:{uuid:"uuid",userId:"userId",openId:"openId",unionId:"unionId",androidId:"androidId",advertisingId:"advertisingId",phonenumber:"phonenumber",mac:"mac",oaid:"oaid",serial:"serial",deviceId:"deviceId"},ID_MAP:{uuid:"ud",unionid:"und",openid:"od",android_id:"android_id",advertisingId:"advertising_id",phonenumber:"phonenumber"},Header_Map_H:{sdk_type:"sdt",language:"lang",device_type:"dt",os_version:"ov",os:"os",appKey:"ak",sdk_version:"sv",resolution:"rl",pixel_ratio:"pr",id_type:"it",id_tracking:"itr",access:"ac",device_manufacturer:"dmf",device_model:"dm",device_name:"dn",platform_version:"pv",platform_sdk_version:"psv",device_brand:"db",debugId:"dk"},Header_Map_A:{ekvs:"e",active_user:"active_user"}},c=function(){var e=null,t=!1,n="";function i(){this.setDebug=function(e){t=e,n="[QT] -- "},this.i=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]),console.info.apply(console,arguments)}catch(e){}},this.e=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]),console.error.apply(console,arguments)}catch(e){}},this.w=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]),console.warn.apply(console,arguments)}catch(e){}},this.v=function(){try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]),console.warn.apply(console,arguments)}catch(e){}},this.tip_w=function(e){try{console.log("%c "+n+e,"background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;")}catch(e){}},this.repeat=function(e){for(var t=e;t.length<86;)t+=e;return t}}return function(){return null===e&&(e=new i),e}}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var f=Array.prototype,d=Function.prototype,p=Object.prototype,h=f.slice,_=p.toString,y=p.hasOwnProperty,v=Array.isArray;function g(e,t){var n={};for(var i in e)t[i]?n[t[i]]=e[i]:n[i]=e[i];return n}d.bind,f.forEach,f.indexOf;var m={isFunction:function(e){try{return/^\s*\bfunction\b/.test(e)}catch(e){return!1}},isArray:v||function(e){return"[object Array]"===_.call(e)},isArguments:function(e){return!(!e||!y.call(e,"callee"))},toArray:function(e){return e&&e.toArray?e.toArray():this.isArray(e)||this.isArguments(e)?h.call(e):[]},isString:function(e){return"[object String]"===Object.prototype.toString.call(e)},isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"==_.call(e)},isBoolean:function(e){return"[object Boolean]"==_.call(e)},isNumber:function(e){return"[object Number]"==_.call(e)&&/[\d\.]+/.test(String(e))},isJSONString:function(e){try{JSON.parse(e)}catch(e){return!1}return!0},utf8Encode:function(e){var t,n,i,r,a="";for(t=n=0,i=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,r=0;r<i;r++){var s=e.charCodeAt(r),o=null;s<128?n++:o=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),null!==o&&(n>t&&(a+=e.substring(t,n)),a+=o,t=n=r+1)}return n>t&&(a+=e.substring(t,e.length)),a},base64Encode:function(e){var t,n,i,r,a,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=0,u=0,c="",l=[];if(!e)return e;e=this.utf8Encode(e);do{t=(a=e.charCodeAt(o++)<<16|e.charCodeAt(o++)<<8|e.charCodeAt(o++))>>18&63,n=a>>12&63,i=a>>6&63,r=63&a,l[u++]=s.charAt(t)+s.charAt(n)+s.charAt(i)+s.charAt(r)}while(o<e.length);switch(c=l.join(""),e.length%3){case 1:c=c.slice(0,-2)+"==";break;case 2:c=c.slice(0,-1)+"="}return c},each:function(e,t){if(this.isObject(e)&&void 0===e.length)for(var n in e)y.call(e,n)&&t(n,e[n],e);else{var i,r=e.length;for(i=0;i<r&&"break"!==t(e[i],i);i++);}},eachMap:function(e,t){if(Object&&Object.keys)for(var n=Object.keys(e),i=n.length,r=0;r<i;r++){var a=n[r];t&&t(a,e[a])}else for(var s in e)t&&t(s,e[s])},isObject:function(e){if("object"!==l(e)||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t},isEmptyObject:function(e){try{if(!e)return!0;if("function"==typeof Object.keys&&0===Object.keys(e).length)return!0;for(var t in e)if(y.call(e,t))return!1;return!0}catch(e){return!1}},assign:function(e,t){return"function"!=typeof Object.assign?function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(null!==i)for(var r in i)y.call(i,r)&&(t[r]=i[r])}return t}(e,t):Object.assign({},e,t)},find:function(e,t){try{return e.find(t)}catch(i){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}},checkDomain:function(e){var t=new RegExp(/^((http|https|''):\/\/)?([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:[0-9]{1,5})*)$/),n=((e||"").match(t)||[])[0];return!(!e||!n)||(c().tip_w(c().repeat("!")),c().tip_w("trackDomain error, please check trackDomain setting, current value is: "+e||0),c().tip_w("we accept these three patterns:"),c().tip_w("eg1: https://test-qtracking-xxx.com:port, port is optional"),c().tip_w("eg2: http://test-qtracking-xxx.com:port, port is optional"),c().tip_w("eg3: test-qtracking-xxx.com:port, port is optional"),c().tip_w(c().repeat("!")),!1)},checkEvent:function(e,t){if(!e||"string"!=typeof e)return c().w("eventcode is invalid, id =",e||"'' event properties = ",JSON.stringfy(t)),!1;var n=["id","du"],i={};if(n.forEach((function(e){i[e]=1})),i[e])return c().e("eventcode has conflict with reservewords: "+n.join(",")),!1;if(e.length>u.MAX_EVENTID_LENGTH)return c().e("The maximum length of eventcode shall not exceed "+u.MAX_EVENTID_LENGTH),!1;if(t&&("object"!==l(t)||this.isArray(t))&&"string"!=typeof t)return c().e("please check trackEvent properties. properties should be string or object(not include Array)"),!1;if(this.isArray(t)){var r=0;for(var a in t)if({}.hasOwnProperty.call(t,a)){if(a.length>u.MAX_PROPERTY_KEY_LENGTH)return c().e("The maximum length of property key shall not exceed "+u.MAX_PROPERTY_KEY_LENGTH),!1;if(r>=u.MAX_PROPERTY_KEYS_COUNT)return c().e("The maximum count of properties shall not exceed "+u.MAX_PROPERTY_KEYS_COUNT),!1;if(i[a])return c().e("property key has conflict with reserveWords: "+n.join(",")),!1;r+=1}}return!0},fixDomain:function(e){return-1!==e.indexOf("https://")||-1!==e.indexOf("http://")?e:(e=(/^\/\//.test(e)?"":"//")+e,/(\d+\.){3,}\d+/.test(e)?"http:"+e:"https:"+e)},checkAppKey:function(e){if(e&&this.isString(e))return e;c().tip_w(c().repeat("!")),c().tip_w("appKey error, please check appKey setting!"),c().tip_w(c().repeat("!"))},getRandomStr:function(e){for(var t="",n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],i=0;i<Number(e);i++)t+=n[Math.round(Math.random()*(n.length-1))];return t},mangle:function(e){return{h:(t=e.header,n=u.Header_Map_H,i=g(t,n),t&&t.id_tracking&&(i[n.id_tracking||"id_tracking"]=g(t.id_tracking,u.ID_MAP)),i),a:function(e,t){var n={};if(e)for(var i in e)e[i]&&(n[t[i]]=e[i]);return n}(e.analytics,u.Header_Map_A)};var t,n,i},hasOwnProperty:y,hash:function(e,t){var n,i=t||1315423911;for(n=e.length-1;n>=0;n--)i^=(i<<5)+e.charCodeAt(n)+(i>>2);return(2147483647&i).toString(16)},clone:function(e){var t,n=Array.isArray(e)?[]:{};if("object"===l(e)){if(JSON&&JSON.parse)t=JSON.stringify(e),n=JSON.parse(t);else for(var i in e)n[i]="object"===l(e[i])?this.clone(e[i]):e[i];return n}}},b=m;function I(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E,T,O=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"_globalProperty",{}),k(this,"_appKey",""),k(this,"_puid",""),k(this,"_config",{}),k(this,"_pageConfig",{}),k(this,"_debugId",void 0)}var t,n,i;return t=e,i=[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}],(n=[{key:"puid",get:function(){return this._puid},set:function(e){this._puid=e}},{key:"appKey",get:function(){return this._appKey},set:function(e){this._appKey=e}},{key:"globalproperty",get:function(){return this._globalProperty||{}},set:function(e){this._globalProperty=e}},{key:"debugId",get:function(){return this._debugId},set:function(e){this._debugId=e}},{key:"setItem",value:function(e,t){this._config[e]=t}},{key:"getItem",value:function(e){return this._config[e]}}])&&I(t.prototype,n),i&&I(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().getInstance(),w=(E={default:()=>e.default},T={},s.d(T,E),T),S=(e=>{var t={};return s.d(t,e),t})({default:()=>t.default});function P(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function A(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var N=A((function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.ts=Date.now(),this.cusp=Object.create(null),b.isObject(n))for(var i in n)b.hasOwnProperty.call(n,i)&&(-1!=["ts",u.PAGE_NAME,u.PAGE_TITLE].indexOf(i)?this[i]=n[i]:this.cusp[i]=n[i]);var r=w.default.getInfo();r&&r.source&&r.source.extra&&r.source.extra.type&&(this.scene=r.source.extra.type);var a=S.default.getState();this.url=b.isObject(a)?a.path:"",this.page_name||(this.page_name=this.url),this.page_title||(this.page_title=b.isObject(a)?a.name:""),this.gp=O.globalproperty,this.track_type="0",c().i("before send eventcode =",this.id),b.isEmptyObject(this.cusp)||c().i("event properties = ",this)}));function R(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),D(this,"_maxCount",0),D(this,"_items",[]),this._maxCount=t||0}var t,n;return t=e,(n=[{key:"enqueue",value:function(e){"number"==typeof this._maxCount&&this.size()>=this._maxCount&&this.dequeue(),this._items.push(e)}},{key:"dequeue",value:function(){return this._items.shift()}},{key:"front",value:function(){return this._items[0]}},{key:"isEmpty",value:function(){return 0===this._items.length}},{key:"clear",value:function(){this._items.length=0}},{key:"size",value:function(){return this._items.length}},{key:"items",value:function(){return this._items}},{key:"print",value:function(){c().i(this._items.toString())}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var M=function(){function e(){var t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n={deviceEnable:!0},(t="config")in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n}var t,n,i;return t=e,i=[{key:"getInstance",value:function(){return this._instance||(this._instance=new e),this._instance}}],(n=[{key:"setItem",value:function(e,t){this.config[e]=t}},{key:"getItem",value:function(e){return this.config[e]}},{key:"getALL",value:function(){return this.config}},{key:"updateRemoteConfig",value:function(e){var t,n;e&&(b.hasOwnProperty.call(e,"currentDeviceEnable")&&this.setItem(u.QT_DEVICE_ENABLE,!!e.currentDeviceEnable),b.hasOwnProperty.call(e,"eventSamplingRate")&&b.isArray(e.eventSamplingRate)&&e.eventSamplingRate.length>0&&this.setItem(u.QT_EVENT_LIMITRATES,(t=e.eventSamplingRate,n=[],b.each(t,(function(e){e.eventIds&&e.eventIds.length>0&&b.each(e.eventIds,(function(t){n.push({eventId:t,samplingRate:e.samplingRate})}))})),n)))}}])&&C(t.prototype,n),i&&C(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().getInstance(),q=(e=>{var t={};return s.d(t,e),t})({default:()=>n.default});function U(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),K(this,"_name",""),K(this,"_data",null),K(this,"_loaded",!1)}var t,n,i;return t=e,i=[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}],(n=[{key:"load",value:function(e){if(this._data)e&&e();else{var t=this;this.getStorage({key:u.QT_REMOTE_CONFIG,success:function(n){if(n){var i=JSON.parse(n);M.updateRemoteConfig(i)}t._loaded=!0,t._data={},b.isFunction(e)&&e(t._loaded)},fail:function(n){c().w("cache loaded failed, errmsg = ",n),b.isFunction(e)&&e(t._loaded)}})}}},{key:"set",value:function(e){var t=e.key,n=e.value;this._data&&(this._data[t]=n)}},{key:"get",value:function(e){return(this._data||{})[e]}},{key:"isLoaded",value:function(){return this._loaded}},{key:"remove",value:function(e){this._data&&this._data[e]&&delete this._data[e]}},{key:"getAll",value:function(){return this._data}},{key:"clear",value:function(){this._data=null}},{key:"has",value:function(e){return!!this.get(e)}},{key:"getStorage",value:function(e){var t=e.key,n=e.success,i=e.fail;q.default.get({key:t,success:function(e){b.isFunction(n)&&n(e)},fail:function(e,t){c().w("get storage failed, errcode = ",t),b.isFunction(i)&&i(e)}})}},{key:"setStorage",value:function(e){var t=e.key,n=e.value,i=e.success,r=e.fail;q.default.set({key:t,value:b.isString(n)?n:JSON.stringify(n),success:function(e){b.isFunction(i)&&i(e)},fail:function(e,t){c().w("set storage failed, errcode = ".concat(t)),b.isFunction(r)&&r(e)}})}},{key:"deleteStorage",value:function(e){var t=e.key,n=e.success;q.default.delete({key:t,success:n})}}])&&U(t.prototype,n),i&&U(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().getInstance();function G(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,"_memoryEvents",[]),F(this,"_noSessionEvents",[]),F(this,"_sessionId","sessionid")}var t,n,i;return t=e,i=[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}],(n=[{key:"_getCacheEventsLength",value:function(e){var t=0;for(var n in e)b.isArray(e[n])&&(t+=e[n].length);return t}},{key:"_buildEkvs",value:function(e,t){var n=(e=e||{})[this._sessionId];return b.isArray(n)&&n.length?e[this._sessionId]=n.concat(t):e[this._sessionId]=[].concat(t),e}},{key:"_cacheEvents",value:function(){if(this._memoryEvents.length){var e=x.get(u.EKVS);this._getCacheEventsLength(e)+this._memoryEvents.length<=u.EVENT_MAX_COUNT&&(e=this._buildEkvs(e,this._memoryEvents),x.set(u.EKVS,e))}}},{key:"addEvent",value:function(e){this._sessionId?(this._memoryEvents.unshift(e),this._memoryEvents.length>u.MEMORY_MAX_COUNT&&(this._cacheEvents(this._sessionId),this._memoryEvents.length=0)):(c().w("session id is null: ",this._sessionId),this._noSessionEvents.unshift(e))}},{key:"setSessionId",value:function(e){if(this._sessionId=e||"sessionid",b.isArray(this._noSessionEvents)&&this._noSessionEvents.length){for(var t=0;t<this._noSessionEvents.length;t++)this.addEvent(this._noSessionEvents[t]);this._noSessionEvents.length=0}}},{key:"getEkvs",value:function(){var e=x.get(u.EKVS);return this._memoryEvents&&this._memoryEvents.length&&(e=this._buildEkvs(e,this._memoryEvents)),e}},{key:"clear",value:function(){x.remove(u.EKVS),this._memoryEvents=[],this._noSessionEvents=[]}},{key:"getEkvsLen",value:function(){var e=(x.get(u.EKVS)||{})[this._sessionId]||[],t=this._memoryEvents?this._memoryEvents.length:0;return e.length+t}}])&&G(t.prototype,n),i&&G(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().getInstance(),Q=function(e){var t=null;return e===u.DataType.EKV&&(t=function(){var e=null,t=L.getEkvs();return t&&(e={analytics:{ekvs:b.clone(t)}},L.clear()),e}()),t},V=(e=>{var t={};return s.d(t,e),t})({default:()=>i.default}),H=(e=>{var t={};return s.d(t,e),t})({default:()=>r.default});function X(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){V.default.getInfo({success:function(n){var i=Number(n.windowWidth),r=Number(n.windowHeight),a=n.brand,s=n.model;e.device_type=n.deviceType,e.os=n.osType,e.os_version=n.osVersionName,e.pixel_ratio=n.screenDensity,e.resolution=i>r?i+"*"+r:r+"*"+i,e.language=n.language,e.platform_version=n.platformVersionName,e.platform_sdk_version=n.platformVersionCode,e.device_model=s,e.device_brand=a,e.device_name=s,e.device_manufacturer=n.manufacturer,e.product=n.product,t&&b.isFunction(t)&&t(e)},fail:function(n){c().i("quickapp get deviceInfo failed, errmsg=",n),t&&b.isFunction(t)&&t(e)}})}var J=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Y(this,"_header",{}),Y(this,"_loaded",!1),Y(this,"baseHeader",{sdk_version:"1.0.0",sdk_name:"qt_quickapp_sdk",platform:"quickapp",sdk_type:"quickappmp"})}var t,n,i;return t=e,i=[{key:"getInstance",value:function(){return this._instance||(this._instance=new e),this._instance}}],(n=[{key:"init",value:function(e){var t,n,i=this;t=this.baseHeader,n=function(t){i._header=t,i._loaded=!0,i._header.appKey=O.appKey,b.isFunction(e)&&e()},t.device_type="Phone",function(e,t){H.default.getType({success:function(t){e.access=t.type},fail:function(e){c().i("quickapp get network info failed. errmsg=",e)},complete:function(){$&&$(e,t)}})}(t,n)}},{key:"isLoaded",value:function(){return this._loaded}},{key:"get",value:function(){return this._header}},{key:"setItem",value:function(t,n){e.getInstance()._header[t]=n}},{key:"getItem",value:function(t){return e.getInstance()._header[t]}},{key:"setIdTracking",value:function(e){this.setItem(u.ID_TRACKING,e)}},{key:"setIdType",value:function(e){this.setItem(u.ID_TYPE,e)}}])&&X(t.prototype,n),i&&X(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().getInstance(),B=(e=>{var t={};return s.d(t,e),t})({default:()=>a.default});function z(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(){return b.getRandomStr(10)+Date.now()+b.getRandomStr(7)+u.UUID_SUFFIX}var ee=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Z(this,"_idType",u.IDType.uuid),Z(this,"_uuid",""),Z(this,"_userId",""),Z(this,"_openId",""),Z(this,"_unionId",""),Z(this,"_advertisingId",""),Z(this,"_phoneNumber",""),Z(this,"_androidId",""),Z(this,"_deviceId",""),Z(this,"_mac",""),Z(this,"_serial",""),Z(this,"_oaid","")}var t,n,i;return t=e,i=[{key:"getInstance",value:function(){return this._instance||(this._instance=new e),this._instance}}],(n=[{key:"init",value:function(){this.initUUID(),this.initUserId()}},{key:"initUUID",value:function(){var e=this;x.getStorage({key:u.IDType.uuid,success:function(t){t?e._uuid=t:(e._uuid=W(),x.setStorage({key:u.IDType.uuid,value:e._uuid}))},fail:function(){e._uuid=W(),x.setStorage({key:u.IDType.uuid,value:e._uuid})}})}},{key:"initUserId",value:function(){var e=this;x.getStorage({key:u.IDType.userId,success:function(t){e._userId=t}})}},{key:"setUserId",value:function(t){e.getInstance()._userId=t,x.set({key:u.IDType.userId,value:t}),x.setStorage({key:u.IDType.userId,value:t,success:function(){c().i("login success, puid = ",t)},fail:function(e){c().w("login failed, err = ",e)}})}},{key:"setOpenId",value:function(e){this._openId=e}},{key:"setUnionId",value:function(e){this._unionId=e}},{key:"setAdvertisingId",value:function(e){this._advertisingId=e}},{key:"setPhonenum",value:function(e){this._phoneNumber=e}},{key:"setAndroidId",value:function(e){this._androidId=e}},{key:"setDeviceId",value:function(e){this._deviceId=e}},{key:"setMac",value:function(e){this._mac=e}},{key:"setSerial",value:function(e){this._serial=e}},{key:"setOaid",value:function(e){this._oaid=e}},{key:"removeUserId",value:function(e){this._userId="",x.deleteStorage({key:u.IDType.userId,success:function(){e&&c().i(e)}})}},{key:"setIDType",value:function(e){this._idType=e}},{key:"getIDType",value:function(){return this._idType}},{key:"getIDTracking",value:function(){var t={};return this._uuid&&(t.uuid=this._uuid),e.getInstance()._userId&&(t.userid=e.getInstance()._userid),e.getInstance()._advertisingId&&(t.advertisingid=e.getInstance()._advertisingId),e.getInstance()._openId&&(t.openId=e.getInstance()._openId),e.getInstance()._unionId&&(t.unionId=e.getInstance()._unionId),e.getInstance()._phoneNumber&&(t.phoneNumber=e.getInstance()._phoneNumber),e.getInstance()._androidId&&(t.androidid=e.getInstance()._phoneNumber),e.getInstance()._deviceId&&(t.deviceId=e.getInstance()._deviceId),e.getInstance()._mac&&(t.mac=e.getInstance()._mac),e.getInstance()._serial&&(t.serial=e.getInstance()._serial),e.getInstance()._oaid&&(t.oaid=e.getInstance()._oaid),t}}])&&z(t.prototype,n),i&&z(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().getInstance();function te(e){var t,n,i=(t=e,n=O.getItem(u.TRACK_DOMAIN),b.fixDomain(n)+t);B.default.fetch({url:i,method:"GET",responseType:"json",success:function(e){e.data&&e.data.data&&(M.updateRemoteConfig(e.data.data),x.setStorage({key:u.QT_REMOTE_CONFIG,value:e.data.data}))},fail:function(e){c().w("remote configuration request failed, errmsg:",e)}})}function ne(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ie(this,"_instance",null),ie(this,"_running",!1),ie(this,"_currentType",""),ie(this,"_failRequests",[]),ie(this,"_failQueue",new j(u.MAX_QUEUE_COUNT)),ie(this,"_queue",new j(u.MAX_QUEUE_COUNT)),this._currentType=t}var t,n,i;return t=e,i=[{key:"getInstance",value:function(t){return this._instance||(this._instance=new e(t)),this._instance}}],(n=[{key:"_enqueueRequest",value:function(e,t,n){var i=this;if(J.isLoaded()){t=t||{};var r=Q(e);r&&(r.header=J,r.noCache=t.noCache,this._queue.enqueue(r)),b.isFunction(n)&&n()}else setTimeout((function(){i._enqueueRequest(e)}),100)}},{key:"_sendQueue",value:function(e,t){var n=(e===u.Requests?this._queue:this._failQueue).dequeue(),i=this;n?function(e,t,n,i){J.setIdType(ee.getIDType()),J.setIdTracking(ee.getIDTracking()),e.analytics&&(e.analytics.active_user={puid:ee._userId||O.puid||""}),e.header=b.assign(J.get(),{miniappDebugId:O.debugId,traceId:b.getRandomStr(10)+Date.now()+b.getRandomStr(9),app_version:w.default.getInfo().versionName,appid:w.default.getInfo().packageName,app_source_type:w.default.getInfo().source.type});var r=b.mangle(e),a=b.base64Encode(JSON.stringify(r)),s=function(){var e=O.getItem(u.TRACK_DOMAIN);if(b.checkDomain(e))return b.fixDomain(e)+"/wxm_logs"}();B.default.fetch({url:s,header:{"Content-Type":"qappmp/json","Msg-Type":"qappmp/json"},data:a,method:"POST",responseType:"json",success:function(i){200===i.code?(c().i("data send success:",JSON.stringify(e)),function(e){try{var t=e.imprintVersion;x.getStorage({key:u.QT_IMPRINT_VERSION,success:function(e){e&&b.isString(e)?t&&t!==e?(te(t),x.setStorage({key:u.QT_IMPRINT_VERSION,value:t})):x.getStorage({key:u.QT_REMOTE_CONFIG,success:function(e){if(e){var t=JSON.parse(e);M.updateRemoteConfig(t)}}}):(t&&te(t),t&&x.setStorage({key:u.QT_IMPRINT_VERSION,value:t}))},fail:function(e){c().w("save imprint failed!, errmsg = ",e)}})}catch(e){c().w("save imprint failed, errmsg = ",e)}}(i.data||{}),b.isFunction(t)&&t(i)):(c().w("data send failed:",a),b.isFunction(n)&&n())},fail:function(e){c().w("timeout: ",a),b.isFunction(n)&&n()},complete:function(){b.isFunction(i)&&i()}})}(n,(function(){i._sendQueue(e,t)}),(function(){n&&!n.noCache&&i._failRequests.push(n),i._sendQueue(e,t)})):(i._processFailRequests(),t&&t())}},{key:"_processFailRequests",value:function(){var e=this;this._failRequests.forEach((function(t){e._queue.enqueue(t)})),this._failRequests.length=0}},{key:"_startSend",value:function(e,t){this._sendQueue(e,(function(){b.isFunction(t)&&t()}))}},{key:"send",value:function(e,t,n){var i=this;e?this.add(e,t,(function(){i._startSend(i._currentType,n)})):i._startSend(i._currentType,n)}},{key:"add",value:function(e,t,n){this._enqueueRequest(e,t,n)}},{key:"load",value:function(){var e=this._currentType===u.Requests?this._queue:this._failedQueue,t=x.get(u.Requests);t&&t.length&&t.forEach((function(t){e.enqueue(t)})),x.remove(u.Requests)}},{key:"save",value:function(){var e=(x.get(u.FailedRequests)||[]).concat(this._failedQueue.items());e&&e.length&&x.set(u.FailedRequests,e),this._failedQueue.clear()}}])&&ne(t.prototype,n),i&&ne(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().getInstance(u.Requests);function ae(){}ae.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var i=this;function r(){i.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,r=n.length;i<r;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],r=[];if(i&&t)for(var a=0,s=i.length;a<s;a++)i[a].fn!==t&&i[a].fn._!==t&&r.push(i[a]);return r.length?n[e]=r:delete n[e],this}};var se=new ae;se.messageType={PARAMS_LOADED:0,SDK_INITED:1};var oe=se;function ue(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ce(this,"_inited",!1),ce(this,"_appStartTime",0)}var t,n;return t=e,(n=[{key:"ready",get:function(){return this._inited}},{key:"init",value:function(){var e=this;ee.init(),J.init((function(){x.load((function(t){e._inited=t,oe.emit(oe.messageType.SDK_INITED)}))}))}},{key:"sendEvent",value:function(e,t){if(this._inited&&(M.getItem(u.QT_DEVICE_ENABLE)||/^(\$\$_app_start|\$\$_app_end)$/.test(e))&&b.checkEvent(e,t)&&function(e){var t=M.getItem(u.QT_EVENT_LIMITRATES);if(t&&t.length>0){var n=b.find(t,(function(t){return t.eventId===e}));return!n||Math.ceil(1e3*Math.random())<1e3*n.samplingRate}return!0}(e)){var n=new N(e,t);L.addEvent(n),re.send(u.DataType.EKV,{noCache:!0},(function(){}))}}},{key:"appLaunch",value:function(){var e=this;this._appStartTime=Date.now(),oe.on(oe.messageType.SDK_INITED,(function(){e.sendEvent(u.APP_START,{ts:e._appStartTime})}))}},{key:"appHide",value:function(){var e=Date.now(),t=e-this._appStartTime;this.sendEvent(u.APP_END,{ts:e,duration:t})}},{key:"sendPageStart",value:function(e){this.sendEvent(u.PAGE_START,b.assign(e,{ts:Date.now()}))}},{key:"sendUserProfile",value:function(e){this.sendEvent(u.USER_PROFILE,e)}},{key:"getGlobalProperty",value:function(){return O.globalproperty||{}}},{key:"setGlobalProperty",value:function(e){if(b.isArray(e)||b.isObject(e)){var t=!1;b.eachMap(e,(function(n,i){if(b.isArray(i)||b.isObject(i))return t=!0,c().w("globalproperty k/v pair should not contain nested json format. current value=\n"),void c().w(JSON.stringify(e))})),t||(O.globalproperty=b.clone(e))}else c().w("setGlobalProperty can only be assigned as Object/Array format value.")}},{key:"appendGlobalProperty",value:function(e){b.isArray(e)||b.isObject(e)?O.globalProperty=b.clone(b.assign(O.globalProperty,e)):c().w("appendGlobalProperty can only be assigned as Object/Array format value.")}},{key:"login",value:function(e){e&&ee.setUserId(e)}},{key:"logoff",value:function(){ee.removeUserId("logoff success!")}},{key:"setIdTracking",value:function(e){for(var t in e)switch(t){case u.IDType.openId:ee.setOpenId(e[t]);break;case u.IDType.unionId:ee.setUnionId(e[t]);break;case u.IDType.androidId:ee.setAndroidId(e[t]);break;case u.IDType.advertisingId:ee.setAdvertisingId(e[t]);break;case u.IDType.phonenumber:ee.setPhonenum(e[t]);break;case u.IDType.deviceId:ee.setDeviceId(e[t]);break;case u.IDType.mac:ee.setMac(e[t]);break;case u.IDType.serial:ee.setSerial(e[t]);break;case u.IDType.oaid:ee.setOaid(e[t]);break;default:c().w("invalid id key = ",t)}}}])&&ue(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function fe(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pe=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),de(this,"_params",{name:"qt"}),de(this,"_core",null),this._core=new le}var t,n,i;return t=e,i=[{key:"getInstance",value:function(){return this._instance||(this._instance=new e),this._instance}}],(n=[{key:"init",value:function(t){try{var n=t||function(){try{return s.g.__proto__||s.g||window}catch(e){c().w("get context failed",e)}}();n&&(n[this._params.name]=e.getInstance(),n.$app&&(n.$app[this._params.name]=e.getInstance())),this._core.init();var i=this;oe.on(oe.messageType.SDK_INITED,(function(){i._core.ready?c().v("QT SDK init success!!!"):(c().v("QT SDK init failed, current setting is: \n"),c().v(JSON.stringify(e.getInstance()._params)))}))}catch(e){c().w("qt quickapp init failed!")}}},{key:"setParams",value:function(t){var n=this;t&&b.isObject(t)&&(c().setDebug(!!t.showLog),b.eachMap(t,(function(t,i){switch(t){case u.TRACK_DOMAIN:b.checkDomain(i)&&(e.getInstance()._params[t]=i,O.setItem(u.TRACK_DOMAIN,i));break;case u.APPKEY:b.checkAppKey(i)&&(e.getInstance()._params[t]=i,O.appKey=i);break;case u.IDType.userId:O.puid=i;break;case u.GlobalProperty:n.setGlobalProperty(i);break;case u.DEBUGID:O.debugId=i;break;default:e.getInstance()._params[t]=i}})))}},{key:"setIds",value:function(e){this._core&&b.isObject(e)&&this._core.setIdTracking(e)}},{key:"appLaunch",value:function(e){this._core&&this._core.appLaunch(e)}},{key:"appHide",value:function(e){this._core&&this._core.appHide(e)}},{key:"sendPageStart",value:function(e){this._core&&this._core.sendPageStart(e)}},{key:"sendUserProfile",value:function(e){this._core&&this._core.sendUserProfile(e)}},{key:"sendEvent",value:function(e,t){this._core&&this._core.sendEvent(e,t)}},{key:"setGlobalProperty",value:function(e){this._core&&this._core.setGlobalProperty(e)}},{key:"appendGlobalProperty",value:function(e){this._core&&this._core.appendGlobalProperty(e)}},{key:"getGlobalProperty",value:function(){return this._core?this._core.getGlobalProperty():{}}},{key:"login",value:function(e){this._core.login(e)}},{key:"logoff",value:function(){this._core.logoff()}}])&&fe(t.prototype,n),i&&fe(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().getInstance(),he=o.Z;export{he as default};
>>>>>>> e4a40a86e118585e7ad6d979ff6e17de230360e3
