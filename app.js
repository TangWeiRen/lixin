function request(options) {
  const defaultOptions = {
    url: '',
    method: 'GET',
    data: {},
    timeout: 30000, // 增加超时时间到 30 秒
    success: () => {},
    fail: () => {}
  };

  const mergedOptions = { ...defaultOptions, ...options };

  wx.request({
    ...mergedOptions,
    fail(err) {
      console.error('请求失败:', err);
      if (err.errMsg.includes('request:fail timeout')) {
        console.log('请求超时，请检查网络或服务器状态。');
      }
      mergedOptions.fail(err);
    }
  });
}

App({
  onLaunch() {
    console.log('小程序启动');
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.systemInfo = systemInfo;

    // 修正 URL 拼接
    request({
      url: this.globalData.apiBaseUrl,
      success(res) {
        console.log(res.data);
      }
    });
  },

  globalData: {
    userInfo: null,
    apiBaseUrl: 'https://zuopinxy.top',
    systemInfo: {}
  }
});