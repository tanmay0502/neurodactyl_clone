import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import LandingPageComponent from '@/components/landingpage/landingpage'
import Products from '@/components/products/products'
import Advantages from '@/components/advantages/advantages'
import SingleMarket from '@/components/markets/singlemarket'
import Markets from '@/components/markets/markets'
import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPageComponent />
      <Products />
      <Advantages />
      <Markets />
      <About />
      <Contact />
      <Footer/>
    </div>
  )
}
