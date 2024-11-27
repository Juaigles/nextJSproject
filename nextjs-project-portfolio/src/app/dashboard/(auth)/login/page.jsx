"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Loading } from "@/components/Loading/Loading";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <Loading></Loading>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.centerDiv}>

      <div className={styles.container}>
        <h1 className={styles.title}>{success ? success : "¡Bienvenido!"}</h1>
        <h2 className={styles.subtitle}>Por favor inicia sesión para poder ver el Dashboard.</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
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
        </form>
        <button className={styles.button}>Iniciar Sesión</button>
        {error && error}
        <button
          onClick={() => {
            signIn("google");
          }}
          className={styles.button + " " + styles.google}
        >
          Inicia sesión con Google
        </button>
        <div className={styles.links}>
          <div className={styles.linksCentered}>

          <span className={styles.or}>- O -</span>
          <Link className={styles.link} href="/dashboard/register">
            Crear nueva cuenta
          </Link>
          </div>
        </div>
        {/* <button
        onClick={() => {
          signIn("github");
          }}
          className={styles.button + " " + styles.github}
          >
          Login with Github
          </button> */}
      </div>
    </div>
  );
};

export default Login;