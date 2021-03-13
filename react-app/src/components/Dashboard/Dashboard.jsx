import React from "react";
import {SideNav, ContentWindow} from "../CommonElements";


const Dashboard = ({setAuthenticated, authenticated}) => {
    return (
    <>
    {/* <h1>Howdy</h1> */}
    <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>
    {/* <ContentWindow ></ContentWindow> */}
    </>
    )
};

export default Dashboard;
