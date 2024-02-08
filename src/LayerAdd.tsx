import React, { useState } from 'react';
import LayerForm from "./LayerForm";

interface Props {

}

function addLayer() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
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