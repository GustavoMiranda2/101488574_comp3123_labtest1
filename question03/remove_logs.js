//Nome: Gustavo Miranda
//Student ID: 101488574


//Question 3 - Remove Logs




const fs = require('fs/promises');
const path = require('path');

(async () => {
  const logsDir = path.join(__dirname, '..', 'logs');

  try {
    console.log('--------------------------- Question 3 - Remove Logs -----------------------------');
    console.log('Remove Log files '); 
    console.log(' ');




    const stat = await fs.stat(logsDir).catch(() => null);
    if (!stat || !stat.isDirectory()) {
      console.log('no Logs directory to remove');
      console.log(' ');
      console.log('-------------------------------------------------------------------------------');
      return;
    }


    const files = await fs.readdir(logsDir);
    for (const f of files) {
      console.log(`delete files...${f}`); 
      await fs.unlink(path.join(logsDir, f));
    }

    await fs.rmdir(logsDir);

    console.log(' ');
    console.log('Logs directory removed');
    console.log('-------------------------------------------------------------------------------');
  } catch (err) {
    console.error('[Remove Logs Error]', err.message);
    process.exit(1);
  }
})();
