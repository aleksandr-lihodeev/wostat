import React, {useState} from 'react';
import cls from './VacancyPage.module.scss'
import {Footer, Header} from "../../widgets";
import {vacancies} from "../../shared/lib/config";
import {MyButton} from "../../shared";

function VacancyPage() {

    const [isOpen,setOpen] = useState(true)

    return (
        <section className={cls.vacancy}>
            <Header state={isOpen} setState={setOpen} dark={true}/>
            <div className="container">
                <div className={cls.vacancy__wrap}>
                    <p className={cls.vacancy__title}>Open vacancies</p>
                    <p className={cls.vacancy__subtitle}>Please respond to the vacancy you like and we will contact you</p>
                    <div className={cls.vacancy__cards}>
                        {vacancies.map((item) => (
                            <div className={cls.vacancy__card}>
                                <p className={cls.vacancy__cardTitle}>{item.title}</p>
                                <div className={cls.vacancy__cardDescr}>
                                    <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you
                                        Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you</p>
                                    <MyButton>Respond</MyButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default VacancyPage;
