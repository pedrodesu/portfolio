/* @refresh reload */

import { Router } from "@solidjs/router";
import "solid-devtools";
import { render, Suspense } from "solid-js/web";
import routes from "~solid-pages";
import "./styles.css";

// biome-ignore lint/style/noNonNullAssertion: element is guaranteed to exist
const root = document.getElementById("root")!;

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
	);
}

render(
	() => (
		<Router root={(props) => <Suspense>{props.children}</Suspense>}>
			{routes}
		</Router>
	),
	root,
);
