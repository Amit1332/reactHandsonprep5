import './App.css';
import HocCall from './Components/HocComponent/HocCall';
import Hoc from './Components/HocComponent/ParentHoc';
import PureCompo from './Components/PureCompo';

function App() {
  return (
   <div className='App'>
   <h2>Handson - 5</h2>
      <PureCompo/> 
      <HocCall value={Hoc}/>
   

   </div>
  );
}

export default App;
