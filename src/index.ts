// import { isNumber } from "@zrcode/jstool"
// import { isNumber } from "get-zrtool/dist/js/main.js"
import { createLocalStorage } from "./package/storage";
console.log(createLocalStorage);
const { set } = createLocalStorage<{
  name: string;
  list: Array<number>;
}>();
set("name", "zhangsan");
