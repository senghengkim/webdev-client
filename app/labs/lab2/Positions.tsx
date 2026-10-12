export default function Positions() {
    return (
        <div id="wd-css-positions">
            <h2>Positions</h2>

            <div id="wd-css-position-relative">
                <h2>Relative</h2>
                <div className="wd-bg-color-gray">
                    <div className="wd-bg-color-yellow wd-dimension-portrait">
                        <div className="wd-pos-relative-nudge-down-right">
                            Portrait
                        </div>
                    </div>

                    <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
                        Landscape
                    </div>

                    <div className="wd-bg-color-red wd-dimension-square">
                        Square
                    </div>

                    <div className="wd-pos-relative-nudge-down-right wd-bg-color-yellow wd-dimension-square">
                        Extra relative box
                    </div>

                    <div
                        id="wd-ai-relative"
                        className="wd-ai-pos-relative-nudge wd-bg-color-yellow wd-dimension-square"
                    >
                        AI relative nudge
                    </div>

                    <div
                        className="wd-bg-color-gray wd-dimension-portrait"
                        style={{ position: "relative" }}
                    >
                        <div
                            className="wd-bg-color-yellow wd-dimension-square"
                            style={{
                                position: "absolute",
                                bottom: "0px",
                                left: "0px",
                            }}
                        >
                            Absolute bottom-left
                        </div>
                    </div>
                </div>
            </div>

            <div id="wd-css-position-absolute">
                <h2>Absolute position</h2>

                <div className="wd-pos-relative" style={{ height: 200 }}>
                    <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
                        Portrait
                    </div>

                    <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
                        Landscape
                    </div>

                    <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
                        Square
                    </div>

                    <div
                        id="wd-ai-absolute"
                        className="wd-ai-pos-absolute-br wd-bg-color-yellow wd-dimension-square"
                    >
                        Absolute bottom-right
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br />
            </div>
            <div id="wd-css-position-fixed">
                <h2>Fixed position</h2>
                Checkout the blue square that says &quot;Fixed position&quot; stuck all the way
                on the right and half way down the page. It doesn&apos;t scroll with the
                rest of the page. Its position is &quot;Fixed&quot;.
                <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
                    Fixed position
                </div>
            </div>
            <div
                id="wd-custom-fixed"
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "purple",
                    color: "white",
                    padding: "10px",
                    zIndex: 1000,
                }}
            >
                Fixed Badge
            </div>
            <div
                id="wd-ai-fixed"
                className="wd-ai-pos-fixed wd-bg-color-red wd-fg-color-white"
            >
                AI fixed
            </div>
        </div>
    );
}