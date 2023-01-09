import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motions";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
const Maps = () => {
  return (
    <section className="py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <MapContainer
          className="h-[80vh]"
          center={[51.0, 19.0]}
          zoom={4}
          maxZoom={18}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <MarkerClusterGroup>
            <Marker position={[49.8397, 24.0297]} />
            <Marker position={[52.2297, 21.0122]} />
            <Marker position={[51.5074, -0.0901]} />
          </MarkerClusterGroup>
        </MapContainer>
      </motion.div>
    </section>
  );
};

export default Maps;
