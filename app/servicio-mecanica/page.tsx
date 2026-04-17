export default function ServicioMecanicaPage() {
  const trabajos = [
    "Reparación integral de motores de propulsión",
    "Mantenimiento de grupos electrógenos",
    "Overhaul de motores diésel industriales y navales",
    "Diagnóstico de fallas mecánicas complejas",
    "Ajustes, calibraciones y puesta a punto",
    "Asistencia técnica en campo, planta y puerto",
  ];

  const beneficios = [
    "Mayor confiabilidad operativa",
    "Reducción de tiempos de parada",
    "Mejora del rendimiento mecánico",
    "Atención técnica especializada",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
    <header className="border-b border-slate-200 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

    {/* LOGO */}
    <a href="/" className="flex items-center gap-3">
      <img
        src="/logo2.png"
        alt="PM POWER MARINE"
        className="h-12 w-auto object-contain"
      />
      <div>
        <p className="text-lg font-bold leading-none">PM POWER MARINE</p>
        <p className="text-xs text-slate-500">
          Industrial & Naval Maintenance
        </p>
      </div>
    </a>

    {/* DERECHA */}
    <div className="flex items-center gap-10">

      {/* REDES */}
      <div className="flex items-center gap-3">

        {/* INSTAGRAM */}
       <a
                href="https://instagram.com/powermarinesystem"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.575 2 2 4.575 2 7.75v8.5C2 19.425 4.575 22 7.75 22h8.5C19.425 22 22 19.425 22 16.25v-8.5C22 4.575 19.425 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a.75.75 0 100 1.5.75.75 0 000-1.5z" />
                </svg>
        </a>

        {/* WHATSAPP */}
        <a
          
                href="https://wa.me/5492805060792"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 00-8.94 14.5L2 22l5.7-1.05A10 10 0 1012 2zm0 18a8 8 0 01-4.2-1.2l-.3-.18-3.4.63.63-3.32-.2-.33A8 8 0 1112 20zm4.4-5.6c-.24-.12-1.4-.7-1.62-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.36-1.9-1.14-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.36.1-.48.1-.1.24-.26.36-.38.12-.12.16-.2.24-.34.08-.14.04-.26-.02-.38-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.04.4 1.4.5.58.18 1.1.16 1.52.1.46-.06 1.4-.58 1.6-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                </svg>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/pm-power-marine-446619403"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.5 8h4v14h-4V8zm7.5 0h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05C19.42 7.95 21 10.08 21 13.34V22h-4v-7.5c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.95-2.88 3.98V22h-4V8z"/>
          </svg>
        </a>

      </div>

      {/* VOLVER */}
      <a
        href="/"
        className="text-sm font-semibold text-cyan-600 hover:underline"
      >
        ← Volver
      </a>

    </div>

  </div>
</header>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Servicio Especializado
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Servicio de Mecánica Integral
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Brindamos mantenimiento, reparación y puesta a punto de motores
              industriales y navales, equipos auxiliares y sistemas mecánicos
              críticos, con foco en confiabilidad, seguridad y continuidad
              operativa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Solicitar contacto
              </a>

              <a
                href="#trabajos"
                className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Ver alcance del servicio
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <img
              src="/mecanica1.jpg"
              alt="Servicio de mecánica"
              className="h-64 w-full rounded-3xl object-cover shadow-lg"
            />
            <img
              src="/mecanica2.jpg"
              alt="Overhaul de motor"
              className="h-64 w-full rounded-3xl object-cover shadow-lg"
            />
            <img
              src="/mecanica3.jpg"
              alt="Mantenimiento en campo"
              className="h-64 w-full rounded-3xl object-cover shadow-lg sm:col-span-2"
            />
          </div>
        </div>
      </section>

      <section id="trabajos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Alcance del servicio
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Soluciones mecánicas para equipos críticos
            </h2>

            <p className="mt-6 text-slate-700 leading-8">
              Nuestro servicio de mecánica integral está orientado a motores de
              propulsión, grupos electrógenos, equipos auxiliares y sistemas
              industriales que requieran diagnóstico, reparación, ajuste y
              mantenimiento especializado.
            </p>

            <p className="mt-4 text-slate-700 leading-8">
              Trabajamos con criterios técnicos de campo, procedimientos de
              inspección y ejecución orientados a maximizar el rendimiento y la
              disponibilidad de cada activo.
            </p>
          </div>

          <div className="grid gap-4">
            {trabajos.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Beneficios
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Por qué elegir este servicio
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {beneficios.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-6 text-center shadow-sm"
              >
                <p className="text-lg font-bold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <img
            src="/mecanica1.jpg"
            alt="Mecánica 1"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
          <img
            src="/mecanica2.jpg"
            alt="Mecánica 2"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
          <img
            src="/mecanica3.jpg"
            alt="Mecánica 3"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </section>

      <section id="contacto" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contacto
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Consultenos por Servicio de Mecánica
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Estamos disponibles para evaluar sus necesidades operativas y
            ofrecer una propuesta técnica a medida.
          </p>

          <div className="mt-8 space-y-2 text-lg">
            <p>Teléfono: +54 9 280 5060792
                    +54 9 11 5881-9197
            </p>
            <p>Email: contacto@pmpowermarine.com</p>
            <p>Ubicación: Argentina</p>
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/5492805060792"
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