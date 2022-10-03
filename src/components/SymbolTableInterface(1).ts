export {}
interface Position {
    line: number;
    column: number;
}

interface BasicInformation {
    uuid: string;
    name: string;
    type: string;
    position: Position;
}

interface SymbolElement extends BasicInformation {
    size: number
    value?: any;
}

interface MethodElement extends BasicInformation {
    parameters: SymbolElement[];
}


interface TableElement {
    name: string;
    inherits: string;
    table: (MethodElement | SymbolElement)[]
}

interface TableOutput {
    elements: TableElement[];
}



/**
 * This code 
 * 
 * 
 *  1|   Table Element  ->                 class Something {
 *  2|   Symbol Element ->                      a: Int <- 1;
 *  3|   Symbol Element ->                      b: Int;
 *  4|   Method Element ->                      c(x: Int, y: String): String { "" };
 *  5|                                     };
 *  6|  
 *  7|   Table Element  ->                 class SomethingElse Inherits {
 *  8|   Symbol Element ->                      d: String;
 *  9|                                     };
 *  
 * 
 * Geberates the following output:
 */



const example: TableOutput = {
    elements: [{
        name: "Something",
        inherits: "Object",
        table: [
            {
                uuid: "126f69ab-5318-47f4-b925-1c560a13de83",
                name: "a",
                type: "Int",
                position: {
                    line: 2,
                    column: 4
                },
                size: 4,
                value: 1
            },
            {
                uuid: "03318dbd-650c-4b1d-9933-7b6dc3ab27c8",
                name: "b",
                type: "Int",
                position: {
                    line: 3,
                    column: 4
                },
                size: 4,
            },
            {
                uuid: "651c9ffd-57aa-4c17-8aa8-700c65c7cf11",
                name: "c",
                type: "String",
                position: {
                    line: 4,
                    column: 4
                },
                parameters: [
                    {
                        uuid: "1ef5566c-258c-4c38-8a4b-72e04fa235cf",
                        name: "x",
                        type: "Int",
                        position: {
                            line: 4,
                            column: 6
                        },
                        size: 4,
                    },
                    {
                        uuid: "b383e80d-51ca-4274-a738-c30ff893643d",
                        name: "y",
                        type: "Int",
                        position: {
                            line: 4,
                            column: 14
                        },
                        size: 24,
                    },
                ]
            },
        ]
    },
    {
        name: "SomethingElse",
        inherits: "Something",
        table: [
            {
                uuid: "126f69ab-5318-47f4-b925-1c560a13de83",
                name: "a",
                type: "Int",
                position: {
                    line: 2,
                    column: 4
                },
                size: 4,
                value: 1
            },
            {
                uuid: "03318dbd-650c-4b1d-9933-7b6dc3ab27c8",
                name: "b",
                type: "Int",
                position: {
                    line: 3,
                    column: 4
                },
                size: 4,
            },
            {
                uuid: "651c9ffd-57aa-4c17-8aa8-700c65c7cf11",
                name: "c",
                type: "String",
                position: {
                    line: 4,
                    column: 4
                },
                parameters: [
                    {
                        uuid: "1ef5566c-258c-4c38-8a4b-72e04fa235cf",
                        name: "x",
                        type: "Int",
                        position: {
                            line: 4,
                            column: 6
                        },
                        size: 4,
                    },
                    {
                        uuid: "b383e80d-51ca-4274-a738-c30ff893643d",
                        name: "y",
                        type: "Int",
                        position: {
                            line: 4,
                            column: 14
                        },
                        size: 24,
                    },
                ]
            },
            {
                uuid: "4b218e39-b149-466f-8413-1a55415bce46",
                name: "d",
                type: "String",
                position: {
                    line: 7,
                    column: 4
                },
                size: 24
            }
        ]
    }
]
}





