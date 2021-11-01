import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Output from "./Builder/components/Output";

function SampleView({ data }) {
    const history = useHistory()
    useEffect(() => {
        if (!data) {
            history.push('/builder')
        }
    }, [data])
    return (
        <div className="h-full overflow-y-auto bg-light">
            {data && <Output
                educations={data.educations}
                expreiences={data.expreiences}
                skills={data.skills}
                basics={data.basics}
                languages={data.languages}
                socials={data.socials}
                portfolio={data.portfolio}
                theme={data.theme}
            />}
        </div>
    );
}

export default SampleView;