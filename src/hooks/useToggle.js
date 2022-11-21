
import { useState } from "react";
export default function useToggle(state = false) {
    const [toggleState, setToggleState] = useState(state);

    const toggle = () => {

        setToggleState(!toggleState);
    };

    return [toggleState, toggle];
}