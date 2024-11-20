class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const NuevoNodo = new Node(value);
        if (this.root === null) {
            this.root = NuevoNodo;
        } else {
            this._insertRecursively(this.root, NuevoNodo);
        }
    }

    _insertRecursively(currentNodo, NuevoNodo) {
        if (NuevoNodo.value < currentNodo.value) {
            if (currentNodo.left === null) {
                currentNodo.left = NuevoNodo;
            } else {
                this._insertRecursively(currentNodo.left, NuevoNodo);
            }
        } else {
            if (currentNodo.right === null) {
                currentNodo.right = NuevoNodo;
            } else {
                this._insertRecursively(currentNodo.right, NuevoNodo);
            }
        }
    }

    search(value, node = this.root) {
        if (node === null) {
            return false;
        }
        if (node.value === value) {
            return true;
        }
        return value < node.value 
            ? this.search(value, node.left) 
            : this.search(value, node.right);
    }


    preOrden(node = this.root) {
        if (node !== null) {
            console.log(node.value);
            this.preOrden(node.left);
            this.preOrden(node.right);
            
     }
    }

    inOrden(node = this.root){
        if(node !== null){
            this.inOrden(node.left);
            console.log(node.value);
            this.inOrden(node.right);
        }
    }

    postOrden(node = this.root){
        if(node !== null){
            this.postOrden(node.left);
            this.postOrden(node.right);
            console.log(node.value);
        }
    }

    sumNodes(){
        
    }
}

const arbol = new BinaryTree();
arbol.insert(10);
arbol.insert(5);
arbol.insert(3);
arbol.insert(20);
arbol.insert(7);
arbol.insert(15);
arbol.insert(25);
console.log('pre - orden');
arbol.preOrden();
console.log('in - orden');
arbol.inOrden();
console.log('post - orden');
arbol.postOrden();

