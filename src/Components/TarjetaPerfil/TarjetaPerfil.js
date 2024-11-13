import React from "react";
import style from './TarjetaPerfil.module.css';

function TarjetaPerfil(){
    return(
        <div className={style.card}>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                alt=""
                className={style.avatar}
            >
            </img>
            <h2 className={style.name}>Usuario Inventado</h2>
            <p className={style.description}>Otro</p>
            
        </div>
)
}
export default TarjetaPerfil;
