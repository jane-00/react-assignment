const ColorPicker = ({ onValueChange, value, color, label }) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type="color"
        name="favcolor"
        value={color}
        onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
      />
      <span>{value}</span>
    </label>
  );
};

export default ColorPicker;
