import BN from "bn.js"
import { StrategyType } from "./Strategy.type"

export type PoolProviderType = {
    expired_at: BN, fee: BN, share: BN, j_probability: number, j_return: number, j_cost: number,
    strategies: StrategyType[]
}

