import "./../styles/notfound.css";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin" />
        <div className="far">0</div>
        <div className="err2">4</div>
        <div className="msg">
          Esta pagina no existe
          <p>
            Ve a <a href="/">home</a> y intentalo nuevamente.
          </p>
        </div>
      </div>
    </>
  )
}

export default NotFound