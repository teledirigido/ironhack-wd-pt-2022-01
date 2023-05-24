import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Greeting from './components/Greetings';
import StudentCard from './components/StudentCard';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div>
      <Navbar />
      <Greeting />
      <NewComponent></NewComponent>
      <StudentCard name="Juan" info={{ city: 'BCN', course: 'Web' }} />
      <StudentCard name="Juan" />
    </div>
  );
}

export default App;
