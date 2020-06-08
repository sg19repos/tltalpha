import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import React, { Fragment } from "react";
import Header from "../components/CommonComponents/Header";
import Home from "../components/HomeComponents";
import IonContentStyles from "../styledComponents/IonContentStyles";

const Home2 = () => {
    const currentPageName = "Home";
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
                        <Home />
                    </IonContent>
                </IonContentStyles>
            </div>
        </IonPage>
    );
};

export default Home2;
