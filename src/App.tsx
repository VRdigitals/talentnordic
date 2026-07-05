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
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
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
              Modern Recruitment Platform
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect top talent with exceptional opportunities across the Nordic region
            </motion.p>

            <motion.button
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
          </div>
        </ParallaxSection>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Us</h2>
          </ScrollFadeIn>

          <StaggerContainer>
            {[
              {
                icon: <Users size={40} />,
                title: "Diverse Talent Pool",
                description: "Access to thousands of qualified professionals across all sectors"
              },
              {
                icon: <Briefcase size={40} />,
                title: "Industry Experts",
                description: "Our team has decades of experience in Nordic recruitment"
              },
              {
                icon: <Target size={40} />,
                title: "Precision Matching",
                description: "Advanced algorithms to match the right candidate with your role"
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
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          </ScrollFadeIn>

          <div className="space-y-12">
            {["Executive Search", "Technical Recruitment", "Permanent Placement", "Contract Solutions"].map((service, i) => (
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
                        Tailored solutions for your specific recruitment needs
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Hiring?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's work together to find the perfect talent for your organization
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
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
              <p className="text-gray-400">Modern recruitment for the Nordic region</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">For Companies</a></li>
                <li><a href="#" className="hover:text-white">For Candidates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">info@vrdigitals.net</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Talen Nordic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
