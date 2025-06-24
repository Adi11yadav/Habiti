export function getLevel(taskCount) {
  if (taskCount >= 100) return 'Conqueror';
  if (taskCount >= 76) return 'Ace';
  if (taskCount >= 51) return 'Crown';
  if (taskCount >= 36) return 'Diamond';
  if (taskCount >= 21) return 'Platinum';
  if (taskCount >= 11) return 'Gold';
  if (taskCount >= 6) return 'Silver';
  return 'Bronze';
}
