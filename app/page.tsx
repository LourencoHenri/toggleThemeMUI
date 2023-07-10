"use client";

import { Box, IconButton, Typography } from "@mui/material";

import { useContext } from "react";
import { ColorModeContext } from "./providers";

import Brightness4Icon from "@mui/icons-material/Brightness4";

import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Home() {
	const { toggleColorMode, colorMode } = useContext(ColorModeContext);

	return (
		<Box
			sx={(theme) => ({
				display: "flex",
				height: "100vh",
				justifyContent: "center",
				alignItems: "center",
				gap: theme.spacing(1),
			})}
		>
			<Typography variant="h5">
				{colorMode.charAt(0).toUpperCase() + colorMode.slice(1)} mode
			</Typography>

			<IconButton onClick={toggleColorMode}>
				{colorMode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
			</IconButton>
		</Box>
	);
}
