import React, { useState, useEffect, useRef } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "@/graphql/queries";
import Header from "@/components/Header/Header";
import styles from "./../styles/Slug.module.css";
import Image from "next/image";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default function Post({ post }) {
  const [linkColor, setLinkColor] = useState("white"); // State to handle link color
  const containerSlideRef = useRef(null); // Ref for the observed div
  const containerSlideRef1 = useRef(null); // Ref for the observed div

  useEffect(() => {

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLinkColor("#26BBDC"); // Change to new color when intersecting
          } else {
            setLinkColor("white"); // Revert to original color when not intersecting
          }
        });
      },
      { threshold: 0.9 }
    );

    // Observing the ref
    if (containerSlideRef.current) {
      observer.observe(containerSlideRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (containerSlideRef.current) {
        observer.unobserve(containerSlideRef.current);
      }
    };
  }, []);

  const images = post.urls;

  return (
    <>
      <Header
        backgroundColor="transparent"
        linkColor={linkColor}
        iconAirbus="white"
      />
      <div className={styles.Container} ref={containerSlideRef1}>
        <h1 className={styles.h1Class}>{post.entreprise}</h1>
        <Image
          src={`http://localhost:1337${post.urls[0]}`}
          className={styles.responsiveImage}
          sizes="100vw"
          width={700}
          height={700}
          alt="Picture of the author"
        />
      </div>
        {images.slice(1).map((val, index) => {
          const imageUrl = `http://localhost:1337${val}`;
          return (
            <div key={index} ref={containerSlideRef} className={styles.ContainerSlide}>
              <Image
                src={imageUrl}
                className={styles.responsiveImage}
                sizes="100vw"
                width={700}
                height={700}
                alt="Picture of the author"
              />
            </div>
          );
        })}
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SLUGS });
  const paths = data.realisations.data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_POST,
    variables: { slug: params.slug },
  });

  const attrs = data.realisations.data[0].attributes;
  const url = attrs.travaux.data.map((travail) => travail.attributes.url);

  return {
    props: {
      post: {
        entreprise: attrs.entreprise,
        date: attrs.date,
        urls: url,
      },
    },
  };
}
