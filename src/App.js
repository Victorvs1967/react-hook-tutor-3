import './App.css';
import ClassCounter1 from './components/ClassCounter1';
import ClassCounter2 from './components/ClassCounter2';
import ClassMouse from './components/ClassMouse';
import HookCounter1 from './components/HookCounter1';
import HookCounter2 from './components/HookCounter2';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h4>React Hook Tutor 3</h4>
    </header>
    <main className="App-main">
      <ClassCounter1 />
      <HookCounter1 />
      <ClassCounter2 />
      <HookCounter2 />
      <ClassMouse />
    </main>
    <footer className="App-footer">
      <p>by Nabendu</p>
    </footer>
    </div>
  );
}

export default App;
