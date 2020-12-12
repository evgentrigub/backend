import { Router } from "express";
import { getYahooSearchTicker } from "../controllers/search.controller";

export const searchRoutes = Router();
searchRoutes.get('/search/yahoo', getYahooSearchTicker)
searchRoutes.get('/search/yahoo/:ticker?', getYahooSearchTicker)