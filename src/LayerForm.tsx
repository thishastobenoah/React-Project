import addLayer from "./LayerAdd";

const LayerForm = (props: {handleCancelClick: () => void}) => {

    
    return(
        <div>
            <input type="range"></input>
            <input type='range'></input>
            <input type="color"></input>         
            <button onClick={props.handleCancelClick}>Cancel</button>
        </div>
    );
};

export default LayerForm;


