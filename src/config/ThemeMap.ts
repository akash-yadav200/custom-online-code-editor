import { loader } from "@monaco-editor/react";

export const editorThemesMap: Record<string, string> = {
  active4d: "Active4D",
  "all-hallows-eve": "All Hallows Eve",
  amy: "Amy",
  "birds-of-paradise": "Birds of Paradise",
  blackboard: "Blackboard",
  "brilliance-black": "Brilliance Black",
  "brilliance-dull": "Brilliance Dull",
  "chrome-devtools": "Chrome DevTools",
  "clouds-midnight": "Clouds Midnight",
  clouds: "Clouds",
  cobalt: "Cobalt",
  cobalt2: "Cobalt2",
  dawn: "Dawn",
  dracula: "Dracula",
  dreamweaver: "Dreamweaver",
  eiffel: "Eiffel",
  "espresso-libre": "Espresso Libre",
  "github-dark": "GitHub Dark",
  "github-light": "GitHub Light",
  github: "GitHub",
  idle: "IDLE",
  katzenmilch: "Katzenmilch",
  "kuroir-theme": "Kuroir Theme",
  lazy: "LAZY",
  "magicwb--amiga-": "MagicWB (Amiga)",
  "merbivore-soft": "Merbivore Soft",
  merbivore: "Merbivore",
  "monokai-bright": "Monokai Bright",
  monokai: "Monokai",
  "night-owl": "Night Owl",
  nord: "Nord",
  "oceanic-next": "Oceanic Next",
  "pastels-on-dark": "Pastels on Dark",
  "slush-and-poppies": "Slush and Poppies",
  "solarized-dark": "Solarized-dark",
  "solarized-light": "Solarized-light",
  spacecadet: "SpaceCadet",
  sunburst: "Sunburst",
  "textmate--mac-classic-": "Textmate (Mac Classic)",
  "tomorrow-night-blue": "Tomorrow-Night-Blue",
  "tomorrow-night-bright": "Tomorrow-Night-Bright",
  "tomorrow-night-eighties": "Tomorrow-Night-Eighties",
  "tomorrow-night": "Tomorrow-Night",
  tomorrow: "Tomorrow",
  twilight: "Twilight",
  "upstream-sunburst": "Upstream Sunburst",
  "vibrant-ink": "Vibrant Ink",
  "xcode-default": "Xcode_default",
  zenburnesque: "Zenburnesque",
  iplastic: "iPlastic",
  idlefingers: "idleFingers",
  krtheme: "krTheme",
  monoindustrial: "monoindustrial",
};

const defineTheme = (theme: string): Promise<void> => {
  return new Promise((res, rej) => {
    if (!editorThemesMap[theme]) {
      rej(new Error(`Theme "${theme}" not found in editorThemesMap.`));
      return;
    }

    Promise.all([
      loader.init(),
      import(
        `../../node_modules/monaco-themes/themes/${editorThemesMap[theme]}.json`
      ).catch((err) => {
        rej(
          new Error(`Failed to load theme data for "${theme}": ${err.message}`)
        );
      }),
    ])
      .then(([monaco, themeData]) => {
        if (monaco && themeData) {
          monaco.editor.defineTheme(theme, themeData);
          res();
        }
      })
      .catch((err) => {
        rej(new Error(`Error initializing theme "${theme}": ${err.message}`));
      });
  });
};

export { defineTheme };
