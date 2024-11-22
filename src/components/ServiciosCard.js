"use client";
import Image from "next/image";
import React, { useState } from "react";

const ServiciosCard = ({ service }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleReadMore = () => {
    setShowDescription(true);
  };

  const handleClose = () => {
    setShowDescription(false);
  };

  return (
    <div className="relative min-h-96 w-full h-64 md:h-80 lg:h-96">
      {/* targeta normal */}
      <div className="rounded-lg relative h-full">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover rounded-lg pb-28 pt-10"
        />

        <div className="absolute bottom-4 left-0 bg-black bg-opacity-70 text-white p-4 w-10/12 flex flex-col justify-between items-start gap-2">
          <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
          <p className="text-gray-400">{service.description}</p>
          <button
            onClick={handleReadMore}
            className="uppercase flex justify-center items-center gap-2 transition duration-200 hover:text-primary-color-hover"
          >
            <p className="text-sm font-sm">Leer más</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div className="absolute w-16 h-16 bg-primary-color right-0 flex justify-center items-center">
          <Image
            src={service.icon}
            alt={service.name}
            fill
            className="object-cover p-2 brightness-75"
          />
        </div>
      </div>

      {/* Descripción adicional del servicio */}
      <div
        className={`absolute  inset-0 bg-black bg-opacity-90 text-white p-4 flex flex-col justify-center items-center mb-4 transition-opacity duration-500 ${
          showDescription ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          {service.title}
        </h3>
        <p className="text-gray-300  overflow-y-auto mb-4 text-center scrollbar-custom px-5">
          {service.information}
        </p>
        <button
          onClick={handleClose}
          className="uppercase px-4 py-2 bg-primary-color text-white rounded transition duration-200 hover:bg-primary-color-dark"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ServiciosCard;
``
