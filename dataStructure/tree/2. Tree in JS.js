/*
    node/vertex
    edge
    rootNode
    sub tree
    Path
    distance - distance from root
    parent
    child
    ancestor
    desendant
    sibling
    degree  - number of childs
    level
    depth - max lavel
    breadth - number of leaves in tree
    size = all nodes
*/
class Node{
    constructor(value,parentNode = null) {
        this.children = []
        this.value = value
        this.parent = parentNode
    }
    addNode(value) {
        const node = new Node(value,this)
        this.children.push(node)
        return { node : node , index : this.children.length-1}
    }
    removeNode() {
        this.children.splice(index,1)
    }
}
class Tree{
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }
}

const fileSystem = new Tree('/')
const documentsData = fileSystem.root.addNode('/documents')
const gamesNodeData = fileSystem.root.addNode('/games')
documentsData.node.addNode('file.txt')
gamesNodeData.node.addNode('jay')

console.log(fileSystem);