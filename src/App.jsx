import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import { ActiveTagProvider } from "./Context/ActiveTagContext";

function App() {
  return (
    <ActiveTagProvider>
      <div className="App">
        <Header />
        <Search />
      </div>
    </ActiveTagProvider>
  );
}

export default App;
