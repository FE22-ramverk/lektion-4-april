import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    // tar propertyn från objektet som returneras av useLocation-funktionen
    const { pathname } = useLocation();

    // vi vill automatiskt scrolla till toppen när vårt pathname ändras
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname])
}

export default ScrollToTop;