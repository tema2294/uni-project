import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import clsx from "clsx";
import {FullscreenControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";

export function Feedback(props, state) {
    return (
        <div className={classesAll.MainContainer}>

            <div className={clsx(classesAll.box,"animate__animated","animate__fadeInUpBig")}>
                <div className={classesAll.headerBox}>Отзывы</div>
                <div className={classesAll.content2}>
                    <div className={classes.nullBasket}>На данный момент отзывов нет!<br/>
                    Если вы желаете оставить отзыв,<br/>отправьте его по адресу<br/>feedback.stroika@mail.ru
                        <br/>
                        Мы обязательно опубликуем его.
                    </div>
                </div>
            </div>
        </div>
    )
}