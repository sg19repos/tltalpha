import React, { Fragment } from "react";
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import Dashboard from "../components/DashboardComponents";
import Header from "../components/CommonComponents/Header";
import IonContentStyles from "../styledComponents/IonContentStyles";

const DashboardPage = () => {
    const currentPageName = "Dashboard";
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
                            <Dashboard />
                        </div>
                    </IonContent>
                </IonContentStyles>
            </div>
        </IonPage>
    );
};

export default DashboardPage;
