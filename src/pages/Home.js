import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col gap-16 px py-16">
            <div className="flex flex-col gap-4">
                <h1>Let's Build Your New Curriculam Vitai</h1>
                <p className="text-xl">A platform for build and publish your CV in a easy way without paying money.</p>

            </div>
            <Link to="/builder"><button className="button">Let's Begin</button></Link>
            <p className="text-lg">A project by <a href="https://www.theshawa.cf/about" className="font-bold hover:text-primary" rel="noreferrer" target="_blank">Theshawa Dasun</a></p>
        </div>
    );
}

export default Home;