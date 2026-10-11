export default function BackgroundColors() {
    return (
        <div id="wd-css-background-colors">
            <h2 className="wd-bg-color-blue wd-fg-color-white">
                Background color
            </h2>

            <p className="wd-bg-color-red wd-fg-color-black">
                This background of this paragraph is red but{" "}
                <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
            </p>

            <div className="wd-bg-color-yellow wd-fg-color-black">
                <h3>Yellow background with dark text</h3>
                <p>
                    This sample combines a yellow background with black text for
                    readable contrast.
                </p>
            </div>
            <div
                id="wd-ai-bg"
                className="wd-bg-color-yellow wd-fg-color-black"
            >
                <h3>Readable Color Combination</h3>
                <p>
                    A yellow background paired with black text provides a clear,
                    high-contrast example of CSS background and foreground colors.
                </p>
            </div>
        </div>
    );
}