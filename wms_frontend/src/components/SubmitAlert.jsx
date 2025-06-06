// src/components/SubmitAlert.jsx
// --------------------------------------------------------
import { Alert } from "flowbite-react";

export default function SubmitAlert({ message, msgType, msgTimeout }) {
  return (
    <>
      <Alert
        color={
          msgType === "success"
            ? "success"
            : msgType === "failure"
            ? "failure"
            : "info"
        }
        className={`m-4 fixed top-1/12 -right-4 transition-transform duration-500 ease-in-out ${
          msgTimeout ? "-translate-x-4" : "translate-x-full"
        }`}
      >
        <div className={`flex flex-row items-center`}>
          <svg
            className="shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className="ml-3">
            <span>{message}</span>
          </div>
        </div>
      </Alert>
    </>
  );
}
