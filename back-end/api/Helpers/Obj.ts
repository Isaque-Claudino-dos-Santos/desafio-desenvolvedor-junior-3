export default class Obj {
  static get<T>(target: any, path: string) {
    let accTarget = target;

    path.split(".").forEach((key) => {
      if (key in accTarget) {
        accTarget = Object.getOwnPropertyDescriptor(accTarget, key)?.value;
      }
    });

    return accTarget as T;
  }
}
