<script setup>
import petFinderHelper from "@/service/petfinder";
import { computed } from "vue";
import { toRaw } from "vue";
import { ref } from "vue";

const start = petFinderHelper.getStart();

const listOfNodes = ref([start]);
const isFinal = computed(() => {
    return listOfNodes.value.length === petFinderHelper.getNodes().length;
});

const onModelChangeDropdown = (node, index, value) => {
    if (index === petFinderHelper.getNodes().length - 1) return;

    var mapping = petFinderHelper.findMappingForNode(node, value);
    var nextNode = petFinderHelper.getNodeWithIndex(mapping.toNode);

    listOfNodes.value.splice(index + 1, listOfNodes.value.length);
    listOfNodes.value.push(nextNode);
};

const shouldSkipUpdateOnInput = (index, nextNode) => {
    if (index + 1 > listOfNodes.value.length - 1) return false;

    const nextFromList = toRaw(listOfNodes.value[index + 1]);

    return nextFromList === nextNode;
};

const onModelChangeInputField = (node, index, value) => {
    if (index === petFinderHelper.getNodes().length - 1) return;

    const mapping = petFinderHelper.findMappingForNode(node, value);
    const nextNode = petFinderHelper.getNodeWithIndex(mapping.toNode);

    if (value === "") {
        listOfNodes.value.splice(index + 1, listOfNodes.value.length);
    } else {
        if (shouldSkipUpdateOnInput(index, nextNode)) return;

        console.log(value);

        listOfNodes.value.splice(index + 1, listOfNodes.value.length);
        listOfNodes.value.push(nextNode);
    }
};
</script>

<template>
    <v-container>
        <v-row justify="center">
            <v-col
                cols="9"
                v-for="(node, index) in listOfNodes"
                :key="node.index"
            >
                <div class="d-flex justify-start align-end">
                    <span> </span>
                    {{ node.firstPart }}
                    <div class="w-25 px-2">
                        <v-select
                            v-if="node.inputType == 'Dropdown'"
                            label=""
                            hide-details
                            :items="node.values"
                            variant="underlined"
                            v-on:update:model-value="
                                (value) =>
                                    onModelChangeDropdown(node, index, value)
                            "
                        ></v-select>
                        <v-text-field
                            v-else
                            variant="underlined"
                            label=""
                            hide-details
                            v-on:update:model-value="
                                (value) =>
                                    onModelChangeInputField(node, index, value)
                            "
                        ></v-text-field>
                    </div>

                    {{ node.secondPart }}
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style></style>
