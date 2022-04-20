import './StopWatch.css'

const StopWatch = (): JSX.Element => {
   return (
    <div className="stopwatch">
      <div className="watch-container">
        <span className="watch">01:00:00</span>
      </div>
      <div className="buttons-container">
        <button className="button start">Start</button>
        <button className="button stop">Stop</button>
        <button className="button reset">Reset</button>
      </div>
    </div >
  )
}

export default StopWatch