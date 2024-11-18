export const languageOptions = [
  {
    id: 63,
    name: "JavaScript",
    label: "JavaScript",
    value: "javascript",
    template: `console.log('Hello, World!');`,
  },

  {
    id: 49,
    name: "C",
    label: "C",
    value: "c",
    template: `#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  },
  {
    id: 53,
    name: "C++",
    label: "C++",
    value: "cpp",
    template: `#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
  },
  {
    id: 51,
    name: "C#",
    label: "C#",
    value: "csharp",
    template: `using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
  },

  {
    id: 60,
    name: "Go",
    label: "Go",
    value: "go",
    template: `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}`,
  },

  {
    id: 62,
    name: "Java",
    label: "Java",
    value: "java",
    template: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  },
  {
    id: 79,
    name: "Objective-C",
    label: "Objective-C",
    value: "objectivec",
    template: `#import <Foundation/Foundation.h>
int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSLog(@"Hello, World!");
    }
    return 0;
}`,
  },
  {
    id: 65,
    name: "OCaml",
    label: "OCaml",
    value: "ocaml",
    template: `print_endline "Hello, World!"`,
  },
  {
    id: 66,
    name: "Octave",
    label: "Octave",
    value: "octave",
    template: `disp('Hello, World!')`,
  },
  {
    id: 67,
    name: "Pascal",
    label: "Pascal",
    value: "pascal",
    template: `program HelloWorld;
begin
  writeln('Hello, World!');
end.`,
  },

  {
    id: 68,
    name: "PHP",
    label: "PHP",
    value: "php",
    template: `<?php
echo "Hello, World!";
?>`,
  },
  {
    id: 43,
    label: "Plain Text",
    name: "Plain Text",
    value: "text",
    template: `Hello, World!`,
  },

  {
    id: 71,
    name: "Python",
    label: "Python",
    value: "python",
    template: `print("Hello, World!")`,
  },

  {
    id: 72,
    name: "Ruby",
    label: "Ruby",
    value: "ruby",
    template: `puts 'Hello, World!'`,
  },
  {
    id: 73,
    name: "Rust",
    label: "Rust",
    value: "rust",
    template: `fn main() {
    println!("Hello, World!");
}`,
  },

  {
    id: 82,
    name: "SQL",
    label: "SQL",
    value: "sql",
    template: `SELECT 'Hello, World!';`,
  },
  {
    id: 83,
    name: "Swift",
    label: "Swift",
    value: "swift",
    template: `print("Hello, World!")`,
  },
  {
    id: 74,
    name: "TypeScript",
    label: "TypeScript",
    value: "typescript",
    template: `console.log('Hello, World!');`,
  },
];
