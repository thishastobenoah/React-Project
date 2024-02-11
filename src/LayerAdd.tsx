import { useState } from 'react';
import LayerForm from './LayerForm';



function addLayer() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>Add Layer</h1>
      <button onClick={toggleForm}>Show Form</button>
      {showForm && 
        <LayerForm handleCancelClick={toggleForm}/>}
    </div>
  );
}


export default addLayer;
