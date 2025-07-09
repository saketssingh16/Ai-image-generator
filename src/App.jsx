import './App.css'
// import './components/Imagegeneretor/ImageGenerator';
import ImageGenerator from './components/Imagegeneretor/ImageGenerator';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ImageGenerator/>
    </div>
  );
}

export default App




