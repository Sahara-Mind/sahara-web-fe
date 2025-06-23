"use client";
import { Title } from "rizzui/typography";
import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`hello, ${name}!`);
    setName("");
  };
  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name
          <br />
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>{" "}
        </label>
      </form>
      </div>
    </>
  );
}

function DailySchedule() {
  return (
    <>
      <div className="table w-full ...">
        <div className="table-header-group ...">
          <div className="table-row">
            <div className="table-cell text-left ..."><h1>Today's Schedule</h1></div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell ...">
              <h2>10:00 AM</h2>
            </div>
            <div className="table-cell ...">Malcolm Lockyer</div>
            <div className="table-cell ...">1961</div>
          </div>
          <div className="table-row">
            <div className="table-cell ...">Witchy Woman</div>
            <div className="table-cell ...">The Eagles</div>
            <div className="table-cell ...">1972</div>
          </div>
          <div className="table-row">
            <div className="table-cell ...">Shining Star</div>
            <div className="table-cell ...">Earth, Wind, and Fire</div>
            <div className="table-cell ...">1975</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default function Home() {
  return (
    <>
      <Title>Welcome, User</Title>
    </>
  );
}
