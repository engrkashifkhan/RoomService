import React from 'react'


const data = [
    { 
      index: 0, 
      title: "Executive Room", 
      description: "Designed with families in mind, our Family Room provides spacious accommodations, including two double beds, a cozy seating area, and child-friendly amenities to ensure a comfortable stay for all.", 
      imageLink: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
    },
    { 
        index: 1, 
        title: "Honney Moon Suite", 
        description: "Celebrate love in our Honeymoon Suite, featuring romantic decor, a private jacuzzi, and a panoramic view of the city or countryside. This suite is designed to make your special moments unforgettable.",
        imageLink: "https://images.pexels.com/photos/7587781/pexels-photo-7587781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
        index: 2, 
        title: "Family Room", 
        description: "The Executive Room offers a perfect balance of functionality and luxury for business",
      imageLink: "https://images.pexels.com/photos/6527031/pexels-photo-6527031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      index: 3, 
      title: "Luxury Suite", 
      description: "Experience unparalleled comfort in our Luxury Suite, featuring a king-sized bed, a private balcony with breathtaking views, and a modern en-suite bathroom. Perfect for those seeking a blend of elegance and tranquility.", 
      imageLink: "https://images.pexels.com/photos/7163609/pexels-photo-7163609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      index: 4, 
      title: "Deluxe Room", 
      description: "Relax in style in our Deluxe Room, offering contemporary decor, a plush queen-sized bed, and ample natural light. Ideal for couples or solo travelers who appreciate a touch of sophistication.", 
      imageLink: "https://images.pexels.com/photos/7214156/pexels-photo-7214156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    }
  ];
  

function Services() {
  return (
    <section className='max-w-7xl mx-auto border-b-2' id="services">
        <div className='my-20'>
            <h2 className='mb-20 text-center text-lg lg:text-3xl tracking-tight uppercase'>Our Home renovation Services</h2>
             {data.map((service, index)=>(
                <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
                    <div className={`lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? "" : "lg:order-2"}`}>
                    <img src={service.imageLink} alt={service.title}
                     className='w-full h-auto object-cover rounded-lg'/>
                    </div>
                    <div className={`lg:w-1/2 flex flex-col ${index%2===0 ? "lg:pl-12" : "lg:pr-12"}`}>
                        <h3 className='text-xl lg:text-2xl font-medium mb-2'>{service.title}</h3>
                        <p className='mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9'>{service.description}</p>
                    </div>
                </div>))}
        </div>
    </section>
  )
}

export default Services