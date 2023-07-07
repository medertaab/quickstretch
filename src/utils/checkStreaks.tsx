
import { ALL_STRETCHES } from "../data/ALL_STRETCHES";

function checkStreak(mode : string) {
  const today = new Date().toLocaleDateString();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = yesterdayDate.toLocaleDateString();

  const latestDate = localStorage.getItem(`${mode}-latest`);

  if (latestDate && (latestDate !== today && latestDate !== yesterday)) {
    localStorage.setItem(`${mode}-streak`, "0");
  }
}

export default function checkAllStreks() {
  const modes = Object.keys(ALL_STRETCHES)
  modes.forEach(mode => checkStreak(mode))
}