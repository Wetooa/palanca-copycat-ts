import React from "react";
import { ImageRef } from "./ImageRefs";

type StudentFrameProps = {
  label: string;
  value: string;
  nickname: string;
};

function StudentFrame(student: StudentFrameProps) {
  const cleanName: string = student.label
    .trim()
    .replaceAll(" ", "")
    .replaceAll("ñ", "n");
  return (
    <>
      <div className="w-52 h-80 flex flex-col gap-2">
        <div className="w-52 h-52">
          <img
            className="transition ease-in duration-300 w-full h-full grayscale hover:grayscale-0 rounded-full"
            src={ImageRef[cleanName]}
            alt="Face"
          />
        </div>

        <div className="">
          <p className="font-bold text-lg">{student.value}</p>
          <p className="text-xs">
            {student.nickname.length < 30
              ? student.nickname
              : `${student.nickname.slice(0, 30)}...`}
          </p>
        </div>
      </div>
    </>
  );
}

export default StudentFrame;
