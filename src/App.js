
import './App.css';
import Header from './Components/Header/Header';
import Paragraph from './Components/Paragraph/Paragraph';
import Link from './Components/Link/Link';
import Img from './Components/Image/Img.js';
function App() {
  return (
  <div>
     <div>
    <Header></Header>
    <div>
    <Paragraph></Paragraph>
    </div>
    <Img></Img>
    
   </div>
    
    <Link url="https://liquipedia.net/" linktext="Esports schedules"></Link><br></br>
    
  </div>
  );
}

export default App;
