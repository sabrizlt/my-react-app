import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent buttonText="FORZA NAPOLI" />
        <ImageComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCudOGLSDtdliGOJaWAVZCv2VgrL8CgPKxg&usqp=CAU" alt="napoli" />
      </header>
    </div>
  );
}

export default App;
