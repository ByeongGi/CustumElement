import { CustomElement } from "../../core/custom-element";
import { Log } from '../../utils/Log';

@CustomElement({ tagName: 'kira-button', option : { extends : "button" } })
export class Button extends HTMLButtonElement { 

    constructor(){                    
        super(); // always call super() first in the ctor.
        console.log(111);
    }    

  
}





