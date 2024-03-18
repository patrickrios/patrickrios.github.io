import React from "react";
import { TechList } from "./../tech-list/tech-list";
import { ContactForm } from "../contact-form/ContactForm";
import { Portfolio } from "../portfolio/portfolio";
import { ProfileModal } from "../profile-modal/ProfileModal";

import { 
    FolderIcon, 
    StackIcon, 
    AboutIcon, 
    ContactIcon
} from "./assets/tabIcons";

export const tabs = [
    {name:'portfolio', icon: <FolderIcon/>},
    {name: 'about', icon: <AboutIcon/>},
    {name: 'stack', icon: <StackIcon/>},
    {name: 'contact', icon: <ContactIcon/>}
];

export const tabsContent = [
    <Portfolio key="tab-pane-00"/>,
    <ProfileModal key="tab-pane-01"/>,
    <TechList key="tab-pane-02"/>,
    <ContactForm key="tab-pane-03"/>
];