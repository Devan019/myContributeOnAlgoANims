async function getGFGdata(uname) {
    const api = await fetch(`https://geeks-for-geeks-api.vercel.app/${uname}`)
    const data = await api.json()

    return data;
}

module.exports = getGFGdata;