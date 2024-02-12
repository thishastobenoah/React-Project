import { useState } from 'react';
import LayerForm from "./LayerForm";
import Layer from './Layer'
import './LayerAdd.css'
        
interface layerAddProps {
  addLayer: (newLayer: Layer) => void;
}

function addLayer({addLayer}: layerAddProps) {
 const [showForm, setShowForm] = useState(false);

 const handleAddLayer=(layer: Layer) => {
    addLayer(layer)
    setShowForm(!showForm);
 };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={toggleForm}>Add Layer</button>
      {showForm && 
        <LayerForm addLayer={handleAddLayer} handleCancelClick={toggleForm}/>}
    </div>
  );
}


export default addLayer;
