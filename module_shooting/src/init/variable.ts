import { Boss } from "../class/Boss";
import { Character } from "../class/Player";
import { Point } from "../class/Point";

// HTML要素の取得
export const reset = document.getElementById("reset");
export const time = document.getElementById("time");
export const canvas = <HTMLCanvasElement>document.getElementById("canvas");
export const info = document.getElementById("info");

// ゲーム内の数値（定数）
export const constants = {
  playerShotMaxCount: 20,
  enemyMaxCount: 1000,
  enemyShotMaxCount: 500,
  bossBitCount: 2,
  fps: 1000 / 30,
  // 色関係
  playerColor: "rgba(159, 84, 230, 0.562)",
  playerShotColor: "rgba(218, 76, 11, 0.75)",
  enemyColor: "rgba(206, 18, 18, 0.63)",
  enemyShotColor: "rgba(14, 2, 121, 0.75)",
  bossColor: "rgba(128, 128, 128, 0.75)",
  bossBitColor: "rgba(64, 64, 64, 0.75)",
};

// インスタンス
export const UserMouse = new Point();
export const player = new Character();
export const playerShot = new Array(constants.playerShotMaxCount);
export const enemy = new Array(constants.enemyMaxCount);
export const enemyShot = new Array(constants.enemyShotMaxCount);
export const boss = new Boss();
export const bit = new Array(constants.bossBitCount);

type typeVariables = {
  run: boolean;
  fire: boolean;
  startTime: number;
  isRunning: boolean;
  timeOutId: NodeJS.Timeout;
  ctx: CanvasRenderingContext2D | null;
  p: Point;
  counter: number;
  score: number;
};

// 変数
export const variables: typeVariables = {
  run: true,
  fire: false,
  startTime: 0,
  isRunning: false,
  timeOutId: setTimeout(() => {}, 0),
  // キャンバスの二次元取得
  ctx: null,
  // 汎用座標情報インスタンス
  p: new Point(),
  // ゲームの進行度合いを表すカウンタ
  counter: 0,
  // ゲームのスコア
  score: 0,
};

type typeKeyState = {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
  fire: boolean;
};

// キーボードの状態
export const keyState: typeKeyState = {
  top: false,
  right: false,
  bottom: false,
  left: false,
  fire: false,
};
