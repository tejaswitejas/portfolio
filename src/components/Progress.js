import React from "react";

function Progress(props){
    const [style, setStyle] = React.useState({});
    setTimeout(() => {
        const newStyle = {
            opacity : 1,
            width : props.done + "%"
        }
        setStyle(newStyle)
    }, 500);
    return(
        <div className="progress">
        <div className="progress-done" style={style}>
        <span style={{fontSize:"12px"}}> {props.done}%</span>
        </div>
      </div>
    )
  }

export default Progress;