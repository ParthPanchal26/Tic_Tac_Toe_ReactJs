const Square = (props) => {
  return (
    <div style={props.style} onClick={props.onClick} className="square">
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square