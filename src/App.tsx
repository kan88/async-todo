import Form from './features/todo/Form/Form';
import { Todo } from './features/todo/List/List';

function App() {
  return (
    <main className="App">
      <h1>My todo app</h1>
      <Form />
      <Todo />
    </main>
  );
}

export default App;
