export type Country = 'russia' | 'america';
export type Exchange = 'NASDAQ' | 'NYSE' | 'MOEX';
export type AnalyzeType = '1' | '5' | '15' | '60' | '240' | '' | '1W' | '1M';
export type AdviceType = 'ACTIVE_SELL' | 'SELL' | 'NEUTRAL' | 'BUY' | 'ACTIVE_BUY';

export interface AnalyzeResponse {
    data: [
        {
        s: string,
        d: number[]
        }
    ],
    totalCount: number;
}