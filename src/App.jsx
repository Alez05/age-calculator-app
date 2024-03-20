import { useState } from 'react';

const MyApp = () => {
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
    const inputDate = new Date(year, month - 1, day); // Adjusted to use the JavaScript Date constructor directly.
    const newError = { day: '', month: '', year: '' };

    // Input validation
    if (!day.trim()) {
      newError.day = 'This field is required'; // when field is empty
      isValid = false;
    } else if (day < 1 || day > 31) {
      newError.day = 'Must be a valid day'; // when day is not between 1 and 31
      isValid = false;
    }

    if (!month.trim()) {
      newError.month = 'This field is required'; // when field is empty
      isValid = false;
    } else if (month < 1 || month > 12) {
      newError.month = 'Must be a valid month'; // when month is not between 1 and 12
      isValid = false;
    }

    if (!year.trim()) {
      newError.year = 'This field is required'; // when field is empty
      isValid = false;
    } else if (year < 1970 || year > currentDate.getFullYear()) {
      newError.year = 'Must be a valid year'; // when year is not between 1970 and current year
      isValid = false;
    }

    // Check if date is valid
    if (!isDateValid(year, month, day)) {
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

  return (
    <div className='container'>
      <div className='input-flex'>
        <div className='input-container'>
          <span className='input-text'>Day</span>
          <input
            type='number'
            id='day'
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder='DD'
          />
          <p>
            <small className='error-day'>{error.day}</small>
          </p>
        </div>
        <div className='input-container'>
          <span className='input-text'>Month</span>
          <input
            type='number'
            id='month'
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder='MM'
          />
          <p>
            <small className='error-month'>{error.month}</small>
          </p>
        </div>
        <div className='input-container'>
          <span className='input-text'>Year</span>
          <input
            type='number'
            id='year'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder='YYYY'
          />
          <p>
            <small className='error-year'>{error.year}</small>
          </p>
        </div>
      </div>
      <div className='button-content'>
        <button
          className='submit-btn'
          onClick={calculateAge}
        >
          <img
            src='/images/icon-arrow.svg'
            alt='arrow'
          />
        </button>
      </div>
      <div className='result-age'>
        <h1>
          <label
            htmlFor='year'
            className='output-year'
          >
            {result && result.year}
          </label>
          year
        </h1>

        <h1>
          <label
            htmlFor='month'
            className='output-month'
          >
            {result && result.month}
          </label>
          month
        </h1>

        <h1>
          <label
            htmlFor='day'
            className='output-day'
          >
            {result && result.days}
          </label>
          day
        </h1>
      </div>
    </div>
  );
};

export { MyApp };
