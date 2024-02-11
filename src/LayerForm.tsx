import { useState } from 'react';

interface Props {
    handleCancelClick: () => void;
  }


 const LayerForm = (props: Props) => {

    const [heightValue, setHeightValue] = useState(1);

    const handleHeightChange = (event) => {
        setHeightValue(event.target.value);
      };

      const [widthValue, setWidthValue] = useState(1);

      const handleWidthChange = (event) => {
          setWidthValue(event.target.value);
        };
   
    return(
        <form className="layerForm">
            <label>Height : {heightValue}
            <input type="range" id="slider" value={heightValue} min="1" max="10" onChange={handleHeightChange}/>
            </label>
            <label>Width : {widthValue}
            <input type='range' id="slider" value={widthValue} min="1" max='10' onChange={handleWidthChange}/></label>
            <select>
                <option value="#008B8B" style={{ backgroundColor : 'cyan' }}>Cyan</option>
                <option value="#F08080" style={{ backgroundColor : 'coral' }}>Coral</option>
                <option value="#FFFFF0" style={{ backgroundColor : 'ivory' }}>Ivory</option>
                <option value="#D3D3D3" style={{ backgroundColor : 'gray' }}>Gray</option>
                </select> 
            <button type='submit' >Submit</button>      
            <button onClick={props.handleCancelClick}>Cancel</button>
        </form>
    );
 };
 
 
 export default LayerForm;
 