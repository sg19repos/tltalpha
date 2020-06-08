import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { book, build, colorFill, grid } from "ionicons/icons";
import React from "react";
import "./Home.css";
import Header from "../components/CommonComponents/Header";
import Home from "../components/HomeComponents";
import IonContentStyles from "../styledComponents/IonContentStyles";

const HomePage: React.FC = () => {
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
                        <div className="hiwscrollBar">
                            {/* <IonCard className="welcome-card">
                        <img src="assets/logo.jpg" alt="" />
                        <IonCardHeader>
                            <IonCardSubtitle>Sample text here</IonCardSubtitle>
                            <IonCardTitle>LCEC</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla paria
                            </p>
                        </IonCardContent>
                    </IonCard> */}
                            <Home />
                        </div>
                    </IonContent>
                </IonContentStyles>
            </div>
        </IonPage>
    );
};

export default HomePage;
