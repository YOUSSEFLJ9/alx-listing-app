import Head from "next/head"
import Card from "../components/common/Card"
import Button from "../components/common/Button"
import { UI_TEXT } from "../constants"

export default function Home() {
  // Sample property data for demonstration
  const sampleProperty = {
    title: "Beautiful Beachfront Villa",
    description: "Stunning oceanview villa with private beach access and modern amenities.",
    image: "/beachfront-villa.png",
    price: 250,
    rating: 4.8,
  }

  return (
    <>
      <Head>
        <title>{UI_TEXT.SITE_NAME}</title>
        <meta name="description" content={UI_TEXT.SITE_DESCRIPTION} />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{UI_TEXT.SITE_NAME}</h1>
            <p className="text-xl text-gray-600 mb-8">{UI_TEXT.SITE_DESCRIPTION}</p>
            <Button variant="primary" size="large">
              {UI_TEXT.BUTTONS.SEARCH}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card {...sampleProperty} />
            <Card
              title="Cozy Mountain Cabin"
              description="Perfect retreat in the mountains with hiking trails nearby."
              image="/secluded-mountain-cabin.png"
              price={180}
              rating={4.6}
            />
            <Card
              title="Modern City Apartment"
              description="Stylish apartment in the heart of downtown with city views."
              image="/modern-apartment-living.png"
              price={120}
              rating={4.4}
            />
          </div>
        </div>
      </main>
    </>
  )
}
