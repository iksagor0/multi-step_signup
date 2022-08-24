export default function Email({ formData, setFormData, error }) {
    return (
        <div className={`form-step ${formData.email && "focued"}`}>
            <label htmlFor="email">What is your email?</label>
            <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                autoFocus
                // required
                value={formData.email}
                onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                }}
            />
            {error ? (
                <p className="help-error">
                    You have entered an invalid e-mail address. Please try
                    again!
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </p>
            ) : (
                <p className="help"> Ex. name@company.com</p>
            )}
        </div>
    );
}
