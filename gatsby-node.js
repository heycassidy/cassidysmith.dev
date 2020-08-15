exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type !== 'Mdx') {
    return;
  }
  const fileNode = getNode(node.parent);
  createNodeField({
    node,
    name: 'modifiedTime',
    value: fileNode.mtime
  });
};