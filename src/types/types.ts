export interface LanguageProps {
  id: number;
  name: string;
  label: string;
  value: string;
  template: string;
}
export interface ThemeProps {
  [key: string]: string;
}

export interface EditorContextType {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  seletedLanguage: LanguageProps;
  handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedTheme: string;
  handleThemeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
