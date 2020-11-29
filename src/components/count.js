import React from "react";

const Count = (props) => {
    return (
        <p>
            Esse texto possui <b>{props.quantidadeCaracters}</b> caracteres.
        </p>
    );
};

export default Count;
