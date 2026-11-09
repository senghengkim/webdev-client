"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ContextProfileForm from "./context/ContextProfileForm";
import ZustandExamples from "@/app/labs/lab4/zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";

export default function Lab4() {
    const sayHello = (message: string) => alert(message);
    const sayMyName = () => alert("Hengkim Seng");
    const saySample = () => alert("Sample from parent");

    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>
            <hr />
            <ClickEvent />
            <hr />
            <PassingDataOnEvent />
            <hr />
            <PassingFunctions
                message="Hello from Lab 4"
                theFunction={sayHello}
                personalFunction={sayMyName}
                theOtherFunction={saySample}
            />
            <CounterBroken />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ProfileForm />
            <ParentStateComponent />
            <PropDrilling />
            <UrlEncoding />
            <ContextExamples />
            <ContextProfileForm />
            <ZustandExamples />
            <ReduxExamples />
            <Effect />
        </div>
    );
}