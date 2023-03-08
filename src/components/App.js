import "./App.css";
import Button from "./Button/Button";
function App() {
    const action = ()=>console.log('action')
    return (
        <div className="App">
            <Button  onClickAction={action}/>
        </div>
    );
}

export default App;
