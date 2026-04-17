"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const slides = [
    {
      titulo: "Mantenimiento Industrial y Naval",
      texto:
        "Soluciones técnicas confiables para maximizar disponibilidad operativa y reducir tiempos de parada.",
      imagen: "/slide1.jpg",
    },
    {
      titulo: "Mantenimiento Predictivo",
      texto:
        "Alineación láser, análisis de vibraciones y balanceo dinámico para equipos críticos.",
      imagen: "/slide2.jpg",
    },
    {
      titulo: "Asistencia Técnica en Campo",
      texto:
        "Intervenciones especializadas en motores, equipos industriales, embarcaciones y maquinaria pesada.",
      imagen: "/slide3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo2.png"
              alt="PM POWER MARINE"
              className="h-12 w-auto object-contain"
            />
            <div>
              <p className="text-lg font-bold leading-none">PM POWER MARINE</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                Industrial & Naval Maintenance
              </p>
            </div>
          </a>

          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#inicio" className="transition hover:text-cyan-600">
              Inicio
            </a>
            <a href="#servicios" className="transition hover:text-cyan-600">
              Servicios
            </a>
            <a href="#nosotros" className="transition hover:text-cyan-600">
              Nosotros
            </a>
            <a href="#contacto" className="transition hover:text-cyan-600">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section
        id="inicio"
        className="relative h-[78vh] min-h-[600px] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.titulo}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.imagen})` }}
          >
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              PM POWER MARINE
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {slides[currentSlide].titulo}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
              {slides[currentSlide].texto}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Solicitar contacto
              </a>

              <a
                href="#servicios"
                className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    index === currentSlide ? "bg-cyan-400" : "bg-white/40"
                  }`}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Servicios
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Soluciones para continuidad operativa
          </h2>

          <p className="mt-4 text-slate-600">
            Servicios especializados orientados a confiabilidad, eficiencia y
            reducción de tiempos improductivos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <a
            href="/servicio-mecanica"
            className="rounded-3xl bg-[#e0f2fe] border border-cyan-200 p-6 shadow-md hover:bg-cyan-100 hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-bold">Servicio de Mecánica</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Reparación, overhaul y mantenimiento de motores industriales y navales.
            </p>
            <p className="mt-4 font-semibold text-cyan-600">Ver más →</p>
          </a>

          <a
            href="/mantenimiento-preventivo"
            className="rounded-3xl bg-[#e0f2fe] border border-cyan-200 p-6 shadow-md hover:bg-cyan-100 hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-bold">Mantenimiento Preventivo</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Acciones programadas para revisar y reparar equipos antes de que se averíen.
            </p>
            <p className="mt-4 font-semibold text-cyan-600">Ver más →</p>
          </a>

          <a
            href="/mantenimiento-predictivo"
           className="rounded-3xl bg-[#e0f2fe] border border-cyan-200 p-6 shadow-md hover:bg-cyan-100 hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-bold">Mantenimiento Predictivo</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Monitoreo de condición para anticipar fallas y optimizar confiabilidad.
            </p>
            <p className="mt-4 font-semibold text-cyan-600">Ver más →</p>
          </a>

          <a
            href="/alineacion-laser"
           className="rounded-3xl bg-[#e0f2fe] border border-cyan-200 p-6 shadow-md hover:bg-cyan-100 hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-bold">Alineación Láser</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Alineación precisa de ejes y componentes rotativos para mejorar rendimiento.
            </p>
            <p className="mt-4 font-semibold text-cyan-600">Ver más →</p>
          </a>

          <a
            href="/analisis-vibraciones"
            className="rounded-3xl bg-[#e0f2fe] border border-cyan-200 p-6 shadow-md hover:bg-cyan-100 hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-bold">Análisis de Vibraciones</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Diagnóstico técnico para detectar desbalances y defectos mecánicos.
            </p>
            <p className="mt-4 font-semibold text-cyan-600">Ver más →</p>
          </a>

          <a
            href="/balanceo-dinamico"
            className="rounded-3xl bg-[#e0f2fe] border border-cyan-200 p-6 shadow-md hover:bg-cyan-100 hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-bold">Balanceo Dinámico</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Corrección de desbalances en equipos rotativos.
            </p>
            <p className="mt-4 font-semibold text-cyan-600">Ver más →</p>
          </a>
        </div>
      </section>

      <section id="nosotros" className="bg-slate-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Nosotros
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Experiencia técnica aplicada a resultados
            </h2>
            <p className="mt-6 text-slate-700">
              PM POWER MARINE brinda soporte técnico para mantenimiento industrial
              y naval, combinando experiencia de campo, diagnóstico preciso y
              compromiso con la confiabilidad operativa.
            </p>
            <p className="mt-4 text-slate-700">
              Trabajamos con enfoque preventivo, predictivo y correctivo para dar
              respuesta a las necesidades de cada operación.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <img
              src="/trabajo1.jpg"
              alt="Trabajo realizado 1"
              className="h-64 w-full rounded-3xl object-cover shadow-lg"
            />
            <img
              src="/trabajo2.jpg"
              alt="Trabajo realizado 2"
              className="h-64 w-full rounded-3xl object-cover shadow-lg"
            />
            <img
              src="/trabajo3.jpg"
              alt="Trabajo realizado 3"
              className="h-64 w-full rounded-3xl object-cover shadow-lg sm:col-span-2"
            />
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contacto
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Estamos listos para asistir su operación
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Contactenos para evaluar sus necesidades y brindarle una propuesta
            técnica a medida.
          </p>

          <div className="mt-8 space-y-2 text-lg">
            <p>Teléfono: +54 9 280 5060792 </p>  
                           +54 9 11 5881-9197 
            <p>Email: contacto@pmpowermarine.com</p>
            <p>Ubicación: Argentina</p>
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/ +5491158819197" 
              className="inline-flex rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              WhatsApp
              
            </a>
          </div>
        </div>
      </section>
    </div>
  );
  }
  