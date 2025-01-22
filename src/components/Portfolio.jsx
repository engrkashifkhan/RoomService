import React from 'react'

const Portfolios = [
  {
    image: "https://images.pexels.com/photos/18038085/pexels-photo-18038085/free-photo-of-a-modern-living-room-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageId: "img001",
    name: "Deluxe Suite",
    description: "A spacious suite with a king-size bed, modern decor, and a stunning city view.",
  },
  {
    image: "https://images.pexels.com/photos/6333079/pexels-photo-6333079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageId: "img002",
    name: "Executive Room",
    description: "Perfect for business travelers, featuring a comfortable workspace and premium amenities.",
  },
  {
    image: "https://images.pexels.com/photos/11438372/pexels-photo-11438372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageId: "img003",
    name: "Family Room",
    description: "Ideal for families, offering two queen-size beds, a cozy seating area, and child-friendly features.",
  },
  {
    image: "https://images.pexels.com/photos/12119390/pexels-photo-12119390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageId: "img004",
    name: "Honeymoon Suite",
    description: "A romantic retreat with a private balcony, jacuzzi, and elegant interiors.",
  },
  {
    image: "https://images.pexels.com/photos/10827302/pexels-photo-10827302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageId: "img005",
    name: "Single Room",
    description: "A compact and comfortable room designed for solo travelers, equipped with all essentials.",
  },
  {
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageId: "img006",
    name: "Presidential Suite",
    description: "A luxurious suite featuring a private lounge, dining area, and exclusive butler service.",
  },
];



function Portfolio() {
  return (
    <section className='max-w-7xl mx-auto border-b-2 ' id='portfolio'>
        <div className='mb-20'>
            <h1 className='mt-20 mb-12 text-center tracking-tight text-xl lg:text-3xl uppercase'>portfolio</h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {Portfolios.map((project)=>(
                <div key={project.imageId} className='group relative overflow-hidden rounded-3xl mx-4'>
                  <img src={project.image} alt={project.name} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100'>
                  <h1 className='text-xl font-medium mb-2'>{project.name}</h1>
                  <p className='mb-12 p-4'>{project.description}</p>
                </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Portfolio