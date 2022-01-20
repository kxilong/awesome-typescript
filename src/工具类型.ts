/**
 * Partial:
 *  1)将定义的属性变为可选的
 */
interface PullDownRefreshConfig {
  threshold: number;
  stop: number;
}

type PullDownRefreshOption = Partial<PullDownRefreshConfig>;

/**
 *  Required:
 *    1)把所有定义的属性变为必选
 */
type RequiredOption = Required<Partial<PullDownRefreshConfig>>;

// Required实现方式
type Reqiured<T> = {
  [P in keyof T]-?: T[P];
};

// 七、_ 数字分隔符
// 使用限制：只能在两个数字之间加入
const distanceEarthSunInKm = 149_600_000; //加了_数字分隔符并不影响数字字面量
var distanceEarthSunInKm = 149600000;
