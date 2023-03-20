export function formatTimezoneOffset(timezoneOffset) {
  const now = new Date();
  now.setMinutes(now.getUTCMinutes() + timezoneOffset / 60);
  return now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}