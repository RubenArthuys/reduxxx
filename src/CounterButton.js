import React from 'react';
import {connect} from 'react-redux';

// Composant présentation (un composant = une fonction) :
function CounterButton(props) {

  console.log("3. Use dispatch(props) to prepare increase")
  // console.log(props)

  return (
    <button onClick={() => props.onIncreaseClick()}>+ increase +</button>
  )
}

// Composant conteneur = intermédiaire entre le composant présentation et le store :
function mapDispatchToProps(dispatch) {

  console.log("2. Create dispatch action : increase")
  // console.log(dispatch)

  return {
    //la props :
    onIncreaseClick: function() {
      dispatch({ type: 'increase'})
      // dispatch initialise l'action à effectuer.
    }
  }
}

// Doc : connect() can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and PASS those functions as PROPS to your component.
export default connect(
  null,
  mapDispatchToProps
)(CounterButton);