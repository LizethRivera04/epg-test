import { describe, expect, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import { ShowList } from "../../src/components/ShowList";

describe("Test in <ShowList/>", () => {
  const events = [
    {
      name: "The Mentalist",
      date_begin: "2021/08/13 18:02:56",
      date_end: "2021/08/13  19:02:56",
    },
    {
      name: "The Big Bang Theory",
      date_begin: "2021/08/13 19:02:56",
      date_end: "2021/08/13 20:02:56",
    },
  ];
  const setShowDetail = jest.fn();
  test("should to show a Show list", () => {
    render(<ShowList events={events} setShowDetail={setShowDetail} />);

    expect(screen.getAllByText("The Mentalist")).toBeTruthy();
    expect(screen.getAllByText("The Big Bang Theory")).toBeTruthy();
    expect(screen.getAllByText("19:02")).toBeTruthy();
    expect(screen.getAllByText("20:02")).toBeTruthy();
  });

  test("should to call setShowModal function", () => {
    render(<ShowList events={events} setShowDetail={setShowDetail} />);
    const divShow = screen.getAllByLabelText("div-show");

    fireEvent.mouseEnter(divShow[0]);
    expect(setShowDetail).toHaveBeenCalled();
    expect(setShowDetail).toHaveBeenCalledWith({
      show: true,
      event: events[0],
    });
  });
});
