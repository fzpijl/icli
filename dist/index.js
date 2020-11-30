/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, bin, scripts, author, license, keywords, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"iris-view-cli\\\",\\\"version\\\":\\\"0.1.4\\\",\\\"description\\\":\\\"a cli\\\",\\\"main\\\":\\\"index.js\\\",\\\"bin\\\":{\\\"iris\\\":\\\"./bin/index.js\\\"},\\\"scripts\\\":{\\\"test\\\":\\\"echo \\\\\\\"Error: no test specified\\\\\\\" && exit 1\\\",\\\"build\\\":\\\"npx webpack --watch\\\"},\\\"author\\\":\\\"fanren\\\",\\\"license\\\":\\\"ISC\\\",\\\"keywords\\\":[\\\"cli\\\",\\\"iris\\\"],\\\"dependencies\\\":{\\\"commander\\\":\\\"^6.1.0\\\",\\\"download-git-repo\\\":\\\"^3.0.2\\\",\\\"fs-extra\\\":\\\"^9.0.1\\\",\\\"ini\\\":\\\"^1.3.5\\\",\\\"inquirer\\\":\\\"^7.3.3\\\",\\\"ora\\\":\\\"^5.1.0\\\",\\\"ow\\\":\\\"^0.17.0\\\"},\\\"devDependencies\\\":{\\\"chalk\\\":\\\"^4.1.0\\\",\\\"eslint\\\":\\\"^7.9.0\\\",\\\"eslint-loader\\\":\\\"^4.0.2\\\",\\\"log-symbols\\\":\\\"^4.0.0\\\",\\\"webpack\\\":\\\"^4.44.1\\\",\\\"webpack-cli\\\":\\\"^3.3.12\\\",\\\"webpack-node-externals\\\":\\\"^2.5.2\\\"}}\");\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/commands/config.js":
/*!********************************!*\
  !*** ./src/commands/config.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_RC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/RC */ \"./src/util/RC.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (program) {\n    program.command('config <action> [k] [v]')\n        .description('config for the cli tool')\n        .action(async (action, k, v) => {\n            switch (action) {\n                case 'get':\n                    if (k === undefined) {\n                        let keys = await Object(_util_RC__WEBPACK_IMPORTED_MODULE_0__[\"getAll\"])()\n                        console.log(JSON.stringify(keys, null, 2))\n                    } else {\n                        let key = await Object(_util_RC__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(k)\n                        console.log(key)\n                    }\n                    break\n                case 'set':\n                    await Object(_util_RC__WEBPACK_IMPORTED_MODULE_0__[\"set\"])(k, v)\n                    break\n            }\n                \n        })\n});\n\n//# sourceURL=webpack:///./src/commands/config.js?");

/***/ }),

/***/ "./src/commands/create.js":
/*!********************************!*\
  !*** ./src/commands/create.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inquirer */ \"inquirer\");\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var log_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! log-symbols */ \"log-symbols\");\n/* harmony import */ var log_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(log_symbols__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ora__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ora */ \"ora\");\n/* harmony import */ var ora__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ora__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _util_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/download */ \"./src/util/download.js\");\n\n\n\n\n\n\n\n\nlet createPrompts = [\n    {\n        name: 'description',\n        message: 'Please enter the project description: '\n    },\n    {\n        name: 'author',\n        message: 'Please enter the author name: '\n    }\n]\n\nasync function updatePkgName(name) {\n    let pgk = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), name, 'package.json')\n    try {\n        let json = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.readJSON(pgk)\n        json.name = name\n        await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.writeJSON(pgk, json, {\n            spaces: 2\n        })\n    } catch (e) {\n        console.log(e)\n    }\n}\n\nfunction getNewProject(projectName, template) {\n    inquirer__WEBPACK_IMPORTED_MODULE_3___default.a.prompt(createPrompts).then(async (answer) => {\n\n        //answer 还没有用到,打印出来是为了通过eslint检查\n        console.log(answer)\n        let loading = ora__WEBPACK_IMPORTED_MODULE_5___default()('download template ...')\n        loading.start()\n\n        let hasError = await Object(_util_download__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(template, projectName)\n\n        if (hasError) {\n            loading.text = 'failed in download template'\n            loading.fail()\n            console.log(chalk__WEBPACK_IMPORTED_MODULE_2___default.a.red('HTTPError', JSON.stringify(hasError, null, 4)))\n            return\n        }\n\n        loading.text = 'succeed in download template'\n        loading.succeed()\n        updatePkgName(projectName)\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_4___default.a.success, chalk__WEBPACK_IMPORTED_MODULE_2___default.a.green('Project initialization finished!'));\n    })\n}\n\n\nfunction create(projectName, template) {\n    if (fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(projectName)) {\n        let existPrompts = [\n            {\n                type: 'list',\n                name: 'action',\n                message: `project named ${chalk__WEBPACK_IMPORTED_MODULE_2___default.a.yellow(projectName)} already exists. Pick an action:`,\n                choices: ['Overwrite', 'Cancel']\n            }\n        ]\n        inquirer__WEBPACK_IMPORTED_MODULE_3___default.a.prompt(existPrompts).then(async (answer) => {\n            switch (answer.action) {\n                case 'Overwrite':\n                    fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.removeSync(projectName)\n                    getNewProject(projectName, template)\n                    break\n                case 'Cancel':\n                    break\n            }\n        })\n\n    } else {\n        getNewProject(projectName, template)\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (program) {\n    program.command('create <projectName> [templateName]')\n        .description('create a new Project')\n        .action((projectName, templateName) => {\n            create(projectName, templateName)\n    })\n});\n\n//# sourceURL=webpack:///./src/commands/create.js?");

/***/ }),

/***/ "./src/commands/index.js":
/*!*******************************!*\
  !*** ./src/commands/index.js ***!
  \*******************************/
/*! exports provided: create, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/commands/create.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/commands/config.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/commands/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! commander */ \"commander\");\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(commander__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ \"./src/commands/index.js\");\n/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/constants */ \"./src/util/constants.js\");\n\n\n\n\ncommander__WEBPACK_IMPORTED_MODULE_0__[\"program\"].version(_util_constants__WEBPACK_IMPORTED_MODULE_2__[\"VERSION\"])\n\nconst commandlist = ['create', 'config'];\n\ncommandlist.forEach(command => _commands__WEBPACK_IMPORTED_MODULE_1__[command](commander__WEBPACK_IMPORTED_MODULE_0__[\"program\"]))\n\n\ncommander__WEBPACK_IMPORTED_MODULE_0__[\"program\"].parse(process.argv)\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util/RC.js":
/*!************************!*\
  !*** ./src/util/RC.js ***!
  \************************/
/*! exports provided: get, getAll, set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAll\", function() { return getAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ini */ \"ini\");\n/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ini__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/util/constants.js\");\n\n\n\n\n\n\nconst read = async () => {\n    let content = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.readFile(_constants__WEBPACK_IMPORTED_MODULE_3__[\"RC\"], 'utf8')\n    return ini__WEBPACK_IMPORTED_MODULE_1___default.a.decode(content)\n}\n\nconst write = async (content) => {\n    content = ini__WEBPACK_IMPORTED_MODULE_1___default.a.encode(content)\n    await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile(_constants__WEBPACK_IMPORTED_MODULE_3__[\"RC\"], content)\n}\n\nconst isExist = (path) => {\n    return  fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(path)\n}\n\n\nasync function get(k) {\n    if (isExist(_constants__WEBPACK_IMPORTED_MODULE_3__[\"RC\"])) {\n        let content = await read()\n        return content[k]\n    } else {\n        return _constants__WEBPACK_IMPORTED_MODULE_3__[\"DEFAULTS\"][k]\n    }\n}\nasync function getAll() {\n    if (isExist(_constants__WEBPACK_IMPORTED_MODULE_3__[\"RC\"])) {\n        return await read()\n    } else {\n        return _constants__WEBPACK_IMPORTED_MODULE_3__[\"DEFAULTS\"]\n    }\n}\n\nasync function set(k, v) {\n    if(!k) {\n        console.log(chalk__WEBPACK_IMPORTED_MODULE_2___default.a.red(chalk__WEBPACK_IMPORTED_MODULE_2___default.a.bold('Error:')), chalk__WEBPACK_IMPORTED_MODULE_2___default.a.red('key is required'));\n        return;\n    }\n    if(!v) {\n        console.log(chalk__WEBPACK_IMPORTED_MODULE_2___default.a.red(chalk__WEBPACK_IMPORTED_MODULE_2___default.a.bold('Error:')), chalk__WEBPACK_IMPORTED_MODULE_2___default.a.red('value is required'));\n        return;\n    }\n    if (!isExist(_constants__WEBPACK_IMPORTED_MODULE_3__[\"RC\"])) {\n        await write(_constants__WEBPACK_IMPORTED_MODULE_3__[\"DEFAULTS\"])\n    }\n    let content = await read()\n    content[k] = v\n    await write(content)\n}\n\n\n\n\n//# sourceURL=webpack:///./src/util/RC.js?");

/***/ }),

/***/ "./src/util/constants.js":
/*!*******************************!*\
  !*** ./src/util/constants.js ***!
  \*******************************/
/*! exports provided: VERSION, RC, DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VERSION\", function() { return VERSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RC\", function() { return RC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULTS\", function() { return DEFAULTS; });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ \"./package.json\", 1);\n\n\nconst VERSION = _package_json__WEBPACK_IMPORTED_MODULE_0__.version\n\nconst HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];\n\n//配置文件目录\nconst RC = `${HOME}/.iriswebclirc`\n\n//RC配置中下载模板用到的属性，给gitHub使用\n// https://github.com/[registry]/[templ]\nconst DEFAULTS = {\n    registry: 'fzpijl',\n    templ: 'templ1'\n}\n\n\n//# sourceURL=webpack:///./src/util/constants.js?");

/***/ }),

/***/ "./src/util/download.js":
/*!******************************!*\
  !*** ./src/util/download.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/util/constants.js\");\nconst downloadFromGit = __webpack_require__(/*! download-git-repo */ \"download-git-repo\")\n\n\n\nfunction _download(template, projectName) {\n    let url = `${_constants__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULTS\"].registry}/${template || _constants__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULTS\"].templ}`\n    return new Promise((resovle, reject) => {\n        downloadFromGit(url, projectName, (err) => {\n            if (err) {\n                let customError = {\n                    name: err.name,\n                    statusCode: err.statusCode,\n                    statusMessage: err.statusMessage,\n                    path: err.path,\n                    url: err.url\n                }\n                reject(customError)\n            } \n            resovle(false)\n        })\n    })\n}\n\nasync function download(template, projectName) {\n    try {\n        return await _download(template, projectName)\n    } catch (err) {\n        return err\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (download);\n\n//# sourceURL=webpack:///./src/util/download.js?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"commander\");\n\n//# sourceURL=webpack:///external_%22commander%22?");

/***/ }),

/***/ "download-git-repo":
/*!************************************!*\
  !*** external "download-git-repo" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"download-git-repo\");\n\n//# sourceURL=webpack:///external_%22download-git-repo%22?");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs-extra\");\n\n//# sourceURL=webpack:///external_%22fs-extra%22?");

/***/ }),

/***/ "ini":
/*!**********************!*\
  !*** external "ini" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ini\");\n\n//# sourceURL=webpack:///external_%22ini%22?");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inquirer\");\n\n//# sourceURL=webpack:///external_%22inquirer%22?");

/***/ }),

/***/ "log-symbols":
/*!******************************!*\
  !*** external "log-symbols" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"log-symbols\");\n\n//# sourceURL=webpack:///external_%22log-symbols%22?");

/***/ }),

/***/ "ora":
/*!**********************!*\
  !*** external "ora" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ora\");\n\n//# sourceURL=webpack:///external_%22ora%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });