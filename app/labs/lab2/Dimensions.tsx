export default function Dimensions() {
    return (
        <div id="wd-css-dimensions">
            <h2>Dimension</h2>
            <div>
                <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
                <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
                    Landscape
                </div>
                <div className="wd-dimension-square wd-bg-color-red">Square</div>
                <div className="wd-dimension-custom wd-bg-color-blue wd-fg-color-white">Testing Custom</div>
                <div id="wd-ai-dimension" className="wd-ai-dimension">
                    This is a long sentence demonstrating how text behaves inside a box with a fixed width of 120 pixels and a height of 60 pixels.
                </div>
                <br/>
                <br/>
            </div>
        </div>
    );
}