import { useState } from "react";

function ChildTwo () {

    const [count, setCount] = useState<number>(0);

    console.log("Child 2 rendered");

    function clickHandler() {
        setCount(count => count + 1);
    }

    return (
        <>
            <p>Child two works</p>
            <button onClick={clickHandler}>click in Child 2</button>
        </>
    );
} 

export default ChildTwo;