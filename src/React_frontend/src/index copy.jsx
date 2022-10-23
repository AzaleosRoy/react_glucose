import * as React from "react";
import { render } from "react-dom";
// import { custom_greeting } from "../../declarations/custom_greeting";
import { React_backend } from "../../declarations/React_backend";
import { createRoot } from 'react-dom/client';

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await React_backend.greet(name);
    setMessage(greeting);
  }

  return (
    <div style={{ "fontSize": "30px" }}>
      <div style={{ "backgroundColor": "yellow" }}>
        <p>Greetings, from DFINITY!</p>
        <p>
          {" "}
          Type your message in the Name input field, then click{" "}
          <b> Get Greeting</b> to display the result.
        </p>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doGreet}>Get Greeting!</button>
      </div>
      <div>
        Greeting is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div>
    </div>
  );
};

// render(<MyHello />, document.getElementById("app"));

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<MyHello tab="app" />);









// // document.querySelector("form").addEventListener("submit", async (e) => {
// //   e.preventDefault();
// //   const button = e.target.querySelector("button");

// //   const name = document.getElementById("name").value.toString();

// //   button.setAttribute("disabled", true);

// //   // Interact with foo actor, calling the greet method
// //   const greeting = await React_backend.greet(name);

// //   button.removeAttribute("disabled");

// //   document.getElementById("greeting").innerText = greeting;

// //   return false;
// // });
