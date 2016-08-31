/**
 * @fileoverview Rule to disallow wrap in template string
 * @author Zhang Visper
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'disallow wrap in template string',
      category: 'ECMAScript 6',
      recommended: false
    },
    schema: [] // no options
  },
  create: function(context) {
    return {
      TemplateLiteral(node) {
        if (node.loc.start.line !== node.loc.end.line) {
          context.report({
            node: node,
            message: 'Unexpected wrap in template string'
          })
        }
      }
    };
  }
};
