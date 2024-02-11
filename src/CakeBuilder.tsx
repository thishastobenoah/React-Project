import { LayerBuilder } from './LayerBuilder'
import addLayer from './LayerAdd';



function CakeBuilder({layers, deleteLayer}: CakeBuilderProps) {

  return (
    <>
    <LayerBuilder layer={{height:.5, width:1, color: "#5F9EA0"}}/>
    <addLayer/>
    </>
  )
}

export default CakeBuilder