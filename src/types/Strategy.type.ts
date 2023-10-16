import BN from "bn.js";

export type StrategyType = {
    tokenSymbol: string,
    weight: number,
    longCall: {
        strikePrice: BN,
        portion: number,
    },
    shortCall: {
        strikePrice: BN,
        portion: number,
    },
    longPut: {
        strikePrice: BN,
        portion: number,
    },
    shortPut: {
        strikePrice: BN,
        portion: number,
    },
}