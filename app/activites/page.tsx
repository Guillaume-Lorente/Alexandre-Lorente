import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function ActivitesPage() {
  return (
    <main>
      <section className="relative bg-[#0B1725] px-6 pb-24 pt-40 text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
            Activités
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Ski, snowboard et montagne à Tignes & Val d’Isère
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Des cours et accompagnements adaptés à votre niveau, vos envies et les conditions du moment.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          {[
            ['Ski privé', 'Pour progresser techniquement, gagner en confiance ou simplement profiter des pistes avec un accompagnement personnalisé.'],
            ['Snowboard', 'Des premières descentes au perfectionnement, avec une approche progressive, claire et rassurante.'],
            ['Freeride', 'Découvrir la montagne autrement, selon les conditions, le niveau et les possibilités du moment.'],
            ['Freestyle', 'Travailler les bases, les trajectoires, les sauts et la confiance dans une approche adaptée.'],
            ['Ski de randonnée', 'Explorer la montagne à un autre rythme, avec une attention particulière portée à la sécurité et aux conditions.'],
          ].map(([title, text], index) => (
            <div
              key={title}
              className="grid grid-cols-1 overflow-hidden rounded-[32px] bg-white shadow-sm md:grid-cols-2"
            >
              <div
                className="min-h-[340px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-${
                    [
                      '1551698618-1dfe5d97d256',
                      '1517825738774-7de9363ef735',
                      '1546483875-ad9014c88eba',
                      '1488590528505-98d2b5aba04b',
                      '1605540436563-5bca919ae766',
                    ][index]
                  }?q=80&w=1600&auto=format&fit=crop)`,
                }}
              />

              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="mb-6 text-sm text-[#5B8DB8]">
                  0{index + 1}
                </span>

                <h2 className="text-3xl font-semibold text-[#0B1725] md:text-4xl">
                  {title}
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-[#667085]">
                  {text}
                </p>

                <a
                  href="/contact"
                  className="mt-8 w-fit rounded-full bg-[#0B1725] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#14243a]"
                >
                  Me contacter
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}