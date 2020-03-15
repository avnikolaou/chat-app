const genereateMessage = (text) => {
    return {
        text,
        createdAt: new Date().getTime()
    }
};

const genereateLocationMessage = (url) => {
    return {
        url,
        createdAt: new Date().getTime()
    }
};

module.exports = {
    genereateMessage,
    genereateLocationMessage
};
