const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// 그림이 그려지는 좌표 시작은 canvas의 왼쪽 상단 끝에서부터 시작한다.
// ctx.fillRect(50, 50, 100, 200); // x좌표, y좌표, width, height

ctx.rect(50, 50, 100, 100); // 그리기
ctx.rect(150, 150, 100, 100); // 그리기
ctx.rect(250, 250, 100, 100); // 그리기
ctx.fill(); // 색 칠하기

ctx.beginPath(); // 새 경로 지정
ctx.rect(350, 350, 100, 100); // 그리기
ctx.fillStyle = "red"; // 색상 red로 지정
ctx.fill();