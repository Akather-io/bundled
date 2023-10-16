import * as anchor from "@coral-xyz/anchor";
import { PoolProviderType } from "@/types/PoolProvider.type"
import { useProgram } from "./useProgram"
import { findProviderPoolAccount, findStrategiesAccount, findUsdcTokenAccount } from "@/utils/program.utils";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { ASSOCIATED_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";

const USDC_MINT = process.env.NEXT_PUBLIC_USDC_MINT!

const useCreateProviderPool = async (payload: PoolProviderType) => {
    const { program } = useProgram()

    const wallet = useAnchorWallet()
    if (!program || !wallet) return
    const [pool] = findProviderPoolAccount(
        program.programId,
        wallet.publicKey
    );
    const [usdc_pool] = findUsdcTokenAccount(pool)
    const [strategiesAccount] = findStrategiesAccount(program.programId, pool);

    await program.methods.createProviderPool(
        payload.expired_at,
        payload.fee,
        payload.share,
        payload.j_probability,
        payload.j_return,
        payload.j_cost,
        payload.strategies,
    ).accounts({
        pool,
        auth: wallet.publicKey,
        strageties: strategiesAccount,
        usdcMint: USDC_MINT,
        usdcPoolTokenAccount: usdc_pool,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY
    }).rpc()

}

export default useCreateProviderPool