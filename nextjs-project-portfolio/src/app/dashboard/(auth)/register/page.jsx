"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/Loading/Loading";
import { useSession } from "next-auth/react";

const Register = () => {
  const session = useSession()
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  if (session.status === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className={styles.centered}>

      <div className={styles.container}>
        <h1 className={styles.title}>Crea tu cuenta</h1>
        <h2 className={styles.subtitle}>Por favor, registrate para poder ver el dashboard.</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Usuario"
            required
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Email"
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            className={styles.input}
          />
          <button className={styles.button}>Registrar</button>
          {error && "Something went wrong!"}
        </form>
        <div className={styles.links}>
          <div className={styles.linksCentered}>

            <span className={styles.or}>- O -</span>
            <Link className={styles.link} href="/dashboard/login">
              Inicia sesión con tu cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;