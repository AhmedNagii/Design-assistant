const ACCESS_KEY = "UVHHgNsmjeebYuJjyqBwgHucbbjTO1TB3d7VnnTXJ5w";
const SECRET_KEY = "G3KoQsYVaow_33C8BibZ451xQMcVt-W3cdmh8UWXbqw";
const BASE_URL = "https://api.unsplash.com/search/photos?";
const fetchIcons = async ({ queryKey }) => {

    const query = queryKey[1];
    const pageNum = queryKey[2];
    const apiRes = await fetch(`${BASE_URL}page=${pageNum}&query=${query}&client_id=${ACCESS_KEY}&per_page=30`);

    if (!apiRes.ok) {
        throw new Error(`Images search has an issue`);
    }

    return apiRes.json();

};

export default fetchIcons;

