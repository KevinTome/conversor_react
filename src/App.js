import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <h1>Convertor de Moedas</h1>
      <h1 className='subtitulo'>Brasil para América do Sul</h1>
      <div className='legenda'>
        <p className='legenda-item'>USD - Dólar Americano</p>
        <p className='legenda-item'>ARS - Peso Argentino</p>
        <p className='legenda-item'>CLP - Peso Chileno</p>
        <p className='legenda-item'>COP - Peso Colombiano</p>
        <p className='legenda-item'>UYU - Peso Uruguaio</p>
        <p className='legenda-item'>BOB - Boliviano</p>
      </div>
      <div className='linha'>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      <Conversor moedaA="BRL" moedaB="ARS"></Conversor>
      </div>
      <div className='linha'>
      <Conversor moedaA="BRL" moedaB="CLP"></Conversor>
      <Conversor moedaA="BRL" moedaB="COP"></Conversor>
      </div>
      <div className='linha'>
      <Conversor moedaA="BRL" moedaB="UYU"></Conversor>
      <Conversor moedaA="BRL" moedaB="BOB"></Conversor>
      </div>
    </div>
  );
}

export default App;
