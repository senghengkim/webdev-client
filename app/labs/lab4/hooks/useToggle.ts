import { useState } from "react";

export default function useToggle(initial = false) {
    const [on, setOn] = useState(initial);
    const toggle = () => setOn((current) => !current);
    return [on, toggle] as const;
}