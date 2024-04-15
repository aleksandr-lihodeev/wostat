import React, {useEffect, useState} from 'react';
import cls from './VacancyPage.module.scss'
import {Footer, Header} from "../../widgets";
import {MyButton} from "../../shared";
import {fetchData} from "../../shared/lib/helper";

function VacancyPage() {
    const [data, setData] = useState([])


    const [isOpen,setOpen] = useState(true)

    useEffect(() => {
        fetchData('http://localhost:5000/vacancies', setData);
    }, []);

    return (
        <section className={cls.vacancy}>
            <Header state={isOpen} setState={setOpen} dark={true}/>
            <div className="container">
                <div className={cls.vacancy__wrap}>
                    <p className={cls.vacancy__title}>Open vacancies</p>
                    <p className={cls.vacancy__subtitle}>Please respond to the vacancy you like and we will contact you</p>
                    <div className={cls.vacancy__cards}>
                        {data?.map((item) => (
                            <div className={cls.vacancy__card}>
                                <p className={cls.vacancy__cardTitle}>{item.title}</p>
                                <div className={cls.vacancy__cardDescr}>
                                    <p>{item.subtitle}</p>
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
