import { LayerBuilder } from './LayerBuilder';
import LayerAdd from './LayerAdd';
import { Layer } from './Layer';
import App from "./App"

interface CakeBuilderProps {
  layers: Layer[];
  addLayer: (newLayer: Layer) => void;
  deleteLayer: (index: number) => void;
}

function CakeBuilder({ layers, addLayer, deleteLayer}: CakeBuilderProps) {
  return (
    <>
      {layers.map((layer, index) => (
        <LayerBuilder key={index} layer={layer} deleteLayer={() => deleteLayer(index)} />
      ))}
      <LayerAdd addLayer={addLayer}/>
    </>
  );
}

export default CakeBuilder;