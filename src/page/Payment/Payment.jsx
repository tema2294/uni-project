import React, {useRef, useState} from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import "animate.css"
import clsx from "clsx";
import {FullscreenControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {useToasts} from "react-toast-notifications";
import {Link} from "react-router-dom";
import {useHistory} from "react-router";


const tabs = [
    {title: "Доставка", path: true},
    {title: "Самовывоз", path: false},
]
const tabs2 = [
    {title: "Картой", path: true},
    {title: "Наличными при получении", path: false},
]

const Toast1 = [
    "Товар успешно добавлен в корзину", {
        appearance: 'success',
    }]
const Toast2 =[
    "Заполните пожалуйста все поля ввода", {
        appearance: 'error',
    }]

export function Payment(props) {
    const history = useHistory();

    const { addToast } = useToasts();
    const [tab, setTab] = useState("")
    const [payment, setPayment] = useState("")
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    function navigateToHome() {
        history.push("/Success");
        addToast("Заказ успешно оформлен", {
            appearance: 'success',
        })
    }
    function Error() {
        addToast("Заполните пожалуйста все поля ввода", {
            appearance: 'error',
        })
    }
    function Buy() {

       if (ref1.current.value && ref2.current.value && ref3.current.value) {
           props.setState([])
           props.setSum(0)
           navigateToHome()

       } else  Error()

    }

    return (
        <div className={classesAll.MainContainer}>

            <div className={clsx(classesAll.box, "animate__animated", "animate__bounce")}>
                <div className={classesAll.headerBox}>Оплата</div>
                <div className={classes.content}>

                    <div className={classes.stepBuy}>
                        <div className={classes.headerStep}>1. Контактные данные</div>
                        <div className={classes.header2}>Получатель:</div>
                        <div className={classes.leftContainer}>
                            <div className={classes.infoInput}>Имя*</div>
                            <input ref={ref1} className={classes.InputCustom} placeholder={"Введите ваше имя"}/>
                        </div>
                        <div className={classes.rightContainer}>
                            <div className={classes.infoInput}>Фамилия*</div>

                            <input ref={ref2} className={classes.InputCustom} placeholder={"Введите ваше фамилию"}/>
                        </div>
                        <div className={classes.leftContainer}>
                            <div className={classes.infoInput}>Номер телефона*</div>
                            <input ref={ref3} className={classes.InputCustom} placeholder={"Введите ваш номер телефона"}/>
                        </div>
                    </div>
                    <div style={{marginTop: "50px"}} className={classes.headerStep}>2. Доставка</div>

                    <div className={classes.Tabs}>
                        <div className={clsx(classes.TabsJoined)}>
                            {tabs.map(({path, title}) => (
                                <button
                                    key={path}
                                    onClick={() => setTab(path)}

                                    // eslint-disable-next-line eqeqeq
                                    className={clsx(classes.Tab, path == tab && classes.Active)}
                                >
                                    {title}
                                </button>
                            ))}
                        </div>
                    </div>
                    {!tab &&
                    <div className={classes.delivery1}>
                        <div className={classes.header2}>Забрать товар можно ,будет в любой день недели,с
                            10:00 - 20:00
                        </div>
                        <YMaps>
                            <Map className={classes.map}
                                 defaultState={{
                                     center: [57.621426, 39.926000],
                                     zoom: 16,
                                     controls: [],
                                 }}
                            >
                                <FullscreenControl/>
                                <ZoomControl/>
                                <Placemark geometry={[57.621426, 39.926000]}/>
                            </Map>
                        </YMaps>
                    </div>
                    }
                    {tab &&
                    <div className={classes.stepBuy}>
                        <div className={classes.header2}>Получатель:</div>
                        <div className={classes.leftContainer}>
                            <div className={classes.infoInput}>Город*</div>
                            <input className={classes.InputCustom}/>
                        </div>
                        <div className={classes.rightContainer}>
                            <div className={classes.infoInput}>Улица*</div>

                            <input className={classes.InputCustom}/>
                        </div>
                        <div className={classes.leftContainer}>
                            <div className={classes.infoInput}>Номер Дома*</div>
                            <input className={classes.InputCustom}/>
                        </div>
                        <div className={classes.rightContainer}>
                            <div className={classes.infoInput}>Номер квартиры*</div>

                            <input className={classes.InputCustom}/>
                        </div>
                    </div>
                    }

                    <div style={{marginTop: "50px"}} className={classes.Pay}>
                        <div className={classes.headerStep}>3. Оплата</div>
                        <div className={classes.Tabs}>
                            <div className={clsx(classes.TabsJoined)}>
                                {tabs2.map(({path, title}) => (
                                    <button
                                        key={path}
                                        onClick={() => setPayment(path)}

                                        // eslint-disable-next-line eqeqeq
                                        className={clsx(classes.Tab, path == payment && classes.Active)}
                                    >
                                        {title}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {payment &&
                        <>
                            <div className={classes.header2}>К оплате {props.sum} рубля.</div>
                            <div className={classes.header2}>Введите данные карты:</div>

                            <div className={classes.PaymentCard}>

                                <div>
                                    <label>
                                        Номер карты:
                                        <input type="number" className={classes.inputCard} maxlength="12"/>
                                    </label>
                                </div>
                                <div className={classes.Month}>
                                    <label>
                                        Срок действия:
                                        <input maxLength="2" className={classes.inputMouth}/>
                                    </label>
                                    <div className={classes.separator}>/</div>
                                    <input maxlength="2" className={classes.inputMouth}/>
                                </div>
                                <div style={{width: "100%", display: "flex"}} className={classes.header2}>
                                    <span>СVV:</span>
                                    <input maxLength="3" className={classes.inputMouth}/>

                                </div>
                                <img className={classes.visa}
                                     src={"https://virion.ru/upload/medialibrary/937/937a74cc6a9c30b216027f31e07dfe76.png"}/>
                            </div>
                        </>
                        }
                        {!payment &&
                            <>
                        <div className={classes.header2}>Оплата будет произведена наличными при получении товара</div>
                            <div className={classes.header2}>К оплате {props.sum} рубля.</div>
                        </>

                        }
                        <div className={classes.operation}><div onClick={Buy}>Оформить заказ</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}