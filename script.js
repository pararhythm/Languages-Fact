
const FACTS_NUMBER = 5
async function main() {
    const file = "./facts.json"
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
        const data = await response.json();
        const keys = Object.keys(data);
        const select = document.querySelector('#languages')
        
        keys.forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            select.append(option);
        })

        select.addEventListener('change', (e) => {
            let selectedLanguage = e.target.value;
        });

    } catch (error) {
        console.error(error.message)
    }
}
main();

