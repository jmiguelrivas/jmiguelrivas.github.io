import 'nano-grid/dist/nanogrid_styles.css'
import './App.css'
import Edit from './user/Edit'
import Hierarchy from './hierarchy/Show'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Hierarchy />}
          />
          <Route
            path="/user/edit"
            element={<Edit />}
          />
        </Routes>
      </Router>
    </>
  )
}
