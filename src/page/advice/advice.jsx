import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import clsx from "clsx";
import {FullscreenControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";

export function Advice(props, state) {
    return (
        <div className={classesAll.MainContainer}>

            <div className={clsx(classesAll.box,"animate__animated","animate__fadeInUpBig")}>
                <div className={classesAll.headerBox}>Советы по выбору</div>
                <div className={classes.content2}>
                    <p>Пожалуй, нет определенных критериев для правильного выбора строительных материалов. Для некоторых этот вопрос решается довольно просто: покупать нужно то, что скажут&nbsp;наемные или знакомые строители, лучше всего положиться на их опыт и т.п.</p>
                    <p style={{marginLeft:"30px"}}><em><span style={{textDecoration: "underline;"}}>Однако не всегда</span> стройматериалы, приобретенные по совету строителей, будут качественными и надежными. Неважно, строятся квартиры в Москве или другом городе, процесс выбора материалов всегда затруднителен, поскольку современный рынок перенасыщен товарами, много производителей и предложений, конкуренция большая. Неопытному человеку легко запутаться в таком богатом разнообразии продукции и сделать неверный выбор.</em></p>
                    <p>Все дело в том, что строительные организации очень часто заключают <span style={{textDecoration: "underline;"}}>договора с производителями</span> материалов, и в условиях договора компания обязуется всячески продвигать и рекламировать товар, который производит фирма. Разумеется, вины строителей в этом никакой нет, иногда рабочая ситуация складывается не самым лучшим для них образом. Как можно понять, таким&nbsp;работникам будет куда важнее продать вам товар определенной марки и фирмы, и получить за продажу проценты. Поэтому далеко не всегда информация, которую предоставляют строители, достоверна.</p>
                    <p style={{marginLeft:"30px"}}><em>Также не стоит забывать и о том, что многие, казалось бы, опытные специалисты, на самом деле – <span style={{textDecoration: "underline;"}}>самоучки</span>, и не всегда в состоянии сделать правильный выбор. Ведь современные тенденции требуют постоянного самосовершенствования, изучения новых технологий.</em></p>
                    <p>Не последнюю роль в принятии решения о покупке стройматериалов играет раскрученность бренда, громкое имя фирмы-производителя или просто мода. Примером тому есть черепица или ламинат.</p>
                </div>
            </div>
        </div>
    )
}