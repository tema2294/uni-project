import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import "animate.css"
import clsx from "clsx";

export function Contacts(props,state) {
    return (
        <div className={classesAll.MainContainer}>

            <div className={clsx(classesAll.box,"animate__animated","animate__bounce")}>
                <div className={classesAll.headerBox}>Cкидочная система</div>
                <div className={classesAll.content2}>
                    Скидка начисляется автоматически в размере до 10% от стоимости заказа, при условии самовывоза.
                </div>
                <div style={{backgroundRepeat:" no-reapeat"}} className={classes.images}>

                </div>
            </div>
        </div>
    )
}