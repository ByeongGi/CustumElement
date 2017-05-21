"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reflectionUtil = () => {
    return (target, propertyKey, descriptor) => {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
};
exports.reflectionUtil = reflectionUtil;
const reflectionMethodUtil = () => {
    return (target, propertyKey, descriptor) => {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
};
exports.reflectionMethodUtil = reflectionMethodUtil;
