       {/* <Route path="/top_rated">
          <MovieList arr={topRated} list={genreList} filter={filter} setFilter={setFilter} age={page} setPage={setPage}/>
        </Route> */}

        

  // useEffect(() => {
  //   getTopRatedMovies().then(res=> {
  //     setTopRated(res.data.results)
  //     // setAll(prev => [...prev, ...res.data.results])
  //   })
  // }, [])
  
    // getTopRatedMovies(page).then(res=> {
    //   setTopRated(res.data.results)
    // })

    // const [topRated, setTopRated] = useState([])

    // export const getTopRatedMovies = (page) => {
    //     return axios.get(`${base}movie/top_rated${key}&page=${page}`)
    // }

    /* <Link to="/top_rated" style={{padding: "5px", textDecoration: 'none', color: 'white',}}>Top Rated on TMdb</Link> */

    // import {Button, Card} from 'react-bootstrap'

      //     <Card style={{ width: '18rem' }}>
            //     <Card.Img variant="top" style={{width: '15em'}} src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}/>
            //     <Card.Body>
            //     <Card.Title>{movie.title}</Card.Title>
            //       {/* <Card.Text>
            //         Some quick example text to build on the card title and make up the bulk of
            //         the card's content.
            //       </Card.Text> */}
            //       <Button>More</Button>
            //     </Card.Body>
            //   </Card>

// import Flippy, { FrontSide, BackSide } from 'react-flippy';
{/* <Flippy key={movie.id}
flipOnHover={false} 
flipOnClick={true} 
flipDirection="horizontal" //or vertical
style={{ width: '15em' }} /// these are optional style, it is not necessary
>
<FrontSide
  style={{
    backgroundColor: '#41669d',
  }}
>
<img  src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="Movie_Poster" style={{padding: '3px', borderRadius: "10px", width: '13em', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
<div style={{padding: '2px 16px'}}>
    <p style={{color: 'skyblue', textAlign: 'center'}}>{movie.title}</p>
</div>
</FrontSide>
<BackSide
  style={{ backgroundColor: '#175852'}}>
<p>
Title: {movie.title}
<br />
Original Title: {movie.original_title}
<br />
Release date: {movie.release_date}
<br/>
Owerview: {movie.overview}
</p>
</BackSide>
</Flippy> */}
    
// ya zanr

// export const getGenreList = () => {
//   return axios.get(`${base}genre/movie/list${key}`)
// }  

// const [genreList, setGenreList] = useState([])

// getGenreList().then(res =>{
//   setGenreList(res.data.genres)
// }) 

// <Select list={list} arr={arr} setPopular={setPopular}/>  

    {/* <select>  
            <option>Odaberite žanr:</option>
            {list.map(el => <option key={el.id} value={el.name}>{el.name}</option>)}
        </select> */}


// footer
// import React from 'react'

// const Footer = () => {
//     return (
//         <div style={{height: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(3, 37, 65)',  position: 'static', bottom: '0', width: '100%'}}>
//              <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" style={{width: '12%', marginRight: '15px'}}></img>
//         </div>
//     )
// }
// export default Footer