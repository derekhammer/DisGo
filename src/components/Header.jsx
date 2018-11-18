import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
            <style jsx>{`
            h2 {
                text-align: center;
                font-size: 48pt;
                margin-top: -10px;
            }
            #header {
                background-color: lightgray;
                color: white;
            }
            button {
                background-color: lightblue;
                border-radius: 15px;
            }
            p {
                border: white solid 1px;
                width: 100px;
                color: white;
            }
            `}</style>
        <div id="header">
            <h2>DisGO</h2>
            <Link to="/"><button>Home</button></Link>
            <Link to="/browse"><button>Browse</button></Link>
            <Link to="/favorites"><button>Favorites</button></Link>
            <Link to="/account"><button>Account</button></Link>
        </div>
        </div>
    )
};

export default Header;