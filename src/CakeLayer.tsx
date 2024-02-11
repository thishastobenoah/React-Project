import './CakeLayer.css'
import Layer from './Layer'

interface Props {
   layer: Layer;
};

function CakeLayer(props: Props) {
    return (
       <div>
           <div className="Layer" style={{height: props.layer.height, width: props.layer.width, backgroundColor: props.layer.color}}></div>
       </div>
   );
};

export default CakeLayer