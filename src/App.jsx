import { useState } from "react";
import { SketchPicker } from "react-color";
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


  //creating state to store our color and also set color using onChange event for sketch picker
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "241",
    g: "112",
    b: "19",
   
  });
  // destructuring rgba from state
  const { r, g, b } = sketchPickerColor;

  //creating state to store our color and also set color using onChange event for block picker
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

  const [red, setRed] = useState(Math.floor(Math.random() * 256));
  const [green, setGreen] = useState(Math.floor(Math.random() * 256));
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256));

  return (
    <div className="App">

      <SketchPicker
      
        onChange={(color) => {setSketchPickerColor(color.rgb)}}
        color={sketchPickerColor}
      />
      
      {console.log(sketchPickerColor)
      
      /* <ColorPicker
        label="Pick color scheme"
        value={pickerColor}
        onValueChange={(color) => setPickerColor(color.rgb)}
      /> */}

      <Slider
        max={255}
        label="Red"
        value={red}
        onValueChange={(v) => setRed(v)}
      />
      <Slider
        max={255}
        label="Green"
        value={green}
        onValueChange={(v) => setGreen(v)}
      />
      <Slider
        max={255}
        label="Blue"
        value={blue}
        onValueChange={(v) => setBlue(v)}
      />
      <Slider
        max={50}
        label="Radius"
        value={radius}
        onValueChange={(v) => setRadius(v)}
      />
      <NumberInput
        min={0}
        max={50} // this still lets you enter more than 50
        label="Your favourite number"
        value={favNum}
        onValueChange={(n) => setfavNum(n)} // can also just be {setfavNum}
      />
      <Slider
        max={50}
        label="duration"
        value={dur}
        onValueChange={(d) => setDur(d)}
      />
      <Drawing dur={dur} favNum={favNum} radius={radius} color={[sketchPickerColor.r, sketchPickerColor.g, sketchPickerColor.b ]} />



    </div>
  );
}

export default App;
