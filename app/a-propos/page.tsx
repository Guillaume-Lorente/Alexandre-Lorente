import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1725] px-6 pb-24 pt-40 text-white">
        <Navbar />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:items-end">
          
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
              À propos
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
              Une approche humaine et pédagogique de la montagne
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Passionné par les sports de glisse et la montagne depuis toujours, j’enseigne aujourd’hui le ski et le snowboard à Tignes et Val d’Isère avec une approche basée sur la pédagogie, la confiance et le plaisir.
            </p>
          </div>

          <div
            className="min-h-[520px] rounded-[32px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1974&auto=format&fit=crop')",
            }}
          />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          
          <div className="space-y-8 text-lg leading-relaxed text-[#667085]">
            <p>
              Je vis en montagne depuis l’enfance et j’ai toujours été passionné par le ski, le snowboard et l’environnement alpin.
            </p>

            <p>
              Aujourd’hui, j’accompagne skieurs et snowboardeurs de tous niveaux à Tignes et Val d’Isère à travers des cours personnalisés adaptés aux objectifs, au niveau et au rythme de chacun.
            </p>

            <p>
              Ce que j’aime avant tout, c’est transmettre, faire progresser et permettre à chacun de profiter pleinement de la montagne dans une ambiance conviviale, rassurante et motivante.
            </p>

            <p>
              J’enseigne aussi bien le ski et le snowboard que le freeride, le freestyle et le ski de randonnée, toujours avec une attention particulière portée à la pédagogie, à la sécurité et au plaisir de la glisse.
            </p>

            <p>
              Diplômé d’État français, j’enseigne aujourd’hui au sein d’Évolution 2 à Tignes et Val d’Isère.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
              Philosophie
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#0B1725] md:text-5xl">
              Une expérience adaptée à chacun
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0B1725]">
                Pédagogie
              </h3>

              <p className="mt-5 leading-relaxed text-[#667085]">
                Une approche claire, progressive et adaptée au niveau de chacun.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0B1725]">
                Confiance
              </h3>

              <p className="mt-5 leading-relaxed text-[#667085]">
                Créer un environnement rassurant pour progresser avec plaisir.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0B1725]">
                Montagne
              </h3>

              <p className="mt-5 leading-relaxed text-[#667085]">
                Partager une véritable expérience de la montagne et des sports de glisse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}