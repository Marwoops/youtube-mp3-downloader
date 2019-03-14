export const download = (inputUrl, title) => {
        console.log('downloading..');
        window.location.href = `http://localhost:1337/download?url=${inputUrl.slice(32)}&title=${title}`;

};

const getInfo = async (inputUrl) => {
        const clientRes = await fetch(`http://localhost:1337/getinfo?url=${inputUrl.slice(32)}`)                // request server to get info and check if URL is valid
        .then(res => { 
                if (res.status !== 200) {
                        throw new Error();

                } else {
                        return res.json();

                }; 
        })
        .then(obj => { return { type: 'title', title: obj.title, author: obj.author } })                        // if request succeed -> returns title and channel's name
        .catch(err => { return { type: 'error', error: err } });                                                // if request failed -> returns the error

        return clientRes;

};

export { getInfo };