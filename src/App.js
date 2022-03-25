import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { getCoutryCodes, getPopularMovies, getNowPlayingMovies } from './services/services.js';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import MoviesList from './components/MoviesList';
import ActualList from './components/ActualList';
import WatchList from './components/WatchList';
import Movie from './components/Movie';
import Missing from './components/Missing';


const App = () => {

  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    {
      username: 'marko',
      password: 'marko22',
      email: 'marko@gmail.com',
      id: 1
    }
  ]);

  const [filter, setFilter] = useState('');
  const [code, setCode] = useState('us')
  const [countryCodes, setCountryCodes] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);  
  const [actualMovies, setActualMovies] = useState([]);
  const [moPage, setMoPage] = useState(1);
  const [totalMoPages, setTotalMoPages] = useState(1); 
  const [acPage, setAcPage] = useState(1);
  const [totalAcPages, setTotalAcPages] = useState(1);
  const [pending, setPending] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {

    getCoutryCodes().then(res=>{
      setCountryCodes(res.data);
    });

    getPopularMovies().then(res=> {
      setPopularMovies(res.data.results);
    });
    
    // getNowPlayingMovies(code).then(res => {
    //   setActualMovies(res.data.results)
    // });
  }, [])

  useEffect(() => {
    getPopularMovies(moPage).then(res => {
      setPopularMovies(res.data.results)
      setTotalMoPages(res.data.total_pages)
    })

    getNowPlayingMovies(acPage, code).then(res => {
      setActualMovies(res.data.results)
      setTotalAcPages(res.data.total_pages)
    })
  
  },[moPage, acPage, code])

  useEffect(() =>{
    setAcPage(1)
  }, [code])

  return (
    <Router>
      <Routes>
        {
          user ?  
          <Route path="/" element={<MoviesList arr={popularMovies} filter={filter} setFilter={setFilter} page={moPage} setPage={setMoPage} totalPages={totalMoPages} setUser={setUser} setMovie={setMovie}/> }/>
          :
          <Route path="/" element={<SignUp popularMovies={popularMovies} users={users} setUsers={setUsers} setUser={setUser} />} />
        }
        <Route path="/login" 
          element={
            user ? (
              <Navigate replace to="/"/>
            ) : (
              <LogIn popularMovies={popularMovies} users={users} setUser={setUser}/>
            )
        }/>
        <Route path="/actual" 
          element={
            user ? (
              <ActualList arr={actualMovies} setCode={setCode} codes={countryCodes} filter={filter} setFilter={setFilter} page={acPage} setPage={setAcPage} totalPages={totalAcPages} setUser={setUser} setMovie={setMovie}/>
            ) : (
              <Navigate replace to="/"/>
            )
          }/> 
        <Route path="/watch" 
          element={
            user ? (
              <WatchList arr={pending} setUser={setUser} setMovie={setMovie}/>
            ) : (
              <Navigate replace to="/"/>
            )  
          }/>     
        <Route path="/:id" 
          element={
            user ? (
              <Movie movie={movie} setUser={setUser} pending={pending} setPending={setPending} setMovie={setMovie}/> 
            ) : (
              <Navigate replace to="/"/>
            )  
          }/>          
        <Route path="*" element={<Missing />}/>
      </Routes>
    </Router>
  );
}

export default App;
 