import React from "react";
import {
  render,
  fireEvent,
  getAllByPlaceholderText,
} from "@testing-library/react";
import Data from "./Data";

// Тесты инпутов на смену состояния

test("ввод возраста меняет состояние", () => {
  const onAgeChange = jest.fn();
  const { getAllByPlaceholderText } = render(
    <Data age={25} height={180} weight={70} onAgeChange={onAgeChange} />
  );
  const ageInputs = getAllByPlaceholderText("0");
  const ageInput = ageInputs[0];
  fireEvent.input(ageInput, { target: { value: "30" } });
  expect(onAgeChange).toHaveBeenCalledWith("30");
});

test("ввод роста меняет состояние", () => {
  const onHeightChange = jest.fn();
  const { getAllByPlaceholderText } = render(
    <Data age={25} height={180} weight={70} onHeightChange={onHeightChange} />
  );
  const heightInputs = getAllByPlaceholderText("0");
  const heightInput = heightInputs[1];
  fireEvent.input(heightInput, { target: { value: "190" } });
  expect(onHeightChange).toHaveBeenCalledWith("190");
});

test("ввод веса меняет состояние", () => {
  const onWeightChange = jest.fn();
  const { getAllByPlaceholderText } = render(
    <Data age={25} height={180} weight={70} onWeightChange={onWeightChange} />
  );
  const weightInputs = getAllByPlaceholderText("0");
  const weightInput = weightInputs[2];
  fireEvent.input(weightInput, { target: { value: "75" } });
  expect(onWeightChange).toHaveBeenCalledWith("75");
});

// Валидация
test("ввод возраста ограничивается максимальной длиной", () => {
  const onAgeChange = jest.fn();
  const { getAllByPlaceholderText } = render(
    <Data age={25} height={180} weight={70} onAgeChange={onAgeChange} />
  );
  const ageInputs = getAllByPlaceholderText("0");
  const ageInput = ageInputs[0];
  fireEvent.input(ageInput, { target: { value: "123" } });
  expect(onAgeChange).toHaveBeenCalledWith("12");
});

test("ввод роста ограничивается максимальным значением", () => {
  const onHeightChange = jest.fn();
  const { getAllByPlaceholderText } = render(
    <Data age={25} height={180} weight={70} onHeightChange={onHeightChange} />
  );
  const heightInputs = getAllByPlaceholderText("0");
  const heightInput = heightInputs[1];
  fireEvent.input(heightInput, { target: { value: "300" } });
  expect(onHeightChange).toHaveBeenCalledWith("");
});

test("ввод веса ограничивается максимальным значением", () => {
  const onWeightChange = jest.fn();
  const { getAllByPlaceholderText } = render(
    <Data age={25} height={180} weight={70} onWeightChange={onWeightChange} />
  );
  const weightInputs = getAllByPlaceholderText("0");
  const weightInput = weightInputs[2];
  fireEvent.input(weightInput, { target: { value: "200" } });
  expect(onWeightChange).toHaveBeenCalledWith("");
});
