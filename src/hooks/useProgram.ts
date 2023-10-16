import { BundledProgram } from "@/artifacts/bundled_program";
import * as anchor from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, Signer, Transaction, VersionedTransaction } from "@solana/web3.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import idl from "@/artifacts/bundled_program.json";


// export interface Wallet {
//     signTransaction<T extends Transaction | VersionedTransaction>(tx: T): Promise<T>;
//     signAllTransactions<T extends Transaction | VersionedTransaction>(txs: T[]): Promise<T[]>;
//     publicKey: anchor.web3.PublicKey;
// }

// class MyWallet implements Wallet {
//     constructor(readonly payer: Keypair) {
//         this.payer = payer;
//     }

//     async signTransaction<T extends Transaction | VersionedTransaction>(tx: T): Promise<T> {
//         tx.sign([this.payer]);
//         return tx;
//     }

//     async signAllTransactions<T extends Transaction | VersionedTransaction>(txs: T[]): Promise<T[]> {
//         return txs.map((t) => {
//             t.partialSign(this.payer);
//             return t;
//         });
//     }

//     get publicKey(): PublicKey {
//         return this.payer.publicKey;
//     }
// }

// export const useProgramAnonymous = () => {
//     const wallet = useAnchorWallet();
//     const { connection } = useConnection()
//     const programID = process.env.NEXT_PUBLIC_RENEC_PROGRAM_ID!;

//     return useMemo(() => {
//         const fakeWallet = anchor.web3.Keypair.generate();
//         const _wallet = new MyWallet(fakeWallet);
//         const provider = new anchor.AnchorProvider(connection, _wallet, {
//             preflightCommitment: "confirmed",
//             commitment: "confirmed",
//         });
//         return {
//             program: new anchor.Program(idl as unknown as BundledProgram, programID, provider),
//         };
//     }, [connection, programID]);
// };

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