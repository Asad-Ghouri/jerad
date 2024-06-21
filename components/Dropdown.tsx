// components/Dropdown.tsx
import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  inputId: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, inputId }) => {
  const handleSelect = (value: string) => {
    const inputElement = document.getElementById(inputId) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = value;
    }
  };

  return (
    <div className="dropdown">
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} type="text" readOnly />
      <div className="dropdown-content">
        {options.map(option => (
          <a
            key={option}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleSelect(option);
            }}
          >
            {option}
          </a>
        ))}
      </div>
      <style jsx>{`
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }

        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: #f1f1f1;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Dropdown;
