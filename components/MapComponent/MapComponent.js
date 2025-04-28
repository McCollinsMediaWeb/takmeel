import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const MapComponent = ({ apiKey, center, zoom, styles }) => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 960px)");

    useEffect(() => {
        if (window.google && window.google.maps) {
            setIsScriptLoaded(true);
            return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);

        window.initMap = () => {
            setIsScriptLoaded(true);
        };

        return () => {
            document.body.removeChild(script);
            window.initMap = undefined;
        };
    }, [apiKey]);

    useEffect(() => {
        if (isScriptLoaded) {
            new window.google.maps.Map(document.getElementById("map"), {
                center,
                zoom,
                styles,
            });
        }
    }, [isScriptLoaded, center, zoom, styles]);

    return (
        <div
            id="map"
            style={{
                height: isDesktop ? "500px" : "280px",
                width: "100%", // Always good to have width 100%
            }}
        ></div>
    );
};

export default MapComponent;
