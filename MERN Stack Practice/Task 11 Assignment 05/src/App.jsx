import AppRouter from "./AppRouter";
import Header from "./Components/Header/Header";
import {Footerdemo} from '../src/Components/ui/footer-section'
const App = () => {
  return (
    <div>
      <Header/>
      <AppRouter />
      <Footerdemo/>
    </div>
  );
};

export default App;
