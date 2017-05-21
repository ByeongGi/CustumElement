import { reflectionUtil, reflectionMethodUtil } from './anotation';
import { CustomElement } from "./core/custom-element";




@reflectionUtil()
class test {

  private test: string;

  @reflectionMethodUtil()
  m1(): void {

  }

}


// class List extends HTMLElement {
//   constructor() {
//     // super class의 생성자를 항상 호출해야함
//     super();  
//     // let shadowRoot = this.attachShadow({mode: 'open'});
//     // shadowRoot.innerHTML = ``;    

//   }


// }     
// // Define the new element  
// customElements.define('kira-list', List);

@CustomElement({ tagName: 'my-test' })
class Test extends HTMLElement {
  constructor() {
    super();
  }
}
//   connectedCallback() :void {
//     console.log('DOM 연결되었을때');
//   }
//   disconnectedCallback() :void{
//     console.log('DOM 과 연결이 해체시에 ');                
//   }
//   attributeChangedCallback(attrName:string, oldVal:any, newVal:any) :void {

//   }


//  init(){
//   //let shadowRoot = this.attachShadow({mode: 'open'});
//   // shadowRoot.innerHTML = `<p> TEST </p>`;    

//  }
// }

