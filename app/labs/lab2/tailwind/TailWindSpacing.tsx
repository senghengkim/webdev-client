export default function TailwindSpacing() {
    return (
        <div>
            <h2 className="text-3xl">Margin</h2>
            <div className="bg-blue-200 mb-4 p-4">
                This div has a bottom margin of 4.
            </div>
            <div className="bg-blue-200 ms-4 me-8 p-4">
                This div has a start margin of 4 and an end margin of 8.
            </div>
            <h2 className="text-3xl mt-8">Padding</h2>
            <div className="bg-green-200 ps-2 pt-4 pb-8 mb-4">
                This div has starting padding of 2, top padding of 4, and bottom padding of 8.
            </div>
            <div className="bg-green-200 p-6">This div has padding all around of 6.</div>
            <div className="bg-purple-200 mt-8 ms-6 ps-8 pb-6 p-4">
                This box has a top margin of 8, a start margin of 6, starting padding of 8, and bottom padding of 6.
            </div>
            <div id="wd-ai-spacing" className="bg-purple-200 mt-6 ps-8 pb-4">
                This box has a top margin of 6, starting padding of 8, and bottom padding of 4.
            </div>
        </div>
    );
}