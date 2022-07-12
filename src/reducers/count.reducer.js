// La fonction reducer avec 2 paramètres : (le state, et l'action)
// state = donnée qui va dans le store, action = l'objet de dispatch
export default function countReducer(count = 0, action) {

  // On vérifie le type de l'action qui vient de dispatch 
  // pour être sûr qu'on est dans le bon reducer.
  if(action.type === 'increase') {

    var newCount = count +1;

    console.log("6. Reducer transform count to newCount : " + newCount)

    return newCount;

  } else {

    console.log("1. Reducer loads count : " + count)

    return count
  }
}