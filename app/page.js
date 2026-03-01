import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ItzFizz | Creative Digital Experiences',
  description: 'Premium scroll-driven animations and creative digital experiences crafted with passion and precision.',
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      {/* Features Section */}
      <Features />

      {/* About Section */}
      <section className="min-h-[50vh] bg-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-headline text-primary mb-8">
            ABOUT US
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-8">
            We are a creative agency dedicated to crafting exceptional digital experiences. 
            Our team combines innovation with expertise to deliver outstanding results 
            for clients worldwide. We specialize in creating immersive web experiences 
            that captivate and convert.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="glass rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-accent font-bold">{item}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Project Feature
                </h3>
                <p className="text-muted text-sm">
                  Innovative solutions tailored to meet your unique business challenges 
                  and drive growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
