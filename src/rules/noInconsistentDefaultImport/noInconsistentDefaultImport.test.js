import { ruleTester } from '@/utils/ruleTesters';

import { noInconsistentDefaultImportRule } from '.';

describe('Test noInconsistentDefaultImportRule', () => {
  ruleTester.run('Allows valid default import:', noInconsistentDefaultImportRule, {
    valid: [
      {
        code: `import cx from 'classnames';`,
        options: [
          {
            imports: [
              {
                pattern: 'classnames',
                defaultImportName: 'cx',
              },
            ],
          },
        ],
      },
    ],
    invalid: [],
  });

  // ruleTester.run('Allows css file import with side effect only', noInconsistentDefaultImportRule, {
  //   valid: [
  //     {
  //       code: makeImportCode({
  //         importDeclarationSpecifiersCode: '',
  //         filePath: VALID_RELATIVE_CSS_FILE_PATH,
  //       }),
  //     },
  //   ],
  //   invalid: [],
  // });

  // ruleTester.run('Complains only on css-like files', noInconsistentDefaultImportRule, {
  //   valid: [
  //     {
  //       code: makeImportCode({
  //         importDeclarationSpecifiersCode: INVALID_IMPORT_SPECIFIER_NAME,
  //         filePath: VALID_RELATIVE_JS_FILE_PATH,
  //       }),
  //     },
  //   ],
  //   invalid: [
  //     {
  //       code: makeImportCode({
  //         importDeclarationSpecifiersCode: INVALID_IMPORT_SPECIFIER_NAME,
  //         filePath: VALID_RELATIVE_CSS_FILE_PATH,
  //       }),
  //       errors: 1,
  //     },
  //   ],
  // });
});
