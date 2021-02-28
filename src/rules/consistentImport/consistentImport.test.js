import { ruleTester } from '@/utils/ruleTesters';

import { consistentImportRule } from './consistentImport.rule';

describe('Test consistentImportRule', () => {
  const VALID_IMPORT_SPECIFIER_NAME = 'css';
  const VALID_CSS_FILE_PATH = './valid-import-path.css';

  function makeImportCode({
    importDeclarationSpecifiersCode = VALID_IMPORT_SPECIFIER_NAME,
    cssFilePath = VALID_CSS_FILE_PATH,
  } = {}) {
    return `import ${importDeclarationSpecifiersCode} from '${cssFilePath}'`;
  }

  ruleTester.run('Allows code with default hardcoded values', consistentImportRule, {
    valid: [
      {
        code: makeImportCode(),
      },
    ],
    invalid: [],
  });
});
