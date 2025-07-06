function registerUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('회원가입 정보');
  console.log('이름:', name);
  console.log('이메일:', email);
  console.log('비밀번호:', password);

  const valid = email.includes('@') && email.includes('.');
  if (!valid) {
    alert('이메일 형식이 올바르지 않습니다.');
  } else {
    alert(`${name}님, 가입이 완료되었습니다!`);
  }
}

function checkEmail(email) {
  return email.includes('@') && email.includes('.');
}

const button = document.getElementById('signup-btn');
button.addEventListener('click', registerUser);