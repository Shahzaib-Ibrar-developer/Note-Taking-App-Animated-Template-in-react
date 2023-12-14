import './index.css';
import Background from './components/Background';
import Foreground from './components/Foreground';
import ButtonShow from './components/ButtonShow';
const App = () => {
  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800'>
        <Background />
        <Foreground />
        <ButtonShow/>

      </div>
    </>
  )
}
export default App;
