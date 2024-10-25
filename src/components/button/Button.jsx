export const Button = ({ variant='success', label, type="button", onClick}) => {
    return (
        <div className="d-grid col-1">
            <button type={type} className={`btn btn-${variant}`} onClick={onClick}>{label}</button>
        </div>
    )
}
