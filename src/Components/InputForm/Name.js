export default function Name({ formData, setFormData, error }) {
    return (
        <div className={`form-step ${formData.name && "focued"}`}>
            <label htmlFor="name">What is your name?</label>
            <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                autoFocus
                // required
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
            />
            {error && (
                <p className="help-error">
                    Name field is required!
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </p>
            )}
        </div>
    );
}
