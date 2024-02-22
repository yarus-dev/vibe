export function getRootDomNode ({ id = 'root', className = '' }) {
  let $root = document.getElementById(id);
  if (!$root) {
    $root = document.createElement('div');
    $root.id = id;
    document.body.prepend($root);
  }

  $root.className +=  ` ${id} ${className}`;
  // Normilize class names
  $root.className =[...new Set($root.className.split(' ').filter(String))].join(' ');
  return $root;
}
