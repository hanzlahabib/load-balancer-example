const app = require('express')()
const appId = process.env.APP_ID || 9999

app.get("/", (req, res) => {
    res.send(`app_id: ${appId} Home page: says hello`)
})

app.get("/app1", (req, res) => {
    res.send(`app_id: ${appId} app1: says hello`)
})
app.get("/app2", (req, res) => {
    res.send(`app_id: ${appId} app2: says hello`)
})

app.get("/admin", (req, res) => {
    res.send(`app_id: ${appId} Admin page: says hello`)
})

app.listen(appId, () => {
    console.log('Application is runnning on', appId)
})