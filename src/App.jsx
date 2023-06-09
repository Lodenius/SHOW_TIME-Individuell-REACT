import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import StartPage from './pages/StartPage'
import Splash from './pages/Splash'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { watchList } from './actions/showActions'
import ShowInfo from './pages/ShowInfo'
import WatchedShows from './pages/WatchedShows'
import AddShow from './pages/AddShow'
import SetScore from './pages/SetScore'

function App() {
  const dispatch = useDispatch();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setShows(data))
  }, []);

  useEffect(() => {
      dispatch(watchList(shows));
  }, [shows])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Splash />}/>
          <Route path='/start' element={<StartPage />}/>
          <Route path='/showinfo/:id' element={<ShowInfo />}/>
          <Route path='/addShow' element={<AddShow />} />
          <Route path='/setscore/:id' element={<SetScore />}/>
          <Route path='/watched' element={<WatchedShows />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
