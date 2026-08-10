"use client";

import { useState } from "react";
import { createUserSchema } from "@monorepo-form-builder-trpc/utils";

import type { FormHTMLAttributes, SubmitEvent } from "react";
import axios from "axios";

export default function Home() {
  const [name, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: SubmitEvent) {
    setError("")
    setSuccess("")
    e.preventDefault();

    const result = createUserSchema.safeParse({
      name,
      email,
      password,
    });

    if (!result.success) {
      const message = result.error.issues
        .map((issue) => issue.message)
        .join(",");

      setError(message);
    }

    try {
      const response = await axios.post("http://localhost:5000/users" , result.data)
      setSuccess("User created successfully")
    } catch (error) {
      setError("Some error ocurred")
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit} noValidate={true}>
        <input
          type="text"
          placeholder="Hasan"
          value={name}
          onChange={(e) => setUname(e.target.value)}
        />

        <input
          type="email"
          placeholder="hasan@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p> {error} </p>}
        {success && <p> {success} </p>}

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
