import { Router } from "express"
import { getYahooSearchTicker } from "./controllers/search.controller"
import { getTechnicalAnalyze } from "./controllers/trading.controller"

export const router = Router()

router.get('/search/yahoo', getYahooSearchTicker)
router.get('/search/yahoo/:ticker?', getYahooSearchTicker)

router.get('/analyze', getTechnicalAnalyze)
router.get('/analyze/:country/:exchange/:ticker/:period/', getTechnicalAnalyze)