"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Loading } from "@/components/Loading/Loading";

const Dashboard = () => {

  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  const session = useSession();


  const router = useRouter();

  useEffect(()=>{
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  },[session.status, router])
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );





  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
  
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Añadir un nuevo post</h1>
          <input type="text" placeholder="Titulo" className={styles.input} />
          <input type="text" placeholder="Descripción" className={styles.input} />
          <input type="text" placeholder="Imagen url" className={styles.input} />
          <textarea
            placeholder="Contenido"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <div className={styles.centeredButton}>

          <button className={styles.button}>Enviar</button>
          </div>
        </form>
        <div className={styles.posts}>
          <h2 className={styles.title}> Tus publicaciones:</h2>
          {isLoading
            ? <Loading></Loading>
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image className={styles.img} src={post.img} alt="" width={200} height={100} />
                  </div>
                  <div className={styles.contentPost}>

                  <h2 className={styles.postTitle}>{post.title}</h2>
                 <div className={styles.deleteButtonDiv}>

                 <button className={styles.deletebutton}>

                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                    >
                    X
                  </span>
                      </button>
                    </div>
                      </div>
                </div>
              ))}
        </div>
      </div>
    );
  }
};

export default Dashboard;