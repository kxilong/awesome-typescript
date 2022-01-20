import { SetDifference } from "./mapped-types";
/**
 * $Call：返回函数返回值类型
 */
export type $Call<Fn extends (...args: any[]) => any> = Fn extends (
  args: any
) => infer RT
  ? RT
  : never;

const add = (amount: number) => ({ type: "ADD" as "ADD", payload: amount });
type AddAction = $Call<typeof add>;

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

export type $Diff<T extends U, U extends object> = Pick<T, SetDifference<T, U>>;

type RequiredProps = $Diff<Props, DefaultProps>;
