import './CakeLayer.css'
import React, { useEffect } from 'react'
// import CakeBuilder from './CakeBuilder'
// import LayerBuilder from './LayerBuilder'
// import Cake from './Cake'
// import Layer from './Layer'

// interface Props {
//    layer: Layer;
// };

// function CakeLayer(props: Props) {
//     return (
//        <div>
//            <div className="Layer" style={{height: props.layer.height, width: props.layer.width, backgroundColor: props.layer.color}}></div>
//        </div>
//    );
// };

interface LayerProps {
    height: number;
    width: number;
    color: string;
};

const CakeLayer: React.FC<LayerProps> = (props: LayerProps) => {
    useEffect(() => {
        console.log(`height: ${props.height}`)
        console.log(`width: ${props.width}`)
        console.log(`color: ${props.color}`)
    },[props])

    return (
        <>
        <div className="oneLayer" style={{backgroundColor: `${props.color}`, width: `${props.width * 50}px`, height: `${props.height * 50}px`, border: `${props.color}`}}>
        </div>
        </>
    )
}

export default CakeLayer