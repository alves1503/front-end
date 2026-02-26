import './App.css';
// 02- Importando componentes
import FirstComponent from './components/FirstComponent';

// 04- Template expression
import TemplateExpression from './components/TemplateExpression';

// 06- Events 
import Events from './components/Events';


function App() {


  return <div className='App'>

    {/* 03- Comentarios no JSX*/}

    <h1>Fundamentos do react</h1>
    <FirstComponent />

    <h1>Template expression</h1>
    <TemplateExpression />
    <Events />
  </div>
}

export default App
