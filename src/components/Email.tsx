import React, { useRef, useState } from "react";
import ReactDOM from 'react-dom'
import TextInput from "@components/TextInput";
import Modal from "@components/Modal";
import emailjs from "@emailjs/browser";

const Email: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const emailSend: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(email);
    // console.log(message);
    setLoading(true);
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        formRef.current as HTMLFormElement,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          setLoading(false);
          setOpenModal(true);
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

  // const emailSend: React.FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setOpenModal(true);
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   }, 3000);
  // };

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
            placeholder="Your name"
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
            placeholder="message"
            maxRow={3}
            value={message}
            setInput={setMessage}
          />
        </div>
      </form>
      <button
        className={`flex justify-center items-center p-2 my-3 text-xl bg-orange-400 rounded-md hover:bg-orange-500 active:bg-orange-600`}
        type="submit"
        form="contactme"
      >
        <svg
          className={`${loading ? "animate-spin" : "hidden"} w-5 h-5 mr-3`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z" />
        </svg>
        Send
      </button>
      {openModal && ReactDOM.createPortal(<Modal setOpenModal={setOpenModal}/>, document.getElementById("email-modal")!)}
    </div>
  );
};

export default Email;
