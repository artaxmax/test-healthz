const express = require('express')
const app = express()
const port = 80

app.get('/healthz', (req, res) => res.send('OK'))

setTimeout(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}, 5000)