import React, {useState} from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import clsx from "clsx";
import {GetData} from "../../resData";
import {useToasts} from "react-toast-notifications";
import {formatAmount} from "../../formatAmount";

export function Catalog(props) {
    const [state,setState] = useState(0)
    const data = GetData("build")
    const data2 = GetData("finishing")
    const { addToast } = useToasts();

    return (
        <div className={classesAll.MainContainer}>

            <div className={clsx(classesAll.box,"animate__animated","animate__fadeInUpBig")}>
                {state === 0 ? <div className={classesAll.headerBox}>Категории</div> :
                    <div style={{cursor: "pointer"}} onClick={() => setState(0)}  className={classesAll.headerBox}>← Назад</div>}
                {state === 0 &&
                    <div className={classes.content}>
                    <div onClick={() => setState(1)} className={classes.cardCatalog}>
                        <div className={classes.headerCard}>Строительство</div>
                    </div>
                    <div onClick={() => setState(2)} className={classes.cardCatalog}>
                        <div className={classes.headerCard}>Отделка</div>

                    </div>
                </div>}
                {state > 0 &&
                    <>
                    <div className={classesAll.content}>

                    {(state === 1 ? data : data2).map((key,i)=>
                        <div key={i} className={classesAll.card}>
                            <div style={{background: `url(${key.img})`}} className={classesAll.image}/>
                            <div className={classesAll.textcard}>{key.name}</div>
                            <div className={classesAll.info}>
                                <div className={classesAll.price}>{formatAmount(key.price)+" "+"руб."}</div>
                                <div onClick={()=> {
                                    props.setState(key)
                                    addToast("Товар успешно добавлен в корзину", {
                                        appearance: 'success',
                                    })}
                                } className={classesAll.btnBuy}>В корзину</div>
                            </div>
                        </div>)}
                </div>

                </>}
            </div>
        </div>
    )
}