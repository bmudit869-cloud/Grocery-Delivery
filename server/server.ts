import "dotenv/config";
import  { NextFunction, Request, Response } from 'express';
import cors from "cors";
import authRouter from "./routes/authRoutes";
import produceRouter from "./routes/productRoutes";
import uploadRouter from "./routes/uploadRoutes";
import orderRouter from "./routes/orderRoutes";
import express from "express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index"

const app = express();

// Middleware
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5173;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use('/api/auth', authRouter)
app.use('/api/products', produceRouter)
app.use('/api/upload', uploadRouter) 
app.use('/api/orders', orderRouter) 
app.use("/api/inngest", serve({ client: inngest, functions }));

//Error Handling
app.use((error:any, req:Request, res:Response, next:NextFunction)=> {
    console.error(error)
    res.status(500).json({message:error.message})
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});