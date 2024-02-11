import { useState } from 'react';
import LayerForm from "./LayerForm";

function addLayer() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  

  return (
    <div>
      <h1>Add Layer</h1>
      <button onClick={handleButtonClick}>Show Form</button>
      {showForm ?
        <LayerForm /> : 
        <></>
      }
    </div>
  );
}


export default addLayer;