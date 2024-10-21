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
exports.id = "pages/api/add-to-pinecone";
exports.ids = ["pages/api/add-to-pinecone"];
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

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadd-to-pinecone&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fadd-to-pinecone.ts&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadd-to-pinecone&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fadd-to-pinecone.ts&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_add_to_pinecone_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/add-to-pinecone.ts */ \"(api)/./pages/api/add-to-pinecone.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_add_to_pinecone_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_add_to_pinecone_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_add_to_pinecone_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_add_to_pinecone_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/add-to-pinecone\",\n        pathname: \"/api/add-to-pinecone\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_add_to_pinecone_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmFkZC10by1waW5lY29uZSZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGYWRkLXRvLXBpbmVjb25lLnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQzJEO0FBQzNEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQywwREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsMERBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLWNoYXQvPzI0MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL2FwaS9hZGQtdG8tcGluZWNvbmUudHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZGQtdG8tcGluZWNvbmVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZGQtdG8tcGluZWNvbmVcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadd-to-pinecone&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fadd-to-pinecone.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/clients.ts":
/*!************************!*\
  !*** ./lib/clients.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openai: () => (/* binding */ openai),\n/* harmony export */   pinecone: () => (/* binding */ pinecone)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n    apiKey: \"sk-X_CbhZA1bTpxIp4RCrKLcF6j_pLbxGWXloZx392p1jT3BlbkFJWJcfOm-zKtSzZFFgkTKJfu21Pca_CXZf7tdtaUzl8A\"\n});\nconst pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__.Pinecone({\n    apiKey: process.env.PINECONE_API_KEY\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50cy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUVoRCxNQUFNRSxTQUFTLElBQUlGLDBDQUFNQSxDQUFDO0lBQy9CRyxRQUFRQyxpR0FBMEI7QUFDcEMsR0FBRztBQUVJLE1BQU1HLFdBQVcsSUFBSU4saUVBQVFBLENBQUM7SUFDbkNFLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0csZ0JBQWdCO0FBQ3RDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtY2hhdC8uL2xpYi9jbGllbnRzLnRzPzhhZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BlbkFJIH0gZnJvbSAnb3BlbmFpJztcbmltcG9ydCB7IFBpbmVjb25lIH0gZnJvbSAnQHBpbmVjb25lLWRhdGFiYXNlL3BpbmVjb25lJztcblxuZXhwb3J0IGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmV4cG9ydCBjb25zdCBwaW5lY29uZSA9IG5ldyBQaW5lY29uZSh7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSFcbn0pO1xuIl0sIm5hbWVzIjpbIk9wZW5BSSIsIlBpbmVjb25lIiwib3BlbmFpIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwicGluZWNvbmUiLCJQSU5FQ09ORV9BUElfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/clients.ts\n");

/***/ }),

/***/ "(api)/./pages/api/add-to-pinecone.ts":
/*!**************************************!*\
  !*** ./pages/api/add-to-pinecone.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_clients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/clients */ \"(api)/./lib/clients.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_clients__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_clients__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n    const { id, embedding, metadata } = req.body;\n    if (!id || !embedding || !metadata) {\n        return res.status(400).json({\n            error: \"Missing required fields\"\n        });\n    }\n    try {\n        const index = _lib_clients__WEBPACK_IMPORTED_MODULE_0__.pinecone.Index(\"alumni-profiles\");\n        const metadataToUpsert = {\n            ...metadata,\n            resumeEmbedding: metadata.resumeEmbedding ? JSON.stringify(metadata.resumeEmbedding) : undefined\n        };\n        await index.upsert([\n            {\n                id,\n                values: embedding,\n                metadata: metadataToUpsert\n            }\n        ]);\n        res.status(200).json({\n            message: \"Profile added to Pinecone successfully\"\n        });\n    } catch (error) {\n        console.error(\"Pinecone API error:\", error);\n        res.status(500).json({\n            error: \"Error adding profile to Pinecone\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkLXRvLXBpbmVjb25lLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzZDO0FBRTlCLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQzdFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUM1RDtJQUVBLE1BQU0sRUFBRUMsRUFBRSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRSxHQUFHUixJQUFJUyxJQUFJO0lBRTVDLElBQUksQ0FBQ0gsTUFBTSxDQUFDQyxhQUFhLENBQUNDLFVBQVU7UUFDbEMsT0FBT1AsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTBCO0lBQ2pFO0lBRUEsSUFBSTtRQUNGLE1BQU1LLFFBQVFaLGtEQUFRQSxDQUFDYSxLQUFLLENBQUM7UUFDN0IsTUFBTUMsbUJBQW1CO1lBQ3ZCLEdBQUdKLFFBQVE7WUFDWEssaUJBQWlCTCxTQUFTSyxlQUFlLEdBQUdDLEtBQUtDLFNBQVMsQ0FBQ1AsU0FBU0ssZUFBZSxJQUFJRztRQUN6RjtRQUVBLE1BQU1OLE1BQU1PLE1BQU0sQ0FBQztZQUNqQjtnQkFDRVg7Z0JBQ0FZLFFBQVFYO2dCQUNSQyxVQUFVSTtZQUNaO1NBQ0Q7UUFFRFgsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFZSxTQUFTO1FBQXlDO0lBQzNFLEVBQUUsT0FBT2QsT0FBTztRQUNkZSxRQUFRZixLQUFLLENBQUMsdUJBQXVCQTtRQUNyQ0osSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW1DO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtY2hhdC8uL3BhZ2VzL2FwaS9hZGQtdG8tcGluZWNvbmUudHM/ZmVjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHBpbmVjb25lIH0gZnJvbSAnLi4vLi4vbGliL2NsaWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XG4gIH1cblxuICBjb25zdCB7IGlkLCBlbWJlZGRpbmcsIG1ldGFkYXRhIH0gPSByZXEuYm9keTtcblxuICBpZiAoIWlkIHx8ICFlbWJlZGRpbmcgfHwgIW1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIGZpZWxkcycgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGluZGV4ID0gcGluZWNvbmUuSW5kZXgoJ2FsdW1uaS1wcm9maWxlcycpO1xuICAgIGNvbnN0IG1ldGFkYXRhVG9VcHNlcnQgPSB7XG4gICAgICAuLi5tZXRhZGF0YSxcbiAgICAgIHJlc3VtZUVtYmVkZGluZzogbWV0YWRhdGEucmVzdW1lRW1iZWRkaW5nID8gSlNPTi5zdHJpbmdpZnkobWV0YWRhdGEucmVzdW1lRW1iZWRkaW5nKSA6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBhd2FpdCBpbmRleC51cHNlcnQoW1xuICAgICAge1xuICAgICAgICBpZCxcbiAgICAgICAgdmFsdWVzOiBlbWJlZGRpbmcsXG4gICAgICAgIG1ldGFkYXRhOiBtZXRhZGF0YVRvVXBzZXJ0LFxuICAgICAgfSxcbiAgICBdKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1Byb2ZpbGUgYWRkZWQgdG8gUGluZWNvbmUgc3VjY2Vzc2Z1bGx5JyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdQaW5lY29uZSBBUEkgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBhZGRpbmcgcHJvZmlsZSB0byBQaW5lY29uZScgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwaW5lY29uZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJpZCIsImVtYmVkZGluZyIsIm1ldGFkYXRhIiwiYm9keSIsImluZGV4IiwiSW5kZXgiLCJtZXRhZGF0YVRvVXBzZXJ0IiwicmVzdW1lRW1iZWRkaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInVuZGVmaW5lZCIsInVwc2VydCIsInZhbHVlcyIsIm1lc3NhZ2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/add-to-pinecone.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadd-to-pinecone&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fadd-to-pinecone.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();