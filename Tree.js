// Number of nodes
let N = 7, Root = 1;

// Adjacency list to store the tree
let adj = new Array(N + 1).fill(null).map(() => []);

// Creating the tree
addEdge(1, 2, adj);
addEdge(1, 3, adj);
addEdge(1, 4, adj);
addEdge(2, 5, adj);
addEdge(2, 6, adj);
addEdge(4, 7, adj);

// Function to add an edge between vertices x and y
function addEdge(x, y, arr) {
	arr[x].push(y);
	arr[y].push(x);
}

// Function to print the parent of each node
function printParents(node, arr, parent)
{

	// current node is Root, thus, has no parent
	if (parent == 0)
		console.log(`${node}->Root`);
	else
		console.log(`${node}->${parent}`);
		
	// Using DFS
	for (let cur of arr[node])
		if (cur != parent)
			printParents(cur, arr, node);
}

// Function to print the children of each node
function printChildren(Root, arr)
{

	// Queue for the BFS
	let q = [];
	
	// pushing the root
	q.push(Root);
	
	// visit array to keep track of nodes that have been
	// visited
	let vis = new Array(arr.length).fill(0);
	// BFS
	while (q.length > 0) {
		let node = q.shift();
		vis[node] = 1;
		console.log(`${node}-> `);
		for (let cur of arr[node])
			if (vis[cur] == 0) {
				console.log(cur + " ");
				q.push(cur);
			}
		console.log("\n");
	}
}

// Function to print the leaf nodes
function printLeafNodes(Root, arr)
{

	// Leaf nodes have only one edge and are not the root
	for (let i = 1; i < arr.length; i++)
		if (arr[i].length == 1 && i != Root)
			console.log(i + " ");
	console.log("\n");
}

// Function to print the degrees of each node
function printDegrees(Root, arr) {
	for (let i = 1; i < arr.length; i++) {
		console.log(`${i}: `);
		
		// Root has no parent, thus, its degree is equal to
		// the edges it is connected to
		if (i == Root)
			console.log(arr[i].length + "\n");
		else
			console.log(arr[i].length - 1 + "\n");
	}
}

// Driver code
// Printing the parents of each node
console.log("The parents of each node are:");
printParents(Root, adj, 0);

// Printing the children of each node
console.log("The children of each node are:");
printChildren(Root, adj);

// Printing the leaf nodes in the tree
console.log("The leaf nodes of the tree are:");
printLeafNodes(Root, adj);

// Printing the degrees of each node
console.log("The degrees of each node are:");
printDegrees(Root, adj);

// This code is contributed by ruchikabaslas.
