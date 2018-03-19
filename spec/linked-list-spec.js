describe('createNewLinkedList', ()=>{
  let list = createNewLinkedList();
  it('root node should start out null', () => {
    expect(list.root).toBeNull();
  });
  it('should return root node', () => {
    expect(createNewLinkedList()).toEqual({root: null});
  });
});

describe('addNodeToLinkedList',() => {
  it('should add a node to an empty linked list', ()=>{
    let newList = createNewLinkedList();
    let addedNode = addNodeToLinkedList(newList, "first node");
    expect(newList.root).toEqual({element: "first node", next: null});
  });
});

describe('deleteAt', () => {
  let ll = createNewLinkedList();
  addNodeToLinkedList(ll, 'hello');
  addNodeToLinkedList(ll, 'there');
  addNodeToLinkedList(ll, 'world');
  it('should take two parameters: list and distance', () => {
    expect(deleteAt(ll, 1)).toBe()
  });
  
})