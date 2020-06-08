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
import ContactUs from "../components/ContactUsComponents/contactus";

const ContactUsPage: React.FC = () => {
    const currentPageName = "Contact Us";
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
                        <ContactUs />
                    </IonContent>
                </IonContentStyles>
            </div>
        </IonPage>
    );
};

export default ContactUsPage;
