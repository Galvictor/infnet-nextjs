import NavBar from "@/components/navBar";

export default function Layout({children}) {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            {children}
        </div>
    )
}
