"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* HERO SECTION */}
      <header className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
        <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Aprende CSS3 desde <span className="text-blue-500">CERO</span> hasta dominarlo.
          </h1>
          <p className="max-w-2xl mb-6">
            Elige aprender CSS de una vez por todas. Una vez que termines este curso serás capaz de crear cualquier layout con CSS y crear tus propias animaciones.
          </p>
          <Link href="#" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
            Comienza ahora
          </Link>
        </div>
      </header>

      {/* SOBRE EL CURSO */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">¿Qué aprenderás en este curso?</h2>
        <p className="text-center max-w-xl mx-auto mb-10">
          Todo lo necesario de CSS: Flexbox, Grid, Custom properties, Position, Animaciones, Box Model y más.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image src="/images/shapes.svg" alt="Layouts" width={60} height={60} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">CSS Layouts</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore porro eius facilis?</p>
          </div>

          <div className="text-center">
            <Image src="/images/paint.svg" alt="Animaciones" width={60} height={60} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Animaciones</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore porro eius facilis?</p>
          </div>

          <div className="text-center">
            <Image src="/images/code.svg" alt="Sass" width={60} height={60} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sass</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore porro eius facilis?</p>
          </div>
        </div>
      </section>
    </div>
  );
}
