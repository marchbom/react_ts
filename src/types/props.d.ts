// 타입 지정
// tsconfig.app.json의 include 설정에 의해서 d.ts 폴더는 자동으로 export 처리됨
interface PrintValue {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}
