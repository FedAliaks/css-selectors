export type JSONType = 'yes' | 'no' | 'help';

export default class LocalStorage {
  static jsonFile: JSONType[];

  constructor(arr: JSONType[] | null) {
    if (arr) {
      LocalStorage.jsonFile = arr;
    } else {
      LocalStorage.jsonFile = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
    }
  }

  static getJSONFile() {
    return LocalStorage.jsonFile;
  }

  static setJSONFile(key: number, value: JSONType) {
    LocalStorage.jsonFile[key] = value;
  }
}
