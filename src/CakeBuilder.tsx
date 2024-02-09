import { LayerBuilder } from './LayerBuilder'
import addLayer from './LayerAdd';


function CakeBuilder() {

  return (
    <>
    <LayerBuilder layer={{height:.5, width:1, color: "#5F9EA0"}}/>
    <LayerAdd/>
    </>
  )
}

export default CakeBuilder