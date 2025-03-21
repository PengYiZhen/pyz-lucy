document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const key = document.getElementById('key').value;
  const errorElement = document.getElementById('error');

  // 验证密钥是否符合要求
  if (/^[A-Za-z0-9]{8}$/.test(key)) {
    // 密钥验证通过，跳转到抽奖页面
    localStorage.setItem('authKey', key);
    window.location.href = 'index.html';
  } else {
    // 密钥验证失败，显示错误信息
    errorElement.textContent = '密钥无效，请输入8位数字和英文组成的密钥。';
  }
});