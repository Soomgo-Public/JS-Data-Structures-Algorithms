# 스택

## 학습 목표

<ol>
  <li>
    <h3>스택을 만들 수 있다.</h3>
  </li>
</ol>
<br/>

&ensp;배열에서 원소를 추가/삭제하는 것 이상의 자료구조가 필요한 경우 스택/큐를 활용할 수 있다.

> 스택은 후입선출 원리에 따라 정렬된 컬렉션이다.

스택의 자료는 항상 동일한 종단점에서 추가/삭제된다.<br/>
(꼭대기와 바닥)
후입선출(LIFO)이기에 바닥에는 항상 가장 오래된 자료가, 꼭대기에는 가장 최신의 자료가 위치한다.
<br/>

## 스택 만들기

스택에서 일반적으로 사용되는 메소드이다.

- push
- pop
- peek
- isEmpty
- clear
- size

```

function Stack (){
  var items = [];

  this.push = function(el){
    items.push(el);
  }

  this.pop = function(el){
    items.pop(el);
  }

  this.peek = function(){
    return items[items.length -1];
  }

  this.isEmpty = function(){
    return items.length === 0;
  }

  this.size = function(){
    return items.length;
  }

  this.clear = function(){
    items = [];
  }
}
```

## 예제

### 10진수를 n진수로 변환하기

```
function divideBy2(argNumber){
  let stack = new Stack(),
  나머지,
  binaryString = '';

  while(argNumber > 0){
    나머지 = Math.floor(argNumber % 2);
    stack.push(나머지);
    argNumber = Math.floor(argNumber / 2);
  }

  while(!stack.isEmpty()){
    binaryString += stack.pop().toString();
  }

  return binaryString;
}
```

#### 학습활동

- 개선해보기
- 2진법이 아닌 n진법 만들어보기
