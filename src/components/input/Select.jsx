export const Select = ({ inputSize = 4, label, value, id, options = [], onChange }) => {
    return (
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">{label}</label>
            <select id={id} className="form-select" value={value} onChange={onChange}>
                <option>Escolha...</option>
                {options.map((item, index) => {
                    return <option key={index} value={item.value}>{item.label}</option>
                })}
            </select>
        </div>
    )
}
