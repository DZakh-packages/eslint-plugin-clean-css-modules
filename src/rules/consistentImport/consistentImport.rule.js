/**
 * @fileoverview Assures consistent usage of css-modules in your project
 * @author Dmitry Zakharov
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export const consistentImportRule = {
  meta: {
    docs: {
      description: 'Assures consistent usage of css-modules in your project',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      ImportDeclaration(node) {
        context.report({
          node,
          message: 'No ImportDeclaration.',
        });
      },
    };
  },
};
