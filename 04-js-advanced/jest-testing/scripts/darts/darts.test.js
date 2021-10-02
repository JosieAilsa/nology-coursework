import { exportAllDeclaration } from "@babel/types";
import { findScore } from "./darts.js";

describe('Darts', () => {
    test("Missed the target", () => {
        expect(findScore(-9,9)).toEqual(0);
    });
    test("Missed the target", () => {
        expect(findScore(-9,9)).toEqual(0);
    });
    test("Outer circle", () => {
        expect(findScore(0,10)).toEqual(1);
    });
    test("Inner circle", () => {
        expect(findScore(-3,3)).toEqual(5);
    });
    test("Bullseye", () => {
        expect(findScore(0,0)).toEqual(10);
    });
    test('Invalid input', () => {
        expect(findScore("a",0)).toEqual(null);
    });
})
