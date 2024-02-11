import { LayerBuilder } from './LayerBuilder'
import LayerAdd from './LayerAdd';
import LayerForm from './LayerForm';




function CakeBuilder() {


 return (
   <>
   <LayerBuilder layer={{height:.5, width:1, color: "#5F9EA0"}}/>
   <LayerAdd/>
  
   </>
 )
}


export default CakeBuilder
