export function handleStreak(mode : string, isFullyCompleted : boolean) {
  const today = new Date().toLocaleDateString()
  const yesterdayDate = new Date()
  yesterdayDate.setDate(yesterdayDate.getDate() - 1)
  const yesterday = yesterdayDate.toLocaleDateString()

  const latestDate = localStorage.getItem(`${mode}-latest`);
  const previousDate = localStorage.getItem(`${mode}-previous`);

  if (!isFullyCompleted) {
    // If user previously completed the set today or yesterday
    if (latestDate && latestDate !== today && latestDate !== yesterday) {
      localStorage.setItem(`${mode}-streak`, "0")
    }
    return
  }
  
  // If user completed a set, but already completed before today
  if (latestDate === today) {
    return;
  }
  
  // If last completed set was yesterday
  if (latestDate === yesterday || !previousDate) {
    const oldStreak = localStorage.getItem(`${mode}-streak`);
    const newStreak = Number(oldStreak) + 1;
    localStorage.setItem(`${mode}-streak`, String(newStreak));
    
    const maxStreak = Number(localStorage.getItem(`${mode}-maxstreak`));
    if (newStreak > maxStreak) {
      localStorage.setItem(`${mode}-maxstreak`, String(newStreak));
    }
  // If last completed set was not yesterday - break streak
  } else {
    localStorage.setItem(`${mode}-streak`, "1");
  }
  
  // Update data for future reference
  localStorage.setItem(`${mode}-previous`, latestDate || "");
  localStorage.setItem(`${mode}-latest`, today);
}

export function shareText(title : string, setShareButtonText : any) {
  const text = `I just completed a ${title} set on http://quickstretch.com`;
  navigator.clipboard.writeText(text);
  setShareButtonText("Copied to clipboard!");
  setTimeout(() => {
    setShareButtonText("Share");
  }, 1500);
}