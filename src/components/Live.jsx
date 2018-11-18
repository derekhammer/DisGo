import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GraphicAll from './GraphicAll';
import GraphicBlue from './GraphicBlue';
import GraphicRed from './GraphicRed';
import GraphicGreen from './GraphicGreen';

function Live(props)
{
    let graphicLocation = null;


    function handleDJClicked(color){

        const { dispatch } = props;
        const action = {
            type: 'SELECT_LIVE',
            color: color
        }
        dispatch(action);
    }

    if(props.liveSelected === 'red')
    {
        graphicLocation = <GraphicRed/>;        
    }else if (props.liveSelected === 'blue')
    {
        graphicLocation = <GraphicBlue/>
    }else if (props.liveSelected === 'green')
    {
        graphicLocation = <GraphicGreen/>

    }else{
        graphicLocation = null;
    }


    return(
        <div>
        <style jsx>{`
        h2 {
            border: black solid 3px;
            margin-left: auto;
            margin-right: auto;
            width: 250px;
            text-align: center;
        }
        #liveheader{
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            border: lightgray solid 1px;
            width: 250px;
        }
        #red{
            background: red;
        }
        #blue{
            background: blue;
        }
        #green{
            background: green;
        }
        button {
            background-color: lightgray;
            display: block;
            margin: auto;
            border: lightgray solid 3px;
        }
        button:hover {
            cursor: pointer;
            background-color: gray;
        }
        `}</style>
        <div id='liveheader'>
        <h1>You are Live!</h1>
        <footer>Here's who is Live right now!</footer>
        </div>

        <button onClick={() => {handleDJClicked('red');}}><h2 id='red' >DJ Red</h2></button>
        <button onClick={() => {handleDJClicked('blue');}}><h2 id='blue' >DJ Blue</h2></button>
        <button onClick={() => {handleDJClicked('green');}}><h2 id='green' >DJ Green</h2></button>
        
        <div>
            <GraphicAll/>
        </div>
        <div>
            {graphicLocation}
        </div>
        
        </div>
    )
}

Live.propTypes = {
    liveSelected: PropTypes.string
};

export default connect()(Live);