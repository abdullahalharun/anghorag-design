import Header from '@/components/Header'
import ProductDetails from '@/components/ProductDetails'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white">

      <Header />

      <ProductDetails />

    </main>
  )
}
