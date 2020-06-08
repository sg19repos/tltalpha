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
import Header from "../components/CommonComponents/Header";
import IonContentStyles from "../styledComponents/IonContentStyles";
import FAQ from "../components/FAQComponents";

const FAQPage = () => {
    const currentPageName = "FAQ";
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
                        <FAQ />
                    </IonContent>
                </IonContentStyles>
            </div>
        </IonPage>
    );
};

export default FAQPage;
