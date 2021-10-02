import { Triangle } from "./triangle";

describe("Tests to determined whether or not a shape entered is a trinagle", ()=> {


    describe("Equalateral triangle", () => {
        test("All sides should be equal", () => {
            const triangle = new Triangle(2,2,2);
            expect(triangle.isEqualateral).toBe(true);
        });
        test("All sides should be equal with decimals", () => {
            const triangle = new Triangle(0.5,0.5,0.5);
            expect(triangle.isEqualateral).toBe(true);
        });
        test("Is not equalateral triangle", () => {
            const triangle = new Triangle(2,4,5);
            expect(triangle.isEqualateral).toBe(false);
        });

    })

    describe("Isoscelese triangle", () => {
        test("Two sides should be equal", () => {
            const triangle = new Triangle(5,5,2);
            expect(triangle.isIsosceles ).toBe(true);
        });
        test("Is not isocelese triangle ", () => {
            const triangle = new Triangle(5,5,5);
            expect(triangle.isIsosceles).toBe(false);
        });

    })

    describe("Scalene triangle", () => {
        test("All sides should not be equal", () => {
            const triangle = new Triangle(2,4,5);
            expect(triangle.isScalene).toBe(true);
        });
        test("Is not scalene triangle", () => {
            const triangle = new Triangle(2,2,2);
            expect(triangle.isScalene).toBe(false);
        });

    })


});