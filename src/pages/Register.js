import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import React, { useState } from "react";
import Header from "../components/CommonComponents/Header";
import IonContentStyles from "../styledComponents/IonContentStyles";
import Login from "../components/Login";
import Register from "../components/Registration";

function RegisterPage() {
    const currentPageName = "SignIn - SignUp";
    const [signUp, setSignUp] = useState(true);

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
                <button
                    className="signin-switch"
                    onClick={() => setSignUp(!signUp)}
                >
                    {signUp ? "Returning User?" : "New User?"}
                </button>
                <IonContentStyles>
                    <IonContent>{signUp ? <Register /> : <Login />}</IonContent>
                </IonContentStyles>
            </div>
        </IonPage>
    );
}

export default RegisterPage;
