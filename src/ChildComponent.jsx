function ChildComponent(props) {
    return (
      <div>
        <p>Bonjour, {props.name} !</p>
        <p>Tu as {props.age} ans.</p>
      </div>
    );
  }
  
  export default ChildComponent;