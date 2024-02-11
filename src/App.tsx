// import React from 'react';
import { useState } from 'react';
import Cake from './Cake'
import './App.css'
import CakeBuilder from './CakeBuilder'
import Layer from './Layer'



function App() {
  const [layers, setLayers] = useState<Layer[]>([]) 


  const deleteLayer = (layerIndex: number) => {
    setLayers(currentLayers => currentLayers.filter((_, index) => index !== layerIndex));
  }; 
  
  return (
    <>
      <Cake layersArr={layers}/>
      <CakeBuilder layers={layers} deleteLayer={deleteLayer}/>
    </>
  )
}

export default App
