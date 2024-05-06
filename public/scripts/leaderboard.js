const leaderboard = document.getElementById("leaderboard");

async function fetchData(){
  try{
    const response = await fetch("/graph")
    let dataset = await response.json();

  dataset.forEach(team => {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      team.color = color;
  });
  
  dataset.forEach(team => {
      const lastEntry = team.data[team.data.length - 1];
      team.score = lastEntry.score;
  });
  dataset.sort((a, b) => {
      if (a.score !== b.score) {
          return b.score - a.score;
      } else {
          const lastEntryA = a.data[a.data.length - 1];
          const lastEntryB = b.data[b.data.length - 1];
          return lastEntryA.time - lastEntryB.time;
      }
  });
  dataset.sort((a, b) => b.score - a.score);
  for (let i = 0; i < dataset.length; i++) {
      dataset[i].rank = i + 1;
  }
  
  const teamHtml = dataset.map(team => `
      <div class="teamdata" id="teamData">
          <div id="rank">${team.rank}</div>
          <div id="teamname">${team.teamName}</div>
          <div id="score">${team.score}</div>
      </div>
      <hr>
  `).join('');
  
  leaderboard.innerHTML = teamHtml;
  
  const top5TeamsData = dataset.slice(0, 5).map(team => ({
      label: team.teamName,
      backgroundColor: team.color,
      borderColor: team.color,
      cubicInterpolatonMode: "monotone",
      lineTension: 0.17,
      data: team.data.map(entry => ({
          x: entry.score,
          y: entry.time 
      }))
  }));
  
  const config = {
      type: 'line',
      data: {
          datasets: top5TeamsData
      },
      options: {
          scales: {
              x: {
                  type: 'linear', 
                  title: {
                      display: true,
                      text: 'Score' 
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Time' 
                  }
              }
          }
      }
  };
  
  var myChart = new Chart(
      document.getElementById('myChart'),
      config
  );  

  }catch(err){
    console.log(err);
  }
  
}

fetchData()
