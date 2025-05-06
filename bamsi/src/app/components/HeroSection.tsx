import Image from 'next/image'
import bg from '/public/Images/bg.jpg'

export default function HeroSection() {
    return (
      <section className="text-center">
        <div>
        <Image src={bg} alt='background cover' className="object-cover z-0" />
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white max-w-[70%]">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Smell elegant, feel confident –<br />
            welcome to <br /><span className="text-yellow-400">Fragrances by Bamsi</span>
          </h2>
        </div>
        
        </div>
           <h2 className="text-3xl my-6 font-semibold">Featured Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="relative bg-cover bg-center h-48 rounded-md overflow-hidden"
              style={{ backgroundImage: `url(/perfume${id}.jpg)` }}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold">
                50ml
              </div>
            </div>
          ))}
        </div>
        <div className="my-6">
          <img src="/featured-big.jpg" alt="Featured Perfume" className="mx-auto w-1/2" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[5, 6, 7, 8].map((id) => (
            <img key={id} src={`/perfume${id}.jpg`} className="rounded-md" alt={`Perfume ${id}`} />
          ))}
        </div>
      </section>
    )
  }