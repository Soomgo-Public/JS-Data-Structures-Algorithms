# 딕셔너리와 해시

## 학습목표

<ol>
  <li>
    <h3>딕셔너리가 무엇인지 알고, 구현체를 만들 수 있다.</h3>
  </li>
  <li>
    <h3>JavaScript Map 클래스를 이해한다.</h3>
  </li>
  <li>
    <h3>해시 함수를 이해한다.</h3>
  </li>
  <li>
    <h3>해시 테이블을 이해하고, 구현체를 만들 수 있다.</h3>
  </li>
  <li>
    <h3>해시 충돌에 대해 이해하고 해결할 수 있다.</h3>
  </li>
</ol>

<br/>

> 딕셔너리, 해시 모두 유일한 값을 저장하기 위한 자료구조이다.
>
> 집합이 원소의 값에 초점을 두었다면, 딕셔너리와 해시는 [키, 값] 향태로 저장하는 자료구조이다.

<br/>

## 딕셔너리

맵이라고 부른다.<br/>
JavaScript에서 Map 객체로 내장되어 있다.

```
let items = {
}

has
set
remove
get
keys
values
```

### has

```
this.has = (key) => {
  return key in items;
}
```

### set / remove

```
this.set = (key,value) => {
  items[key] = value;
}

this.remove = (key) => {
  if(this.has(key)){
    delete items[key];
  }
}
```

### get과 values

```
this.get = (key) => {
  return this.has(key) ? items[key] : undefined;
}

this.values = () => {
  let v = [];

  for (let k in items){
    if(this.has(k)){
      v.push(items[k]);
    }
  }

  return v;
}
```

## 해시 테이블

> 딕셔너리의 해시 구현

**_해싱_**

> 자료 구조에서 특정 값을 가장 신속하게 찾는 방법
> 해시 함수는 키에 대한 주소를 테이블에서 찾아주는 함수
> (일반적으로 루즈루즈 함수. 키 문자 열에 아스키 값을 단순히 더하는 것)

```
let table = {}

put
remove
get
```

### put, get, remove

```
this.put = (key, value) => {
  let position = hash(key)
  table[position] = value;
}

this.get = (key) => {
  return table[hash(key)];
}

this.remove = (key) => {
  table[hash(key)] = undefined
}
```

### 해시 충돌

> 키는 다른데 해싱 결과가 같은 경우

`이중 해싱`, `체이닝`, `선형 탐사`를 통해 해결 가능

### 체이닝

테이블의 `인덱스별로 연결 리스트를 생성`해 그 안에 원소를 저장하는 기법

> 메모리가 추가 소요됨

```
this.put = (key, value) => {
  let position = hash(key);
  if(table[position] == undefined){
    table[position] = new LinkedList();
  }
  table[position].append([key, value]);
}

this.get = (key) => {
  let position = hash(key);

  if(table[position] !== undefined){
    let current = table[position].getHead();
  }

  while(current.next){
    if(current.el.key === key){
      return current.element.value;
    }
    current = current.next;
  }

  if(current.el.key === key){
      return current.element.value;
  }
}
```

### 선형 탐색법

새 원소 추가 시 인덱스가 이미 점유된 상태라면 인덱스 + 1,... +n을 찾아서 충돌을 회피

```
this.put = (key, value) => {
  let position = hash(key);

  if(table[postion] == undefined) {
    table[position] = [key, value];
  } else {
    let index = position + 1;

    while(table[index] !== undefined){
      index += 1;
    }

    table[index] = [key, value];
  }
}
```

**_JS를 제외하면 동적 배열이 아니므로, 고민해야하지만, JS는 문제없다._**

<br/>

**_좋은 해시함수란 원소 삽입과 조회속도가 빠르고 충돌확률이 낮아야 한다._**
(루즈루즈는 너무 잦은 충돌을 야기)
