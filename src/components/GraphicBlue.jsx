import React from 'react';
import bluemap from './../assets/img/bluemap.png';

function GraphicBlue(){
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
        <img src={ bluemap }/>
        </div>
    );
}
export default GraphicBlue;