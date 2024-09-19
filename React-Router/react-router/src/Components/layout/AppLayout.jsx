import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

//AppLayout will act as a parent container in which all the child component will exist and this will be the layout for all the pages
const AppLayout =() =>{
    return <>
    <Header />
    <Outlet /> 
    {/* <Outlet /> is used always in parent element to render it's child route elements */}
    <Footer />
    </>
}

export default AppLayout;