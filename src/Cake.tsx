import CakeLayer from "./CakeLayer";
import './Cake.css';
import Layer from  "./Layer"
import { useEffect, useState } from "react";
// import App from './App'


interface Props {
   layersArr: Layer[]
 };


export const Cake: React.FC<Props> = (props: Props) => {
    const [cakeLayers, setCakeLayers] = useState<Layer[]>([]);

    useEffect(() => {
        setCakeLayers(props.layersArr);
        console.log(cakeLayers)
    },[props.layersArr]); 

   return (
        <div className="cakeDisplay">
       

           {cakeLayers.length > 0 && cakeLayers.map((layer) => {
                return <CakeLayer height={layer.height} width={layer.width} color={layer.color}/>
           })}
       
       </div>

   );
}
