
// ============ COMPONENT ============
function Grocery(props) {




    return (
        <div onClick={() => props.dispatch({ type: 'TOGGLE_COMPLETE', payload: props.grocery.id })} className={`grocery ${props.grocery.complete === true ? 'complete' : ''}`}>
            <h2>{props.grocery.item}</h2>
        </div>
    )
}

export default Grocery;