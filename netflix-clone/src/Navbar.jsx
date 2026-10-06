function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">NETFLIX</div>

      <ul className="nav-links">
        <li><a href="https://www.netflix.com/in/">Home</a></li>
        <li><a href="https://www.netflix.com/in/browse/genre/83">TV Shows</a></li>
        <li><a href="https://www.netflix.com/tudum/next-on-netflix">Movies</a></li>
        <li><a href="https://www.netflix.com/tudum/top10/tv">New & Popular</a></li>
        <li><a href="#">My List</a></li>
      </ul>

      <div className="nav-right">
         <a href="https://www.netflix.com/in/browse/genre/34399" className="sign-in">⌕</a>


        <select className="language" defaultValue="EN">
          <option value="EN">EN</option>
          <option value="HI">HI</option>
        </select>

        <a href="https://www.netflix.com/in/login?serverState=BgjUv%2BvcAxLgAebSQiWC9owsAZW0BxoywQQGgWdujZJGUPzFAriApYX2TC7Ni4UyV37h83eL4lz5AqRP7ifgYf16SmBrY62kvN8cUzvO5x63Tkhq%2FsVmkSFl4LwXhr4nNhx%2Fi8FMhqvRJFsGTIZXvGjLUvK9M1E9nkHRhmiVgGWO%2BqUkIDjfrprzJT9MS2nE27WI1FLrU8Igk1AiffvZQO4UGHRmVu8X%2FVMPD7Uj2NktWN4ThdQMApyFEY1GsxDkWcU4QN6hH5idbHmyqXxco84RZEMF92855g0zlRhX54lXrUQ7hJTAIdNsGAYiDgoMtS10b0KfZFd%2FzYuo" className="sign-in">Sign In</a>

      </div>
    </nav>
  )
}

export default Navbar
