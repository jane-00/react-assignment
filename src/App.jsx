import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import ColorPicker from "./components/ColorPicker";
import NumberInput from "./components/NumberInput";
import Drawing from "./components/Drawing";

function App() {

  const [favNum, setfavNum] = useState(1);
  const [dur, setDur] = useState(10);
  const [colorPicker, setColorPicker] = useState("#19cad7");

  return (
    <div className="App">
      <div className="Main__generator">
        <div className="svg__container">
          <Drawing dur={dur} favNum={favNum} color={colorPicker} />
        </div>

        <div className="Controlers">
          <ColorPicker
            label="Color scheme"
            value={colorPicker}
            onValueChange={(color) => setColorPicker(color)}
          />
          <NumberInput
            min={0}
            max={100}
            label="Your favourite number"
            value={favNum}
            onValueChange={(n) => setfavNum(n)}
          />
          <Slider
            min={1}
            max={50}
            label="Animation duration"
            value={dur}
            onValueChange={(d) => setDur(d)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
