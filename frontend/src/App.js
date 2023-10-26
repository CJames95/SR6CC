import './App.css';
import { atom, useAtom } from 'jotai';
import Creator from './components/creator';
import Setting from './components/setting';
import Character from './components/character';

export default function App() {
  {/*<Setting />*/}
  return (
    <div className='max-h bg-[#161316]'>
      <Character />
    </div>
  );
}

