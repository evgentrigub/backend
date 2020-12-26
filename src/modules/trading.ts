import fetch from 'node-fetch';
import { AdviceType, AnalyzeResponse, AnalyzeType, Country, Exchange } from '../models/trading.model';
import { checkStatus } from './common';

export const getAnalyzeData = async (country: Country = 'america', exchange: Exchange = 'NASDAQ', ticker: string = 'AAPL', interval: AnalyzeType = '') => {
    try {
        const url = `https://scanner.tradingview.com/${country}/scan`;

        const body = getScanBody(exchange, ticker, interval); 

        const urlParams = {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        }

        const res = await fetch(url, urlParams).then(checkStatus);
        const json = await res.json() as AnalyzeResponse;

        console.log("🚀 ~ file: trading.ts ~ line 21 ~ getAnalyzeData ~ json.data", json.data)
        const adviceNumber = json.data[0].d[1];
        return mapNumberToAdvice(adviceNumber);

    } catch (error) {
        console.log("getData -> error", error)
    }
}

const mapNumberToAdvice = (value: number): AdviceType => {
    if(value > -1 && value <= -0.5){ return 'ACTIVE_SELL'}
    if(value > -0.5 && value <= 0){ return 'SELL'}
    if(value === 0){ return 'NEUTRAL'}
    if(value > 0 && value <= 0.5){ return 'BUY'}
    if(value > 0.5 && value <= 1){ return 'ACTIVE_BUY'}
    return 'NEUTRAL';
}

const getScanBody = (exchange: Exchange, ticker: string, interval: AnalyzeType) => {
    return {
        "symbols": {
            "tickers": [`${exchange}:${ticker}`],
            "query": {
                "types": []
            }
        },
        "columns": [
            interval === '' ? `Recommend.Other` : `Recommend.Other|${interval}`,
            interval === '' ? `Recommend.All` : `Recommend.All|${interval}`,
            interval === '' ? `Recommend.MA` : `Recommend.MA|${interval}`,
        ]
    }
}