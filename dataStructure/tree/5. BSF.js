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
class Node {
    constructor(value, parentNode = null) {
        this.children = []
        this.value = value
        this.parent = parentNode
    }
    addNode(value) {
        const segments = value.split('/')
        if (segments.length === 0) return

        if (segments.length === 1) {
            const node = new Node(segments[0], this)
            this.children.push(node)
            return {
                node: node,
                index: this.children.length - 1
            }
        }
        const existingChildNode = this.children.find(child => child.value === segments[0])
        if (existingChildNode) {
            existingChildNode.addNode(segments.slice(1).join('/'))
        } else {
            const node = new Node(segments[0], this)
            node.addNode(segments.slice(1).join('/'))
            this.children.push(node)
            return {
                node: node,
                index: this.children.length - 1
            }
        }

    }
    removeNode(value) {
        const segments = value.split('/')
        if (segments.length === 0) return

        if (segments.length === 1) {
            const existingNodeIndex = this.children.findIndex(child => child.value === segments[0])
            if (existingNodeIndex < 0) {
                throw new Error('Can\'t find value')
            }
            this.children.splice(existingNodeIndex, 1)
        }
        if (segments.length > 1) {
            const existingChildNode = this.children.find(child => child.value === segments[0])
            if (!existingChildNode) {
                throw new Error('Can\'t find value or folder')
            }
            existingChildNode.removeNode(segments.slice(1).join('/'))
        }
    }

    find(value) {
        // breadth first
        for (const child of this.children) {
            if (child.value === value) {
                return child;
            }
        }
        for (const child of this.children) {
            const nestedChildNode = child.find(value);
            if (nestedChildNode) {
                return nestedChildNode;
            }
        }
    }
}
class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }
    add(path) {
        this.root.addNode(path)
    }
    remove(path) {
        this.root.removeNode(path)
    }
    find(value) {
        if (this.root.value === value) {
            return this.root
        }
        this.root.find(value)
    }
}

const fileSystem = new Tree('/')
filesystem.add('documents');
filesystem.add('documents/myData/tax.docx');
filesystem.add('personal');
filesystem.add('games/cod.exe');
filesystem.add('games/cod2.exe');
filesystem.remove('games/cod.exe');
// filesystem.remove('games/cod3.exe');
// filesystem.remove('gamessssss/cod2.exe');
console.log(filesystem.find('myData'));