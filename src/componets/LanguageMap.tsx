const languageMap = {
  javascript: {
    name: "JavaScript",
    value: "console.log('Hello, world!')",
  },
  typescript: {
    name: "TypeScript",
    value: "console.log('Hello, world!')",
  },
  python: {
    name: "Python",
    value: "print('Hello, world!')",
  },
  c: {
    name: "C",
    value: `#include <stdio.h>\n\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n}`,
  },
  cpp: {
    name: "C++",
    value: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, world!" << std::endl;\n    return 0;\n}`,
  },
  java: {
    name: "Java",
    value: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}`,
  },
  html: {
    name: "HTML",
    value: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Hello World</title>\n</head>\n<body>\n    <h1>Hello, world!</h1>\n</body>\n</html>`,
  },
  css: {
    name: "CSS",
    value: `body {\n    font-family: Arial, sans-serif;\n    color: #333;\n    text-align: center;\n    margin-top: 20%;\n}\n\nh1 {\n    font-size: 2.5rem;\n}`,
  },
  json: {
    name: "JSON",
    value: `{\n    "message": "Hello, world!"\n}`,
  },
  markdown: {
    name: "Markdown",
    value: `# Hello, world!`,
  },
};

export default languageMap;
