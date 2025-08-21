import { useState } from "react";

export default function TextArea() {
  // const [text, setText] = useState("");
  // const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setText(e.target.value);
  // };

  const [formState, setFormState] = useState({
    desc: "",
    introduce: "",
  });

  const handleStateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <textarea
        name="desc"
        value={formState.desc}
        onChange={handleStateChange}
      />
      <p>입력된 텍스트 : {formState.desc}</p>

      <textarea
        name="introduce"
        value={formState.introduce}
        onChange={handleStateChange}
      />
      <p>입력된 텍스트 : {formState.introduce}</p>
    </>
  );
}
