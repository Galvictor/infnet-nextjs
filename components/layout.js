import NavBar from "@/components/navBar";
import Footer from "@/components/Footer";

export default function Layout({children}) {

    return (
        <div className="wrap-content">
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}
