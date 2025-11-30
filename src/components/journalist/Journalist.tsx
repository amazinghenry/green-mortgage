import { useState, ChangeEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  dateOfBirth: string;
  employmentType: "" | "employer" | "employee" | "freelancer";
  annualSalary: string;
  annualTurnover: string;
  annualIncome: string;
  annualAggregateIncome: string;
  preferredHousingType: string;
  housingOptions: "" | "karsana" | "lugbe" | "lagos";
}

interface FormErrors {
  [key: string]: string;
}

const Journalist = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    dateOfBirth: "",
    employmentType: "",
    annualSalary: "",
    annualTurnover: "",
    annualIncome: "",
    annualAggregateIncome: "",
    preferredHousingType: "",
    housingOptions: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    if (!formData.employmentType) {
      newErrors.employmentType = "Employment type is required";
    }

    if (formData.employmentType === "employee" && !formData.annualSalary) {
      newErrors.annualSalary = "Annual salary is required for employees";
    }

    if (formData.employmentType === "employer" && !formData.annualTurnover) {
      newErrors.annualTurnover = "Annual turnover is required for employers";
    }

    if (formData.employmentType === "freelancer" && !formData.annualIncome) {
      newErrors.annualIncome = "Annual income is required for freelancers";
    }

    if (!formData.annualAggregateIncome) {
      newErrors.annualAggregateIncome = "Annual aggregate income is required";
    }

    if (!formData.preferredHousingType.trim()) {
      newErrors.preferredHousingType = "Preferred housing type is required";
    }

    if (!formData.housingOptions) {
      newErrors.housingOptions = "Please select a housing location";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError("");

      try {
        // Replace this URL with your Google Apps Script Web App URL
        const GOOGLE_SCRIPT_URL =
          "https://script.google.com/macros/s/AKfycbx7JhljfyeVzkM1I-B-gCPPdDbkpTHD22zrAZjItP16CbEc9sM4z4NSA7_6Nb9haaeF/exec";

        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            dateOfBirth: formData.dateOfBirth,
            employmentType: formData.employmentType,
            annualSalary: formData.annualSalary,
            annualTurnover: formData.annualTurnover,
            annualIncome: formData.annualIncome,
            annualAggregateIncome: formData.annualAggregateIncome,
            preferredHousingType: formData.preferredHousingType,
            housingOptions: formData.housingOptions,
            timestamp: new Date().toISOString(),
          }),
        });

        console.log("Form submitted:", formData);
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: "",
            email: "",
            dateOfBirth: "",
            employmentType: "",
            annualSalary: "",
            annualTurnover: "",
            annualIncome: "",
            annualAggregateIncome: "",
            preferredHousingType: "",
            housingOptions: "",
          });
        }, 3000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitError("Failed to submit application. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const isFieldRequired = (fieldName: string): boolean => {
    if (fieldName === "annualSalary")
      return formData.employmentType === "employee";
    if (fieldName === "annualTurnover")
      return formData.employmentType === "employer";
    if (fieldName === "annualIncome")
      return formData.employmentType === "freelancer";
    return false;
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg">
              <div className="card-body p-4 p-md-5">
                <h1 className="card-title h3 fw-bold text-dark mb-2">
                  MREIF Application Support for Nigerian Journalist
                </h1>
                <p className="text-muted mb-4">
                  MREIF Application Support for Nigerian Journalist expanding
                  access to affordable housing for the Fourth Estate
                </p>

                <h2 className="h4 fw-semibold text-secondary mb-4">
                  Profile of Applicant
                </h2>

                {submitted && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Success!</strong> Application submitted
                    successfully!
                  </div>
                )}

                {submitError && (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Error!</strong> {submitError}
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.fullName ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Date of Birth <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.dateOfBirth ? "is-invalid" : ""
                    }`}
                  />
                  {errors.dateOfBirth && (
                    <div className="invalid-feedback">{errors.dateOfBirth}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Employment Type <span className="text-danger">*</span>
                  </label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    className={`form-select ${
                      errors.employmentType ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">Select Employment Type</option>
                    <option value="employer">Employer</option>
                    <option value="employee">Employee</option>
                    <option value="freelancer">Freelancer</option>
                  </select>
                  {errors.employmentType && (
                    <div className="invalid-feedback">
                      {errors.employmentType}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Annual Salary (For Employees){" "}
                    {isFieldRequired("annualSalary") && (
                      <span className="text-danger">*</span>
                    )}
                  </label>
                  <input
                    type="number"
                    name="annualSalary"
                    value={formData.annualSalary}
                    onChange={handleChange}
                    placeholder="0"
                    disabled={formData.employmentType !== "employee"}
                    className={`form-control ${
                      errors.annualSalary ? "is-invalid" : ""
                    }`}
                  />
                  {errors.annualSalary && (
                    <div className="invalid-feedback">
                      {errors.annualSalary}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Annual Turnover (For Employers){" "}
                    {isFieldRequired("annualTurnover") && (
                      <span className="text-danger">*</span>
                    )}
                  </label>
                  <input
                    type="number"
                    name="annualTurnover"
                    value={formData.annualTurnover}
                    onChange={handleChange}
                    placeholder="0"
                    disabled={formData.employmentType !== "employer"}
                    className={`form-control ${
                      errors.annualTurnover ? "is-invalid" : ""
                    }`}
                  />
                  {errors.annualTurnover && (
                    <div className="invalid-feedback">
                      {errors.annualTurnover}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Annual Income (For Freelancers){" "}
                    {isFieldRequired("annualIncome") && (
                      <span className="text-danger">*</span>
                    )}
                  </label>
                  <input
                    type="number"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    placeholder="0"
                    disabled={formData.employmentType !== "freelancer"}
                    className={`form-control ${
                      errors.annualIncome ? "is-invalid" : ""
                    }`}
                  />
                  {errors.annualIncome && (
                    <div className="invalid-feedback">
                      {errors.annualIncome}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Annual Aggregate Income (For All){" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    name="annualAggregateIncome"
                    value={formData.annualAggregateIncome}
                    onChange={handleChange}
                    placeholder="0"
                    className={`form-control ${
                      errors.annualAggregateIncome ? "is-invalid" : ""
                    }`}
                  />
                  {errors.annualAggregateIncome && (
                    <div className="invalid-feedback">
                      {errors.annualAggregateIncome}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Preferred Housing Type{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="preferredHousingType"
                    value={formData.preferredHousingType}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.preferredHousingType ? "is-invalid" : ""
                    }`}
                    placeholder="e.g., 2-bedroom apartment"
                  />
                  {errors.preferredHousingType && (
                    <div className="invalid-feedback">
                      {errors.preferredHousingType}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label fw-medium">
                    Housing Location <span className="text-danger">*</span>
                  </label>
                  <select
                    name="housingOptions"
                    value={formData.housingOptions}
                    onChange={handleChange}
                    className={`form-select ${
                      errors.housingOptions ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">Select Housing Location</option>
                    <option value="karsana">
                      Renewed Hope Housing Estate, Karsana, Gwarinpa, Abuja
                    </option>
                    <option value="lugbe">
                      Crescent Gardens, Behind Centenary City, Lugbe, Abuja
                    </option>
                    <option value="lagos">Lagos</option>
                  </select>
                  {errors.housingOptions && (
                    <div className="invalid-feedback">
                      {errors.housingOptions}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn btn-primary btn-lg w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journalist;
