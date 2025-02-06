async function fetchData(){

    const category = 'wildlife';
    const apiKey = '9KsCzEYpSGRbIE3mDOu7zA==DLn1SzRPV0RqeykG';
    const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Accept': 'image/jpg'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const imageBlob = await response.blob(); 
        const imageUrl = URL.createObjectURL(imageBlob); 

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = imageUrl;
        imgElement.style.display = "block";

    } catch (error) {
        console.error(error);
    }

}
fetchData();