"use client";

import { UXButton, UXInput } from "@/shared";
import { useState } from "react";
import { fetchLoginUser } from "./api/fetch-login-user.jsx";
export function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (value) => {
    if (value.length > 20) return;
    else setPassword(value);
  };
  const handleName = (value) => {
    if (value.length > 30) return;
    else setName(value);
  };

  async function createNewUser(formData) {
    try {
      formData.preventDefault;
      const name = formData.get("name");
      const password = formData.get("password");
      const response = await fetchLoginUser(name, password);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <form action={createNewUser}>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-2xl">login</label>
        <UXInput
          value={name}
          onChange={(e) => handleName(e.target.value)}
          name="name"
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-2xl">Password</label>
        <UXInput
          type="password"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          name="password"
        />
      </div>
      <UXButton color="sky" variant="primary" size="medium" type="submit">
        login
      </UXButton>
    </form>
  );
}
