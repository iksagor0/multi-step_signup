export default function Phone({ formData, setFormData, error }) {
    function handleChange(e) {
        formData.phone.length >= 10
            ? setFormData({ ...formData, phone: formData.phone })
            : setFormData({ ...formData, phone: e.target.value });
    }

    function handleKeyDown(e) {
        e.key === "Backspace" &&
            setFormData({ ...formData, phone: formData.phone.slice(0, -1) });
    }

    return (
        <div className={`form-step ${formData.phone && "focued"}`}>
            <label htmlFor="phone">What is your phone number?</label>
            <input
                type="number"
                id="phone"
                name="phone"
                autoComplete="off"
                autoFocus
                // required
                value={formData.phone}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {error ? (
                <p className="help-error">
                    Please enter a valid 10 digit US phone number without
                    country code
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </p>
            ) : (
                <p className="help">Ex. 500 123 45 67</p>
            )}
        </div>
    );
}
