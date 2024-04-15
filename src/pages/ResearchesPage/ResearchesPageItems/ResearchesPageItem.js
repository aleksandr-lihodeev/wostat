import React from 'react';
import cls from "../ResearchesPage.module.scss";

function ResearchesPageItem({item}) {
    return (
        <div className={cls.researches__card} key={item.id}>
            <img
                src={item.image}
                alt="image"/>
            <div className={cls.researches__cardWrap}>
                <h3>{item.title}</h3>
                <p className={cls.researches__card__subtitle}>{item.subtitle}</p>
                <div className={cls.researches__cardInfo}>
                    <p>{item.category}</p>
                    <div className={cls.researches__cardInfo__pallet}></div>
                    <p>{item.date}</p>
                </div>
            </div>
        </div>
    );
}

export default ResearchesPageItem;
