import React, { Fragment } from "react";
import "./aboutUsStyle.css";

const AboutImels = () => {
    return (
        <Fragment>
            <div className="outerBorderDiv ">
                <h4 className="aboutUs_inner_component_title">About IMELS</h4>
                <img src="assets/ministero-logo.png" alt="CountryImage" />
                <div className="scrollBar">
                    <p>
                        The Italian Ministry of Environment, Land and Sea is the
                        governing body responsible for implementing
                        environmental policies.
                    </p>
                    <p>
                        Established in 1986, it carries out functions in the
                        field of: the protection of biodiversity, ecosystems and
                        marine-coastal heritage, protection of the territory and
                        waters, policies to combat climate change and global
                        warming, sustainable development, energy efficiency and
                        the circular economy, integrated management of the waste
                        cycle, reclamation of sites of national interest (SIN),
                        environmental assessment of strategic works, contrast to
                        atmospheric-acoustic-electromagnetic pollution and risks
                        deriving from chemicals and genetically modified
                        organisms.
                    </p>
                    <p>
                        It plays a role in guiding and supervising the
                        activities of the Institute for Environmental Protection
                        and Research (ISPRA) and national parks and marine
                        protected areas. It promotes good environmental
                        practices, sustainable mobility and urban regeneration
                        according to sustainability criteria. It deals with the
                        promotion of environmental education in schools.
                    </p>
                    <p>
                        His activity in international forums is intense, his
                        role in the management of community program funds is
                        central.
                    </p>
                    <p>
                        The Ministry avails itself of the collaboration of the
                        Coast Guard Harbor Offices and of the Carabinieri
                        (Forestry, Environmental and Agri-food Protection Unit)
                        Command (CUTFAA).
                    </p>
                    <p>
                        For more information please refer to the following
                        website:{" "}
                        <a href="https://www.minambiente.it">
                            https://www.minambiente.it
                        </a>
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default AboutImels;
