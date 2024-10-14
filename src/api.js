//Base URL
const apiKey = `${process.env.REACT_APP_API_KEY}`;
const base_url=`https://api.rawg.io/api/games`
// const base_url=`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`

//Getting the date
// const getCurrentMonth = () => {
//   const month = new Date().getMonth() + 1;
//   if (month < 10) {
//     return `0${month}`;
//   } else {
//     return month;
//   }
// };
// //Getting the date
// const getCurrentDay = () => {
//   const day = new Date().getDate();
//   if (day < 10) {
//     return `0${day}`;
//   } else {
//     return day;
//   }
// };

const getDate = (yearsDiff) => {
  let date = new Date().toISOString().slice(0, 10);
  if (yearsDiff !== 0) {
    date = date.split("-");
    date[0] = (parseInt(date[0]) + yearsDiff).toString();
    date = date.join("-");
  }
  return date;
};


//Current day/month/year
// const currentYear = new Date().getFullYear();
// const currentMonth = getCurrentMonth();
// const currentDay = getCurrentDay();
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const currentDate = getDate(0);
const lastYear = getDate(-1);
const nextYear = getDate(1);

//Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}?key=${apiKey}${popular_games}`
export const upcomingGamesURL = () => `${base_url}?key=${apiKey}${upcoming_games}`;
export const newGamesURL = () => `${base_url}?key=${apiKey}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}/${game_id}.json?&key=${apiKey}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}/${game_id}/screenshots?&key=${apiKey}`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}?search=${game_name}&page_size=9&key=${apiKey}`;

