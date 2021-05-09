import { ruleTester } from '@/utils/ruleTesters';

import { noInconsistentDefaultImportRule } from '.';

function makeImportCode({ importDeclarationSpecifiersCode, filePath }) {
  if (!importDeclarationSpecifiersCode) {
    return `import '${filePath}'`;
  }

  return `import ${importDeclarationSpecifiersCode} from '${filePath}'`;
}

describe('Test noInconsistentDefaultImportRule', () => {
  const VALID_IMPORT_SPECIFIER_NAME = 'css';
  const INVALID_IMPORT_SPECIFIER_NAME = '{ styles, meta }';
  const VALID_RELATIVE_CSS_FILE_PATH = './valid-import-path.css';
  const VALID_RELATIVE_JS_FILE_PATH = './valid-import-path.js';

  ruleTester.run('Allows code with valid css params', noInconsistentDefaultImportRule, {
    valid: [
      {
        code: makeImportCode({
          importDeclarationSpecifiersCode: VALID_IMPORT_SPECIFIER_NAME,
          filePath: VALID_RELATIVE_CSS_FILE_PATH,
        }),
      },
    ],
    invalid: [],
  });

  ruleTester.run('Allows css file import with side effect only', noInconsistentDefaultImportRule, {
    valid: [
      {
        code: makeImportCode({
          importDeclarationSpecifiersCode: '',
          filePath: VALID_RELATIVE_CSS_FILE_PATH,
        }),
      },
    ],
    invalid: [],
  });

  ruleTester.run('Complains only on css-like files', noInconsistentDefaultImportRule, {
    valid: [
      {
        code: makeImportCode({
          importDeclarationSpecifiersCode: INVALID_IMPORT_SPECIFIER_NAME,
          filePath: VALID_RELATIVE_JS_FILE_PATH,
        }),
      },
    ],
    invalid: [
      {
        code: makeImportCode({
          importDeclarationSpecifiersCode: INVALID_IMPORT_SPECIFIER_NAME,
          filePath: VALID_RELATIVE_CSS_FILE_PATH,
        }),
        errors: 1,
      },
    ],
  });
});
