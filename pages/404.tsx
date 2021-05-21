import Link from "next/link";
import Layout from "../components/Layots/Layout";

export default function ErrorPage() {
    return (
        <Layout>
            <div className="container">
                <div className="err_page">

                    <div className="err_page_left">
                        <img className="img" style={{width: "360px", height: "250px"}}
                             src="https://github.com/abhinanduN/codepen/blob/master/err.png?raw=true" alt="bebe"/>
                    </div>
                    <div className="err_page_right">
                        <h1>404</h1>
                        <h4>OOPS. Looks like the page you're looking for no longer exists</h4>
                        <p>Don't worry. Since you're valuable to us we will bring you back to safety</p>
                        <Link href={"/"}>
                            <a>
                                <button className="err_btn">Back to home</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
