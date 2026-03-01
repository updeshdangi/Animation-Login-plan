'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    icon: '🎨',
    title: 'Creative Design',
    description: 'Bespoke designs that capture your unique brand essence and captivate your audience.'
  },
  {
    icon: '⚡',
    title: 'Performance First',
    description: 'Lightning-fast load times and smooth interactions for an exceptional user experience.'
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Flawless presentation across all devices from mobile to desktop.'
  },
  {
    icon: '🎯',
    title: 'Strategic Approach',
    description: 'Data-driven decisions that align with your business objectives and growth goals.'
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security measures to protect your digital assets.'
  },
  {
    icon: '🚀',
    title: 'Scalable Solutions',
    description: 'Future-proof architecture that grows with your business needs.'
  }
]

export default function Features() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      // Cards staggered reveal
      gsap.from(cardsRef.current.children, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        scale: 0.9,
        rotation: -3,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-headline text-primary mb-4">
            WHAT WE DO
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Delivering excellence through innovative solutions and creative excellence
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group glass rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/10 cursor-default"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
