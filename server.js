const app               = require('express')()
const cors              = require('cors')
const bodyParser        = require('body-parser')
const authRoutes        = require('./routes/user')
const dataRoutes        = require('./routes/data')
const db                = require('./db/db.js')
const dataController    = require('./controllers/data')

db()
/* dataController.saveData() 
 */
app.use(cors())
app.use(bodyParser.json())
app.use('/auth',authRoutes)
app.use('/data',dataRoutes)


app.listen(5000,()=>{
    console.log('server connected')
})