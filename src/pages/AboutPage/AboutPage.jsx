import React, {useState} from 'react';
import cls from './AboutPage.module.scss'
import {Footer, Header} from "../../widgets";
import AboutPageBlockWithWidth from "./AboutPageBlocks/AboutPageBlockWithWidth";
import AboutPageBlockWithoutWidth from "./AboutPageBlocks/AboutPageBlockWithoutWidth";
import useWindowWidth from "../../shared/lib/useWindowWidth";




function AboutPage() {

    const [isOpen, setOpen] = useState(true)

    const windowWidth = useWindowWidth();

    return (
        <section className={cls.aboutPage}>
            <Header state={isOpen} setState={setOpen} dark={true}/>
            <div className="container">
                <div className={cls.aboutPage__wrap}>
                    <p className={cls.aboutPage__title}>Data exported by Team Cloud organization administrators
                        contained private files</p>
                    <div className={cls.aboutPage__dateCategory}>
                        <p>Category</p>
                        <div className={cls.aboutPage__pallet}></div>
                        <p>June 14, 2023</p>
                    </div>

                    {windowWidth <= 992 ? (
                        <AboutPageBlockWithWidth/>
                    ) : (
                        <AboutPageBlockWithoutWidth/>
                    )}
                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default AboutPage;
