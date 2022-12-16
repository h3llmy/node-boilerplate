import express from 'express'
import { forgetPassword, login, register, resendOtp, resetPassword, updateStatus } from '../../controller/authController.js'

const router = express.Router()

 router.post('/register', register)
 router.put('/update/status/:token', updateStatus)
 router.post('/login', login)
 router.post('/forget/password', forgetPassword)
 router.put('/reset/password/:token', resetPassword)
 router.put('/resend/otp/:token', resendOtp)

 export default router