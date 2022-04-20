import { render, screen } from "@testing-library/react"
import StopWatch from "./StopWatch"

describe("<StopWatch />", () => {
  beforeEach(() => {
    render(<StopWatch />)
  })
  it("should render default timer as 1 minute", () => {
    expect(screen.getByText("01:00:00")).toBeInTheDocument()
  })

  it("should render start green button", () => {
    const startButton = screen.getByRole("button", { name: /start/i })
    expect(startButton).toBeInTheDocument()
    expect(startButton).toHaveStyle({"background-color": "greenyellow"})
  })
  it("should render stop red button", () => {
    const stopbutton = screen.getByRole("button", { name: /stop/i })
    expect(stopbutton).toBeInTheDocument()
    expect(stopbutton).toHaveStyleRule("background-color", "red")
  })
  it("should render reset blue button", () => {
    const resetButton = screen.getByRole("button", { name: /reset/i })
    expect(resetButton).toBeInTheDocument()
    expect(resetButton).toHaveStyleRule("background-color", "blue")
  })
})