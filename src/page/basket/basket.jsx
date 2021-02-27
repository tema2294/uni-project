import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import clsx from "clsx";
import {Link} from "react-router-dom";
import {formatAmount} from "../../formatAmount";

export function Basket(props) {
    const dataBasket = props.state
    let sum = 0
    return (
        <div className={classesAll.MainContainer}>

            <div className={clsx(classesAll.box, "animate__animated", "animate__fadeIn")}>
                <div className={classesAll.headerBox}>Корзина</div>
                <div className={classes.content}>

                    {dataBasket.map(key =>  {
                            return (
                                <div key={key.id} className={classes.itemBasket}>
                                    <div><img className={classes.img} src={key.img}/></div>
                                    <div className={classes.textItem}>{key.name}</div>
                                    <div className={classes.Count}>
                                        <div onClick={() => props.deleteItem(key)}>-</div>
                                        <div>{key.count}</div>
                                        <div onClick={() => props.setState(key)}>+</div>
                                    </div>
                                    <div className={classes.count}>
                                        {key.count * key.price + " руб"}
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                {props.sum !== 0 &&
                    <>
                <div className={classes.result}>
                    <div>Сумма:</div>
                    <div className={classes.count}>{formatAmount(props.sum) + " руб"}</div>
                </div>

                    <div className={classes.Gobuy}>
                        <Link to={"/Payment"} className={classes.btnbuy}>Оформить заказ</Link>
                    </div>
                </>
                }
                {props.sum === 0 &&
                <div className={classes.nullBasket}>Корзина пуста</div>
                }
            </div>
        </div>
    )
}
