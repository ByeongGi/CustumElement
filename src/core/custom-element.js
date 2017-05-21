"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomElement = (parameter) => {
    return (element) => {
        window['customElements'].define(parameter.tagName, element, parameter.option);
    };
};
exports.CustomElement = CustomElement;
