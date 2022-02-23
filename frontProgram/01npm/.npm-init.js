const desc = prompt('请输入项目描述', '项目描述...')

module.exports = {

 key: 'value',

 name: prompt('name?', process.cwd().split('/').pop()),

 version: prompt('version?', '0.0.1'),

 description: desc,

 main: 'index.js',

 repository: prompt('github repository url', '', function (url) {

  if (url) {

   run('touch README.md');

   run('git init');

   run('git add README.md');

   run('git commit -m "first commit"');

   run(`git remote add origin ${url}`);

   run('git push -u origin master');

  }

  return url;

 })
}
