# 배열

> **_동일한 타입_** 의 데이터를 **_연속적_** 으로 저장한 것

## 학습 목표

<ol>
  <li>
    <h3>JS에서 배열이 가지는 특징을 이해한다.</h3>
  </li>
  <li>
    <h3>JS에서 사용되는 다양한 배열의 메소드를 확인한다.</h3>
  </li>
</ol><br/>

## 배열을 사용하는 이유

### 그룹화

같은(비슷한) 맥락의 변수에 대해 하나의 포인터로 사용할 수 있다.

**_배열 미사용_**

```
var averageTemp1 = 1
var averageTemp2 = 2
var averageTemp3 = 3
var averageTemp4 = 4
var averageTemp5 = 5
```

**_배열 사용_**
<br/>

```
var averageTemp = [];

averageTemp[0] = 1
averageTemp[1] = 2
averageTemp[2] = 3
averageTemp[3] = 4
averageTemp[4] = 5
```

## 배열의 원소 추가와 삭제

&ensp; `new 생성자` 또는 `[]`를 통해 쉽게 배열의 인스턴스를 생성할 수 있으며, 원소를 자유롭게 추가할 수 있다.<br/>
배열의 특정 index에 직접 접근하여 초기화 및 값을 할당할 수 있다.

```
anyArray[i] = any;
```

### 자바스크립트에서 배열이 특별한 이유

&ensp;흔히 자바스크립트에서 배열은 `객체의 특수한 형태`라고 한다.<br/>
이는 배열이 Object `프로토타입을 상속`받는다는 것을 의미한다.
이에따라 배열의 다양한 Method를 활용할 수 있다.<br/>

&ensp;자바스크립트에서 배열은 `가변 객체`이다.<br/>자바스크립트에서 배열의 크기는 동적으로 할당되며, 요소에 따라 배열의 크기가 자동으로 변경된다.<br/><br/>

**_Example_**<br/>
&ensp;만약 -4 ~ 12까지 길이가 17인 numbers라는 number타입의 배열이 있다고 가정하자.<br/>여기서 맨 앞 부분을 삭제하려고 할 때, 아래의 Loop 코드를 실행하면 어떻게 될지 예상해보자.
<br/>

```
for (var i=0; i<numbers.length; i++>){
  numbers[i] = numbers[i+1]
}
```

해당 코드가 실행되어도 **_numbers의 길이는 여전히 17이다_**.<br/>
&ensp;왜냐하면 loop의 마지막 코드가 실행될 때 JS는 i+1의 존재하지 않는 위치를 참조한다.<br/>
즉, 배열의 기존 값들을 덮어쓴 것이지, 값을 실제로 삭제한게 아니다.<br/>
(배열의 길이가 동일하고, 마지막 실행 값 undefined이 추가된다)
<br/>

따라서 JS에서는 `push`,`pop`,`shift`,`unshift`를 통해서 배열의 원소를 추가, 삭제할 수 있다.<br/>

```
Array.push, pop을 통해 배열의 끝에 원소를 추가, 삭제할 수 있다.
(스택 자료 구조를 표방한 메소드)

Array.shift, unshift를 통해 배열의 앞에 원소를 추가, 삭제할 수 있다.
(큐 자료 구조를 표방한 메소드)
```

### 배열의 다양한 method

<table>
  <tr>
    <td>concat</td>
    <td>다수의 배열을 병합하고, <strong>사본</strong>을 반환한다</td>
  </tr>
  <tr>
    <td>indexOf</td>
    <td>조건에 부합하는 요소의 첫번째 인덱스를 반환한다</td>
  </tr>
  <tr>
    <td>lastIndexOf</td>
    <td>조건에 부합하는 요소의 마지막 인덱스를 반환한다</td>
  </tr>
  <tr>
    <td>every</td>
    <td>false가 반환되기 전까지 배열의 각 원소를 호출한다
    </td>
  </tr>
</table>

**_`map` vs `forEach`_**

> forEach는 별도의 사본을 반환하지 않는다.<br/>(map은 반환)

**_이상한 `sort`_**
&ensp;자바스크립트의 sort는 `모든 원소를 문자열로 취급`해 사전적으로 정렬한다.<br/>
따라서 `[1, 2, 11]` 숫자 배열을 정렬하면 `[1, 11, 2]`를 반환한다.<br/>
<br/>
이때문에 별도의 정렬 함수를 작성하여 오름차순, 내림차순 정렬을 구현할 수 있다.

```
// 오름차순 정렬 함수
function ascendingSort(arr) {
    return arr.sort((a, b) => a - b);
}

// 내림차순 정렬 함수
function descendingSort(arr) {
    return arr.sort((a, b) => b - a);
}
```
