import React, { useState } from 'react';
import { Layer } from './Layer'; // Import the Layer interface

interface LayerFormProps {
  handleCancelClick: () => void;
  addLayer: (newLayer: Layer) => void; // Add this prop to handle adding a layer
}

const LayerForm: React.FC<LayerFormProps> = ({ handleCancelClick, addLayer }) => {
  const [heightValue, setHeightValue] = useState<number>(5);
  const [widthValue, setWidthValue] = useState<number>(5);
  const [colorValue, setColorValue] = useState<string>('#FFFFFF');

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeightValue(Number(event.target.value));
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidthValue(Number(event.target.value));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColorValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newLayer: Layer = {
      height: heightValue,
      width: widthValue,
      color: colorValue,
    };
    addLayer(newLayer);
    handleCancelClick(); // You may want to call this to reset/clear the form or close it
  };

  return (
    <form className="layerForm" onSubmit={handleSubmit}>
      <label>
        Height: {heightValue}
        <input type="range" value={heightValue} min="0.5" max="10" onChange={handleHeightChange} />
      </label>
      <label>
        Width: {widthValue}
        <input type='range' value={widthValue} min="1" max='10' onChange={handleWidthChange}/>
      </label>
      <select onChange={handleColorChange} value={colorValue}>
        <option value="#008B8B">Cyan</option>
        <option value="#F08080">Coral</option>
        <option value="#FFFFF0">Ivory</option>
        <option value="#D3D3D3">Gray</option>
      </select>
      <button type='submit'>Submit</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  );
};

export default LayerForm;

// interface Props {
//     handleCancelClick: () => void;
//     addLayer: (newLayer: Layer) => void;
//   }

//  const LayerForm = (props: Props) => {
//     const [heightValue, setHeightValue] = useState(1);

//     const handleHeightChange = (event) => {
//         setHeightValue(event.target.value);
//       };

//       const [widthValue, setWidthValue] = useState(1);

//       const handleWidthChange = (event) => {
//           setWidthValue(event.target.value);
//         };

//         const values= {useState}

//         const handleSubmit = (event: { preventDefault: () => void; }) => {
//             event.preventDefault();
//             history.push({pathname: './LayerAdd', state: {heightValue, widthValue, colorValue}
//         });
//         }
   
//     return(
//         <form className="layerForm">
//             <label>Height : {heightValue}
//             <input type="range" id="slider" value={heightValue} min="1" max="10" onChange={handleHeightChange}/>
//             </label>
//             <label>Width : {widthValue}
//             <input type='range' id="slider" value={widthValue} min="1" max='10' onChange={handleWidthChange}/></label>
//             <select>
//                 <option value="#008B8B" style={{ backgroundColor : 'cyan' }}>Cyan</option>
//                 <option value="#F08080" style={{ backgroundColor : 'coral' }}>Coral</option>
//                 <option value="#FFFFF0" style={{ backgroundColor : 'ivory' }}>Ivory</option>
//                 <option value="#D3D3D3" style={{ backgroundColor : 'gray' }}>Gray</option>
//                 </select> 
//             <button type='submit' onClick={handleSubmit}>Submit</button>      
//             <button onClick={props.handleCancelClick}>Cancel</button>
//         </form>
//     );
//  };
 
 
//  export default LayerForm;
 