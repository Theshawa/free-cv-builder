import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col gap-16 px py-16">
            <div className="flex flex-col gap-4">
                <h1 className="mb-4 text-primary">FREE CV BUILDER</h1>
                <h2>Let's Build Your New Curriculam Vitai</h2>
                <p className="text-lg max-w-3xl">This is a platform for build and publish your CV in a easy way without paying money. All you have to do is fill necessary fields, save and publish 😄. </p>
                <Link to="/builder" className="w-max mt-4"><button className="button">Get Started</button></Link>
            </div>

            <div className="flex flex-col gap-4">
                <h2>Features</h2>
                <div className="flex flex-col gap-2">
                    <p>- Much variety of Fields</p>
                    <p>- Easy building process </p>
                    <p>- Cutom theme(colors)</p>
                    <p>- Free publishing</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p>Please feel free to give me your <a href="https://www.theshawa.cf/portfolio/free-cv-builder" target="_blank" rel="noreferrer" className="text-primary">feedback</a> on this project.</p>
                <p className="">A project by <a href="https://www.theshawa.cf/about" className="font-bold hover:text-primary" rel="noreferrer" target="_blank">Theshawa Dasun</a></p>
            </div>
            <div className="text-sm flex flex-col gap-2">
                <p>&copy; All copyrights reserved for CV publishers.</p>
                <p>2021 Oct</p>
            </div>
        </div>
    );
}

export default Home;