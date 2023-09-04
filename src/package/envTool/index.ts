/**
 * 判断是否为微信环境
 * @returns boolean
 */
export function isWeChatBrowser(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return /(micromessenger|miniprogram)/i.test(userAgent);
}

/**
 * 判断是否为浏览器环境
 * @returns boolean
 */
export function isAndroid(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes("android");
}

/**
 * 判断是否为IOS环境
 * @returns boolean
 */
export function isIOS(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return /(iphone|ipad|ipod|mac|ios)/i.test(userAgent) && !isIPad();
}

/**
 * 判断是否为PC
 * @returns boolean
 */
export function isPc(): boolean {
  const plat = navigator.platform;
  const win = plat.indexOf("Win") == 0;
  const mac = plat.indexOf("Mac") == 0;
  if (win || mac) {
    return true;
  } else {
    return false;
  }
}

/**
 * 判断是否为IPad
 * @returns boolean
 */
export function isIPad(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes("ipad");
}

/**
 * 判断是否为IPhone
 * @returns boolean
 */
export function isIPhone(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes("iphone");
}

/**
 * 判断是否为Mac
 * @returns boolean
 */
export function isMacintosh(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes("macintosh");
}

/**
 * 判断是否为sWindows
 * @returns boolean
 */
export function isWindows(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes("windows");
}

/**
 * 获取当前浏览器语言和语言列表
 * @returns string, readonly string[]
 */
export function currentLanguage(): [string, readonly string[]] {
  return [navigator.language, navigator.languages];
}

/**
 * 解析url地址query参数
 * @returns string
 */
export function urlParamsMap(url: string = location.href): any {
  const params: any = {};
  console.log(url);
  try {
    if (url.split("?")) {
      const items = url.split("?")[1].split("&");
      for (let i = 0; i < items.length; i++) {
        const item = items[i].split("=");
        params[item[0]] = item[1] as string;
      }
    }
  } catch (e) {}
  return params;
}

export default {
  isWeChatBrowser,
  isAndroid,
  isIOS,
  isPc,
  isIPad,
  currentLanguage,
  urlParamsMap,
};
