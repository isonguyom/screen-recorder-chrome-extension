import { useState } from "react"

/* eslint-disable react/prop-types */
function Toggle({ toggled, onClick }) {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label className='toggle'>
            <input className='toggle-checkbox' type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className='toggle-span' />
        </label>
    )
}

export default Toggle