"use client";

import Link from "next/link";
import React , {useContext, useState} from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { ThemeContext } from "@/context/ThemeContext";

const links = [

  {
    id: 2,
    title: "Portafolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Acerca de",
    url: "/about",
  },
  {
    id: 5,
    title: "Contacto",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const {mode} = useContext(ThemeContext);

const toggleMenu = () => {
  setIsOpen(!isOpen)
}

  return (
    <div className={`${styles.container} ${mode === "dark" ? styles.dark : styles.light}`}>
      <Link href="/" className={styles.logo} onClick={() => isOpen && toggleMenu()}>
        Inicio
      </Link>
      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Abrir menú">☰</button>
      <div className={`${styles.links} ${isOpen ? (mode == "dark" ? styles.darkTheme : styles.lightTheme) :  ""}`}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} onClick={() => isOpen && toggleMenu()} className={styles.link}>
            {link.title}
            
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Cerrar Sesión
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;