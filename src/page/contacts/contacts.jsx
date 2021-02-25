import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import clsx from "clsx";

export function Contacts(props,state) {
    return (
        <div className={classesAll.MainContainer}>

            <div className={classesAll.box}>
                <div className={classesAll.headerBox}>Контакты</div>
                <div className={classesAll.content2}>
                    Мой номер вот<br/>
                    Жекин номер вот <br/>
                    <br/><br/><br/><br/><br/>ляляляляля тополя
                </div>
            </div>
        </div>
    )
}