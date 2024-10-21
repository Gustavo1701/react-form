export const Input = ({ inputSize = 6, label, id, type = 'text', ref, handleChange, value }) => {
    
    return (
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">{label}</label>
            <input value={value} ref={ref} type={type} className="form-control" id={id} onChange={handleChange} />
        </div>
    )
}
