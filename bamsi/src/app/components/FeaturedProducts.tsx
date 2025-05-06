const products = [
    {
      id: 1,
      image: '/men1.jpg',
      name: 'Bold Essence',
      ml: '100ml',
      price: 'Rs. 2999',
    },
    {
      id: 2,
      image: '/women1.jpg',
      name: 'Floral Touch',
      ml: '80ml',
      price: 'Rs. 2799',
    },
    {
      id: 3,
      image: '/featured1.jpg',
      name: 'Night Passion',
      ml: '120ml',
      price: 'Rs. 3499',
    },
    {
      id: 4,
      image: '/men2.jpg',
      name: 'Ocean Mist',
      ml: '90ml',
      price: 'Rs. 2599',
    },
  ]
  
  export default function FeaturedProducts() {
    return (
      <section className="text-center my-12">
        <h3 className="text-2xl mb-4">MEN PERFUMES / WOMEN PERFUME / FEATURED PRODUCTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <div key={product.id} className="bg-yellow-100 text-black p-4 rounded-xl shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <div className="text-sm mt-2 font-semibold text-red-600">20% OFF</div>
              <div className="font-bold text-lg">{product.name}</div>
              <div className="text-sm">{product.ml}</div>
              <div className="font-bold">{product.price}</div>
              <button className="mt-2 px-4 py-2 bg-yellow-500 text-black font-bold rounded-md">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  