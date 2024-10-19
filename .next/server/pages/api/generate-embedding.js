"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate-embedding";
exports.ids = ["pages/api/generate-embedding"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("openai");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgenerate-embedding&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fgenerate-embedding.ts&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgenerate-embedding&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fgenerate-embedding.ts&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_generate_embedding_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/generate-embedding.ts */ \"(api)/./pages/api/generate-embedding.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_generate_embedding_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_generate_embedding_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_generate_embedding_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_generate_embedding_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/generate-embedding\",\n        pathname: \"/api/generate-embedding\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_generate_embedding_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmdlbmVyYXRlLWVtYmVkZGluZyZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGZ2VuZXJhdGUtZW1iZWRkaW5nLnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQzhEO0FBQzlEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw2REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsNkRBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLWNoYXQvPzk5YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL2FwaS9nZW5lcmF0ZS1lbWJlZGRpbmcudHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZW5lcmF0ZS1lbWJlZGRpbmdcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZW5lcmF0ZS1lbWJlZGRpbmdcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgenerate-embedding&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fgenerate-embedding.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/clients.ts":
/*!************************!*\
  !*** ./lib/clients.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openai: () => (/* binding */ openai),\n/* harmony export */   pinecone: () => (/* binding */ pinecone)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__.Pinecone({\n    apiKey: process.env.PINECONE_API_KEY\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50cy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUVoRCxNQUFNRSxTQUFTLElBQUlGLDBDQUFNQSxDQUFDO0lBQy9CRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDcEMsR0FBRztBQUVJLE1BQU1DLFdBQVcsSUFBSU4saUVBQVFBLENBQUM7SUFDbkNFLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0csZ0JBQWdCO0FBQ3RDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtY2hhdC8uL2xpYi9jbGllbnRzLnRzPzhhZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BlbkFJIH0gZnJvbSAnb3BlbmFpJztcbmltcG9ydCB7IFBpbmVjb25lIH0gZnJvbSAnQHBpbmVjb25lLWRhdGFiYXNlL3BpbmVjb25lJztcblxuZXhwb3J0IGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmV4cG9ydCBjb25zdCBwaW5lY29uZSA9IG5ldyBQaW5lY29uZSh7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSFcbn0pO1xuIl0sIm5hbWVzIjpbIk9wZW5BSSIsIlBpbmVjb25lIiwib3BlbmFpIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwicGluZWNvbmUiLCJQSU5FQ09ORV9BUElfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/clients.ts\n");

/***/ }),

/***/ "(api)/./pages/api/generate-embedding.ts":
/*!*****************************************!*\
  !*** ./pages/api/generate-embedding.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_clients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/clients */ \"(api)/./lib/clients.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_clients__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_clients__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n    const { text } = req.body;\n    if (!text) {\n        return res.status(400).json({\n            error: \"Text is required\"\n        });\n    }\n    try {\n        const embeddingResponse = await _lib_clients__WEBPACK_IMPORTED_MODULE_0__.openai.embeddings.create({\n            model: \"text-embedding-ada-002\",\n            input: text\n        });\n        res.status(200).json({\n            embedding: embeddingResponse.data[0].embedding\n        });\n    } catch (error) {\n        console.error(\"OpenAI API error:\", error);\n        res.status(500).json({\n            error: \"Error generating embedding\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtZW1iZWRkaW5nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzJDO0FBRTVCLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQzdFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUM1RDtJQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdOLElBQUlPLElBQUk7SUFFekIsSUFBSSxDQUFDRCxNQUFNO1FBQ1QsT0FBT0wsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW1CO0lBQzFEO0lBRUEsSUFBSTtRQUNGLE1BQU1HLG9CQUFvQixNQUFNVixnREFBTUEsQ0FBQ1csVUFBVSxDQUFDQyxNQUFNLENBQUM7WUFDdkRDLE9BQU87WUFDUEMsT0FBT047UUFDVDtRQUVBTCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVTLFdBQVdMLGtCQUFrQk0sSUFBSSxDQUFDLEVBQUUsQ0FBQ0QsU0FBUztRQUFDO0lBQ3hFLEVBQUUsT0FBT1IsT0FBTztRQUNkVSxRQUFRVixLQUFLLENBQUMscUJBQXFCQTtRQUNuQ0osSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTZCO0lBQzdEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtY2hhdC8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS1lbWJlZGRpbmcudHM/YTRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IG9wZW5haSB9IGZyb20gJy4uLy4uL2xpYi9jbGllbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG5cbiAgY29uc3QgeyB0ZXh0IH0gPSByZXEuYm9keTtcblxuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1RleHQgaXMgcmVxdWlyZWQnIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBlbWJlZGRpbmdSZXNwb25zZSA9IGF3YWl0IG9wZW5haS5lbWJlZGRpbmdzLmNyZWF0ZSh7XG4gICAgICBtb2RlbDogXCJ0ZXh0LWVtYmVkZGluZy1hZGEtMDAyXCIsXG4gICAgICBpbnB1dDogdGV4dCxcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZW1iZWRkaW5nOiBlbWJlZGRpbmdSZXNwb25zZS5kYXRhWzBdLmVtYmVkZGluZyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdPcGVuQUkgQVBJIGVycm9yOicsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3IgZ2VuZXJhdGluZyBlbWJlZGRpbmcnIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIm9wZW5haSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ0ZXh0IiwiYm9keSIsImVtYmVkZGluZ1Jlc3BvbnNlIiwiZW1iZWRkaW5ncyIsImNyZWF0ZSIsIm1vZGVsIiwiaW5wdXQiLCJlbWJlZGRpbmciLCJkYXRhIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-embedding.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgenerate-embedding&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fgenerate-embedding.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();