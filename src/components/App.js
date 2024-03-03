import { Tooltip } from "../tooltip"


const App = () => {
  return (
    <>
    <div>
        <Tooltip text={"This is a tooltip"}>
      
        <h2>Hover Over Me</h2> {/* children elements */}
        </Tooltip>
    </div>
    <div>
     <Tooltip text={"This is a tooltip"}>
     <p>Hover Over Me to see another tooltip</p> {/* children elements */}
     </Tooltip>
     </div>
     </>
  )
}

export default App
