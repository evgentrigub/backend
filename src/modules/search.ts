import { CompanyInfo, YahooSearchResult } from "../models/search.model";
import fetch from 'node-fetch';
import { checkStatus } from "./common";

export const getInfoByTicker = async (ticker: string) => {
    try {
        const url = `http://d.yimg.com/autoc.finance.yahoo.com/autoc?query=${ticker}&region=1&lang=ru`;

        const urlParams = {
            method: 'get',
            headers: {
                'Content-Type':'application/json'
            }
        }

        const res = await fetch(url, urlParams).then(checkStatus);
        const yahooResponse = await res.json() as YahooSearchResult;

        const responseArray = yahooResponse.ResultSet.Result;
        const responseCompany = responseArray.find(element => element.symbol === ticker);

        if(!responseCompany){
            return 'Company not found';
        }

        const company: CompanyInfo = {
            ticker: ticker,
            name: responseCompany.name,
            exchange: responseCompany.exchDisp,
            type: responseCompany.type,
            isNasdaq: responseCompany.exchDisp === 'NASDAQ'
        }

        return company;

    } catch (error) {
        console.error(error);
    }
}