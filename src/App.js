import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import BusinessInformationForm from './BusinessInformationForm';
import './RegistrationForm.css';
import './BusinessInformationForm.css';

function App() {
  const [isRegistrationForm, setIsRegistrationForm] = useState(true);

  const handleFormSwitch = () => {
    setIsRegistrationForm(!isRegistrationForm);
  };

  return (
    <div className="App">
      {isRegistrationForm ? (
        <RegistrationForm onSwitch={handleFormSwitch} />
      ) : (
        <BusinessInformationForm onSwitch={handleFormSwitch} />
      )}
    </div>
  );
}

export default App;
