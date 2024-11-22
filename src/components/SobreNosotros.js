import React from "react";
import CardsHeader from "./CardsHeader";
import Image from "next/image";

const SobreNosotros = () => {
  return (
    <div
      className=" bg-fixed bg-cover flex flex-col  bg-fondo-color-negro"
      style={{ backgroundImage: "url('/fondo_section1.png')" }}
    >
      <CardsHeader />
      <div
        id="nosotros"
        className="max-w-7xl m-auto min-h-screen flex gap-5 flex-col lg:flex-row py-20 justify-center items-center"
      >
        <div className="lg:w-1/2 grid gap-3 p-4 justify-center items-center">
          <h2 className=" uppercase text-primary-color">Quienes somos?</h2>
          <p className=" text-4xl">
            Reparación De Automóviles E Los Que Realmente Puede Confiar
          </p>
          <p className="text-gray-400">
            En AutoFix, nos enorgullecemos de ofrecer servicios de alta calidad
            y soluciones confiables para todos los problemas de su vehículo.
            Nuestro equipo de técnicos expertos está dedicado a proporcionar un
            servicio excepcional y a garantizar que su automóvil funcione de
            manera segura y eficiente.
          </p>
          {/*Satisfaccion del cliente */}
          <div className="grid grid-cols-10 grid-rows-2 items-center gap-1 w-full">
            <div className="col-span-2">
              <p className="text-left">Clientes satisfechos</p>
            </div>
            <div className="col-span-2 col-start-9">
              <p className="text-right">90%</p>
            </div>
            <div className="col-span-10 row-start-2 w-full h-3 bg-black relative">
              <div
                className="bg-primary-color h-full absolute top-0 left-0"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className=" flex justify-between">
            <div className=" flex max-w-60 items-center justify-between gap-3">
              <div className="w-16 h-16 min-w-16 bg-fondo-color-gris flex justify-center items-center p-3">
                <Image
                  src="/nosotros/equipo.png"
                  width={60}
                  height={60}
                  alt="Aquipo de trabajo"
                />
              </div>
              <p>Equipo profecional y creativo</p>
            </div>
            <div className=" flex max-w-60 items-center justify-between gap-3">
              <div className="w-16 h-16 min-w-16 bg-fondo-color-gris flex justify-center items-center p-3">
              <Image
                  src="/nosotros/garantia.png"
                  width={60}
                  height={60}
                  alt="Aquipo de trabajo"
                />
              </div>
              <p>Garantía de nuestro trabajo</p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/2 bg-cover rounded-xl m-4">
          <Image
            src="/imagen_mecanico_s1.png"
            width={1500}
            height={1500}
            alt="mecanico"
            className=" rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
