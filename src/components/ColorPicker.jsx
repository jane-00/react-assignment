const ColorPicker = ({ onValueChange, value, color, label }) => {
  
  return (
    <label>
      <span>{label}</span>
      <input
        type="color"
        name="favcolor"
        value={color}
        onChange={(e) => onValueChange(e.target.value)}
      />
     
    </label>
  );
};

export default ColorPicker;
