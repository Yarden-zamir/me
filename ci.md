# What do current ci tools lack?
- tight integration with existing logical systems and programming languages, they usually relay heavily on shell and very basic flow control, all wrapped in structured data form. Logic is not data, control flow is not data, it should be represented in a programming language that can easily and comfortably do so. This is critical for the ability to write, understand, maintain and debug the thing.

- concurrent execution that does not relay on containers or pseudo-containers, 

- more dynamic visualization, and visualization that is not dependent on actual logic necessarily, sensible defaults sure, but ability to graph anything that's needed.

- integrated composable reporting and output, current solutions ofer artifacts and markdown but we can do more.

- first class ability to run locally

- ability to define pure function steps and then based on hashes we can avoid running the same thing  
    - maybe automatically based on inputs? That way you are forced to define your inputs

- instead of full checkout, you checkout glob pattern lists like gitignore files. The advantage is mostly for being clear about inputs

- first class IDE support for vscode

# possible approaches.


