/* eslint-disable testing-library/no-unnecessary-act */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";
import Utils from "../utils/index";

describe("fetchData is called", () => {
  it("should call fetchData once", async () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    jest.spyOn(Utils, "fetchData");

    // await act(async () => render(<Home />));
    const container = document.createElement("div");
    act(() => {
      ReactDOM.render(<Home />, container);
    });
    expect(Utils.fetchData).toHaveBeenCalledTimes(1);
  });
  it("data array should have length", async () => {
    const data = await Utils.fetchData();
    expect(data).toHaveLength;
  });
});

// it("should call setstate", async () => {
//   const setStateMock = jest.fn();
//   const useStateMock: any = (useState: any) => [useState, setStateMock];
//   jest.spyOn(React, "useState").mockImplementation(useStateMock);

//   // eslint-disable-next-line testing-library/no-unnecessary-act
//   act(() => {
//     render(<Home />);
//   });

//   expect(setStateMock).toBeCalled();
// });
