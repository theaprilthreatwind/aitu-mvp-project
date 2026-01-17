"use client";

import { UXButton, UXInput } from "@/shared";
import { useState } from "react";
import { fetchLoginUser } from "./api/fetch-login-user.js";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
      const { role, token } = response;
      console.log(response);
      console.log(token);
      console.log({ oldAuthToken: sessionStorage.getItem(token) });
      if (sessionStorage.getItem(token)) {
        console.log("asdlfkaf;");
        sessionStorage.clear();
      }
      sessionStorage.setItem("MangerauthToken", token);
      router.refresh();
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
          required
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-2xl">Password</label>
        <UXInput
          type="password"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          name="password"
          required
        />
      </div>
      <UXButton color="sky" variant="primary" size="medium" type="submit">
        login
      </UXButton>
    </form>
  );
}
