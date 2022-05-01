import React, { useRef, useState } from "react";
import TextInput from "./TextInput";
import emailjs from "@emailjs/browser";

const Email: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const emailSend: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(email);
    // console.log(message);
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        formRef.current as HTMLFormElement,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="w-4/5 lg:w-full max-h-96 flex flex-col">
      <form
        className="h-full"
        id="contactme"
        onSubmit={emailSend}
        ref={formRef}
      >
        <div className="grid gap-3 grid-cols-1 grid-rows-5 h-full">
          <TextInput
            id="name"
            name="name"
            placeholder="Sam"
            classes="row-span-1"
            type="input"
            value={name}
            setInput={setName}
          />
          <TextInput
            id="email"
            name="email"
            placeholder="example@email.com"
            classes="row-span-1"
            type="input"
            value={email}
            setInput={setEmail}
          />
          <TextInput
            id="message"
            name="message"
            classes="row-span-3"
            placeholder="hello ..."
            maxRow={3}
            value={message}
            setInput={setMessage}
          />
        </div>
      </form>
      <button
        className="p-2 my-3 text-lg bg-orange-400 rounded-md hover:bg-orange-500 active:bg-orange-600"
        type="submit"
        form="contactme"
      >
        Send
      </button>
    </div>
  );
};

export default Email;
