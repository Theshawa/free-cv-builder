import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import db from "../firebase.config";

function Publish({ data, makeClear }) {
    const key = useRef()
    const [link, setLink] = useState(false)
    const [published, setPublished] = useState(false)
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    useEffect(() => {
        if (!published && !data) {
            history.push('/builder')
        }
    }, [data])
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        db.collection('cv').add(data).then(doc => {
            db.collection('key').doc(doc.id).set({ key: key.current.value }).then(() => {
                setPublished(true)
                setLink(`https://free-cvbuilder.web.app/view?id=${doc.id}`)
                makeClear()
                setLoading(false)
            })
        }).catch(err => {
            setLoading(false)
            alert('Unable to publish this cv. Please try again later.')
        })
    }
    return (
        <>
            {!published && <div className="w-full px py-16 flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <h1>Are you ready to publish your new CV ?</h1>
                    <p className="text-xl">Let's add a security key and finish this.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
                    <input ref={key} type="password" required className="input" placeholder="Enter key here" />
                    <button className="button">Publish</button>
                    <p className="opacity-80">Remember that this key cannot be changed once your publish this.</p>
                </form>
                {loading && <Loader />}
            </div>}
            {published && <div className="w-full px py-16 flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <h1>Your CV Published Successfully.</h1>
                    <p className="text-xl">Now anyone with this link can view or share your CV.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <button onClick={() => { navigator.clipboard.writeText(link); alert('Link copied to the clipboard.') }} className="p-4 b bg-light bg-opacity-40 w-max max-w-full break-all text-primary text-xl font-bold">
                        {link}
                    </button>
                    <p className="opacity-50">Click to Copy</p>
                </div>
                <a href={link} className="button">View Your New CV</a>
                <a href="https://www.theshawa.cf/contact" target="_blank" rel="noreferrer" className="text-primary opacity-80 hover:opacity-100">Say Thanks To Theshawa</a>
            </div>}
        </>
    );
}

export default Publish;