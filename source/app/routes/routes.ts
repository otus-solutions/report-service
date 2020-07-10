import { Router } from 'express'
import ReportController from '../controllers/ReportController'

const routes = Router()

routes.post('/report', ReportController.getTemplate)

export default routes