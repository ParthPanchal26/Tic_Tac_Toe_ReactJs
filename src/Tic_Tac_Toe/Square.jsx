const Square = (props) => {
  return (
    <div style={props.style} onClick={props.onClick} className="square">
        <h1>{props.value}</h1>
    </div>
  )
}

export default Square