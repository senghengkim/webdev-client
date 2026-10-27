import BoxDemo from "./BoxDemo";
import BoxModelDemo from "./BoxModelDemo";
import CardDemo from "./CardDemo";

export default function ChildrenPage() {
    return (
        <div id="wd-lab3-children" className="p-4">
            <h2>Children</h2>
            <p>Components can wrap and display other JSX as their children.</p>
            <CardDemo />
            <BoxDemo />
            <BoxModelDemo />
        </div>
    );
}
