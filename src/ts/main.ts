import BunnyEvolution from "./BunnyEvolution";
window.onload = (e) => {
  window["sim"] = new BunnyEvolution("#simulationCanvas", 10);
};
