import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonToolbar
} from "@ionic/react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPage } from "../declarations";
import IonItemStyles from "../styledComponents/IonItemStyles";
import { Link } from "react-router-dom";

interface MenuProps extends RouteComponentProps {
    appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
    <IonMenu contentId="main" type="overlay">
        <IonHeader>
            <IonToolbar>
                {/* Commented for header image removal changes */}
                {/* <img
                    className="sidebar-logo"
                    src="assets/transparent-logo.png"
                    alt="CountryImage"
                /> */}
                <div className="header-image-div">
                    <div className="header-image">
                        <img
                            src="assets/ministero-logo.png"
                            alt="ministero-logo"
                        />
                    </div>
                    <div className="header-image">
                        <img src="assets/lcec-logo.png" alt="lcec-logo" />
                    </div>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                {appPages.map((appPage, index) => {
                    return (
                        <IonMenuToggle key={index} autoHide={false}>
                            <IonItemStyles>
                                <IonItem
                                    routerLink={appPage.url}
                                    routerDirection="none"
                                >
                                    <IonIcon slot="start" icon={appPage.icon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonItemStyles>
                        </IonMenuToggle>
                    );
                })}
            </IonList>

            <IonMenuToggle>
                <Link className="terms-link" to="/TermsAndConditions">
                    Terms and Conditions
                </Link>
                <Link className="privacy-policy-link" to="/PrivacyPolicy">
                    Privacy Policy
                </Link>
            </IonMenuToggle>

            {/* <Link className="terms-link" to="/TermsAndConditions">
                Terms and Conditions
            </Link>
            <Link className="privacy-policy-link" to="/FAQ">
                Privacy Policy
            </Link> */}
        </IonContent>
    </IonMenu>
);

export default withRouter(Menu);
