import { BundledProgram } from "@/artifacts/bundled_program";
import * as anchor from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, Signer, Transaction, VersionedTransaction } from "@solana/web3.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import idl from "@/artifacts/bundled_program.json";



export const useProgramAnonymous = () => {
    const { connection } = useConnection()
    const programID = process.env.NEXT_PUBLIC_PROGRAM_ID!;

    return useMemo(() => {
        const program = new anchor.Program<BundledProgram>(idl as unknown as BundledProgram, programID, { connection });
        console.log("program", program)
        return {
            program
        };
    }, [connection, programID]);
};

export const useProgram = () => {
    const [program, setProgram] = useState<anchor.Program<BundledProgram>>();
    const anchorWallet = useAnchorWallet();
    const { connection } = useConnection();
    const programID = process.env.NEXT_PUBLIC_PROGRAM_ID!;

    const updateProgram = useCallback(() => {
        if (!connection) return;
        if (!anchorWallet) return;
        const provider = new anchor.AnchorProvider(connection, anchorWallet, {
            preflightCommitment: "confirmed",
            commitment: "confirmed",
        });

        const program = new anchor.Program(idl as unknown as BundledProgram, programID, provider);

        setProgram(program);
    }, [anchorWallet, connection, programID]);

    useEffect(() => {
        updateProgram();
    }, [connection, updateProgram]);

    return useMemo(
        () => ({
            program,
        }),
        [program]
    );
};