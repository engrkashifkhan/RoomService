import React from 'react'

const review = [
  {
    index: 1,
    name: "Alice Johnson",
    title: "Software Engineer",
    review: "Alice is a highly skilled software engineer with exceptional problem-solving abilities. She has consistently delivered high-quality code and is a great team player.",
    image: "https://images.pexels.com/photos/17311569/pexels-photo-17311569/free-photo-of-man-in-suit-posing-on-white-studio-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    index: 2,
    name: "Bob Smith",
    title: "Product Manager",
    review: "Bob is an organized and visionary product manager. His ability to understand user needs and translate them into clear requirements is outstanding.",
    image: "https://images.pexels.com/photos/8937551/pexels-photo-8937551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    index: 3,
    name: "Clara Davis",
    title: "UI/UX Designer",
    review: "Clara has a keen eye for design and creates user interfaces that are both beautiful and functional. Her creativity and attention to detail are unmatched.",
    image: "https://images.pexels.com/photos/8353832/pexels-photo-8353832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    index: 4,
    name: "David Lee",
    title: "DevOps Engineer",
    review: "David is an expert in optimizing infrastructure and ensuring seamless deployments. His expertise in automation and cloud computing is top-notch.",
    image: "https://images.pexels.com/photos/23496901/pexels-photo-23496901/free-photo-of-a-man-with-a-beard-and-a-suit-standing-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    index: 5,
    name: "Emily Martinez",
    title: "Data Scientist",
    review: "Emily excels at analyzing complex datasets and presenting actionable insights. Her knowledge of machine learning and statistics is impressive.",
    image: "https://images.pexels.com/photos/7845223/pexels-photo-7845223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    index: 6,
    name: "Frank Wilson",
    title: "Marketing Specialist",
    review: "Frank is a creative and strategic marketing professional. He has a strong ability to craft compelling campaigns that resonate with audiences.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];




function Reviews() {
  return (
    <section className='max-w-7xl mx-auto border-b-2 ' id='reviews'>
      <div className='my-20'>
        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 '>Reviews
        </h2>
        <p className='max-w-2xl text-lg mb-12 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi, deleniti itaque soluta nisi laboriosam non maxime quos, illum nam laborum, harum aperiam fugiat voluptatem saepe accusantium assumenda officiis quo.</p>
        <div className='flex flex-wrap justify-center'>{review.map((review, index)=>(
          <div key={index} className='mt-10 flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs'>
            <p className='mb-4'>{review.review}</p>
            <div className='flex items-center mt-4'>
              <img src={review.image} alt={review.name} className='w-12 h-12 rounded-full mr-4' />
              <div>
                <p className='text-sm font-bold'>{review.name}</p>
                <p className='text-sm text-neutral-500'>{review.title}</p>
              </div>
            </div>
          </div>
       ))}  
       </div>
      </div>
    </section>
  )
}

export default Reviews