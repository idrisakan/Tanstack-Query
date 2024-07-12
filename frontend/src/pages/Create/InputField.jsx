const InputField = ({
  label,
  name,
  placeholder,
  type,
  isTextarea,
  require= true,
  min,
  max,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold">{label}</label>
      {isTextarea ? (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          className="border px-4 py-1 rounded-md shadow"
          required={require}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          min={min}
          max={max}
          className="border px-4 py-1 rounded-md shadow"
          required={require}
          step={type === 'number' && '0.1' }
        />
      )}
    </div>
  );
};

export default InputField;
