import React from "react";
import style from './Botao.module.scss';

function Botao(props:{texto: string}){
    const{texto}=props
    return(
        <button className={style.botao}>
            {texto}
        </button>
    )
}

export default Botao;