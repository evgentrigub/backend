import { Request, Response } from "express";
import { AnalyzeType, Country, Exchange } from "../models/trading.model";
import { getAnalyzeData } from "../modules/trading";

/**
 * GET /api/trade/analyze
 */
export const getTechnicalAnalyze = async (request: Request, response: Response) => {
  try {
    if(!request.params.country){
      response.json(await getAnalyzeData())
      return;
    }

    const country = request.params.country as Country;
    const exchange = request.params.exchange as Exchange;
    const ticker = request.params.ticker;
    const period = request.params.period as AnalyzeType

    const financialAdvice = await getAnalyzeData(country, exchange, ticker, period);
    return response.json(financialAdvice);


  } catch (error) {
    console.error("e", error)
    response.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
}

