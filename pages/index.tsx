import Layout from '../components/Layots/Layout'
import classes from "../styles/pages/main/main.module.scss"
import React from "react";
import {Calendar} from "../components/Calendar/Calendar";


const IndexPage = () => {
    return (
        <Layout title="Home | RDevs">
            <section className={classes.main}>
                <div className={classes.mainBlocks}>
                    <div className={classes.content}>
                        <img className={classes.image} style={{width: "700px", height: "475px"}}
                             alt="Mountains"  src="/images/artboard.png"/>
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
