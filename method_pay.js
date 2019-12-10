const visaCard = document.getElementsByClassName('visa-pay')[0];
const mastercardCard = document.getElementsByClassName('mastercard-pay')[0];
const amexCard = document.getElementsByClassName('amex-pay')[0];

const buttonVisa = document.getElementsByClassName('js-visa-pay')[0];
const buttonMastercard = document.getElementsByClassName('js-mastercard-pay')[0];
const buttonAmex = document.getElementsByClassName('js-amex-pay')[0];

const visaInfo = document.getElementsByClassName('js-visa-info')[0];
const mastercardInfo = document.getElementsByClassName('js-mastercard-info');
const amexInfo = document.getElementsByClassName('js-amex-info')[0];

const grayColor = 'gray';
const noneDisplay = 'none';
const blockDisplay = 'block';

const hideAllCards = () => {
  buttonVisa.style.borderColor = grayColor;
  buttonMastercard.style.borderColor = grayColor;
  buttonAmex.style.borderColor = grayColor;
  visaInfo.style.display = noneDisplay;
  mastercardInfo[0].style.display = noneDisplay;
  mastercardInfo[1].style.display = noneDisplay;
  amexInfo.style.display = noneDisplay;
}

const openVisaInfo = () => {
  hideAllCards();
  buttonVisa.style.borderColor = 'rgb(141, 122, 255)';
  visaInfo.style.display = blockDisplay;
}

const openMastercardInfo = () => {
  hideAllCards();
  buttonMastercard.style.borderColor = 'rgb(141, 122, 255)';
  mastercardInfo[0].style.display = blockDisplay;
  mastercardInfo[1].style.display = blockDisplay;
}

const openAmexInfo = () => {
  hideAllCards();
  buttonAmex.style.borderColor = 'rgb(141, 122, 255)';
  amexInfo.style.display = blockDisplay;
}
