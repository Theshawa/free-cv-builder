import { useEffect, useState } from "react";
import { Link, useHistory,useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import db from "../firebase.config";
import Output from "./Builder/components/Output";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function View({makeTitle}) {
    const history = useHistory()
    const [data, setData] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(false)
    let query = useQuery();
    const id = query.get('id')
    const get_data = async ()=>{
        const doc  = await db.collection('cv').doc(id).get()
        if(doc.exists){
            return doc.data()

        }else{
            return false
        }
    }
    useEffect(() => {
        setLoading(true)
        get_data().then(data=>{
            if(data){
                setData(data)
                makeTitle('CV of '+data.basics.name.f + ' ' + data.basics.name.l)
                setNotFound(false)
            }else{
                setNotFound(true)

            }
            setLoading(false)
        }).catch(err=>{
            setNotFound(true)
            setLoading(false)
        })
        
    }, [])
    return (
        <div className="h-full overflow-y-auto bg-light flex flex-col">
            {data && <Output
                published
                educations={data.educations}
                expreiences={data.expreiences}
                skills={data.skills}
                basics={data.basics}
                languages={data.languages}
                socials={data.socials}
                portfolio={data.portfolio}
            />}
            {notFound && <div className="">
                <div className="text-primary text-opacity-40 px py-16 flex flex-col gap-8">
                    <h1>Oops ! This CV is not available</h1>
                    <Link to="/builder"><button className="button">Build A New CV</button></Link>
                </div>
            </div>}
            {loading && <Loader/>}
            {data && <Link to={`/edit?id=${id}`} className="text-primary opacity-40 hover:opacity-60 px py-8 max-w-6xl mx-auto">Edit This</Link>}
        </div>
    );
}

export default View;

