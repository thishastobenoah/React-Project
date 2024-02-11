import { useState } from 'react';
import LayerForm from "./LayerForm";
import Layer from './Layer'
        
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
      <h1>Add Layer</h1>
      <button onClick={toggleForm}>Show Form</button>
      {showForm && 
        <LayerForm addLayer={handleAddLayer} handleCancelClick={toggleForm}/>}
    </div>
  );
}


export default addLayer;
