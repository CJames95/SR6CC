import './App.css';
import Creator from './components/creator';

export default function App() {

  const priority_table = {
    paddingRight: '20%',
    paddingLeft: '20%',
    paddingTop: '5%',
    display: 'flex'
  }

  return (
    <div className="App" style={priority_table}>
      <Creator />
    </div>
  );
}

