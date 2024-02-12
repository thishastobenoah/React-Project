import { LayerBuilder } from './LayerBuilder';
import LayerAdd from './LayerAdd';
import { Layer } from './Layer';
import './CakeBuilder.css'
// import LayerForm from './LayerForm';

interface CakeBuilderProps {
  layers: Layer[];
  addLayer: (newLayer: Layer) => void;
  deleteLayer: (index: number) => void;
}

function CakeBuilder({layers, addLayer, deleteLayer}: CakeBuilderProps) {
  return (
    <div className="cakeBuilder">
        <LayerAdd addLayer={addLayer}/>
      {layers.map((layer, index) => (
        <LayerBuilder key={index} layer={layer} deleteLayer={() => deleteLayer(index)} />
      ))}
    
    </div>
  );
}

export default CakeBuilder;