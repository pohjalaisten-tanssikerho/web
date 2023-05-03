const load = async ({ fetch }) => {
  const boardRes = await fetch("https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/data/board.json");
  const boardData = await boardRes.json();
  const boards = boardData.members;
  return {
    boards
  };
};
export {
  load
};
