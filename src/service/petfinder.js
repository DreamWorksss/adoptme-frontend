const petStatements = {
    node: [
        {
            index: "1",
            firstPart: "ce anima",
            secondPart: "",
            inputType: "Dropdown",
            values: ["1", "2", "3"],
            mapping: [
                {
                    fromValue: "1",
                    toNode: "2",
                    value: [("smth", "value"), ("smth2", "value2")],
                },
                {
                    fromValue: "2",
                    toNode: "2",
                    value: [("smth", "value"), ("smth2", "value2")],
                },
                {
                    fromValue: "3",
                    toNode: "2",
                    value: [("smth", "value"), ("smth2", "value2")],
                },
            ],
        },
        {
            index: "2",
            firstPart: "bbbb",
            secondPart: "cccc",
            inputType: "Input",
            values: null,
            mapping: [
                {
                    fromValue: "any",
                    toNode: "3",
                },
            ],
        },
        {
            index: "3",
            firstPart: "aaaa",
            secondPart: "bbbb",
            inputType: "Dropdown",
            values: ["1", "2", "3"],
            mapping: [],
        },
    ],
};

const createPetFinderHelper = function () {
    this.graph = petStatements;

    this.getNodes = () => {
        return this.graph.node;
    };

    this.getStart = () => {
        return this.graph.node[0];
    };

    this.findMappingForNode = (node, value) => {
        const result = node.mapping.filter(
            (map) => map.fromValue == value || map.fromValue == "any"
        );

        return result[0];
    };

    this.getNodeWithIndex = (index) => {
        const nodeList = this.graph.node.filter((node) => node.index == index);

        if (nodeList.lenght == 0) return undefined;

        return nodeList[0];
    };
};

const petFinderHelper = new createPetFinderHelper();

export default petFinderHelper;
