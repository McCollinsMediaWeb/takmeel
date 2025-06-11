import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const MapComponent = ({ apiKey, center, zoom, styles, nearByPlaces, desktopHeight = "630px" }) => {
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

    useEffect(() => {
        if (!isScriptLoaded) return;

        const map = new window.google.maps.Map(document.getElementById("map"), {
            center,
            zoom,
            styles,
            mapTypeId: "satellite",
        });

        const infoWindow = new window.google.maps.InfoWindow();
        const placesService = new window.google.maps.places.PlacesService(map);

        // 📍 Add Main Center Marker
        const mainMarker = new window.google.maps.Marker({
            position: center,
            map,
            title: "Main Location",
            icon: {
                // url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                // url: "https://res.cloudinary.com/dje8fshak/image/upload/v1748530444/pin_kjayae.png",
                url: "https://res.cloudinary.com/dje8fshak/image/upload/v1748839515/maps-and-flags_nnl0of.png",
                scaledSize: new google.maps.Size(40, 40), // Adjust width and height here
                anchor: new google.maps.Point(20, 40)
            },
        });

        // 👉 Fetch and show main location data
        // if (center.place_id) {
        //     placesService.getDetails({ placeId: center.place_id }, (details, status) => {
        //         if (status === window.google.maps.places.PlacesServiceStatus.OK && details) {

        //             const photoUrl =
        //                 details.photos?.[0]?.getUrl({ maxWidth: 300 }) ||
        //                 "https://via.placeholder.com/300x150?text=No+Image";

        //             const contentHtml = `
        //             <div style="max-width: 300px; font-family: Arial, sans-serif;">
        //               <img src="${photoUrl}" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 8px;" alt="Place Image" />
        //               <h3 style="margin: 0 0 8px; font-size: 18px;">${details.name}</h3>
        //               <p style="margin: 0 0 6px; font-size: 14px;"><strong>📍 Address:</strong> ${details.formatted_address || "N/A"}</p>
        //               ${details.rating
        //                     ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>⭐ Rating:</strong> ${details.rating} (${details.user_ratings_total || 0} reviews)</p>`
        //                     : ""
        //                 }
        //               ${details.formatted_phone_number
        //                     ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>📞 Phone:</strong> ${details.formatted_phone_number}</p>`
        //                     : ""
        //                 }
        //               ${details.website
        //                     ? `<p style="margin: 0;"><a href="${details.website}" target="_blank" style="color: #1a73e8;">Visit Website</a></p>`
        //                     : ""
        //                 }
        //               <p style="margin-top: 6px;"><a href="https://www.google.com/maps/place/?q=place_id:${center.place_id}" target="_blank" style="color: #1a73e8;">View on Google Maps</a></p>
        //             </div>
        //             `;


        //             infoWindow.setContent(contentHtml);
        //             infoWindow.open(map, mainMarker);

        //             mainMarker.addListener("click", () => {
        //                 infoWindow.setContent(contentHtml);
        //                 infoWindow.open(map, mainMarker);
        //             });
        //         }
        //     });
        // }

        // if (center.place_id) {
        //     placesService.getDetails({ placeId: center.place_id }, (details, status) => {
        //         if (status === window.google.maps.places.PlacesServiceStatus.OK && details) {

        //             // Get multiple photos with better error handling
        //             let photoUrls = [];

        //             if (details.photos && details.photos.length > 0) {
        //                 // Process up to 10 photos
        //                 for (let i = 0; i < Math.min(details.photos.length, 10); i++) {
        //                     try {
        //                         const photoUrl = details.photos[i].getUrl({
        //                             maxWidth: 400,
        //                             maxHeight: 200
        //                         });
        //                         if (photoUrl) {
        //                             photoUrls.push(photoUrl);
        //                         }
        //                     } catch (error) {
        //                         console.warn('Error getting photo URL for photo', i, ':', error);
        //                     }
        //                 }
        //             }

        //             console.log("photoUrl", photoUrls);

        //             // Add fallback image if no photos loaded
        //             if (photoUrls.length === 0) {
        //                 photoUrls.push("/placeholder.svg?height=200&width=400");
        //             }

        //             console.log('Photo URLs loaded:', photoUrls); // Debug log

        //             // Generate star rating HTML
        //             const generateStars = (rating) => {
        //                 const fullStars = Math.floor(rating);
        //                 const hasHalfStar = rating % 1 >= 0.5;
        //                 let starsHtml = '';

        //                 for (let i = 0; i < 5; i++) {
        //                     if (i < fullStars) {
        //                         starsHtml += '<span style="color: #fbbc04;">★</span>';
        //                     } else if (i === fullStars && hasHalfStar) {
        //                         starsHtml += '<span style="color: #fbbc04;">☆</span>';
        //                     } else {
        //                         starsHtml += '<span style="color: #e8eaed;">★</span>';
        //                     }
        //                 }
        //                 return starsHtml;
        //             };

        //             const contentHtml = `
        //         <div style="width: 300px; font-family: Roboto, Arial, sans-serif; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
        //             <!-- Image Carousel -->
        //             <div style="width: 100%; height: 200px; position: relative; overflow: hidden; background: #f5f5f5;">
        //                 <div class="image-scroll-container" style="display: flex; width: 100%; height: 100%; overflow-x: auto; overflow-y: hidden; scroll-behavior: smooth; scrollbar-width: none; -ms-overflow-style: none; -webkit-scrollbar: none;">
        //                     ${photoUrls.map((url, index) => `
        //                         <div style="min-width: 100%; height: 100%; flex-shrink: 0; position: relative; background: #f0f0f0;">
        //                             <img src="${url}" 
        //                                  style="width: 100%; height: 100%; object-fit: cover; display: block;" 
        //                                  alt="${details.name || 'Place Image'} ${index + 1}"
        //                                  onload="console.log('Image loaded:', this.src); this.parentElement.style.background='transparent';"
        //                                  onerror="console.error('Failed to load image:', this.src); this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-size:14px;\\'>Image not available</div>';" />
        //                         </div>
        //                     `).join('')}
        //                 </div>

        //                 <!-- Image Counter -->
        //                 ${photoUrls.length > 1 ? `
        //                     <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">
        //                         <span class="current-image">1</span>/${photoUrls.length}
        //                     </div>
        //                 ` : ''}

        //                 <!-- Navigation Dots -->
        //                 ${photoUrls.length > 1 ? `
        //                     <div style="position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); display: flex; gap: 4px;">
        //                         ${photoUrls.map((_, index) => `
        //                             <div class="nav-dot" data-index="${index}" 
        //                                  style="width: 6px; height: 6px; border-radius: 50%; background: ${index === 0 ? 'white' : 'rgba(255,255,255,0.5)'}; cursor: pointer; transition: background 0.3s ease;"></div>
        //                         `).join('')}
        //                     </div>
        //                 ` : ''}
        //             </div>

        //             <!-- Content -->
        //             <div style="padding: 16px;">
        //                 <!-- Title and Actions Row -->
        //                 <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        //                     <h3 style="margin: 0; font-size: 16px; font-weight: 500; color: #3c4043; line-height: 1.3; flex: 1; padding-right: 12px;">
        //                         ${details.name || 'Unnamed Place'}
        //                     </h3>

        //                     <!-- Action Buttons -->
        //                     <div style="display: flex; gap: 8px; flex-shrink: 0;">
        //                         <!-- Directions Button -->
        //                         <a href="https://www.google.com/maps/place/?q=place_id:${center.place_id}"
        //                            target="_blank"
        //                            style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #1a73e8; border-radius: 50%; text-decoration: none; transition: background-color 0.2s;">
        //                             <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        //                                 <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.39.39-1.02 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
        //                             </svg>
        //                         </a>

        //                         <!-- Website Button -->
        //                         ${details.website ? `
        //                             <a href="${details.website}" target="_blank"
        //                                style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #1a73e8; border-radius: 50%; text-decoration: none; transition: background-color 0.2s;">
        //                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        //                                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        //                                 </svg>
        //                             </a>
        //                         ` : `
        //                             <button style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #dadce0; border: none; border-radius: 50%; cursor: default; opacity: 0.5;" disabled>
        //                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="#5f6368">
        //                                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        //                                 </svg>
        //                             </button>
        //                         `}
        //                     </div>
        //                 </div>

        //                 <!-- Rating -->
        //                 ${details.rating ? `
        //                     <div style="display: flex; align-items: center; margin: 0px 0 4px;">
        //                         <span style="font-size: 14px; color: #3c4043; font-weight: 500; margin-right: 4px;">${details.rating}</span>
        //                         <div style="margin-right: 4px;">${generateStars(details.rating)}</div>
        //                         <span style="font-size: 14px; color: #70757a;">(${details.user_ratings_total || 0})</span>
        //                     </div>
        //                 ` : ''}

        //                 <!-- Category and Accessibility -->
        //                 <div style="display: flex; align-items: center; color: #70757a; font-size: 14px;">
        //                     ${details.types?.length ? `<span style="text-transform: capitalize;">${details.types[0].replace(/_/g, ' ')}</span>` : ''}
        //                     ${details.wheelchair_accessible_entrance ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="#70757a" style="margin-left: 8px;"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>` : ''}
        //                 </div>

        //                 <!-- Address -->
        //                 ${details.vicinity ? `<div style="margin-top: 8px; font-size: 14px; color: #70757a;">${details.vicinity}</div>` : ''}

        //                 <!-- Website Link -->
        //                 ${details.website ? `<div style="margin-top: 12px;"><a href="${details.website}" target="_blank" style="color: #1a73e8; text-decoration: none; font-size: 14px;">Visit website</a></div>` : ''}
        //             </div>
        //         </div>
        //     `;

        //             infoWindow.setContent(contentHtml);
        //             infoWindow.open(map, mainMarker);

        //             // Add scroll functionality after content is loaded
        //             setTimeout(() => {
        //                 const scrollContainer = document.querySelector('.image-scroll-container');
        //                 const dots = document.querySelectorAll('.nav-dot');
        //                 const currentImageSpan = document.querySelector('.current-image');

        //                 if (scrollContainer && photoUrls.length > 1) {
        //                     let currentIndex = 0;

        //                     // Update current image indicator
        //                     const updateIndicators = (index) => {
        //                         currentIndex = index;
        //                         if (currentImageSpan) {
        //                             currentImageSpan.textContent = index + 1;
        //                         }
        //                         dots.forEach((dot, i) => {
        //                             dot.style.background = i === index ? 'white' : 'rgba(255,255,255,0.5)';
        //                         });
        //                     };

        //                     // Handle scroll events
        //                     scrollContainer.addEventListener('scroll', () => {
        //                         const scrollLeft = scrollContainer.scrollLeft;
        //                         const imageWidth = scrollContainer.clientWidth;
        //                         const newIndex = Math.round(scrollLeft / imageWidth);
        //                         if (newIndex !== currentIndex && newIndex >= 0 && newIndex < photoUrls.length) {
        //                             updateIndicators(newIndex);
        //                         }
        //                     });

        //                     // Handle dot clicks
        //                     dots.forEach((dot, index) => {
        //                         dot.addEventListener('click', (e) => {
        //                             e.stopPropagation();
        //                             const imageWidth = scrollContainer.clientWidth;
        //                             scrollContainer.scrollTo({
        //                                 left: index * imageWidth,
        //                                 behavior: 'smooth'
        //                             });
        //                             updateIndicators(index);
        //                         });
        //                     });
        //                 }
        //             }, 200);

        //             mainMarker.addListener("click", () => {
        //                 infoWindow.setContent(contentHtml);
        //                 infoWindow.open(map, mainMarker);

        //                 // Re-add scroll functionality
        //                 setTimeout(() => {
        //                     const scrollContainer = document.querySelector('.image-scroll-container');
        //                     const dots = document.querySelectorAll('.nav-dot');
        //                     const currentImageSpan = document.querySelector('.current-image');

        //                     if (scrollContainer && photoUrls.length > 1) {
        //                         let currentIndex = 0;

        //                         const updateIndicators = (index) => {
        //                             currentIndex = index;
        //                             if (currentImageSpan) {
        //                                 currentImageSpan.textContent = index + 1;
        //                             }
        //                             dots.forEach((dot, i) => {
        //                                 dot.style.background = i === index ? 'white' : 'rgba(255,255,255,0.5)';
        //                             });
        //                         };

        //                         scrollContainer.addEventListener('scroll', () => {
        //                             const scrollLeft = scrollContainer.scrollLeft;
        //                             const imageWidth = scrollContainer.clientWidth;
        //                             const newIndex = Math.round(scrollLeft / imageWidth);
        //                             if (newIndex !== currentIndex && newIndex >= 0 && newIndex < photoUrls.length) {
        //                                 updateIndicators(newIndex);
        //                             }
        //                         });

        //                         dots.forEach((dot, index) => {
        //                             dot.addEventListener('click', (e) => {
        //                                 e.stopPropagation();
        //                                 const imageWidth = scrollContainer.clientWidth;
        //                                 scrollContainer.scrollTo({
        //                                     left: index * imageWidth,
        //                                     behavior: 'smooth'
        //                                 });
        //                                 updateIndicators(index);
        //                             });
        //                         });
        //                     }
        //                 }, 200);
        //             });
        //         }
        //     });
        // }


        if (center.place_id) {
            placesService.getDetails({ placeId: center.place_id }, (details, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && details) {

                    // Function to test if an image loads successfully
                    const testImageLoad = (url) => {
                        return new Promise((resolve) => {
                            const img = new Image();
                            img.onload = () => resolve(url);
                            img.onerror = () => resolve(null);
                            img.src = url;
                        });
                    };

                    // Function to find the first working image
                    const findWorkingImage = async () => {
                        let workingImageUrl = null;

                        if (details.photos && details.photos.length > 0) {
                            // Test up to 5 photos to find one that works
                            for (let i = 0; i < Math.min(details.photos.length, 5); i++) {
                                try {
                                    const photoUrl = details.photos[i].getUrl({
                                        maxWidth: 400,
                                        maxHeight: 200
                                    });

                                    // Test if this image loads
                                    const testedUrl = await testImageLoad(photoUrl);
                                    if (testedUrl) {
                                        workingImageUrl = testedUrl;
                                        console.log('Working image found:', workingImageUrl);
                                        break; // Use the first working image
                                    }
                                } catch (error) {
                                    console.warn('Error getting photo URL for photo', i, ':', error);
                                }
                            }
                        }

                        // Use fallback if no working image found
                        if (!workingImageUrl) {
                            // workingImageUrl = "/placeholder.svg?height=200&width=400";
                        }

                        return workingImageUrl;
                    };

                    // Generate star rating HTML
                    const generateStars = (rating) => {
                        const fullStars = Math.floor(rating);
                        const hasHalfStar = rating % 1 >= 0.5;
                        let starsHtml = '';

                        for (let i = 0; i < 5; i++) {
                            if (i < fullStars) {
                                starsHtml += '<span style="color: #fbbc04;">★</span>';
                            } else if (i === fullStars && hasHalfStar) {
                                starsHtml += '<span style="color: #fbbc04;">☆</span>';
                            } else {
                                starsHtml += '<span style="color: #e8eaed;">★</span>';
                            }
                        }
                        return starsHtml;
                    };

                    // Find working image and then create content
                    findWorkingImage().then((photoUrl) => {
                        const contentHtml = `
                    <div style="width: 300px; font-family: Roboto, Arial, sans-serif; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                        <!-- Single Image -->
                        <div style="width: 100%; height: 150px; overflow: hidden; background: #f5f5f5;">
                            <img src="${photoUrl}" 
                                 style="width: 100%; height: 100%; object-fit: cover; display: block;" 
                                 alt="${details.name || 'Place Image'}"
                                 onload="console.log('Image loaded successfully:', this.src);"
                                 onerror="console.error('Failed to load image:', this.src); this.style.display='none';" />
                        </div>
                        
                        <!-- Content -->
                        <div style="padding: 16px;">
                            <!-- Title and Actions Row -->
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                                <h3 style="margin: 0; font-size: 16px; font-weight: 500; color: #3c4043; line-height: 1.3; flex: 1; padding-right: 12px;">
                                    ${details.name || 'Unnamed Place'}
                                </h3>
                                
                                <!-- Action Buttons -->
                                <div style="display: flex; gap: 8px; flex-shrink: 0;">
                                    <!-- Directions Button -->
                                    <a href="https://www.google.com/maps/place/?q=place_id:${center.place_id}"
                                       target="_blank"
                                       style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #1a73e8; border-radius: 50%; text-decoration: none; transition: background-color 0.2s;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                            <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.39.39-1.02 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
                                        </svg>
                                    </a>

                                    <!-- Website Button -->
                                    ${details.website ? `
                                        <a href="${details.website}" target="_blank"
                                           style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #1a73e8; border-radius: 50%; text-decoration: none; transition: background-color 0.2s;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                            </svg>
                                        </a>
                                    ` : `
                                        <button style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #dadce0; border: none; border-radius: 50%; cursor: default; opacity: 0.5;" disabled>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#5f6368">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            </div>

                            <!-- Rating -->
                            ${details.rating ? `
                                <div style="display: flex; align-items: center; margin: 0px 0 4px;">
                                    <span style="font-size: 14px; color: #3c4043; font-weight: 500; margin-right: 4px;">${details.rating}</span>
                                    <div style="margin-right: 4px;">${generateStars(details.rating)}</div>
                                    <span style="font-size: 14px; color: #70757a;">(${details.user_ratings_total || 0})</span>
                                </div>
                            ` : ''}

                            <!-- Category and Accessibility -->
                            <div style="display: flex; align-items: center; color: #70757a; font-size: 14px;">
                                ${details.types?.length ? `<span style="text-transform: capitalize;">${details.types[0].replace(/_/g, ' ')}</span>` : ''}
                                ${details.wheelchair_accessible_entrance ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="#70757a" style="margin-left: 8px;"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>` : ''}
                            </div>

                            <!-- Address -->
                            ${details.vicinity ? `<div style="margin-top: 8px; font-size: 14px; color: #70757a;">${details.vicinity}</div>` : ''}

                            <!-- Website Link -->
                            ${details.website ? `<div style="margin-top: 12px;"><a href="${details.website}" target="_blank" style="color: #1a73e8; text-decoration: none; font-size: 14px;">Visit website</a></div>` : ''}
                        </div>
                    </div>
                `;

                        infoWindow.setContent(contentHtml);
                        infoWindow.open(map, mainMarker);
                    });

                    mainMarker.addListener("click", () => {
                        // Re-find working image and display
                        findWorkingImage().then((photoUrl) => {
                            const contentHtml = `
                        <div style="width: 300px; font-family: Roboto, Arial, sans-serif; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                            <!-- Single Image -->
                            <div style="width: 100%; height: 150px; overflow: hidden; background: #f5f5f5;">
                                <img src="${photoUrl}" 
                                     style="width: 100%; height: 100%; object-fit: cover; display: block;" 
                                     alt="${details.name || 'Place Image'}"
                                     onload="console.log('Image loaded successfully:', this.src);"
                                     onerror="console.error('Failed to load image:', this.src); this.style.display='none';" />
                            </div>
                            
                            <!-- Content -->
                            <div style="padding: 16px;">
                                <!-- Title and Actions Row -->
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                                    <h3 style="margin: 0; font-size: 16px; font-weight: 500; color: #3c4043; line-height: 1.3; flex: 1; padding-right: 12px;">
                                        ${details.name || 'Unnamed Place'}
                                    </h3>
                                    
                                    <!-- Action Buttons -->
                                    <div style="display: flex; gap: 8px; flex-shrink: 0;">
                                        <!-- Directions Button -->
                                        <a href="https://www.google.com/maps/place/?q=place_id:${center.place_id}"
                                           target="_blank"
                                           style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #1a73e8; border-radius: 50%; text-decoration: none; transition: background-color 0.2s;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                                <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.39.39-1.02 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
                                            </svg>
                                        </a>

                                        <!-- Website Button -->
                                        ${details.website ? `
                                            <a href="${details.website}" target="_blank"
                                               style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #1a73e8; border-radius: 50%; text-decoration: none; transition: background-color 0.2s;">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                                </svg>
                                            </a>
                                        ` : `
                                            <button style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #dadce0; border: none; border-radius: 50%; cursor: default; opacity: 0.5;" disabled>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#5f6368">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                                </svg>
                                            </button>
                                        `}
                                    </div>
                                </div>

                                <!-- Rating -->
                                ${details.rating ? `
                                    <div style="display: flex; align-items: center; margin: 0px 0 4px;">
                                        <span style="font-size: 14px; color: #3c4043; font-weight: 500; margin-right: 4px;">${details.rating}</span>
                                        <div style="margin-right: 4px;">${generateStars(details.rating)}</div>
                                        <span style="font-size: 14px; color: #70757a;">(${details.user_ratings_total || 0})</span>
                                    </div>
                                ` : ''}

                                <!-- Category and Accessibility -->
                                <div style="display: flex; align-items: center; color: #70757a; font-size: 14px;">
                                    ${details.types?.length ? `<span style="text-transform: capitalize;">${details.types[0].replace(/_/g, ' ')}</span>` : ''}
                                    ${details.wheelchair_accessible_entrance ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="#70757a" style="margin-left: 8px;"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>` : ''}
                                </div>

                                <!-- Address -->
                                ${details.vicinity ? `<div style="margin-top: 8px; font-size: 14px; color: #70757a;">${details.vicinity}</div>` : ''}

                                <!-- Website Link -->
                                ${details.website ? `<div style="margin-top: 12px;"><a href="${details.website}" target="_blank" style="color: #1a73e8; text-decoration: none; font-size: 14px;">Visit website</a></div>` : ''}
                            </div>
                        </div>
                    `;

                            infoWindow.setContent(contentHtml);
                            infoWindow.open(map, mainMarker);
                        });
                    });
                }
            });
        }

        nearByPlaces.forEach((place, index) => {
            const marker = new window.google.maps.Marker({
                position: place.location,
                map,
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
                    height: isDesktop ? desktopHeight : "280px",
                    width: "100%",
                    marginBottom: "20px",
                }}
                dir="ltr"
            ></div>
        </div>
    );
};

export default MapComponent;



// import { useState, useEffect } from "react";
// import useMediaQuery from "../hooks/useMediaQuery";

// const MapComponent = ({ apiKey, center, zoom, styles, desktopHeight = "630px" }) => {
//     const [isScriptLoaded, setIsScriptLoaded] = useState(false);
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
//         if (!isScriptLoaded) return;

//         const map = new window.google.maps.Map(document.getElementById("map"), {
//             center,
//             zoom,
//             styles,
//         });

//         // ✅ Default red lollipop marker (do NOT set the icon)
//         const marker = new window.google.maps.Marker({
//             position: center,
//             map,
//             title: "Main Location",
//         });

//         const infoWindow = new window.google.maps.InfoWindow();
//         const placesService = new window.google.maps.places.PlacesService(map);

//         if (center.place_id) {
//             marker.addListener("click", () => {
//                 placesService.getDetails({ placeId: center.place_id }, (details, status) => {
//                     if (status === window.google.maps.places.PlacesServiceStatus.OK && details) {
//                         const photoUrl = details.photos?.[0]?.getUrl({
//                             maxWidth: 300,
//                             maxHeight: 150,
//                         }) || "";

//                         const contentHtml = `
// <div style="max-width: 300px; font-family: Arial, sans-serif;">
// ${photoUrl
//                                 ? `<img src="${photoUrl}" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 8px;" />`
//                                 : ""
//                             }
// <h3 style="margin: 0 0 8px; font-size: 18px;">${details.name}</h3>
// <p style="margin: 0 0 6px; font-size: 14px;"><strong>📍 Address:</strong> ${details.formatted_address || "N/A"}</p>
// ${details.rating
//                                 ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>⭐ Rating:</strong> ${details.rating} (${details.user_ratings_total || 0} reviews)</p>`
//                                 : ""
//                             }
// ${details.formatted_phone_number
//                                 ? `<p style="margin: 0 0 6px; font-size: 14px;"><strong>📞 Phone:</strong> ${details.formatted_phone_number}</p>`
//                                 : ""
//                             }
// ${details.website
//                                 ? `<p style="margin: 0;"><a href="${details.website}" target="_blank" style="color: #1a73e8;">Visit Website</a></p>`
//                                 : ""
//                             }
// <p style="margin-top: 6px;"><a href="https://www.google.com/maps/place/?q=place_id:${center.place_id}" target="_blank" style="color: #1a73e8;">View on Google Maps</a></p>
// </div>
// `;

//                         infoWindow.setContent(contentHtml);
//                         infoWindow.open(map, marker);
//                     }
//                 });
//             });
//         }

//     }, [isScriptLoaded, center, zoom, styles]);

//     return (
//         <div>
//             <div
//                 id="map"
//                 style={{
//                     height: isDesktop ? desktopHeight : "280px",
//                     width: "100%",
//                     marginBottom: "20px",
//                 }}
//             ></div>
//         </div>
//     );
// };

// export default MapComponent;
