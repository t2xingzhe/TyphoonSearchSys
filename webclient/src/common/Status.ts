// enum Color {
//   red = 1,
//     yellow = 3,
//   blue = 2,

// }

class TyphoonCircleStatus {
  // color_enum=Color
  // 最大风速
  wsm: number = 1;
  // 气压
  bp: number;

  constructor(wsm: number, bp: number) {
    this.wsm = wsm;
    this.bp = bp;
  }
  // 获取颜色（string）

  getColor(): string {
    // tslint:disable-next-line:typedef
    var color_str = "blue";
    // tslint:disable-next-line:typedef
    var val = this.wsm;
    if (val <= 2) {
      // return color_str
    } else if (val < 4) {
      color_str = "yellow";
      // return color_str
    } else if (val < 6) {
      color_str = "red";
    }
    return color_str;
  }
  // 获取圆圈的半径
  // tslint:disable-next-line:typedef
  getWeight(): number {
    // tslint:disable-next-line:typedef
    var weight = 2;
    // tslint:disable-next-line:typedef
    var val = this.wsm;
    // tslint:disable-next-line:typedef
    // tslint:disable-next-line:no-empty
    if (val <= 2) {
    } else if (val < 4) {
      weight = 5;
    } else if (val < 6) {
      weight = 8;
    } else if (val < 10) {
      weight = 10;
    } else {
      weight = 12;
    }
    return weight;
  }
  //   getBp(): { string, number } {
  //       var obj={}
  //       var val=this.bp
  //       // 判断气压
  //       if(val<)
  //   }
}

export { TyphoonCircleStatus };
