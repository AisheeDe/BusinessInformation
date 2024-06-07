import React, { useState, useRef } from 'react';

function BusinessInformationForm() {
  const [step, setStep] = useState(1);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 3) {
      console.log('Form submitted!');
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Business Information</h2>
            <p>Please enter information about your company.</p>
            <div className="general-information">
              <h3>GENERAL INFORMATION</h3>
              <p>
                Local: Brands with distribution in 3 divisions or less OR
                multiple divisions but a total of 150 stores or less.
              </p>
              <div className="form-group">
                <label htmlFor="brandName">Brand Name</label>
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="brandType">Brand Type</label>
                <select id="brandType" name="brandType">
                  <option value="">Select Type</option>
                  <option value="national">National</option>
                  <option value="local">Local</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="streetAddress">Street Address</label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" id="zipCode" name="zipCode" required />
              </div>
              <div className="form-group">
                <label htmlFor="taxIdNumber">Tax ID Number</label>
                <input type="text" id="taxIdNumber" name="taxIdNumber" required />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2>Documents</h2>
            <p>Once the following documents are signed, you'll be ready to get started.</p>
            <div className="documents-list">
              <p>
                <span>Electronically sign the agreement(s)</span>
                <i className="fas fa-angle-right"></i>
              </p>
              <p>
                <span>Non-adult beverage Kroger market supplier waiver and release</span>
                <i className="fas fa-angle-right"></i>
              </p>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2>COI PDF Upload</h2>
            <p>Upload your Certificate of Insurance (COI) PDF here.</p>
            <div className="form-group">
              <label htmlFor="coiPdf">COI PDF Upload</label>
              <input type="file" id="coiPdf" name="coiPdf" required />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="business-information-form">
      <form onSubmit={handleSubmit} ref={formRef}>
        {renderStepContent()}
        <div className="navigation-buttons">
        {step > 1 && <button type="button" onClick={handleBack}>Previous Step</button>}
          <button type="submit">{step === 3 ? 'Submit' : 'Next Step >'}</button>
        </div>
      </form>
    </div>
  );
}

export default BusinessInformationForm; 