import { Router } from 'express'

const router = Router()

import profissionaisRoutes from './profissionais.ts'
import servicosRoutes from './servicos.ts'

router.use("/profissionais", profissionaisRoutes)
router.use("/servicos", servicosRoutes)

export default router
