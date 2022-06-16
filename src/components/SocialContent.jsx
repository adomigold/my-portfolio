export default function Content() {
    return (
        <>
            <div className="d-flex align-items-center position-absolute w-100 h-100" style={{ "top": "0", "left": "0", "zIndex": "9" }}>
                <div className="container">
                    <h2 className="mb-4 pb-sm-3 text-center">Follow me</h2>
                    <div className="text-center">
                        <a className="btn btn-lg text-white mb-2 me-sm-4 me-2" 
                        target="_blank" href="https://www.linkedin.com/in/adolph-gasper-106474178/" rel="noreferrer"
                        style={{ "backgroundColor": "#1969ff" }}>
                            <i className="ai-linkedin lead me-2"></i>
                            Linkedin
                        </a>
                        <a className="btn btn-lg text-white mb-2" target="_blank" rel="noreferrer"
                        href="https://twitter.com/AdolphGasper1" style={{ backgroundColor: "#1D9BF0" }}>
                            <i className="ai-twitter lead me-2"></i>
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}