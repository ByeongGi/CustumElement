export interface customElemntParameter {
    tagName: string;
    option?: {
        extends: string;
    };
}
declare const CustomElement: (parameter: customElemntParameter) => (element: Function) => void;
export { CustomElement };
