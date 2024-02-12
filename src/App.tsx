// import React from 'react';
import { useState } from 'react';
import './App.css'
import CakeBuilder from './CakeBuilder'
import Layer from './Layer'
import { Cake } from './Cake';
// import LayerForm from './LayerForm'
// import LayerAdd from './LayerAdd'



export function App() {
 const [layers, setLayers] = useState<Layer[]>([])

 const addLayer = (newLayer: Layer) => {
  let cakeLayers = [...layers, newLayer]
  setLayers(cakeLayers.sort((a, b) => a.width - b.width));
};
  const deleteLayer = (layerIndex: number) => {
    setLayers(currentLayers => currentLayers.filter((_, index) => index !== layerIndex));
  }; 
  

  return (
    <div className="mainComponents">
      <CakeBuilder layers={layers} addLayer={addLayer} deleteLayer={deleteLayer}/>
      <Cake layersArr={layers}/>
    </div>
  )

}

export default App
