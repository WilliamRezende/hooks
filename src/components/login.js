import React, { useState } from "react";
import Error from "../assets/error.png";
import Ok from "../assets/ok.png";

const Login = () => {
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(false);

    function handleUsuarioEstaLogado() {
        usuarioEstaLogado ? setUsuarioEstaLogado(false) : setUsuarioEstaLogado(true);
    }

    return (
        <div>
            <center>
                {usuarioEstaLogado ? (
                    <div>
                        <p>
                            <b>Você está logado!</b>
                        </p>
                        <img src={Ok} alt="ok" width="200" height="200" />
                    </div>
                ) : (
                    <div>
                        <p>
                            <b>Por favor, clique no botão login</b>
                        </p>
                        <img src={Error} alt="error" width="200" height="200" />
                    </div>
                )}
                <br />
                <button onClick={handleUsuarioEstaLogado}>{usuarioEstaLogado ? "Logout" : "Login"}</button>
            </center>
        </div>
    );
};

export default Login;
