
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
 
{showtooltip && 
  <b className="tooltiptext">{text}</b>
  }
  <div onMouseEnter={show} onMouseLeave={hide}>
  {children}
  </div>
  </>
}
