import { render, fireEvent } from "@testing-library/react";
import Cabinet from "./Cabinet";

test("поведение компонента Cabinet при клике", () => {
  const { getAllByRole } = render(<Cabinet />);

  const cabinets = getAllByRole("button");

  const clickCabinet = (number) => {
    fireEvent.click(cabinets[number - 1]);
    return number;
  };

  let selectedCabinet = clickCabinet(1);
  expect(selectedCabinet).toBe(1);

  selectedCabinet = clickCabinet(30);
  expect(selectedCabinet).toBe(30);

  selectedCabinet = clickCabinet(50);
  expect(selectedCabinet).toBe(50);
});

test("проверка логики подсветки шкафов", () => {
  const { getAllByRole } = render(<Cabinet />);

  const cabinets = getAllByRole("button");

  fireEvent.click(cabinets[0]);

  expect(cabinets[99].style.backgroundColor).toBe("green");

  fireEvent.click(cabinets[99]);

  expect(cabinets[49].style.backgroundColor).toBe("green");
});
