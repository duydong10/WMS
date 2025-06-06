// src/pages/ChangePassword.jsx
// --------------------------------------------------------
import { useState } from "react";
import SubmitAlert from "../components/SubmitAlert";
import { Button, Label, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import translations from "../components/Translations";

export default function ChangePassword() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");
  const [msgTimeout, setMsgTimeout] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.s;
    setMessage("Thay đổi thành công!");
    setMsgType("success");
    setMsgTimeout(true);
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };
  return (
    <article>
      <title>{translations[lang]["change_language"]}</title>
      <h1 className="text-2xl font-bold mb-4">
        {translations[lang]["change_language"]}
      </h1>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div className="flex w-full sm:w-2/3 md:w-1/2 flex-col gap-4">
            <Select
              onChange={(e) => {
                setLang(e.target.value);
                localStorage.setItem("lang", e.target.value);
              }}
            >
              <option value={"en"}>{translations[lang]["english"]}</option>
              <option value={"vi"}>{translations[lang]["vietnamese"]}</option>
            </Select>
          </div>
        </div>
        <div className="pt-4">
          <Button type="submit">Submit</Button>
        </div>
        <SubmitAlert
          message={message}
          msgType={msgType}
          msgTimeout={msgTimeout}
        />
      </form>
    </article>
  );
}
