import MovieCard from './MovieCard.jsx'

function MovieSection() {
  const movies = [
    {
      id: 1,
      title: 'Stranger Things',
      year: '2022',
      genre: 'Sci-Fi',
      image:
        'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
      video:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    },

    {
      id: 2,
      title: 'Wednesday',
      year: '2022',
      genre: 'Comedy',
      image:
        'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
      video:
        'https://www.w3schools.com/html/mov_bbb.mp4',
    },

    {
      id: 3,
      title: 'The Witcher',
      year: '2019',
      genre: 'Fantasy',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYckxjMWqUnob4v3W-jVe0gqRFeL8qh49MYbyqgs_iSA&s=10',
      video:
        'https://media.w3.org/2010/05/sintel/trailer.mp4',
    },

    {
      id: 4,
      title: 'Money Heist',
      year: '2017',
      genre: 'Crime',
      image:
        'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
      video:
        'https://media.w3.org/2010/05/bunny/trailer.mp4',
    },

    {
      id: 5,
      title: 'Dark',
      year: '2017',
      genre: 'Mystery',
      image:
        'https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
      video:
        'https://media.w3.org/2010/05/bunny/trailer.mp4',
    },

    {
      id: 6,
      title: 'Breaking Bad',
      year: '2008',
      genre: 'Crime',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaU70LeqrcOhtLvFbajq9O2ro87I7T-hZd91evM8ElQ&s=10',
      video:
        'https://media.w3.org/2010/05/sintel/trailer.mp4',
    },

    {
      id: 7,
      title: 'Peaky Blinders',
      year: '2013',
      genre: 'Drama',
      image:
        'https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg',
      video:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    },

    {
      id: 8,
      title: 'The Boys',
      year: '2019',
      genre: 'Action',
      image:
        'https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg',
      video:
        'https://www.w3schools.com/html/mov_bbb.mp4',
    },

    {
      id: 9,
      title: 'The Last of Us',
      year: '2023',
      genre: 'Drama',
      image:
        'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      video:
        'https://media.w3.org/2010/05/sintel/trailer.mp4',
    },

    {
      id: 10,
      title: 'Squid Game',
      year: '2021',
      genre: 'Thriller',
      image:
        'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
      video:
        'https://media.w3.org/2010/05/bunny/trailer.mp4',
    },
  ]

  return (
    <section className="movie-section">
      <h2>Popular on Netflix</h2>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  )
}

export default MovieSection



