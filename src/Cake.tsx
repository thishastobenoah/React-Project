import CakeLayer from "./CakeLayer";
import './Cake.css';

interface Props {
    layersArr: Layer[]
}

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