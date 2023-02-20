
import express from 'express'
import firstRoutes from './routes/first.routes'
const app=express()
app.use(firstRoutes)
app.listen(2000,()=>{
    console.log('i am in runinig');
    
})