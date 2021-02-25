import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import clsx from "clsx";
import {FullscreenControl, GeoObject, Map, Placemark, YMaps, ZoomControl} from 'react-yandex-maps';

export function Basket(props,state) {
    return (
        <div className={classesAll.MainContainer}>

            <div className={classesAll.box}>
                <div className={classesAll.headerBox}>Корзина</div>
                <div className={classes.content}>
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
        </div>
    )
}
