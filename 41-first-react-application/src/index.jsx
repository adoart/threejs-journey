import {createRoot} from 'react-dom/client'
import App from "./App.js";
import './style.css'

const root = createRoot(document.querySelector('#root'))

const toto = 'there'

// root.render(<>
//     <h1 style={{color : 'coral', backgroundColor : 'floralwhite'} }>
//         Hello {toto}
//     </h1>
//     <p className="cute-paragraph">Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit.</p>
//     <input type="checkbox" id="id-checkbox"/>
//     <label htmlFor="id-checkbox">Checkbox</label>
// </>)

root.render(
    <div>
        <App clickersCount={3}>
            <h1>My first react application</h1>
            <h2>pretty cool... we click</h2>
        </App>
    </div>
)