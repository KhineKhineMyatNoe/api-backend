import { questionApi } from "./question";

test("Testing question API", () => {
  return questionApi().then((data) => {
    expect(data[0].id).toBe(1);
  });
});
