
export interface customElemntParameter {
    tagName: string;
}


const Log = (parameter?: customElemntParameter)=> {
     
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor)=>{

        // console.log("----------LOG ----------");
        // console.log(target);
        // console.log(propertyKey); 
        // console.log(descriptor);
        // console.log("----------LOG ----------");
        
        var orizinalMethode = descriptor.value;
        descriptor.value = function(...args:any[]){
            
            var argumentArr = args.map((arg)=> JSON.stringify(arg)).join();
            var result = orizinalMethode.apply(this, args);
            var resultStr = JSON.stringify(result); 
            console.log(`Calling fn “${propertyKey}” with args: (${argumentArr}) , result: ${resultStr}`);
            return result;
        };

        return descriptor;

    };
};


export { Log };