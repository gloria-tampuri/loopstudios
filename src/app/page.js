'use client'
import Image from 'next/image'
import Hero from '../../Components/Hero/Hero'
import HeroNext from '../../Components/HeroNext/HeroNext'
import Creations from '../../Components/Creations/Creations'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
   <div>
    <Hero/>
    <HeroNext/>
    <Creations/>
    <Footer/>
   </div>
  )
}
