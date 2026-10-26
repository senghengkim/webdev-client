export default function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    const divide = (a: number, b: number) => a / b;

    const square = (n: number) => n * n;
    const squareNine = square(9);
    console.log(fourTimesFive);
    return (
        <div id="wd-implied-return">
            <h4>Implied return</h4>
            fourTimesFive = {fourTimesFive} <br />
            multiply(4, 5) = {multiply(4, 5)} <br />
            divide(20, 4) = {divide(20, 4)} <br />
            squareNine = {squareNine} <br />
            square(9) = {square(9)} <br />
            <hr />
        </div>
    );
}