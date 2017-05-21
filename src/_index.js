"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const anotation_1 = require("./anotation");
const custom_element_1 = require("./core/custom-element");
let test = class test {
    m1() {
    }
};
__decorate([
    anotation_1.reflectionMethodUtil(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], test.prototype, "m1", null);
test = __decorate([
    anotation_1.reflectionUtil()
], test);
let Test = class Test extends HTMLElement {
    constructor() {
        super();
    }
};
Test = __decorate([
    custom_element_1.CustomElement({ tagName: 'my-test' }),
    __metadata("design:paramtypes", [])
], Test);
