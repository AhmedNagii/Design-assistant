const fetchSchema = async ({ queryKey }) => {

    const selectedColor = queryKey[1];
    const selectedMode = queryKey[2];
    const apiRes = await fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}&count=5`);
    if (!apiRes.ok) {
        throw new Error(`color schema of ${selectedColor} not ok`);
    };



    return apiRes.json();

};


export default fetchSchema;