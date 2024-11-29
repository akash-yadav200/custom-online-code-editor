# **Online Code Editor**

An online platform for writing, editing, and executing code in multiple programming languages. The editor provides a seamless coding experience with the help of **Monaco Editor** and uses **Judg0** for code execution.

---

## **Features**

- **Code Editing**: Supports syntax highlighting, autocompletion, and other advanced features using Monaco Editor.
- **Code Execution**: Execute code in multiple programming languages via the Judg0 API.
- **Real-Time Feedback**: View execution results, errors, or outputs instantly.
- **Language Support**: Execute code in various popular programming languages like Python, JavaScript, Java, C++, and more.
- **Responsive Interface**: Designed for both desktop and mobile devices.

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Access to the [Judg0 API](https://rapidapi.com/judge0-official/api/judge0-ce) (API key required)

---

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Install dependencies**:
     ```bash
     npm install
3. **Set up environment variables**:
    Create a .env file in the root directory.
    Add the required variables
    ```env
    VITE_RAPID_API_URL=<Judg0-API-URL>
    VITE_RAPID_API_HOST=<Judg0-API-HOST>
    VITE_RAPID_API_KEY=<Your-Judg0-API-Key>



## Usage


 - Open the editor in your browser.
 - Select the programming language from the dropdown menu.
 - Write your code in the editor powered by Monaco Editor.
 - Click the Execute Code button to execute your code using Judg0.
 - View the output or error messages in the result section.



## Built With

- **Monaco Editor**: For a robust code editing experience.
- **Judg0**: For executing and compiling code online.
- **React.js**: For building the user interface.
- **Node.js**: For backend (if applicable).
- **REST APIs**: For integrating Judg0's code execution features.


## License
This project is licensed under the MIT License.

## Acknowledgments

Monaco Editor for the code editing experience.

Judg0 for the code execution API.

Open-source libraries and tools that made this project possible.
