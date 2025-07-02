import AppRouter from "./AppRouter";
import Header from "./Components/Header/Header";
import { Footerdemo } from "./Components/ui/footer-section";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex-grow">
        <AppRouter />
      </div>
      <Footerdemo />
    </div>
  );
};

export default App;
