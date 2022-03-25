import "./App.css";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          name="Emma Bostian"
          country="Suecia"
          image="emma"
          cargo="Ingeniera de Sofward"
          job="Spotify"
          testimonio="loremcqcxewcqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr"
        />
         <Testimonio
          name="Shawn Wang"
          country="Singapur"
          image="shawn"
          cargo="Ingeniero de Sofward"
          job="Amazon"
          testimonio="loremcqcxewcqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr"
        />
        <Testimonio
          name="Sarah Chima"
          country="Nigeria"
          image="sarah"
          cargo="Ingeniera de Sofward"
          job="ChatDesk"
          testimonio="loremcqcxewcqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr"
        />
      </div>
    </div>
  );
}

export default App;
