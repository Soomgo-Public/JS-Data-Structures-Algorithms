# 05. 연결 리스트

## 학습 목표

<ol>
  <li>
    <h3>배열과 연결 리스트의 차이를 이해한다.</h3>
  </li>
  <li>
    <h3>JavaScript로 연결 리스트 구현체를 만들 수 있다.</h3>
  </li>
</ol>
<br/>

## 배열과 연결 리스트의 차이

앞서 학습했듯, 배열은 `연속된`데이터이다.<br/>
때문에 `탐색`에는 큰 장점을 가지지만, 특정 원소를 `추가/삭제` 하는 경우에는 비싼 연산을 수행한다.
<br/>
연결 리스트는 배열과 유사히지만, **_메모리상에 연속적으로 저장하지 않는다._** <br/>
연결 리스트는 포인터를 통해 추가/삭제시 모든 데이터를 순회하지 않아도 된다. 단, 이 때문에 탐색 시에는 헤드부터 루프를 반복해야 한다.
<br/>

## 연결 리스트 만들기

```
function LinkedList () {
  let Node = function(el){
    this.element = el;
    this.next = null;
  }

  let length = 0;
  let head = null;
  let tail = null;

  this.append = function(el){}
  this.insert = function(position, el){}
  this.remove = function(el){}
}
```

## 추가하기

연결 리스트에 요소를 position에 관계없이 추가하는 경우에는 연결 리스트가 비어있는지 고려해야 한다.

> 이 때 마지막 노드의 next는 항상 null인 것을 참고하여 구현한다.

<br/>

```
this.append = (el) => {
  let node = new Node(el);
  let current;

  if(head === null){
    head = node
  } else {
    current = head;
  }

  while(current.next){
    current.next = node;
  }

  length += 1;
}
```

### 특정 position에 요소를 추가하는 경우

```
this.insert = (position, el) => {
  // validate
  if(position <= 0 || position > length>) return;

  let node = new Node(el);
  let current = head;
  let prev;
  let idx = 0;

  // 첫번째 추가
  if(position === 0){
    node.next = current;
    head = node;
  } else {
    while(idx++ < position){
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;

    length += 1;
  }
}
```

<br/>

## 제거하기

삭제하려는 원소가 연결 리스트의 첫 번재 요소인지를 고려해야한다.

```
this.remove = (position) => {
  let current = head;
  let prev;
  let idx = 0;

  if(position === 0){
    head = current.next;
  } else {
    while(idx++ < position){
      prev = current;
      current = current.next;
    }
    prev.nexxt = current.text;
  }

  length -= 1;

  return current.element;
}
```

<br/>

### 다양한 종류의 연결 리스트

- prev 유무에 따라 `양방향 연결 리스트`와 단방향 연결 리스트로 구분할 수 있다.
- 마지막 원소가의 next가 head node를 가리키면 `환형 연결 리스트`이다.
