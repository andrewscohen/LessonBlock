import {useState} from "react";

const TestFormA = ({setShowFormA}) => {
    return (
        <>
            <h1>Test Form A Bitch</h1>
            <button onClick={() => setShowFormA(false)}>TOGGLE TO B</button>
        </>
    )
}

export default TestFormA;
