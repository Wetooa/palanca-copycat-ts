import React from "react";

import { ImageRef } from "./ImageRefs";

function Modal(targetedStudent: any) {
  const { label, value, section, nickname } = targetedStudent;
  const cleanName: string = label
    .trim()
    .replaceAll(" ", "")
    .replaceAll("ñ", "n");

  return (
    <div className="w-11/12 flex items-center justify-center absolute">
      <div className="w-full h-screen flex bg-gray-400">
        <div className="bg-gray-300 flex-1">
          <img src={ImageRef[cleanName]} alt="" />
          <h1>{value}</h1>
          <p>{nickname}</p>
        </div>
        <div className="flex-1">
          Anon<button></button>
          <input type="text" placeholder="Message" />
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
