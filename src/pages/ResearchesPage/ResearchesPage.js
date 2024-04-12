import React, {useState} from 'react';
import cls from './ResearchesPage.module.scss'
import {Footer, Header} from "../../widgets";
import {researchesCards} from "../../shared/lib/config";
import {MyButton} from "../../shared";

function ResearchesPage() {

    const [isOpen,setOpen] = useState(true)

    return (
        <>
            <section className={cls.researches}>
                <Header state={isOpen} setState={setOpen} dark={true}/>
                <div className="container">
                    <div className={cls.researches__wrap}>
                        <h1 className={cls.researches__title}>Researches</h1>
                        <p className={cls.researches__subtitle}>All the research is available here for public access</p>
                        <div className={cls.researches__cards}>
                            {researchesCards.map((item) => (
                                <div className={cls.researches__card}>
                                    <img src={item.image} alt="card"/>
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
                            ))}
                        </div>
                        <div className={cls.researches__btnWrap}>
                            <MyButton classes={'researches-btn'}>Next</MyButton>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    );
}

export default ResearchesPage;
