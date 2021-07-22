# PSL Parsers and Linters

This directory contains documentation concerning the tokenization, parsing and
linting of PSL code.

## Terminology

The following subsections contain some of the terminology that is used in these
documents.

### Lexical Analysis

[Lexical analysis][lexing] is the process of taking an input string of
characters, and break it down in tokens. These tokens are strings with a
particular name and meaning. Consider the following piece of PSL code:

```text
type Integer myInt = 1 + 2
```

How this string is broken down in tokens, depends on the implementation of a
tokenizer or a lexer. A particular tokenizer could generate the following
tokens from this string:

Token name | Value
---------- | -----
Keyword | type
Type | Integer
Identifier | myInt
Operator | =
Literal | 1
Operator | +
Literal | 2

### Parsing

[Parsing][parsing] is the process of taking and analyzing an input string of
characters, which is performed by a piece of software called a parser. A parser
is generally used together with the tokenizer. The tokenizer breaks down the
strings in tokens, and the parser uses the tokens to generate a parse tree, or
an [abstract syntax tree][ast] (AST).

Consider the following snippet:

```java
a = (1 + 2) * 3
```

The AST for such a statement would be:

![AST for `a = (1 + 2) * 3`](./ast1.png)

Removing the parentheses will result in a slightly different AST:

![AST for `a = 1 + 2 * 3`](./ast2.png)

### Linting

[Linting][linting] is the process of static code analysis. A linter can take
source code, and point out potential problems and errors in the source code.

Linters can either work with regular expression, however, more complex linters
can use ASTs to determine if problems occur.

[lexing]: https://en.wikipedia.org/wiki/Lexical_analysis
[parsing]: https://en.wikipedia.org/wiki/Parsing
[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree
[linting]: https://en.wikipedia.org/wiki/Lint_(software)


<!-- Notes
Nice site to exlore AST: https://astexplorer.net/ Would be nice to have the PSL
one as well. Although the app is a bit buggy when dealing with Java
(to complex?)
-->
