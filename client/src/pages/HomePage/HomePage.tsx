import React from "react";
import { useState } from "react";

import axios from "axios";

import allStudents from "../../constants/students";
import allSections from "../../constants/sections";
import allEmails from "../../constants/emails";
import StudentFrame from "./components/StudentFrame";

function Homepage() {
  const [students, setStudents] = useState(allStudents);
  const [modal, setModal] = useState(false);

  const openModal = (e: any) => {
    setModal(true);
  };

  const handleTest = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/palanca/test"
      );
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleTest}>testing</button>
      <body className="justify-center">
        <p className="text-end mt-16 mr-10">Sign in via Google</p>
        <div className="text-center mt-20 flex flex-col gap-6 mx-16 text-sm">
          <h1 className="text-8xl font-bold">Dear kōhai,</h1>
          <p className="text-lg">
            As our journey in Pisay comes to an end, new frontiers await us in
            the next chapter of our lives. Feel free to send us messages of
            support for us to take in our future endeavors.
          </p>
          <p className="text-lg">“Lilipad at lalaban, gagawa ng kasaysayan”</p>
          <p className="text-lg">-Gayang Mingor</p>

          <div className="flex justify-center">
            <input
              placeholder="sige kinsa man..."
              className="pl-5 flex-grow ml-3 border border-gray-300 border-r rounded-l-full"
            />
            <button className="flex-grow bg-white w-10 h-10 rounded-r-full border border-gray-300">
              Section
            </button>
          </div>
          <div className="flex flex-wrap m-4 justify-evenly  gap-2">
            {students.map((student, index) => {
              return <StudentFrame key={index} {...student} />;
            })}
          </div>
        </div>
      </body>
    </>
  );
}

export default Homepage;
