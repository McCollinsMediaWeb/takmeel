// import { useState, useEffect } from "react";
// import useMediaQuery from "../hooks/useMediaQuery";

// const MapComponent = ({ apiKey, center, zoom, styles }) => {
//     const [isScriptLoaded, setIsScriptLoaded] = useState(false);
//     const isDesktop = useMediaQuery("(min-width: 960px)");

//     useEffect(() => {
//         if (window.google && window.google.maps) {
//             setIsScriptLoaded(true);
//             return;
//         }

//         const script = document.createElement("script");
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
//         script.async = true;
//         document.body.appendChild(script);

//         window.initMap = () => {
//             setIsScriptLoaded(true);
//         };

//         return () => {
//             document.body.removeChild(script);
//             window.initMap = undefined;
//         };
//     }, [apiKey]);

//     useEffect(() => {
//         if (isScriptLoaded) {
//             new window.google.maps.Map(document.getElementById("map"), {
//                 center,
//                 zoom,
//                 styles,
//             });
//         }
//     }, [isScriptLoaded, center, zoom, styles]);

//     return (
//         <div
//             id="map"
//             style={{
//                 height: isDesktop ? "500px" : "280px",
//                 width: "100%",
//             }}
//         ></div>
//     );
// };

// export default MapComponent;


import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const MapComponent = ({ apiKey, center, zoom, styles, nearByPlaces }) => {
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
            const map = new window.google.maps.Map(document.getElementById("map"), {
                center,
                zoom,
                styles,
            });

            // 📍 Add Main Center Marker
            new window.google.maps.Marker({
                position: center,
                map: map,
                title: "Main Location",
                icon: {
                    url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Main location in blue
                },
            });

            // 📍 Add All Landmarks with Number Labels
            nearByPlaces?.forEach((place, index) => {
                new window.google.maps.Marker({
                    position: place.location,
                    map: map,
                    label: {
                        text: `${index + 1}`, // 1, 2, 3
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                    },
                    title: place.name,
                    icon: {
                        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // Red for landmarks
                        // labelOrigin: new window.google.maps.Point(16, 10),
                    },
                });
            });
        }
    }, [isScriptLoaded, center, zoom, styles, nearByPlaces]);

    return (
        <div>
            <div
                id="map"
                style={{
                    height: isDesktop ? "600px" : "280px",
                    width: "100%",
                    marginBottom: "20px",
                }}
            ></div>

            {/* <div>
                <h3>Landmarks:</h3>
                <ul>
                    {nearByPlaces?.map((place, index) => (
                        <li key={index}>
                            {index + 1} - {place.name}
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
};

export default MapComponent;

// import { useState, useEffect } from "react";
// import useMediaQuery from "../hooks/useMediaQuery";

// const MapComponent = ({ apiKey, center, zoom, styles }) => {
//     const [isScriptLoaded, setIsScriptLoaded] = useState(false);
//     const [places, setPlaces] = useState([]);
//     const isDesktop = useMediaQuery("(min-width: 960px)");

//     useEffect(() => {
//         if (window.google && window.google.maps) {
//             setIsScriptLoaded(true);
//             return;
//         }

//         const script = document.createElement("script");
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
//         script.async = true;
//         document.body.appendChild(script);

//         window.initMap = () => {
//             setIsScriptLoaded(true);
//         };

//         return () => {
//             document.body.removeChild(script);
//             window.initMap = undefined;
//         };
//     }, [apiKey]);

//     useEffect(() => {
//         if (isScriptLoaded) {
//             const map = new window.google.maps.Map(document.getElementById("map"), {
//                 center,
//                 zoom,
//                 styles,
//             });

//             // 📍 Add Main Center Marker
//             new window.google.maps.Marker({
//                 position: center,
//                 map: map,
//                 title: "Main Location",
//                 icon: {
//                     url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Main location in blue
//                 },
//             });

//             // 🗺️ Fetch nearby landmarks automatically
//             const service = new window.google.maps.places.PlacesService(map);
//             service.nearbySearch(
//                 {
//                     location: center,
//                     radius: 5000, // 5km radius
//                     type: ["tourist_attraction"], // or ["landmark"], "museum", "church" etc.
//                 },
//                 (results, status) => {
//                     console.log("results", results)
//                     if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//                         setPlaces(results); // Save landmarks to state

//                         results.forEach((place, index) => {
//                             if (place.geometry && place.geometry.location) {
//                                 new window.google.maps.Marker({
//                                     position: place.geometry.location,
//                                     map: map,
//                                     label: {
//                                         text: `${index + 1}`,
//                                         color: "white",
//                                         fontSize: "16px",
//                                         fontWeight: "bold",
//                                     },
//                                     title: place.name,
//                                     icon: {
//                                         url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                                     },
//                                 });
//                             }
//                         });
//                     }
//                 }
//             );
//         }
//     }, [isScriptLoaded, center, zoom, styles]);

//     return (
//         <div>
//             <div
//                 id="map"
//                 style={{
//                     height: isDesktop ? "500px" : "280px",
//                     width: "100%",
//                     marginBottom: "20px",
//                 }}
//             ></div>

//             <div>
//                 <h3>Nearby Landmarks:</h3>
//                 <ul>
//                     {places.map((place, index) => (
//                         <li key={place.place_id}>
//                             {index + 1} - {place.name}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default MapComponent;

