import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(options = {}) {
  const {
    animation = 'fade-up',
    duration = 0.8,
    delay = 0,
    start = 'top 80%',
    ease = 'power3.out',
  } = options

  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const ctx = gsap.context(() => {
      let animProps = {
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none none',
        }
      }

      switch (animation) {
        case 'fade-up':
          gsap.from(element, {
            ...animProps,
            y: 60,
            opacity: 0,
          })
          break
        case 'fade-down':
          gsap.from(element, {
            ...animProps,
            y: -60,
            opacity: 0,
          })
          break
        case 'fade-left':
          gsap.from(element, {
            ...animProps,
            x: -60,
            opacity: 0,
          })
          break
        case 'fade-right':
          gsap.from(element, {
            ...animProps,
            x: 60,
            opacity: 0,
          })
          break
        case 'scale':
          gsap.from(element, {
            ...animProps,
            scale: 0.5,
            opacity: 0,
          })
          break
        case 'rotate':
          gsap.from(element, {
            ...animProps,
            rotation: -15,
            scale: 0.8,
            opacity: 0,
          })
          break
        default:
          gsap.from(element, animProps)
      }
    }, ref)

    return () => ctx.revert()
  }, [animation, duration, delay, start, ease])

  return ref
}

export function useStaggerReveal(options = {}) {
  const {
    stagger = 0.1,
    duration = 0.6,
    delay = 0,
    start = 'top 80%',
    animation = 'fade-up',
  } = options

  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const ctx = gsap.context(() => {
      const children = element.children
      
      let fromProps = { opacity: 0 }
      
      switch (animation) {
        case 'fade-up':
          fromProps = { ...fromProps, y: 50 }
          break
        case 'scale':
          fromProps = { ...fromProps, scale: 0.8 }
          break
        case 'rotate':
          fromProps = { ...fromProps, rotation: -5 }
          break
      }

      gsap.from(children, {
        ...fromProps,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none none',
        }
      })
    }, ref)

    return () => ctx.revert()
  }, [stagger, duration, delay, start, animation])

  return ref
}
