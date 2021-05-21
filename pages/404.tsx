import Link from "next/link";
import classes from "../styles/error.module.scss"
import Layout from "../components/Layout";

export default function ErrorPage() {
    return (
        <Layout>
            <h1 className={classes.error}>Errror 404</h1>
            <p>Please <Link href={"/"}><a>go back</a></Link> to safety</p>
        </Layout>
    )
}
