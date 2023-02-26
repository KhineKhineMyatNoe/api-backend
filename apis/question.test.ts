import { createQuestionApi, questionApi } from "./question";

test("Testing question API", () => {
  return questionApi().then((data) => {
    expect(data[0].id).toBe(1);
  });
});

test("Testing create API", async () => {
  const result = await createQuestionApi({
    answer: "a",
    choices: {
      a: "answer a",
      b: "answer b"
    },
    question: "testing question"
  });
  expect(result.attributes.question).toBe("testing question");
})
