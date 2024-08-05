import { database } from './database.js';

export const moodsHtml = () => {
  let html = `
     <div class="header-container">
          <h1>Macho's Moods</h1>
        </div>
        <div class="prompt">
          <h2>How are you feeling today?</h2>
        </div>

        <div class="content-container">
    
    `;
  for (const mood of database) {
    html += `
       <div class="mood-card">
            <div class="mood-name">
              <p>${mood.name}</p>
            </div>
            <div class="mood-pic">
              <img class = "pic" src=${mood.imageUrl} alt="Happy" />
            </div>
            <div class="advice">
              <p>Macho's advice:</p>
              <div class="quotes">
                <p>"${mood.quotes[0]}"</p>
                <p>
                 "${mood.quotes[1]}"
                </p>
              </div>
            </div>
        </div>
    `;
  }
  html += `
   </div>
  `;
  return html;
};
