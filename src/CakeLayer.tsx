import './CakeLayer.css'
import React, { useEffect } from 'react'

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
        <div className="oneLayer" style={{backgroundColor: `${props.color}`, width: `${props.width * 35}px`, height: `${props.height * 35}px`, border: `${props.color}`}}>
        </div>
        </>
    )
}

export default CakeLayer