const MyApp = () => {
  return (
    <div className='container'>
      <div className='input-flex'>
        <div className='input-container'>
          <span>Day</span>
          <input
            type='number'
            id='day'
          />
          <p>
            <small className='error-day'></small>
          </p>
        </div>
        <div className='input-container'>
          <span>Month</span>
          <input
            type='number'
            id='month'
          />
          <p>
            <small className='error-month'></small>
          </p>
        </div>
        <div className='input-container'>
          <span>Year</span>
          <input
            type='number'
            id='year'
          />
          <p>
            <small className='error-year'></small>
          </p>
        </div>
      </div>
      <div className='button-content'>
        <button className='submit-btn'>
          <img
            src='/images/icon-arrow.svg'
            alt='arrow'
          />
        </button>
      </div>
      <div className='age-container'>
        <h1>
          <span className='output-day'> -- </span> day{' '}
        </h1>
        <h1>
          <span className='output-month'> -- </span> month{' '}
        </h1>
        <h1>
          <span className='output-year'> -- </span> year{' '}
        </h1>
      </div>
    </div>
  );
};

export { MyApp };
