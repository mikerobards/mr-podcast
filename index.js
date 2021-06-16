import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
    return (
        <div>
            <ul>
                <li>React</li>
                <li>Vue</li>
                <li>Angular</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"))

