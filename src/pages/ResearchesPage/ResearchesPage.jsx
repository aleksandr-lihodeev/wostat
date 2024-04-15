import React, {useEffect, useState} from 'react';
import cls from './ResearchesPage.module.scss'
import {Footer, Header} from "../../widgets";
import {MyButton} from "../../shared";
import ResearchesPageItem from "./ResearchesPageItems/ResearchesPageItem";
import {fetchData} from "../../shared/lib/helper";



function ResearchesPage() {
    const [data, setData] = useState([])

    const [isOpen, setOpen] = useState(true)


    useEffect(() => {
        fetchData('http://localhost:5000/posts', setData);
    }, []);

    return (
        <>
            <section className={cls.researches}>
                <Header state={isOpen} setState={setOpen} dark={true}/>
                <div className="container">
                    <div className={cls.researches__wrap}>
                        <h1 className={cls.researches__title}>Researches</h1>
                        <p className={cls.researches__subtitle}>All the research is available here for public access</p>
                        <div className={cls.researches__cards}>
                            {data?.map((item) => (
                                <ResearchesPageItem item={item}/>
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
