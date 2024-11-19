import React, {forwardRef} from "react";
interface InputComponentProps {
}
const RefChild = forwardRef<HTMLInputElement, InputComponentProps>((props, ref) =>{
    return (
        <input
            ref={ref}  // Forward the ref to the input element
            type="text"
            placeholder="Type something..."
        />
    );
});
export default RefChild