import React from 'react';
import greenmap from './../assets/img/greenmap.png';

function GraphicGreen(){
    return(
        <div>
            <style jsx>{`
            img{
                width: 300px;
                margin-left: auto;
                margin-right: auto;
                display: block;
            }
            `}</style>
        <img src={ greenmap }/>
        </div>
    );
}
export default GraphicGreen;