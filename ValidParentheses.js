/*Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false */

const s = "}";
const stack = [];

for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
    } else {
        if (stack.length === 0) {
            // Closing bracket with no matching opening
            console.log(false);
            return;
        }

        const last = stack[stack.length - 1];

        if (
            (char === ")" && last === "(") ||
            (char === "}" && last === "{") ||
            (char === "]" && last === "[")
        ) {
            stack.pop();
        } else {
            // Mismatch case
            console.log(false);
            return;
        }
    }
}

// If stack is empty, it's valid
console.log(stack.length === 0);



