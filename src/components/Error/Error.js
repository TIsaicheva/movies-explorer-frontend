import "./Error.css";

function Error({ error, errorModifier }) {

    return (
        <span className={`error ${errorModifier} ${error.failedStatus && "error_visible"}`}>{error.message}</span>
    );
}

export default Error;