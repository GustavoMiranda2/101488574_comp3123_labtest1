
//Nome: Gustavo Miranda
//Student ID: 101488574

//Question 1


function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {

    const filtered = mixedArray.filter(item => typeof item === 'string');
    if (filtered.length === 0) {
      return reject(new Error('there is no string in the array'));
    }

    resolve(filtered.map(word => word.toLowerCase()));
  });
}


(async () => {
  const sample = ['Brazil', 3737, true, 'NOVA HOLANDA', 'GustavoMirandada', null, 'CrisTIANO rOnalDO'];

  try {
    const result = await lowerCaseWords(sample);

    console.log('-------------------------------- Question 1 ---------------------------------');
    console.log(" ");
    console.log('Input :', JSON.stringify(sample));
    console.log('Output:', JSON.stringify(result));
    console.log(" ");
    console.log('---------------------------------------------------------------------------');
  } catch (err) {
    console.error('[Error]', err.message);
  }
})();

module.exports = { lowerCaseWords };