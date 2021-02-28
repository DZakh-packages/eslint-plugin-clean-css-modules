import { PACKAGE_VERSION } from '@/constants';

export const MESSAGE_IDS = {
  shouldHaveOnlyDefaultImport: 'shouldHaveOnlyDefaultImport',
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
      [MESSAGE_IDS.shouldHaveOnlyDefaultImport]: 'Css module should have only a default import.',
    },
  },
  create(context) {
    return {
      ImportDeclaration: (node) => {
        const specifiersNodes = node.specifiers;

        /**
         * A module that doesn't import any values.
         * It may be useful for applying global css, so ignore the case.
         */
        const isSideEffectModule = specifiersNodes.length === 0;
        if (isSideEffectModule) {
          return;
        }

        const isTheOnlyImportSpecifier = specifiersNodes.length === 1;
        if (!isTheOnlyImportSpecifier) {
          context.report({
            node,
            messageId: MESSAGE_IDS.shouldHaveOnlyDefaultImport,
          });
        }
      },
    };
  },
};
