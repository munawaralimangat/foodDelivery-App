import { useRouteError } from "react-router-dom";

const ErrorComponent = ()=>{
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1>Error page</h1>
            <h2>{err.status}</h2>
            <h2>{err.data}</h2>
        </div>
    )
}

export default ErrorComponent;