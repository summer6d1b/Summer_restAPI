// get the local date
function getLocalDate() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split("T")[0];
  return localDate;
}
//  Get the API
async function getNasaData(date) {
  try {
    const apiKey = 'AkOCLjFWKyf7st3Tj1JBMaITtzDBLdLQP2fyvkDW';
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
    const data = await response.json();
    // get information
    const content = document.querySelector("#nasa-info");
    content.innerHTML = `
      <h1>${data.title}</h1>
      <img src="${data.url}" alt="${data.title}" style="max-width: 100%; height: auto;">
      <p>${data.explanation}</p>
    `;
  } catch (error) {
    console.warn(`Error fetching NASA data: ${error}`);
  }
}

function setDefaultDateAndGetAPOD() {
  const today = getLocalDate();
  document.getElementById('date-input').value = today;
  getNasaData(today);
}

document.getElementById('fetch-button').addEventListener('click', function() {
  const date = document.getElementById('date-input').value;
  if(date) {
    getNasaData(date);
  } else {
    alert('Please enter a valid date.');
  }
});

setDefaultDateAndGetAPOD();