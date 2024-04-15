import cls from "../AboutPage.module.scss";
import aboutImage from "../../../shared/assets/img/about-image.png";
import React from "react";

const AboutPageBlockWithWidth = () => {
    return (
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
    )
}
 export default AboutPageBlockWithWidth
