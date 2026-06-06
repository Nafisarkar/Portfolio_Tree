import { createSlice } from "@reduxjs/toolkit";
import projectsData from "../data/projects";

const projectSlice = createSlice({
	name: "projects",
	initialState: {
		items: projectsData,
		loading: false,
		error: null,
	},
	reducers: {},
});

export default projectSlice.reducer;
