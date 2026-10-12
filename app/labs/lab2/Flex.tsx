export default function Flex() {
    return (
        <div id="wd-css-flex">
            <h2>Flex</h2>

            <div className="wd-flex-row-container">
                <div className="wd-bg-color-yellow wd-width-110px">
                    Column 1
                </div>
                <div className="wd-bg-color-blue wd-fg-color-white">
                    Column 2
                </div>
                <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
                    Column 3
                </div>
            </div>

            <h3>Flex grow vs. fixed width</h3>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-yellow wd-fg-color-black wd-flex-grow-1">
                    Growing column
                </div>
                <div className="wd-bg-color-blue wd-fg-color-white wd-width-110px">
                    Fixed 110px
                </div>
            </div>
            <div id="wd-ai-flex" className="wd-flex-row-container">
                <div className="wd-width-110px wd-bg-color-yellow">
                    Fixed 110px
                </div>
                <div className="wd-bg-color-blue wd-fg-color-white">
                    Regular column
                </div>
                <div className="wd-flex-grow-1 wd-bg-color-red wd-fg-color-white">
                    Growing column
                </div>
            </div>
        </div>
    );
}