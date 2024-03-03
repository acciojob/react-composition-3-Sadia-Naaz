import { Tooltip } from "../tooltip"


const App = () => {
  return (
    <>
    <div>
        <Tooltip text={"This is s tooltip"}>
        <p>Hover Over Me</p>
        </Tooltip>
    </div>
     <div>
     <Tooltip text={"This is s tooltip"}>
     <p>Hover Over Me to see another tooltip</p>
     </Tooltip>
 </div>
 </>
  )
}

export default App
