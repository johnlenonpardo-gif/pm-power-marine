export default function BalanceoDinamicoPage() {
  const trabajos = [
    "Balanceo dinámico in situ",
    "Corrección de desbalances en rotores",
    "Medición de vibraciones asociadas",
    "Ajuste de masas en campo",
    "Control posterior al balanceo",
    "Emisión de informe técnico",
  ];

  const beneficios = [
    "Reducción de vibraciones",
    "Mayor vida útil de componentes",
    "Mejor rendimiento del equipo",
    "Menor desgaste mecánico",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
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
      {/* HERO */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold">Balanceo Dinámico</h1>

            <p className="mt-6 text-slate-300">
              Servicio de balanceo dinámico para equipos rotativos, orientado a
              eliminar vibraciones y mejorar el comportamiento del sistema.
            </p>
          </div>

          <img
            src="/balanceo1.jpg"
            alt="Balanceo dinámico"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Alcance del servicio</h2>

        <p className="mt-6 text-slate-700 leading-8">
          Los balanceos se realizan con equipamiento portátil de alta resolución
          para rotores que giren entre 100 y 40.000 rpm, no importa su tamaño.
          Esta técnica permite corregir la anormalidad sin necesidad de desarmar
          la unidad.
        </p>

        <p className="mt-4 text-slate-700 leading-8">
          Se trabaja bajo normas ISO1940, confeccionando un informe escrito con
          los resultados obtenidos. Finalizado el ensayo se entrega un informe
          con el estado inicial y final luego del balanceo.
        </p>

        <p className="mt-4 text-slate-700 leading-8">
          Aplicable a ventiladores, turbinas, centrifugas, molinos, etc.
        </p>
      </section>

      {/* TRABAJOS */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10">
        <div className="grid gap-4">
          {trabajos.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Beneficios</h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {beneficios.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-[#e0f2fe] border border-cyan-200 p-6 shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <img
            src="/balanceo1.jpg"
            alt="Balanceo 1"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
          <img
            src="/balanceo2.jpg"
            alt="Balanceo 2"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
          <img
            src="/balanceo3.jpg"
            alt="Balanceo 3"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-slate-950 text-white py-20 text-center">
        <h2 className="text-3xl font-bold">Contacto</h2>

        <a
          href="https://wa.me/5492805060792"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block bg-cyan-500 text-black px-6 py-3 rounded-xl"
        >
          WhatsApp
        </a>
      </section>
    </div>
  );
}