import React, { Fragment } from "react";
import "./aboutUsStyle.css";

const AboutLcec = () => {
    return (
        <Fragment>
            <div className="outerBorderDiv ">
                <h4 className="aboutUs_inner_component_title">
                    ABOUT THE LCEC
                </h4>
                <img src="assets/lcec-logo.png" alt="CountryImage" />
                <div className="scrollBar">
                    <p>
                        The Lebanese Center for Energy Conservation (LCEC) is
                        the National Energy Agency for Lebanon. LCEC is a
                        governmental organization affiliated to the Lebanese
                        Ministry of Energy and Water (MEW). It is the technical
                        arm of the Ministry in all subjects related to Energy
                        Efficiency, Renewable Energy, and Green Buildings.
                    </p>
                    <p>
                        The actual work of LCEC started back in 2002 when it was
                        initiated as a joint project between the Ministry of
                        Energy and Water (MEW) and the United Nations
                        Development Programme (UNDP) Lebanon. In 2007, the MEW
                        and UNDP signed an agreement to continue their
                        cooperation towards the setup and institutionalization
                        of LCEC. Following this agreement, LCEC was created as
                        an independent governmental organization affiliated to
                        the MEW in 2011.
                    </p>
                    <p>
                        LCEC has succeeded in establishing itself as the
                        national reference on Sustainable Energy in Lebanon. It
                        is the leading provider of energy efficiency and
                        renewable energy programs to the public and private
                        sectors in Lebanon. LCEC offers proven expertise and
                        support to the Government of Lebanon (GoL) to develop
                        and implement National Strategies towards saving energy,
                        saving money, reducing greenhouse gas emissions with the
                        final target being to improve durability, safety and
                        comfort of the Lebanese population.
                    </p>
                    <p>
                        At the 2009 Copenhagen Climate Summit, Lebanon
                        voluntarily pledged to increase the renewable energy
                        share to 12% by 2020. This voluntary commitment was
                        anchored within the “Policy Paper for the Electricity
                        Sector” prepared by the Ministry of Energy and Water
                        (MEW) and officially adopted by the Council of Ministers
                        in June 2010. Then the National Energy Efficiency Action
                        Plan (NEEAP) was launched in 2011 setting 14 initiatives
                        to support the strategic target of 12% Renewable Energy.
                        It was followed by the Second NEEAP in 2016 that
                        identifies other key measures to generate energy savings
                        at the national level.
                    </p>
                    <p>
                        Moreover, LCEC provides both the public and private
                        sector with expert advice, finance and accreditation,
                        develops energy efficiency standards and labels, and
                        provides national energy database indicators.
                    </p>
                    <p>
                        LCEC is successful in establishing partnerships with the
                        private and public sectors and in representing Lebanon
                        in the international arena. LCEC is the national focal
                        point for Lebanon in the Regional Center for Renewable
                        Energy and Energy Efficiency (RCREEE), the League of
                        Arab States (LAS), the EU-funded MED-ENEC project, the
                        International Renewable Energy Agency (IRENA), the
                        Mediterranean Solar Plan (MSP), the UNEP-funded
                        En-Lighten initiative. LCEC also represents the Lebanon
                        Committee of the World Energy Council (WEC).
                    </p>
                    <p>
                        For more information please refer to the following
                        website:{" "}
                        <a href="http://lcec.org.lb/en/LCEC">
                            http://lcec.org.lb/en/LCEC
                        </a>
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default AboutLcec;
