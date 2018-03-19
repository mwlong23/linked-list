// create linked list with { root: null }
// Add element to linked list {element: element, next: null}

function createNewLinkedList(){
  return {
    root: null
  }
}

function addNodeToLinkedList(list, element) {
  let node = { element: element, next: list.root }
  list.root = node
}

function printList(list) {
  let output = ''; 
  let node = list.root
  while(node != null) {
    output += node.element + " ";
    node = node.next
  }
  console.log(output);
}

function addListItemAt(list, dist, element) {
  let node = list.root;
  // find node
  // stop before insertion
  while(dist>1){
    node = node.next
    --dist;
  }
  //update node
  let newNode = { element: element, next: null };
  newNode.next = node.next;
  node.next = newNode;
}

function deleteAt(list, dist) {
  let node = list.root;
  //locate node to be removed
  while(dist > 1) {
    node = node.next;
    --dist;
  }
  // Remove item from list 
  //Set pointer to node after the node being deleted
  let nodeAfterDeletedNode = node.next.next;
  node.next = nodeAfterDeletedNode;
}

// Reverses a Linked List
function reverseList(list) {
  let reversedList = createNewLinkedList();
  // root nodes for start linked-list and reversed linked-list
  let rootNode = list.root
  let reversedRootNode = reversedList.root

  while(rootNode != null) {
    let newNode = { element: rootNode.element, next: reversedRootNode }
    reversedRootNode = newNode
    reversedList.root = reversedRootNode
    rootNode = rootNode.next
  }
  list.root = reversedList.root;
}

let ll = createNewLinkedList();
addNodeToLinkedList(ll, "!");
addNodeToLinkedList(ll, 'world');
addNodeToLinkedList(ll, 'there');
addNodeToLinkedList(ll, 'Hello,')
deleteAt(ll, 2);
addListItemAt(ll, 2, "blue");
printList(ll)
reverseList(ll)
printList(ll)





