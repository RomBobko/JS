// скрипт який провіряє можливість відкрити чат з користувачем

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log( `чи можна відкрити чат?`, canOpenChat);