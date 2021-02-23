import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import clsx from "clsx";

export function About() {
    return (
        <div className={classesAll.MainContainer}>

            <div className={classesAll.box}>
                <div className={classesAll.headerBox}>Топ продаж</div>
                <div className={classesAll.content}>
                    приветики
                    <div onClick={()=>(console.log("hell"))}>+</div>
                </div>
            </div>
        </div>
    )
}