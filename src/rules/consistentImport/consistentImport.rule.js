import { PACKAGE_VERSION } from '@/constants';

export const MESSAGE_IDS = {
  testKey1: 'testKey1',
};

export const consistentImportRule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'ensures consistent usage of css-modules in your project',
      category: 'Possible Errors',
      url: `https://github.com/DZakh-packages/eslint-plugin-clean-css-modules/blob/v${PACKAGE_VERSION}/src/rules/consistentImport/consistentImport.doc.md`,
      recommended: true,
      suggestion: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      [MESSAGE_IDS.testKey1]: 'Test message',
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        context.report({
          node,
          messageId: MESSAGE_IDS.testKey1,
        });
      },
    };
  },
};
