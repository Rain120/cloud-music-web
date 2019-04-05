import React from "react";

function CustomizeTriangle(options: any) {}

function CustomizeSquare(options: any) {}

function CustomizeCircle(options: any) {
  let style = {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    ...options.style,
  };
  return (
    <span style={style} />
  )
}

export {
  CustomizeTriangle,
  CustomizeSquare,
  CustomizeCircle,
}
