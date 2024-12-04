export async function verifyToken(token) {
    try {
        const res = await fetch('https://dummyjson.com/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        if (!res.ok) {
            throw new Error('Token inválido');
        }

        const data = await res.json();
        return data; // Retorna os detalhes do token se válido
    } catch (error) {
        console.error(error);
        return null;
    }
}
