// скрипт перевірки підписки користувача
// типип підписки free pro Vip 

const sub = 'pro';
const canAccessContent = sub === 'pro' || sub === 'vip';

console.log(`чи можна отримати доступ?`, canAccessContent)