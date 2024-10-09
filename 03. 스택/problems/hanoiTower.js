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

	isEmpty() {
		return this.items.length === 0;
	}
}

/** 문제
 * [하노이 타워]
 * 3개의 기둥이 있고, 첫 번째 기둥에는 n개의 원판이 쌓여 있다. 이 원판을 세 번째 기둥으로 모두 옮기려 한다.
 * 단, 한 번에 하나의 원판만 옮길 수 있다.
 * 또, 큰 원판이 작은 원판 위에 있어서는 안 된다.
 * 모든 원판이 세 번째 기둥으로 옮겨지면 성공이다. 가장 적은 횟수로 원판을 옮기는 과정을 출력하라.
 * */

function hanoiTower(원판수) {
	let start = new Stack();
	let temp = new Stack();
	let end = new Stack();

	for (let i = 원판수; i >= 1; i--) {
		start.push(i);
	}

	// 하노이타워의 필요(적은) 이동수 = 2^n-1
	let totalMoves = Math.pow(2, 원판수) - 1;

	function getPoleName(pole) {
		if (pole === start) return 'A';
		if (pole === temp) return 'B';
		if (pole === end) return 'C';
	}

	function moveDisk(from, to) {
		const disk = from.pop();
		to.push(disk);
		console.log(
			`Move disk ${disk} from ${getPoleName(from)} to ${getPoleName(to)}`
		);
	}

	for (let i = 1; i <= totalMoves; i++) {
		if (i % 3 === 1) {
			moveDiskBetweenAtoB(start, end);
		} else if (i % 3 === 2) {
			moveDiskBetweenAtoB(start, temp);
		} else if (i % 3 === 0) {
			moveDiskBetweenAtoB(temp, end);
		}
	}

	function moveDiskBetweenAtoB(A, B) {
		if (A.isEmpty()) {
			moveDisk(B, A);
		} else if (B.isEmpty()) {
			moveDisk(A, B);
		} else if (A.peek() < B.peek()) {
			moveDisk(A, B);
		} else {
			moveDisk(B, A);
		}
	}
}

hanoiTower(4);

/** 심화 학습
 * - 기둥이 k개인 경우
 * - 재귀로 풀어보기
 */
