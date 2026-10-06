import { motion } from 'framer-motion'
import { ScrollFadeIn } from './components/ScrollFadeIn'
import { ParallaxSection } from './components/ParallaxSection'
import { StaggerContainer } from './components/StaggerContainer'
import { ArrowRight, Users, Briefcase, Target } from 'lucide-react'

export default function App() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Talen Nordic</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">Om oss</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Tjänster</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <ParallaxSection offset={30}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Modern rekryteringsplattform
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Vi kopplar samman toppkandidater med spännande möjligheter i hela Sverige
            </motion.p>

            <motion.button
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Kom igång <ArrowRight size={20} />
            </motion.button>
          </div>
        </ParallaxSection>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Varför välja oss</h2>
          </ScrollFadeIn>

          <StaggerContainer>
            {[
              {
                icon: <Users size={40} />,
                title: "Bred kandidatbank",
                description: "Tillgång till tusentals kvalificerade yrkespersoner inom alla branscher"
              },
              {
                icon: <Briefcase size={40} />,
                title: "Branschexperter",
                description: "Vårt team har årtionden av erfarenhet av rekrytering i Sverige"
              },
              {
                icon: <Target size={40} />,
                title: "Träffsäker matchning",
                description: "Avancerade algoritmer som matchar rätt kandidat med rätt roll"
              }
            ].map((feature, i) => (
              <ScrollFadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition">
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Morphing Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Våra tjänster</h2>
          </ScrollFadeIn>

          <div className="space-y-12">
            {["Chefsrekrytering", "Teknisk rekrytering", "Fast anställning", "Konsultlösningar"].map((service, i) => (
              <ScrollFadeIn key={i} delay={i * 0.15}>
                <motion.div
                  className="p-8 bg-white rounded-xl border border-gray-200 cursor-pointer"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service}</h3>
                      <p className="text-gray-600">
                        Skräddarsydda lösningar för just era rekryteringsbehov
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollFadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">Redo att ta er rekrytering till nästa nivå?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Tillsammans hittar vi rätt kompetens för er organisation
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Boka ett möte
            </motion.button>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Talen Nordic</h4>
              <p className="text-gray-400">Modern rekrytering i hela Sverige</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Företaget</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Om oss</a></li>
                <li><a href="#" className="hover:text-white">Blogg</a></li>
                <li><a href="#" className="hover:text-white">Karriär</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tjänster</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">För företag</a></li>
                <li><a href="#" className="hover:text-white">För kandidater</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <p className="text-gray-400">info@vrdigitals.net</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Talen Nordic. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
