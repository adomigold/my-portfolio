import { useState } from "react";
import { toast, Toaster } from 'react-hot-toast';

export default function HireMe() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const { name, email, phone, message, services } = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/adolphmapunda/google_sheets/GAXUUBQXemiDRatM?tabId=Sheet1",
                {
                    method: "post",
                    body: JSON.stringify([[name, email, phone, message, services]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            setMessage("Success");
            toast.success('Successfully sent, I will be contact you soon!', {duration: 5000})
        } catch (error) {
            setMessage("Error");
            toast.error("Something went wrong try again", {duration: 5000})
        }
    };

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <form className="modal-body needs-validation py-4" required onSubmit={sendData} Validate>
                <div className="btn-group mb-3">
                    <div className="me-2 mb-2">
                        <input onChange={handleInput} className="btn-check" type="radio" value="Front End" name="services" id="front" />
                        <label className="btn btn-outline-primary" htmlFor="front">Front End</label>
                    </div>
                    <div className="me-2 mb-2">
                        <input onChange={handleInput} className="btn-check" type="radio" value="Back End" name="services" id="back" />
                        <label className="btn btn-outline-primary" htmlFor="back">Back End</label>
                    </div>
                    <div className="me-2 mb-2">
                        <input onChange={handleInput} className="btn-check" type="radio" value="Full Stack" name="services" id="full" />
                        <label className="btn btn-outline-primary" htmlFor="full">Full Stack</label>
                    </div>
                    <div className="me-2 mb-2">
                        <input onChange={handleInput} className="btn-check" type="radio" value="AI" name="services" id="ai" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="ai">AI</label>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <i className="ai-user position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                    <input onChange={handleInput} className="form-control rounded" name="name" type="text" placeholder="Full Names" required />
                </div>
                <div className="input-group mb-3">
                    <i className="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                    <input onChange={handleInput} className="form-control rounded" name="email" type="email" placeholder="Email" required />
                </div>
                <div className="input-group mb-3">
                    <i className="ai-phone position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                    <input onChange={handleInput} className="form-control rounded" name="phone" type="tel" placeholder="Phonenumber" required />
                </div>
                <div className="mb-3 pb-1">
                    <textarea onChange={handleInput} className="form-control" name="message" rows="4" placeholder="Project description" required></textarea>
                </div>
                <div className="row py-2">
                    <div className="col-lg-6 col-md-8">
                        <button className="btn btn-primary d-block w-100" type="submit">Send Request</button>
                    </div>
                </div>
            </form>
        </>
    )
}