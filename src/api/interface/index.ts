// ** 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
    verticode: string;
  }
  export interface ResLogin {
    access_token: string;
  }
}
// export namespace Login {
//   export interface ReqLoginForm {
//     username: string;
//     password: string;
//   }
//   export interface ResLogin {
//     id: number;
//     username: string;
//     home: string;
//     [key: string]: any;
//   }
// }
