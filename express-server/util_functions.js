const safe = (handler) => {
    return async (...args) => {
        try {
            await handler(...args);
        } catch (err) {
            console.error('Socket handler error:', err);
        }
    };
}

const connection = () => {
    console.log('a user connected');
}

export const util = {
    safe,
    connection,
}