function Hero() {
  const handleWatch = () => {
    alert('Enjoy the movie!')
  }

  const handleMoreInfo = () => {
    alert('More information about the movie')
  }


  return (
    
    <section className="hero">

      <iframe
        className="hero-video"
        src="https://www.youtube.com/embed/GV3HUDMQ-F8?autoplay=1&mute=1&loop=1&playlist=GV3HUDMQ-F8&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
        title="Movie Trailer"
        allow="autoplay; encrypted-media"
      ></iframe>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-label">
          NETFLIX ORIGINAL
        </p>

        <h1>
          Stranger Things
        </h1>

        <p className="hero-description">
          When a young boy disappears, his friends, family and
          a police chief begin their own investigations and uncover
          a series of extraordinary mysteries.
        </p>

        <div className="hero-buttons">

          <button
            className="watch-btn"
            onClick={handleWatch}
          >
            ▶ Watch Now
          </button>

          <button
            className="info-btn"
            onClick={handleMoreInfo}
          >
            ⓘ More Info
          </button>

        </div>

      </div>
    </section>
   


  )
}

export default Hero
