import { useState } from "react"
import FormsHeader from "./FormHeader"
import FormSwitch from "./FormSwitch"

function FormContainer() {
    const [displaySwitch, setDisplaySwitch] = useState("sign-up")

    const handleSwitch = (e) => {
        const name = e.target.getAttribute("name")

        if (name !== displaySwitch) {
            setDisplaySwitch(name)
        }
    }

    const loginUponSignUp = () => {
        setDisplaySwitch("sign-in")
    }

    return (
        <div id="forms-layout" className="table w-full h-full">
            <div id="forms-container" className="table-cell align-middle">
                <div id="forms-frame" className="m-auto w-min">
                    <FormsHeader handleSwitch={handleSwitch} />
                    <FormSwitch
                        loginUponSignUp={loginUponSignUp}
                        displaySwitch={displaySwitch} /></div></div></div>
    )
}

export default FormContainer