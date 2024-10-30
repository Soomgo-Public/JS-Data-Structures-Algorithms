# 큐

Queue는 FIFO 원리에 따른 정렬된 컬렉션이다.

## 큐 만들기

```jsx
function Queue() {
  let items = [];

  this.enqueue = function (element) {
    // O(1)
    items.push(element);
  };

  this.dequeue = function () {
    // O(n)
    return items.shift();
  };

  this.front = function () {
    // O(1)
    return items[0];
  };

  this.isEmpty = function () {
    return !items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  };
}
```

Array를 사용해 구현하면 생기는 단점은 `dequeue` 에서 매번 `O(n)` 번의 연산이 발생한다는 것이다. `queue`의 사이즈가 클 경우 오버헤드가 많이 발생할 가능성이 크기 때문에 다음과 같이 구현하자.

```jsx
function Queue() {
  function Node(value) {
    this.value = value;
    this.next = null;
  }

  let front = null;
  let rear = null;
  let length = 0;

  this.enqueue = function (value) {
    // 새로운 노드 생성
    const newNode = new Node(value);

    if (!rear) {
      // 처음 enqueue하는 경우
      front = rear = newNode;
    } else {
      // 가장 끝 노드에 새로운 노드 추가
      rear.next = newNode;
      // 끝 포인터 변경
      rear = newNode;
    }
    length += 1;
  };

  this.dequeue = function () {
    if (!front) return null;

    // 가장 첫 번째 노드 가져옴
    const dequeuedNode = front;
    // 두 번째 노드를 시작 포인터로 설정
    front = front.next;
    if (!front) {
      // 마지막 노드였을 경우
      rear = null;
    }
    length -= 1;
    return dequeuedNode.value;
  };

  this.front = function () {
    return front;
  };

  // ...이하 생략
}
```

위와 같이 Linked List로 구현하게 되면 `enqueue`, `dequeue` 모두 `O(1)` 만에 요소를 추가, 제거가 가능하다.

## 우선순위 큐

우선순위 큐는 각 요소에 우선순위를 부여해 오름차순, 내림차순으로 정렬된 컬렉션으로 사용하는 자료구조이다.

```jsx
function PriorityQueue() {

	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	let items = [];

	this.enqueue = function(element, priority) {
		const element = new QueueElement(element, priority);

		if (this.isEmpty()) {
			items.push(element);
		} else {
			const added = false;
			for (let i = 0; i < items.length; i++) {
				if (element.priority < items[i].priority) {
					items.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if (!added) {
				items.push(element);
			}

			// o(N log N)
			// items.sort();
	}

	// ...이하 생략
}
```

위 코드는 `O(n)` 의 시간이 걸리므로, 느리다고 할 수 있다.

```jsx
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}
```

`heap`은 삽입과 삭제 모두 `O(log n)` 의 시간이 소요되므로 정렬을 사용하는 것보다 빠른 속도를 낼 수 있다.

이렇듯 우선순위 큐는 정렬에 따라 최소 우선순위 큐 또는 최대 우선순위 큐로 불린다.

## 환형 큐

또 다른 큐의 변형인 환형 큐를 알아보자.

### 뜨거운 감자 게임(조세푸스 문제)

원을 그리고 선 아이들이 뜨거운 감자를 옆 사람에게 최대한 빨리 전달하다가, 갑자기 모두 동작을 멈추고 그 때 뜨거운 감자를 손에 들고 있는 아이를 벌칙으로 퇴장시키는 게임이다.

```jsx
// ...Queue

// N -> nameList.length
// K -> num
// O(NK)
function hotPotato(nameList, num) {
  // linked list
  const queue = new Queue();

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + " (을)를 뜨거운 감자 게임에서 퇴장시킵니다.");
  }
  // O(N * K)

  return queue.dequeue();
}

let players = ["Alice", "Bob", "Charlie", "David", "Eve"];
let numPasses = 7;
console.log("winner:", hotPotato(players, numPasses));
```

여담으로 알고리즘을 활용하면 자료구조 없이 더 빠른 시간(`O(n)`) 안에 해결 가능하다

### 점화식(재귀)

```jsx
// 점화식: f(n, k) = ((f(n - 1, k) + k) % n) + 1
// f(1, k) = 1 : 기저조건
// f(n - 1, k) -> n - 1 : 다음 요소 위치
// k:  다음 요소로 이동해야할 횟수
// (f(n - 1, k) + k) % n :
//     ex) 5 > 7
//     7 % 5 = 2
//     2 + 1 = 3

// O(N)
function findTheWinner(n, k) {
  if (n === 1) return 1;
  return ((findTheWinner(n - 1, k) + k) % n) + 1;
}
let players = ["Alice", "Bob", "Charlie", "David", "Eve"];
let numPasses = 7;

console.log("winner:", players[findTheWinner(players.length, numPasses) - 1]);
```

### 동적계획법(DP)

```jsx
function findTheWinner(n, k) {
  let s = 1;

  for (let i = 1; i < n + 1; i++) {
    s = ((s + k) % i) + 1;
  }
  return s;
}
let players = ["Alice", "Bob", "Charlie", "David", "Eve"];
let numPasses = 7;

console.log("winner:", players[findTheWinner(players.length, numPasses) - 1]);
```
