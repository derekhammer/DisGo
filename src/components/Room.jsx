import React from 'react';
import { Link } from 'react-router-dom';

function Room (props){
    return(
        <div id="homeBackground">
            <style jsx>{`
            #live-room{
                border: black solid 3px;
                margin-left: auto;
                margin-right: auto;
                width: 200px;
                text-align: center;
                padding: 10px;
            }
            #live-room:hover{
                cursor: pointer;
            }
            h2{
                margin-left: auto;
                margin-right: auto;
                text-align: center;
                
            }

            `} </style>
            <div>
                <h2> Indie DJ  <Link to="/live"><span id="live-room">Live Room</span></Link> Popular</h2>                        
            </div>
        </div>
    );
}

export default Room;