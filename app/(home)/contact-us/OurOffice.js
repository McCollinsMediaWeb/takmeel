'use client';
import { motion } from "framer-motion";
import MapComponent from "@/components/MapComponent/MapComponent";
export default function OurOffice() {

    const mapData = {
        apiKey: "AIzaSyCBtGUl2z4uc5HX9e7eMmzIHalH2a99Oz4",
        center: { lat: 25.184791188866857, lng: 55.279302562882066, place_id: "ChIJGZZhWYtpXz4RJ_-KcyiQQYI" },
        zoom: 10,
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#5fb6c5" }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#dfeee9" }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#f2f3f2" }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#b3d4af" }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#ffffff" }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    { "visibility": "off" }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#e3e4e2" }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#f7f7f7" }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#f2f3f2" }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#666666" }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#444444" }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#444444" }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#444444" }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    { "visibility": "on" }
                ]
            }
        ],
        nearByPlaces: [
            { name: "Sheikh Ammar Bin Humaid St", place_id: "EjlTaGVpa2ggQW1tYXIgQmluIEh1bWFpZCBTdCAtIEFqbWFuIC0gVW5pdGVkIEFyYWIgRW1pcmF0ZXMiLiosChQKEglFE_Ecw_f1PhGmK-GgfIWUIBIUChIJHwyp6rZXXz4RerixWbtcrRE", location: { lat: 25.423142001648724, lng: 55.514235100948774 } },
        ]
    }

    return (
        <section className="pd-common">
            <style>
                {`
            @media (max-width: 768px) {
              .responsive-call-box {
                width: 100% !important;
                margin-bottom: 15px;
            }
              .contact-team-header{
                margin: 0 auto;
              }
            }
          `}
            </style>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >

                    <div className="row" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', justifyContent: 'space-between' }} >
                        {/* <div className="col-md-12 PadBox1"> */}

                        <div className="col-md-5">
                            <MapComponent {...mapData} desktopHeight="800px" />
                        </div>


                        <div className="col-md-6">
                            <div className='CfT2 contact-team-header mb-5'>Contact Our Team</div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "30px",
                                    marginTop: '20px'
                                }}
                            >
                                {/* Timings Section */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        borderBottom: "1px solid #eaeaea",
                                        paddingBottom: "20px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div
                                        className="responsive-call-box"
                                        style={{
                                            width: "43%",
                                            minWidth: "150px",
                                            paddingRight: "20px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "#333",
                                                fontSize: "18px"
                                            }}
                                            className="CfT1"
                                        >
                                            TIMINGS
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            flex: "1",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                        }}
                                    >
                                        <div>
                                            <p style={{ margin: "0", fontWeight: "500" }}>Monday - Friday</p>
                                            <p style={{ margin: "0", color: "#666" }}>8:30 AM to 5:30 PM</p>
                                        </div>
                                        <div>
                                            <p style={{ margin: "0", fontWeight: "500" }}>Saturday</p>
                                            <p style={{ margin: "0", color: "#666" }}>8:30 AM to 12:30 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Call Us Section */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        borderBottom: "1px solid #eaeaea",
                                        paddingBottom: "20px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div
                                        className="responsive-call-box"
                                        style={{
                                            width: "43%",
                                            minWidth: "150px",
                                            paddingRight: "20px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "#333",
                                                fontSize: "18px"
                                            }}
                                            className="CfT1"
                                        >
                                            CALL US
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            flex: "1",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <span style={{ fontSize: "20px" }}>
                                                <img src="/whatsapp-black-icon.png" />
                                            </span>
                                            <a href="https://wa.me/971523749615?text=Hi%20Takmeel%2C%0AI%20would%20like%20to%20know%20more%20about%20your%20properties" style={{ color: "#333", textDecoration: "none" }}>
                                                +971 523749615
                                            </a>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <span style={{ fontSize: "20px" }}>
                                                <img src="/call-black-icon.png" />
                                            </span>
                                            <a href="tel:+97145531916" style={{ color: "#333", textDecoration: "none" }}>
                                                +971 45531916
                                            </a>
                                            <span style={{ color: "#666" }}>|</span>
                                            <a href="tel:+97145655099" style={{ color: "#333", textDecoration: "none" }}>
                                                +971 45655099
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Section */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        borderBottom: "1px solid #eaeaea",
                                        paddingBottom: "20px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div
                                        className="responsive-call-box"
                                        style={{
                                            width: "43%",
                                            minWidth: "150px",
                                            paddingRight: "20px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "#333",
                                                fontSize: "18px"
                                            }}
                                            className="CfT1"
                                        >
                                            EMAIL
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            flex: "1",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                        }}
                                    >
                                        <a href="mailto:info@takmeeluae.com" style={{ color: "#333", textDecoration: "none" }}>
                                            Info@Takmeeluae.Com
                                        </a>
                                    </div>
                                </div>

                                {/* Visit Us Section */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        paddingBottom: "20px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div
                                        className="responsive-call-box"
                                        style={{
                                            width: "43%",
                                            minWidth: "150px",
                                            paddingRight: "20px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "#333",
                                                fontSize: "18px"
                                            }}
                                            className="CfT1"
                                        >
                                            VISIT US
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            flex: "1",
                                            display: "flex",
                                            flexDirection: "row",
                                            gap: "40px",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <div style={{ flex: "1", minWidth: "250px" }}>
                                            <h4 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "600" }}>Dubai</h4>
                                            <p style={{ margin: "0 0 10px 0", color: "#666", lineHeight: "1.5" }}>
                                                Office No. 706, Building No. 8,
                                                <br />
                                                Bay Square, Business Bay, Dubai, UAE.
                                            </p>
                                            <a href="https://maps.app.goo.gl/kqhWDZuo1m5pVXsV9" style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
                                                Get Direction
                                            </a>
                                        </div>

                                        <div style={{ flex: "1", minWidth: "250px" }}>
                                            <h4 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "600" }}>Ajman</h4>
                                            <p style={{ margin: "0 0 10px 0", color: "#666", lineHeight: "1.5" }}>
                                                G01, Sheikh Ammar Bin Humaid St.
                                                <br />
                                                Al Mowaihat 02, Ajman, UAE.
                                            </p>
                                            <a href="https://maps.app.goo.gl/b3EXFcSGJEprVeB29" style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
                                                Get Direction
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </motion.div>
            </div>
        </section>
    );
}