const util = require('util');
const exec = util.promisify(require('child_process').exec);

const files = ['success', 'ifFunc', 'addOperandType', 'addAssignOperandType'];
const errors = [
  null,
  '@typescript-eslint/no-unnecessary-condition',
  '@typescript-eslint/restrict-plus-operands',
  '@typescript-eslint/restrict-plus-operands',
];

function panic(msg) {
  console.error(msg);
  process.exit(1);
}

async function eslint(fileName, expectedErr) {
  let err;
  let out = '';
  try {
    const cmd = `eslint --max-warnings 0 -c ./test/.eslintrc.js test/${fileName}.ts`;
    console.log(`>> ${cmd}`);
    const { stdout } = await exec(cmd);
    out = stdout;
  } catch (e) {
    err = e;
    out = e.stdout;
  }
  if (expectedErr) {
    if (!err) {
      panic(`Expected error ${expectedErr}. Got success`);
    }
    if (!out.includes(expectedErr)) {
      panic(`Expected error ${expectedErr}. Got ${out}`);
    }
  } else {
    if (err) {
      panic(`Expected success. Got error ${(err || {}).message}`);
    }
  }
}

(async () => {
  Promise.all(files.map((f, i) => eslint(f, errors[i])));
})();
