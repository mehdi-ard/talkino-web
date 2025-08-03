import { read } from "@/helper";
import { useEffect, useState } from "react";


export const useAuth = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const token = await read('accessToken');
            setAccessToken(token);
        })();
    }, []);


    return {
        accessToken
    }
}