import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import React from "react";
import CountryBackground from "../components/AboutUsComponents/CountryBackground";
import AboutILC from "../components/AboutUsComponents/aboutILC";
import AboutImels from "../components/AboutUsComponents/aboutImels";
import AboutLcec from "../components/AboutUsComponents/aboutLcec";
import Header from "../components/CommonComponents/Header";
import IonContentStyles from "../styledComponents/IonContentStyles";

const AboutUsPage: React.FC = () => {
    const currentPageName = "About Us";
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>LCEC</IonTitle>
                </IonToolbar>
            </IonHeader>

            <div className="page-content">
                <Header currentPageName={currentPageName} />
                <IonContentStyles>
                    <IonContent>
                        <div className="hiwscrollBar">
                            <CountryBackground />
                            <AboutILC />
                            <AboutImels />
                            <AboutLcec />
                        </div>
                    </IonContent>
                </IonContentStyles>
            </div>
        </IonPage>
    );
};

export default AboutUsPage;
