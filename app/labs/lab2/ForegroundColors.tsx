export default function ForegroundColors() {
    return (
        <div id="wd-css-colors">
            <h2>Colors</h2>
            <h3 className="wd-fg-color-blue">Foreground color</h3>
            <p className="wd-fg-color-red">
                The text in this paragraph is red but{" "}
                <span className="wd-fg-color-green">this text is green</span>
            </p>

            <p className="wd-fg-color-blue">
                CSS lets us color{" "}
                <span className="wd-fg-color-red">individual words</span>{" "}
                differently within the same sentence.
            </p>
            <p id="wd-ai-fg" className="wd-fg-color-blue">
                CSS foreground colors can{" "}
                <span className="wd-fg-color-black">
        highlight specific words
    </span>{" "}
                within a sentence.
            </p>
        </div>
    );
}