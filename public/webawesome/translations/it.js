import "../chunks/chunk.RBKXYBVR.js";

// src/translations/it.ts
import { registerTranslation } from "@shoelace-style/localize";
var translation = {
  $code: "it",
  $name: "Italiano",
  $dir: "ltr",
  carousel: "Carosello",
  clearEntry: "Cancella inserimento",
  close: "Chiudi",
  copied: "Copiato",
  copy: "Copia",
  currentValue: "Valore attuale",
  error: "Errore",
  goToSlide: (slide, count) => `Vai alla diapositiva ${slide} di ${count}`,
  hidePassword: "Nascondi password",
  loading: "In caricamento",
  nextSlide: "Prossima diapositiva",
  numOptionsSelected: (num) => {
    if (num === 0) return "Nessuna opzione selezionata";
    if (num === 1) return "1 opzione selezionata";
    return `${num} opzioni selezionate`;
  },
  pauseAnimation: "Metti in pausa animazione",
  playAnimation: "Riproduci animazione",
  previousSlide: "Diapositiva precedente",
  progress: "Avanzamento",
  remove: "Rimuovi",
  resize: "Ridimensiona",
  scrollableRegion: "Area scorrevole",
  scrollToEnd: "Scorri alla fine",
  scrollToStart: "Scorri all'inizio",
  selectAColorFromTheScreen: "Seleziona un colore dalla schermo",
  showPassword: "Mostra password",
  slideNum: (slide) => `Diapositiva ${slide}`,
  toggleColorFormat: "Cambia formato colore",
  zoomIn: "Ingrandire",
  zoomOut: "Rimpicciolire"
};
registerTranslation(translation);
var it_default = translation;
export {
  it_default as default
};
