const visaCard = document.getElementsByClassName('visa-pay')[0];
const mastercardCard = document.getElementsByClassName('mastercard-pay')[0];
const amexCard = document.getElementsByClassName('amex-pay')[0];

const buttonVisa = document.getElementsByClassName('visa-pay')[0];
const buttonMastercard = document.getElementsByClassName('mastercard-pay')[0];
const buttonAmex = document.getElementsByClassName('amex-pay')[0];

const visaInfo = document.getElementsByClassName('js-visa-info')[0];
const mastercardInfo = document.getElementsByClassName('js-mastercard-info');
const amexInfo = document.getElementsByClassName('js-amex-info')[0];

const hideAllCards = () => {
  buttonVisa.style.borderColor = 'gray';
  buttonMastercard.style.borderColor = 'gray';
  buttonAmex.style.borderColor = 'gray';
  visaInfo.style.display = 'none';
  mastercardInfo[0].style.display = 'none';
  mastercardInfo[1].style.display = 'none';
  amexInfo.style.display = 'none';
}

const openVisaInfo = () => {
  hideAllCards();
  buttonVisa.style.borderColor = 'rgb(141, 122, 255)';
  visaInfo.style.display = 'block';
}

const openMastercardInfo = () => {
  hideAllCards();
  buttonMastercard.style.borderColor = 'rgb(141, 122, 255)';
  mastercardInfo[0].style.display = 'block';
  mastercardInfo[1].style.display = 'block';
}

const openAmexInfo = () => {
  hideAllCards();
  buttonAmex.style.borderColor = 'rgb(141, 122, 255)';
  amexInfo.style.display = 'block';
}
