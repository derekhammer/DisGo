import React from 'react';
import newmap from './../assets/img/newmap.png';

function GraphicAll(){
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
        <img src={ newmap }/>
        </div>
    );
}
export default GraphicAll;