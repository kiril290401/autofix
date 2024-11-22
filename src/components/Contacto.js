import React from "react";
import Image from "next/image";
import GoogleMaps from "./GoogleMaps";
const Contacto = () => {
  return (
    <section id="contacto" className=" py-16 flex justify-center">
      <div className=" container max-w-7xl  gap-4 p-6 flex flex-col lg:flex-row  justify-between">
        <div>
          <h2 className=" uppercase text-primary-color">Contacto</h2>
          <div className=" grid gap-3">
            <p>
              Numero:{" "}
              <a className="text-2xl" href="tel:+34658704782">
                658 70 47 82
              </a>
            </p>
            <p>
              Correo electrónico:{" "}
              <a className="text-2xl" href="mailto:correo@correo.com">
                k2grupfix@gmail.com
              </a>
            </p>
            <div>
              <p>Redes sociales:</p>
              <div className="">
                <div className=" flex gap-5 mt-3">
                  <div className="w-14 h-14 bg-primary-color flex justify-center items-center transition duration-200 hover:bg-primary-color-hover">
                    <Image
                      src="/icon_instagram.png"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="w-14 h-14 bg-primary-color flex justify-center items-center transition duration-200 hover:bg-primary-color-hover">
                    <Image
                      src="/icon_facebook.png"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="w-14 h-14 bg-primary-color flex justify-center items-center transition duration-200 hover:bg-primary-color-hover">
                    <Image
                      src="/icon_whatsapp.png"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 grid gap-3">
              <p className="uppercase text-primary-color">Horario de trabajo</p>
              <div>
                <p>
                  De lunes a viernes:{" "}
                  <span className="text-xl">9:00 - 13:00 y 15:00 - 19:00</span>
                </p>
              </div>
            </div>
            <div>
              <p className="uppercase text-primary-color">Ubicación</p>
              <p className=" text-xl">Passeig de la Muntanya, 15B</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
            <GoogleMaps/>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
