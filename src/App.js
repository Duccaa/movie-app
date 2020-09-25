import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, Redirect } from 'react-router-dom';
import './App.css';
import { getPopularMovies, getNowPlayingMovies, getCoutryCodes } from '../src/services/services';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MovieList from './components/MovieList';
import WatchList from './components/WatchList';
import ActualList from './components/ActualList';

const App = ({}) => { 

  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([
    {
      username: 'marko',
      password: 'marko22',
      id: 1
  }
  ])
 

  const [filter, setFilter] = useState('')
  const [codes, setCodes] = useState([])
  const [code, setCode] = useState('us')

  const [popular, setPopular] = useState([])
  const [actual, setActual] = useState([])
  const [moPage, setMoPage] = useState(1)
  const [totalMoPages, setTotalMoPages] = useState(1)
  const [acPage, setAcPage] = useState(1)
  const [totalAcPages, setTotalAcPages] = useState(1)
  const [pending, setPending] = useState([])
 

  useEffect(() =>{
    getCoutryCodes().then(res => {
      setCodes(res.data)
    })

    getPopularMovies().then(res => {
      setPopular(res.data.results)
      setTotalMoPages(res.data.total_pages)
    })

    getNowPlayingMovies().then(res => {
      setActual(res.data.results)
    })

  }, [])

  useEffect(() => {
    getPopularMovies(moPage).then(res => {
      setPopular(res.data.results)
    })

    getNowPlayingMovies(acPage, code).then(res => {
      setActual(res.data.results)
      setTotalAcPages(res.data.total_pages)
      console.log(res.data.total_pages)
    })
  
  },[moPage, acPage, code])

  useEffect(() =>{
    setAcPage(1)
  }, [code])

  return (
    <Router basename="/movie-app"> 
      <Nav setUser={setUser} user={user} users={users} setUser={setUser}/>
      <Switch>
         <Route exact path="/">
            {!user ?
          <SignIn setUser={setUser} users={users} user={user}/>
           :
           <Redirect to="/popular" />}
        </Route>
        <Route path="/signup">
          <SignUp users={users} setUsers={setUsers}/>
        </Route>
       
    	 <Route path="/popular">
          {user ?
            <MovieList arr={popular} setPopular={setPopular} filter={filter} setFilter={setFilter} page={moPage} setPending={setPending} setPage={setMoPage} totalPages={totalMoPages} />
          :
          <Redirect to="/" />
          }
        </Route>
        <Route path="/now_playing">
          { user ?
          <ActualList arr={actual} setCode={setCode} codes={codes} filter={filter} setFilter={setFilter} setPending={setPending} page={acPage} setPage={setAcPage} totalPages={totalAcPages}  />
          :
          <Redirect to="/" />
          }
          </Route>
        <Route path="/watch_list">
        { user ?
          <WatchList arr={pending} set={setPending}/>
          :
          <Redirect to="/" />
          }
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;