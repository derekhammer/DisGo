import React from 'react';
import redmap from './../assets/img/redmap.png';

function GraphicRed(){
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
        <img src={ redmap }/>
        </div>
    );
}
export default GraphicRed;