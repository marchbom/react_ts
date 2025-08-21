import React, { useState } from "react";

export default function Input() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <form className="m-2 flex flex-col gap-3">
        <h1 className="flex flex-col">
          Input : {formState.email} / {formState.password}
        </h1>
        <input
          className="border-1"
          type="text"
          name="email"
          value={formState.email}
          onChange={handleFormChange}
        />
        <input
          className="border-1"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleFormChange}
        />
      </form>
    </>
  );
}
