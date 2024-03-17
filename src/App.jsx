import { useState } from 'react';

const MyApp = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState({
    day: '',
    month: '',
    year: '',
  });

  const calculateAge = () => {
    let isValid = true;
    const currentDate = new Date();
    const inputDate = new Date(`${year}-${month}-${day}`);

    if (!day) {
      setError({ ...error, day: 'Must be a valid day' });
    } else if (!month) {
      setError({ ...error, month: 'Must be a valid month' });
    } else if (!year) {
      setError({ ...error, year: 'Must be a valid year' });
    }

    const ageDate = new Date(currentDate - inputDate);
    const year = Math.abs(ageDate.getUTCFullYear() - 1970);
    const month = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    setResult({ year, month, days });
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
            -- {result && result.year}
          </label>
          year
        </h1>

        <h1>
          <label
            htmlFor='month'
            className='output-month'
          >
            -- {result && result.month}
          </label>
          month
        </h1>

        <h1>
          <label
            htmlFor='day'
            className='output-day'
          >
            -- {result && result.days}
          </label>
          day
        </h1>
      </div>
    </div>
  );
};

export { MyApp };
