import { useState } from 'react';
import Head from 'next/head'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        let nameError = "";
        let emailError = "";
        let messageError = "";

        if (name === "")
        {
            nameError = "* Påkrævet";
        }
        if (email === "")
        {
            emailError = "* Påkrævet";
        }
        if (message === "")
        {
            messageError = "* Påkrævet";
        }
        
        if (nameError !== "" || emailError !== "" || messageError !== "") {
            setError({
                name: nameError,
                email: emailError,
                message: messageError
            });
        }
        else
        {
            setError({});
            alert(`Navn: ${name}\nEmail: ${email}\nBesked: ${message}`);
        }
    }

    return (<>
        <Head>
            <title>Kontakt</title>
        </Head>

        <h2>Kontakt</h2>
        <form className='mt-4' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Navn</label>
                <input value={name}
                    onChange={(e) => setName(e.target.value)} 
                    className="form-control" id="name" placeholder="John Doe"/>
                {error.name ? <span className='text-danger'>{error.name}</span> : <></>}
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="form-control" id="email" placeholder="name@example.com"/>
                {error.email ? <span className='text-danger'>{error.email}</span> : <></>}
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="message">Besked</label>
                <textarea  value={message}
                    onChange={(e) => setMessage(e.target.value)} 
                    className="form-control" id="message" rows="3"></textarea>
                {error.message ? <span className='text-danger'>{error.message}</span> : <></>}
            </div>
            <br/>
            <button type="submit" className="btn btn-primary py-2 px-4">Send</button>
        </form>
    </>)
}

export default Contact