export const Select = ({ inputSize = 4, label, id, handleChange, options }) => {
    return (
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">{label}</label>
            <select id={id} className="form-select" onChange={handleChange}>
                <option value="">Escolha...</option>
                {options && options.map(option => (
                    <option value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export const SelectMunicipio = ({ inputSize = 4, label, id, handleChange, options = [] }) => {
    return (
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">{label}</label>
            <select id={id} className="form-select" onChange={handleChange}>
                <option value="">Escolha...</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
