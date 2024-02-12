import React from 'react';
import  { Layer }  from "./Layer";
import './LayerBuilder.css'


export const LayerBuilder: React.FC<{ layer: Layer; deleteLayer: () => void; }> = ({ layer, deleteLayer }) => {
    return (
      <div className="layerBuilder" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '5px', border: '1px solid #ddd', borderRadius: '4px' }}>
        <div style={{ backgroundColor: layer.color, width: '20px', height: '20px', marginRight: '10px' }}></div>
        <div style={{ marginRight: '10px' }}>Color</div>
        <div style={{ marginRight: '10px' }}>Width: {layer.width}</div>
        <div style={{ marginRight: '10px' }}>Height: {layer.height}</div>
        <button onClick={deleteLayer} style={{ marginLeft: 'auto' }}>Delete</button>
      </div>
    );
  };