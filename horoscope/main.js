let birthMonth = 'January';
let sign = '';

if (birthMonth === 'January') {
    sign = 'Capricorn';
} else if (birthMonth === 'February') {
    sign = 'Aquarius';
} else if (birthMonth === 'March') {
    sign = 'Pisces';
} else if (birthMonth === 'April') {
    sign = 'Aries';
} else if (birthMonth === 'May') {
    sign = 'Taurus';
} else if (birthMonth === 'June') {
    sign = 'Gemini';
} else if (birthMonth === 'July') {
    sign = 'Cancer';
} else if (birthMonth === 'August') {
    sign = 'Leo';
} else if (birthMonth === 'September') {
    sign = 'Virgo';
} else if (birthMonth === 'October') {
    sign = 'Libra';
} else if (birthMonth === 'November') {
    sign = 'Scorpio';
} else if (birthMonth === 'December') {
    sign = 'Sagittarius';
} else {
    console.log('Month invalid.');
}

const fortunes = [
    'You might get lost in fantasyland today.',
    'Get out and mingle!',
    'Lucrative opportunities await!',
    'An eye-opening experience can lead to personal growth today.',
    'Do not keep avoiding that awkward convo.'
]

const randomIndex = Math.floor(Math.random() * fortunes.length);
const fortune = fortunes[randomIndex];

console.log(`Your sign is: ${sign}.`);
console.log(`Your horoscope says: ${fortune}`);
