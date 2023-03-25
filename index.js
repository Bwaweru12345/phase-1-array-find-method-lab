// code your solution here

function superbowlWin(records) {
    const winningRecord = records.find(record => record.result === 'W');
    return winningRecord ? winningRecord.year : undefined;
  }

  const records = [
    { year: 2022, result: 'L' },
    { year: 2021, result: 'W' },
    { year: 2020, result: 'L' },
    { year: 2019, result: 'W' },
    { year: 2018, result: 'L' },
  ];
  
  console.log(superbowlWin(records)); 