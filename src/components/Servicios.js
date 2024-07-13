import React from "react";
import ServiciosCard from "./ServiciosCard";
import { services } from "@/data/services";
const Servicios = () => {
  return (
    <section id="servicios" className="min-h-screen py-16 flex justify-center">
      <div className=" container max-w-7xl  gap-4 p-4 flex flex-col">
        <h2 className=" uppercase text-primary-color">Nuestros servicios</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
          <p className=" text-4xl lg:w-1/2">
            Entregando Soluciones{" "}
            <span className="text-primary-color">Reparación</span> De
            Automóviles y <span className="text-primary-color">Detailing</span>{" "}
            Interior
          </p>
          <p className="text-gray-400 lg:w-1/2">
            Aprovecha nuestros servicios completos de reparación y detailing al
            mejor precio para que tu coche luzca y funcione como nuevo.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiciosCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
