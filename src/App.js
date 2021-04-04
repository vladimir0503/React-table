import TableState from './context/TabeState';
import TableContainer from './components/TableContainer';

function App() {
  return (
    <TableState>
      <div>
        <TableContainer />
      </div>
    </TableState>
  );
}

export default App;
