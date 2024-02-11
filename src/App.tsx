// import React from 'react';
import { useState } from 'react';
import Cake from './Cake'
import './App.css'
import CakeBuilder from './CakeBuilder'
import Layer from './Layer'
import LayerForm from './LayerAdd'
import LayerAdd from './LayerAdd'



function App() {
 const [layers, setLayers] = useState<Layer[]>([])

 // const layersArr = () => {
 //   setLayers[]
 // };

 return (
   <>
     <Cake layersArr={layers}/>
     <CakeBuilder/>
   </>
 )
}

export default App
