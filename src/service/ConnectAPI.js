export default class ConnectAPI{
    async load() {
        const response = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/exports/json?lang=fr&timezone=Europe%2FBerlin");
        const data = await response.json();
        return data;
    }
}