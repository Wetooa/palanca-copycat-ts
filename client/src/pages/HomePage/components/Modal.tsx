import React from "react";
import { ImageRef } from "./ImageRefs";
import Thing from "../../../images/Thing.png";

type TargetedStudent = {
  label: string;
  value: string;
  section: string;
  nickname: string;
};

function Modal(targetedStudent: TargetedStudent) {
  const { label, value, section, nickname } = targetedStudent;
  const cleanName: string = label
    .trim()
    .replaceAll(" ", "")
    .replaceAll("ñ", "n");

  return (
    <div className="bg-white flex fixed bg-opacity-50 h-72 max-h-72 min-w-72 overflow-auto">
      <div className="flex-1 relative" style={{ backgroundImage: Thing }}>
        <img className="w-24 h-24" src={ImageRef[cleanName]} alt="" />
        <h1>{value}</h1>
        <p>{nickname}</p>
      </div>
      <div className="flex-1">
        Anon<button></button>
        <input type="text" placeholder="Message" />
        <button>Send Message</button>
      </div>
    </div>
  );
}

export default Modal;
