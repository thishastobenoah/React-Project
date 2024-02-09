// import React from 'react';
import { useState } from 'react';
import Cake from './Cake'
import './App.css'
import CakeBuilder from './CakeBuilder'
import Layer from './Layer'



function App() {
  const [layers, setLayers] = useState<Layer[]>([]) 

  return (
    <>
      <Cake layersArr={layers}/>
      <CakeBuilder/>
    </>
  )
}

export default App
