class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		if (this.items.length === 0) {
			return 'underflow';
		}
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	size() {
		return this.items.length;
	}
}

/** 문제
 * [하노이 타워]
 * 3개의 기둥이 있고, 첫 번째 기둥에는 n개의 원판이 쌓여 있다. 이 원판을 세 번째 기둥으로 모두 옮기려 한다.
 * 단, 한 번에 하나의 원판만 옮길 수 있다.
 * 또, 큰 원판이 작은 원판 위에 있어서는 안 된다.
 * 모든 원판이 세 번째 기둥으로 옮겨지면 성공이다. 가장 적은 횟수로 원판을 옮기는 과정을 출력하라.
 * */
function hanoiTower(원판수) {}
