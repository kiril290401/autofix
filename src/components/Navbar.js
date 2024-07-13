"use client";
import Image from "next/image";
import { useState } from "react";
import { Lilita_One } from "next/font/google";
import Link from "next/link";
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false); // Cerrar la navegación desplegable
  };

  const apartados = [
    { name: "Inicio", slog: "#inicio" },
    { name: "Sobre Nosotros", slog: "#nosotros" },
    { name: "Servicios", slog: "#servicios" },
    { name: "Contacto", slog: "#contacto" },
  ];

  return (
    <>
      <div className="fixed top-0 h-16 left-0 w-full z-50 bg-fondo-color-negro px-4 py-2 flex justify-between items-center">
        <div className=" flex justify-center items-center">
          <Image src="/image_logo.svg" alt="Logo" width={70} height={70} />
          <p className=" text-2xl font-extrabold">AUTOFIX</p>
        </div>
        <div className="hidden md:block">
          <nav className="flex gap-8 uppercase font-semibold text-gray-300">
            {apartados.map((apartado) => (
              <Link
                href={apartado.slog}
                className=" transition duration-200 hover:text-primary-color "
                key={apartado.name}
              >
                {apartado.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:block">
          <div className=" flex gap-5">
            <div className="w-8 h-8 bg-primary-color flex justify-center items-center transition duration-200 hover:bg-primary-color-hover">
              <Image
                src="/icon_instagram.png"
                alt="Logo"
                width={25}
                height={40}
              />
            </div>
            <div className="w-8 h-8 bg-primary-color flex justify-center items-center transition duration-200 hover:bg-primary-color-hover">
              <Image
                src="/icon_facebook.png"
                alt="Logo"
                width={25}
                height={40}
              />
            </div>
            <div className="w-8 h-8 bg-primary-color flex justify-center items-center transition duration-200 hover:bg-primary-color-hover">
              <Image
                src="/icon_whatsapp.png"
                alt="Logo"
                width={25}
                height={40}
              />
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <Image src="/nav_close.png" alt="Logo" width={30} height={20} />
            ) : (
              <Image src="/nav_open.png" alt="Logo" width={30} height={30} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 overflow-hidden transition-all duration-500 bg-fondo-color-negro mt-16 z-50  border-b border-black ${
          isClick ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="md:hidden">
          <div className="w-full px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center gap-2 ">
            {apartados.map((apartado) => (
              <Link
                key={apartado.name}
                href={apartado.slog}
                className=" text-opacity-75 transition duration-200 hover:text-primary-color "
                onClick={closeNavbar}
              >
                {apartado.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden flex justify-center py-10 m-auto  ">
          <div className=" flex gap-5">
            <div className="w-8 h-8 bg-primary-color flex justify-center items-center transition duration-200 hover:bg-primary-color-hover">
              <Image
                src="/icon_instagram.png"
                alt="Logo"
                width={25}
                height={40}
              />
            </div>
            <div className="w-8 h-8 bg-primary-color flex justify-center items-center transition duration-200 hover:bg-primary-color-hover">
              <Image
                src="/icon_facebook.png"
                alt="Logo"
                width={25}
                height={40}
              />
            </div>
            <div className="w-8 h-8 bg-primary-color flex justify-center items-center transition duration-200 hover:bg-primary-color-hover">
              <Image
                src="/icon_whatsapp.png"
                alt="Logo"
                width={25}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
