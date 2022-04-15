/*
Given n friends and their friendship relations, find the total number of groups that exist. 
And the number of ways of new groups that can be formed consisting of people from every existing group.
If no relation is given for any person then that person has no group and singularly forms a group. 
If a is a friend of b and b is a friend of c, then a b and c form a group.

Input : Number of people = 6
Relations : 1 - 2, 3 - 4 and 5 - 6
Output: Number of existing Groups = 3
Number of new groups that can be formed = 8

Explanation: The existing groups are 
(1, 2), (3, 4), (5, 6). The new 8 groups 
that can be formed by considering a 
member of every group are (1, 3, 5), 
(1, 3, 6), (1, 4, 5), (1, 4, 6), (2, 
3, 5), (2, 3, 6), (2, 4, 5) and (2, 4,
6). 

Input: Number of people = 4
Relations : 1 - 2 and 2 - 3
Output: Number of existing Groups = 2
Number of new groups that can
be formed = 3
*/

// recursion
// 1 - 3 - 5
//       \ 6
//   \ 4 - 5
//       \ 6
// 2

class Graph{
    constructor(n){
        this.n = n;
        this.adjList = new Array(n);
        this.adjList = Array.from(this.adjList, ()=>[])
    }
    addEdge(p,q){
        p = p - 1;
        q = q - 1;
        this.adjList[p].push(q);
        this.adjList[q].push(p);
    }

    // Returns count of not visited nodes reachable from v using DFS.
    countUtil(v, visited){
        let count = 1;
        visited[v] = true;
        for(let i of this.adjList[v]){
            if(!visited[i]){
                count = count + this.countUtil(i, visited)
            }
        }
        return count;
    }

    // A DFS based function to Count number of existing groups and number of new groups
    // that can be formed using a member of every group.
    countGroups(){
        // Mark all the vertices as not visited
        let visited = new Array(this.n).fill(false);
        let existing_group = 0, new_groups = 1;
        for(let i = 0; i< this.n; i++){
            if(visited[i] === false){
                existing_group++;
                // Number of new groups that can be formed
                new_groups = new_groups*this.countUtil(i, visited)
            }
        } 
        if(existing_group === 1) new_groups = 0;
        return [existing_group, new_groups]
    }
}


let node = new Graph(6);
node.addEdge(1,2);
node.addEdge(3,4);
node.addEdge(5,6);
node.adjList;
node.countGroups();



