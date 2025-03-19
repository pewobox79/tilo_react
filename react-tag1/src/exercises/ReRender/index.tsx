import Comp1 from "./Comp1"
import Comp2 from "./Comp2";
import { useState } from "react";

const ReRender = ({ children }) => {

    const [state, setState] = useState(false);

    function handleClick(){
        setState(!state)
    }
    return (
        <div>
            <button onClick={handleClick}>click</button>
            <Comp1 />
            <Comp2 />
            {children}

        </div>
    )
}

export default ReRender
