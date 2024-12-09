# 트리

트리는 비순차적 자료구조로, 계층 구조를 추상화한 모델이다.

가장 흔한 예시로는 가계도 혹은 회사 조직 구조 정도를 떠올릴 수 있다.

## 용어 설명

트리는 부모-자식 관계를 가진 다수의 노드로 구성된다. 최상위 노드인 루트(root)를 제외한 모든 노트는 부모 노드를 가지고 있으며, 다수의 자식 노드를 가질 수도 있고, 아예 없을 수도 있다.

![트리](https://i.namu.wiki/i/Ye62cgolsPsR6bBWPuldZsrymF1kfx2tQjbwZ8-DgYwA7MKdVKVUbYd0VYlA3ws8QoeDeY35seAdNZfDpG6uVdWTjXuym62ytgsZMYu2A7UGDLi3sK1_IWw9FOLqnqy5yC8SxZcywWozwnYkuussUg.webp)

- 루트(root): 최상위 노드, 부모가 없는 노드
- 내부 노드: 자식이 하나 이상이 존재하는 노드
- 외부 노드(leaf): 자식이 존재하지 않는 노드

- 조상: 루트 노드를 제외한 상위 노드를 일컫는다.
- 후손: 조상과 반대로 하위 노드를 일컫는다.
- 서브 트리: 노드와 후손으로 이루어진 한 쌍의 작은 트리

- 깊이: 조상의 개수, 레벨로 구분 하기도 함
- 높이: 깊이의 최대치

## 이진 트리와 이진 탐색 트리

이진 트리(binary tree): 좌, 우측에 각각 하나씩 하여 최대 두 개의 자식 노드를 가진 트리

이진 탐색 트리(binary search tree): 이진 트리에서 좌측 자식 노드에는 작은 값을, 우측 자식 노드에는 더 큰 값을 들고 있다는 규칙이 추가된 트리

## 이진 탐색 트리 만들기

### 트리의 기본 틀 구현

```js
function Node(key) {
  this.key = key;
  this.left = null; // 좌측 자식 노드
  this.right = null; // 우측 자식 노드
}

function BinarySearchTree() {
  let root = null; // 최상단 노드
}
```

### 특정 키를 추가하는 메소드 구현

```js
function BinarySearchTree() {
  let root = null;

  this.insert = function (key) {
    const newNode = new Node(key);
    if (root === null) {
      // 루트가 없을 경우, 노드를 루트로 지정
      root = newNode;
    } else {
      // 그 외 노드 삽입
      insertNode(root, newNode);
    }
  };
}

function insertNode(node, newNode) {
  //  새로운 노드의 key값보다 현재 노드의 key값이 클 경우
  if (newNode.key < node.key) {
    // 노드의 좌측 자식 노드가 비어있을 경우 지정
    if (node.left === null) {
      node.left = newNode;
    } else {
      // 비어있지 않을 경우 좌측 자식 노드를 대상으로 재귀 호출
      insertNode(node.left, newNode);
    }
  } else {
    // 노드의 우측 자식 노드가 비어있을 경우 지정
    if (node.right === null) {
      node.right = newNode;
    } else {
      // 비어있지 않을 경우 우측 자식 노드를 대상으로 재귀 호출
      insertNode(node.right, newNode);
    }
  }
}
```

### 트리 순회 구현

트리의 순회란, 모든 노드를 방문하여 어떠한 작업을 수행하는 것을 트리 순회라고 한다.

트리의 순회 방법에는 세 가지가 있다.

#### 중위 순회

중위 순회는 노드를 오름차순, 즉 작은 값에서 큰 값 순서대로 방문하는 방법이다.

```js
function inOrderTraverseNode(node, callback) {
  // 노드가 null이라면 재귀 호출을 중단한다
  if (node === null) return;

  // 좌측 자식 노드를 먼저 방문
  inOrderTraverseNode(node.left, callback);
  // 현재 노드를 방문
  callback(node.key);
  // 우측 노드를 방문
  inOrderTraverseNode(node.right, callback);
}
```

중위 순회를 통해 값을 출력할 경우 다음과 같다.

> H D I B E A F C G

#### 전위 순회

전위 순회는 자식 노드보다 자기 자신을 먼저 방문하는 방법이다.

```js
function preOrderTraverseNode(node, callback) {
  // 노드가 null이라면 재귀 호출을 중단한다
  if (node === null) return;

  // 현재 노드를 먼저 방문
  callback(node.key);
  // 좌측 노드를 방문
  preOrderTraverseNode(node.left, callback);
  // 우측 노드를 방문
  preOrderTraverseNode(node.right, callback);
}
```

전위 순회를 통해 값을 출력할 경우 다음과 같다.

> A B D H I E C F G

#### 후위 순회

후위 순회는 자식 노드를 모두 방문한 뒤 자기 자신을 방문하는 방법이다.

```js
function postOrderTraverseNode(node, callback) {
  // 노드가 null이라면 재귀 호출을 중단한다
  if (node === null) return;

  // 좌측 노드를 먼저 방문
  postOrderTraverseNode(node.left, callback);
  // 우측 노드를 방문
  postOrderTraverseNode(node.right, callback);
  // 현재 노드를 방문
  callback(node.key);
}
```

후위 순회를 통해 값을 출력할 경우 다음과 같다.

> H I D E B F G C A

### 트리 노드 검색 구현

트리를 검색하는 방법에는 세 가지가 있다.

#### 최솟값, 최댓값 찾기

이진 탐색 트리의 특징을 잘 보면, 최솟값 혹은 최댓값을 한 눈에 알 수 있다.

최하위 레벨의 맨 좌측 노드가 최솟값, 최하위 레벨의 맨 우측 노드가 최댓값이다.

```js
function minNode(node) {
  if (!node) return null;

  while (node.left !== null) {
    node = node.left;
  }
  return node.key;
}

function maxNode(node) {
  if (!node) return null;

  while (node.right !== null) {
    node = node.right;
  }
  return node.key;
}
```

각각의 메소드는 기준이 될 node를 넘겨받는데, 이런 식으로 트리 혹은 서브트리의 최소, 최댓값을 구할 수 있다.

#### 특정 값 찾기

```js
function searchNode(node, key) {
  // 노드가 없을 경우 false
  if (node === null) return false;

  // 특정 값이 현재 노드보다 작을 경우
  if (key < node.key) {
    return searchNode(node.left, key);
  }
  // 특정 값이 현재 노드보다 클 경우
  else if (node.key < key) {
    return searchNode(node.right, key);
  }
  // 현재 노드가 특정 값일 경우
  return true;
}
```

### 노드 삭제

아마 가장 복잡할 듯

```js
function removeNode(node, key) {
  if (node === null) return null;

  // 특정 값이 현재 노드보다 작을 경우
  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  }

  // 특정 값이 현재 노드보다 클 경우
  if (node.key < key) {
    node.right = removeNode(node.right, key);
    return node;
  }
  // 현재 노드가 특정 값일 경우
  // 1. 현재 노드가 리프 노드일 경우
  if (node.left === null && node.right === null) {
    // 빈 노드(null)를 반환한다
    return null;
  }
  // 2. 자식이 하나 있는 노드일 경우
  if (node.left === null || node.right === null) {
    // 비어있지 않은 노드를 반환한다.
    return node.left || node.right;
  }
  // 3. 자식이 둘인 노드일 경우
  // 우측 서브트리의 최솟값 검색
  const changeData = minNode(node.right);
  // 현재 노드의 값을 서브트리의 최솟값으로 교체
  node.key = changeData.key;
  // 우측 서브트리에서 중복 데이터 제거
  node.right = removeNode(node.right, changeData.key);
  // 현재 노드 반환
  return node;
}
```
