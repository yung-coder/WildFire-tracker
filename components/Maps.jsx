import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motions";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import { TypingText } from "./TypingText";

const NATURAL_EVENT_WILDFIRE = 8;
const Maps = ({ fireData }) => {
  return (
    <>
      <section className="  sm:p-[5%]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="flex justify-center items-center mb-3 p-4 font-bold text-lg tracking-widest">
            <TypingText title="LIVE FIRE TRACKER" className="mx-auto" />
          </div>
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
              {fireData.map((ev, index) => {
                if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
                  return (
                    <Marker
                      key={index}
                      position={[
                        ev.geometries[0].coordinates[1],
                        ev.geometries[0].coordinates[0],
                      ]}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </MarkerClusterGroup>
          </MapContainer>
        </motion.div>
      </section>
    </>
  );
};

export default Maps;
