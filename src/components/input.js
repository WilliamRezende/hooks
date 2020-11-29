import React, { useState } from "react";
import Count from "./count";

const Input = () => {
    const [valor, setValor] = useState("William");

    function handleValor(e) {
        setValor(e.target.value);
    }

    return (
        <div>
            <center>
                <input type="text" value={valor} onChange={handleValor} />
                <Count quantidadeCaracters={valor.length} />
            </center>
        </div>
    );
};

export default Input;
