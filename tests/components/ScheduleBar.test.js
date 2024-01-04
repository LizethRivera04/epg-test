import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { ScheduleBar } from "../../src/components/ScheduleBar";

describe("Test in <ScheduleBar/>", () => {
  const channels = [
    {
      number: 3,
      name: "CANAL 3 GT",
      events: [
        {
          date_begin: "2021/08/12 20:02:56",
          date_end: "2021/08/12 21:02:56",
        },
      ],
    },
    {
      number: 2005,
      name: "ATRESCINE",
      events: [
        {
          date_begin: "2021/08/13 18:02:56",
          date_end: "2021/08/13  19:02:56",
        },
        {
          date_begin: "2021/08/13 19:02:56",
          date_end: "2021/08/13 20:02:56",
        },
      ],
    },
  ];
  test("should to show a schedule list", () => {
    render(<ScheduleBar channels={channels} />);
    expect(screen.getAllByText("20:02")).toBeTruthy();
    expect(screen.getByText("19:02")).toBeTruthy();
  });
});
