import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import MessageFrame from "./components/MessageFrame";

function SentMessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/palanca/test"
        );
        console.log(data);

        setMessages(data.palancas);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  });

  return (
    <>
      <body className="m-8">
        <h1 className="text-5xl text-center font-semibold">
          Welcome, Adrian Sajulga
        </h1>
        <div className="mt-10 flex bg-white">
          {messages.map((message: any, index: number) => {
            return <MessageFrame key={index} {...message}></MessageFrame>;
          })}
        </div>
      </body>
    </>
  );
}

export default SentMessagesPage;
