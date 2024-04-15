import { useState } from 'react';

const AgeCalculatorLogic = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState({ day: '', month: '', year: '' });

  const isDateValid = (year, month, day) => {
    const inputDate = new Date(year, month - 1, day);
    return (
      inputDate.getFullYear() == year &&
      inputDate.getMonth() + 1 == month &&
      inputDate.getDate() == day
    );
  };

  const calculateAge = () => {
    let isValid = true;
    const currentDate = new Date();
    const inputDate = new Date(year, month - 1, day); // month is 0 indexed
    const newError = { day: '', month: '', year: '' };

    // Input validation

    if (!day) {
      newError.day = 'This field is required'; // when field is empty
      isValid = false;
    } else if (day < 1 || day > 31) {
      newError.day = 'Must be a valid day'; // when day is not between 1 and 31
      isValid = false;
    }

    if (!month) {
      newError.month = 'This field is required'; // when field is empty
      isValid = false;
    } else if (month < 1 || month > 12) {
      newError.month = 'Must be a valid month'; // when month is not between 1 and 12
      isValid = false;
    }

    if (!year) {
      newError.year = 'This field is required'; // when field is empty
      isValid = false;
    } else if (year < 1970 || year > currentDate.getFullYear()) {
      newError.year = 'Must be a valid year'; // when year is not between 1970 and current year
      isValid = false;
    }

    // Check if date is valid
    if (isValid && !isDateValid(year, month, day)) {
      newError.day = 'Must be a valid date'; // when date is not valid
      isValid = false;
    }

    setError(newError); // Update the error state here, after all validations.

    if (isValid) {
      const ageDate = new Date(currentDate - inputDate);
      const years = Math.abs(ageDate.getUTCFullYear() - 1970);
      const months = ageDate.getUTCMonth();
      const days = ageDate.getUTCDate() - 1;
      setResult({ year: years, month: months, days });
    } else {
      setResult(null);
    }
  };

  return {
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    result,
    error,
    calculateAge,
  };
};

export default AgeCalculatorLogic;
