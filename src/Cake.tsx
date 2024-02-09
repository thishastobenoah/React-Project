import CakeLayer from "./CakeLayer";
import './Cake.css';
import Layer from  "./Layer"

interface Props {
    layersArr: Layer[]
  };

function Cake(props: Props) {
    return (
        <>
            {props.layersArr.map((layer) => {
                <CakeLayer layer={layer}/>
            })}
        </>

    );
}

export default Cake