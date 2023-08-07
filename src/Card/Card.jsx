import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Card = () => {
    const [shows, setShows] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
    .then(res => res.json())
    .then(data => setShows(data))
    console.log(shows)
  }, [])
    return (
        <div className='w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {
      shows.map(show => (<div
      key={show.show.id}
        className="mb-2 mt-2 flex justify-center items-center gap-x-16 text-white"
      >
        <div
          className="w-[350px] h-[400px] md:w-[400px] md:h-[480px] bg-transparent cursor-pointer group perspective"
        >
          <div
            className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
          >
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img src={show.show?.image?.original} className="w-full h-full" />
            </div>
            <div
              className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
            >
              <div
                className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
              >
                <h1 className="text-3xl font-semibold">{show.show.name}</h1>
                <p className="my-2">9.0 Rating</p>
                <p><span className='font-semibold'>Genre: </span>{show.show?.genres.map((genre, index) =><span key={index}>{genre} </span>)}</p>
                <p><span className='font-semibold'>Runtime:</span> {show.show?.runtime} Minute</p>
                <p><span className='font-semibold'>Language:</span> {show.show?.language}</p>
                <p><span className='font-semibold'>Network:</span> {show.show?.network?.name}</p>
                <a className='text-blue-600' href={show.show?.url}>Watch Here</a>
                <button
                  className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                >
                 <Link  to={`show/${show.show.externals?.imdb}`}> View Details </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>))
    }
      
    </div>
    );
};

export default Card;