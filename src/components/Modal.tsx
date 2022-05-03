import React from "react";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ setOpenModal }) => {
  return (
    <div className="bg-black bg-opacity-50 inset-0 backdrop-blur-sm fixed top-0">
      <div className="bg-gray-600 w-[400px] h-full max-h-32 p-6 flex flex-col items-center justify-between absolute left-1/2 top-1/2 rounded-md animate-page-fade-in">
        <h1 className="text-center text-xl text-white">Email has been send</h1>
        <button className="w-full text-center bg-orange-400 p-2 rounded-lg hover:bg-orange-500 active:bg-orange-600" onClick={() => {
          setOpenModal(false);
        }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
