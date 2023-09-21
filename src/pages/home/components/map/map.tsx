import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Map: React.FC = () => {
    (mapboxgl as any).accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    const mapContainer = useRef<string | HTMLElement>("mapContainer");
    const map = useRef<mapboxgl.Map | null>(null);

    const [viewport, setViewport] = React.useState({
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 12,
    });

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12", // style URL
            center: [viewport.longitude, viewport.latitude],
            zoom: viewport.zoom,
        });
        map.current.on('load', function () {
            map.current?.resize();
        })
    }, []);

    return (
        <div>
            <div ref={(el) => (mapContainer.current = el ? el : "")} style={{ height: "100vh", width: "100%" }} className="mapContainer" />
        </div>
    )
}

export default Map;