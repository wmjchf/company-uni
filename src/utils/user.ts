type IGetSetting = (
  options: Omit<UniApp.GetSettingOptions, "success" | "complete" | "fail">
) => Promise<UniApp.GetSettingSuccessResult>;
export const getSetting: IGetSetting = (options) => {
  return new Promise((resovle, reject) => {
    uni.getSetting({
      ...options,
      success: (result) => {
        resovle(result);
      },
      fail: (error) => {
        reject(error);
      },
      complete: (date) => {
        resovle(date);
      },
    });
  });
};

type IGetUserInfo = (
  options: Omit<UniApp.GetUserInfoOptions, "success" | "complete" | "fail">
) => Promise<UniApp.GetUserInfoRes>;
export const getUserInfo: IGetUserInfo = (options) => {
  return new Promise((resovle, reject) => {
    uni.getUserInfo({
      ...options,
      success: (result) => {
        resovle(result);
      },
      fail: (error) => {
        reject(error);
      },
      complete: (date) => {
        resovle(date);
      },
    });
  });
};

type IGetWXUserInfo = (
  options: Omit<UniApp.GetUserProfileOptions, "success" | "complete" | "fail">
) => Promise<UniApp.GetUserProfileRes>;
export const getWXUserInfo: IGetWXUserInfo = (options) => {
  return new Promise((resovle, reject) => {
    uni.getUserProfile({
      ...options,
      success: (result) => {
        resovle(result);
      },
      fail: (error) => {
        reject(error);
      },
      complete: (date) => {
        resovle(date);
      },
    });
  });
};
