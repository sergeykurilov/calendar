import Layout from '../components/Layout'
import Image from 'next/image'
import classes from "../styles/main.module.scss"
import React from "react";
import {Calendar} from "../components/Calendar/Calendar";


const IndexPage = () => {

    return (
        <Layout title="Home | RDevs">
            <section className={classes.main}>
                <div className={classes.mainBlocks}>
                    <div className={classes.content}>
                        <Image
                            alt="Mountains"
                            src="/artboard.png"
                            width={700}
                            priority={false}
                            height={475}
                            className={classes.image}
                        />
                        <div className="text-content">
                            <h1>Choose the day for the meeting</h1>
                            <p>We encourage you to book your appointment online. This will save you time.</p>
                        </div>
                    </div>
                    <Calendar/>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage
