import './styles.scss';

const TET = new Date(2023, 0, 22);

const ONE_SEC = 1000;
const ONE_MIN = 60 * ONE_SEC;
const ONE_HOUR = 60 * ONE_MIN;
const ONE_DAY = 24 * ONE_HOUR;

document.addEventListener('DOMContentLoaded', () => {
  removeQuery();

  function calculateAndSetTime() {
    let now = new Date();
    let timeDiff = TET.getTime() - now.getTime();

    let days = Math.floor(timeDiff / ONE_DAY);
    timeDiff -= days * ONE_DAY;

    let hours = Math.floor(timeDiff / ONE_HOUR);
    timeDiff -= hours * ONE_HOUR;

    let minutes = Math.floor(timeDiff / ONE_MIN);
    timeDiff -= minutes * ONE_MIN;

    let seconds = Math.floor(timeDiff / ONE_SEC);

    document.querySelector('.days span').innerHTML = to2Number(days);
    document.querySelector('.hours span').innerHTML = to2Number(hours);
    document.querySelector('.minutes span').innerHTML = to2Number(minutes);
    document.querySelector('.seconds span').innerHTML = to2Number(seconds);
  }

  function to2Number(number: number) {
    return `0${number}`.slice(-2);
  }

  setInterval(calculateAndSetTime, 1);
});

function removeQuery() {
  const urlInfo = new URL(location.href);
  history.pushState(null, null, urlInfo.pathname);
}
