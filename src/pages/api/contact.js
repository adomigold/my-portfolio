import nc from 'next-connect'

const handler = nc()
    .post((req, res) => {
        const q = req.query.q

        fetch(`https://v1.nocodeapi.com/adolphmapunda/google_sheets/GAXUUBQXemiDRatM?tabId=Sheet1`)
            .then(response => response.json())
            .then(data => { res.json(data) });
    })

export default handler