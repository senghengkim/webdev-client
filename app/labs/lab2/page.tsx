import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "@/app/labs/lab2/BackgroundColors";
import Borders from "@/app/labs/lab2/Borders";
import BoxModel from "@/app/labs/lab2/BoxModel";
import Margins from "@/app/labs/lab2/Margins";
import Padding from "@/app/labs/lab2/Padding";
import Corners from "@/app/labs/lab2/Corners";
import Dimensions from "@/app/labs/lab2/Dimensions";
import Display from "@/app/labs/lab2/Display";
import Positions from "@/app/labs/lab2/Positions";
import Zindex from "@/app/labs/lab2/Zindex";
import Float from "./Float";
import GridLayout from "@/app/labs/lab2/GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "@/app/labs/lab2/MediaQueriesDemo";
import ReactIconsSampler from "@/app/labs/lab2/ReactIconsSampler";

export default function Lab2() {
    return (
        <div id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p>
                Style attribute allows configuring look and feel right on the
                element. Although it&apos;s very convenient it is considered bad
                practice and you should avoid using the style attribute
            </p>
            <p style={{backgroundColor: "green", color: "yellow"}}>
                This is styling green and yellow
            </p>
            <p
                id="wd-ai-style-attr"
                style={{backgroundColor: "purple", color: "white"}}
            >
                This paragraph demonstrates a purple background with white text.
            </p>
            <div id="wd-css-id-selectors">
                <h3>ID selectors</h3>
                <p id="wd-id-selector-1">
                    Instead of changing the look and feel of all the
                    elements of the same name, e.g., P, we can refer to a
                    specific element by its ID
                </p>
                <p id="wd-id-selector-2">
                    Here&apos;s another paragraph using a different ID and a
                    different look and feel
                </p>
                <p id="wd-id-selector-3">
                    Here is another one that is different.
                </p>
                <p id="wd-ai-id-selector">
                    This sample demonstrates styling a paragraph using its unique ID.
                </p>
            </div>
            <div id="wd-css-class-selectors">
                <h3>Class selectors</h3>
                <p className="wd-class-selector">
                    Instead of using IDs to refer to elements, you can use an
                    element&apos;s CLASS attribute
                </p>
                <h4 className="wd-class-selector">
                    This heading has same style as paragraph above
                </h4>
            </div>
            <p className="wd-your-class">
                This paragraph shares a style with the heading below.
            </p>

            <h4 className="wd-your-class">
                Shared Class Heading
            </h4>
            <p className="wd-ai-class-selector">
                Sample paragraph using the AI class selector.
            </p>

            <h4 className="wd-ai-class-selector">
                Sample heading using the AI class selector
            </h4>
            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer elements in particular
                        places in the document
                        <p className="wd-ai-descendant">
                            This paragraph is a descendant inside wd-selector-2.
                        </p>
                        <p className="wd-selector-3">
                            This paragraph&apos;s red background is referenced as
                            <br/>
                            <span className="wd-ai-selector-5">
    This span demonstrates a descendant selector.
</span>
                            .wd-selector-1 .wd-selector-3
                            <br/>
                            meaning the descendant of some ancestor.
                            <br/>
                            <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
        </span>
                            <br/>
                            You can combine these relationships to create specific
                            styles depending on the document structure
                        </p>
                    </div>
                </div>
                <p id="wd-specificity" className="wd-specificity">
                    CSS specificity demonstration
                </p>
                <p id="wd-ai-cascade" className="wd-ai-cascade">
                    Sample paragraph demonstrating the CSS cascade.
                </p>
            </div>

            <ForegroundColors/>
            <BackgroundColors/>
            <Borders/>
            <Margins/>
            <Padding/>
            <BoxModel/>
            <Corners/>
            <Dimensions />
            <Display />
            <Positions />
            <Zindex />
            <Float />
            <GridLayout/>
            <Flex/>
            <MediaQueriesDemo />
            <ReactIconsSampler />
            <p>
                <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
            </p>
        </div>

    );
}