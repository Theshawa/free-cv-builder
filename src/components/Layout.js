import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Header from "./Header";

function Layout({ children,title }) {
    const location = useLocation()
    return (

        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
                <title>{title}</title>
            </Helmet>
            <div className="  h-screen flex flex-col text-darker text-base tracking-wide font-medium overflow-hidden">
                {!location.pathname.includes('view') ? <Header /> : ''}
                
                {children}
                
            </div>
        </>

    );
}

export default Layout;