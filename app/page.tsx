"use client"

import type React from "react"

import { Phone, MapPin, Menu, X, Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background">
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#ffff66]/20 h-10"
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <a href="/" onClick={handleScrollToTop} className="h-8" aria-label="Edward's Pipe & Tobacco Home">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-HpxPFQUS0FCpA8iIF9ylWEIxZ1FCqB.webp"
              alt="Edward's Logo"
              width={32}
              height={32}
              className="h-full w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 text-sm">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-white hover:text-[#ffff66] transition-colors"
            >
              About Us
            </a>
            <a
              href="#pipes"
              onClick={(e) => handleNavClick(e, "#pipes")}
              className="text-white hover:text-[#ffff66] transition-colors"
            >
              Pipes
            </a>
            <a
              href="#pipe-tobacco"
              onClick={(e) => handleNavClick(e, "#pipe-tobacco")}
              className="text-white hover:text-[#ffff66] transition-colors"
            >
              Pipe Tobacco
            </a>
            <a
              href="#cigars"
              onClick={(e) => handleNavClick(e, "#cigars")}
              className="text-white hover:text-[#ffff66] transition-colors"
            >
              Cigars
            </a>
            <a
              href="#accessories"
              onClick={(e) => handleNavClick(e, "#accessories")}
              className="text-white hover:text-[#ffff66] transition-colors"
            >
              Accessories & Gifts
            </a>
            <a
              href="#events"
              onClick={(e) => handleNavClick(e, "#events")}
              className="text-white hover:text-[#ffff66] transition-colors"
            >
              Events
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-white hover:text-[#ffff66] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#ffff66] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-10 left-0 right-0 bg-black/98 backdrop-blur-sm border-b border-[#ffff66]/20">
            <div className="flex flex-col py-4">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="text-white hover:text-[#ffff66] transition-colors px-4 py-3 border-b border-gray-800"
              >
                About Us
              </a>
              <a
                href="#pipes"
                onClick={(e) => handleNavClick(e, "#pipes")}
                className="text-white hover:text-[#ffff66] transition-colors px-4 py-3 border-b border-gray-800"
              >
                Pipes
              </a>
              <a
                href="#pipe-tobacco"
                onClick={(e) => handleNavClick(e, "#pipe-tobacco")}
                className="text-white hover:text-[#ffff66] transition-colors px-4 py-3 border-b border-gray-800"
              >
                Pipe Tobacco
              </a>
              <a
                href="#cigars"
                onClick={(e) => handleNavClick(e, "#cigars")}
                className="text-white hover:text-[#ffff66] transition-colors px-4 py-3 border-b border-gray-800"
              >
                Cigars
              </a>
              <a
                href="#accessories"
                onClick={(e) => handleNavClick(e, "#accessories")}
                className="text-white hover:text-[#ffff66] transition-colors px-4 py-3 border-b border-gray-800"
              >
                Accessories & Gifts
              </a>
              <a
                href="#events"
                onClick={(e) => handleNavClick(e, "#events")}
                className="text-white hover:text-[#ffff66] transition-colors px-4 py-3 border-b border-gray-800"
              >
                Events
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-white hover:text-[#ffff66] transition-colors px-4 py-3"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        aria-label="Welcome to Edward's Pipe & Tobacco"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cash-register-counter-0SHloWSMFEia3POBmeHScW5biok8ur.webp"
            alt="Edward's Pipe & Tobacco Store"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-HpxPFQUS0FCpA8iIF9ylWEIxZ1FCqB.webp"
              alt="Edward's Pipe & Tobacco Logo"
              width={280}
              height={280}
              className="mx-auto w-[220px] md:w-[280px] h-auto"
              priority
            />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight text-balance">
            A Tampa Landmark Since 1960
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-pretty">
            Supplying Pipes, Tobacco, Cigars, Smokers Accessories and Gift Items for over six decades
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="tel:8138720723"
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#ffff66] text-black font-serif text-xl font-semibold border-4 border-[#c73426] shadow-[0_0_0_4px_black] hover:shadow-[0_0_0_5px_black] transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <a
              href="https://maps.app.goo.gl/cw4pC4f647NNrs4p9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#ffff66] text-black font-serif text-xl font-semibold border-4 border-[#c73426] shadow-[0_0_0_4px_black] hover:shadow-[0_0_0_5px_black] transition-all"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* About Section */}
      <section id="about" aria-labelledby="about-heading" className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 id="about-heading" className="font-serif text-4xl md:text-5xl text-foreground text-balance">
                Over 60 Years of Tradition
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Since 1960, Edward's Pipe & Tobacco has been Tampa's premier destination for discerning tobacco
                  enthusiasts. Our commitment to quality and tradition has made us a beloved landmark in the community.
                </p>
                <p>
                  We pride ourselves on offering an extensive selection of premium pipes, fine tobaccos, hand-rolled
                  cigars, and carefully curated accessories. Our knowledgeable staff is dedicated to helping both
                  newcomers and connoisseurs find exactly what they're looking for.
                </p>
                <p>
                  Step into our shop and experience the warmth of our wood-paneled lounge, where tradition meets comfort
                  in an atmosphere that has welcomed generations of patrons.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-epcarrillo-encore-i6HgkimnIJj7JHrSSMOwNHDAZEU4AW.webp"
                alt="EP Carrillo Encore Premium Cigar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* Friendly Atmosphere Section */}
      <section aria-labelledby="atmosphere-heading" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            id="atmosphere-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Friendly Atmosphere & Knowledgeable Staff
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            More than just a shop, Edward's is a gathering place where friendships are forged and memories are made. Our
            welcoming environment and expert staff create an experience that keeps customers coming back for decades.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manny-birthday-AuN4VR5yhmBkSWgVrPp3T1l4Me5LHk.webp"
                alt="Community gathering at Edward's"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patio-tony-jimmy-pEu5pDE1UmkrJ5dvtd8N8WIiEPXWRg.webp"
                alt="Relaxing on the patio"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our knowledgeable staff is here to guide you, and can help anyone from beginners to seasoned aficionados.
              Every corner of Edward's invites conversation and camaraderie.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              As the Tampa City Council noted, we are "a place where no one is a stranger."
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* Products Section */}
      <section aria-labelledby="products-heading" className="py-20 px-4 bg-[#8B4513]/10">
        <div className="max-w-6xl mx-auto">
          <h2
            id="products-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-16 text-balance"
          >
            Our Products & Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 text-center">
              <div className="relative h-64 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edwards-pipes-wall-TiZpZkn4r95xM0ZgvbspmDgTmRnKSh.webp"
                  alt="Handcrafted Pipes"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Handcrafted Pipes</h3>
              <p className="text-muted-foreground leading-relaxed">
                An extensive collection of fine pipes from renowned brands including Edwards, Savinelli, Peterson, and
                more.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="relative h-64 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pipe-tobacco-peter-stokkebye-DlAHuQmp8c7JvmwCpcy6IGr2XzJt8e.webp"
                  alt="Fine Pipe Tobacco"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Fine Pipe Tobacco</h3>
              <p className="text-muted-foreground leading-relaxed">
                Carefully selected pipe tobaccos and premium blends to suit every palate and preference.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="relative h-64 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-myfather-lapromesa-CXRk8XkUEGO6I3xFJV8mMSzPnalOQl.webp"
                  alt="Hand-Rolled Cigars"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Hand-Rolled Cigars</h3>
              <p className="text-muted-foreground leading-relaxed">
                Premium cigars from the world's finest manufacturers, with private lockers available for our members.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="relative h-64 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accessories-1-FpoEFLdZEgYIQhFVjXNYsMYcsStBN2.webp"
                  alt="Accessories & Gifts"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Accessories & Gifts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lighters, cutters, humidors, and unique gift items for the tobacco enthusiast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* Our Handcrafted Pipes Section */}
      <section id="pipes" aria-labelledby="pipes-heading" className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2
            id="pipes-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Our Handcrafted Pipes
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Discover our exceptional collection of premium tobacco pipes, featuring renowned brands from around the
            world. From classic briar pipes to modern artisan creations, we offer pipes for every taste and budget.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pipes-wall-FNT9XNkXyHcMGhNgRzAQJOyhlYRX2b.webp"
                alt="Premium Pipe Collection Display"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edwards-pipes-wall-TiZpZkn4r95xM0ZgvbspmDgTmRnKSh.webp"
                alt="Edward's Pipe Wall Display"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-serif text-3xl text-center text-foreground mb-4">Premium Handmade & Estate Pipes</h3>
            <p className="text-center text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              For the discerning collector, we offer an exquisite selection of handcrafted meerschaum pipes and rare
              estate pieces. Each pipe is a work of art, featuring intricate carvings and premium materials that
              showcase the finest craftsmanship in pipe making.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-80 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handmade-pipe-1-SoiMxUkzW8tuHcFtbZbWtSPCjBwKFL.webp"
                  alt="Handcrafted Meerschaum Pipe with Lattice Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handmade-pipe-2-ijoFrrB6WCoB1v9vKfLUckyOE7hLXx.webp"
                  alt="Ornate Carved Meerschaum Pipe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handmade-pipe-3-zYn9nBs66Ooyv2H6VSqqpqYJGeWyDI.webp"
                  alt="Estate Meerschaum Pipes in Case"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-sm border-2 border-black outline outline-1 outline-[#ffff66]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gordon-pipe-repair-dvUIvXwuMVOSqMNQgjtzQtoV1Yc7Mt.webp"
                  alt="Expert Pipe Repair Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-3xl text-[#fafafa]">Expert Pipe Repair Services</h3>
                <p className="text-[#fafafa] text-lg leading-relaxed">
                  Our skilled craftsmen provide professional pipe repair and restoration services. From stem replacement
                  and bowl refinishing to complete restorations, we bring your cherished pipes back to life. With
                  decades of experience and specialized equipment, we handle each pipe with the care and expertise it
                  deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* Our Pipe Tobacco Section */}
      <section id="pipe-tobacco" aria-labelledby="pipe-tobacco-heading" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            id="pipe-tobacco-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Our Pipe Tobacco
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Explore our extensive selection of premium pipe tobaccos, featuring both time-honored classics and exciting
            new blends where there is something for every pipe smoker's taste. Our knowledgeable staff can help you
            discover your next favorite blend or create a custom mixture tailored to your preferences.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pipe-tobacco-peter-stokkebye-DlAHuQmp8c7JvmwCpcy6IGr2XzJt8e.webp"
                alt="Peter Stokkebye Luxury Pipe Tobacco Blends"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pipe-tobacco-bags-blwb-peaches-creme-DG438D27LBChCx0bp1SHiZHbZsEYvS.webp"
                alt="Specialty Pipe Tobacco Blends"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We proudly carry fan-favorite blends from renowned manufacturers including Peter Stokkebye, whose luxury
              line features exceptional tobaccos like Luxury Bulls Eye Flake, Luxury Navy Flake, and Luxury Twist Flake.
              Each blend is carefully crafted to deliver a unique smoking experience with distinct flavor profiles and
              strength levels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In addition to our extensive pipe tobacco selection, we also carry premium loose-leaf rolling tobacco,
              including the Peter Stokkebye brand of rolling tobacco, known for its quality and consistency, as well as
              other fine tobaccos to meet your needs.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* Our Humidor Section */}
      <section id="cigars" aria-labelledby="humidor-heading" className="py-20 px-4 bg-[#8B4513]/10">
        <div className="max-w-6xl mx-auto">
          <h2
            id="humidor-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Our Humidor
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Step inside our climate-controlled humidor and discover an impressive selection of premium cigars from
            around the world for every cigar enthusiast.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/humidor-1-udSv0vBLKBmlU5aIxVgiDha1Z1GCmt.webp"
                alt="Edward's Humidor - Main Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/humidor-2-npJACCDMUmEYfrxUJEWFBA70sxfTch.webp"
                alt="Edward's Humidor - Camacho Section"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/humidor-3-qUiLnZ073QY0eLI5B5SV2H3GYT4Ni8.webp"
                alt="Edward's Humidor - Climate Controlled Cabinet"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/humidor-4-lLUol8S853Cyx61daDBEDHcS0Qb8iV.webp"
                alt="Edward's Humidor - Store View"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* Featured Cigars Section */}
      <section aria-labelledby="featured-cigars-heading" className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2
            id="featured-cigars-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Featured Premium Cigars
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Explore our curated selection of hand-rolled cigars from the world's most prestigious manufacturers
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-montecristo-classic-F19otC9LRhHRyVHqENM0RuQtYg2O6C.webp"
                  alt="Montecristo Classic Series"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">Montecristo Classic</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-lfd-30years-2mX0RAkAC3QoLim9KQoo4b4NLtyBO5.webp"
                  alt="La Flor Dominicana 30 Years"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">LFD 30 Years</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-epcarrillo-endure-H8XO2YVcIME8BfwGUolA5DVux7vM5D.webp"
                  alt="EP Carrillo Endure"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">EP Carrillo Endure</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-westtampa-devilcrab-XzmxHw6Y6ePfWOn7VJvcdH8VwQlsJK.webp"
                  alt="West Tampa Devil Crab"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">West Tampa Devil Crab</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-laaromadecuba-miamor-51wrfdULWUCxIdtlkhJ1QaUFsZdzef.webp"
                  alt="La Aroma de Cuba Mi Amor"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">La Aroma de Cuba Mi Amor</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-newworld-decenio-ummQgmmPJJatU5PkBFjn54jtbCD5Vd.webp"
                  alt="AJ Fernandez New World Decenio"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">AJ Fernandez New World Decenio</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-myfather-lapromesa-CXRk8XkUEGO6I3xFJV8mMSzPnalOQl.webp"
                  alt="My Father La Promesa"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">My Father La Promesa</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-oliva-serievmelanio-3sYSn3mugJR8gtW9BtnIozGnq7zhiD.webp"
                  alt="Oliva Serie V Melanio"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">Oliva Serie V Melanio</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-oliva-serieg-xBNu9PwjguVNr3O9MenItEXyLsieNQ.webp"
                  alt="Oliva Serie G"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">Oliva Serie G</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-myfather-lapromesa-CXRk8XkUEGO6I3xFJV8mMSzPnalOQl.webp"
                  alt="EP Carrillo Encore"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">EP Carrillo Encore</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-room101-doomsayer-4RZYfM12j65KGVRHOIWU3H3ifEvn1P.webp"
                  alt="Room 101 Doomsayer"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">Room 101 Doomsayer</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-lfd-andalusianbull-3ooy31mRgPF5xlhp7cQd6TTR8SMv5g.webp"
                  alt="La Flor Dominicana Andalusian Bull"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">LFD Andalusian Bull</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-epcarrillo-newwave-IOrPAXbxRKLLVRITOiyckXRO4TdymA.webp"
                  alt="EP Carrillo New Wave"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">EP Carrillo New Wave</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-punch-clasico-m21M1nmpJdxY6WlF3dZw9l1Ne5pfLN.webp"
                  alt="Punch Clasico"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">Punch Clasico</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-room101-farce-nwBvl6HEazSYDHlSlmpGhdSzSnuNUG.webp"
                  alt="Room 101 Farce"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">Room 101 Farce</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-fuente-rarepink-O0tpRz6BgbJHr1YXM0V5dgjtoyDR87.webp"
                  alt="Arturo Fuente Rare Pink"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">Arturo Fuente Rare Pink</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-perdomo-habano-DB5dB1XLODVUSaa3sJW6eyOXWtPRIR.webp"
                  alt="Perdomo Habano"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">Perdomo Habano</h4>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-black outline outline-1 outline-[#ffff66]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cigar-tatuaje-riservabroadleaf-fpYeDzh5aJGfnlQ6ITXamVUcjEfvxt.webp"
                  alt="Tatuaje Reserva Broadleaf"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-center text-foreground">Tatuaje Reserva Broadleaf</h4>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* Our Tobacco Accessories & Gifts Section */}
      <section id="accessories" aria-labelledby="accessories-heading" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            id="accessories-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Our Tobacco Accessories & Gifts
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Complete your smoking experience with our carefully curated selection of premium accessories, unique gift
            items, essential tools and collectible treasures. We offer everything the tobacco enthusiast needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accessories-1-FpoEFLdZEgYIQhFVjXNYsMYcsStBN2.webp"
                alt="Tobacco Accessories Display"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accessories-2-8VZh2DhuhqJ5fvbOKA9rNQQC2ckD3y.webp"
                alt="Vintage Tobacco Memorabilia and Accessories"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our accessories department features an extensive range of high-quality lighters and torches, precision
              cigar cutters, elegant ashtrays, and beautifully crafted humidors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We also carry a selection of tobacco magazines, vintage memorabilia, and unique collectibles that make
              perfect gifts for the aficionado in your life.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      <section aria-labelledby="lockers-heading" className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2
            id="lockers-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Private Vintage Lockers at Edward's
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Store your prized cigars and tobacco in our exclusive vintage locker system. These beautiful wooden lockers
            provide the perfect environment for your collection while offering convenient access whenever you visit.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lockers-wide-angle-8HPHQZPogeyi9nuAOgmBInOnoSWtua.webp"
                alt="Vintage Locker Room at Edward's"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lockers-angel-oliva-iii-CSxqMMavPSic11QfSlXQdFbVxO0hvc.webp"
                alt="Private Lockers with Brass Nameplates"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our vintage locker system has been a cherished feature of Edward's for decades. Members use these private
              lockers to store their cigars, tobacco, and smoking accessories in optimal conditions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each locker comes with a personalized brass nameplate and secure lock, ensuring your collection is safe
              and ready whenever you visit. To rent one of these exclusive lockers, speak with our staff to get on the
              waiting list.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      <section id="events" aria-labelledby="events-heading" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            id="events-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Tampa Cigar Events
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Join us for exclusive cigar events featuring brand representatives, special promotions, and an opportunity
            to discover new favorites. These Friday events bring together enthusiasts to learn about premium cigars
            while enjoying great company and special offers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event-ashton-HEGQRxEP3V98HjquTu5h6U32xS9FOE.webp"
                alt="Ashton Cigar Event"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event-la-aroma-de-cuba-v7cynJT7MEJztrPhYXohiyFhDY2xn8.webp"
                alt="La Aroma de Cuba Event"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our cigar events typically take place on Fridays and feature representatives from prestigious cigar brands
              who share their expertise and passion for their products. Attendees enjoy various prizes, exclusive
              discounts on bulk purchases, and the chance to sample new releases. It's a perfect opportunity to expand
              your cigar knowledge while connecting with fellow enthusiasts in our welcoming atmosphere.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-sm border-2 border-black outline outline-1 outline-[#ffff66]">
            <div className="relative h-96 mb-6 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/friday-night-crowd-5IjiP69Nt7WOE7wUeryTzdzAtSLroE.webp"
                alt="Friday Night Crowd at Edward's"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-3xl text-center text-[#fafafa] mb-4">Friday Night Tradition</h3>
            <p className="text-center text-[#fafafa] text-lg leading-relaxed max-w-2xl mx-auto">
              Every Friday, Edward's stays open until 11pm, creating the perfect evening destination for pipe tobacco
              and cigar smokers. Enjoy our friendly atmosphere while savoring complimentary grilled sausages,
              bratwursts, and/or pizza. It's become a beloved weekly tradition where the community gathers to relax,
              share stories, and enjoy quality tobacco in great company.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      <section aria-labelledby="back-room-heading" className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2
            id="back-room-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Our Back Room
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Another comfortable area to hang out and enjoy your tobacco. The back room typically offers a more quiet and
            private experience, though on Friday evenings, it could be the life of the party.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/back-room-UQcUrfzjdD8I4LhcZQJVHDVYOB8hdT.webp"
                alt="The Back Room at Edward's Pipe & Tobacco"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/back-room-gordon-nimish-VjPKow3RPveBA7KyX6XBLQwsRc12vW.webp"
                alt="Gordon and Nimish from Rocky Patel"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The back room features comfortable leather seating, wood-paneled walls adorned with cigar memorabilia, and
              a relaxed atmosphere perfect for contemplation. Perfect for those looking for a peaceful retreat during
              the week or joining the Friday night festivities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're honored to host visits from industry leaders like Nimish from Rocky Patel, pictured here with Gordon
              discussing cigars and sharing stories. These special moments remind us that Edward's is also a destination
              where the cigar community comes together.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      <section aria-labelledby="patio-heading" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            id="patio-heading"
            className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6 text-balance"
          >
            Our Back Patio
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Step outside to our inviting back patio, where you can enjoy your tobacco in a comfortable outdoor setting.
            Watch the game, fire up the grill, and relax in the fresh air while surrounded by fellow enthusiasts.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patio-football-tv-lbAMh1IOiCKpdd2s50ben5SHffr33M.webp"
                alt="Patio with TV for watching sports"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patio-grill-sausages-YF9b2ypo6oVlEyjwI0AgMj8bNq1rEI.webp"
                alt="Patio grill with sausages"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our back patio offers the perfect outdoor retreat for enjoying your pipe or cigar. Equipped with
              comfortable seating, a wall-mounted TV for watching football and other sports, and our grill for Friday
              night cookouts, it's an extension of the Edward's experience.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* Heritage Section */}
      <section aria-labelledby="heritage-heading" className="relative py-20 px-4">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bar-desk-behind-supplies-bxqN55rmL1Lwo9qWtbyJ5tK219cZ4J.webp"
            alt="Edward's Counter Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 id="heritage-heading" className="font-serif text-4xl md:text-5xl text-left text-white mb-16 text-balance">
            A Legacy of Excellence
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="relative h-80 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/letter-president-gerald-ford-AMYMotrlXHD9j94f1DD3rE4D3KG8BR.webp"
                alt="Letter from President Gerald Ford"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certificate-jc-newman-6Gl8Xkou6iTR3RCqLYUJsCBzTQIfUM.webp"
                alt="J.C. Newman Cigar Connoisseurs Club Partner Certificate"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recognition-fuente-opusx-pllqjZdLlR5q8VAoDH20nxBilFvipJ.webp"
                alt="Fuente Fuente OpusX Authorized Purveyor Recognition"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-12">
            <div className="max-w-3xl space-y-4">
              <p className="text-lg text-white/95 leading-relaxed">
                Our legacy is documented through prestigious recognitions and historical treasures. From a personal
                thank-you letter from President Gerald Ford in 1976 for a custom-crafted pipe, to our appointment as an
                Authorized Purveyor of the legendary Arturo Fuente OpusX Cigars, and our partnership with J.C. Newman
                Cigar Connoisseurs Club, these honors reflect our unwavering commitment to excellence.
              </p>
              <p className="text-lg text-white/95 leading-relaxed">
                The Tampa City Council's commendation celebrates our role as a community gathering place since 1960. We
                also proudly display the Zino Davidoff Pioneer Award, recognizing Frank Smith's 20 years of partnership
                with Davidoff, and a treasured autographed magazine article featuring industry leaders discussing the
                importance of tobacco rights and advocacy.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commendation-tampa-city-council-I7A70nGhAcjckJOCKfyuKUVwUjh9x4.webp"
                alt="Tampa City Council Commendation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/autograph-marvin-shanks-DzescPpzwPI4N86EgsMFVvMu1HCXNi.webp"
                alt="Autographed Magazine Article with Marvin Shanks"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden shadow-md border-2 border-black outline outline-1 outline-[#ffff66]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/award-pioneer-davidoff-g4r8OhPxVAyAWiBFqlzn5Uqujlx7cJ.webp"
                alt="Zino Davidoff Pioneer Award"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      <section aria-labelledby="visit-heading" className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 id="visit-heading" className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
            Come Visit Us at Edward's
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We invite you to experience the warmth and tradition that has made Edward's a Tampa landmark for over 60
            years. Stop by, relax in our comfortable lounge, and discover why generations of customers have made us
            their home away from home.
          </p>
          <a
            href="#top"
            onClick={handleScrollToTop}
            className="absolute bottom-0 right-0 text-muted-foreground hover:text-[#ffff66] transition-colors text-sm underline"
          >
            Back to Top
          </a>
        </div>
      </section>

      <div className="border-t border-[#4a3728]" />

      {/* Footer */}
      <footer id="contact" aria-label="Contact information and site footer" className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl mb-4">Visit Us</h3>
              <address className="space-y-3 text-gray-300 not-italic">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    3235 Henderson Blvd
                    <br />
                    Tampa, FL 33609
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:8138720723" className="hover:text-[#ffff66] transition-colors">
                    (813) 872-0723
                  </a>
                </p>
              </address>
              <div className="flex items-center gap-4 pt-2" aria-label="Social media links">
                <a
                  href="https://www.facebook.com/profile.php?id=61578307895712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffff66] transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/edwardstampa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffff66] transition-colors"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl mb-4">Hours</h3>
              <div className="space-y-2 text-gray-300" aria-label="Store hours">
                <p>
                  <time dateTime="Mo-Th 08:00-19:00">Monday - Thursday: 8am - 7pm</time>
                </p>
                <p>
                  <time dateTime="Fr 08:00-23:00">Friday: 8am - 11pm</time>
                </p>
                <p>
                  <time dateTime="Sa 08:00-18:00">Saturday: 8am - 6pm</time>
                </p>
                <p>
                  <time dateTime="Su 11:00-17:00">Sunday: 11am - 5pm</time>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl mb-4">About</h3>
              <p className="text-gray-300 leading-relaxed">
                Edward's Pipe & Tobacco has been serving Tampa's tobacco enthusiasts since 1960. We're proud to be a
                family-owned business dedicated to quality, tradition, and exceptional customer service.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Edward's Pipe & Tobacco. A Tradition Since 1960.{" "}
              <span className="inline-block">
                Website by{" "}
                <a
                  href="https://vidatigris.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffff66] transition-colors underline"
                >
                  Vida Tigris
                </a>
                .
              </span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
