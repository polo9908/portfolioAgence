import React, { useState, useEffect } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from '@/graphql/queries'
import Header from '@/components/Header/Header';
import styles from "./../styles/Slug.module.css"
import ImageSlider from '@/components/Slider/Slider';

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
});

export default function Post({ post }) {

    const [h1Class, setH1Class] = useState(styles.largeTitle); // Initial class
    const headerBackgroundColor = "transparent";
    const linkColor = "white";
    const iconAirbus = "white";

    // Change class after the page has loaded
    useEffect(() => {
        setH1Class(styles.smallTitle);
    }, []);

    console.log(`http://localhost:1337${post.urls[0]}`);

    return (
        <>
            <Header backgroundColor={headerBackgroundColor} linkColor={linkColor} iconAirbus={iconAirbus}/>
            <div className={styles.Container}>
                <h1 className={h1Class}>{post.entreprise}</h1> 
                <div className={styles.ContainerSlide}>
                    <ImageSlider images={post.urls} />  
                </div>
            </div> 
        </>
    )
}

export async function getStaticPaths() {
    const { data } = await client.query({ query: GET_ALL_SLUGS });
    const paths = data.realisations.data.map((post) => {
        return { params: { slug: post.attributes.slug } }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { data } = await client.query({
        query: GET_INDIVIDUAL_POST,
        variables: { slug: params.slug }
    });

    const attrs = data.realisations.data[0].attributes;
    const url = attrs.travaux.data.map(travail => travail.attributes.url);
    return {
        props: {
            post: {
                entreprise: attrs.entreprise,
                date : attrs.date,
                urls: url,
            }
        }
    }
}

