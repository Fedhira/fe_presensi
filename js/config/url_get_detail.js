//Mendapatkan parameter dari URL

const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlFetch = 'https://fedhirasyaila.herokuapp.com/presensi' + presensiId;