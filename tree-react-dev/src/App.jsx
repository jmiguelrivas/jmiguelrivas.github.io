import 'nano-grid/dist/nanogrid_styles.css'
import './App.css'
import EditUser from './user/Edit'
import EditFamilyName from './family-name/Edit'

import Table from './graph/Table'
import Force3D from './graph/Force3D'
import RadialClusterTree from './graph/RadialClusterTree'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/graph/table"
            element={<Table />}
          />
          <Route
            path="/graph/force-3d"
            element={<Force3D />}
          />
          <Route
            path="/graph/radial-cluster-tree"
            element={<RadialClusterTree />}
          />
          <Route
            path="/user/edit"
            element={<EditUser />}
          />
          <Route
            path="/family-name/edit"
            element={<EditFamilyName />}
          />
        </Routes>
      </Router>
    </>
  )
}
