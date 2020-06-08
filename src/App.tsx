import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppPage } from "./declarations";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import EnergyTips from "./pages/EnergyTips";
import EnergyQuiz from "./pages/EnergyQuiz";
import ContactUs from "./pages/ContactUs";
import FAQPage from "./pages/Faq";
import TnCPage from "./pages/TnC";
import PrivacyPage from "./pages/Privacy";
import RegisterPage from "./pages/Register";
import DashboardPage from "./pages/Dashboard";
import {
    home,
    apps,
    helpCircle,
    checkmarkCircle,
    clipboard,
    at
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const appPages: AppPage[] = [
    {
        title: "Home",
        url: "/home",
        icon: home
    },
    {
        title: "AboutUs",
        url: "/AboutUs",
        icon: apps
    },
    {
        title: "How It Works",
        url: "/HowItWorks",
        icon: helpCircle
    },
    {
        title: "Energy Tips",
        url: "/EnergyTips",
        icon: checkmarkCircle
    },
    {
        title: "Energy Quiz",
        url: "/EnergyQuiz",
        icon: clipboard
    },
    {
        title: "Contact Us",
        url: "/ContactUs",
        icon: at
    }
];

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonSplitPane contentId="main">
                <Menu appPages={appPages} />
                <IonRouterOutlet id="main">
                    <Route path="/home" component={Home} exact={true} />
                    <Route path="/AboutUs" component={AboutUs} exact={true} />
                    <Route
                        path="/EnergyQuiz"
                        component={EnergyQuiz}
                        exact={true}
                    />
                    <Route
                        path="/EnergyTips"
                        component={EnergyTips}
                        exact={true}
                    />
                    <Route
                        path="/HowItWorks"
                        component={HowItWorks}
                        exact={true}
                    />
                    <Route
                        path="/ContactUs"
                        component={ContactUs}
                        exact={true}
                    />
                    <Route
                        path="/HowItWorks"
                        component={HowItWorks}
                        exact={true}
                    />
                    <Route
                        path="/TermsAndConditions"
                        component={TnCPage}
                        exact={true}
                    />
                    <Route
                        path="/PrivacyPolicy"
                        component={PrivacyPage}
                        exact={true}
                    />
                    <Route
                        path="/SignIn"
                        component={RegisterPage}
                        exact={true}
                    />
                    <Route
                        path="/Dashboard"
                        component={DashboardPage}
                        exact={true}
                    />
                    <Route
                        path="/"
                        render={() => <Redirect to="/home" />}
                        exact={true}
                    />
                    <Route path="/FAQ" component={FAQPage} exact={true} />
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
    </IonApp>
);

export default App;
