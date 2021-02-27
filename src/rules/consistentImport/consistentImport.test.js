/**
 * @fileoverview Assures consistent usage of css-modules in your project
 * @author Dmitry Zakharov
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import { consistentImportRule as rule, MESSAGE_IDS } from './consistentImport.rule';

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: { jsx: true },
  },
});
ruleTester.run('consistent-import-name', rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: `import { styles } from './hello-world.css'`,
      errors: [
        {
          messageId: MESSAGE_IDS.testKey1,
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
});
