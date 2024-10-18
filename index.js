function toggleAside() {
    let aside = document.getElementById('left-aside');
    let afterExpansion = document.getElementById('afterExpansion');
    aside.classList.toggle('expanded'); 
    afterExpansion.classList.toggle('hidden'); 
}

const cardHeadings = document.querySelectorAll('.card-heading');

const subheadings = document.querySelectorAll('.subheading');


// fetch the JSON data
async function fetchData() {
    try {
        const response = await fetch('./data.json'); 
        const jsonObject = await response.json(); 
        console.log(jsonObject); 
        return jsonObject; 
    } catch (error) {
        console.error('Error fetching the JSON:', error);
    }
}

// pass the JSON data 
fetchData().then(jsonObject => {
    const data = jsonObject.tasks[0].assets;

    data.forEach((item, index) => {
        cardHeadings[index].innerText = item.asset_title;
        subheadings[index].innerText = item.asset_description;
      })
});

