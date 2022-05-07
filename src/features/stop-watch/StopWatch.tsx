import { useEffect, useState } from "react"

const watchConstainerStyle = {
  margin: "2rem"
}

const watchStyle = {
  fontSize: "6rem"
}

const buttonsContainer = {
  margin: "2rem"
}

const buttonStyle = {
  padding: "0.8rem",
  margin: "0 1rem",
  minWidth: "6rem",
  fontSize: "2rem",
  border: "none",
  borderRadius: "10px",
}

const startButtonStyle = {
  backgroundColor: "greenyellow"
}

const stopButtonStyle = {
  backgroundColor: "red"
}

const resetButtonStyle = {
  backgroundColor: "aqua"
}

const StopWatch = (): JSX.Element => {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  const handleStartClick = () => {
    setRunning(true)
  }

  const handleStopClick = () => {
    setRunning(false)
  }

  const handleResetClick = () => {
    setRunning(false)
    setTime(0)
  }

  useEffect(() => {
    let interval = setInterval(() => {})
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100)
      }, 100)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])

  const minutesToDisplay = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
  const secondsToDisplay = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
  const milisecondsToDisplay = ((time / 10) % 100).toString()

  return (
    <div className="stopwatch">
      <div style={watchConstainerStyle}>
        <span style={watchStyle}>{minutesToDisplay}:{secondsToDisplay}.{milisecondsToDisplay}</span>
      </div>
      <div style={buttonsContainer}>
        <button style={{...buttonStyle, ...startButtonStyle}} onClick={handleStartClick}>Start</button>
        <button style={{...buttonStyle, ...stopButtonStyle}} onClick={handleStopClick}>Stop</button>
        <button style={{...buttonStyle, ...resetButtonStyle}} onClick={handleResetClick}>Reset</button>
      </div>
    </div >
  )
}

export default StopWatch