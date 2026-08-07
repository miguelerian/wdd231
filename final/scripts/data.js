export async function getCharacters() {

    try {

        const response = await fetch("data/spiderverse.json");

        if (!response.ok) {
            throw new Error("Unable to load character data.");
        }

        const data = await response.json();

        return data.characters;

    } catch (error) {

        console.error("Error loading character data:", error);

        return [];

    }
}