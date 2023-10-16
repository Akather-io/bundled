import { useQuery } from "@tanstack/react-query"
import { useProgramAnonymous } from "./useProgram"

const useProviderPool = () => {
    const { program } = useProgramAnonymous()
    return useQuery([
        'providerPool',
    ], async () => {
        if (!program) return null
        const pools = program?.account.providerPool.all()
        return pools
    }, {
        enabled: !!program
    })
}

export default useProviderPool