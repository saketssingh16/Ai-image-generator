import './App.css'
import './components/Imagegeneretor/ImageGenerator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ImageGenerator></ImageGenerator>
    </div>
  );
}

export default App
