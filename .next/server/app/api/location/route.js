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
exports.id = "app/api/location/route";
exports.ids = ["app/api/location/route"];
exports.modules = {

/***/ "(rsc)/./app/api/location/route.ts":
/*!***********************************!*\
  !*** ./app/api/location/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// app/api/location/route.ts\n\nconst dynamic = 'force-dynamic';\nasync function GET(request) {\n    // Em ambiente de desenvolvimento (localhost), os cabeçalhos da Vercel não existem.\n    // Então, retornamos uma localização padrão para testes.\n    if (true) {\n        console.log(\"Ambiente de desenvolvimento: retornando localização de São Paulo.\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'success',\n            city: 'São Paulo',\n            country: 'Brazil',\n            region: 'SP',\n            postalCode: '01310-100',\n            lat: -23.5505,\n            lon: -46.6333\n        });\n    }\n    // Em produção na Vercel, lemos os cabeçalhos que a Vercel injeta.\n    try {\n        const city = request.headers.get('x-vercel-ip-city');\n        const country = request.headers.get('x-vercel-ip-country');\n        const region = request.headers.get('x-vercel-ip-country-region');\n        const postalCode = request.headers.get('x-vercel-ip-postal-code');\n        const lat = request.headers.get('x-vercel-ip-latitude');\n        const lon = request.headers.get('x-vercel-ip-longitude');\n        // Verificação de segurança: se os headers principais estiverem faltando, retorna erro.\n        if (!city || !country || !lat || !lon) {\n            console.error(\"Cabeçalhos de geolocalização da Vercel não foram encontrados em produção.\");\n            throw new Error(\"Cabeçalhos da Vercel ausentes.\");\n        }\n        // Retorna os dados da localização lidos diretamente dos cabeçalhos.\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'success',\n            city,\n            country,\n            region: region || '',\n            postalCode: postalCode || '',\n            lat: parseFloat(lat),\n            lon: parseFloat(lon)\n        });\n    } catch (error) {\n        console.error(\"Erro ao processar cabeçalhos da Vercel:\", error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Erro interno ao processar a geolocalização da Vercel.'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvY2F0aW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRCQUE0QjtBQUU0QjtBQUVqRCxNQUFNQyxVQUFVLGdCQUFnQjtBQUVoQyxlQUFlQyxJQUFJQyxPQUFvQjtJQUM1QyxtRkFBbUY7SUFDbkYsd0RBQXdEO0lBQ3hELElBQUlDLElBQXNDLEVBQUU7UUFDMUNDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFDdkJDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsWUFBWTtZQUNaQyxLQUFLLENBQUM7WUFDTkMsS0FBSyxDQUFDO1FBQ1I7SUFDRjtJQUVBLGtFQUFrRTtJQUNsRSxJQUFJO1FBQ0YsTUFBTUwsT0FBT04sUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDakMsTUFBTU4sVUFBVVAsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDcEMsTUFBTUwsU0FBU1IsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDbkMsTUFBTUosYUFBYVQsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDdkMsTUFBTUgsTUFBTVYsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDaEMsTUFBTUYsTUFBTVgsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFFaEMsdUZBQXVGO1FBQ3ZGLElBQUksQ0FBQ1AsUUFBUSxDQUFDQyxXQUFXLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSztZQUNyQ1QsUUFBUVksS0FBSyxDQUFDO1lBQ2QsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBRUEsb0VBQW9FO1FBQ3BFLE9BQU9sQixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQ3ZCQyxRQUFRO1lBQ1JDO1lBQ0FDO1lBQ0FDLFFBQVFBLFVBQVU7WUFDbEJDLFlBQVlBLGNBQWM7WUFDMUJDLEtBQUtNLFdBQVdOO1lBQ2hCQyxLQUFLSyxXQUFXTDtRQUNsQjtJQUVGLEVBQUUsT0FBT0csT0FBWTtRQUNuQlosUUFBUVksS0FBSyxDQUFDLDJDQUEyQ0EsTUFBTUcsT0FBTztRQUN0RSxPQUFPcEIscURBQVlBLENBQUNPLElBQUksQ0FDdEI7WUFBRVUsT0FBTztRQUF3RCxHQUNqRTtZQUFFVCxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtYWRzb1xcaW5zdGEtemFwLXRpbmRlciAoZXNwYW5ob2wpXFxhcHBcXGFwaVxcbG9jYXRpb25cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvbG9jYXRpb24vcm91dGUudHNcclxuXHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkeW5hbWljID0gJ2ZvcmNlLWR5bmFtaWMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIC8vIEVtIGFtYmllbnRlIGRlIGRlc2Vudm9sdmltZW50byAobG9jYWxob3N0KSwgb3MgY2FiZcOnYWxob3MgZGEgVmVyY2VsIG7Do28gZXhpc3RlbS5cclxuICAvLyBFbnTDo28sIHJldG9ybmFtb3MgdW1hIGxvY2FsaXphw6fDo28gcGFkcsOjbyBwYXJhIHRlc3Rlcy5cclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQW1iaWVudGUgZGUgZGVzZW52b2x2aW1lbnRvOiByZXRvcm5hbmRvIGxvY2FsaXphw6fDo28gZGUgU8OjbyBQYXVsby5cIik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgICAgY2l0eTogJ1PDo28gUGF1bG8nLFxyXG4gICAgICBjb3VudHJ5OiAnQnJhemlsJyxcclxuICAgICAgcmVnaW9uOiAnU1AnLFxyXG4gICAgICBwb3N0YWxDb2RlOiAnMDEzMTAtMTAwJyxcclxuICAgICAgbGF0OiAtMjMuNTUwNSxcclxuICAgICAgbG9uOiAtNDYuNjMzMyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gRW0gcHJvZHXDp8OjbyBuYSBWZXJjZWwsIGxlbW9zIG9zIGNhYmXDp2FsaG9zIHF1ZSBhIFZlcmNlbCBpbmpldGEuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNpdHkgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCd4LXZlcmNlbC1pcC1jaXR5Jyk7XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC12ZXJjZWwtaXAtY291bnRyeScpO1xyXG4gICAgY29uc3QgcmVnaW9uID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC12ZXJjZWwtaXAtY291bnRyeS1yZWdpb24nKTtcclxuICAgIGNvbnN0IHBvc3RhbENvZGUgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCd4LXZlcmNlbC1pcC1wb3N0YWwtY29kZScpO1xyXG4gICAgY29uc3QgbGF0ID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC12ZXJjZWwtaXAtbGF0aXR1ZGUnKTtcclxuICAgIGNvbnN0IGxvbiA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3gtdmVyY2VsLWlwLWxvbmdpdHVkZScpO1xyXG5cclxuICAgIC8vIFZlcmlmaWNhw6fDo28gZGUgc2VndXJhbsOnYTogc2Ugb3MgaGVhZGVycyBwcmluY2lwYWlzIGVzdGl2ZXJlbSBmYWx0YW5kbywgcmV0b3JuYSBlcnJvLlxyXG4gICAgaWYgKCFjaXR5IHx8ICFjb3VudHJ5IHx8ICFsYXQgfHwgIWxvbikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQ2FiZcOnYWxob3MgZGUgZ2VvbG9jYWxpemHDp8OjbyBkYSBWZXJjZWwgbsOjbyBmb3JhbSBlbmNvbnRyYWRvcyBlbSBwcm9kdcOnw6NvLlwiKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FiZcOnYWxob3MgZGEgVmVyY2VsIGF1c2VudGVzLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRvcm5hIG9zIGRhZG9zIGRhIGxvY2FsaXphw6fDo28gbGlkb3MgZGlyZXRhbWVudGUgZG9zIGNhYmXDp2FsaG9zLlxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgIGNpdHksXHJcbiAgICAgIGNvdW50cnksXHJcbiAgICAgIHJlZ2lvbjogcmVnaW9uIHx8ICcnLCAvLyBFc3RhZG8vcmVnacOjbyBwb2RlIHNlciBudWxsIGVtIGFsZ3VucyBjYXNvc1xyXG4gICAgICBwb3N0YWxDb2RlOiBwb3N0YWxDb2RlIHx8ICcnLCAvLyBDRVAgcG9kZSBzZXIgbnVsbCBlbSBhbGd1bnMgY2Fzb3NcclxuICAgICAgbGF0OiBwYXJzZUZsb2F0KGxhdCksXHJcbiAgICAgIGxvbjogcGFyc2VGbG9hdChsb24pLFxyXG4gICAgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIHByb2Nlc3NhciBjYWJlw6dhbGhvcyBkYSBWZXJjZWw6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiAnRXJybyBpbnRlcm5vIGFvIHByb2Nlc3NhciBhIGdlb2xvY2FsaXphw6fDo28gZGEgVmVyY2VsLicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZHluYW1pYyIsIkdFVCIsInJlcXVlc3QiLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJzdGF0dXMiLCJjaXR5IiwiY291bnRyeSIsInJlZ2lvbiIsInBvc3RhbENvZGUiLCJsYXQiLCJsb24iLCJoZWFkZXJzIiwiZ2V0IiwiZXJyb3IiLCJFcnJvciIsInBhcnNlRmxvYXQiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/location/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5Cinsta-zap-tinder%20(espanhol)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5Cinsta-zap-tinder%20(espanhol)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5Cinsta-zap-tinder%20(espanhol)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5Cinsta-zap-tinder%20(espanhol)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_madso_insta_zap_tinder_espanhol_app_api_location_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/location/route.ts */ \"(rsc)/./app/api/location/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/location/route\",\n        pathname: \"/api/location\",\n        filename: \"route\",\n        bundlePath: \"app/api/location/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\madso\\\\insta-zap-tinder (espanhol)\\\\app\\\\api\\\\location\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_madso_insta_zap_tinder_espanhol_app_api_location_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2NhdGlvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9jYXRpb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2NhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtYWRzbyU1Q2luc3RhLXphcC10aW5kZXIlMjAoZXNwYW5ob2wpJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNtYWRzbyU1Q2luc3RhLXphcC10aW5kZXIlMjAoZXNwYW5ob2wpJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbWFkc29cXFxcaW5zdGEtemFwLXRpbmRlciAoZXNwYW5ob2wpXFxcXGFwcFxcXFxhcGlcXFxcbG9jYXRpb25cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xvY2F0aW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbG9jYXRpb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2xvY2F0aW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcbWFkc29cXFxcaW5zdGEtemFwLXRpbmRlciAoZXNwYW5ob2wpXFxcXGFwcFxcXFxhcGlcXFxcbG9jYXRpb25cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5Cinsta-zap-tinder%20(espanhol)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5Cinsta-zap-tinder%20(espanhol)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5Cinsta-zap-tinder%20(espanhol)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5Cinsta-zap-tinder%20(espanhol)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();