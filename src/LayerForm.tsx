import React, { useState } from 'react';
import { Layer } from './Layer'; 

interface LayerFormProps {
  handleCancelClick: () => void;
  addLayer: (newLayer: Layer) => void; 
}

const LayerForm: React.FC<LayerFormProps> = ({ handleCancelClick, addLayer }) => {
  const [heightValue, setHeightValue] = useState<number>(1);
  const [widthValue, setWidthValue] = useState<number>(1);
  const [colorValue, setColorValue] = useState<string>('#FFF8DC');

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeightValue(Number(event.target.value));
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidthValue(Number(event.target.value));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColorValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newLayer: Layer = {
      height: heightValue,
      width: widthValue,
      color: colorValue,
    };
    addLayer(newLayer);
    handleCancelClick(); 
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
        <option value="#FFF8DC">Corn Silk</option>
        <option value="#008B8B">Cyan</option>
        <option value="#F08080">Coral</option>
        <option value="#D3D3D3">Gray</option>
      </select>
      <button type='submit'>Submit</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  );
};

export default LayerForm;
