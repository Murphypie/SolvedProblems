/*
 * @lc app=leetcode id=355 lang=javascript
 *
 * [355] Design Twitter
 */

// @lc code=start


class MaxHeap{
    constructor(){
        this.size = 0;
        this.storage = [];
    }
    hasParent(ind){
        return this.getParentIndex(ind) >= 0;
    }
    getParentIndex(ind){
        return Math.floor((ind-1)/2)
    }
    getParent(ind){
        return this.storage[this.getParentIndex(ind)]
    }
    hasLeftChild(ind){
        return this.getLeftChildIndex(ind) < this.size
    }
    getLeftChildIndex(ind){
        return 2*ind+1
    }
    getLeftChild(ind){
        if(this.hasLeftChild(ind)) return this.storage[this.getLeftChildIndex(ind)]
    }
    getRightChildIndex(ind){
        return 2*ind+2;
    }
    hasRightChild(ind){
        return this.getRightChildIndex(ind) < this.size;
    }
    getRightChild(ind){
        if(this.hasRightChild(ind)) return this.storage[this.getRightChildIndex(ind)];
    }
    swap(index1, index2){
        const temp = this.storage[index1];
        this.storage[index1] = this.storage[index2];
        this.storage[index2] = temp;
    }
    heapifyUp(){
        let ind = this.size-1;
        while(this.hasParent(ind) && this.getParent(ind) < this.storage[ind]){
            this.swap(this.getParentIndex(ind), ind);
            ind = this.getParentIndex(ind);
        }
    }
    heapfyDown(){ 
        let ind = 0;
        while(this.hasLeftChild(ind)){
            let biggerChildIndex = this.getLeftChildIndex(ind);
            if(this.getRightChild(ind) > this.getLeftChild(ind)){
                biggerChildIndex += 1
            }
            if(this.storage[ind] < this.storage[biggerChildIndex]){
                this.swap(ind, biggerChildIndex)
            }else{
                break;
            }
            ind = biggerChildIndex;
        }
    }
    insert(val){
        this.size += 1
        this.storage.push(val)
        this.heapifyUp();
    }
    removeFirstNode(){
        if(this.size === 0) throw new Error("Heap is empty");
        let toBeRemoved = this.storage[0];
        this.storage[0] = this.storage.pop();
        this.size -= 1;
        this.heapfyDown();
        return toBeRemoved;
    }

}


var Twitter = function() {
    this.count = 0;
    this.tweetMap = {}; // userId -> List of [count, tweetIds]
    this.followMap = {}; // userId -> set of followed Ids
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.tweetMap[userId]){
        this.tweetMap[userId] = []
    }
    this.tweetMap[userId].push([this.count, tweetId])
    this.count += 1;
    return null;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let maxHeap = new MaxHeap();
    let followArr = [userId]
    if(this.followMap[userId]){
        followArr.push(...Array.from(this.followMap[userId]))
        for(let user of followArr){
            if(this.tweetMap[user]){
                for(let tweet of this.tweetMap[user]){
                    tweet
                }
            }
          
        }
    }
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.followMap[followerId]){
        this.followMap[followerId] = new Set()
    }
    this.followMap[followerId].add(followeeId)
    return null;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.followMap[followerId].has(followeeId)){
        this.followMap[followerId].delete(followeeId)
    }
    return null;
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

let twitter = new Twitter();
twitter.postTweet(1,5)
twitter.postTweet(1,20)
twitter.getNewsFeed(1);
twitter.follow(1,2);
twitter.follow(1,3);
twitter.postTweet(2,6);
twitter.getNewsFeed(1);
twitter

