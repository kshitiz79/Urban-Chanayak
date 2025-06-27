// components/HeroSection.js

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="sticky top-0 bg-white">
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Hero Image */}
          <div className="mb-12">
            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src="https://cdn.prod.website-files.com/67b733e6a8c26a5738064832/67cf7cfd9944240f20700c86_ALLIES_FILMS-14.webp"
                alt="Allies team sitting in a restaurant"
                width={1800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Logo & Hero Text */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <Image
                src="https://cdn.prod.website-files.com/67b733e6a8c26a5738064832/67b7974561e5eb11ee3bbf3c_allies-logotype.svg"
                alt="Allies logo"
                width={200}
                height={50}
                className="mx-auto"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight indent-4">
              is a creative studio founded on one simple belief – that the most extraordinary brands are born out of fearless creativity.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
