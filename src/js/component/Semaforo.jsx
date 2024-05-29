import React, { useState } from "react";

const Semaforo = () => {
    const [colorActivo, setColorActivo] = useState("rojo");

    return (
        <div className="poste">
            <div 
                className={`luz ${colorActivo === "rojo" ? "rojo brillo" : ""}`} 
                onClick={() => setColorActivo("rojo")}
            ></div>
            <div 
                className={`luz ${colorActivo === "amarillo" ? "amarillo brillo" : ""}`} 
                onClick={() => setColorActivo("amarillo")}
            ></div>
            <div 
                className={`luz ${colorActivo === "verde" ? "verde brillo" : ""}`} 
                onClick={() => setColorActivo("verde")}
            ></div>
        </div>
    );
};

export default Semaforo;



