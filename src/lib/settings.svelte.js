import { setSyntheticLeadingComments } from "typescript";

export const appSettings = $state({
    // there should be NO defaults for these but using these for now just for testing
    timelineUnit: "Arcs",
    timelineUnitCount: 24,
    //selected arc should always default to null unless an arc has been clicked. 
    selectedArc: null,
});