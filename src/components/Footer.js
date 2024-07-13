import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-fondo-color-negro text-white py-10">
      <div className="container m-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        {/* Descripción breve */}
        <div className="mb-6 md:mb-0 text-center md:text-left md:w-1/3">
          <h3 className="text-xl font-bold mb-2">Autofix</h3>
          <p className="text-gray-400">Reparación y detailing de vehículos de alta calidad.</p>
        </div>

        {/* Enlaces a secciones */}
        <div className="flex flex-col md:flex-row mb-6 md:mb-0 text-center md:text-left md:w-1/3">
          <Link href="#inicio">
            <p className="mx-2 hover:text-gray-400 transition">Inicio</p>
          </Link>
          <Link href="#servicios">
            <p className="mx-2 hover:text-gray-400 transition">Servicios</p>
          </Link>
          <Link href="#contacto">
            <p className="mx-2 hover:text-gray-400 transition">Contacto</p>
          </Link>
          <Link href="#nosotros">
            <p className="mx-2 hover:text-gray-400 transition">Nosotros</p>
          </Link>
        </div>

        {/* Íconos sociales */}
        <div className="flex justify-center md:justify-start ">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400 transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400 transition">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400 transition">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        &copy; 2024 Autofix. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
