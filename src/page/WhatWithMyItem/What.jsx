import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import "animate.css"
import clsx from "clsx";

export function WhatMyItem(props,state) {
    return (
        <div className={classesAll.MainContainer}>

            <div className={clsx(classesAll.box,"animate__animated","animate__bounce")}>
                <div className={classesAll.headerBox}>Cкидочная система</div>
                <div className={classesAll.content2}>
                    После того, как вы оплатили заказ, в зависимости от выбора способа оплаты, с ним происходит следующее:
                    <br/><br/>
                  <br/>  А) Если выбрали доставку, то заказ собирается и высылается на следующий день, после заказа.
                    <br/><br/>
                    <br/>  Б) Если выбрали самовывоз, то вы можете его получить в любой день в пункте выдачи с 10:00 до 20:00 в течение одной недели.
                </div>
                <div style={{backgroundRepeat:" no-reapeat"}} className={classes.images}>

                </div>
            </div>
        </div>
    )
}