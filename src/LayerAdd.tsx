import { useState } from 'react';
import LayerForm from "./LayerForm";



function addLayer() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  

  return (
    <div>
      <h1>Add Layer</h1>
      <button onClick={handleButtonClick}>Show Form</button>
      {showForm && <LayerForm handleCancelClick={handleButtonClick}/>} 
    </div>
  );
}


export default addLayer;