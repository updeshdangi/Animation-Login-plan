'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HEADLINE = "W E L C O M E I T Z F I Z Z"

const STATS = [
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 500, suffix: '%', label: 'Revenue Growth' },
  { value: 50, suffix: '+', label: 'Team Members' },
]

function AnimatedNumber({ value, suffix, ref }) {
  const numberRef = useRef(null)

  useEffect(() => {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: value,
      duration: 1.5,
      ease: 'power3.out',
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.floor(obj.val) + suffix
        }
      },
    })
  }, [value, suffix])

  return <span ref={numberRef} className="text-4xl lg:text-5xl font-bold gradient-text mb-2 inline-block">0{suffix}</span>
}

export default function HeroSection() {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const statsRef = useRef(null)
  const visualRef = useRef(null)
  const containerRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const gradientRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        gradientRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 }
      )

      tl.fromTo(
        headlineRef.current.children,
        { 
          opacity: 0, 
          y: 100,
          rotateX: -90,
          scale: 0.5
        },
        { 
          opacity: 1, 
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8, 
          stagger: 0.05,
          ease: 'back.out(1.7)'
        },
        '-=0.5'
      )

      tl.fromTo(
        statsRef.current.children,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.8,
          rotate: -5
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.6, 
          stagger: 0.15,
          ease: 'power3.out'
        },
        '-=0.3'
      )

      tl.fromTo(
        visualRef.current,
        { 
          opacity: 0, 
          scale: 0,
          x: 300,
          rotation: -180
        },
        { 
          opacity: 1, 
          scale: 1,
          x: 0,
          rotation: 0,
          duration: 1.2, 
          ease: 'elastic.out(1, 0.5)'
        },
        '-=0.8'
      )

      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )


      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: 1,
      })


      gsap.to(headlineRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -200,
        scale: 0.8,
        opacity: 0,
        letterSpacing: '0vw',
        ease: 'none'
      })

      gsap.to(statsRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -150,
        opacity: 0,
        scale: 0.5,
        ease: 'none'
      })

      const visualTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      })

      visualTimeline.to(visualRef.current, {
        x: -100,
        y: 50,
        scale: 1.2,
        rotation: 45,
        opacity: 0.9,
        ease: 'none'
      })

      .to(visualRef.current, {
        x: -200,
        y: 100,
        scale: 0.8,
        rotation: 90,
        opacity: 0.7,
        ease: 'none'
      })
      .to(visualRef.current, {
        x: -300,
        y: 150,
        scale: 0.4,
        rotation: 180,
        opacity: 0,
        ease: 'none'
      })

      gsap.to(scrollIndicatorRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '20% top',
          scrub: 1,
        },
        opacity: 0,
        y: -20,
        ease: 'none'
      })

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        const xPos = (clientX / window.innerWidth - 0.5) * 20
        const yPos = (clientY / window.innerHeight - 0.5) * 20
        
        gsap.to(gradientRef.current, {
          x: xPos,
          y: yPos,
          duration: 0.5,
          ease: 'power2.out'
        })
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated background gradient */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-br from-background via-secondary via-30% to-accent/20 opacity-0"
      />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline */}
        <div className="flex flex-wrap justify-center items-center gap-x-[1.5vw] mb-16 lg:mb-24">
          <h1 
            ref={headlineRef}
            className="font-headline text-[8vw] leading-none tracking-headline text-primary"
            style={{ perspective: '1000px' }}
          >
            {HEADLINE.split('').map((letter, index) => (
              <span 
                key={index}
                className="inline-block gsap-animate"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Statistics */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {STATS.map((stat, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 text-center gsap-animate hover:border-accent/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-default group"
            >
              <AnimatedNumber 
                value={stat.value} 
                suffix={stat.suffix} 
              />
              <div className="text-muted text-sm lg:text-base font-body group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-muted text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted/50 rounded-full flex justify-center pt-2 group-hover:border-accent transition-colors duration-300">
              <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Visual Element */}
      <div 
        ref={visualRef}
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] opacity-0 gsap-animate pointer-events-none"
      >
        {/* Main circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-orange-500 to-red-600 opacity-80" />
        
        {/* Inner rings */}
        <div className="absolute inset-8 rounded-full border border-white/10" />
        <div className="absolute inset-16 rounded-full border border-white/5" />
        <div className="absolute inset-24 rounded-full border border-white/5" />
        
        {/* Center accent */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-white/10 backdrop-blur-sm" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-100" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200" />
      </div>
    </section>
  )
}
