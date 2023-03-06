const NumberInput = ({ onValueChange, value, max, min, label }) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
      />
      <span>{value}</span>
    </label>
  );
};

export default NumberInput;
