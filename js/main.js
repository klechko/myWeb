const navTranslate = () => {
  const burger = document.querySelector('.burger');
  const menuIcon = document.querySelector('.fas')
  const navigation = document.querySelector('#navigation');
  let check = false;

  burger.addEventListener('click', () => {
    navigation.classList.toggle('nav-active');
    check = !check;
    // console.log(check);
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

document.body.addEventListener('load', navTranslate())