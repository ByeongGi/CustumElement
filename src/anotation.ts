/**
 * 타입스크립트의 데코레이터 기능들을 확인...
 * 
 */
const reflectionUtil =(): any =>{
    return( target: any, propertyKey: string, descriptor: PropertyDescriptor ):void =>{
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}

const reflectionMethodUtil =(): any =>{
    return( target: any, propertyKey: string, descriptor: PropertyDescriptor ):void =>{
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}

export { reflectionUtil,reflectionMethodUtil } ;