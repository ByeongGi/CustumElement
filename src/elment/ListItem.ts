import { CustomElement } from "../core/custom-element";
 

@CustomElement({tagName:'kira-listitem'})
export class ListItem extends HTMLElement{

    constructor(){  
        super();
    }


    // onClick handler 등록 
    onclick = function(this:any, event:MouseEvent){
        alert(this + ": "+ event);
        console.log(this);
        console.log(event);
    }; 


    
    
} 
  