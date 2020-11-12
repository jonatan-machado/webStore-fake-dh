import Routes from "./Routes";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <div className="App">
        <Checkout buttonLabel={"name"} className={"primary"} />
      </div>
      <Routes />
    </>
  );
}

export default App;
