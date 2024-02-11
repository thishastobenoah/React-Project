

const LayerForm = (props: {handleCancelClick: () => void}) => {

    
    return(
        <div className="layerForm">
            <input type="range" id="slider" min=".5" max="10">Height</input>
            <input type='range' id="slider" min="1" max='10'>Width</input>
            <input type="list"></input>  
            <button type='submit'>Submit</button>       
            <button onClick={props.handleCancelClick}>Cancel</button>
        </div>
    );
};

export default LayerForm;


