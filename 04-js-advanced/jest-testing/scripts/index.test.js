import { getName } from "./index.js";

it("Should return the string'Sam, 22 years old.'", () => {
    const output = getName("Sam", 22);
    expect(output).toBe("Sam, 22 years old.");
});

it ("Should return the name followed by age", () => {
     const outputSecondTest = getName("Josie", 26);
    expect(outputSecondTest).toBe("Josie, 26 years old.") 
});