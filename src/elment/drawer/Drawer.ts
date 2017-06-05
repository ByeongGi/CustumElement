import { CustomElement } from "../../core/custom-element";
import { Log } from '../../utils/Log';


@CustomElement({ tagName: 'kira-drawer' })
export class Drawer extends HTMLElement {

    constructor() {
        super();
        console.log('Drawer 생성 !!');
    }

    // attribute 값이 변경 될떄마다 호출되는 가져올 attribute의 값을 지정한다. 배열 형태로 리턴하면 해당 
    // attribute의 값이 변경될때마다 아래의 attributeChangeCallback이 호출된다.
    static get observedAttributes() {
        return ['name', 'disabled'];
    }


    get disabled() {
        console.log('getter disabled')
        return this.hasAttribute('disabled');
    }


    set disabled(val) {
        console.log('setter disabled')
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }



    @Log()
    attributeChangedCallback(name: String, oldValue: String, newValue: String) {
        console.log(name);
        console.log(oldValue);
        console.log(newValue);
    }

    

} 