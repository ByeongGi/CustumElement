import { CustomElement } from "../core/custom-element";

@CustomElement({tagName:'kira-list'})
export class List extends HTMLUListElement{
    constructor(){
        super();  
    }
}

