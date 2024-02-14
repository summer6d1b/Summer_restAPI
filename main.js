async function getAstronomyPictureOfTheDay() {
    try {
      const apiKey = 'AkOCLjFWKyf7st3Tj1JBMaITtzDBLdLQP2fyvkDW';
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      const data = await response.json();
      console.log(data);
  
      const content = document.querySelector("#nasa-apod-info");
      content.innerHTML = `
        <h1>${data.title}</h1>
        <img src="${data.url}" alt="Astronomy Picture of the Day">
        <p>${data.explanation}</p>
      `;
    } catch (error) {
      console.warn(`Error fetching NASA APOD: ${error}`);
    }
  }
  
  getAstronomyPictureOfTheDay();