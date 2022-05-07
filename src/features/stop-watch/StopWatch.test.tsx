import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import StopWatch from "./StopWatch"

describe("<StopWatch />", () => {
  const getStartButton = () => screen.getByRole("button", { name: /start/i })
  describe("on initial load", () => {
    beforeEach(() => {
      render(<StopWatch />)
    })

    it("should render default timer as 0 minutes", () => {
      expect(screen.getByText("00:00.0")).toBeInTheDocument()
    })

    it("should render start green button", () => {
      const startButton = getStartButton()
      expect(startButton).toBeInTheDocument()
      expect(startButton).toHaveStyle({ "background-color": "greenyellow" })
    })

    it("should render stop red button", () => {
      const stopbutton = screen.getByRole("button", { name: /stop/i })
      expect(stopbutton).toBeInTheDocument()
      expect(stopbutton).toHaveStyle({"background-color": "red"})
    })
    it("should render reset blue button", () => {
      const resetButton = screen.getByRole("button", { name: /reset/i })
      expect(resetButton).toBeInTheDocument()
      expect(resetButton).toHaveStyle({"background-color": "aqua"})
    })
  })

  describe("on user interaction", () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    afterEach(() => {
      jest.runOnlyPendingTimers()
      jest.useRealTimers()
    })

    it.skip("should run one second after user clicks start", async () => {
      const user = userEvent.setup()
      render(<StopWatch />)
      await user.click(getStartButton())
      jest.advanceTimersByTime(1000)
      expect(screen.getByText("00:01:00")).toBeInTheDocument()
    })
  })
})