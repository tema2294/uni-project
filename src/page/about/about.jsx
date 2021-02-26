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
                <div onClick={()=> props.setState((prev)=>[...prev,{0:0,3:"eqwe",4:"eqweq"}])}>Плюсик</div>
                <div className={classesAll.content2}>
                    Наша компания занимается продажей товаров высшего качество.
                    Я привожу,жека торгует .Все дела в общем все очень весело и круто
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