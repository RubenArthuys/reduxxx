import React from 'react';
import { connect } from 'react-redux';

// Composant présentation
function CounterDisplay(props) {

  return (
    <p>
      Count : { props.countToDisplay }
      {console.log("5. Use props from state, to display it")}
      {/* {console.log(props)} */}
    </p>
  )
}

// Composant conteneur 
// mapStateToProps récupère le contenu du store dans sa variable state
function mapStateToProps(state) {

  console.log("4. Load state from store")
  console.log(state)

  // on renvoi le state (du store) en une props : countToDisplay
  return { countToDisplay: state.count }
}

export default connect (
  mapStateToProps, 
  null
)(CounterDisplay)