async function getCodechecfData(uname){
    const api = await fetch(`https://codechef-api.vercel.app/handle/${uname}`);
    const data = await  api.json();

    return data;
}

module.exports = getCodechecfData