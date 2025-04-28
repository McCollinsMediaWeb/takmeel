import { useState, useEffect } from "react";

const MapComponent = ({ apiKey, center, zoom, styles }) => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    useEffect(() => {
        // Check if Google Maps script is already loaded
        if (window.google && window.google.maps) {
            setIsScriptLoaded(true);
            return;
        }

        // Load Google Maps script if not already loaded
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);

        // Callback function to be called once the script is loaded
        window.initMap = () => {
            setIsScriptLoaded(true);
        };

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
            window.initMap = undefined;  // Clean up the global callback
        };
    }, [apiKey]);

    useEffect(() => {
        if (isScriptLoaded) {
            // Initialize the map after the script is loaded
            const map = new window.google.maps.Map(document.getElementById("map"), {
                center: center,
                zoom: zoom,
                styles: styles,
            });
        }
    }, [isScriptLoaded, center, zoom, styles]);

    return (

        <div id="map" style={{ height: "500px" }}></div>

    );
};

export default MapComponent;
