import './App.css';
import Testimony from './Component/Testimony';

//Does it serve to give dynamism to the application?

function App() {
  return (
    <div className="App">
      <div className="main-conteiner">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp: </h1>
        <Testimony 
        //pass the props to a separate file to work on a javascript object
          name='Matias Fariña'
          country='Argentina'
          job='Oil engineer'
          company='YPF'
          img='ab'
          testimony='Lorem ipsum dolor sit amet consectetur adipiscing elit, aliquam etiam vivamus iaculis euismod eros magnis non, eu taciti imperdiet cubilia rhoncus mollis. Blandit magna felis duis platea justo ullamcorper, senectus class eros feugiat quis, habitasse porta nec fusce lacinia. Tristique facilisi augue nulla lacinia natoque mus aliquam litora, tortor nec vulputate malesuada purus ac conubia, pellentesque felis laoreet netus sociosqu fringilla vivamus.'
        />
        <Testimony 
          name='Alejo Zarate'
          country='Peru'
          job='Public attention'
          company='McDonals'
          img='b'
          testimony='Lorem ipsum dolor sit amet consectetur adipiscing elit, aliquam etiam vivamus iaculis euismod eros magnis non, eu taciti imperdiet cubilia rhoncus mollis. Blandit magna felis duis platea justo ullamcorper, senectus class eros feugiat quis, habitasse porta nec fusce lacinia. Tristique facilisi augue nulla lacinia natoque mus aliquam litora, tortor nec vulputate malesuada purus ac conubia, pellentesque felis laoreet netus sociosqu fringilla vivamus.'
        />
        <Testimony
          name='Leo Fariña'
          country='Costa Rica'
          job='Software engineer'
          company='Google'
          img='cc'
          testimony='Lorem ipsum dolor sit amet consectetur adipiscing elit, aliquam etiam vivamus iaculis euismod eros magnis non, eu taciti imperdiet cubilia rhoncus mollis. Blandit magna felis duis platea justo ullamcorper, senectus class eros feugiat quis, habitasse porta nec fusce lacinia. Tristique facilisi augue nulla lacinia natoque mus aliquam litora, tortor nec vulputate malesuada purus ac conubia, pellentesque felis laoreet netus sociosqu fringilla vivamus.'
        />
      </div>
    </div>
  );
}

export default App;
