import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import "animate.css"
import clsx from "clsx";
import {Link} from "react-router-dom";

export function Success(props,state) {
    return (
        <div className={classesAll.MainContainer}>

            <div className={clsx(classesAll.box,"animate__animated","animate__bounce")}>
                <div className={classesAll.headerBox}>Ваш заказ успешно оформлен! <br/>
                Спасибо за покупку.
                </div>
                <div style={{marginTop: "20px",fontSize: "18px",textAlign: "right"}} className={classesAll.headerBox}><Link to={"/Catalog"}>Продолжить покупки →</Link> </div>
            </div>
        </div>
    )
}