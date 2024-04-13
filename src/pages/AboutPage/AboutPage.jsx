import React, {useEffect, useState} from 'react';
import cls from './AboutPage.module.scss'
import {Footer, Header} from "../../widgets";
import aboutImage from '../../shared/assets/img/about-image.png'

function AboutPage() {

    const [isOpen, setOpen] = useState(true)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                        <>
                            <div className={cls.aboutPage__info}>
                                <p>Administrators of Team Cloud organizations can export public data from their
                                    organization
                                    via
                                    the organization settings menu. The exports include all the data that appears in
                                    public
                                    streams, and can be used to migrate from Team Cloud to self-hosting Team. Note
                                    that
                                    exporting private data is a separate process that requires contacting Team
                                    Support.</p>

                                <img src={aboutImage} alt="aboutPage img"/>
                            </div>

                            <div className={cls.aboutPage__nextInfo}>
                                <p>Due to a bug in the public export code, exports of public data contained all uploaded
                                    files,
                                    even those from private messages and private streams. This may have allowed
                                    organization
                                    owners or administrators to extract uploaded files that they were not otherwise
                                    allowed
                                    to
                                    access. The content of non-public messages was never included in public exports.</p>
                                <p>This bug has existed since the public export feature was implemented in August 2019.
                                    We have
                                    deleted all existing Team Cloud exports from our servers, and will be making changes
                                    to
                                    auto-expire all exports after 7 days in the future. This bug was fixed for
                                    self-hosted users
                                    in
                                    the Team Server 5.4 release.</p>
                                <p>We have notified by email all administrators and users in non-deactivated Team Cloud
                                    organizations who may have been impacted by this bug. As many organizations have
                                    never
                                    exported
                                    their data, most Team Cloud users were not affected.</p>
                                <p>We would like to thank Antoine Benoist for bringing this issue to our attention.</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={cls.aboutPage__info}>
                                <div>
                                    <p>Administrators of Team Cloud organizations can export public data from their
                                        organization
                                        via
                                        the organization settings menu. The exports include all the data that appears in
                                        public
                                        streams, and can be used to migrate from Team Cloud to self-hosting Team. Note
                                        that
                                        exporting private data is a separate process that requires contacting Team
                                        Support.</p>
                                    <p>Due to a bug in the public export code, exports of public data contained all
                                        uploaded
                                        files,
                                        even those from private messages and private streams. This may have allowed
                                        organization
                                        owners or administrators to extract uploaded files that they were not otherwise
                                        allowed
                                        to
                                        access. The content of non-public messages was never included in public
                                        exports.</p>
                                </div>

                                <img src={aboutImage} alt="aboutPage img"/>
                            </div>

                            <div className={cls.aboutPage__nextInfo}>
                                <p>This bug has existed since the public export feature was implemented in August 2019.
                                    We have
                                    deleted all existing Team Cloud exports from our servers, and will be making changes
                                    to
                                    auto-expire all exports after 7 days in the future. This bug was fixed for
                                    self-hosted users
                                    in
                                    the Team Server 5.4 release.</p>
                                <p>We have notified by email all administrators and users in non-deactivated Team Cloud
                                    organizations who may have been impacted by this bug. As many organizations have
                                    never
                                    exported
                                    their data, most Team Cloud users were not affected.</p>
                                <p>We would like to thank Antoine Benoist for bringing this issue to our attention.</p>
                            </div>
                        </>
                    )}


                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default AboutPage;
