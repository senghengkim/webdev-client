export default function VariablesAndConstants() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    const sampleSum = functionScoped + blockScoped;
    var functionScoped2 = 10;
    let blockScoped2 = 15;
    const constant2 = functionScoped2 - blockScoped2;
    return (
        <div id="wd-variables-and-constants">
            <h4>Variables and Constants</h4>
            functionScoped = {functionScoped} <br />
            blockScoped = {blockScoped}       <br />
            constant1 = {constant1}           <br />
            sampleSum = {sampleSum}
            <hr />
            <h4>Variables and Constants 2</h4>
            functionScoped2 = {functionScoped2} <br />
            blockScoped2 = {blockScoped2}       <br />
            constant2 = {constant2}
        </div>
    );
}