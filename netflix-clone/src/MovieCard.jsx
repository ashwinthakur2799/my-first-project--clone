import { useState } from 'react'

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && movie.video ? (
        <video
          className="movie-video"
          src={movie.video}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          className="movie-card-image"
          src={movie.image}
          alt={movie.title}
        />
      )}

      <div className="movie-popup">
        <h3>{movie.title}</h3>

        <div className="movie-info">
          <span>▶</span>
          <span>＋</span>
          <span>👍</span>
        </div>

        <p>
          <span className="match">98% Match</span>
          {' • '}
          {movie.year}
          {' • '}
          {movie.genre}
        </p>

        <p className="movie-description">
          Watch {movie.title} and enjoy this amazing {movie.genre} story.
        </p>
      </div>
    </div>
  )
}

export default MovieCard

