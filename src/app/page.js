import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import LandingPageComponent from '@/components/landingpage/landingpage'
import Products from '@/components/products/products'
export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPageComponent />
      <Products />
      <Footer/>
    </>
  )
}
