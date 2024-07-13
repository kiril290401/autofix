import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header id="inicio" className="min-h-screen w-full">
      <div className="absolute inset-0 flex items-center justify-center -z-0">
        <Image
          src="/header.png"
          className="brightness-[0.4] blur-sm"
          alt="Logo"
          layout="fill"
          objectFit="cover"
        />
        <div className=" container max-w-screen-7xl text-white text-center z-10 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-7 lg:pl-20">
          <p className=" uppercase">Conduce seguro</p>
          <h1 className=" text-4xl lg:text-6xl text-center lg:text-left font-semibold">
            <span className=" text-primary-color">Reparación</span> de vehiculos{" "}
            <br />y <span className=" text-primary-color">detailing</span> de
            coches
          </h1>
          <p className=" text-gray-300 text-center lg:text-left max-w-4xl">
          Tu tranquilidad es nuestra prioridad en cada visita a nuestro taller mecánico, donde la calidad y la confianza se combinan para mantener tu vehículo en las mejores condiciones.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <button className=" p-4 bg-primary-color uppercase">
              Hacer una pregunta
            </button>
            <div className="uppercase flex justify-center items-center gap-2">
              <p>Leer más</p>
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
