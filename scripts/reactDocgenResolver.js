const reactDocs = require('react-docgen');
const findAllComponentDefinitions = reactDocs.resolver.findAllComponentDefinitions;
const findExportedComponentDefinition = reactDocs.resolver.findExportedComponentDefinition;
const findAllExportedComponentDefinitions = reactDocs.resolver.findAllExportedComponentDefinitions;
// console.log(['findAllExportedComponentDefinitions'], findAllExportedComponentDefinitions)

module.exports = function(ast, recast) {
  // console.log(['reactDocgenResolver']);
  // console.log(['ast'], ast);
  // console.log(['recast'], recast);
  // console.log(['findAllComponentDefinitions'], findAllComponentDefinitions(ast, recast));
  // console.log(['findExportedComponentDefinition'], findExportedComponentDefinition(ast, recast));
  // console.log(['findAllExportedComponentDefinitions'], findAllExportedComponentDefinitions(ast, recast));
  return findAllComponentDefinitions(ast, recast);
};
