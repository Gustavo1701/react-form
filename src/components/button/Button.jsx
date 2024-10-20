export const Button = ({ variant='success', label, type="button" }) => {
    return (
        <div className="d-grid col-1">
            <button type={type} className={`btn btn-${variant}`}>{label}</button>
        </div>
    )
}
