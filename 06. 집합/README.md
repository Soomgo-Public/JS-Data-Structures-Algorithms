# 06. 집합

## 학습목표

<ol>
  <li>
    <h3>JavaScript로 집합 구현체를 만들 수 있다.</h3>
  </li>
  <li>
    <h3>JavaScript Set 클래스를 이해한다.</h3>
  </li>
</ol>

<br/>

### 집합은

**_배열이 아닌 객체로 집합(모임)을 표현한다_**

- 정렬되지 않은 컬렉션이다.
- 중복되는 원소가 없다.

<br/>

## 집합 만들기

- add / remove
- has
- size
- values

```
function Set(){
  let items = {};

  this.has = function(value){
    return items.hasOwnProperty(value);
    // return value in items;
  }

  this.add = function(value){
    if(!this.has(value)){
      items[value] = value;
    }
  }

  this.remove = function(value){
    if(this.has(value)){
      delete items[value];
    }
  }

  this.values = function(){
    return Object.keys(values)
  }
}
```

## 합집합

```
this.union = function(set) {
  let unionSet = new Set();
  let values = this.values();

  for(let i=0; i < values.length; i++>){
    unionSet.add(values[i]);
  }

  values = set.values();

  for(let i=0; i < values.length; i++>){
    unionSet.add(values[i]);
  }

  return unionSet;
}
```

## 교집합

```
this.intersection = function(set){
  let intersectionSet = new Set();
  let values = this.values();

  for(let i=0; i < values.length; i++>){
    if(set.has(values[i])){
      intersectionSet.add(values[i]);
    }
  }

  return intersectionSet;
}
```

## 차집합

```
this.diff = function(set){
  let diffSet = new Set();
  let values = this.values();

  for(let i=0; i < values.length; i++>){
    if(!set.has(values[i])){
      diffSet.add(values[i]);
    }
  }

  return intersectionSet;
}
```

## 부분집합

```
this.subset = function(set){
  let values = this.values();
  if(values.length > set.values().length) return false;

  for(let i=0; i < values.length; i++>){
    if(!set.has(values[i])){
      return false
    }
  }

  return true;
}
```
