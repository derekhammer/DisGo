import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Room from './Room';
import Live from './Live';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(props)
{
  var styles = {
  };

      return (
        <div style={styles} id="homeBackground">
          <style jsx>{`
            font-family: Helvetica;
          `}</style>
          <Header/>
          <Switch>
            <Route exact path='/' component={Room} />
            <Route 
            exact path='/live' 
            render={()=><Live
            liveSelected={props.liveSelected}/>} />
          </Switch>
        </div>
      );
    }

App.propTypes = {
  liveSelected: PropTypes.string
};

const mapStateToProps = state => {
  return {
    liveSelected: state.liveSelected
  };
};


export default withRouter(connect(mapStateToProps)(App));



{/* <Switch>
<Route exact path='/live/red' component={GraphicRed} />
<Route exact path='/live/blue' component={GraphicBlue} />
<Route exact path='/live/green' component={GraphicGreen} />
</Switch> */}