class Dictionary {
	constructor() {
		this.items = {};
	}

	has(key) {
		return key in this.items;
	}

	set(key, value) {
		this.items[key] = value;
	}

	remove(key) {
		if (this.has(key)) {
			delete this.items[key];
			return true;
		}
		return false;
	}

	get(key) {
		return this.has(key) ? this.items[key] : undefined;
	}

	values() {
		let values = [];
		for (let k in this.items) {
			if (this.has(k)) {
				values.push(this.items[k]);
			}
		}
		return values;
	}

	clear() {
		this.items = {};
	}

	size() {
		return Object.keys(this.items).length;
	}

	keys() {
		return Object.keys(this.items);
	}

	getItems() {
		return this.items;
	}
}

class Graph {
	constructor() {
		this.vertices = [];
		this.adjList = new Dictionary();
	}

	// 정점 추가
	addVertex(v) {
		this.vertices.push(v);
		this.adjList.set(v, []);
	}

	// 간선 추가
	addEdge(v, w) {
		this.adjList.get(v).push(w);
		this.adjList.get(w).push(v);
	}

	toString() {
		let s = '';
		for (let i = 0; i < this.vertices.length; i++) {
			s += this.vertices[i] + ' -> ';
			let neighbors = this.adjList.get(this.vertices[i]);
			for (let j = 0; j < neighbors.length; j++) {
				s += neighbors[j] + ' ';
			}
			s += '\n';
		}
		return s;
	}
}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
	graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());
