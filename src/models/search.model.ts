export interface YahooSearchResult {
    ResultSet: {
        Query: string,
        Result: CompanySearch[]
    }
}

export interface CompanySearch {
    exchDisp: string;
    name: string;
    symbol: string;
    type: string;
}

export interface CompanyInfo {
    ticker: string;
    name: string;
    exchange: string;
    type: string;
    isNasdaq: boolean;
}