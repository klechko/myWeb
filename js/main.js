const navTranslate = () => {
  const burger = document.querySelector('.burger');
  const menuIcon = document.querySelector('.fas')
  const navigation = document.querySelector('#navigation');
  let check = false;

  burger.addEventListener('click', () => {
    navigation.classList.toggle('nav-active');
    check = !check;
    if(check) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    }
    else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });
}

const themeChanger = () => {
  const lightBulb = document.querySelector('.fa-lightbulb');

  const currentTheme = localStorage.getItem('theme');

  if(currentTheme === 'light') document.body.classList.toggle('light-theme');

  lightBulb.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    let theme = 'dark';
    if(document.body.classList.contains('light-theme')) theme = 'light';
    localStorage.setItem('theme', theme);
  })
}

document.body.addEventListener('load', navTranslate())

document.body.addEventListener('load', themeChanger())
