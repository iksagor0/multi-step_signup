export default function Password({ formData, setFormData, error }) {
    return (
        <div className={`form-step ${formData.password && "focued"}`}>
            <label htmlFor="password">Choose your password!</label>
            <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                autoFocus
                // required
                value={formData.password}
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                }
            />
            {error ? (
                <p className="help-error">
                    Password should contain 8 digits at least
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </p>
            ) : (
                <p className="help">
                    Password should contain 8 digits at least
                </p>
            )}
        </div>
    );
}
