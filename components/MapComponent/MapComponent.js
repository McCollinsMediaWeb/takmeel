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
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
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

    // useEffect(() => {
    // if (!isScriptLoaded) return;

    // const map = new window.google.maps.Map(document.getElementById("map"), {
    // center,
    // zoom,
    // styles,
    // });

    // const infoWindow = new window.google.maps.InfoWindow();
    // const placesService = new window.google.maps.places.PlacesService(map);

    // // 📍 Add Main Center Marker
    // new window.google.maps.Marker({
    // position: center,
    // map,
    // title: "Main Location",
    // icon: {
    // url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    // },
    // });

    // // 📌 Add landmark markers with InfoWindows
    // nearByPlaces.forEach((place, index) => {
    // const marker = new window.google.maps.Marker({
    // position: place.location,
    // map,
    // label: {
    // text: `${index + 1}`,
    // color: "white",
    // fontSize: "16px",
    // fontWeight: "bold",
    // },
    // title: place.name,
    // icon: {
    // url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    // },
    // });

    // marker.addListener("click", () => {
    // if (place.place_id) {
    // placesService.getDetails({ placeId: place.place_id }, (details, status) => {
    // if (
    // status === window.google.maps.places.PlacesServiceStatus.OK &&
    // details
    // ) {
    // const photoUrl =
    // details.photos && details.photos.length
    // ? details.photos[0].getUrl({
    // maxWidth: 300,
    // maxHeight: 150,
    // })
    // : "";

    // infoWindow.setContent(`
    // <div style="max-width: 300px; font-family: Arial, sans-serif;">
    // ${
    // photoUrl
    // ? `<img src="${photoUrl}" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 8px;" />`
    // : ""
    // }
    // <h3 style="margin: 0 0 8px; font-size: 18px;">${details.name}</h3>
    // <p style="margin: 0 0 6px; font-size: 14px;"><strong>📍 Address:</strong> ${
    // details.formatted_address || "N/A"
    // }</p>
    // ${
    // details.rating
    // ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>⭐ Rating:</strong> ${
    // details.rating
    // } (${details.user_ratings_total || 0} reviews)</p>`
    // : ""
    // }
    // ${
    // details.formatted_phone_number
    // ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>📞 Phone:</strong> ${details.formatted_phone_number}</p>`
    // : ""
    // }
    // ${
    // details.website
    // ? `<p style="margin: 0;"><a href="${details.website}" target="_blank" style="color: #1a73e8;">Visit Website</a></p>`
    // : ""
    // }
    // <p style="margin-top: 6px;"><a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank" style="color: #1a73e8;">View on Google Maps</a></p>
    // </div>
    // `);
    // infoWindow.open(map, marker);
    // }
    // });
    // }
    // });
    // });
    // }, [isScriptLoaded, center, zoom, styles, nearByPlaces]);

    // useEffect(() => {
    // if (!isScriptLoaded) return;

    // const map = new window.google.maps.Map(document.getElementById("map"), {
    // center,
    // zoom,
    // styles,
    // });

    // const infoWindow = new window.google.maps.InfoWindow();
    // const placesService = new window.google.maps.places.PlacesService(map);

    // // 📍 Add Main Center Marker
    // new window.google.maps.Marker({
    // position: center,
    // map,
    // title: "Main Location",
    // icon: {
    // url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    // },
    // });

    // // 📌 Add landmark markers with InfoWindows
    // const markers = []; // To store all markers for later use
    // const infoWindows = []; // To store all infoWindows for later use

    // nearByPlaces.forEach((place, index) => {
    // const marker = new window.google.maps.Marker({
    // position: place.location,
    // map,
    // label: {
    // text: `${index + 1}`,
    // color: "white",
    // fontSize: "16px",
    // fontWeight: "bold",
    // },
    // title: place.name,
    // icon: {
    // url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    // },
    // });

    // const newInfoWindow = new window.google.maps.InfoWindow(); // Create a new infoWindow for each marker

    // markers.push(marker);
    // infoWindows.push(newInfoWindow);

    // if (place.place_id) {
    // placesService.getDetails({ placeId: place.place_id }, (details, status) => {
    // if (status === window.google.maps.places.PlacesServiceStatus.OK && details) {
    // const photoUrl =
    // details.photos && details.photos.length
    // ? details.photos[0].getUrl({
    // maxWidth: 300,
    // maxHeight: 150,
    // })
    // : "";

    // newInfoWindow.setContent(`
    // <div style="max-width: 300px; font-family: Arial, sans-serif;">
    // ${photoUrl
    // ? `<img src="${photoUrl}" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 8px;" />`
    // : ""
    // }
    // <h3 style="margin: 0 0 8px; font-size: 18px;">${details.name}</h3>
    // <p style="margin: 0 0 6px; font-size: 14px;"><strong>📍 Address:</strong> ${details.formatted_address || "N/A"
    // }</p>
    // ${details.rating
    // ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>⭐ Rating:</strong> ${details.rating
    // } (${details.user_ratings_total || 0} reviews)</p>`
    // : ""
    // }
    // ${details.formatted_phone_number
    // ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>📞 Phone:</strong> ${details.formatted_phone_number}</p>`
    // : ""
    // }
    // ${details.website
    // ? `<p style="margin: 0;"><a href="${details.website}" target="_blank" style="color: #1a73e8;">Visit Website</a></p>`
    // : ""
    // }
    // <p style="margin-top: 6px;"><a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank" style="color: #1a73e8;">View on Google Maps</a></p>
    // </div>
    // `);
    // }
    // });
    // }
    // });

    // // Open all info windows at once
    // setTimeout(() => {
    // markers.forEach((marker, index) => {
    // infoWindows[index].open(map, marker);
    // });
    // }, 500); // Delay to make sure everything is loaded
    // }, [isScriptLoaded, center, zoom, styles, nearByPlaces]);

    useEffect(() => {
        if (!isScriptLoaded) return;

        const map = new window.google.maps.Map(document.getElementById("map"), {
            center,
            zoom,
            styles,
        });

        const infoWindow = new window.google.maps.InfoWindow();
        const placesService = new window.google.maps.places.PlacesService(map);

        // 📍 Add Main Center Marker
        const mainMarker = new window.google.maps.Marker({
            position: center,
            map,
            title: "Main Location",
            icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            },
        });

        // 👉 Fetch and show main location data
        if (center.place_id) {
            placesService.getDetails({ placeId: center.place_id }, (details, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && details) {
                    const photoUrl =
                        details.photos && details.photos.length
                            ? details.photos[0].getUrl({
                                maxWidth: 300,
                                maxHeight: 150,
                            })
                            : "";

                    const contentHtml = `
<div style="max-width: 300px; font-family: Arial, sans-serif;">
${photoUrl
                            ? `<img src="${photoUrl}" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 8px;" />`
                            : ""
                        }
<h3 style="margin: 0 0 8px; font-size: 18px;">${details.name}</h3>
<p style="margin: 0 0 6px; font-size: 14px;"><strong>📍 Address:</strong> ${details.formatted_address || "N/A"
                        }</p>
${details.rating
                            ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>⭐ Rating:</strong> ${details.rating
                            } (${details.user_ratings_total || 0} reviews)</p>`
                            : ""
                        }
${details.formatted_phone_number
                            ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>📞 Phone:</strong> ${details.formatted_phone_number}</p>`
                            : ""
                        }
${details.website
                            ? `<p style="margin: 0;"><a href="${details.website}" target="_blank" style="color: #1a73e8;">Visit Website</a></p>`
                            : ""
                        }
<p style="margin-top: 6px;"><a href="https://www.google.com/maps/place/?q=place_id:${center.place_id}" target="_blank" style="color: #1a73e8;">View on Google Maps</a></p>
</div>
`;

                    infoWindow.setContent(contentHtml);
                    infoWindow.open(map, mainMarker);

                    // ⭐ Click event to reopen after manual close
                    mainMarker.addListener("click", () => {
                        infoWindow.setContent(contentHtml);
                        infoWindow.open(map, mainMarker);
                    });
                }
            });
        }

        // 📌 Add landmark markers (nearByPlaces) with InfoWindows
        nearByPlaces.forEach((place, index) => {
            const marker = new window.google.maps.Marker({
                position: place.location,
                map,
                // label: {
                // text: `${index + 1}`,
                // color: "white",
                // fontSize: "16px",
                // fontWeight: "bold",
                // },
                title: place.name,
                icon: {
                    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                },
            });

            marker.addListener("click", () => {
                if (place.place_id) {
                    placesService.getDetails({ placeId: place.place_id }, (details, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK && details) {
                            const photoUrl =
                                details.photos && details.photos.length
                                    ? details.photos[0].getUrl({
                                        maxWidth: 300,
                                        maxHeight: 150,
                                    })
                                    : "";

                            infoWindow.setContent(`
<div style="max-width: 300px; font-family: Arial, sans-serif;">
${photoUrl
                                    ? `<img src="${photoUrl}" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 8px;" />`
                                    : ""
                                }
<h3 style="margin: 0 0 8px; font-size: 18px;">${details.name}</h3>
<p style="margin: 0 0 6px; font-size: 14px;"><strong>📍 Address:</strong> ${details.formatted_address || "N/A"
                                }</p>
${details.rating
                                    ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>⭐ Rating:</strong> ${details.rating
                                    } (${details.user_ratings_total || 0} reviews)</p>`
                                    : ""
                                }
${details.formatted_phone_number
                                    ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>📞 Phone:</strong> ${details.formatted_phone_number}</p>`
                                    : ""
                                }
${details.website
                                    ? `<p style="margin: 0;"><a href="${details.website}" target="_blank" style="color: #1a73e8;">Visit Website</a></p>`
                                    : ""
                                }
<p style="margin-top: 6px;"><a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank" style="color: #1a73e8;">View on Google Maps</a></p>
</div>
`);
                            infoWindow.open(map, marker);
                        }
                    });
                }
            });
        });

    }, [isScriptLoaded, center, zoom, styles, nearByPlaces]);



    return (
        <div>
            <div
                id="map"
                style={{
                    height: isDesktop ? "500px" : "280px",
                    width: "100%",
                    marginBottom: "20px",
                }}
            ></div>
        </div>
    );
};

export default MapComponent;