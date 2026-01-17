"use client";

import { UXButton, UXInput } from "@/shared";
import { useState } from "react";
import { fetchCreateNewUser } from "./api/fetch-create-new-user";
import { useRouter } from "next/navigation";

export function RegistrationForm({ role }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handlePassword = (value) => {
    if (value.length > 20) return;
    else setPassword(value);
  };
  const handleName = (value) => {
    if (value.length > 30) return;
    else setName(value);
  };

  const handleEmail = (value) => {
    if (value.length > 30) return;
    else setEmail(value);
  };

  async function createNewUser(formData) {
    try {
      formData.preventDefault;
      const name = formData.get("name");
      const password = formData.get("password");
      const email = formData.get("email");
      const response = await fetchCreateNewUser(name, email, password, role);
      console.log(response)
      if (role === "MANAGER") {
        router.push(`/restaurants/${name}/admin`);
      } else if (role === "CLIENT") {
        const token = response.token;
        sessionStorage.setItem("clientAuthToken", token);
        router.refresh()
      }
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }
  console.log(role)
  return (
    <form action={createNewUser}>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-2xl">{role === "MANAGER"? "Restaurant's name" : "login"}</label>
        <UXInput
          value={name}
          onChange={(e) => handleName(e.target.value)}
          name="name"
          required
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-2xl">Email</label>
        <UXInput
          type="email"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
          name="email"
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
        create
      </UXButton>
    </form>
  );
}
