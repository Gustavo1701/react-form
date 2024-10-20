export const Select = ({ inputSize = 4 , label, id}) => {
    return (
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">{label}</label>
            <select id={id} className="form-select">
                <option selected>Escolha...</option>
                <option>...</option>
            </select>
        </div>
    )
}
