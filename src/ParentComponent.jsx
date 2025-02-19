
import ChildComponent from "./ChildComponent";
function ParentComponent() {
    const userName = "Alice";
  
    return (
      <div>
        <h1>Bienvenue sur notre site</h1>
        <ChildComponent name={userName} age={25} />
      </div>
    );
  }
  
  export default ParentComponent;