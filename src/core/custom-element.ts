/**
 * 인터페이스에 정의된 형식의 데이터를 받고 초기화면서 동시에 
 * 클로저안에 함수를 리턴하여 특정 기능을 수행한다.
 */
export interface customElemntParameter {
    tagName: string;
    option?: { extends: string };                 
}       
       
// 파라미터로 받는 부분이 초기화 되면서 동시에 리턴되는 함수는 MetaData를 받는다.  
const CustomElement = ( parameter: customElemntParameter) => {
    
    return (element : Function) => { 
        // console.log(element);
        window['customElements'].define(parameter.tagName, element, parameter.option);
    };
};      
     
    
export { CustomElement };