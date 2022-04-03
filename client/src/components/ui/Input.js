const InputField = ({ value, label, id, name, placeholder, type, onChange }) => (
    <div className="form-group">
        {label && <label htmlFor="input-field">{label}</label>}
        <input
            type={type}
            value={value}
            id={id}
            name={name}
            className="form-control"
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
  );
  
  export default InputField;