"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getProjects": () => (/* binding */ getProjects)
});

;// CONCATENATED MODULE: ./pages/api/projects.json
const projects_namespaceObject = JSON.parse('[{"id":1,"name":"Beacon Techh","image":"/projects/beacon-techh.png","description":"A website for a company that provides digital services.","tags":["react","sass"],"demo":"https://beacontech-react-1-0.vercel.app/"},{"id":2,"name":"Castle Marketing","image":"/projects/castle-marketing.png","description":"A platform for a real estate firm.","tags":["next","node","css-modules"],"demo":"https://castlemarketing.com.pk"},{"id":3,"name":"Aeon Marketing","image":"/projects/aeon-marketing.png","description":"A website catering to the services of a real estate company.","tags":["next","node","css-modules"],"demo":"https://aeonmarketing.com.pk/"},{"id":4,"name":"Amanat Marketing","image":"/projects/amanat-marketing.png","description":"An online hub dedicated to offering the services of a real estate firm.","tags":["wordpress"],"demo":"https://amanatmarketing.com/"}]');
;// CONCATENATED MODULE: ./pages/api/projects.js

const getProjects = ()=>{
    return projects_namespaceObject;
};
/* harmony default export */ const projects = ((req, res)=>{
    const projects = getProjects();
    res.json(projects);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7678));
module.exports = __webpack_exports__;

})();