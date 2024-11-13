import React from "react";

function Tarjeta(){
    return(
        <div className="profile-card">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                alt=""
                className="profile-avatar"
            >
            </img>
            <h2 className="profile-name">Usuario Inventado</h2>
            <p className="profile-description">Developer</p>
            <button className="profile-button">Seguir</button>
        </div>
    )
}
export default Tarjeta;