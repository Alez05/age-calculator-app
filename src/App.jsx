import AgeCalculatorLogic from './script';

const MyApp = () => {
  const {
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    result,
    error,
    calculateAge,
  } = AgeCalculatorLogic();

  return (
    <main className='container'>
      <section className='input-flex'>
        <div className='input-container'>

          <span className={`input-text ${error.day ? 'error-text' : ''}`}>
            DAY
          </span>

          <input
            type='number'
            id='day'
            value={day}
            className={`${error.day ? 'error-input' : ''}`}
            onChange={(e) => setDay(e.target.value)}
            placeholder='DD'
          />
          <p className='error-day'>{error.day}</p>
        </div>

        <div className='input-container'>
          <span className={`input-text ${error.day ? 'error-text' : ''}`}>
            MONTH
          </span>

          <input
            type='number'
            id='month'
            className={`${error.day ? 'error-input' : ''}`}
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder='MM'
          />
          <p className='error-month'>{error.month}</p>
        </div>

        <div className='input-container'>
          <span className={`input-text ${error.day ? 'error-text' : ''}`}>
            YEAR
          </span>
          <input
            type='number'
            id='year'
            value={year}
            className={`${error.day ? 'error-input' : ''}`}
            onChange={(e) => setYear(e.target.value)}
            placeholder='YYYY'
          />
          <p className='error-year'>{error.year}</p>
        </div>
      </section>
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
        <div className='border-bottom'></div>
      </div>
      <div className='result-age'>
        <h1>
          <label
            htmlFor='year'
            className='output-year'
          >
            {result ? result.year : '- -'}
          </label>
          year
        </h1>

        <h1>
          <label
            htmlFor='month'
            className='output-month'
          >
            {result ? result.month : '- -'}
          </label>
          month
        </h1>

        <h1>
          <label
            htmlFor='day'
            className='output-day'
          >
            {result ? result.days : '- -'}
          </label>
          day
        </h1>
      </div>
    </main>
  );
};

export { MyApp };
