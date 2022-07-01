import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getContent
} from "./fetcherSlice";
import styles from "./Fetcher.module.css";

export function Fetcher() {
	// const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [state, setState] = useState({ link: "", path: "" });

	return (
		<div>
			<div className={styles.row}>
				{state.link}
				<br />
				<input
					onChange={(e) => {
						setState({ ...state, link: e.target.value });
					}}
				></input>
				<input
					onChange={(e) => {
						setState({ ...state, link: e.target.path });
					}}
				></input>
				<button
					className={styles.button}
					aria-label=""
					onClick={() => dispatch(getContent())}
				>Fetch</button>
			</div>
		</div>
	);
}
