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
      </div>
    </div>
  );
};

export { MyApp };
