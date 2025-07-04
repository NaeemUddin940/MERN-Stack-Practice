import AppRouter from "./AppRouter";
import Header from "./Components/Header/Header";
import { Footerdemo } from "../src/Components/Footer/footer-section";
import { ScrollProvider } from "./hooks/use-scroll-direction";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pt-25">
        <ScrollProvider>
          <AppRouter />
        </ScrollProvider>
        <Footerdemo />
      </div>
    </div>
  );
};

export default App;
