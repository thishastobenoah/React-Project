import { LayerBuilder } from './LayerBuilder';
import LayerAdd from './LayerAdd';
import { Layer } from './Layer';

interface CakeBuilderProps {
  layers: Layer[];
  deleteLayer: (index: number) => void;
}

function CakeBuilder({ layers, deleteLayer }: CakeBuilderProps) {
  return (
    <>

      {layers.map((layer, index) => (
        <LayerBuilder key={index} layer={layer} deleteLayer={() => deleteLayer(index)} />
      ))}
      <LayerAdd />

    </>
  );
}

export default CakeBuilder;