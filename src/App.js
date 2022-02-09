import logo from './logo.svg';
import './App.css';
import { PicturesWall } from "./dropzone/Avatar";

function App() {
  return (
    <div>
        <p className="title">React Drag and Drop Image Upload</p>
        <div className="content">
          <PicturesWall />
        </div>
    </div>
  );
}

export default App;
