webpackJsonp([1,4],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InfoComponent = (function () {
    function InfoComponent() {
    }
    return InfoComponent;
}());
InfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'kgi-info',
        template: __webpack_require__(229),
        styles: [__webpack_require__(224)]
    })
], InfoComponent);

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
    function ProjectsComponent(route) {
        this.route = route;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.projects = data.projects;
        });
    };
    return ProjectsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ProjectsComponent.prototype, "projects", void 0);
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'kgi-projects',
        template: __webpack_require__(230),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WILDCARD = '*';
var ParserService = (function () {
    function ParserService(http) {
        this.http = http;
    }
    /**
     * Retrieves projects.
     *
     * @param {{}} [properties] project properties to filter by, either with a set value or wildcard '*'
     * @returns {(Observable<Project[]>)}
     *
     * @memberof ParserService
     */
    ParserService.prototype.get = function (properties) {
        var projects = this.http.get('assets/projects.json').map(function (res) { return res.json(); });
        return properties
            ? projects.map(function (projects) { return projects.filter(function (p) {
                for (var property in properties) {
                    var value = properties[property];
                    var match = (value === WILDCARD)
                        ? p[property] !== undefined
                        : p[property] == value;
                    if (!match)
                        return false;
                }
                return true;
            }); })
            : projects;
    };
    return ParserService;
}());
ParserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ParserService);

var _a;
//# sourceMappingURL=parser.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 156;


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(169);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* RootModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageBlockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageBlockComponent = (function () {
    function ImageBlockComponent() {
    }
    return ImageBlockComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ImageBlockComponent.prototype, "images", void 0);
ImageBlockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'kgi-image-block',
        template: __webpack_require__(228),
        styles: [__webpack_require__(223)]
    })
], ImageBlockComponent);

//# sourceMappingURL=image-block.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_routing__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_parser__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__root__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__info_info__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_projects__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__image_block_image_block__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RootModule = (function () {
    function RootModule() {
    }
    return RootModule;
}());
RootModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_app_routing__["a" /* RoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__root__["a" /* RootComponent */],
            __WEBPACK_IMPORTED_MODULE_8__info_info__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__projects_projects__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__image_block_image_block__["a" /* ImageBlockComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6_app_services_parser__["a" /* ParserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__root__["a" /* RootComponent */]]
    })
], RootModule);

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RootComponent = (function () {
    function RootComponent(location, router) {
        this.location = location;
        this.router = router;
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent.prototype.ngAfterViewInit = function () {
        this.tabs.select(this.currentPath());
    };
    RootComponent.prototype.currentPath = function () {
        return this.location.path().replace(/\//, '');
    };
    RootComponent.prototype.tabChange = function (event) {
        if (event.nextId != this.currentPath())
            this.router.navigate([event.nextId]);
    };
    return RootComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('tabs'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbTabset */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbTabset */]) === "function" && _a || Object)
], RootComponent.prototype, "tabs", void 0);
RootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'kgi-root',
        template: __webpack_require__(231),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RootComponent);

var _a, _b, _c;
//# sourceMappingURL=root.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_parser__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_info_info__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_projects_projects__ = __webpack_require__(132);
/* unused harmony export LibrariesResolver */
/* unused harmony export ApplicationsResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LibrariesResolver = (function () {
    function LibrariesResolver(parser) {
        this.parser = parser;
    }
    LibrariesResolver.prototype.resolve = function (route) {
        return this.parser.get({ images: undefined });
    };
    return LibrariesResolver;
}());
LibrariesResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_parser__["a" /* ParserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_parser__["a" /* ParserService */]) === "function" && _a || Object])
], LibrariesResolver);

var ApplicationsResolver = (function () {
    function ApplicationsResolver(parser) {
        this.parser = parser;
    }
    ApplicationsResolver.prototype.resolve = function (route) {
        return this.parser.get({ images: '*' });
    };
    return ApplicationsResolver;
}());
ApplicationsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_parser__["a" /* ParserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_parser__["a" /* ParserService */]) === "function" && _b || Object])
], ApplicationsResolver);

var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: 'info',
                    component: __WEBPACK_IMPORTED_MODULE_3_app_info_info__["a" /* InfoComponent */]
                },
                {
                    path: 'libraries',
                    component: __WEBPACK_IMPORTED_MODULE_4_app_projects_projects__["a" /* ProjectsComponent */],
                    resolve: {
                        projects: LibrariesResolver
                    }
                },
                {
                    path: 'applications',
                    component: __WEBPACK_IMPORTED_MODULE_4_app_projects_projects__["a" /* ProjectsComponent */],
                    resolve: {
                        projects: ApplicationsResolver
                    }
                },
                {
                    path: '**',
                    redirectTo: '/info'
                }
            ])
        ],
        providers: [LibrariesResolver, ApplicationsResolver],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], RoutingModule);

var _a, _b;
//# sourceMappingURL=routing.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ":host {\r\n\tdisplay: block;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-flow: row wrap;\r\n\t        flex-flow: row wrap;\r\n\t-ms-flex-line-pack: start;\r\n\t    align-content: flex-start;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ":host {\r\n\tdisplay: block;\r\n\tpadding: 8px;\r\n}\r\n\r\nheader {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-flow: row nowrap;\r\n\t        flex-flow: row nowrap;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "nav {\n\tbackground-color: #172121;\n\tborder-bottom: 4px solid #4da167;\n}\n\nh1 {\n\tpadding: 8px;\n\t\n\tcolor: #4A6C6F;\n\tfont-family: \"Alfa Slab One\";\n}\n\n#view {\n\tpadding: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<img src=\"{{image}}\" alt=\"{{image}}\" *ngFor=\"let image of images\">"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<h3>Some placeholder thingymajingagaring</h3>"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<ngb-accordion [closeOthers]=\"true\">\n\t<ngb-panel *ngFor=\"let project of projects\">\n\t\t<ng-template ngbPanelTitle>\n\t\t\t<h5>{{project.title}}</h5>\n\t\t</ng-template>\n\t\t<ng-template ngbPanelContent>\n\t\t\t<header>\n\t\t\t\t<h1>{{project.title}}</h1>\n\n\t\t\t\t<span>\n\t\t\t\t\t<a *ngIf=\"project.bintray\" href=\"{{project.bintray.url}}\"><img src=\"{{project.bintray.badge}}\" alt=\"Bintray\"></a>\n\t\t\t\t\t<a href=\"{{project.github}}\"><img src=\"assets/github.png\" alt=\"GitHub\"></a>\n\t\t\t\t</span>\n\t\t\t</header>\n\n\t\t\t<h2>{{project.description}}</h2>\n\t\t\t<h4>Current version: {{project.version}}</h4>\n\n\t\t\t<div *ngIf=\"project.images\">\n\t\t\t\t<h4>Images</h4>\n\t\t\t\t<kgi-image-block [images]=\"project.images\"></kgi-image-block>\n\t\t\t</div>\n\t\t</ng-template>\n\t</ngb-panel>\n</ngb-accordion>"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<h1>kkorolyov's GitHub Thingies</h1>\n\n\t<ngb-tabset #tabs=\"ngbTabset\" (tabChange)=\"tabChange($event)\">\n\t\t<ngb-tab id=\"info\">\n\t\t\t<ng-template ngbTabTitle>\n\t\t\t\t<h4>Info</h4>\n\t\t\t</ng-template>\n\t\t\t<ng-template ngbTabContent></ng-template>\n\t\t</ngb-tab>\n\n\t\t<ngb-tab id=\"libraries\">\n\t\t\t<ng-template ngbTabTitle>\n\t\t\t\t<h4>Libraries</h4>\n\t\t\t</ng-template>\n\t\t\t<ng-template ngbTabContent></ng-template>\n\t\t</ngb-tab>\n\n\t\t<ngb-tab id=\"applications\">\n\t\t\t<ng-template ngbTabTitle>\n\t\t\t\t<h4>Applications</h4>\n\t\t\t</ng-template>\n\t\t\t<ng-template ngbTabContent></ng-template>\n\t\t</ngb-tab>\n\t</ngb-tabset>\n</nav>\n\n<div id=\"view\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(157);


/***/ })

},[266]);