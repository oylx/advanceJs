// 糖耐量测试 2021/5/22
function test1() {

// 胰岛素(pmol/L)
 let INSOfOrigin = [26.9, 160, 136.9];
// uU/ml = pmol/L / 6.965
// const INSOfChange = INS.map(v => (v/6.965).toFixed(2));
 const INS = ['3.86', '22.97', '19.66'];
 console.log(INS);

// C肽
 let C_P = [405.6, 1451, 1435];

// 血糖mol/L
 let GLU = [4.99, 7.86, 6.64];

// 糖化血红蛋白%
 let HbA1C = 5.0;

 if(INS[1]/INS[0] >=10 || INS[2] > INS[1]) {
  console.log('胰岛素抵抗');

 }

 if (INS[0] * GLU[0] / 22.5 > 2.14) {
  console.log('胰岛素抵抗');
 }
 if (GLU[0] >= 5.1 || INS[0] >= 10) {
  console.log('胰岛素抵抗');
 }
}
