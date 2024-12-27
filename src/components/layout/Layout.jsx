import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation.jsx";
import { Contact } from "../contact/Contact.jsx";

export default function Layout() {
    return (
        <div>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Contact />
        </div>
    );
}
