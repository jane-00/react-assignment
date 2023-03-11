import { useState } from "react";
//import { SketchPicker } from "react-color";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Slider from "./components/Slider";
import ColorPicker from "./components/ColorPicker";

import NumberInput from "./components/NumberInput";
import Drawing from "./components/Drawing";

function App() {
  const [radius, setRadius] = useState(15);
  const [favNum, setfavNum] = useState(1);
  const [dur, setDur] = useState(10);

  const [colorPicker, setColorPicker] = useState("#19cad7");

  return (
    <div className="App">


      <div className="Main__generator">

        <Drawing dur={dur} favNum={favNum} radius={radius} color={colorPicker} />

        <div className="Controlers">
          <ColorPicker
            label="Color scheme"
            value={colorPicker}
            onValueChange={(color) => {
              setColorPicker(color);
              console.log(colorPicker)
            }
            }
          />

         
          <NumberInput
            min={0}
            max={100} // this still lets you enter more than 50
            label="Your favourite number"
            value={favNum}
            onValueChange={(n) => setfavNum(n)} // can also just be {setfavNum}
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
