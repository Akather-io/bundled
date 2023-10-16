import * as anchor from "@coral-xyz/anchor";
import { PoolProviderType } from "@/types/PoolProvider.type"
import { useProgram } from "./useProgram"
import { findProviderPoolAccount, findStrategiesAccount, findUsdcTokenAccount } from "@/utils/program.utils";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { ASSOCIATED_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const USDC_MINT = process.env.NEXT_PUBLIC_USDC_MINT!

const useCreateProviderPool = () => {
    const toastRef = useRef<ReturnType<typeof toast>>();
    const wallet = useAnchorWallet()
    const { program } = useProgram()
    return useMutation(
        ["createProviderPool"],
        async (payload: PoolProviderType) => {
            if (!wallet?.publicKey) {
                toast.error("Please connect your wallet");
                return Promise.reject(new Error("Please connect your wallet"));
            }
            if (!program) {
                toast.error("Program not found");
                return Promise.reject(new Error("Program not found"));
            }
            toastRef.current = toast.loading("Creating provider pool...");
            console.log("Payload", payload);

            const [pool] = findProviderPoolAccount(
                program.programId,
                wallet.publicKey
            );
            const [usdc_pool] = findUsdcTokenAccount(pool)
            const [strategiesAccount] = findStrategiesAccount(program.programId, pool);

            const tx = await program.methods.createProviderPool(
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

            return tx
        }, {
        onSuccess: () => {
            toast.update(toastRef.current!, {
                render: "Pool created successfully",
                type: "success",
                autoClose: 5000,
                isLoading: false,
            });

        },
        onError: (error) => {
            if (error instanceof Error) {
                toast.update(toastRef.current!, {
                    render: error.message,
                    type: "error",
                    autoClose: 5000,
                    isLoading: false,
                });
            } else {
                toast.update(toastRef.current!, {
                    render: "An error occurred while creating pool",
                    type: "error",
                    autoClose: 5000,
                    isLoading: false,
                });
            }
            console.log(error);
        },
    })
}

export default useCreateProviderPool