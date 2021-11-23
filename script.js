window.addEventListener('load', () => {
  let json = [];
  fetch(
    'https://handlers.education.launchcode.org/static/astronauts.json'
  ).then(res => {
    res.json().then(json => {
      const container = document.getElementById('container');
      for (let item of json) {
        container.innerHTML += `
        <div class="astronaut">
          <div class="bio">
            <h3>${item.firstName} ${item.lastName}</h3>
            <ul>
              <li>Hours in space: ${item.hoursInSpace}</li>
              <li>Active: ${item.active}</li>
              <li>Skills: ${item.skills}</li>
            </ul>
          </div>
          <img class="avatar" src="${item.picture}">
        </div>
        `;
      }
      container.innerHTML += `
      <div>
        <h1>Total number of astronaunts: ${json.length}</h1>
      </div>
      `;
    });
  });
});
