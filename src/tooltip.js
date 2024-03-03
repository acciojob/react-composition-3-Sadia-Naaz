
import React, { useState } from "react";

 
 export const Tooltip = ({text,children})=>{

  const [showtooltip,setshowTooltip]=useState(false);
const show=()=>{
  setshowTooltip(true);
}
const hide=()=>{
  setshowTooltip(false);
}


return<>
{showtooltip && <div className="tooltip">
  <b className="tooltiptext">{text}</b>
  </div>}
  <div onMouseEnter={show} onMouseLeave={hide}>
  {children}
  </div>
  </>
}
