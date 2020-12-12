import { Request, Response } from 'express';
import { getInfoByTicker } from '../modules/search';

/**
 * GET /api/search/:ticker
 * @param request 
 * @param response 
 */
export const getYahooSearchTicker = async (request: Request, response: Response) => {
    try {
        const ticker = request.params.ticker;
        console.log("ticker ->", ticker);
        
        if(!ticker){
            return response.json('Not found param ticker');
        }

        const security = await getInfoByTicker(ticker);
        response.json(security);

    } catch (error) {
        console.error(error);
    }
}