import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import clsx from "clsx";
import {FullscreenControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";

export function About(props,state) {
    return (
        <div className={classesAll.MainContainer}>

            <div className={clsx(classesAll.box,"animate__animated","animate__fadeInUpBig")}>
                <div className={classesAll.headerBox}>О нас</div>
                <div className={classesAll.content2}>
                    «Интернет магазин стройматериалов» - компания-ритейлер,<br/> специализирующаяся на продаже товаров для строительства,<br/> отделки и обустройства дома.<br/> Мы отправляем заказы покупателям в регионы России и СНГ,<br/> гарантируя своевременность выполнения заказа.<br/><br/><br/>

                    Наши контакты:<br/><br/>

                    WhatsApp: +7(999)-790-10-85 Артем<br/><br/>

                    +7(962)-200-06-32 Евгений<br/><br/>

                    Г. Ярославль, ул. Союзная 144
                </div>
                <YMaps>
                    <Map className={classes.map}
                         defaultState={{
                             center: [57.621426, 39.926000],
                             zoom: 16,
                             controls: [],
                         }}
                    >
                        <FullscreenControl />
                        <ZoomControl />
                        <Placemark geometry={[57.621426, 39.926000]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}