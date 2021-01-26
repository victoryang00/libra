initSidebarItems({"enum":[["BorrowState","The BorrowState denotes whether a local is `Available` or has been moved and is `Unavailable`."],["Mutability","This models the mutability of a reference"]],"struct":[["AbstractState","An AbstractState represents an abstract view of the execution of the Move VM. Rather than considering values of items on the stack or in the locals, we only consider their type, represented by a `AbstractValue` and their availibility, represented by the `BorrowState`."],["AbstractValue","This models a value on the stack or in the locals"],["CallGraph",""],["InstantiableModule","During the generation of a bytecode sequence, specific instantiations may need to be made, that may not yet exist in the underlying module. Instead of mutating the underlying module (which would require an into_inner followd by a freeze) in order to record these instantiations in the locals signature table, we instead build wrapper around the underlying module containing the type instantiations, and at the end materialize this updated signature pool into a module. We also need the ability to quickly determine if an instantiation has already been created, and if so, at which index. So this also keeps a reverse lookup table of instantiation to SignatureIndex."]]});