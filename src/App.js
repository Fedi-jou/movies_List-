
import React, { useState, useEffect } from 'react';
import "./App.css";


function App() {

  const [movies, setMovies] = useState([{
    Title: "The Godfather",
    Year: "1972",
    Description: "....",
    Rate: "9",
    Poster: "https://img.auctiva.com/imgdata/1/9/8/3/0/8/8/webimg/918848030_o.jpg"
  },
  {
    Title: "Superman ",
    Year: "1994",
    Description: "....",
    Rate: "7",
    Poster: "https://www.enjpg.com/img/2020/superman-2.png"
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Description: "....",
    Rate: "9",
    Poster: "https://sutanrajaamurang.co/wp-content/uploads/2020/04/dark-knight-posters-the-poster-batman-joker-amazing-free-download.jpg"
  },
  {
    Title: "Seven",
    Year: "1995",
    Description: "...",
    Rate: "8",
    Poster: "https://i.pinimg.com/originals/8f/41/ec/8f41eca12bfaeaf9662431abe3bbc0a6.jpg"
  },
  {
    Title: "Angry men",
    Year: "1957",
    Description: "...",
    Rate: "8",
    Poster: "https://flxt.tmsimg.com/assets/p2084_p_v10_ad.jpg"
  }

  ]);


  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = movies.filter(movie =>
      movie.Title.toLowerCase().includes(searchTerm) ||
      movie.Rate.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, movies]);


  return (
    <div className="">
      <header style={{textAlign:"center" , color:"white"}}>
        <h1>Movies List</h1>
      </header>
      <main>
        <section className="searchbox-wrap">
          <input
            type="text"
            className="searchbox"
            placeholder="Search for a movie.."
            value={searchTerm}
            onChange={handleChange}
          />
        </section>

        <section className="searchbox-wrap" style={{ textAlign: "center" }}>
          <br /><br />
          <div style={{ color: "white", display: "flex", margin: "0px 100px" }} >
            <h5  >Movie Title </h5> <input className="searchbox1" type="text" name="title" onChange={(e) => { setData({ ...data, Title: e.target.value }) }} />
            <h5>Movie Rate</h5> <input className="searchbox1" type="text" name="rate" onChange={(e) => { setData({ ...data, Rate: e.target.value }) }} />
            <h5>Movie Poster</h5> <input className="searchbox1" type="text" name="poster" onChange={(e) => { setData({ ...data, Poster: e.target.value }) }} />
            <h5>Movie Description</h5> <input className="searchbox1" type="text" name="poster" onChange={(e) => { setData({ ...data, Description: e.target.value }) }} /><br />
          </div> <br />
          <div>
            <button className="btn" onClick={(e) => {
              e.preventDefault()
              setMovies([...searchResults, data]);
            }
            }> Add movie </button> </div>

        </section>
        <section >
          {
            <div className="results">
              {searchResults.map(filteredMovie => (

                <div className="result" >
                  <h3>{filteredMovie.Title}</h3>
                  <h3> {filteredMovie.Rate} </h3>
                  <img src={filteredMovie.Poster} alt="" ></img>
                </div>
              ))}
            </div>}
        </section>
      </main>
    </div>
  );
}
export default App;



