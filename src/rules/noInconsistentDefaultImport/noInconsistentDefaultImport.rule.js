import { PACKAGE_VERSION } from '@/constants';
import { checkIsStylePath } from '@/utils/checkers';

export const MESSAGE_IDS = {
  shouldHaveOnlyDefaultImport: 'shouldHaveOnlyDefaultImport',
};

export const noInconsistentDefaultImportRule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensures consistent default imports among the project',
      category: 'Possible Errors',
      url: `https://github.com/DZakh-packages/eslint-plugin-consistent-imports/blob/v${PACKAGE_VERSION}/src/rules/noInconsistentDefaultImport/noInconsistentDefaultImport.doc.md`,
      recommended: true,
      suggestion: true,
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          imports: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                pattern: { type: 'string' },
                defaultImportName: {
                  type: 'string',
                },
                allowedNamedImports: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
              },
              additionalProperties: false,
              required: ['pattern', 'defaultImportName'],
            },
          },
        },
        additionalProperties: false,
        required: ['imports'],
      },
    ],
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

        /**
         * We aren't interested in non-style modules
         */
        const moduleFilePath = node.source && node.source.value;
        const isStyleModule = checkIsStylePath(moduleFilePath);
        if (!isStyleModule) {
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
