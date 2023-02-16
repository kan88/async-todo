import { useAppSelector } from './app/hooks';
import Form from './features/todo/Form/Form';
import { Todo } from './features/todo/List/List';

function App() {

  const { error, status } = useAppSelector((state) => state.todo)
  console.log(typeof error)
  return (
    <main className="App">
      <h1>My todo app</h1>
      <Form />
      <Todo />
      {typeof status === 'string' ? <h2 style={{ textAlign: 'center' }}>loading</h2> : null}
      {typeof error === 'string' ? <h2 style={{ textAlign: 'center' }}>{error}</h2> : null}
    </main>
  );
}

export default App;
