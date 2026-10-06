import axios from 'axios'
import { useEffect, useState } from 'react'

function Hero() {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          'https://www.omdbapi.com/?i=tt3896198&apikey=ce02600d'
        )

        if (response.data.Response === 'True') {
          setMovie(response.data)
        }
      } catch (error) {
        console.log('API Error:', error)
      } finally {
        setLoading(false)
      }
    }

    getMovie()
  }, [])

  return (
    <section className="hero">
  
<iframe
  className="hero-video"
  src="https://www.youtube.com/embed/GV3HUDMQ-F8?autoplay=1&mute=1&loop=1&playlist=GV3HUDMQ-F8&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
  title="Netflix Trailer"
  allow="autoplay; encrypted-media"
></iframe>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-label">NETFLIX ORIGINAL</p>

        <h1>
          {loading ? 'Loading...' : movie?.Title || 'My Movie'}
        </h1>

        <p className="hero-description">
          {loading
            ? 'Loading movie information...'
            : movie?.Plot || 'Watch the latest movies and shows.'}
        </p>

        <div className="hero-buttons">
          <button
            className="watch-btn"
            onClick={() => alert('Enjoy the movie!')}
          >
            ▶ Watch Now
          </button>

          <button className="info-btn">
            ⓘ More Info
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
