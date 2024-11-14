import React, {useState} from "react";

export default function Forming()
{
    const [answer, setAnswer] = useState('')
    const[error, setError] = useState(null);
    const[status, setStatus] = useState('typing')
    if(status === 'success')
    {
        return <h1> correct answer, ... That's right </h1>
    }
    async function handleSubmit(e)
    {
        e.preventDefault();
        setStatus("submitting")
        try{
            await submitForm(answer);
            setStatus('success')
        }
        catch (err)
        {
            setStatus('typing');
            setError(err);
        }
    }
    function handleTextChange(e)
    {
        setAnswer(e.target.value)
    }

    return(

        <>
            <h2> quiz here </h2>
            <p> enter city </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextChange}
                    disabled={status==='submitting'}
                />
            <br />
            <button disabled={
                answer.length === 0 ||
                status === 'submitting'
            }>
                Submit
            </button>
                {
                    error !== null &&
                    <p className="Eroor">
                        {error.message}
                    </p>
                }
            </form>
        </>
    )
}

function submitForm(answer)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
            let shouldError = answer.toLowerCase() !== 'lima'
            if(shouldError)
                    reject(new Error("well tried, but you are wrong"))
            else
            {
                resolve();
            }
        }, 1500);
    })
}