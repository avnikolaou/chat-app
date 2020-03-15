const genereateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
};

const genereateLocationMessage =  (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
};

module.exports = {
    genereateMessage,
    genereateLocationMessage
};
