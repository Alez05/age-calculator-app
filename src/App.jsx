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
    if (!day || !month || !year) {
      setError('');
      return;
    }

    let valid = true;

    const currentDate = new Date();
    const inputDate = new Date(`${year}-${month}-${day}`);

    let ageDifference = currentDate.getTime() - inputDate.getTime();

    const ageDate = new Date(ageDifference);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    setResult({ years, months, days });
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
          />
          <p>
            <small className='error-day'>{error} </small>
          </p>
        </div>
        <div className='input-container'>
          <span className='input-text'>Month</span>
          <input
            type='number'
            id='month'
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
          <p>
            <small className='error-month'>{error}</small>
          </p>
        </div>
        <div className='input-container'>
          <span className='input-text'>Year</span>
          <input
            type='number'
            id='year'
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <p>
            <small className='error-year'>{error}</small>
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
            {result && result.years}
          </label>
          year
        </h1>

        <h1>
          <label
            htmlFor='month'
            className='output-month'
          >
            {result && result.months}
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
