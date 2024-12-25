"use client";
import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";
function Home() {
  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="mb-5 min-h-screen"
    >
      <Header />
      <main className="mx-auto flex max-w-7xl flex-col gap-2 px-2 md:flex-row md:gap-4">
        <section className="w-full md:w-3/4">
          <Preview />
        </section>
        <section className="w-full md:w-1/4">
          <Configurator />
        </section>
      </main>
    </div>
  );
}

export default Home;
