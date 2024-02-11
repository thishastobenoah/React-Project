interface Props {
    handleCancelClick: () => void;
  }

const LayerForm = (props: Props) => {
    
    return(
        <form className="layerForm">
            <label>Height
            <input type="range" id="slider" min=".5" max="10"/></label>
            <label>Width
            <input type='range' id="slider" min="1" max='10'/></label>
            <select>
                <option value="#008B8B">Cyan</option>
                <option value="#F08080">Coral</option>
                <option value="#FFFFF0">Ivory</option>
                <option value="#D3D3D3">Gray</option>
                </select>  
            <button type='submit' >Submit</button>       
            <button onClick={props.handleCancelClick}>Cancel</button>
        </form>
    );
};

export default LayerForm;


