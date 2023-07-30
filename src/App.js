import './App.css';
import { InlineCss, Stylesheet, External, ModuleCSS, SassCSS } from './components/Css';

function App() {
  return (
    <div className="App">
      <InlineCss />
      <Stylesheet />
      <External />
      <ModuleCSS />
      <SassCSS />
    </div>
  );
}

export default App;
